'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArticleCommande extends Model {
    /**
     * @swagger
     * definitions:
     *  ArticleCommande:
     *      type: object
     *      properties:
     *          id_article:
     *              type: number
     *          id_commande:
     *              type: number
     *          quantite_article_commande:
     *              type: number
     *          total:
     *              type: number
     */

    id = Number()

    id_article = Number()

    id_commande = Number()

    quantite_article_commande = Number()

    total = Number()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = ArticleCommande