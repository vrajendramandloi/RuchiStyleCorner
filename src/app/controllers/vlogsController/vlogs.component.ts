import { Component, OnInit } from '@angular/core';
import { VideoLogs } from 'src/app/utils/videoLogs';
import { VideoLogsService } from 'src/app/service/VideoLogs.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeoutTrigger } from 'src/app/utils/app-animations';

@Component({
  selector: 'vlogs-control',
  templateUrl: './vlogs.component.html',
  styleUrls: ['./vlogs.component.css'],
  animations: [
    fadeoutTrigger
  ]
})
export class VlogsComponent implements OnInit {
  loadingApp = true;
  videoLogList: Observable<VideoLogs[]>;
  homedecorList: VideoLogs[] = [];
  lifestyleList: VideoLogs[] = [];
  vlogsList: VideoLogs[] = [];
  prList: VideoLogs[] = [];

  constructor(private videoLogService: VideoLogsService, public sanitizer: DomSanitizer) {  }

  ngOnInit() {
    console.log('Fetching Entries from Firebase');
    this.videoLogList = this.videoLogService.fetchEntries();
    this.videoLogList.subscribe((videoItems) => {
      this.loadingApp = false;
      console.log('Loaded Video List from Server');
      if (videoItems != null && videoItems.length !== 0) {
          videoItems.forEach(videoItem => {
            switch (videoItem.videoGenere) {
              case 'HOME_DECOR': {
                this.homedecorList.push(videoItem);
                break;
              }
              case 'VLOGS': {
                this.vlogsList.push(videoItem);
                break;
              }
              case 'PRODUCT_REVIEW': {
                this.prList.push(videoItem);
                break;
              }
              case 'LIFESTYLE': {
                this.lifestyleList.push(videoItem);
                break;
              }
              default: {
                break;
              }
            }
        });
      }
    });
  }
}
