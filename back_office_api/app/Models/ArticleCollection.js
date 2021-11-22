'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArticleCollection extends Model {
    /**
     * @swagger
     * definitions:
     *  ArticleCollection:
     *      type: object
     *      properties:
     *          id_article:
     *              type: number
     *          id_collection:
     *              type: number
     */

    id = Number()

    id_article = Number()

    id_collection = Number()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = ArticleCollection