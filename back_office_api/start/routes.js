'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.resource('/article', 'ArticleController').apiOnly()
Route.resource('/article_commande', 'ArtileCommandeController').apiOnly()
Route.resource('/commande', 'CommandeController').apiOnly()
Route.resource('/categorie', 'CategorieController').apiOnly()
Route.resource('/client', 'ClientController').apiOnly()
Route.resource('/collection', 'CollectionController').apiOnly()
Route.resource('/article_collection', 'ArticleCollectionController').apiOnly()
Route.resource('/favori', 'FavoriController').apiOnly()
Route.resource('/sous_categorie', 'SousCategorieController').apiOnly()

// Route.delete('/article/:id', 'ArticleController.destroy')
// Route.delete('/article_commande/:id', 'ArticleCommandeController.destroy')
// Route.delete('/commande/:id', 'CommandeController.destroy')
// Route.delete('/categorie/:id', 'CategorieController.destroy')
// Route.delete('/client/:id', 'ClientController.destroy')
// Route.delete('/collection/:id', 'CollectionController.destroy')

/* Route.get('/article', 'PostController.index')
Route.get('/article/:id', 'PostController.show')
Route.post('/article', 'PostController.store')
Route.put('/article/:id', 'PostController.update')

Route.get('/article_commande', 'PostController.index')
Route.get('/article_commande/:id', 'PostController.show')
Route.post('/article_commande', 'PostController.store')
Route.put('/article_commande/:id', 'PostController.update')

Route.get('/commande', 'PostController.index')
Route.get('/commande/:id', 'PostController.show')
Route.post('/commande', 'PostController.store')
Route.put('/commande/:id', 'PostController.update')

Route.get('/categorie', 'PostController.index')
Route.get('/categorie/:id', 'PostController.show')
Route.post('/categorie', 'PostController.store')
Route.put('/categorie/:id', 'PostController.update')

Route.get('/client', 'PostController.index')
Route.get('/client/:id', 'PostController.show')
Route.post('/client', 'PostController.store')
Route.put('/client/:id', 'PostController.update')

Route.get('/collection', 'PostController.index')
Route.get('/collection/:id', 'PostController.show')
Route.post('/collection', 'PostController.store')
Route.put('/collection/:id', 'PostController.update') */