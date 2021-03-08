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
    "*": true,
    "order-address/import-order-address": true,
    "order-address/order-addresses": true,
    'banner/list': true,
    "product/search-products": true,
    "service/list": true,
    "category/list": true,
    "like/like-store": true,
    "food/list-by-store": true,
    "food/list-by-category": true,
    "like/like-store":true
};
