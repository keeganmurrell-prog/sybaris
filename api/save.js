// Persists image/text overrides to Vercel Blob — this is the real security
// boundary. The password is checked here, server-side, against an environment
// variable (EDIT_PASSWORD) that is never shipped to the client. The on-page
// password prompt is only a UX convenience; this check is what actually
// protects the live site, and it runs on every save regardless of what the
// client believes its own unlock state is.
const { readState, writeState, storeUploadedImage, processProject } = require("./_store");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try { payload = JSON.parse(payload); } catch (err) { payload = {}; }
  }
  payload = payload || {};

  const expected = process.env.EDIT_PASSWORD;
  if (!expected) {
    return res.status(500).json({ ok: false, error: "Editing isn't configured on this deployment — set the EDIT_PASSWORD environment variable in Vercel." });
  }
  if (payload.password !== expected) {
    return res.status(401).json({ ok: false, error: "Incorrect password" });
  }

  const edits = (payload.edits && typeof payload.edits === "object") ? payload.edits : {};
  const textEdits = (payload.textEdits && typeof payload.textEdits === "object") ? payload.textEdits : {};
  const hasProjects = Array.isArray(payload.projects);

  try {
    const current = await readState();

    const images = Object.assign({}, current.images);
    for (const slot of Object.keys(edits)) {
      const st = edits[slot];
      if (st && typeof st === "object") {
        let src = st.src || null;
        if (typeof src === "string" && src.startsWith("data:")) {
          src = await storeUploadedImage(slot, src);
        }
        images[slot] = { src: src, x: st.x, y: st.y };
      }
    }

    const text = Object.assign({}, current.text);
    for (const key of Object.keys(textEdits)) {
      const val = textEdits[key];
      if (typeof val === "string") text[key] = val;
    }

    // Projects: decode any uploaded photos to files and normalise. Only touch
    // the stored list when the client actually sent one.
    let projects = Array.isArray(current.projects) ? current.projects : [];
    if (hasProjects) {
      const out = [];
      for (let i = 0; i < payload.projects.length; i++) {
        out.push(await processProject(payload.projects[i], i));
      }
      projects = out;
    }

    await writeState({ images, text, projects });

    res.status(200).json({
      ok: true,
      saved: Object.keys(edits).length,
      savedText: Object.keys(textEdits).length,
      savedProjects: hasProjects ? projects.length : undefined,
      projects: hasProjects ? projects : undefined,
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Storage error: " + (err && err.message) });
  }
};
