(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const canvasElement = document.querySelector(".js-canvas");
    if (!canvasElement) throw new Error("The canvas could not be loaded!");

    //constructor pattern
    const p1 = new Particle(48, "brown");
    const p2 = new Particle(48, "yellow");
    const p3 = new Particle(48, "green");

    //module pattern
    draw.setup(canvasElement);
    draw.circle(200, 150, p1);
    draw.circle(150, 150, p2);
    draw.circle(95, 150, p3);

   generate.repeatingPattern(1000, 200); //circular, square
  });
})();
