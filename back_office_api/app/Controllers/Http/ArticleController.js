'use strict'
const Article = use('App/Models/Article')
const Collection = use('App/Models/Collection')
const ArticleCollection = use('App/Models/ArticleCollection')

class ArticleController {
    /**
     * @swagger
     * /article:
     *   get:
     *     tags:
     *       - API article
     *     summary: retourne tous les articles
     *     responses:
     *       200:
     *         description: tous les articles sont retournes
     */
    async index() { return Article.all() }

    /**
     * @swagger
     * /article:
     *   post:
     *     tags:
     *       - API article
     *     summary: cree un article
     *     parameters:
     *         - name: article
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Article"
     *     responses:
     *       201:
     *         description: article enregistre avec succes
     *       500:
     *         description: un probleme s'est pose, veuillez ressayer
     */
    async store({ request, response }) {
        const image = request.file('img_article')
        try {
            const article_ = await Article.create({
                nom_article: request.input('nom_article'),
                prix_article: request.input('prix_article'),
                id_categorie: request.input('id_categorie'),
                description: request.input('description')
            })
            if (article_) {
                this.saveFile(image, article_)
                this.saveUrl(image, article_)
                const resp = this.article_collection_insertion(article_, request.input('id_collection'))
                if (resp === "collection not found") {
                    console.log(resp)
                    return resp
                } else return response.status(201).json(article_)
            }
            return response.status(201).json(article_)
        } catch (error) {
            console.log(error.message)
            return response.status(500).send('Stockage impossible, veuillez reessayer!')
        }
    }

    //function to save the image
    async saveFile(image, article) {
        try {
            image.clientName = article.$attributes.id_categorie + '#' + article.$attributes.nom_article + '.webp'
            const article_ = await Article.findOrFail(article.$attributes.id)
            article_.img_article = image.clientName;
            article_.save()
            await image.move('./public/categorie/')
        } catch (error) {
            console.log(error)
        }
    }

    async saveUrl(image, article) {
        try {
            const article_ = await Article.findOrFail(article.$attributes.id)
            article_.url_img_article = "./public/categorie/" + image.clientName
            article_.save()
        } catch (error) {
            console.log(error)
        }
    }

    async article_collection_insertion(article, integer) {
        try {
            const collection_ = await Collection.findOrFail(integer)
            if (collection_) {
                const article_collection_ = await ArticleCollection.create({
                    id_article: article.$attributes.id,
                    id_collection: integer
                })
                return article_collection_
            } else {
                return "collection not found!"
            }
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * @swagger
     * /article/{id}:
     *   get:
     *     tags:
     *       - API article
     *     summary: retourne l'article correspondant a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant de l'article
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       200:
     *         description: article retourne
     *       400:
     *         description: article introuvable
     */
    async show({ response, params }) {
        try {
            const article_ = await Article.findOrFail(params.id)
            return response.status(200).json(article_)
        } catch (error) {
            return response.status(400).send('Aucun resultat trouver')
        }
    }

    /**
     * @swagger
     * /article/{id}:
     *   put:
     *     tags:
     *       - API article
     *     summary: met a jour l'article correspondant a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant de l'article
     *           in: path
     *           schema:
     *              type: number
     *         - name: article
     *           in: body
     *           required: true
     *           schema:
     *              $ref: "#/definitions/Article"
     *     responses:
     *       202:
     *         description: article mis a jour avec succes
     *       500:
     *         description: echec de la mmis a jour, veuillez reessayer
     */
    async update({ request, response, params }) {
        try {
            const article_ = await Article.findOrFail(params.id)
            article_.nom_article = request.input('nom_article')
            article_.prix_article = request.input('prix_article')
            article_.url_img_article = request.input('url_img_article')
            article_.id_categorie = request.input('id_categorie')
            article_.description = request.input('description')
            article_.save()
            return response.status(202).json(article_)
        } catch (error) {
            return response.status(500).send('Echec de la mise a jour, veuillez reessayer!')
        }
    }

    /**
     * @swagger
     * /article/{id}:
     *   delete:
     *     tags:
     *       - API article
     *     summary: supprime l'article correspondant a l'identifiant
     *     parameters:
     *         - name: id
     *           desciption: identifiant de l'article
     *           in: path
     *           schema:
     *              type: number
     *     responses:
     *       203:
     *         description: article supprime
     *       400:
     *         description: article introuvable
     */
    async destroy({ params, response }) {
        try {
            const article_ = await Article.find(params.id)
            await article_.delete()
            return response.status(203).send('suppression reussie')
        } catch (error) {
            return response.status(500).send('Aucun resultat ne correspond a cet id')
        }
    }
}

module.exports = ArticleController