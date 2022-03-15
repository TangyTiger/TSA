var marker;
var marked;
var mymap;
var lat;
var lng;
function onMapClick(e) {
  if (marked) {
    mymap.removeLayer(marker);
  }
  marked = true;
  marker = new L.circle(e.latlng, {
    color: "red",
    fill: "f03",
    fillOpacity: 0.4,
    radius: 1300,
  }).addTo(mymap);
  var loc = e.latlng;
  lat = loc.lat;
  lng = loc.lng;
}
function submit() {
  console.log("Hi");
  console.log(document.getElementById("dropdown").value);
  window.dropdown = document.getElementById("dropdown");
  if (dropdown.value == "Environmental") {
    console.log("hi");
    document.getElementById("formthing").innerHTML = `
    <p>Title (include purpose)</p>
    <input type = "text" id = "environmentalPostTitle" name = "environmentalPostTitle" placeholder="Enter title here">
    <br>
    <br>
    <p>(Description, include experiences, dates, goals, and special notes)</p>
    <textarea rows = "6" cols = "50" id = "environmentalPostDescription" name = "environmentalPostDescription" placeholder="Enter description here"></textarea>
    <br>
    <br>
    <p>Location (click on your general area)</p>
    <div id="map" style="display: block; margin-left: auto; margin-right: auto; width: 50%; height:300px; width:300px;"></div>
    <br>
    <p>Your fundraising goal</p>
    <label>$ </label><input type = "text" id = "environmentalFee" name = "environmentalPostFee" placeholder="Enter goal"><br>
    <br>
    <p>Your Name</p>
    <input type = "text" id = "environmentalPostName" name = "environmentalPostName" placeholder="Enter name"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "environmentalPostEmail" name = "environmentalPostEmail" placeholder="Enter email">
    <br>
    <br>
    <button style="background-color:rgb(245,120,93); text-color:rgb(255, 255, 255)" onclick="send_environmental()" class="btn ">Submit</button>    `;
    mymap = L.map("map").setView([47.61341768915884, -122.03149390175979], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
      }
    ).addTo(mymap);
    mymap.on("click", onMapClick);
  } else if (dropdown.value == "Social Inequality") {
    console.log("bye");
    document.getElementById("formthing").innerHTML = `
    <p>Title (include purpose)</p>
    <input type = "text" id = "socialPostTitle" name = "socialPostTitle" placeholder="Enter title here">
    <br>
    <br>
    <p>(Description, include experiences, dates, goals, and special notes)</p>
    <textarea rows = "6" cols = "50" id = "socialPostDescription" name = "socialPostDescription" placeholder="Enter description here"></textarea>
    <br>
    <br>
    <p>Location (click on your general area)</p>
     <div id="map" style="display: block; margin-left: auto; margin-right: auto; width: 50%; height:300px; width:300px;"></div>
    <br>
    <p>Your fundraising goal</p>
    <label>$ </label><input type = "text" id = "socialFee" name = "socialPostFee" placeholder="Enter goal"><br>
    <br>
    <p>Your Name</p>
    <input type = "text" id = "socialPostName" name = "socialPostName" placeholder="Enter goal"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "socialPostEmail" name = "socialPostEmail" placeholder="Enter email">
    <br>
    <br>
    <button onclick="send_social()" style="background-color:rgb(245,120,93); text-color:rgb(255, 255, 255)" class="btn">Submit</button>    
    `;
    mymap = L.map("map").setView([47.61341768915884, -122.03149390175979], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
      }
    ).addTo(mymap);
    mymap.on("click", onMapClick);
  } else if (dropdown.value == "Economic Inequality") {
    console.log("hi");
    document.getElementById("formthing").innerHTML = `
    <p>Title (include purpose)</p>
    <input type = "text" id = "economicPostTitle" name = "economicPostTitle" placeholder="Enter title here">
    <br>
    <br>
    <p>(Description, include experiences, dates, goals, and special notes)</p>
    <textarea rows = "6" cols = "50" id = "economicPostDescription" name = "economicPostDescription" placeholder="Enter description here"></textarea>
    <br>
    <br>
    <p>Location (click on your general area)</p>
     <div id="map" style="display: block; margin-left: auto; margin-right: auto; width: 50%; height:300px; width:300px;"></div>
    <br>
    <p>Your fundraising goal</p>
    <label>$ </label><input type = "text" id = "economicFee" name = "economicPostFee" placeholder = "Enter goal"><br>
    <br>
    <p>Your Name</p>
    <input type = "text" id = "economicPostName" name = "economicPostName" placeholder="Enter name"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "economicPostEmail" name = "economicPostEmail" placeholder="Enter email">
    <br>
    <br>
    <button style="background-color:rgb(245,120,93); text-color:rgb(255, 255, 255)" onclick="send_economic()" class="btn">Submit</button>    `;
    mymap = L.map("map").setView([47.61341768915884, -122.03149390175979], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
      }
    ).addTo(mymap);
    mymap.on("click", onMapClick);
  } else if (dropdown.value == "Other") {
    console.log("bye");
    document.getElementById("formthing").innerHTML = `
    <p>Title (include purpose)</p>
    <input type = "text" id = "otherPostTitle" name = "otherPostTitle" placeholder="Enter title here">
    <br>
    <br>
    <p>(Description, include experiences, dates, goals, and special notes)</p>
    <textarea rows = "6" cols = "50" id = "economicPostDescription" name = "economicPostDescription" placeholder="Enter description here"></textarea>
    <br>
    <br>
    <p>Location (click on your general area)</p>
     <div id="map" style="display: block; margin-left: auto; margin-right: auto; width: 50%; height:300px; width:300px;"></div>
    <br>
    <p>Your fundraising goal</p>
    <label>$ </label><input type = "text" id = "otherFee" name = "otherPostFee" placeholder="Enter goal"><br>
    <br>
    <p>Your Name</p>
    <input type = "text" id = "otherPostName" name = "otherPostName" placeholder="Enter name"><br>
    <br>
    <p>Your Email</p>
    <input type = "text" id = "otherPostEmail" name = "otherPostEmail" placeholder="Enter email">
    <br>
    <br>
    <button style="background-color:rgb(245,120,93); text-color:rgb(255, 255, 255)" onclick="send_other()" class="btn">Submit</button>    
    `;
    mymap = L.map("map").setView([47.61341768915884, -122.03149390175979], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
      }
    ).addTo(mymap);
    mymap.on("click", onMapClick);
  }
}

function send_environmental() {
  var type = dropdown.value;
  var title = document.getElementById("environmentalPostTitle").value;
  var description = document.getElementById(
    "environmentalPostDescription"
  ).value;
  var name = document.getElementById("environmentalPostName").value;
  var email = document.getElementById("environmentalPostEmail").value;
  var fee = document.getElementById("environmentalFee").value;
  var subject = document.getElementById("dropdown").value;
  location.href =
    "/submitpost?type=" +
    type +
    "&title=" +
    title +
    "&description=" +
    description +
    "&name=" +
    name +
    "&email=" +
    email +
    "&lat=" +
    lat +
    "&lng=" +
    lng +
    "&subject=" +
    subject +
    "&fee=" +
    fee;
}

function send_social() {
  var type = dropdown.value;
  var title = document.getElementById("socialPostTitle").value;
  var description = document.getElementById("socialPostDescription").value;
  var name = document.getElementById("socialPostName").value;
  var email = document.getElementById("socialPostEmail").value;
  var fee = document.getElementById("socialFee").value;
  var subject = document.getElementById("dropdown").value;
  location.href =
    "/submitpost?type=" +
    type +
    "&title=" +
    title +
    "&description=" +
    description +
    "&name=" +
    name +
    "&email=" +
    email +
    "&lat=" +
    lat +
    "&lng=" +
    lng +
    "&subject=" +
    subject +
    "&fee=" +
    fee;
}

function send_economic() {
  var type = dropdown.value;
  var title = document.getElementById("economicPostTitle").value;
  var description = document.getElementById("economicPostDescription").value;
  var name = document.getElementById("economicPostName").value;
  var email = document.getElementById("economicPostEmail").value;
  var fee = document.getElementById("economicFee").value;
  var subject = document.getElementById("dropdown").value;
  location.href =
    "/submitpost?type=" +
    type +
    "&title=" +
    title +
    "&description=" +
    description +
    "&name=" +
    name +
    "&email=" +
    email +
    "&lat=" +
    lat +
    "&lng=" +
    lng +
    "&subject=" +
    subject +
    "&fee=" +
    fee;
}

function send_other() {
  var type = dropdown.value;
  var title = document.getElementById("otherPostTitle").value;
  var description = document.getElementById("otherPostDescription").value;
  var name = document.getElementById("otherPostName").value;
  var email = document.getElementById("otherPostEmail").value;
  var fee = document.getElementById("otherFee").value;
  var subject = document.getElementById("dropdown").value;
  location.href =
    "/submitpost?type=" +
    type +
    "&title=" +
    title +
    "&description=" +
    description +
    "&name=" +
    name +
    "&email=" +
    email +
    "&lat=" +
    lat +
    "&lng=" +
    lng +
    "&subject=" +
    subject +
    "&fee=" +
    fee;
}

function viewEnvironmentalPost(data) {
  $.get({
    url: "/getEnvironmentalPost?id=" + data,
    success: function (data, status) {
      window._title = data.title;
      window._name = data.name;
      window._fee = data.fee;
      window._description = data.description;
      window._email = data.email;
      window._name = data.name;
      window._lat = data.lat;
      window._lng = data.lng;
      console.log(window._title, window._fee);
      document.getElementById("innerContent").innerHTML =
        `
        <div style="padding:15px">
        <h1 style="font-size: 50px">` +
        window._title +
        `</h1>
        <br>
        <p style="width: 50%; font-size: 25px">` +
        window._description +
        `</p>
        <br>
        <p style="font-size: 25px">Organizer: ` +
        window._name +
        `</p>
        <br>
        <p style="font-size: 25px">Fundraising goal: $` +
        window._fee +
        `</p>
        <form id="form" name="form" action="/try_pay" method="post">
        <br>
        <br>
        <button> <a href="/try_pay"> Donate $15 </a></button>
        </form>

        </div>
        <div id="map" style="width:400px; height:280px; overflow:hidden;position:absolute;top:80px;right:40px;"></div>
        `;
      window.mymap1 = L.map("map").setView([window._lat, window._lng], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
        }
      ).addTo(mymap1);

      marker = new L.circle([window._lat, window._lng], {
        color: "red",
        fill: "f03",
        fillOpacity: 0.4,
        radius: 1300,
      }).addTo(mymap1);
      marker.bindPopup("Area").openPopup();
      setInterval(function () {
        mymap1.invalidateSize();
      }, 100);
      // document.getElementById("contactInfo").innerHTML =
      //   `<br>
      //      <p style="">Email: <a href="mailto: ` +
      //   window._email +
      //   `">` +
      //   window._email +
      //   `</a><br><br>Name: ` +
      //   window._name +
      //   `</p>
      //   `;
    },
  });
}

function fixMap() {
  console.log("fixed");
  mymap.invalidateSize();
}

/* function viewSocialPost(data) {
  console.log(data);
  $.get({
    //url: "/getSocialPost?id=" + data,
    success: function (data) {
      console.log("entered")
      window._title = data.title;
      window._name = data.name;
      window._description = data.description;
      window._email = data.email;
      window._name = data.name;
      window._lat = data.lat;
      window._lng = data.lng;
      document.getElementById("column2").innerHTML =
        `
        <div>
        <h1 style="font-size: 50px">` +
        window._title +
        `</h1>
        <br>
        <p style="font-size: 25px">` +
        window._description +
        `</p>
        <br>
        <p style="font-size: 25px">Driver: ` +
        window._name +
        `</p>
        </div>
        <div id="map" style="width:400px; height:350px"></div>
        `;
      console.log(data);
      mymap = L.map("map").setView([window._lat, window._lng], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
        }
      ).addTo(mymap);
      marker = new L.circle([window._lat, window._lng], {
        color: "red",
        fill: "f03",
        fillOpacity: 0.4,
        radius: 1300,
      }).addTo(mymap);
      marker.bindPopup("Area").openPopup();
      document.getElementById("contactInfo").innerHTML =
        `<br>
           <p style="">Email: <a href="mailto: ` +
        window._email +
        `">` +
        window._email +
        `</a><br><br>Name: ` +
        window._name +
        `</p>
        `;
    },
  });
} */

function viewSocialPost(data) {
  $.get({
    url: "/getSocialPost?id=" + data,
    success: function (data, status) {
      window._title = data.title;
      window._name = data.name;
      window._fee = data.fee;
      window._description = data.description;
      window._email = data.email;
      window._name = data.name;
      window._lat = data.lat;
      window._lng = data.lng;
      console.log(window._title, window._fee);
      document.getElementById("innerContent").innerHTML =
        `
        <div style="padding:15px">
        <h1 style="font-size: 50px">` +
        window._title +
        `</h1>
        <br>
        <p style="width: 50%; font-size: 25px">` +
        window._description +
        `</p>
        <br>
        <p style="font-size: 25px">Organizer: ` +
        window._name +
        `</p>
        <br>
        <p style="font-size: 25px">Fundraising goal: $` +
        window._fee +
        `</p>
        <form id="form" name="form" action="/try_pay" method="post">
        <br>
        <br>
        <button> <a href="/try_pay"> Donate $15 </a></button>
        </form>
        </div>
        <div id="map" style="width:400px; height:280px; overflow:hidden;position:absolute;top:80px;right:40px;"></div>
        `;
      window.mymap1 = L.map("map").setView([window._lat, window._lng], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
        }
      ).addTo(mymap1);

      marker = new L.circle([window._lat, window._lng], {
        color: "red",
        fill: "f03",
        fillOpacity: 0.4,
        radius: 1300,
      }).addTo(mymap1);
      marker.bindPopup("Area").openPopup();
      setInterval(function () {
        mymap1.invalidateSize();
      }, 100);
      // document.getElementById("contactInfo").innerHTML =
      //   `<br>
      //      <p style="">Email: <a href="mailto: ` +
      //   window._email +
      //   `">` +
      //   window._email +
      //   `</a><br><br>Name: ` +
      //   window._name +
      //   `</p>
      //   `;
    },
  });
}

function viewEconomicPost(data) {
  $.get({
    url: "/getEconomicPost?id=" + data,
    success: function (data, status) {
      window._title = data.title;
      window._name = data.name;
      window._fee = data.fee;
      window._description = data.description;
      window._email = data.email;
      window._name = data.name;
      window._lat = data.lat;
      window._lng = data.lng;
      console.log(window._title, window._fee);
      document.getElementById("innerContent").innerHTML =
        `
        <div style="padding:15px">
        <h1 style="font-size: 50px">` +
        window._title +
        `</h1>
        <br>
        <p style="width: 50%; font-size: 25px">` +
        window._description +
        `</p>
        <form id="form" name="form" action="/try_pay" method="post">
        <br>
        <br>
        <button> <a href="/try_pay"> Donate $15 </a></button>
        </form>
        <br>
        <p style="font-size: 25px">Organizer: ` +
        window._name +
        `</p>
        <br>
        <p style="font-size: 25px">Fundraising goal: $` +
        window._fee +
        `</p>
        </div>
        <div id="map" style="width:400px; height:280px; overflow:hidden;position:absolute;top:80px;right:40px;"></div>
        `;
      window.mymap1 = L.map("map").setView([window._lat, window._lng], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
        }
      ).addTo(mymap1);

      marker = new L.circle([window._lat, window._lng], {
        color: "red",
        fill: "f03",
        fillOpacity: 0.4,
        radius: 1300,
      }).addTo(mymap1);
      marker.bindPopup("Area").openPopup();
      setInterval(function () {
        mymap1.invalidateSize();
      }, 100);
      // document.getElementById("contactInfo").innerHTML =
      //   `<br>
      //      <p style="">Email: <a href="mailto: ` +
      //   window._email +
      //   `">` +
      //   window._email +
      //   `</a><br><br>Name: ` +
      //   window._name +
      //   `</p>
      //   `;
    },
  });
}

function viewOtherPost(data) {
  $.get({
    url: "/getOtherPost?id=" + data,
    success: function (data, status) {
      window._title = data.title;
      window._name = data.name;
      window._fee = data.fee;
      window._description = data.description;
      window._email = data.email;
      window._name = data.name;
      window._lat = data.lat;
      window._lng = data.lng;
      console.log(window._title, window._fee);
      document.getElementById("innerContent").innerHTML =
        `
        
        <div style="padding:15px">
        <h1 style="font-size: 50px">` +
        window._title +
        `</h1>
        <br>
        <p style="width: 50%; font-size: 25px">` +
        window._description +
        `</p>
        <br>
        <p style="font-size: 25px">Organizer: ` +
        window._name +
        `</p>
        <br>
        <p style="font-size: 25px">Fundraising goal: $` +
        window._fee +
        `</p>
        <form id="form" name="form" action="/try_pay" method="post">
        <br>
        <br>
        <button> <a href="/try_pay"> Donate $15 </a></button>
        </form>
        </div>
        <div id="map" style="width:400px; height:280px; overflow:hidden;position:absolute;top:80px;right:40px;"></div>
        `;
      window.mymap1 = L.map("map").setView([window._lat, window._lng], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "sk.eyJ1Ijoid2F3YXRoZWdvYXQiLCJhIjoiY2t2eTYyZDB1NHNhMjJ1bXRibTZkNnMydCJ9.Mbejydp89fA2EdHm1BQoUA",
        }
      ).addTo(mymap1);

      marker = new L.circle([window._lat, window._lng], {
        color: "red",
        fill: "f03",
        fillOpacity: 0.4,
        radius: 1300,
      }).addTo(mymap1);
      marker.bindPopup("Area").openPopup();
      setInterval(function () {
        mymap1.invalidateSize();
      }, 100);
      // document.getElementById("contactInfo").innerHTML =
      //   `<br>
      //      <p style="">Email: <a href="mailto: ` +
      //   window._email +
      //   `">` +
      //   window._email +
      //   `</a><br><br>Name: ` +
      //   window._name +
      //   `</p>
      //   `;
    },
  });
}
