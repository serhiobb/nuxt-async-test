(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,e,n){var content=n(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("48da9a14",content,!0,{sourceMap:!1})},178:function(t,e,n){"use strict";var o=n(148);n.n(o).a},179:function(t,e,n){(t.exports=n(66)(!1)).push([t.i,".container[data-v-4e99766c]{width:70%;margin:auto;text-align:center;padding-top:100px}ul[data-v-4e99766c]{list-style-type:none;padding:0}ul li[data-v-4e99766c]{border:1px solid #ddd;padding:20px;text-align:left}ul li a[data-v-4e99766c]{color:grey}p[data-v-4e99766c]{font-size:20px}a[data-v-4e99766c]{color:#41b883}",""])},189:function(t,e,n){"use strict";n.r(e);var o=n(146),r=n.n(o),c={asyncData:function(t){t.req,t.params;return r.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){var e,n=[];return e=t.data,r.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){for(var i in t.data)n.push(t.data[i]);return console.log(n,e),{posts:e,users:n}}))}))},head:{title:"List of posts"}},l=(n(178),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Blog")]),t._v(" "),n("ul",t._l(t.posts,(function(e,o){return n("li",{key:o},[n("NuxtLink",{attrs:{to:{name:"posts-id",params:{id:e.id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0),t._v(" "),n("ul",t._l(t.users,(function(e,o){return n("li",{key:o},[n("NuxtLink",{attrs:{to:{name:"users-id",params:{id:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),0),t._v(" "),n("p",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n      Back to home page\n    ")])],1)])}),[],!1,null,"4e99766c",null);e.default=component.exports}}]);