(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{58:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(58),t(67)),c=t(22),m=t(23),s=t(25),i=t(24),o=t(49),d=t(48),u=t(8),E=t(16),p=t.n(E),g=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={tasks:[{id:1,name:"CBSE Grade 1 Maths - Algebra",date:"21-Nov-2019",Completed:47,assigned:[{id:1,name:"Chirag",image:p.a},{id:2,name:"Chirag",image:p.a}],category:"ontrack"},{id:2,name:"CBSE Grade 2 Maths - Algebra",date:"04-Des-2019",Completed:22,assigned:[{id:1,name:"Chirag",image:p.a},{id:2,name:"Chirag",image:p.a}],category:"ontrack"},{id:3,name:"CBSE Grade 3 Maths - Algebra",date:"17-Nov-2019",Completed:45,assigned:[{id:1,name:"Chirag",image:p.a},{id:2,name:"Chirag",image:p.a}],category:"ontrack"},{id:4,name:"CBSE Grade 1 Maths - Algebra",date:"19-Nov-2019",Completed:99,assigned:[{id:1,name:"Chirag",image:p.a},{id:2,name:"Chirag",image:p.a}],category:"onhold"},{id:5,name:"CBSE Grade 2 Maths - Algebra",date:"11-Nov-2019",Completed:73,assigned:[{id:1,name:"Chirag",image:p.a},{id:2,name:"Chirag",image:p.a}],category:"onhold"},{id:6,name:"CBSE Grade 1 Maths - Algebra",date:"29-Nov-2019",Completed:66,assigned:[{id:1,name:"Chirag",image:p.a},{id:2,name:"Chirag",image:p.a}],category:"delayed"}]},e.onDragStart=function(e,a){console.log("dragstart:",e),e.dataTransfer.setData("id",a),document.getElementById(a).style.background="rgba(174, 191, 212, 0.18823529411764706)"},e.onDragOver=function(e){e.preventDefault()},e.onDrop=function(a,t){var n=a.dataTransfer.getData("id"),r=e.state.tasks.filter((function(e){return e.id==n&&(e.category=t),e}));e.setState(Object(l.a)(Object(l.a)({},e.state),{},{tasks:r}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state.tasks,t={ontrack:[],onhold:[],delayed:[]};return a.map((function(a,n){return t[a.category].push(r.a.createElement("div",{key:n,className:"row no-gutters task",id:a.id,onDragStart:function(t){return e.onDragStart(t,a.id)},draggable:!0},r.a.createElement(o.a,{md:"12",className:"align-self-start"},r.a.createElement(d.a,{className:"justify-content-between no-gutters"},r.a.createElement(o.a,{xs:9},r.a.createElement("h6",null,a.name)),r.a.createElement(o.a,{xs:"auto"},r.a.createElement("div",{className:"more"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))),r.a.createElement(o.a,{md:"12",className:"align-self-end"},r.a.createElement(d.a,null,r.a.createElement(o.a,{md:6},a.assigned&&a.assigned.map((function(e,a){return r.a.createElement("div",{key:a,className:"img",draggable:!1},r.a.createElement("img",{src:e.image,className:"img-fluid",alt:"assigned-img"}))})),r.a.createElement("div",{className:"add-more"},r.a.createElement(u.a,{name:"add"}))),r.a.createElement(o.a,{md:6},r.a.createElement("span",{className:"date"},r.a.createElement(u.a,{name:"calendar"}),a.date),r.a.createElement("span",{className:"prograss"},a.Completed,"%"))))))})),r.a.createElement("div",{className:"bord-wrapper"},r.a.createElement(d.a,null,r.a.createElement(o.a,{md:4},r.a.createElement("div",{className:"on-track card",onDragOver:function(a){return e.onDragOver(a)},onDrop:function(a){e.onDrop(a,"ontrack")}},r.a.createElement("div",{className:"card-header"},r.a.createElement(d.a,{className:"justify-content-between no-gutters"},r.a.createElement(o.a,{xs:9},r.a.createElement("h5",null,"On Track")),r.a.createElement(o.a,{xs:"auto"},r.a.createElement("div",{className:"more"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))),t.ontrack)),r.a.createElement(o.a,{md:4},r.a.createElement("div",{className:"Delayed card",onDragOver:function(a){return e.onDragOver(a)},onDrop:function(a){return e.onDrop(a,"delayed")}},r.a.createElement("div",{className:"card-header"},r.a.createElement(d.a,{className:"justify-content-between no-gutters"},r.a.createElement(o.a,{xs:9},r.a.createElement("h5",null,"On Delayed")),r.a.createElement(o.a,{xs:"auto"},r.a.createElement("div",{className:"more"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))),t.delayed)),r.a.createElement(o.a,{md:4},r.a.createElement("div",{className:"on-hold card",onDragOver:function(a){return e.onDragOver(a)},onDrop:function(a){return e.onDrop(a,"onhold")}},r.a.createElement("div",{className:"card-header"},r.a.createElement(d.a,{className:"justify-content-between no-gutters"},r.a.createElement(o.a,{xs:9},r.a.createElement("h5",null,"On Hold")),r.a.createElement(o.a,{xs:"auto"},r.a.createElement("div",{className:"more"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))),t.onhold))))}}]),t}(n.Component),v=function(){return r.a.createElement("div",null,"List")},f=function(){return r.a.createElement("div",null,"Gantt")},b=t(11),h=t(66),N=function(e){var a={popupWrapper:{position:"fixed",width:"100%",height:"100%",top:"0",left:"0",right:"0",bottom:"0",margin:"auto",backgroundColor:"rgba(0,0,0, 0.5)",zIndex:"100001",display:"flex"},popup:{margin:"auto",borderRadius:"20px",background:"white",padding:"30px",minMidth:"300px",width:"400px"},popupHeading:{color:"#803588"},p:{color:"#34444c",textTransform:"none",fontSize:"15px",margin:"0",cursor:"text",fontWeight:"400"},closeWrapper:{textAlign:"right",float:"right"},closeImg:{cursor:"pointer",fontSize:"30px"}};return r.a.createElement("div",{style:a.popupWrapper},r.a.createElement("div",{style:a.popup},r.a.createElement("div",{style:a.closeWrapper},r.a.createElement("div",{width:"20",style:a.closeImg,onClick:e.setShowPopup},"\xd7")),r.a.createElement("h4",{style:a.popupHeading},"Task Details"),r.a.createElement("p",{style:a.p},"Task Name : Task 1"),r.a.createElement("p",{style:a.p},"Task Competed : 66%")))},k=t(63),y=t.n(k),C=(t(65),Object(h.b)(y.a)),D=function(){var e=Object(n.useState)([{}]),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),m=Object(b.a)(c,2),s=m[0],i=m[1];Object(n.useEffect)((function(){l([{id:0,title:"Task 1 need to complete",start:new Date(2020,5,6),end:new Date(2020,5,6)},{id:1,title:"Task 2 need to complete",start:new Date(2020,5,14),end:new Date(2020,5,15)},{id:2,title:"Task 3 need to complete",start:new Date(2020,5,10),end:new Date(2020,5,11)}])}),[]);var o=function(){i(!0)};return r.a.createElement("div",{className:"task-calender"},r.a.createElement(h.a,{localizer:C,defaultDate:new Date,defaultView:"month",events:t,components:{toolbar:function(e){return r.a.createElement("div",{className:"custom-toolbar"},r.a.createElement("button",{onClick:function(){e.date.setMonth(e.date.getMonth()-1),e.onNavigate("prev")}},"\u2039"),r.a.createElement("label",null,function(){var a=y()(e.date);return r.a.createElement("span",null,r.a.createElement("b",null,a.format("MMMM")),r.a.createElement("span",null," ",a.format("YYYY")))}()),r.a.createElement("button",{onClick:function(){e.date.setMonth(e.date.getMonth()+1),e.onNavigate("next")}},"\u203a"))},event:function(e){var a=e.event;return r.a.createElement("span",null,r.a.createElement("strong",{onClick:o},a.title),a.desc&&":  "+a.desc)}},style:{height:"500px",width:"100%"}}),s&&r.a.createElement(N,{setShowPopup:function(){return i(!1)}}))},w=function(){return r.a.createElement("div",null,"Pivot")},x=t(68),O=t(10),j=function(e){return r.a.createElement("div",{className:"tab"},r.a.createElement(x.a,{fluid:!0},r.a.createElement(d.a,{className:"justify-content-between align-items-center"},r.a.createElement(o.a,{md:7},r.a.createElement("ul",null,r.a.createElement("li",{className:"list"===e.activeTab?"active":""},r.a.createElement(O.b,{to:"/mytask/list"},"List"),r.a.createElement("span",null)),r.a.createElement("li",{className:"gantt"===e.activeTab?"active":""},r.a.createElement(O.b,{to:"/mytask/gantt"},"Gantt"),r.a.createElement("span",null)),r.a.createElement("li",{className:"board"===e.activeTab?"active":""},r.a.createElement(O.b,{to:"/mytask/board"},"Board"),r.a.createElement("span",null)),r.a.createElement("li",{className:"calendar"===e.activeTab?"active":""},r.a.createElement(O.b,{to:"/mytask/calendar"},"Calendar"),r.a.createElement("span",null)),r.a.createElement("li",{className:"pivot"===e.activeTab?"active":""},r.a.createElement(O.b,{to:"/mytask/pivot"},"Pivot"),r.a.createElement("span",null)))),r.a.createElement(o.a,{md:"auto"},r.a.createElement("div",{className:"extra-filters"},r.a.createElement("div",{className:"fields"},r.a.createElement(u.a,{name:"squares"}),r.a.createElement("span",null,"Fields")),r.a.createElement("div",{className:"sort"},r.a.createElement(u.a,{name:"exchange"}),r.a.createElement("span",null,"Sort")),r.a.createElement("div",{className:"fileter"},r.a.createElement(u.a,{name:"funnel"}),r.a.createElement("span",null,"Filter")))))))};a.default=function(e){var a=void 0!=e.match.params.tab?e.match.params.tab:"board",t=null;switch(a){case"board":t=r.a.createElement(g,null);break;case"list":t=r.a.createElement(v,null);break;case"gantt":t=r.a.createElement(f,null);break;case"calendar":t=r.a.createElement(D,null);break;case"pivot":t=r.a.createElement(w,null);break;default:t=r.a.createElement(v,null)}return r.a.createElement("div",{className:"my-task-wrapper"},r.a.createElement(j,{activeTab:a}),r.a.createElement("div",{className:"my-task-body"},t))}}}]);
//# sourceMappingURL=4.42167574.chunk.js.map