'use strict'

const Commande = use('App/Models/Commande')

class CommandeController {
    async index() { return Commande.all() }

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

    async show({ response, params }) {
        try {
            const commande_ = await Commande.findOrFail(params.id)
            return response.status(200).json(commande_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

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