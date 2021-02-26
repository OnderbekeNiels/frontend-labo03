(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const canvasElement = document.querySelector(".js-canvas");
    if (!canvasElement) throw new Error("The canvas could not be loaded!");

    //  ! Oefening 1
    // //constructor pattern
    // const p1 = new Particle(48, "brown");
    // const p2 = new Particle(48, "yellow");
    // const p3 = new Particle(48, "green");

    // //module pattern
    // draw.setup(canvasElement);
    // draw.circle(200, 150, p1);
    // draw.circle(150, 150, p2);
    // draw.circle(95, 150, p3);
    //generate.repeatingPattern(1000, 200); //circular, square

    // ! Oefening 2: Particles renderen op ons scherm.
    const ctx = draw.setup(canvasElement);
    const particles = sparks.generate(ctx, 500);
    sparks.render(particles);
    sparks.animate(ctx, particles);
    sparks.enableMouseListener();
  });
})();
