(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d35"],{3530:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),u={class:"admin"},a=Object(c["f"])("h1",null,"Ryan's Cheeky Admin Page",-1),b=Object(c["f"])("h2",null,"Which game is this?",-1),l={class:"table m-0"},s=["onClick"],r=["onClick"],o=["onClick"],i=["onClick"],O=["onClick"],j=["onClick"];function d(t,e,n,d,f,p){return Object(c["r"])(),Object(c["e"])("main",u,[Object(c["f"])("div",null,[a,Object(c["f"])("form",{class:"createGame",onSubmit:e[2]||(e[2]=Object(c["E"])((function(){return t.create&&t.create.apply(t,arguments)}),["prevent"]))},[b,Object(c["D"])(Object(c["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return d.gameNum=t}),type:"number",placeholder:"1"},null,512),[[c["A"],d.gameNum]]),Object(c["f"])("button",{class:"btn",onClick:e[1]||(e[1]=function(t){return d.createGame(d.gameNum,d.players)})},"Create Game BEFORE adding stats.")],32),Object(c["f"])("table",l,[Object(c["f"])("tbody",null,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(d.playerStats,(function(t){var e=t.id,n=t.stats,u=n.points,a=n.rebounds,b=n.assists,l=n.steals,f=n.blocks,p=n.turnovers;return Object(c["r"])(),Object(c["e"])("tr",{key:e},[Object(c["f"])("td",null,Object(c["y"])(e),1),Object(c["f"])("td",null," Points:"+Object(c["y"])(u),1),Object(c["f"])("button",{class:"btn",onClick:function(t){return d.updateStat(d.gameNum,e)}}," Up",8,s),Object(c["f"])("td",null,"Rebounds"+Object(c["y"])(a),1),Object(c["f"])("button",{class:"btn",onClick:function(t){return d.updateStat(d.gameNum,{id:e,points:u})}},"Up",8,r),Object(c["f"])("td",null,"Assists:"+Object(c["y"])(b),1),Object(c["f"])("button",{class:"btn",onClick:function(t){return d.updateStat(d.gameNum,{id:e,points:u})}},"Up",8,o),Object(c["f"])("td",null,"Steals:"+Object(c["y"])(l),1),Object(c["f"])("button",{class:"btn",onClick:function(t){return d.updateStat(d.gameNum,{id:e,points:u})}},"Up",8,i),Object(c["f"])("td",null,"Blocks:"+Object(c["y"])(f),1),Object(c["f"])("button",{class:"btn",onClick:function(t){return d.updateStat(d.gameNum,{id:e,points:u})}},"Up",8,O),Object(c["f"])("td",null,"Turnovers:"+Object(c["y"])(p),1),Object(c["f"])("button",{class:"btn",onClick:function(t){return d.updateStat(d.gameNum,{id:e,points:u})}},"Up",8,j)])})),128))])])])])}var f=n("f9f2"),p={setup:function(){var t=f["a"].currentUser,e=Object(f["g"])(),n=Object(c["u"])({}),u=Object(f["h"])(n);return{players:e,user:t,gameNum:n,playerStats:u,createGame:f["b"],updateStat:f["k"]}}},m=n("6b0d"),k=n.n(m);const y=k()(p,[["render",d]]);e["default"]=y}}]);
//# sourceMappingURL=chunk-2d0b9d35.7d22062f.js.map