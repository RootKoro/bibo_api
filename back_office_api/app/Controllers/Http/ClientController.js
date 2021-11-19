'use strict'

const Client = use('App/Models/Client')

class ClientController {
    /**
     * @swagger
     * /client:
     *   get:
     *     tags:
     *       - API client
     *     summary: renvoi toutes les client
     *     responses:
     *       200:
     *         description: renvoi la liste des client enregistres
     */
    async index() { return Client.all() }

    /**
     * @swagger
     * /client:
     *   post:
     *     tags:
     *       - API client
     *     summary: enregistre une nouvelle client
     *     parameters:
     *         - name: client
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Client"
     *     responses:
     *       201:
     *         description: Client enregistree avec succes
     *       500:
     *         description: une Erreur s'est produite lors de la creation de la client, verifiez les erreurs
     */
    async store({ request, response }) {
        try {
            const client_ = await Client.create({
                nom_client: request.input('nom'),
                prenom_client: request.input('prenom'),
                email_client: request.input('email'),
                tel_client: request.input('telephone'),
                adress_client: request.input('adresse')
            })
            return response.status(201).json(client_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /client/{id}:
     *   get:
     *     tags:
     *       - API client
     *     summary: renvois la client correspondante a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: Client renvoyee avec succes
     *       400:
     *         description: aucune client ne correspond a cet identifiant
     */
    async show({ response, params }) {
        try {
            const client_ = await Client.findOrFail(params.id)
            return response.status(200).json(client_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver!')
        }
    }

    /**
     * @swagger
     * /client/{id}:
     *   put:
     *     tags:
     *       - API client
     *     summary: met a jour une client
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *         - name: client
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Client"
     *     responses:
     *       202:
     *         description: Client mis a jour avece succes
     *       500:
     *         description: une erreur s'est produite lors de la mise a jour
     */
    async update({ request, response, params }) {
        try {
            const client_ = await Client.findOrFail(params.id)
            client_.nom_client = request.input('nom')
            client_.prenom_client = request.input('prenom')
            client_.email_client = request.input('email')
            client_.tel_client = request.input('telephone')
            client_.adresse_client = request.input('adresse')
            client_.save()
            return response.status(202).json(client_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /client/{id}:
     *   delete:
     *     tags:
     *       - API client
     *     summary: supprime une client
     *     parameters:
     *         - name: id
     *           desciption: identifiant
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: Client supprimee avec succes
     *       400:
     *         description: aucune client ne correspond a cet identifiant
     */
    async destroy({ params, response }) {
        try {
            const client_ = await Client.find(params.id)
            await client_.delete()
            return response.redirect('/Clients')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = ClientController