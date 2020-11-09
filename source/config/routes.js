/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /test':{action:'test'},
  'POST /api/v1/food/list-food': { action: 'food/list-food' },
  'POST /api/v1/food/food-detail': { action: 'food/food-detail' },
  'POST /api/v1/food/calculate-bill': { action: 'food/calculate-bill' },
  'POST /api/v1/user/register': { action: 'user/register' },
  'GET /api/v1/user/get-all': { action: 'user/get-all' },
  'POST /api/v1/user/login': { action: 'user/login' },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
