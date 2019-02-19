$(document).ready(function() {
  $('form#celebrity').submit(function(event) {
    var gender = $("input:radio[name=gender]:checked").val();
    var active = $("input:radio[name=active]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var romance = $("input:radio[name=romance]:checked").val();

    if (gender === 'male' && active === 'very' && activity === 'sports' && romantic === 'romantic') {
    }
    $("#JohnCena").show()

    event.preventDefault();

  });
});
