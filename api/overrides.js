// Serves the currently-saved image/text overrides from Vercel Blob.
// Public (no password) — every visitor needs to see the live, edited site.
// Mapped via vercel.json so the existing client fetch('_image-overrides.json')
// and fetch('_content-overrides.json') calls keep working unchanged.
const { readState, writeState, storeUploadedImage } = require("./_store");

// One-time self-heal: an earlier version of /api/save stored uploaded photos
// as inline data: URLs instead of separate blob files, bloating this
// response to several MB. Migrate any such entries the first time they're
// seen, so it self-corrects without anyone needing to re-save manually.
async function migrateInlineUploads(state) {
  let changed = false;
  const images = state.images || {};
  for (const slot of Object.keys(images)) {
    const st = images[slot];
    if (st && typeof st.src === "string" && st.src.startsWith("data:")) {
      st.src = await storeUploadedImage(slot, st.src);
      changed = true;
    }
  }
  if (changed) await writeState(state);
  return state;
}

module.exports = async (req, res) => {
  const type = (req.query && req.query.type) || "images";
  let state = await readState();
  try {
    state = await migrateInlineUploads(state);
  } catch (err) {
    // If migration fails for any reason, still serve what we have rather
    // than breaking the page load.
  }
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(type === "text" ? (state.text || {}) : (state.images || {}));
};
