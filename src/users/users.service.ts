import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";

import { EntityManager } from "@mikro-orm/postgresql";

import { User } from "../entities/users.entity";

@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.em.find(User, {});
    } catch (error) {
      throw new NotFoundException("Failed to fetch users", error);
    }
  }
}
