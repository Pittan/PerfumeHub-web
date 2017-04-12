import { DateJpPipe } from './date-jp.pipe';

fdescribe('DatePipeJpPipe', () => {
  it('create an instance', () => {
    const pipe = new DateJpPipe();
    expect(pipe).toBeTruthy();
  });

  it('2017/02/25 の曜日は土になる', () => {
    const pipe = new DateJpPipe();
    expect(pipe.transform('2017/02/25', 'EEE')).toEqual('土');
  });
});

