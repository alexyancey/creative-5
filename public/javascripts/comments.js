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
      $("#currentscore").html(score);
      console.log(score);
    }
    if (current === 15)
    {
      var name = $("#getname").val();
      if (name === "")
        name = "Anonymous";
      var myscore = { Name: name, Score: score };
      console.log(myscore);
      var jsonscore = JSON.stringify(myscore);

      $.ajax({
        url: "score",
        type: "POST",
        data: jsonscore,
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus) {}
      })

      //Change visibility of button
      $("#btnTrue").css("visibility", "collapse");
      $("#btnFalse").css("visibility", "collapse");

      $("#scorelabel").html("Final Score");
    }
    //if current is now 15 show the continue button and make the true/false buttons
    //disappear
  })

  $("#btnFalse").click(() => {
    if (current < 15)
    {
      if (answers[current] === "False")
        score++;
      current++;
      $("#questionout").html(questions[current]);
      $("#currentscore").html(score);
      console.log(score);
    }
    if (current === 15)
    {
      var name = $("#getname").val();
      if (name === "")
        name = "Anonymous";
      var myscore = { Name: name, Score: score };
      console.log(myscore);
      var jsonscore = JSON.stringify(myscore);

      $.ajax({
        url: "score",
        type: "POST",
        data: jsonscore,
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus) {}
      })

      //Change visibility of button
      $("#btnTrue").css("visibility", "collapse");
      $("#btnFalse").css("visibility", "collapse");

      $("#scorelabel").html("Final Score");
    }
    //if current is now 15 show the continue button and make the true/false buttons
    //disappear
  })

  //Make a continue button that appears once all questions are done
  //This will be the continue button click event

});
