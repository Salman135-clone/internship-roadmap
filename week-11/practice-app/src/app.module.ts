import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController, StudentController],
  providers: [AppService, ProductService, StudentService],
})
export class AppModule {}
