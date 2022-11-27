function pagemap(canvas: HTMLCanvasElement, options: any) {
  const WIN = window;
  const DOC = WIN?.document;
  const DOC_EL = DOC.documentElement;
  const BODY = DOC.querySelector("body");
  const CTX = canvas.getContext("2d");

  const black = (pc: number) => `rgba(0,0,0,${pc / 100})`;
  const settings = Object.assign(
    {
      viewport: null,
      styles: {
        "header,footer,section,article": black(8),
        "h1,a": black(10),
        "h2,h3,h4": black(8),
      },
      back: black(2),
      view: black(5),
      drag: black(10),
      interval: null,
    },
    options
  );

  const _listener = (el: any, method: any, types: any, fn: any) =>
    types.split(/\s+/).forEach((type: any) => el[method](type, fn));
  const on = (el: any, types: any, fn: any) =>
    _listener(el, "addEventListener", types, fn);
  const off = (el: any, types: any, fn: any) =>
    _listener(el, "removeEventListener", types, fn);

  const Rect = (x: number, y: number, w: number, h: number) => {
    return { x, y, w, h };
  };

  const rect_rel_to = (
    rect: { x: number; y: number; w: number; h: number },
    pos = { x: 0, y: 0 }
  ) => {
    return Rect(rect.x - pos.x, rect.y - pos.y, rect.w, rect.h);
  };

  const rect_of_doc = () => {
    return Rect(0, 0, DOC_EL.scrollWidth, DOC_EL.scrollHeight);
  };

  const rect_of_win = () => {
    return Rect(
      WIN.pageXOffset,
      WIN.pageYOffset,
      DOC_EL.clientWidth,
      DOC_EL.clientHeight
    );
  };

  const el_get_offset = (el: HTMLElement) => {
    const br = el.getBoundingClientRect();
    return { x: br.left + WIN.pageXOffset, y: br.top + WIN.pageYOffset };
  };

  const rect_of_el = (el: HTMLElement) => {
    const { x, y } = el_get_offset(el);
    return Rect(x, y, el.offsetWidth, el.offsetHeight);
  };

  const rect_of_viewport = (el: HTMLElement) => {
    const { x, y } = el_get_offset(el);
    return Rect(
      x + el.clientLeft,
      y + el.clientTop,
      el.clientWidth,
      el.clientHeight
    );
  };

  const rect_of_content = (el: HTMLElement) => {
    const { x, y } = el_get_offset(el);
    return Rect(
      x + el.clientLeft - el.scrollLeft,
      y + el.clientTop - el.scrollTop,
      el.scrollWidth,
      el.scrollHeight
    );
  };

  const calc_scale = (() => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    return (w: number, h: number) => Math.min(width / w, height / h);
  })();

  const resize_canvas = (w: number, h: number) => {
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
  };

  const viewport = settings.viewport;
  const find = (sel: any) =>
    Array.from((viewport || DOC).querySelectorAll(sel));

  let drag = false;

  let root_rect: any;
  let view_rect: any;
  let scale: any;
  let drag_rx: any;
  let drag_ry: any;

  const draw_rect = (rect: any, col: any) => {
    if (!CTX) return;
    if (col) {
      CTX.beginPath();
      CTX.rect(rect.x, rect.y, rect.w, rect.h);
      CTX.fillStyle = col;
      CTX.fill();
    }
  };

  const apply_styles = (styles: any) => {
    Object.keys(styles).forEach(sel => {
      const col = styles[sel];
      find(sel).forEach(el => {
        draw_rect(rect_rel_to(rect_of_el(el as HTMLElement), root_rect), col);
      });
    });
  };

  const draw = () => {
    root_rect = viewport ? rect_of_content(viewport) : rect_of_doc();
    view_rect = viewport ? rect_of_viewport(viewport) : rect_of_win();
    scale = calc_scale(root_rect.w, root_rect.h);

    resize_canvas(root_rect.w * scale, root_rect.h * scale);
    if (CTX) {
      CTX.setTransform(1, 0, 0, 1, 0, 0);
      CTX.clearRect(0, 0, canvas.width, canvas.height);
      CTX.scale(scale, scale);
    }

    draw_rect(rect_rel_to(root_rect, root_rect), settings.back);
    apply_styles(settings.styles);
    draw_rect(
      rect_rel_to(view_rect, root_rect),
      drag ? settings.drag : settings.view
    );
  };

  const on_drag = (ev: any) => {
    ev.preventDefault();
    const cr = rect_of_viewport(canvas);
    const x = (ev.pageX - cr.x) / scale - view_rect.w * drag_rx;
    const y = (ev.pageY - cr.y) / scale - view_rect.h * drag_ry;

    if (viewport) {
      viewport.scrollLeft = x;
      viewport.scrollTop = y;
    } else {
      WIN.scrollTo(x, y);
    }
    draw();
  };

  const on_drag_end = (ev: any) => {
    drag = false;
    canvas.style.cursor = "pointer";
    if (BODY) {
      BODY.style.cursor = "auto";
    }
    off(WIN, "mousemove", on_drag);
    off(WIN, "mouseup", on_drag_end);
    on_drag(ev);
  };

  const on_drag_start = (ev: any) => {
    drag = true;

    const cr = rect_of_viewport(canvas);
    const vr = rect_rel_to(view_rect, root_rect);
    drag_rx = ((ev.pageX - cr.x) / scale - vr.x) / vr.w;
    drag_ry = ((ev.pageY - cr.y) / scale - vr.y) / vr.h;
    if (drag_rx < 0 || drag_rx > 1 || drag_ry < 0 || drag_ry > 1) {
      drag_rx = 0.5;
      drag_ry = 0.5;
    }

    canvas.style.cursor = "crosshair";
    if (BODY) {
      BODY.style.cursor = "crosshair";
    }
    on(WIN, "mousemove", on_drag);
    on(WIN, "mouseup", on_drag_end);
    on_drag(ev);
  };

  const init = () => {
    canvas.style.cursor = "pointer";
    on(canvas, "mousedown", on_drag_start);
    on(viewport || WIN, "load resize scroll", draw);
    if (settings.interval > 0) {
      setInterval(() => draw(), settings.interval);
    }
    draw();
  };

  init();

  return {
    redraw: draw,
  };
}
export default pagemap;
