import { Injectable } from "@nestjs/common";

import { EntityManager } from "@mikro-orm/postgresql";

import { THealthCheckResult } from "./health.types";

@Injectable()
export class HealthService {
  constructor(private readonly em: EntityManager) {}

  async checkDbConnection(): Promise<THealthCheckResult> {
    try {
      await this.em.getConnection().execute("SELECT 1");

      return {
        status: "healthy",
        timestamp: new Date().toISOString(),
        database: {
          status: "connected",
        },
      };
    } catch (error) {
      return {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        database: {
          status: "disconnected",
          error: error.message,
        },
      };
    }
  }
}
