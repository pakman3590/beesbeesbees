var ForagerBee = function() {
  // call bee superclass
  Bee.call(this);
  // reassign age, job properties
  this.age = 10;
  this.job = 'find pollen';
  // new canfly and treasurechest properties
  this.canFly = true;
  this.treasureChest = [];
};

// delegate foragerbee prototype to bee prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// set forager constructor
ForagerBee.prototype.constructor = ForagerBee;
// new forage method
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};