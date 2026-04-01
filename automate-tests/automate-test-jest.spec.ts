import * as testProject from "./automate-test-jest";

describe('testProject', () => {//to group the tests
 it('calculate the sum of two numbers', ()=>{//define the case of test / can be "test" or "it"
  //arrange - prepare the data/state
  const a = 2;
  const b = 3;

  //act - run the action to test
  const result = testProject.sum(a,b);

  //assert - verify the result
  expect(result).toBe(5);
 });

 it('incorrect call forced error', ()=>{
  const a = 2;
  const b = 3;

  const result = testProject.subtraction(a,b);

  expect(result).toBe(5);
 })
});

/*
Main CLI jest commands:
jest - run tests
jest --watch - stay observing the changes
jest --coverage - show the percent of covered code per tests
*/