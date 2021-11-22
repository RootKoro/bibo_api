'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favori extends Model {
    /**
     * @swagger
     * definitions:
     *  Favori:
     *      type: object
     *      properties:
     *          id_article:
     *              type: number
     *          id_client:
     *              type: number
     */

    id = Number()

    id_article = Number()

    id_client = Number()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Favori