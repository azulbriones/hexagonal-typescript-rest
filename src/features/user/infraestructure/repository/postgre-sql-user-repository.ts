import { Pool, PoolClient } from "pg";

import { UserEntity } from "../../domain/entities/user-entity";
import { UserModel } from "../../domain/models/user-model";
import { UserRepository } from "../../domain/repositories/user-repository";
import pool from "../config/postgre-sql-config";

export class PostgreSqlUserRepository implements UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }
  async getUserById(id: number): Promise<UserModel | null> {
    let client: PoolClient | null = null;
    try {
      client = await this.pool.connect();
  
      const query = "SELECT * FROM users WHERE id = $1";
      const values = [id];
      const result = await client.query(query, values);
  
      if (result.rowCount === 1) {
        const userRow = result.rows[0];
        return new UserEntity(
          userRow.id,
          userRow.name,
          userRow.email,
          userRow.password
        );
      }
      return null;
    } catch (error) {
      console.error("Error obteniendo el usuario por ID:", error);
      return null;
    } finally {
      if (client) {
        client.release();
      }
    }
  }
  
  async getAllUsers(): Promise<UserModel[]> {
    let client: PoolClient | null = null;
    try {
      client = await this.pool.connect();
  
      const query = "SELECT * FROM users";
      const result = await client.query(query);
  
      const users: UserModel[] = result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        password: row.password,
      }));
  
      return users;
    } catch (error) {
      console.error("Error retornando los usuarios:", error);
      return [];
    } finally {
      if (client) {
        client.release();
      }
    }
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
      console.error("Error creando el usuario:", error);
      return null;
    } finally {
      if (client) {
        client.release();
      }
    }
  }
}
