import { EntityManager } from "@mikro-orm/postgresql";
import { Seeder } from "@mikro-orm/seeder";

import { User } from "../entities/users.entity";

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const user = em.create(User, {
      name: "John Doe",
      email: "john.doe@example.com",
    });
    await em.persistAndFlush(user);
  }
}
