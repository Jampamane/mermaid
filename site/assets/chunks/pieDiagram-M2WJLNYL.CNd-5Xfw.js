import{c as B}from"./chunk-4KE642ED.BCZqmyU6.js";import{p as N}from"./treemap-KMMF4GRG-7ORZ52ND.DPUz5sqg.js";import{m as r,j as V,$ as Q,G as X,U as q,Y as I,d as J,p as S,C as K,L as Z,aN as _,aO as ee,aP as F,aQ as te,P as ae,H as ie,aR as le,k as re}from"./theme.D00B-Q-F.js";import"./chunk-OMTJKCYW.CF1ZfwPP.js";import"./framework.odPblmUY.js";var se=re.pie,v={sections:new Map,showData:!1},u=v.sections,y=v.showData,oe=structuredClone(se),ne=r(()=>structuredClone(oe),"getConfig"),pe=r(()=>{u=new Map,y=v.showData,ie()},"clear"),de=r(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),S.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=r(()=>u,"getSections"),ue=r(e=>{y=e},"setShowData"),ge=r(()=>y,"getShowData"),M={getConfig:ne,clear:pe,setDiagramTitle:J,getDiagramTitle:I,setAccTitle:q,getAccTitle:X,setAccDescription:Q,getAccDescription:V,addSection:de,getSections:ce,setShowData:ue,getShowData:ge},he=r((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),me={parse:r(async e=>{let a=await N("pie",e);S.debug(a),he(a,M)},"parse")},fe=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),$e=fe,xe=r(e=>{let a=[...e.values()].reduce((l,s)=>l+s,0),D=[...e.entries()].map(([l,s])=>({label:l,value:s})).filter(l=>l.value/a*100>=1).sort((l,s)=>s.value-l.value);return le().value(l=>l.value)(D)},"createPieArcs"),we=r((e,a,D,l)=>{S.debug(`rendering pie chart
`+e);let s=l.db,T=K(),b=Z(s.getConfig(),T.pie),C=40,o=18,d=4,p=450,g=p,h=_(a),n=h.append("g");n.attr("transform","translate("+g/2+","+p/2+")");let{themeVariables:i}=T,[k]=ee(i.pieOuterStrokeWidth);k??(k=2);let A=b.textPosition,c=Math.min(g,p)/2-C,G=F().innerRadius(0).outerRadius(c),L=F().innerRadius(c*A).outerRadius(c*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",c+k/2).attr("class","pieOuterCircle");let m=s.getSections(),W=xe(m),E=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],f=0;m.forEach(t=>{f+=t});let O=W.filter(t=>(t.data.value/f*100).toFixed(0)!=="0"),$=te(E);n.selectAll("mySlices").data(O).enter().append("path").attr("d",G).attr("fill",t=>$(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/f*100).toFixed(0)+"%").attr("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let P=[...m.entries()].map(([t,w])=>({label:t,value:w})),x=n.selectAll(".legend").data(P).enter().append("g").attr("class","legend").attr("transform",(t,w)=>{let z=o+d,U=z*P.length/2,Y=12*o,j=w*z-U;return"translate("+Y+","+j+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",t=>$(t.label)).style("stroke",t=>$(t.label)),x.append("text").attr("x",o+d).attr("y",o-d).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let H=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),R=g+C+o+d+H;h.attr("viewBox",`0 0 ${R} ${p}`),ae(h,p,R,b.useMaxWidth)},"draw"),Se={draw:we},Ce={parser:me,db:M,renderer:Se,styles:$e};export{Ce as diagram};
