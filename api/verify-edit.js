// Lightweight password check used only to unlock the on-page editor UI. The
// real secret stays server-side (EDIT_PASSWORD env var) — this never returns
// it, only ok:true/false. /api/save re-checks the password itself on every
// save, so this endpoint being bypassed doesn't grant write access.
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }
  let payload = req.body;
  if (typeof payload === "string") {
    try { payload = JSON.parse(payload); } catch (err) { payload = {}; }
  }
  payload = payload || {};
  const expected = process.env.EDIT_PASSWORD;
  const ok = !!expected && payload.password === expected;
  res.status(200).json({ ok });
};
