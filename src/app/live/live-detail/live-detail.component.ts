import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiveService } from '../live.service';
import { Live, LiveParticipationStatus } from '../../core/live';
import { forEach } from '@angular/router/src/utils/collection';
import { DateParsePipe } from '../../shared/date-parse.pipe';
import { DateJpPipe } from '../../shared/date-jp.pipe';
import { DatePipe } from '@angular/common';
import { UserService } from '../../core/user.service';
import { User } from '../../core/user';

@Component({
  selector: 'ph-live-detail',
  templateUrl: './live-detail.component.html',
  styleUrls: ['./live-detail.component.styl']
})
export class LiveDetailComponent implements OnInit, OnDestroy {

  id: string;
  liveInfo: Live = null;

  participant: any[] = null;
  nonParticipant: any[] = null;
  wantToParticipant: any[] = null;

  tweet = true;
  userInfo: User = null;

  private sub: any;

  constructor(private route: ActivatedRoute,
              private liveService: LiveService,
              private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.getLive();
    });

    this.userService.getUser().subscribe(
      res => {
        if (res.name) {
          this.userInfo = res;
        }
      }
    );
  }

  private getLive() {
    this.liveService.getLive(this.id).subscribe(
      data => {
        this.liveInfo = data.live as Live;
        this.participant = data.participant;
        this.nonParticipant = data.nonParticipant;
        this.wantToParticipant = data.pending;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  participate() {
    const shareText = this.getShareText('参加します');
    this.liveService.participate(this.id, this.tweet ? shareText : null).subscribe(
      res => {
        console.log(res);
        this.getLive();
      }
    );
  }

  nonParticipate() {
    const shareText = this.getShareText('参加しません');
    this.liveService.nonParticipate(this.id, this.tweet ? shareText : null).subscribe(
      res => {
        console.log(res);
        this.getLive();
      }
    );
  }

  pending() {
    const shareText = this.getShareText('行きたいです');
    this.liveService.pending(this.id, this.tweet ? shareText : null).subscribe(
      res => {
        console.log(res);
        this.getLive();
      }
    );
  }

  tweetSwitchChanged() {
    this.tweet = !this.tweet;
  }

  private getShareText(text) {
    const name = this.liveInfo.name + ' ' + this.liveInfo.place_for_search + '公演';
    const dateParse = new DateParsePipe();
    const dateJP = new DatePipe('en-US');
    const parsedDate = dateParse.transform(this.liveInfo.open_at);
    const formattedDate = dateJP.transform(parsedDate, '(y/M/d)');
    return name + formattedDate + ' に' + text + ' ' + location.href + ' #ticklir';
  }

}
