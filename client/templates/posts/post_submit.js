Template.postSubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    var post = {
      url: event.target.url.value,
      title: event.target.title.value
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);

  }
});
