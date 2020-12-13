
module.exports = {


  friendlyName: 'Calculate bill',


  description: '',


  inputs: {
    list_food: { type: 'ref', required: true },
    store_id: { type: 'number' },
    options_orderfood: { type: 'json' }
  },


  exits: {

  },

  sync: true,
  fn: function (inputs, exits) {
    let { list_food, options_orderfood, store_id } = inputs;

    let food_ids = [];
    list_food.map(m => {
      food_ids.push(m.food_id)
      return 1;
    })
    Food.find({ id: food_ids })
      .then((food_infos) => {
        let total_amount = 0;
        for (let i = 0; i < food_infos.length; i++) {
          let total = list_food[i].quantity * food_infos[i].sale_price;
          list_food[i].total = total;
          list_food[i].price = food_infos[i].price;
          total_amount += total
        }
        Order.create({
          user_id: this.req.userInfo.id,
          store_id: store_id,
          order_status: 1,// Trạng thái đầu tiên khi đặt hàng => Tính hóa đơn bán hàng
          total_amount: total_amount
        }).fetch().then((orderInfo) => {
          let orderFoods = [];
          list_food.map(m => {
            let json = {};
            json.order_id = orderInfo.id;
            json.food_id = m.food_id;
            json.quantity = m.quantity;
            json.price = m.total
            json.options_orderfood = options_orderfood
            orderFoods.push(json);
          })

          OrderFood.createEach(orderFoods).then(() => {
            return exits.success({
              success: true,
              message: "Thành công",
              data: {
                total_price:total_amount,
                list_food,
                orderId:orderInfo.id
              }
            })
          });
        })



      })

  }


};
