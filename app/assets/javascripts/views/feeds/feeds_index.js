NewsReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync destroy', this.render);
  },

  events: {
    "click .btn" : "deleteFeed"
  },

  template: JST['feeds/index'],

  tagName: 'ul',

  render: function () {
    var content = this.template({ feeds: this.collection });
    this.$el.html(content);
    return this;
  },

  deleteFeed: function (event) {
    event.preventDefault();

    var id = $(event.currentTarget).data('feed-id');
    this.collection.get(id).destroy();
  }
});
