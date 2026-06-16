/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;class n{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i;}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(i,t));}return t}toString(){return this.cssText}}const r=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(s,t,e)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return (t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",u=l.reactiveElementPolyfillSupport,v={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},p=(t,i)=>i!==t&&(i==i||t==t),g={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:p},b="finalized";class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=g){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(b))return !1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(h(t));}else void 0!==t&&i.push(h(t));return i}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return ((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((s=>{const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e);}));})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=g){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:v).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:v;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;m[b]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const $=window,w=$.trustedTypes,y=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,k="?"+S,_=`<${k}>`,z=document,C=()=>z.createComment(""),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,M="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,T=/>/g,O=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,N=/"/g,D=/^(?:script|style|textarea|title)$/i,V=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),I=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),q=new WeakMap,B=z.createTreeWalker(z,129,null,!1);function L(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(i):i}const H=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=j;for(let i=0;i<s;i++){const s=t[i];let h,a,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,a=r.exec(s),null!==a);)c=r.lastIndex,r===j?"!--"===a[1]?r=U:void 0!==a[1]?r=T:void 0!==a[2]?(D.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=O):void 0!==a[3]&&(r=O):r===O?">"===a[0]?(r=null!=o?o:j,l=-1):void 0===a[1]?l=-2:(l=r.lastIndex-a[2].length,h=a[1],r=void 0===a[3]?O:'"'===a[3]?N:R):r===N||r===R?r=O:r===U||r===T?r=j:(r=O,o=void 0);const d=r===O&&t[i+1].startsWith("/>")?" ":"";n+=r===j?s+_:l>=0?(e.push(h),s.slice(0,l)+x+s.slice(l)+S+d):s+S+(-2===l?(e.push(void 0),i):d);}return [L(t,n+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class G{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[a,l]=H(t,i);if(this.el=G.createElement(a,s),B.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=B.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith(x)||i.startsWith(S)){const s=l[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+x).split(S),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?F:"?"===i[1]?Q:"@"===i[1]?X:W});}else h.push({type:6,index:o});}for(const i of t)e.removeAttribute(i);}if(D.test(e.tagName)){const t=e.textContent.split(S),i=t.length-1;if(i>0){e.textContent=w?w.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],C()),B.nextNode(),h.push({type:2,index:++o});e.append(t[i],C());}}}else if(8===e.nodeType)if(e.data===k)h.push({type:2,index:o});else {let t=-1;for(;-1!==(t=e.data.indexOf(S,t+1));)h.push({type:7,index:o}),t+=S.length-1;}o++;}}static createElement(t,i){const s=z.createElement("template");return s.innerHTML=t,s}}function Z(t,i,s=t,e){var o,n,r,h;if(i===I)return i;let a=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const l=A(i)?void 0:i._$litDirective$;return (null==a?void 0:a.constructor)!==l&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===l?a=void 0:(a=new l(t),a._$AT(t,s,e)),void 0!==e?(null!==(r=(h=s)._$Co)&&void 0!==r?r:h._$Co=[])[e]=a:s._$Cl=a),void 0!==a&&(i=Z(t,a._$AS(t,i.values),a,e)),i}class J{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:z).importNode(s,!0);B.currentNode=o;let n=B.nextNode(),r=0,h=0,a=e[0];for(;void 0!==a;){if(r===a.index){let i;2===a.type?i=new K(n,n.nextSibling,this,t):1===a.type?i=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(i=new tt(n,this,t)),this._$AV.push(i),a=e[++h];}r!==(null==a?void 0:a.index)&&(n=B.nextNode(),r++);}return B.currentNode=z,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class K{constructor(t,i,s,e){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Z(this,t,i),A(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==P&&A(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=G.createElement(L(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new J(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=q.get(t.strings);return void 0===i&&q.set(t.strings,i=new G(t)),i}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new K(this.k(C()),this.k(C()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class W{constructor(t,i,s,e,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=P;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,i,0),n=!A(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else {const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=Z(this,e[s+r],i,r),h===I&&(h=this._$AH[r]),n||(n=!A(h)||h!==this._$AH[r]),h===P?t=P:t!==P&&(t+=(null!=h?h:"")+o[r+1]),this._$AH[r]=h;}n&&!e&&this.j(t);}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class F extends W{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===P?void 0:t;}}const Y=w?w.emptyScript:"";class Q extends W{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==P?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name);}}class X extends W{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=Z(this,t,i,0))&&void 0!==s?s:P)===I)return;const e=this._$AH,o=t===P&&e!==P||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==P&&(e===P||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class tt{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t);}}const it=$.litHtmlPolyfillSupport;null==it||it(G,K),(null!==(f=$.litHtmlVersions)&&void 0!==f?f:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,et;class ot extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new K(i.insertBefore(C(),t),t,void 0,null!=s?s:{});}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return I}}ot.finalized=!0,ot._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return {kind:s,elements:e,finisher(i){customElements.define(t,i);}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this));},finisher(s){s.createProperty(i.key,t);}};function at(t){return (i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t);})(t,i,s):ht(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=1,dt=2,ut=t=>(...i)=>({_$litDirective$:t,values:i});class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s;}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt extends vt{constructor(t){if(super(t),this.et=P,t.type!==dt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===P||null==t)return this.ft=void 0,this.et=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const i=[t];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}pt.directiveName="unsafeHTML",pt.resultType=1;const gt=ut(pt);var bt=bt||{};Object.defineProperty(bt,"i",{value:!0}),bt.Shadowless=void 0;const mt=t=>class extends t{constructor(){super(...arguments),this.slots={},this.willYield=!1;}createRenderRoot(){return this}adoptChildren(){Array.from(this.childNodes).forEach((t=>{const i=this.getSlotNameForChild(t),{[i]:s=[]}=this.slots;Object.assign(this.slots,{[i]:[...s,t]});}));}getSlotNameForChild(t){return t instanceof Comment&&t.nextSibling instanceof Element?this.getSlotNameForChild(t.nextSibling):"slot"in t?t.slot||"":t instanceof Element&&t.hasAttribute("slot")&&t.getAttribute("slot")||""}isTextNodeEmpty(t){return !t.textContent||!t.textContent.trim()}isSlotEmpty(t){const i=this.slots[t];return !i||i.every((t=>t instanceof Comment||t instanceof Text&&this.isTextNodeEmpty(t)))}update(t){!this.hasUpdated&&this.willYield&&this.adoptChildren(),super.update(t);}yield(t,i){return this.slots[t]}};bt.Shadowless=mt;class ft extends(mt(ot)){constructor(){super(),this.config={id:0,name:"",bannerHtml:"",btnAllowAll:"",btnDenyAll:"",btnSettings:"",btnSave:"",settingsHtml:"",groups:[]},this.documentStylesheets=[],this.bannerVisible=!1,this.modalVisible=!1,this.addEventListener("unigraz-cmp-settings",(t=>{t instanceof CustomEvent&&("config"in t.detail&&this.setConfig(t.detail.config),"documentStylesheets"in t.detail&&this.setDocumentStylesheets(t.detail.documentStylesheets),"bannerVisible"in t.detail&&this.setBannerVisible(t.detail.bannerVisible),"modalVisible"in t.detail&&this.setModalVisible(t.detail.modalVisible),this.requestUpdate());}));}setConfig(t){this.config=t;}setDocumentStylesheets(t){this.documentStylesheets=t;}setBannerVisible(t){this.bannerVisible=t;}setModalVisible(t){this.modalVisible=t;}importStyles(){let t="";return this.documentStylesheets.length&&(t+="<style>",this.documentStylesheets.forEach((i=>{t+='@import "'+i+'";';})),t+="</style>"),V`${gt(t)}`}}let $t=class extends ft{constructor(){super(),this.css="",this.importDocumentStyles=!1,this.isFirstUpdated=!1,window.UniGrazCmpLibrary.registerUpdateCallback((()=>{this.fetchConfig();})),window.addEventListener("hashchange",(()=>{"#unigraz-cmp-modal"===location.hash&&this.showModal();}));}fetchConfig(){this.config=window.UniGrazCmpLibrary.getConfig(),this.config.id&&(window.UniGrazCmpLibrary.getConsentsGiven().length||this.showBanner(),this.triggerUpdateSettingsEvent());}attributeChangedCallback(t,i,s){super.attributeChangedCallback(t,i,s),this.fetchConfig(),this.updateDocumentStylesheets();}firstUpdated(t){super.firstUpdated(t),this.isFirstUpdated=!0,this.fetchConfig(),this.updateDocumentStylesheets();}updateDocumentStylesheets(){this.isFirstUpdated&&(this.documentStylesheets=[],this.importDocumentStyles&&this.ownerDocument.querySelectorAll('link[rel="stylesheet"]').forEach((t=>{const i=t.getAttribute("href");i&&this.documentStylesheets.push(i);})),this.css.length&&this.documentStylesheets.push(this.css),this.triggerUpdateSettingsEvent());}triggerUpdateSettingsEvent(){const t=new CustomEvent("unigraz-cmp-settings",{detail:{config:this.config,documentStylesheets:this.documentStylesheets,bannerVisible:this.bannerVisible,modalVisible:this.modalVisible}});for(const i of Array.from(this.children))i.dispatchEvent(t);}showBanner(){this.bannerVisible=!0,this.triggerUpdateSettingsEvent();}hideBanner(){this.bannerVisible=!1,this.triggerUpdateSettingsEvent();}showModal(){this.bannerVisible=!1,this.modalVisible=!0,this.triggerUpdateSettingsEvent();}hideModal(){this.modalVisible=!1,this.triggerUpdateSettingsEvent(),location.hash="";}render(){return V`
            <slot></slot>
        `}};t([at()],$t.prototype,"css",void 0),t([at()],$t.prototype,"importDocumentStyles",void 0),$t=t([rt("unigraz-cmp")],$t);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt=ut(class extends vt{constructor(t){var i;if(super(t),t.type!==ct||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var s,e;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(s=this.nt)||void 0===s?void 0:s.has(t))&&this.it.add(t);return this.render(i)}const o=t.element.classList;this.it.forEach((t=>{t in i||(o.remove(t),this.it.delete(t));}));for(const t in i){const s=!!i[t];s===this.it.has(t)||(null===(e=this.nt)||void 0===e?void 0:e.has(t))||(s?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)));}return I}}),yt=r`
  :host {
    background: #fff;
    color: #000;
  }
`;let xt=class extends ft{giveAllConsents(t){window.UniGrazCmpLibrary.giveAllConsents(),window.UniGrazCmpLibrary.persist(),this.parentNode.hideBanner();}showSettings(t){this.parentNode.showModal();}giveRequiredConsents(t){window.UniGrazCmpLibrary.giveRequiredConsents(),window.UniGrazCmpLibrary.persist(),this.parentNode.hideBanner();}render(){return V`
            ${this.importStyles()}
            <div id="unigraz-cmp-banner-backdrop" class=${wt({"d-none":!this.bannerVisible,"d-block":this.bannerVisible})}>
            <div id="unigraz-cmp-banner" class=${wt({"d-flex":this.bannerVisible,"d-none":!this.bannerVisible})}>
                <div class="unigraz-cmp-banner-content p-3">
                    ${this.config.bannerHtml?V`
                                <div class="unigraz-cmp-banner-text">
                                    ${gt(this.config.bannerHtml)}
                                </div>`:""}
                    ${this.config.btnAllowAll||this.config.btnDenyAll||this.config.btnSettings?V`
                                <div class="unigraz-cmp-banner-buttons">
                                    ${this.config.btnAllowAll?V`
                                                <button type="button" class="btn btn-primary" @click=${t=>this.giveAllConsents(t)}>
                                                    ${this.config.btnAllowAll}
                                                </button>`:""}

                                    ${this.config.btnDenyAll?V`
                                                <button type="button" class="btn btn-alternative" @click=${t=>this.giveRequiredConsents(t)}>
                                                    ${this.config.btnDenyAll}
                                                </button>`:""}

                                    ${this.config.btnSettings?V`
                                                <button type="button" class="btn btn-alternative" @click=${t=>this.showSettings(t)}>
                                                    ${this.config.btnSettings}
                                                </button>`:""}
                                </div>`:""}
                </div>
            </div>
        `}};xt.styles=[yt,r`
          :host {
          }
        `],t([at()],xt.prototype,"html",void 0),t([at()],xt.prototype,"btnAllowAll",void 0),t([at()],xt.prototype,"btnDenyAll",void 0),t([at()],xt.prototype,"btnSettings",void 0),xt=t([rt("unigraz-cmp-banner")],xt);let St=class extends ft{constructor(){super(),this.reset();}setModalVisible(t){super.setModalVisible(t),t&&(this.reset(),this.activateRequired(),this.activateGiven());}giveRequiredConsents(t){window.UniGrazCmpLibrary.giveRequiredConsents(),this.parentNode.hideModal();}toggleAccordion(t,i){const s="group"===i?t.target:t.target.parentNode;if(s.hasAttribute("aria-expanded")&&"target"in s.dataset){t.preventDefault(),t.stopPropagation();const i=s.closest(s.dataset.target);"true"===s.getAttribute("aria-expanded").toString()?(s.setAttribute("aria-expanded","false"),i.classList.remove("active")):(s.setAttribute("aria-expanded","true"),i.classList.add("active")),this.requestUpdate();}}activateAll(){this.config.groups.forEach((t=>{this.selectedGroups.includes(t.id)||this.selectedGroups.push(t.id),t.services.forEach((t=>{this.selectedServices.includes(t.id)||this.selectedServices.push(t.id);}));})),this.updateSelectedGroups(),this.requestUpdate();}reset(){this.selectedGroups=[],this.selectedServices=[];}activateRequired(){const t=new CustomEvent("ignore");window.UniGrazCmpLibrary.getRequiredServiceIds().forEach((i=>{this.selectedServices.includes(i)||this.toggleService(t,i);}));}activateGiven(){const t=new CustomEvent("ignore");window.UniGrazCmpLibrary.getConsentsGiven().forEach((i=>{this.selectedServices.includes(i)||this.toggleService(t,i);}));}toggleGroup(t,i){if(t.preventDefault(),t.stopPropagation(),this.selectedGroups.includes(i)){const t=this.selectedGroups.indexOf(i);this.selectedGroups.splice(t,1),this.config.groups.forEach((t=>{t.id===i&&t.services.forEach((t=>{if(this.selectedServices.includes(t.id)){const i=this.selectedServices.indexOf(t.id);this.selectedServices.splice(i,1);}}));}));}else this.selectedGroups.push(i),this.config.groups.forEach((t=>{t.id===i&&t.services.forEach((t=>{this.selectedServices.includes(t.id)||this.selectedServices.push(t.id);}));}));this.updateSelectedGroups(),this.requestUpdate();}updateSelectedGroups(){this.config.groups.forEach((t=>{let i=!0;if(t.services.forEach((t=>{this.selectedServices.includes(t.id)||(i=!1);})),!i&&this.selectedGroups.includes(t.id)){const i=this.selectedGroups.indexOf(t.id);this.selectedGroups.splice(i,1);}else i&&!this.selectedGroups.includes(t.id)&&this.selectedGroups.push(t.id);}));}toggleService(t,i){if(t.preventDefault(),t.stopPropagation(),this.selectedServices.includes(i)){const t=this.selectedServices.indexOf(i);this.selectedServices.splice(t,1);}else this.selectedServices.push(i);this.updateSelectedGroups(),this.requestUpdate();}save(t){window.UniGrazCmpLibrary.giveConsents(this.selectedServices);let i=[];this.config.groups.forEach((t=>{t.services.forEach((t=>{this.selectedServices.includes(t.id)||i.push(t.id);}));})),window.UniGrazCmpLibrary.revokeConsents(i),window.UniGrazCmpLibrary.persist(),this.parentNode.hideModal();}row(t,i){return i?V`
                    <dt class="col-12">${t}</dt>
                    <dd class="col-12">${i}</dd>
            `:""}render(){return V`
            ${this.importStyles()}
            <div id="unigraz-cmp-modal-backdrop" class=${wt({"d-none":!this.modalVisible,"d-block":this.modalVisible})}>
            <div id="unigraz-cmp-modal" class=${wt({modal:!0,"modal-lg":!0,"d-block":this.modalVisible})} role="${this.modalVisible?"dialog":P}" aria-modal="${this.modalVisible?"true":P}">
                <div class="modal-dialog">
                    <div class="modal-content border-0">
                        <div class="modal-header d-flex">
                            ${gt(this.config.settingsHeader)}
                            ${this.config.btnDenyAll?V`
                                        ${this.config.btnDenyAll?V`
                                                    <button type="button" class="btn-close" aria-label="${this.config.btnDenyAll}" @click=${t=>this.giveRequiredConsents(t)}>
                                                    </button>`:""}
                                `:""}
                        </div>
                        <div class="modal-body">
                            <div class="unigraz-cmp-modal-text">
                                ${gt(this.config.settingsHtml)}
                            </div>
                            <div id="unigraz-cmp-modal-accordion" class="unigraz-cmp-modal-accordion accordion">
                                ${this.config.groups.map((t=>V`
                                        <div id="group${t.id}"
                                             class="unigraz-cmp-modal-group accordion-item">
                                                <h3 class="accordion-header d-flex">
                                                    <div class="checkbox d-flex pe-3">
                                                        <input type="checkbox"
                                                               id="group-${t.id}-checkbox"
                                                               name="group[]"
                                                               value="${t.id}"
                                                               ?disabled=${"required"===t.type}
                                                               .checked=${this.selectedGroups.includes(t.id)}
                                                               @change=${i=>this.toggleGroup(i,t.id)}/>
                                                        <label for="group-${t.id}-checkbox"
                                                               class="visually-hidden-focusable">
                                                            ${t.name}
                                                        </label>
                                                    </div>
                                                    <button class="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#group${t.id}-content"
                                                            aria-expanded="false"
                                                            aria-controls="group${t.id}-content">
                                                        ${t.name}
                                                    </button>
                                                </h3>
                                                <div id="group${t.id}-content"
                                                     class="unigraz-cmp-modal-group-content accordion-collapse collapse"
                                                     data-bs-parent="#unigraz-cmp-modal-accordion">
                                                    <div class="accordion-body pt-0">
                                                        ${t.html?V`
                                                                    <div class="unigraz-cmp-modal-group-text">
                                                                        ${gt(t.html)}
                                                                    </div>
                                                                `:""}
                                                        ${t.services.map((i=>V`
                                                                <div id="service${i.id}"
                                                                     class="unigraz-cmp-modal-service card border-0">
                                                                    <div class="card-body px-0">
                                                                        <h4 class="card-title h5">
                                                                            <div class="checkbox">
                                                                                <input type="checkbox"
                                                                                       id="service${i.id}"
                                                                                       name="service[]"
                                                                                       value="${i.id}"
                                                                                       ?disabled=${"required"===t.type}
                                                                                       .checked=${this.selectedServices.includes(i.id)}
                                                                                       @change=${t=>this.toggleService(t,i.id)}/>
                                                                                <label for="service${i.id}">
                                                                                    ${i.name}
                                                                                </label>
                                                                            </div>
                                                                        </h4>
                                                                        <div class="card-text">
                                                                            ${i.html?V`
                                                                                        <div class="unigraz-cmp-modal-group-service-text">
                                                                                            ${gt(i.html)}
                                                                                        </div>
                                                                                    `:""}
                                                                            ${i.cookies.length?V`
                                                                                        <div id="servicegroup${i.id}"
                                                                                             class="unigraz-cmp-modal-servicegroup ms-4">
                                                                                            <div class="header">
                                                                                                <button class="accordion-button collapsed p-0"
                                                                                                        type="button"
                                                                                                        data-bs-toggle="collapse"
                                                                                                        data-bs-target="#servicegroup${i.id}-content"
                                                                                                        aria-expanded="false"
                                                                                                        aria-controls="servicegroup${i.id}-content">
                                                                                                    <span class="show">Cookie-Informationen einblenden</span>
                                                                                                    <span class="hide">Cookie-Informationen ausblenden</span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div id="servicegroup${i.id}-content"
                                                                                                 class="unigraz-cmp-modal-servicegroup-content collapse">
                                                                                                ${i.cookies.map((t=>V`
                                                                                                        <div class="p-3 bg-light">
                                                                                                            <dl class="row mb-0">
                                                                                                                ${this.row("Name",t.name)}
                                                                                                                ${this.row("Zweck",t.purpose)}
                                                                                                                ${this.row("Laufzeit",t.duration)}
                                                                                                            </dl>
                                                                                                        </div>
                                                                                                    `))}
                                                                                            </div>
                                                                                        </div>
                                                                                    `:""}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            `))}
                                                    </div>
                                                </div>
                                        </div>
                                    `))}
                            </div>
                        </div>
                        ${this.config.btnSave?V`
                                    <div class="modal-footer justify-content-start border-0">
                                        <div class="unigraz-cmp-modal-buttons">
                                            <button type="button" class="btn btn-secondary" @click=${t=>this.save(t)}>
                                                ${this.config.btnSave}
                                            </button>
                                        </div>
                                    </div>`:""}
                    </div>
                </div>
            </div>
        `}};St.styles=[yt,r`
          .accordionbox_item {
            padding: 15px 22px;
            border-top: 1px solid #000;
            position: relative;
          }

          .accordionbox_item:last-child {
            border-bottom: 1px solid #000;
          }

          .accordionbox_headline {
            position: relative;
          }

          .accordionbox_headline h3 {
            margin: 0 !important;
            padding: 0 0 0 22px;
            cursor: pointer;
          }

          .accordionbox_headline h3 button {
            font-size: 28px;
            line-height: 32px !important;
            font-weight: bold;
          }

          .accordionbox_headline .checkbox {
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -5px;
            transform: translateY(-50%);
          }

          .accordionbox_headline .accordionbox_arrow {
            width: 24px;
            height: 12px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29.657' height='17.657' viewBox='0 0 29.657 17.657'%3E%3Cpath id='Pfad_15398' data-name='Pfad 15398' d='M0,0,12,12,0,24' transform='translate(26.828 2.828) rotate(90)' fill='none' stroke='%23000' stroke-linecap='round' stroke-width='4'/%3E%3C/svg%3E%0A");
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -6px;
            cursor: pointer;
            transition-duration: 0.4s;
            transition-property: transform;
          }

          .accordionbox_item.active .accordionbox_headline .accordionbox_arrow {
            transform: rotate(180deg);
          }

          .unigraz-cmp-modal-group-content,
          .unigraz-cmp-modal-servicegroup-content {
            overflow: hidden;
            max-height: 0;
            transition: all 0.4s cubic-bezier(0, 1, 0, 1);
            opacity: 0;
          }

          .accordionbox_content .accordionbox_content_wrap {
            padding: 15px 0 0 22px;
          }

          .unigraz-cmp-modal-group.active .unigraz-cmp-modal-group-content,
          .unigraz-cmp-modal-servicegroup.active .unigraz-cmp-modal-servicegroup-content {
            overflow: inherit;
            max-height: 100000px;
            transition: all 0.4s ease-in-out;
            opacity: 1;
          }

          .accordionbox_content .card-body {
            padding: 15px 0;
          }

          .accordionbox_content .card-text {
            padding: 0 0 0 22px;
          }

          .unigraz-cmp-modal-servicegroup button {
            font-size: 0.875rem;
          }

          .unigraz-cmp-modal-servicegroup:not(.active) button .hide,
          .unigraz-cmp-modal-servicegroup.active button .show {
            display: none !important;
          }
        `],t([at({attribute:!1})],St.prototype,"selectedGroups",void 0),t([at({attribute:!1})],St.prototype,"selectedServices",void 0),St=t([rt("unigraz-cmp-modal")],St);
