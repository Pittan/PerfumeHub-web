export interface Live {
  id: number;
  tour_id: number;
  name: string;
  place: string;
  latitude: number; // 緯度
  longitude: number; // 軽度

  place_for_search: string;
  open_at: string;
  start_at: string;

  list_name: string;
  sub_name: string;
}

export type LiveParticipationStatus =
  'PARTICIPATE' |
  'NON_PARTICIPATE' |
  'WANT_TO_PARTICIPATE' |
  'DISABLED';
