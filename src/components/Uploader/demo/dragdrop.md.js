webpackJsonp([5,190],{524:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u652f\u6301\u62d6\u62fd\u4e0a\u4f20\u8c03\u7528\u65b9\u5f0f"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Uploader/demo/dragdrop.md",id:"src-components-Uploader-demo-dragdrop"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>upload2<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/upload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-uploader</span>\n    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file-upload-drag-test<span class="token punctuation">"</span></span>\n    <span class="token attr-name">form-id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>upload2<span class="token punctuation">"</span></span>\n    <span class="token attr-name">upload-type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>drag<span class="token punctuation">"</span></span>\n    <span class="token attr-name">:ajax</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ajaxUrl<span class="token punctuation">"</span></span>\n    <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>multiple<span class="token punctuation">"</span></span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>files2<span class="token punctuation">"</span></span>\n    <span class="token attr-name">:auto-submit</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>autoSubmit<span class="token punctuation">"</span></span>\n    <span class="token attr-name">:hide-button</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hideButton<span class="token punctuation">"</span></span>\n    <span class="token attr-name">:file-list</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fileList2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-uploader</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>'}],preview:'<form id="upload2" method="post" action="/upload">\n  <v-uploader\n    id="file-upload-drag-test"\n    form-id="upload2"\n    upload-type="drag"\n    :ajax="ajaxUrl"\n    :multiple="multiple"\n    name="files2"\n    :auto-submit="autoSubmit"\n    :hide-button="hideButton"\n    :file-list="fileList2">\n  </v-uploader>\n</form>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vUploader: atui.Uploader\n  },\n  data: {\n    ajaxUrl:'about:blank',\n    multiple: false,\n    fileList2: [],\n    hideButton: false,\n    autoSubmit: false\n  }\n})"}}});