/**
 * スケジュールのInterface定義
 */
export interface Schedule {

  // ID
  id: string;

  // 本文(番組名など)
  body: string;

  // ヘッダ(放送局名など)
  header?: string;

  // 種別(テレビ、ラジオなど)
  category: string;

  // 曜日(日曜はじまりの0-6)
  weekday?: number;

  // アイコン画像のURL
  background_icon?: string;

  // アイコンの背景色
  background_color?: string;

  // 公式サイトなどがあればそのURL
  website_url?: string;

  // 開始日時
  start_at: string;

  // 終了日時
  end_at: string;

  // この予定が通知対象かどうか
  is_notification_enabled: boolean;

  // 終日の予定か
  is_all_day: boolean;

  // 深夜の予定か
  is_midnight: boolean;
}
