(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3QVZ":function(e,t,a){e.exports=a.p+"static/logoRoyals-94e8fe07a5394cbd99b69b7eae2d7fce.png"},"5KJR":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("U6LL"),r=a("pr4h"),l=Object(n.a)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});r.a&&(l.displayName="Center")},D5Hz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var r=a("USkh"),l=null,i="https://api.emailjs.com";function o(e,t,a){return void 0===a&&(a={}),new Promise((function(r,l){var i=new XMLHttpRequest;for(var o in i.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?r(t):l(t)})),i.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),i.open("POST",e,!0),a)i.setRequestHeader(o,a[o]);i.send(t)}))}function c(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function s(e,t){l=e,i=t||"https://api.emailjs.com"}function u(e,t,a,n){var r={lib_version:"2.6.3",user_id:n||l,service_id:e,template_id:t,template_params:c(a)};return o(i+"/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})}function d(e,t,a,n){var c;if("string"==typeof a&&(a=document.querySelector("#"!==(c=a)[0]?"#"+c:c)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";r.UI.progressState(a);var s=new FormData(a);return s.append("lib_version","2.6.3"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",n||l),o(i+"/api/v1.0/email/send-form",s).then((function(e){return r.UI.successState(a),e}),(function(e){return r.UI.errorState(a),Promise.reject(e)}))}t.init=s,t.send=u,t.sendForm=d,t.default={init:s,send:u,sendForm:d}},MkV5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("5KJR"),o=a("z0gp"),c=a("rGDf"),s=a("MAJE"),u=a("vG+z"),d=a("+p43"),m=a("v7Hm"),f={Engineer:{skills:["Learn Engineering","Design Robot","Build Robot","Test Robot"],color:"blue"},Programmer:{skills:["Learn Programming","Code Robot","Code Autonomous","Test Code"],color:"red"},Strategist:{skills:["Learn Competition","Create Strategies","Share Strategies","Take Notes"],color:"green"},Other:{skills:["Documentation","3D Printing","Social Media","Instructor"],color:"gray"}},p=function(){var e=Object(d.b)().colorMode,t=Object.keys(f);return r.a.createElement(m.a,{px:5,width:"95vw"},r.a.createElement(c.a,{as:"h1",mb:5,textAlign:["left","center"]},"Team Roles"),r.a.createElement("br",null),r.a.createElement(o.a,{columns:[1,1,2,4],spacing:5},t.map((function(t,a){return r.a.createElement(m.a,{rounded:"lg",pb:8,key:t,position:"relative",bg:f[t].color+".100",zIndex:206},r.a.createElement(c.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:5,color:e&&"black"},t),f[t].skills.map((function(e){return r.a.createElement(s.a,{py:2,textAlign:"center",width:"80%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"600",key:e},e)})))}))))},b=a("dI71"),h=a("ODXe"),v=a("t6h6");function g(e){void 0===e&&(e=!1);var t=Object(n.useState)(e),a=Object(h.a)(t,2),r=a[0],l=a[1];return[r,{on:Object(n.useCallback)((function(){l(!0)}),[]),off:Object(n.useCallback)((function(){l(!1)}),[]),toggle:Object(n.useCallback)((function(){l((function(e){return!e}))}),[])}]}var O=a("zlS4"),E=a("sKyC"),y=a("U6LL"),j=a("epLR"),w=a("pr4h");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var R={path:n.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},n.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),n.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),n.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},S=Object(E.a)((function(e,t){var a=e.as,r=e.boxSize,l=void 0===r?"1em":r,i=e.viewBox,o=e.color,c=void 0===o?"currentColor":o,s=e.focusable,u=void 0!==s&&s,d=e.children,m=e.className,f=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","boxSize","viewBox","color","focusable","children","className"]),p={ref:t,display:"inline-block",lineHeight:"1em",color:c,focusable:u,flexShrink:0,boxSize:l,className:Object(j.b)("chakra-icon",m)},b=null!=i?i:R.viewBox;if(a&&"string"!=typeof a)return n.createElement(y.a.svg,x({as:a},p,f));var h=null!=d?d:R.path;return n.createElement(y.a.svg,x({verticalAlign:"middle",viewBox:b},p,f),h)}));w.a&&(S.displayName="Icon");var k=a("4jWa"),I=a("CRla"),C=a("5+Am"),_=a("JX03"),N=a("BXwj"),F=a("KwD7");function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var T=Object(_.a)({strict:!1,name:"FormControlContext"}),z=Object(h.a)(T,2),D=z[0],P=z[1];var q=Object(E.a)((function(e,t){var a=Object(k.a)("Form",e),r=function(e){var t=e.id,a=e.isRequired,n=e.isInvalid,r=e.isDisabled,l=e.isLoading,i=e.isReadOnly,o=M(e,["id","isRequired","isInvalid","isDisabled","isLoading","isReadOnly"]),c=Object(v.a)(),s=t||"field-"+c,u=s+"-label",d=s+"-feedback",m=s+"-helptext",f=g(),p=Object(h.a)(f,2),b=p[0],O=p[1],E=g(),y=Object(h.a)(E,2),j=y[0],w=y[1];return{isRequired:!!a,isInvalid:!!n,isLoading:!!l,isReadOnly:!!i,isDisabled:!!r,isFocused:!!j,onFocus:w.on,onBlur:w.off,hasHelpText:b,setHasHelpText:O,id:s,labelId:u,feedbackId:d,helpTextId:m,htmlProps:o}}(Object(I.d)(e)),l=r.htmlProps,i=M(r,["htmlProps"]),o=Object(j.b)("chakra-form-control",e.className);return n.createElement(D,{value:i},n.createElement(C.b,{value:a},n.createElement(y.a.div,A({role:"group",ref:t},l,{className:o,__css:{width:"100%",position:"relative"}}))))}));w.a&&(q.displayName="FormControl");var H=Object(E.a)((function(e,t){var a=Object(k.b)("FormLabel",e),r=Object(I.d)(e),l=r.children,i=function(e){var t,a,n=P();return L({},e,{"data-focus":Object(j.c)(null==n?void 0:n.isFocused),"data-disabled":Object(j.c)(null==n?void 0:n.isDisabled),"data-invalid":Object(j.c)(null==n?void 0:n.isInvalid),"data-loading":Object(j.c)(null==n?void 0:n.isLoading),"data-readonly":Object(j.c)(null==n?void 0:n.isReadOnly),id:null!=(t=e.id)?t:null==n?void 0:n.labelId,htmlFor:null!=(a=e.htmlFor)?a:null==n?void 0:n.id})}(M(r,["className","children"])),o=P();return n.createElement(y.a.label,A({ref:t,className:Object(j.b)("chakra-form__label",e.className),__css:A({display:"block",textAlign:"left"},a)},i),l,(null==o?void 0:o.isRequired)&&n.createElement(G,null))}));w.a&&(H.displayName="FormLabel");var G=Object(E.a)((function(e,t){var a=P(),r=Object(C.d)();if(!(null==a?void 0:a.isRequired))return null;var l=Object(j.b)("chakra-form__required-indicator",e.className);return n.createElement(y.a.span,A({role:"presentation","aria-hidden":!0,ref:t},e,{__css:r.requiredIndicator,className:l,children:e.children||"*"}))}));w.a&&(G.displayName="RequiredIndicator");var W=Object(E.a)((function(e,t){var a,r=P(),l=Object(C.d)();Object(O.a)((function(){return null==r||r.setHasHelpText.on(),function(){return null==r?void 0:r.setHasHelpText.off()}}),[]);var i=Object(j.b)("chakra-form__helper-text",e.className);return n.createElement(y.a.div,A({ref:t,__css:l.helperText},e,{className:i,id:null!=(a=e.id)?a:null==r?void 0:r.helpTextId}))}));w.a&&(W.displayName="FormHelperText");var J=Object(E.a)((function(e,t){var a,r=Object(C.d)(),l=P();if(!(null==l?void 0:l.isInvalid))return null;var i=Object(j.b)("chakra-form__error-message",e.className);return n.createElement(y.a.div,A({"aria-live":"polite",ref:t},e,{__css:A({display:"flex",alignItems:"center"},r.errorText),className:i,id:null!=(a=e.id)?a:null==l?void 0:l.feedbackId}))}));w.a&&(J.displayName="FormErrorMessage");var B=Object(E.a)((function(e,t){var a=Object(C.d)(),r=P();if(!(null==r?void 0:r.isInvalid))return null;var l=Object(j.b)("chakra-form__error-icon",e.className);return n.createElement(S,A({ref:t,"aria-hidden":!0},e,{__css:a.errorIcon,className:l}),n.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}w.a&&(B.displayName="FormErrorIcon");var X=Object(E.a)((function(e,t){var a=Object(k.a)("Input",e),r=function(e){var t,a=P(),n=[];(null==a?void 0:a.isInvalid)&&(n.length>0?n.unshift(a.feedbackId):n.push(a.feedbackId)),(null==a?void 0:a.hasHelpText)&&n.push(a.helpTextId);var r=n.join(" ");return L({},Object(N.d)(e,["isInvalid","isDisabled","isReadOnly","isRequired"]),{id:null!=(t=e.id)?t:null==a?void 0:a.id,disabled:e.disabled||e.isDisabled||(null==a?void 0:a.isDisabled),readOnly:e.readOnly||e.isReadOnly||(null==a?void 0:a.isReadOnly),required:e.required||e.isRequired||(null==a?void 0:a.isRequired),"aria-invalid":Object(j.a)(e.isInvalid||(null==a?void 0:a.isInvalid)),"aria-required":Object(j.a)(e.isRequired||(null==a?void 0:a.isRequired)),"aria-readonly":Object(j.a)(e.isReadOnly||(null==a?void 0:a.isReadOnly)),"aria-describedby":r||void 0,onFocus:Object(F.a)(null==a?void 0:a.onFocus,e.onFocus),onBlur:Object(F.a)(null==a?void 0:a.onBlur,e.onBlur)})}(Object(I.d)(e)),l=Object(j.b)("chakra-input",e.className);return n.createElement(y.a.input,U({},r,{__css:a.field,ref:t,className:l}))}));w.a&&(X.displayName="Input"),X.id="Input";var K=a("3L07"),V=a("D5Hz"),Y=a.n(V),Z=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(c.a,{as:"h1",mb:5,textAlign:["left","center"]},"Contact Us"),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(m.a,{padding:"8",bg:"blue.100",width:"92vw",centerContent:!0},r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),Y.a.sendForm("service_7fvgwqf","template_vwtrhbo",e.target,"user_5ER6plW1UcDspryz51fCw").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},r.a.createElement(q,null,r.a.createElement(H,null,"Full Name"),r.a.createElement(X,{name:"name",placeholder:"Enter your full name"})),r.a.createElement("br",null),r.a.createElement(q,null,r.a.createElement(H,null,"Email"),r.a.createElement(X,{name:"email",placeholder:"Enter your email"})),r.a.createElement("br",null),r.a.createElement(q,null,r.a.createElement(H,null,"Message"),r.a.createElement(X,{name:"message",height:"250px",placeholder:"Enter message"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K.a,{height:"48px",width:"500px",type:"submit",value:"Send",onClick:function(){return alert("Message Submitted!")}},"Submit")))))},t}(r.a.Component),Q=function(){var e=Object(d.b)().colorMode;return r.a.createElement(m.a,{px:5,width:"95vw"},r.a.createElement(c.a,{as:"h1",mb:5,textAlign:["left","center"]},"Interested?"),r.a.createElement("br",null),r.a.createElement(o.a,{columns:2,spacing:50,height:{sm:"940px",md:"470px"}},r.a.createElement(m.a,{flex:"1 1 auto"},r.a.createElement("iframe",{title:"3D Model",src:"https://myhub.autodesk360.com/ue2d7bfee/shares/public/SH56a43QTfd62c1cd968ec70f027b19cabfc?mode=embed",width:"100%",height:"100%",allowfullscreen:"true",webkitallowfullscreen:"true",alt:"3D Model",mozallowfullscreen:"true",frameborder:"0"})),r.a.createElement(m.a,{rounded:"lg",pb:8,position:"relative",bg:"blue.100",flex:"1 1 auto"},r.a.createElement("br",null),r.a.createElement(c.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:2,color:e&&"black"},"How can I join the Royals?"),r.a.createElement(s.a,{textAlign:"center",width:"90%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"400"},"Our team applications open for all John Fraser SS students at the beginning of each school year (around September/October). You can hear about us through the school announcements, and meet us in person at school club promo events where we usually demo our robots! If the deadline to apply has passed but you are still interested in joining, feel free to email us at jfssvex@gmail.com. We are always looking for dedicated members who are interested in learning about robotics!"),r.a.createElement("br",null),r.a.createElement(c.a,{textAlign:"center",as:"h2",fontSize:20,textTransform:"capitalize",my:2,color:e&&"black"},"What if I don’t have any prior experience?"),r.a.createElement(s.a,{textAlign:"center",width:"90%",rounded:"lg",mb:2,mx:"auto",color:"gray.700",fontWeight:"400"},"Not a problem! You do not need to have prior experience with the competition to join the club. Many members join without any knowledge - VEX is a great learning experience and we are all very welcoming!"))))},$=a("W/9C"),ee=a("Bl7J"),te=a("vrFN");t.default=function(){var e=Object(l.useStaticQuery)("2151550558"),t=(new Date).getFullYear()||"2020";return r.a.createElement(ee.a,{heroImage:e.heroImage,heroText:"Royals - 82050"},r.a.createElement(te.a,{title:"Home"}),r.a.createElement("br",null),r.a.createElement(i.a,null,r.a.createElement(m.a,{px:5,width:"95vw"},r.a.createElement(o.a,{columns:2,spacing:50},r.a.createElement(m.a,null,r.a.createElement(c.a,{as:"h2",size:"lg"},"Who Are We?"),r.a.createElement(s.a,null,"The John Fraser SS Royals are a group of students passionate for robotics, engineering, design, and programming. We compete in the high school VEX Robotics Competition in Ontario, every year constructing and coding a new robot to complete a challenge and compete with other teams across the province. Created in 2017, the club has expanded to include several members and also two teams for the 2019/20 season (82050A and 82050B). Unfortunately, only 82050A is running for Change Up due to COVID-19 and social distancing policies. We have been able to run because of our amazing teacher supervisors: Mr. Ghorvei, Ms. McEwen, and Mr. Lightbody - thank you! Furthermore, our school is able to fund us directly and is always advocating for us, thanks to our principal, Ms. Kaukab, and other office staff such as Ms. Santilli and Ms. Coulter!")),r.a.createElement(u.a,{width:"48vw",objectFit:"cover",src:a("3QVZ"),alt:"who are we"})))),r.a.createElement("center",null,r.a.createElement(m.a,{mt:20},r.a.createElement(p,null)),r.a.createElement(m.a,{mt:20},r.a.createElement(Q,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Z,null),r.a.createElement("br",null),r.a.createElement($.a,{data:e,year:t})))}},USkh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("tofy"),i=a("z0gp"),o=a("v7Hm"),c=a("MAJE");t.a=function(e){e.data;var t=e.year;return r.a.createElement(l.a,{as:"footer",h:20,justifyContent:"center",borderTop:"1px",borderColor:"gray.200",alignItems:"center"},r.a.createElement(i.a,{columns:3,spacing:8},r.a.createElement(o.a,{as:"span"},r.a.createElement("a",{href:"mailto: jfssvex@gmail.com"},r.a.createElement(c.a,{style:{textAlign:"left",alignSelf:"stretch"}},"jfssvex@gmail.com"))),r.a.createElement(o.a,null,r.a.createElement("a",{href:"https://github.com/jfssvex/jfssvex.github.io"},"Built with ReactJS & ChakraUI ©",t)),r.a.createElement(o.a,null,r.a.createElement("a",{href:"https://www.instagram.com/jfss_royals/"},r.a.createElement(c.a,{style:{textAlign:"right",alignSelf:"stretch"}},"Instagram")))))}},"vG+z":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("sKyC"),r=a("U6LL"),l=a("BXwj"),i=a("pr4h"),o=a("q1tI"),c=a("ODXe"),s=a("zlS4");function u(e){var t=e.src,a=e.srcSet,n=e.onLoad,r=e.onError,l=e.crossOrigin,i=e.sizes,u=e.ignoreFallback,d=Object(o.useState)((function(){return t?"loading":"pending"})),m=Object(c.a)(d,2),f=m[0],p=m[1];Object(o.useEffect)((function(){p(t?"loading":"pending")}),[t]);var b=Object(o.useRef)(),h=Object(o.useCallback)((function(){if(t){v();var e=new Image;e.src=t,l&&(e.crossOrigin=l),a&&(e.srcset=a),i&&(e.sizes=i),e.onload=function(e){v(),p("loaded"),null==n||n(e)},e.onerror=function(e){v(),p("failed"),null==r||r(e)},b.current=e}}),[t,l,a,i,n,r]),v=function(){b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return Object(s.a)((function(){if(!u)return"loading"===f&&h(),function(){v()}}),[f,h,u]),u?"loaded":f}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var f=o.forwardRef((function(e,t){var a=e.htmlWidth,n=e.htmlHeight,r=m(e,["htmlWidth","htmlHeight"]);return o.createElement("img",d({width:a,height:n,ref:t},r))})),p=Object(n.a)((function(e,t){var a=e.fallbackSrc,n=e.fallback,i=e.src,c=e.align,s=e.fit,p=e.loading,b=e.ignoreFallback,h=e.crossOrigin,v=m(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),g=null!=p||b,O=u(d({},e,{ignoreFallback:g})),E=d({ref:t,objectFit:s,objectPosition:c},g?v:Object(l.d)(v,["onError","onLoad"]));return"loaded"!==O?n||o.createElement(r.a.img,d({as:f,className:"chakra-image__placeholder",src:a},E)):o.createElement(r.a.img,d({as:f,src:i,crossOrigin:h,loading:p,className:"chakra-image"},E))}));i.a&&(p.displayName="Image")},z0gp:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("sKyC"),r=a("pr4h"),l=a("x9W9"),i=a("q1tI"),o=a("U6LL");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var u=Object(n.a)((function(e,t){var a=e.area,n=e.templateAreas,r=e.gap,l=e.rowGap,u=e.columnGap,d=e.column,m=e.row,f=e.autoFlow,p=e.autoRows,b=e.templateRows,h=e.autoColumns,v=e.templateColumns,g=s(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]);return i.createElement(o.a.div,c({ref:t,display:"grid",gridArea:a,gridTemplateAreas:n,gridGap:r,gridRowGap:l,gridColumnGap:u,gridAutoColumns:h,gridColumn:d,gridRow:m,gridAutoFlow:f,gridAutoRows:p,gridTemplateRows:b,gridTemplateColumns:v},g))}));r.a&&(u.displayName="Grid");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=Object(n.a)((function(e,t){var a,n,o=e.columns,c=e.spacingX,s=e.spacingY,m=e.spacing,f=e.minChildWidth,p=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["columns","spacingX","spacingY","spacing","minChildWidth"]),b=Boolean(f)?(n=f,Object(l.b)(n,(function(e){return Object(r.e)(e)?null:"repeat(auto-fit, minmax("+(t=e,(Object(r.f)(t)?t+"px":t)+", 1fr))");var t}))):(a=o,Object(l.b)(a,(function(e){return Object(r.e)(e)?null:"repeat("+e+", 1fr)"})));return i.createElement(u,d({ref:t,gap:m,columnGap:c,rowGap:s,templateColumns:b},p))}));r.a&&(m.displayName="SimpleGrid")}}]);
//# sourceMappingURL=component---src-pages-index-js-d2f1542d6c94a5d75d09.js.map