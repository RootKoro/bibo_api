'use strict'

const Collection = use('App/Models/Collection')

class CollectionController {
    /**
     * @swagger
     * /collection:
     *   get:
     *     tags:
     *       - API collection
     *     summary: renvoi toutes les collection
     *     responses:
     *       200:
     *         description: renvoi la liste des collection enregistres
     */
    async index() { return Collection.all() }

    /**
     * @swagger
     * /collection:
     *   post:
     *     tags:
     *       - API collection
     *     summary: enregistre une nouvelle collection
     *     parameters:
     *         - name: collection
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Collection"
     *     responses:
     *       201:
     *         description: Collection enregistree avec succes
     *       500:
     *         description: une Erreur s'est produite lors de la creation de la collection, verifiez les erreurs
     */
    async store({ request, response }) {
        try {
            const collection_ = await Collection.create({ nom_collection: request.input('nom_collection') })
            return response.status(201).json(collection_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /collection/{id}:
     *   get:
     *     tags:
     *       - API collection
     *     summary: renvois la collection correspondante a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: Collection renvoyee avec succes
     *       400:
     *         description: aucune collection ne correspond a cet identifiant
     */
    async show({ response, params }) {
        try {
            const collection_ = await Collection.findOrFail(params.id)
            return response.status(200).json(collection_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * @swagger
     * /collection/{id}:
     *   put:
     *     tags:
     *       - API collection
     *     summary: met a jour une collection
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *         - name: collection
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Collection"
     *     responses:
     *       202:
     *         description: Collection mis a jour avece succes
     *       500:
     *         description: une erreur s'est produite lors de la mise a jour
     */
    async update({ request, response, params }) {
        try {
            const collection_ = await Collection.findOrFail(params.id)
            collection_.nom_collection = request.input('nom_collection')
            collection_.save()
            return response.status(202).json(collection_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /collection/{id}:
     *   delete:
     *     tags:
     *       - API collection
     *     summary: supprime une collection
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: Collection supprimee avec succes
     *       400:
     *         description: aucune collection ne correspond a cet identifiant
     */
    async destroy({ params, response }) {
        try {
            const collection_ = await Collection.find(params.id)
            await collection_.delete()
            return response.status(203).send('suppression reussie')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = CollectionController