module.exports.bootstrap = async function () {
  global.moment = require('moment');
  global.flaverr = require('flaverr');
  await runBootstrap();
  // setTimeout(async () => {
  //   await test();
  // }, 2000);
  //setup interval
  setInterval(() => {
    runInterval1();
  }, 60000);
  setInterval(() => {
    runInterval5();
  }, 300000);

  //for dev only
  setInterval(() => {
    runCronjob1();
  }, 60000);
  setInterval(() => {
    runCronjob5();
  }, 300000);
};
async function test() {

}
async function runBootstrap() {
  let promises = [];
  for (var index in sails.models) {
    let model = sails.models[index];
    if (model.bootstrap) {
      promises.push(model.bootstrap());
    }
  }
  await Promise.all(promises);
}
async function runInterval1() {
  for (var index in sails.models) {
    let model = sails.models[index];
    if (model.runInterval1) {
      try {
        model.runInterval1().then(() => { })
      } catch (error) {
        console.error('interval1 error ', error);
      }
    }
  }
}
async function runInterval5() {
  for (var index in sails.models) {
    let model = sails.models[index];
    if (model.runInterval5) {
      try {
        model.runInterval5().then(() => { })
      } catch (error) {
        console.error('interval5 error ', error);
      }
    }
  }
}

async function runCronjob1() {
  for (var index in sails.models) {
    let model = sails.models[index];
    if (model.runCronjob1) {
      try {
        model.runCronjob1().then(() => { })
      } catch (error) {
        console.error('cronjob1 error ', error);
      }
    }
  }
}

async function runCronjob5() {
  for (var index in sails.models) {
    let model = sails.models[index];
    if (model.runCronjob5) {
      try {
        model.runCronjob5().then(() => { })
      } catch (error) {
        console.error('cronjob5 error ', error);
      }
    }
  }
}