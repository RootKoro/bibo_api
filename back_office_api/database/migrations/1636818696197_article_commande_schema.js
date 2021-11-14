'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleCommandeSchema extends Schema {
    up() {
        this.create('article_commandes', (table) => {
            table.increments()
            table.integer('id_article').unsigned().notNullable()
            table.integer('id_commande').unsigned().notNullable()
            table.integer('quantite_article_commande').unsigned().notNullable()
            table.integer('total').unsigned().notNullable()
            table.foreign('id_article').references('articles.id')
            table.foreign('id_commande').references('commandes.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('article_commandes')
    }
}

module.exports = ArticleCommandeSchema