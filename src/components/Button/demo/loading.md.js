webpackJsonp([134,190],{395:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u5e26loading\u7684\u6309\u94ae"]],"en-US":[]},meta:{order:6,title:{"zh-CN":"\u5e26loading\u7684\u6309\u94ae","en-US":"Type"},filename:"src/components/Button/demo/loading.md",id:"src-components-Button-demo-loading"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">large</span> <span class="token attr-name">primary</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u70b9\u51fb\u52a0\u8f7d<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onBtnClick(<span class="token punctuation">\'</span>hi<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>'}],preview:'<v-button large primary :loading="loading" value="\u70b9\u51fb\u52a0\u8f7d" @click.native="onBtnClick(\'hi\')"></v-button>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vButton: atui.Button\n  },\n  data: {\n  \tloading: false\n  },\n  methods: {\n  \tonBtnClick: function(e){\n      debugger\n  \t\tthis.loading = !this.loading\n  \t}\n  }\n})"}}});