$(document).ready(function(){
  $("#showQuestions").click(function() {
    var url = "questions";
    $.getJSON(url, function(data) {
      console.log(Object.keys(data));
      for (result in data)
      {
        console.log(Object.keys(data[result]));
        for (question in result)
        {
          console.log(Object.keys(data[result][question]));
        }
      }
    })
  })
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      //$("#json").text(jobj);

      var url = "comment";
      $.ajax({
        url:url,
        type: "POST",
        data: jobj,
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            //$("#done").html(textStatus);
        }
      })
  });
  $("#getComments").click(function() {
    $.getJSON('comment', function(data) {
      console.log(data);
      var everything = "<ul class=\"list-group\">";
      for(var comment in data) {
        com = data[comment];
        everything += "<li class=\"list-group-item\">" + com.Name + " said: " + com.Comment + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })
  $("#queryUsers").click(function() {
    $.getJSON('comment', function(data) {
      var everything = "<ul class=\"list-group\">";
      for(var comment in data)
      {
        com = data[comment];
        if (com.Name === $("#name").val())
        {
          everything += "<li class=\"list-group-item\">" + com.Name + " said: " + com.Comment + "</li>";
        }
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })
  $("#deleteComments").click(function() {
    $.ajax({
      url: "comment",
      type: "DELETE",
      contentType: "application/json; charset=utf-8",
      success: function(data, textStatus) {
        //$("#done").html(textStatus);
      }
    })
  })
});