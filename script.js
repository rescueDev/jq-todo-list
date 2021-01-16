var input = $("input");

input.keyup(function (e) {
  if (e.keyCode == 13 && e.target.value != "") {
    var task = $('<div class="task"/>').text(e.target.value);
    var del = $('<i class="fas fa-trash"/>');
    var check = $('<i class="fas fa-check"/>');

    task.append(del, check);

    //delete single task
    $(".task .fa-trash").click(function () {
      $(this).remove();
    });
    $(".not-completed").append(task);
    input.val("");
  }
});
