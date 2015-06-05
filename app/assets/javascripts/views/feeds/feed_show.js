NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.entries(), 'add', this.addEntryView);
    this.model.entries().each(function (entry) {
      this.addEntryView(entry);
    }.bind(this));
  },

  events: {
    "click .btn" : "refresh"
  },

  template: JST['feeds/show'],

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    this.attachSubviews();
    console.log(this.model.entries().length);
    return this;
  },


  addEntryView: function (entry) {
    console.log(arguments);
    var entryShow = new NewsReader.Views.EntryShow({ model: entry});
    this.addSubview('ul', entryShow);
    // entryShow.render();
  },

  refresh: function (event) {
    event.preventDefault();
    this.model.fetch();
  }
});
