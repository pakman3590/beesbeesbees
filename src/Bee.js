var Bee = function() {
  // delegate to grub superclass
  Grub.call(this, null);
  // reset age/color properties
  this.age = 5;
  this.color = 'yellow';
  // new job property
  this.job = 'keep on growing';
};

// set bee prototype to delegate to grub's
Bee.prototype = Object.create(Grub.prototype);
// set bee constructor to bee's prototype
Bee.prototype.constructor = Bee;
