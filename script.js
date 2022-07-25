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
    color: "#2d3436",
    link: {
      text: "Find more here",
      url: "https://google.com"
    }
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

var example3 = [
  {
    type: "point",
    year: 1827,
    month: 11,
    day: 26,
    text: "Se naște Ellen G. White (Harmon), în Gorham, Maine, SUA. Părinții: Robert și Eunice Harmon. Are o soră Geamănă: Elizabeth.",
    color: "#e17055"
  },
  {
    type: "point",
    year: 1836,
    month: 6,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "La 9 ani Ellen G. White (Harmon) are accidentul.",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1839,
    month: 6,
    day: 1,
    approxYear: true,
    approxMonth: true,
    approxDay: true,
    text: "Datorită accidentului, Ellen G. White (Harmon) e nevoită să abandoneze școala.",
    color: "#6c5ce7"
  },
  {
    type: "point",
    year: 1840,
    month: 3,
    day: 1,
    approxDay: true,
    text: "William Miller vizitează Portland, Maine pentru prima dată ca să predice aici.",
    color: "#00b894"
  },
  {
    type: "point",
    year: 1842,
    month: 6,
    day: 1,
    approxDay: true,
    text: "William Miller vizitează Portland, Maine pentru prima a doua oară.",
    color: "#00b894"
  },
  {
    type: "point",
    year: 1843,
    month: 1,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "Separarea familiei Harmon de Biserica Metodistă.",
    color: "#e17055"
  },
  {
    type: "period",
    start: {
      year: 1843,
      month: 3,
      day: 21,
      text: "Începe anul 1843 după calendarul ebraic.",
      color: "#0984e3"
    },
    end: {
      year: 1844,
      month: 3,
      day: 21,
      text: "Se încheie anul 1843 după calendarul ebraic.",
      color: "#0984e3"
    },
    text: "Anul 1843 ebraic",
    color: "#81ecec",
  },
  {
    type: "point",
    year: 1844,
    month: 10,
    day: 22,
    text: "Marea dezamăgire. / Începe judecata preadventă.",
    color: "#e17055"
  },
  {
    type: "point",
    year: 1848,
    month: 1,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "Conferințele despre Sabat",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1849,
    month: 6,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "(vara) Fr. James White începe lucrarea de publicare (Middletown).",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1855,
    month: 12,
    day: 1,
    approxDay: true,
    text: "Se publică prima broșură din seria Mărturiilor pentru Biserică.",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1856,
    month: 12,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "EGW identifică AZS ca fiind Laodiceea.",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1860,
    month: 1,
    day: 1,
    approxMonth: true,
    approxDay: true,
    text: "Este organizată lucrarea de publicare. Se hotărăște numele AZS.",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1863,
    month: 5,
    day: 1,
    approxDay: true,
    text: "Organizarea Conferinței Generale a AZS.",
    color: "#636e72"
  },
  {
    type: "point",
    year: 1863,
    month: 6,
    day: 1,
    approxDay: true,
    text: "Reforma sănătății, reforma în îmbrăcăminte.",
    color: "#636e72"
  },
  {
    type: "period",
    start: {
      year: 1870,
      month: 1,
      day: 1,
      approxDay: true,
      text: "Test - începe perioadă AAA.",
      color: "green"
    },
    end: {
      year: 1880,
      month: 3,
      day: 1,
      approxYear: true,
      approxMonth: true,
      approxDay: true,
      text: "Test - se încheie perioadă AAA.",
      color: "green"
    },
    text: "Test perioadă aproximativă AAA",
    color: "red",
  },
];
// colors: https://flatuicolors.com/palette/us

window.timelines = example3;
window.expandedTimeline = {};

window.settings = {
  // months: {
  //   1: "January",
  //   2: "February",
  //   3: "March",
  //   4: "April",
  //   5: "May",
  //   6: "June",
  //   7: "July",
  //   8: "August",
  //   9: "September",
  //   10: "October",
  //   11: "November",
  //   12: "December"
  // }
  months: {
    1: "Ianuarie",
    2: "Februarie",
    3: "Martie",
    4: "Aprilie",
    5: "Mai",
    6: "Iunie",
    7: "Iulie",
    8: "August",
    9: "Septembrie",
    10: "Octombrie",
    11: "Noiembrie",
    12: "Decembrie"
  }
}

function getTimelineLimits() {
  // Return start year and end year
  var maxYear = -10000;
  var minYear = 10000;
  for (var i = 0; i < window.timelines.length; i++) {
    var item = window.timelines[i];
    if (item.type === "point") {
      if (item.year > maxYear) {
        maxYear = item.year;
      }
      if (item.year < minYear) {
        minYear = item.year;
      }
    }
    if (item.type === "period") {
      if (item.start.year > maxYear) {
        maxYear = item.start.year;
      }
      if (item.start.year < minYear) {
        minYear = item.start.year;
      }
      if (item.end.year > maxYear) {
        maxYear = item.end.year;
      }
      if (item.end.year < minYear) {
        minYear = item.end.year;
      }
    }
  }

  console.log(minYear, maxYear);
  return [minYear, maxYear];
}

function humanReadableYear(year) {
  if (year < 0) {
    return - year + " î.Hr.";
  }
  return year;
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

function addItemToExpandedTimeline(item, details) {
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
    color: eventColor,
    link: item.link,
    approxYear: item.approxYear,
    approxMonth: item.approxMonth,
    approxDay: item.approxDay,
    details: details
  });
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
      var details = {text: item.text, color: item.color};
      addItemToExpandedTimeline(item.start, details);
      addItemToExpandedTimeline(item.end, details);
    }
  }

  // Put the points on the timeline
  for (var i = 0; i < window.timelines.length; i++) {
    var item = window.timelines[i];
    if (item.type === "point") {
      addItemToExpandedTimeline(item, {});
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
                var detailsText = events[i].details.text;
                var detailsColor = events[i].details.color;

                var template = document.querySelector('#templates .event');
                var timelineContainer = document.querySelector('.container #timeline');
                var clonedTemplate = template.cloneNode(true);
                clonedTemplate.querySelector(".event-date").style.background = events[i].color;
                clonedTemplate.querySelector(".year").textContent = humanReadableYear(year);

                if (events[i].approxYear === true) {
                  clonedTemplate.querySelector(".month").textContent = "aprox.";
                  clonedTemplate.querySelector(".day").remove();
                } else {
                  if (events[i].approxMonth === true) {
                    clonedTemplate.querySelector(".month").remove();
                    clonedTemplate.querySelector(".day").remove();
                  } else {
                    if (events[i].approxDay === true) {
                      clonedTemplate.querySelector(".month").textContent = humanReadableMonth(month);
                      clonedTemplate.querySelector(".day").remove();
                    }
                  }
                }

                if (events[i].approxYear !== true && events[i].approxMonth !== true && events[i].approxDay !== true) {
                  clonedTemplate.querySelector(".month").textContent = humanReadableMonth(month);
                  clonedTemplate.querySelector(".day").textContent = day;
                }
                clonedTemplate.querySelector(".text").textContent = text;
                if (detailsText === undefined) {
                  clonedTemplate.querySelector(".details").remove();
                } else {
                  clonedTemplate.querySelector(".details").textContent = detailsText;
                  clonedTemplate.querySelector(".details").style.background = detailsColor;
                }
                if (events[i].link === undefined) {
                  clonedTemplate.querySelector(".more").remove();
                } else {
                  clonedTemplate.querySelector(".more").innerHTML = events[i].link.text;
                  clonedTemplate.querySelector(".more").href = events[i].link.url;
                }
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
