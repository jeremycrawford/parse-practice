console.log('\'Allo \'Allo!');
 
$(function(){
  Parse.initialize("niea3eYLacFwpITMMHZf2pl9TVKRGtR4q6VNRDHx", "hNIHE3gc2yfnumjZ71PtsN8FjKUYSdoBGbbDtsG4");
 
  // var pizzaBurger = new Burger;
  // pizzaBurger.set('breadType', 'soggyish')
  // pizzaBurger.save({name: 'Pizza Burger'})
 
  window.burgers = new BurgersCollection();
  burgers.fetch();
})