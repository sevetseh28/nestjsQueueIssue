import { Injectable } from '@nestjs/common';
import {InjectQueue} from "@nestjs/bull";
import {QUEUE_NAME} from "./module1.constants";
import { Queue } from 'bull';

@Injectable()
export class Module1Service {
    constructor(
        @InjectQueue(QUEUE_NAME)
        private readonly testQueue: Queue,
    ) {}

    async addMessageToQueue() {
        await this.testQueue.add({})
    }
}

