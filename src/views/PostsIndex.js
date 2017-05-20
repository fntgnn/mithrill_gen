var m = require('mithril');
var Posts = require('../models/posts');

module.exports = {
  oninit: Posts.fetchPosts,

  view: function(){
    return m('ul.list-group', Posts.list.map(function(post){
      return m('a.list-group-item', {href:"/posts/"+post.id, oncreate: m.route.link}, post.title);
    }));
  }
}
