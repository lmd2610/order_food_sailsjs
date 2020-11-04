const request = require('request');
module.exports = {


  friendlyName: 'Test',


  description: 'Test something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    
    for(let i=0;i<1000;i++){
      let options = {
      'method': 'POST',
      'url': 'http://163.47.9.87:6001/megame/games-start',
      'headers': {
            'Authorization': 'Basic f1dd5b5e-442a-426f-94f8-a418f01d06c6',
            'Content-Type': 'application/json'
          },
       body: JSON.stringify({"customer_id":Math.floor(Math.random()*400),"game_id":4})

      };

let rs =  new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
                    try {
                                      body = JSON.parse(body);
                                      if (response.statusCode === 200) {
                                                          resolve(body);
                                                          console.log('ok')
                                                        } else {
                                                                            reject(body);
                                                                          }
                                    } catch (err) {
                                                      reject(body);
                                                    }
                  }, ()=>{
                                  console.log('end');
                                })
  });
console.log(i);
}
    return true;

  }


};
