var m = require('mithril');
var Posts = require('../models/posts');

module.exports = {
  oninit: function(vnode){
    Posts.load(vnode.attrs.id);
  },

  onClickHandle: function(){
    Posts.delete(Posts.current, function(){
      m.route.set('/');
    });
  },

  view: function(vnode){
    const post = Posts.current;
    return m('div',[
      m('h1', post.title),
      m('h4', 'Categories: '+post.categories),
      m('p', post.content),
      m('hr'),
      m('button.btn.btn-danger', {onclick: this.onClickHandle}, 'delete'),
      m('a.btn.btn-primary', {href: '/', oncreate: m.route.link }, 'back')
    ]);
  }
}
