'use strict'

const Collection = use('App/Models/Collection')

class CollectionController {
    async index() { return Collection.all() }

    async store({ request, response }) {
        try {
            const collection_ = await Collection.create({ nom_collection: request.input('nom') })
            return response.status(201).json(collection_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    async show({ response, params }) {
        try {
            const collection_ = await Collection.findOrFail(params.id)
            return response.status(200).json(collection_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    async update({ request, response, params }) {
        try {
            const collection_ = await Collection.findOrFail(params.id)
            collection_.nom_collection = request.input('nom')
            collection_.save()
            return response.status(202).json(collection_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    async destroy({ params, response }) {
        try {
            const collection_ = await Collection.find(params.id)
            await collection_.delete()
            return response.redirect('/collection')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = CollectionController