$(document).ready(function() {
  $("#email").submit(function(event) {
    var email = $("form-control mr-sm-2").val();
    $("form-control mr-sm-2").append(email);
    $("email").text(email);


    $("#sucesse_message").show();

    event.preventDefault();
  });
});
