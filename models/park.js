const Dinosaur = require('./dinosaur.js');


const Park = function(name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;

};

Park.prototype.addDino = function(dino) {
  this.dinosaurs.push(dino)
};

Park.prototype.removeDino = function(dino) {
  this.dinosaurs.splice(this.dinosaurs.indexOf(dino), 1)
};

Park.prototype.mvpDinos = function() {
  let most_visits = 0;
  let mvpDinos = [];
  for (let dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay > most_visits){
      mvpDinos = [dino];
      most_visits = dino.guestsAttractedPerDay;
    }else if (dino.guestsAttractedPerDay === most_visits) {
      mvpDinos.push(dino);
    }else{
      continue;
    }
  }
  return mvpDinos;
};

Park.prototype.speciesFilter = function(species) {
  let dinos = [];
  for (let dino of this.dinosaurs){
    if (dino.species === species) {dinos.push(dino)};
  }
  return dinos;
};

Park.prototype.visitorSum = function() {
  let total = 0;
  for (let dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.visitorsPerYear = function(){
  let total = this.visitorSum() * 365;
  return total;
}


Park.prototype.totalRevenuePA = function() {
  let totalRevenue = this.visitorsPerYear() * this.price;
  return totalRevenue

}


module.exports = Park;
