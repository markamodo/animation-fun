
anime({
  targets: ['.container .earth .img'],
  rotate: 360,
  easing: 'linear',
  loop: true,
  duration: 10000,
})

anime({
  targets: '.container .sun .img',
  easing: 'linear',
  direction: 'normal',
  loop: true,
  rotate: 360,
  duration: 10000,
})

anime({
  targets: '.container .sun .img',
  opacity: {
    value: [1, 0.3],
    easing: 'linear',
    duration: 5000
  },
  direction: 'alternate',
  loop: true
})

  anime({
    targets: ".container .internal-container",
    rotate: [0, 360],
    duration: 100000,
    direction: "normal",
    easing: "linear",
    loop: true,
  });

  // anime({
  //   targets: ".container .space-rock",
  //   translateX: 10000,
  //   direction: "normal",
  //   easing: "linear",
  //   duration: 300000
  // });
  anime({
    targets: ".container .space-rock",
    translateX: 10000,
    direction: "normal",
    easing: "linear",
    duration: 500000,
  });

  anime({
    targets: ".container .space-rock-2",
    translateX: 10000,
    direction: "normal",
    easing: "linear",
    duration: 800000,
  });

  anime({
    targets: ".img-space-rock",
    rotate: 360,
    duration: 30000,
    easing: 'linear',
    direction: 'normal',
    loop: true
  })

  anime({
    targets: ".container .falling-star",
    translateX: -250,
    translateY: 250,
    direction: "normal",
    easing: "linear",
    duration: 30000,
    opacity: {
      value: [1, 0],
      duration: 30000
    },
    top: '20px',
    loop: true
  });

  anime({
    targets: ".container .falling-star-2",
    delay: 3000,
    translateX: -250,
    translateY: 250,
    direction: "normal",
    easing: "linear",
    duration: 30000,
    opacity: {
      value: [1, 0],
      duration: 30000
    },
    top: '20px',
    loop: true
  });

  anime({
    targets: ".container .ovni-2",
    translateX: 950,
    translateY: -850,
    direction: "normal",
    easing: "linear",
    duration: 3000,
    delay: 9000,
    opacity: {
      value: 1,
      duration: 500
    },
    top: '20px',
  });
// anime({
//   targets: ".container .rotate",
//   rotate: [0, 360],
//   duration: 10000,
//   direction: "normal",
//   easing: "linear",
//   loop: true,
// });

// anime({
//   targets: '.container div',
//   rotateZ: anime.stagger([0, 360], { from: 'center', axis: 'y' }),
//   // delay: anime.stagger(500, {from: 'center'}),
//   duration: 7000,
//   easing: 'linear',
//   direction: 'normal',
//   loop: true
// })