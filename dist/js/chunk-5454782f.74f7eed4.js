(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5454782f"],{"4e2d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app flex-row"},[s("div",{staticClass:"w-100"},[s("h1",[t._v("Add Documents")]),s("hr"),s("FileUpload",{attrs:{prop_files:t.files}}),s("div",{staticClass:"d-flex justify-content-end pt-4 flex-wrap align-items-center"},[s("b-form-checkbox",{staticClass:"m-1"},[t._v("I am the only signer")]),s("button",{staticClass:"btn btn-primary min-width-124px m-1",on:{click:function(e){return t.moveNextPage()}}},[t._v("Next")])],1)],1)])},n=[],a=s("68f8"),o={name:"AddDocument",components:{FileUpload:a["a"]},data:function(){return{files:[]}},methods:{moveNextPage:function(){this.$router.push("/docu-sign/add-recipients")}},created:function(){this.$route.query.files?this.files=this.$route.query.files:this.files=null},mounted:function(){}},r=o,l=(s("ccba"),s("2877")),c=Object(l["a"])(r,i,n,!1,null,null,null);e["default"]=c.exports},"68f8":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-100"},[s("div",{staticClass:"drag-drop-container",class:{"drag-has-file":t.files.length>0}},[s("form",{ref:"fileform",staticClass:"drag-drop-div",class:{"has-files":t.files.length>0}},[s("span",{on:{click:function(e){return t.openBrows()}}},[s("UserIcon",{staticClass:"folder-2",attrs:{icon:"folder.svg"}})],1),s("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),s("div",{class:{"has-file-upload-type":t.files.length>0}},[s("div",{staticClass:"drag-a-file",class:{"has-file":t.files.length>0}},[t._v("\n          Drag or\n          "),s("span",{staticClass:"text-style-1 clickable-text",on:{click:function(e){return t.openBrows()}}},[t._v("browse")]),t._v("\n          a file to upload\n        ")]),s("div",{staticClass:"you-can-use",class:{"text-left-align":t.files.length>0}},[t._v("Or you can use one of the following options:")])]),s("div",{staticClass:"store-src",class:{"none-top-margin":t.files.length>0}},[s("UserIcon",{staticClass:"store-src-item",attrs:{icon:"dropbox.svg"}}),s("UserIcon",{staticClass:"store-src-item",attrs:{icon:"google-drive.svg"}}),s("UserIcon",{staticClass:"store-src-item",attrs:{icon:"onedrive.svg"}}),s("UserIcon",{staticClass:"store-src-item",attrs:{icon:"box.svg"}})],1),s("div",{staticClass:"you-can-use",class:{"you-can-use-has-file":t.files.length>0}},[t._v("Or you can use your templates")]),s("b-button",{class:{"none-top-margin":t.files.length>0},staticStyle:{"min-width":"153px","margin-top":"10px"},attrs:{variant:"outline-primary"}},[t._v("Go to My Templates")])],1)]),s("div",{staticClass:"file-list"},[t._l(t.files,function(e,i){return s("div",{key:i,staticClass:"file-listing"},[s("div",{staticClass:"file-content"},[s("img",{staticClass:"folder-2",attrs:{src:t.getFileType(e.name)}}),s("div",{staticClass:"file-info ml-3"},[s("div",{staticClass:"doc-file-name"},[t._v(t._s(e.name))]),s("div",{staticClass:"doc-file-info"},[t._v("5 pages")])])]),s("div",{staticClass:"file-control"},[s("i",{staticClass:"fa fa-ellipsis-h fa-lg mr-4"}),s("UserIcon",{attrs:{icon:"delete.svg",button:!0}})],1)])}),t.files.length>0?s("div",[s("div",{staticClass:"file-listing w-100"},[s("div",{staticClass:"file-content w-100"},[s("img",{staticClass:"folder-2",attrs:{src:t.getFileType(t.files[0].name)}}),s("div",{staticClass:"file-info ml-3 w-100"},[s("div",{staticClass:"doc-file-name"},[t._v("168 KB of 378 KB (56% Done)")]),s("div",{staticClass:"text-right"},[s("i",{staticClass:"cui-circle-x icons",staticStyle:{"font-size":"18px"}}),s("b-progress",{staticClass:"mt-1",attrs:{value:56,max:100}})],1)])])])]):t._e()],2)])},n=[],a=(s("ac6a"),s("d4a4")),o={name:"FileUpload",components:{UserIcon:a["a"]},props:{prop_files:Object},data:function(){return{dragAndDropCapable:!1,files:[]}},methods:{getFileType:function(t){return"img/icons/"+t.substr(t.length-3)+".svg"},determineDragAndDropCapable:function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;this.addFiles(e)},addFiles:function(t){if(t&&t.length){this.$route.path.indexOf("landing")&&this.$router.push({path:"/docu-sign/add-document",query:{withoutModal:!0,files:t}});for(var e=0;e<t.length;e++)this.files.push(t[e])}},openBrows:function(){this.$refs.file.click()}},mounted:function(){this.addFiles(this.prop_files),this.dragAndDropCapable=this.determineDragAndDropCapable(),this.dragAndDropCapable&&(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(t){this.$refs.fileform.addEventListener(t,function(t){t.preventDefault(),t.stopPropagation()}.bind(this),!1)}.bind(this)),this.$refs.fileform.addEventListener("drop",function(t){this.addFiles(t.dataTransfer.files)}.bind(this)))}},r=o,l=(s("871d"),s("2877")),c=Object(l["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},"871d":function(t,e,s){"use strict";var i=s("f06e"),n=s.n(i);n.a},be20:function(t,e,s){},c5f6:function(t,e,s){"use strict";var i=s("7726"),n=s("69a8"),a=s("2d95"),o=s("5dbc"),r=s("6a99"),l=s("79e5"),c=s("9093").f,f=s("11e9").f,d=s("86cc").f,u=s("aa77").trim,p="Number",h=i[p],v=h,g=h.prototype,m=a(s("2aeb")(g))==p,_="trim"in String.prototype,b=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():u(e,3);var s,i,n,a=e.charCodeAt(0);if(43===a||45===a){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var o,l=e.slice(2),c=0,f=l.length;c<f;c++)if(o=l.charCodeAt(c),o<48||o>n)return NaN;return parseInt(l,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof h&&(m?l(function(){g.valueOf.call(s)}):a(s)!=p)?o(new v(b(e)),s,h):b(e)};for(var C,y=s("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)n(v,C=y[I])&&!n(h,C)&&d(h,C,f(v,C));h.prototype=g,g.constructor=h,s("2aba")(i,p,h)}},ccba:function(t,e,s){"use strict";var i=s("be20"),n=s.n(i);n.a},d4a4:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("img",{class:t.button?"icon-hover":"",attrs:{src:"img/icons/"+t.icon_name},on:{mouseover:function(e){return t.hoverIcon()},mouseleave:function(e){return t.leaveIcon()}}})},n=[],a=(s("c5f6"),{name:"UserIcon",props:{button:{type:Boolean,default:!1},icon:{type:String,required:!0,default:"add-recipien"},width:{type:Number,default:18},height:{type:Number,default:18},parent_hover:{type:Boolean,default:!1}},data:function(){return{hover:!1,icon_name:this.icon,icon_only_name:this.icon.substring(0,this.icon.length-4),icon_type:this.icon.substring(this.icon.length-4),parent_event:this.parent_hover}},methods:{hoverIcon:function(){this.button&&(this.icon_name=this.icon_only_name+"_active"+this.icon_type)},leaveIcon:function(){this.button&&(this.icon_name=this.icon_only_name+this.icon_type)}},watch:{parent_event:function(t,e){console.log(t),1==t?this.hoverIcon():this.leaveIcon()}}}),o=a,r=(s("f665"),s("2877")),l=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=l.exports},d9c7:function(t,e,s){},f06e:function(t,e,s){},f665:function(t,e,s){"use strict";var i=s("d9c7"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-5454782f.74f7eed4.js.map