import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateJp'
})
export class DateJpPipe implements PipeTransform {

  private dateJpPipe: DatePipe;

  constructor() {
    this.dateJpPipe = new DatePipe('en-US');
  }

  transform(date: any, format?: any): any {
    const week = {'Mon': '月','Tue': '火','Wed': '水','Thu': '木','Fri': '金','Sat': '土','Sun': '日'};
    if (!date) return;
    let dateFormat = this.dateJpPipe.transform(date, format);
    dateFormat.match(/([a-z]+)/i).map((val, index) => {
      if (index === 0) return;
      // 最初の要素は使わないので抜ける
      dateFormat = dateFormat.replace(new RegExp(val, 'i'), week[val]);
    });
    return dateFormat;
  }

}
