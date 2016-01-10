Template.postSubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    var post = {
      url: event.target.url.value,
      title: event.target.title.value
    };

    Meteor.call('postInsert', post, function(error, result) {
      if (err) return alert(error.reason);

      Router.go('postPage', {_id: result._id });
    });


  }
});
