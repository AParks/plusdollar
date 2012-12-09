// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  // $("#new-pledge-link").click(function (e) {
    // e.preventDefault();
    // $('<div class="panel" />').
      // load(this.href).
      // insertAfter(this);
    // $(this).hide();
  // });
  
  function postHandler (result) {
    var $result = $(result),
        $err = $result.find("#error_explanation");
    if ($err.length) {
      $('#error_explanation').remove();
      $err.insertBefore("#new_pledge");
    } else {
      $result.appendTo('table.pledges');
      
      $("#new-pledge-link").
      show().
      next('.panel').
      remove();
    }
  }
  
  $('#new_pledge').live('submit', function (e) {
    e.preventDefault();
    var body = $(this).serialize();
    $.post(this.action, body, postHandler);
  });
});
