'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    /**
     * @swagger
     * definitions:
     *  Client:
     *      type: object
     *      properties:
     *          prenom_nom_client:
     *              type: string
     *          email_client:
     *              type: string
     *          tel_client:
     *              type: string
     *          adresse_client:
     *              type: string
     */

    id = Number()

    prenom_nom_client = String()

    email_client = String()

    tel_client = String()

    adresse_client = String()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Client