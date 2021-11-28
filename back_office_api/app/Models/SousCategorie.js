'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SousCategorie extends Model {
    /**
     * @swagger
     * definitions:
     *  SousCategorie:
     *      type: object
     *      properties:
     *          nom_sous_categorie:
     *              type: string
     *          id_categorie:
     *              type: number
     */

    id = Number()

    nom_sous_categorie = String()

    id_categorie = Number()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = SousCategorie