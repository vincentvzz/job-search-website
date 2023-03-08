(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cr=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],h=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,h=s+2<t.length,c=h?t[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;h||(m=64,o||(p=64)),i.push(n[d],n[u],n[p],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new lr;const p=r<<2|a>>4;if(i.push(p),c!==64){const m=a<<4&240|c>>2;if(i.push(m),u!==64){const L=c<<6&192|u;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ur=function(t){const e=wi(t);return Ei.encodeByteArray(e,!0)},Ht=function(t){return ur(t).replace(/\./g,"")},fr=function(t){try{return Ei.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=()=>dr().__FIREBASE_DEFAULTS__,gr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fr(t[1]);return e&&JSON.parse(e)},Ii=()=>{try{return pr()||gr()||mr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yr=t=>{var e,n;return(n=(e=Ii())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vr=t=>{const e=yr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ar=()=>{var t;return(t=Ii())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ht(JSON.stringify(n)),Ht(JSON.stringify(o)),a].join(".")}function Ir(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ti(){try{return typeof indexedDB=="object"}catch{return!1}}function bi(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Tr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="FirebaseError";class G extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=br,Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ie.prototype.create)}}class ie{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?_r(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new G(s,a,i)}}function _r(t,e){return t.replace(Cr,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Cr=/\{\$([^}]+)}/g;function Vt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Mn(r)&&Mn(o)){if(!Vt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Mn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=1e3,Dr=2,$r=4*60*60*1e3,Rr=.5;function Pn(t,e=Sr,n=Dr){const i=e*Math.pow(n,t),s=Math.round(Rr*i*(Math.random()-.5)*2);return Math.min($r,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){return t&&t._delegate?t._delegate:t}class j{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kr(e))try{this.getOrInitializeService({instanceIdentifier:X})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=X){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=X){return this.instances.has(e)}getOptions(e=X){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Nr(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=X){return this.component?this.component.multipleInstances?e:X:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nr(t){return t===X?void 0:t}function kr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Or(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(y||(y={}));const Mr={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},Pr=y.INFO,xr={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},jr=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=xr[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class en{constructor(e){this.name=e,this._logLevel=Pr,this._logHandler=jr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...e),this._logHandler(this,y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...e),this._logHandler(this,y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,y.INFO,...e),this._logHandler(this,y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,y.WARN,...e),this._logHandler(this,y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...e),this._logHandler(this,y.ERROR,...e)}}const Br=(t,e)=>e.some(n=>t instanceof n);let xn,jn;function Fr(){return xn||(xn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ur(){return jn||(jn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ci=new WeakMap,je=new WeakMap,Si=new WeakMap,Ie=new WeakMap,nn=new WeakMap;function Hr(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(H(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ci.set(n,t)}).catch(()=>{}),nn.set(e,t),e}function Vr(t){if(je.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});je.set(t,e)}let Be={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return je.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Si.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zr(t){Be=t(Be)}function Gr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Te(this),e,...n);return Si.set(i,e.sort?e.sort():[e]),H(i)}:Ur().includes(t)?function(...e){return t.apply(Te(this),e),H(Ci.get(this))}:function(...e){return H(t.apply(Te(this),e))}}function qr(t){return typeof t=="function"?Gr(t):(t instanceof IDBTransaction&&Vr(t),Br(t,Fr())?new Proxy(t,Be):t)}function H(t){if(t instanceof IDBRequest)return Hr(t);if(Ie.has(t))return Ie.get(t);const e=qr(t);return e!==t&&(Ie.set(t,e),nn.set(e,t)),e}const Te=t=>nn.get(t);function Di(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=H(o);return i&&o.addEventListener("upgradeneeded",h=>{i(H(o.result),h.oldVersion,h.newVersion,H(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(h=>{r&&h.addEventListener("close",()=>r()),s&&h.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Kr=["get","getKey","getAll","getAllKeys","count"],Wr=["put","add","delete","clear"],be=new Map;function Bn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(be.get(e))return be.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Wr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Kr.includes(n)))return;const r=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let c=h.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&h.done]))[0]};return be.set(e,r),r}zr(t=>({...t,get:(e,n,i)=>Bn(e,n)||t.get(e,n,i),has:(e,n)=>!!Bn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yr(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Yr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fe="@firebase/app",Fn="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new en("@firebase/app"),Jr="@firebase/app-compat",Qr="@firebase/analytics-compat",Zr="@firebase/analytics",to="@firebase/app-check-compat",eo="@firebase/app-check",no="@firebase/auth",io="@firebase/auth-compat",so="@firebase/database",ro="@firebase/database-compat",oo="@firebase/functions",ao="@firebase/functions-compat",ho="@firebase/installations",co="@firebase/installations-compat",lo="@firebase/messaging",uo="@firebase/messaging-compat",fo="@firebase/performance",po="@firebase/performance-compat",go="@firebase/remote-config",mo="@firebase/remote-config-compat",yo="@firebase/storage",vo="@firebase/storage-compat",Ao="@firebase/firestore",wo="@firebase/firestore-compat",Eo="firebase",Io="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]",To={[Fe]:"fire-core",[Jr]:"fire-core-compat",[Zr]:"fire-analytics",[Qr]:"fire-analytics-compat",[eo]:"fire-app-check",[to]:"fire-app-check-compat",[no]:"fire-auth",[io]:"fire-auth-compat",[so]:"fire-rtdb",[ro]:"fire-rtdb-compat",[oo]:"fire-fn",[ao]:"fire-fn-compat",[ho]:"fire-iid",[co]:"fire-iid-compat",[lo]:"fire-fcm",[uo]:"fire-fcm-compat",[fo]:"fire-perf",[po]:"fire-perf-compat",[go]:"fire-rc",[mo]:"fire-rc-compat",[yo]:"fire-gcs",[vo]:"fire-gcs-compat",[Ao]:"fire-fst",[wo]:"fire-fst-compat","fire-js":"fire-js",[Eo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Map,He=new Map;function bo(t,e){try{t.container.addComponent(e)}catch(n){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function z(t){const e=t.name;if(He.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;He.set(e,t);for(const n of zt.values())bo(n,t);return!0}function $t(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},V=new ie("app","Firebase",_o);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new j("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=Io;function $i(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ue,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw V.create("bad-app-name",{appName:String(s)});if(n||(n=Ar()),!n)throw V.create("no-options");const r=zt.get(s);if(r){if(Vt(n,r.options)&&Vt(i,r.config))return r;throw V.create("duplicate-app",{appName:s})}const o=new Lr(s);for(const h of He.values())o.addComponent(h);const a=new Co(n,i,o);return zt.set(s,a),a}function Ri(t=Ue){const e=zt.get(t);if(!e&&t===Ue)return $i();if(!e)throw V.create("no-app",{appName:t});return e}function P(t,e,n){var i;let s=(i=To[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(a.join(" "));return}z(new j(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="firebase-heartbeat-database",$o=1,At="firebase-heartbeat-store";let _e=null;function Oi(){return _e||(_e=Di(Do,$o,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(At)}}}).catch(t=>{throw V.create("idb-open",{originalErrorMessage:t.message})})),_e}async function Ro(t){try{return(await Oi()).transaction(At).objectStore(At).get(Ni(t))}catch(e){if(e instanceof G)tt.warn(e.message);else{const n=V.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(n.message)}}}async function Un(t,e){try{const i=(await Oi()).transaction(At,"readwrite");return await i.objectStore(At).put(e,Ni(t)),i.done}catch(n){if(n instanceof G)tt.warn(n.message);else{const i=V.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tt.warn(i.message)}}}function Ni(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=1024,No=30*24*60*60*1e3;class ko{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mo(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=No}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hn(),{heartbeatsToSend:n,unsentEntries:i}=Lo(this._heartbeatsCache.heartbeats),s=Ht(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Hn(){return new Date().toISOString().substring(0,10)}function Lo(t,e=Oo){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Vn(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Mo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ti()?bi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ro(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Un(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Un(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vn(t){return Ht(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){z(new j("platform-logger",e=>new Xr(e),"PRIVATE")),z(new j("heartbeat",e=>new ko(e),"PRIVATE")),P(Fe,Fn,t),P(Fe,Fn,"esm2017"),P("fire-js","")}Po("");var xo="firebase",jo="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */P(xo,jo,"app");var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l,sn=sn||{},f=Bo||self;function Gt(){}function se(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Fo(t){return Object.prototype.hasOwnProperty.call(t,Ce)&&t[Ce]||(t[Ce]=++Uo)}var Ce="closure_uid_"+(1e9*Math.random()>>>0),Uo=0;function Ho(t,e,n){return t.call.apply(t.bind,arguments)}function Vo(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_=Ho:_=Vo,_.apply(null,arguments)}function Bt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function T(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function q(){this.s=this.s,this.o=this.o}var zo=0;q.prototype.s=!1;q.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zo!=0)&&Fo(this)};q.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ki=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function zn(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(se(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function C(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var Go=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",Gt,e),f.removeEventListener("test",Gt,e)}catch{}return t}();function qt(t){return/^[\s\xa0]*$/.test(t)}var Gn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Se(t,e){return t<e?-1:t>e?1:0}function re(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return re().indexOf(t)!=-1}function on(t){return on[" "](t),t}on[" "]=Gt;function qo(t){var e=Xo;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ko=M("Opera"),wt=M("Trident")||M("MSIE"),Li=M("Edge"),Ve=Li||wt,Mi=M("Gecko")&&!(re().toLowerCase().indexOf("webkit")!=-1&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),Wo=re().toLowerCase().indexOf("webkit")!=-1&&!M("Edge");function Pi(){var t=f.document;return t?t.documentMode:void 0}var ze;t:{var De="",$e=function(){var t=re();if(Mi)return/rv:([^\);]+)(\)|;)/.exec(t);if(Li)return/Edge\/([\d\.]+)/.exec(t);if(wt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Wo)return/WebKit\/(\S+)/.exec(t);if(Ko)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($e&&(De=$e?$e[1]:""),wt){var Re=Pi();if(Re!=null&&Re>parseFloat(De)){ze=String(Re);break t}}ze=De}var Xo={};function Yo(){return qo(function(){let t=0;const e=Gn(String(ze)).split("."),n=Gn("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Se(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Se(s[2].length==0,r[2].length==0)||Se(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}f.document&&wt&&Pi();function Et(t,e){if(C.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mi){t:{try{on(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Jo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Et.X.h.call(this)}}T(Et,C);var Jo={2:"touch",3:"pen",4:"mouse"};Et.prototype.h=function(){Et.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),Qo=0;function Zo(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Qo,this.ba=this.ea=!1}function oe(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function an(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function xi(t){const e={};for(const n in t)e[n]=t[n];return e}const qn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ji(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<qn.length;r++)n=qn[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ae(t){this.src=t,this.g={},this.h=0}ae.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=qe(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Zo(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Ge(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=ki(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(oe(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qe(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var hn="closure_lm_"+(1e6*Math.random()|0),Oe={};function Bi(t,e,n,i,s){if(i&&i.once)return Ui(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Bi(t,e[r],n,i,s);return null}return n=un(n),t&&t[Ot]?t.N(e,n,Rt(i)?!!i.capture:!!i,s):Fi(t,e,n,!1,i,s)}function Fi(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Rt(s)?!!s.capture:!!s,a=ln(t);if(a||(t[hn]=a=new ae(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=ta(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Go||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Vi(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ta(){function t(n){return e.call(t.src,t.listener,n)}const e=ea;return t}function Ui(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ui(t,e[r],n,i,s);return null}return n=un(n),t&&t[Ot]?t.O(e,n,Rt(i)?!!i.capture:!!i,s):Fi(t,e,n,!0,i,s)}function Hi(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Hi(t,e[r],n,i,s);else i=Rt(i)?!!i.capture:!!i,n=un(n),t&&t[Ot]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=qe(r,n,i,s),-1<n&&(oe(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ln(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qe(e,n,i,s)),(n=-1<t?e[t]:null)&&cn(n))}function cn(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ot])Ge(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Vi(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ln(e))?(Ge(n,t),n.h==0&&(n.src=null,e[hn]=null)):oe(t)}}}function Vi(t){return t in Oe?Oe[t]:Oe[t]="on"+t}function ea(t,e){if(t.ba)t=!0;else{e=new Et(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&cn(t),t=n.call(i,e)}return t}function ln(t){return t=t[hn],t instanceof ae?t:null}var Ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function un(t){return typeof t=="function"?t:(t[Ne]||(t[Ne]=function(e){return t.handleEvent(e)}),t[Ne])}function E(){q.call(this),this.i=new ae(this),this.P=this,this.I=null}T(E,q);E.prototype[Ot]=!0;E.prototype.removeEventListener=function(t,e,n,i){Hi(this,t,e,n,i)};function I(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new C(e,t);else if(e instanceof C)e.target=e.target||t;else{var s=e;e=new C(i,t),ji(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ft(o,i,!0,e)&&s}if(o=e.g=t,s=Ft(o,i,!0,e)&&s,s=Ft(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Ft(o,i,!1,e)&&s}E.prototype.M=function(){if(E.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)oe(n[i]);delete t.g[e],t.h--}}this.I=null};E.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};E.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ft(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,h=o.ha||o.src;o.ea&&Ge(t.i,o),s=a.call(h,i)!==!1&&s}}return s&&!i.defaultPrevented}var fn=f.JSON.stringify;function na(){var t=qi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ia{constructor(){this.h=this.g=null}add(e,n){const i=zi.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var zi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new sa,t=>t.reset());class sa{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ra(t){f.setTimeout(()=>{throw t},0)}function Gi(t,e){Ke||oa(),We||(Ke(),We=!0),qi.add(t,e)}var Ke;function oa(){var t=f.Promise.resolve(void 0);Ke=function(){t.then(aa)}}var We=!1,qi=new ia;function aa(){for(var t;t=na();){try{t.h.call(t.g)}catch(n){ra(n)}var e=zi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}We=!1}function he(t,e){E.call(this),this.h=t||1,this.g=e||f,this.j=_(this.lb,this),this.l=Date.now()}T(he,E);l=he.prototype;l.ca=!1;l.R=null;l.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),I(this,"tick"),this.ca&&(dn(this),this.start()))}};l.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}l.M=function(){he.X.M.call(this),dn(this),delete this.g};function pn(t,e,n){if(typeof t=="function")n&&(t=_(t,n));else if(t&&typeof t.handleEvent=="function")t=_(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Ki(t){t.g=pn(()=>{t.g=null,t.i&&(t.i=!1,Ki(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ha extends q{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ki(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(t){q.call(this),this.h=t,this.g={}}T(It,q);var Kn=[];function Wi(t,e,n,i){Array.isArray(n)||(n&&(Kn[0]=n.toString()),n=Kn);for(var s=0;s<n.length;s++){var r=Bi(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Xi(t){an(t.g,function(e,n){this.g.hasOwnProperty(n)&&cn(e)},t),t.g={}}It.prototype.M=function(){It.X.M.call(this),Xi(this)};It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ce(){this.g=!0}ce.prototype.Aa=function(){this.g=!1};function ca(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var d=c[0];c=c[1];var u=d.split("_");o=2<=u.length&&u[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function la(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function it(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fa(t,n)+(i?" "+i:"")})}function ua(t,e){t.info(function(){return"TIMEOUT: "+e})}ce.prototype.info=function(){};function fa(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return fn(n)}catch{return e}}var lt={},Wn=null;function gn(){return Wn=Wn||new E}lt.Pa="serverreachability";function Yi(t){C.call(this,lt.Pa,t)}T(Yi,C);function Tt(t){const e=gn();I(e,new Yi(e))}lt.STAT_EVENT="statevent";function Ji(t,e){C.call(this,lt.STAT_EVENT,t),this.stat=e}T(Ji,C);function S(t){const e=gn();I(e,new Ji(e,t))}lt.Qa="timingevent";function Qi(t,e){C.call(this,lt.Qa,t),this.size=e}T(Qi,C);function Nt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var mn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},da={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function yn(){}yn.prototype.h=null;function Xn(t){return t.h||(t.h=t.i())}function pa(){}var kt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vn(){C.call(this,"d")}T(vn,C);function An(){C.call(this,"c")}T(An,C);var Xe;function le(){}T(le,yn);le.prototype.g=function(){return new XMLHttpRequest};le.prototype.i=function(){return{}};Xe=new le;function Lt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new It(this),this.O=ga,t=Ve?125:void 0,this.T=new he(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Zi}function Zi(){this.i=null,this.g="",this.h=!1}var ga=45e3,Ye={},Kt={};l=Lt.prototype;l.setTimeout=function(t){this.O=t};function Je(t,e,n){t.K=1,t.v=fe(B(e)),t.s=n,t.P=!0,ts(t,null)}function ts(t,e){t.F=Date.now(),Mt(t),t.A=B(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),hs(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Zi,t.g=$s(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ha(_(t.La,t,t.g),t.N)),Wi(t.S,t.g,"readystatechange",t.ib),e=t.H?xi(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Tt(),ca(t.j,t.u,t.A,t.m,t.U,t.s)}l.ib=function(t){t=t.target;const e=this.L;e&&x(t)==3?e.l():this.La(t)};l.La=function(t){try{if(t==this.g)t:{const d=x(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>d)&&(d!=3||Ve||this.g&&(this.h.h||this.g.fa()||Zn(this.g)))){this.I||d!=4||e==7||(e==8||0>=u?Tt(3):Tt(2)),ue(this);var n=this.g.aa();this.Y=n;e:if(es(this)){var i=Zn(this.g);t="";var s=i.length,r=x(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Y(this),yt(this);var o="";break e}this.h.i=new f.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,la(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qt(a)){var c=a;break e}}c=null}if(n=c)it(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qe(this,n);else{this.i=!1,this.o=3,S(12),Y(this),yt(this);break t}}this.P?(ns(this,d,o),Ve&&this.i&&d==3&&(Wi(this.S,this.T,"tick",this.hb),this.T.start())):(it(this.j,this.m,o,null),Qe(this,o)),d==4&&Y(this),this.i&&!this.I&&(d==4?_s(this.l,this):(this.i=!1,Mt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,S(12)):(this.o=0,S(13)),Y(this),yt(this)}}}catch{}finally{}};function es(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ns(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=ma(t,n),s==Kt){e==4&&(t.o=4,S(14),i=!1),it(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ye){t.o=4,S(15),it(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else it(t.j,t.m,s,null),Qe(t,s);es(t)&&s!=Kt&&s!=Ye&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,S(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cn(e),e.K=!0,S(11))):(it(t.j,t.m,n,"[Invalid Chunked Response]"),Y(t),yt(t))}l.hb=function(){if(this.g){var t=x(this.g),e=this.g.fa();this.C<e.length&&(ue(this),ns(this,t,e),this.i&&t!=4&&Mt(this))}};function ma(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Kt:(n=Number(e.substring(n,i)),isNaN(n)?Ye:(i+=1,i+n>e.length?Kt:(e=e.substr(i,n),t.C=i+n,e)))}l.cancel=function(){this.I=!0,Y(this)};function Mt(t){t.V=Date.now()+t.O,is(t,t.O)}function is(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nt(_(t.gb,t),e)}function ue(t){t.B&&(f.clearTimeout(t.B),t.B=null)}l.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ua(this.j,this.A),this.K!=2&&(Tt(),S(17)),Y(this),this.o=2,yt(this)):is(this,this.V-t)};function yt(t){t.l.G==0||t.I||_s(t.l,t)}function Y(t){ue(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,dn(t.T),Xi(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qe(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ze(n.h,t))){if(!t.J&&Ze(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yt(n),me(n);else break t;_n(n),S(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Nt(_(n.cb,n),6e3));if(1>=us(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else J(n,11)}else if((t.J||n.g==t)&&Yt(n),!qt(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const d=c[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const u=c[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const L=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(L){var r=i.h;r.g||L.indexOf("spdy")==-1&&L.indexOf("quic")==-1&&L.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wn(r,r.h),r.h=null))}if(i.D){const F=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;F&&(i.za=F,v(i.F,i.D,F))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Ds(i,i.H?i.ka:null,i.V),o.J){fs(i.h,o);var a=o,h=i.J;h&&a.setTimeout(h),a.B&&(ue(a),Mt(a)),i.g=o}else Ts(i);0<n.i.length&&ye(n)}else c[0]!="stop"&&c[0]!="close"||J(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?J(n,7):bn(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Tt(4)}catch{}}function ya(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(se(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function va(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(se(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ss(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(se(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=va(t),i=ya(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Aa(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Z(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Z){this.h=e!==void 0?e:t.h,Wt(this,t.j),this.s=t.s,this.g=t.g,Xt(this,t.m),this.l=t.l,e=t.i;var n=new bt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yn(this,n),this.o=t.o}else t&&(n=String(t).match(rs))?(this.h=!!e,Wt(this,n[1]||"",!0),this.s=gt(n[2]||""),this.g=gt(n[3]||"",!0),Xt(this,n[4]),this.l=gt(n[5]||"",!0),Yn(this,n[6]||"",!0),this.o=gt(n[7]||"")):(this.h=!!e,this.i=new bt(null,this.h))}Z.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mt(e,Jn,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(mt(e,Jn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(mt(n,n.charAt(0)=="/"?Ia:Ea,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mt(n,ba)),t.join("")};function B(t){return new Z(t)}function Wt(t,e,n){t.j=n?gt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yn(t,e,n){e instanceof bt?(t.i=e,_a(t.i,t.h)):(n||(e=mt(e,Ta)),t.i=new bt(e,t.h))}function v(t,e,n){t.i.set(e,n)}function fe(t){return v(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wa),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wa(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jn=/[#\/\?@]/g,Ea=/[#\?:]/g,Ia=/[#\?]/g,Ta=/[#\?@]/g,ba=/#/g;function bt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function K(t){t.g||(t.g=new Map,t.h=0,t.i&&Aa(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}l=bt.prototype;l.add=function(t,e){K(this),this.i=null,t=ut(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function os(t,e){K(t),e=ut(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function as(t,e){return K(t),e=ut(t,e),t.g.has(e)}l.forEach=function(t,e){K(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};l.oa=function(){K(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};l.W=function(t){K(this);let e=[];if(typeof t=="string")as(this,t)&&(e=e.concat(this.g.get(ut(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};l.set=function(t,e){return K(this),this.i=null,t=ut(this,t),as(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};l.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function hs(t,e,n){os(t,e),0<n.length&&(t.i=null,t.g.set(ut(t,e),rn(n)),t.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ut(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _a(t,e){e&&!t.j&&(K(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(os(this,i),hs(this,s,n))},t)),t.j=e}var Ca=class{constructor(t,e){this.h=t,this.g=e}};function cs(t){this.l=t||Sa,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sa=10;function ls(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function us(t){return t.h?1:t.g?t.g.size:0}function Ze(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wn(t,e){t.g?t.g.add(e):t.h=e}function fs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cs.prototype.cancel=function(){if(this.i=ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ds(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return rn(t.i)}function En(){}En.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)};En.prototype.parse=function(t){return f.JSON.parse(t,void 0)};function Da(){this.g=new En}function $a(t,e,n){const i=n||"";try{ss(t,function(s,r){let o=s;Rt(s)&&(o=fn(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ra(t,e){const n=new ce;if(f.Image){const i=new Image;i.onload=Bt(Ut,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Bt(Ut,n,i,"TestLoadImage: error",!1,e),i.onabort=Bt(Ut,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Bt(Ut,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ut(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function de(t){this.l=t.ac||null,this.j=t.jb||!1}T(de,yn);de.prototype.g=function(){return new pe(this.l,this.j)};de.prototype.i=function(t){return function(){return t}}({});function pe(t,e){E.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}T(pe,E);var In=0;l=pe.prototype;l.open=function(t,e){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_t(this)};l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pt(this)),this.readyState=In};l.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_t(this)),this.g&&(this.readyState=3,_t(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ps(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ps(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}l.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pt(this):_t(this),this.readyState==3&&ps(this)}};l.Va=function(t){this.g&&(this.response=this.responseText=t,Pt(this))};l.Ua=function(t){this.g&&(this.response=t,Pt(this))};l.ga=function(){this.g&&Pt(this)};function Pt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_t(t)}l.setRequestHeader=function(t,e){this.v.append(t,e)};l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _t(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(pe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Oa=f.JSON.parse;function A(t){E.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gs,this.K=this.L=!1}T(A,E);var gs="",Na=/^https?$/i,ka=["POST","PUT"];l=A.prototype;l.Ka=function(t){this.L=t};l.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xe.g(),this.C=this.u?Xn(this.u):Xn(Xe),this.g.onreadystatechange=_(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Qn(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=f.FormData&&t instanceof f.FormData,!(0<=ki(ka,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vs(this),0<this.B&&((this.K=La(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.qa,this)):this.A=pn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Qn(this,r)}};function La(t){return wt&&Yo()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}l.qa=function(){typeof sn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,I(this,"timeout"),this.abort(8))};function Qn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ms(t),ge(t)}function ms(t){t.D||(t.D=!0,I(t,"complete"),I(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,I(this,"complete"),I(this,"abort"),ge(this))};l.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ge(this,!0)),A.X.M.call(this)};l.Ha=function(){this.s||(this.F||this.v||this.l?ys(this):this.fb())};l.fb=function(){ys(this)};function ys(t){if(t.h&&typeof sn<"u"&&(!t.C[1]||x(t)!=4||t.aa()!=2)){if(t.v&&x(t)==4)pn(t.Ha,0,t);else if(I(t,"readystatechange"),x(t)==4){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(rs)[1]||null;if(!s&&f.self&&f.self.location){var r=f.self.location.protocol;s=r.substr(0,r.length-1)}i=!Na.test(s?s.toLowerCase():"")}n=i}if(n)I(t,"complete"),I(t,"success");else{t.m=6;try{var o=2<x(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ms(t)}}finally{ge(t)}}}}function ge(t,e){if(t.g){vs(t);const n=t.g,i=t.C[0]?Gt:null;t.g=null,t.C=null,e||I(t,"ready");try{n.onreadystatechange=i}catch{}}}function vs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function x(t){return t.g?t.g.readyState:0}l.aa=function(){try{return 2<x(this)?this.g.status:-1}catch{return-1}};l.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Oa(e)}};function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}l.Ea=function(){return this.m};l.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function As(t){let e="";return an(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Tn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=As(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):v(t,e,n))}function dt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ws(t){this.Ca=0,this.i=[],this.j=new ce,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=dt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=dt("baseRetryDelayMs",5e3,t),this.bb=dt("retryDelaySeedMs",1e4,t),this.$a=dt("forwardChannelMaxRetries",2,t),this.ta=dt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cs(t&&t.concurrentRequestLimit),this.Fa=new Da,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}l=ws.prototype;l.ma=8;l.G=1;function bn(t){if(Es(t),t.G==3){var e=t.U++,n=B(t.F);v(n,"SID",t.I),v(n,"RID",e),v(n,"TYPE","terminate"),xt(t,n),e=new Lt(t,t.j,e,void 0),e.K=2,e.v=fe(B(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=$s(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mt(e)}Ss(t)}function me(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function Es(t){me(t),t.u&&(f.clearTimeout(t.u),t.u=null),Yt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function ye(t){ls(t.h)||t.m||(t.m=!0,Gi(t.Ja,t),t.C=0)}function Ma(t,e){return us(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Nt(_(t.Ja,t,e),Cs(t,t.C)),t.C++,!0)}l.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Lt(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=xi(r),ji(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Is(this,s,e),n=B(this.F),v(n,"RID",t),v(n,"CVER",22),this.D&&v(n,"X-HTTP-Session-Id",this.D),xt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(As(r)))+"&"+e:this.o&&Tn(n,this.o,r)),wn(this.h,s),this.Ya&&v(n,"TYPE","init"),this.O?(v(n,"$req",e),v(n,"SID","null"),s.Z=!0,Je(s,n,null)):Je(s,n,e),this.G=2}}else this.G==3&&(t?ti(this,t):this.i.length==0||ls(this.h)||ti(this))};function ti(t,e){var n;e?n=e.m:n=t.U++;const i=B(t.F);v(i,"SID",t.I),v(i,"RID",n),v(i,"AID",t.T),xt(t,i),t.o&&t.s&&Tn(i,t.o,t.s),n=new Lt(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Is(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),wn(t.h,n),Je(n,i,e)}function xt(t,e){t.ia&&an(t.ia,function(n,i){v(e,i,n)}),t.l&&ss({},function(n,i){v(e,i,n)})}function Is(t,e,n){n=Math.min(t.i.length,n);var i=t.l?_(t.l.Ra,t.l,t):null;t:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let c=s[h].h;const d=s[h].g;if(c-=r,0>c)r=Math.max(0,s[h].h-100),a=!1;else try{$a(d,o,"req"+c+"_")}catch{i&&i(d)}}if(a){i=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Ts(t){t.g||t.u||(t.Z=1,Gi(t.Ia,t),t.A=0)}function _n(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Nt(_(t.Ia,t),Cs(t,t.A)),t.A++,!0)}l.Ia=function(){if(this.u=null,bs(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Nt(_(this.eb,this),t)}};l.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,S(10),me(this),bs(this))};function Cn(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function bs(t){t.g=new Lt(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=B(t.sa);v(e,"RID","rpc"),v(e,"SID",t.I),v(e,"CI",t.L?"0":"1"),v(e,"AID",t.T),v(e,"TYPE","xmlhttp"),xt(t,e),t.o&&t.s&&Tn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=fe(B(e)),n.s=null,n.P=!0,ts(n,t)}l.cb=function(){this.v!=null&&(this.v=null,me(this),_n(this),S(19))};function Yt(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function _s(t,e){var n=null;if(t.g==e){Yt(t),Cn(t),t.g=null;var i=2}else if(Ze(t.h,e))n=e.D,fs(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=gn(),I(i,new Qi(i,n)),ye(t)}else Ts(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Ma(t,e)||i==2&&_n(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:J(t,5);break;case 4:J(t,10);break;case 3:J(t,6);break;default:J(t,2)}}}function Cs(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function J(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=_(t.kb,t);n||(n=new Z("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Wt(n,"https"),fe(n)),Ra(n.toString(),i)}else S(2);t.G=0,t.l&&t.l.va(e),Ss(t),Es(t)}l.kb=function(t){t?(this.j.info("Successfully pinged google.com"),S(2)):(this.j.info("Failed to ping google.com"),S(1))};function Ss(t){if(t.G=0,t.la=[],t.l){const e=ds(t.h);(e.length!=0||t.i.length!=0)&&(zn(t.la,e),zn(t.la,t.i),t.h.i.length=0,rn(t.i),t.i.length=0),t.l.ua()}}function Ds(t,e,n){var i=n instanceof Z?B(n):new Z(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Xt(i,i.m);else{var s=f.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Z(null,void 0);i&&Wt(r,i),e&&(r.g=e),s&&Xt(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&v(i,n,e),v(i,"VER",t.ma),xt(t,i),i}function $s(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new A(new de({jb:!0})):new A(t.ra),e.Ka(t.H),e}function Rs(){}l=Rs.prototype;l.xa=function(){};l.wa=function(){};l.va=function(){};l.ua=function(){};l.Ra=function(){};function k(t,e){E.call(this),this.g=new ws(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!qt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qt(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ft(this)}T(k,E);k.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;S(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ds(t,null,t.V),ye(t)};k.prototype.close=function(){bn(this.g)};k.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fn(t),t=n);e.i.push(new Ca(e.ab++,t)),e.G==3&&ye(e)};k.prototype.M=function(){this.g.l=null,delete this.j,bn(this.g),delete this.g,k.X.M.call(this)};function Os(t){vn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}T(Os,vn);function Ns(){An.call(this),this.status=1}T(Ns,An);function ft(t){this.g=t}T(ft,Rs);ft.prototype.xa=function(){I(this.g,"a")};ft.prototype.wa=function(t){I(this.g,new Os(t))};ft.prototype.va=function(t){I(this.g,new Ns)};ft.prototype.ua=function(){I(this.g,"b")};k.prototype.send=k.prototype.u;k.prototype.open=k.prototype.m;k.prototype.close=k.prototype.close;mn.NO_ERROR=0;mn.TIMEOUT=8;mn.HTTP_ERROR=6;da.COMPLETE="complete";pa.EventType=kt;kt.OPEN="a";kt.CLOSE="b";kt.ERROR="c";kt.MESSAGE="d";E.prototype.listen=E.prototype.N;A.prototype.listenOnce=A.prototype.O;A.prototype.getLastError=A.prototype.Oa;A.prototype.getLastErrorCode=A.prototype.Ea;A.prototype.getStatus=A.prototype.aa;A.prototype.getResponseJson=A.prototype.Sa;A.prototype.getResponseText=A.prototype.fa;A.prototype.send=A.prototype.da;A.prototype.setWithCredentials=A.prototype.Ka;const ei="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new en("@firebase/firestore");function D(t,...e){if(ot.logLevel<=y.DEBUG){const n=e.map(Dn);ot.debug(`Firestore (${jt}): ${t}`,...n)}}function Sn(t,...e){if(ot.logLevel<=y.ERROR){const n=e.map(Dn);ot.error(`Firestore (${jt}): ${t}`,...n)}}function Pa(t,...e){if(ot.logLevel<=y.WARN){const n=e.map(Dn);ot.warn(`Firestore (${jt}): ${t}`,...n)}}function Dn(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t="Unexpected state"){const e=`FIRESTORE (${jt}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function Jt(t,e){t||$n()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends G{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(b.UNAUTHENTICATED))}shutdown(){}}class ja{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ba{constructor(e){this.t=e,this.currentUser=b.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let r=new st;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new st,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=r;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},a=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new st)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Jt(typeof i.accessToken=="string"),new ks(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jt(e===null||typeof e=="string"),new b(e)}}class Fa{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=b.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Jt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}let Ua=class{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new Fa(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(b.FIRST_PARTY))}shutdown(){}invalidateToken(){}};class Ha{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}let Va=class{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Jt(typeof n.token=="string"),this.A=n.token,new Ha(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=za(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,i,s,r,o,a,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Qt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni,g;(g=ni||(ni={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS";function ke(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=i,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),i=Math.max(0,Date.now()-this.Ro),s=Math.max(0,n-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Rn(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wa(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Ls(t))return new R($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=b.UNAUTHENTICATED,this.clientId=Ga.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{D("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(D("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Wa(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const ii=new Map;function Ya(t,e,n,i){if(e===!0&&i===!0)throw new R($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ja(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$n()}function Qa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(t);throw new R($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ya("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new si({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new si(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xa;switch(n.type){case"gapi":const i=n.client;return new Ua(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ii.get(e);n&&(D("ComponentProvider","Removing Datastore"),ii.delete(e),n.terminate())}(this),Promise.resolve()}}function Za(t,e,n,i={}){var s;const r=(t=Qa(t,Ms))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Pa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=b.MOCK_USER;else{o=Er(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new R($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new b(h)}t._authCredentials=new ja(new ks(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Ka(this,"async_queue_retry"),this.Hc=()=>{const n=ke();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=ke();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=ke();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new st;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ls(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(i=>{this.Qc=i,this.jc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Sn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.jc=!1,i))));return this.qc=n,n}enqueueAfterDelay(e,n,i){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const s=Rn.createAndSchedule(this,e,n,i,r=>this.Xc(r));return this.Gc.push(s),s}Jc(){this.Qc&&$n()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class eh extends Ms{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new th,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ih(this),this._firestoreClient.terminate()}}function nh(t,e){const n=typeof t=="object"?t:Ri(),i=typeof t=="string"?t:e||"(default)",s=$t(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=vr("firestore");r&&Za(s,...r)}return s}function ih(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new qa(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xa(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){jt=n})(So),z(new j("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new eh(new Ba(n.getProvider("auth-internal")),new Va(n.getProvider("app-check-internal")),function(a,h){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qt(a.options.projectId,h)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),P(ei,"3.8.4",t),P(ei,"3.8.4","esm2017")})();const Ps="@firebase/installations",On="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=1e4,js=`w:${On}`,Bs="FIS_v2",sh="https://firebaseinstallations.googleapis.com/v1",rh=60*60*1e3,oh="installations",ah="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},et=new ie(oh,ah,hh);function Fs(t){return t instanceof G&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us({projectId:t}){return`${sh}/projects/${t}/installations`}function Hs(t){return{token:t.token,requestStatus:2,expiresIn:lh(t.expiresIn),creationTime:Date.now()}}async function Vs(t,e){const i=(await e.json()).error;return et.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function zs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ch(t,{refreshToken:e}){const n=zs(t);return n.append("Authorization",uh(e)),n}async function Gs(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lh(t){return Number(t.replace("s","000"))}function uh(t){return`${Bs} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Us(t),s=zs(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Bs,appId:t.appId,sdkVersion:js},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Gs(()=>fetch(i,a));if(h.ok){const c=await h.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Hs(c.authToken)}}else throw await Vs("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=/^[cdef][\w-]{21}$/,tn="";function gh(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mh(t);return ph.test(n)?n:tn}catch{return tn}}function mh(t){return dh(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Map;function Ws(t,e){const n=ve(t);Xs(n,e),yh(n,e)}function Xs(t,e){const n=Ks.get(t);if(n)for(const i of n)i(e)}function yh(t,e){const n=vh();n&&n.postMessage({key:t,fid:e}),Ah()}let Q=null;function vh(){return!Q&&"BroadcastChannel"in self&&(Q=new BroadcastChannel("[Firebase] FID Change"),Q.onmessage=t=>{Xs(t.data.key,t.data.fid)}),Q}function Ah(){Ks.size===0&&Q&&(Q.close(),Q=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="firebase-installations-database",Eh=1,nt="firebase-installations-store";let Le=null;function Nn(){return Le||(Le=Di(wh,Eh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nt)}}})),Le}async function Zt(t,e){const n=ve(t),s=(await Nn()).transaction(nt,"readwrite"),r=s.objectStore(nt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Ws(t,e.fid),e}async function Ys(t){const e=ve(t),i=(await Nn()).transaction(nt,"readwrite");await i.objectStore(nt).delete(e),await i.done}async function Ae(t,e){const n=ve(t),s=(await Nn()).transaction(nt,"readwrite"),r=s.objectStore(nt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Ws(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t){let e;const n=await Ae(t.appConfig,i=>{const s=Ih(i),r=Th(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===tn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ih(t){const e=t||{fid:gh(),registrationStatus:0};return Js(e)}function Th(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(et.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=bh(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_h(t)}:{installationEntry:e}}async function bh(t,e){try{const n=await fh(t,e);return Zt(t.appConfig,n)}catch(n){throw Fs(n)&&n.customData.serverCode===409?await Ys(t.appConfig):await Zt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _h(t){let e=await ri(t.appConfig);for(;e.registrationStatus===1;)await qs(100),e=await ri(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await kn(t);return i||n}return e}function ri(t){return Ae(t,e=>{if(!e)throw et.create("installation-not-found");return Js(e)})}function Js(t){return Ch(t)?{fid:t.fid,registrationStatus:0}:t}function Ch(t){return t.registrationStatus===1&&t.registrationTime+xs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh({appConfig:t,heartbeatServiceProvider:e},n){const i=Dh(t,n),s=ch(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:js,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Gs(()=>fetch(i,a));if(h.ok){const c=await h.json();return Hs(c)}else throw await Vs("Generate Auth Token",h)}function Dh(t,{fid:e}){return`${Us(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e=!1){let n;const i=await Ae(t.appConfig,r=>{if(!Qs(r))throw et.create("not-registered");const o=r.authToken;if(!e&&Oh(o))return r;if(o.requestStatus===1)return n=$h(t,e),r;{if(!navigator.onLine)throw et.create("app-offline");const a=kh(r);return n=Rh(t,a),a}});return n?await n:i.authToken}async function $h(t,e){let n=await oi(t.appConfig);for(;n.authToken.requestStatus===1;)await qs(100),n=await oi(t.appConfig);const i=n.authToken;return i.requestStatus===0?Ln(t,e):i}function oi(t){return Ae(t,e=>{if(!Qs(e))throw et.create("not-registered");const n=e.authToken;return Lh(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Rh(t,e){try{const n=await Sh(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Zt(t.appConfig,i),n}catch(n){if(Fs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ys(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zt(t.appConfig,i)}throw n}}function Qs(t){return t!==void 0&&t.registrationStatus===2}function Oh(t){return t.requestStatus===2&&!Nh(t)}function Nh(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rh}function kh(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Lh(t){return t.requestStatus===1&&t.requestTime+xs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t){const e=t,{installationEntry:n,registrationPromise:i}=await kn(e);return i?i.catch(console.error):Ln(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(t,e=!1){const n=t;return await xh(n),(await Ln(n,e)).token}async function xh(t){const{registrationPromise:e}=await kn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){if(!t||!t.options)throw Me("App Configuration");if(!t.name)throw Me("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Me(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Me(t){return et.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="installations",Bh="installations-internal",Fh=t=>{const e=t.getProvider("app").getImmediate(),n=jh(e),i=$t(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Uh=t=>{const e=t.getProvider("app").getImmediate(),n=$t(e,Zs).getImmediate();return{getId:()=>Mh(n),getToken:s=>Ph(n,s)}};function Hh(){z(new j(Zs,Fh,"PUBLIC")),z(new j(Bh,Uh,"PRIVATE"))}Hh();P(Ps,On);P(Ps,On,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="analytics",Vh="firebase_id",zh="origin",Gh=60*1e3,qh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new en("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Kh(t,e){const n=document.createElement("script");n.src=`${tr}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Wh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Xh(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const h=(await er(n)).find(c=>c.measurementId===s);h&&await e[h.appId]}}catch(a){O.error(a)}t("config",s,r)}async function Yh(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await er(n);for(const h of o){const c=a.find(u=>u.measurementId===h),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){O.error(r)}}function Jh(t,e,n,i){async function s(r,o,a){try{r==="event"?await Yh(t,e,n,o,a):r==="config"?await Xh(t,e,n,i,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(h){O.error(h)}}return s}function Qh(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Jh(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Zh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(tr)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},N=new ie("analytics","Analytics",tc);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=30,nc=1e3;class ic{constructor(e={},n=nc){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nr=new ic;function sc(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rc(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:sc(i)},r=qh.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const h=await o.json();!((e=h.error)===null||e===void 0)&&e.message&&(a=h.error.message)}catch{}throw N.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function oc(t,e=nr,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw N.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw N.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cc;return setTimeout(async()=>{a.abort()},n!==void 0?n:Gh),ir({appId:i,apiKey:s,measurementId:r},o,a,e)}async function ir(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=nr){var r;const{appId:o,measurementId:a}=t;try{await ac(i,e)}catch(h){if(a)return O.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await rc(t);return s.deleteThrottleMetadata(o),h}catch(h){const c=h;if(!hc(c)){if(s.deleteThrottleMetadata(o),a)return O.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw h}const d=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Pn(n,s.intervalMillis,ec):Pn(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,u),O.debug(`Calling attemptFetch again in ${d} millis`),ir(t,u,i,s)}}function ac(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(N.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hc(t){if(!(t instanceof G)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function lc(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(){if(Ti())try{await bi()}catch(t){return O.warn(N.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return O.warn(N.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fc(t,e,n,i,s,r,o){var a;const h=oc(t);h.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&O.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>O.error(m)),e.push(h);const c=uc().then(m=>{if(m)return i.getId()}),[d,u]=await Promise.all([h,c]);Zh(r)||Kh(r,d.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[zh]="firebase",p.update=!0,u!=null&&(p[Vh]=u),s("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.app=e}_delete(){return delete vt[this.app.options.appId],Promise.resolve()}}let vt={},ai=[];const hi={};let Pe="dataLayer",pc="gtag",ci,sr,li=!1;function gc(){const t=[];if(Ir()&&t.push("This is a browser extension environment."),Tr()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=N.create("invalid-analytics-context",{errorInfo:e});O.warn(n.message)}}function mc(t,e,n){gc();const i=t.options.appId;if(!i)throw N.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)O.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw N.create("no-api-key");if(vt[i]!=null)throw N.create("already-exists",{id:i});if(!li){Wh(Pe);const{wrappedGtag:r,gtagCore:o}=Qh(vt,ai,hi,Pe,pc);sr=r,ci=o,li=!0}return vt[i]=fc(t,ai,hi,e,ci,Pe,n),new dc(t)}function yc(t=Ri()){t=_i(t);const e=$t(t,te);return e.isInitialized()?e.getImmediate():vc(t)}function vc(t,e={}){const n=$t(t,te);if(n.isInitialized()){const s=n.getImmediate();if(Vt(e,n.getOptions()))return s;throw N.create("already-initialized")}return n.initialize({options:e})}function Ac(t,e,n,i){t=_i(t),lc(sr,vt[t.app.options.appId],e,n,i).catch(s=>O.error(s))}const ui="@firebase/analytics",fi="0.9.4";function wc(){z(new j(te,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return mc(i,s,n)},"PUBLIC")),z(new j("analytics-internal",t,"PRIVATE")),P(ui,fi),P(ui,fi,"esm2017");function t(e){try{const n=e.getProvider(te).getImmediate();return{logEvent:(i,s,r)=>Ac(n,i,s,r)}}catch(n){throw N.create("interop-component-reg-failed",{reason:n})}}}wc();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const ee=window,at=ee.trustedTypes,di=at?at.createPolicy("lit-html",{createHTML:t=>t}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,rr="?"+U,Ec=`<${rr}>`,ht=document,ne=(t="")=>ht.createComment(t),Ct=t=>t===null||typeof t!="object"&&typeof t!="function",or=Array.isArray,Ic=t=>or(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pi=/-->/g,gi=/>/g,W=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mi=/'/g,yi=/"/g,ar=/^(?:script|style|textarea|title)$/i,St=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),vi=new WeakMap,rt=ht.createTreeWalker(ht,129,null,!1),Tc=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=pt;for(let h=0;h<n;h++){const c=t[h];let d,u,p=-1,m=0;for(;m<c.length&&(o.lastIndex=m,u=o.exec(c),u!==null);)m=o.lastIndex,o===pt?u[1]==="!--"?o=pi:u[1]!==void 0?o=gi:u[2]!==void 0?(ar.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=W):u[3]!==void 0&&(o=W):o===W?u[0]===">"?(o=s??pt,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?W:u[3]==='"'?yi:mi):o===yi||o===mi?o=W:o===pi||o===gi?o=pt:(o=W,s=void 0);const L=o===W&&t[h+1].startsWith("/>")?" ":"";r+=o===pt?c+Ec:p>=0?(i.push(d),c.slice(0,p)+"$lit$"+c.slice(p)+U+L):c+U+(p===-2?(i.push(void 0),h):L)}const a=r+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[di!==void 0?di.createHTML(a):a,i]};class Dt{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,h=this.parts,[c,d]=Tc(e,n);if(this.el=Dt.createElement(c,i),rt.currentNode=this.el.content,n===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(s=rt.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(U)){const m=d[o++];if(u.push(p),m!==void 0){const L=s.getAttribute(m.toLowerCase()+"$lit$").split(U),F=/([.?@])?(.*)/.exec(m);h.push({type:1,index:r,name:F[2],strings:L,ctor:F[1]==="."?_c:F[1]==="?"?Sc:F[1]==="@"?Dc:Ee})}else h.push({type:6,index:r})}for(const p of u)s.removeAttribute(p)}if(ar.test(s.tagName)){const u=s.textContent.split(U),p=u.length-1;if(p>0){s.textContent=at?at.emptyScript:"";for(let m=0;m<p;m++)s.append(u[m],ne()),rt.nextNode(),h.push({type:2,index:++r});s.append(u[p],ne())}}}else if(s.nodeType===8)if(s.data===rr)h.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(U,u+1))!==-1;)h.push({type:7,index:r}),u+=U.length-1}r++}}static createElement(e,n){const i=ht.createElement("template");return i.innerHTML=e,i}}function ct(t,e,n=t,i){var s,r,o,a;if(e===St)return e;let h=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const c=Ct(e)?void 0:e._$litDirective$;return(h==null?void 0:h.constructor)!==c&&((r=h==null?void 0:h._$AO)===null||r===void 0||r.call(h,!1),c===void 0?h=void 0:(h=new c(t),h._$AT(t,n,i)),i!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=h:n._$Cl=h),h!==void 0&&(e=ct(t,h._$AS(t,e.values),h,i)),e}class bc{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:i},parts:s}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:ht).importNode(i,!0);rt.currentNode=r;let o=rt.nextNode(),a=0,h=0,c=s[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new we(o,o.nextSibling,this,e):c.type===1?d=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(d=new $c(o,this,e)),this.u.push(d),c=s[++h]}a!==(c==null?void 0:c.index)&&(o=rt.nextNode(),a++)}return r}p(e){let n=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class we{constructor(e,n,i,s){var r;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cm=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ct(this,e,n),Ct(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==St&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ic(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==w&&Ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(ht.createTextNode(e)),this._$AH=e}$(e){var n;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Dt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.p(i);else{const o=new bc(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(e){let n=vi.get(e.strings);return n===void 0&&vi.set(e.strings,n=new Dt(e)),n}k(e){or(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new we(this.O(ne()),this.O(ne()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Ee{constructor(e,n,i,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=ct(this,e,n,0),o=!Ct(e)||e!==this._$AH&&e!==St,o&&(this._$AH=e);else{const a=e;let h,c;for(e=r[0],h=0;h<r.length-1;h++)c=ct(this,a[i+h],n,h),c===St&&(c=this._$AH[h]),o||(o=!Ct(c)||c!==this._$AH[h]),c===w?e=w:e!==w&&(e+=(c??"")+r[h+1]),this._$AH[h]=c}o&&!s&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _c extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}const Cc=at?at.emptyScript:"";class Sc extends Ee{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,Cc):this.element.removeAttribute(this.name)}}class Dc extends Ee{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=ct(this,e,n,0))!==null&&i!==void 0?i:w)===St)return;const s=this._$AH,r=e===w&&s!==w||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class $c{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ct(this,e)}}const Ai=ee.litHtmlPolyfillSupport;Ai==null||Ai(Dt,we),((xe=ee.litHtmlVersions)!==null&&xe!==void 0?xe:ee.litHtmlVersions=[]).push("2.6.1");const Rc={apiKey:"AIzaSyB5UX2SHZ4Mzc1XvF5UgDvTGd4WLwBOsQc",authDomain:"job-search-website-vz.firebaseapp.com",databaseURL:"https://job-search-website-vz-default-rtdb.firebaseio.com",projectId:"job-search-website-vz",storageBucket:"job-search-website-vz.appspot.com",messagingSenderId:"885937389036",appId:"1:885937389036:web:4321a4b35e152aab6554c9",measurementId:"G-4NSDHCC0QM"},hr=$i(Rc);nh(hr);yc(hr);
