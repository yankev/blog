---
layout: post
title:  "First d3 Post"
date:   2016-06-21 20:53:42 -0400
categories: jekyll update
---
<div id="viz"></div>

<script type="text/javascript" src="http://mbostock.github.com/d3/d3.js"></script>
<script type="text/javascript">
var sampleSVG = d3.select("#viz")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);    

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
    .on("mouseout", function(){d3.select(this).style("fill", "white");});

</script>
