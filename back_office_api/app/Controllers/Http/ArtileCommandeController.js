'use strict'

const ArticleCommandeCommande = use('App/Models/ArticleCommandeCommande')

class ArtileCommandeController {
    async index() { return ArticleCommande.all() }

    async store({ request, response }) {
        try {
            const articleCommande_ = await ArticleCommande.create({
                id_article: request.input('ArticleCommande'),
                id_commande: request.input('commande'),
                quantite_article_commande: request.input('quantite'),
                total: request.input('total')
            })
            return response.status(201).json(articleCommande_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    async show({ response, params }) {
        try {
            const articleCommande_ = await ArticleCommande.findOrFail(params.id)
            return response.status(200).json(articleCommande_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    async update({ request, response, params }) {
        try {
            const articleCommande_ = await ArticleCommande.findOrFail(params.id)
            articleCommande_.id_article = request.input('article')
            articleCommande_.id_commande = request.input('commande')
            articleCommande_.quantite_article_commande = request.input('quantite')
            articleCommande_.total = request.input('total')
            articleCommande_.save()
            return response.status(202).json(articleCommande_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    async destroy({ params, response }) {
        try {
            const articleCommande_ = await ArticleCommande.find(params.id)
            await articleCommande_.delete()
            return response.redirect('/ArticleCommande')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = ArtileCommandeController