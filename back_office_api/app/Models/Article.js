'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
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