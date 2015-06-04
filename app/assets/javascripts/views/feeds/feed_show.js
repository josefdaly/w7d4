NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .btn' : "refresh"
  },

  template: JST['feeds/show'],

  tagName: 'ul',

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    console.log(this.model.entries().length);
    return this;
  },

  refresh: function () {
    this.model.fetch();
  }
});
