'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArticleCommande extends Model {
    id = Number()

    id_article = Number()

    id_commande = Number()

    quantite_article_commande = Number()

    total = Number()

    createdAt = Date()

    updatedAt = Date()
}

module.exports = ArticleCommande