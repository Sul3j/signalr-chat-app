import {Component, OnDestroy, OnInit} from '@angular/core';
import {SignalrService} from "./signalr.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ChatUI';

  constructor(private signalrService: SignalrService) {}

  ngOnInit(): void {
    this.signalrService.startConnection();
  }

  ngOnDestroy(): void {
    this.signalrService.hubConnection.off("askServerResponse");
  }
}
