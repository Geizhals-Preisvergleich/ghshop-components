(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2],{208:function(t,e,l){},209:function(t,e,l){"use strict";l(208)},211:function(t,e,l){"use strict";l.r(e);var o={props:{text:String,active:{type:Boolean,default:!1}},methods:{toggleOnChange:function(){this.$emit("update:active",!this.active)}}},n=(l(209),l(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"inline-block border border-gray-300 rounded-lg p-4 mt-8"},[l("div",{staticClass:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[l("input",{staticClass:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer",attrs:{type:"checkbox",name:"toggle",id:"toggle"},domProps:{checked:t.active},on:{change:t.toggleOnChange}}),t._v(" "),l("label",{staticClass:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer",attrs:{for:"toggle"}})]),t._v(" "),l("label",{staticClass:"text-xs text-gray-700",attrs:{for:"toggle"}},[t._v(t._s(t.text||"Toggle me"))])])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,l){"use strict";l.r(e);var o={layout:"components",data:function(){return{title:"Video",toggleText:"Video links/rechts",toggleActive:!1}},updated:function(){this.$nuxt.$emit("update:textarea")},mounted:function(){this.$store.commit("setTitle",this.title)}},n=l(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{staticClass:"lg:py-6 lg:flex mx-10 lg:justify-start justify-center",class:{"lg:justify-end":t.toggleActive}},[t._m(0)]),t._v(" "),l("div",[l("Toggle",{attrs:{text:t.toggleText,active:t.toggleActive},on:{"update:active":function(e){t.toggleActive=e}}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lg:flex"},[e("div",{staticClass:"lg:w-1/3 lg:order-1"},[e("video",{attrs:{width:"660",height:"415",controls:""}},[e("source",{attrs:{src:"https://temp.media/video/?height=215&width=460&length=10&text=geizhalsurcrazy",type:"video/mp4"}})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Toggle:l(211).default})}}]);