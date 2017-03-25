import { Pipe, PipeTransform } from '@angular/core';

export function parseIsoDatetime(dtstr: string): Date {
  const dt = dtstr.split(/[: T-]/).map(parseFloat);
  return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
}

@Pipe({
  name: 'dateParse'
})
export class DateParsePipe implements PipeTransform {
  transform(value: any | Date): Date {
    if (value instanceof Date) {
      // Dateはそのまま返す
      return value;
    }
    if (typeof value === 'number') {
      return new Date(value);
    }
    if (typeof value === 'string') {
      const parsed = Date.parse(value);
      if (Number.isNaN(parsed)) {
        const challenge = parseIsoDatetime(value);
        if (Number.isNaN(challenge.getTime())) {
          return null;
        } else {
          return challenge;
        }
      }
      return new Date(value);
    }
    return null;
  }
}
