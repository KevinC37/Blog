(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[5],{297:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(16),r=a(0),c=a.n(r),o=a(13),i=a.n(o);function s(e){var t=e.children,a=e.className,o=void 0===a?"root-portal":a,s=e.el,l=void 0===s?"div":s,u=c.a.useState((function(){return document.createElement(l)})),d=Object(n.a)(u,1)[0];return Object(r.useEffect)((function(){return d.classList.add(o),document.body.appendChild(d),function(){d.remove()}}),[o,d]),i.a.createPortal(t,d)}},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n={DELETE:"deleted",POST:"posted",ADD:"added"},r=5600},309:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(16),r=a(0),c=a(489),o=a(494),i=a(487),s=a(297),l=a(5);function u(e){var t=e.id,a=e.actionType,u=Object(r.useState)(10),d=Object(n.a)(u,2),b=d[0],p=d[1];return Object(r.useEffect)((function(){var e=setInterval((function(){p((function(e){return e>=100?0:e+15}))}),800);return function(){return clearInterval(e)}}),[]),Object(l.jsx)(s.a,{children:Object(l.jsx)(c.a,{sx:{marginTop:"60px"},open:!0,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(l.jsxs)(i.a,{severity:"success",sx:{width:"100%"},children:["Post with id ",t," has been ",a," successfully!",Object(l.jsx)(o.a,{variant:"determinate",color:"success",value:Number(b)})]})})},t)}},310:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(44),r=Object(n.a)([function(e){return e.post.posts}],(function(e){return e}))},453:function(e,t,a){},454:function(e,t,a){},455:function(e,t,a){"use strict";var n=a(35),r=a(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(124)).default)(c.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},456:function(e,t,a){"use strict";var n=a(35),r=a(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(124)).default)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},457:function(e,t,a){"use strict";var n=a(35),r=a(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(124)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},458:function(e,t,a){"use strict";var n=a(35),r=a(123);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(124)).default)(c.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=o},488:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(16),c=a(278),o=a.n(c),i=a(279),s=a(0),l=a(116),u=a(83),d=a(21),b=a(82),p=a(152),j=a(84),f=a(85),m=a(87),h=a(86),O=a(153),v=a(88),g=a(90),y=a(89),x=a(1),_=a(265),E=a(97),C=function(e){var t=Object(_.a)(e);return function(e,a){return t(e,Object(x.a)({defaultTheme:E.a},a))}},S=Object(u.b)(Object(d.a)(b.h,p.a,j.d,f.a,m.b,h.c,O.a,v.b,g.b,y.a)),k=C("div")(S,{name:"MuiBox"}),N=a(74),w=a(44),M=a(310),R=a(32),T=a(272),P=a(6),z=(a(7),a(8)),V=a(228),D=a(10),L=s.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.raised,c=void 0!==r&&r,o=Object(P.a)(e,["classes","className","raised"]);return s.createElement(V.a,Object(x.a)({className:Object(z.a)(a.root,n),elevation:c?8:1,ref:t},o))})),H=Object(D.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(L),I=a(271),A=s.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,c=e.focusVisibleClassName,o=Object(P.a)(e,["children","classes","className","focusVisibleClassName"]);return s.createElement(I.a,Object(x.a)({className:Object(z.a)(n.root,r),focusVisibleClassName:Object(z.a)(c,n.focusVisible),ref:t},o),a,s.createElement("span",{className:n.focusHighlight}))})),q=Object(D.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(A),B=s.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"div":r,o=Object(P.a)(e,["classes","className","component"]);return s.createElement(c,Object(x.a)({className:Object(z.a)(a.root,n),ref:t},o))})),$=Object(D.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(B),F=a(269),J=s.forwardRef((function(e,t){var a=e.action,n=e.avatar,r=e.classes,c=e.className,o=e.component,i=void 0===o?"div":o,l=e.disableTypography,u=void 0!==l&&l,d=e.subheader,b=e.subheaderTypographyProps,p=e.title,j=e.titleTypographyProps,f=Object(P.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),m=p;null==m||m.type===F.a||u||(m=s.createElement(F.a,Object(x.a)({variant:n?"body2":"h5",className:r.title,component:"span",display:"block"},j),m));var h=d;return null==h||h.type===F.a||u||(h=s.createElement(F.a,Object(x.a)({variant:n?"body2":"body1",className:r.subheader,color:"textSecondary",component:"span",display:"block"},b),h)),s.createElement(i,Object(x.a)({className:Object(z.a)(r.root,c),ref:t},f),n&&s.createElement("div",{className:r.avatar},n),s.createElement("div",{className:r.content},m,h),a&&s.createElement("div",{className:r.action},a))})),K=Object(D.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(J),U=a(267),W=a(57),Q=a(30),Z=s.forwardRef((function(e,t){var a=e.edge,n=void 0!==a&&a,r=e.children,c=e.classes,o=e.className,i=e.color,l=void 0===i?"default":i,u=e.disabled,d=void 0!==u&&u,b=e.disableFocusRipple,p=void 0!==b&&b,j=e.size,f=void 0===j?"medium":j,m=Object(P.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return s.createElement(I.a,Object(x.a)({className:Object(z.a)(c.root,o,"default"!==l&&c["color".concat(Object(Q.a)(l))],d&&c.disabled,"small"===f&&c["size".concat(Object(Q.a)(f))],{start:c.edgeStart,end:c.edgeEnd}[n]),centerRipple:!0,focusRipple:!p,disabled:d,ref:t},m),s.createElement("span",{className:c.label},r))})),G=Object(D.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(W.a)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(W.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(W.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(Z),X=a(150),Y=a.n(X),ee=a(458),te=a.n(ee),ae=a(125),ne=a(274),re=a(457),ce=a.n(re),oe=a(456),ie=a.n(oe),se=a(299),le=(a(453),a(486)),ue=a(482),de=a(455),be=a.n(de),pe=a(281),je=a(286),fe=a(287),me=a(122),he=(a(454),a(297)),Oe=a(5),ve=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ge(e){var t,a,c=Object(N.c)(),l=e.title,u=e.body,d=e.id,b=e.busEditModalState,p=Object(ae.a)(l),j=Object(ae.a)(u),f=Object(s.useState)({status:"Update post",btnColor:"primary"}),m=Object(r.a)(f,2),h=m[0],O=m[1],v=je.a().shape({title:je.c().required("Oops, the title cannot be empty"),body:je.c().required("Don't forget to add some content")}),g={resolver:Object(fe.a)(v)},y=Object(pe.d)(g),x=y.register,_=y.handleSubmit,E=y.formState.errors,C=Object(s.useCallback)(function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(n.a)(Object(n.a)({},t),{},{id:d}),e.next=4,ve(a);case 4:O({status:"Success",btnColor:"default"}),c.dispatch(Object(me.b)(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O({status:"'Error': ".concat(e.t0),btnColor:"secondary"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[d,c]),S=Object(s.useCallback)((function(e){return b(e)}),[b]);return Object(Oe.jsx)(he.a,{children:Object(Oe.jsx)("div",{className:"edit___modal___container",onClick:function(e){return e.stopPropagation()},onMouseDown:function(e){return e.stopPropagation()},children:Object(Oe.jsxs)("div",{className:"edit___modal___wrapper",children:[Object(Oe.jsxs)("div",{className:"edit___modal___header",children:[Object(Oe.jsx)("h2",{className:"edit___modal___header___title",children:"Edit post"}),Object(Oe.jsx)(ue.a,{className:"edit___modal___header___close",onClick:function(e){return S(e)},children:Object(Oe.jsx)(be.a,{})})]}),Object(Oe.jsx)("div",{className:"edit___modal___body",children:Object(Oe.jsxs)("form",{className:"edit___modal___form",onSubmit:_(C),children:[Object(Oe.jsx)(le.a,Object(n.a)(Object(n.a)({},x("title")),{},{label:"Title",variant:"outlined",InputLabelProps:{shrink:!0},defaultValue:p,margin:"normal",multiline:!0,minRows:1,maxRows:2,size:"small"})),E.title?Object(Oe.jsx)("p",{children:null===(t=E.title)||void 0===t?void 0:t.message}):null,Object(Oe.jsx)(le.a,Object(n.a)(Object(n.a)({},x("body")),{},{label:"Body",variant:"outlined",defaultValue:j,multiline:!0,minRows:4,margin:"normal",maxRows:10,size:"medium"})),E.body?Object(Oe.jsx)("p",{children:null===(a=E.body)||void 0===a?void 0:a.message}):null,Object(Oe.jsx)(ue.a,{type:"submit",className:"edit___modal___form___submit___button",color:h.btnColor,variant:"contained",children:h.status})]})})]})})})}var ye=a(309),xe=function(){var e=Object(i.a)(o.a.mark((function e(t,a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=document.getElementById("blogpost_id_".concat(n)),e.next=4,fetch("https://jsonplaceholder.typicode.com/posts/".concat(n),{method:"DELETE"});case 4:c=e.sent,!!a.getState().post.posts.filter((function(e){return e.id===n})).length?(a.dispatch(Object(me.e)(n)),r.remove()):c.ok&&r.remove();case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_e=xe;function Ee(e){var t,a=Object(N.c)(),c=e.busMenuState,o=e.menuState,i=e.id,l=Object(s.useState)(!1),u=Object(r.a)(l,2),d=u[0],b=u[1],p=Object(s.useState)(!1),j=Object(r.a)(p,2),f=j[0],m=j[1],h=Object(s.useCallback)((function(e){e.stopPropagation(),b(!d)}),[d]),O=Object(s.useCallback)((function(e){e.stopPropagation(),c()}),[c]);Object(s.useEffect)((function(){return function(){clearTimeout(t)}}));var v=Object(s.useCallback)((function(){_e(e,a),m(!0)}),[e,a]);return f&&(t=setTimeout((function(){return m(!1)}),se.b)),Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsxs)("div",{hidden:!o,children:[Object(Oe.jsx)("div",{children:Object(Oe.jsxs)("div",{className:"card___menu",children:[Object(Oe.jsxs)(ne.a,{onClick:function(e){return O(e)},onMouseDown:function(e){return h(e)},disableRipple:!0,children:[Object(Oe.jsx)(ie.a,{}),Object(Oe.jsx)("span",{children:"Edit"})]}),Object(Oe.jsxs)(ne.a,{onClick:v,disableRipple:!0,children:[Object(Oe.jsx)(ce.a,{}),Object(Oe.jsx)("span",{children:"Delete"})]})]})}),d?Object(Oe.jsx)(ge,Object(n.a)(Object(n.a)({},e),{},{editModalState:d,busEditModalState:function(e){return h(e)}})):null]}),f?Object(Oe.jsx)(ye.a,{id:i,actionType:se.a.DELETE}):null]})}function Ce(e){var t,a=0;for(t=0;t<e.length;t+=1)a=e.charCodeAt(t)+((a<<5)-a);var n="#";for(t=0;t<3;t+=1){n+="00".concat((a>>8*t&255).toString(16)).substr(-2)}return n}var Se=Y()({card:{width:"350px",height:"150px",margin:"10px",position:"relative"},image:{maxWidth:"350px",maxHeight:"350px",height:"350px"},description:{alignSelf:"end"}});var ke=function(e){var t=Se({}),a=Object(s.useMemo)((function(){return e}),[e]),c=a.user,o=a.id,i=a.title,l=Object(s.useState)(!1),u=Object(r.a)(l,2),d=u[0],b=u[1],p=Object(s.useState)(""),j=Object(r.a)(p,2),f=j[0],m=j[1];Object(s.useMemo)((function(){"undefined"!==typeof c.company?m(c.company.name):m("Terranet")}),[c.company]);var h=Object(s.useCallback)((function(e){try{var t,a=null!==(t=e.match(/[A-Z]/g))&&void 0!==t?t:"AU";return 1===a.length&&(a+=a),{children:"".concat(a[0]).concat(a[1])}}catch(n){return console.error(n)}}),[]),O=Object(s.useCallback)((function(){b(!d)}),[d]);return Object(Oe.jsx)(U.a,{children:Object(Oe.jsxs)(H,{id:"blogpost_id_".concat(o),className:t.card,children:[Object(Oe.jsx)(K,{avatar:Object(Oe.jsx)(T.a,Object(n.a)(Object(n.a)({},h(c.name)),{},{style:{backgroundColor:"".concat(Ce(String(c.name)))}})),title:c.name,subheader:f,action:Object(Oe.jsxs)(G,{id:"toggle___menu___button",onClick:O,children:[Object(Oe.jsx)(te.a,{}),Object(Oe.jsx)(Ee,Object(n.a)(Object(n.a)({},e),{},{menuState:d,busMenuState:O,hidden:"true"}),o)]})}),Object(Oe.jsx)(R.b,{to:"/blog/posts/".concat(o),children:Object(Oe.jsx)(q,{children:Object(Oe.jsx)($,{children:Object(Oe.jsx)(F.a,{gutterBottom:!0,variant:"subtitle1",component:"div",color:"textPrimary",children:Object(ae.a)(i)})})})})]})})},Ne=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Me(e){var t=e.localPosts,a=Object(l.useQueries)([{queryKey:"posts",queryFn:Ne},{queryKey:"users",queryFn:we}]),c=Object(r.a)(a,2),o=c[0],i=c[1],u=Object(s.useCallback)((function(e,t){return e.isSuccess&&t.isSuccess?e.data.forEach((function(e){t.data.forEach((function(t){t.id===e.userId&&(e.user=t||"")}))})):void 0}),[]),d=Object(s.useCallback)((function(){var e=[];return o.isSuccess&&(u(o,i),o.data.map((function(t){return e.push(t)})),t.length&&t.forEach((function(t){return e.unshift(t)}))),e}),[i,o,t,u]),b=Object(s.useMemo)((function(){return d()}),[d]);return Object(Oe.jsx)(k,{sx:{display:"flex",alignItems:"flex-start",p:1,m:1,bgcolor:"background.paper",height:124,flexWrap:"wrap"},children:o.isSuccess&&i.isSuccess?b.map((function(e){return Object(Oe.jsx)(ke,Object(n.a)({},e),e.id)})):Object(Oe.jsx)("div",{children:"Loading..."})})}var Re=Object(s.memo)(Me),Te=Object(w.b)({localPosts:M.a});t.default=Object(N.b)(Te)(Re)}}]);
//# sourceMappingURL=5.e69d1c8d.chunk.js.map