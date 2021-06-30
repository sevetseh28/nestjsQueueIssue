import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';
import {AppModule} from "./app.module";
import {Module1Module} from "./module1/module1.module";
import {Module2Module} from "./module2/module2.module";
import {getQueueToken} from "@nestjs/bull";
import {QUEUE_NAME} from "./module1/module1.constants";
import {Module1Controller} from "./module1/module1.controller";

describe('AppModule', () => {
    let testQueueFromModule1;
    let testQueueFromModule2;
    let module1Controller: Module1Controller;
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        module1Controller = app.get(Module1Controller)
        testQueueFromModule1 = app.select(Module1Module).get(getQueueToken(QUEUE_NAME));
        testQueueFromModule2 = app.select(Module2Module).get(getQueueToken(QUEUE_NAME));
        await app.init()
    });

    describe('root', () => {
        it('should have fetched the correct queue', async () => {
            const spy2 = jest.spyOn(testQueueFromModule2, 'add')
            await module1Controller.addToQueue()
            expect(spy2).toHaveBeenCalledTimes(1)
        });
    });
});
