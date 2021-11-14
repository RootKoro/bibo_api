'use strict'

const Categorie = use('App/Models/Categorie')

class CategorieController {
    async index() { return Categorie.all() }

    async store({ request, response }) {
        try {
            const categotie_ = await Categorie.create({ nom_categorie: request.input('nom') })
            return response.status(201).json(categotie_)
        } catch (error) {
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    async show({ response, params }) {
        try {
            const categotie_ = await Categorie.findOrFail(params.id)
            return response.status(200).json(categotie_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    async update({ request, response, params }) {
        try {
            const categotie_ = await Categorie.findOrFail(params.id)
            categotie_.nom_categorie = request.input('nom')
            categotie_.save()
            return response.status(202).json(categotie_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    async destroy({ params, response }) {
        try {
            const categotie_ = await Categorie.find(params.id)
            await categotie_.delete()
            return response.redirect('/Categorie')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = CategorieController