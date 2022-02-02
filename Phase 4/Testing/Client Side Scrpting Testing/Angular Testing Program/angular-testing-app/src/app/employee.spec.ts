import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    let emp = new Employee(100,'Raj',21);
    expect(emp).toBeTruthy();
    expect(emp.id).toEqual(100);
    expect(emp.name).toEqual("Raj");
    expect(emp.age).toEqual(21);
  });
});
