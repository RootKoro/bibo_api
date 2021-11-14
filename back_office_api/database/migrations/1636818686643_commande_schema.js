'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommandeSchema extends Schema {
    up() {
        this.create('commandes', (table) => {
            table.increments().primary()
            table.timestamps()
            table.integer('total_commande').unsigned().notNullable()
            table.string('mode_paiement', 100).notNullable()
            table.integer('id_client').unsigned().notNullable()
            table.foreign('id_client').references('clients.id')
            table.boolean('status').notNullable()
        })
    }

    down() {
        this.drop('commandes')
    }
}

module.exports = CommandeSchema