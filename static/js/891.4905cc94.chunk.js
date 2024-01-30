"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{891:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),c=r(757),o=r.n(c),u=r(791),s=r(87),i=r(787),f=r(94),p=r(955),m=r(393),v="SearchForm_SearchForm__jbIQn",l="SearchForm_SearchFormInput__jntvc",h="SearchFormButton_SearchFormButton__HfsMN",d=r(184),_=function(e){var t=e.btnName;e.onClick;return(0,d.jsx)("button",{type:"submit",className:h,children:t})},x=function(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,a.Z)(r,2),c=n[0],o=n[1];return(0,d.jsxs)("form",{className:v,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return f.Am.warning("Oops, no value...");t(c),o("")},children:[(0,d.jsx)("input",{className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"What a you looking for?",required:!0,value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}}),(0,d.jsx)(_,{btnName:"Search",type:"submit",children:"Search"})]})},g="Movies_FormContainer__IcsrY",b=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=r.get("query"),l=(0,u.useState)([]),h=(0,a.Z)(l,2),_=h[0],b=h[1],w=(0,u.useState)(!1),j=(0,a.Z)(w,2),k=j[0],C=j[1],S=(0,u.useState)(null),Z=(0,a.Z)(S,2),M=Z[0],y=Z[1];return(0,u.useEffect)((function(){if(v){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,(0,i.HI)(v);case 4:if(t=e.sent,0!==(r=t.results).length&&r){e.next=8;break}return e.abrupt("return",f.Am.error("Sorry movies not found..."));case 8:b(r),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),y(e.t0.message),f.Am.error(e.t0.message);case 15:return e.prev=15,C(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]),(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{onSubmit:function(e){c({query:e})},className:g}),M&&(0,d.jsxs)("p",{className:"errorMessage",children:["Whoops, something went wrong: ",M]}),k&&(0,d.jsx)(m.a,{}),_.length>0&&(0,d.jsx)(p.Z,{movies:_})]})}},787:function(e,t,r){r.d(t,{HI:function(){return v},Hx:function(){return d},Y5:function(){return l},bV:function(){return f},uV:function(){return h},wr:function(){return m}});var n=r(861),a=r(757),c=r.n(a),o=r(294),u="https://api.themoviedb.org/3",s="".concat(u,"/trending/movie/day"),i="".concat(u,"/search/movie"),f="https://image.tmdb.org/t/p/w500",p={params:{api_key:"259918b03cdd3627de7453af9144ee1e",language:"en-US"}},m=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s),p);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"?query=").concat(t),p);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t),p);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/credits"),p);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews"),p);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},955:function(e,t,r){r.d(t,{Z:function(){return h}});var n="MovieList_MovieList__92Iqv",a="MovieCard_MovieList__q0The",c="MovieCard_MovieCard__DStH+",o="MovieCard_MovieCardImg__7++oK",u="MovieCard_MovieCardInfo__aeo1P",s="MovieCard_MovieCardTitle__K+r1Y",i="MovieCard_MovieCardLink__VWPCT",f=(r(791),r(689)),p=r(87),m=r(787),v=r(184),l=function(e){var t=e.poster_path,r=e.title,n=e.id,l=(0,f.TH)();return(0,v.jsx)("ul",{className:a,children:(0,v.jsx)("li",{className:c,children:(0,v.jsxs)(p.rU,{state:{from:l},to:"/movies/".concat(n),className:i,children:[(0,v.jsx)("img",{src:t?"".concat(m.bV).concat(t):"https://img.freepik.com/free-photo/collage-about-movie-time-with-people-at-cinema_23-2149946314.jpg?w=360&t=st=1706553935~exp=1706554535~hmac=7f6c48ab1c4b545dfe50e969eefe23c93a268015fc012cfff694cd7d39ef974f",alt:r,className:o}),(0,v.jsx)("div",{className:u,children:(0,v.jsx)("h3",{className:s,children:r})})]})})})},h=function(e){var t=e.movies;return(0,v.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,r=e.poster_path,n=e.title;return(0,v.jsx)(l,{poster_path:r,title:n,id:t},t)}))})}}}]);
//# sourceMappingURL=891.4905cc94.chunk.js.map