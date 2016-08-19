var initialCats = [
  {
      id: 0,
      url: 'img/cat1.jpg',
      name: 'Liam',
      clicks: 0,
      nicknames: ['Bella', 'Tigger', 'Chloe']
    }, {
      id: 1,
      url: 'img/cat2.jpg',
      name: 'Noah',
      clicks: 0,
      nicknames: ['Shadow', 'Oliver', 'Kitty']
    }, {
      id: 2,
      url: 'img/cat3.jpg',
      name: 'Ethan',
      clicks: 0,
      nicknames: ['Lucy', 'Molly', 'Jasper']
    }, {
      id: 3,
      url: 'img/cat4.jpg',
      name: 'Mason',
      clicks: 0,
      nicknames: ['Oreo', 'Smokey', 'Gizmo']
    }, {
      id: 4,
      url: 'img/cat5.jpg',
      name: 'Lucas',
      clicks: 0,
      nicknames: ['Luna', 'Simba', 'Charlie']
    }, {
      id: 5,
      url: 'img/cat6.jpg',
      name: 'Logan',
      clicks: 0,
      nicknames: ['Tiger', 'Angel', 'Jack']
    }, {
      id: 6,
      url: 'img/cat7.jpg',
      name: 'Oliver',
      clicks: 0,
      nicknames: ['Lily', 'Peanut', 'Toby']
    }, {
      id: 7,
      url: 'img/cat8.jpg',
      name: 'Jackson',
      clicks: 0,
      nicknames: ['Baby', 'Loki', 'Midnight']
    }, {
      id: 8,
      url: 'img/cat9.jpg',
      name: 'Aiden',
      clicks: 0,
      nicknames: ['Princess', 'Milo', 'Sophie']
    }, {
      id: 9,
      url: 'img/cat10.jpg',
      name: 'Jacob',
      clicks: 0,
      nicknames: ['Harley', 'Max', 'Missy']
    }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clicks);
  this.catName = ko.observable(data.name);
  this.imgSrc = ko.observable(data.url);
  // this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.catLevel = ko.computed(function() {
    var count = this.clickCount();
    if (count > 0 && count < 10) {
      return "Affectionate";
    } else if (count > 9 && count < 20) {
      return "Goofy";
    } else if (count > 19 && count < 30) {
      return "Hilarious";
    } else if (count > 29 && count < 40) {
      return "Catlike";
    } else if (count > 39 && count < 50) {
      return "Crazy cute";
    } else if (count > 49) {
      return "Priceless";
    }
  }, this);
};

var ViewModel = function() {
  let self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
