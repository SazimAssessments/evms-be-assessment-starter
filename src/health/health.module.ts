import { Module } from "@nestjs/common";

import { MikroOrmModule } from "@mikro-orm/nestjs";

import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";

@Module({
  imports: [MikroOrmModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
