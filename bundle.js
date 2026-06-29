
/* ===== _ds_bundle.js (design system components) ===== */
/* @ds-bundle: {"format":3,"namespace":"SybarisDesignSystem_c8b90c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ImageSlot","sourcePath":"components/media/ImageSlot.jsx"},{"name":"ImageEditToggle","sourcePath":"components/media/ImageSlot.jsx"},{"name":"ImageLibrary","sourcePath":"components/media/ImageSlot.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Divider","sourcePath":"components/surfaces/Divider.jsx"},{"name":"Overline","sourcePath":"components/surfaces/Overline.jsx"},{"name":"ProjectCard","sourcePath":"components/surfaces/ProjectCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"5a7634b43480","components/core/IconButton.jsx":"f4c3e17a0a2a","components/core/Tag.jsx":"0234d88b9d6c","components/forms/Input.jsx":"d01944ff43c5","components/forms/Textarea.jsx":"df9c8832b923","components/media/ImageSlot.jsx":"a9bd5930226f","components/surfaces/Card.jsx":"98a05bcef562","components/surfaces/Divider.jsx":"13768e912b99","components/surfaces/Overline.jsx":"bdcf436a8839","components/surfaces/ProjectCard.jsx":"e89c408aa77d","ui_kits/website/ExtraScreens.jsx":"1d47d780c5b8","ui_kits/website/Footer.jsx":"39ab67780b71","ui_kits/website/GalleryScreen.jsx":"a92d8ebd562c","ui_kits/website/Header.jsx":"062da9347e77","ui_kits/website/HomeScreen.jsx":"acbb4df8d529","ui_kits/website/ProjectScreen.jsx":"cd9d2809e6cd","ui_kits/website/data.js":"9590812ab51d","ui_kits/website/icons.jsx":"e64ab30a8a1c","ui_kits/website/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[{"name":"useImageEditMode","sourcePath":"components/media/ImageSlot.jsx"},{"name":"useImageLibrary","sourcePath":"components/media/ImageSlot.jsx"}]} */

(() => {

const __ds_ns = (window.SybarisDesignSystem_c8b90c = window.SybarisDesignSystem_c8b90c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Button — squared, quietly luxurious. Labels are uppercase and
 * letter-spaced (echoing the wordmark) for solid/outline; the text variant
 * reads as an editorial link with an underline-on-hover.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  href,
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '9px 18px',
      font: 'var(--text-xs)',
      track: '0.16em',
      gap: '8px'
    },
    md: {
      padding: '13px 26px',
      font: 'var(--text-sm)',
      track: '0.16em',
      gap: '10px'
    },
    lg: {
      padding: '17px 36px',
      font: 'var(--text-base)',
      track: '0.18em',
      gap: '12px'
    }
  };
  const sz = sizes[size] || sizes.md;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    padding: variant === 'text' ? '4px 0' : sz.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sz.font,
    fontWeight: 500,
    letterSpacing: sz.track,
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-xs)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    boxSizing: 'border-box'
  };
  const variants = {
    solid: {
      background: active ? '#000' : hover ? 'var(--ink-700)' : 'var(--ink-900)',
      color: 'var(--cream-50)',
      borderColor: 'transparent'
    },
    accent: {
      background: active ? 'var(--brass-700)' : hover ? 'var(--brass-700)' : 'var(--brass-500)',
      color: 'var(--cream-50)',
      borderColor: 'transparent'
    },
    outline: {
      background: hover ? 'var(--ink-900)' : 'transparent',
      color: hover ? 'var(--cream-50)' : 'var(--ink-900)',
      borderColor: 'var(--ink-900)'
    },
    text: {
      background: 'transparent',
      color: hover ? 'var(--brass-700)' : 'var(--text-strong)',
      borderRadius: 0,
      borderBottom: `1px solid ${hover ? 'var(--brass-700)' : 'var(--line)'}`,
      paddingLeft: 0,
      paddingRight: 0
    }
  };
  const styles = {
    ...base,
    ...(variants[variant] || variants.solid),
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: styles
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: styles,
    disabled: disabled
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris IconButton — a square, hairline-bordered control for single icons
 * (menu, close, chevrons, social). Pass a Lucide icon node as children.
 */
function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  href,
  ariaLabel,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  const variants = {
    outline: {
      background: hover ? 'var(--ink-900)' : 'transparent',
      color: hover ? 'var(--cream-50)' : 'var(--ink-900)',
      border: '1px solid var(--ink-900)'
    },
    soft: {
      background: hover ? 'var(--cream-300)' : 'var(--cream-200)',
      color: 'var(--ink-900)',
      border: '1px solid var(--line)'
    },
    ghost: {
      background: hover ? 'var(--cream-200)' : 'transparent',
      color: 'var(--ink-900)',
      border: '1px solid transparent'
    },
    inverse: {
      background: hover ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.08)',
      color: 'var(--cream-50)',
      border: '1px solid var(--border-inverse)'
    }
  };
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dims,
    height: dims,
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
    boxSizing: 'border-box',
    ...(variants[variant] || variants.outline),
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      "aria-label": ariaLabel,
      style: styles
    }, handlers, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    style: styles,
    disabled: disabled
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Tag — small uppercase, letter-spaced label for project categories,
 * materials and filters. Subtle by default; supports a selectable state.
 */
function Tag({
  children,
  variant = 'line',
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  const variants = {
    line: {
      background: selected ? 'var(--ink-900)' : hover && interactive ? 'var(--cream-200)' : 'transparent',
      color: selected ? 'var(--cream-50)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--ink-900)' : 'var(--line)'}`
    },
    solid: {
      background: 'var(--cream-200)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    brass: {
      background: 'transparent',
      color: 'var(--brass-700)',
      border: '1px solid var(--brass-500)'
    }
  };
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 13px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-2xs)',
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...(variants[variant] || variants.line),
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: styles
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Input — a refined text field. Underline style by default (editorial),
 * or a bordered box. Labels are wide-tracked uppercase overlines.
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  variant = 'underline',
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const boxBase = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-base)',
    color: 'var(--text-strong)',
    background: 'transparent',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color var(--dur-fast) var(--ease-out)'
  };
  const variants = {
    underline: {
      ...boxBase,
      border: 0,
      borderBottom: `1px solid ${focus ? 'var(--ink-900)' : 'var(--line)'}`,
      borderRadius: 0,
      padding: '10px 0'
    },
    box: {
      ...boxBase,
      border: `1px solid ${focus ? 'var(--ink-900)' : 'var(--line)'}`,
      borderRadius: 'var(--radius-xs)',
      padding: '13px 14px',
      background: 'var(--white)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: variants[variant] || variants.underline
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Textarea — multi-line field matching Input. Used for enquiry /
 * commission forms.
 */
function Textarea({
  label,
  placeholder,
  value,
  defaultValue,
  rows = 4,
  variant = 'box',
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const variants = {
    box: {
      border: `1px solid ${focus ? 'var(--ink-900)' : 'var(--line)'}`,
      borderRadius: 'var(--radius-xs)',
      padding: '13px 14px',
      background: 'var(--white)'
    },
    underline: {
      border: 0,
      borderBottom: `1px solid ${focus ? 'var(--ink-900)' : 'var(--line)'}`,
      borderRadius: 0,
      padding: '10px 0',
      background: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.6,
      color: 'var(--text-strong)',
      outline: 'none',
      resize: 'vertical',
      boxSizing: 'border-box',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...(variants[variant] || variants.box)
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageSlot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STORE_PREFIX = 'sybaris:img:';

/* ------------------------------------------------------------------ *
 * Global "edit images" mode — a tiny shared store so a single toggle
 * flips every ImageSlot on the page between browse and edit. Lives on
 * window so it survives the design-system bundle's isolated scope.
 * ------------------------------------------------------------------ */
const EditStore = (() => {
  if (typeof window === 'undefined') return null;
  if (window.__sybImgEdit) return window.__sybImgEdit;
  const s = {
    on: false,
    subs: new Set(),
    set(v) {
      s.on = !!v;
      s.subs.forEach(f => f(s.on));
    },
    toggle() {
      s.set(!s.on);
    },
    subscribe(f) {
      s.subs.add(f);
      return () => s.subs.delete(f);
    }
  };
  window.__sybImgEdit = s;
  return s;
})();

/** Subscribe a component to the global edit-images mode. */
function useImageEditMode() {
  const [on, setOn] = React.useState(EditStore ? EditStore.on : false);
  React.useEffect(() => EditStore ? EditStore.subscribe(setOn) : undefined, []);
  return on;
}

/* ------------------------------------------------------------------ *
 * Image library store — a shared picker drawer. A slot calls openFor(id)
 * to target itself; clicking a thumbnail dispatches the chosen src back
 * to that slot. No native file dialog involved, so it works everywhere.
 * ------------------------------------------------------------------ */
const LibStore = (() => {
  if (typeof window === 'undefined') return null;
  if (window.__sybImgLib) return window.__sybImgLib;
  const s = {
    open: false,
    target: null,
    subs: new Set(),
    openFor(id) {
      s.target = id;
      s.open = true;
      s.emit();
    },
    close() {
      s.open = false;
      s.target = null;
      s.emit();
    },
    assign(src) {
      if (s.target) window.dispatchEvent(new CustomEvent('syb-img-assign', {
        detail: {
          id: s.target,
          src
        }
      }));
      s.close();
    },
    emit() {
      s.subs.forEach(f => f());
    },
    subscribe(f) {
      s.subs.add(f);
      return () => s.subs.delete(f);
    }
  };
  window.__sybImgLib = s;
  return s;
})();

/* Drawer animation keyframes (injected once) */
if (typeof document !== 'undefined' && !document.getElementById('syb-imglib-anim')) {
  const st = document.createElement('style');
  st.id = 'syb-imglib-anim';
  st.textContent = '@keyframes sybLibFade{from{opacity:0}to{opacity:1}}@keyframes sybLibSlide{from{transform:translateX(24px)}to{transform:translateX(0)}}';
  document.head.appendChild(st);
}

/** Subscribe a component to the image-library drawer store. */
function useImageLibrary() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LibStore ? LibStore.subscribe(force) : undefined, []);
  return LibStore;
}
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

// Re-encode an oversized data URL down to a storage-friendly size. Resolves to a
// smaller JPEG data URL (or rejects, in which case callers keep the original).
function shrinkDataUrl(dataUrl, maxPx, quality) {
  return new Promise((resolve, reject) => {
    if (!dataUrl || dataUrl.lastIndexOf('data:', 0) !== 0) {
      resolve(dataUrl);
      return;
    }
    const img = new Image();
    img.onload = () => {
      let w = img.naturalWidth || img.width;
      let h = img.naturalHeight || img.height;
      if (!w || !h) {
        reject(new Error('no dims'));
        return;
      }
      const scale = Math.min(1, maxPx / Math.max(w, h));
      w = Math.round(w * scale);
      h = Math.round(h * scale);
      try {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(c.toDataURL('image/jpeg', quality));
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}
function loadState(key) {
  if (!key) return {
    src: null,
    x: 50,
    y: 50
  };
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return {
      src: null,
      x: 50,
      y: 50
    };
    if (raw[0] === '{') {
      const o = JSON.parse(raw);
      return {
        src: o.src || null,
        x: typeof o.x === 'number' ? o.x : 50,
        y: typeof o.y === 'number' ? o.y : 50
      };
    }
    // legacy: bare data URL
    return {
      src: raw,
      x: 50,
      y: 50
    };
  } catch (e) {
    return {
      src: null,
      x: 50,
      y: 50
    };
  }
}

/**
 * Sybaris ImageSlot — a drag-and-drop image frame. Shows `src` by default. When
 * the global "Edit images" mode is on it becomes interactive: drag a photo from
 * the desktop onto it (or click) to swap the image in, and drag the image itself
 * to reposition it within the frame. Both the chosen image and its framing
 * persist to localStorage under `id`. Fills its parent — size it from outside.
 */
function ImageSlot({
  id,
  src,
  alt = '',
  objectFit = 'cover',
  editable = true,
  imgStyle,
  style,
  onChange,
  ...rest
}) {
  const key = id ? STORE_PREFIX + id : null;
  const editMode = useImageEditMode();
  const interactive = editable && editMode;
  // Read any saved override synchronously on first render (not in an effect)
  // so the very first paint already shows it — otherwise the default `src`
  // flashes for a frame before swapping to the saved photo.
  const [dataUrl, setDataUrl] = React.useState(() => loadState(key).src);
  const [pos, setPos] = React.useState(() => {
    const st = loadState(key);
    return { x: st.x, y: st.y };
  });
  const [over, setOver] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const inputRef = React.useRef(null);
  const dragRef = React.useRef(null);
  const dataUrlRef = React.useRef(null);
  const posRef = React.useRef({
    x: 50,
    y: 50
  });

  // Load any persisted state for this id
  React.useEffect(() => {
    const st = loadState(key);
    dataUrlRef.current = st.src;
    posRef.current = {
      x: st.x,
      y: st.y
    };
    setDataUrl(st.src);
    setPos({
      x: st.x,
      y: st.y
    });
    // Migrate any oversized stored upload down to a storage-friendly size so it
    // stops hogging quota and blocking future saves.
    if (key && st.src && st.src.lastIndexOf('data:', 0) === 0 && st.src.length > 700000) {
      shrinkDataUrl(st.src, 1600, 0.82).then(small => {
        if (small && small.length < st.src.length) {
          dataUrlRef.current = small;
          setDataUrl(small);
          try {
            window.localStorage.setItem(key, JSON.stringify({
              src: small,
              x: posRef.current.x,
              y: posRef.current.y
            }));
          } catch (e) {/* quota */}
        }
      }).catch(() => {/* keep original */});
    }
  }, [key]);
  React.useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  // Receive a pick from the library drawer
  React.useEffect(() => {
    const h = e => {
      if (e.detail && e.detail.id === id) applySrc(e.detail.src);
    };
    window.addEventListener('syb-img-assign', h);
    return () => window.removeEventListener('syb-img-assign', h);
  }, [id]);
  const persist = () => {
    if (!key) return;
    try {
      const st = {
        src: dataUrlRef.current,
        x: posRef.current.x,
        y: posRef.current.y
      };
      if (!st.src && st.x === 50 && st.y === 50) window.localStorage.removeItem(key);else window.localStorage.setItem(key, JSON.stringify(st));
    } catch (e) {/* quota */}
  };
  const current = dataUrl || src;
  const customised = !!dataUrl || pos.x !== 50 || pos.y !== 50;
  const openLibrary = () => {
    if (window.__sybImgLib) window.__sybImgLib.openFor(id);
  };
  const pillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(26,25,22,0.82)',
    color: 'var(--cream-50)',
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '7px 13px',
    borderRadius: 'var(--radius-pill)',
    backdropFilter: 'blur(2px)'
  };
  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    height: 32,
    background: 'rgba(26,25,22,0.92)',
    color: 'var(--cream-50)',
    border: 0,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '0 13px'
  };
  const applySrc = newSrc => {
    dataUrlRef.current = newSrc;
    posRef.current = {
      x: 50,
      y: 50
    };
    setDataUrl(newSrc);
    setPos({
      x: 50,
      y: 50
    });
    persist();
    if (onChange) onChange(newSrc);
  };
  const accept = file => {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) return;
    const reader = new FileReader();
    reader.onload = () => {
      // Downscale before storing — full-res uploads blow the localStorage quota
      // and then silently fail to persist (lost on refresh).
      shrinkDataUrl(reader.result, 1600, 0.82).then(small => applySrc(small && small.length < reader.result.length ? small : reader.result)).catch(() => applySrc(reader.result));
    };
    reader.readAsDataURL(file);
  };
  const reset = e => {
    if (e) e.stopPropagation();
    dataUrlRef.current = null;
    posRef.current = {
      x: 50,
      y: 50
    };
    setDataUrl(null);
    setPos({
      x: 50,
      y: 50
    });
    if (key) {
      try {
        window.localStorage.removeItem(key);
      } catch (e2) {/* ignore */}
    }
    if (onChange) onChange(null);
  };

  /* ---- pointer: drag-to-pan, click-to-replace ---- */
  const onPointerDown = e => {
    if (!interactive) return;
    const el = e.currentTarget;
    if (el.setPointerCapture) {
      try {
        el.setPointerCapture(e.pointerId);
      } catch (er) {/* ignore */}
    }
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      lastX: e.clientX,
      lastY: e.clientY,
      moved: false,
      rect: el.getBoundingClientRect()
    };
    setDragging(true);
  };
  const onPointerMove = e => {
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.lastX;
    const dy = e.clientY - d.lastY;
    if (!d.moved && Math.hypot(e.clientX - d.startX, e.clientY - d.startY) > 6) d.moved = true;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    if (d.moved && current) {
      setPos(p => ({
        x: clamp(p.x - dx / d.rect.width * 100, 0, 100),
        y: clamp(p.y - dy / d.rect.height * 100, 0, 100)
      }));
    }
  };
  const onPointerUp = () => {
    const d = dragRef.current;
    dragRef.current = null;
    setDragging(false);
    if (!d) return;
    if (d.moved) persist();else openLibrary();
  };
  const handlers = interactive ? {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
    },
    onDragOver: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragEnter: e => {
      e.preventDefault();
      setOver(true);
    },
    onDragLeave: e => {
      if (e.currentTarget === e.target) setOver(false);
    },
    onDrop: e => {
      e.preventDefault();
      setOver(false);
      const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      accept(file);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setOver(false);
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({}, handlers, {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--cream-200)',
      cursor: interactive ? dragging ? 'grabbing' : 'grab' : 'default',
      touchAction: interactive ? 'none' : undefined,
      zIndex: interactive ? 20 : undefined,
      ...style
    }
  }, rest), current ? /*#__PURE__*/React.createElement("img", {
    src: current,
    alt: alt,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit,
      objectPosition: `${pos.x}% ${pos.y}%`,
      display: 'block',
      userSelect: 'none',
      WebkitUserDrag: 'none',
      ...imgStyle
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(ImgGlyph, null), "Drop image"), interactive && (over || hover || dragging) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      border: `1.5px ${over ? 'solid' : 'dashed'} ${over ? 'var(--brass-500)' : 'rgba(255,255,255,0.9)'}`,
      background: over ? 'rgba(154,123,79,0.18)' : 'transparent',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 14,
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, !dragging && /*#__PURE__*/React.createElement("span", {
    style: pillStyle
  }, over ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImgGlyph, {
    size: 14,
    color: "currentColor"
  }), " Release to place") : current ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MoveGlyph, null), " Drag to reposition \xB7 click to change") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImgGlyph, {
    size: 14,
    color: "currentColor"
  }), " Click to choose a photo"))), interactive && (hover || over) && !dragging && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      display: 'flex',
      gap: 8,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onPointerDown: e => e.stopPropagation(),
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
      openLibrary();
    },
    style: btnStyle
  }, /*#__PURE__*/React.createElement(ImgGlyph, {
    size: 14,
    color: "currentColor"
  }), " ", current ? 'Change' : 'Choose'), customised && /*#__PURE__*/React.createElement("button", {
    type: "button",
    title: "Reset to original",
    onPointerDown: e => e.stopPropagation(),
    onClick: e => {
      e.stopPropagation();
      reset(e);
    },
    style: {
      ...btnStyle,
      width: 32,
      padding: 0,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ResetGlyph, null))), interactive && !hover && !over && !dragging && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      pointerEvents: 'none',
      padding: '5px 10px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(26,25,22,0.7)',
      color: 'var(--cream-50)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(MoveGlyph, {
    size: 13
  }), " Edit"));
}

/**
 * Floating control that flips every ImageSlot on the page into / out of edit
 * mode. Drop one anywhere; it's fixed to the bottom-right by default.
 */
function ImageEditToggle({
  style
}) {
  const on = useImageEditMode();
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => EditStore && EditStore.toggle(),
    style: {
      position: 'fixed',
      right: 22,
      bottom: 22,
      zIndex: 1000,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '11px 18px',
      borderRadius: 'var(--radius-pill)',
      border: on ? '1px solid var(--brass-500)' : '1px solid rgba(255,255,255,0.16)',
      background: on ? 'var(--brass-500)' : 'rgba(26,25,22,0.92)',
      color: on ? 'var(--ink-900)' : 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(20,16,10,0.28)',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, on ? /*#__PURE__*/React.createElement(CheckGlyph, null) : /*#__PURE__*/React.createElement(MoveGlyph, {
    color: "currentColor",
    size: 15
  }), on ? 'Done editing' : 'Edit images');
}

/**
 * Image library drawer. Render once near the root. When a slot is clicked it
 * slides in showing `groups` of thumbnails; clicking one assigns it to that
 * slot. Also supports dropping a photo onto the drawer or pasting one (Cmd/Ctrl
 * + V). `groups` is an array of { label, items: string[] } where items are URLs.
 */
function ImageLibrary({
  groups = []
}) {
  const lib = useImageLibrary();
  const open = !!(lib && lib.open);
  const [dropOver, setDropOver] = React.useState(false);
  React.useEffect(() => {
    if (!open) return undefined;
    const onPaste = e => {
      const items = e.clipboardData && e.clipboardData.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it.type && it.type.indexOf('image/') === 0) {
          const f = it.getAsFile();
          const r = new FileReader();
          r.onload = () => lib.assign(r.result);
          r.readAsDataURL(f);
          e.preventDefault();
          break;
        }
      }
    };
    const onKey = e => {
      if (e.key === 'Escape') lib.close();
    };
    window.addEventListener('paste', onPaste);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, lib]);
  if (!open) return null;
  const onFile = file => {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) return;
    const r = new FileReader();
    r.onload = () => lib.assign(r.result);
    r.readAsDataURL(file);
  };
  const labelCss = {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    margin: '0 0 12px'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => lib.close(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(20,16,10,0.5)',
      display: 'flex',
      justifyContent: 'flex-end',
      animation: 'sybLibFade var(--dur-fast, 160ms) var(--ease-out, ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    onDragOver: e => {
      e.preventDefault();
      setDropOver(true);
    },
    onDragLeave: e => {
      if (e.currentTarget === e.target) setDropOver(false);
    },
    onDrop: e => {
      e.preventDefault();
      setDropOver(false);
      onFile(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]);
    },
    style: {
      width: 'min(460px, 94vw)',
      height: '100%',
      background: 'var(--cream-50)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-24px 0 70px rgba(20,16,10,0.34)',
      animation: 'sybLibSlide var(--dur, 240ms) var(--ease-out, cubic-bezier(.2,.7,.2,1))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 24px 18px',
      borderBottom: '1px solid var(--line-soft, rgba(0,0,0,0.08))'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--brass-500)'
    }
  }, "Choose a photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--text-strong)',
      marginTop: 4
    }
  }, "Image library")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => lib.close(),
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--line, rgba(0,0,0,0.12))',
      background: 'transparent',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CloseGlyph, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: '1px solid var(--line-soft, rgba(0,0,0,0.08))'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      padding: '9px 15px'
    }
  }, /*#__PURE__*/React.createElement(UploadGlyph, null), " Upload", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
      pointerEvents: 'none'
    },
    onChange: e => {
      onFile(e.target.files && e.target.files[0]);
      e.target.value = '';
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "or drag a file here \xB7 paste with ", navIsMac() ? '\u2318V' : 'Ctrl+V')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 24px 40px',
      position: 'relative'
    }
  }, dropOver && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 8,
      border: '2px dashed var(--brass-500)',
      borderRadius: 'var(--radius-sm, 8px)',
      background: 'rgba(154,123,79,0.1)',
      pointerEvents: 'none',
      zIndex: 2
    }
  }), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: labelCss
  }, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10
    }
  }, g.items.map(url => /*#__PURE__*/React.createElement("button", {
    key: url,
    type: "button",
    onClick: () => lib.assign(url),
    title: "Use this photo",
    style: {
      padding: 0,
      border: 0,
      cursor: 'pointer',
      borderRadius: 'var(--radius-xs, 4px)',
      overflow: 'hidden',
      aspectRatio: '1 / 1',
      background: 'var(--cream-200)',
      outline: '1px solid var(--line-soft, rgba(0,0,0,0.08))',
      outlineOffset: -1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: "",
    loading: "lazy",
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))))))));
}
function navIsMac() {
  try {
    return /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  } catch (e) {
    return false;
  }
}

/* Inline glyphs (kept local so the component is self-contained) */
function ImgGlyph({
  size = 22,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-4.5-4.5L3 21"
  }));
}
function MoveGlyph({
  size = 14,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 9 2 12l3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"
  }));
}
function ResetGlyph({
  size = 15,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }));
}
function CheckGlyph({
  size = 15,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
}
function UploadGlyph({
  size = 15,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"
  }));
}
function CloseGlyph({
  size = 17,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }));
}
Object.assign(__ds_scope, { useImageEditMode, useImageLibrary, ImageSlot, ImageEditToggle, ImageLibrary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageSlot.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Card — a quiet content surface. Mostly used as a hairline-bordered
 * panel on cream; lifts gently on hover when interactive.
 */
function Card({
  children,
  tone = 'paper',
  bordered = true,
  hoverable = false,
  padding = 'var(--space-8)',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: {
      background: 'var(--white)',
      color: 'var(--text-body)'
    },
    sand: {
      background: 'var(--cream-200)',
      color: 'var(--text-body)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)'
    }
  };
  const Wrapper = href ? 'a' : 'div';
  const interactive = hoverable || !!href || !!onClick;
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      padding,
      borderRadius: 'var(--radius-sm)',
      border: bordered ? `1px solid ${tone === 'ink' ? 'var(--border-inverse)' : 'var(--line-soft)'}` : '1px solid transparent',
      boxShadow: interactive && hover ? 'var(--shadow-card)' : 'none',
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Divider — a thin warm hairline. Horizontal by default; `label`
 * renders a centred overline between two rules (e.g. "EST. ·").
 */
function Divider({
  label,
  tone = 'rule',
  vertical = false,
  style,
  ...rest
}) {
  const color = tone === 'soft' ? 'var(--line-soft)' : tone === 'inverse' ? 'var(--border-inverse)' : 'var(--line)';
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-block',
        width: 1,
        alignSelf: 'stretch',
        background: color,
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 500,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: 1,
      background: color,
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Divider.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Overline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris Overline — the wide-tracked uppercase eyebrow used above headings,
 * optionally with a short brass rule. A signature brand motif.
 */
function Overline({
  children,
  rule = false,
  tone = 'muted',
  align = 'left',
  style,
  ...rest
}) {
  const color = {
    muted: 'var(--text-muted)',
    brass: 'var(--brass-700)',
    inverse: 'var(--text-inverse-mut)'
  }[tone] || 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--brass-500)'
    }
  }), children);
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Overline.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sybaris ProjectCard — the signature image-led card. A photograph that scales
 * subtly on hover within a fixed frame, with a quiet caption block below
 * (overline + serif title + optional location/materials).
 */
function ProjectCard({
  image,
  title,
  location,
  category,
  ratio = '4 / 5',
  href,
  onClick,
  slotId,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Wrapper = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      cursor: href || onClick ? 'pointer' : 'default',
      textDecoration: 'none',
      color: 'inherit',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--cream-200)',
      borderRadius: 'var(--radius-xs)'
    }
  }, slotId ? /*#__PURE__*/React.createElement(__ds_scope.ImageSlot, {
    id: slotId,
    src: image,
    alt: title || '',
    imgStyle: {
      transform: hover ? 'scale(1.045)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.045)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '18px'
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Overline, {
    style: {
      marginBottom: '10px'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-lg)',
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), location && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: '6px'
    }
  }, location)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ExtraScreens.jsx
try { (() => {
/* Sybaris website — Craft & Contact screens. Exposes window.CraftScreen, window.ContactScreen */
const IMG_E = '../../assets/gallery/';
function CraftScreen({
  onNav
}) {
  const {
    Overline,
    Button,
    Divider,
    ImageSlot
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const steps = [['01', 'Design', 'We begin in your home, then draw the kitchen around how you live — proportion, light, and the way you move through the room.'], ['02', 'Make', 'Cabinetry is built to order in our workshop: solid timber, dovetailed boxes, hand-applied finishes. Nothing is flat-packed.'], ['03', 'Install', 'Our own team fits every kitchen, scribing each piece to the building and finishing on site to the millimetre.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'calc(var(--section-y) * 0.7) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, "Our Craft"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(34px,5vw,66px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '16ch'
    }
  }, "From conversation to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, "completed kitchen.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 44
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--brass-500)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line)',
      margin: '18px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      height: 'min(58vh,520px)',
      minHeight: 360,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "craft-feature",
    src: IMG_E + 'vogel-01.jpg',
    style: {
      position: 'absolute',
      inset: 0
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-200)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,3.4vw,46px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Begin your commission."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Arrange a consultation")))));
}
window.CraftScreen = CraftScreen;
function ContactScreen() {
  const {
    Overline,
    Input,
    Textarea,
    Button
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'calc(var(--section-y) * 0.7) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(40px,6vw,90px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(34px,4.4vw,58px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Start a conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: 22,
      maxWidth: '44ch'
    }
  }, "Tell us a little about your home and what you have in mind. We'll be in touch to arrange a visit to the workshop."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-soft)',
      margin: '34px 0'
    }
  }), [['map-pin', 'The Workshop, Knysna, Western Cape'], ['mail', 'hello@sybaris.co.za'], ['phone', '+27 44 000 0000']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: ic,
    size: 18,
    color: "var(--brass-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-sm)',
      padding: 'clamp(26px,3vw,40px)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "check",
    size: 30,
    color: "var(--brass-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      color: 'var(--text-strong)',
      margin: '16px 0 8px'
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "We'll be in touch shortly.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Appleton"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Location",
    placeholder: "Town or suburb"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "About your project",
    rows: 4,
    placeholder: "A few words on what you have in mind\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send enquiry"))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ExtraScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Sybaris website — Footer. Exposes window.Footer */
function Footer({
  onNav
}) {
  const {
    Input,
    Button,
    Divider
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-mut)'
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    onClick: () => l.route && onNav(l.route),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--cream-200)',
      opacity: 0.82
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.82
  }, l.label)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: '76px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.3fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/sybaris-logo-white.png",
    alt: "Sybaris",
    style: {
      height: 30,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cream-200)',
      opacity: 0.82,
      maxWidth: 320
    }
  }, "Bespoke kitchens, furniture and interior joinery \u2014 designed, built and finished by hand in our Garden Route workshop.")), col('Explore', [{
    label: 'Bespoke Kitchens',
    route: 'home'
  }, {
    label: 'Gallery',
    route: 'gallery'
  }, {
    label: 'Our Craft',
    route: 'craft'
  }, {
    label: 'Contact',
    route: 'contact'
  }]), col('Studio', [{
    label: 'Knysna, Western Cape'
  }, {
    label: 'Mon–Fri · 8am–5pm'
  }, {
    label: 'hello@sybaris.co.za'
  }, {
    label: '+27 44 000 0000'
  }]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-mut)',
      marginBottom: 16
    }
  }, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--cream-200)',
      opacity: 0.82,
      marginBottom: 16
    }
  }, "Occasional notes from the workshop \u2014 new commissions and craft."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Email address",
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid var(--border-inverse)',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '9px 0',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Join")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-inverse)',
      margin: '46px 0 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.06em',
      color: 'var(--text-inverse-mut)'
    }
  }, "\xA9 2026 Sybaris Kitchens & Interiors. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, ['Instagram', 'Facebook', 'Pinterest'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--cream-200)',
      opacity: 0.75
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.75
  }, n))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GalleryScreen.jsx
try { (() => {
/* Sybaris website — Gallery screen. Exposes window.GalleryScreen */
const IMG_G = '../../assets/gallery/';
function GalleryScreen({
  onProject
}) {
  const {
    Overline,
    Tag,
    ProjectCard
  } = window.SybarisDesignSystem_c8b90c;
  const projects = window.SYBARIS_PROJECTS;
  const [filter, setFilter] = React.useState('All');
  const FILTERS = ['All', 'Shaker', 'In-frame', 'Contemporary', 'Bespoke'];
  const matches = p => {
    if (filter === 'All') return true;
    const hay = (p.category + ' ' + p.materials.join(' ')).toLowerCase();
    return hay.includes(filter.toLowerCase());
  };
  const shown = projects.filter(matches);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'calc(var(--section-y) * 0.7) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, "The Gallery"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,68px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '14ch'
    }
  }, "Every kitchen we've made."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: 22,
      maxWidth: '54ch'
    }
  }, "A record of completed commissions across the Garden Route \u2014 from classic shaker to contemporary bespoke. Select a project to see it in full."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      margin: '40px 0 8px'
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, shown.length, " ", shown.length === 1 ? 'project' : 'projects')), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-soft)',
      marginTop: 16
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '46px var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '34px 30px'
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    image: IMG_G + p.hero,
    slotId: `gallery-${p.slug}`,
    category: p.category,
    title: p.name,
    location: `${p.location} · ${p.year}`,
    ratio: "4 / 5",
    onClick: () => onProject(p.slug)
  })))));
}
window.GalleryScreen = GalleryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GalleryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Sybaris website — Header / top navigation. Exposes window.Header */
const NAV = [{
  label: 'Our Work',
  route: 'home'
}, {
  label: 'Gallery',
  route: 'gallery'
}, {
  label: 'Our Craft',
  route: 'craft'
}, {
  label: 'Contact',
  route: 'contact'
}];
function Header({
  route,
  onNav,
  overlay = false
}) {
  const {
    Button
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const scroller = document.getElementById('kit-scroll');
    if (!scroller) return;
    const onScroll = () => setScrolled(scroller.scrollTop > 40);
    scroller.addEventListener('scroll', onScroll);
    onScroll();
    return () => scroller.removeEventListener('scroll', onScroll);
  }, [route]);
  const solid = !overlay || scrolled;
  const ink = solid ? 'var(--ink-900)' : 'var(--cream-50)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter)',
      height: 78,
      background: solid ? 'rgba(246,242,234,0.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(120%) blur(8px)' : 'none',
      borderBottom: solid ? '1px solid var(--line-soft)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: solid ? '../../assets/logos/sybaris-logo-black.png' : '../../assets/logos/sybaris-logo-white.png',
    alt: "Sybaris",
    style: {
      height: 26,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 38
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.route,
    onClick: () => onNav(n.route),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: ink,
      opacity: route === n.route ? 1 : 0.78,
      borderBottom: route === n.route ? `1px solid ${ink}` : '1px solid transparent',
      paddingBottom: 3,
      transition: 'opacity var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = route === n.route ? 1 : 0.78
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    variant: solid ? 'solid' : 'outline',
    size: "sm",
    style: !solid ? {
      color: 'var(--cream-50)',
      borderColor: 'var(--cream-50)'
    } : undefined,
    onClick: () => onNav('contact')
  }, "Enquire")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* Sybaris website — Home screen. Exposes window.HomeScreen */
const IMG = '../../assets/gallery/';
function HomeScreen({
  onNav,
  onProject
}) {
  const {
    Button,
    Overline,
    ProjectCard,
    Divider,
    ImageSlot
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const projects = window.SYBARIS_PROJECTS;
  const featured = projects.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(88vh, 760px)',
      minHeight: 540,
      overflow: 'hidden',
      marginTop: -78
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "home-hero",
    src: IMG + 'thompson-01.jpg',
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(20,16,10,0.42) 0%, rgba(20,16,10,0.10) 36%, rgba(20,16,10,0.30) 78%, rgba(20,16,10,0.62) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 var(--gutter) 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: 22,
      color: 'var(--cream-100)'
    }
  }, "Bespoke Kitchens & Interiors"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px, 6vw, 82px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, "Made by hand,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, "made to last.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(16px,1.4vw,19px)',
      lineHeight: 1.6,
      color: 'var(--cream-100)',
      opacity: 0.92,
      maxWidth: 540,
      marginTop: 24
    }
  }, "Considered cabinetry and joinery for homes of character \u2014 designed, built and finished in our Garden Route workshop."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('gallery')
  }, "View the gallery"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'var(--cream-50)'
    },
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16,
      color: "currentColor"
    })
  }, "Begin a commission"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'clamp(40px, 6vw, 96px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 24
    }
  }, "Our Craft"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,50px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Every kitchen begins", /*#__PURE__*/React.createElement("br", null), "with a conversation."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginTop: 24,
      maxInlineSize: '52ch'
    }
  }, "We are a small studio of cabinetmakers and designers. Each commission is drawn around the way you live, then made to order in solid timber, stone and forged metal \u2014 and fitted by the hands that built it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => onNav('craft'),
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16
    })
  }, "The Sybaris process"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "home-statement",
    src: IMG + 'miller-01.jpg'
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: '54px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, [['15+', 'Years of commissions'], ['100%', 'Hand-built to order'], ['1', 'Workshop, start to finish']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(38px,4vw,58px)',
      lineHeight: 1,
      color: 'var(--brass-300)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-mut)',
      marginTop: 14
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48,
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 18
    }
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,3.2vw,44px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Recent kitchens")), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => onNav('gallery'),
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16
    })
  }, "View all projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    image: IMG + p.hero,
    slotId: `home-feat-${p.slug}`,
    category: p.category,
    title: p.name,
    location: p.location,
    onClick: () => onProject(p.slug)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(60vh, 540px)',
      minHeight: 380,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "home-quote",
    src: IMG + 'metelerkamp-01.jpg',
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,16,10,0.46)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: 'clamp(26px,3.4vw,44px)',
      lineHeight: 1.22,
      letterSpacing: '-0.01em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, "\u201CWe don't make kitchens to be looked at. We make them to be lived in \u2014 for decades.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--cream-200)',
      opacity: 0.85,
      marginTop: 28
    }
  }, "The Sybaris Workshop")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-200)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    align: "center",
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22,
      justifyContent: 'center'
    }
  }, "Begin"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,52px)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Let's design your kitchen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '20px auto 0',
      maxWidth: '46ch'
    }
  }, "Tell us a little about your home and how you live. We'll arrange a conversation and a visit to the workshop."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Arrange a consultation")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectScreen.jsx
try { (() => {
/* Sybaris website — Project detail screen. Exposes window.ProjectScreen */
const IMG = '../../assets/gallery/';
function ProjectScreen({
  slug,
  onNav,
  onProject
}) {
  const {
    Overline,
    Tag,
    Button,
    Divider,
    ImageSlot
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const projects = window.SYBARIS_PROJECTS;
  const idx = Math.max(0, projects.findIndex(p => p.slug === slug));
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  React.useEffect(() => {
    const s = document.getElementById('kit-scroll');
    if (s) s.scrollTo({
      top: 0
    });
  }, [slug]);

  // Spread images into an editorial layout
  const imgs = p.images;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(76vh, 640px)',
      minHeight: 460,
      overflow: 'hidden',
      marginTop: -78
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-hero`,
    src: IMG + p.hero,
    alt: p.name,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(20,16,10,0.34) 0%, rgba(20,16,10,0.05) 40%, rgba(20,16,10,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 var(--gutter) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('gallery'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cream-100)',
      marginBottom: 22,
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "arrow-left",
    size: 15,
    color: "currentColor"
  }), " Back to gallery"), /*#__PURE__*/React.createElement(Overline, {
    tone: "inverse",
    style: {
      marginBottom: 14,
      color: 'var(--cream-200)'
    }
  }, p.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,72px)',
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, p.name)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'clamp(36px,5vw,80px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      rowGap: 16,
      columnGap: 28
    }
  }, [['Location', p.location], ['Completed', p.year], ['Discipline', p.category]].map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      paddingTop: 3
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-soft)',
      margin: '28px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, p.materials.map(m => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    variant: "line"
  }, m)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, "About the kitchen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(24px,2.6vw,34px)',
      lineHeight: 1.28,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, p.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginTop: 24
    }
  }, "Designed, built and installed by the Sybaris workshop. Every component \u2014 from the dovetailed drawer boxes to the hand-finished surfaces \u2014 is made to order and fitted by the team that built it.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-img-0`,
    src: IMG + imgs[0]
  })), imgs.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: imgs.length > 2 ? '1fr 1fr' : '1fr 1fr',
      gap: 30
    }
  }, imgs.slice(1, 3).map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-img-${i + 1}`,
    src: IMG + src
  })))), imgs[3] && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-img-3`,
    src: IMG + imgs[3]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    tone: "inverse",
    style: {
      marginBottom: 16
    }
  }, "Next project"), /*#__PURE__*/React.createElement("h2", {
    onClick: () => onProject(next.slug),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,52px)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, next.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-inverse-mut)',
      marginTop: 12
    }
  }, next.location, " \xB7 ", next.category)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onProject(next.slug),
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16,
      color: "currentColor"
    })
  }, "View project"))));
}
window.ProjectScreen = ProjectScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Sybaris — sample project data for the website UI kit.
   Locations are plausible Garden Route / Cape towns; copy is illustrative. */
window.SYBARIS_PROJECTS = [{
  slug: 'van-der-hoff',
  name: 'House van der Hoff',
  location: 'Oubaai',
  year: '2023',
  category: 'In-frame oak',
  materials: ['In-frame', 'Natural oak', 'Honed marble', 'Brass'],
  blurb: 'A coastal family kitchen in natural oak and honed marble, anchored by a deep navy range wall and warmed by polished brass.',
  hero: 'nyman-01.jpg',
  images: ['nyman-01.jpg', 'nyman-02.jpg', 'everson-01.jpg', 'everson-02.jpg']
}, {
  slug: 'blakemore',
  name: 'Blakemore Residence',
  location: 'Leisure Isle',
  year: '2023',
  category: 'Shaker · oak',
  materials: ['Shaker', 'Limed oak', 'Marble', 'Forged hood'],
  blurb: 'Quiet limed-oak cabinetry beneath a hand-forged extractor hood — a calm, light-filled room for everyday cooking.',
  hero: 'blakemore-01.jpg',
  images: ['blakemore-01.jpg', 'blakemore-02.jpg']
}, {
  slug: 'everson',
  name: 'Everson Kitchen',
  location: 'Knysna',
  year: '2022',
  category: 'Classic shaker',
  materials: ['Shaker', 'Navy & cream', 'Marble', 'Nickel'],
  blurb: 'A two-tone shaker kitchen — cream above, deep navy below — with a generous island for family life.',
  hero: 'everson-01.jpg',
  images: ['everson-01.jpg', 'everson-02.jpg']
}, {
  slug: 'nyman',
  name: 'Nyman House',
  location: 'Plettenberg Bay',
  year: '2023',
  category: 'In-frame',
  materials: ['In-frame', 'Navy & oak', 'Quartz', 'Polished nickel'],
  blurb: 'Deep navy in-frame cabinetry with oak drawer fronts and a soft grey island, finished in polished nickel.',
  hero: 'nyman-01.jpg',
  images: ['nyman-01.jpg', 'nyman-02.jpg']
}, {
  slug: 'hofmeyer',
  name: 'Hofmeyer Residence',
  location: 'George',
  year: '2022',
  category: 'Bespoke joinery',
  materials: ['Bespoke', 'Timber', 'Stone'],
  blurb: 'Made-to-measure joinery threaded through a characterful home, in warm timber and natural stone.',
  hero: 'hofmeyer-01.jpg',
  images: ['hofmeyer-01.jpg', 'hofmeyer-02.jpg']
}, {
  slug: 'metelerkamp',
  name: 'Metelerkamp Kitchen',
  location: 'Wilderness',
  year: '2022',
  category: 'Industrial',
  materials: ['Exposed brick', 'Granite', 'Galvanised'],
  blurb: 'An industrial-leaning kitchen against exposed brick, with honed granite and galvanised pendants.',
  hero: 'metelerkamp-01.jpg',
  images: ['metelerkamp-01.jpg', 'metelerkamp-02.jpg']
}, {
  slug: 'miller',
  name: 'Miller Residence',
  location: 'Sedgefield',
  year: '2021',
  category: 'Shaker',
  materials: ['Shaker', 'Soft grey', 'Marble'],
  blurb: 'A soft-grey shaker kitchen with full-height marble splashback and considered storage throughout.',
  hero: 'miller-01.jpg',
  images: ['miller-01.jpg', 'miller-02.jpg']
}, {
  slug: 'thompson',
  name: 'Thompson House',
  location: 'Knysna Heights',
  year: '2023',
  category: 'Contemporary',
  materials: ['Charcoal oak', 'Marble', 'Matt black'],
  blurb: 'Charcoal-stained oak under vaulted timber trusses, with a marble-topped island and matt-black tapware.',
  hero: 'thompson-01.jpg',
  images: ['thompson-01.jpg', 'thompson-02.jpg']
}, {
  slug: 'vogel',
  name: 'Vogel Kitchen',
  location: 'Brenton-on-Sea',
  year: '2022',
  category: 'Fluted oak',
  materials: ['Fluted oak', 'Marble', 'Open shelving'],
  blurb: 'A light, airy room with a fluted-oak island, marble surfaces and warm open shelving.',
  hero: 'vogel-01.jpg',
  images: ['vogel-01.jpg', 'vogel-02.jpg']
}, {
  slug: 'sturrock',
  name: 'Sturrock Residence',
  location: 'Leisure Isle',
  year: '2021',
  category: 'Classic',
  materials: ['Shaker', 'Cream', 'Timber'],
  blurb: 'A classic cream kitchen with timber detailing, made for a relaxed island home.',
  hero: 'sturrock-01.jpg',
  images: ['sturrock-01.jpg', 'sturrock-02.jpg']
}, {
  slug: 'terblanche',
  name: 'Terblanche Kitchen',
  location: 'Mossel Bay',
  year: '2021',
  category: 'Bespoke',
  materials: ['Bespoke', 'Painted', 'Stone'],
  blurb: 'Painted bespoke cabinetry with natural-stone surfaces, tailored to a coastal family.',
  hero: 'terblanche-01.jpg',
  images: ['terblanche-01.jpg', 'terblanche-02.jpg']
}, {
  slug: 'kondrat',
  name: 'Kondrat House',
  location: 'Wilderness',
  year: '2022',
  category: 'Bespoke joinery',
  materials: ['Bespoke', 'Timber', 'Marble'],
  blurb: 'Warm timber joinery and marble surfaces, made and fitted to the millimetre.',
  hero: 'kondrat-01.jpg',
  images: ['kondrat-01.jpg', 'kondrat-02.jpg']
}, {
  slug: 'zimmerman',
  name: 'Zimmerman Residence',
  location: 'George',
  year: '2021',
  category: 'Shaker',
  materials: ['Shaker', 'Timber', 'Stone'],
  blurb: 'A handsome shaker kitchen in warm timber, built for generous family gatherings.',
  hero: 'zimmerman-01.jpg',
  images: ['zimmerman-01.jpg', 'zimmerman-02.jpg']
}, {
  slug: 'slack',
  name: 'Slack Kitchen',
  location: 'Plettenberg Bay',
  year: '2022',
  category: 'Contemporary',
  materials: ['Painted', 'Timber', 'Quartz'],
  blurb: 'A contemporary painted kitchen with timber accents and durable quartz worktops.',
  hero: 'slack-01.jpg',
  images: ['slack-01.jpg', 'slack-02.jpg']
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
/* Shared Lucide icon helper for the website kit. Exposes window.Ic */
function Ic({
  name,
  size = 18,
  color = 'currentColor',
  stroke = 1.5,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          'stroke-width': stroke,
          width: size,
          height: size,
          color
        }
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}
window.Ic = Ic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ImageSlot = __ds_scope.ImageSlot;

__ds_ns.ImageEditToggle = __ds_scope.ImageEditToggle;

__ds_ns.ImageLibrary = __ds_scope.ImageLibrary;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();


/* ===== content.js ===== */
(function () {
/* =========================================================================
   SYBARIS WEBSITE — EDITABLE CONTENT
   =========================================================================
   This is the ONE file to edit if you want to change wording, image paths
   or contact details. It does not control layout or styling — the visual
   design lives in the .jsx files and is untouched by anything in here.

   Every screen/component reads its text from window.SITE_CONTENT below.
   Each block is labelled with where it appears on the live site.

   Notes:
   - Image paths are relative to this folder (ui_kits/website), the same
     way the rest of the site works, e.g. 'assets/gallery/foo.jpg'.
   - Project/gallery data (the individual kitchens, their photos, materials,
     etc.) lives separately in data.js — that is the "content file" for the
     project portfolio specifically.
   - Image edits made through the on-page editor (?edit) are saved to
     _image-overrides.json and take priority over the paths below — that
     lets you swap a photo visually without editing this file.
   ========================================================================= */

window.SITE_CONTENT = {

  // ---------------------------------------------------------------------
  // SITE-WIDE: header navigation + footer + logos
  // ---------------------------------------------------------------------
  nav: {
    // Main menu links shown in the header (desktop bar and mobile dropdown).
    // "route" must match one of: home, gallery, craft, contact
    links: [
      { label: 'Our Work', route: 'home' },
      { label: 'Gallery', route: 'gallery' },
      { label: 'Our Craft', route: 'craft' },
      { label: 'Contact', route: 'contact' },
    ],
    enquireButtonLabel: 'Enquire',
    logoDark: 'assets/logos/sybaris-logo-black.png',   // used on a light/solid header
    logoLight: 'assets/logos/sybaris-logo-white.png',  // used on a transparent/dark header + footer
  },

  footer: {
    aboutText: 'Bespoke kitchens, furniture and interior joinery — designed, built and finished by hand in our Garden Route workshop.',
    exploreColumnTitle: 'Explore',
    // Mirrors the main nav by default; edit independently if you want different footer links.
    exploreLinks: [
      { label: 'Bespoke Kitchens', route: 'home' },
      { label: 'Gallery', route: 'gallery' },
      { label: 'Our Craft', route: 'craft' },
      { label: 'Contact', route: 'contact' },
    ],
    studioColumnTitle: 'Studio',
    studioLines: [
      'Knysna, Western Cape',
      'Mon–Fri · 8am–5pm',
      'hello@sybaris.co.za',
      '+27 44 000 0000',
    ],
    newsletterTitle: 'Newsletter',
    newsletterText: 'Occasional notes from the workshop — new commissions and craft.',
    newsletterPlaceholder: 'Email address',
    newsletterButtonLabel: 'Join',
    copyright: '© 2026 Sybaris Kitchens & Interiors. All rights reserved.',
    socialLinks: ['Instagram', 'Facebook', 'Pinterest'],
  },

  // ---------------------------------------------------------------------
  // CONTACT DETAILS — used on the Contact page and in the footer above
  // ---------------------------------------------------------------------
  contactDetails: {
    address: 'The Workshop, Knysna, Western Cape',
    email: 'hello@sybaris.co.za',
    phone: '+27 44 000 0000',
  },

  // ---------------------------------------------------------------------
  // HOME PAGE
  // ---------------------------------------------------------------------
  home: {
    hero: {
      // Big scroll-reveal hero at the top of the home page. If "video" is set,
      // it plays instead of the image below — scroll position scrubs the clip
      // (currentTime), so the room's lights switch on as you scroll down.
      // "desktopImage"/"mobileImage" stay as the poster frame + the fallback
      // shown if video can't load.
      video: 'assets/gallery/hero-lounge.mp4',
      desktopImage: 'assets/gallery/hero-lounge-poster.jpg',
      mobileImage: 'assets/gallery/hero-lounge-poster.jpg',
      overline: 'Bespoke Kitchens & Interiors',
      headingLine1: 'Made by hand,',
      headingLine2Italic: 'made to last.',
      body: 'Considered cabinetry and joinery for homes of character — designed, built and finished in our Garden Route workshop.',
      primaryButtonLabel: 'View the gallery',
      secondaryButtonLabel: 'Begin a commission',
    },
    statement: {
      // "Every kitchen begins with a conversation" section, just under the hero.
      overline: 'Our Craft',
      headingLine1: 'Every kitchen begins',
      headingLine2: 'with a conversation.',
      body: 'We are a small studio of cabinetmakers and designers. Each commission is drawn around the way you live, then made to order in solid timber, stone and forged metal — and fitted by the hands that built it.',
      linkLabel: 'The Sybaris process',
      image: 'assets/gallery/miller-01.jpg',
    },
    stats: [
      { number: '15+', label: 'Years of commissions' },
      { number: '100%', label: 'Hand-built to order' },
      { number: '1', label: 'Workshop, start to finish' },
    ],
    featuredWork: {
      overline: 'Selected Work',
      heading: 'Recent kitchens',
      viewAllLabel: 'View all projects',
      // Which projects to feature here (by slug, from data.js) and how many.
      count: 3,
    },
    quoteBanner: {
      image: 'assets/gallery/metelerkamp-01.jpg',
      quote: '“We don’t make kitchens to be looked at. We make them to be lived in — for decades.”',
      attribution: 'The Sybaris Workshop',
    },
    finalCta: {
      overline: 'Begin',
      heading: 'Let’s design your kitchen.',
      body: 'Tell us a little about your home and how you live. We’ll arrange a conversation and a visit to the workshop.',
      buttonLabel: 'Arrange a consultation',
    },
  },

  // ---------------------------------------------------------------------
  // GALLERY PAGE
  // ---------------------------------------------------------------------
  gallery: {
    overline: 'The Gallery',
    heading: 'Every kitchen we’ve made.',
    body: 'A record of completed commissions across the Garden Route — from classic shaker to contemporary bespoke. Select a project to see it in full.',
    filters: ['All', 'Shaker', 'In-frame', 'Contemporary', 'Bespoke'],
  },

  // ---------------------------------------------------------------------
  // OUR CRAFT PAGE — process steps, "Meet the Team" section, closing CTA
  // ---------------------------------------------------------------------
  craft: {
    team: {
      overline: 'Meet the Team',
      headingLine1: 'The hands behind',
      headingLine2: 'the work.',
      body: 'A small studio of designers, cabinetmakers and finishers — the same people you’ll work with from the first sketch to the final fitting.',
      // Add, remove or reorder team members here. "photo" can be a URL or a
      // local path like 'assets/gallery/your-photo.jpg'.
      members: [
        { name: 'Eithwen Elphick', role: 'Director', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80&auto=format&fit=crop' },
        { name: 'David Morewood', role: 'Director', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&q=80&auto=format&fit=crop' },
        { name: 'Jetsia Abrahams', role: 'Interior Designer', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&auto=format&fit=crop' },
        { name: 'Lyle Ownhouse', role: 'Draughtsman', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&q=80&auto=format&fit=crop' },
        // 4 new placeholder slots — swap the name/role text and photo for each
        // new hire (or edit live via ?edit, same as the slots above).
        { name: 'Add Name', role: 'Add Role', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&q=80&auto=format&fit=crop' },
        { name: 'Add Name', role: 'Add Role', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop' },
        { name: 'Add Name', role: 'Add Role', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&q=80&auto=format&fit=crop' },
        { name: 'Add Name', role: 'Add Role', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&q=80&auto=format&fit=crop' },
      ],
    },
    intro: {
      overline: 'Our Craft',
      headingPlain: 'From conversation to ',
      headingItalic: 'completed kitchen.',
    },
    steps: [
      { number: '01', title: 'Design', body: 'We begin in your home, then draw the kitchen around how you live — proportion, light, and the way you move through the room.' },
      { number: '02', title: 'Make', body: 'Cabinetry is built to order in our workshop: solid timber, dovetailed boxes, hand-applied finishes. Nothing is flat-packed.' },
      { number: '03', title: 'Install', body: 'Our own team fits every kitchen, scribing each piece to the building and finishing on site to the millimetre.' },
    ],
    featureImage: 'assets/gallery/vogel-01.jpg',
    closingCta: {
      heading: 'Begin your commission.',
      buttonLabel: 'Arrange a consultation',
    },
  },

  // ---------------------------------------------------------------------
  // CONTACT PAGE
  // ---------------------------------------------------------------------
  contact: {
    overline: 'Contact',
    heading: 'Start a conversation.',
    body: 'Tell us a little about your home and what you have in mind. We’ll be in touch to arrange a visit to the workshop.',
    form: {
      nameLabel: 'Full name',
      namePlaceholder: 'Jane Appleton',
      emailLabel: 'Email',
      emailPlaceholder: 'jane@email.com',
      locationLabel: 'Location',
      locationPlaceholder: 'Town or suburb',
      messageLabel: 'About your project',
      messagePlaceholder: 'A few words on what you have in mind…',
      submitButtonLabel: 'Send enquiry',
      thankYouHeading: 'Thank you.',
      thankYouBody: 'We’ll be in touch shortly.',
    },
  },

  // ---------------------------------------------------------------------
  // PROJECT DETAIL PAGE — labels around each individual kitchen
  // (the kitchens themselves — name, photos, materials — are in data.js)
  // ---------------------------------------------------------------------
  projectDetail: {
    backToGalleryLabel: 'Back to gallery',
    locationFieldLabel: 'Location',
    completedFieldLabel: 'Completed',
    disciplineFieldLabel: 'Discipline',
    aboutOverline: 'About the kitchen',
    aboutBodySuffix: 'Designed, built and installed by the Sybaris workshop. Every component — from the dovetailed drawer boxes to the hand-finished surfaces — is made to order and fitted by the team that built it.',
    nextProjectLabel: 'Next project',
    viewProjectButtonLabel: 'View project',
  },
};

})();


/* ===== data.js ===== */
(function () {
/* Sybaris — sample project data for the website UI kit.
   Locations are plausible Garden Route / Cape towns; copy is illustrative. */
window.SYBARIS_PROJECTS = [
  {
    slug: 'van-der-hoff', name: 'House van der Hoff', location: 'Oubaai', year: '2023',
    category: 'In-frame oak', materials: ['In-frame', 'Natural oak', 'Honed marble', 'Brass'],
    blurb: 'A coastal family kitchen in natural oak and honed marble, anchored by a deep navy range wall and warmed by polished brass.',
    hero: 'nyman-01.jpg',
    images: ['nyman-01.jpg', 'nyman-02.jpg', 'everson-01.jpg', 'everson-02.jpg'],
  },
  {
    slug: 'blakemore', name: 'Blakemore Residence', location: 'Leisure Isle', year: '2023',
    category: 'Shaker · oak', materials: ['Shaker', 'Limed oak', 'Marble', 'Forged hood'],
    blurb: 'Quiet limed-oak cabinetry beneath a hand-forged extractor hood — a calm, light-filled room for everyday cooking.',
    hero: 'blakemore-01.jpg',
    images: ['blakemore-01.jpg', 'blakemore-02.jpg'],
  },
  {
    slug: 'everson', name: 'Everson Kitchen', location: 'Knysna', year: '2022',
    category: 'Classic shaker', materials: ['Shaker', 'Navy & cream', 'Marble', 'Nickel'],
    blurb: 'A two-tone shaker kitchen — cream above, deep navy below — with a generous island for family life.',
    hero: 'everson-01.jpg',
    images: ['everson-01.jpg', 'everson-02.jpg'],
  },
  {
    slug: 'nyman', name: 'Nyman House', location: 'Plettenberg Bay', year: '2023',
    category: 'In-frame', materials: ['In-frame', 'Navy & oak', 'Quartz', 'Polished nickel'],
    blurb: 'Deep navy in-frame cabinetry with oak drawer fronts and a soft grey island, finished in polished nickel.',
    hero: 'nyman-01.jpg',
    images: ['nyman-01.jpg', 'nyman-02.jpg'],
  },
  {
    slug: 'hofmeyer', name: 'Hofmeyer Residence', location: 'George', year: '2022',
    category: 'Bespoke joinery', materials: ['Bespoke', 'Timber', 'Stone'],
    blurb: 'Made-to-measure joinery threaded through a characterful home, in warm timber and natural stone.',
    hero: 'hofmeyer-01.jpg',
    images: ['hofmeyer-01.jpg', 'hofmeyer-02.jpg'],
  },
  {
    slug: 'metelerkamp', name: 'Metelerkamp Kitchen', location: 'Wilderness', year: '2022',
    category: 'Industrial', materials: ['Exposed brick', 'Granite', 'Galvanised'],
    blurb: 'An industrial-leaning kitchen against exposed brick, with honed granite and galvanised pendants.',
    hero: 'metelerkamp-01.jpg',
    images: ['metelerkamp-01.jpg', 'metelerkamp-02.jpg'],
  },
  {
    slug: 'miller', name: 'Miller Residence', location: 'Sedgefield', year: '2021',
    category: 'Shaker', materials: ['Shaker', 'Soft grey', 'Marble'],
    blurb: 'A soft-grey shaker kitchen with full-height marble splashback and considered storage throughout.',
    hero: 'miller-01.jpg',
    images: ['miller-01.jpg', 'miller-02.jpg'],
  },
  {
    slug: 'thompson', name: 'Thompson House', location: 'Knysna Heights', year: '2023',
    category: 'Contemporary', materials: ['Charcoal oak', 'Marble', 'Matt black'],
    blurb: 'Charcoal-stained oak under vaulted timber trusses, with a marble-topped island and matt-black tapware.',
    hero: 'thompson-01.jpg',
    images: ['thompson-01.jpg', 'thompson-02.jpg'],
  },
  {
    slug: 'vogel', name: 'Vogel Kitchen', location: 'Brenton-on-Sea', year: '2022',
    category: 'Fluted oak', materials: ['Fluted oak', 'Marble', 'Open shelving'],
    blurb: 'A light, airy room with a fluted-oak island, marble surfaces and warm open shelving.',
    hero: 'vogel-01.jpg',
    images: ['vogel-01.jpg', 'vogel-02.jpg'],
  },
  {
    slug: 'sturrock', name: 'Sturrock Residence', location: 'Leisure Isle', year: '2021',
    category: 'Classic', materials: ['Shaker', 'Cream', 'Timber'],
    blurb: 'A classic cream kitchen with timber detailing, made for a relaxed island home.',
    hero: 'sturrock-01.jpg',
    images: ['sturrock-01.jpg', 'sturrock-02.jpg'],
  },
  {
    slug: 'terblanche', name: 'Terblanche Kitchen', location: 'Mossel Bay', year: '2021',
    category: 'Bespoke', materials: ['Bespoke', 'Painted', 'Stone'],
    blurb: 'Painted bespoke cabinetry with natural-stone surfaces, tailored to a coastal family.',
    hero: 'terblanche-01.jpg',
    images: ['terblanche-01.jpg', 'terblanche-02.jpg'],
  },
  {
    slug: 'kondrat', name: 'Kondrat House', location: 'Wilderness', year: '2022',
    category: 'Bespoke joinery', materials: ['Bespoke', 'Timber', 'Marble'],
    blurb: 'Warm timber joinery and marble surfaces, made and fitted to the millimetre.',
    hero: 'kondrat-01.jpg',
    images: ['kondrat-01.jpg', 'kondrat-02.jpg'],
  },
  {
    slug: 'zimmerman', name: 'Zimmerman Residence', location: 'George', year: '2021',
    category: 'Shaker', materials: ['Shaker', 'Timber', 'Stone'],
    blurb: 'A handsome shaker kitchen in warm timber, built for generous family gatherings.',
    hero: 'zimmerman-01.jpg',
    images: ['zimmerman-01.jpg', 'zimmerman-02.jpg'],
  },
  {
    slug: 'slack', name: 'Slack Kitchen', location: 'Plettenberg Bay', year: '2022',
    category: 'Contemporary', materials: ['Painted', 'Timber', 'Quartz'],
    blurb: 'A contemporary painted kitchen with timber accents and durable quartz worktops.',
    hero: 'slack-01.jpg',
    images: ['slack-01.jpg', 'slack-02.jpg'],
  },
];

})();


/* ===== icons.js ===== */
(function () {
/* Shared Lucide icon helper for the website kit. Exposes window.Ic */
function Ic({
  name,
  size = 18,
  color = 'currentColor',
  stroke = 1.5,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          'stroke-width': stroke,
          width: size,
          height: size,
          color
        }
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}
window.Ic = Ic;
})();


/* ===== SmoothScrollHero.js ===== */
(function () {
/* Sybaris website — Smooth-scroll parallax hero (clip-path reveal).
   Adapted from the framer-motion "SmoothScrollHero" component to this project's
   build-less, CDN-React setup: no framer-motion / Tailwind / TypeScript.

   Key adaptation: framer-motion's useScroll() tracks the WINDOW, but this site
   scrolls inside the #kit-scroll container — so we read scrollTop from there and
   write clip-path + background-size straight to the DOM via refs (no re-render
   per frame, rAF-throttled). Honours prefers-reduced-motion. Exposes
   window.SmoothScrollHero. Children render as an unclipped overlay (so hero copy
   stays fully visible while the image reveals). */
(function () {
  const {
    useRef,
    useEffect,
    useState,
    useLayoutEffect
  } = React;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  // ----- Mobile hero framing, adjustable live via the on-page editor -----
  // The exact zoom + vertical position of the mobile hero image are author
  // controls, not code constants — they're stored as text overrides (so the
  // existing "Save to project" button persists them) and applied as CSS
  // custom properties. EDIT = the same ?edit flag the rest of the kit uses.
  const EDIT = /(?:[?&#])edit\b/.test(location.search + location.hash);
  const MZOOM_KEY = "home.hero.mobileZoom"; // extra zoom-in on top of "fill the band" (1 = just fills, no crop beyond that)
  const MPOSY_KEY = "home.hero.mobilePosY"; // vertical nudge of the framing, % (− up, + down)
  const MH_KEY = "home.hero.mobileH"; // height of the image band in vh — the band hugs the image, so no matting
  const MZOOM_DEFAULT = 1.0;
  const MPOSY_DEFAULT = 0;
  const MH_DEFAULT = 58;
  // How fast the lights-on clip plays on mobile. <1 slows it down so the
  // reveal reads as a deliberate animation instead of a quick flicker.
  const MOBILE_PLAY_RATE = 0.4;
  const readNum = (key, dflt) => {
    try {
      const v = parseFloat(localStorage.getItem("sybaris:txt:" + key));
      return isFinite(v) ? v : dflt;
    } catch (e) {
      return dflt;
    }
  };
  function SmoothScrollHero({
    scrollHeight = 700,
    desktopImage = "assets/gallery/thompson-01.jpg",
    mobileImage = "assets/gallery/thompson-01.jpg",
    // Optional: a single video to scrub instead of the image above (e.g. a
    // clip of lights switching on) — scroll position maps to currentTime, so
    // the lights appear to switch on as the visitor scrolls. One element is
    // used for every screen size (object-fit: cover crops it), which keeps
    // mobile to a single decode/download instead of two.
    video = null,
    videoPoster = null,
    initialClipPercentage = 22,
    finalClipPercentage = 78,
    gradient = "linear-gradient(180deg, rgba(20,16,10,0.42) 0%, rgba(20,16,10,0.10) 36%, rgba(20,16,10,0.30) 78%, rgba(20,16,10,0.62) 100%)",
    children = null
  }) {
    const clipRef = useRef(null);
    const dRef = useRef(null);
    const mRef = useRef(null);
    const vRef = useRef(null);
    const stageRef = useRef(null);
    // On mobile the hero is a content-sized band (not a full-screen pin): its
    // height is the author-set --hm-h, the video fills it edge-to-edge via
    // object-fit:cover (so there's never any matting/padding around it). The
    // lights aren't scroll-scrubbed on mobile — the clip plays through once and
    // holds on the fully-lit final frame, so the lit room is the resting state.
    const isMobile = window.useIsMobile ? window.useIsMobile(767) : false;

    // --- Live mobile-hero framing (height + zoom + vertical position) ---
    const [mZoom, setMZoom] = useState(() => readNum(MZOOM_KEY, MZOOM_DEFAULT));
    const [mPosY, setMPosY] = useState(() => readNum(MPOSY_KEY, MPOSY_DEFAULT));
    const [mH, setMH] = useState(() => readNum(MH_KEY, MH_DEFAULT));
    // Apply the saved framing to CSS vars before first paint (no flash).
    useLayoutEffect(() => {
      const r = document.documentElement.style;
      r.setProperty("--hm-zoom", String(mZoom));
      r.setProperty("--hm-ty", mPosY + "%");
      r.setProperty("--hm-h", mH + "vh");
    }, [mZoom, mPosY, mH]);
    // Show the framing sliders only while the kit's image-edit mode is on
    // (so they sit alongside the existing "Save to project" button).
    const [editOn, setEditOn] = useState(() => !!(window.__sybImgEdit && window.__sybImgEdit.on));
    useEffect(() => {
      if (!EDIT || !window.__sybImgEdit) return;
      const onToggle = on => setEditOn(on);
      window.__sybImgEdit.subscribe(onToggle);
      setEditOn(window.__sybImgEdit.on);
    }, []);
    const updateZoom = v => {
      setMZoom(v);
      try {
        localStorage.setItem("sybaris:txt:" + MZOOM_KEY, String(v));
      } catch (e) {}
    };
    const updatePosY = v => {
      setMPosY(v);
      try {
        localStorage.setItem("sybaris:txt:" + MPOSY_KEY, String(v));
      } catch (e) {}
    };
    const updateH = v => {
      setMH(v);
      try {
        localStorage.setItem("sybaris:txt:" + MH_KEY, String(v));
      } catch (e) {}
    };

    // Mobile: play the lights-on clip once, slowed down, then hold on the
    // fully-lit final frame. Slowing it (MOBILE_PLAY_RATE) makes the reveal
    // read as a deliberate animation rather than a quick flicker.
    useEffect(() => {
      if (!isMobile || !video) return;
      const v = vRef.current;
      if (!v) return;

      // iOS Safari only allows inline autoplay when the muted *property* is
      // true — and React sets the muted *attribute* but not always the
      // property, which is the usual reason muted autoplay "works everywhere
      // but iPhone". Force the property (and friends) on before calling play.
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      const snapToLit = () => {
        try {
          if (v.duration) v.currentTime = Math.max(v.duration - 0.05, 0);
        } catch (e) {}
      };
      let started = false;
      const startPlayback = () => {
        if (started || !v.duration) return;
        started = true;
        try {
          v.currentTime = 0;
          v.loop = false;
          const p = v.play();
          // iOS can reset playbackRate when play() begins, so (re)apply it
          // both immediately and once playback has actually started.
          v.playbackRate = MOBILE_PLAY_RATE;
          if (p && typeof p.then === "function") {
            p.then(() => {
              v.playbackRate = MOBILE_PLAY_RATE;
            }).catch(() => {
              started = false;
              armGesture();
              snapToLit();
            });
          }
        } catch (e) {
          started = false;
          armGesture();
          snapToLit();
        }
      };

      // If pure autoplay is blocked (e.g. iOS Low Power Mode), the visitor's
      // first touch or scroll IS a user gesture that's allowed to start
      // playback — so kick the animation off on the first interaction.
      const scroller = document.getElementById("kit-scroll") || window;
      const onGesture = () => startPlayback();
      let armed = false;
      function armGesture() {
        if (armed) return;
        armed = true;
        window.addEventListener("touchstart", onGesture, {
          once: true,
          passive: true
        });
        window.addEventListener("pointerdown", onGesture, {
          once: true,
          passive: true
        });
        scroller.addEventListener("scroll", onGesture, {
          once: true,
          passive: true
        });
      }
      if (v.readyState >= 1 && v.duration) startPlayback();else v.addEventListener("loadedmetadata", startPlayback, {
        once: true
      });
      return () => {
        window.removeEventListener("touchstart", onGesture);
        window.removeEventListener("pointerdown", onGesture);
        scroller.removeEventListener("scroll", onGesture);
        v.removeEventListener("loadedmetadata", startPlayback);
      };
    }, [isMobile, video]);
    useEffect(() => {
      const scroller = document.getElementById("kit-scroll") || window;
      const top = () => scroller === window ? window.scrollY : scroller.scrollTop;
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const seekVideo = p => {
        const v = vRef.current;
        if (!v || !isFinite(v.duration) || v.duration <= 0) return;
        const t = p * v.duration;
        if (Math.abs(v.currentTime - t) > 0.02) v.currentTime = t;
      };
      const apply = () => {
        const y = top();
        const isMobileNow = window.matchMedia && window.matchMedia("(max-width:767px)").matches;
        const p = clamp(y / scrollHeight, 0, 1); // 0 → 1 across the reveal

        if (isMobileNow) {
          // Nothing scroll-driven on mobile: no clip reveal, no zoom, no scrub.
          // The video plays the lights on by itself (see the mobile playback
          // effect above) and the framing comes from the .ssh-zoom wrapper.
          if (clipRef.current) clipRef.current.style.clipPath = "none";
          if (vRef.current) vRef.current.style.transform = "scale(1)";
          return;
        }
        const cs = initialClipPercentage * (1 - p); // initial → 0
        const ce = finalClipPercentage + (100 - finalClipPercentage) * p; // final → 100
        if (clipRef.current) {
          clipRef.current.style.clipPath = `polygon(${cs}% ${cs}%, ${ce}% ${cs}%, ${ce}% ${ce}%, ${cs}% ${ce}%)`;
        }
        const sizePct = 170 - 70 * clamp(y / (scrollHeight + 500), 0, 1); // 170 → 100
        if (dRef.current) dRef.current.style.backgroundSize = sizePct.toFixed(2) + "%";
        if (mRef.current) mRef.current.style.backgroundSize = sizePct.toFixed(2) + "%";
        if (vRef.current) vRef.current.style.transform = `scale(${(sizePct / 100).toFixed(4)})`;
        seekVideo(p);
      };
      if (reduce) {
        // No scroll-driven animation: show the image/video fully revealed, centred,
        // with the lights already on (end of the clip) rather than scrubbing.
        if (clipRef.current) clipRef.current.style.clipPath = "none";
        if (dRef.current) dRef.current.style.backgroundSize = "100%";
        if (mRef.current) mRef.current.style.backgroundSize = "100%";
        if (vRef.current) {
          vRef.current.style.transform = "scale(1)";
          const settle = () => seekVideo(1);
          if (vRef.current.duration) settle();else vRef.current.addEventListener("loadedmetadata", settle, {
            once: true
          });
        }
        return;
      }
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          apply();
          ticking = false;
        });
      };
      apply();
      // Video duration isn't known until metadata loads — re-apply once it is,
      // in case the visitor already scrolled before that happened.
      if (vRef.current) vRef.current.addEventListener("loadedmetadata", apply, {
        once: true
      });
      scroller.addEventListener("scroll", onScroll, {
        passive: true
      });
      window.addEventListener("resize", onScroll, {
        passive: true
      });
      return () => {
        scroller.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [scrollHeight, initialClipPercentage, finalClipPercentage]);
    const bg = {
      position: "absolute",
      inset: 0,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "170%",
      willChange: "background-size"
    };
    // Initial (scroll = 0) window, so there's no unclipped flash before useEffect runs.
    const i = initialClipPercentage;
    const f = finalClipPercentage;
    const initialClip = isMobile ? "none" : `polygon(${i}% ${i}%, ${f}% ${i}%, ${f}% ${f}%, ${i}% ${f}%)`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "ssh-wrap",
      style: {
        height: isMobile ? "auto" : `calc(${scrollHeight}px + 100vh)`,
        position: "relative",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("style", null, `
            .ssh-d{display:block}.ssh-m{display:none}
            @media (max-width:767px){.ssh-d{display:none}.ssh-m{display:block}}
            .ssh-video{object-fit:cover;object-position:center;transform-origin:center center}
            .ssh-zoom{position:absolute;inset:0}
            .ssh-stage{position:sticky;top:0;height:100vh;width:100%;overflow:hidden;background:var(--ink-900,#14100a)}
            @media (max-width:767px){
              /* Mobile: a content-sized image band — NOT a full-screen pin — so
                 there's no matting/padding around the image. Its height is the
                 author-set --hm-h; the video fills it edge-to-edge via cover, and
                 the .ssh-zoom wrapper applies the saved zoom/vertical framing
                 (--hm-zoom / --hm-ty). The hero copy follows immediately after. */
              .ssh-stage{position:relative;top:0;height:var(--hm-h,58vh)}
              .ssh-zoom{transform:translateY(var(--hm-ty,0%)) scale(var(--hm-zoom,1));transform-origin:center center;will-change:transform}
            }
            .ssh-overlay{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:0 var(--gutter) 72px}
          `), /*#__PURE__*/React.createElement("div", {
      className: "ssh-stage",
      ref: stageRef
    }, /*#__PURE__*/React.createElement("div", {
      ref: clipRef,
      style: {
        position: "absolute",
        inset: 0,
        clipPath: initialClip,
        willChange: "clip-path",
        overflow: "hidden"
      }
    }, video ? /*#__PURE__*/React.createElement("div", {
      className: "ssh-zoom"
    }, /*#__PURE__*/React.createElement("video", {
      ref: vRef,
      className: "ssh-video",
      src: video,
      poster: videoPoster || desktopImage,
      muted: true,
      playsInline: true,
      "webkit-playsinline": "true",
      preload: "auto",
      fetchpriority: "high",
      disablePictureInPicture: true,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        transform: isMobile ? "scale(1)" : "scale(1.7)",
        willChange: "transform"
      }
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      ref: mRef,
      className: "ssh-m",
      style: {
        ...bg,
        backgroundImage: `url(${mobileImage})`
      }
    }), /*#__PURE__*/React.createElement("div", {
      ref: dRef,
      className: "ssh-d",
      style: {
        ...bg,
        backgroundImage: `url(${desktopImage})`
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: gradient
      }
    })), !isMobile && /*#__PURE__*/React.createElement("div", {
      className: "ssh-overlay"
    }, children))), isMobile && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--ink-900, #14100a)",
        padding: "28px var(--gutter) 40px"
      }
    }, children), EDIT && isMobile && video && editOn && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 132,
        zIndex: 1002,
        background: "rgba(20,16,10,0.94)",
        color: "#FBF9F4",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: "0 12px 34px rgba(20,16,10,.4)",
        padding: "13px 15px 15px",
        font: "500 12px/1.3 system-ui,sans-serif",
        backdropFilter: "blur(6px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        letterSpacing: ".06em",
        textTransform: "uppercase",
        opacity: .8,
        fontSize: 11
      }
    }, "Hero image \xB7 mobile"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        updateH(MH_DEFAULT);
        updateZoom(MZOOM_DEFAULT);
        updatePosY(MPOSY_DEFAULT);
      },
      style: {
        background: "transparent",
        border: "1px solid rgba(255,255,255,.25)",
        color: "#FBF9F4",
        borderRadius: 999,
        padding: "4px 10px",
        fontSize: 11,
        cursor: "pointer"
      }
    }, "Reset")), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4,
        opacity: .85
      }
    }, /*#__PURE__*/React.createElement("span", null, "Image height"), /*#__PURE__*/React.createElement("span", null, mH, "%")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "28",
      max: "88",
      step: "1",
      value: mH,
      onChange: e => updateH(parseFloat(e.target.value)),
      style: {
        width: "100%",
        accentColor: "#C2A878"
      }
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4,
        opacity: .85
      }
    }, /*#__PURE__*/React.createElement("span", null, "Zoom"), /*#__PURE__*/React.createElement("span", null, mZoom.toFixed(2), "\xD7")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "1",
      max: "3",
      step: "0.02",
      value: mZoom,
      onChange: e => updateZoom(parseFloat(e.target.value)),
      style: {
        width: "100%",
        accentColor: "#C2A878"
      }
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4,
        opacity: .85
      }
    }, /*#__PURE__*/React.createElement("span", null, "Vertical position"), /*#__PURE__*/React.createElement("span", null, mPosY > 0 ? "+" : "", mPosY, "%")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "-45",
      max: "45",
      step: "1",
      value: mPosY,
      onChange: e => updatePosY(parseFloat(e.target.value)),
      style: {
        width: "100%",
        accentColor: "#C2A878"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 9,
        opacity: .6,
        fontSize: 10.5
      }
    }, "Drag to frame it, then tap \u201CSave to project\u201D.")));
  }
  window.SmoothScrollHero = SmoothScrollHero;

  // Shared viewport hook — used by the header menu and responsive layout tweaks.
  window.useIsMobile = function useIsMobile(maxWidth) {
    var q = '(max-width: ' + (maxWidth || 768) + 'px)';
    var st = React.useState(function () {
      return typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false;
    });
    React.useEffect(function () {
      var mq = window.matchMedia(q);
      var on = function () {
        st[1](mq.matches);
      };
      on();
      if (mq.addEventListener) mq.addEventListener('change', on);else mq.addListener(on);
      return function () {
        if (mq.removeEventListener) mq.removeEventListener('change', on);else mq.removeListener(on);
      };
    }, [q]);
    return st[0];
  };
})();
})();


/* ===== EditableText.js ===== */
(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sybaris website — on-page text editor.
   Exposes window.EditableText + window.useTextEditMode.

   Mirrors the existing ImageSlot editor (same idea, for text instead of
   photos): the same "Edit images" toggle that the design system already
   provides (window.__sybImgEdit) also turns every <EditableText> on the
   page into an editable field. Click into any heading/paragraph/label,
   type, click away — the change is held in localStorage (key
   "sybaris:txt:<id>") until "Save to project" writes it to
   _content-overrides.json on disk.

   Defaults always come from content.js (the `text` prop); an edit only
   overrides the on-page display, and is removed automatically if you type
   it back to match the original. */

const TXT_PREFIX = 'sybaris:txt:';
function readTextOverride(id, fallback) {
  try {
    const raw = window.localStorage.getItem(TXT_PREFIX + id);
    return raw === null ? fallback : raw;
  } catch (e) {
    return fallback;
  }
}

/** Subscribes to the same global edit-mode toggle the image editor uses. */
function useTextEditMode() {
  const store = window.__sybImgEdit;
  const [on, setOn] = React.useState(store ? store.on : false);
  React.useEffect(() => {
    if (!store) return undefined;
    return store.subscribe(setOn);
  }, [store]);
  return on;
}
window.useTextEditMode = useTextEditMode;

/**
 * EditableText — renders `text` (from content.js) as a plain element by
 * default. While edit mode is on, it becomes a contentEditable field with a
 * dashed outline; blurring it saves the change. `as` picks the rendered tag
 * (defaults to "span" so it can sit inline inside existing headings).
 */
function EditableText({
  id,
  text,
  as = 'span',
  style,
  ...rest
}) {
  const editMode = useTextEditMode();
  const [value, setValue] = React.useState(() => readTextOverride(id, text));
  const ref = React.useRef(null);
  React.useEffect(() => {
    setValue(readTextOverride(id, text));
  }, [id, text]);
  const commit = () => {
    const el = ref.current;
    if (!el) return;
    const next = (el.innerText || '').replace(/ /g, ' ').replace(/\s+\n/g, '\n').trim();
    const finalVal = next || text;
    setValue(finalVal);
    try {
      if (finalVal === text) window.localStorage.removeItem(TXT_PREFIX + id);else window.localStorage.setItem(TXT_PREFIX + id, finalVal);
    } catch (e) {}
  };
  const Tag = as;
  if (!editMode) {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      style: style
    }, rest), value);
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onBlur: commit,
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    onClick: e => e.stopPropagation(),
    onMouseDown: e => e.stopPropagation(),
    style: {
      ...style,
      outline: '1px dashed var(--brass-500)',
      outlineOffset: 3,
      borderRadius: 2,
      cursor: 'text',
      background: 'rgba(154,123,79,0.08)'
    }
  }, rest), value);
}
window.EditableText = EditableText;
})();


/* ===== Header.js ===== */
(function () {
/* Sybaris website — Header / top navigation. Exposes window.Header */
function Header({
  route,
  onNav,
  overlay = false
}) {
  const {
    Button
  } = window.SybarisDesignSystem_c8b90c;
  // Nav links, "Enquire" label and logo paths all come from content.js (nav.*).
  const C = window.SITE_CONTENT.nav;
  const NAV = C.links;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const isMobile = window.useIsMobile ? window.useIsMobile(820) : false;
  React.useEffect(() => {
    const scroller = document.getElementById('kit-scroll');
    if (!scroller) return;
    const onScroll = () => setScrolled(scroller.scrollTop > 40);
    scroller.addEventListener('scroll', onScroll);
    onScroll();
    return () => scroller.removeEventListener('scroll', onScroll);
  }, [route]);

  // Close the mobile menu on navigation, or when we grow past the mobile breakpoint.
  React.useEffect(() => {
    setOpen(false);
  }, [route]);
  React.useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  // On mobile the home hero is a short, exact-aspect band sitting BELOW the
  // header now (not full-bleed behind it — see HomeScreen.jsx), so a
  // transparent header there would float over the page's own background with
  // an illegible light-on-light logo. Other overlay routes (e.g. the project
  // detail hero) are unaffected and keep the floating treatment on mobile too.
  const solid = !overlay || scrolled || open || isMobile && route === 'home';
  const ink = solid ? 'var(--ink-900)' : 'var(--cream-50)';
  const go = r => {
    setOpen(false);
    onNav(r);
  };
  const linkBase = {
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: 12.5,
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter)',
      height: 78,
      background: solid ? 'rgba(246,242,234,0.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(120%) blur(8px)' : 'none',
      borderBottom: solid ? '1px solid var(--line-soft)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: solid ? C.logoDark : C.logoLight,
    alt: "Sybaris",
    style: {
      height: 26,
      width: 'auto'
    }
  })), isMobile ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      marginRight: -8,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, open ? /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))) : /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 38
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.route,
    onClick: () => onNav(n.route),
    style: {
      ...linkBase,
      color: ink,
      opacity: route === n.route ? 1 : 0.78,
      borderBottom: route === n.route ? `1px solid ${ink}` : '1px solid transparent',
      paddingBottom: 3,
      transition: 'opacity var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = route === n.route ? 1 : 0.78
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `nav.links.${i}.label`,
    text: n.label
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: solid ? 'solid' : 'outline',
    size: "sm",
    style: !solid ? {
      color: 'var(--cream-50)',
      borderColor: 'var(--cream-50)'
    } : undefined,
    onClick: () => onNav('contact')
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "nav.enquireButtonLabel",
    text: C.enquireButtonLabel
  }))), isMobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 78,
      left: 0,
      right: 0,
      background: 'rgba(246,242,234,0.98)',
      backdropFilter: 'saturate(120%) blur(8px)',
      borderBottom: '1px solid var(--line-soft)',
      boxShadow: 'var(--shadow-card)',
      padding: '4px var(--gutter) 22px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.route,
    onClick: () => go(n.route),
    style: {
      ...linkBase,
      fontSize: 14,
      color: 'var(--ink-900)',
      opacity: route === n.route ? 1 : 0.74,
      padding: '16px 0',
      borderBottom: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `nav.links.${i}.label`,
    text: n.label
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    style: {
      marginTop: 18
    },
    onClick: () => go('contact')
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "nav.enquireButtonLabel",
    text: C.enquireButtonLabel
  }))));
}
window.Header = Header;
})();


/* ===== Footer.js ===== */
(function () {
/* Sybaris website — Footer. Exposes window.Footer */
function Footer({
  onNav
}) {
  const {
    Input,
    Button,
    Divider
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  // All footer copy/links come from content.js (footer.*) and contactDetails.
  const C = window.SITE_CONTENT.footer;
  const NAVC = window.SITE_CONTENT.nav;
  const col = (titleId, title, links, linkIdPrefix) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-mut)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: titleId,
    text: title
  })), links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    onClick: () => l.route && onNav(l.route),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--cream-200)',
      opacity: 0.82
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.82
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `${linkIdPrefix}.${i}`,
    text: l.label
  }))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: '76px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: NAVC.logoLight,
    alt: "Sybaris",
    style: {
      height: 30,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cream-200)',
      opacity: 0.82,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "footer.aboutText",
    text: C.aboutText
  }))), col('footer.exploreColumnTitle', C.exploreColumnTitle, C.exploreLinks, 'footer.exploreLinks'), col('footer.studioColumnTitle', C.studioColumnTitle, C.studioLines.map(label => ({
    label
  })), 'footer.studioLines'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-mut)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "footer.newsletterTitle",
    text: C.newsletterTitle
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--cream-200)',
      opacity: 0.82,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "footer.newsletterText",
    text: C.newsletterText
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: C.newsletterPlaceholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid var(--border-inverse)',
      color: 'var(--cream-50)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '9px 0',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "footer.newsletterButtonLabel",
    text: C.newsletterButtonLabel
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-inverse)',
      margin: '46px 0 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.06em',
      color: 'var(--text-inverse-mut)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "footer.copyright",
    text: C.copyright
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, C.socialLinks.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--cream-200)',
      opacity: 0.75
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.75
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `footer.socialLinks.${i}`,
    text: n
  })))))));
}
window.Footer = Footer;
})();


/* ===== HomeScreen.js ===== */
(function () {
/* Sybaris website — Home screen. Exposes window.HomeScreen */
const IMG = 'assets/gallery/';
function HomeScreen({
  onNav,
  onProject
}) {
  const {
    Button,
    Overline,
    ProjectCard,
    Divider,
    ImageSlot
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const projects = window.SYBARIS_PROJECTS;
  // All home-page wording/images come from content.js (home.*).
  const C = window.SITE_CONTENT.home;
  const featured = projects.slice(0, C.featuredWork.count);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, `@media (max-width:767px){.hero-shell{margin-top:0 !important}}`), /*#__PURE__*/React.createElement("div", {
    className: "hero-shell",
    style: {
      marginTop: -78
    }
  }, /*#__PURE__*/React.createElement(window.SmoothScrollHero, {
    scrollHeight: 700,
    video: C.hero.video,
    videoPoster: C.hero.desktopImage,
    desktopImage: C.hero.desktopImage,
    mobileImage: C.hero.mobileImage,
    initialClipPercentage: 22,
    finalClipPercentage: 78
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    tone: "inverse",
    rule: true,
    style: {
      marginBottom: 22,
      color: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.hero.overline",
    text: C.hero.overline
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px, 6vw, 82px)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.hero.headingLine1",
    text: C.hero.headingLine1
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EditableText, {
    id: "home.hero.headingLine2Italic",
    text: C.hero.headingLine2Italic,
    style: {
      fontStyle: 'italic'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(16px,1.4vw,19px)',
      lineHeight: 1.6,
      color: 'var(--cream-100)',
      opacity: 0.92,
      maxWidth: 540,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.hero.body",
    text: C.hero.body
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('gallery')
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.hero.primaryButtonLabel",
    text: C.hero.primaryButtonLabel
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      color: 'var(--cream-50)',
      borderColor: 'var(--cream-50)'
    },
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16,
      color: "currentColor"
    })
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.hero.secondaryButtonLabel",
    text: C.hero.secondaryButtonLabel
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(40px, 6vw, 96px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.statement.overline",
    text: C.statement.overline
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,50px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.statement.headingLine1",
    text: C.statement.headingLine1
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EditableText, {
    id: "home.statement.headingLine2",
    text: C.statement.headingLine2
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginTop: 24,
      maxInlineSize: '52ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.statement.body",
    text: C.statement.body
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => onNav('craft'),
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16
    })
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.statement.linkLabel",
    text: C.statement.linkLabel
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "home-statement",
    src: C.statement.image
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: '54px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 40
    }
  }, C.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(38px,4vw,58px)',
      lineHeight: 1,
      color: 'var(--brass-300)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `home.stats.${i}.number`,
    text: s.number
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-mut)',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `home.stats.${i}.label`,
    text: s.label
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48,
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.featuredWork.overline",
    text: C.featuredWork.overline
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,3.2vw,44px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.featuredWork.heading",
    text: C.featuredWork.heading
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => onNav('gallery'),
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16
    })
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.featuredWork.viewAllLabel",
    text: C.featuredWork.viewAllLabel
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 30
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    image: IMG + p.hero,
    slotId: `home-feat-${p.slug}`,
    category: p.category,
    title: p.name,
    location: p.location,
    onClick: () => onProject(p.slug)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(60vh, 540px)',
      minHeight: 380,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "home-quote",
    src: C.quoteBanner.image,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,16,10,0.46)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: 'clamp(26px,3.4vw,44px)',
      lineHeight: 1.22,
      letterSpacing: '-0.01em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.quoteBanner.quote",
    text: C.quoteBanner.quote
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--cream-200)',
      opacity: 0.85,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.quoteBanner.attribution",
    text: C.quoteBanner.attribution
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-200)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    align: "center",
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.finalCta.overline",
    text: C.finalCta.overline
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,52px)',
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.finalCta.heading",
    text: C.finalCta.heading
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '20px auto 0',
      maxWidth: '46ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.finalCta.body",
    text: C.finalCta.body
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    onClick: () => onNav('contact')
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "home.finalCta.buttonLabel",
    text: C.finalCta.buttonLabel
  }))))));
}
window.HomeScreen = HomeScreen;
})();


/* ===== GalleryScreen.js ===== */
(function () {
/* Sybaris website — Gallery screen. Exposes window.GalleryScreen */
const IMG_G = 'assets/gallery/';
function GalleryScreen({
  onProject
}) {
  const {
    Overline,
    Tag,
    ProjectCard
  } = window.SybarisDesignSystem_c8b90c;
  const projects = window.SYBARIS_PROJECTS;
  const [filter, setFilter] = React.useState('All');
  // Gallery intro copy and filter chips come from content.js (gallery.*).
  const C = window.SITE_CONTENT.gallery;
  const FILTERS = C.filters;
  const matches = p => {
    if (filter === 'All') return true;
    const hay = (p.category + ' ' + p.materials.join(' ')).toLowerCase();
    return hay.includes(filter.toLowerCase());
  };
  const shown = projects.filter(matches);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'calc(var(--section-y) * 0.7) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "gallery.overline",
    text: C.overline
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,68px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '14ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "gallery.heading",
    text: C.heading
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: 22,
      maxWidth: '54ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "gallery.body",
    text: C.body
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      margin: '40px 0 8px'
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, shown.length, " ", shown.length === 1 ? 'project' : 'projects')), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-soft)',
      marginTop: 16
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '46px var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '34px 30px'
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    image: IMG_G + p.hero,
    slotId: `gallery-${p.slug}`,
    category: p.category,
    title: p.name,
    location: `${p.location} · ${p.year}`,
    ratio: "4 / 5",
    onClick: () => onProject(p.slug)
  })))));
}
window.GalleryScreen = GalleryScreen;
})();


/* ===== ProjectScreen.js ===== */
(function () {
/* Sybaris website — Project detail screen. Exposes window.ProjectScreen */
const IMG = 'assets/gallery/';
function ProjectScreen({
  slug,
  onNav,
  onProject
}) {
  const {
    Overline,
    Tag,
    Button,
    Divider,
    ImageSlot
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const projects = window.SYBARIS_PROJECTS;
  const idx = Math.max(0, projects.findIndex(p => p.slug === slug));
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  // Field labels and static copy on this page come from content.js (projectDetail.*).
  const C = window.SITE_CONTENT.projectDetail;
  React.useEffect(() => {
    const s = document.getElementById('kit-scroll');
    if (s) s.scrollTo({
      top: 0
    });
  }, [slug]);

  // Spread images into an editorial layout
  const imgs = p.images;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 'min(76vh, 640px)',
      minHeight: 460,
      overflow: 'hidden',
      marginTop: -78
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-hero`,
    src: IMG + p.hero,
    alt: p.name,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(20,16,10,0.34) 0%, rgba(20,16,10,0.05) 40%, rgba(20,16,10,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 var(--gutter) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('gallery'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cream-100)',
      marginBottom: 22,
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "arrow-left",
    size: 15,
    color: "currentColor"
  }), " ", /*#__PURE__*/React.createElement(EditableText, {
    id: "projectDetail.backToGalleryLabel",
    text: C.backToGalleryLabel
  })), /*#__PURE__*/React.createElement(Overline, {
    tone: "inverse",
    style: {
      marginBottom: 14,
      color: 'var(--cream-200)'
    }
  }, p.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,72px)',
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, p.name)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(36px,5vw,80px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      rowGap: 16,
      columnGap: 28
    }
  }, [[C.locationFieldLabel, p.location, 'projectDetail.locationFieldLabel'], [C.completedFieldLabel, p.year, 'projectDetail.completedFieldLabel'], [C.disciplineFieldLabel, p.category, 'projectDetail.disciplineFieldLabel']].map(([k, v, fid]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: fid
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      paddingTop: 3
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: fid,
    text: k
  })), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-soft)',
      margin: '28px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, p.materials.map(m => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    variant: "line"
  }, m)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "projectDetail.aboutOverline",
    text: C.aboutOverline
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(24px,2.6vw,34px)',
      lineHeight: 1.28,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, p.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16.5,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "projectDetail.aboutBodySuffix",
    text: C.aboutBodySuffix
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-img-0`,
    src: IMG + imgs[0]
  })), imgs.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 30
    }
  }, imgs.slice(1, 3).map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-img-${i + 1}`,
    src: IMG + src
  })))), imgs[3] && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `proj-${p.slug}-img-3`,
    src: IMG + imgs[3]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    tone: "inverse",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "projectDetail.nextProjectLabel",
    text: C.nextProjectLabel
  })), /*#__PURE__*/React.createElement("h2", {
    onClick: () => onProject(next.slug),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,52px)',
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, next.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-inverse-mut)',
      marginTop: 12
    }
  }, next.location, " \xB7 ", next.category)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onProject(next.slug),
    iconRight: /*#__PURE__*/React.createElement(Ic, {
      name: "arrow-right",
      size: 16,
      color: "currentColor"
    })
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "projectDetail.viewProjectButtonLabel",
    text: C.viewProjectButtonLabel
  })))));
}
window.ProjectScreen = ProjectScreen;
})();


/* ===== ExtraScreens.js ===== */
(function () {
/* Sybaris website — Craft & Contact screens. Exposes window.CraftScreen, window.ContactScreen */
const IMG_E = 'assets/gallery/';
function CraftScreen({
  onNav
}) {
  const {
    Overline,
    Button,
    Divider,
    ImageSlot
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  // All copy/images on this page come from content.js (craft.*).
  const C = window.SITE_CONTENT.craft;
  const steps = C.steps.map(s => [s.number, s.title, s.body]);
  // Studio team — portraits are editable ImageSlots (swap via ?edit). Defaults
  // (names/roles/photos) come from content.js (craft.team.members).
  const team = C.team.members;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'calc(var(--section-y) * 0.7) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.team-photo img{filter:grayscale(1);transition:filter 480ms ease}.team-photo:hover img{filter:grayscale(0)}`), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.team.overline",
    text: C.team.overline
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(24px,4vw,64px)',
      alignItems: 'end',
      marginBottom: 'clamp(40px,5vw,68px)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.6vw,50px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.team.headingLine1",
    text: C.team.headingLine1
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.team.headingLine2",
    text: C.team.headingLine2
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      margin: 0,
      maxInlineSize: '50ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.team.body",
    text: C.team.body
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'clamp(24px,3vw,40px)'
    }
  }, team.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-photo",
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: `team-${i}`,
    src: m.photo,
    alt: m.name
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 21,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: '18px 0 5px'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `craft.team.members.${i}.name`,
    text: m.name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `craft.team.members.${i}.role`,
    text: m.role
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.intro.overline",
    text: C.intro.overline
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(34px,5vw,66px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0,
      maxWidth: '16ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.intro.headingPlain",
    text: C.intro.headingPlain
  }), /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.intro.headingItalic",
    text: C.intro.headingItalic,
    style: {
      fontStyle: 'italic'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 44
    }
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      color: 'var(--brass-500)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line)',
      margin: '18px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `craft.steps.${i}.title`,
    text: t
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: `craft.steps.${i}.body`,
    text: d
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      height: 'min(58vh,520px)',
      minHeight: 360,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    id: "craft-feature",
    src: C.featureImage,
    style: {
      position: 'absolute',
      inset: 0
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-200)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,3.4vw,46px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.closingCta.heading",
    text: C.closingCta.heading
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    onClick: () => onNav('contact')
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "craft.closingCta.buttonLabel",
    text: C.closingCta.buttonLabel
  }))))));
}
window.CraftScreen = CraftScreen;
function ContactScreen() {
  const {
    Overline,
    Input,
    Textarea,
    Button
  } = window.SybarisDesignSystem_c8b90c;
  const Ic = window.Ic;
  const [sent, setSent] = React.useState(false);
  // Page copy, form labels and contact details come from content.js
  // (contact.* and contactDetails.*).
  const C = window.SITE_CONTENT.contact;
  const D = window.SITE_CONTENT.contactDetails;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'calc(var(--section-y) * 0.7) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(40px,6vw,90px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    rule: true,
    tone: "brass",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "contact.overline",
    text: C.overline
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(34px,4.4vw,58px)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "contact.heading",
    text: C.heading
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: 22,
      maxWidth: '44ch'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "contact.body",
    text: C.body
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-soft)',
      margin: '34px 0'
    }
  }), [['map-pin', D.address, 'contactDetails.address'], ['mail', D.email, 'contactDetails.email'], ['phone', D.phone, 'contactDetails.phone']].map(([ic, t, fid]) => /*#__PURE__*/React.createElement("div", {
    key: fid,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: ic,
    size: 18,
    color: "var(--brass-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: fid,
    text: t
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-sm)',
      padding: 'clamp(26px,3vw,40px)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "check",
    size: 30,
    color: "var(--brass-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      color: 'var(--text-strong)',
      margin: '16px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "contact.form.thankYouHeading",
    text: C.form.thankYouHeading
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--text-body)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "contact.form.thankYouBody",
    text: C.form.thankYouBody
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: C.form.nameLabel,
    placeholder: C.form.namePlaceholder
  }), /*#__PURE__*/React.createElement(Input, {
    label: C.form.emailLabel,
    type: "email",
    placeholder: C.form.emailPlaceholder
  })), /*#__PURE__*/React.createElement(Input, {
    label: C.form.locationLabel,
    placeholder: C.form.locationPlaceholder
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: C.form.messageLabel,
    rows: 4,
    placeholder: C.form.messagePlaceholder
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    fullWidth: true,
    onClick: () => setSent(true)
  }, /*#__PURE__*/React.createElement(EditableText, {
    id: "contact.form.submitButtonLabel",
    text: C.form.submitButtonLabel
  })))))));
}
window.ContactScreen = ContactScreen;
})();


/* ===== tweaks-panel.js ===== */
(function () {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})();


/* ===== overrides-loader + save button (authoring tool, only visible via ?edit) ===== */
(function () {

window.__overridesReady = false;
(function () {
  // Snapshot taken at export time — used only as a fallback when this page is
  // opened via file:// (browsers block fetch() of local sibling files there).
  // When served by any real server (the local edit server below, or once
  // deployed to Netlify/Vercel), the live JSON files are fetched instead, so
  // edits made and saved through ?edit show up without re-exporting anything.
  var EMBEDDED_IMAGE_OVERRIDES = {
  "home-feat-everson": {
    "src": "assets/uploads/edit-home-feat-everson.jpg",
    "x": 33.15789473684208,
    "y": 70.21052631578947
  },
  "team-4": {
    "src": "assets/uploads/edit-team-4.jpg",
    "x": 50,
    "y": 50
  },
  "team-5": {
    "src": "assets/uploads/edit-team-5.jpg",
    "x": 58.08080602575228,
    "y": 94.44444444444433
  },
  "home-feat-van-der-hoff": {
    "src": "assets/uploads/edit-home-feat-van-der-hoff.jpg",
    "x": 94.47368421052632,
    "y": 100
  },
  "gallery-vogel": {
    "src": "assets/uploads/edit-gallery-vogel.jpg",
    "x": 50,
    "y": 50
  },
  "home-statement": {
    "src": "assets/uploads/edit-home-statement.jpg",
    "x": 59.81338575746019,
    "y": 50.450693645689064
  },
  "team-0": {
    "src": "assets/uploads/edit-team-0.jpg",
    "x": 50,
    "y": 50
  },
  "team-6": {
    "src": "assets/uploads/edit-team-6.jpg",
    "x": 90.40396231192133,
    "y": 100
  },
  "home-feat-blakemore": {
    "src": "assets/uploads/edit-home-feat-blakemore.jpg",
    "x": 50,
    "y": 50
  },
  "team-7": {
    "src": "assets/uploads/edit-team-7.jpg",
    "x": 59.76431387442131,
    "y": 100
  },
  "team-3": {
    "src": "assets/uploads/edit-team-3.jpg",
    "x": 50,
    "y": 50
  },
  "gallery-metelerkamp": {
    "src": "assets/uploads/edit-gallery-metelerkamp.jpg",
    "x": 0.3276103251689189,
    "y": 87.73955693975225
  },
  "home-quote": {
    "src": "assets/uploads/edit-home-quote.jpg",
    "x": 51.55325443786987,
    "y": 65.00000000000003
  },
  "team-1": {
    "src": "assets/uploads/edit-team-1.jpg",
    "x": 51.68350784866898,
    "y": 32.05387369791668
  },
  "team-2": {
    "src": "assets/uploads/edit-team-2.jpg",
    "x": 50,
    "y": 50
  },
  "gallery-miller": {
    "src": "assets/uploads/edit-gallery-miller.jpg",
    "x": 19.86077385979728,
    "y": 53.669130067567586
  }
};
  var EMBEDDED_TEXT_OVERRIDES = {
  "craft.team.body": "We are a team of designers, cabinetmakers and finishers — the same people you’ll work with from the first sketch to the final fitting.",
  "craft.team.members.4.role": "DRAUGHTSMAN"
};

  function seed(imageOverrides, textOverrides) {
    Object.keys(imageOverrides || {}).forEach(function (id) {
      var st = imageOverrides[id]; if (!st) return;
      try { localStorage.setItem('sybaris:img:' + id, JSON.stringify({ src: st.src || null, x: st.x, y: st.y })); } catch (e) {}
    });
    Object.keys(textOverrides || {}).forEach(function (id) {
      var v = textOverrides[id];
      if (typeof v !== 'string') return;
      try { localStorage.setItem('sybaris:txt:' + id, v); } catch (e) {}
    });
  }

  var imgFetch = fetch('_image-overrides.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  var txtFetch = fetch('_content-overrides.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  Promise.all([imgFetch, txtFetch]).then(function (results) {
    seed(results[0] || EMBEDDED_IMAGE_OVERRIDES, results[1] || EMBEDDED_TEXT_OVERRIDES);
  }).finally(function () { window.__overridesReady = true; });

  function init() {
    if (!window.__sybImgEdit) { return setTimeout(init, 60); }
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Save to project';
    btn.style.cssText = 'position:fixed;right:22px;bottom:74px;z-index:1001;display:none;align-items:center;gap:8px;padding:11px 18px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:#1a1916;color:#FBF9F4;font:600 12.5px/1 system-ui,sans-serif;letter-spacing:.05em;cursor:pointer;box-shadow:0 10px 30px rgba(20,16,10,.3)';
    var toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;right:22px;bottom:122px;z-index:1001;display:none;padding:9px 15px;border-radius:999px;color:#14100a;font:600 12px/1 system-ui,sans-serif;box-shadow:0 8px 24px rgba(20,16,10,.28)';
    document.body.appendChild(btn);
    document.body.appendChild(toast);
    function setOn(on) { btn.style.display = on ? 'inline-flex' : 'none'; if (!on) toast.style.display = 'none'; }
    window.__sybImgEdit.subscribe(setOn);
    setOn(window.__sybImgEdit.on);
    function say(t, bg) { toast.textContent = t; toast.style.background = bg || '#9A7B4F'; toast.style.display = 'block'; }
    btn.addEventListener('click', function () {
      var edits = {};
      var textEdits = {};
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('sybaris:img:') === 0) {
          try { var v = JSON.parse(localStorage.getItem(k)); edits[k.slice(12)] = { src: v.src || null, x: v.x, y: v.y }; } catch (e) {}
        } else if (k && k.indexOf('sybaris:txt:') === 0) {
          textEdits[k.slice(12)] = localStorage.getItem(k);
        }
      }
      if (!Object.keys(edits).length && !Object.keys(textEdits).length) { say('Nothing to save yet'); return; }
      var label = btn.textContent; btn.disabled = true; btn.textContent = 'Saving…';
      // The password the editor-access prompt verified is cached for this tab
      // session (see EditGate in app-inline.jsx) — sent here so the save
      // endpoint can re-check it server-side. It's the server check that's
      // load-bearing; this is just what lets a real edit actually go through.
      var pw = null; try { pw = sessionStorage.getItem('sybaris:editpw'); } catch (e) {}
      fetch('/__save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ edits: edits, textEdits: textEdits, password: pw }) })
        .then(function (r) { return r.json().then(function (d) { return { status: r.status, d: d }; }); })
        .then(function (res) {
          var d = res.d;
          if (d && d.ok) { say('Saved ' + d.saved + ' image' + (d.saved === 1 ? '' : 's') + ' and ' + d.savedText + ' text change' + (d.savedText === 1 ? '' : 's') + ' ✓', '#5e6b4f'); return; }
          if (res.status === 401) {
            try { sessionStorage.removeItem('sybaris:editpw_ok'); sessionStorage.removeItem('sybaris:editpw'); } catch (e) {}
            say('Incorrect password — reload the page to try again', '#b3402f');
            return;
          }
          say('Save failed: ' + ((d && d.error) || '?'), '#b3402f');
        })
        .catch(function () { say('Save failed — is the save server running?', '#b3402f'); })
        .finally(function () { btn.disabled = false; btn.textContent = label; });
    });
  }
  init();
})();

})();


/* ===== app-inline.js (App + mount) ===== */
(function () {
const {
  useState,
  useEffect
} = React;

// ---- Tweaks: three controls that reshape the whole feel of the site ----
const TWEAK_DEFAULTS = {
  "palette": "cream",
  "display": "didone",
  "photo": "colour"
};

// Each palette re-maps the cream/stone neutrals and the brass accent trio.
// ink-* tokens are deliberately left alone — they fill the dark footer /
// stats sections, where --brass-300 stays a light tone for legibility.
const PALETTES = {
  cream: {
    // warm ivory & brass — the house default
    '--cream-50': '#FBF9F4',
    '--cream-100': '#F6F2EA',
    '--cream-200': '#EFE9DD',
    '--cream-300': '#E5DDCC',
    '--line-soft': '#E0D8C9',
    '--line': '#D2C9B6',
    '--stone-300': '#ABA496',
    '--brass-300': '#C2A878',
    '--brass-500': '#9A7B4F',
    '--brass-700': '#7C6240',
    '--accent': '#9A7B4F',
    '--accent-hover': '#7C6240',
    '--text-accent': '#7C6240'
  },
  gallery: {
    // crisp near-white with a charcoal accent — monochrome gallery
    '--cream-50': '#FFFFFF',
    '--cream-100': '#F7F7F4',
    '--cream-200': '#EEEEEA',
    '--cream-300': '#E5E5E0',
    '--line-soft': '#E7E6E1',
    '--line': '#D7D5CF',
    '--stone-300': '#B2B0A8',
    '--brass-300': '#D0CFC9',
    '--brass-500': '#3A3A35',
    '--brass-700': '#1A1A17',
    '--accent': '#2C2B27',
    '--accent-hover': '#000000',
    '--text-accent': '#3A3A35'
  },
  sage: {
    // cool botanical green-grey with a sage accent
    '--cream-50': '#F7F8F4',
    '--cream-100': '#EFF1EB',
    '--cream-200': '#E6E9E0',
    '--cream-300': '#DBDFD2',
    '--line-soft': '#DEE2D6',
    '--line': '#C9CFBE',
    '--stone-300': '#A6AC9B',
    '--brass-300': '#AEB89E',
    '--brass-500': '#5E6B4F',
    '--brass-700': '#47533B',
    '--accent': '#6E7A5E',
    '--accent-hover': '#525C44',
    '--text-accent': '#566049'
  }
};
const DISPLAY_FONTS = {
  didone: "'Playfair Display', 'Times New Roman', serif",
  grotesque: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
  garamond: "'Cormorant Garamond', Georgia, serif"
};
const PHOTO_FILTERS = {
  colour: 'none',
  warm: 'sepia(0.22) saturate(0.95) contrast(1.04) brightness(1.02)',
  mono: 'grayscale(1) contrast(1.06)'
};
function useApplyTheme(t) {
  useEffect(() => {
    const root = document.documentElement;
    const map = PALETTES[t.palette] || PALETTES.cream;
    Object.entries(map).forEach(([k, v]) => root.style.setProperty(k, v));
    root.style.setProperty('--font-display', DISPLAY_FONTS[t.display] || DISPLAY_FONTS.didone);
    root.style.setProperty('--photo-filter', PHOTO_FILTERS[t.photo] || 'none');
  }, [t.palette, t.display, t.photo]);
}

// The image-editing tools are an authoring/admin feature, not part of the
// live site. They only appear when the page is opened with an ?edit flag
// (e.g. index.html?edit) — AND only once the editor password (checked
// server-side by /__verify-edit, see api/verify-edit.js) has been entered.
// A normal visitor — even one who guesses ?edit — sees nothing different
// from the regular site until they know the password.
const EDIT_REQUESTED = /(?:[?&#])edit\b/.test(location.search + location.hash);
const EDITPW_SESSION_KEY = 'sybaris:editpw_ok';
const EDITPW_VALUE_KEY = 'sybaris:editpw';
function EditGate({
  onUnlock
}) {
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const submit = () => {
    if (!pw || busy) return;
    setBusy(true);
    setErr('');
    fetch('/__verify-edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: pw
      })
    }).then(r => r.json()).then(d => {
      if (d && d.ok) {
        try {
          sessionStorage.setItem(EDITPW_SESSION_KEY, '1');
          sessionStorage.setItem(EDITPW_VALUE_KEY, pw);
        } catch (e) {}
        onUnlock();
      } else {
        setErr('Incorrect password');
      }
    }).catch(() => setErr('Could not reach the editor service — check your connection.')).finally(() => setBusy(false));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(20,16,10,0.72)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FBF9F4',
      borderRadius: 14,
      padding: '28px 26px',
      maxWidth: 340,
      width: '100%',
      boxShadow: '0 20px 60px rgba(0,0,0,.35)',
      fontFamily: 'system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 6,
      color: '#14100a'
    }
  }, "Editor access"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#5b5447',
      marginBottom: 14,
      lineHeight: 1.5
    }
  }, "Enter the editor password to make changes to this site."), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') submit();
    },
    autoFocus: true,
    placeholder: "Password",
    style: {
      width: '100%',
      padding: '10px 12px',
      borderRadius: 8,
      border: '1px solid #d8d2c2',
      fontSize: 14,
      marginBottom: 10,
      boxSizing: 'border-box'
    }
  }), err && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#b3402f',
      fontSize: 12.5,
      marginBottom: 10
    }
  }, err), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: submit,
    disabled: busy || !pw,
    style: {
      width: '100%',
      padding: '11px 0',
      borderRadius: 8,
      border: 'none',
      background: '#14100a',
      color: '#FBF9F4',
      fontWeight: 600,
      fontSize: 13,
      cursor: busy || !pw ? 'default' : 'pointer',
      opacity: busy ? 0.65 : 1
    }
  }, busy ? 'Checking…' : 'Unlock editor')));
}

// ----- Image library catalog (real Sybaris photography) -----
const LIB = 'assets/library/';
const GAL = 'assets/gallery/';
const seq = (p, n) => {
  const a = [];
  for (let i = 1; i <= n; i++) a.push(`${p}-${String(i).padStart(2, '0')}.jpg`);
  return a;
};
const LIBRARY_GROUPS = [{
  label: 'Your photo library',
  items: [].concat(seq('blakemore', 4), seq('everson', 4), seq('hofmeyer', 4), seq('miller', 4), seq('nyman', 4), seq('thompson', 4), seq('vogel', 4), seq('kirsten', 6), seq('dejager', 3)).map(f => LIB + f)
}, {
  label: 'Original set',
  items: ['blakemore-01.jpg', 'blakemore-02.jpg', 'everson-01.jpg', 'everson-02.jpg', 'hofmeyer-01.jpg', 'hofmeyer-02.jpg', 'kondrat-01.jpg', 'kondrat-02.jpg', 'metelerkamp-01.jpg', 'metelerkamp-02.jpg', 'miller-01.jpg', 'miller-02.jpg', 'nyman-01.jpg', 'nyman-02.jpg', 'slack-01.jpg', 'slack-02.jpg', 'sturrock-01.jpg', 'sturrock-02.jpg', 'terblanche-01.jpg', 'terblanche-02.jpg', 'thompson-01.jpg', 'thompson-02.jpg', 'vogel-01.jpg', 'vogel-02.jpg', 'volkwyn-01.jpg', 'zimmerman-01.jpg', 'zimmerman-02.jpg', 'dejager-01.jpg'].map(f => GAL + f)
}];
function App() {
  const [view, setView] = useState({
    route: 'home',
    slug: null
  });
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useApplyTheme(t);
  const [editUnlocked, setEditUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(EDITPW_SESSION_KEY) === '1';
    } catch (e) {
      return false;
    }
  });
  const showEditUI = EDIT_REQUESTED && editUnlocked;
  const onNav = route => {
    setView({
      route,
      slug: null
    });
    const s = document.getElementById('kit-scroll');
    if (s) s.scrollTo({
      top: 0
    });
  };
  const onProject = slug => {
    setView({
      route: 'project',
      slug
    });
    const s = document.getElementById('kit-scroll');
    if (s) s.scrollTo({
      top: 0
    });
  };
  const overlay = view.route === 'home' || view.route === 'project';
  let screen;
  if (view.route === 'home') screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
    onNav: onNav,
    onProject: onProject
  });else if (view.route === 'gallery') screen = /*#__PURE__*/React.createElement(window.GalleryScreen, {
    onProject: onProject
  });else if (view.route === 'project') screen = /*#__PURE__*/React.createElement(window.ProjectScreen, {
    slug: view.slug,
    onNav: onNav,
    onProject: onProject
  });else if (view.route === 'craft') screen = /*#__PURE__*/React.createElement(window.CraftScreen, {
    onNav: onNav
  });else if (view.route === 'contact') screen = /*#__PURE__*/React.createElement(window.ContactScreen, null);else screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
    onNav: onNav,
    onProject: onProject
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Header, {
    route: view.route,
    onNav: onNav,
    overlay: overlay
  }), /*#__PURE__*/React.createElement("main", null, screen), /*#__PURE__*/React.createElement(window.Footer, {
    onNav: onNav
  }), showEditUI && /*#__PURE__*/React.createElement(window.SybarisDesignSystem_c8b90c.ImageEditToggle, null), showEditUI && /*#__PURE__*/React.createElement(window.SybarisDesignSystem_c8b90c.ImageLibrary, {
    groups: LIBRARY_GROUPS
  }), EDIT_REQUESTED && !editUnlocked && /*#__PURE__*/React.createElement(EditGate, {
    onUnlock: () => setEditUnlocked(true)
  }), /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Palette"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    value: t.palette,
    options: [{
      value: 'cream',
      label: 'Cream'
    }, {
      value: 'gallery',
      label: 'Gallery'
    }, {
      value: 'sage',
      label: 'Sage'
    }],
    onChange: v => setTweak('palette', v)
  }), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Display type"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    value: t.display,
    options: [{
      value: 'didone',
      label: 'Didone'
    }, {
      value: 'grotesque',
      label: 'Grotesk'
    }, {
      value: 'garamond',
      label: 'Garamond'
    }],
    onChange: v => setTweak('display', v)
  }), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Photography"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    value: t.photo,
    options: [{
      value: 'colour',
      label: 'Colour'
    }, {
      value: 'warm',
      label: 'Warm film'
    }, {
      value: 'mono',
      label: 'Mono'
    }],
    onChange: v => setTweak('photo', v)
  })));
}
function mount() {
  if (!window.HomeScreen || !window.Header || !window.SmoothScrollHero || !window.EditableText || !window.SybarisDesignSystem_c8b90c || !window.SITE_CONTENT || !window.__overridesReady) {
    return setTimeout(mount, 40);
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
  if (window.lucide) window.lucide.createIcons({
    attrs: {
      'stroke-width': 1.5
    }
  });
}
mount();
})();
