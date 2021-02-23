// (revealing) Module pattern
const draw = (function () {
  // Deze iife || self invocing function maakt een 'state' aan en is dus een closure.

  let ctx = null;
  let canvasElement = null;

  const matchCanvasToWindow = () => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
  };

  const setup = (par_canvasElement) => {
    canvasElement = par_canvasElement;
    window.addEventListener("resize", function () {
      matchCanvasToWindow(canvasElement);
    });
    matchCanvasToWindow(canvasElement);
    ctx = canvasElement.getContext("2d");
  };

  const circle = (x, y, { size, color }) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
  };

  const clearArea = () => {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  }

  return { setup, circle, clearArea };
})();

// todo - module pattern voor een generator module pattern - hierin maken we een timer die (punten tekent vanuit het middenpunt, omde seconde, timer kan geannuleerd worden, exponentieel punten erbij renderen, bepaalde bovenlimit heeft)
