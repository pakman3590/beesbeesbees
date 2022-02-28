var RetiredForagerBee = function() {
  // call foragerbee superclass
  ForagerBee.call(this);
  // reassign age, job, canfly, color properties
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// delegate retired prototype to forager prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// set retired constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// new gamble method
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
},
// update forage method
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};