const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs;

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Raptor', 'carnivore', 40);
    dinosaur3 = new Dinosaur('Stegasaurus', 'herbivore', 10);
    dinosaur4 = new Dinosaur('Dave', 'omnivore', 1);
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

  it('should be able to add a dinosaur to its collection', function() {
    //given another dinosaur
    //when added to collection
    // dino is added to collection
    park.addDino(dinosaur4)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    //given a dinosaur object to remove
    //when i run park.removeDino
    //then dinosaur is not present in array.
    park.removeDino(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    //given our park
    //when i run mvpDinos method
    //then I get the most popular dinosaurs back
    const actual = park.mvpDinos();
    assert.deepStrictEqual(actual, [dinosaur1]);

  });

  it('should be able to find all dinosaurs of a particular species', function() {
    //given a park
    //when dino filter is run
    //then an array of dinos by species is returned
    const actual = park.speciesFilter('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    //given park
    //when vistorSum
    //then number of visitors is returned. Assuming each visit to each dinosaur is counted as one visit to the park. Bit savage charging a grand for 1 dino.
    const actual = park.visitorSum();
    assert.strictEqual(actual, 100);

  });

  it('should be able to calculate the total number of visitors per year', function(){
    //given park
    //when vistorsPerYear is run
    //then number of visitors is returned. Excluding leap years, but hey this is assuming a consitant number fo visitors throughout the year so really not really needing to be that accurate.
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 36500);

  });

  it('should be able to calculate total revenue for one year', function(){
    //given park
    //when totalRevenuePA is run
    //then total revenue for one year is returned.

    const actual = park.totalRevenuePA()
    assert.strictEqual(actual, 36500000)

  });

  it('should be able to remove all dinorasurs of a particular species', function(){
    //given a park and a species to remove
    //when removeSpecies is run
    //then the park does not contain that species.
    park.removeSpecies('Stegasaurus')
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 2)


  });

  it('should provide an object tallying each species in the park', function(){
    //given a park
    //when park.allSpecies is run
    //then a hash object is return with the an entry for each species and the number
    const actual = park.allSpecies()
    assert.deepStrictEqual(actual, {'t-rex':1 , 'Raptor':1, 'Stegasaurus':1})
  });

});
