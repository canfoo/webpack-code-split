// main.js

function app() {
  console.log('hello word')  
}
app();
setTimeout(() => {
  console.log('3s时间到');
  System.import(/* webpackChunkName: "world-chunk" */ './world').then(world => {
    world();
  })
}, 3000); // 延迟3s异步加载world.js



