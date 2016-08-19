var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.catName = ko.observable(data.catName);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
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

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    catName: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: '#',
    nicknames: ['Sweetie', 'Bubbles', 'Llama', 'Bruce']
  }) );

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
