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

  // '/': { view: 'pages/homepage' },
  'POST /api/v1/order-address/import-order-address': { action: 'order-address/import-order-address' },
  'GET /api/v1/order-address/order-addresses': { action: 'order-address/order-addresses' },
  'PUT /api/v1/order-address/update-order-address': { action: 'order-address/update-order-address' },
  'GET /api/v1/product/search-products': { action: 'product/search-products' },
  'GET /api/v1/banner/list': { action: 'banner/list' },
  'GET /api/v1/service/list': { action: 'service/list' },
  'GET /api/v1/category/list': { action: 'category/list' },
  'POST /api/v1/food/list-by-category': { action: 'food/list-by-category' },
  'POST /api/v1/food/list-by-store': { action: 'food/list-by-store' },
  'POST /api/v1/like/like-store': { action: 'like/like-store' },
  
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
