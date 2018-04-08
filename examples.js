Examples = {
  bird: {
    axiom: 'F',
    iterations: 8,
    angle: 0.38,
    'angle-chaos': 0.1,
    'distance-chaos': 0.1,
    rules: [
      { value: 'F', replacement: 'F[RF][LF]' }
    ]
  },
  dandelion: {
    axiom: 'F',
    iterations: 7,
    angle: 0.3,
    'angle-chaos': 0.7,
    'distance-chaos': 0.4,
    rules: [
      { value: 'F', replacement: 'F[RF][LF]' }
    ]
  },
  coral: {
    axiom: 'F',
    iterations: 7,
    angle: 1.3,
    'angle-chaos': 0,
    'distance-chaos': 0,
    rules: [
      { value: 'F', replacement: 'FRFLLFRF' }
    ]
  },
  koch: {
    axiom: 'F',
    iterations: 7,
    angle: 0.7853,
    'angle-chaos': 0,
    'distance-chaos': 0,
    rules: [
      { value: 'F', replacement: 'FRFLFLFRF' }
    ]
  }
};
