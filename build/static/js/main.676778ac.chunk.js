(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=a(5),o=(a(30),a(2)),m=(a(31),a(3)),s={width:"16.8vw",height:"35vh",margin:"0 ",padding:"0"},u={backgroundColor:"rgba(94, 151, 255, 0.4)",width:"16.8vw",height:"auto"},d={padding:"0em 1em"};var p=function(e){var t=e.film,a=Object(o.f)();return l.a.createElement("div",{style:u,onClick:function(){a.push({pathname:"/".concat(t.id)})}},l.a.createElement("img",{style:s,src:t.i.imageUrl,alt:t.l}),l.a.createElement("h2",{style:d},t.l," "),l.a.createElement("p",{style:d},"Category:",t.qid," "),l.a.createElement("p",{style:d},"Genre:",t.genre," "),l.a.createElement("p",{style:d},"Rank on IMDB:",t.rank," "))};var E=function(e){var t=e.films,a=e.listStyle;return e.searchResults,l.a.createElement("div",{style:a},t.length?t.map(function(e){return l.a.createElement(p,{key:e.id,film:e})}):l.a.createElement("h1",null,"There are no films in this list"))},f={display:"flex",justifyContent:"space-between",alignItems:"center"},v={fontSize:"80px",fontWeight:"bold",fontFamily:"Tangerine",marginTop:"10px",marginBottom:"0px",marginLeft:"10px",paddingTop:"5px"},h={backgroundColor:"transparent",border:"1px solid white",color:"white",fontSize:"20px",cursor:"pointer",outline:"none",padding:"4px 20px",margin:"10px",borderRadius:"8px"};var y=function(){return l.a.createElement("div",{style:f},l.a.createElement("h1",{style:v},"WatchTower"),l.a.createElement("div",null,l.a.createElement("button",{style:h},l.a.createElement(i.b,{to:"/login"},"Login")),l.a.createElement("button",{style:h},l.a.createElement(i.b,{to:"/signup"},"Sign Up"))))},g={display:"flex",justifyContent:"right"},b={background:"rgba(255, 255, 255, 0.2)",border:"1px solid rgba(255, 255, 255, 0.5)",color:"#D9D9D9",margin:"2px",padding:"5px",marginBottom:"30px",fontSize:"15px"};var x=function(e){var t=e.setSearchTerm,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],i=r[1],o=Object(n.useCallback)(function(e){i(e.target.value)},[]);return l.a.createElement("div",{style:g},l.a.createElement("input",{type:"text",name:"search",placeholder:"keyword/title",value:c,style:b,onChange:o}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),t(c)},style:b},"Search"))},w={display:"flex",justifyContent:"space-between",alignItems:"center",width:"14%",borderRadius:"5px",border:"1px solid white",color:"white",backgroundColor:"transparent",fontSize:"20px",fontWeight:"bold",alignContent:"left",cursor:"pointer",active:{backgroundColor:"rgba(94, 151, 255, 0.4)"}},j={display:"flex",alignItems:"center",justifyContent:"space-between"},C={margin:"8px 0px",padding:"12px",backgroundColor:"rgba(94, 151, 255, 0.4)"};var S=function(){return l.a.createElement("div",null,l.a.createElement("nav",{style:j},l.a.createElement(i.c,{to:"/",style:w},"Home"),l.a.createElement(i.c,{to:"/movies",style:w},"Movies"),l.a.createElement(i.c,{to:"/series",style:w},"Series"),l.a.createElement(i.c,{to:"/documentaries",style:w},"Documentaries"),l.a.createElement(i.c,{to:"/watchlist",style:w},"WatchList")),l.a.createElement("div",{style:C}))};var O=function(e){var t=e.setSearchTerm,a=e.noSearch;return l.a.createElement("div",null,l.a.createElement(y,null),!a&&l.a.createElement(x,{setSearchTerm:t}),l.a.createElement(S,null))},k=a(11),T=a(10),I={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 10px",margin:"20px 0px 0px 0px",backgroundColor:"rgba(94, 151, 255, 0.4)"},R={color:"white",fontSize:"20px",padding:"0px 5px"},L={display:"inline-block",alignItems:"center",padding:"0px 0px"},A={fontWeight:"bold",display:"block",marginTop:"10px"},D={textAlign:"center"};var K=function(){return l.a.createElement("div",null,l.a.createElement("div",{style:I},l.a.createElement("div",{style:L},l.a.createElement("a",{style:A,href:"/"},"About Us"),l.a.createElement("a",{style:A,href:"/"},"News")),l.a.createElement("div",{style:L},l.a.createElement("a",{style:A,href:"/"},"Terms of Use"),l.a.createElement("a",{style:A,href:"/"},"Privacy Policy")),l.a.createElement("div",{style:L},l.a.createElement("a",{style:A,href:"/"},"Contact Us"),l.a.createElement("a",{style:A,href:"/"},"FAQ")),l.a.createElement("div",{style:L},l.a.createElement("a",{style:A,href:"/"},"Follow Us"),l.a.createElement("div",{style:A},l.a.createElement("a",{href:"/"},l.a.createElement(k.a,{icon:T.a,style:R})),l.a.createElement("a",{href:"/"},l.a.createElement(k.a,{icon:T.c,style:R})),l.a.createElement("a",{href:"/"},l.a.createElement(k.a,{icon:T.b,style:R})),l.a.createElement("a",{href:"/"},l.a.createElement(k.a,{icon:T.d,style:R}))))),l.a.createElement("div",null,l.a.createElement("h3",{style:D},"\xa9 All Rights Reserved")))},U={display:"flex",justifyContent:"space-between"},M={display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"2em"};var F=function(e){var t=e.films,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],i=r[1],o=Object(n.useMemo)(function(){return c.length?t.filter(function(e){return e.l.toLowerCase().includes(c.toLowerCase())}):t},[t,c]);return l.a.createElement("div",null,l.a.createElement(O,{setSearchTerm:i}),l.a.createElement("div",{style:U},l.a.createElement("div",null,l.a.createElement(E,{films:o,listStyle:M}))),l.a.createElement(K,null))},z={display:"flex",justifyContent:"right"},G={background:"rgba(255, 255, 255, 0.2)",border:"1px solid rgba(255, 255, 255, 0.5)",color:"#D9D9D9",margin:"2px",padding:"5px",marginBottom:"30px",fontSize:"15px",width:" 20%"},J={background:"rgba(255, 255, 255, 0.2)",border:"1px solid rgba(255, 255, 255, 0.5)",color:"black",fontSize:"15px"};var N=function(){return l.a.createElement("div",{style:z},l.a.createElement("select",{name:"genre",id:"genre",style:G},l.a.createElement("option",{value:"",style:J}),l.a.createElement("option",{value:"action",style:J},"Action"),l.a.createElement("option",{value:"comedy",style:J},"Comedy"),l.a.createElement("option",{value:"drama",style:J},"Drama"),l.a.createElement("option",{value:"fantasy",style:J},"Fantasy"),l.a.createElement("option",{value:"horror",style:J},"Horror"),l.a.createElement("option",{value:"thriller",style:J},"Thriller")))},W={display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"1.9em"};var B=function(e){var t=e.movies,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],i=r[1],o=Object(n.useMemo)(function(){return c.length?t.filter(function(e){return e.l.toLowerCase().includes(c.toLowerCase())}):t},[t,c]);return l.a.createElement("div",null,l.a.createElement(O,{setSearchTerm:i}),l.a.createElement(N,null),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E,{films:o,listStyle:W}))),l.a.createElement(K,null))},P={display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"1.9em"};var q=function(e){var t=e.series,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],i=r[1],o=Object(n.useMemo)(function(){return c.length?t.filter(function(e){return e.l.toLowerCase().includes(c.toLowerCase())}):t},[t,c]);return l.a.createElement("div",null,l.a.createElement(O,{setSearchTerm:i})," ",l.a.createElement(N,null),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E,{films:o,listStyle:P}))),l.a.createElement(K,null))},H={display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"1.9em"};var _=function(e){var t=e.documentaries,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],i=r[1],o=Object(n.useMemo)(function(){return c.length?t.filter(function(e){return e.l.toLowerCase().includes(c.toLowerCase())}):t},[t,c]);return l.a.createElement("div",null,l.a.createElement(O,{setSearchTerm:i}),l.a.createElement(N,null),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E,{films:o,listStyle:H}))),l.a.createElement(K,null))},Q={display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"1.9em"};var Y=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){fetch("https://my-json-server.typicode.com/JACKLINEKARIUKI/phase2-server/w").then(function(e){return e.json()}).then(function(e){r(e)})},[]),l.a.createElement("div",null,l.a.createElement(O,{noSearch:!0}),l.a.createElement(E,{films:a,listStyle:Q}),l.a.createElement(K,null))};var V=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"))};var X=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"))},Z=l.a.createContext({}),$=function(){return Object(n.useContext)(Z)},ee=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(m.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)(function(){fetch("https://my-json-server.typicode.com/JACKLINEKARIUKI/phase2-server/d").then(function(e){return e.json()}).then(function(e){i(e)})},[]);var o=Object(n.useCallback)(function(e){return c.filter(function(t){return t.qid===e})},[c]);return l.a.createElement(Z.Provider,{value:{filterFilms:o,allFilms:c}},t)},te=a(12),ae=a(20),ne=a(13),le={padding:"0.5em 0.5em 0.5em 0.5em",width:"20%"},re={padding:"0.5em 0.5em 0.5em 0.5em",width:"45%"},ce={padding:"0.5em 0.5em 0.5em 0.5em"};var ie=function(e){var t=e.addReview,a=Object(n.useState)({title:"",comment:""}),r=Object(m.a)(a,2),c=r[0],i=r[1];function o(e){i(Object(te.a)({},c,Object(ne.a)({},e.target.name,e.target.value)))}return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c),i({title:"",comment:""})}},l.a.createElement("input",{style:le,type:"text",name:"title",placeholder:"Movie/Series Title:  ",value:c.title,onChange:o}),l.a.createElement("input",{style:re,type:"text",name:"comment",placeholder:"Add a comment",value:c.comment,onChange:o}),l.a.createElement("button",{style:ce,type:"submit"},"Post")))},oe={background:"rgba(0, 0, 0, 0.24)",color:"white"},me={color:"white",fontSize:"20px",padding:"0.3em 0em 0.3em 0.8em",marginTop:"2em",backgroundColor:"rgba(94, 151, 255, 0.4)",width:"88.5vw"};var se=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",{style:me},"Reviews")),l.a.createElement("div",null,l.a.createElement(ie,{addReview:function(e){var t=[].concat(Object(ae.a)(a),[e]);r(t)}})),l.a.createElement("div",null,a.map(function(e){return l.a.createElement("div",{key:e.title,style:oe},l.a.createElement("h4",null,e.title,": ",e.comment))})))},ue={display:"flex",justifyContent:"space-between",padding:"1vw 15vw 0vw 2vw",margin:"0px 0px 30px 0px"},de={display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"left",padding:"1vw 10vw 0vw 2vw",margin:"0px 0px 0px 0px"},pe={border:"1px solid white",borderRadius:"8px",padding:"5px 10px",margin:"0px 10px"},Ee={display:"flex",justifyContent:"space-between"},fe={border:"1px solid white",borderRadius:"8px",padding:"20px 50px"},ve={width:"30vw",height:"auto"},he={border:"1px solid white",borderRadius:"8px",padding:"10px 20px",margin:"0px 10px",width:"30%",cursor:"pointer",textDecoration:"none"};var ye=function(){var e=Object(o.f)(),t=Object(o.g)().film_id,a=Object(n.useState)(null),r=Object(m.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)(function(){fetch("https://my-json-server.typicode.com/JACKLINEKARIUKI/phase2-server/d/".concat(t)).then(function(e){return e.json()}).then(function(e){i(e)})},[]);var s=Object(n.useCallback)(function(){fetch("https://my-json-server.typicode.com/JACKLINEKARIUKI/phase2-server/w",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(te.a)({},c))}).then(function(){e.push("/watchList")})},[c]);return l.a.createElement("div",null,l.a.createElement(O,{noSearch:!0}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{style:ue},c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:de},l.a.createElement("h1",{style:fe},c.l),l.a.createElement("div",{style:Ee},l.a.createElement("h3",{style:pe},"Category : ",c.qid),l.a.createElement("h3",{style:pe},"Genre : ",c.genre)),l.a.createElement("h4",{style:fe},c.description),l.a.createElement("h4",{style:fe},"Release Year : ",c.y),l.a.createElement("h4",{style:fe},"Rank on IMDB : ",c.rank),l.a.createElement("button",{style:he},"Watch Now"),l.a.createElement("button",{style:he,onClick:s},"Add to Watch List")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:c.i.imageUrl,alt:c.l,style:ve})),l.a.createElement("div",null,l.a.createElement("h3",null,"Key Cast Members"),l.a.createElement("h4",null,c.s))))))),l.a.createElement(se,null),l.a.createElement(K,null))};var ge=function(){var e=$(),t=e.filterFilms,a=e.allFilms;return l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/movies"},l.a.createElement(B,{movies:t("movie")})),l.a.createElement(o.a,{exact:!0,path:"/series"},l.a.createElement(q,{series:t("tvSeries")})),l.a.createElement(o.a,{exact:!0,path:"/documentaries"},l.a.createElement(_,{documentaries:t("documentary")})),l.a.createElement(o.a,{exact:!0,path:"/watchlist"},l.a.createElement(Y,null)),l.a.createElement(o.a,{exact:!0,path:"/login"},l.a.createElement(V,null)),l.a.createElement(o.a,{exact:!0,path:"/signup"},l.a.createElement(X,null)),l.a.createElement(o.a,{exact:!0,path:"/:film_id"},l.a.createElement(ye,null)),l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(F,{films:a})),l.a.createElement(o.a,{path:"*"},l.a.createElement("h1",null,"404 not found"))))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,null,l.a.createElement(i.a,null,l.a.createElement(ge,null)))))}},[[21,1,2]]]);
//# sourceMappingURL=main.676778ac.chunk.js.map