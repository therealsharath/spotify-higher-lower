(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/tick.8eb898ca.png"},22:function(e,t,a){e.exports=a.p+"static/media/cross.b566df37.png"},23:function(e,t,a){e.exports=a.p+"static/media/spotify-high-low.afef272f.png"},25:function(e,t,a){e.exports=a(59)},30:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(30),a(1)),i=a(2),l=a.n(i),m=a(4),u=a(7),f=a(20);var p=function(e){return Object(f.useCountUp)({end:e.followers}).countUp.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var h=function(e){var t=Object(n.useState)(e.side),a=Object(o.a)(t,2),c=a[0],s=a[1],i=function(e){return new Promise((function(t){return setTimeout(t,e)}))},u=function(){var t=Object(m.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s(!c),a!==e.followers>e.logic&&e.logic!==e.followers){t.next=7;break}return t.next=4,i(1750);case 4:e.handle(!0),t.next=10;break;case 7:return t.next=9,i(1750);case 9:e.handle(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f={position:"relative",minHeight:window.innerHeight/2};return r.a.createElement("div",{style:f},r.a.createElement("img",{className:"image",src:e.image,alt:"Image1"}),r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"artist-name"},e.name),r.a.createElement("div",{className:"has"},"has"),c&&r.a.createElement("div",{className:"number"},0!==e.transitionTime?r.a.createElement(p,{followers:e.followers}):e.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),!c&&r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"custom-button",onClick:function(){return u(!0)}},"Higher \xa0",r.a.createElement("font",{className:"higher"},"\u25ed"))),!c&&r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"custom-button",onClick:function(){return u(!1)}},"Lower  \xa0\xa0",r.a.createElement("font",{className:"lower"},"\u25ed"))),c?r.a.createElement("div",{className:"has button-buffer"},r.a.createElement("font",{className:"spotify"},"Spotify "),"followers"):r.a.createElement("div",{className:"has button-buffer"},r.a.createElement("font",{className:"spotify"},"Spotify")," followers than ",e.prev)))},d=a(24),b=a(37),v=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://accounts.spotify.com/api/token",t="Basic "+btoa("fb4e47147f94480ea653c98a3d510179:9f88210bae2841ae8c608270ab2e1361"),n=a(55),r=n.stringify({grant_type:"client_credentials"}),e.prev=4,c={method:"post",url:"https://accounts.spotify.com/api/token",headers:{Authorization:t},data:r},e.next=8,b(c);case 8:return s=e.sent,e.abrupt("return",s.data.access_token);case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var n,r,c,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="Bearer "+t,r=Math.floor(2*Math.random()+1),e.t0=r,e.next=1===e.t0?5:2===e.t0?7:9;break;case 5:return c="US",e.abrupt("break",10);case 7:return c="GB",e.abrupt("break",10);case 9:c="US";case 10:return s="https://api.spotify.com/v1/search?q=year%3A2020&type=artist&market="+c+"&limit=1&offset="+a,e.prev=11,o={method:"get",url:s,headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:n}},e.next=15,b(o);case 15:return i=e.sent,e.abrupt("return",i.data.artists.items[0]);case 19:e.prev=19,e.t1=e.catch(11),console.error(e.t1);case 22:case"end":return e.stop()}}),e,null,[[11,19]])})));return function(t,a){return e.apply(this,arguments)}}();function g(e,t){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(l.a.mark((function e(t,a){var n,r,c,s,o,i,m,u,f,p,h,b,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return n=e.sent,e.next=5,w(n,a);case 5:if(r=e.sent,c=Object(d.a)(t),!(t.length<1)){e.next=18;break}return s=r.name,o=r.followers.total,0,null,i=r.images[0].url,m={name:s,followers:o,side:!0,higher:0,prev:null,image:i,transitionTime:0},c.push(m),e.next=17,w(n,a+1);case 17:r=e.sent;case 18:return u=r.name,f=r.followers.total,p=c[c.length-1].followers,h=c[c.length-1].name.split(/\s+/)[0],b=r.images[0].url,g={name:u,followers:f,side:!1,higher:p,prev:h,image:b},c.push(g),e.abrupt("return",c);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(21),k=a.n(N),y=a(22),j=a.n(y);var x=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)({x:0}),f=Object(o.a)(i,2),p=f[0],d=f[1],b=Object(n.useState)(window.innerWidth/2),v=Object(o.a)(b,2),w=v[0],E=v[1],N=Object(n.useState)(window.innerHeight/2),y=Object(o.a)(N,2),x=y[0],O=y[1],S=Object(n.useState)(0),B=Object(o.a)(S,2),M=B[0],P=B[1],A=Object(n.useState)(window.innerWidth<600),C=Object(o.a)(A,2),T=C[0],W=C[1],H=Object(n.useState)(!1),I=Object(o.a)(H,2),U=I[0],G=I[1],_=Object(n.useState)(!1),z=Object(o.a)(_,2),J=z[0],L=z[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(c,Math.floor(250*Math.random()+1));case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.length<5&&function(){e.apply(this,arguments)}(),T&&c.length<1&&d({y:0}),window.innerWidth/2!==w&&(E(window.innerWidth/2),W(window.innerWidth<600)),window.innerHeight/2!==x&&O(window.innerHeight/2)}),[c,T,x,w]);var Y=function(e,t){return G(!0),L(t),new Promise((function(t){return setTimeout(t,e)}))},q=function(){var t=Object(m.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=13;break}return t.next=3,g(c,Math.floor(250*Math.random()+1));case 3:return n=t.sent,s(n),t.next=7,Y(2e3,a);case 7:P(M+1),d(T?{y:0-x*(M+1)}:{x:0-w*(M+1)}),L(!1),G(!1),t.next=16;break;case 13:return t.next=15,Y(2e3,a);case 15:e.handle("over",M);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"main-container"},r.a.createElement(u.b.div,{className:"main-container",animate:p,transition:{duration:1}},c.length>1&&c.map((function(e){return r.a.createElement(h,{name:e.name,followers:e.followers,handle:q,side:e.side,logic:e.higher,prev:e.prev,image:e.image,transitionTime:e.transitionTime})}))),r.a.createElement("div",{className:"centered"},U?r.a.createElement(u.b.div,{initial:{scale:0},animate:U?"final":"initial",variants:{initial:{scale:0,opacity:0},final:{scale:1,opacity:1}},transition:{duration:1}},J?r.a.createElement("div",{className:"circle right"},r.a.createElement("img",{src:k.a,className:"centered tick",alt:"right"})):r.a.createElement("div",{className:"circle wrong"},r.a.createElement("img",{src:j.a,className:"centered tick",alt:"wrong"}))):r.a.createElement(u.a,null,r.a.createElement("div",{className:"circle"},r.a.createElement("div",{className:"centered"},"vs")))),r.a.createElement("div",{className:"source"},"Source: ",r.a.createElement("font",{className:"spotify"},"Spotify")),r.a.createElement("div",{className:"score"},"Score: ",M))},O=a(23),S=a.n(O);var B=function(e){return r.a.createElement("div",{className:"home home-bg-image"},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:S.a,alt:"logo"}),r.a.createElement("div",null,"Who has more ",r.a.createElement("font",{className:"spotify"},"Spotify")," followers?"),r.a.createElement("div",{className:"home-buttons"},r.a.createElement("button",{className:"home-button",onClick:function(){return e.handle("begin")}},"Play Game")),r.a.createElement("div",{className:"source"},"Photo by ",r.a.createElement("a",{className:"link",href:"https://www.pexels.com/@brett-sayles",target:"blank"},"Brett Sayles")," from ",r.a.createElement("a",{className:"link",href:"https://www.pexels.com",target:"blank"},"Pexels"))))};var M=function(e){return r.a.createElement("div",{className:"home over-bg-image"},r.a.createElement("div",null,r.a.createElement("div",null,"Your score:"),r.a.createElement("div",{className:"number"},e.score),r.a.createElement("div",{className:"prompt-container"},r.a.createElement("div",{className:"prompt no-buffer"},"Try Again? You can definitely beat that!"),r.a.createElement("div",{className:"prompt no-buffer"},"Checkout other projects ",r.a.createElement("a",{className:"link",href:"http://www.github.com/therealsharath",target:"blank"},"here")," \ud83d\ude07")),r.a.createElement("div",{className:"over-buttons"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"home-button",onClick:function(){return e.handle("new")}},"Play Again \ud83d\ude01")),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"home-button",onClick:function(){return window.location.href="/"}}," Back to Menu"))),r.a.createElement("div",{className:"prompt"},"Inspired by ",r.a.createElement("a",{className:"link",href:"http://www.higherlowergame.com/",target:"blank"},"@HigherLowerGame"))),r.a.createElement("div",{className:"source"},"Photo by ",r.a.createElement("a",{className:"link",href:"https://www.pexels.com/@vovaflame",target:"blank"},"Vova Krasilnikov")," from ",r.a.createElement("a",{className:"link",href:"https://www.pexels.com",target:"blank"},"Pexels")),r.a.createElement("div",{className:"right-source"},"Made using the ",r.a.createElement("a",{className:"spotify",href:"https://developer.spotify.com/documentation/web-api/",target:"blank"},"Spotify API")))};a(58);var P=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],m=i[1],u=Object(n.useState)(!1),f=Object(o.a)(u,2),p=f[0],h=f[1],d=Object(n.useState)(0),b=Object(o.a)(d,2),v=b[0],w=b[1],g=function(e,t){"begin"===e?(c(!1),m(!0)):"over"===e?(m(!1),h(!0),w(t)):"new"===e&&(h(!1),m(!0))};return r.a.createElement("div",{className:"App"},a&&r.a.createElement(B,{handle:g}),l&&r.a.createElement(x,{handle:g}),p&&r.a.createElement(M,{handle:g,score:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.beae63f0.chunk.js.map