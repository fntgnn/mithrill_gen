var m = require("mithril")

var PostsIndex = require("./views/PostsIndex")
var PostsShow = require("./views/PostsShow")
var PostsNew = require("./views/PostsNew")
var Layout = require("./views/Layout")

m.route(document.body, "/posts", {
    "/posts/edit/:id": {
      render: function(vnode) {
          return m(Layout, m(PostsEdit, vnode.attrs))
      }
    },
    "/posts/new": {
      render: function() {
          return m(Layout, m(PostsNew))
      }
    },
    "/posts/:id": {
        render: function(vnode) {
            return m(Layout, m(PostsShow, vnode.attrs))
        }
    },
    "/posts": {
        render: function() {
            return m(Layout, m(PostsIndex))
        }
    }
})
