(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],f=0,b=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(b.length)b.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"7d22062f","chunk-2d22d746":"5c872d1c","chunk-6c48adc2":"6432faa1","chunk-6c98ea4e":"acc796f5"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-6c48adc2":1,"chunk-6c98ea4e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b9d35":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-6c48adc2":"9a42b42c","chunk-6c98ea4e":"6e8f1df5"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){s=b[o],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var b=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/fantasybasketball/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2d6d":function(e,t,n){"use strict";n("ca3e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={key:0,id:"nav"},c=Object(r["g"])("Home"),u=Object(r["g"])(" | "),o=Object(r["g"])("About"),i=Object(r["g"])("Draft");function s(e,t,n,s,f,b){var l=Object(r["w"])("router-link"),d=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[e.$store.state.user?(Object(r["r"])(),Object(r["e"])("div",a,[Object(r["h"])(l,{to:"/"},{default:Object(r["C"])((function(){return[c]})),_:1}),u,Object(r["h"])(l,{to:"/about"},{default:Object(r["C"])((function(){return[o]})),_:1}),Object(r["h"])(l,{to:"/draft"},{default:Object(r["C"])((function(){return[i]})),_:1}),Object(r["f"])("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("logout")})},"Logout")])):Object(r["d"])("",!0),Object(r["h"])(d)],64)}var f=n("5502"),b={setup:function(){var e=Object(f["b"])();Object(r["o"])((function(){e.dispatch("fetchUser")}))}},l=(n("76f9"),n("6b0d")),d=n.n(l);const p=d()(b,[["render",s]]);var h=p,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j={class:"home"},O=Object(r["f"])("h1",null,"MIKE'S BASKETBALL TEAM FANTASY BASKETBALL",-1),v=Object(r["f"])("div",null,[Object(r["f"])("table",{class:"table-table-dark"}),Object(r["f"])("table",{class:"table table-dark"})],-1),g=[O,v];function w(e,t){return Object(r["r"])(),Object(r["e"])("main",j,g)}n("2d6d");const k={},y=d()(k,[["render",w]]);var x=y,R=n("f9f2"),S=[{path:"/",name:"Home",component:x,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-6c48adc2").then(n.bind(null,"a55b"))}},{path:"/draft",name:"Draft",component:function(){return n.e("chunk-6c98ea4e").then(n.bind(null,"55c7"))},meta:{requiresAuth:!0}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-2d0b9d35").then(n.bind(null,"3530"))},meta:{requiresAuth:!1}}],E=Object(m["a"])({history:Object(m["b"])("/fantasybasketball/"),routes:S});E.beforeEach((function(e,t,n){"/login"===e.path&&R["a"].currentUser?n("/"):!e.matched.some((function(e){return e.meta.requiresAuth}))||R["a"].currentUser?n():n("/login")}));var A=E,T=n("1da1"),P=(n("96cf"),n("ea7b")),_=Object(f["a"])({state:{user:null},mutations:{SET_USER:function(e,t){e.user=t},CLEAR_USER:function(e){e.user=null}},actions:{login:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.email,c=t.password,n.prev=2,n.next=5,Object(P["c"])(R["a"],a,c);case 5:n.next=18;break;case 7:n.prev=7,n.t0=n["catch"](2),n.t1=n.t0.code,n.next="auth/user-not-found"===n.t1?12:"auth/wrong-password"===n.t1?14:16;break;case 12:return alert("User not found"),n.abrupt("break",17);case 14:return alert("Wrong password"),n.abrupt("break",17);case 16:alert("Something went wrong");case 17:return n.abrupt("return");case 18:r("SET_USER",R["a"].currentUser),A.push("/");case 20:case"end":return n.stop()}}),n,null,[[2,7]])})))()},register:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.email,c=t.password,u=t.teamName,n.prev=2,n.next=5,Object(P["a"])(R["a"],a,c);case 5:n.next=22;break;case 7:n.prev=7,n.t0=n["catch"](2),n.t1=n.t0.code,n.next="auth/email-already-in-use"===n.t1?12:"auth/invalid-email"===n.t1?14:"auth/operation-not-allowed"===n.t1?16:"auth/weak-password"===n.t1?18:20;break;case 12:return alert("Email already in use"),n.abrupt("break",21);case 14:return alert("Invalid email"),n.abrupt("break",21);case 16:return alert("Operation not allowed"),n.abrupt("break",21);case 18:return alert("Weak password"),n.abrupt("break",21);case 20:alert("Something went wrong");case 21:return n.abrupt("return");case 22:r("SET_USER",R["a"].currentUser),Object(R["c"])(u,a),A.push("/");case 25:case"end":return n.stop()}}),n,null,[[2,7]])})))()},logout:function(e){return Object(T["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(P["d"])(R["a"]);case 3:n("CLEAR_USER"),A.push("/login");case 5:case"end":return t.stop()}}),t)})))()},fetchUser:function(e){var t=e.commit;R["a"].onAuthStateChanged(function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null===n?t("CLEAR_USER"):(t("SET_USER",n),A.isReady()&&"/login"===A.currentRoute.value.path&&A.push("/"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}});Object(r["c"])(h).use(_).use(A).mount("#app")},"69fa":function(e,t,n){},"76f9":function(e,t,n){"use strict";n("69fa")},ca3e:function(e,t,n){},f9f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return g})),n.d(t,"j",(function(){return x})),n.d(t,"d",(function(){return R})),n.d(t,"i",(function(){return y})),n.d(t,"k",(function(){return E})),n.d(t,"f",(function(){return S})),n.d(t,"e",(function(){return k}));var r=n("5530"),a=n("1da1"),c=(n("d3b7"),n("25f0"),n("d81d"),n("96cf"),n("260b")),u=n("e71f"),o=n("ea7b"),i=n("7a23"),s={apiKey:"AIzaSyCTS21pRfiupsR85Lplykc4i9mm3a598tk",authDomain:"fantasybasketballwebsite.firebaseapp.com",projectId:"fantasybasketballwebsite",storageBucket:"fantasybasketballwebsite.appspot.com",messagingSenderId:"181536986312",appId:"1:181536986312:web:9d84c71877f2f185a781fd"},f=Object(c["a"])(s),b=Object(u["d"])(),l=Object(o["b"])(f),d=Object(u["a"])(b,"Players"),p=Object(u["a"])(b,"Teams"),h=Object(u["a"])(b,"Games"),m=Object(u["a"])(b,"Draft"),j=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(u["b"])(p,n),e.next=3,Object(u["i"])(r,{TeamName:t,Players:[]});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.toString(),a=Object(u["b"])(h,r),c=Object(i["u"])(n).value,e.next=5,Object(u["i"])(a,{stats:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.toString(),console.log(n),r=Object(u["b"])(h,n),e.next=5,Object(u["c"])(r);case 5:return a=e.sent,a.exists()?(console.log("sdklasd"),console.log("Document data:",a.data())):console.log("No such document!"),e.abrupt("return",a.data());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i["u"])([]),t=Object(u["f"])(d,(function(t){e.value=t.docs.map((function(e){return{id:e.id,stats:{points:0,rebounds:0,assists:0,steals:0,blocks:0,turnovers:0}}}))}));return Object(i["q"])(t),e},w=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(u["b"])(p,t),e.next=3,Object(u["c"])(n);case 3:return r=e.sent,e.abrupt("return",r.data().TeamName);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i["u"])([]),t=Object(u["h"])(p),n=Object(u["f"])(t,(function(t){e.value=t.docs.map((function(e){return Object(r["a"])({id:e.id},e.data())}))}));return Object(i["q"])(n),e},y=function(e){var t=Object(i["u"])([]),n=Object(u["h"])(d,Object(u["k"])("Team","==",e)),a=Object(u["f"])(n,(function(e){t.value=e.docs.map((function(e){return Object(r["a"])({id:e.id},e.data())}))}));return Object(i["q"])(a),t},x=function(){var e=Object(i["u"])([]),t=Object(u["h"])(d,Object(u["k"])("Team","==","")),n=Object(u["f"])(t,(function(t){e.value=t.docs.map((function(e){return Object(r["a"])({id:e.id},e.data())}))}));return Object(i["q"])(n),e},R=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r,c,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["j"])(Object(u["b"])(d,t),{Team:n});case 2:return r=Object(u["b"])(m,"DraftPosition"),e.next=5,Object(u["c"])(r);case 5:return c=e.sent,o=c.data().CurrentPos,o+=1,e.next=10,Object(u["j"])(Object(u["b"])(m,"DraftPosition"),{CurrentPos:o});case 10:i=Object(u["b"])(m,t),w(n).then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(r){var a,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["i"])(i,{Team:r,DraftPos:o});case 2:return a=Object(u["b"])(p,n),e.next=5,Object(u["c"])(a);case 5:return c=e.sent,s=c.data().Players,s.push(t),e.next=10,Object(u["j"])(Object(u["b"])(p,n),{Players:s});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(i["u"])([]),t=Object(u["h"])(m,Object(u["g"])("DraftPos","desc"),Object(u["e"])(1)),n=Object(u["f"])(t,(function(t){e.value=t.docs.map((function(e){return Object(r["a"])({id:e.id},e.data())}))}));return Object(i["q"])(n),e},E=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(i["u"])(n).value,e.next=3,Object(u["j"])(Object(u["b"])(h,t),{stats:r});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}});
//# sourceMappingURL=app.18a478ba.js.map