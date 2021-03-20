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
    "order-address/import-order-address": "customer",
    "order-address/order-addresses": "customer",
    'order-address/update-order-address': "customer",
    'banner/list': true,
    "product/search-products": true,
    "service/list": true,
    "category/list": true,
    "like/like-store": "customer",
    "food/list-by-store": true,
    "food/list-by-category": true,
    "like/like-store": true,
    "customer/check-email": true,
    "customer/check-otp": true,
    "customer/register": true,
    "shipper/list": true,
    "test": true,
    "shipper/update": true,
    "customer/login": true,
    'sale/calculate-bill': 'customer',
    'sale/create-bill': 'customer',
    'sale/list-order-success': 'customer',
    'sale/sale-detail': 'customer',
    'like/list-like': 'customer',
    'shipper/register': 'admin',
    'shipper/login': true,
    'admin/login': true,
    'admin/register': 'admin'
};
