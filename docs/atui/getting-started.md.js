webpackJsonp([185,188],{345:function(n,a){"use strict";n.exports={content:["article",{},["h2","\u7b2c\u4e00\u4e2a\u4f8b\u5b50"],["p","\u53ef\u4ee5\u590d\u5236\u4e0b\u9762\u7684\u4ee3\u7801\u8fd0\u884c\u4e00\u4e2a\u6700\u7b80\u5355\u7684demo\uff0catui\u76f8\u5173\u7684js\uff0ccss\u53ef\u4ee5\u901a\u8fc7",["a",{title:null,href:"http://unpkg.com/atui/"},"http://unpkg.com/atui/"]," \u6765\u8bbf\u95ee\uff0c\u7531\u4e8eunpkg\u6027\u80fd\u6ca1\u6709\u4fdd\u969c\uff0c\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u4f7f\u7528npm\u5305\u7684\u65b9\u5f0f\u5f15\u5165\u6216\u8005copy\u4e00\u4efd\u6e90\u7801\u53d1\u5e03\u5230\u81ea\u5df1\u7684cdn\u4e0a"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- \u5f15\u5165\u6837\u5f0f --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//unpkg.com/atui/dist/greater-blue.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">primary</span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u8fd9\u662f\u4e00\u4e2a\u6309\u94ae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- \u5148\u5f15\u5165 Vue --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//unpkg.com/vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n    <span class="token comment" spellcheck="true">&lt;!-- \u5f15\u5165\u7ec4\u4ef6\u5e93 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>//unpkg.com/atui<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n      new Vue({\n        el:\'#app\',\n        components: {\n          // \u6ce8\u518c\u7ec4\u4ef6\n          vButton: atui.Button\n        },\n        methods: {\n          onClick () {\n            alert(\'button click\')\n          }\n        }\n      })\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>'},["code",'<html>\n  <head>\n    <meta charset="utf-8">\n    <!-- \u5f15\u5165\u6837\u5f0f -->\n    <link rel="stylesheet" href="//unpkg.com/atui/dist/greater-blue.css">\n  </head>\n  <body>\n    <div id="app">\n      <v-button primary @click.native="onClick">\u8fd9\u662f\u4e00\u4e2a\u6309\u94ae</v-button>\n    </div>\n    <!-- \u5148\u5f15\u5165 Vue -->\n    <script src="//unpkg.com/vue"></script>\n    <!-- \u5f15\u5165\u7ec4\u4ef6\u5e93 -->\n    <script src="//unpkg.com/atui"></script>\n    <script>\n      new Vue({\n        el:\'#app\',\n        components: {\n          // \u6ce8\u518c\u7ec4\u4ef6\n          vButton: atui.Button\n        },\n        methods: {\n          onClick () {\n            alert(\'button click\')\n          }\n        }\n      })\n    </script>\n </body>\n</html>']],["h2","\u5b89\u88c5"],["h3","\u4f7f\u7528npm\u5b89\u88c5"],["p","\u53ef\u4ee5\u901a\u8fc7npm\u76f4\u63a5\u5b89\u88c5\u5230\u9879\u76ee\u4e2d\uff0c\u4f7f\u7528",["code","import"]," \u6216 ",["code","require"]," \u8fdb\u884c\u5f15\u7528"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> atui --save'},["code","$ npm install atui --save"]],["h3","\u6d4f\u89c8\u5668\u5f15\u5165"],["p","\u6211\u4eec\u5728npm\u53d1\u5e03\u5305\u5185\u7684",["code","dist"],"\u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86",["code","atui.js"],",",["code","atuiFilter.js"],",",["code","atuiWidget.js"]," \u4e09\u4e2a\u4e3b\u8981\u7684js\u6587\u4ef6 \u4ee5\u53ca ",["code","greater-blue.css"],",",["code","tao-orange.css"],",",["code","tmall-red.css"],"\u4e09\u4e2a\u9884\u6253\u5305\u7684\u4e3b\u9898\u6837\u5f0f\u6587\u4ef6\uff08\u5927\u4e8e\u84dd\uff0c\u6dd8\u5b9d\u6a59\uff0c\u5929\u732b\u7ea2\uff09\u7528\u4e8e\u4e00\u6b21\u6027\u5f15\u5165\u6240\u6709\u7684atui\u7ec4\u4ef6\uff08\u6837\u5f0f\u6587\u4ef6\u4f7f\u7528\u5176\u4e2d\u4e4b\u4e00\u5373\u53ef\uff09\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7",["a",{title:null,href:"https://unpkg.com/atui/"},"unpkg"],"\u8fdb\u884c\u4e0b\u8f7d"],["blockquote",["p","\u4e3a\u4fdd\u8bc1\u6027\u80fd\uff0c\u751f\u4ea7\u73af\u5883\u8bf7\u4f7f\u7528npm\u5305\u5f15\u5165\u6216\u8005\u5728unpkg\u4e0a\u4e0b\u8f7d\u4e00\u4efd\u526f\u672c\uff0c\u5207\u52ff\u76f4\u63a5\u5f15\u7528unpkg\u4e0a\u7684\u6587\u4ef6"]],["h4","stable"],["ul",["li",["p",["a",{title:null,href:"https://unpkg.com/atui/dist/atui.js"},"https://unpkg.com/atui/dist/atui.js"]]],["li",["p",["a",{title:null,href:"https://unpkg.com/atui/dist/atuiFilter.js"},"https://unpkg.com/atui/dist/atuiFilter.js"]]],["li",["p",["a",{title:null,href:"https://unpkg.com/atui/dist/atuiWidget.js"},"https://unpkg.com/atui/dist/atuiWidget.js"]]],["li",["p",["a",{title:null,href:"https://unpkg.com/atui/dist/greater-blue.css"},"https://unpkg.com/atui/dist/greater-blue.css"]]],["li",["p",["a",{title:null,href:"https://unpkg.com/atui/dist/tao-orange.css"},"https://unpkg.com/atui/dist/tao-orange.css"]]],["li",["p",["a",{title:null,href:"https://unpkg.com/atui/dist/tmall-red.css"},"https://unpkg.com/atui/dist/tmall-red.css"]]]],["h2","\u793a\u4f8b"],["p","\u5f15\u5165",["code","vue"],"\u548c",["code","atui"]],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> Vue  <span class="token keyword">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword">import</span> atui <span class="token keyword">from</span> <span class="token string">\'atui\'</span>'},["code","import Vue  from 'vue'\nimport atui from 'atui'"]],["p","\u5f15\u5165\u7ec4\u4ef6\u5e93\u6837\u5f0f"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">import</span> <span class="token string">\'atui/dist/greater-blue.css\'</span>'},["code","import 'atui/dist/greater-blue.css'"]],["blockquote",["p","\u6ce8\uff1a\u76ee\u524d\u652f\u6301\u4e09\u5957\u76ae\u80a4\uff0c",["code","greater-blue"]," ,",["code","tao-orange"],", ",["code","tmall-red"]]],["p","\u6ce8\u518catui\u7ec4\u4ef6"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span><span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  components<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    vButton<span class="token punctuation">:</span> atui<span class="token punctuation">.</span>Button<span class="token punctuation">,</span>\n    vDatePicker<span class="token punctuation">:</span> atui<span class="token punctuation">.</span>DatePicker\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    onClick <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'button click\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>'},["code","new Vue({\n  el:'#app',\n  components: {\n    vButton: atui.Button,\n    vDatePicker: atui.DatePicker\n  },\n  methods: {\n    onClick () {\n      alert('button click')\n    }\n  }\n})"]],["p","\u5728\u6a21\u7248\u4e2d\u4f7f\u7528"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-date-picker</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yyyy-MM-dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-date-picker</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'},["code",'<div id="app">\n  <v-button @click.native="onClick">click me</v-button>\n  <v-date-picker format="yyyy-MM-dd"></v-date-picker>\n</div>']]],meta:{order:1,english:"\u5feb\u901f\u4e0a\u624b",filename:"docs/atui/getting-started.md"},description:["section"],toc:["ul",["li",["a",{href:"#\u7b2c\u4e00\u4e2a\u4f8b\u5b50"},"\u7b2c\u4e00\u4e2a\u4f8b\u5b50"]],["li",["a",{href:"#\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{href:"#\u793a\u4f8b"},"\u793a\u4f8b"]]]}}});