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
  constructor(private videoLogService: VideoLogsService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('Fetching Entries from Firebase');
    this.videoLogList = this.videoLogService.fetchEntries();
    this.videoLogList.subscribe(() => this.loadingApp = false);
    console.log(this.videoLogList);
  }
}
