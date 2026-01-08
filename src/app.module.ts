import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';

@Module({
    imports: [StudentModule, CustomerModule],
    controllers: [AppController, UserController],
    providers: [AppService],
})
export class AppModule {}
