var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];
var w = 500;
var h = 200;

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("circle")  // <-- No longer "rect"
   .data(dataset)
   .enter()
   .append("circle")     // <-- No longer "rect"
  .attr("cx", function(d) {
      return d[0];
   })
   .attr("cy", function(d) {
      return d[1];
   })
   .attr("r", function(d){return Math.sqrt(d[1])})
   .attr("fill", "beige")
   .attr("stroke", "teal")
   .attr("stroke-width", "3");
