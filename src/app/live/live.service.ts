import { Injectable } from '@angular/core';
import { ApiBaseService } from '../core/api-base.service';

@Injectable()
export class LiveService {

  constructor(private apiBaseService: ApiBaseService) { }

  getLive(id) {
    return this.apiBaseService.get('live/' + id)
      .map(res => res.json());
  }

  participate(id: number, shareText: string) {
    return this.apiBaseService.post('/live/' + id + '/participate', {share_text: shareText})
      .map(res => res.json());
  }

  pending(id: number, shareText: string) {
    return this.apiBaseService.post('/live/' + id + '/want-to-participate', {share_text: shareText})
      .map(res => res.json());
  }

  nonParticipate(id: number, shareText: string) {
    return this.apiBaseService.post('/live/' + id + '/non-participate', {share_text: shareText})
      .map(res => res.json());
  }

}
