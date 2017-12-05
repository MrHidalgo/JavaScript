/**
 *
 * @type {{x: number, calculate(*): *}}
 */
let mainObject = {
    x: 10,
    calculate (z) {
        return this.x + this.y + z;
    }
};

/**
 * Old version
 * @type {{y: number, __proto__: {x: number, calculate(*): *}}}
 */
let firstObject = {
    y: 10,
    __proto__: mainObject
};

/**
 *
 * @type {{y: number, __proto__: {x: number, calculate, (*): *}}}
 */
let secondObject = {
    y: 20,
    __proto__: mainObject
};

/**
 * ECMAScript 5
 * @type {mainObject}
 */
let es5 = Object.create(mainObject, {
   y: {
       value: 50
   }
});

console.log(firstObject.calculate(10)); // 30
console.log(secondObject.calculate(20)); // 50
console.log(es5.calculate(50)); // 110
