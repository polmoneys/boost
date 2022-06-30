import Options from "./Interfaces/Options";
import styles from "./Track.module.css";

const ROOT_ACTIVE_CLASSNAME = styles.scrolling;

const initialOptions = {
  hasTouchEvent: true,
  dragSpeed: 2,
  smoothAmount: 0.1,
};

class Scroller {
  options: Options;
  containerTag: HTMLElement;
  sliderTag: HTMLElement;
  sliderTagLeft: number;
  sliderTagRight: number;
  dragSpeed: number;
  smoothAmount: number;
  down: boolean;
  startX: number;
  scrollLeft: number;
  isAnimating: boolean;
  x: number;
  dist: number;
  scrollAmount: number;
  stopAnimation: boolean;
  animationRef: any;
  scrollWidth: number;

  constructor(options: Options) {
    this.options = { ...initialOptions, ...options };
    this.containerTag = this.options?.container;
    this.sliderTag = this.options?.slider;

    const leftMargin: string = window
      .getComputedStyle(this.sliderTag)
      .getPropertyValue("margin-left");
    const rightMargin: string = window
      .getComputedStyle(this.sliderTag)
      .getPropertyValue("margin-right");

    this.sliderTagLeft = parseInt(leftMargin, 10);
    this.sliderTagRight = parseInt(rightMargin, 10);

    this.dragSpeed = this.getFloatNumber(this.options?.dragSpeed, 1, 1, 100);
    this.smoothAmount = this.getFloatNumber(
      this.options?.smoothAmount,
      0.15,
      0.01,
      1
    );

    this.down = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.isAnimating = false;
    this.x = 0;
    this.dist = 0;
    this.scrollAmount = 0;
    this.stopAnimation = false;
    this.animationRef = null;
    this.scrollWidth = this.getScrollWidth();

    this.init();
  }

  getScrollWidth = (): number => {
    return (
      this.sliderTag.scrollWidth -
      this.containerTag.offsetWidth +
      this.sliderTagLeft +
      this.sliderTagRight
    );
  };

  callCallback = (type: string, value: number | null): void => {
    switch (type) {
      case "mousedown":
        if (this.checkCallbackType(this.options?.mouseDown)) {
          this.options?.mouseDown?.();
        }
        break;
      case "mouseleave":
        if (this.checkCallbackType(this.options?.mouseLeave)) {
          this.options?.mouseLeave?.();
        }
        break;
      case "mouseup":
        if (this.checkCallbackType(this.options?.mouseUp)) {
          this.options?.mouseUp?.();
        }
        break;
      case "mousemove":
        if (this.checkCallbackType(this.options?.mouseEnter)) {
          this.options?.mouseEnter?.();
        }
        break;
      default:
        console.warn("No default callback");
        break;
    }
  };

  getEvent = (event: any): MouseEvent => {
    return event.targetTouches ? event.targetTouches[0] : event;
  };

  checkCallbackType = (option: any): boolean => {
    return !!(option && typeof option === "function");
  };

  mousedown = (e: Event): void => {
    if (!this.isAnimating) {
      this.anime();
    }

    const event = this.getEvent(e);

    this.down = true;
    this.startX = event.pageX - this.sliderTag.offsetLeft;
    this.scrollLeft = this.scrollAmount;

    this.sliderTag.classList.add(ROOT_ACTIVE_CLASSNAME);
    this.callCallback("mousedown", null);
  };

  mouseleave = (): void => {
    this.down = false;
    this.sliderTag.classList.remove(ROOT_ACTIVE_CLASSNAME);
    this.callCallback("mouseleave", null);
  };

  mouseup = (): void => {
    this.down = false;
    this.sliderTag.classList.remove(ROOT_ACTIVE_CLASSNAME);
    this.callCallback("mouseup", null);
  };

  mousemove = (e: Event): void => {
    this.callCallback("mousemove", null);

    const event = this.getEvent(e);

    if (!this.down) return;
    e.preventDefault();

    this.x = event.pageX - this.sliderTag.offsetLeft;
    this.dist = this.scrollLeft - (this.x - this.startX) * this.dragSpeed;
  };

  transformElement = (): void => {
    const amount = -this.scrollAmount.toFixed(3);
    this.sliderTag.style.transform = `translate3D(${amount}px, 0, 0)`;
  };

  map = (
    value: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => {
    return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
  };

  getFloatNumber = (
    value: any,
    defaultValue: number,
    min: number,
    max: number
  ): number => {
    if (isNaN(+value)) {
      return +defaultValue.toFixed(3);
    }

    const v = parseFloat((+value).toFixed(3));

    return v > max ? +max.toFixed(3) : v < min ? +min.toFixed(3) : v;
  };
  anime = (): void => {
    this.isAnimating = true;

    // Can't go over the slider
    if (this.dist + this.scrollAmount <= 0) {
      this.dist = 0;
    } else if (this.dist >= this.scrollWidth) {
      this.dist = this.scrollWidth;
    }

    // LERP functions
    this.scrollAmount = this.lerp(
      this.scrollAmount,
      this.dist,
      this.smoothAmount
    );
    this.transformElement();

    if (this.stopAnimation) {
      cancelAnimationFrame(this.animationRef);
    } else {
      this.animationRef = requestAnimationFrame(this.anime);
    }
  };
  lerp = (start: number, end: number, alpha: number): number => {
    return start * (1 - alpha) + end * alpha;
  };
  setRelativePosition = (x: number): void => {
    // Set new relative slider, moving it `x` distance
    this.x = this.sliderTag.offsetLeft - x;
    this.startX = this.sliderTag.offsetLeft;
    this.scrollLeft = this.scrollAmount;
    this.dist = this.scrollLeft - (this.x - this.startX) * this.dragSpeed;

    // Guards: Can't go over the slider
    if (this.dist + this.scrollAmount <= 0) return;
    if (this.dist >= this.scrollWidth) return;

    // Set slider active class
    this.sliderTag.classList.add(ROOT_ACTIVE_CLASSNAME);

    // Animate and transform
    this.anime();

    // Remove slider active class
    this.sliderTag.classList.remove(ROOT_ACTIVE_CLASSNAME);
  };

  init = (): void => {
    this.isAnimating = false;
    this.stopAnimation = false;

    // For better performance
    this.sliderTag.style.willChange = "transform";

    const isTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouchScreen) {
      this.containerTag.addEventListener("mousedown", this.mousedown);
      this.containerTag.addEventListener("mouseleave", this.mouseleave);
      this.containerTag.addEventListener("mouseup", this.mouseup);
      this.containerTag.addEventListener("mousemove", this.mousemove);
    } else if (isTouchScreen && this.options.hasTouchEvent) {
      this.containerTag.addEventListener("touchstart", this.mousedown);
      this.containerTag.addEventListener("touchleave", this.mouseleave);
      this.containerTag.addEventListener("touchend", this.mouseup);
      this.containerTag.addEventListener("touchmove", this.mousemove);
    } else if (isTouchScreen && !this.options.hasTouchEvent) {
      this.containerTag.style.overflowX = "scroll";
    }
  };

  destroy = (): void => {
    this.stopAnimation = true;
    this.containerTag.removeEventListener("mousedown", this.mousedown);
    this.containerTag.removeEventListener("mouseleave", this.mouseleave);
    this.containerTag.removeEventListener("mouseup", this.mouseup);
    this.containerTag.removeEventListener("mousemove", this.mousemove);

    this.containerTag.removeEventListener("touchstart", this.mousedown);
    this.containerTag.removeEventListener("touchleave", this.mouseleave);
    this.containerTag.removeEventListener("touchend", this.mouseup);
    this.containerTag.removeEventListener("touchmove", this.mousemove, false);
  };
}

export default Scroller;
