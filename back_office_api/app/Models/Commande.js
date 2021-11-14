'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Commande extends Model {
    id = Number()

    total_commande = Number()

    mode_paiement = String()

    id_client = Number()

    status = Boolean()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Commande