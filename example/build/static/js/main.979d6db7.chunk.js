(this["webpackJsonpreact-inline-autocomplete-example"]=this["webpackJsonpreact-inline-autocomplete-example"]||[]).push([[0],{58:function(e,t,n){e.exports=n(93)},63:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(10),o=n.n(c),u=(n(63),n(57)),i=n(97),s=n(96),v=n(98),p=n(30),f=n.n(p),m=n(34),E=n.n(m);!function(e){e.TAB="Tab",e.ENTER="Enter",e.ARROW_UP="ArrowUp",e.ARROW_DOWN="ArrowDown"}(a||(a={}));var g="_31Ve9",h="_ZX6Lw",d="_NwvFz",x=l.a.forwardRef((function(e,t){var n=e.value,c=e.dataSource,o=e.className,u=e.navigate,i=void 0===u||u,s=e.caseSensitive,v=void 0===s||s,p=e.onBlur,m=e.onFocus,x=e.onChange,A=e.onPressEnter,b=e.onSelect,O=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["value","dataSource","className","navigate","caseSensitive","onBlur","onFocus","onChange","onPressEnter","onSelect"]),S=Object(r.useState)(""),k=S[0],w=S[1],R=Object(r.useState)(),N=R[0],j=R[1],y=Object(r.useState)(0),P=y[0],W=y[1],_=null!=n?n:k,B=Object(r.useRef)();l.a.useImperativeHandle(t,(function(){return B.current}));var C=function(e){x&&x(e),w(e)},D=function(e){W(0),j(e?c.filter((function(t){var n=t.text;return v?n.startsWith(e)&&n!==e:E.a.startsWith(n,e)&&!E.a.equals(n,e)})):[])},F=f()("ria-wrap",g,o),T=f()("ria-input",h),z=f()("ria-complete",d),G=function(){var e;return(null==N||null==(e=N[P])?void 0:e.text)?""+_+N[P].text.slice(_.length):void 0}();return l.a.createElement("div",{className:F},l.a.createElement("input",Object.assign({ref:B,className:T,value:_,type:"text",onBlur:p,onFocus:m,onChange:function(e){var t=e.target.value;C(t),D(t)},onKeyDown:function(e){switch(Object.values(a).includes(e.key)&&e.preventDefault(),e.key){case a.TAB:var t=null==N?void 0:N[P];if(!t)return;var n=t.text;C(n),b&&b(t),D(n);break;case a.ENTER:A&&A(_),D();break;case a.ARROW_UP:if(!i)break;W((function(e){return(null==N?void 0:N.length)?(e-1+N.length)%N.length:0}));break;case a.ARROW_DOWN:if(!i)break;W((function(e){return(null==N?void 0:N.length)?(e+1)%N.length:0}))}}},O)),l.a.createElement("div",{className:z},G))})),A=(n(66),n(67),[{text:"Amazon",value:"Amazon"},{text:"Google",value:"Google"},{text:"Google Search",value:"GoogleSearch"},{text:"Apple",value:"Apple"},{text:"Apple Pencil",value:"ApplePencil"},{text:"Apple Watch",value:"AppleWatch"},{text:"Apple Power",value:"ApplePower"}].map((function(e){return Object.assign(e,{color:"#"+(16777215*Math.random()<<0).toString(16)})})));var b=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=l.a.createRef(),o=function(e){a((function(t){return[e].concat(t)}))};return l.a.createElement("div",{className:"App"},l.a.createElement("section",null,A.map((function(e,t){return l.a.createElement(i.a,{key:t,color:e.color},e.text)}))),l.a.createElement("section",null,l.a.createElement(x,{ref:c,className:"inline-autocomplete-example",dataSource:A,caseSensitive:!1,onChange:function(e){o({value:e,event:"Change"})},onSelect:function(e){o({value:e.text,event:"Select"})},onPressEnter:function(e){o({value:e,event:"PressEnter"})}}),l.a.createElement(s.a,{type:"primary",size:"large",onClick:function(){c.current.focus()}},"Focus")),l.a.createElement("section",null,l.a.createElement(v.a,null,n.map((function(e,t){return l.a.createElement(v.a.Item,{key:t},l.a.createElement("pre",null,"Event: ",e.event,", ",e.value))})))))};o.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.979d6db7.chunk.js.map