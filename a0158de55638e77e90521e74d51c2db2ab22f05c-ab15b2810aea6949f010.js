(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{C58f:function(e,t,a){e.exports=a.p+"static/front-end-1592bcfa127bf6a1570f091b12eb8ae3.svg"},Cy5E:function(e,t,a){e.exports=a.p+"static/backend-7d1f4fe61f632a9e9e8f32fbc7dd254d.svg"},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var r=a("USkh"),l=null,i="https://api.emailjs.com";function o(e,t,a){return void 0===a&&(a={}),new Promise((function(r,l){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):l(t)})),i.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),a)i.setRequestHeader(o,a[o]);i.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function s(e,t){l=e,i=t||"https://api.emailjs.com"}function u(e,t,a,n){var r={lib_version:"2.6.3",user_id:n||l,service_id:e,template_id:t,template_params:c(a)};return o(i+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function d(e,t,a,n){var c;if("string"==typeof a&&(a=document.querySelector("#"!==(c=a)[0]?"#"+c:c)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(a);var s=new FormData(a);return s.append("lib_version","2.6.3"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",n||l),o(i+"/api/v1.0/email/send-form",s).then((function(e){return r.UI.successState(a),e}),(function(e){return r.UI.errorState(a),Promise.reject(e)}))}t.init=s,t.send=u,t.sendForm=d,t.default={init:s,send:u,sendForm:d}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},PqyB:function(e,t,a){"use strict";a.d(t,"a",(function(){return B}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("rGDf"),o=a("v7Hm"),c=a("ODXe"),s=a("t6h6");function u(e){void 0===e&&(e=!1);var t=Object(r.useState)(e),a=Object(c.a)(t,2),n=a[0],l=a[1];return[n,{on:Object(r.useCallback)((function(){l(!0)}),[]),off:Object(r.useCallback)((function(){l(!1)}),[]),toggle:Object(r.useCallback)((function(){l((function(e){return!e}))}),[])}]}var d=a("zlS4"),m=a("sKyC"),f=a("U6LL"),p=a("epLR"),b=a("pr4h");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var h={path:r.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},r.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),r.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),r.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},g=Object(m.a)((function(e,t){var a=e.as,n=e.boxSize,l=void 0===n?"1em":n,i=e.viewBox,o=e.color,c=void 0===o?"currentColor":o,s=e.focusable,u=void 0!==s&&s,d=e.children,m=e.className,b=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","boxSize","viewBox","color","focusable","children","className"]),g={ref:t,display:"inline-block",lineHeight:"1em",color:c,focusable:u,flexShrink:0,boxSize:l,className:Object(p.b)("chakra-icon",m)},O=null!=i?i:h.viewBox;if(a&&"string"!=typeof a)return r.createElement(f.a.svg,v({as:a},g,b));var j=null!=d?d:h.path;return r.createElement(f.a.svg,v({verticalAlign:"middle",viewBox:O},g,b),j)}));b.a&&(g.displayName="Icon");var O=a("4jWa"),j=a("CRla"),E=a("5+Am"),y=a("JX03"),w=a("BXwj"),x=a("KwD7");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var I=Object(y.a)({strict:!1,name:"FormControlContext"}),_=Object(c.a)(I,2),C=_[0],N=_[1];var L=Object(m.a)((function(e,t){var a=Object(O.a)("Form",e),n=function(e){var t=e.id,a=e.isRequired,n=e.isInvalid,r=e.isDisabled,l=e.isLoading,i=e.isReadOnly,o=S(e,["id","isRequired","isInvalid","isDisabled","isLoading","isReadOnly"]),d=Object(s.a)(),m=t||"field-"+d,f=m+"-label",p=m+"-feedback",b=m+"-helptext",v=u(),h=Object(c.a)(v,2),g=h[0],O=h[1],j=u(),E=Object(c.a)(j,2),y=E[0],w=E[1];return{isRequired:!!a,isInvalid:!!n,isLoading:!!l,isReadOnly:!!i,isDisabled:!!r,isFocused:!!y,onFocus:w.on,onBlur:w.off,hasHelpText:g,setHasHelpText:O,id:m,labelId:f,feedbackId:p,helpTextId:b,htmlProps:o}}(Object(j.d)(e)),l=n.htmlProps,i=S(n,["htmlProps"]),o=Object(p.b)("chakra-form-control",e.className);return r.createElement(C,{value:i},r.createElement(E.b,{value:a},r.createElement(f.a.div,k({role:"group",ref:t},l,{className:o,__css:{width:"100%",position:"relative"}}))))}));b.a&&(L.displayName="FormControl");var A=Object(m.a)((function(e,t){var a=Object(O.b)("FormLabel",e),n=Object(j.d)(e),l=n.children,i=function(e){var t,a,n=N();return R({},e,{"data-focus":Object(p.c)(null==n?void 0:n.isFocused),"data-disabled":Object(p.c)(null==n?void 0:n.isDisabled),"data-invalid":Object(p.c)(null==n?void 0:n.isInvalid),"data-loading":Object(p.c)(null==n?void 0:n.isLoading),"data-readonly":Object(p.c)(null==n?void 0:n.isReadOnly),id:null!=(t=e.id)?t:null==n?void 0:n.labelId,htmlFor:null!=(a=e.htmlFor)?a:null==n?void 0:n.id})}(S(n,["className","children"])),o=N();return r.createElement(f.a.label,k({ref:t,className:Object(p.b)("chakra-form__label",e.className),__css:k({display:"block",textAlign:"left"},a)},i),l,(null==o?void 0:o.isRequired)&&r.createElement(F,null))}));b.a&&(A.displayName="FormLabel");var F=Object(m.a)((function(e,t){var a=N(),n=Object(E.d)();if(!(null==a?void 0:a.isRequired))return null;var l=Object(p.b)("chakra-form__required-indicator",e.className);return r.createElement(f.a.span,k({role:"presentation","aria-hidden":!0,ref:t},e,{__css:n.requiredIndicator,className:l,children:e.children||"*"}))}));b.a&&(F.displayName="RequiredIndicator");var P=Object(m.a)((function(e,t){var a,n=N(),l=Object(E.d)();Object(d.a)((function(){return null==n||n.setHasHelpText.on(),function(){return null==n?void 0:n.setHasHelpText.off()}}),[]);var i=Object(p.b)("chakra-form__helper-text",e.className);return r.createElement(f.a.div,k({ref:t,__css:l.helperText},e,{className:i,id:null!=(a=e.id)?a:null==n?void 0:n.helpTextId}))}));b.a&&(P.displayName="FormHelperText");var q=Object(m.a)((function(e,t){var a,n=Object(E.d)(),l=N();if(!(null==l?void 0:l.isInvalid))return null;var i=Object(p.b)("chakra-form__error-message",e.className);return r.createElement(f.a.div,k({"aria-live":"polite",ref:t},e,{__css:k({display:"flex",alignItems:"center"},n.errorText),className:i,id:null!=(a=e.id)?a:null==l?void 0:l.feedbackId}))}));b.a&&(q.displayName="FormErrorMessage");var D=Object(m.a)((function(e,t){var a=Object(E.d)(),n=N();if(!(null==n?void 0:n.isInvalid))return null;var l=Object(p.b)("chakra-form__error-icon",e.className);return r.createElement(g,k({ref:t,"aria-hidden":!0},e,{__css:a.errorIcon,className:l}),r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}b.a&&(D.displayName="FormErrorIcon");var z=Object(m.a)((function(e,t){var a=Object(O.a)("Input",e),n=function(e){var t,a=N(),n=[];(null==a?void 0:a.isInvalid)&&(n.length>0?n.unshift(a.feedbackId):n.push(a.feedbackId)),(null==a?void 0:a.hasHelpText)&&n.push(a.helpTextId);var r=n.join(" ");return R({},Object(w.d)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(t=e.id)?t:null==a?void 0:a.id,disabled:e.disabled||e.isDisabled||(null==a?void 0:a.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==a?void 0:a.isReadOnly),required:e.required||e.isRequired||(null==a?void 0:a.isRequired),"aria-invalid":Object(p.a)(e.isInvalid||(null==a?void 0:a.isInvalid)),"aria-required":Object(p.a)(e.isRequired||(null==a?void 0:a.isRequired)),"aria-readonly":Object(p.a)(e.isReadOnly||(null==a?void 0:a.isReadOnly)),"aria-describedby":r||void 0,onFocus:Object(x.a)(null==a?void 0:a.onFocus,e.onFocus),onBlur:Object(x.a)(null==a?void 0:a.onBlur,e.onBlur)})}(Object(j.d)(e)),l=Object(p.b)("chakra-input",e.className);return r.createElement(f.a.input,T({},n,{__css:a.field,ref:t,className:l}))}));b.a&&(z.displayName="Input"),z.id="Input";var M=a("3L07"),H=a("D5Hz"),G=a.n(H),B=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(i.a,{as:"h1",mb:5,textAlign:["left","center"]},"Contact Us"),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(o.a,{padding:"8",bg:"blue.100",width:"92vw",centerContent:!0},l.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),G.a.sendForm("service_7fvgwqf","template_vwtrhbo",e.target,"user_5ER6plW1UcDspryz51fCw").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},l.a.createElement(L,null,l.a.createElement(A,null,"Full Name"),l.a.createElement(z,{name:"name",placeholder:"Enter your full name"})),l.a.createElement("br",null),l.a.createElement(L,null,l.a.createElement(A,null,"Email"),l.a.createElement(z,{name:"email",placeholder:"Enter your email"})),l.a.createElement("br",null),l.a.createElement(L,null,l.a.createElement(A,null,"Message"),l.a.createElement(z,{name:"message",height:"250px",placeholder:"Enter message"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(M.a,{height:"48px",width:"200px",type:"submit",value:"Send"},"Submit")))))},t}(l.a.Component)},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("tofy"),i=a("z0gp"),o=a("v7Hm"),c=a("MAJE");t.a=function(e){e.data;var t=e.year;return r.a.createElement(l.a,{as:"footer",h:20,justifyContent:"center",borderTop:"1px",borderColor:"gray.200",alignItems:"center"},r.a.createElement(i.a,{columns:3,spacing:8},r.a.createElement(o.a,{as:"span"},r.a.createElement("a",{href:"mailto: jfssvex@gmail.com"},r.a.createElement(c.a,{style:{textAlign:"left",alignSelf:"stretch"}},"jfssvex@gmail.com"))),r.a.createElement(o.a,null,"Built with ReactJS & ChakraUI ©",t),r.a.createElement(o.a,null,r.a.createElement("a",{href:"https://www.instagram.com/jfss_royals/"},r.a.createElement(c.a,{style:{textAlign:"right",alignSelf:"stretch"}},"Instagram")))))}},gIaw:function(e,t,a){e.exports=a.p+"static/devops-137064a4741437fdcc7d75521801d2ee.svg"},jZwe:function(e,t,a){"use strict";var n=a("+p43"),r=a("v7Hm"),l=a("rGDf"),i=a("z0gp"),o=a("MAJE"),c=a("q1tI"),s=a.n(c);a("gIaw");t.a=function(){var e=Object(n.b)().colorMode;return s.a.createElement(r.a,{px:5,width:"95vw"},s.a.createElement(l.a,{as:"h1",mb:5,textAlign:["left","center"]},"Interested?"),s.a.createElement("br",null),s.a.createElement(i.a,{columns:2,spacing:50,height:{sm:"940px",md:"470px"}},s.a.createElement(r.a,{flex:"1 1 auto"},s.a.createElement("iframe",{title:"3D Model",src:"https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed",width:"100%",height:"100%",allowfullscreen:"true",webkitallowfullscreen:"true",alt:"3D Model",mozallowfullscreen:"true",frameborder:"0"})),s.a.createElement(r.a,{rounded:"lg",pb:8,position:"relative",bg:"blue.100",flex:"1 1 auto"},s.a.createElement("br",null),s.a.createElement(l.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:2,color:e&&"black"},"How can I join the Royals?"),s.a.createElement(o.a,{textAlign:"center",width:"90%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"400"},"Our team applications open for all John Fraser SS students at the beginning of each school year (around September/October). You can hear about us through the school announcements, and meet us in person at school club promo events where we usually demo our robots! If the deadline to apply has passed but you are still interested in joining, feel free to email us at jfssvex@gmail.com. We are always looking for dedicated members who are interested in learning about robotics!"),s.a.createElement("br",null),s.a.createElement(l.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:2,color:e&&"black"},"What if I don’t have any prior experience?"),s.a.createElement(o.a,{textAlign:"center",width:"90%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"400"},"Not a problem! You do not need to have prior experience with the competition to join the club. Many members join without any knowledge - VEX is a great learning experience and we are all very welcoming!"))))}},nOYz:function(e,t,a){"use strict";var n=a("+p43"),r=a("v7Hm"),l=a("rGDf"),i=a("z0gp"),o=a("MAJE"),c=a("q1tI"),s=a.n(c),u={Engineer:{skills:["Learn Engineering","Design Robot","Build Robot","Test Robot"],color:"blue"},Programmer:{skills:["Learn Programming","Code Robot","Code Autonomous","Test Code"],color:"red"},Strategist:{skills:["Learn Competition","Create Strategies","Share Strategies","Take Notes"],color:"green"},Other:{skills:["Documentation","3D Printing","Social Media","Instructor"],color:"gray"}},d=a("Cy5E"),m=a.n(d),f=a("gIaw"),p=a.n(f),b=a("nPZk"),v=a.n(b),h=a("C58f"),g=a.n(h);t.a=function(){var e=Object(n.b)().colorMode,t=Object.keys(u),a=[g.a,m.a,p.a,v.a];return s.a.createElement(r.a,{px:5,width:"95vw"},s.a.createElement(l.a,{as:"h1",mb:5,textAlign:["left","center"]},"Team Roles"),s.a.createElement("br",null),s.a.createElement(i.a,{columns:[1,1,2,4],spacing:5},t.map((function(t,n){return s.a.createElement(r.a,{rounded:"lg",pb:8,key:t,position:"relative",bg:u[t].color+".100",zIndex:206},s.a.createElement(r.a,{as:"img",src:a[n],alt:t,pos:"absolute",width:"inherit",height:"100%",opacity:.14,zIndex:205}),s.a.createElement(l.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:5,color:e&&"black"},t),u[t].skills.map((function(e){return s.a.createElement(o.a,{py:2,textAlign:"center",width:"80%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"600",key:e},e)})))}))))}},nPZk:function(e,t,a){e.exports=a.p+"static/extras-1a3698fd42ff392fb6f55072239fc3c6.svg"},"vG+z":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("sKyC"),r=a("U6LL"),l=a("BXwj"),i=a("pr4h"),o=a("q1tI"),c=a("ODXe"),s=a("zlS4");function u(e){var t=e.src,a=e.srcSet,n=e.onLoad,r=e.onError,l=e.crossOrigin,i=e.sizes,u=e.ignoreFallback,d=Object(o.useState)((function(){return t?"loading":"pending"})),m=Object(c.a)(d,2),f=m[0],p=m[1];Object(o.useEffect)((function(){p(t?"loading":"pending")}),[t]);var b=Object(o.useRef)(),v=Object(o.useCallback)((function(){if(t){h();var e=new Image;e.src=t,l&&(e.crossOrigin=l),a&&(e.srcset=a),i&&(e.sizes=i),e.onload=function(e){h(),p("loaded"),null==n||n(e)},e.onerror=function(e){h(),p("failed"),null==r||r(e)},b.current=e}}),[t,l,a,i,n,r]),h=function(){b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return Object(s.a)((function(){if(!u)return"loading"===f&&v(),function(){h()}}),[f,v,u]),u?"loaded":f}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var f=o.forwardRef((function(e,t){var a=e.htmlWidth,n=e.htmlHeight,r=m(e,["htmlWidth","htmlHeight"]);return o.createElement("img",d({width:a,height:n,ref:t},r))})),p=Object(n.a)((function(e,t){var a=e.fallbackSrc,n=e.fallback,i=e.src,c=e.align,s=e.fit,p=e.loading,b=e.ignoreFallback,v=e.crossOrigin,h=m(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),g=null!=p||b,O=u(d({},e,{ignoreFallback:g})),j=d({ref:t,objectFit:s,objectPosition:c},g?h:Object(l.d)(h,["onError","onLoad"]));return"loaded"!==O?n||o.createElement(r.a.img,d({as:f,className:"chakra-image__placeholder",src:a},j)):o.createElement(r.a.img,d({as:f,src:i,crossOrigin:v,loading:p,className:"chakra-image"},j))}));i.a&&(p.displayName="Image")},z0gp:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("sKyC"),r=a("pr4h"),l=a("x9W9"),i=a("q1tI"),o=a("U6LL");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var u=Object(n.a)((function(e,t){var a=e.area,n=e.templateAreas,r=e.gap,l=e.rowGap,u=e.columnGap,d=e.column,m=e.row,f=e.autoFlow,p=e.autoRows,b=e.templateRows,v=e.autoColumns,h=e.templateColumns,g=s(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]);return i.createElement(o.a.div,c({ref:t,display:"grid",gridArea:a,gridTemplateAreas:n,gridGap:r,gridRowGap:l,gridColumnGap:u,gridAutoColumns:v,gridColumn:d,gridRow:m,gridAutoFlow:f,gridAutoRows:p,gridTemplateRows:b,gridTemplateColumns:h},g))}));r.a&&(u.displayName="Grid");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=Object(n.a)((function(e,t){var a,n,o=e.columns,c=e.spacingX,s=e.spacingY,m=e.spacing,f=e.minChildWidth,p=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),b=Boolean(f)?(n=f,Object(l.b)(n,(function(e){return Object(r.e)(e)?null:"repeat(auto-fit, minmax("+(t=e,(Object(r.f)(t)?t+"px":t)+", 1fr))");var t}))):(a=o,Object(l.b)(a,(function(e){return Object(r.e)(e)?null:"repeat("+e+", 1fr)"})));return i.createElement(u,d({ref:t,gap:m,columnGap:c,rowGap:s,templateColumns:b},p))}));r.a&&(m.displayName="SimpleGrid")}}]);
//# sourceMappingURL=a0158de55638e77e90521e74d51c2db2ab22f05c-ab15b2810aea6949f010.js.map