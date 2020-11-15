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
  'user/login': 'notAuthCustomer',
  'user/register': 'notAuthCustomer',
  'user/get-one': 'customer',
  'user/update': 'customer',

  'category/list-category': 'customer',

  'order/create': 'customer',

  'store/create': 'store',
};
