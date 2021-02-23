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

      for (let i = 1; i < amount; i++) {
        // ! niet af
        // console.log(window.innerWidth);
        // console.log(window.innerHeight);
        // console.log(gutters.x);
        // console.log(gutters.y);
        // console.log({amount});
        draw.circle(window.innerWidth / 2, window.innerHeight / 2, {
          size: 20,
          color: "white",
        });
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
