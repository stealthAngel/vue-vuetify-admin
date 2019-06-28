(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-771e1bfe"],{"00ab":function(e,n,t){"use strict";var i=t("2b0e");n["a"]=i["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(e,n,t){"use strict";t("a57f");var i=t("9d26"),o=t("b64a"),r=t("98a1"),s=t("00ab"),a=t("58df");n["a"]=Object(a["a"])(o["a"],r["a"],s["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(i["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var e=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){e.isActive=!1}}},[this.$createElement(i["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(e){var n=[this.genIcon(),e("div",this.$slots.default),this.genDismissible()],t=this.outline?this.setTextColor:this.setBackgroundColor,i=e("div",t(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),n);return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i}})},"1f38":function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return o});var i=function(){return"undefined"!==typeof window?window:e},o=function(){var e=i();return e&&e.tinymce?e.tinymce:null}}).call(this,t("c8ba"))},"2c16":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:"","grid-list-md":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{"d-flex":"",xs12:""}},[t("v-alert",{attrs:{value:!0,color:"info",outline:""}},[e._v("\n        "+e._s(e.$t("components.tinymceTips"))+"\n        "),t("a",{attrs:{target:"_blank",href:"https://www.tiny.cloud/docs/"}},[e._v("\n          "+e._s(e.$t("components.documentation"))+"\n        ")])])],1),t("v-flex",{attrs:{"d-flex":"",xs12:""}},[t("tinymce",{attrs:{init:e.options},model:{value:e.content,callback:function(n){e.content=n},expression:"content"}})],1),t("v-flex",{attrs:{"d-flex":"",xs12:""}},[t("div",{staticClass:"editor-content",domProps:{innerHTML:e._s(e.content)}})])],1)],1)},o=[],r=t("cebc"),s=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],a=function(e){return-1!==s.indexOf(e)},c=function(e,n,t){Object.keys(n).filter(a).forEach(function(i){var o=n[i];"function"===typeof o&&("onInit"===i?o(e,t):t.on(i.substring(2),function(e){return o(e,t)}))})},l=function(e,n){var t,i=e.$props.modelEvents?e.$props.modelEvents:null,o=Array.isArray(i)?i.join(" "):i;e.$watch("value",function(e,i){n&&"string"===typeof e&&e!==t&&e!==i&&(n.setContent(e),t=e)}),n.on(o||"change keyup undo redo",function(){t=n.getContent(),e.$emit("input",t)})},u=function(e,n,t){var i=n.$props.value?n.$props.value:"",o=n.$props.initialValue?n.$props.initialValue:"";t.setContent(i||o),n.$listeners.input&&l(n,t),c(e,n.$listeners,t)},p=0,d=function(e){var n=Date.now(),t=Math.floor(1e9*Math.random());return p++,e+"_"+t+p+String(n)},f=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},m=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},h=function(e,n){return m(e).concat(m(n))},g=function(e,n,t,i){var o=n.createElement("script");o.type="application/javascript",o.id=e,o.addEventListener("load",i),o.src=t,n.head&&n.head.appendChild(o)},y=function(){return{listeners:[],scriptId:d("tiny-script"),scriptLoaded:!1}},v=function(e,n,t,i){e.scriptLoaded?i():(e.listeners.push(i),n.getElementById(e.scriptId)||g(e.scriptId,n,t,function(){e.listeners.forEach(function(e){return e()}),e.scriptLoaded=!0}))},b=t("1f38"),w={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},$=function(){return $=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var o in n=arguments[t],n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},$.apply(this,arguments)},_=y(),C=function(e,n,t){return e(t||"div",{attrs:{id:n}})},k=function(e,n){return e("textarea",{attrs:{id:n},style:{visibility:"hidden"}})},x=function(e){return function(){var n=$({},e.$props.init,{readonly:e.$props.disabled,selector:"#"+e.elementId,plugins:h(e.$props.init&&e.$props.init.plugins,e.$props.plugins),toolbar:e.$props.toolbar||e.$props.init&&e.$props.init.toolbar,inline:e.inlineEditor,setup:function(n){e.editor=n,n.on("init",function(t){return u(t,e,n)}),e.$props.init&&"function"===typeof e.$props.init.setup&&e.$props.init.setup(n)}});f(e.element)&&(e.element.style.visibility=""),Object(b["a"])().init(n)}},S={props:w,created:function(){this.elementId=this.$props.id||d("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(b["a"])())x(this)();else if(this.element&&this.element.ownerDocument){var e=this.element.ownerDocument,n=this.$props.cloudChannel?this.$props.cloudChannel:"5",t=this.$props.apiKey?this.$props.apiKey:"",i="https://cloud.tinymce.com/"+n+"/tinymce.min.js?apiKey="+t;v(_,e,i,x(this))}},beforeDestroy:function(){null!==Object(b["a"])()&&Object(b["a"])().remove(this.editor)},render:function(e){return this.inlineEditor?C(e,this.elementId,this.$props.tagName):k(e,this.elementId)}},E=S,O=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],j=O,D=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],M=D,I=t("2f62"),A={name:"TinymceDemo",components:{Tinymce:E},data:function(){return{content:'<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1>\n        <p style="text-align: center; font-size: 15px;">\n        <img\n          title="TinyMCE Logo"\n          src="//www.tinymce.com/images/glyph-tinymce@2x.png"\n          alt="TinyMCE Logo"\n          width="110"\n          height="97"\n        />\n        <ul>\n          <li>Our\n            <a href="//www.tinymce.com/docs/">documentation</a>\n            is a great resource for learning how to configure TinyMCE.</li>\n          <li>Have a specific question? Visit the\n            <a href="https://community.tinymce.com/forum/">Community Forum</a>.\n          </li>\n          <li>We also offer enterprise grade support as part of\n            <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.\n          </li>\n        </ul>',options:{height:400,language:this.language,language_url:"https://cdn.jsdelivr.net/npm/tinymce-lang/langs/ru.js",body_class:"panel-body",object_resizing:!1,menubar:"file edit insert view format table",toolbar:M,plugins:j,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0}}},computed:Object(r["a"])({},Object(I["b"])(["language"]))},B=A,L=t("2877"),P=t("6544"),T=t.n(P),V=t("0798"),K=t("a523"),R=t("0e8f"),U=t("a722"),F=Object(L["a"])(B,i,o,!1,null,null,null);n["default"]=F.exports;T()(F,{VAlert:V["a"],VContainer:K["a"],VFlex:R["a"],VLayout:U["a"]})},a57f:function(e,n,t){}}]);
//# sourceMappingURL=chunk-771e1bfe.cdc8a2c9.js.map