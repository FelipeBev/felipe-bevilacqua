const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria ser 4", () => {
    const result = calculadora.soma(2, 2);
    expect(result).toBe(4);
})