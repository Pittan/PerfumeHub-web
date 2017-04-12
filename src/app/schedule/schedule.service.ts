import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Schedule } from './schedule';
import { ApiBaseService } from '../core/api-base.service';

@Injectable()
export class ScheduleService {

  constructor(private apiBaseService: ApiBaseService) { }

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
    return this.apiBaseService.get('schedule/', { date: date })
      .map(res => res.json().schedule as Schedule[]);
  }

  /**
   * Scheduleを作成します
   * @returns {Observable<R>}
   */
  postSchedule(schedule: Schedule, isWeeklySchedule: boolean) {
    const params = {
      background_color: schedule.background_color,
      background_icon: schedule.background_icon,
      header: schedule.header,
      body: schedule.body,
      weekday: null,
      category: schedule.category,
      website_url: schedule.website_url,
      start_at: schedule.start_at,  // W:TIME A:DATETIME に注意
      end_at: schedule.end_at,      // W:TIME A:DATETIME に注意
      is_notification_enabled: schedule.is_notification_enabled ? 1 : 0,
      is_all_day: schedule.is_all_day ? 1 : 0,
      is_midnight: schedule.is_midnight ? 1 : 0
    };

    if (schedule.weekday) {
      params.weekday = schedule.weekday;
    }

    const param = {
      type: isWeeklySchedule ? 'weekly' : 'absolute',
      schedule: JSON.stringify(params)
    };

    return this.apiBaseService.post('schedule/', param)
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
    return this.apiBaseService.delete('schedule/' + id)
      .map(res => res.json());
  }
}
