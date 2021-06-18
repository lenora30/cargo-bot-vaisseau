(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.ic(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.id(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.e6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.e6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.e6(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={dO:function dO(){},
eW:function(a,b,c){if(a==null)throw H.d(new H.b5(b,c.i("b5<0>")))
return a},
bW:function bW(a){this.a=a},
b5:function b5(a,b){this.a=a
this.$ti=b},
aU:function aU(){},
ad:function ad(){},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
aA:function aA(a){this.a=a},
f6:function(a){var t,s=H.f5(a)
if(s!=null)return s
t="minified:"+a
return t},
iY:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
f:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aK(a)
if(typeof t!="string")throw H.d(H.e5(a))
return t},
b7:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cU:function(a){return H.fD(a)},
fD:function(a){var t,s,r,q
if(a instanceof P.h)return H.A(H.a5(a),null)
if(J.am(a)===C.B||u.cr.b(a)){t=C.j(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.A(H.a5(a),null)},
u:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((C.b.C(t,10)|55296)>>>0,t&1023|56320)}throw H.d(P.dR(a,0,1114111,null,null))},
ah:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fL:function(a){var t=H.ah(a).getFullYear()+0
return t},
fJ:function(a){var t=H.ah(a).getMonth()+1
return t},
fF:function(a){var t=H.ah(a).getDate()+0
return t},
fG:function(a){var t=H.ah(a).getHours()+0
return t},
fI:function(a){var t=H.ah(a).getMinutes()+0
return t},
fK:function(a){var t=H.ah(a).getSeconds()+0
return t},
fH:function(a){var t=H.ah(a).getMilliseconds()+0
return t},
a_:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.a0(t,b)
r.b=""
if(c!=null&&c.a!==0)c.A(0,new H.cT(r,s,t))
""+r.a
return J.fn(a,new H.bR(C.G,0,t,s,0))},
fE:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.fC(a,b,c)},
fC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b!=null)t=b instanceof Array?b:P.dQ(b,u.z)
else t=[]
s=t.length
r=a.$R
if(s<r)return H.a_(a,t,c)
q=a.$D
p=q==null
o=!p?q():null
n=J.am(a)
m=n.$C
if(typeof m=="string")m=n[m]
if(p){if(c!=null&&c.a!==0)return H.a_(a,t,c)
if(s===r)return m.apply(a,t)
return H.a_(a,t,c)}if(o instanceof Array){if(c!=null&&c.a!==0)return H.a_(a,t,c)
if(s>r+o.length)return H.a_(a,t,null)
C.a.a0(t,o.slice(s-r))
return m.apply(a,t)}else{if(s>r)return H.a_(a,t,c)
l=Object.keys(o)
if(c==null)for(p=l.length,k=0;k<l.length;l.length===p||(0,H.bz)(l),++k){j=o[H.H(l[k])]
if(C.m===j)return H.a_(a,t,c)
C.a.l(t,j)}else{for(p=l.length,i=0,k=0;k<l.length;l.length===p||(0,H.bz)(l),++k){h=H.H(l[k])
if(c.aW(h)){++i
C.a.l(t,c.k(0,h))}else{j=o[h]
if(C.m===j)return H.a_(a,t,c)
C.a.l(t,j)}}if(i!==c.a)return H.a_(a,t,c)}return m.apply(a,t)}},
P:function(a){throw H.d(H.e5(a))},
m:function(a,b){if(a==null)J.cC(a)
throw H.d(H.aI(a,b))},
aI:function(a,b){var t,s,r="index"
if(!H.ds(b))return new P.Q(!0,b,r,null)
t=H.bt(J.cC(a))
if(!(b<0)){if(typeof t!=="number")return H.P(t)
s=b>=t}else s=!0
if(s)return P.en(b,a,r,null,t)
return P.dS(b,r)},
e5:function(a){return new P.Q(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.c5()
t=new Error()
t.dartException=a
s=H.ie
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
ie:function(){return J.aK(this.dartException)},
ap:function(a){throw H.d(a)},
bz:function(a){throw H.d(P.bH(a))},
U:function(a){var t,s,r,q,p,o
a=H.ia(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.J([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cX(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cY:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ey:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dP:function(a,b){var t=b==null,s=t?null:b.method
return new H.bT(a,s,t?null:b.receiver)},
W:function(a){if(a==null)return new H.cS(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.ao(a,a.dartException)
return H.hK(a)},
ao:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hK:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.C(s,16)&8191)===10)switch(r){case 438:return H.ao(a,H.dP(H.f(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.f(t)+" (Error "+r+")"
return H.ao(a,new H.b6(q,f))}}if(a instanceof TypeError){p=$.f7()
o=$.f8()
n=$.f9()
m=$.fa()
l=$.fd()
k=$.fe()
j=$.fc()
$.fb()
i=$.fg()
h=$.ff()
g=p.v(t)
if(g!=null)return H.ao(a,H.dP(H.H(t),g))
else{g=o.v(t)
if(g!=null){g.method="call"
return H.ao(a,H.dP(H.H(t),g))}else{g=n.v(t)
if(g==null){g=m.v(t)
if(g==null){g=l.v(t)
if(g==null){g=k.v(t)
if(g==null){g=j.v(t)
if(g==null){g=m.v(t)
if(g==null){g=i.v(t)
if(g==null){g=h.v(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.H(t)
return H.ao(a,new H.b6(t,g==null?f:g.method))}}}return H.ao(a,new H.ch(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b9()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.ao(a,new P.Q(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b9()
return a},
an:function(a){var t
if(a==null)return new H.bm(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bm(a)},
hU:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
i0:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.bt(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.d5("Unsupported number of arguments for wrapped closure"))},
by:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.i0)
a.$identity=t
return t},
fw:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.cb().constructor.prototype):Object.create(new H.aq(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.R
if(typeof s!=="number")return s.p()
$.R=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.ek(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.fs(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ek(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
fs:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.f_,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.fq:H.fp
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
ft:function(a,b,c,d){var t=H.ei
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ek:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.fv(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.ft(s,!q,t,b)
if(s===0){q=$.R
if(typeof q!=="number")return q.p()
$.R=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aN
return new Function(q+(p==null?$.aN=H.cG("self"):p)+";return "+o+"."+H.f(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.R
if(typeof q!=="number")return q.p()
$.R=q+1
n+=q
q="return function("+n+"){return this."
p=$.aN
return new Function(q+(p==null?$.aN=H.cG("self"):p)+"."+H.f(t)+"("+n+");}")()},
fu:function(a,b,c,d){var t=H.ei,s=H.fr
switch(b?-1:a){case 0:throw H.d(new H.c7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
fv:function(a,b){var t,s,r,q,p,o,n,m=$.aN
if(m==null)m=$.aN=H.cG("self")
t=$.eh
if(t==null)t=$.eh=H.cG("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.fu(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.f(s)+"(this."+t+");"
o=$.R
if(typeof o!=="number")return o.p()
$.R=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.f(s)+"(this."+t+", "+n+");"
o=$.R
if(typeof o!=="number")return o.p()
$.R=o+1
return new Function(p+o+"}")()},
e6:function(a,b,c,d,e,f,g){return H.fw(a,b,c,d,!!e,!!f,g)},
fp:function(a,b){return H.cy(v.typeUniverse,H.a5(a.a),b)},
fq:function(a,b){return H.cy(v.typeUniverse,H.a5(a.c),b)},
ei:function(a){return a.a},
fr:function(a){return a.c},
cG:function(a){var t,s,r,q=new H.aq("self","target","receiver","name"),p=J.eq(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.cD("Field name "+a+" not found."))},
eV:function(a){if(a==null)H.hN("boolean expression must not be null")
return a},
hN:function(a){throw H.d(new H.ck(a))},
ic:function(a){throw H.d(new P.bJ(a))},
eY:function(a){return v.getIsolateTag(a)},
id:function(a){return H.ap(new H.bW(a))},
iX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
i4:function(a){var t,s,r,q,p,o=H.H($.eZ.$1(a)),n=$.dA[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dG[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.hi($.eT.$2(a,o))
if(r!=null){n=$.dA[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dG[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.dL(t)
$.dA[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.dG[o]=t
return t}if(q==="-"){p=H.dL(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.f2(a,t)
if(q==="*")throw H.d(P.ez(o))
if(v.leafTags[o]===true){p=H.dL(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.f2(a,t)},
f2:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.ea(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dL:function(a){return J.ea(a,!1,null,!!a.$iz)},
i8:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dL(t)
else return J.ea(t,c,null,null)},
hY:function(){if(!0===$.e9)return
$.e9=!0
H.hZ()},
hZ:function(){var t,s,r,q,p,o,n,m
$.dA=Object.create(null)
$.dG=Object.create(null)
H.hX()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.f3.$1(p)
if(o!=null){n=H.i8(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hX:function(){var t,s,r,q,p,o,n=C.q()
n=H.aH(C.r,H.aH(C.t,H.aH(C.k,H.aH(C.k,H.aH(C.u,H.aH(C.v,H.aH(C.w(C.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.eZ=new H.dD(q)
$.eT=new H.dE(p)
$.f3=new H.dF(o)},
aH:function(a,b){return a(b)||b},
ia:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aP:function aP(a,b){this.a=a
this.$ti=b},
aO:function aO(){},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bR:function bR(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b6:function b6(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a){this.a=a},
cS:function cS(a){this.a=a},
bm:function bm(a){this.a=a
this.b=null},
a8:function a8(){},
ce:function ce(){},
cb:function cb(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a){this.a=a},
ck:function ck(a){this.a=a},
dj:function dj(){},
ac:function ac(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cN:function cN(a,b){this.a=a
this.b=b
this.c=null},
b1:function b1(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dF:function dF(a){this.a=a},
al:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aI(b,a))},
bY:function bY(){},
ag:function ag(){},
ay:function ay(){},
af:function af(){},
b3:function b3(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
b4:function b4(){},
c3:function c3(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
fN:function(a,b){var t=b.c
return t==null?b.c=H.dW(a,b.z,!0):t},
eu:function(a,b){var t=b.c
return t==null?b.c=H.bp(a,"aX",[b.z]):t},
ev:function(a){var t=a.y
if(t===6||t===7||t===8)return H.ev(a.z)
return t===11||t===12},
fM:function(a){return a.cy},
dB:function(a){return H.dp(v.typeUniverse,a,!1)},
a4:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a4(a,t,c,a0)
if(s===t)return b
return H.eH(a,s,!0)
case 7:t=b.z
s=H.a4(a,t,c,a0)
if(s===t)return b
return H.dW(a,s,!0)
case 8:t=b.z
s=H.a4(a,t,c,a0)
if(s===t)return b
return H.eG(a,s,!0)
case 9:r=b.Q
q=H.bx(a,r,c,a0)
if(q===r)return b
return H.bp(a,b.z,q)
case 10:p=b.z
o=H.a4(a,p,c,a0)
n=b.Q
m=H.bx(a,n,c,a0)
if(o===p&&m===n)return b
return H.dU(a,o,m)
case 11:l=b.z
k=H.a4(a,l,c,a0)
j=b.Q
i=H.hH(a,j,c,a0)
if(k===l&&i===j)return b
return H.eF(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bx(a,h,c,a0)
p=b.z
o=H.a4(a,p,c,a0)
if(g===h&&o===p)return b
return H.dV(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.cE("Attempted to substitute unexpected RTI kind "+d))}},
bx:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a4(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
hI:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a4(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
hH:function(a,b,c,d){var t,s=b.a,r=H.bx(a,s,c,d),q=b.b,p=H.bx(a,q,c,d),o=b.c,n=H.hI(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.cs()
t.a=r
t.b=p
t.c=n
return t},
J:function(a,b){a[v.arrayRti]=b
return a},
hR:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.f_(t)
return a.$S()}return null},
f0:function(a,b){var t
if(H.ev(b))if(a instanceof H.a8){t=H.hR(a)
if(t!=null)return t}return H.a5(a)},
a5:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.e0(a)}if(Array.isArray(a))return H.aF(a)
return H.e0(J.am(a))},
aF:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
a3:function(a){var t=a.$ti
return t!=null?t:H.e0(a)},
e0:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.ht(a,t)},
ht:function(a,b){var t=a instanceof H.a8?a.__proto__.__proto__.constructor:b,s=H.hf(v.typeUniverse,t.name)
b.$ccache=s
return s},
f_:function(a){var t,s,r
H.bt(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.dp(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
hT:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.cv(a)
r=H.dp(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.cv(r):q},
hs:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bu(r,a,H.hw)
if(!H.V(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bu(r,a,H.hz)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.ds
else if(t===u.cb||t===u.cY)s=H.hv
else if(t===u.cx)s=H.hx
else s=t===u.y?H.e1:null
if(s!=null)return H.bu(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.i1)){r.r="$i"+q
return H.bu(r,a,H.hy)}}else if(q===7)return H.bu(r,a,H.hq)
return H.bu(r,a,H.ho)},
bu:function(a,b,c){a.b=c
return a.b(b)},
hr:function(a){var t,s,r=this
if(!H.V(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.hj
else if(r===u.K)s=H.hh
else s=H.hp
r.a=s
return r.a(a)},
e4:function(a){var t,s=a.y
if(!H.V(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.e4(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ho:function(a){var t=this
if(a==null)return H.e4(t)
return H.v(v.typeUniverse,H.f0(a,t),null,t,null)},
hq:function(a){if(a==null)return!0
return this.z.b(a)},
hy:function(a){var t,s=this
if(a==null)return H.e4(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.am(a)[t]},
iW:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.eK(a,t)},
hp:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.eK(a,t)},
eK:function(a,b){throw H.d(H.h5(H.eB(a,H.f0(a,b),H.A(b,null))))},
eB:function(a,b,c){var t=P.Y(a),s=H.A(b==null?H.a5(a):b,null)
return t+": type '"+H.f(s)+"' is not a subtype of type '"+H.f(c)+"'"},
h5:function(a){return new H.bo("TypeError: "+a)},
x:function(a,b){return new H.bo("TypeError: "+H.eB(a,null,b))},
hw:function(a){return a!=null},
hh:function(a){return a},
hz:function(a){return!0},
hj:function(a){return a},
e1:function(a){return!0===a||!1===a},
iJ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.x(a,"bool"))},
hg:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool"))},
iK:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool?"))},
iL:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"double"))},
iN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double"))},
iM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double?"))},
ds:function(a){return typeof a=="number"&&Math.floor(a)===a},
iO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.x(a,"int"))},
bt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int"))},
iP:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int?"))},
hv:function(a){return typeof a=="number"},
iQ:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"num"))},
iS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num"))},
iR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num?"))},
hx:function(a){return typeof a=="string"},
iT:function(a){if(typeof a=="string")return a
throw H.d(H.x(a,"String"))},
H:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String"))},
hi:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String?"))},
hE:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.p(s,H.A(a[r],b))
return t},
eL:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.J([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.l(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.m(a5,j)
m=C.d.p(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.d.p(" extends ",H.A(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.A(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.d.p(a2,H.A(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.d.p(a2,H.A(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.ef(H.A(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.f(a0)},
A:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.A(a.z,b)
return t}if(m===7){s=a.z
t=H.A(s,b)
r=s.y
return J.ef(r===11||r===12?C.d.p("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.f(H.A(a.z,b))+">"
if(m===9){q=H.hJ(a.z)
p=a.Q
return p.length!==0?q+("<"+H.hE(p,b)+">"):q}if(m===11)return H.eL(a,b,null)
if(m===12)return H.eL(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.m(b,o)
return b[o]}return"?"},
hJ:function(a){var t,s=H.f5(a)
if(s!=null)return s
t="minified:"+a
return t},
eI:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
hf:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.dp(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bq(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bp(a,b,r)
o[b]=p
return p}else return n},
hd:function(a,b){return H.eJ(a.tR,b)},
hc:function(a,b){return H.eJ(a.eT,b)},
dp:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.eE(H.eC(a,null,b,c))
s.set(b,t)
return t},
cy:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.eE(H.eC(a,b,c,!0))
r.set(c,s)
return s},
he:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dU(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a2:function(a,b){b.a=H.hr
b.b=H.hs
return b},
bq:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.F(null,null)
t.y=b
t.cy=c
s=H.a2(a,t)
a.eC.set(c,s)
return s},
eH:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ha(a,b,s,c)
a.eC.set(s,t)
return t},
ha:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.V(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.F(null,null)
r.y=6
r.z=b
r.cy=c
return H.a2(a,r)},
dW:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.h9(a,b,s,c)
a.eC.set(s,t)
return t},
h9:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.V(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.dH(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.dH(r.z))return r
else return H.fN(a,b)}}q=new H.F(null,null)
q.y=7
q.z=b
q.cy=c
return H.a2(a,q)},
eG:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.h7(a,b,s,c)
a.eC.set(s,t)
return t},
h7:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.V(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bp(a,"aX",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.F(null,null)
r.y=8
r.z=b
r.cy=c
return H.a2(a,r)},
hb:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.F(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a2(a,t)
a.eC.set(r,s)
return s},
cx:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
h6:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bp:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.cx(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.F(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a2(a,s)
a.eC.set(q,r)
return r},
dU:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.cx(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.F(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a2(a,p)
a.eC.set(r,o)
return o},
eF:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cx(n)
if(k>0){t=m>0?",":""
s=H.cx(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.h6(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.F(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a2(a,p)
a.eC.set(r,s)
return s},
dV:function(a,b,c,d){var t,s=b.cy+("<"+H.cx(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.h8(a,b,c,s,d)
a.eC.set(s,t)
return t},
h8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a4(a,b,s,0)
n=H.bx(a,c,s,0)
return H.dV(a,o,n,c!==n)}}m=new H.F(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a2(a,m)},
eC:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eE:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.h_(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.eD(a,s,h,g,!1)
else if(r===46)s=H.eD(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a1(a.u,a.e,g.pop()))
break
case 94:g.push(H.hb(a.u,g.pop()))
break
case 35:g.push(H.bq(a.u,5,"#"))
break
case 64:g.push(H.bq(a.u,2,"@"))
break
case 126:g.push(H.bq(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dT(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bp(q,o,p))
else{n=H.a1(q,a.e,o)
switch(n.y){case 11:g.push(H.dV(q,n,p,a.n))
break
default:g.push(H.dU(q,n,p))
break}}break
case 38:H.h0(a,g)
break
case 42:m=a.u
g.push(H.eH(m,H.a1(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dW(m,H.a1(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.eG(m,H.a1(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.cs()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.dT(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.eF(q,H.a1(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dT(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.h2(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a1(a.u,a.e,i)},
h_:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
eD:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.eI(t,p.z)[q]
if(o==null)H.ap('No "'+q+'" in "'+H.fM(p)+'"')
d.push(H.cy(t,p,o))}else d.push(q)
return n},
h0:function(a,b){var t=b.pop()
if(0===t){b.push(H.bq(a.u,1,"0&"))
return}if(1===t){b.push(H.bq(a.u,4,"1&"))
return}throw H.d(P.cE("Unexpected extended operation "+H.f(t)))},
a1:function(a,b,c){if(typeof c=="string")return H.bp(a,c,a.sEA)
else if(typeof c=="number")return H.h1(a,b,c)
else return c},
dT:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a1(a,b,c[t])},
h2:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a1(a,b,c[t])},
h1:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.cE("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.cE("Bad index "+c+" for "+b.h(0)))},
v:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.V(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.V(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.v(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.v(a,b.z,c,d,e)
if(q===6){t=d.z
return H.v(a,b,c,t,e)}if(s===8){if(!H.v(a,b.z,c,d,e))return!1
return H.v(a,H.eu(a,b),c,d,e)}if(s===7){t=H.v(a,b.z,c,d,e)
return t}if(q===8){if(H.v(a,b,c,d.z,e))return!0
return H.v(a,b,c,H.eu(a,d),e)}if(q===7){t=H.v(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.v(a,l,c,k,e)||!H.v(a,k,e,l,c))return!1}return H.eO(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.eO(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.hu(a,b,c,d,e)}return!1},
eO:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.v(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.v(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.v(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.v(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.v(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
hu:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.v(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.eI(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.v(a,H.cy(a,b,m[q]),c,s[q],e))return!1
return!0},
dH:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.V(a))if(s!==7)if(!(s===6&&H.dH(a.z)))t=s===8&&H.dH(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
i1:function(a){var t
if(!H.V(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
V:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
eJ:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
F:function F(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
cs:function cs(){this.c=this.b=this.a=null},
cv:function cv(a){this.a=a},
co:function co(){},
bo:function bo(a){this.a=a},
f1:function(a){return u.x.b(a)||u.A.b(a)||u.w.b(a)||u.I.b(a)||u.E.b(a)||u.cg.b(a)||u.bj.b(a)},
f5:function(a){return v.mangledGlobalNames[a]},
i9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ea:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cz:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.e9==null){H.hY()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.ez("Return interceptor for "+H.f(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.df
if(p==null)p=$.df=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.i4(a)
if(q!=null)return q
if(typeof a=="function")return C.D
t=Object.getPrototypeOf(a)
if(t==null)return C.p
if(t===Object.prototype)return C.p
if(typeof r=="function"){p=$.df
if(p==null)p=$.df=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
eq:function(a,b){a.fixed$length=Array
return a},
am:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aY.prototype
return J.bS.prototype}if(typeof a=="string")return J.Z.prototype
if(a==null)return J.at.prototype
if(typeof a=="boolean")return J.bQ.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.h)return a
return J.cz(a)},
hV:function(a){if(typeof a=="number")return J.au.prototype
if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.h)return a
return J.cz(a)},
e7:function(a){if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.h)return a
return J.cz(a)},
e8:function(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.h)return a
return J.cz(a)},
hW:function(a){if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.aB.prototype
return a},
dC:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.M.prototype
return a}if(a instanceof P.h)return a
return J.cz(a)},
ef:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hV(a).p(a,b)},
fh:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.am(a).w(a,b)},
fi:function(a,b,c,d){return J.dC(a).aL(a,b,c,d)},
fj:function(a,b){return J.e8(a).F(a,b)},
X:function(a){return J.dC(a).gai(a)},
bA:function(a){return J.am(a).gm(a)},
fk:function(a){return J.dC(a).gM(a)},
dM:function(a){return J.e8(a).gB(a)},
cC:function(a){return J.e7(a).gj(a)},
fl:function(a){return J.dC(a).gP(a)},
fm:function(a,b,c){return J.e8(a).am(a,b,c)},
fn:function(a,b){return J.am(a).O(a,b)},
aK:function(a){return J.am(a).h(a)},
w:function w(){},
bQ:function bQ(){},
at:function at(){},
aa:function aa(){},
c6:function c6(){},
aB:function aB(){},
M:function M(){},
q:function q(a){this.$ti=a},
cL:function cL(a){this.$ti=a},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
aY:function aY(){},
bS:function bS(){},
Z:function Z(){}},P={
fT:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.hO()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.by(new P.d1(r),1)).observe(t,{childList:true})
return new P.d0(r,t,s)}else if(self.setImmediate!=null)return P.hP()
return P.hQ()},
fU:function(a){self.scheduleImmediate(H.by(new P.d2(u.M.a(a)),0))},
fV:function(a){self.setImmediate(H.by(new P.d3(u.M.a(a)),0))},
fW:function(a){u.M.a(a)
P.h3(0,a)},
ex:function(a,b){var t=C.b.E(a.a,1000)
return P.h4(t<0?0:t,b)},
h3:function(a,b){var t=new P.bn(!0)
t.aI(a,b)
return t},
h4:function(a,b){var t=new P.bn(!1)
t.aJ(a,b)
return t},
cF:function(a,b){var t=H.eW(a,"error",u.K)
return new P.aM(t,b==null?P.fo(a):b)},
fo:function(a){var t
if(u.C.b(a)){t=a.gS()
if(t!=null)return t}return C.x},
fX:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.J()
b.a=a.a
b.c=a.c
P.aC(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.ae(r)}},
aC:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.dt(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aC(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.dt(d,d,l.b,k.a,k.b)
return}g=$.p
if(g!==h)$.p=h
else g=d
b=b.c
if((b&15)===8)new P.dd(q,c,p).$0()
else if(j){if((b&1)!==0)new P.dc(q,k).$0()}else if((b&2)!==0)new P.db(c,q).$0()
if(g!=null)$.p=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.i("aX<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b instanceof P.D)if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.K(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.fX(b,f)
else f.aM(b)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.K(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
hC:function(a,b){var t=u.R
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.eg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
hB:function(){var t,s
for(t=$.aG;t!=null;t=$.aG){$.bw=null
s=t.b
$.aG=s
if(s==null)$.bv=null
t.a.$0()}},
hG:function(){$.e2=!0
try{P.hB()}finally{$.bw=null
$.e2=!1
if($.aG!=null)$.eb().$1(P.eU())}},
eR:function(a){var t=new P.cl(a),s=$.bv
if(s==null){$.aG=$.bv=t
if(!$.e2)$.eb().$1(P.eU())}else $.bv=s.b=t},
hF:function(a){var t,s,r,q=$.aG
if(q==null){P.eR(a)
$.bw=$.bv
return}t=new P.cl(a)
s=$.bw
if(s==null){t.b=q
$.aG=$.bw=t}else{r=s.b
t.b=r
$.bw=s.b=t
if(r==null)$.bv=t}},
ib:function(a){var t=null,s=$.p
if(C.c===s){P.dv(t,t,C.c,a)
return}P.dv(t,t,s,u.M.a(s.ag(a)))},
fQ:function(a,b){var t=$.p
if(t===C.c)return P.ex(a,u.e.a(b))
return P.ex(a,u.e.a(t.ah(b,u.ae)))},
dt:function(a,b,c,d,e){P.hF(new P.du(d,e))},
eP:function(a,b,c,d,e){var t,s=$.p
if(s===c)return d.$0()
$.p=c
t=s
try{s=d.$0()
return s}finally{$.p=t}},
eQ:function(a,b,c,d,e,f,g){var t,s=$.p
if(s===c)return d.$1(e)
$.p=c
t=s
try{s=d.$1(e)
return s}finally{$.p=t}},
hD:function(a,b,c,d,e,f,g,h,i){var t,s=$.p
if(s===c)return d.$2(e,f)
$.p=c
t=s
try{s=d.$2(e,f)
return s}finally{$.p=t}},
dv:function(a,b,c,d){u.M.a(d)
if(C.c!==c)d=c.ag(d)
P.eR(d)},
d1:function d1(a){this.a=a},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
bn:function bn(a){this.a=a
this.b=null
this.c=0},
dn:function dn(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aM:function aM(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
D:function D(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d6:function d6(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a){this.a=a},
dc:function dc(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
cl:function cl(a){this.a=a
this.b=null},
ba:function ba(){},
cV:function cV(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
cc:function cc(){},
cd:function cd(){},
bs:function bs(){},
du:function du(a,b){this.a=a
this.b=b},
ct:function ct(){},
dk:function dk(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function(a,b,c){return b.i("@<0>").t(c).i("es<1,2>").a(H.hU(a,new H.ac(b.i("@<0>").t(c).i("ac<1,2>"))))},
fA:function(a,b,c){var t,s
if(P.e3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.J([],u.s)
C.a.l($.B,a)
try{P.hA(a,t)}finally{if(0>=$.B.length)return H.m($.B,-1)
$.B.pop()}s=P.ew(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
ep:function(a,b,c){var t,s
if(P.e3(a))return b+"..."+c
t=new P.ai(b)
C.a.l($.B,a)
try{s=t
s.a=P.ew(s.a,a,", ")}finally{if(0>=$.B.length)return H.m($.B,-1)
$.B.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
e3:function(a){var t,s
for(t=$.B.length,s=0;s<t;++s)if(a===$.B[s])return!0
return!1},
hA:function(a,b){var t,s,r,q,p,o,n,m=a.gB(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.n())return
t=H.f(m.gu())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return H.m(b,-1)
s=b.pop()
if(0>=b.length)return H.m(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.n()){if(k<=4){C.a.l(b,H.f(q))
return}s=H.f(q)
if(0>=b.length)return H.m(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.n();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.f(q)
s=H.f(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
cP:function(a){var t,s={}
if(P.e3(a))return"{...}"
t=new P.ai("")
try{C.a.l($.B,a)
t.a+="{"
s.a=!0
a.A(0,new P.cQ(s,t))
t.a+="}"}finally{if(0>=$.B.length)return H.m($.B,-1)
$.B.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
j:function j(){},
b2:function b2(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
aw:function aw(){},
br:function br(){},
ax:function ax(){},
bd:function bd(){},
aE:function aE(){},
er:function(a,b,c){return new P.b_(a,b)},
hn:function(a){return a.bf()},
fY:function(a,b){return new P.dg(a,[],P.hS())},
fZ:function(a,b,c){var t,s=new P.ai(""),r=P.fY(s,b)
r.R(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
bF:function bF(){},
bI:function bI(){},
b_:function b_(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
cM:function cM(){},
bV:function bV(a){this.b=a},
dh:function dh(){},
di:function di(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c){this.c=a
this.a=b
this.b=c},
em:function(a,b){return H.fE(a,b,null)},
fz:function(a){if(a instanceof H.a8)return a.h(0)
return"Instance of '"+H.f(H.cU(a))+"'"},
fB:function(a,b,c){var t,s,r
if(a>4294967295)H.ap(P.dR(a,0,4294967295,"length",null))
t=J.eq(H.J(new Array(a),c.i("q<0>")),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dQ:function(a,b){var t,s=H.J([],b.i("q<0>"))
for(t=J.dM(a);t.n();)C.a.l(s,b.a(t.gu()))
return s},
ew:function(a,b,c){var t=J.dM(b)
if(!t.n())return a
if(c.length===0){do a+=H.f(t.gu())
while(t.n())}else{a+=H.f(t.gu())
for(;t.n();)a=a+c+H.f(t.gu())}return a},
et:function(a,b,c,d){return new P.c4(a,b,c,d)},
fx:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
fy:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bK:function(a){if(a>=10)return""+a
return"0"+a},
Y:function(a){if(typeof a=="number"||H.e1(a)||null==a)return J.aK(a)
if(typeof a=="string")return JSON.stringify(a)
return P.fz(a)},
cE:function(a){return new P.aL(a)},
cD:function(a){return new P.Q(!1,null,null,a)},
eg:function(a,b,c){return new P.Q(!0,a,b,c)},
dS:function(a,b){return new P.b8(null,null,!0,a,b,"Value not in range")},
dR:function(a,b,c,d,e){return new P.b8(b,c,!0,a,d,"Invalid value")},
en:function(a,b,c,d,e){var t=H.bt(e==null?J.cC(b):e)
return new P.bO(t,!0,a,c,"Index out of range")},
a0:function(a){return new P.ci(a)},
ez:function(a){return new P.cg(a)},
fO:function(a){return new P.ca(a)},
bH:function(a){return new P.bG(a)},
cA:function(a){H.i9(J.aK(a))},
cR:function cR(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
aT:function aT(a){this.a=a},
cJ:function cJ(){},
cK:function cK(){},
i:function i(){},
aL:function aL(a){this.a=a},
cf:function cf(){},
c5:function c5(){},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bO:function bO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ci:function ci(a){this.a=a},
cg:function cg(a){this.a=a},
ca:function ca(a){this.a=a},
bG:function bG(a){this.a=a},
b9:function b9(){},
bJ:function bJ(a){this.a=a},
d5:function d5(a){this.a=a},
k:function k(){},
r:function r(){},
h:function h(){},
cu:function cu(){},
ai:function ai(a){this.a=a},
eX:function(a){var t
if(u.I.b(a)){t=J.X(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.cw(a.data,a.height,a.width)},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(){},
hk:function(a,b,c,d){var t,s,r
H.hg(b)
u.j.a(d)
if(H.eV(b)){t=[c]
C.a.a0(t,d)
d=t}s=u.z
r=P.dQ(J.fm(d,P.i2(),s),s)
return P.dY(P.em(u.Z.a(a),r))},
dZ:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.W(t)}return!1},
eN:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
dY:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.e1(a))return a
if(a instanceof P.S)return a.a
if(H.f1(a))return a
if(u.Q.b(a))return a
if(a instanceof P.aS)return H.ah(a)
if(u.Z.b(a))return P.eM(a,"$dart_jsFunction",new P.dq())
return P.eM(a,"_$dart_jsObject",new P.dr($.ee()))},
eM:function(a,b,c){var t=P.eN(a,b)
if(t==null){t=c.$1(a)
P.dZ(a,b,t)}return t},
dX:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.f1(a))return a
else if(a instanceof Object&&u.Q.b(a))return a
else if(a instanceof Date){t=H.bt(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.ap(P.cD("DateTime is outside valid range: "+t))
H.eW(!1,"isUtc",u.y)
return new P.aS(t,!1)}else if(a.constructor===$.ee())return a.o
else return P.eS(a)},
eS:function(a){if(typeof a=="function")return P.e_(a,$.cB(),new P.dw())
if(a instanceof Array)return P.e_(a,$.ec(),new P.dx())
return P.e_(a,$.ec(),new P.dy())},
e_:function(a,b,c){var t=P.eN(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.dZ(a,b,t)}return t},
hm:function(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.hl,a)
t[$.cB()]=a
a.$dart_jsFunction=t
return t},
hl:function(a,b){u.j.a(b)
return P.em(u.Z.a(a),b)},
hM:function(a,b){if(typeof a=="function")return a
else return b.a(P.hm(a))},
dq:function dq(){},
dr:function dr(a){this.a=a},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
S:function S(a){this.a=a},
aZ:function aZ(a){this.a=a},
ab:function ab(a,b){this.a=a
this.$ti=b},
aD:function aD(){}},W={
bg:function(a,b,c,d,e){var t=W.hL(new W.d4(c),u.A),s=t!=null
if(s&&!0){u.D.a(t)
if(s)J.fi(a,b,t,!1)}return new W.cp(a,b,t,!1,e.i("cp<0>"))},
hL:function(a,b){var t=$.p
if(t===C.c)return a
return t.ah(a,b)},
c:function c(){},
bB:function bB(){},
bC:function bC(){},
a6:function a6(){},
a7:function a7(){},
ar:function ar(){},
K:function K(){},
aR:function aR(){},
cH:function cH(){},
cI:function cI(){},
b:function b(){},
a:function a(){},
n:function n(){},
C:function C(){},
bL:function bL(){},
aV:function aV(){},
bN:function bN(){},
a9:function a9(){},
L:function L(){},
bP:function bP(){},
ae:function ae(){},
l:function l(){},
E:function E(){},
c9:function c9(){},
be:function be(){},
ak:function ak(){},
O:function O(){},
dN:function dN(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cp:function cp(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
d4:function d4(a){this.a=a},
as:function as(){},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cm:function cm(){},
cq:function cq(){},
cr:function cr(){}},X={
f4:function(a){var t,s,r,q,p,o,n,m
u.bL.a(a)
t=u.B.a(document.getElementById("video-canvas"));(t&&C.f).sM(t,a.height)
C.f.sP(t,a.width)
P.cA(a.height)
s=t.getContext("2d")
s.drawImage(a,0,0)
r=new X.c8().a4(P.eX(s.getImageData(0,0,a.width,a.height)),s)
q=[]
for(p=r.length,o=u.z,n=0;n<r.length;r.length===p||(0,H.bz)(r),++n){m=r[n]
m.aj(s)
q.push(P.cO(["code",m.a,"x",m.d,"y",m.e,"radius",m.b*8/2,"angle",m.c],o,o))}return C.l.ak(P.cO(["topcodes",q],u.O,u.bl),null)},
i_:function(a){X.fS(H.H(a))},
i5:function(){var t,s,r
$.ed().q(0,"topcodes_initVideoScanner",X.i6())
self.scanCanvas=P.hM(X.i7(),u.bQ)
t=u.aF.a(document.getElementById("fileInput"))
t.toString
s=u.L
r=s.i("~(1)?").a(new X.dK(t))
u.Y.a(null)
W.bg(t,"input",r,!1,s.c)},
fS:function(a){var t=new X.cj(a)
t.aH(a)
return t},
dK:function dK(a){this.a=a},
dJ:function dJ(a){this.a=a},
dI:function dI(a){this.a=a},
c8:function c8(){this.c=this.b=this.a=null},
bE:function bE(a,b){this.a=a
this.b=b},
bc:function bc(a){var _=this
_.a=-1
_.b=9
_.e=_.d=_.c=0
_.f=a},
cj:function cj(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cZ:function cZ(a){this.a=a},
d_:function d_(a){this.a=a}}
var w=[C,H,J,P,W,X]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dO.prototype={}
J.w.prototype={
w:function(a,b){return a===b},
gm:function(a){return H.b7(a)},
h:function(a){return"Instance of '"+H.f(H.cU(a))+"'"},
O:function(a,b){u.o.a(b)
throw H.d(P.et(a,b.gan(),b.gap(),b.gao()))}}
J.bQ.prototype={
h:function(a){return String(a)},
gm:function(a){return a?519018:218159},
$idz:1}
J.at.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gm:function(a){return 0},
O:function(a,b){return this.az(a,u.o.a(b))},
$ir:1}
J.aa.prototype={
gm:function(a){return 0},
h:function(a){return String(a)}}
J.c6.prototype={}
J.aB.prototype={}
J.M.prototype={
h:function(a){var t=a[$.cB()]
if(t==null)return this.aB(a)
return"JavaScript function for "+H.f(J.aK(t))},
$iaW:1}
J.q.prototype={
l:function(a,b){H.aF(a).c.a(b)
if(!!a.fixed$length)H.ap(P.a0("add"))
a.push(b)},
a0:function(a,b){var t
H.aF(a).i("k<1>").a(b)
if(!!a.fixed$length)H.ap(P.a0("addAll"))
if(Array.isArray(b)){this.aK(a,b)
return}for(t=J.dM(b);t.n();)a.push(t.gu())},
aK:function(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.d(P.bH(a))
for(s=0;s<t;++s)a.push(b[s])},
am:function(a,b,c){var t=H.aF(a)
return new H.T(a,t.t(c).i("1(2)").a(b),t.i("@<1>").t(c).i("T<1,2>"))},
F:function(a,b){if(b>=a.length)return H.m(a,b)
return a[b]},
gal:function(a){return a.length!==0},
h:function(a){return P.ep(a,"[","]")},
gB:function(a){return new J.bD(a,a.length,H.aF(a).i("bD<1>"))},
gm:function(a){return H.b7(a)},
gj:function(a){return a.length},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.aI(a,b))
return a[b]},
q:function(a,b,c){H.aF(a).c.a(c)
if(!!a.immutable$list)H.ap(P.a0("indexed set"))
if(b>=a.length||!1)throw H.d(H.aI(a,b))
a[b]=c},
$ik:1,
$io:1}
J.cL.prototype={}
J.bD.prototype={
gu:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.bz(r))
t=s.c
if(t>=q){s.sa5(null)
return!1}s.sa5(r[t]);++s.c
return!0},
sa5:function(a){this.d=this.$ti.i("1?").a(a)}}
J.au.prototype={
at:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.a0(""+a+".toInt()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a0(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
a3:function(a,b){var t
if(typeof b!="number")throw H.d(H.e5(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.af(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.af(a,b)},
af:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.a0("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
C:function(a,b){var t
if(a>0)t=this.aS(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aS:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iaJ:1}
J.aY.prototype={$ie:1}
J.bS.prototype={}
J.Z.prototype={
aV:function(a,b){if(b<0)throw H.d(H.aI(a,b))
if(b>=a.length)H.ap(H.aI(a,b))
return a.charCodeAt(b)},
ab:function(a,b){if(b>=a.length)throw H.d(H.aI(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!="string")throw H.d(P.eg(b,null,null))
return a+b},
H:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.d(P.dS(b,null))
if(c>a.length)throw H.d(P.dS(c,null))
return a.substring(b,c)},
h:function(a){return a},
gm:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gj:function(a){return a.length},
$it:1}
H.bW.prototype={
h:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.b5.prototype={
h:function(a){return"Null is not a valid value for the parameter '"+this.a+"' of type '"+H.hT(this.$ti.c).h(0)+"'"}}
H.aU.prototype={}
H.ad.prototype={
gB:function(a){var t=this
return new H.av(t,t.gj(t),t.$ti.i("av<ad.E>"))}}
H.av.prototype={
gu:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=J.e7(r),p=q.gj(r)
if(s.b!==p)throw H.d(P.bH(r))
t=s.c
if(t>=p){s.sa6(null)
return!1}s.sa6(q.F(r,t));++s.c
return!0},
sa6:function(a){this.d=this.$ti.i("1?").a(a)}}
H.T.prototype={
gj:function(a){return J.cC(this.a)},
F:function(a,b){return this.b.$1(J.fj(this.a,b))}}
H.y.prototype={}
H.aA.prototype={
gm:function(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bA(this.a)&536870911
this._hashCode=t
return t},
h:function(a){return'Symbol("'+H.f(this.a)+'")'},
w:function(a,b){if(b==null)return!1
return b instanceof H.aA&&this.a==b.a},
$iaj:1}
H.aP.prototype={}
H.aO.prototype={
gN:function(a){return this.gj(this)===0},
h:function(a){return P.cP(this)},
$iN:1}
H.aQ.prototype={
gj:function(a){return this.a},
aP:function(a){return this.b[H.H(a)]},
A:function(a,b){var t,s,r,q,p=H.a3(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.aP(q)))}}}
H.bR.prototype={
gan:function(){var t=this.a
return t},
gap:function(){var t,s,r,q,p=this
if(p.c===1)return C.n
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.n
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.m(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gao:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.o
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.o
p=new H.ac(u.r)
for(o=0;o<s;++o){if(o>=t.length)return H.m(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.m(r,m)
p.q(0,new H.aA(n),r[m])}return new H.aP(p,u.h)},
$ieo:1}
H.cT.prototype={
$2:function(a,b){var t
H.H(a)
t=this.a
t.b=t.b+"$"+H.f(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:8}
H.cX.prototype={
v:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.b6.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bT.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.f(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.f(s.a)+")"
return r+q+"' on '"+t+"' ("+H.f(s.a)+")"}}
H.ch.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cS.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bm.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iaz:1}
H.a8.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.f6(s==null?"unknown":s)+"'"},
$iaW:1,
gbd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ce.prototype={}
H.cb.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.f6(t)+"'"}}
H.aq.prototype={
w:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.aq))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gm:function(a){var t,s=this.c
if(s==null)t=H.b7(this.a)
else t=typeof s!=="object"?J.bA(s):H.b7(s)
return(t^H.b7(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cU(t))+"'")}}
H.c7.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ck.prototype={
h:function(a){return"Assertion failed: "+P.Y(this.a)}}
H.dj.prototype={}
H.ac.prototype={
gj:function(a){return this.a},
gN:function(a){return this.a===0},
aW:function(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return this.aN(t,a)}else{s=this.b_(a)
return s}},
b_:function(a){var t=this.d
if(t==null)return!1
return this.a1(this.X(t,J.bA(a)&0x3ffffff),a)>=0},
k:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.I(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.I(q,b)
r=s==null?o:s.b
return r}else return p.b0(b)},
b0:function(a){var t,s,r=this.d
if(r==null)return null
t=this.X(r,J.bA(a)&0x3ffffff)
s=this.a1(t,a)
if(s<0)return null
return t[s].b},
q:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.a3(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.a8(t==null?n.b=n.Y():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.a8(s==null?n.c=n.Y():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.Y()
q=J.bA(b)&0x3ffffff
p=n.X(r,q)
if(p==null)n.a_(r,q,[n.Z(b,c)])
else{o=n.a1(p,b)
if(o>=0)p[o].b=c
else p.push(n.Z(b,c))}}},
A:function(a,b){var t,s,r=this
H.a3(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.bH(r))
t=t.c}},
a8:function(a,b,c){var t,s=this,r=H.a3(s)
r.c.a(b)
r.Q[1].a(c)
t=s.I(a,b)
if(t==null)s.a_(a,b,s.Z(b,c))
else t.b=c},
Z:function(a,b){var t=this,s=H.a3(t),r=new H.cN(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
a1:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.fh(a[s].a,b))return s
return-1},
h:function(a){return P.cP(this)},
I:function(a,b){return a[b]},
X:function(a,b){return a[b]},
a_:function(a,b,c){a[b]=c},
aO:function(a,b){delete a[b]},
aN:function(a,b){return this.I(a,b)!=null},
Y:function(){var t="<non-identifier-key>",s=Object.create(null)
this.a_(s,t,s)
this.aO(s,t)
return s},
$ies:1}
H.cN.prototype={}
H.b1.prototype={
gj:function(a){return this.a.a},
gB:function(a){var t=this.a,s=new H.bX(t,t.r,this.$ti.i("bX<1>"))
s.c=t.e
return s}}
H.bX.prototype={
gu:function(){return this.d},
n:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.bH(r))
t=s.c
if(t==null){s.sa7(null)
return!1}else{s.sa7(t.a)
s.c=t.c
return!0}},
sa7:function(a){this.d=this.$ti.i("1?").a(a)}}
H.dD.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.dE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dF.prototype={
$1:function(a){return this.a(H.H(a))},
$S:10}
H.bY.prototype={$iej:1}
H.ag.prototype={$iG:1}
H.ay.prototype={
gj:function(a){return a.length},
$iz:1}
H.af.prototype={
k:function(a,b){H.al(b,a,a.length)
return a[b]},
$ik:1,
$io:1}
H.b3.prototype={$ik:1,$io:1}
H.bZ.prototype={
k:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.c_.prototype={
k:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.c0.prototype={
k:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.c1.prototype={
k:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.c2.prototype={
k:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.b4.prototype={
gj:function(a){return a.length},
k:function(a,b){H.al(b,a,a.length)
return a[b]},
$ifR:1}
H.c3.prototype={
gj:function(a){return a.length},
k:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.bi.prototype={}
H.bj.prototype={}
H.bk.prototype={}
H.bl.prototype={}
H.F.prototype={
i:function(a){return H.cy(v.typeUniverse,this,a)},
t:function(a){return H.he(v.typeUniverse,this,a)}}
H.cs.prototype={}
H.cv.prototype={
h:function(a){return H.A(this.a,null)}}
H.co.prototype={
h:function(a){return this.a}}
H.bo.prototype={}
P.d1.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:5}
P.d0.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:11}
P.d2.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:3}
P.d3.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:3}
P.bn.prototype={
aI:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.by(new P.dn(this,b),0),a)
else throw H.d(P.a0("`setTimeout()` not found."))},
aJ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.by(new P.dm(this,a,Date.now(),b),0),a)
else throw H.d(P.a0("Periodic timer."))},
aU:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw H.d(P.a0("Canceling a timer."))},
$ibb:1}
P.dn.prototype={
$0:function(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.dm.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.b.aG(t,p)}r.c=q
s.d.$1(r)},
$C:"$0",
$R:0,
$S:3}
P.aM.prototype={
h:function(a){return H.f(this.a)},
$ii:1,
gS:function(){return this.b}}
P.bh.prototype={
b1:function(a){if((this.c&15)!==6)return!0
return this.b.b.a2(u.m.a(this.d),a.a,u.y,u.K)},
aZ:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.R.b(t))return q.a(p.b6(t,a.a,a.b,s,r,u.l))
else return q.a(p.a2(u.v.a(t),a.a,s,r))}}
P.D.prototype={
as:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).i("1/(2)").a(a)
t=$.p
if(t!==C.c){c.i("@<0/>").t(q.c).i("1(2)").a(a)
if(b!=null)b=P.hC(b,t)}s=new P.D(t,c.i("D<0>"))
r=b==null?1:3
this.a9(new P.bh(s,r,a,b,q.i("@<1>").t(c).i("bh<1,2>")))
return s},
b9:function(a,b){return this.as(a,null,b)},
a9:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.a9(a)
return}s.a=r
s.c=t.c}P.dv(null,null,s.b,u.M.a(new P.d6(s,a)))}},
ae:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.ae(a)
return}n.a=t
n.c=o.c}m.a=n.K(a)
P.dv(null,null,n.b,u.M.a(new P.da(m,n)))}},
J:function(){var t=u.F.a(this.c)
this.c=null
return this.K(t)},
K:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aM:function(a){var t,s,r,q=this
q.a=1
try{a.as(new P.d7(q),new P.d8(q),u.P)}catch(r){t=H.W(r)
s=H.an(r)
P.ib(new P.d9(q,t,s))}},
U:function(a,b){var t,s,r=this
u.l.a(b)
t=r.J()
s=P.cF(a,b)
r.a=8
r.c=s
P.aC(r,t)},
$iaX:1}
P.d6.prototype={
$0:function(){P.aC(this.a,this.b)},
$S:0}
P.da.prototype={
$0:function(){P.aC(this.b,this.a.a)},
$S:0}
P.d7.prototype={
$1:function(a){var t,s,r,q,p,o=this.a
o.a=0
try{r=o.$ti.c
a=r.a(r.a(a))
q=o.J()
o.a=4
o.c=a
P.aC(o,q)}catch(p){t=H.W(p)
s=H.an(p)
o.U(t,s)}},
$S:5}
P.d8.prototype={
$2:function(a,b){this.a.U(a,u.l.a(b))},
$C:"$2",
$R:2,
$S:12}
P.d9.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:0}
P.dd.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.b5(u.bd.a(r.d),u.z)}catch(q){t=H.W(q)
s=H.an(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.cF(t,s)
p.b=!0
return}if(m instanceof P.D&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.b9(new P.de(o),u.z)
r.b=!1}},
$S:0}
P.de.prototype={
$1:function(a){return this.a},
$S:13}
P.dc.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.a2(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.W(m)
s=H.an(m)
r=this.a
r.c=P.cF(t,s)
r.b=!0}},
$S:0}
P.db.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eV(q.a.b1(t))&&q.a.e!=null){q.c=q.a.aZ(t)
q.b=!1}}catch(p){s=H.W(p)
r=H.an(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.cF(s,r)
m.b=!0}},
$S:0}
P.cl.prototype={}
P.ba.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.D($.p,u.a)
q.a=0
t=H.a3(r)
s=t.i("~(1)?").a(new P.cV(q,r))
u.Y.a(new P.cW(q,p))
W.bg(r.a,r.b,s,!1,t.c)
return p}}
P.cV.prototype={
$1:function(a){H.a3(this.b).c.a(a);++this.a.a},
$S:function(){return H.a3(this.b).i("~(1)")}}
P.cW.prototype={
$0:function(){var t=this.b,s=t.$ti,r=s.i("1/").a(this.a.a),q=t.J()
s.c.a(r)
t.a=4
t.c=r
P.aC(t,q)},
$S:0}
P.cc.prototype={}
P.cd.prototype={}
P.bs.prototype={$ieA:1}
P.du.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.aK(this.b)
throw t},
$S:0}
P.ct.prototype={
b7:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.c===$.p){a.$0()
return}P.eP(q,q,this,a,u.H)}catch(r){t=H.W(r)
s=H.an(r)
P.dt(q,q,this,t,u.l.a(s))}},
b8:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.c===$.p){a.$1(b)
return}P.eQ(q,q,this,a,b,u.H,c)}catch(r){t=H.W(r)
s=H.an(r)
P.dt(q,q,this,t,u.l.a(s))}},
ag:function(a){return new P.dk(this,u.M.a(a))},
ah:function(a,b){return new P.dl(this,b.i("~(0)").a(a),b)},
b5:function(a,b){b.i("0()").a(a)
if($.p===C.c)return a.$0()
return P.eP(null,null,this,a,b)},
a2:function(a,b,c,d){c.i("@<0>").t(d).i("1(2)").a(a)
d.a(b)
if($.p===C.c)return a.$1(b)
return P.eQ(null,null,this,a,b,c,d)},
b6:function(a,b,c,d,e,f){d.i("@<0>").t(e).t(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.p===C.c)return a.$2(b,c)
return P.hD(null,null,this,a,b,c,d,e,f)}}
P.dk.prototype={
$0:function(){return this.a.b7(this.b)},
$S:0}
P.dl.prototype={
$1:function(a){var t=this.c
return this.a.b8(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.j.prototype={
gB:function(a){return new H.av(a,this.gj(a),H.a5(a).i("av<j.E>"))},
F:function(a,b){return this.k(a,b)},
gal:function(a){return this.gj(a)!==0},
am:function(a,b,c){var t=H.a5(a)
return new H.T(a,t.t(c).i("1(j.E)").a(b),t.i("@<j.E>").t(c).i("T<1,2>"))},
h:function(a){return P.ep(a,"[","]")}}
P.b2.prototype={}
P.cQ.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.f(a)
s.a=t+": "
s.a+=H.f(b)},
$S:6}
P.aw.prototype={
A:function(a,b){var t,s=H.a3(this)
s.i("~(1,2)").a(b)
for(s=new H.b1(this,s.i("b1<1>")),s=s.gB(s);s.n();){t=s.d
b.$2(t,this.k(0,t))}},
gj:function(a){return this.a},
gN:function(a){return this.a===0},
h:function(a){return P.cP(this)},
$iN:1}
P.br.prototype={}
P.ax.prototype={
A:function(a,b){this.a.A(0,this.$ti.i("~(1,2)").a(b))},
gN:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
h:function(a){return P.cP(this.a)},
$iN:1}
P.bd.prototype={}
P.aE.prototype={}
P.bF.prototype={}
P.bI.prototype={}
P.b_.prototype={
h:function(a){var t=P.Y(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.bU.prototype={
h:function(a){return"Cyclic error in JSON stringify"}}
P.cM.prototype={
ak:function(a,b){var t
u.cZ.a(b)
t=P.fZ(a,this.gaY().b,null)
return t},
gaY:function(){return C.E}}
P.bV.prototype={}
P.dh.prototype={
av:function(a){var t,s,r,q,p,o,n,m=a.length
for(t=J.hW(a),s=this.c,r=0,q=0;q<m;++q){p=t.ab(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(C.d.ab(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(C.d.aV(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=C.d.H(a,r,q)
r=q+1
s.a+=H.u(92)
s.a+=H.u(117)
s.a+=H.u(100)
o=p>>>8&15
s.a+=H.u(o<10?48+o:87+o)
o=p>>>4&15
s.a+=H.u(o<10?48+o:87+o)
o=p&15
s.a+=H.u(o<10?48+o:87+o)}}continue}if(p<32){if(q>r)s.a+=C.d.H(a,r,q)
r=q+1
s.a+=H.u(92)
switch(p){case 8:s.a+=H.u(98)
break
case 9:s.a+=H.u(116)
break
case 10:s.a+=H.u(110)
break
case 12:s.a+=H.u(102)
break
case 13:s.a+=H.u(114)
break
default:s.a+=H.u(117)
s.a+=H.u(48)
s.a+=H.u(48)
o=p>>>4&15
s.a+=H.u(o<10?48+o:87+o)
o=p&15
s.a+=H.u(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.d.H(a,r,q)
r=q+1
s.a+=H.u(92)
s.a+=H.u(p)}}if(r===0)s.a+=H.f(a)
else if(r<m)s.a+=t.H(a,r,m)},
T:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.d(new P.bU(a,null))}C.a.l(t,a)},
R:function(a){var t,s,r,q,p=this
if(p.au(a))return
p.T(a)
try{t=p.b.$1(a)
if(!p.au(t)){r=P.er(a,null,p.gad())
throw H.d(r)}r=p.a
if(0>=r.length)return H.m(r,-1)
r.pop()}catch(q){s=H.W(q)
r=P.er(a,s,p.gad())
throw H.d(r)}},
au:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.h.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.av(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.T(a)
r.bb(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.T(a)
s=r.bc(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return s}else return!1},
bb:function(a){var t,s,r=this.c
r.a+="["
t=J.e7(a)
if(t.gal(a)){this.R(t.k(a,0))
for(s=1;s<t.gj(a);++s){r.a+=","
this.R(t.k(a,s))}}r.a+="]"},
bc:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gN(a)){n.c.a+="{}"
return!0}t=a.gj(a)*2
s=P.fB(t,null,u.X)
r=m.a=0
m.b=!0
a.A(0,new P.di(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.av(H.H(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.m(s,o)
n.R(s[o])}q.a+="}"
return!0}}
P.di.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.q(t,s.a++,a)
C.a.q(t,s.a++,b)},
$S:6}
P.dg.prototype={
gad:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.cR.prototype={
$2:function(a,b){var t,s,r
u.cm.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.f(a.a)
t.a=r+": "
t.a+=P.Y(b)
s.a=", "},
$S:14}
P.aS.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a&&!0},
gm:function(a){var t=this.a
return(t^C.b.C(t,30))&1073741823},
h:function(a){var t=this,s=P.fx(H.fL(t)),r=P.bK(H.fJ(t)),q=P.bK(H.fF(t)),p=P.bK(H.fG(t)),o=P.bK(H.fI(t)),n=P.bK(H.fK(t)),m=P.fy(H.fH(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.aT.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gm:function(a){return C.b.gm(this.a)},
h:function(a){var t,s,r,q=new P.cK(),p=this.a
if(p<0)return"-"+new P.aT(0-p).h(0)
t=q.$1(C.b.E(p,6e7)%60)
s=q.$1(C.b.E(p,1e6)%60)
r=new P.cJ().$1(p%1e6)
return""+C.b.E(p,36e8)+":"+H.f(t)+":"+H.f(s)+"."+H.f(r)}}
P.cJ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:7}
P.cK.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:7}
P.i.prototype={
gS:function(){return H.an(this.$thrownJsError)}}
P.aL.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.Y(t)
return"Assertion failed"}}
P.cf.prototype={}
P.c5.prototype={
h:function(a){return"Throw of null."}}
P.Q.prototype={
gW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gV:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+H.f(o),m=r.gW()+p+n
if(!r.a)return m
t=r.gV()
s=P.Y(r.b)
return m+t+": "+s}}
P.b8.prototype={
gW:function(){return"RangeError"},
gV:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.f(r):""
else if(r==null)t=": Not greater than or equal to "+H.f(s)
else if(r>s)t=": Not in inclusive range "+H.f(s)+".."+H.f(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.f(s)
return t}}
P.bO.prototype={
gW:function(){return"RangeError"},
gV:function(){var t,s=H.bt(this.b)
if(typeof s!=="number")return s.be()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.c4.prototype={
h:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.ai("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.Y(o)
k.a=", "}l.d.A(0,new P.cR(k,j))
n=P.Y(l.a)
m=j.h(0)
s="NoSuchMethodError: method not found: '"+H.f(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return s}}
P.ci.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.cg.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ca.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bG.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.Y(t)+"."}}
P.b9.prototype={
h:function(a){return"Stack Overflow"},
gS:function(){return null},
$ii:1}
P.bJ.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.d5.prototype={
h:function(a){return"Exception: "+this.a}}
P.k.prototype={
gj:function(a){var t,s=this.gB(this)
for(t=0;s.n();)++t
return t},
h:function(a){return P.fA(this,"(",")")}}
P.r.prototype={
gm:function(a){return P.h.prototype.gm.call(C.C,this)},
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
w:function(a,b){return this===b},
gm:function(a){return H.b7(this)},
h:function(a){return"Instance of '"+H.f(H.cU(this))+"'"},
O:function(a,b){u.o.a(b)
throw H.d(P.et(this,b.gan(),b.gap(),b.gao()))},
toString:function(){return this.h(this)}}
P.cu.prototype={
h:function(a){return""},
$iaz:1}
P.ai.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ifP:1}
W.c.prototype={}
W.bB.prototype={
h:function(a){return String(a)}}
W.bC.prototype={
h:function(a){return String(a)}}
W.a6.prototype={$ia6:1}
W.a7.prototype={
sM:function(a,b){a.height=b},
sP:function(a,b){a.width=b},
aw:function(a,b){return a.getContext(b)},
$ia7:1}
W.ar.prototype={
sG:function(a,b){a.fillStyle=b},
$iar:1}
W.K.prototype={
gj:function(a){return a.length}}
W.aR.prototype={
gj:function(a){return a.length}}
W.cH.prototype={}
W.cI.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.n.prototype={
aL:function(a,b,c,d){return a.addEventListener(b,H.by(u.D.a(c),1),!1)},
$in:1}
W.C.prototype={$iC:1}
W.bL.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.en(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>=a.length)return H.m(a,b)
return a[b]},
$iz:1,
$ik:1,
$io:1}
W.aV.prototype={
gb3:function(a){var t,s=a.result
if(u.J.b(s)){t=new Uint8Array(s,0)
return t}return s}}
W.bN.prototype={
gj:function(a){return a.length}}
W.a9.prototype={
gai:function(a){return a.data},
gM:function(a){return a.height},
gP:function(a){return a.width},
$ia9:1}
W.L.prototype={
say:function(a,b){a.src=b},
$iL:1}
W.bP.prototype={$iel:1}
W.ae.prototype={}
W.l.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.aA(a):t},
$il:1}
W.E.prototype={$iE:1}
W.c9.prototype={
gj:function(a){return a.length}}
W.be.prototype={$ibe:1}
W.ak.prototype={$iak:1}
W.O.prototype={$iO:1}
W.dN.prototype={}
W.bf.prototype={}
W.cn.prototype={}
W.cp.prototype={}
W.d4.prototype={
$1:function(a){return this.a.$1(u.A.a(a))},
$S:15}
W.as.prototype={
gB:function(a){return new W.bM(a,a.length,H.a5(a).i("bM<as.E>"))}}
W.bM.prototype={
n:function(){var t=this,s=t.c+1,r=t.b
if(s<r){r=t.a
if(s<0||s>=r.length)return H.m(r,s)
t.sac(r[s])
t.c=s
return!0}t.sac(null)
t.c=r
return!1},
gu:function(){return this.d},
sac:function(a){this.d=this.$ti.i("1?").a(a)}}
W.cm.prototype={}
W.cq.prototype={}
W.cr.prototype={}
P.cw.prototype={$ia9:1,
gai:function(a){return this.a},
gM:function(a){return this.b},
gP:function(a){return this.c}}
P.b0.prototype={$ib0:1}
P.dq.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.hk,a,!1)
P.dZ(t,$.cB(),a)
return t},
$S:1}
P.dr.prototype={
$1:function(a){return new this.a(a)},
$S:1}
P.dw.prototype={
$1:function(a){return new P.aZ(a)},
$S:16}
P.dx.prototype={
$1:function(a){return new P.ab(a,u.U)},
$S:17}
P.dy.prototype={
$1:function(a){return new P.S(a)},
$S:18}
P.S.prototype={
k:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cD("property is not a String or num"))
return P.dX(this.a[b])},
q:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cD("property is not a String or num"))
this.a[b]=P.dY(c)},
w:function(a,b){if(b==null)return!1
return b instanceof P.S&&this.a===b.a},
h:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.W(s)
t=this.aE(0)
return t}},
aT:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.aF(b)
t=P.dQ(new H.T(b,t.i("@(1)").a(P.i3()),t.i("T<1,@>")),u.z)}return P.dX(s[a].apply(s,t))},
gm:function(a){return 0}}
P.aZ.prototype={}
P.ab.prototype={
aa:function(a){var t=this,s=a<0||a>=t.gj(t)
if(s)throw H.d(P.dR(a,0,t.gj(t),null,null))},
k:function(a,b){if(H.ds(b))this.aa(b)
return this.$ti.c.a(this.aC(0,b))},
q:function(a,b,c){if(H.ds(b))this.aa(b)
this.aF(0,b,c)},
gj:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.d(P.fO("Bad JsArray length"))},
$ik:1,
$io:1}
P.aD.prototype={
q:function(a,b,c){return this.aD(0,b,c)}}
X.dK.prototype={
$1:function(a){var t,s,r=this.a.files
if(0>=r.length)return H.m(r,0)
t=r[0]
s=new FileReader()
r=u.u.a(new X.dJ(s))
u.Y.a(null)
W.bg(s,"load",r,!1,u.V)
s.readAsDataURL(t)},
$S:2}
X.dJ.prototype={
$1:function(a){var t,s,r
u.V.a(a)
t=document.createElement("img")
s=u.L
r=s.i("~(1)?").a(new X.dI(t))
u.Y.a(null)
W.bg(t,"load",r,!1,s.c)
C.A.say(t,H.H(C.z.gb3(this.a)))},
$S:19}
X.dI.prototype={
$1:function(a){P.cA(X.f4(this.a))},
$S:2}
X.c8.prototype={
a4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
j.a=a
j.b=J.fl(a)
j.c=J.fk(j.a)
t=j.ba()
s=H.J([],u.q)
for(r=t.length,q=u.W,p=0;p<t.length;t.length===r||(0,H.bz)(t),++p){o=t[p]
n=o.a
m=o.b
if(!j.b2(s,n,m)){l=new X.bc(H.J([0,0,0,0,0,0,0,0],q))
l.aX(0,j,n,m)
if(l.a>0){n=l.d
m=l.b*8/2
if(n>m){k=j.b
if(typeof k!=="number")return k.D()
if(n<k-m){n=l.e
if(n>m){k=j.c
if(typeof k!=="number")return k.D()
m=n<k-m
n=m}else n=!1}else n=!1}else n=!1
if(n)C.a.l(s,l)}}}return s},
b2:function(a,b,c){var t,s,r,q,p,o
u.b9.a(a)
for(t=a.length,s=0;s<t;++s){r=a[s]
q=r.d-b
p=r.e-c
o=r.b*4
if(q*q+p*p<=o*o)return!0}return!1},
ba:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=H.J([],u.k),g=i,f=g,e=f,d=e,c=d,b=c,a=128,a0=0
while(!0){t=j.c
if(typeof t!=="number")return H.P(t)
if(!(a0<t))break
t=C.b.a3(a0,2)===0
if(t)s=0
else{r=j.b
if(typeof r!=="number")return r.D()
s=r-1}r=j.b
if(typeof r!=="number")return H.P(r)
s+=a0*r
q=0
p=0
o=0
n=0
m=0
while(!0){r=j.b
if(typeof r!=="number")return H.P(r)
if(!(m<r))break
r=J.X(j.a)
l=s*4
if(l<0||l>=r.length)return H.m(r,l)
b=r[l]
r=J.X(j.a)
k=l+1
if(k>=r.length)return H.m(r,k)
c=r[k]
k=J.X(j.a)
r=l+2
if(r>=k.length)return H.m(k,r)
d=k[r]
e=b+c+d
a+=e-C.b.C(a,3)
f=C.b.C(a,3)
b&=254
e=e<f*0.975?0:1
r=J.X(j.a)
if(l>=r.length)return H.m(r,l)
r[l]=b+e
switch(n){case 0:if(e===0){q=1
p=0
o=0
n=1}break
case 1:if(e===0)++q
else{p=1
n=2}break
case 2:if(e===0){o=1
n=3}else ++p
break
case 3:if(e===0)++o
else{if(q>=4)if(o>=4)if(p>=6){r=q+o
l=r-p
r=l<=r&&l<=p&&o-q<=q&&q-o<=o}else r=!1
else r=!1
else r=!1
if(r){g=1+o+(p>>>1)
g=t?s-g:s+g
r=j.b
if(typeof r!=="number")return H.P(r)
C.a.l(h,new X.bE(C.b.a3(g,r),a0))}q=o
p=1
o=0
n=2}break}s+=t?1:-1;++m}++a0}return h},
ax:function(a,b){var t,s,r,q,p,o,n,m,l,k=this
if(a>=1){t=k.b
if(typeof t!=="number")return t.D()
if(a<=t-2)if(b>=1){t=k.c
if(typeof t!=="number")return t.D()
t=b>t-2}else t=!0
else t=!0}else t=!0
if(t)return 0
for(s=b-1,t=b+1,r=a-1,q=a+1,p=0,o=null;s<=t;++s)for(n=r;n<=q;++n){m=J.X(k.a)
l=k.b
if(typeof l!=="number")return H.P(l)
l=(s*l+n)*4
if(l<0||l>=m.length)return H.m(m,l)
o=m[l]
p+=(o&1)*255}return C.b.E(p,9)},
L:function(a,b,c,d){var t,s,r,q,p,o=this,n=o.b
if(typeof n!=="number")return H.P(n)
t=b*n+a
n=J.X(o.a)
s=t*4
if(s<0||s>=n.length)return H.m(n,s)
r=n[s]&1
for(q=0,p=!1;!0;){n=o.b
if(typeof n!=="number")return H.P(n)
t+=c+d*n;++q
if(t>0){s=o.c
if(typeof s!=="number")return H.P(s)
s=t>=n*s
n=s}else n=!0
if(n)return q
else{n=J.X(o.a)
s=t*4
if(s<0||s>=n.length)return H.m(n,s)
if((n[s]&1)!==r){if(p)return q
else{n=J.X(o.a)
if(s>=n.length)return H.m(n,s)
r=n[s]&1}p=!0}}}}}
X.bE.prototype={}
X.bc.prototype={
aX:function(a,b,c,d){var t,s,r,q,p,o=this,n=b.L(c,d,0,-1),m=b.L(c,d,0,1),l=b.L(c,d,-1,0),k=b.L(c,d,1,0)
o.d=c
o.e=d
if(typeof k!=="number")return k.D()
if(typeof l!=="number")return H.P(l)
o.d=c+(k-l)/2
if(typeof m!=="number")return m.D()
if(typeof n!=="number")return H.P(n)
o.e=d+(m-n)/2
o.b=(k+l+n+m)/8
o.a=-1
for(t=0,s=0,r=0;r<5;++r){q=r*0.483321946706122/5
p=o.aq(b,o.b,q)
if(p>t){s=q
t=p}}if(t>0){o.aq(b,o.b,s)
o.a=o.b4(o.a,s)}return o.a},
aq:function(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.a=-1
for(t=a.f,s=null,r=0,q=null,p=null,o=0,n=0,m=0;m<13;++m){l=0.483321946706122*m+a2
k=Math.cos(l)
j=Math.sin(l)
for(i=0;i<8;++i){s=(i-3.5)*a1
q=C.b.at(C.h.ar(a.d+k*s))
p=C.b.at(C.h.ar(a.e+j*s))
C.a.q(t,i,a0.ax(q,p))}l=t[1]
if(l<=128||t[3]<=128||t[4]<=128||t[6]<=128)return 0
h=t[2]
if(h>128||t[5]>128)return 0
g=t[3]
f=t[4]
e=t[6]
d=t[5]
c=t[7]
r=r+(l+g+f+e+(255-h)+(255-d))+Math.abs(c*2-255)
b=c>128?1:0
n+=b
o=(o<<1>>>0)+b}if(n===5){a.a=o
return r}else return 0},
b4:function(a,b){var t,s
this.c=0
for(t=a,s=1;s<=13;++s){a=(a<<1&8191|C.b.C(a,12))>>>0
if(a<t){this.c=s*0.483321946706122
t=a}}this.c+=b-0.241660973353061
return t},
aj:function(a){var t,s,r=this,q="white",p=r.a,o=r.b,n=8*o*0.5,m=r.c;(a&&C.e).sG(a,q)
a.beginPath()
a.arc(r.d,r.e,n,0,6.283185307179586,!0)
a.fill()
for(t=0;t<13;++t){s=t*-0.483321946706122+m
C.e.sG(a,(p&1)>0?q:"red")
a.beginPath()
a.moveTo(r.d,r.e)
a.arc(r.d,r.e,n,s,s-0.483321946706122,!0)
a.closePath()
a.fill()
p=C.b.C(p,1)}C.e.sG(a,q)
a.beginPath()
a.arc(r.d,r.e,n-o,0,6.283185307179586,!0)
a.fill()
C.e.sG(a,"red")
a.beginPath()
a.arc(r.d,r.e,n-o*2,0,6.283185307179586,!0)
a.fill()
C.e.sG(a,q)
a.beginPath()
a.arc(r.d,r.e,n-o*3,0,6.283185307179586,!0)
a.fill()}}
X.cj.prototype={
aH:function(a){var t,s,r,q,p,o=this
o.e=new X.c8()
t=o.a
s="#"+H.f(t)
r=document
q=u.B.a(r.querySelector(s))
o.b=u.t.a((q&&C.f).aw(q,"2d"))
s=r.createElement("video")
s.id=H.f(t)+"-video"
o.c=s
s.autoplay=!0
s=o.c.style
s.display="none"
r.body.appendChild(o.c)
t=o.c
s=u.L
r=s.i("~(1)?")
p=r.a(new X.cZ(o))
u.Y.a(null)
s=s.c
W.bg(t,"play",p,!1,s)
W.bg(o.c,"pause",r.a(new X.d_(o)),!1,s)},
aR:function(a){var t,s,r,q,p,o,n,m,l=this
u.ao.a(a)
l.b.save()
l.b.translate(l.c.videoWidth,0)
l.b.scale(-1,1)
l.b.drawImage(l.c,0,0)
l.b.restore()
t=l.b
s=l.c
r=P.eX(t.getImageData(0,0,s.videoWidth,s.videoHeight))
q=l.e.a4(r,l.b)
p=[]
for(t=q.length,s=u.z,o=0;o<q.length;q.length===t||(0,H.bz)(q),++o){n=q[o]
n.aj(l.b)
p.push(P.cO(["code",n.a,"x",n.d,"y",n.e,"radius",n.b*8/2,"angle",n.c],s,s))}t=l.a
m=P.cO(["canvasId",t,"topcodes",p],u.O,u._)
$.ed().k(0,"TopCodes").aT("_relayFrameData",H.J([t,C.l.ak(m,null)],u.i))}}
X.cZ.prototype={
$1:function(a){var t=this.a
P.cA("video width: "+H.f(t.c.videoWidth))
P.cA("video height: "+H.f(t.c.videoHeight))
t.d=P.fQ(C.y,t.gaQ())},
$S:2}
X.d_.prototype={
$1:function(a){var t,s
P.cA("pause")
t=this.a
s=t.d
if(s!=null)s.aU()
t.d=null},
$S:2};(function aliases(){var t=J.w.prototype
t.aA=t.h
t.az=t.O
t=J.aa.prototype
t.aB=t.h
t=P.h.prototype
t.aE=t.h
t=P.S.prototype
t.aC=t.k
t.aD=t.q
t=P.aD.prototype
t.aF=t.q})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(P,"hO","fU",4)
t(P,"hP","fV",4)
t(P,"hQ","fW",4)
s(P,"eU","hG",0)
t(P,"hS","hn",1)
t(P,"i3","dY",21)
t(P,"i2","dX",22)
t(X,"i7","f4",23)
t(X,"i6","i_",24)
r(X.cj.prototype,"gaQ","aR",20)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.dO,J.w,J.bD,P.i,P.k,H.av,H.y,H.aA,P.ax,H.aO,H.bR,H.a8,H.cX,H.cS,H.bm,H.dj,P.aw,H.cN,H.bX,H.F,H.cs,H.cv,P.bn,P.aM,P.bh,P.D,P.cl,P.ba,P.cc,P.cd,P.bs,P.j,P.br,P.bF,P.dh,P.aS,P.aT,P.b9,P.d5,P.r,P.cu,P.ai,W.cH,W.dN,W.as,W.bM,P.cw,P.S,X.c8,X.bE,X.bc,X.cj])
r(J.w,[J.bQ,J.at,J.aa,J.q,J.au,J.Z,H.bY,H.ag,W.n,W.a6,W.ar,W.cm,W.cI,W.a,W.cq,W.a9,P.b0])
r(J.aa,[J.c6,J.aB,J.M])
s(J.cL,J.q)
r(J.au,[J.aY,J.bS])
r(P.i,[H.bW,H.b5,P.cf,H.bT,H.ch,H.c7,P.aL,H.co,P.b_,P.c5,P.Q,P.c4,P.ci,P.cg,P.ca,P.bG,P.bJ])
s(H.aU,P.k)
r(H.aU,[H.ad,H.b1])
s(H.T,H.ad)
s(P.aE,P.ax)
s(P.bd,P.aE)
s(H.aP,P.bd)
s(H.aQ,H.aO)
r(H.a8,[H.cT,H.ce,H.dD,H.dE,H.dF,P.d1,P.d0,P.d2,P.d3,P.dn,P.dm,P.d6,P.da,P.d7,P.d8,P.d9,P.dd,P.de,P.dc,P.db,P.cV,P.cW,P.du,P.dk,P.dl,P.cQ,P.di,P.cR,P.cJ,P.cK,W.d4,P.dq,P.dr,P.dw,P.dx,P.dy,X.dK,X.dJ,X.dI,X.cZ,X.d_])
s(H.b6,P.cf)
r(H.ce,[H.cb,H.aq])
s(H.ck,P.aL)
s(P.b2,P.aw)
s(H.ac,P.b2)
s(H.ay,H.ag)
r(H.ay,[H.bi,H.bk])
s(H.bj,H.bi)
s(H.af,H.bj)
s(H.bl,H.bk)
s(H.b3,H.bl)
r(H.b3,[H.bZ,H.c_,H.c0,H.c1,H.c2,H.b4,H.c3])
s(H.bo,H.co)
s(P.ct,P.bs)
s(P.bI,P.cd)
s(P.bU,P.b_)
s(P.cM,P.bF)
s(P.bV,P.bI)
s(P.dg,P.dh)
r(P.Q,[P.b8,P.bO])
r(W.n,[W.l,W.aV,W.ak,W.O])
r(W.l,[W.b,W.K])
s(W.c,W.b)
r(W.c,[W.bB,W.bC,W.a7,W.bN,W.L,W.bP,W.ae,W.c9])
s(W.aR,W.cm)
s(W.C,W.a6)
s(W.cr,W.cq)
s(W.bL,W.cr)
s(W.E,W.a)
s(W.be,W.ae)
s(W.bf,P.ba)
s(W.cn,W.bf)
s(W.cp,P.cc)
r(P.S,[P.aZ,P.aD])
s(P.ab,P.aD)
t(H.bi,P.j)
t(H.bj,H.y)
t(H.bk,P.j)
t(H.bl,H.y)
t(P.aE,P.br)
t(W.cm,W.cH)
t(W.cq,P.j)
t(W.cr,W.as)
t(P.aD,P.j)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",I:"double",aJ:"num",t:"String",dz:"bool",r:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","@(@)","r(a*)","r()","~(~())","r(@)","~(h?,h?)","t(e)","~(t,@)","@(@,t)","@(t)","r(~())","r(h,az)","D<@>(@)","~(aj,@)","~(a)","aZ(@)","ab<@>(@)","S(@)","r(E*)","~(bb*)","h?(h?)","h?(@)","t*(L*)","~(t*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.hd(v.typeUniverse,JSON.parse('{"c6":"aa","aB":"aa","M":"aa","ih":"a","ip":"a","ig":"b","iq":"b","iu":"b","iI":"E","ij":"c","ir":"l","io":"l","im":"O","ik":"K","iv":"K","ii":"ae","it":"af","is":"ag","bQ":{"dz":[]},"at":{"r":[]},"q":{"o":["1"],"k":["1"]},"cL":{"q":["1"],"o":["1"],"k":["1"]},"au":{"I":[],"aJ":[]},"aY":{"I":[],"e":[],"aJ":[]},"bS":{"I":[],"aJ":[]},"Z":{"t":[]},"bW":{"i":[]},"b5":{"i":[]},"aU":{"k":["1"]},"ad":{"k":["1"]},"T":{"ad":["2"],"k":["2"],"ad.E":"2"},"aA":{"aj":[]},"aP":{"bd":["1","2"],"aE":["1","2"],"ax":["1","2"],"br":["1","2"],"N":["1","2"]},"aO":{"N":["1","2"]},"aQ":{"aO":["1","2"],"N":["1","2"]},"bR":{"eo":[]},"b6":{"i":[]},"bT":{"i":[]},"ch":{"i":[]},"bm":{"az":[]},"a8":{"aW":[]},"ce":{"aW":[]},"cb":{"aW":[]},"aq":{"aW":[]},"c7":{"i":[]},"ck":{"i":[]},"ac":{"aw":["1","2"],"es":["1","2"],"N":["1","2"]},"b1":{"k":["1"]},"bY":{"ej":[]},"ag":{"G":[]},"ay":{"z":["1"],"G":[]},"af":{"j":["I"],"z":["I"],"o":["I"],"G":[],"k":["I"],"y":["I"],"j.E":"I"},"b3":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"]},"bZ":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"c_":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"c0":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"c1":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"c2":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"b4":{"j":["e"],"fR":[],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"c3":{"j":["e"],"z":["e"],"o":["e"],"G":[],"k":["e"],"y":["e"],"j.E":"e"},"co":{"i":[]},"bo":{"i":[]},"D":{"aX":["1"]},"bn":{"bb":[]},"aM":{"i":[]},"bs":{"eA":[]},"ct":{"bs":[],"eA":[]},"b2":{"aw":["1","2"],"N":["1","2"]},"aw":{"N":["1","2"]},"ax":{"N":["1","2"]},"bd":{"aE":["1","2"],"ax":["1","2"],"br":["1","2"],"N":["1","2"]},"b_":{"i":[]},"bU":{"i":[]},"bV":{"bI":["h?","t"]},"I":{"aJ":[]},"e":{"aJ":[]},"o":{"k":["1"]},"aL":{"i":[]},"cf":{"i":[]},"c5":{"i":[]},"Q":{"i":[]},"b8":{"i":[]},"bO":{"i":[]},"c4":{"i":[]},"ci":{"i":[]},"cg":{"i":[]},"ca":{"i":[]},"bG":{"i":[]},"b9":{"i":[]},"bJ":{"i":[]},"cu":{"az":[]},"ai":{"fP":[]},"c":{"b":[],"l":[],"n":[]},"b":{"l":[],"n":[]},"C":{"a6":[]},"L":{"b":[],"l":[],"n":[]},"l":{"n":[]},"E":{"a":[]},"bB":{"b":[],"l":[],"n":[]},"bC":{"b":[],"l":[],"n":[]},"a7":{"b":[],"l":[],"n":[]},"K":{"l":[],"n":[]},"bL":{"j":["C"],"as":["C"],"o":["C"],"z":["C"],"k":["C"],"as.E":"C","j.E":"C"},"aV":{"n":[]},"bN":{"b":[],"l":[],"n":[]},"bP":{"el":[],"b":[],"l":[],"n":[]},"ae":{"b":[],"l":[],"n":[]},"c9":{"b":[],"l":[],"n":[]},"be":{"b":[],"l":[],"n":[]},"ak":{"n":[]},"O":{"n":[]},"bf":{"ba":["1"]},"cn":{"bf":["1"],"ba":["1"]},"cw":{"a9":[]},"ab":{"j":["1"],"o":["1"],"k":["1"],"j.E":"1"}}'))
H.hc(v.typeUniverse,JSON.parse('{"aU":1,"ay":1,"cc":1,"cd":2,"b2":2,"bF":2,"aD":1}'))
0
var u=(function rtii(){var t=H.dB
return{n:t("aM"),x:t("a6"),J:t("ej"),h:t("aP<aj,@>"),C:t("i"),A:t("a"),Z:t("aW"),d:t("aX<@>"),I:t("a9"),o:t("eo"),N:t("k<@>"),s:t("q<t>"),b:t("q<@>"),k:t("q<bE*>"),i:t("q<t*>"),q:t("q<bc*>"),W:t("q<e*>"),T:t("at"),g:t("M"),p:t("z<@>"),U:t("ab<@>"),r:t("ac<aj,@>"),w:t("b0"),j:t("o<@>"),f:t("N<@,@>"),E:t("l"),P:t("r"),K:t("h"),l:t("az"),cx:t("t"),cm:t("aj"),ae:t("bb"),Q:t("G"),cr:t("aB"),cg:t("ak"),bj:t("O"),L:t("cn<a*>"),c:t("D<@>"),a:t("D<e>"),y:t("dz"),m:t("dz(h)"),cb:t("I"),z:t("@"),bd:t("@()"),v:t("@(h)"),R:t("@(h,az)"),S:t("e"),B:t("a7*"),t:t("ar*"),aF:t("el*"),bL:t("L*"),bl:t("o<@>*"),b9:t("o<bc*>*"),G:t("0&*"),_:t("h*"),V:t("E*"),O:t("t*"),ao:t("bb*"),bQ:t("t*(L*)*"),bc:t("aX<r>?"),X:t("h?"),F:t("bh<@,@>?"),D:t("@(a)?"),cZ:t("h?(@)?"),Y:t("~()?"),u:t("~(E*)?"),cY:t("aJ"),H:t("~"),M:t("~()"),e:t("~(bb)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.f=W.a7.prototype
C.e=W.ar.prototype
C.z=W.aV.prototype
C.A=W.L.prototype
C.B=J.w.prototype
C.a=J.q.prototype
C.b=J.aY.prototype
C.C=J.at.prototype
C.h=J.au.prototype
C.d=J.Z.prototype
C.D=J.M.prototype
C.p=J.c6.prototype
C.i=J.aB.prototype
C.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.w=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.v=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.k=function(hooks) { return hooks; }

C.l=new P.cM()
C.m=new H.dj()
C.c=new P.ct()
C.x=new P.cu()
C.y=new P.aT(6e4)
C.E=new P.bV(null)
C.n=H.J(t([]),u.b)
C.F=H.J(t([]),H.dB("q<aj*>"))
C.o=new H.aQ(0,{},C.F,H.dB("aQ<aj*,@>"))
C.G=new H.aA("call")})();(function staticFields(){$.df=null
$.R=0
$.aN=null
$.eh=null
$.eZ=null
$.eT=null
$.f3=null
$.dA=null
$.dG=null
$.e9=null
$.aG=null
$.bv=null
$.bw=null
$.e2=!1
$.p=C.c
$.B=H.J([],H.dB("q<h>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"il","cB",function(){return H.eY("_$dart_dartClosure")})
t($,"iw","f7",function(){return H.U(H.cY({
toString:function(){return"$receiver$"}}))})
t($,"ix","f8",function(){return H.U(H.cY({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"iy","f9",function(){return H.U(H.cY(null))})
t($,"iz","fa",function(){return H.U(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"iC","fd",function(){return H.U(H.cY(void 0))})
t($,"iD","fe",function(){return H.U(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"iB","fc",function(){return H.U(H.ey(null))})
t($,"iA","fb",function(){return H.U(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"iF","fg",function(){return H.U(H.ey(void 0))})
t($,"iE","ff",function(){return H.U(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"iG","eb",function(){return P.fT()})
t($,"iU","ed",function(){return P.eS(self)})
t($,"iH","ec",function(){return H.eY("_$dart_dartObject")})
t($,"iV","ee",function(){return function DartObject(a){this.o=a}})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,WebGLRenderingContext:J.w,WebGL2RenderingContext:J.w,SQLError:J.w,ArrayBuffer:H.bY,DataView:H.ag,ArrayBufferView:H.ag,Float32Array:H.af,Float64Array:H.af,Int16Array:H.bZ,Int32Array:H.c_,Int8Array:H.c0,Uint16Array:H.c1,Uint32Array:H.c2,Uint8ClampedArray:H.b4,CanvasPixelArray:H.b4,Uint8Array:H.c3,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bB,HTMLAreaElement:W.bC,Blob:W.a6,HTMLCanvasElement:W.a7,CanvasRenderingContext2D:W.ar,CDATASection:W.K,CharacterData:W.K,Comment:W.K,ProcessingInstruction:W.K,Text:W.K,CSSStyleDeclaration:W.aR,MSStyleCSSProperties:W.aR,CSS2Properties:W.aR,DOMException:W.cI,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,EventTarget:W.n,File:W.C,FileList:W.bL,FileReader:W.aV,HTMLFormElement:W.bN,ImageData:W.a9,HTMLImageElement:W.L,HTMLInputElement:W.bP,HTMLAudioElement:W.ae,HTMLMediaElement:W.ae,Document:W.l,DocumentFragment:W.l,HTMLDocument:W.l,ShadowRoot:W.l,XMLDocument:W.l,Attr:W.l,DocumentType:W.l,Node:W.l,ProgressEvent:W.E,ResourceProgressEvent:W.E,HTMLSelectElement:W.c9,HTMLVideoElement:W.be,Window:W.ak,DOMWindow:W.ak,DedicatedWorkerGlobalScope:W.O,ServiceWorkerGlobalScope:W.O,SharedWorkerGlobalScope:W.O,WorkerGlobalScope:W.O,IDBKeyRange:P.b0})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,File:true,FileList:true,FileReader:true,HTMLFormElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLAudioElement:true,HTMLMediaElement:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,HTMLVideoElement:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true})
H.ay.$nativeSuperclassTag="ArrayBufferView"
H.bi.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.af.$nativeSuperclassTag="ArrayBufferView"
H.bk.$nativeSuperclassTag="ArrayBufferView"
H.bl.$nativeSuperclassTag="ArrayBufferView"
H.b3.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=X.i5
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
