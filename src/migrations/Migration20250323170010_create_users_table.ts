import { Migration } from "@mikro-orm/migrations";

export class Migration20250323170010_create_users_table extends Migration {
  up() {
    this.addSql(
      'create table "user" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null);',
    );
  }

  down() {
    this.addSql('drop table if exists "user" cascade;');
  }
}
