(self.webpackChunkbootstrap=self.webpackChunkbootstrap||[]).push([[499],{6054:(O,P,i)=>{"use strict";i.d(P,{M:()=>x});var c=i(5e3),d=i(4366),l=i(9444);let x=(()=>{class s{constructor(){}get anchor(){return this._anchor}set anchor(v){this._anchor=v}get heading(){return this._heading}set heading(v){this._heading=v,this.anchor=v.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(F,k)=>k.toUpperCase())}ngOnInit(){}}return s.\u0275fac=function(v){return new(v||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-anchor-heading"]],inputs:{heading:"heading"},decls:4,vars:3,consts:[["routerLink",".",3,"name","fragment"],[1,"card-header"],["icon","link",1,"ml-2"]],template:function(v,F){1&v&&(c.TgZ(0,"a",0),c.TgZ(1,"h4",1),c._uU(2),c._UZ(3,"fa-icon",2),c.qZA(),c.qZA()),2&v&&(c.s9C("fragment",F.anchor),c.Q6J("name",F.anchor),c.xp6(2),c.Oqu(F.heading))},directives:[d.yS,l.BN],styles:["h4[_ngcontent-%COMP%]{cursor:pointer;display:inline-block}h4[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{opacity:0}h4[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{-webkit-animation:fadeIn .15s linear;animation:fadeIn .15s linear;opacity:1}"]}),s})()},8499:(O,P,i)=>{"use strict";i.d(P,{L:()=>v}),i(5083);var l=i(5e3),x=i(2328),s=i(6054),m=i(9444);let v=(()=>{class F{constructor(g){this.utilities=g,this._scssImports="",this._type="styles",this.activeSnippet="default"}get type(){return this._type}set type(g){this._type=g}get component(){return this._component}set component(g){this._component=g}get scssImports(){return"styles"===this.type?this._scssImports:""}set components(g){!g||(this._component=g[0],this._scssImports=g.reduce((h,E)=>h+`@import '~@sebgroup/bootstrap/scss/styles/${E.fileName}'; /* styles for ${E.comment} */\n`,"@import '~@sebgroup/bootstrap/scss/core'; /* variables, mixins and functions (no added size) */\n"))}showSnippet(g,h){g.preventDefault(),this.activeSnippet=h,"minimal"===h?this.updateSnippet(this.scssImports):this.updateSnippet()}updateSnippet(g="@import '~@sebgroup/bootstrap/scss/bootstrap';"){this.snip=g,this.importContent=`<pre class="language-css"><code class="language-css">${Prism.highlight(g.trim(),Prism.languages.css)}</code></pre>`}copyToClipboard(g){this.utilities.copyToClipboard(g)}ngOnInit(){this.updateSnippet()}}return F.\u0275fac=function(g){return new(g||F)(l.Y36(x.e))},F.\u0275cmp=l.Xpm({type:F,selectors:[["app-include"]],inputs:{type:"type",components:"components"},decls:19,vars:9,consts:[[1,"card","mb-4","mx-n3","mx-sm-0"],[3,"heading"],[1,"card-body"],[1,"btn","btn-link","position-absolute",3,"click"],["icon","copy"],[1,"nav","nav-tabs","mb-0"],[1,"nav-item"],["href","#",1,"nav-link",3,"click"],[3,"innerHTML"]],template:function(g,h){1&g&&(l.TgZ(0,"div",0),l._UZ(1,"app-anchor-heading",1),l.TgZ(2,"div",2),l.TgZ(3,"p"),l._uU(4),l.TgZ(5,"code"),l._uU(6,"'~@sebgroup/bootstrap/scss/bootstrap'"),l.qZA(),l._uU(7," in your project (import to styles.scss if you're using angular-cli), to optimize your app you should however only import the parts you need (see import with minimal dependencies below)."),l.qZA(),l.TgZ(8,"button",3),l.NdJ("click",function(){return h.copyToClipboard(h.snip)}),l._uU(9,"Copy "),l._UZ(10,"fa-icon",4),l.qZA(),l.TgZ(11,"ul",5),l.TgZ(12,"li",6),l.TgZ(13,"a",7),l.NdJ("click",function(f){return h.showSnippet(f,"default")}),l._uU(14,"All"),l.qZA(),l.qZA(),l.TgZ(15,"li",6),l.TgZ(16,"a",7),l.NdJ("click",function(f){return h.showSnippet(f,"minimal")}),l._uU(17,"Minimal dependencies"),l.qZA(),l.qZA(),l.qZA(),l._UZ(18,"div",8),l.qZA(),l.qZA()),2&g&&(l.xp6(1),l.MGl("heading","Include ",h.component.title," in your project"),l.xp6(3),l.lnq("The ",h.component.fileName," ",h.type," ","styles"===h.type?"are":"is"," included by default if you import "),l.xp6(9),l.ekj("active","default"===h.activeSnippet),l.xp6(3),l.ekj("active","minimal"===h.activeSnippet),l.xp6(2),l.Q6J("innerHTML",h.importContent,l.oJD))},directives:[s.M,m.BN],styles:[".btn.btn-link.position-absolute[_ngcontent-%COMP%]{right:1rem}"],changeDetection:0}),F})()},5083:O=>{var i=function(c){var d=/\blang(?:uage)?-([\w-]+)\b/i,l=0,x={},s={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof m?new m(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++l}),t.__id},clone:function t(e,a){var r,n;switch(a=a||{},s.util.type(e)){case"Object":if(n=s.util.objId(e),a[n])return a[n];for(var o in a[n]=r={},e)e.hasOwnProperty(o)&&(r[o]=t(e[o],a));return r;case"Array":return n=s.util.objId(e),a[n]?a[n]:(a[n]=r=[],e.forEach(function(p,u){r[u]=t(p,a)}),r);default:return e}},getLanguage:function(t){for(;t&&!d.test(t.className);)t=t.parentElement;return t?(t.className.match(d)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var r="no-"+e;t;){var n=t.classList;if(n.contains(e))return!0;if(n.contains(r))return!1;t=t.parentElement}return!!a}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(t,e){var a=s.util.clone(s.languages[t]);for(var r in e)a[r]=e[r];return a},insertBefore:function(t,e,a,r){var n=(r=r||s.languages)[t],o={};for(var p in n)if(n.hasOwnProperty(p)){if(p==e)for(var u in a)a.hasOwnProperty(u)&&(o[u]=a[u]);a.hasOwnProperty(p)||(o[p]=n[p])}var b=r[t];return r[t]=o,s.languages.DFS(s.languages,function(_,T){T===b&&_!=t&&(this[_]=o)}),o},DFS:function t(e,a,r,n){n=n||{};var o=s.util.objId;for(var p in e)if(e.hasOwnProperty(p)){a.call(e,p,e[p],r||p);var u=e[p],b=s.util.type(u);"Object"!==b||n[o(u)]?"Array"===b&&!n[o(u)]&&(n[o(u)]=!0,t(u,a,p,n)):(n[o(u)]=!0,t(u,a,null,n))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var r={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),s.hooks.run("before-all-elements-highlight",r);for(var o,n=0;o=r.elements[n++];)s.highlightElement(o,!0===e,r.callback)},highlightElement:function(t,e,a){var r=s.util.getLanguage(t),n=s.languages[r];t.className=t.className.replace(d,"").replace(/\s+/g," ")+" language-"+r;var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(d,"").replace(/\s+/g," ")+" language-"+r);var u={element:t,language:r,grammar:n,code:t.textContent};function b(T){u.highlightedCode=T,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s.hooks.run("after-highlight",u),s.hooks.run("complete",u),a&&a.call(u.element)}if(s.hooks.run("before-sanity-check",u),(o=u.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code)return s.hooks.run("complete",u),void(a&&a.call(u.element));if(s.hooks.run("before-highlight",u),u.grammar)if(e&&c.Worker){var _=new Worker(s.filename);_.onmessage=function(T){b(T.data)},_.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else b(s.highlight(u.code,u.grammar,u.language));else b(s.util.encode(u.code))},highlight:function(t,e,a){var r={code:t,grammar:e,language:a};return s.hooks.run("before-tokenize",r),r.tokens=s.tokenize(r.code,r.grammar),s.hooks.run("after-tokenize",r),m.stringify(s.util.encode(r.tokens),r.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var r in a)e[r]=a[r];delete e.rest}var n=new k;return g(n,n.head,t),F(t,n,e,n.head,0),function(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}(n)},hooks:{all:{},add:function(t,e){var a=s.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=s.hooks.all[t];if(a&&a.length)for(var n,r=0;n=a[r++];)n(e)}},Token:m};function m(t,e,a,r){this.type=t,this.content=e,this.alias=a,this.length=0|(r||"").length}function v(t,e,a,r){t.lastIndex=e;var n=t.exec(a);if(n&&r&&n[1]){var o=n[1].length;n.index+=o,n[0]=n[0].slice(o)}return n}function F(t,e,a,r,n,o){for(var p in a)if(a.hasOwnProperty(p)&&a[p]){var u=a[p];u=Array.isArray(u)?u:[u];for(var b=0;b<u.length;++b){if(o&&o.cause==p+","+b)return;var _=u[b],T=_.inside,j=!!_.lookbehind,H=!!_.greedy,G=_.alias;if(H&&!_.pattern.global){var N=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,N+"g")}for(var W=_.pattern||_,A=r.next,C=n;A!==e.tail&&!(o&&C>=o.reach);C+=A.value.length,A=A.next){var I=A.value;if(e.length>t.length)return;if(!(I instanceof m)){var S,D=1;if(H){if(!(S=v(W,C,t,j)))break;var Z=S.index,K=S.index+S[0].length,$=C;for($+=A.value.length;Z>=$;)$+=(A=A.next).value.length;if(C=$-=A.value.length,A.value instanceof m)continue;for(var M=A;M!==e.tail&&($<K||"string"==typeof M.value);M=M.next)D++,$+=M.value.length;D--,I=t.slice(C,$),S.index-=C}else if(!(S=v(W,0,I,j)))continue;var L=S[0],z=I.slice(0,Z=S.index),q=I.slice(Z+L.length),B=C+I.length;o&&B>o.reach&&(o.reach=B);var U=A.prev;if(z&&(U=g(e,U,z),C+=z.length),h(e,U,D),A=g(e,U,new m(p,T?s.tokenize(L,T):L,G,L)),q&&g(e,A,q),D>1){var R={cause:p+","+b,reach:B};F(t,e,a,A.prev,C,R),o&&R.reach>o.reach&&(o.reach=R.reach)}}}}}}function k(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function g(t,e,a){var r=e.next,n={value:a,prev:e,next:r};return e.next=n,r.prev=n,t.length++,n}function h(t,e,a){for(var r=e.next,n=0;n<a&&r!==t.tail;n++)r=r.next;e.next=r,r.prev=e,t.length-=n}if(c.Prism=s,m.stringify=function t(e,a){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(b){r+=t(b,a)}),r}var n={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(n.classes,o):n.classes.push(o)),s.hooks.run("wrap",n);var p="";for(var u in n.attributes)p+=" "+u+'="'+(n.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+p+">"+n.content+"</"+n.tag+">"},!c.document)return c.addEventListener&&(s.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.immediateClose;c.postMessage(s.highlight(e.code,s.languages[a],a)),n&&c.close()},!1)),s;var f=s.util.currentScript();function y(){s.manual||s.highlightAll()}if(f&&(s.filename=f.src,f.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var w=document.readyState;"loading"===w||"interactive"===w&&f&&f.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});O.exports&&(O.exports=i),"undefined"!=typeof global&&(global.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(c){"entity"===c.type&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(d,l){var x={};x["language-"+l]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[l]},x.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:x}};s["language-"+l]={pattern:/[\s\S]+/,inside:i.languages[l]};var m={};m[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:s},i.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(c,d){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:i.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(c){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var l=c.languages.markup;l&&(l.tag.addInlined("style","css"),l.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(void 0!==i&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var x={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",m="loading",v="loaded",k="pre[data-src]:not(["+s+'="'+v+'"]):not(['+s+'="'+m+'"])',g=/\blang(?:uage)?-([\w-]+)\b/i;i.hooks.add("before-highlightall",function(f){f.selector+=", "+k}),i.hooks.add("before-sanity-check",function(f){var y=f.element;if(y.matches(k)){f.code="",y.setAttribute(s,m);var w=y.appendChild(document.createElement("CODE"));w.textContent="Loading\u2026";var t=y.getAttribute("data-src"),e=f.language;if("none"===e){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=x[a]||a}h(w,e),h(y,e);var r=i.plugins.autoloader;r&&r.loadLanguages(e);var n=new XMLHttpRequest;n.open("GET",t,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?(y.setAttribute(s,v),w.textContent=n.responseText,i.highlightElement(w)):(y.setAttribute(s,"failed"),w.textContent=n.status>=400?function(f,y){return"\u2716 Error "+f+" while fetching file: "+y}(n.status,n.statusText):"\u2716 Error: File does not exist or is empty"))},n.send(null)}}),i.plugins.fileHighlight={highlight:function(y){for(var e,w=(y||document).querySelectorAll(k),t=0;e=w[t++];)i.highlightElement(e)}};var E=!1;i.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}function h(f,y){var w=f.className;w=w.replace(g," ")+" language-"+y,f.className=w.replace(/\s+/g," ").trim()}}()}}]);