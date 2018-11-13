$(document).ready(function(){
  var url = "questions";
  var questions = [];
  var answers = [];
  var current = 0;
  var score = 0;
  $.getJSON(url, function(data) {
    console.log(data);
    for (result in data)
    {
      console.log(data[result]);
      for (q in data[result])
      {
        var question = data[result][q]['question'];
        var answer = data[result][q]['correct_answer'];
        questions.push(question);
        answers.push(answer);
      }
      console.log(questions[current]);
      $("#questionout").html(questions[current]);
    }
  });

  $("#btnTrue").click(() => {
    if (current < 15)
    {
      if (answers[current] === "True")
        score++;
      current++;
      $("#questionout").html(questions[current]);
      console.log(score);
    }
  })

  $("#btnFalse").click(() => {
    if (current < 15)
    {
      if (answers[current] === "False")
        score++;
      current++;
      $("#questionout").html(questions[current]);
      console.log(score);
    }
  })

  $.ajax({
    url: url,
    type: "POST",
    contentType: "application/json; charset=utf-8",
    success: function(data, textStatus) {}
  })
});
