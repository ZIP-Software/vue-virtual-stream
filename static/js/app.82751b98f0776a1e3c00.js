webpackJsonp([1],{"+LP1":function(e,t){},AIsm:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s=n("8f98"),i=n.n(s),l={name:"App",components:{VirtualStream:n("bxQx").a},data(){return{items:this.generateMessages(80)}},methods:{generateMessages(e){const t=[];for(let n=0;n<e;n++)t.push(this.generateMessage(n));return t.reverse()},generateMessage:e=>({id:e,message:i()({sentenceLowerBound:5,sentenceUpperBound:100})}),addMessage(){this.items.splice(0,0,this.generateMessage(this.items.length))}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"container-inner"},[n("virtual-stream",{attrs:{items:e.items,reversed:"","items-per-chunk":8,preloadOffset:50},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return t.index,[n("div",{staticClass:"item"},[n("div",{staticClass:"message"},[e._v(e._s(r.message))])])]}}])})],1),e._v(" "),n("button",{on:{click:e.addMessage}},[e._v("Add message")])])])},staticRenderFns:[]};var a=n("VU/8")(l,o,!1,function(e){n("+LP1"),n("AIsm")},"data-v-55b64b2d",null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:a},template:"<App/>"})},bxQx:function(e,t,n){"use strict";(function(e){var n={name:"VirtualStream",props:{items:{type:Array,required:!0},reversed:{type:Boolean,default:!1},itemsPerChunk:{type:Number,default:50},maxChunkPreload:{type:Number,default:1},preloadOffset:{type:Number,default:50}},data:function(){return{currentChunk:0}},computed:{chunkItems:function(){for(var e=0,t=0,n=[],r=0;r<this.items.length;r++)n[e]||(n[e]=[]),n[e].push(this.items[r]),++t>=this.itemsPerChunk&&(e++,t=0);return n},chunkCount:function(){return Math.ceil(this.items.length/this.itemsPerChunk)-1}},methods:{handleScroll:function(){var e=this.$refs.wrapper.scrollTop,t=this.getPrevScrollOffset(e),n=this.getNextScrollOffset(e);t&&t>this.preloadOffset&&(this.currentChunk--,this.correctScrollPosition(!1)),n&&n>this.preloadOffset&&(this.currentChunk++,this.correctScrollPosition(!0))},getPrevScrollOffset:function(e){if(this.$refs.itemsPrev){var t=this.$refs.itemsCurrent.offsetHeight+(this.$refs.itemsNext?this.$refs.itemsNext.offsetHeight:0),n=this.$refs.itemsPrev.offsetHeight,r=e+this.$refs.wrapper.offsetHeight-t;return r>=0?r/n*100:0}return!1},getNextScrollOffset:function(e){if(this.$refs.itemsNext){var t=this.$refs.itemsNext.offsetHeight;return e<=t?100-e/t*100:0}return!1},correctScrollPosition:function(e){var t=this.$refs.itemsCurrent.offsetHeight*(this.preloadOffset/100);if(e){var n=(this.$refs.itemsNext?this.$refs.itemsNext.offsetHeight:0)+t;this.$refs.wrapper.scrollTop=n}else{var r=(this.$refs.itemsNext?this.$refs.itemsNext.offsetHeight:0)+this.$refs.itemsCurrent.offsetHeight-this.$refs.wrapper.offsetHeight-t;this.$refs.wrapper.scrollTop=r}}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"VirtualStream__Scroller"},[n("div",{ref:"wrapper",staticClass:"VirtualStream__Wrapper",class:{"VirtualStream__Wrapper--isReversed":e.reversed},on:{scroll:e.handleScroll}},[e.chunkItems[e.currentChunk-1]?n("div",{ref:"itemsPrev",staticClass:"VirtualStream__Items"},[e._l(e.chunkItems[e.currentChunk-1],function(t,n){return e._t("default",null,{item:t,index:n})})],2):e._e(),e._v(" "),n("div",{ref:"itemsCurrent",staticClass:"VirtualStream__Items"},[e._l(e.chunkItems[e.currentChunk],function(t,n){return e._t("default",null,{item:t,index:n})})],2),e._v(" "),e.chunkItems[e.currentChunk+1]?n("div",{ref:"itemsNext",staticClass:"VirtualStream__Items"},[e._l(e.chunkItems[e.currentChunk+1],function(t,n){return e._t("default",null,{item:t,index:n})})],2):e._e()])])};r._withStripped=!0;var s=function(e,t,n,r,s,i,l,o){var a,u=("function"==typeof n?n.options:n)||{};if(u.__file="/home/webadepts/www/opensource/vue-virtual-stream/src/components/VirtualStream.vue",u.render||(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),u._scopeId=r,t&&(a=function(e){t.call(this,l(e))}),void 0!==a)if(u.functional){var f=u.render;u.render=function(e,t){return a.call(t),f(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,a):[a]}return u}({render:r,staticRenderFns:[]},function(e){e&&e("data-v-662523d4_0",{source:"\n.VirtualStream__Scroller[data-v-662523d4] {\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.VirtualStream__Wrapper[data-v-662523d4] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  width: 100%;\n}\n.VirtualStream__Wrapper--isReversed[data-v-662523d4] {\n  flex-direction: column-reverse;\n}\n.VirtualStream__Items[data-v-662523d4] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n}\n.VirtualStream__Wrapper--isReversed .VirtualStream__Items[data-v-662523d4] {\n  flex-direction: column-reverse;\n}\n",map:{version:3,sources:["/home/webadepts/www/opensource/vue-virtual-stream/src/components/VirtualStream.vue"],names:[],mappings:";AA4IA;EACA,aAAA;EACA,QAAA;EACA,eAAA;EACA,mBAAA;EACA,OAAA;EACA,YAAA;CACA;AAEA;EACA,cAAA;EACA,uBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;CACA;AAEA;EACA,+BAAA;CACA;AAEA;EACA,cAAA;EACA,uBAAA;EACA,eAAA;CACA;AAEA;EACA,+BAAA;CACA",file:"VirtualStream.vue",sourcesContent:['<template>\n  <div class="VirtualStream__Scroller" ref="container">\n    <div class="VirtualStream__Wrapper" :class="{ \'VirtualStream__Wrapper--isReversed\': reversed }" ref="wrapper" @scroll="handleScroll">\n      <div class="VirtualStream__Items" ref="itemsPrev" v-if="chunkItems[currentChunk - 1]">\n        <slot\n          v-for="(item, index) in chunkItems[currentChunk - 1]"\n          :item="item"\n          :index="index"\n        />\n      </div>\n      <div class="VirtualStream__Items" ref="itemsCurrent">\n        <slot\n          v-for="(item, index) in chunkItems[currentChunk]"\n          :item="item"\n          :index="index"\n        />\n      </div>\n      <div class="VirtualStream__Items" ref="itemsNext" v-if="chunkItems[currentChunk + 1]">\n        <slot\n          v-for="(item, index) in chunkItems[currentChunk + 1]"\n          :item="item"\n          :index="index"\n        />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'VirtualStream\',\n    props: {\n      items: {\n        type: Array,\n        required: true,\n      },\n      reversed: {\n        type: Boolean,\n        default: false,\n      },\n      itemsPerChunk: {\n        type: Number,\n        default: 50,\n      },\n      maxChunkPreload: {\n        type: Number,\n        default: 1,\n      },\n      preloadOffset: {\n        type: Number,\n        default: 50\n      },\n    },\n    data() {\n      return {\n        currentChunk: 0,\n      }\n    },\n    computed: {\n      chunkItems () {\n        let chunkIndex = 0\n        let itemIndex = 0\n        const chunks = []\n\n        for (let i = 0; i < this.items.length; i++) {\n          if (!chunks[chunkIndex]) { chunks[chunkIndex] = [] }\n          chunks[chunkIndex].push(this.items[i])\n          itemIndex++\n\n          if (itemIndex >= this.itemsPerChunk) {\n            chunkIndex++\n            itemIndex = 0\n          }\n        }\n\n        return chunks\n      },\n      chunkCount () {\n        return Math.ceil(this.items.length / this.itemsPerChunk) - 1\n      }\n    },\n    methods: {\n      handleScroll() {\n        const scrollTop = this.$refs.wrapper.scrollTop\n        const prevScrollOffset = this.getPrevScrollOffset(scrollTop)\n        const nextScrollOffset = this.getNextScrollOffset(scrollTop)\n\n        if (prevScrollOffset && prevScrollOffset > this.preloadOffset) {\n          this.currentChunk--\n          this.correctScrollPosition(false)\n        }\n\n        if (nextScrollOffset && nextScrollOffset > this.preloadOffset) {\n          this.currentChunk++\n          this.correctScrollPosition(true)\n        }\n      },\n      getPrevScrollOffset(scrollTop) {\n        if (this.$refs.itemsPrev) {\n          const offset = this.$refs.itemsCurrent.offsetHeight + ((this.$refs.itemsNext) ? this.$refs.itemsNext.offsetHeight : 0)\n          const height = this.$refs.itemsPrev.offsetHeight\n          const scrollBottom = (scrollTop + this.$refs.wrapper.offsetHeight) - offset\n\n          if (scrollBottom >= 0) {\n            return (scrollBottom / height) * 100\n          }\n          return 0\n        }\n\n        return false\n      },\n      getNextScrollOffset(scrollTop) {\n        if (this.$refs.itemsNext) {\n          const height = this.$refs.itemsNext.offsetHeight\n          if (scrollTop <= height) {\n            return 100 - ((scrollTop / height) * 100)\n          }\n          return 0\n        }\n\n        return false\n      },\n      correctScrollPosition(wasNext) {\n        const offsetter = (this.$refs.itemsCurrent.offsetHeight * (this.preloadOffset / 100))\n\n        if (wasNext) {\n          const offsetNext = (this.$refs.itemsNext) ? this.$refs.itemsNext.offsetHeight : 0\n          const scrollPos = offsetNext + offsetter\n          this.$refs.wrapper.scrollTop = scrollPos\n        } else {\n          const offsetPrev = ((this.$refs.itemsNext) ? this.$refs.itemsNext.offsetHeight : 0) + this.$refs.itemsCurrent.offsetHeight\n          const scrollPos = offsetPrev - this.$refs.wrapper.offsetHeight - offsetter\n          this.$refs.wrapper.scrollTop = scrollPos\n        }\n      }\n    }\n  }\n<\/script>\n\n<style scoped>\n  .VirtualStream__Scroller {\n    height: 100%;\n    left: 0;\n    overflow: auto;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  .VirtualStream__Wrapper {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: auto;\n    width: 100%;\n  }\n\n  .VirtualStream__Wrapper--isReversed {\n    flex-direction: column-reverse;\n  }\n\n  .VirtualStream__Items {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 auto;\n  }\n\n  .VirtualStream__Wrapper--isReversed .VirtualStream__Items {\n    flex-direction: column-reverse;\n  }\n</style>\n']},media:void 0})},n,"data-v-662523d4",!1,0,function e(){var t=document.head||document.getElementsByTagName("head")[0],n=e.styles||(e.styles={}),r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,s){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var i=r?s.media||"default":e,l=n[i]||(n[i]={ids:[],parts:[],element:void 0});if(!l.ids.includes(e)){var o=s.source,a=l.ids.length;if(l.ids.push(e),r&&(l.element=l.element||document.querySelector("style[data-group="+i+"]")),!l.element){var u=l.element=document.createElement("style");u.type="text/css",s.media&&u.setAttribute("media",s.media),r&&(u.setAttribute("data-group",i),u.setAttribute("data-next-index","0")),t.appendChild(u)}if(r&&(a=parseInt(l.element.getAttribute("data-next-index")),l.element.setAttribute("data-next-index",a+1)),l.element.styleSheet)l.parts.push(o),l.element.styleSheet.cssText=l.parts.filter(Boolean).join("\n");else{var f=document.createTextNode(o),c=l.element.childNodes;c[a]&&l.element.removeChild(c[a]),c.length?l.element.insertBefore(f,c[a]):l.element.appendChild(f)}}}}});var i={install:function e(t){e.installed||(e.installed=!0,t.component("VirtualStream",s))}},l=null;"undefined"!=typeof window?l=window.Vue:void 0!==e&&(l=e.Vue),l&&l.use(i),t.a=s}).call(t,n("DuR2"))}},["NHnr"]);
//# sourceMappingURL=app.82751b98f0776a1e3c00.js.map