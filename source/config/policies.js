/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

const shipper = require("../api/policies/shipper");

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ********************foo*******************************************************/

  '*': true,
  'swagger': true,
  'swagger/swagger.json': true,
  'user/get-all': 'customer',
  'user/login': 'notAuthCustomer',
  'user/register': 'notAuthCustomer',
  'user/get-one': 'customer',
  'user/update': 'customer',
  'user/cancel-order':'customer',


  'category/list-category': 'customer',

  'order/calculate-bill': 'customer',
  'order/create': 'customer',
  'order/list-order-by-store': 'store',

  'store/create': 'notAuthStore',
  'store/get-all': 'customer',
  'store/get-store-by-id': 'customer',
  'store/login': 'notAuthStore',

  'food/search-food': 'customer',
  'food/get-food-by-storeid': 'customer',


  'menu/get-menu-by-storeid': 'customer',

  'shipper/create':'notAuthShipper',
  'shipper/list-order':'shipper',
  'shipper/login': 'notAuthShipper',
  'shipper/accept-order': 'shipper',
  'shipper/cancel-order': 'shipper',
  'shipper/received-food': 'shipper',
  'shipper/shipped-food': 'shipper',
};
