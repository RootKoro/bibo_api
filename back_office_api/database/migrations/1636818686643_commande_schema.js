'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommandeSchema extends Schema {
  up () {
    this.create('commandes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('commandes')
  }
}

module.exports = CommandeSchema
