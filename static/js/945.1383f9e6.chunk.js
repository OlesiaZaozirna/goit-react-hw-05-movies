"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[945],{945:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i="MovieDetails_MovieDetailsContainer__al0RW",o="MovieDetails_Button__t-eOp",u="MovieDetails_MovieDetailsCard__rCeMN",l="MovieDetails_MovieDetailsPoster__E9EZp",v="MovieDetails_MovieDetailsInfo__xOCui",p="MovieDetails_MovieDetailsTitle__daKjp",f="MovieDetails_MovieDetailsName__N1xHu",d="MovieDetails_MovieDetailsText__1JCKr",h="MovieDetails_MovieMoreDetails__5S1Mz",m="MovieDetails_MoreInfoContainer__OpyMO",x=n(791),_=n(94),j=n(393),w=n(689),M=n(87),g=n(787),b=n(184),D=function(){var e,t,n=(0,x.useState)(null),s=(0,a.Z)(n,2),D=s[0],N=s[1],k=(0,x.useState)(!1),Z=(0,a.Z)(k,2),y=Z[0],C=Z[1],O=(0,x.useState)(null),S=(0,a.Z)(O,2),H=S[0],I=S[1],U=(0,w.UO)().movieId,E=(0,w.TH)(),R=(0,x.useRef)(null!==(e=null===(t=E.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,x.useEffect)((function(){if(U){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,(0,g.Y5)(U);case 4:t=e.sent,N(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),I(e.t0.message),_.Am.error("Whoops, something went wrong: ".concat(e.t0.message));case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[U]);var T=null!==D&&void 0!==D?D:{},V=T.title,G=T.release_date,K=T.poster_path,L=T.vote_average,W=T.overview,Y=T.genres,q=G?G.split("-")[0]:"";return(0,b.jsxs)(b.Fragment,{children:[H&&(0,b.jsx)("p",{children:H}),y&&(0,b.jsx)(j.a,{}),D&&(0,b.jsxs)("div",{className:i,children:[(0,b.jsx)(M.rU,{to:R.current,className:o,children:"Go back"}),(0,b.jsxs)("div",{className:u,children:[(0,b.jsxs)("div",{className:v,children:[(0,b.jsx)("img",{className:l,src:K?"".concat(g.bV).concat(K):"https://img.freepik.com/free-photo/collage-about-movie-time-with-people-at-cinema_23-2149946314.jpg?w=360&t=st=1706553935~exp=1706554535~hmac=7f6c48ab1c4b545dfe50e969eefe23c93a268015fc012cfff694cd7d39ef974f",alt:V}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsxs)("h2",{className:p,children:[V," (",q,")"]}),(0,b.jsxs)("h3",{className:f,children:["User score: ",Math.round(10*L),"%"]}),(0,b.jsxs)("span",{className:d,children:[(0,b.jsx)("b",{children:"Overview"}),(0,b.jsx)("br",{})," ",W]}),(0,b.jsx)("h3",{className:f,children:"Genres:"}),(0,b.jsx)("span",{className:d,children:Y.map((function(e){return e.name})).join(" ")})]})]}),(0,b.jsx)("h3",{className:f,children:"More information"}),(0,b.jsxs)("div",{className:m,children:[(0,b.jsx)(M.OL,{to:"/movies/".concat(U,"/cast"),className:o,children:"Cast"}),(0,b.jsx)(M.OL,{to:"/movies/".concat(U,"/reviews"),className:o,children:"Reviews"})]}),(0,b.jsx)("div",{children:(0,b.jsx)(x.Suspense,{fallback:(0,b.jsx)(j.a,{}),children:(0,b.jsx)(w.j3,{})})})]})]})]})}},787:function(e,t,n){n.d(t,{HI:function(){return f},Hx:function(){return m},Y5:function(){return d},bV:function(){return l},uV:function(){return h},wr:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(294),i="https://api.themoviedb.org/3",o="".concat(i,"/trending/movie/day"),u="".concat(i,"/search/movie"),l="https://image.tmdb.org/t/p/w500",v={params:{api_key:"259918b03cdd3627de7453af9144ee1e",language:"en-US"}},p=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o),v);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"?query=").concat(t),v);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t),v);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/credits"),v);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),v);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=945.1383f9e6.chunk.js.map