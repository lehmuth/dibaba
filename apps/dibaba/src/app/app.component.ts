import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '@dibaba/shared-interfaces';

@Component({
  selector: 'dibaba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Page[]>('/api/pages');
  constructor(private http: HttpClient) {}
}
