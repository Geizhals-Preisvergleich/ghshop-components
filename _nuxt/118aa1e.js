(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{208:function(t,e,l){},209:function(t,e,l){"use strict";l(208)},211:function(t,e,l){"use strict";l.r(e);var o={props:{text:String,active:{type:Boolean,default:!1}},methods:{toggleOnChange:function(){this.$emit("update:active",!this.active)}}},n=(l(209),l(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"inline-block border border-gray-300 rounded-lg p-4 mt-8"},[l("div",{staticClass:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[l("input",{staticClass:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer",attrs:{type:"checkbox",name:"toggle",id:"toggle"},domProps:{checked:t.active},on:{change:t.toggleOnChange}}),t._v(" "),l("label",{staticClass:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer",attrs:{for:"toggle"}})]),t._v(" "),l("label",{staticClass:"text-xs text-gray-700",attrs:{for:"toggle"}},[t._v(t._s(t.text||"Toggle me"))])])}),[],!1,null,null,null);e.default=component.exports},234:function(t,e,l){"use strict";l.r(e);var o={layout:"components",data:function(){return{title:"Google Maps",toggleText:"Map links/rechts",toggleActive:!1}},updated:function(){this.$nuxt.$emit("update:textarea")},mounted:function(){this.$store.commit("setTitle",this.title)}},n=l(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{staticClass:"lg:py-6 lg:flex mx-10 lg:justify-start justify-center",class:{"lg:justify-end":t.toggleActive}},[t._m(0)]),t._v(" "),l("div",[l("Toggle",{attrs:{text:t.toggleText,active:t.toggleActive},on:{"update:active":function(e){t.toggleActive=e}}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lg:flex"},[e("div",{staticClass:"lg:w-1/2 lg:order-1"},[e("a",{attrs:{href:"#"}},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.1379452847987!2d16.391184215771464!3d48.22321827923044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07a45044f995%3A0xaf433369d8a9834f!2sGeizhals-Preisvergleich!5e0!3m2!1sde!2sat!4v1626264625220!5m2!1sde!2sat",width:"500",height:"350",allowfullscreen:"",loading:"lazy"}})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Toggle:l(211).default})}}]);