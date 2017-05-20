var m = require('mithril');
var Posts = require('../models/posts');


module.exports = {

  view: function(vnode){
    const post = Posts.current;
    return m("form.form-group",{
      onsubmit: function(e){
        e.preventDefault();
        Posts.save(function(){
          m.route.set('/');
        });
      }
    }, [
        m("label.label", "Title"),
        m("input.form-control[type=text][placeholder=Insert title]", {
          oninput: m.withAttr("value", function(value){post.title = value}),
          value: post.title
        }),
        m("label.label", "Categories"),
        m("input.form-control[type=text][placeholder=Insert categories]", {
          oninput: m.withAttr("value", function(value){post.categories = value}),
          value: post.categories
        }),
        m("label.label", "Content"),
        m("textarea.form-control[placeholder=Insert Content]", {
          oninput: m.withAttr("value", function(value){post.content = value}),
          value: post.content
        }),
        m("button.btn.btn-success[type=submit]", "Submit")
      ]);
  }
}
