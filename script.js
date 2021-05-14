var t1 = anime.timeline({
  duration: 40000,
  // loop: true,
  // direction: 'alternate'
})

t1.add({
  targets: '.grid-container div',
  translateX: anime.stagger(10, { grid: [20, 20], from: 'center', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [20, 20], from: 'center', axis: 'y' }),
  rotateZ: anime.stagger([0, 90], { grid: [20, 20], from: 'center', axis: 'x' }),
  delay: anime.stagger(100, { grid: [20, 20], from: 'center' }),
  easing: 'easeInExpo',
  duration: 1000,
})

t1.add({
  targets: '.grid-container div',
  opacity: {
    value: [1, .3],
    easing: 'linear',
    duration: 1000,
  },
  // startDelay: 500,
  // endDelay: 500,
  borderRadius: {
    value: [0, '50%'],
    duration: 1000,
    easing: 'linear'
  }
})

t1.add({
  targets: '.grid-container div',
  opacity: {
    value: [.3, 1],
    easing: 'linear',
    duration: 1000,
  },
  // startDelay: 500,
  // endDelay: 500,
  borderRadius: {
    value: ['50%', 0],
    duration: 1000,
    easing: 'linear'
  }
})

t1.add({
  targets: '.grid-container div',
  translateX: anime.stagger(0, { grid: [20, 20], from: 'center', axis: 'x' }),
  translateY: anime.stagger(0, { grid: [20, 20], from: 'center', axis: 'y' }),
  rotateZ: anime.stagger([0, 0], { grid: [20, 20], from: 'center', axis: 'x' }),
  delay: anime.stagger(100, { grid: [20, 20], from: 'center' }),
  easing: 'easeInExpo',
  duration: 1000,
})

t1.add({
  targets: '.grid-container div',
  rotate: anime.stagger([-900, 0], {
    grid: [20, 20],
    from: 'center',
    easing: 'linear',
    // duration: 30000,
    axis: 'z'
  }),
  easing: 'linear',
  duration: 3000
})

t1.add({
  targets: '.grid-container div',
  rotate: {
    grid: [20, 20],
    from: 'center',
    value: 0,
    easing: 'linear',
    duration: 3000,
  },
})

t1.add({
  targets: '.grid-container div',
  translateX: anime.stagger(10, { grid: [20, 20], from: 'center', axis: 'y' }),
  translateY: anime.stagger(10, { grid: [20, 20], from: 'center', axis: 'x' }),
  rotateZ: anime.stagger([0, 90], { grid: [20, 20], from: 'center', axis: 'y' }),
  delay: anime.stagger(100, { grid: [20, 20], from: 'center' }),
  easing: 'easeInExpo',
  duration: 1000,
})

t1.add({
  targets: '.grid-container div',
  opacity: {
    value: [1, .3],
    easing: 'linear',
    duration: 1000,
  },
  direction: 'alternate',
  loop: true,
  startDelay: 500,
  endDelay: 500,
  borderRadius: {
    value: [0, '50%'],
    duration: 1000,
    easing: 'linear'
  }
})

t1.add({
  targets: '.grid-container div',
  translateX: anime.stagger(0, { grid: [20, 20], from: 'center', axis: 'y' }),
  translateY: anime.stagger(0, { grid: [20, 20], from: 'center', axis: 'x' }),
  rotateZ: anime.stagger(0, { grid: [20, 20], from: 'center', axis: 'y' }),
  // delay: anime.stagger(100, { grid: [20, 20], from: 'center' }),
  easing: 'easeInExpo',
  duration: 1000,
})

t1.add({
  targets: '.grid-container div',
  translateX: '50px',
  duration: 1000,
  easing: 'linear'
})

t1.add({
  targets: '.grid-container div',
  translateY: '50px',
  duration: 1000,
  easing: 'linear'
})


console.log('animation complete')