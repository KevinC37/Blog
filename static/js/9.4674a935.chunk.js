(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[9],{407:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(47),c=Object(r.a)([function(e){return e.post.posts}],(function(e){return e}))},434:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n(14),a=n.n(c),s=n(32),u=n(0),i=n(120),o=n(407),d=n(47),j=n(74),b=n(137);var p=n(152),h=(n(197),n(2));var l=Object(d.b)({localPosts:o.a});t.default=Object(j.b)(l)((function(e){var t,n=e.localPosts,c=window.location.pathname.match(/\d+/)[0],o=n.filter((function(e){return Number(e.id)===Number(c)})).shift(),d=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(c));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=Object(i.useQueries)([{queryKey:"post",queryFn:d,enabled:"undefined"===String(typeof o)},{queryKey:"author",queryFn:j,enabled:"undefined"===String(typeof o)}]),f=Object(r.a)(l,2),O=f[0],x=f[1],v=Object(u.useCallback)((function(e){return Object(b.a)(e)}),[]);return Object(h.jsx)("div",{children:o?Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:v(o.title)}),Object(h.jsxs)("p",{children:["Author: ",o.user.name]}),Object(h.jsx)("p",{children:v(o.body)})]}):O.isFetching?Object(h.jsx)("div",{children:"Loading..."}):0===(t=O.data,Object.values(t).length)?Object(h.jsx)(p.a,{}):O.data&&x.data?Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:v(O.data.title)}),Object(h.jsxs)("p",{children:["Author:"," ",x.data.map((function(e){return e.id===O.data.userId?e.name:""}))]}),Object(h.jsx)("p",{children:v(O.data.body)})]}):Object(h.jsx)("div",{children:"Loading..."})})}))}}]);
//# sourceMappingURL=9.4674a935.chunk.js.map