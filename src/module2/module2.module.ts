import { Module } from '@nestjs/common';
import {BullModule} from "@nestjs/bull";
import { Module2Service } from './module2.service';
import {QUEUE_NAME} from "../module1/module1.constants";

@Module({
    imports: [
        BullModule.registerQueue({
            name: QUEUE_NAME
        }),
    ],
    providers: [Module2Service],
    exports: [Module2Service]
})
export class Module2Module {}
