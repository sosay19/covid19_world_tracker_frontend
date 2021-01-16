import { max, scaleBand, scaleLinear, axisBottom, axisLeft, select, selectAll } from 'd3'
import d3Tip from "d3-tip";
import { color } from './Color'

const DisplayHistogramMap = (mapData) => {

  

  let data = mapData.data
  let caseType = mapData.caseType


  // setting up constants for sizes
  const width = 1760
  const height = 800
  const padding = .2
  const margin = ({ top: 80, right: 0, bottom: 80, left: 80 })
  const innerWidth = width - margin.left - margin.right;
  // const innerHeight = height - margin.top - margin.bottom;
  const vizName = "vizHistogramMap"


  // setting constants for text labels and title
  const xAxisLabel = "Country"
  const yAxisLabel = "Number of Cases"
  // const title = countryName

  const xScale = scaleBand()
    .domain(data.map(d => d.country))
    .range([margin.left, width - margin.right])
    .padding(padding)




  const yScale = scaleLinear()
    .domain([0, max(data, d => d[`${caseType}`])])
    .range([height - margin.bottom, margin.top])




  const xAxis = (g) => {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(axisBottom(xScale)
        .tickValues(xScale.domain().filter(function (d, i) { return !(((i + 1) % 5)) })))


      .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(data.country))
  }


  const yAxis = (g) => {
    g.attr("transform", `translate(${margin.left},0)`)
      .call(axisLeft(yScale).ticks(null, data.format).tickSize(-innerWidth))

      .call(g => g.select(".domain").remove())

      .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(data.total))
  }



  // setting up tooltip with data labels
  const tip = d3Tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
      return "<p>" + "<span style='color:white'>" + "Day " + d.country + "<br/>" +
        "<span style='color:#BD2D28'>" + d.todayCases + " Total" + "<br/>" + "</span>"
        +
        "<span style='color:#E3BA22'>" + d.active + " Active" + "<br/>" + "</span>" +
        "<span style='color:#A0B700'>" + d.recovered + " Recovered" + "<br/>" + "</span>" +
        "<span style='color:#BA5F06'>" + d.deaths + " Deaths" + "</p>"
    })



  // setting up svg element on card
  const svg = select(`.${vizName}`)
    .append("svg")
    .attr('class', 'okok')
    .attr("preserveAspectRatio", "xMinYMid meeta")
    .attr("viewBox", [0, 0, width, height])

  const g = svg.append("g")
    .attr("fill", color(caseType))
    .selectAll('rect')
    .data(data)
    .join("rect")
    .attr('x', d => xScale(d.country))

    .attr("y", d => yScale(d[`${caseType}`]))
    .attr("width", xScale.bandwidth())
    .attr("height", d => yScale(0) - yScale(d[`${caseType}`]))
    .attr("class", "bar")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)




  const xAxisG = svg.append('g')
    .call(xAxis)

  xAxisG.select('.domain').remove();

  xAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('y', 45)
    .attr('x', innerWidth / 2)
    .attr('fill', 'black')
    .text(xAxisLabel)







  const yAxisG = svg.append('g')
    .call(yAxis)

  yAxisG.select('.domain').remove();

  yAxisG.append('text')
    .attr('class', 'axis-label')
    .attr('y', -60)
    .attr('x', -height / 2)
    .attr('fill', 'black')
    .attr('transform', `rotate(-90)`)
    .attr('text-anchor', 'middle')
    .text(yAxisLabel);



  const titleG = svg.append("g")

  // titleG.append('text')
  //     .attr('class', 'title')
  //     .attr('x', width / 2)
  //     .attr('y', 40)
  //     .attr('text-anchor', 'middle')
  //     .text(title);

  titleG.append('text')
    .attr('class', 'subtitle')
    .attr('x', width / 2)
    .attr('y', 70)
    .attr('text-anchor', 'middle')
    .text(mapData.caseTitle);

  svg.call(tip);
  // }

}




export default DisplayHistogramMap