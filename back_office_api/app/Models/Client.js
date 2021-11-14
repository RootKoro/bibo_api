'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    id = Number()

    nom_client = String()

    prenom_client = String()

    email_client = String()

    tel_client = String()

    adresse_client = String()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Client