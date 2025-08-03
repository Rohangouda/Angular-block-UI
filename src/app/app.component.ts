import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockUI, BlockUIModule, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule,
    BlockUIModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-block-ui-demo';

  @BlockUI() blockUI!: NgBlockUI;

  startBlocking() {
    this.blockUI.start('Ridhan pagal bacha...');
    setTimeout(() => this.blockUI.stop(), 3000); 
  }
}
