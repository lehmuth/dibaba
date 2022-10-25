import { Module } from '@nestjs/common';
import { PagesController } from './pages/pages.controller';
import { PagesService } from './pages/pages.service';

@Module({
  controllers: [PagesController],
  providers: [PagesService],
  exports: [],
})
export class CcmsModule {}
