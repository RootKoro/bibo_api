'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SousCategorieSchema extends Schema {
    up() {
        this.create('sous_categories', (table) => {
            table.increments()
            table.string('nom_sous_categorie', '100').notNullable().unique()
            table.integer('id_categorie').unsigned().notNullable()
            table.foreign('id_categorie').references('categories.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('sous_categories')
    }
}

module.exports = SousCategorieSchema