var example1 = [
  {
    type: "point",
    year: -100,  // = 100 BC
    month: 5,    // March
    day: 27,
    text: "Lorem ipsum event",
    color: "#2d3436"
  },
  {
    type: "point",
    year: -98,
    month: 5,
    day: 27,
    text: "Lorem ipsum event 2",
    color: "#2d3436"
  },
  {
    type: "point",
    year: -40,
    month: 8,
    day: 3,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    color: "#2d3436"
  },
  {
    type: "point",
    year: 1988,
    month: 3,
    day: 27,
    text: "Bla bla bla",
    color: "#2d3436"
  },
  {
    type: "point",
    year: 1988,
    month: 3,
    day: 28,
    text: "Bla bla bla 222",
    color: "#00b894"
  }
];

var example2 = [
  {
    type: "point",
    year: -100,
    month: 5,
    day: 27,
    text: "Lorem ipsum event",
    color: "#2d3436"
  },
  {
    type: "point",
    year: -98,
    month: 5,
    day: 27,
    text: "Lorem ipsum event 2",
    color: "#2d3436"
  },
  {
    type: "period",
    start: {
      year: -100,
      month: 1,
      day: 1,
      text: "Start period 1",
      color: "green"
    },
    end: {
      year: 200,
      month: 5,
      day: 5,
      text: "End period 1",
      color: "red"
    },
    text: "Period 1",
    color: "blue",
  },
  {
    type: "period",
    start: {
      year: 500,
      month: 2,
      day: 2,
      text: "Start period 1",
      color: "green"
    },
    end: {
      year: 1000,
      month: 3,
      day: 3,
      text: "End period 1",
      color: "red"
    },
    text: "Period 1",
    color: "blue",
  }
];

window.timelines = example2;
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

function yearType(year) {
  for (var i = 0; i < window.settings.noEventsYears.length; i++) {
    var period = window.settings.noEventsYears[i];
    if (year === period[0]) {
      return "start-no-events";
    }
    if (year === period[1]) {
      return "end-no-events";
    }
    if (year > period[0] && year < period[1]) {
      return "hidden-year";
    }
  }
  return "expanded-year";
}

function drawTimeline() {
  // Init the timeline [min year ... max year]
  var limits = getTimelineLimits();
  var startYear = limits[0];
  var endYear = limits[1];

  // Put the periods on the timeline
  for (var i = 0; i < window.timelines.length; i++) {
    var item = window.timelines[i];
    if (item.type === "period") {
      console.log(item);
    }
  }

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

  // Check for no events years
  var allNoEvents = [];
  var noEvents = [];
  var lastNoEvents = -100000;
  for (var year = startYear; year <= endYear; year++) {
    // make sure all years are initialized
    if (!window.expandedTimeline.hasOwnProperty(year)) {
      window.expandedTimeline[year] = {};
    }
    if (year === 0) {
      continue;
    }

    // has this year events?
    if (Object.keys(window.expandedTimeline[year]).length === 0) {
      // update no events period limits
      if (noEvents.length === 0) {
        noEvents[0] = year;
      } else {
        noEvents[1] = year;
      }

      lastNoEvents = year;
    } else {
      // save this period of no events years
      if (noEvents.length == 2) {
        allNoEvents.push(noEvents);
      }
      // reset
      noEvents = [];
      lastNoEvents = -100000;
    }
  }
  window.settings.noEventsYears = allNoEvents;

  // Draw the timeline
  for (var year = startYear; year <= endYear; year++) {
    if (year === 0) {
      continue;
    }
    var template = document.querySelector('#templates .year-title');
    var timelineContainer = document.querySelector('.container #timeline');
    var clonedTemplate = template.cloneNode(true);

    clonedTemplate.querySelector('h2').textContent = humanReadableYear(year);
    clonedTemplate.classList.add(yearType(year));
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
                clonedTemplate.querySelector(".event-date").style.background = events[i].color;
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
// implement time periods
// BC - change order <events> - <year title>?
// Fix limits definition - to include time periods too
