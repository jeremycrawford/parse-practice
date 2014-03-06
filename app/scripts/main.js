console.log('\'Allo \'Allo!');
 
$(function(){
  Parse.initialize("DJr9oos0Q5PhHzLJf3LxNTmfZc60kXje33qQGtoe", "e9bxyjaeuV6iU5we6CEqyTkHzcQ8k69nw8CFcEML");
 
  window.names = new NamesCollection();
  names.fetch();

   
 
  $('.save-button').click(function(){

    var user = new Parse.User();

    var firstName = $('.js-name').val()
    var email = $('.js-email').val()
    var password = $('.js-password').val()

    user.set("username", firstName);
    user.set("email", email);
    user.set("password", password);

    user.signUp(null, {
      success: function(user) {
  
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

  }); 

});


    