"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[647],{90647:(e,t,a)=>{a.r(t),a.d(t,{ebnf:()=>c});const c={name:"ebnf",startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(e,t){if(e){switch(0===t.stack.length&&('"'==e.peek()||"'"==e.peek()?(t.stringType=e.peek(),e.next(),t.stack.unshift(1)):e.match("/*")?(t.stack.unshift(0),t.commentType=0):e.match("(*")&&(t.stack.unshift(0),t.commentType=1)),t.stack[0]){case 1:for(;1===t.stack[0]&&!e.eol();)e.peek()===t.stringType?(e.next(),t.stack.shift()):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return t.lhs?"property":"string";case 0:for(;0===t.stack[0]&&!e.eol();)0===t.commentType&&e.match("*/")||1===t.commentType&&e.match("*)")?(t.stack.shift(),t.commentType=null):e.match(/^.[^\*]*/);return"comment";case 2:for(;2===t.stack[0]&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(".")||t.stack.shift();return"operator"}var a=e.peek();switch(a){case"[":return e.next(),t.stack.unshift(2),"bracket";case":":case"|":case";":return e.next(),"operator";case"%":if(e.match("%%"))return"header";if(e.match(/[%][A-Za-z]+/))return"keyword";if(e.match(/[%][}]/))return"bracket";break;case"/":if(e.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(e.match(/[\][a-z]+/))return"string.special";case".":if(e.match("."))return"atom";case"*":case"-":case"+":case"^":if(e.match(a))return"atom";case"$":if(e.match("$$"))return"builtin";if(e.match(/[$][0-9]+/))return"variableName.special";case"<":if(e.match(/<<[a-zA-Z_]+>>/))return"builtin"}return e.match("//")?(e.skipToEnd(),"comment"):e.match("return")?"operator":e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?e.match(/(?=[\(.])/)?"variable":e.match(/(?=[\s\n]*[:=])/)?"def":"variableName.special":-1!=["[","]","(",")"].indexOf(e.peek())?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}}]);
//# sourceMappingURL=647.8cecbd3.js.map