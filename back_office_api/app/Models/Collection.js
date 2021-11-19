'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Collection extends Model {
    /**
     * @swagger
     * definitions:
     *  Collection:
     *      type: object
     *      properties:
     *          nom_collection:
     *              type: string
     */

    id = Number()

    nom_collection = String()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Collection