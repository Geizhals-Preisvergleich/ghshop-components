(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(t,e,r){"use strict";r.r(e);var o=r(8);r(44),r(103),r(58),r(81),r(206),r(61),r(146),r(78),r(147);function n(t){var e="",i=4*t;if(t<0)throw"Level is below 0";for(;i--;)e+=" ";return e}function c(html){for(var t="",e=0,r=(html=html.trim()).split(/</),i=0,o=r.length;i<o;i++){var c=r[i].split(/>/);2===c.length?("/"===r[i][0]&&e--,t+=n(e),"/"!==r[i][0]&&e++,i>0&&(t+="<"),t+=c[0].trim()+">\n",""!==c[1].trim()&&(t+=n(e)+c[1].trim().replace(/\s+/g," ")+"\n"),c[0].match(/^(img|hr|br)/)&&e--):t+=n(e)+c[0]+"\n"}return t.trim()}var l={props:{hidden:Boolean,isCssVars:Boolean,html:String},data:function(){return{copyText:"",value:""}},computed:{textareaShow:function(){return!this.hidden},textareaValue:{get:function(){return this.value},set:function(t){this.value=t}},colors:function(){return this.$store.state.colors}},watch:{colors:function(){this.isCssVars&&this.setCssVarsStyleTag()},html:function(t){this.textareaValue=c(t)}},methods:{handleClick:function(t){t.currentTarget.select(),t.currentTarget.focus()},handleCopy:function(){var t=this;navigator.clipboard.writeText(this.$refs.textarea.value).then((function(){t.copyText="Kopiert!",setTimeout((function(){t.copyText=null}),1e3)}))},setCssVarsStyleTag:function(){for(var t=[],e=0,r=Object.entries(this.colors);e<r.length;e++){var n=Object(o.a)(r[e],2),c=n[0],l=n[1];t.push("--".concat(c,": ").concat(l,";"))}this.textareaValue="<style> :root { ".concat(t.join(" ")," } </style>")}},mounted:function(){this.isCssVars?this.setCssVarsStyleTag():this.textareaValue=c(this.html)}},d=(r(209),r(13)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.textareaShow,expression:"textareaShow"}],staticClass:"textarea-container",class:{"mt-4":t.isCssVars,"mt-8":!t.isCssVars}},[r("button",{staticClass:"copy-button",attrs:{type:"button"},on:{click:t.handleCopy}},[t._v("\n    "+t._s(t.copyText||"Kopieren")+"\n  ")]),t._v(" "),r("textarea",{ref:"textarea",staticClass:"textarea",attrs:{readonly:""},domProps:{value:t.value},on:{click:t.handleClick}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Textarea:r(109).default})},151:function(t,e,r){var content=r(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("352a1abc",content,!0,{sourceMap:!1})},153:function(t,e,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("aaa8cbbc",content,!0,{sourceMap:!1})},154:function(t,e,r){var content=r(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("1239d49d",content,!0,{sourceMap:!1})},155:function(t,e,r){"use strict";r.r(e);var o={computed:{title:function(){return this.$store.state.title}},head:function(){return{title:this.title||"Index"}}},n=r(13),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title"},[t._v("\n    Tailwind Components\n  ")]),t._v(" "),r("h2",{staticClass:"subtitle"},[r("NuxtLink",{attrs:{to:"/"}},[t._v("Index")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(" / "+t._s(t.title))])],1)])}),[],!1,null,null,null);e.default=component.exports},161:function(t,e,r){"use strict";var o={data:function(){return{component:""}},computed:{outerHtml:{get:function(){return this.component.outerHTML},set:function(t){this.component=t}},title:function(){return this.$store.state.title}},head:function(){return{title:this.title}},mounted:function(){this.outerHtml=this.$refs.component.$el.firstChild.outerHTML}},n=r(13),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Head"),t._v(" "),r("div",{staticClass:"component-container"},[r("Colors"),t._v(" "),r("Nuxt",{ref:"component"}),t._v(" "),r("Textarea",{attrs:{html:t.component}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Head:r(155).default,Colors:r(163).default,Textarea:r(109).default})},162:function(t,e,r){"use strict";var o={},n=(r(211),r(13)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Head"),t._v(" "),r("div",{staticClass:"component-container"},[r("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Head:r(155).default})},163:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(103),r(58),r(81),{data:function(){return{hidden:!0}},computed:{colors:function(){return this.$store.state.colors},isHidden:{get:function(){return this.hidden},set:function(t){this.hidden=t}}},methods:{setCssVar:function(t){var e=t.target.id,r=t.target.value;this.$store.commit("setColor",{key:e,value:r}),this.writeCssVars()},writeCssVars:function(){for(var t=[],e=0,r=Object.entries(this.$store.state.colors);e<r.length;e++){var n=Object(o.a)(r[e],2),c=n[0],l=n[1];t.push("--".concat(c,": ").concat(l))}document.documentElement.style.cssText=t.join(";")},handleExpand:function(){this.isHidden=!this.isHidden}},mounted:function(){this.writeCssVars()}}),c=(r(204),r(13)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col mb-12"},[r("div",{staticClass:"color-grid"},[r("label",[t._v("\n      Primary:\n      "),r("input",{staticClass:"color-picker",attrs:{type:"color",id:"primary"},domProps:{value:t.colors.primary},on:{change:t.setCssVar}})]),t._v(" "),r("label",[t._v("\n      Secondary:\n      "),r("input",{staticClass:"color-picker",attrs:{type:"color",id:"secondary"},domProps:{value:t.colors.secondary},on:{change:t.setCssVar}})]),t._v(" "),r("label",[t._v("\n      Black:\n      "),r("input",{staticClass:"color-picker",attrs:{type:"color",id:"black"},domProps:{value:t.colors.black},on:{change:t.setCssVar}})]),t._v(" "),r("label",[t._v("\n      White:\n      "),r("input",{staticClass:"color-picker",attrs:{type:"color",id:"white"},domProps:{value:t.colors.white},on:{change:t.setCssVar}})]),t._v(" "),r("button",{staticClass:"expand-button",class:{expanded:!t.isHidden},attrs:{type:"button"},on:{click:t.handleExpand}},[r("svg",{staticClass:"fill-current",class:{"transform rotate-180 text-black":!t.isHidden},attrs:{xmlns:"http://www.w3.org/2000/svg",height:"16px",viewBox:"0 0 24 24",width:"24px"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}})])])]),t._v(" "),r("Textarea",{attrs:{hidden:t.isHidden,"is-css-vars":""}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Textarea:r(109).default})},164:function(t,e,r){r(165),t.exports=r(166)},204:function(t,e,r){"use strict";r(151)},205:function(t,e,r){var o=r(37)((function(i){return i[1]}));o.push([t.i,".color-grid{display:flex;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));padding:0.5rem;font-size:0.875rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:0.025em}.color-grid label{display:flex;flex:1 1 0%;cursor:pointer;align-items:center;justify-content:center}.color-picker{margin-left:0.5rem;cursor:pointer}.expand-button{display:flex;width:2rem;align-items:center;justify-content:center;border-radius:0.375rem;border-width:1px;border-color:var(--black);background-color:var(--black);font-weight:700;color:var(--white)}.expand-button:hover{background-color:var(--white);color:var(--black)}.expand-button.expanded{background-color:var(--white)}",""]),t.exports=o},209:function(t,e,r){"use strict";r(153)},210:function(t,e,r){var o=r(37)((function(i){return i[1]}));o.push([t.i,'.textarea-container{text-align:right}.textarea{font-family:"Courier New",Courier,monospace;min-height:120px;display:block;width:100%;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(75, 85, 99, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));padding:1rem;text-align:left}.copy-button{margin-bottom:0.5rem;cursor:pointer;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(239, 68, 68, var(--tw-border-opacity));padding-left:0.5rem;padding-right:0.5rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}',""]),t.exports=o},211:function(t,e,r){"use strict";r(154)},212:function(t,e,r){var o=r(37)((function(i){return i[1]}));o.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}a{text-decoration:underline}a:hover{text-decoration:none}.nuxt-link-active{--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}.container{margin-left:auto;margin-right:auto;margin-top:1rem;margin-bottom:1rem;text-align:center}.title{margin-top:2rem;margin-bottom:1rem;text-align:center;font-size:2.25rem;line-height:2.5rem;font-weight:700;text-transform:uppercase}.subtitle{margin-bottom:2rem;text-align:center;font-size:1.875rem;line-height:2.25rem;--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}',""]),t.exports=o},213:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return d}));r(35),r(29),r(34),r(59),r(31),r(60);var o=r(20);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(){return{title:null,colors:{primary:"#005599",secondary:"#003377",black:"#020202",white:"#fdfdfd"}}},d={setTitle:function(t,e){t.title=e},setColor:function(t,e){var r=e.key,n=e.value;t.colors=c(c({},t.colors),{},Object(o.a)({},r,n))}}}},[[164,8,1,9]]]);