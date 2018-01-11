$(document).ready(function(){

      var PokemonURL = "";
      for (var i = 1; i < 152; i++){
      PokemonURL = '<img id=' + i + ' src="https://pokeapi.co/media/img/' + i + '.png" data-pokeid =' + i + ">";
      $('.pokemonListArea').append(PokemonURL);
    };

      $('img').click(function(){
        var pokeID = $(this).attr('id');
        // var pokeImage = $(this).attr('src');
        $.get("https://pokeapi.co/api/v2/pokemon/" + pokeID + "/", function(data) {
          console.log(data)
          var name = "<h2>" + data.name + "</h2>";

          var type = "<h4>" + 'Type(s)' + "</h4><ul>";
          for(var i = 0; i < data.types.length; i++) {
              type += "<li>" + data.types[i].type.name + "</li>";
          }
          type += "</ul>";

          var height = "<h4>" + 'Height' + "</h4><ul><li>" + data.height + "</li></ul>";
          var weight = "<h4>" + 'Weight' + "</h4><ul><li>" + data.weight + "</li></ul>";

       $('.pokedexBox').html(name + '<img id=' + i + ' src="https://pokeapi.co/media/img/' + pokeID + '.png" data-pokeid =' + i + '>' + type + height + weight);
       });
     });
  });
