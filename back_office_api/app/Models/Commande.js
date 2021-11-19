'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Commande extends Model {
    /**
     * @swagger
     * definitions:
     *  Commande:
     *      type: object
     *      properties:
     *          total_commande:
     *              type: number
     *          mode_paiement:
     *              type: string
     *          id_client:
     *              type: number
     *          status:
     *              type: boolean
     */

    id = Number()

    total_commande = Number()

    mode_paiement = String()

    id_client = Number()

    status = Boolean()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Commande