import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Schedule } from './schedule';

@Injectable()
export class ScheduleService {

  constructor(private http: Http) { }


  /**
   * APIからScheduleを取得します
   * @param id {string} スケジュールのID
   */
  fetchSchedule(id?: string) {
    // TODO サーバ未実装
    // TODO クライアント未実装
  }

  /**
   * APIからScheduleを取得します
   * @param [date] {string} yyyyMMdd形式で指定する
   */
  fetchScheduleList(date?: string) {
    let url = environment.endpoint + 'schedule/';

    if (date) {
      url += '?date=' + date;
    }

    return this.http.get(url)
      .map(res => res.json().schedule as Schedule[]);
  }
}
