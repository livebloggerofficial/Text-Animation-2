const heading = new SplitType(".text-container h2", { types: "chars" });
const paragraph = new SplitType(".text-container p", { types: "words" });

const tl = gsap.timeline();

tl.to(
  ".text-container h2",
  {
    height: "auto",
  },
  "+=0.5"
)
  .to(".text-container h2 .char", {
    rotateY: 0,
    opacity: 1,
    stagger: 0.1,
  })
  .to(".text-container p", {
    height: "auto",
    padding: 16,
  })
  .to(
    ".text-container p .word",
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
      stagger: 0.1,
    },
    "-=0.4"
  );
