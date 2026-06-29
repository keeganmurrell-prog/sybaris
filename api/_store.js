// Shared read/write helpers for the saved overrides, backed by Vercel Blob.
// One JSON blob holds both image and text overrides, mirroring the shape of
// the local _image-overrides.json / _content-overrides.json pair.
const { put, head } = require("@vercel/blob");

const BLOB_PATH = "sybaris-content/state.json";

// Uploaded/pasted images arrive as huge data: URLs. Storing those inline in
// the overrides JSON would mean every visitor's page load re-downloads every
// uploaded photo's full base64 just to read image positions — so decode and
// store each one as its own blob file instead, keeping only the URL.
async function storeUploadedImage(slot, dataUrl) {
  const m = /^data:image\/([\w.+-]+);base64,(.*)$/s.exec(dataUrl);
  if (!m) return dataUrl;
  const ext = /^jpe?g$/i.test(m[1]) ? "jpg" : m[1].toLowerCase();
  const safeSlot = String(slot).replace(/[^A-Za-z0-9_-]/g, "_");
  const buffer = Buffer.from(m[2], "base64");
  const blob = await put(`sybaris-content/uploads/edit-${safeSlot}.${ext}`, buffer, {
    access: "public",
    contentType: `image/${ext === "jpg" ? "jpeg" : ext}`,
    allowOverwrite: true,
  });
  return blob.url;
}

async function readState() {
  try {
    const info = await head(BLOB_PATH);
    const res = await fetch(info.url, { cache: "no-store" });
    if (!res.ok) return { images: {}, text: {} };
    return await res.json();
  } catch (err) {
    // No blob saved yet (first run) or not configured — treat as empty state.
    return { images: {}, text: {} };
  }
}

async function writeState(state) {
  await put(BLOB_PATH, JSON.stringify(state), {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
  });
}

module.exports = { readState, writeState, storeUploadedImage };
