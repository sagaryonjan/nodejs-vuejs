import {Knex} from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('logs', tbl => {
    tbl.increments('id').primary();
    tbl.string('ip').notNullable();
    tbl.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('logs');
}
