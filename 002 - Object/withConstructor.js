/**
 *
 * @param y
 * @constructor
 */
function Foo(y) {
    this.y = y;
}

/**
 *
 * @type {number}
 */
Foo.prototype.x = 10;

/**
 *
 * @param z
 * @returns {*}
 */
Foo.prototype.calculate = function(z) {
  return this.x + this.y + z;
};

let firstAnswer = new Foo(10);
let secondAnswer = new Foo(20);
let thirdAnswer = new Foo(50);

console.log(firstAnswer.calculate(10)); // 30
console.log(secondAnswer.calculate(10)); // 40
console.log(thirdAnswer.calculate(10)); // 70
