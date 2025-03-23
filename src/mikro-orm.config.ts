import { NotFoundException } from "@nestjs/common";
import { Logger } from "@nestjs/common";

import { IPrimaryKeyValue } from "@mikro-orm/core/typings";
import { Dictionary } from "@mikro-orm/core/typings";
import { Migrator, TSMigrationGenerator } from "@mikro-orm/migrations";
import { defineConfig } from "@mikro-orm/postgresql";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { SeedManager } from "@mikro-orm/seeder";

import * as dotenv from "dotenv";

dotenv.config();

const ormConfig = defineConfig({
  entities: ["./dist/**/*.entity.js"],
  entitiesTs: ["./src/**/*.entity.ts"],

  clientUrl: process.env.DATABASE_URL,
  dbName: process.env.DB_NAME,
  driver: PostgreSqlDriver,

  extensions: [Migrator, SeedManager],

  validate: true,
  strict: true,
  debug: process.env.NODE_ENV === "development",

  driverOptions: {
    connection: {
      keepAlive: true,
    },
  },

  schemaGenerator: {
    disableForeignKeys: false,
  },

  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 10000,
  },

  migrations: {
    tableName: "mikro_orm_migrations",
    path: "./dist/src/migrations",
    pathTs: "./src/migrations",
    glob: "!(*.d).{js,ts}",
    transactional: true,
    disableForeignKeys: false,
    allOrNothing: true,
    dropTables: true,
    safe: false,
    snapshot: true,
    snapshotName: ".snapshot",
    emit: "ts",
    generator: TSMigrationGenerator,
    fileName: (timestamp: string, name?: string) => {
      if (!name) {
        return `Migration${timestamp}`;
      }
      return `Migration${timestamp}_${name}`;
    },
  },

  seeder: {
    path: "./dist/src/seeders",
    pathTs: "./src/seeders",
    glob: "!(*.d).{js,ts}",
    emit: "js",
    fileName: (className: string) => className,
  },

  findOneOrFailHandler: (entityName: string, where: Dictionary | IPrimaryKeyValue) => {
    Logger.debug(`Entity ${entityName} not found with where ${JSON.stringify(where)}`);
    return new NotFoundException();
  },
  findExactlyOneOrFailHandler: (entityName: string, where: Dictionary | IPrimaryKeyValue) => {
    Logger.debug(`Entity ${entityName} not found with where ${JSON.stringify(where)}`);
    return new NotFoundException();
  },

  logger: (message: string) => {
    Logger.debug(message);
  },

  ignoreUndefinedInQuery: true,
});

export default ormConfig;
