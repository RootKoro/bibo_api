'use strict'

const Favori = use('App/Models/Favori')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with favoris
 */
class FavoriController {
    /**
     * @swagger
     * /favori:
     *   get:
     *     tags:
     *       - API favori
     *     summary: show all favs
     *     responses:
     *       200:
     *         description: all favs are being shown
     */
    /**
     * Show a list of all favoris.
     * GET favoris
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index() { return Favori.all() }

    /**
     * Render a form to be used for creating a new favori.
     * GET favoris/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    // async create({ request, response, view }) {}

    /**
     * @swagger
     * /favori:
     *   post:
     *     tags:
     *       - API favori
     *     summary: enregistre un favori dans la base de donnees
     *     parameters:
     *         - name: favori
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Favori"
     *     responses:
     *       201:
     *         description: Nouveau favori enregistre avec succes
     *       500:
     *         description: Stockage impossible, veuillez reessayer!
     */
    /**
     * Create/save a new favori.
     * POST favoris
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            const favori_ = await Favori.create({
                id_article: request.input('id_article'),
                id_client: request.input('id_client')
            })
            return response.status(201).json(favori_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /favori/{id}:
     *   get:
     *     tags:
     *       - API favori
     *     summary: retourne un favori bien defini
     *     parameters:
     *         - name: id
     *           desciption: identifiant du favori
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: favori trouve
     *       400:
     *         description: Aucun resultat trouver
     */
    /**
     * Display a single favori.
     * GET favoris/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, response }) {
        try {
            const favori_ = await Favori.findOrFail(params.id)
            return response.status(200).json(favori_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * Render a form to update an existing favori.
     * GET favoris/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    // async edit({ params, request, response, view }) {}

    /**
     * @swagger
     * /favori/{id}:
     *   put:
     *     tags:
     *       - API favori
     *     summary: met a jour un favori
     *     parameters:
     *         - name: id
     *           desciption: identifiant du favori
     *           in: path
     *           schema:
     *              type: number
     *         - name: favori
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Favori"
     *     responses:
     *       202:
     *         description: Mis a jour reussie
     *       500:
     *         description: Echec de la mise a jour, veuillez reessayer!
     */
    /**
     * Update favori details.
     * PUT or PATCH favoris/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        try {
            const favori_ = await Favori.findOrFail(params.id)
            favori_.id_article = request.input('nom_article')
            favori_.id_client = request.input('id_client')
            favori_.save()
            return response.status(202).json(favori_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /favori/{id}:
     *   delete:
     *     tags:
     *       - API favori
     *     summary: supprime un favori
     *     parameters:
     *         - name: id
     *           desciption: identifiant du favori
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: favori supprime avec succes
     *       400:
     *         description: Aucun resultat ne correspond a cet id
     */
    /**
     * Delete a favori with id.
     * DELETE favoris/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, response }) {
        try {
            const favori_ = await Favori.find(params.id)
            await favori_.delete()
            return response.status(203).send('suppression reussie')
        } catch (error) {
            return response.status(400).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = FavoriController