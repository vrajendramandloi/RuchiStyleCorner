import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VideoLogsService } from 'src/app/service/VideoLogs.service';
import { VideoLogs } from 'src/app/utils/videoLogs';

@Component({
  selector: 'app-adminTemplate',
  templateUrl: './adminTemp.component.html',
  styleUrls: ['./adminTemp.component.css']
})
export class AdminTempComponent {
  constructor(private videoLogService: VideoLogsService) { }

  vlogsFormGroup = new FormGroup({
    youtubeUrl: new FormControl('', Validators.required),
    videoGenere: new FormControl('', Validators.required),
    videoTitle: new FormControl('', Validators.required),
    videoUploadDateTime: new FormControl(new Date(), Validators.required)
  });
  get youtubeUrl() {
    return this.vlogsFormGroup.get('youtubeUrl');
  }
  get videoGenere() {
    return this.vlogsFormGroup.get('videoGenere');
  }
  get videoTitle() {
    return this.vlogsFormGroup.get('videoTitle');
  }
  get videoUploadDateTime() {
    return this.vlogsFormGroup.get('videoUploadDateTime');
  }
  private videologs: VideoLogs;
  createNewVlogEntry() {
    if (this.vlogsFormGroup.valid) {
      const videologs: VideoLogs = {
        videoIndex: 1,
        videoTitle: this.videoTitle.value,
        youtubeLink: this.youtubeUrl.value,
        videoGenere: this.videoGenere.value,
        uploadDateTime: this.videoUploadDateTime.value,
      };
      console.log('Calling Service to persist Object {}', videologs);
      this.videoLogService.createEntry(videologs);
    }
  }
}
