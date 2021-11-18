/* eslint-disable linebreak-style */
import MathCharacter from '../MathCharacter';


test.each([
  [true, 85],
  [false, 90],
])(('check parametr attack'), (stoned, result) => {
  const mag = new MathCharacter('garpunkul', 'deamon');
  mag.attack = 100;
  mag.stoned = stoned;
  mag.distance = 2;
  expect(mag.attack).toBe(result);
});
