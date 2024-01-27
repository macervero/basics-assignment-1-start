import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css'
})
export class WarningAlertComponent {
  public warning_text: string = "This is a warning alert!"
}
