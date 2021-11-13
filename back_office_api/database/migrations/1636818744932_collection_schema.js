'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CollectionSchema extends Schema {
  up () {
    this.create('collections', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('collections')
  }
}

module.exports = CollectionSchema
