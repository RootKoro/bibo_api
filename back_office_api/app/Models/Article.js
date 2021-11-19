'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
    /**
     * @swagger
     * definitions:
     *  Article:
     *      type: object
     *      properties:
     *          nom_article:
     *              type: string
     *          prix_article:
     *              type: number
     *          url_img_article:
     *              type: string
     *          id_categorie:
     *              type: number
     *          id_collection:
     *              type: number
     */

    id = Number()

    nom_article = String()

    prix_article = Number()

    url_img_article = String()

    id_categorie = Number()

    id_collection = Number()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = Article