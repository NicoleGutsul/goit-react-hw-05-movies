"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[503],{587:function(e,n,t){t.d(n,{G:function(){return i}});var r=t(739),c=t(731),o=t(184),i=function(e){var n=e.items,t=(0,r.TH)();return(0,o.jsx)("ul",{children:n.map((function(e){var n=e.title,r=e.id;return n&&(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:n})},r)}))})}},503:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(885),c=t(587),o=t(184),i=function(e){var n=e.onSearch;return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.query.value;""!==t.trim()?(n(t),e.currentTarget.reset()):alert("Please enter a valid name")},children:[(0,o.jsx)("input",{type:"text",name:"query"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},a=t(791),u=t(731),s=t(47),f=function(){var e,n=(0,a.useState)([]),t=(0,r.Z)(n,2),f=t[0],h=t[1],l=(0,u.lr)(),v=(0,r.Z)(l,2),d=v[0],m=v[1],g=null!==(e=d.get("query"))&&void 0!==e?e:"";if((0,a.useEffect)((function(){g&&s.Z.fetchMovies(g).then(h)}),[g]),!f)return null;return(0,o.jsxs)("div",{children:[(0,o.jsx)(i,{onSearch:function(e){m(""!==e?{query:e}:{})}}),f.results&&(0,o.jsx)(c.G,{items:f.results})]})}},47:function(e,n){var t="e900ddd99edc3affd146f1905e638fd1",r="https://api.themoviedb.org/3";var c={fetchMovies:function(e){return fetch("".concat(r,"/search/movie?api_key=").concat(t,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchTrending:function(){return fetch("".concat(r,"/trending/all/day?api_key=").concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchMovieDetalis:function(e){return fetch("".concat(r,"/movie/").concat(e,"?api_key=").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchCast:function(e){return fetch("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))},fetchReviews:function(e){return fetch("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(t,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("The ".concat(t," is wrong")))}))}};n.Z=c}}]);
//# sourceMappingURL=503.8db07fe7.chunk.js.map