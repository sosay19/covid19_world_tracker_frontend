import {
    max, scaleBand, scaleLinear, axisBottom, axisLeft, tip, select
} from 'd3'
// import d3Tip from "d3-tip";
// import * as tip from 'd3-tip'; 
// import * from 'd3-tip';        
// import { tip } from 'd3-tip';
import d3Tip from "d3-tip";
import React from 'react'


// TO DOS:
    // make svg size responsive
    // add axis labels and title
    // add special effects (hover, labels, etc)
    // account for countries with 0 cases (text box in middle of graph?)

const Draw = (countryName, totalCases, dailyData) => {
    // console.log(countryName)
    // console.log(totalCases)
    console.log(dailyData)
    // console.log(d3)

    // setting up constants for sizes
    const width = 700
    const height = 700
    const padding = .2
    const margin = ({top: 80, right: 0, bottom: 80, left: 80})
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const color = "steelblue"



    const xAxisLabel = "Number of Days"
    const yAxisLabel = "Number of Confirmed Cases"
    const title = countryName + " Covid-19 Cases"

    const xScale = scaleBand()
        .domain(dailyData.map(d => d.dayCount))
        .range([margin.left, width - margin.right])
        .padding(padding)




    const yScale = scaleLinear()
        .domain([0, max(dailyData, d => d.total)])
        .range([height - margin.bottom, margin.top])




    const xAxis = (g) => {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(axisBottom(xScale).tickFormat(i => i+1).tickSizeOuter(0))

        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(dailyData.dayCount))

    }
    
    const yAxis = (g) => {
        g.attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(yScale).ticks(null, dailyData.format))
        .call(g => g.select(".domain").remove())

        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(dailyData.total))
    }

    // setting up tooltip with data labels
    const tip = d3Tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<p>" + "<span style='color:white'>" + "Day " + d.dayCount + ": " +
                d.date.toLocaleDateString() + "<br/>" + "</span>" +
                "<span style='color:steelblue'>" + d.total + " Total" + "<br/>" + "</span>" +
                "<span style='color:green'>" + d.active + " Active" + "<br/>" + "</span>" +
                "<span style='color:orange'>" + d.recovered + " Recovered" + "<br/>" + "</span>" +
                "<span style='color:red'>" + d.deaths + " Deaths" + "</p>" 
        })




    



    // setting up svg element
    const svg = select(".viz")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("id", "svg-viz")

    const g = svg.append("g")
        .attr("fill", color)
        .selectAll('rect')
        .data(dailyData)
        .join("rect")
        .attr('x', d => xScale(d.dayCount))
        .attr("y", d => yScale(d.total))
        .attr("width", xScale.bandwidth())
        .attr("height", d => yScale(0) - yScale(d.total))
        .attr("class", "bar")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)




    const xAxisG = svg.append('g')
        .call(xAxis)
    //  .attr('transform', `translate(0,${innerHeight})`);
        
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 80)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel);





    const yAxisG = svg.append('g')
        .call(yAxis)
    //  .attr('transform', `translate(0,${innerHeight})`);
        
    yAxisG.select('.domain').remove();
    
    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -60)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);




    const titleG = svg.append("g")

    titleG.append('text')
        .attr('class', 'title')
        .attr('x', innerWidth / 2)
        .attr('y', 20)
        .text(title);

    svg.call(tip);


}


export default Draw

        
        //     // const xValue = dailyData => d.timestamp;
        //     // const yValue
        
        
        //     const g = svg.append("g")
        //         .attr('transform', `translate(${margin.left},${margin.top})`)
        
        
        //     // // setting up scales dynamically
        //     const xScale = d3.scaleLinear()
        //         .domain([0, d3.max(dailyData, (d, i) => i)])
        //         .range([padding, width - padding]);
        
        //     const yScale = d3.scaleLinear()
        //         .domain([0, d3.max(dailyData, d => d.Confirmed)])
        //         .range([height - padding, padding])
        
        //     const yAxisLabel = "Number of Cases"
        //     const xAxisLabel = "Day Number"
        //     const title = countryName + " Covid-19 Cases"
        
        
        //     // setting up axes
        //     const xAxis = axisBottom(xScale)
        //         // .tickSize(-innerHeight)
        //         // .tickPadding(15);
        
        //     const yAxis = axisLeft(yScale)
        //         // .tickSize(-innerWidth)
        //         // .tickPadding(10);
        
        //     const yAxisG = g.append('g').call(yAxis);
        //         yAxisG.selectAll('.domain').remove();
        
        //     yAxisG.append('text')
        //         .attr('class', 'axis-label')
        //         .attr('y', -60)
        //         .attr('x', -innerHeight / 2)
        //         .attr('fill', 'black')
        //         .attr('transform', `rotate(-90)`)
        //         .attr('text-anchor', 'middle')
        //         .text(yAxisLabel);
        
        //     const xAxisG = g.append('g').call(xAxis)
        //         .attr('transform', `translate(0,${innerHeight})`);
              
        //     xAxisG.select('.domain').remove();
            
        //     xAxisG.append('text')
        //         .attr('class', 'axis-label')
        //         .attr('y', 80)
        //         .attr('x', innerWidth / 2)
        //         .attr('fill', 'black')
        //         .text(xAxisLabel);
        
        
        
        
        
        
        
        //     const lineGenerator = line()
        //         // .x(d => xScale(xValue(d)))
        //         .x((d, i) => xScale(i + 1))
        //         // .y(d => yScale(yValue(d)))
        //         .y(d => yScale(dailyData.map(d => d.Confirmed)))
        //         // .curve(curveBasis);
                
        //     g.append('path')
        //         .attr('class', 'line-path')
        //         .attr('d', lineGenerator(dailyData));
            
        //     g.append('text')
        //         .attr('class', 'title')
        //         .attr('y', -10)
        //         .text(title);


// .toLocaleDateString(),

        