'use strict'

const ArticleCollection = use('App/Models/ArticleCollection')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with articlecollections
 */
class ArticleCollectionController {
    /**
     * @swagger
     * /article_collection:
     *   get:
     *     tags:
     *       - API article & collection
     *     summary: nothing
     *     responses:
     *       200:
     *         description: nothing
     */
    /**
     * Show a list of all articlecollections.
     * GET articlecollections
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index() { return ArticleCollection.all() }

    /**
     * Render a form to be used for creating a new articlecollection.
     * GET articlecollections/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    // async create({ request, response, view }) {}

    /**
     * @swagger
     * /article_collection:
     *   post:
     *     tags:
     *       - API article & collection
     *     summary: nothing
     *     parameters:
     *         - name: article_collection
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/ArticleCollection"
     *     responses:
     *       201:
     *         description: nothing
     *       500:
     *         description: nothing
     */
    /**
     * Create/save a new articlecollection.
     * POST articlecollections
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            const article_collection_ = await ArticleCollection.create({
                id_article: request.input('id_article'),
                id_collection: request.input('id_collection')
            })
            return response.status(201).json(article_collection_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /article_collection/{id}:
     *   get:
     *     tags:
     *       - API article & collection
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
    /**
     * Display a single articlecollection.
     * GET articlecollections/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, response }) {
        try {
            const article_collection_ = await ArticleCollection.findOrFail(params.id)
            return response.status(200).json(article_collection_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * Render a form to update an existing articlecollection.
     * GET articlecollections/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    // async edit({ params, request, response, view }) {}

    /**
     * @swagger
     * /article_collection/{id}:
     *   put:
     *     tags:
     *       - API article & collection
     *     summary: nothing
     *     parameters:
     *         - name: id
     *           desciption: nothing
     *           in: path
     *           schema:
     *              type: number
     *         - name: article_collection
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/ArticleCollection"
     *     responses:
     *       202:
     *         description: nothing
     *       500:
     *         description: nothing
     */
    /**
     * Update articlecollection details.
     * PUT or PATCH articlecollections/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        try {
            const article_collection_ = await ArticleCollection.findOrFail(params.id)
            article_collection_.id_article = request.input('nom_article')
            article_collection_.id_collection = request.input('id_collection')
            article_collection_.save()
            return response.status(202).json(article_collection_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /article_collection/{id}:
     *   delete:
     *     tags:
     *       - API article & collection
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
    /**
     * Delete a articlecollection with id.
     * DELETE articlecollections/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, response }) {
        try {
            const article_collection_ = await ArticleCollection.find(params.id)
            await article_collection_.delete()
            return response.redirect('/article_commande')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = ArticleCollectionController