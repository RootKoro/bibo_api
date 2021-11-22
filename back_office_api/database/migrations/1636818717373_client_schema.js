'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
    up() {
        this.create('clients', (table) => {
            table.increments()
            table.string('prenom_nom_client', 255).notNullable()
            table.string('email_client', 100).notNullable().unique()
            table.string('tel_client', 100).notNullable().unique()
            table.string('adresse_client', 100).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('clients')
    }
}

module.exports = ClientSchema