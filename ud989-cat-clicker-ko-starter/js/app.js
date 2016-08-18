var Cat = function(){
  this.clickCount = ko.observable(0);
  this.catName = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('#');
  this.nicknames = ko.observableArray(['Sweetie', 'Bubbles', 'Llama', 'Bruce']);

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
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
