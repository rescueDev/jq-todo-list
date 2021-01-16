var input = $("input");

input.keyup(function (e) {
  if (e.keyCode == 13 && e.target.value != "") {
    var task = $('<div class="task"/>').text(e.target.value);
    var del = task.remove();
    //delete single task
    task.click(function () {
      $(this).remove();
    });
    $(".not-completed").append(task);
    input.val("");
  }
});
