import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Page } from '@dibaba/shared-interfaces/src/lib/ccms';

@Injectable()
export class PagesService {
  getAll(): Observable<Page[]> {
    return of([
      {
        title: 'Startseite',
        path: '/',
      },
    ]);
  }
}
