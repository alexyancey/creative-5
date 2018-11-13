$(document).ready(function(){
  $("#showQuestions").click(function() {
    var url = "questions";
    $.getJSON(url, function(data) {
      console.log(data);
      for (result in data)
      {
        console.log(data[result]);
        for (questions in data[result])
        {
          var q = data[result][questions]['question'];
          console.log(q);
        }
      }
    });

    $.ajax({
      url: url,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      success: function(data, textStatus) {
        $("#questionout").html(textStatus);
      }
    })
  })
});
