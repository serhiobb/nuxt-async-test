exports.ids=[3],exports.modules={19:function(t,e,n){var content=n(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(8).default;t.exports.__inject__=function(t){r("30336980",content,!0,t)}},24:function(t,e,n){"use strict";n.r(e);var r=n(19),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},25:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".container[data-v-cc23b26a]{width:70%;margin:auto;text-align:center;padding-top:100px}ul[data-v-cc23b26a]{list-style-type:none;padding:0}ul li[data-v-cc23b26a]{border:1px solid #ddd;padding:20px;text-align:left}ul li a[data-v-cc23b26a]{color:grey}p[data-v-cc23b26a]{font-size:20px}a[data-v-cc23b26a]{color:#41b883}",""])},37:function(t,e,n){"use strict";n.r(e);var r=n(18),o=n.n(r),c={asyncData:({req:t,params:e})=>o.a.get("https://jsonplaceholder.typicode.com/posts").then(t=>{var e,n=[];return e=t.data,o.a.get("https://jsonplaceholder.typicode.com/users").then(t=>{for(var i in t.data)n.push(t.data[i]);return console.log(n,e),{posts:e,users:n}})}),head:{title:"List of posts"}},d=n(1);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._ssrNode("<h1 data-v-cc23b26a>News</h1> "),t._ssrNode("<ul data-v-cc23b26a>","</ul>",t._l(t.posts,(function(e,r){return t._ssrNode("<li data-v-cc23b26a>","</li>",[n("NuxtLink",{attrs:{to:{name:"posts-id",params:{id:e.id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0),t._ssrNode(" <h1 data-v-cc23b26a>Users</h1> "),t._ssrNode("<ul data-v-cc23b26a>","</ul>",t._l(t.users,(function(e,r){return t._ssrNode("<li data-v-cc23b26a>","</li>",[n("NuxtLink",{attrs:{to:{name:"users-id",params:{id:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),0),t._ssrNode(" "),t._ssrNode("<p data-v-cc23b26a>","</p>",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n      Back to home page\n    ")])],1)],2)}),[],!1,(function(t){var e=n(24);e.__inject__&&e.__inject__(t)}),"cc23b26a","d3a447d4");e.default=component.exports}};