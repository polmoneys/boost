/*
  black(10);
*/

export const black = (percent: number) => `rgba(0,0,0,${percent / 100})`;

/**
 * Utility to build a range of color shades out of an initial color
 */

export function shadeColor(color: string, percent: number) {
  color = color.substr(1);
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

/**
 * Utility to fill lines with gradients according to a value
 * <li data-width="44"/>
 * <li data-width="89"/>
 * hint: quick horizonatal bar charts
 */

export function gradient(
  selector: string = "li",
  gradient: string = "90deg, #bf71ff 3%, #1cbfff, #6afff3 100%",
  chart?: boolean
) {
  const lines = document.querySelectorAll(selector) as any;

  for (const line of lines) {
    const width = line.dataset.width;
    const inverse = (100 / Number(width)) * 100;
    line.style.backgroundImage = `linear-gradient(${gradient})`;
    line.style.backgroundSize = inverse + "% 100%";
    if (chart !== undefined) {
      line.style.width = width + "%";
    }
  }
}
