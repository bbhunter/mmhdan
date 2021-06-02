(function(e){function t(t){for(var c,a,l=t[0],s=t[1],o=t[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(f.length)f.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(c=!1)}c&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},i=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var b=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},4090:function(e,t,n){"use strict";n("ea84")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("92c6"),n("15f5"),n("7051");var c=n("7a23"),r={id:"app"},i={class:"section is-medium"},a={class:"container"},l=Object(c["g"])("h2",{class:"subtitle"}," Calculate a fingerprint of a website for OSINT search. ",-1);function s(e,t,n,s,o,b){var u=Object(c["p"])("Navbar"),f=Object(c["p"])("Calculator");return Object(c["k"])(),Object(c["c"])("div",r,[Object(c["g"])(u),Object(c["g"])("section",i,[Object(c["g"])("div",a,[l,Object(c["g"])(f)])])])}var o={class:"field"},b={class:"control is-clearfix"},u={class:"has-text-centered"},f=Object(c["g"])("span",null,"Calculate",-1),O=Object(c["g"])("hr",null,null,-1),j={key:0},g={key:1},p={key:2},v={key:0},d={class:"columns is-multiline is-mobile"};function h(e,t,n,r,i,a){var l,s=Object(c["p"])("Loading"),h=Object(c["p"])("ErrorMessage"),m=Object(c["p"])("FingerprintComponent"),k=Object(c["p"])("BinaryEdge"),y=Object(c["p"])("Censys"),L=Object(c["p"])("Onyphe"),w=Object(c["p"])("Shodan"),q=Object(c["p"])("Spyse"),x=Object(c["p"])("Urlscan");return Object(c["k"])(),Object(c["c"])("div",null,[Object(c["g"])("div",o,[Object(c["g"])("div",b,[Object(c["t"])(Object(c["g"])("input",{type:"url",autocomplete:"on",class:"input",placeholder:"http://example.com","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.url=t})},null,512),[[c["r"],e.url]])])]),Object(c["g"])("div",u,[Object(c["g"])("button",{type:"button",class:"button is-light",onClick:t[2]||(t[2]=function(){return e.calculate&&e.calculate.apply(e,arguments)})},[f])]),O,e.calculateTask.isRunning?(Object(c["k"])(),Object(c["c"])("div",j,[Object(c["g"])(s)])):e.calculateTask.isError&&e.calculateTask.last?(Object(c["k"])(),Object(c["c"])("div",g,[Object(c["g"])(h,{error:e.getErrorData()},null,8,["error"])])):(Object(c["k"])(),Object(c["c"])("div",p,[null!==(l=e.calculateTask.last)&&void 0!==l&&l.value?(Object(c["k"])(),Object(c["c"])("div",v,[Object(c["g"])(m,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"]),Object(c["g"])("div",d,[Object(c["g"])(k,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"]),Object(c["g"])(y,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"]),Object(c["g"])(L,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"]),Object(c["g"])(w,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"]),Object(c["g"])(q,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"]),Object(c["g"])(x,{fingerprint:e.calculateTask.last.value},null,8,["fingerprint"])])])):Object(c["d"])("",!0)]))])}var m=n("1da1"),k=(n("96cf"),n("ed7e")),y=n("bc3a"),L=n.n(y),w=L.a.create({headers:{Accept:"application/json"}}),q={calculateFingerprint:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.get("/api/fingerprint/calculate",{params:{url:e}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},x={class:"message is-warning"},S=Object(c["g"])("div",{class:"message-header"},[Object(c["g"])("p",null,"Warning")],-1),T={class:"message-body"};function M(e,t,n,r,i,a){var l;return Object(c["k"])(),Object(c["c"])("article",x,[S,Object(c["g"])("div",T,Object(c["q"])((null===(l=e.error)||void 0===l?void 0:l.detail)||"Something went wrong..."),1)])}var _=Object(c["h"])({name:"ErrorMessage",props:{error:{type:Object,required:!1}}});_.render=M;var A=_,C={class:"box"},H={class:"content is-normal"},N={class:"mt-4 mb-4"},E=Object(c["g"])("h4",{class:"is-size-4"},"HTML",-1),F=Object(c["g"])("strong",null,"URL:",-1),R=Object(c["g"])("strong",null,"MMH3:",-1),z=Object(c["g"])("strong",null,"MD5:",-1),P=Object(c["g"])("strong",null,"SHA1:",-1),U=Object(c["g"])("strong",null,"SHA256:",-1),B={class:"mt-4 mb-4"},D=Object(c["g"])("h4",{class:"is-size-4"},"Favicon",-1),I=Object(c["g"])("strong",null,"URL:",-1),J=Object(c["g"])("strong",null,"MMH3:",-1),G=Object(c["g"])("strong",null,"MD5:",-1),V=Object(c["g"])("strong",null,"SHA1:",-1),W=Object(c["g"])("strong",null,"SHA256:",-1),K={class:"mt-4 mb-4"},Q=Object(c["g"])("h4",{class:"is-size-4"},"Certificate",-1),X=Object(c["g"])("strong",null,"SHA1:",-1),Y=Object(c["g"])("strong",null,"SHA256:",-1),Z=Object(c["g"])("strong",null,"Serial:",-1);function $(e,t,n,r,i,a){var l,s,o,b,u,f,O,j;return Object(c["k"])(),Object(c["c"])("div",C,[Object(c["g"])("div",H,[Object(c["g"])("div",N,[E,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[F,Object(c["f"])(" "+Object(c["q"])(e.fingerprint.html.url),1)]),Object(c["g"])("li",null,[R,Object(c["f"])(" "+Object(c["q"])(e.fingerprint.html.mmh3),1)]),Object(c["g"])("li",null,[z,Object(c["f"])(" "+Object(c["q"])(e.fingerprint.html.md5),1)]),Object(c["g"])("li",null,[P,Object(c["f"])(" "+Object(c["q"])(e.fingerprint.html.sha1),1)]),Object(c["g"])("li",null,[U,Object(c["f"])(" "+Object(c["q"])(e.fingerprint.html.sha256),1)])])]),Object(c["g"])("div",B,[D,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[I,Object(c["f"])(" "+Object(c["q"])((null===(l=e.fingerprint.favicon)||void 0===l?void 0:l.url)||"N/A"),1)]),Object(c["g"])("li",null,[J,Object(c["f"])(" "+Object(c["q"])((null===(s=e.fingerprint.favicon)||void 0===s?void 0:s.mmh3)||"N/A"),1)]),Object(c["g"])("li",null,[G,Object(c["f"])(" "+Object(c["q"])((null===(o=e.fingerprint.favicon)||void 0===o?void 0:o.md5)||"N/A"),1)]),Object(c["g"])("li",null,[V,Object(c["f"])(" "+Object(c["q"])((null===(b=e.fingerprint.favicon)||void 0===b?void 0:b.sha1)||"N/A"),1)]),Object(c["g"])("li",null,[W,Object(c["f"])(" "+Object(c["q"])((null===(u=e.fingerprint.favicon)||void 0===u?void 0:u.sha256)||"N/A"),1)])])]),Object(c["g"])("div",K,[Q,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[X,Object(c["f"])(" "+Object(c["q"])((null===(f=e.fingerprint.certificate)||void 0===f?void 0:f.sha1)||"N/A"),1)]),Object(c["g"])("li",null,[Y,Object(c["f"])(" "+Object(c["q"])((null===(O=e.fingerprint.certificate)||void 0===O?void 0:O.sha256)||"N/A"),1)]),Object(c["g"])("li",null,[Z,Object(c["f"])(" "+Object(c["q"])((null===(j=e.fingerprint.certificate)||void 0===j?void 0:j.serial)||"N/A"),1)])])])])])}var ee=Object(c["h"])({name:"Fingerprint",props:{fingerprint:{type:Object,required:!0}}});ee.render=$;var te=ee,ne={class:"has-text-centered"},ce=Object(c["g"])("div",{class:"fa-3x"},[Object(c["g"])("i",{class:"fas fa-spinner fa-spin"})],-1);function re(e,t){return Object(c["k"])(),Object(c["c"])("div",ne,[ce])}const ie={};ie.render=re;var ae=ie,le={class:"column is-half"},se={class:"box"},oe={class:"content is-normal"},be=Object(c["g"])("h4",{class:"is-size-4"},[Object(c["g"])("span",{class:"icon"},[Object(c["g"])("img",{src:"https://www.google.com/s2/favicons?domain=binaryedge.io",alt:"binaryedge"})]),Object(c["f"])(" BinaryEdge ")],-1),ue={key:0},fe={key:1};function Oe(e,t,n,r,i,a){return Object(c["k"])(),Object(c["c"])("div",le,[Object(c["g"])("div",se,[Object(c["g"])("div",oe,[be,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("a",{href:e.htmlLink},"HTML",8,["href"])]),e.faviconLink?(Object(c["k"])(),Object(c["c"])("li",ue,[Object(c["g"])("a",{href:e.faviconLink},"Favicon",8,["href"])])):Object(c["d"])("",!0),e.certificateLink?(Object(c["k"])(),Object(c["c"])("li",fe,[Object(c["g"])("a",{href:e.certificateLink},"Certificate",8,["href"])])):Object(c["d"])("",!0)])])])])}var je=n("4328");n("fb6a");function ge(e){var t=2,n=":",c=e.slice(0,t),r=e.slice(t);while(r){var i=r.slice(0,t);r=r.slice(i.length),c+=n+i}return c}var pe=Object(c["h"])({name:"BinaryEdge",props:{fingerprint:{type:Object,required:!0}},setup:function(e){var t=function(e){var t="https://app.binaryedge.io/services/query?",n={query:e};return t+je["stringify"](n)},n=Object(c["a"])((function(){var n="web.body.sha256:".concat(e.fingerprint.html.sha256);return t(n)})),r=Object(c["a"])((function(){if(null!==e.fingerprint.favicon){var n="http.favicon.md5:".concat(e.fingerprint.favicon.md5);return t(n)}})),i=Object(c["a"])((function(){if(null!==e.fingerprint.certificate){var n=ge(e.fingerprint.certificate.sha1),c='ssl.cert.sha1_fingerprint:"'.concat(n,'"');return t(c)}}));return{htmlLink:n,faviconLink:r,certificateLink:i}}});pe.render=Oe;var ve=pe,de={class:"column is-half"},he={class:"box"},me={class:"content is-normal"},ke=Object(c["g"])("h4",{class:"is-size-4"},[Object(c["g"])("span",{class:"icon"},[Object(c["g"])("img",{src:"https://www.google.com/s2/favicons?domain=censys.io",alt:"shodan"})]),Object(c["f"])(" Censys ")],-1),ye={key:0};function Le(e,t,n,r,i,a){return Object(c["k"])(),Object(c["c"])("div",de,[Object(c["g"])("div",he,[Object(c["g"])("div",me,[ke,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("a",{href:e.htmlLink},"HTML",8,["href"])]),e.certificateLink?(Object(c["k"])(),Object(c["c"])("li",ye,[Object(c["g"])("a",{href:e.certificateLink},"Certificate",8,["href"])])):Object(c["d"])("",!0)])])])])}var we=Object(c["h"])({name:"Censys",props:{fingerprint:{type:Object,required:!0}},setup:function(e){var t=function(e){var t="https://search.censys.io/search?",n="hosts",c={q:e,resource:n};return t+je["stringify"](c)},n=Object(c["a"])((function(){var n='services.http.response.body_hash:"sha1:'.concat(e.fingerprint.html.sha1,'"');return t(n)})),r=Object(c["a"])((function(){if(null!==e.fingerprint.certificate)return t(e.fingerprint.certificate.sha256)}));return{htmlLink:n,certificateLink:r}}});we.render=Le;var qe=we,xe={class:"column is-half"},Se={class:"box"},Te={class:"content is-normal"},Me=Object(c["g"])("h4",{class:"is-size-4"},[Object(c["g"])("span",{class:"icon"},[Object(c["g"])("img",{src:"https://www.google.com/s2/favicons?domain=onyphe.io",alt:"shodan"})]),Object(c["f"])(" Onyphe ")],-1);function _e(e,t,n,r,i,a){return Object(c["k"])(),Object(c["c"])("div",xe,[Object(c["g"])("div",Se,[Object(c["g"])("div",Te,[Me,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("a",{href:e.htmlLink},"HTML",8,["href"])])])])])])}var Ae=Object(c["h"])({name:"Onyphe",props:{fingerprint:{type:Object,required:!0}},setup:function(e){var t=function(e){var t="https://onyphe.io/search/?",n={query:e};return t+je["stringify"](n)},n=Object(c["a"])((function(){var n='category:datascan app.http.bodymd5:"'.concat(e.fingerprint.html.md5,'"');return t(n)}));return{htmlLink:n}}});Ae.render=_e;var Ce=Ae,He={class:"column is-half"},Ne={class:"box"},Ee={class:"content is-normal"},Fe=Object(c["g"])("h4",{class:"is-size-4"},[Object(c["g"])("span",{class:"icon"},[Object(c["g"])("img",{src:"https://www.google.com/s2/favicons?domain=shodan.io",alt:"shodan"})]),Object(c["f"])(" Shodan ")],-1),Re={key:0},ze={key:1};function Pe(e,t,n,r,i,a){return Object(c["k"])(),Object(c["c"])("div",He,[Object(c["g"])("div",Ne,[Object(c["g"])("div",Ee,[Fe,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("a",{href:e.htmlLink},"HTML",8,["href"])]),e.faviconLink?(Object(c["k"])(),Object(c["c"])("li",Re,[Object(c["g"])("a",{href:e.faviconLink},"Favicon",8,["href"])])):Object(c["d"])("",!0),e.certificateLink?(Object(c["k"])(),Object(c["c"])("li",ze,[Object(c["g"])("a",{href:e.certificateLink},"Certificate",8,["href"])])):Object(c["d"])("",!0)])])])])}var Ue=Object(c["h"])({name:"Shodan",props:{fingerprint:{type:Object,required:!0}},setup:function(e){var t=function(e){var t="https://shodan.io/search?",n={query:e};return t+je["stringify"](n)},n=Object(c["a"])((function(){var n="http.html_hash:".concat(e.fingerprint.html.mmh3);return t(n)})),r=Object(c["a"])((function(){if(null!==e.fingerprint.favicon){var n="http.favicon.hash:".concat(e.fingerprint.favicon.mmh3);return t(n)}})),i=Object(c["a"])((function(){if(null!==e.fingerprint.certificate){var n="ssl.cert.serial:".concat(e.fingerprint.certificate.serial);return t(n)}}));return{htmlLink:n,faviconLink:r,certificateLink:i}}});Ue.render=Pe;var Be=Ue,De={class:"column is-half"},Ie={class:"box"},Je={class:"content is-normal"},Ge=Object(c["g"])("h4",{class:"is-size-4"},[Object(c["g"])("span",{class:"icon"},[Object(c["g"])("img",{src:"https://www.google.com/s2/favicons?domain=spyse.com",alt:"spyse"})]),Object(c["f"])(" Spyse ")],-1),Ve={key:0},We={key:1};function Ke(e,t,n,r,i,a){return Object(c["k"])(),Object(c["c"])("div",De,[Object(c["g"])("div",Ie,[Object(c["g"])("div",Je,[Ge,Object(c["g"])("ul",null,[e.faviconLink?(Object(c["k"])(),Object(c["c"])("li",Ve,[Object(c["g"])("a",{href:e.faviconLink},"Favicon",8,["href"])])):Object(c["d"])("",!0),e.certificateLink?(Object(c["k"])(),Object(c["c"])("li",We,[Object(c["g"])("a",{href:e.certificateLink},"Certificate",8,["href"])])):Object(c["d"])("",!0)])])])])}var Qe=Object(c["h"])({name:"Spyse",props:{fingerprint:{type:Object,required:!0}},setup:function(e){var t=function(e){var t="https://spyse.com/advanced-search/domain?",n={search_params:e};return t+je["stringify"](n)},n=Object(c["a"])((function(){if(null!==e.fingerprint.favicon){var n=[{domain_info_favicon_hash:{value:e.fingerprint.favicon.sha256,operator:"eq"}}];return t(JSON.stringify(n))}})),r=Object(c["a"])((function(){if(null!==e.fingerprint.certificate){var n=[{cert_fingerprint_sha256:{value:e.fingerprint.certificate.sha256,operator:"eq"}}];return t(JSON.stringify(n))}}));return{faviconLink:n,certificateLink:r}}});Qe.render=Ke;var Xe=Qe,Ye={class:"column is-half"},Ze={class:"box"},$e={class:"content is-normal"},et=Object(c["g"])("h4",{class:"is-size-4"},[Object(c["g"])("span",{class:"icon"},[Object(c["g"])("img",{src:"https://www.google.com/s2/favicons?domain=urlscan.io",alt:"shodan"})]),Object(c["f"])(" urlscan.io ")],-1),tt={key:0};function nt(e,t,n,r,i,a){return Object(c["k"])(),Object(c["c"])("div",Ye,[Object(c["g"])("div",Ze,[Object(c["g"])("div",$e,[et,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])("a",{href:e.htmlLink},"HTML",8,["href"])]),e.faviconLink?(Object(c["k"])(),Object(c["c"])("li",tt,[Object(c["g"])("a",{href:e.faviconLink},"Favicon",8,["href"])])):Object(c["d"])("",!0)])])])])}var ct=Object(c["h"])({name:"Shodan",props:{fingerprint:{type:Object,required:!0}},setup:function(e){var t=function(e){var t="https://urlscan.io/search/#";return t+encodeURI(e)},n=Object(c["a"])((function(){return t(e.fingerprint.html.sha256)})),r=Object(c["a"])((function(){if(null!==e.fingerprint.favicon)return t(e.fingerprint.favicon.sha256)}));return{htmlLink:n,faviconLink:r}}});ct.render=nt;var rt=ct,it=Object(c["h"])({name:"Calculator",components:{BinaryEdge:ve,Censys:qe,ErrorMessage:A,FingerprintComponent:te,Loading:ae,Onyphe:Ce,Shodan:Be,Spyse:Xe,Urlscan:rt},setup:function(){var e=Object(c["o"])(void 0),t=Object(k["a"])(Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.calculateFingerprint(e.value||"");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),n=function(){var n=Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(void 0!==e.value){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.perform();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=function(){if(t.isError&&t.last){var e=t.last.error.response.data;return e}};return{url:e,calculate:n,calculateTask:t,getErrorData:r}}});it.render=h;var at=it,lt=Object(c["u"])("data-v-4bfb1951");Object(c["m"])("data-v-4bfb1951");var st={role:"navigation","aria-label":"main navigation",class:"navbar is-fixed-top"},ot=Object(c["g"])("div",{class:"navbar-brand"},[Object(c["g"])("a",{class:"navbar-item"},[Object(c["g"])("h1",{class:"title"},"mmhdan")]),Object(c["g"])("a",{role:"button","aria-label":"menu",class:"navbar-burger burger"},[Object(c["g"])("span",{"aria-hidden":"true"}),Object(c["g"])("span",{"aria-hidden":"true"}),Object(c["g"])("span",{"aria-hidden":"true"})])],-1),bt=Object(c["e"])('<div class="navbar-menu" data-v-4bfb1951><div class="navbar-start" data-v-4bfb1951></div><div class="navbar-end" data-v-4bfb1951><a class="navbar-item" data-v-4bfb1951><a href="/docs" target="_blank" class="navbar-item" data-v-4bfb1951>API</a></a><a class="navbar-item" data-v-4bfb1951><a href="https://github.com/ninoseki/mmhdan" target="_blank" class="navbar-item" data-v-4bfb1951>GitHub</a></a></div></div>',1);Object(c["l"])();var ut=lt((function(e,t){return Object(c["k"])(),Object(c["c"])("nav",st,[ot,bt])}));n("4090");const ft={};ft.render=ut,ft.__scopeId="data-v-4bfb1951";var Ot=ft,jt=Object(c["h"])({name:"App",components:{Navbar:Ot,Calculator:at}});jt.render=s;var gt=jt;Object(c["b"])(gt).mount("#app")},ea84:function(e,t,n){}});
//# sourceMappingURL=app.b535aa69.js.map