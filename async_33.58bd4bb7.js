(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{151:function(t,e,n){"use strict";var l=n(75);n.n(l).a},152:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".demo-slider {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.demo-slider .van-slider {\n  margin: 0 15px 30px;\n}\n.demo-slider .custom-button {\n  width: 26px;\n  color: #fff;\n  font-size: 10px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 100px;\n  background-color: #f44;\n}\n.demo-slider .van-doc-demo-block__title {\n  padding-top: 25px;\n}\n",""])},189:function(t,e,n){"use strict";n.r(e);var l={i18n:{"zh-CN":{title1:"基本用法",title2:"指定选择范围",title3:"禁用",title4:"指定步长",customStyle:"自定义样式",customButton:"自定义按钮",text:"当前值："},"en-US":{title1:"Basic Usage",title2:"Range",title3:"Disabled",title4:"Step size",customStyle:"Custom Style",customButton:"Custom Button",text:"Current value: "}},data:function(){return{value1:50,value2:50,value3:50,value4:50,value5:50,value6:50}},methods:{onChange:function(t){this.$toast(this.$t("text")+t)}}},o=(n(151),n(0)),a=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("title1")}},[n("van-slider",{on:{change:t.onChange},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),n("demo-block",{attrs:{title:t.$t("title2")}},[n("van-slider",{attrs:{min:10,max:90},on:{change:t.onChange},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),n("demo-block",{attrs:{title:t.$t("title3")}},[n("van-slider",{attrs:{disabled:""},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),n("demo-block",{attrs:{title:t.$t("title4")}},[n("van-slider",{attrs:{step:10},on:{change:t.onChange},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),n("demo-block",{attrs:{title:t.$t("customStyle")}},[n("van-slider",{attrs:{"bar-height":"4px","active-color":"#f44"},on:{change:t.onChange},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1),n("demo-block",{attrs:{title:t.$t("customButton")}},[n("van-slider",{attrs:{"active-color":"#f44"},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}},[n("div",{staticClass:"custom-button",attrs:{slot:"button"},slot:"button"},[t._v("\n        "+t._s(t.value6)+"\n      ")])])],1)],1)},[],!1,null,null,null);a.options.__file="index.vue";e.default=a.exports},75:function(t,e,n){var l=n(152);"string"==typeof l&&(l=[[t.i,l,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(11)(l,o);l.locals&&(t.exports=l.locals)}}]);