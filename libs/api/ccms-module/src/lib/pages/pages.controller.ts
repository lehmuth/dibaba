import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Page } from '@dibaba/shared-interfaces';
import { PagesService as PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private pagesService: PagesService) {}

  @Get()
  getAll(): Observable<Page[]> {
    return this.pagesService.getAll();
  }
}
