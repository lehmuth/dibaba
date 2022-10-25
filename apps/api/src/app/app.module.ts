import { Module } from '@nestjs/common';
import { CcmsModule } from '@dibaba/api/ccms-module';

@Module({
  imports: [CcmsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
