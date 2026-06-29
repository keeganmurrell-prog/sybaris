// Serves the currently-saved image/text overrides from Vercel Blob.
// Public (no password) — every visitor needs to see the live, edited site.
// Mapped via vercel.json so the existing client fetch('_image-overrides.json')
// and fetch('_content-overrides.json') calls keep working unchanged.
const { readState } = require("./_store");

module.exports = async (req, res) => {
  const type = (req.query && req.query.type) || "images";
  const state = await readState();
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(type === "text" ? (state.text || {}) : (state.images || {}));
};
