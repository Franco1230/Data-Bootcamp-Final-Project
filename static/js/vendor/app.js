let data = [];
const results = document.querySelector("#results");

function add_screen(input_data) {
  data.push(input_data);
}

function display() {
  for (var i = 0; i < data.length; i++) {
    const elem = document.createElement("p");
    elem.innerText = data[i];
    results.appendChild(elem);
  }
}

function clear_results() {
  results.innerHTML = "";
}

function clear_everything() {
  data = [];
  clear_screen();
  display();
}

function clear_screen() {
  results.innerHTML = "";
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function submit_request() {
  clear_screen();
  add_screen("Making request to server");

  const form_data = extract_form_data();
  add_screen(JSON.stringify(form_data));

  postData("/predict", form_data).then((res) => {
    add_screen(JSON.stringify(res));
    display();
  });

  display();
}

function predictPrice() {
  const form_data = extract_form_data();

  postData("http://127.0.0.1:5000/predict", form_data)
    .then((data) => data["prediction"])
    .then((prediction) => {
      const resultsDataElement = buildResults(prediction);
      results.innerHTML = "";
      results.appendChild(resultsDataElement);
    });
}

const form_ids = [
  "Rooms",
  "Distance",
  "Bathroom",
  "Car",
  "Landsize",
  "BuildingArea",
  "YearBuilt",
  "Propertycount",
  "CrimeRate",
  "NearbySchools",
];

const form_id_tranform = {};

function isCharNumber(c) {
  return c >= "0" && c <= "9";
}

const categorical_features = [];

const integer_features = [
  "Rooms",
  "Bathroom",
  "Car",
  "Landsize",
  "BuildingArea",
  "YearBuilt",
  "Propertycount",
  "CrimeRate",
  "NearbySchools",
];

function isNumeric(num) {
  return !isNaN(num);
}

function extract_form_data() {
  let form_data = {};
  for (let i = 0; i < form_ids.length; i++) {
    if (!isCharNumber(form_ids[i].charAt(0))) {
      form_input = document.querySelector("#" + form_ids[i]);
    } else {
      form_input = document.querySelector("#" + form_id_tranform[form_ids[i]]);
    }
    if (form_input == null) {
      if (categorical_features.includes(form_ids[i])) {
        form_data[form_ids[i]] = ["NA"];
      } else {
        form_data[form_ids[i]] = [0];
      }
    } else {
      let form_value = form_input.value;
      if (isNumeric(form_value)) {
        form_value = parseFloat(form_value);
      }
      form_data[form_ids[i]] = [form_value];
    }
  }
  return form_data;
}

const USDFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function buildResults(price) {
  // Create result elements
  const priceElement = document.createElement("div");
  const containerElement = document.createElement("div");
  const yourPriceElement = document.createElement("div");

  // Add relevant classes
  priceElement.classList.add("type-h3");
  yourPriceElement.classList.add("type-sh6");
  // containerElement.classList.add('container-fluid');

  // Set inner text for the elements
  yourPriceElement.innerText = "The estimated price is";
  priceElement.innerText = USDFormatter.format(parseInt(price));

  // Add elements to container
  containerElement.appendChild(yourPriceElement);
  containerElement.appendChild(priceElement);

  return containerElement;
}

if ($(".side-navigation").length) {
  var closeBtn = $(".close");
  var sideAffix = $(".side-navigation-affix");
  var sideBtn = $("a.navigation-btn");
  var sideNav = $(".side-navigation-large");
  var sideSection = $(".navigation-section");
  var sideTopSpacing = 48;

  if ($(".side-navigation-small").length) {
    sideNav = $(".side-navigation-small");
  }

  var topOffset = sideSection.offset().top - sideTopSpacing;
  var bottomOffset =
    $("body").height() - sideSection.offset().top - sideSection.height();

  sideAffix.affix({
    offset: {
      top: topOffset,
      bottom: bottomOffset,
    },
  });

  sideAffix.width(sideNav.parent().width());

  sideBtn.on("click", function () {
    sideNav.css("display", "block");
    sideSection.css("display", "none");
    sideBtn.css("display", "none");
    $("body").css("overflow", "hidden");
  });
  closeBtn.on("click", function () {
    sideNav.css("display", "");
    sideSection.css("display", "");
    sideBtn.css("display", "inline-block");
    $("body").css("overflow", "");
  });
}

$(function () {
  $('[data-scroll="smooth"] a[href*=#]:not([href=#])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1500
        );

        return false; // prevent default href
      }
    }
  });
});
