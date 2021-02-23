const generate = (function () {
  const repeatingPattern = (interval, maxParticles = 200) => {
    //loop maken -> requestAnimatioFrame() -> performate rendering
    //bijhouden hoeveel we er al hadden
    //warning canvas wordt altijd overschreden
    //draw
    //particle

    const drawParticles = (amount) => {
      const gutters = {
        x: window.innerWidth / (amount + 2),
        y: window.innerHeight / amount,
      };

      for (let i = 0; i < amount; i++) {
        draw.circle(i * gutters.x, i * gutters.y, { size: 20, color: "white" });
      }
    };

    let particleCount = 1;

    const loop = setInterval(() => {
      if (particleCount > maxParticles) {
        //   clearInterval(loop); 2 opties
        particleCount = 0;
      }
      draw.clearArea();
      drawParticles(particleCount);
      particleCount *= 2;
    }, interval);
  };

  return { repeatingPattern };
})();
