NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new NewsReader.Collections.Feeds();
  },

  routes: {
    "" : "feedsIndex",
    "feeds/:id" : "feedShow"
  },

  feedShow: function (id) {
    var feed = this.collection.getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({ model: feed });
    this.$rootEl.html(view.render().$el);
  },

  feedsIndex: function () {
    var feeds = this.collection;
    feeds.fetch({
      success: function () {
      }.bind(this)
    });
    var view = new NewsReader.Views.FeedsIndex({ collection: feeds });
    this.$rootEl.html(view.render().$el);
  }
});
