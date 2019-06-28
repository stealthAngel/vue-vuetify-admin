(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3355c308"],{"00ab":function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(t,e,a){"use strict";a("a57f");var i=a("9d26"),s=a("b64a"),n=a("98a1"),r=a("00ab"),o=a("58df");e["a"]=Object(o["a"])(s["a"],n["a"],r["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(i["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(i["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],a=this.outline?this.setTextColor:this.setBackgroundColor,i=t("div",a(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i}})},"0903":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:""}},[a("v-alert",{attrs:{value:!0,color:"info",outline:""}},[t._v("\n        "+t._s(t.$t("components.baseOnL18n"))+"\n        "),a("a",{staticClass:"link-type",attrs:{href:"//github.com/kazupon/vue-i18n"}},[t._v("vue-i18n")])])],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm4:"","offset-sm4":""}},[a("app-widget",{staticClass:"text-xs-center",attrs:{title:t.$t("ui.switch"),padding:!1,icon:"language"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},t._l(t.locales,function(e){return a("v-list",{key:e.abbr,attrs:{dense:t.toolbarDense}},[a("v-list-tile",{attrs:{ripple:"ripple",target:e.target},on:{click:function(a){return t.changeLocale(e.locale)}}},[a("v-list-tile-action",[e.locale===t.language?a("v-icon",{attrs:{color:"success"}},[t._v("radio_button_checked")]):a("v-icon",[t._v("radio_button_unchecked")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1),a("v-list-tile-avatar",[t._v(t._s(e.abbr))])],1)],1)}),1)])],1)],1),a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-btn",[t._v(t._s(t.$t("ui.default")))]),a("v-btn",{attrs:{color:"primary"}},[t._v(t._s(t.$t("ui.primary")))]),a("v-btn",{attrs:{color:"secondary"}},[t._v(t._s(t.$t("ui.secondary")))]),a("v-btn",{attrs:{color:"success"}},[t._v(t._s(t.$t("ui.success")))]),a("v-btn",{attrs:{color:"error"}},[t._v(t._s(t.$t("ui.error")))]),a("v-btn",{attrs:{color:"warning"}},[t._v(t._s(t.$t("ui.warning")))]),a("v-btn",{attrs:{color:"info"}},[t._v(t._s(t.$t("ui.info")))])],1),a("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"",xs12:"",sm8:"","offset-sm2":""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{counter:10,label:t.$t("ui.firstName")}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{counter:10,label:t.$t("ui.lastName")}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:t.$t("ui.email")}})],1)],1),a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.calories))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.fat))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.carbs))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.protein))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.iron))])]}}])})],1)],1)],1)},s=[],n=a("cebc"),r=a("fe07"),o=a("2f62"),l=[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],c=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}],u=a("8341"),d={name:"I18n",components:{AppWidget:u["a"]},data:function(){return{locales:r["c"],headers:l,desserts:c}},computed:Object(n["a"])({},Object(o["b"])(["toolbarDense","language"])),methods:{changeLocale:function(t){var e=this;Object(r["a"])(t).then(function(t){e.$store.dispatch("LanguageToggle",{state:t})}).catch(function(t){console.log("".concat(t))})}}},f=d,v=a("2877"),h=a("6544"),p=a.n(h),m=a("0798"),g=a("8336"),b=a("a523"),x=a("8fea"),_=a("0e8f"),w=a("132d"),y=a("a722"),$=a("8860"),C=a("ba95"),I=a("40fe"),k=a("c954"),L=a("5d23"),V=a("2677"),O=Object(v["a"])(f,i,s,!1,null,null,null);e["default"]=O.exports;p()(O,{VAlert:m["a"],VBtn:g["a"],VContainer:b["a"],VDataTable:x["a"],VFlex:_["a"],VIcon:w["a"],VLayout:y["a"],VList:$["a"],VListTile:C["a"],VListTileAction:I["a"],VListTileAvatar:k["a"],VListTileContent:L["b"],VListTileTitle:L["d"],VTextField:V["a"]})},2677:function(t,e,a){"use strict";var i=a("8654"),s=(a("7e63"),a("d9bd")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r={name:"v-textarea",extends:i["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return n({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||i["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(s["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},o=a("7cf7"),l=a("ab6d");a.d(e,"a",function(){return c});var c={functional:!0,$_wrapperFor:i["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,n=e.data,u=e.slots,d=e.parent;Object(l["a"])(n);var f=Object(o["a"])(u(),t);return a.textarea&&Object(s["d"])("<v-text-field textarea>","<v-textarea outline>",c,d),a.multiLine&&Object(s["d"])("<v-text-field multi-line>","<v-textarea>",c,d),a.textarea||a.multiLine?(n.attrs.outline=a.textarea,t(r,n,f)):t(i["a"],n,f)}}},"7e63":function(t,e,a){},a57f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3355c308.275dd5e7.js.map