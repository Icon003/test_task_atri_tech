(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test_tast_atri_tech/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"017d":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},"0acc":function(t,e,a){"use strict";a("b362")},"129e":function(t,e,a){"use strict";a("f440")},"43cd":function(t,e,a){"use strict";a("b515")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main-page"},[a("AppLoader",{attrs:{isLoading:t.isLoading}}),a("div",{staticClass:"main-page__wrapper"},[a("div",{staticClass:"main-page__content"},[a("div",{staticClass:"main-page__container-control-panel-table"},[a("ControlPanelTable",{attrs:{title:"Currencies info",dropdownData:t.dropdownData},on:{search:function(e){return t.setSearchValue(e)},changeCompositionTable:function(e){return t.changeCompositionTable(e)}}})],1),a("div",{staticClass:"main-page__container-table"},[a("AppTable",{scopedSlots:t._u([{key:"thead",fn:function(){return[a("AppTableTr",[a("AppTableTh",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("last_update_at"),expression:"сolumnVisibilityStatus('last_update_at')"}],on:{click:function(e){return t.sortByDate("last_update_at")}}},[t._v("Last update")]),a("AppTableTh",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("code"),expression:"сolumnVisibilityStatus('code')"}],on:{click:function(e){return t.sortByName("code")}}},[t._v("Code")]),a("AppTableTh",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("name"),expression:"сolumnVisibilityStatus('name')"}],on:{click:function(e){return t.sortByName("name")}}},[t._v("Fullname")]),a("AppTableTh",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("deposit_enabled"),expression:"сolumnVisibilityStatus('deposit_enabled')"}],on:{click:function(e){return t.sortByBoolean("deposit_enabled")}}},[t._v("Enabled deposit")]),a("AppTableTh",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("withdrawal_enabled"),expression:"сolumnVisibilityStatus('withdrawal_enabled')"}],on:{click:function(e){return t.sortByBoolean("withdrawal_enabled")}}},[t._v("Enabled Withdrawal")]),a("AppTableTh",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("trading_enabled"),expression:"сolumnVisibilityStatus('trading_enabled')"}],on:{click:function(e){return t.sortByBoolean("trading_enabled")}}},[t._v("Enabled Trading")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.resultDataTable,(function(e){return a("AppTableTr",{key:e.id},[a("AppTableTd",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("last_update_at"),expression:"сolumnVisibilityStatus('last_update_at')"}]},[t._v(t._s(t._f("dateTransform")(e.last_update_at)))]),a("AppTableTd",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("code"),expression:"сolumnVisibilityStatus('code')"}]},[t._v(t._s(e.code))]),a("AppTableTd",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("name"),expression:"сolumnVisibilityStatus('name')"}]},[t._v(t._s(e.name))]),a("AppTableTd",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("deposit_enabled"),expression:"сolumnVisibilityStatus('deposit_enabled')"}]},[t._v(t._s(t._f("booleanTransform")(e.deposit_enabled)))]),a("AppTableTd",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("withdrawal_enabled"),expression:"сolumnVisibilityStatus('withdrawal_enabled')"}]},[t._v(t._s(t._f("booleanTransform")(e.withdrawal_enabled)))]),a("AppTableTd",{directives:[{name:"show",rawName:"v-show",value:t.сolumnVisibilityStatus("trading_enabled"),expression:"сolumnVisibilityStatus('trading_enabled')"}]},[t._v(t._s(t._f("booleanTransform")(e.trading_enabled)))])],1)}))},proxy:!0}])})],1),a("div",{staticClass:"main-page__container-status-label"},[a("span",{staticClass:"main-page__status-label"},[t._v("Total: "+t._s(t.totalCountRow))])])])])],1)])},s=[],o=a("1da1"),r=(a("4de4"),a("7db0"),a("caad"),a("2532"),a("b0c0"),a("c740"),a("4e82"),a("96cf"),a("bc3a")),l=a.n(r),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.isLoading?n("div",{staticClass:"app-loader"},[n("img",{staticClass:"app-loader__image",attrs:{src:a("eca3"),alt:"Загрузка"}})]):t._e()])},c=[],d={props:{isLoading:{type:Boolean,require:!0}}},p=d,b=(a("eb6a"),a("2877")),f=Object(b["a"])(p,u,c,!1,null,"07dc8594",null),h=f.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-panel-table"},[a("div",{staticClass:"control-panel-table__container-title"},[a("h1",{staticClass:"control-panel-table__title"},[t._v(t._s(t.title))])]),a("div",{staticClass:"control-panel-table__container-button"},[a("AppDropdown",{attrs:{data:t.dropdownData},on:{selectItem:t.selectItem}})],1),a("div",{staticClass:"control-panel-table__container-search"},[a("AppInput",{attrs:{placeholder:"Search"},on:{input:function(e){return t.callback(e)}}})],1)])},m=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["app-button",!0===t.active?"app-button--active":""],on:{click:function(e){return t.callback(e)}}},[t._v(" "+t._s(t.text)+" ")])},w=[],g={props:{text:{type:String,require:!1,default:"Text button"},active:{type:Boolean,require:!1,default:!1}},methods:{callback:function(t){this.$emit("click",t)}}},y=g,S=(a("d566"),Object(b["a"])(y,v,w,!1,null,"0615bf22",null)),T=S.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-dropdown"},[a("div",{staticClass:"app-dropdown__container-button"},[a("AppButton",{attrs:{text:"Edit Table",active:t.visibleList},on:{click:t.toogleList}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.visibleList,expression:"visibleList === true"}],staticClass:"app-dropdown__container-list"},[a("ul",{staticClass:"app-dropdown__list"},t._l(t.data,(function(e){return a("li",{key:e.id,staticClass:"app-dropdown__item"},[a("button",{staticClass:"app-dropdown__button",on:{click:function(a){return t.selectItem(a,e.id)}}},[a("i",{class:["app-dropdown__icon",!0===e.status?"app-dropdown__icon--check":"app-dropdown__icon--close"]}),t._v(" "+t._s(e.name)+" ")])])})),0)])])},x=[],D={components:{AppButton:T},props:{data:{type:Array,require:!1,default:function(){return[]}}},data:function(){return{visibleList:!1}},methods:{toogleList:function(){this.visibleList=!this.visibleList},selectItem:function(t,e){this.$emit("selectItem",e)}}},V=D,A=(a("129e"),Object(b["a"])(V,C,x,!1,null,"92eb4054",null)),k=A.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{staticClass:"app-input",attrs:{type:"text",placeholder:t.placeholder},on:{input:function(e){return t.callback(e)}}})},B=[],O={props:{placeholder:{type:String,require:!1,default:"Placeholder"}},methods:{callback:function(t){this.$emit("input",t.target.value)}}},j=O,N=(a("a20d"),Object(b["a"])(j,L,B,!1,null,"034a5e3e",null)),E=N.exports,$={components:{AppButton:T,AppDropdown:k,AppInput:E},props:{title:{type:String,require:!1,default:"Title"},dropdownData:{type:Array,require:!1,default:function(){return[]}}},methods:{callback:function(t){this.$emit("search",t)},selectItem:function(t){this.$emit("changeCompositionTable",t)}}},P=$,I=(a("f6ff"),Object(b["a"])(P,_,m,!1,null,"d91a9db4",null)),q=I.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"app-table"},[a("thead",{staticClass:"app-table__thead"},[t._t("thead")],2),a("tbody",{staticClass:"app-table__tbody"},[t._t("tbody")],2)])},M=[],R={},J=R,W=(a("7590"),Object(b["a"])(J,F,M,!1,null,null,null)),z=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"app-table__tr"},[t._t("default")],2)},G=[],H={},K=H,Q=(a("43cd"),Object(b["a"])(K,Y,G,!1,null,null,null)),U=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticClass:"app-table__th",on:{click:function(e){return t.callback(e)}}},[t._t("default")],2)},Z=[],tt={methods:{callback:function(t){this.$emit("click",t)}}},et=tt,at=(a("0acc"),Object(b["a"])(et,X,Z,!1,null,"d2d8fa14",null)),nt=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"app-table__td"},[t._t("default")],2)},st=[],ot={},rt=ot,lt=(a("f52e"),Object(b["a"])(rt,it,st,!1,null,"86b7aeb0",null)),ut=lt.exports,ct={name:"App",components:{AppLoader:h,ControlPanelTable:q,AppTable:z,AppTableTr:U,AppTableTh:nt,AppTableTd:ut},data:function(){return{isLoading:!0,tableData:[],dropdownData:[{id:1,name:"Last update",value:"last_update_at",status:!0},{id:2,name:"Code",value:"code",status:!0},{id:3,name:"Fullname",value:"name",status:!0},{id:4,name:"Enabled deposit",value:"deposit_enabled",status:!0},{id:5,name:"Enabled Withdrawal",value:"withdrawal_enabled",status:!0},{id:6,name:"Enabled Trading",value:"trading_enabled",status:!0}],isSorting:!1,currentSortField:"",searchString:""}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://raw.githubusercontent.com/a-mazalov/file-storage/main/currencies.json");case 3:a=e.sent,t.tableData=null===a||void 0===a?void 0:a.data,t.switchLoadingStatus(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},computed:{lengthVisibilityStatus:function(){return this.dropdownData.filter((function(t){return!0===t.status})).length},"сolumnVisibilityStatus":function(t){var e=this;return function(t){var a=e.dropdownData.find((function(e){return e.value===t}));return null===a||void 0===a?void 0:a.status}},resultDataTable:function(){var t=this;return this.searchString.length>0?!0===this.сolumnVisibilityStatus("code")&&!0===this.сolumnVisibilityStatus("name")?this.tableData.filter((function(e){return e.code.toLowerCase().includes(t.searchString.toLowerCase())||e.name.toLowerCase().includes(t.searchString.toLowerCase())})):!0===this.сolumnVisibilityStatus("code")?this.tableData.filter((function(e){return e.code.toLowerCase().includes(t.searchString.toLowerCase())})):!0===this.сolumnVisibilityStatus("name")?this.tableData.filter((function(e){return e.name.toLowerCase().includes(t.searchString.toLowerCase())})):this.tableData:this.tableData},totalCountRow:function(){return this.resultDataTable?this.resultDataTable.length:0}},methods:{switchLoadingStatus:function(){this.isLoading=!this.isLoading},changeCompositionTable:function(t){var e=this.dropdownData.findIndex((function(e){return e.id===t}));this.dropdownData[e].status=!this.dropdownData[e].status},setSearchValue:function(t){this.searchString=t},switchSortingStatus:function(t){t===this.currentSortField?this.isSorting=!this.isSorting:this.currentSortField=t},sortByDate:function(t){var e=this;this.switchSortingStatus(t),this.tableData.sort((function(a,n){return!1===e.isSorting?new Date(a[t])-new Date(n[t]):new Date(n[t])-new Date(a[t])}))},sortByName:function(t){var e=this;this.switchSortingStatus(t),this.tableData.sort((function(a,n){return!1===e.isSorting?a[t].localeCompare(n[t]):n[t].localeCompare(a[t])}))},sortByBoolean:function(t){var e=this;this.switchSortingStatus(t),this.tableData.sort((function(a,n){return!1===e.isSorting?Boolean(a[t])-Boolean(n[t]):Boolean(n[t])-Boolean(a[t])}))}}},dt=ct,pt=(a("034f"),Object(b["a"])(dt,i,s,!1,null,null,null)),bt=pt.exports;a("ac1f"),a("5319");n["a"].filter("dateTransform",(function(t){return t.substring(0,16)})),n["a"].filter("booleanTransform",(function(t){return!0===Boolean(t)?"Yes":"No"})),n["a"].filter("conversionStringToName",(function(t){var e=/_/gi;return t.replace(e," ")}));a("6788"),a("017d");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(bt)}}).$mount("#app")},"59c4":function(t,e,a){},"5dfb":function(t,e,a){},6788:function(t,e,a){},7590:function(t,e,a){"use strict";a("db6d")},8203:function(t,e,a){},"85ec":function(t,e,a){},a20d:function(t,e,a){"use strict";a("8203")},a372:function(t,e,a){},b362:function(t,e,a){},b515:function(t,e,a){},cbfd:function(t,e,a){},d566:function(t,e,a){"use strict";a("59c4")},db6d:function(t,e,a){},eb6a:function(t,e,a){"use strict";a("cbfd")},eca3:function(t,e,a){t.exports=a.p+"img/puff.27e2ef14.svg"},f440:function(t,e,a){},f52e:function(t,e,a){"use strict";a("5dfb")},f6ff:function(t,e,a){"use strict";a("a372")}});
//# sourceMappingURL=app.8de1e1ed.js.map