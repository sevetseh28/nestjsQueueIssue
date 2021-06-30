import {Controller, Get} from '@nestjs/common';
import {Module2Service} from "../module2/module2.service";

@Controller('module1')
export class Module1Controller {
    constructor(private service: Module2Service) {}

    @Get()
    async addToQueue() {
        await this.service.addMessageToQueue();
        return "Success"
    }
}
