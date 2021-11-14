'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CollectionSchema extends Schema {
    up() {
        this.create('collections', (table) => {
            table.increments()
            table.string('nom_collection', 80).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('collections')
    }
}

module.exports = CollectionSchema