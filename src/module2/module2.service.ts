import { Injectable } from '@nestjs/common';
import {InjectQueue} from "@nestjs/bull";
import { Queue } from 'bull';
import {QUEUE_NAME} from "../module1/module1.constants";

@Injectable()
export class Module2Service {
    constructor(
        @InjectQueue(QUEUE_NAME)
        private readonly testQueue: Queue,
    ) {}

    async addMessageToQueue() {
        await this.testQueue.add({})
    }
}
