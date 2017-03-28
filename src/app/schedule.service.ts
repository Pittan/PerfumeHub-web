import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
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

  /**
   * Scheduleを作成します
   * @returns {Observable<R>}
   */
  postSchedule(schedule: Schedule, isWeeklySchedule: boolean) {
    const url = environment.endpoint + 'schedule/';
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({ headers: headers , withCredentials: true});

    let params = {
      background_color: schedule.background_color,
      background_icon: schedule.background_icon,
      header: schedule.header,
      body: schedule.body,
      weekday: null,
      category: schedule.category,
      website_url: schedule.website_url,
      start_at: schedule.start_at,  //W:TIME A:DATETIME に注意
      end_at: schedule.end_at,      //W:TIME A:DATETIME に注意
      is_notification_enabled: schedule.is_notification_enabled ? 1 : 0,
      is_all_day: schedule.is_all_day ? 1 : 0,
      is_midnight: schedule.is_midnight ? 1 : 0
    };

    if (schedule.weekday) params.weekday = schedule.weekday;

    const json = JSON.stringify(params);
    const type = isWeeklySchedule ? 'weekly' : 'absolute';
    const body = 'type=' + type + '&schedule=' + json;

    return this.http.post(url, body, options)
      .map(res => res.json());
  }

  putSchedule() {
    // TODO サーバ未実装
    // put
    // return this.http.put(url + '12', { value: "foo"}, options)
    //   .map(res => res.json());
  }

  /**
   * Scheduleを削除します
   * @param id
   * @returns {Observable<R>}
   */
  deleteSchedule(id: string) {
    const url = environment.endpoint + 'schedule/';
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    const options = new RequestOptions({ headers: headers , withCredentials: true});
    return this.http.delete(url + id, options)
      .map(res => res.json());
  }
}
