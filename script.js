const earth = document.getElementById('prueba')

// anime({
//   targets: '.container .earth',
//   rotate: 360,
//   easing: 'linear',
//   loop: true,
//   duration: 10000,
// })

// anime({
//   targets: '.container .sun',
//   rotate: 360,
//   easing: 'linear',
//   direction: 'normal',
//   loop: true,
//   duration: 10000,
// })

anime({
  targets: '.container div',
  rotateZ: anime.stagger([0, 360], { from: 'center', axis: 'y' }),
  // delay: anime.stagger(500, {from: 'center'}),
  duration: 7000,
  easing: 'linear',
  direction: 'normal',
  loop: true
})