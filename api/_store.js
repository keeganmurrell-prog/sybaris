// Shared read/write helpers for the saved overrides, backed by Vercel Blob.
// One JSON blob holds both image and text overrides, mirroring the shape of
// the local _image-overrides.json / _content-overrides.json pair.
const { put, head } = require("@vercel/blob");

const BLOB_PATH = "sybaris-content/state.json";

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

module.exports = { readState, writeState };
