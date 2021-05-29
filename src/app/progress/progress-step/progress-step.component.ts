import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
  styleUrls: ['./progress-step.component.scss'],
})
export class ProgressStepComponent implements OnInit {

  public stepIndex = 0;

  @HostBinding('class.activeStep')
  public isActive = false;

  @Input() public set activeState(step: ProgressStepComponent) {
    this.isActive = step === this;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
