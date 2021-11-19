'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorieSchema extends Schema {
    up() {
        this.create('categories', (table) => {
            table.increments()
            table.string('nom_categorie', 80).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('categories')
    }
}

module.exports = CategorieSchema