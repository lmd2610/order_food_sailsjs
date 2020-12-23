const axios = require('axios');
module.exports = {


  friendlyName: 'Axios',


  description: 'Axios common.',


  inputs: {
    options:{type:'ref'}
  },


  exits: {

    success: {
      description: 'All done.',
    },
    // option :`{
    //   method: 'get',
    //   //url: 'http://bit.ly/2mTM3nY',
    //   url: '/user',
    //   baseURL: 'https://some-domain.com/api/',
    //   headers: {'X-Requested-With': 'XMLHttpRequest'},
    //   params: {
    //     ID: 12345
    //   },
    //   data: {
    //     firstName: 'Fred'
    //   },
    //   timeout: 1000,
    //   responseType: 'json',

    // }`
  },
  sync:true,

  fn: function (inputs,exits) {
    let {options} = inputs;
    axios(options)
      .then(function (response) {
        return exits.success({
          success:true,
          data:response
        })
      });
  }


};

