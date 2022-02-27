import * as dotenv from 'dotenv';
import {Knex} from 'knex';
import databaseConfig from '../core/config/database';

dotenv.config();

const knex = require('knex')(databaseConfig);

class BaseModel {
  public static table: string;

  static all(): Knex.QueryBuilder {
    return this.query().select();
  }

  static insert(attributes: object | Array<object>): Knex.QueryBuilder {
    return this.query().insert(attributes);
  }

  static query(): Knex.QueryBuilder {
    return knex(this.table);
  }
}

export default BaseModel;
