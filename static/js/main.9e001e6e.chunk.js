(this.webpackJsonpcovid19_world_tracker_frontend=this.webpackJsonpcovid19_world_tracker_frontend||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(66),l=a.n(c),o=a(6),s=(a(96),a(97),a(10)),i=(a(98),function(){return r.a.createElement("div",{style:{paddingBottom:"15px",marginBottom:"15px"}},r.a.createElement("h1",{className:"header"},"COVID-19 World Tracker"),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"nav"},"Home")),r.a.createElement(o.b,{to:"/new"},r.a.createElement("button",{className:"nav"},"Create a New Collection")))}),u=a(16),m=a.n(u),d=a(25),p=a(7),v=a(44),f=a(45),b=a(107),g=a(108),E=a(109),h=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),i=Object(p.a)(s,2),u=i[0],h=i[1];return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(g.a,{xs:"12",sm:"6",md:"4",lg:"3",xl:"3"},r.a.createElement("select",{onChange:function(e){l([].concat(Object(f.a)(c),[[e.target.value.split(",")[1],e.target.value.split(",")[2],e.target.value.split(",")[0]]])),function(e,t){function a(){return(a=Object(d.a)(m.a.mark((function a(){var n,r,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={method:"GET",redirect:"follow"},a.next=3,fetch("https://api.covid19api.com/total/dayone/country/"+"".concat(e),n);case 3:return r=a.sent,a.next=6,r.json();case 6:c=a.sent,h((function(a){var n;return[].concat(Object(f.a)(a),[(n={},Object(v.a)(n,t,[c]),Object(v.a)(n,"slug",e),n)])}));case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}(e.target.value.split(",")[0],e.target.value.split(",")[1])}},r.a.createElement("option",{placeholder:"Choose a Collection of Countries"},"Choose a Collection of Countries"),e.options.map((function(t){return r.a.createElement("option",{id:e.id,key:t.value,value:[t.value,t.name,t.flagCode]},t.name)}))),r.a.createElement(o.b,{to:{pathname:"/collection",countryData:u,collection:c}},r.a.createElement("button",{className:"dark",disabled:0===c.length},"View Collection"))),c.map((function(e,t){var a="https://disease.sh/assets/img/flags/".concat(e[1].toLowerCase(),".png"),n="https://freesvg.org/img/Globe-Icon-Umber.png",c=e[2];return r.a.createElement(g.a,{xs:12,sm:6,md:4,lg:3,key:t},r.a.createElement(E.a,null,r.a.createElement(E.a.Header,null,e[0]),r.a.createElement(E.a.Img,{key:c,src:a,onError:function(e){e.target.src!==n&&(e.target.src=n)}})))}))))},y=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",redirect:"follow"},e.next=3,fetch("https://api.covid19api.com/countries",t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=a.sort((function(e,t){return e.Country>t.Country?1:-1})).map((function(e){return{name:e.Country,value:e.Slug,flagCode:e.ISO2}}));return r.a.createElement("div",null,r.a.createElement(h,{options:l}))},x=a(2),C=a(72),k=function(){console.log("drawing map");var e=Object(x.l)(".mapviz").append("svg").attr("preserveAspectRatio","xMinYMid meet").attr("viewBox",[0,0,960,500]),t=Object(x.e)(),a=Object(x.f)().projection(t),n=e.append("g").attr("class","map-group");n.append("path").attr("class","sphere").attr("d",a({type:"Sphere"})),e.call(Object(x.o)().on("zoom",(function(){n.attr("transform",x.c.transform)}))),Promise.all([Object(x.n)("https://unpkg.com/world-atlas@1.1.4/world/50m.tsv"),Object(x.g)("https://unpkg.com/world-atlas@1.1.4/world/50m.json")]).then((function(e){var t=Object(p.a)(e,2),r=t[0],c=t[1],l={};r.forEach((function(e){l[e.iso_n3]=e.name}));var o=Object(C.a)(c,c.objects.countries);n.selectAll("path").data(o.features).enter().append("path").attr("class","country").attr("d",a).append("title").text((function(e){return l[e.id]}))}))},O=function(e,t){var a=t.sizeScale,n=t.spacing,r=t.textOffset,c=t.numTicks,l=t.tickFormat,o=a.ticks(c).filter((function(e){return 0!==e})).reverse(),s=e.selectAll("g").data(o),i=s.enter().append("g").attr("class","tick-map");i.merge(s).attr("transform",(function(e,t){return"translate(0, ".concat(t*n,")")})),s.exit().remove(),i.append("circle").merge(s.select("circle")).attr("r",a),i.append("text").merge(s.select("text")).text(l).attr("dy","0.32em").attr("x",(function(e){return a(e)+r}))},j=function(e){switch(e){case"population":return"#B396AD";case"todayCases":return"#B37055";case"todayDeaths":return"#F6B656";case"cases":return"#BD2D28";case"active":return"#E3BA22";case"critical":return"#137B80";case"deaths":return"#BA5F06";case"recovered":return"#A0B700";case"tests":return"#684664";case"casesPerOneMillion":return"#9A3E25";case"activePerOneMillion":return"#F2DA57";case"criticalPerOneMillion":return"#42A5B3";case"deathsPerOneMillion":return"#E6842A";case"recoveredPerOneMillion":return"#5C8100";case"testsPerOneMillion":return"#8E6C8A";case"Confirmed":return"#BD2D28";case"Active":return"#E3BA22";case"Recovered":return"#A0B700";case"Deaths":return"#BA5F06";default:return"#BD2D28"}},N=function(e,t,a){if(a.sort((function(t,a){return t["".concat(e)]<a["".concat(e)]?1:-1})),Object(x.m)("circle").remove(),Object(x.l)("g.map-legend").remove(),Object(x.l)("text.legend-title").remove(),"reset"!==e){var n=Object(x.l)(".map-group"),r=Object(x.e)(),c=function(t){return t["".concat(e)]},l=Object(x.k)().domain([0,Object(x.h)(a,(function(t){return t["".concat(e)]}),c)]).range([0,20]);n.selectAll("circle").data(a).enter().append("circle").attr("class","country-circle").attr("transform",(function(e){return"translate("+r([e.countryInfo.long,e.countryInfo.lat])+")"})).attr("r",(function(e){return l(c(e))})).attr("fill",j(e)).append("title").text((function(a){return a.country+" "+t+": "+Object(x.d)(",")(a["".concat(e)])}));var o=Object(x.d)(",");n.append("g").attr("transform","translate(65, 125)").attr("class","map-legend").call(O,{sizeScale:l,spacing:45,textOffset:10,numTicks:5,tickFormat:o}),n.append("text").attr("class","legend-title").text(t).attr("transform","rotate(270)").attr("x",-245).attr("y",45);n.selectAll("circle").attr("fill",j(e))}else Object(x.l)("svg").remove(),k()},D=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l,o=document.getElementsByClassName("collapsible"),s=document.querySelector("button.collapsible");for(l=0;l<o.length;l++)o[l].addEventListener("click",(function(){this.classList.toggle("active"),"Open Map Menu"===s.innerText?s.innerText="Close Map Menu":s.innerText="Open Map Menu";var e=this.nextElementSibling;"none"===e.style.display?e.style.display="block":e.style.display="none"}));return r.a.createElement("span",null,r.a.createElement("button",{className:"collapsible"},"Close Map Menu"),r.a.createElement("div",{className:"content"},r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"cases block",value:"cases"},"Total Cases"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"casesPerOneMillion block",value:"casesPerOneMillion"},"Total Cases Per Million"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"todayCases block",value:"todayCases"},"New Cases Today"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"deaths block",value:"deaths"},"Total Deaths"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"deathsPerOneMillion block",value:"deathsPerOneMillion"},"Deaths Per Million"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"todayDeaths block",value:"todayDeaths"},"New Deaths Today"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"activee block",value:"active"},"Active Cases"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"activePerOneMillion block",value:"activePerOneMillion"},"Active Cases Per Million"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"recovered block",value:"recovered"},"Recovered Cases"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"recoveredPerOneMillion block",value:"recoveredPerOneMillion"},"Recovered Cases Per Million"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"critical block",value:"critical"},"Critical Cases"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"criticalPerOneMillion block",value:"criticalPerOneMillion"},"Critical Cases Per Million"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"tests block",value:"tests"},"Number of Tests"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"testsPerOneMillion block",value:"testsPerOneMillion"},"Tests Per Million"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"population block",value:"population"},"Population"),r.a.createElement("button",{onClick:function(e){return N(e.target.value,e.target.innerText,a)},className:"reset block",value:"reset"},"Reset Map")))},T=function(){return Object(n.useEffect)((function(){k()}),[]),r.a.createElement(b.a,null,r.a.createElement(g.a,{sm:"12",md:"3",lg:"3",xl:"3"},r.a.createElement(E.a,null,r.a.createElement(D,null))),r.a.createElement(g.a,{sm:"12",md:"9",lg:"9",xl:"9"},r.a.createElement(E.a,{className:"mapviz"})))},M=a(70),w=function(e,t,a,n,r){console.log(r);var c,l=80,o=0,s=80,i=80,u=960-i-o,m="viz"+n,d=(r=r||"total")?"Number of Cases: ".concat((c=r).charAt(0).toUpperCase()+c.slice(1)):"Number of Cases",p=e,v=Object(x.i)().domain(a.map((function(e){return e.dayCount}))).range([i,960-o]).padding(.2),f=Object(x.j)().domain([0,Object(x.h)(a,(function(e){return e["".concat(r)]}))]).range([500-s,l]),b=Object(M.a)().attr("class","d3-tip").offset([-10,0]).html((function(e){return"<p><span style='color:white'>Day "+e.dayCount+"<br/>"+e.date.toLocaleDateString()+"<br/></span><span style='color:#BD2D28'>"+e.total+" Total<br/></span><span style='color:#E3BA22'>"+e.active+" Active<br/></span><span style='color:#A0B700'>"+e.recovered+" Recovered<br/></span><span style='color:#BA5F06'>"+e.deaths+" Deaths</p>"})),g=Object(x.l)(".".concat(m)).append("svg").attr("preserveAspectRatio","xMinYMid meet").attr("viewBox",[0,0,960,500]),E=(g.append("g").attr("fill",j(r)).selectAll("rect").data(a).join("rect").attr("x",(function(e){return v(e.dayCount)})).attr("y",(function(e){return f(e["".concat(r)])})).attr("width",v.bandwidth()).attr("height",(function(e){return f(0)-f(e["".concat(r)])})).attr("class","bar").on("mouseover",b.show).on("mouseout",b.hide),g.append("g").call((function(e){e.attr("transform","translate(0,".concat(500-s,")")).call(Object(x.a)(v).tickValues(v.domain().filter((function(e,t){return!((t+1)%5)})))).call((function(e){return e.append("text").attr("x",-i).attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text(a.dayCount)}))})));E.select(".domain").remove(),E.append("text").attr("class","axis-label").attr("y",45).attr("x",u/2).attr("fill","black").text("Number of Days");var h=g.append("g").call((function(e){e.attr("transform","translate(".concat(i,",0)")).call(Object(x.b)(f).ticks(null,a.format).tickSize(-u)).call((function(e){return e.select(".domain").remove()})).call((function(e){return e.append("text").attr("x",-i).attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text(a.total)}))}));h.select(".domain").remove(),h.append("text").attr("class","axis-label").attr("y",-60).attr("x",-250).attr("fill","black").attr("transform","rotate(-90)").attr("text-anchor","middle").text(d);var y=g.append("g");y.append("text").attr("class","title").attr("x",480).attr("y",40).attr("text-anchor","middle").text(p),y.append("text").attr("class","subtitle").attr("x",480).attr("y",70).attr("text-anchor","middle").text(a.length>0?t+" COVID-19 Cases Reported Since "+a[0].date.toLocaleDateString():t+" COVID-19 Cases Reported"),g.call(b)},A=function(e){return console.log(e),Object(n.useEffect)((function(){w(e.countryName,e.totalCases,e.dailyData,e.id,e.caseType)}),[e]),r.a.createElement("div",{className:"viz"+e.id})},P=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1];return e.location.countryName?r.a.createElement("div",null,r.a.createElement(b.a,{className:"justify-content-md-center"},r.a.createElement(g.a,{sm:"12",md:"3",lg:"3",xl:"3"},r.a.createElement(E.a,null,r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"cases block",value:"total"},"Total Cases"),r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"activee block",value:"active"}," Active Cases"),r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"recovered block",value:"recovered"},"Recovered Cases"),r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"deaths block",value:"deaths"},"Deaths"),r.a.createElement(o.b,{to:{pathname:"/collection",countryData:e.location.collection}},r.a.createElement("button",{className:"reset block"},"Return to Collection")))),r.a.createElement(g.a,{sm:"12",md:"9",lg:"9",xl:"9"},r.a.createElement(E.a,{className:"show"},r.a.createElement(A,{countryName:e.location.countryName,totalCases:e.location.totalCases,dailyData:e.location.dailyData,id:e.location.slug,slug:e.location.slug,caseType:c}))))):r.a.createElement(s.a,{to:"/covid19_world_tracker_frontend"})},B=function(e){var t=Object.keys(e.country)[0],a=e.country[t],n=function(){return 0===a[0].length?0:a[0][a[0].length-1].Confirmed},c=[],l=function(e,t){return e[0].forEach((function(e,a){t.push({dayCount:a+1,date:new Date(e.Date),total:e.Confirmed,active:e.Active,recovered:e.Recovered,deaths:e.Deaths})})),t};return r.a.createElement(o.b,{to:{pathname:"/countries/".concat(e.country.slug),countryName:t,totalCases:n(),dailyData:l(a,c),slug:e.country.slug,id:e.country.slug,collection:e.collection}},r.a.createElement(A,{countryName:t,totalCases:n(),dailyData:l(a,c),id:e.country.slug,slug:e.country.slug,caseType:e.caseType}))},S=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1];return e.location.countryData?r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(g.a,{xs:"12",sm:"6",md:"4",lg:"3",xl:"3"},r.a.createElement(E.a,null,r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"cases block",value:"total"},"Total Cases"),r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"activee block",value:"active"}," Active Cases"),r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"recovered block",value:"recovered"},"Recovered Cases"),r.a.createElement("button",{onClick:function(e){return l(e.target.value),Object(x.m)("svg").remove()},className:"deaths block",value:"deaths"},"Deaths"))),e.location.countryData.map((function(t,a){return r.a.createElement(g.a,{xs:12,sm:6,md:4,lg:3,key:a},r.a.createElement(E.a,null,r.a.createElement(B,{key:a,id:a,country:t,caseType:c,collection:e.location.countryData})))})))):r.a.createElement(s.a,{to:"/covid19_world_tracker_frontend"})},_=a(71);var R=function(){return r.a.createElement(o.a,{basename:"/covid19_world_tracker_frontend"},r.a.createElement(_.a,{fluid:!0},r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(T,{routerProps:e})}}),r.a.createElement(s.b,{exact:!0,path:"/countries/:slug",component:P}),r.a.createElement(s.b,{exact:!0,path:"/new",component:y}),r.a.createElement(s.b,{exact:!0,path:"/collection",component:S}))))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(R,null)),document.getElementById("root"))},91:function(e,t,a){e.exports=a(105)},97:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.9e001e6e.chunk.js.map