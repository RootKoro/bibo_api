'use strict'

const Article = use('App/Models/Article')

class ArticleController {
    async index() { return Article.all() }

    async store({ request, response }) {
        try {
            const article_ = await Article.create({
                nom_article: request.input('nom'),
                prix_article: request.input('prix'),
                url_img_article: request.input('image'),
                id_collection: request.input('collecetion'),
                id_categorie: request.input('categorie')
            })
            return response.status(201).json(article_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    async show({ response, params }) {
        try {
            const article_ = await Article.findOrFail(params.id)
            return response.status(200).json(article_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    async update({ request, response, params }) {
        try {
            const article_ = await Article.findOrFail(params.id)
            article_.nom_article = request.input('nom')
            article_.prix_article = request.input('prix')
            article_.url_img_article = request.input('image')
            article_.id_categorie = request.input('categorie')
            article_.id_collection = request.input('collection')
            article_.save()
            return response.status(202).json(article_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    async destroy({ params, response }) {
        try {
            const article_ = await Article.find(params.id)
            await article_.delete()
            return response.redirect('/article')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = ArticleController