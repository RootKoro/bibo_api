'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleCommandeSchema extends Schema {
  up () {
    this.create('article_commandes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('article_commandes')
  }
}

module.exports = ArticleCommandeSchema
