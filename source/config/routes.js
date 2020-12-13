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
  'POST /api/v1/food/list-food': { action: 'food/list-food' },
  'POST /api/v1/food/food-detail': { action: 'food/food-detail' },
  
  'GET /api/v1/food/get-food-by-storeid': { action: 'food/get-food-by-storeid' },
  'GET /api/v1/food/search-food': { action: 'food/search-food' },

  'POST /api/v1/user/register': { action: 'user/register' },
  'POST /api/v1/user/login': { action: 'user/login' },
  'GET /api/v1/user/get-all': { action: 'user/get-all', cors:false },
  'GET /api/v1/user/get-one': { action: 'user/get-one' },
  'PUT /api/v1/user/update': { action: 'user/update' },
  'POST /api/v1/user/cancel-order':{action:'user/cancel-order'},



  'POST /api/v1/category/list-category': { action: 'category/list-category' },

  'GET /api/v1/menu/get-menu-by-id': { action: 'menu/get-menu-by-storeid' },

  'POST /api/v1/order/create': { action: 'order/create' },
  'POST /api/v1/order/calculate-bill': { action: 'order/calculate-bill' },
  'POST /api/v1/order/create-bill': { action: 'order/create-bill' },
  'POST /api/v1/order/list-order-by-store': { action: 'order/list-order-by-store' },
  
  'POST /api/v1/store/create': { action: 'store/create' },
  'GET /api/v1/store/get-all': { action: 'store/get-all' },
  'GET /api/v1/store/get-store-by-id': { action: 'store/get-store-by-id' },
  'POST /api/v1/store/login': { action: 'store/login' },



  'POST /api/v1/shipper/create': { action: 'shipper/create' },
  'POST /api/v1/shipper/accept-order':{ action: 'shipper/accept-order' },
  'POST /api/v1/shipper/cancel-order':{ action: 'shipper/cancel-order' },
  'POST /api/v1/shipper/list-order':{ action: 'shipper/list-order' },
  'POST /api/v1/shipper/login':{ action: 'shipper/login' },
  'POST /api/v1/shipper/received-food':{ action: 'shipper/received-food' },
  'POST /api/v1/shipper/shipped-food':{ action: 'shipper/shipped-food' },
  
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
