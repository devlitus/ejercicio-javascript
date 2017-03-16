$(document).ready(function() {
  $('select').material_select();
  var color = $("#selector").val();
  
  /*$('#selector').change(function () {
    var color = $("#selector").val();
    switch (color) {
      case lima:
        
        $("body").addClass('lime');
        break;
      case blue:
        $("body").addClass('blue-grey');
        break;
      case deep:
        $("body").addClass('deep-orange');
        break;
      case grey:
        $("body").addClass('grey');
        break;
      default:
        $("body").addClass('purple lighten-5');
        break;
    }
  })*/
});


function cambiarColor() {
    var color = $("#selector").val();
    switch (color) {
      case 'lima':
        $("body").addClass('lime');
        $("body").removeClass('blue-grey');
        $("body").removeClass('deep-orange');
        $("body").removeClass('grey');
        break;
      case 'blue':
        $("body").addClass('blue-grey');
        $("body").removeClass('lime');
        $("body").removeClass('deep-orange');
        $("body").removeClass('grey');
        break;
      case 'deep':
        $("body").addClass('deep-orange');
        $("body").removeClass('lime');
        $("body").removeClass('blue-grey');
        $("body").removeClass('grey');
        break;
      case 'grey':
        $("body").addClass('grey');
        $("body").removeClass('lime');
        $("body").removeClass('deep-orange');
        $("body").removeClass('blue-grey');
        break;
      default:
        $("body").addClass('withe');
        break;
    }
    
  };