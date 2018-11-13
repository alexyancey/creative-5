$(document).ready(function() {
  $("#showQuestions").click(function() {
    var url = "questions";
    $.getJSON(url, function(data) {
      console.log(data);
      for (result in data) {
        console.log(data[result]);
        for (questions in data[result]) {
          var q = data[result][questions]['question'];
          console.log(q);
        }
      }
    })
  })
  $("#saveScoreButton").click(function() {
    var myobj = { Name: "Chester", Score: "10" };
    var jobj = JSON.stringify(myobj);
    $("#json").text(jobj);
    var url = "questions";
    console.log(jobj);
    $.ajax({
      url: url,
      type: "POST",
      data: jobj,
      contentType: "application/json; charset=utf-8",
      success: function(data, textStatus) {
        console.log(textStatus);
      }
    })
  })
      $("#saveScoreButton").click(function() {
        $.getJSON('score', function(data) {
            console.log("in score getJSON");
            console.log(data);
            var everything = "<ul>";
            for (var comment in data) {
                com = data[comment];
                everything += "<li> Name: " + com.Name + " -- score: " + com.Score + "</li>";
            }
            everything += "</ul>";
            $("#done").html(everything);
        })
    })
})
