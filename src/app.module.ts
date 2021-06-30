import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {Module1Module} from './module1/module1.module';
import {Module2Module} from './module2/module2.module';
import {BullModule} from '@nestjs/bull';

@Module({
    imports: [
        Module1Module,
        Module2Module,
        BullModule.forRoot({
            redis: {
                host: 'localhost',
                port: 6378,
            },
        })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
