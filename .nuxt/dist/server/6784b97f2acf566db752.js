exports.ids=[5],exports.modules={20:function(t,e,n){var content=n(27);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(8).default;t.exports.__inject__=function(t){o("48da9a14",content,!0,t)}},26:function(t,e,n){"use strict";n.r(e);var o=n(20),r=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,(function(){return o[t]}))}(d);e.default=r.a},27:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".container[data-v-4e99766c]{width:70%;margin:auto;text-align:center;padding-top:100px}ul[data-v-4e99766c]{list-style-type:none;padding:0}ul li[data-v-4e99766c]{border:1px solid #ddd;padding:20px;text-align:left}ul li a[data-v-4e99766c]{color:grey}p[data-v-4e99766c]{font-size:20px}a[data-v-4e99766c]{color:#41b883}",""])},36:function(t,e,n){"use strict";n.r(e);var o=n(18),r=n.n(o),d={asyncData:({req:t,params:e})=>r.a.get("https://jsonplaceholder.typicode.com/posts").then(t=>{var e,n=[];return e=t.data,r.a.get("https://jsonplaceholder.typicode.com/users").then(t=>{for(var i in t.data)n.push(t.data[i]);return console.log(n,e),{posts:e,users:n}})}),head:{title:"List of posts"}},c=n(1);var component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._ssrNode("<h1 data-v-4e99766c>Blog</h1> "),t._ssrNode("<ul data-v-4e99766c>","</ul>",t._l(t.posts,(function(e,o){return t._ssrNode("<li data-v-4e99766c>","</li>",[n("NuxtLink",{attrs:{to:{name:"posts-id",params:{id:e.id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0),t._ssrNode(" "),t._ssrNode("<ul data-v-4e99766c>","</ul>",t._l(t.users,(function(e,o){return t._ssrNode("<li data-v-4e99766c>","</li>",[n("NuxtLink",{attrs:{to:{name:"users-id",params:{id:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),0),t._ssrNode(" "),t._ssrNode("<p data-v-4e99766c>","</p>",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n      Back to home page\n    ")])],1)],2)}),[],!1,(function(t){var e=n(26);e.__inject__&&e.__inject__(t)}),"4e99766c","773f1fea");e.default=component.exports}};