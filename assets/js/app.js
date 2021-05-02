// @TODO: YOUR CODE HERE!
console.log("app.js loaded");
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// SVG wrapper creation and appending the SVG group to hold the chart
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  // Chart margins
  var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
// Chart margins
  var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Importing csv file
d3.csv("/assets/data/data.csv").then(function(stateData) {
    // console.log(stateData);
    stateData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
  });

   // Chart scaling functions
var xLinearScale = d3.scaleLinear()
.domain([9, d3.max(stateData, d => d.poverty)])
.range([0, width]);

var yLinearScale = d3.scaleLinear()
.domain([4, d3.max(stateData, d => d.healthcare)])
.range([height, 0]);


