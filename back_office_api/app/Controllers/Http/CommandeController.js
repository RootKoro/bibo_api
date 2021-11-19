'use strict'

const Commande = use('App/Models/Commande')

class CommandeController {
    /**
     * @swagger
     * /commande:
     *   get:
     *     tags:
     *       - API commande
     *     summary: renvoi toutes les commande
     *     responses:
     *       200:
     *         description: renvoi la liste des commande enregistres
     */
    async index() { return Commande.all() }

    /**
     * @swagger
     * /commande:
     *   post:
     *     tags:
     *       - API commande
     *     summary: enregistre une nouvelle commande
     *     parameters:
     *         - name: commande
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Commande"
     *     responses:
     *       201:
     *         description: Commande enregistree avec succes
     *       500:
     *         description: une Erreur s'est produite lors de la creation de la commande, verifiez les erreurs
     */
    async store({ request, response }) {
        try {
            const commande_ = await Commande.create({
                total_commande: request.input('total'),
                mode_paiement: request.input('mode de paiement'),
                id_client: request.input('client'),
                status: request.input('status')
            })
            return response.status(201).json(commande_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /commande/{id}:
     *   get:
     *     tags:
     *       - API commande
     *     summary: renvois la commande correspondante a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: Commande renvoyee avec succes
     *       400:
     *         description: aucune commande ne correspond a cet identifiant
     */
    async show({ response, params }) {
        try {
            const commande_ = await Commande.findOrFail(params.id)
            return response.status(200).json(commande_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * @swagger
     * /commande/{id}:
     *   put:
     *     tags:
     *       - API commande
     *     summary: met a jour une commande
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *         - name: commande
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Commande"
     *     responses:
     *       202:
     *         description: commande mis a jour avece succes
     *       500:
     *         description: une erreur s'est produite lors de la mise a jour
     */
    async update({ request, response, params }) {
        try {
            const commande_ = await Commande.findOrFail(params.id)
            commande_.total_commande = request.input('nom')
            commande_.mode_paiement = request.input('prix')
            commande_.id_client = request.input('image')
            commande_.status = request.input('categorie')
            commande_.save()
            return response.status(202).json(commande_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /commande/{id}:
     *   delete:
     *     tags:
     *       - API commande
     *     summary: supprime une commande
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: commande supprimee avec succes
     *       400:
     *         description: aucune commande ne correspond a cet identifiant
     */
    async destroy({ params, response }) {
        try {
            const commande_ = await Commande.find(params.id)
            await commande_.delete()
            return response.redirect('/article')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = CommandeController