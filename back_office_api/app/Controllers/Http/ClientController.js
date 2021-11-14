'use strict'

const Client = use('App/Models/Client')

class ClientController {
    async index() { return Client.all() }

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

    async show({ response, params }) {
        try {
            const client_ = await Client.findOrFail(params.id)
            return response.status(200).json(client_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver!')
        }
    }

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