let moduleA = require('module_a');
let jQuery = require('jquery3.3.1');

// console.log("This is coming from index.js.");
moduleA();
(function() {
  console.log("This is coming from inside an iffe in index.js.");
})();

[1, 2, 3].forEach(item => console.log(item));
console.log('bad ass');


if (module.hot) {
    module.hot.accept(moduleA, function () {
        moduleA();
    });
}
