import { IDnumberPipe } from './idnumber.pipe';

describe('IDnumberPipe', () => {
  it('create an instance', () => {
    const pipe = new IDnumberPipe();
    expect(pipe).toBeTruthy();
  });
});
