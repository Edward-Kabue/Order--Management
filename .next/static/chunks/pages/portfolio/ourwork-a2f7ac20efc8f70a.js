(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{4481:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/ourwork",function(){return s(5960)}])},2115:function(e,r){"use strict";r.Z=function(){window.addEventListener("scroll",(function(){var e=window.pageYOffset;document.querySelector(".fixed-slider .capt .parlx")&&(document.querySelector(".fixed-slider .capt .parlx").style.transform="translate3d(0, "+-.2*e+"px, 0)",document.querySelector(".fixed-slider .capt .parlx").style.opacity=1-e/600)}))}},2455:function(e,r,s){"use strict";s.d(r,{Ji:function(){return n},U6:function(){return a},m7:function(){return i}});var t=0;var n=function(e,r){setInterval(function(e){(t=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(t+=1,e.style.opacity=t):clearInterval(0)}(e),r)},a=function(e,r){setInterval(function(e){(t=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(t=0,e.style.opacity=t):clearInterval(0)}(e),r)},i=function(e){var r=[];if(!e.parentNode)return r;for(var s=e.parentNode.firstChild;s;)1===s.nodeType&&s!==e&&r.push(s),s=s.nextSibling;return r}},8063:function(e,r){"use strict";r.Z=function(){var e,r=document.querySelectorAll(".gallery");r.length>=1&&r.forEach((function(r){e=new Isotope(r,{itemSelector:".items"})}));var s=document.querySelector(".filtering");if(s){var t=function(e){e.addEventListener("click",(function(r){matchesSelector(r.target,"span")&&(e.querySelector(".active").classList.remove("active"),r.target.classList.add("active"))}))};s.addEventListener("click",(function(r){if(matchesSelector(r.target,"span")){var s=r.target.getAttribute("data-filter");s=s,e.arrange({filter:s})}}));for(var n=document.querySelectorAll(".filtering"),a=0,i=n.length;a<i;a++){t(n[a])}}}},4848:function(e,r,s){"use strict";s.d(r,{Z:function(){return f}});var t=s(8520),n=s.n(t),a=s(5893),i=s(7294),l=s(2580),c=s(1664),o=s(2806),d=s(2455),h=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")};function u(e,r,s,t,n,a,i){try{var l=e[a](i),c=l.value}catch(o){return void s(o)}l.done?r(c):Promise.resolve(c).then(t,n)}var f=function(e){var r,s=e.lr,t=e.nr,f=e.theme;return i.useEffect((function(){!function(){var e=document.querySelector(".navbar .search .search-form");document.querySelector(".navbar .search .icon").addEventListener("click",(function(){e.style.display="block",(0,d.Ji)(e,200)})),document.querySelector(".navbar .search .search-form .close").addEventListener("click",(function(){e.style.display="none",(0,d.U6)(e,200)}))}()}),[]),(0,a.jsx)("nav",{ref:t,className:"navbar navbar-expand-lg change ".concat("themeL"===f?"light":""),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(c.default,{href:"/",children:(0,a.jsx)("a",{className:"logo",children:f?(0,a.jsx)("img",{ref:s,src:"".concat(o.E8),alt:"logo"}):(0,a.jsx)("img",{ref:s,src:"".concat(o.TR),alt:"logo"})})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button",onClick:h,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"icon-bar",children:(0,a.jsx)("i",{className:"fas fa-bars"})})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c.default,{href:"/",children:(0,a.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c.default,{href:"/about/about-light",children:(0,a.jsx)("a",{className:"nav-link",children:"About"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c.default,{href:"/services/Services",children:(0,a.jsx)("a",{className:"nav-link",children:" Services"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c.default,{href:"/portfolio/ourwork",children:(0,a.jsx)("a",{className:"nav-link",children:" Portfolio"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c.default,{href:"/contact/contact-light",children:(0,a.jsx)("a",{className:"nav-link",children:"Contact"})})})]}),(0,a.jsxs)("div",{className:"search",children:[(0,a.jsx)("span",{className:"icon pe-7s-search cursor-pointer"}),(0,a.jsxs)("div",{className:"search-form custom-font text-center",children:[(0,a.jsx)(l.J9,{initialValues:{search:""},onSubmit:(r=n().mark((function e(r){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert(JSON.stringify(r,null,2)),r.search="";case 2:case"end":return e.stop()}}),e)})),function(){var e=this,s=arguments;return new Promise((function(t,n){var a=r.apply(e,s);function i(e){u(a,t,n,i,l,"next",e)}function l(e){u(a,t,n,i,l,"throw",e)}i(void 0)}))}),children:function(e){e.errors,e.touched;return(0,a.jsx)(l.l0,{children:(0,a.jsx)(l.gN,{type:"text",name:"search",placeholder:"Search"})})}}),(0,a.jsx)("span",{className:"close pe-7s-close cursor-pointer"})]})]})]})]})})}},371:function(e,r,s){"use strict";var t=s(5893),n=s(7294),a=s(9008);r.Z=function(e){var r=e.children;return e.bdOn&&n.useEffect((function(){return document.querySelector("body").classList.add("bd-"),function(){document.querySelector("body").classList.remove("bd-")}})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("link",{rel:"stylesheet",href:"/css/light.css"})}),r]})}},5960:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return x}});var t=s(5893),n=s(7294),a=s(371),i=s(4848),l=s(1664),c=s(8063);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=[],t=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(s.push(i.value),!r||s.length!==r);t=!0);}catch(c){n=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}return s}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var r=e.filterPosition,s=o(n.useState(!1),2),a=s[0],i=s[1];return n.useEffect((function(){i(!0),a&&setTimeout((function(){(0,c.Z)()}),1e3)}),[a]),(0,t.jsx)("section",{className:"portfolio section-padding pb-70",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"filtering ".concat("center"===r?"text-center":"left"===r?"text-left":"text-right"," smplx col-12"),children:(0,t.jsxs)("div",{className:"filter",children:[(0,t.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,t.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,t.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,t.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,t.jsxs)("div",{className:"gallery full-width",children:[(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items graphic lg-mr",children:[(0,t.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsx)(l.default,{href:"/project-details/project-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/portfolio/mas/01.jpg",alt:"image"})})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Creativity Demand"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"#0",children:"Design"}),", ",(0,t.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items web",children:[(0,t.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsx)(l.default,{href:"/project-details/project-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/portfolio/mas/02.jpg",alt:"image"})})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Through The Breaking"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"#0",children:"Design"}),", ",(0,t.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items brand lg-mr",children:[(0,t.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsx)(l.default,{href:"/project-details/project-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/portfolio/mas/03.jpg",alt:"image"})})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Create With Creatives"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"#0",children:"Design"}),", ",(0,t.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items brand",children:[(0,t.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsx)(l.default,{href:"/project-details/project-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/portfolio/mas/06.jpg",alt:"image"})})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Blast From The Past"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"#0",children:"Design"}),", ",(0,t.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items web",children:[(0,t.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsx)(l.default,{href:"/project-details/project-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/portfolio/mas/05.jpg",alt:"image"})})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"See It Yourself"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"#0",children:"Design"}),", ",(0,t.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,t.jsxs)("div",{className:"col-lg-4 col-md-6 items graphic",children:[(0,t.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsx)(l.default,{href:"/project-details/project-details-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/img/portfolio/mas/04.jpg",alt:"image"})})})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("h6",{children:"Energies of Love"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"#0",children:"Design"}),", ",(0,t.jsx)("a",{href:"#0",children:"WordPress"})]})]})]})]})]})})})},h=function(){return(0,t.jsx)("footer",{className:"footer-half sub-bg",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"copyrights text-center mt-0",children:(0,t.jsx)("p",{children:"\xa9 2016-2022 Dimetech Group"})})})})},u=s(2115),f=function(e){var r=e.sliderRef;return(0,t.jsx)("header",{ref:r,className:"works-header fixed-slider hfixd valign",style:{backgroundImage:"url(/img/slid/1.png)"},"data-overlay-dark":"5",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsxs)("div",{className:"cont text-center",children:[(0,t.jsx)("h1",{children:"Portfolio"}),(0,t.jsxs)("div",{className:"path",children:[(0,t.jsx)("a",{href:"#0",children:"Home"}),(0,t.jsx)("span",{children:"/"}),(0,t.jsx)("a",{href:"#0",className:"active",children:"Portfilo"})]})]})})})})})};function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s=[],t=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(s.push(i.value),!r||s.length!==r);t=!0);}catch(c){n=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}return s}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(){var e=n.useRef(null),r=n.useRef(null),s=n.useRef(null),l=n.useRef(null),c=m(n.useState(!1),2),o=c[0],x=c[1];return n.useEffect((function(){document.querySelector("body").classList.add("menubarblack"),x(!0),o&&(0,u.Z)()}),[o]),n.useEffect((function(){setInterval((function(){if(e.current)var s=e.current.offsetHeight;r.current&&(r.current.style.marginTop=s+"px")}),1e3);var t=s.current;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}),[e,r,s]),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.Z,{nr:s,lr:l,theme:"themeL"}),(0,t.jsx)(f,{sliderRef:e}),(0,t.jsxs)("div",{ref:r,className:"main-content",children:[(0,t.jsx)(d,{filterPosition:"right"}),(0,t.jsx)(h,{})]})]})}},2806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/img/logo-light.png","TR":"/img/logo-light.png"}')}},function(e){e.O(0,[277,774,888,179],(function(){return r=4481,e(e.s=r);var r}));var r=e.O();_N_E=r}]);