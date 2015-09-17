var expect = chai.expect;
var should = chai.should();

// ============================ ITEM ===========================
// should be a function, have name

describe('Item', function() {
  it('should be a class', function() {
    expect(Item).to.be.a('function');
  });
  it('should be a name', function() {
    var Cherry = new Item('Cherry');
    Cherry.name.should.equal('Cherry');
  });
}); // end of Item

// ============================ WEAPON ===========================
// should be a function, have name, damage number, instanceof Item

describe('Weapon', function() {
    it('should be a class', function() {
      expect(Weapon).to.be.a('function');
    });
    it('should have a name', function() {
      var toysword = new Weapon('Toy Sword', 50);
      toysword.name.should.equal('Toy Sword');
    });
    it('should be a damage number', function() {
      var toysword = new Weapon('Toy Sword', 50);
      toysword.damage.should.equal(50);
    });
    it('should extend Item', function() {
      expect(new Weapon('toysword', 50)).to.be.an.instanceof(Item);
    });
  }); // end of Weapon

// ============================ FOOD ===========================
// should be a function, have name, instanceof Item, replenish health

describe('Food', function() {
    it('should be a class', function() {
      expect(Food).to.be.a('function');
    });
    it('should have a name', function() {
      var kiwi = new Food('Kiwi', 50);
      kiwi.name.should.equal('Kiwi');
    });
    it('should be an Item', function() {
      var kiwi = new Food('Kiwi', 50);
      expect(kiwi instanceof Item).to.be.true;
    });
    it('should be a replenish health', function() {
      var kiwi = new Food('Kiwi', 50);
      kiwi.energy.should.equal(50);
    });
  }); // end of Food

// ============================ PLAYER ===========================
// should be a function, Player name, health, strength, speed, isAlive (true), equipped (false)

describe('Player', function() {
  it('should be a class', function() {
      expect(Player).to.be.a('function');
    });
  it('should have a name', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.name.should.equal('Chris');
  });
  it('should have health', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.health.should.equal(1000);
  });
  it('should have strength', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.strength.should.equal(500);
  });
  it('should have a speed', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.speed.should.equal(450);
  });
  it('should be alive', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.isAlive.should.equal.true;
  });
  it('should not be equipped', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.equipped.should.equal.false;
  });
});

// ============================ PLAYER PRIVATE ===========================
// .getPack - should be function, put item in bag(array)
describe('.getPack', function() { //put in bag
  it('should be a function', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.getPack.should.be.a('function');
  });
  it('put item back into bag', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.getPack().should.be.a('Array');
  });
});

//.getMaxHealth - should be a function, display maxHealth
describe('.getMaxHealth', function() {
  it('should be a function', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.getMaxHealth.should.be.a('function');
  });
  it('maxHealth', function() {
    var player = new Player('Chris', 1000, 500, 450); //jaslkdfjl;aksdjflkasjdflkj
    player.getMaxHealth().should.equal(1000);
  });
});

//.checkPack - should be a function, print pack contents
describe('.checkPack', function() {
  it('should be a function', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.checkPack.should.be.a('function');

  });
});

//.takeItem - should be a function,
describe('.takeItem', function() {
  it('should be a function', function() {
    var player = new Player('Chris', 1000, 500, 450);
    player.takeItem.should.be.a('function');
  });
  it.skip('should print contents of bag nicely', function() {
    var player = new Player('Chris', 10000, 500, 450);
    player.checkPack().should.be.a('Array');
  });
}); // end of Player
