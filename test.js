const { test, expect, start } = require("./index");

test("[common] test pass (sync)", (done) => {
  done();
});

test("[common] test pass (async)", (done) => {
  setTimeout(() => {
    done();
  }, 1000);
});

test("[common] test expect(100).toBe(100)", (done) => {
  expect(1).toBe(1);
  done();
});

test('[common] test expect("string").toBe("string")', (done) => {
  expect("string").toBe("string");
  done();
});

test("[common] test expect(true).toBe(true)", (done) => {
  expect(true).toBe(true);
  done();
});

test("[common] test expect(null).toBe(null)", (done) => {
  expect(null).toBe(null);
  done();
});

test("[common] test expect(100).notToBe(200)", (done) => {
  expect(100).notToBe(200);
  done();
});

test('[common] test expect("string").notToBe("number")', (done) => {
  expect("string").notToBe("number");
  done();
});

test("[common] test expect(true).notToBe(false)", (done) => {
  expect(true).notToBe(false);
  done();
});

test("[common] test expect(null).notToBe({})", (done) => {
  expect(null).notToBe({});
  done();
});

test("[common] test expect(100).toBeTruthy()", (done) => {
  expect(100).toBeTruthy();
  done();
});

test('[common] test expect("string").toBeTruthy()', (done) => {
  expect("string").toBeTruthy();
  done();
});

test("[common] test expect({}).toBeTruthy()", (done) => {
  expect({}).toBeTruthy();
  done();
});

test("[common] test expect(true).toBeTruthy()", (done) => {
  expect({}).toBeTruthy();
  done();
});

test("[common] test expect(0).toBeFalsy()", (done) => {
  expect(0).toBeFalsy();
  done();
});

test("[common] test expect(null).toBeFalsy()", (done) => {
  expect(null).toBeFalsy();
  done();
});

test('[common] test expect("").toBeFalsy()', (done) => {
  expect("").toBeFalsy();
  done();
});

test("[common] test expect(undefined).toBeFalsy()", (done) => {
  expect(undefined).toBeFalsy();
  done();
});

test("[number] test expect(100).toBeGreaterThan(50)", (done) => {
  expect(100).toBeGreaterThan(50);
  done();
});

test("[number] test expect(100).toBeGreaterThanOrEqual(100)", (done) => {
  expect(100).toBeGreaterThanOrEqual(100);
  done();
});

test("[number] test expect(100).toBeLessThan(200)", (done) => {
  expect(100).toBeLessThan(200);
  done();
});

test("[number] test expect(100).toBeLessThanOrEqual(100)", (done) => {
  expect(100).toBeLessThanOrEqual(100);
  done();
});

test("[Array] test expect([1, 2, 3, 4, 5]).toContain(3)", (done) => {
  expect([1, 2, 3, 4, 5]).toContain(3);
  done();
});

test("[Array] test expect([1, 2, 3, 4, 5]).notToContain(100)", (done) => {
  expect([1, 2, 3, 4, 5]).notToContain(100);
  done();
});

test('[string] test expect("hello, world!").toMatch(/world/)', (done) => {
  expect("hello, world!").toMatch(/world/);
  done();
});

test('[string] test expect("hello, world!").notToMatch(/welcome/)', (done) => {
  expect("hello, world!").notToMatch(/welcome/);
  done();
});

test("[function] test expect(function-throwing-error).toThrow()", (done) => {
  function f1() {
    throw new Error();
  }
  expect(f1).toThrow();
  done();
});

test("[function] test expect(function-throwing-error).toThrow(message)", (done) => {
  expect(() => {
    throw new Error("error message");
  }).toThrow("error message");
  done();
});

test("[function] test expect(function-without-error).notToThrow()", (done) => {
  expect(() => {}).notToThrow();
  done();
});

start();
