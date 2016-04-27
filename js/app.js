//Modal

$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
        $(".modal-overlay").remove();
    });
 
});
 
$(window).resize(function() {
    $(".modal-box").css({
        top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
        left: ($(window).width() - $(".modal-box").outerWidth()) / 2
    });
});
 
$(window).resize();
 
});









$(document).ready(function() {
  $('input#autocomplete').on('keydown', function(e) {
    if (e.which == 13) {
       $("input.add-item").click();
    }
  });

  $("input.add-item").on("click", function() {
    //Settings for the notifications
    var defaults = {
                    position: 'top-right', // top-left, top-right, bottom-left, or bottom-right
                    speed: 'fast', // animations: fast, slow, or integer
                    allowdupes: true, // true or false
                    autoclose: 5000,  // delay in milliseconds. Set to 0 to remain open.
                    classList: '' // arbitrary list of classes. Suggestions: success, warning, important, or info. Defaults to ''.
                };
        function callback(r) {
                $('#results').html(JSON.stringify(r));
           }
    
    if($('input#autocomplete').val()) {
      //push notification
      $.sticky('<strong>'+$('input#autocomplete').val()+'</strong> has been added to your list', $.extend({}, defaults, {classList: 'itemAdded', allowdupes: false}), callback);
      var input = $("#autocomplete").val();
      $("ul").append("<li class='added'><i class='fa-li fa fa-square-o'></i><span>" + input + "</span></li>");

      $("li.added").click(function() {
        if ($(this).children('i').hasClass('fa-square-o') ) {
          var icon = $(this).children('i');
          $(icon).removeClass('fa-square-o').addClass('fa-check-square-o');
          $(this).addClass('checked');
        }; // end on if the icon is unchecked

        $("li.checked").click(function() {
          if ($(this).hasClass('checked') ) {
            var icon = $(this).children('i');
            var thisItem = $(this);
            $(icon).removeClass('fa-check-square-o').addClass('fa-check-square');
            $(this).addClass('strikethrough');
            $('.js-open-modal').click();
            $('.deleteThis').click(function () {
              $(thisItem).hide();
              var deletedItem = $(thisItem).children('span').html();
              $.sticky('<strong>'+deletedItem+'</strong> has been removed from your list', $.extend({}, defaults, {classList: 'itemDeleted', allowdupes: false}), callback);
            });
          }; // end of if li already has a checked class

        }); // end of li.checked click

      }); //end of li.added click
      $('input#autocomplete').val('').focus();
    }; // end of validation checking to make sure the input is NOT empty
  }); //end of adding an item 
  


  $('input.text-me-button').click(function(e) {
     // e.preventDefault();
      var ph = $('#phoneNumber').val();
      var prov = $('#provider').val();
      var sms = ph+prov;
      $('#txtMsg').val(sms);

      var items = [];
      $('li.added span').each(function() {
          items.push(" "+$(this).html());
      });
      $('#fullShoppingList').val(items);
   });

}); //end of document ready






$(function(){
  var groceryList = [
    { value: 'Bananas'},
    { value: 'Apples'},
    { value: 'Eggs'},
    { value: 'Coffee'},
    { value: 'Ketchup'},
    { value: 'Butter'},
    { value: 'Water'},
    { value: 'Lemons'},
    { value: 'Peanuts'},
    { value: 'Cereal'},
    { value: 'Shampoo'},
    { value: 'Toothpaste'},
    { value: 'Paper Towels'},
    { value: 'Toilet Paper'},
    { value: 'Potatoe Chips'},
    { value: 'Bread'}
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: groceryList,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Item:</strong> ' + suggestion.value;
      $('#outputcontent').html(thehtml);
    }
  });
  

});
