'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
    up() {
        this.create('articles', (table) => {
            table.increments()
            table.string('nom_article', 100).notNullable().unique()
            table.integer('prix_article').unsigned().notNullable()
            table.string('url_img_article', 100).notNullable().unique()
            table.string('description', 255).notNullable()
            table.integer('id_categorie').unsigned().notNullable()
            table.foreign('id_categorie').references('categories.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('articles')
    }
}

module.exports = ArticleSchema