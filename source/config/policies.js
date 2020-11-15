/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ********************foo*******************************************************/

  '*': true,
  'swagger': true,
  'user/get-all': 'customer',
  'category/list-category': 'customer',
  'user/login': 'notAuthCustomer',
  'user/register': 'notAuthCustomer',
  'food/search-food': 'customer',
  'store/get-store-by-id': 'customer',
  'food/get-food-by-storeid': 'customer',
  'menu/get-menu-by-storeid': 'customer'
};
