'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
    up() {
        this.create('clients', (table) => {
            table.increments()
            table.string('nom_client', 100).notNullable().unique()
            table.string('prenom_client', 100).notNullable().unique()
            table.string('email_client', 100).notNullable().unique()
            table.string('tel_client', 100).notNullable().unique()
            table.string('adresse_client', 100).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('clients')
    }
}

module.exports = ClientSchema