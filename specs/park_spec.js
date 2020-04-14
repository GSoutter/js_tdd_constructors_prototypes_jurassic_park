const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaurs;

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Raptor', 'carnivore', 40);
    dinosaur3 = new Dinosaur('Stegasaurus', 'herbivore', 10);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3]

    park = new Park('Jurassic Park', 1000.00, dinosaurs)
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 1000.00);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
