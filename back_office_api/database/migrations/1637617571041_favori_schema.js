'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoriSchema extends Schema {
    up() {
        this.create('favoris', (table) => {
            table.increments()
            table.integer('id_client').notNullable()
            table.integer('id_article').notNullable()
            table.foreign('id_article').references('articles.id')
            table.foreign('id_client').references('clients.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('favoris')
    }
}

module.exports = FavoriSchema