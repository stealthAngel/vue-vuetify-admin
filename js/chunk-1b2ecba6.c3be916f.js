(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2ecba6"],{"00ab":function(e,l,d){"use strict";var v=d("2b0e");l["a"]=v["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(e,l,d){"use strict";d("a57f");var v=d("9d26"),i=d("b64a"),o=d("98a1"),r=d("00ab"),a=d("58df");l["a"]=Object(a["a"])(i["a"],o["a"],r["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(v["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var e=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){e.isActive=!1}}},[this.$createElement(v["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(e){var l=[this.genIcon(),e("div",this.$slots.default),this.genDismissible()],d=this.outline?this.setTextColor:this.setBackgroundColor,v=e("div",d(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),l);return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[v]):v}})},1623:function(e,l,d){"use strict";d.r(l);var v=function(){var e=this,l=e.$createElement,d=e._self._c||l;return d("v-container",{attrs:{fluid:"","grid-list-md":""}},[d("v-layout",{attrs:{row:"",wrap:""}},[d("v-flex",{attrs:{"d-flex":"",xs12:""}},[d("v-alert",{attrs:{value:!0,color:"info",outline:""}},[e._v("\n        "+e._s(e.$t("components.backToTop"))+"\n      ")])],1),d("v-flex",{attrs:{xs12:""}},[d("div",{staticClass:"placeholder-container"},[d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")]),d("div",[e._v("placeholder")])])])],1),d("app-to-top-fab")],1)},i=[],o=d("15a7"),r={name:"BackToTopDemo",components:{AppToTopFab:o["a"]},data:function(){return{}}},a=r,c=(d("9a51"),d("2877")),t=d("6544"),p=d.n(t),h=d("0798"),n=d("a523"),s=d("0e8f"),_=d("a722"),u=Object(c["a"])(a,v,i,!1,null,"327b314c",null);l["default"]=u.exports;p()(u,{VAlert:h["a"],VContainer:n["a"],VFlex:s["a"],VLayout:_["a"]})},"1dc3":function(e,l,d){},"9a51":function(e,l,d){"use strict";var v=d("1dc3"),i=d.n(v);i.a},a57f:function(e,l,d){}}]);
//# sourceMappingURL=chunk-1b2ecba6.c3be916f.js.map