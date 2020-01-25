function MilitaryResource(type, health, maxHealth, distance, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distance = distance;
    this.maxDistance = maxDistance;
 }

 var resourse = new MilitaryResource('warrior', 100, 200, 0, 300);

 MilitaryResource.prototype.isReadyToMove = function() {
     return this.maxDistance > this.distance
 }

 MilitaryResource.prototype.isReadyToFight = function() {
    return this.health > 0;
 };

 MilitaryResource.prototype.restore = function() {
    return this.distance === 0 ? this.maxHealth : this.health
 };

 MilitaryResource.prototype.clone = function() {
    return new MilitaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance)
 };

 console.log(resourse);
 console.log(resourse.isReadyToMove());
 console.log(resourse.isReadyToFight())
 console.log(resourse.restore())
 console.log(resourse.clone())
 
 


 function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
 }
 
 Squad.prototype.isReadyToMove = function() {
    return this.squad.every(function(resourse) {
       return resourse.isReadyToMove();
    }) 
 };

 Squad.prototype.isReadyToFight = function() {
    return this.squad.every(function(resourse) {
       return resourse.isReadyToFight();
    }) 
 };

 Squad.prototype.restore = function() {
   return this.squad.forEach(function(resourse) {
      return resourse.restore();
   }) 
};

 Squad.prototype.getReadyToMoveResources = function() {
   return this.squad.filter(function(resourse) {
      return resourse.getReadyToMoveResources();
   }) 
};

 Squad.prototype.combineResources = function(arr) {
     return this.squad.concat(arr)
 };

 Squad.prototype.cloneResource = function() {
   return new Squad (
      this.resourses.map(function(resourses) {
         return resourses.clone
      })
   )
};
