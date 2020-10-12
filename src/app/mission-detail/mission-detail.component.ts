import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MissionDetailComponent implements OnInit {
  @Input() mission:any ;
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
}
