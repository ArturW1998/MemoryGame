(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{24:function(e,t,n){e.exports={table:"Results_table__1LfOJ",head:"Results_head__lIcIQ",row:"Results_row__3NOw7",item:"Results_item__3t02t",empty:"Results_empty__1Njqh"}},26:function(e,t,n){e.exports={container:"Card_container__3wAV0",card:"Card_card__3ohV0",front:"Card_front__3Gs6P",back:"Card_back__1KXLK",disabled:"Card_disabled__11A2D"}},27:function(e,t,n){e.exports={container:"Error_container__1r47t",content:"Error_content__31cqs",subheading:"Error_subheading__2Qvh5",heading:"Error_heading__1-rmY",description:"Error_description__TPpj4",link:"Error_link__36WIg"}},36:function(e,t,n){e.exports={form:"Player_form__2NcyP",label:"Player_label__UaXzd",error:"Player_error__2AiTP",input:"Player_input__1GF31"}},48:function(e,t,n){e.exports={row:"Game_row__21yo6",heading:"Game_heading__C5H_m"}},49:function(e,t,n){e.exports={container:"Main_container__RziVg",content:"Main_content__CpvgR"}},50:function(e,t,n){e.exports={container:"Preloader_container__3gbrS",heading:"Preloader_heading__372rm",loading:"Preloader_loading__1bUCY"}},56:function(e,t,n){e.exports={button:"Button_button__31RAP"}},57:function(e,t,n){e.exports={container:"Cards_container__2oDit"}},58:function(e,t,n){e.exports={container:"Home_container__FweIA"}},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"board",(function(){return k})),n.d(r,"player",(function(){return A})),n.d(r,"results",(function(){return M}));var a=n(1),c=n(28),i=n(9),o=n(54),s=n(21),l=n(25),d={IS_PROD:!0,IS_DEV:!1},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},f=n(22),p=n(55),h=n.n(p),m=n(13),O=n(3),v=Object(f.b)({name:"board",initialState:{isInitialFlipped:!0,board:[]},reducers:{setIsInitialFlipped:function(e,t){var n=t.payload;return Object(O.a)(Object(O.a)({},e),{},{isInitialFlipped:n})},setBoard:function(e,t){var n=t.payload;return Object(O.a)(Object(O.a)({},e),{},{board:n})}}}),_=v.reducer,g=v.actions,x={setIsInitialFlipped:g.setIsInitialFlipped,setBoard:g.setBoard},y=function(e){return e.board.isInitialFlipped},w=function(e){return e.board.board},N=function(e){return 0===e.board.board.filter((function(e){return"string"===typeof e})).length},k=_,P=Object(f.b)({name:"player",initialState:{nickname:"",points:0},reducers:{addPoints:function(e,t){var n=t.payload;return Object(O.a)(Object(O.a)({},e),{},{points:e.points+n})},clearPoints:function(e){return Object(O.a)(Object(O.a)({},e),{},{points:0})},setNickname:function(e,t){var n=t.payload;return Object(O.a)(Object(O.a)({},e),{},{nickname:n})}}}),S=P.reducer,F=P.actions,C={addPoints:F.addPoints,setNickname:F.setNickname,setBoard:F.setBoard,clearPoints:F.clearPoints},E=function(e){return e.player.nickname},I=function(e){return e.player.points},A=S,D=n(16),T=Object(f.b)({name:"results",initialState:{results:[]},reducers:{savePlayer:function(e,t){var n=t.payload;return Object(O.a)(Object(O.a)({},e),{},{results:[].concat(Object(D.a)(e.results),[n])})}}}),B=T.reducer,R={savePlayer:T.actions.savePlayer},z=function(e){return e.results.results.slice().sort((function(e,t){var n=e.points;return t.points-n}))},M=B,W=Object(f.a)({reducer:Object(s.g)({key:"store",storage:h.a},Object(m.b)(r)),middleware:Object(f.c)({serializableCheck:{ignoredActions:[s.a,s.f,s.b,s.c,s.d,s.e]}}),devTools:d.IS_DEV}),L=n(7),G=n(20),V=n(56),U=n.n(V),X=n(2),J=function(e){var t=e.children,n=e.className,r=Object(G.a)(e,["children","className"]),a=r.to?l.b:"button";return Object(X.jsx)(a,Object(O.a)(Object(O.a)({},r),{},{className:n||U.a.button,children:t}))};J.defaultProps={children:"Simple title",className:""};var q=J,H=n(24),K=n.n(H),Q=function(){var e=z,t=Object(i.c)(e);return Object(X.jsxs)("div",{children:[Object(X.jsxs)("table",{className:K.a.table,children:[Object(X.jsx)("thead",{children:Object(X.jsx)("tr",{children:["Name","Points"].map((function(e){return Object(X.jsx)("th",{className:K.a.head,scope:"col",children:e},e)}))})}),Object(X.jsx)("tbody",{children:t.length?t.map((function(e,t){var n=e.nickname,r=e.points;return Object(X.jsxs)("tr",{className:K.a.row,children:[Object(X.jsx)("td",{className:K.a.item,children:n}),Object(X.jsx)("td",{className:K.a.item,children:r})]},"".concat(n,"_").concat(t))})):Object(X.jsx)("div",{className:"".concat(K.a.row," ").concat(K.a.empty),children:"No data"})})]}),Object(X.jsx)(q,{to:"/",children:"Reset game"})]})},Y=function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)("h1",{children:"Leaderboard"}),Object(X.jsx)(Q,{})]})},$=n(8),Z=["\ud83d\ude00","\ud83e\udd76","\ud83e\udd73","\ud83e\udd21","\ud83d\udc7b","\ud83e\udd16","\ud83d\udc9a","\ud83d\udca3","\ud83d\udca4","\ud83d\udc4b","\ud83d\udc85","\ud83e\udde0","\ud83d\udc40","\ud83d\ude4b\u200d\u2640\ufe0f","\ud83d\udc36","\ud83e\udd84","\ud83d\udc37","\ud83e\udd86","\ud83d\udc1b","\ud83c\udf4e","\ud83c\udf49","\ud83c\udf46","\ud83c\udf7f","\ud83c\udf6a","\ud83c\udf6d","\ud83c\udf7e","\ud83c\udfd6","\ud83d\ude95","\ud83d\ude80","\u2b50","\ud83c\udf81"],ee=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}},te=function(e){return"object"===typeof e},ne=function(e){var t=+e;if(Number.isNaN(t)||t<=0)throw Error("Board size must be number from 0 to ".concat(Z.length,"."));if(t>Z.length)throw Error("Board size cannot be greater than ".concat(Z.length,"."));var n=Object(D.a)(Z);ee(n);var r=n.slice(0,e),a=[].concat(Object(D.a)(r),Object(D.a)(r));return ee(a),a},re=n(41),ae=n(26),ce=n.n(ae),ie=function(e){var t=e.value,n=e.isFlipped,r=e.selectCard,c=Object(a.useMemo)((function(){return!!te(t)||n}),[n,t]),i=Object(re.useSpring)({opacity:c?1:0,transform:"perspective(600px) rotateX(".concat(c?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),o=i.transform,s=i.opacity,l=Object(a.useMemo)((function(){return te(t)?t.value:t}),[t]);return Object(X.jsxs)("div",{className:"".concat(ce.a.container," ").concat(t.disabled&&ce.a.disabled),onClick:r,children:[Object(X.jsx)(re.animated.div,{className:"".concat(ce.a.card," ").concat(ce.a.front),style:{opacity:s.to((function(e){return 1-e})),transform:o}}),Object(X.jsx)(re.animated.div,{className:"".concat(ce.a.card," ").concat(ce.a.back),style:{opacity:s,transform:o.to((function(e){return"".concat(e," rotateX(180deg)")}))},children:l})]})};ie.defaultProps={value:"",isFlipped:!1,selectCard:function(){}};var oe=ie,se=n(57),le=n.n(se),de=function(e){var t=e.cards,n=e.initialFlipped,r=e.selected,a=r.first,c=r.second,i=e.boardSize,o=e.selectCard,s={gridTemplate:"repeat(".concat(i,", 1fr) / repeat(").concat(i,", 1fr)"),height:"calc(".concat(i,"*100px)")};return Object(X.jsx)("div",{className:le.a.container,style:s,children:t.map((function(e,t){var r=n||a.index===t||c.index===t;return Object(X.jsx)(oe,{isDisabled:e.disabled,isFlipped:r,selectCard:function(){return o(e,t)},value:e},"".concat(e,"_").concat(t))}))})};de.defaultProps={cards:[],initialFlipped:!1,boardSize:0,selectCard:function(){}};var ue=de,be=function(e){var t=e.size,n=e.config,r=w,c=y,o=N,s=x.setBoard,l=x.setIsInitialFlipped,d=R.savePlayer,u=C.addPoints,b=C.clearPoints,j=E,f=I,p=Object(i.c)(r),h=Object(i.c)(c),m=Object(i.c)(o),O=Object(i.c)(j),v=Object(i.c)(f),_=Object(i.b)(),g=Object(L.f)(),k=Object(a.useState)((function(){return m?ne(t):p})),P=Object($.a)(k,2),S=P[0],F=P[1],A=Object(a.useState)({first:{card:"",index:-1},second:{card:"",index:-1}}),D=Object($.a)(A,2),T=D[0],B=D[1],z=Object(a.useCallback)((function(){B((function(e){var t={card:"",index:-1};e.first=t,e.second=t}))}),[B]);return Object(a.useEffect)((function(){var e=T.first,t=T.second;if(-1!==e.index&&-1!==t.index){if(e.card!==t.card){_(u(n.wrongAnswerPoints));var r=setTimeout(z,n.wrongAnswerFlipDelay);return function(){clearTimeout(r)}}var a=function(e){return{value:e.card,disabled:!0}};F((function(n){n[e.index]=a(e),n[t.index]=a(t)})),_(u(n.correctAnswerPoints)),z()}}),[_,n,F,B,z,T,u]),Object(a.useEffect)((function(){if(m&&v>0)return _(d({nickname:O,points:v})),_(b()),_(s(S)),_(l(!0)),void g.push("/leaderboards");_(s(S))}),[S,_,g,m,v,O,s,l,d,b]),Object(a.useEffect)((function(){var e=setTimeout((function(){_(l(!1))}),n.initialDelayBeforeFlip);return function(){clearTimeout(e)}}),[_,n,l]),Object(X.jsx)(ue,{boardSize:t/2,cards:S,initialFlipped:h,selectCard:function(e,t){var n=function(n){return B((function(r){r[n].card=e,r[n].index=t}))},r=function(e){return-1===e.index||e.index===t},a=T.first,c=T.second;r(a)?n("first"):r(c)&&n("second")},selected:T})};be.defaultProps={config:{wrongAnswerPoints:-100,correctAnswerPoints:200,initialDelayBeforeFlip:2e3,wrongAnswerFlipDelay:1e3}};var je=be,fe=n(48),pe=n.n(fe),he=function(){var e=E,t=I,n=Object(i.c)(e),r=Object(i.c)(t);return Object(X.jsxs)("div",{className:pe.a.row,children:[Object(X.jsxs)("h1",{className:pe.a.heading,children:[Object(X.jsxs)("span",{children:["Player: ",n]})," ",Object(X.jsx)("span",{children:r})]}),Object(X.jsx)(je,{size:8})]})},me=n(36),Oe=n.n(me),ve=function(){var e=E,t=C.setNickname,n=Object(i.c)(e),r=Object(a.useState)(n),c=Object($.a)(r,2),o=c[0],s=c[1],l=Object(a.useState)(!1),d=Object($.a)(l,2),u=d[0],b=d[1],j=Object(a.useState)(""),f=Object($.a)(j,2),p=f[0],h=f[1],m=Object(L.f)(),O=Object(i.b)(),v=function(e){b(!0);var t=e.length<3,n=e.length>32;return t||n?(h(t?"Nickname is too short.":"Nickname is too long."),!1):(h(!1),!0)};return Object(X.jsxs)("form",{className:Oe.a.form,onSubmit:function(e){e.preventDefault(),v(o)&&(O(t(o)),m.push("/game"))},children:[Object(X.jsx)("label",{className:Oe.a.label,htmlFor:"nickname-input",children:"Nickname"}),Object(X.jsx)("input",{className:Oe.a.input,id:"nickname-input",name:"nickname",onChange:function(e){var t=e.target.value;s(t),v(t)},value:o}),Object(X.jsx)("div",{className:Oe.a.error,children:u&&p}),Object(X.jsx)(q,{type:"submit",children:"Start game"})]})},_e=n(58),ge=n.n(_e),xe=function(){return Object(X.jsxs)("div",{className:ge.a.container,children:[Object(X.jsx)("h1",{children:"Memory game"}),Object(X.jsx)(ve,{})]})},ye=n(27),we=n.n(ye),Ne=function(e){var t=e.title,n=e.description,r=e.subTitle;return Object(X.jsx)("div",{className:we.a.container,children:Object(X.jsxs)("div",{className:we.a.content,children:[r&&Object(X.jsx)("h2",{className:we.a.subheading,children:r}),Object(X.jsx)("h1",{className:we.a.heading,children:t}),Object(X.jsx)("p",{className:we.a.description,children:n}),Object(X.jsx)(q,{className:we.a.link,to:"/",children:"Go back home"})]})})};Ne.defaultProps={title:"404",description:"We can't find the page you're looking for.",subTitle:""};var ke=Ne,Pe=[{id:"leaderboards",path:"/leaderboards",component:Y},{id:"game",path:"/game",component:he},{id:"home",path:"/",exact:!0,component:xe},{id:"error",component:ke,props:{subTitle:"Oops! Nothing was found."}}],Se=n(49),Fe=n.n(Se),Ce=function(e){var t=e.children;return Object(X.jsx)("div",{className:Fe.a.container,children:Object(X.jsx)("div",{className:Fe.a.content,children:t})})},Ee=function(){return Object(X.jsx)(Ce,{children:Object(X.jsx)(L.c,{children:Pe.map((function(e){var t=e.id,n=e.path,r=e.exact,a=e.component,c=e.props;return Object(X.jsx)(L.a,{exact:r,path:n,children:Object(X.jsx)(a,Object(O.a)({},c))},t)}))})})},Ie=n(50),Ae=n.n(Ie),De=function(){return Object(X.jsx)("div",{className:Ae.a.container,children:Object(X.jsx)("h1",{className:Ae.a.heading,children:"Loading..."})})},Te=n(5),Be=n(10),Re=n(11),ze=n(12),Me=function(e){Object(Re.a)(n,e);var t=Object(ze.a)(n);function n(){var e;Object(Te.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(Be.a)(n,[{key:"render",value:function(){var e=this.state.hasError,t=this.props,n=t.children,r=t.fallback;return e?r:n}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(a.Component),We=(n(72),Object(s.h)(W)),Le=Object(X.jsx)(De,{}),Ge=Object(X.jsx)(ke,{description:"Something went wrong!",title:"Error"});Object(c.render)(Object(X.jsx)(a.StrictMode,{children:Object(X.jsx)(i.a,{store:W,children:Object(X.jsx)(o.a,{loading:Le,persistor:We,children:Object(X.jsx)(l.a,{children:Object(X.jsx)(Me,{fallback:Ge,children:Object(X.jsx)(Ee,{})})})})})}),document.getElementById("root")),function(e){if(d.IS_PROD&&"serviceWorker"in navigator){if(new URL("/MemoryGame",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/MemoryGame","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):b(t,e)}))}}(),d.IS_DEV&&j(console.log)}},[[73,1,2]]]);
//# sourceMappingURL=main.0572ee4b.chunk.js.map