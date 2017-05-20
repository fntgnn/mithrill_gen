var m = require("mithril");

var Posts = {
  list: [],
  current: {},

  fetchPosts: function(){
    return m.request({
      method: "GET",
      url: "http://reduxblog.herokuapp.com/api/posts?key=cicciopasticcio",
      withCredentials: true,  //usiamo i cookies
    })
    .then(function(result){
      Posts.list = result
    })
  },

  load: function(id){
    return m.request({
      method: "GET",
      url: "http://reduxblog.herokuapp.com/api/posts/"+id+"?key=cicciopasticcio",
      data: {id: id},
      withCredentials: true,  //usiamo i cookies
    })
    .then(function(result){
      Posts.current = result;
    })
  },

  save: function(callback){
    return m.request({
      method: "POST",
      url: "http://reduxblog.herokuapp.com/api/posts?key=cicciopasticcio",
      data: Posts.current,
      withCredentials: true,  //usiamo i cookies
    })
    .then(function(result){
      console.log(result);
      Posts.list.push(result);
      callback();
    })
  },

  delete: function(post, callback){
    return m.request({
      method: "DELETE",
      url: "http://reduxblog.herokuapp.com/api/posts/"+post.id+"?key=cicciopasticcio",
      withCredentials: true,  //usiamo i cookies
    })
    .then(function(result){
      callback();
    })
  }
}

module.exports = Posts;
