'use strict'

const ArticleCommande = use('App/Models/ArticleCommande')

class ArtileCommandeController {
    /**
     * @swagger
     * /article_commande:
     *   get:
     *     tags:
     *       - API article & commandes
     *     summary: nothing
     *     responses:
     *       200:
     *         description: nothing
     */
    async index() { return ArticleCommande.all() }

    /**
     * @swagger
     * /article_commande:
     *   post:
     *     tags:
     *       - API article & commandes
     *     summary: nothing
     *     parameters:
     *         - name: article-commande
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/ArticleCommande"
     *     responses:
     *       201:
     *         description: nothing
     *       500:
     *         description: nothing
     */
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

    /**
     * @swagger
     * /article_commande/{id}:
     *   get:
     *     tags:
     *       - API article & commandes
     *     summary: nothing
     *     parameters:
     *         - name: id
     *           desciption: nothing
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: nothing
     *       400:
     *         description: nothing
     */
    async show({ response, params }) {
        try {
            const articleCommande_ = await ArticleCommande.findOrFail(params.id)
            return response.status(200).json(articleCommande_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * @swagger
     * /article_commande/{id}:
     *   put:
     *     tags:
     *       - API article & commandes
     *     summary: nothing
     *     parameters:
     *         - name: id
     *           desciption: nothing
     *           in: path
     *           schema:
     *              type: number
     *         - name: article-commande
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/ArticleCommande"
     *     responses:
     *       202:
     *         description: nothing
     *       500:
     *         description: nothing
     */
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

    /**
     * @swagger
     * /article_commande/{id}:
     *   delete:
     *     tags:
     *       - API article & commandes
     *     summary: nothing
     *     parameters:
     *         - name: id
     *           desciption: nothing
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: nothing
     *       400:
     *         description: nothing
     */
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