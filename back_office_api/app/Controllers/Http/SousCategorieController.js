'use strict'
const SousCategorie = use('App/Models/SousCategorie')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with souscategories
 */
class SousCategorieController {
    /**
     * Show a list of all souscategories.
     * GET souscategories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    /**
     * @swagger
     * /sous_categorie:
     *   get:
     *     tags:
     *       - API sous_categorie
     *     summary: retourne toutes les sous categories
     *     responses:
     *       200:
     *         description: toutes les sous categories sont retournes
     */
    async index() { return SousCategorie.all() }

    /**
     * Render a form to be used for creating a new souscategorie.
     * GET souscategories/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new souscategorie.
     * POST souscategories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    /**
     * @swagger
     * /sous_categorie:
     *   post:
     *     tags:
     *       - API sous_categorie
     *     summary: cree une sous categorie
     *     parameters:
     *         - name: sous_categorie
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/SousCategorie"
     *     responses:
     *       201:
     *         description: sous categorie enregistree avec succes
     *       500:
     *         description: Stockage impossible, veuillez reessayer!
     */
    async store({ request, response }) {
        try {
            const sous_categorie_ = await SousCategorie.create({
                nom_sous_categorie: request.input('nom_sous_categorie'),
                id_categorie: request.input('id_categorie')
            })
            return response.status(201).json(sous_categorie_)
        } catch (error) {
            console.log(error.message)
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    /**
     * Display a single souscategorie.
     * GET souscategories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    /**
     * @swagger
     * /sous_categorie/{id}:
     *   get:
     *     tags:
     *       - API sous_categorie
     *     summary: retourne la sous categorie correspondante a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant de la sous categorie
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: sous categorie retournee
     *       400:
     *         description: Aucun resultat trouver
     */
    async show({ response, params }) {
        try {
            const sous_categorie_ = await SousCategorie.findOrFail(params.id)
            return response.status(200).json(sous_categorie_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * Render a form to update an existing souscategorie.
     * GET souscategories/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update souscategorie details.
     * PUT or PATCH souscategories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    /**
     * @swagger
     * /sous_categorie/{id}:
     *   put:
     *     tags:
     *       - API sous_categorie
     *     summary: met a jour la sous categorie correspondante a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant de la sous categorie
     *           in: path
     *           schema:
     *              type: number
     *         - name: sous_categorie
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/SousCategorie"
     *     responses:
     *       202:
     *         description: sous categorie mise a jour avec succes
     *       500:
     *         description: Echec de la mise a jour, veuillez reessayer!
     */
    async update({ request, response, params }) {
        try {
            const sous_categorie_ = await SousCategorie.findOrFail(params.id)
            sous_categorie_.nom_sous_categorie = request.input('nom_sous_categorie')
            sous_categorie_.id_categorie = request.input('id_categorie')
            sous_categorie_.save()
            return response.status(202).json(sous_categorie_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * Delete a souscategorie with id.
     * DELETE souscategories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    /**
     * @swagger
     * /sous_categorie/{id}:
     *   delete:
     *     tags:
     *       - API sous_categorie
     *     summary: supprime la sous categorie correspondante a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant de la sous categorie
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: sous categorie supprimee
     *       400:
     *         description: Aucun resultat ne correspond a cet id
     */
    async destroy({ params, response }) {
        try {
            const sous_categorie_ = await SousCategorie.find(params.id)
            await sous_categorie_.delete()
            return response.status(203).send('suppression reussie')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = SousCategorieController