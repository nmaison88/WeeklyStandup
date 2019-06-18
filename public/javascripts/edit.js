$(document).ready(function() {
  var database = [];

  $.get("http://47.152.137.154:3000/data", function(data) {
    $(".result").html(data);
    database = data[0];

    var i = 0;
    $("#quote").attr("value", database.quote);
    $("#topics").attr("value", database.discuss);
    $("#assigned").attr("value", database.assigned);


    Object.keys(database.list).forEach(function(key) {
      var name = database.list[i]["name"];
      var lastweek = database.list[i]["lastweek"];
      var thisweek = database.list[i]["thisweek"];
      var details = database.list[i]["details"];


      $("#weeklyTable").append(
        '<tr id="row' +
          i +
          '" class="row"><td  class="col-1"><input id="name' +
          i +
          '" class="edit text-muted" type="text" value="' +
          name +
          '"></td><td  class="col-2"><input id="details' +
          i +
          '" class="edit text-muted" type="text" value="' +
          details +
          '"></td><td class="col-4"><input id="lastweek' +
          i +
          '"  class="edit text-muted" type="text" value="' +
          lastweek +
          '"</td><td  class="col-4"><input id="thisweek' +
          i +
          '" class="edit text-muted" type="text" value="' +
          thisweek +
          '"</td><td class="col-1"><button id="' +
          i +
          '" class="btn btn-success" onclick="update(document.getElementById(' +
          i +
          '))">Update</button></td></tr>'
      );
      i++;
    });
  });

  $("#quotechang").click(function() {
    updateQuote();
    updateAssigned();
  });
  $("#discussion").click(function() {
    updateDiscussion();
  });
   
});
function update(item) {
  var updatedValue = item.id;
  var name = document.getElementById("name" + updatedValue).value;
  var lastweek = document.getElementById("lastweek" + updatedValue).value;
  var thisweek = document.getElementById("thisweek" + updatedValue).value;
  var details = document.getElementById("details" + updatedValue).value;


  console.log("name:", name);
  console.log("lastweek:", lastweek);
  console.log("thisweek :", thisweek);
  console.log("details :", details);

  $.post("http://47.152.137.154:3000/field", {
    updatedValue: updatedValue,
    name: name,
    lastweek: lastweek,
    thisweek: thisweek,
    details: details

  }).done(function(data) {});
  alert('Updated!');
}

function updateQuote() {
  var quote = document.getElementById("quote").value;
  console.log("quote variable", quote);

  $.post("http://47.152.137.154:3000/quote", { quote: quote }).done(function(data) {
    console.log(data);
  });

}
function updateAssigned() {
  var assigned = document.getElementById("assigned").value;
  console.log("assigned variable", assigned);

  $.post("http://47.152.137.154:3000/assigned", { assigned: assigned }).done(function(data) {
    console.log(data);
  });
    alert('Updated!');

}

function updateDiscussion() {
  var topics = document.getElementById("topics").value;
  console.log("topics items", topics);

  $.post("http://47.152.137.154:3000/discuss", { discuss: topics }).done(function(
    data
  ) {
    console.log(data);
  });
    alert('Updated!');

}
