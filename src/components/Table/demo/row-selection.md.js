webpackJsonp([42,190],{487:function(n,s){"use strict";n.exports={content:{"zh-CN":[["p","row-selection\u5c5e\u6027\u53ef\u589e\u52a0\u9009\u62e9\u529f\u80fd"],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> rowSelection <span class="token operator">=</span> <span class="token punctuation">{</span>\n  getCheckboxProps <span class="token punctuation">(</span>record<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      disabled<span class="token punctuation">:</span> record<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">\'\u80e1\u5f66\u7956\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onChange <span class="token punctuation">(</span>selectedRowKeys<span class="token punctuation">,</span> selectedRows<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'rowSelection.onChange\'</span><span class="token punctuation">,</span>selectedRowKeys<span class="token punctuation">,</span> selectedRows<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onSelect <span class="token punctuation">(</span>record<span class="token punctuation">,</span> selected<span class="token punctuation">,</span> selectedRows<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'rowSelection.onSelect\'</span><span class="token punctuation">,</span>record<span class="token punctuation">,</span> selected<span class="token punctuation">,</span> selectedRows<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onSelectAll <span class="token punctuation">(</span>selected<span class="token punctuation">,</span> selectedRows<span class="token punctuation">,</span> changeRows<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'rowSelection.onSelectAll\'</span><span class="token punctuation">,</span>selected<span class="token punctuation">,</span> selectedRows<span class="token punctuation">,</span> changeRows<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","const rowSelection = {\n  getCheckboxProps (record) {\n    return {\n      disabled: record.name === '\u80e1\u5f66\u7956'\n    }\n  },\n  onChange (selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows)\n  },\n  onSelect (record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows)\n  },\n  onSelectAll (selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows)\n  }\n}"]]],"en-US":[]},meta:{order:2,title:{"zh-CN":"\u53ef\u9009\u62e9","en-US":"Type"},filename:"src/components/Table/demo/row-selection.md",id:"src-components-Table-demo-row-selection"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-table</span> <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gridData<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gridColumns<span class="token punctuation">"</span></span> <span class="token attr-name">:row-selection</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rowSelection<span class="token punctuation">"</span></span> <span class="token attr-name">row-key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>props<span class="token punctuation">"</span></span> <span class="token attr-name">:slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>operation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span><span class="token punctuation">></span></span>\u64cd\u4f5c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-table</span><span class="token punctuation">></span></span>'}],preview:'<v-table :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" :loading="loading">\n  <template scope="props" :slot="operation">\n    <v-button>\u64cd\u4f5c</v-button>\n  </template>\n</v-table>',vueScript:"var columns = [{\n  title: '\u59d3\u540d',\n  dataIndex: 'name',\n  filters: [{\n    text: '\u59d3\u674e\u7684\u7684',\n    value: '\u674e',\n  }, {\n    text: '\u59d3\u80e1\u7684',\n    value: '\u80e1',\n  }],\n  sorter:true,\n  width:150\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  sorter: function(a, b) { return a.age - b.age },\n  width:250\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filters: [{\n    text: '\u5357\u6e56',\n    value: '\u5357\u6e56',\n  }, {\n    text: '\u897f\u6e56',\n    value: '\u897f\u6e56',\n  }],\n  filterMultiple: false,\n  width:250\n\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation'\n  }\n];\n\nvar data = [{\n  key: '1',\n  name: '\u80e1\u658c',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7',\n}, {\n  key: '3',\n  name: '\u674e\u5927\u5634',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n}, {\n  key: '4',\n  name: '\u674e\u79c0\u83b2\u5927\u5634\u54e5',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n},\n{\n  key: '5',\n  name: '\u5218\u5fb7\u534e',\n  age: 54,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed999\u53f7',\n},\n{\n  key: '6',\n  name: '\u6d2a\u91d1\u5b9d',\n  age: 66,\n  address: '\u9999\u6e2f\u5f25\u6566\u90534',\n}];\n\n// \u914d\u7f6e\u9009\u62e9\u6570\u636e\u7684\u9009\u9879\n\nvar rowSelection = {\n  getCheckboxProps: function(record) {\n    return {\n      disabled: record.name === '\u80e1\u5f66\u7956'    // \u914d\u7f6e\u65e0\u6cd5\u52fe\u9009\u7684\u5217\n    };\n  },\n  onChange: function(selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);\n  },\n  onSelect: function(record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows);\n  },\n  onSelectAll: function(selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);\n  }\n};\n\n\nnew Vue({\n  el: 'body',\n  components: {\n    vTable: atui.Table,\n    icon: atui.Icon,\n    vButton: atui.Button,\n    row: atui.Layout.Row\n  },\n  data () {\n    return {\n      loading:false,\n      gridData:data,\n      gridColumns: columns,\n      rowSelection: rowSelection\n    }\n  }\n})"}}});