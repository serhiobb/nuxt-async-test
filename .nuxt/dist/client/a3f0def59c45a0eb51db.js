(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("fc73b5a6",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";var r=n(149);n.n(r).a},181:function(t,e,n){(t.exports=n(66)(!1)).push([t.i,".container[data-v-26ae4fa0]{width:70%;margin:auto;text-align:center;padding-top:100px}ul[data-v-26ae4fa0]{list-style-type:none;padding:0}ul li[data-v-26ae4fa0]{border:1px solid #ddd;padding:20px;text-align:left}ul li a[data-v-26ae4fa0]{color:grey}p[data-v-26ae4fa0]{font-size:20px}a[data-v-26ae4fa0]{color:#41b883}",""])},188:function(t,e,n){"use strict";n.r(e);n(35);var r,o=n(5),c=n(146),l=n.n(c),d={asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,l.a.get("https://jsonplaceholder.typicode.com/posts/".concat(n.id));case 3:return r=t.sent,data=r.data,t.abrupt("return",{post:data});case 6:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){return{title:this.post.title}}},f=(n(180),n(18)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("pre",[t._v(t._s(t.post.body))]),t._v(" "),n("pre",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[n("NuxtLink",{attrs:{to:"/posts"}},[t._v("\n      Back to the list\n    ")])],1)])}),[],!1,null,"26ae4fa0",null);e.default=component.exports}}]);