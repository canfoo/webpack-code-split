// main.js
// const world = require('./world');

System.import(/* webpackChunkName: "world-chunk" */ './world').then(world => {
  function app() {
    console.log('hello word')  
  }
  app();
  world();
})


