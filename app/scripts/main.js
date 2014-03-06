console.log('\'Allo \'Allo!');
 
$(function(){
  Parse.initialize("DJr9oos0Q5PhHzLJf3LxNTmfZc60kXje33qQGtoe", "e9bxyjaeuV6iU5we6CEqyTkHzcQ8k69nw8CFcEML");
 
  window.names = new NamesCollection();
  names.fetch();

   
 
  $('.save-button').click(function(){


    var name = new Name();

    name.save({
      name: $('.js-name').val(),
      email: $('.js-email').val()
    });

    $('.js-name').val(),
    $('.js-email').val()
  }); 




    
})
  // name.set("name", $('.js-name'))













  // var pizzaBurger = new Burger;
  // pizzaBurger.set('breadType', 'soggyish')
  // pizzaBurger.save({name: 'Pizza Burger'})

  // var TestObject = Parse.Object.extend("TestObject");
  // var testObject = new TestObject();
  // testObject.save({foo: "bar"}).then(function(object) {
  //   alert("This is working!");