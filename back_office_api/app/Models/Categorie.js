'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categorie extends Model {
    /**
     * @swagger
     * definitions:
     *  Categorie:
     *      type: object
     *      properties:
     *          nom_categorie:
     *              type: string
     */

    id = Number()

    nom_categorie = String()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Categorie