import { Pool, PoolClient } from "pg";

import { UserEntity } from "../../domain/entities/user-entity";
import { UserModel } from "../../domain/models/user-model";
import { UserRepository } from "../../domain/repositories/user-repository";
import pool from "./postgre-sql-config";

export class PostgreSqlUserRepository implements UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserModel | null> {
    let client: PoolClient | null = null;
    try {
      client = await this.pool.connect();

      const query =
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
      const values = [name, email, password];
      const result = await client.query(query, values);

      if (result.rowCount === 1) {
        const createdUser = result.rows[0];
        return new UserEntity(
          createdUser.id,
          createdUser.name,
          createdUser.email,
          createdUser.password
        );
      }
      return null;
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    } finally {
      if (client) {
        client.release();
      }
    }
  }
}
