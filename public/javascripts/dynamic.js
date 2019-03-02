$(document).ready(function() {
  setInterval(function() {
    //your jQuery ajax code
  }, 1000 * 60 * 5); // where X is your every X minutes
  var database = [];
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  $.get("http://localhost:3000/data", function(data) {
    $(".result").html(data);
    database = data[0];
    // console.log(database);
    // console.log(database.quote);

    var i = 0;
    $("#quote").html(database.quote);
    $("#topics").html("&#8227" + database.discuss.replace(/,/gi, "<br>&#8227"));

    Object.keys(database.list).forEach(function(key) {
      var name = database.list[i]["name"];
      var lastweek = database.list[i]["lastweek"];
      var thisweek = database.list[i]["thisweek"];
      if (lastweek.length <= 0) {
        lastweek = lastweek;
      } else {
        lastweek = "&#8227" + lastweek;
      }
      if (thisweek.length <= 0) {
        thisweek = thisweek;
      } else {
        thisweek = "&#8227" + thisweek;
      }

      console.log("lastweek:", lastweek);
      console.log("thisweek:", thisweek);

      $("#weeklyTable").append(
        '<tr class="row"><td class="col-2">' +
          name +
          '</td><td class="col-5">' +
          lastweek.replace(/,/g, "<br>&#8227") +
          '</td><td class="col-5">' +
          thisweek.replace(/,/g, "<br>&#8227") +
          "</td></tr>"
      );
      i++;
    });
  });
});
