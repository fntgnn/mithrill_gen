var m = require("mithril");

module.exports = {
  view: function(vnode){
    return m("main.layout", [
      m("nav.menu",[
        m("a[href='/posts']", {oncreate: m.route.link}, "Posts")
      ]),
      m("section", vnode.children)
    ]);
  }
}
