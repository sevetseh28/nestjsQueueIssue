import { Module } from '@nestjs/common';
import {BullModule} from "@nestjs/bull";
import { Module1Service } from './module1.service';
import {QUEUE_NAME} from "./module1.constants";
import { Module1Controller } from './module1.controller';
import {Module2Service} from "../module2/module2.service";

@Module({
    imports: [
        Module1Module,
        BullModule.registerQueue({
            name: QUEUE_NAME,
        }),
    ],
    providers: [Module1Service, Module2Service],
    controllers: [Module1Controller]
})
export class Module1Module {}
