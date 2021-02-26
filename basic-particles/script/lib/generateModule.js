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
        y: window.innerHeight / (amount + 2),
      };

      // niet af
      for (let i = 1; i < gutters.x + 1; i++) {
        for(let j = 1; j < gutters.y + 1; j++) {
          draw.circle(gutters.x * i, gutters.y * j, {
            size: 20,
            color: "white",
          });
        }        
      }
    };

    let particleCount = 1;

    const loop = setInterval(() => {
      if (particleCount > maxParticles) {
        //   clearInterval(loop); 2 opties
        particleCount = 1;
      }
      draw.clearArea();
      drawParticles(particleCount);
      particleCount *= 2;
    }, interval);
  };

  return { repeatingPattern };
})();
