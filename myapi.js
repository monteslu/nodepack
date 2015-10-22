var _ = require('lodash');

module.exports.doSomething = function(){
  return _.sample([1,2,3,4,5,6], 1);
}
