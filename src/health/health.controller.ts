import { Controller, Get } from "@nestjs/common";

import { HealthService } from "./health.service";
import { THealthCheckResult } from "./health.types";

@Controller("health")
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check(): Promise<THealthCheckResult> {
    return this.healthService.checkDbConnection();
  }
}
