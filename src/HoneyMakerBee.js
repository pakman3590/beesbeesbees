var HoneyMakerBee = function() {
  // call bee superclass
  Bee.call(this);
  // reassign age and job properties
  this.age = 10;
  this.job = 'make honey';
  // new honeypot property
  this.honeyPot = 0;
};

// delegate honeybee prototype to bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// set honey bee constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// new makehoney method
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
};
//new givehoney method
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot --;
};