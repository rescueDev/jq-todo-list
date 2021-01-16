var input = $("input");

input.keyup(function (e) {
  if (e.keyCode == 13 && e.target.value != "") {
    var task = $('<div class="task"/>').text(e.target.value);
    $(".not-completed").append(task);
    input.val("");
  }
});
