// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
it('#1 isPhoneNumber',() => {
    expect(functions.isPhoneNumber('951-756-4222')).toBe(true);
});
it('#2 isPhoneNumber',() => {
    expect(functions.isPhoneNumber('619-619-6196')).toBe(true);
});
it('#3 isPhoneNumber',() => {
    expect(functions.isPhoneNumber('951')).toBe(false);
});
it('#4 isPhoneNumber',() => {
    expect(functions.isPhoneNumber('951@@@@@@')).toBe(false);
});


it('#1 isEmail',() => {
    expect(functions.isEmail('jchantha@ucsd.edu')).toBe(true);
});
it('#2 isEmail',() => {
    expect(functions.isEmail('suksavahn1999@gmail.com')).toBe(true);
});
it('#3 isEmail',() => {
    expect(functions.isEmail('dala350@')).toBe(false);
});
it('#4 isEmail',() => {
    expect(functions.isEmail('yah00.com')).toBe(false);
});


it('#1 isStrongPassword',() => {
    expect(functions.isStrongPassword('qwerty_1')).toBe(true);
});
it('#2 isStrongPassword',() => {
    expect(functions.isStrongPassword('qwerty')).toBe(true);
});
it('#3 isStrongPassword',() => {
    expect(functions.isStrongPassword('1111111')).toBe(false);
});
it('#4 isStrongPassword',() => {
    expect(functions.isStrongPassword('qq')).toBe(false);
});


it('#1 isDate',() => {
    expect(functions.isDate('10/01/1999')).toBe(true);
});
it('#2 isDate',() => {
    expect(functions.isDate('10/11/1976')).toBe(true);
});
it('#3 isDate',() => {
    expect(functions.isDate('12/11/19')).toBe(false);
});
it('#4 isDate',() => {
    expect(functions.isDate('120/15/1976')).toBe(false);
});

it('#1 isHexColor',() => {
    expect(functions.isHexColor('000')).toBe(true);
});
it('#2 isHexColor',() => {
    expect(functions.isHexColor('b21cbd')).toBe(true);
});
it('#3 isHexColor',() => {
    expect(functions.isHexColor('11111111')).toBe(false);
});
it('#4 isHexColor',() => {
    expect(functions.isHexColor('abcedfg')).toBe(false);
});