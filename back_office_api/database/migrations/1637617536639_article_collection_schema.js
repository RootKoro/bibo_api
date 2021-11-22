'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleCollectionSchema extends Schema {
    up() {
        this.create('article_collections', (table) => {
            table.increments()
            table.integer('id_article').notNullable()
            table.integer('id_collection').notNullable()
            table.foreign('id_article').references('articles.id')
            table.foreign('id_collection').references('collections.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('article_collections')
    }
}

module.exports = ArticleCollectionSchema