$(document).ready(function() {
  setInterval(function() {
    //your jQuery ajax code
  }, 1000 * 60 * 5); // where X is your every X minutes
  var database = [];
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  $.get("http://47.152.137.154:3000/data", function(data) {
    $(".result").html(data);
    database = data[0];
    // console.log(database);
    // console.log(database.quote);

    var i = 0;
    $("#quote").html(database.quote);
    $("#topics").html("&#8227 " + database.discuss.replace(/,/gi, "<br>&#8227 "));

    Object.keys(database.list).forEach(function(key) {
      var name = database.list[i]["name"];
      var avatar = database.list[i]["avatar"];

      var lastweek = database.list[i]["lastweek"];
      var thisweek = database.list[i]["thisweek"];
      var details = database.list[i]["details"];

      if (lastweek.length <= 0) {
        lastweek = lastweek;
      } else {
        lastweek = "&#8227 " + lastweek;
      }
      if (thisweek.length <= 0) {
        thisweek = thisweek;
      } else {
        thisweek = "&#8227 " + thisweek;
      }

      console.log("lastweek:", lastweek);
      console.log("thisweek:", thisweek);

      $("#weeklyTable").append(
        `    <!-- Team member cards -->
        <div class="w-100" style=" display: flex">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggl e('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid"
                                            src="`+avatar+`"
                                            alt="card image" ></p>
                                    <h4 class="card-title"> `+ name + `</h4>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Details about ` +name+ `</h4>
                                    <p id="PersonDetails" class="card-text"> `+ details+`
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ./Team member -->
            <!-- Team member Last Week -->
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip">
                        <div class="week">
                            <div class="card">
                                <div class="card-body text-center">
                                    
                                    <h4 class="card-title">Last Week</h4>
                                    <p class="card-body">`+lastweek.replace(/,/g, "<br>&#8227 ")+`</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Details about last week</h4>
                                    <p class="card-text">
                                    
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- ./Team member Last Week -->
            <!-- Team member This week -->
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip">
                        <div class="week">
                            <div class="card">
                                <div class="card-body text-center">
                                    
                                    <h4 class="card-title">This Week</h4>
                                    <p class="card-text"> `+thisweek.replace(/,/g, "<br>&#8227 ")+` </p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Details about this week</h4>
                                    <p class="card-text">
                                    </p>
                                    
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        <!-- ./Team member This Week -->

        </div>
        <!-- ./Team member cards -->`

// '<div class="row mx-auto my-auto" style=" justify-content: center;"><div class="card card-title col-sm-3  text-white bg-info mx-3 my-3 py-3 px-3" style="text-align: center; align-items: center">'+ name +'</div><div class="card col-sm-3  text-white bg-info mx-3 my-3 py-3 px-3" style="text-align: center; align-items: center">'+ lastweek.replace(/,/g, "<br>&#8227 ") +' </div><div class="card col-sm-3  text-white bg-info mx-3 my-3 py-3 px-3"style="text-align: center; align-items: center">' +thisweek.replace(/,/g, "<br>&#8227 ") +'</div></div>'

      );
      i++;
    });
  });
});
