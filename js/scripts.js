$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var item1input = $("input#item1").val();
    var item2input = $("input#item2").val();
    var item3input = $("input#item3").val();
    var item4input = $("input#item4").val();
    var inputs = [item1input, item2input, item3input, item4input];

    var capitalInputs = inputs.map(function(input){
      return input.toUpperCase();
    });


     console.log(capitalInputs);
    //
    // var sortedCapitalInputs = capitalInputs.sort();
    //     console.log(sortedCapitalInputs);
      });

    $("#results").submit()
    $("#results").show();
  });
