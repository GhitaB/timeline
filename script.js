window.timelines = [
  {
    type: "point",
    year: -100,  // = 100 BC
    month: 5,    // March
    day: 27,
    text: "Lorem ipsum event",
    color: "#333"
  },
  {
    type: "point",
    year: -40,
    month: 8,
    day: 3,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    color: "#333"
  },
  {
    type: "point",
    year: 1988,
    month: 3,
    day: 27,
    text: "Bla bla bla",
    color: "#333"
  },
  {
    type: "point",
    year: 1988,
    month: 3,
    day: 28,
    text: "Bla bla bla 222",
    color: "#333"
  }
];

window.expandedTimeline = {};

window.settings = {
  months: {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }
}

function getTimelineLimits() {
  // Return start year and end year
  var maxYear = -10000;
  var minYear = 10000;
  for (var i = 0; i < window.timelines.length; i++) {
    var item = window.timelines[i];
    if (item.year > maxYear) {
      maxYear = item.year;
    }
    if (item.year < minYear) {
      minYear = item.year;
    }
  }

  return [minYear, maxYear];
}

function humanReadableYear(year) {
  if (year < 0) {
    return - year + " B.C.";
  }
  return year + " A.D.";
}

function humanReadableMonth(month) {
  return window.settings.months[month];
}

function drawTimeline() {
  // Init the timeline [min year ... max year]
  var limits = getTimelineLimits();
  var startYear = limits[0];
  var endYear = limits[1];

  // Put the points on the timeline
  for (var i = 0; i < window.timelines.length; i++) {
    var item = window.timelines[i];
    if (item.type === "point") {
      var eventYear = item.year;
      var eventMonth = item.month;
      var eventDay = item.day;
      var eventText = item.text;
      var eventColor = item.color;

      if (!window.expandedTimeline.hasOwnProperty(eventYear)) {
        window.expandedTimeline[eventYear] = {};
      }
      if (!window.expandedTimeline[eventYear].hasOwnProperty(eventMonth)) {
        window.expandedTimeline[eventYear][eventMonth] = {};
      }
      if (!window.expandedTimeline[eventYear][eventMonth].hasOwnProperty(eventDay)) {
        window.expandedTimeline[eventYear][eventMonth][eventDay] = [];
      }
      window.expandedTimeline[eventYear][eventMonth][eventDay].push({
        text: eventText,
        color: eventColor
      });
    }
  }

  for (var year = startYear; year <= endYear; year++) {
    if (year === 0) {
      continue;
    }
    var template = document.querySelector('#templates .year-title');
    var timelineContainer = document.querySelector('.container #timeline');
    var clonedTemplate = template.cloneNode(true);

    clonedTemplate.querySelector('h2').textContent = humanReadableYear(year);
    timelineContainer.appendChild(clonedTemplate);

    for (var month = 1; month <= 12; month++) {
      for (var day = 1; day <= 31; day++) {
        if (window.expandedTimeline.hasOwnProperty(year)) {
          if (window.expandedTimeline[year].hasOwnProperty(month)) {
            if (window.expandedTimeline[year][month].hasOwnProperty(day)) {
              var events = window.expandedTimeline[year][month][day];
              for (var i = 0; i < events.length; i++) {
                console.log(events[i]);

                var text = events[i].text;

                var template = document.querySelector('#templates .event');
                var timelineContainer = document.querySelector('.container #timeline');
                var clonedTemplate = template.cloneNode(true);
                clonedTemplate.querySelector(".year").textContent = humanReadableYear(year);
                clonedTemplate.querySelector(".month").textContent = humanReadableMonth(month);
                clonedTemplate.querySelector(".day").textContent = day;
                clonedTemplate.querySelector(".text").textContent = text;
                timelineContainer.appendChild(clonedTemplate);
              }
            }
          }
        }
      }
    }
  }
}

drawTimeline();

// TODO:
// implement colors
// implement time periods
