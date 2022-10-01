"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[141],{141:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,c=t(885),i=t(791),o=t(731),a=t(739),s=t(457),l=t(128),h=t(168),u=(0,t(444).ZP)(o.rU)(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: orangered;\n  }\n"]))),d=t(184),f=function(e){var n=e.to,t=e.children;return(0,d.jsxs)(u,{to:n,children:[(0,d.jsx)(l.jTe,{size:"24"}),t]})},p=t(47),x=function(){var e,n,t=(0,a.UO)().movieId,r=(0,i.useState)(null),l=(0,c.Z)(r,2),h=l[0],u=l[1],x=(0,a.TH)();if((0,i.useEffect)((function(){p.Z.fetchMovieDetalis(t).then(u)}),[t]),!h)return null;var j=h.backdrop_path,v=h.original_title,g=h.popularity,m=h.overview,w=h.genres,k=null!==(e=null===x||void 0===x||null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,d.jsxs)("div",{children:[(0,d.jsx)(f,{to:k,children:"Go back"}),(0,d.jsxs)(s.x,{display:"flex",as:"article",children:[(0,d.jsx)(s.x,{width:"400px",children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(j),alt:v})}),(0,d.jsxs)(s.x,{maxWidth:"50%",ml:"10px",children:[(0,d.jsx)("h2",{children:v}),(0,d.jsxs)("p",{children:["User score: ",g,"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:m}),(0,d.jsx)("h2",{children:"Genres"}),w.map((function(e){var n=e.id,t=e.name;return(0,d.jsx)("p",{children:t},n)}))]})]}),(0,d.jsxs)(s.x,{as:"ul",p:"10px",children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",state:{from:k},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",state:{from:k},children:"Reviews"})})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading page..."}),children:(0,d.jsx)(a.j3,{})})]})}},47:function(e,n){var t="e900ddd99edc3affd146f1905e638fd1",r="https://api.themoviedb.org/3";var c={fetchMovies:function(e){return fetch("".concat(r,"/search/movie?api_key=").concat(t,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchTrending:function(){return fetch("".concat(r,"/trending/all/day?api_key=").concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchMovieDetalis:function(e){return fetch("".concat(r,"/movie/").concat(e,"?api_key=").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchCast:function(e){return fetch("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchReviews:function(e){return fetch("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(t,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))}};n.Z=c}}]);
//# sourceMappingURL=141.e5d411f7.chunk.js.map