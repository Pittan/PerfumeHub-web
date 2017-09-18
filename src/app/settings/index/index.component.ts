import { Component, OnInit } from '@angular/core';
import { NativeBridgeService } from '../../core/native-bridge.service';

@Component({
  selector: 'ph-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  public isApp: boolean = null;

  constructor(private nativeBridge: NativeBridgeService) { }

  ngOnInit() {
    this.isApp = this.nativeBridge.isApp();
  }


}
