(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),i=(a(14),a(8)),s=a(3),l=a(4),u=(a(15),a(7)),m=a.n(u);var h=function(){var e="e0b3d83f5334432ea6f5522dac4052da",t="https://api.weatherbit.io/v2.0/",a=Object(n.useState)(""),o=Object(l.a)(a,2),r=o[0],u=o[1],h=Object(n.useState)({}),p=Object(l.a)(h,2),d=p[0],f=p[1];Object(n.useEffect)((function(){fetch("".concat(t,"current?city=Colombo&key=").concat(e)).then((function(e){return e.json()})).then((function(e){f.apply(void 0,Object(s.a)(e.data)),u(""),console.log("OK")})).catch((function(e){console.error("Error:",e)}))}),[]);var v=Date();return c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return u(e.target.value)},value:r,onKeyPress:function(a){"Enter"===a.key&&fetch("".concat(t,"current?city=").concat(r,"&key=").concat(e)).then((function(e){return e.json()})).then((function(e){f.apply(void 0,Object(s.a)(e.data)),u("")})).catch((function(e){console.error("Error:",e)}))}}),c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},d.city_name),c.a.createElement(m.a,{className:"date",format:"LL"},v)),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},d.app_temp),c.a.createElement("div",{className:"weather"},Object(i.a)({},d.weather).description)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.f25cfdd7.chunk.js.map