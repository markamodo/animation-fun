const earth = document.getElementById('prueba')

anime({
  targets: ['.container .earth .img', '.container .moon .img'],
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
  duration: 10000,
})

anime({
  targets: '.container .sun .img',
  opacity: {
    value: [1, 0.6],
    easing: 'linear',
    duration: 5000
  },
  rotate: 360,
  easing: 'linear',
  duration: 50000,
  direction: 'alternate',
  loop: true
})

anime({
  targets: ".container .internal-container",
  rotate: [0, 360],
  duration: 10000,
  direction: "normal",
  easing: "linear",
  loop: true,
});

// anime({
//   targets: '.container div',
//   rotateZ: anime.stagger([0, 360], { from: 'center', axis: 'y' }),
//   // delay: anime.stagger(500, {from: 'center'}),
//   duration: 7000,
//   easing: 'linear',
//   direction: 'normal',
//   loop: true
// })