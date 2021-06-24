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
a[c]=function(){a[c]=function(){H.i3(b)}
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
if(a[b]!==t)H.i4(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.dY(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={dF:function dF(){},
eL:function(a,b,c){if(a==null)throw H.d(new H.b1(b,c.i("b1<0>")))
return a},
bR:function bR(a){this.a=a},
b1:function b1(a,b){this.a=a
this.$ti=b},
aQ:function aQ(){},
a9:function a9(){},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
aw:function aw(a){this.a=a},
eU:function(a){var t,s=H.eT(a)
if(s!=null)return s
t="minified:"+a
return t},
iP:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.by(a)
if(typeof t!="string")throw H.d(H.dX(a))
return t},
b3:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cL:function(a){return H.fr(a)},
fr:function(a){var t,s,r,q
if(a instanceof P.h)return H.z(H.ak(a),null)
if(J.ai(a)===C.z||u.cr.b(a)){t=C.k(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.z(H.ak(a),null)},
t:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((C.b.B(t,10)|55296)>>>0,t&1023|56320)}throw H.d(P.dI(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fz:function(a){var t=H.ad(a).getFullYear()+0
return t},
fx:function(a){var t=H.ad(a).getMonth()+1
return t},
ft:function(a){var t=H.ad(a).getDate()+0
return t},
fu:function(a){var t=H.ad(a).getHours()+0
return t},
fw:function(a){var t=H.ad(a).getMinutes()+0
return t},
fy:function(a){var t=H.ad(a).getSeconds()+0
return t},
fv:function(a){var t=H.ad(a).getMilliseconds()+0
return t},
Y:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.a1(t,b)
r.b=""
if(c!=null&&c.a!==0)c.A(0,new H.cK(r,s,t))
""+r.a
return J.fa(a,new H.bM(C.E,0,t,s,0))},
fs:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.fq(a,b,c)},
fq:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b!=null)t=b instanceof Array?b:P.dH(b,u.z)
else t=[]
s=t.length
r=a.$R
if(s<r)return H.Y(a,t,c)
q=a.$D
p=q==null
o=!p?q():null
n=J.ai(a)
m=n.$C
if(typeof m=="string")m=n[m]
if(p){if(c!=null&&c.a!==0)return H.Y(a,t,c)
if(s===r)return m.apply(a,t)
return H.Y(a,t,c)}if(o instanceof Array){if(c!=null&&c.a!==0)return H.Y(a,t,c)
if(s>r+o.length)return H.Y(a,t,null)
C.a.a1(t,o.slice(s-r))
return m.apply(a,t)}else{if(s>r)return H.Y(a,t,c)
l=Object.keys(o)
if(c==null)for(p=l.length,k=0;k<l.length;l.length===p||(0,H.aG)(l),++k){j=o[H.G(l[k])]
if(C.m===j)return H.Y(a,t,c)
C.a.l(t,j)}else{for(p=l.length,i=0,k=0;k<l.length;l.length===p||(0,H.aG)(l),++k){h=H.G(l[k])
if(c.aX(h)){++i
C.a.l(t,c.k(0,h))}else{j=o[h]
if(C.m===j)return H.Y(a,t,c)
C.a.l(t,j)}}if(i!==c.a)return H.Y(a,t,c)}return m.apply(a,t)}},
M:function(a){throw H.d(H.dX(a))},
m:function(a,b){if(a==null)J.cu(a)
throw H.d(H.aE(a,b))},
aE:function(a,b){var t,s,r="index"
if(!H.dk(b))return new P.N(!0,b,r,null)
t=H.bp(J.cu(a))
if(!(b<0)){if(typeof t!=="number")return H.M(t)
s=b>=t}else s=!0
if(s)return P.fn(b,a,r,null,t)
return P.dJ(b,r)},
dX:function(a){return new P.N(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.c_()
t=new Error()
t.dartException=a
s=H.i5
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
i5:function(){return J.by(this.dartException)},
am:function(a){throw H.d(a)},
aG:function(a){throw H.d(P.bF(a))},
S:function(a){var t,s,r,q,p,o
a=H.i0(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.C([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cO(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cP:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
en:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dG:function(a,b){var t=b==null,s=t?null:b.method
return new H.bO(a,s,t?null:b.receiver)},
U:function(a){if(a==null)return new H.cJ(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.al(a,a.dartException)
return H.hy(a)},
al:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hy:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.B(s,16)&8191)===10)switch(r){case 438:return H.al(a,H.dG(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.e(t)+" (Error "+r+")"
return H.al(a,new H.b2(q,f))}}if(a instanceof TypeError){p=$.eV()
o=$.eW()
n=$.eX()
m=$.eY()
l=$.f0()
k=$.f1()
j=$.f_()
$.eZ()
i=$.f3()
h=$.f2()
g=p.v(t)
if(g!=null)return H.al(a,H.dG(H.G(t),g))
else{g=o.v(t)
if(g!=null){g.method="call"
return H.al(a,H.dG(H.G(t),g))}else{g=n.v(t)
if(g==null){g=m.v(t)
if(g==null){g=l.v(t)
if(g==null){g=k.v(t)
if(g==null){g=j.v(t)
if(g==null){g=m.v(t)
if(g==null){g=i.v(t)
if(g==null){g=h.v(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.G(t)
return H.al(a,new H.b2(t,g==null?f:g.method))}}}return H.al(a,new H.ca(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b6()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.al(a,new P.N(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b6()
return a},
aj:function(a){var t
if(a==null)return new H.bi(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bi(a)},
hI:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
hQ:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.bp(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.cZ("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hQ)
a.$identity=t
return t},
fj:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.c4().constructor.prototype):Object.create(new H.an(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.O
if(typeof s!=="number")return s.q()
$.O=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.ea(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.ff(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ea(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
ff:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eO,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.fd:H.fc
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
fg:function(a,b,c,d){var t=H.e9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ea:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.fi(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.fg(s,!q,t,b)
if(s===0){q=$.O
if(typeof q!=="number")return q.q()
$.O=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aJ
return new Function(q+(p==null?$.aJ=H.cy("self"):p)+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.O
if(typeof q!=="number")return q.q()
$.O=q+1
n+=q
q="return function("+n+"){return this."
p=$.aJ
return new Function(q+(p==null?$.aJ=H.cy("self"):p)+"."+H.e(t)+"("+n+");}")()},
fh:function(a,b,c,d){var t=H.e9,s=H.fe
switch(b?-1:a){case 0:throw H.d(new H.c1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
fi:function(a,b){var t,s,r,q,p,o,n,m=$.aJ
if(m==null)m=$.aJ=H.cy("self")
t=$.e8
if(t==null)t=$.e8=H.cy("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.fh(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.e(s)+"(this."+t+");"
o=$.O
if(typeof o!=="number")return o.q()
$.O=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.e(s)+"(this."+t+", "+n+");"
o=$.O
if(typeof o!=="number")return o.q()
$.O=o+1
return new Function(p+o+"}")()},
dY:function(a,b,c,d,e,f,g){return H.fj(a,b,c,d,!!e,!!f,g)},
fc:function(a,b){return H.cr(v.typeUniverse,H.ak(a.a),b)},
fd:function(a,b){return H.cr(v.typeUniverse,H.ak(a.c),b)},
e9:function(a){return a.a},
fe:function(a){return a.c},
cy:function(a){var t,s,r,q=new H.an("self","target","receiver","name"),p=J.ee(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.cv("Field name "+a+" not found."))},
eK:function(a){if(a==null)H.hB("boolean expression must not be null")
return a},
hB:function(a){throw H.d(new H.ce(a))},
i3:function(a){throw H.d(new P.bH(a))},
eM:function(a){return v.getIsolateTag(a)},
i4:function(a){return H.am(new H.bR(a))},
iO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hU:function(a){var t,s,r,q,p,o=H.G($.eN.$1(a)),n=$.dt[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dz[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.h6($.eI.$2(a,o))
if(r!=null){n=$.dt[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.dz[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.dB(t)
$.dt[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.dz[o]=t
return t}if(q==="-"){p=H.dB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eR(a,t)
if(q==="*")throw H.d(P.eo(o))
if(v.leafTags[o]===true){p=H.dB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eR(a,t)},
eR:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.e2(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dB:function(a){return J.e2(a,!1,null,!!a.$iD)},
hZ:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dB(t)
else return J.e2(t,c,null,null)},
hM:function(){if(!0===$.e1)return
$.e1=!0
H.hN()},
hN:function(){var t,s,r,q,p,o,n,m
$.dt=Object.create(null)
$.dz=Object.create(null)
H.hL()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eS.$1(p)
if(o!=null){n=H.hZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hL:function(){var t,s,r,q,p,o,n=C.r()
n=H.aD(C.t,H.aD(C.u,H.aD(C.l,H.aD(C.l,H.aD(C.v,H.aD(C.w,H.aD(C.x(C.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.eN=new H.dw(q)
$.eI=new H.dx(p)
$.eS=new H.dy(o)},
aD:function(a,b){return a(b)||b},
i0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aL:function aL(a,b){this.a=a
this.$ti=b},
aK:function aK(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bM:function bM(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b2:function b2(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a){this.a=a},
cJ:function cJ(a){this.a=a},
bi:function bi(a){this.a=a
this.b=null},
a4:function a4(){},
c7:function c7(){},
c4:function c4(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a){this.a=a},
ce:function ce(a){this.a=a},
dc:function dc(){},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a,b){this.a=a
this.b=b
this.c=null},
aX:function aX(a,b){this.a=a
this.$ti=b},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aE(b,a))},
ac:function ac(){},
au:function au(){},
ab:function ab(){},
b_:function b_(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
b0:function b0(){},
bY:function bY(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
fB:function(a,b){var t=b.c
return t==null?b.c=H.dN(a,b.z,!0):t},
ei:function(a,b){var t=b.c
return t==null?b.c=H.bl(a,"aS",[b.z]):t},
ej:function(a){var t=a.y
if(t===6||t===7||t===8)return H.ej(a.z)
return t===11||t===12},
fA:function(a){return a.cy},
du:function(a){return H.dh(v.typeUniverse,a,!1)},
a1:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.ew(a,s,!0)
case 7:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.dN(a,s,!0)
case 8:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.ev(a,s,!0)
case 9:r=b.Q
q=H.bu(a,r,c,a0)
if(q===r)return b
return H.bl(a,b.z,q)
case 10:p=b.z
o=H.a1(a,p,c,a0)
n=b.Q
m=H.bu(a,n,c,a0)
if(o===p&&m===n)return b
return H.dL(a,o,m)
case 11:l=b.z
k=H.a1(a,l,c,a0)
j=b.Q
i=H.hv(a,j,c,a0)
if(k===l&&i===j)return b
return H.eu(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bu(a,h,c,a0)
p=b.z
o=H.a1(a,p,c,a0)
if(g===h&&o===p)return b
return H.dM(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.cw("Attempted to substitute unexpected RTI kind "+d))}},
bu:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a1(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
hw:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a1(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
hv:function(a,b,c,d){var t,s=b.a,r=H.bu(a,s,c,d),q=b.b,p=H.bu(a,q,c,d),o=b.c,n=H.hw(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.cl()
t.a=r
t.b=p
t.c=n
return t},
C:function(a,b){a[v.arrayRti]=b
return a},
hF:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.eO(t)
return a.$S()}return null},
eP:function(a,b){var t
if(H.ej(b))if(a instanceof H.a4){t=H.hF(a)
if(t!=null)return t}return H.ak(a)},
ak:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.dS(a)}if(Array.isArray(a))return H.aB(a)
return H.dS(J.ai(a))},
aB:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
br:function(a){var t=a.$ti
return t!=null?t:H.dS(a)},
dS:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.hh(a,t)},
hh:function(a,b){var t=a instanceof H.a4?a.__proto__.__proto__.constructor:b,s=H.h3(v.typeUniverse,t.name)
b.$ccache=s
return s},
eO:function(a){var t,s,r
H.bp(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.dh(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
hH:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.co(a)
r=H.dh(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.co(r):q},
hg:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bq(r,a,H.hk)
if(!H.T(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bq(r,a,H.hn)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.dk
else if(t===u.cb||t===u.cY)s=H.hj
else if(t===u.u)s=H.hl
else s=t===u.y?H.dT:null
if(s!=null)return H.bq(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hR)){r.r="$i"+q
return H.bq(r,a,H.hm)}}else if(q===7)return H.bq(r,a,H.he)
return H.bq(r,a,H.hc)},
bq:function(a,b,c){a.b=c
return a.b(b)},
hf:function(a){var t,s,r=this
if(!H.T(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.h7
else if(r===u.K)s=H.h5
else s=H.hd
r.a=s
return r.a(a)},
dW:function(a){var t,s=a.y
if(!H.T(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dW(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hc:function(a){var t=this
if(a==null)return H.dW(t)
return H.u(v.typeUniverse,H.eP(a,t),null,t,null)},
he:function(a){if(a==null)return!0
return this.z.b(a)},
hm:function(a){var t,s=this
if(a==null)return H.dW(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.ai(a)[t]},
iN:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ez(a,t)},
hd:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ez(a,t)},
ez:function(a,b){throw H.d(H.fU(H.eq(a,H.eP(a,b),H.z(b,null))))},
eq:function(a,b,c){var t=P.W(a),s=H.z(b==null?H.ak(a):b,null)
return t+": type '"+H.e(s)+"' is not a subtype of type '"+H.e(c)+"'"},
fU:function(a){return new H.bk("TypeError: "+a)},
x:function(a,b){return new H.bk("TypeError: "+H.eq(a,null,b))},
hk:function(a){return a!=null},
h5:function(a){return a},
hn:function(a){return!0},
h7:function(a){return a},
dT:function(a){return!0===a||!1===a},
iA:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.x(a,"bool"))},
h4:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool"))},
iB:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool?"))},
iC:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"double"))},
iE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double"))},
iD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double?"))},
dk:function(a){return typeof a=="number"&&Math.floor(a)===a},
iF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.x(a,"int"))},
bp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int"))},
iG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int?"))},
hj:function(a){return typeof a=="number"},
iH:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"num"))},
iJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num"))},
iI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num?"))},
hl:function(a){return typeof a=="string"},
iK:function(a){if(typeof a=="string")return a
throw H.d(H.x(a,"String"))},
G:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String"))},
h6:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String?"))},
hs:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.q(s,H.z(a[r],b))
return t},
eA:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.C([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.l(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.m(a5,j)
m=C.d.q(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.d.q(" extends ",H.z(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.z(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.d.q(a2,H.z(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.d.q(a2,H.z(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.e6(H.z(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.e(a0)},
z:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.z(a.z,b)
return t}if(m===7){s=a.z
t=H.z(s,b)
r=s.y
return J.e6(r===11||r===12?C.d.q("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.e(H.z(a.z,b))+">"
if(m===9){q=H.hx(a.z)
p=a.Q
return p.length!==0?q+("<"+H.hs(p,b)+">"):q}if(m===11)return H.eA(a,b,null)
if(m===12)return H.eA(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.m(b,o)
return b[o]}return"?"},
hx:function(a){var t,s=H.eT(a)
if(s!=null)return s
t="minified:"+a
return t},
ex:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
h3:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.dh(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bm(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bl(a,b,r)
o[b]=p
return p}else return n},
h1:function(a,b){return H.ey(a.tR,b)},
h0:function(a,b){return H.ey(a.eT,b)},
dh:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.et(H.er(a,null,b,c))
s.set(b,t)
return t},
cr:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.et(H.er(a,b,c,!0))
r.set(c,s)
return s},
h2:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dL(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a0:function(a,b){b.a=H.hf
b.b=H.hg
return b},
bm:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.E(null,null)
t.y=b
t.cy=c
s=H.a0(a,t)
a.eC.set(c,s)
return s},
ew:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fZ(a,b,s,c)
a.eC.set(s,t)
return t},
fZ:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.T(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.E(null,null)
r.y=6
r.z=b
r.cy=c
return H.a0(a,r)},
dN:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fY(a,b,s,c)
a.eC.set(s,t)
return t},
fY:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.T(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.dA(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.dA(r.z))return r
else return H.fB(a,b)}}q=new H.E(null,null)
q.y=7
q.z=b
q.cy=c
return H.a0(a,q)},
ev:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fW(a,b,s,c)
a.eC.set(s,t)
return t},
fW:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.T(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bl(a,"aS",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.E(null,null)
r.y=8
r.z=b
r.cy=c
return H.a0(a,r)},
h_:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.E(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a0(a,t)
a.eC.set(r,s)
return s},
cq:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fV:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bl:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.cq(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.E(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a0(a,s)
a.eC.set(q,r)
return r},
dL:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.cq(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.E(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a0(a,p)
a.eC.set(r,o)
return o},
eu:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cq(n)
if(k>0){t=m>0?",":""
s=H.cq(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fV(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.E(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a0(a,p)
a.eC.set(r,s)
return s},
dM:function(a,b,c,d){var t,s=b.cy+("<"+H.cq(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.fX(a,b,c,s,d)
a.eC.set(s,t)
return t},
fX:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a1(a,b,s,0)
n=H.bu(a,c,s,0)
return H.dM(a,o,n,c!==n)}}m=new H.E(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a0(a,m)},
er:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
et:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fO(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.es(a,s,h,g,!1)
else if(r===46)s=H.es(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a_(a.u,a.e,g.pop()))
break
case 94:g.push(H.h_(a.u,g.pop()))
break
case 35:g.push(H.bm(a.u,5,"#"))
break
case 64:g.push(H.bm(a.u,2,"@"))
break
case 126:g.push(H.bm(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dK(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bl(q,o,p))
else{n=H.a_(q,a.e,o)
switch(n.y){case 11:g.push(H.dM(q,n,p,a.n))
break
default:g.push(H.dL(q,n,p))
break}}break
case 38:H.fP(a,g)
break
case 42:m=a.u
g.push(H.ew(m,H.a_(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dN(m,H.a_(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.ev(m,H.a_(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.cl()
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
H.dK(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.eu(q,H.a_(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dK(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.fR(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a_(a.u,a.e,i)},
fO:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
es:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.ex(t,p.z)[q]
if(o==null)H.am('No "'+q+'" in "'+H.fA(p)+'"')
d.push(H.cr(t,p,o))}else d.push(q)
return n},
fP:function(a,b){var t=b.pop()
if(0===t){b.push(H.bm(a.u,1,"0&"))
return}if(1===t){b.push(H.bm(a.u,4,"1&"))
return}throw H.d(P.cw("Unexpected extended operation "+H.e(t)))},
a_:function(a,b,c){if(typeof c=="string")return H.bl(a,c,a.sEA)
else if(typeof c=="number")return H.fQ(a,b,c)
else return c},
dK:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a_(a,b,c[t])},
fR:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a_(a,b,c[t])},
fQ:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.cw("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.cw("Bad index "+c+" for "+b.h(0)))},
u:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.T(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.T(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.u(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.u(a,b.z,c,d,e)
if(q===6){t=d.z
return H.u(a,b,c,t,e)}if(s===8){if(!H.u(a,b.z,c,d,e))return!1
return H.u(a,H.ei(a,b),c,d,e)}if(s===7){t=H.u(a,b.z,c,d,e)
return t}if(q===8){if(H.u(a,b,c,d.z,e))return!0
return H.u(a,b,c,H.ei(a,d),e)}if(q===7){t=H.u(a,b,c,d.z,e)
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
if(!H.u(a,l,c,k,e)||!H.u(a,k,e,l,c))return!1}return H.eD(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.eD(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.hi(a,b,c,d,e)}return!1},
eD:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.u(a1,a2.z,a3,a4.z,a5))return!1
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
if(!H.u(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.u(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.u(a1,l[i],a5,h,a3))return!1}g=t.c
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
if(!H.u(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
hi:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.u(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.ex(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.u(a,H.cr(a,b,m[q]),c,s[q],e))return!1
return!0},
dA:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.T(a))if(s!==7)if(!(s===6&&H.dA(a.z)))t=s===8&&H.dA(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hR:function(a){var t
if(!H.T(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
T:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
ey:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
cl:function cl(){this.c=this.b=this.a=null},
co:function co(a){this.a=a},
ci:function ci(){},
bk:function bk(a){this.a=a},
eQ:function(a){return u.x.b(a)||u.A.b(a)||u.w.b(a)||u.I.b(a)||u.r.b(a)||u.cg.b(a)||u.bj.b(a)},
eT:function(a){return v.mangledGlobalNames[a]},
i_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
e2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cs:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.e1==null){H.hM()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.eo("Return interceptor for "+H.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.d8
if(p==null)p=$.d8=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.hU(a)
if(q!=null)return q
if(typeof a=="function")return C.B
t=Object.getPrototypeOf(a)
if(t==null)return C.q
if(t===Object.prototype)return C.q
if(typeof r=="function"){p=$.d8
if(p==null)p=$.d8=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
ee:function(a,b){a.fixed$length=Array
return a},
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aT.prototype
return J.bN.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.bL.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
hJ:function(a){if(typeof a=="number")return J.aq.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
e_:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
e0:function(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
hK:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.ax.prototype
return a},
dv:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.h)return a
return J.cs(a)},
e6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hJ(a).q(a,b)},
f4:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).w(a,b)},
f5:function(a,b,c,d){return J.dv(a).aM(a,b,c,d)},
f6:function(a,b){return J.e0(a).L(a,b)},
V:function(a){return J.dv(a).gam(a)},
bx:function(a){return J.ai(a).gm(a)},
f7:function(a){return J.dv(a).gM(a)},
dD:function(a){return J.e0(a).gC(a)},
cu:function(a){return J.e_(a).gj(a)},
f8:function(a){return J.dv(a).gP(a)},
f9:function(a,b,c){return J.e0(a).ao(a,b,c)},
fa:function(a,b){return J.ai(a).O(a,b)},
by:function(a){return J.ai(a).h(a)},
w:function w(){},
bL:function bL(){},
ap:function ap(){},
a6:function a6(){},
c0:function c0(){},
ax:function ax(){},
J:function J(){},
o:function o(a){this.$ti=a},
cD:function cD(a){this.$ti=a},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
aT:function aT(){},
bN:function bN(){},
X:function X(){}},P={
fH:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.hC()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bv(new P.cV(r),1)).observe(t,{childList:true})
return new P.cU(r,t,s)}else if(self.setImmediate!=null)return P.hD()
return P.hE()},
fI:function(a){self.scheduleImmediate(H.bv(new P.cW(u.M.a(a)),0))},
fJ:function(a){self.setImmediate(H.bv(new P.cX(u.M.a(a)),0))},
fK:function(a){u.M.a(a)
P.fS(0,a)},
em:function(a,b){var t=C.b.E(a.a,1000)
return P.fT(t<0?0:t,b)},
fS:function(a,b){var t=new P.bj(!0)
t.aJ(a,b)
return t},
fT:function(a,b){var t=new P.bj(!1)
t.aK(a,b)
return t},
cx:function(a,b){var t=H.eL(a,"error",u.K)
return new P.aI(t,b==null?P.fb(a):b)},
fb:function(a){var t
if(u.C.b(a)){t=a.gT()
if(t!=null)return t}return C.y},
fL:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.I()
b.a=a.a
b.c=a.c
P.ay(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.ag(r)}},
ay:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.dl(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.ay(c.a,b)
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
P.dl(d,d,l.b,k.a,k.b)
return}g=$.n
if(g!==h)$.n=h
else g=d
b=b.c
if((b&15)===8)new P.d6(q,c,p).$0()
else if(j){if((b&1)!==0)new P.d5(q,k).$0()}else if((b&2)!==0)new P.d4(c,q).$0()
if(g!=null)$.n=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.i("aS<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b instanceof P.B)if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.J(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.fL(b,f)
else f.aN(b)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.J(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
hq:function(a,b){var t=u.R
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.e7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
hp:function(){var t,s
for(t=$.aC;t!=null;t=$.aC){$.bt=null
s=t.b
$.aC=s
if(s==null)$.bs=null
t.a.$0()}},
hu:function(){$.dU=!0
try{P.hp()}finally{$.bt=null
$.dU=!1
if($.aC!=null)$.e3().$1(P.eJ())}},
eG:function(a){var t=new P.cf(a),s=$.bs
if(s==null){$.aC=$.bs=t
if(!$.dU)$.e3().$1(P.eJ())}else $.bs=s.b=t},
ht:function(a){var t,s,r,q=$.aC
if(q==null){P.eG(a)
$.bt=$.bs
return}t=new P.cf(a)
s=$.bt
if(s==null){t.b=q
$.aC=$.bt=t}else{r=s.b
t.b=r
$.bt=s.b=t
if(r==null)$.bs=t}},
i2:function(a){var t=null,s=$.n
if(C.c===s){P.dn(t,t,C.c,a)
return}P.dn(t,t,s,u.M.a(s.ai(a)))},
el:function(a,b){var t=$.n
if(t===C.c)return P.em(a,u.e.a(b))
return P.em(a,u.e.a(t.aj(b,u.ae)))},
dl:function(a,b,c,d,e){P.ht(new P.dm(d,e))},
eE:function(a,b,c,d,e){var t,s=$.n
if(s===c)return d.$0()
$.n=c
t=s
try{s=d.$0()
return s}finally{$.n=t}},
eF:function(a,b,c,d,e,f,g){var t,s=$.n
if(s===c)return d.$1(e)
$.n=c
t=s
try{s=d.$1(e)
return s}finally{$.n=t}},
hr:function(a,b,c,d,e,f,g,h,i){var t,s=$.n
if(s===c)return d.$2(e,f)
$.n=c
t=s
try{s=d.$2(e,f)
return s}finally{$.n=t}},
dn:function(a,b,c,d){u.M.a(d)
if(C.c!==c)d=c.ai(d)
P.eG(d)},
cV:function cV(a){this.a=a},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
bj:function bj(a){this.a=a
this.b=null
this.c=0},
dg:function dg(a,b){this.a=a
this.b=b},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d_:function d_(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
cf:function cf(a){this.a=a
this.b=null},
b7:function b7(){},
cM:function cM(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
c5:function c5(){},
c6:function c6(){},
bo:function bo(){},
dm:function dm(a,b){this.a=a
this.b=b},
cm:function cm(){},
dd:function dd(a,b){this.a=a
this.b=b},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function(a,b,c){return b.i("@<0>").t(c).i("eg<1,2>").a(H.hI(a,new H.a8(b.i("@<0>").t(c).i("a8<1,2>"))))},
fo:function(a,b,c){var t,s
if(P.dV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.C([],u.s)
C.a.l($.A,a)
try{P.ho(a,t)}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}s=P.ek(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
ed:function(a,b,c){var t,s
if(P.dV(a))return b+"..."+c
t=new P.ae(b)
C.a.l($.A,a)
try{s=t
s.a=P.ek(s.a,a,", ")}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dV:function(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
ho:function(a,b){var t,s,r,q,p,o,n,m=a.gC(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.p())return
t=H.e(m.gu())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.p()){if(k<=5)return
if(0>=b.length)return H.m(b,-1)
s=b.pop()
if(0>=b.length)return H.m(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.p()){if(k<=4){C.a.l(b,H.e(q))
return}s=H.e(q)
if(0>=b.length)return H.m(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.p();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.e(q)
s=H.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
cG:function(a){var t,s={}
if(P.dV(a))return"{...}"
t=new P.ae("")
try{C.a.l($.A,a)
t.a+="{"
s.a=!0
a.A(0,new P.cH(s,t))
t.a+="}"}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
j:function j(){},
aZ:function aZ(){},
cH:function cH(a,b){this.a=a
this.b=b},
as:function as(){},
bn:function bn(){},
at:function at(){},
ba:function ba(){},
aA:function aA(){},
ef:function(a,b,c){return new P.aV(a,b)},
hb:function(a){return a.bf()},
fM:function(a,b){return new P.d9(a,[],P.hG())},
fN:function(a,b,c){var t,s=new P.ae(""),r=P.fM(s,b)
r.R(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
bD:function bD(){},
bG:function bG(){},
aV:function aV(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
cE:function cE(){},
bQ:function bQ(a){this.b=a},
da:function da(){},
db:function db(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.c=a
this.a=b
this.b=c},
eb:function(a,b){return H.fs(a,b,null)},
fm:function(a){if(a instanceof H.a4)return a.h(0)
return"Instance of '"+H.e(H.cL(a))+"'"},
fp:function(a,b,c){var t,s,r
if(a>4294967295)H.am(P.dI(a,0,4294967295,"length",null))
t=J.ee(H.C(new Array(a),c.i("o<0>")),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dH:function(a,b){var t,s=H.C([],b.i("o<0>"))
for(t=J.dD(a);t.p();)C.a.l(s,b.a(t.gu()))
return s},
ek:function(a,b,c){var t=J.dD(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gu())
while(t.p())}else{a+=H.e(t.gu())
for(;t.p();)a=a+c+H.e(t.gu())}return a},
eh:function(a,b,c,d){return new P.bZ(a,b,c,d)},
fk:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
fl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bI:function(a){if(a>=10)return""+a
return"0"+a},
W:function(a){if(typeof a=="number"||H.dT(a)||null==a)return J.by(a)
if(typeof a=="string")return JSON.stringify(a)
return P.fm(a)},
cw:function(a){return new P.aH(a)},
cv:function(a){return new P.N(!1,null,null,a)},
e7:function(a,b,c){return new P.N(!0,a,b,c)},
dJ:function(a,b){return new P.b4(null,null,!0,a,b,"Value not in range")},
dI:function(a,b,c,d,e){return new P.b4(b,c,!0,a,d,"Invalid value")},
fn:function(a,b,c,d,e){var t=H.bp(e==null?J.cu(b):e)
return new P.bK(t,!0,a,c,"Index out of range")},
Z:function(a){return new P.cb(a)},
eo:function(a){return new P.c9(a)},
fC:function(a){return new P.c3(a)},
bF:function(a){return new P.bE(a)},
bw:function(a){H.i_(a)},
cI:function cI(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
aP:function aP(a){this.a=a},
cB:function cB(){},
cC:function cC(){},
i:function i(){},
aH:function aH(a){this.a=a},
c8:function c8(){},
c_:function c_(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bK:function bK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a){this.a=a},
c9:function c9(a){this.a=a},
c3:function c3(a){this.a=a},
bE:function bE(a){this.a=a},
b6:function b6(){},
bH:function bH(a){this.a=a},
cZ:function cZ(a){this.a=a},
l:function l(){},
v:function v(){},
h:function h(){},
cn:function cn(){},
ae:function ae(a){this.a=a},
dZ:function(a){var t
if(u.I.b(a)){t=J.V(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.cp(a.data,a.height,a.width)},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(){},
h8:function(a,b,c,d){var t,s,r
H.h4(b)
u.j.a(d)
if(H.eK(b)){t=[c]
C.a.a1(t,d)
d=t}s=u.z
r=P.dH(J.f9(d,P.hS(),s),s)
return P.dP(P.eb(u.Z.a(a),r))},
dQ:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.U(t)}return!1},
eC:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
dP:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.dT(a))return a
if(a instanceof P.Q)return a.a
if(H.eQ(a))return a
if(u.Q.b(a))return a
if(a instanceof P.aO)return H.ad(a)
if(u.Z.b(a))return P.eB(a,"$dart_jsFunction",new P.di())
return P.eB(a,"_$dart_jsObject",new P.dj($.e5()))},
eB:function(a,b,c){var t=P.eC(a,b)
if(t==null){t=c.$1(a)
P.dQ(a,b,t)}return t},
dO:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.eQ(a))return a
else if(a instanceof Object&&u.Q.b(a))return a
else if(a instanceof Date){t=H.bp(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.am(P.cv("DateTime is outside valid range: "+t))
H.eL(!1,"isUtc",u.y)
return new P.aO(t,!1)}else if(a.constructor===$.e5())return a.o
else return P.eH(a)},
eH:function(a){if(typeof a=="function")return P.dR(a,$.ct(),new P.dp())
if(a instanceof Array)return P.dR(a,$.e4(),new P.dq())
return P.dR(a,$.e4(),new P.dr())},
dR:function(a,b,c){var t=P.eC(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.dQ(a,b,t)}return t},
ha:function(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.h9,a)
t[$.ct()]=a
a.$dart_jsFunction=t
return t},
h9:function(a,b){u.j.a(b)
return P.eb(u.Z.a(a),b)},
hA:function(a,b){if(typeof a=="function")return a
else return b.a(P.ha(a))},
di:function di(){},
dj:function dj(a){this.a=a},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
Q:function Q(a){this.a=a},
aU:function aU(a){this.a=a},
a7:function a7(a,b){this.a=a
this.$ti=b},
az:function az(){}},W={
ck:function(a,b,c,d,e){var t=W.hz(new W.cY(c),u.A),s=t!=null
if(s&&!0){u.D.a(t)
if(s)J.f5(a,b,t,!1)}return new W.cj(a,b,t,!1,e.i("cj<0>"))},
hz:function(a,b){var t=$.n
if(t===C.c)return a
return t.aj(a,b)},
c:function c(){},
bz:function bz(){},
bA:function bA(){},
a2:function a2(){},
a3:function a3(){},
ao:function ao(){},
I:function I(){},
aN:function aN(){},
cz:function cz(){},
cA:function cA(){},
b:function b(){},
a:function a(){},
p:function p(){},
bJ:function bJ(){},
a5:function a5(){},
P:function P(){},
aa:function aa(){},
k:function k(){},
c2:function c2(){},
bb:function bb(){},
ag:function ag(){},
L:function L(){},
dE:function dE(a,b){this.a=a
this.$ti=b},
bc:function bc(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cj:function cj(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cY:function cY(a){this.a=a},
cg:function cg(){}},X={
i1:function(a){var t,s,r,q,p,o,n,m
u.bL.a(a)
t=u.B.a(document.getElementById("image-canvas"));(t&&C.f).sM(t,a.height)
C.f.sP(t,a.width)
s=t.getContext("2d")
s.drawImage(a,0,0)
s.save()
s.translate(a.width,0)
s.scale(-1,1)
s.drawImage(a,0,0)
s.restore()
r=new X.b5().S(P.dZ(s.getImageData(0,0,a.width,a.height)),s)
q=[]
for(p=r.length,o=u.z,n=0;n<r.length;r.length===p||(0,H.aG)(r),++n){m=r[n]
m.a2(s)
q.push(P.aY(["code",m.a,"x",m.d,"y",m.e,"radius",m.b*8/2,"angle",m.c],o,o))}return C.h.a3(P.aY(["topcodes",q],u.O,u.bl),null)},
hO:function(a){X.fF(H.G(a))},
hP:function(a){X.fG(H.G(a))},
hV:function(){var t=$.dC()
t.n(0,"topcodes_initVideoScanner",X.hW())
t.n(0,"topcodes_initVideoScannerM",X.hX())
self.scanCanvas=P.hA(X.hY(),u.bQ)},
fF:function(a){var t=new X.cc(a)
t.aH(a)
return t},
fG:function(a){var t=new X.cd(a)
t.aI(a)
return t},
b5:function b5(){this.c=this.b=this.a=null},
bC:function bC(a,b){this.a=a
this.b=b},
b9:function b9(a){var _=this
_.a=-1
_.b=9
_.e=_.d=_.c=0
_.f=a},
cc:function cc(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cd:function cd(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a}}
var w=[C,H,J,P,W,X]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dF.prototype={}
J.w.prototype={
w:function(a,b){return a===b},
gm:function(a){return H.b3(a)},
h:function(a){return"Instance of '"+H.e(H.cL(a))+"'"},
O:function(a,b){u.o.a(b)
throw H.d(P.eh(a,b.gap(),b.gar(),b.gaq()))}}
J.bL.prototype={
h:function(a){return String(a)},
gm:function(a){return a?519018:218159},
$ids:1}
J.ap.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gm:function(a){return 0},
O:function(a,b){return this.az(a,u.o.a(b))},
$iv:1}
J.a6.prototype={
gm:function(a){return 0},
h:function(a){return String(a)}}
J.c0.prototype={}
J.ax.prototype={}
J.J.prototype={
h:function(a){var t=a[$.ct()]
if(t==null)return this.aB(a)
return"JavaScript function for "+H.e(J.by(t))},
$iaR:1}
J.o.prototype={
l:function(a,b){H.aB(a).c.a(b)
if(!!a.fixed$length)H.am(P.Z("add"))
a.push(b)},
a1:function(a,b){var t
H.aB(a).i("l<1>").a(b)
if(!!a.fixed$length)H.am(P.Z("addAll"))
if(Array.isArray(b)){this.aL(a,b)
return}for(t=J.dD(b);t.p();)a.push(t.gu())},
aL:function(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.d(P.bF(a))
for(s=0;s<t;++s)a.push(b[s])},
ao:function(a,b,c){var t=H.aB(a)
return new H.R(a,t.t(c).i("1(2)").a(b),t.i("@<1>").t(c).i("R<1,2>"))},
L:function(a,b){if(b>=a.length)return H.m(a,b)
return a[b]},
gan:function(a){return a.length!==0},
h:function(a){return P.ed(a,"[","]")},
gC:function(a){return new J.bB(a,a.length,H.aB(a).i("bB<1>"))},
gm:function(a){return H.b3(a)},
gj:function(a){return a.length},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.aE(a,b))
return a[b]},
n:function(a,b,c){H.aB(a).c.a(c)
if(!!a.immutable$list)H.am(P.Z("indexed set"))
if(b>=a.length||!1)throw H.d(H.aE(a,b))
a[b]=c},
$il:1,
$iq:1}
J.cD.prototype={}
J.bB.prototype={
gu:function(){return this.d},
p:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.aG(r))
t=s.c
if(t>=q){s.sae(null)
return!1}s.sae(r[t]);++s.c
return!0},
sae:function(a){this.d=this.$ti.i("1?").a(a)}}
J.aq.prototype={
av:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.Z(""+a+".toInt()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.Z(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
a7:function(a,b){var t
if(typeof b!="number")throw H.d(H.dX(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ah(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.ah(a,b)},
ah:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.Z("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
B:function(a,b){var t
if(a>0)t=this.aV(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aV:function(a,b){return b>31?0:a>>>b},
$iH:1,
$iaF:1}
J.aT.prototype={$if:1}
J.bN.prototype={}
J.X.prototype={
aW:function(a,b){if(b<0)throw H.d(H.aE(a,b))
if(b>=a.length)H.am(H.aE(a,b))
return a.charCodeAt(b)},
ad:function(a,b){if(b>=a.length)throw H.d(H.aE(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!="string")throw H.d(P.e7(b,null,null))
return a+b},
G:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.d(P.dJ(b,null))
if(c>a.length)throw H.d(P.dJ(c,null))
return a.substring(b,c)},
h:function(a){return a},
gm:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gj:function(a){return a.length},
$ir:1}
H.bR.prototype={
h:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.b1.prototype={
h:function(a){return"Null is not a valid value for the parameter '"+this.a+"' of type '"+H.hH(this.$ti.c).h(0)+"'"}}
H.aQ.prototype={}
H.a9.prototype={
gC:function(a){var t=this
return new H.ar(t,t.gj(t),t.$ti.i("ar<a9.E>"))}}
H.ar.prototype={
gu:function(){return this.d},
p:function(){var t,s=this,r=s.a,q=J.e_(r),p=q.gj(r)
if(s.b!==p)throw H.d(P.bF(r))
t=s.c
if(t>=p){s.sa8(null)
return!1}s.sa8(q.L(r,t));++s.c
return!0},
sa8:function(a){this.d=this.$ti.i("1?").a(a)}}
H.R.prototype={
gj:function(a){return J.cu(this.a)},
L:function(a,b){return this.b.$1(J.f6(this.a,b))}}
H.y.prototype={}
H.aw.prototype={
gm:function(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bx(this.a)&536870911
this._hashCode=t
return t},
h:function(a){return'Symbol("'+H.e(this.a)+'")'},
w:function(a,b){if(b==null)return!1
return b instanceof H.aw&&this.a==b.a},
$iaf:1}
H.aL.prototype={}
H.aK.prototype={
gN:function(a){return this.gj(this)===0},
h:function(a){return P.cG(this)},
$iK:1}
H.aM.prototype={
gj:function(a){return this.a},
aQ:function(a){return this.b[H.G(a)]},
A:function(a,b){var t,s,r,q,p=H.br(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.aQ(q)))}}}
H.bM.prototype={
gap:function(){var t=this.a
return t},
gar:function(){var t,s,r,q,p=this
if(p.c===1)return C.o
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.o
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.m(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gaq:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.p
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.p
p=new H.a8(u.W)
for(o=0;o<s;++o){if(o>=t.length)return H.m(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.m(r,m)
p.n(0,new H.aw(n),r[m])}return new H.aL(p,u.h)},
$iec:1}
H.cK.prototype={
$2:function(a,b){var t
H.G(a)
t=this.a
t.b=t.b+"$"+H.e(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:10}
H.cO.prototype={
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
H.b2.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bO.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.e(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.e(s.a)+")"
return r+q+"' on '"+t+"' ("+H.e(s.a)+")"}}
H.ca.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cJ.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bi.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iav:1}
H.a4.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.eU(s==null?"unknown":s)+"'"},
$iaR:1,
gbd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.c7.prototype={}
H.c4.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.eU(t)+"'"}}
H.an.prototype={
w:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.an))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gm:function(a){var t,s=this.c
if(s==null)t=H.b3(this.a)
else t=typeof s!=="object"?J.bx(s):H.b3(s)
return(t^H.b3(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cL(t))+"'")}}
H.c1.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ce.prototype={
h:function(a){return"Assertion failed: "+P.W(this.a)}}
H.dc.prototype={}
H.a8.prototype={
gj:function(a){return this.a},
gN:function(a){return this.a===0},
aX:function(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return this.aO(t,a)}else{s=this.b0(a)
return s}},
b0:function(a){var t=this.d
if(t==null)return!1
return this.a4(this.Y(t,J.bx(a)&0x3ffffff),a)>=0},
k:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.H(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.H(q,b)
r=s==null?o:s.b
return r}else return p.b1(b)},
b1:function(a){var t,s,r=this.d
if(r==null)return null
t=this.Y(r,J.bx(a)&0x3ffffff)
s=this.a4(t,a)
if(s<0)return null
return t[s].b},
n:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.br(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.aa(t==null?n.b=n.Z():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.aa(s==null?n.c=n.Z():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.Z()
q=J.bx(b)&0x3ffffff
p=n.Y(r,q)
if(p==null)n.a0(r,q,[n.a_(b,c)])
else{o=n.a4(p,b)
if(o>=0)p[o].b=c
else p.push(n.a_(b,c))}}},
A:function(a,b){var t,s,r=this
H.br(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.bF(r))
t=t.c}},
aa:function(a,b,c){var t,s=this,r=H.br(s)
r.c.a(b)
r.Q[1].a(c)
t=s.H(a,b)
if(t==null)s.a0(a,b,s.a_(b,c))
else t.b=c},
a_:function(a,b){var t=this,s=H.br(t),r=new H.cF(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
a4:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.f4(a[s].a,b))return s
return-1},
h:function(a){return P.cG(this)},
H:function(a,b){return a[b]},
Y:function(a,b){return a[b]},
a0:function(a,b,c){a[b]=c},
aP:function(a,b){delete a[b]},
aO:function(a,b){return this.H(a,b)!=null},
Z:function(){var t="<non-identifier-key>",s=Object.create(null)
this.a0(s,t,s)
this.aP(s,t)
return s},
$ieg:1}
H.cF.prototype={}
H.aX.prototype={
gj:function(a){return this.a.a},
gC:function(a){var t=this.a,s=new H.bS(t,t.r,this.$ti.i("bS<1>"))
s.c=t.e
return s}}
H.bS.prototype={
gu:function(){return this.d},
p:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.bF(r))
t=s.c
if(t==null){s.sa9(null)
return!1}else{s.sa9(t.a)
s.c=t.c
return!0}},
sa9:function(a){this.d=this.$ti.i("1?").a(a)}}
H.dw.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.dx.prototype={
$2:function(a,b){return this.a(a,b)},
$S:11}
H.dy.prototype={
$1:function(a){return this.a(H.G(a))},
$S:12}
H.ac.prototype={$iF:1}
H.au.prototype={
gj:function(a){return a.length},
$iD:1}
H.ab.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]},
$il:1,
$iq:1}
H.b_.prototype={$il:1,$iq:1}
H.bT.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bU.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bV.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bW.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bX.prototype={
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.b0.prototype={
gj:function(a){return a.length},
k:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ifE:1}
H.bY.prototype={
gj:function(a){return a.length},
k:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.be.prototype={}
H.bf.prototype={}
H.bg.prototype={}
H.bh.prototype={}
H.E.prototype={
i:function(a){return H.cr(v.typeUniverse,this,a)},
t:function(a){return H.h2(v.typeUniverse,this,a)}}
H.cl.prototype={}
H.co.prototype={
h:function(a){return H.z(this.a,null)}}
H.ci.prototype={
h:function(a){return this.a}}
H.bk.prototype={}
P.cV.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:5}
P.cU.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:13}
P.cW.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:3}
P.cX.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:3}
P.bj.prototype={
aJ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.dg(this,b),0),a)
else throw H.d(P.Z("`setTimeout()` not found."))},
aK:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.df(this,a,Date.now(),b),0),a)
else throw H.d(P.Z("Periodic timer."))},
al:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw H.d(P.Z("Canceling a timer."))},
$ib8:1}
P.dg.prototype={
$0:function(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.df.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.b.aG(t,p)}r.c=q
s.d.$1(r)},
$C:"$0",
$R:0,
$S:3}
P.aI.prototype={
h:function(a){return H.e(this.a)},
$ii:1,
gT:function(){return this.b}}
P.bd.prototype={
b2:function(a){if((this.c&15)!==6)return!0
return this.b.b.a5(u.m.a(this.d),a.a,u.y,u.K)},
b_:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.R.b(t))return q.a(p.b6(t,a.a,a.b,s,r,u.l))
else return q.a(p.a5(u.v.a(t),a.a,s,r))}}
P.B.prototype={
au:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).i("1/(2)").a(a)
t=$.n
if(t!==C.c){c.i("@<0/>").t(q.c).i("1(2)").a(a)
if(b!=null)b=P.hq(b,t)}s=new P.B(t,c.i("B<0>"))
r=b==null?1:3
this.ab(new P.bd(s,r,a,b,q.i("@<1>").t(c).i("bd<1,2>")))
return s},
b9:function(a,b){return this.au(a,null,b)},
ab:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.ab(a)
return}s.a=r
s.c=t.c}P.dn(null,null,s.b,u.M.a(new P.d_(s,a)))}},
ag:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.ag(a)
return}n.a=t
n.c=o.c}m.a=n.J(a)
P.dn(null,null,n.b,u.M.a(new P.d3(m,n)))}},
I:function(){var t=u.F.a(this.c)
this.c=null
return this.J(t)},
J:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aN:function(a){var t,s,r,q=this
q.a=1
try{a.au(new P.d0(q),new P.d1(q),u.P)}catch(r){t=H.U(r)
s=H.aj(r)
P.i2(new P.d2(q,t,s))}},
V:function(a,b){var t,s,r=this
u.l.a(b)
t=r.I()
s=P.cx(a,b)
r.a=8
r.c=s
P.ay(r,t)},
$iaS:1}
P.d_.prototype={
$0:function(){P.ay(this.a,this.b)},
$S:0}
P.d3.prototype={
$0:function(){P.ay(this.b,this.a.a)},
$S:0}
P.d0.prototype={
$1:function(a){var t,s,r,q,p,o=this.a
o.a=0
try{r=o.$ti.c
a=r.a(r.a(a))
q=o.I()
o.a=4
o.c=a
P.ay(o,q)}catch(p){t=H.U(p)
s=H.aj(p)
o.V(t,s)}},
$S:5}
P.d1.prototype={
$2:function(a,b){this.a.V(a,u.l.a(b))},
$C:"$2",
$R:2,
$S:14}
P.d2.prototype={
$0:function(){this.a.V(this.b,this.c)},
$S:0}
P.d6.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.b5(u.bd.a(r.d),u.z)}catch(q){t=H.U(q)
s=H.aj(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.cx(t,s)
p.b=!0
return}if(m instanceof P.B&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.b9(new P.d7(o),u.z)
r.b=!1}},
$S:0}
P.d7.prototype={
$1:function(a){return this.a},
$S:15}
P.d5.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.a5(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.U(m)
s=H.aj(m)
r=this.a
r.c=P.cx(t,s)
r.b=!0}},
$S:0}
P.d4.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eK(q.a.b2(t))&&q.a.e!=null){q.c=q.a.b_(t)
q.b=!1}}catch(p){s=H.U(p)
r=H.aj(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.cx(s,r)
m.b=!0}},
$S:0}
P.cf.prototype={}
P.b7.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.B($.n,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.cM(q,r))
u.Y.a(new P.cN(q,p))
W.ck(r.a,r.b,s,!1,t.c)
return p}}
P.cM.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("~(1)")}}
P.cN.prototype={
$0:function(){var t=this.b,s=t.$ti,r=s.i("1/").a(this.a.a),q=t.I()
s.c.a(r)
t.a=4
t.c=r
P.ay(t,q)},
$S:0}
P.c5.prototype={}
P.c6.prototype={}
P.bo.prototype={$iep:1}
P.dm.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.by(this.b)
throw t},
$S:0}
P.cm.prototype={
b7:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.c===$.n){a.$0()
return}P.eE(q,q,this,a,u.H)}catch(r){t=H.U(r)
s=H.aj(r)
P.dl(q,q,this,t,u.l.a(s))}},
b8:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.c===$.n){a.$1(b)
return}P.eF(q,q,this,a,b,u.H,c)}catch(r){t=H.U(r)
s=H.aj(r)
P.dl(q,q,this,t,u.l.a(s))}},
ai:function(a){return new P.dd(this,u.M.a(a))},
aj:function(a,b){return new P.de(this,b.i("~(0)").a(a),b)},
b5:function(a,b){b.i("0()").a(a)
if($.n===C.c)return a.$0()
return P.eE(null,null,this,a,b)},
a5:function(a,b,c,d){c.i("@<0>").t(d).i("1(2)").a(a)
d.a(b)
if($.n===C.c)return a.$1(b)
return P.eF(null,null,this,a,b,c,d)},
b6:function(a,b,c,d,e,f){d.i("@<0>").t(e).t(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.n===C.c)return a.$2(b,c)
return P.hr(null,null,this,a,b,c,d,e,f)}}
P.dd.prototype={
$0:function(){return this.a.b7(this.b)},
$S:0}
P.de.prototype={
$1:function(a){var t=this.c
return this.a.b8(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.j.prototype={
gC:function(a){return new H.ar(a,this.gj(a),H.ak(a).i("ar<j.E>"))},
L:function(a,b){return this.k(a,b)},
gan:function(a){return this.gj(a)!==0},
ao:function(a,b,c){var t=H.ak(a)
return new H.R(a,t.t(c).i("1(j.E)").a(b),t.i("@<j.E>").t(c).i("R<1,2>"))},
h:function(a){return P.ed(a,"[","]")}}
P.aZ.prototype={}
P.cH.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.e(a)
s.a=t+": "
s.a+=H.e(b)},
$S:6}
P.as.prototype={
A:function(a,b){var t,s=H.br(this)
s.i("~(1,2)").a(b)
for(s=new H.aX(this,s.i("aX<1>")),s=s.gC(s);s.p();){t=s.d
b.$2(t,this.k(0,t))}},
gj:function(a){return this.a},
gN:function(a){return this.a===0},
h:function(a){return P.cG(this)},
$iK:1}
P.bn.prototype={}
P.at.prototype={
A:function(a,b){this.a.A(0,this.$ti.i("~(1,2)").a(b))},
gN:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
h:function(a){return P.cG(this.a)},
$iK:1}
P.ba.prototype={}
P.aA.prototype={}
P.bD.prototype={}
P.bG.prototype={}
P.aV.prototype={
h:function(a){var t=P.W(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.bP.prototype={
h:function(a){return"Cyclic error in JSON stringify"}}
P.cE.prototype={
a3:function(a,b){var t
u.cZ.a(b)
t=P.fN(a,this.gaZ().b,null)
return t},
gaZ:function(){return C.C}}
P.bQ.prototype={}
P.da.prototype={
ax:function(a){var t,s,r,q,p,o,n,m=a.length
for(t=J.hK(a),s=this.c,r=0,q=0;q<m;++q){p=t.ad(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(C.d.ad(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(C.d.aW(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=C.d.G(a,r,q)
r=q+1
s.a+=H.t(92)
s.a+=H.t(117)
s.a+=H.t(100)
o=p>>>8&15
s.a+=H.t(o<10?48+o:87+o)
o=p>>>4&15
s.a+=H.t(o<10?48+o:87+o)
o=p&15
s.a+=H.t(o<10?48+o:87+o)}}continue}if(p<32){if(q>r)s.a+=C.d.G(a,r,q)
r=q+1
s.a+=H.t(92)
switch(p){case 8:s.a+=H.t(98)
break
case 9:s.a+=H.t(116)
break
case 10:s.a+=H.t(110)
break
case 12:s.a+=H.t(102)
break
case 13:s.a+=H.t(114)
break
default:s.a+=H.t(117)
s.a+=H.t(48)
s.a+=H.t(48)
o=p>>>4&15
s.a+=H.t(o<10?48+o:87+o)
o=p&15
s.a+=H.t(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.d.G(a,r,q)
r=q+1
s.a+=H.t(92)
s.a+=H.t(p)}}if(r===0)s.a+=H.e(a)
else if(r<m)s.a+=t.G(a,r,m)},
U:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.d(new P.bP(a,null))}C.a.l(t,a)},
R:function(a){var t,s,r,q,p=this
if(p.aw(a))return
p.U(a)
try{t=p.b.$1(a)
if(!p.aw(t)){r=P.ef(a,null,p.gaf())
throw H.d(r)}r=p.a
if(0>=r.length)return H.m(r,-1)
r.pop()}catch(q){s=H.U(q)
r=P.ef(a,s,p.gaf())
throw H.d(r)}},
aw:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.i.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.ax(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.U(a)
r.bb(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.U(a)
s=r.bc(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return s}else return!1},
bb:function(a){var t,s,r=this.c
r.a+="["
t=J.e_(a)
if(t.gan(a)){this.R(t.k(a,0))
for(s=1;s<t.gj(a);++s){r.a+=","
this.R(t.k(a,s))}}r.a+="]"},
bc:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gN(a)){n.c.a+="{}"
return!0}t=a.gj(a)*2
s=P.fp(t,null,u.X)
r=m.a=0
m.b=!0
a.A(0,new P.db(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.ax(H.G(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.m(s,o)
n.R(s[o])}q.a+="}"
return!0}}
P.db.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.n(t,s.a++,a)
C.a.n(t,s.a++,b)},
$S:6}
P.d9.prototype={
gaf:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.cI.prototype={
$2:function(a,b){var t,s,r
u.E.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.e(a.a)
t.a=r+": "
t.a+=P.W(b)
s.a=", "},
$S:16}
P.aO.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aO&&this.a===b.a&&!0},
gm:function(a){var t=this.a
return(t^C.b.B(t,30))&1073741823},
h:function(a){var t=this,s=P.fk(H.fz(t)),r=P.bI(H.fx(t)),q=P.bI(H.ft(t)),p=P.bI(H.fu(t)),o=P.bI(H.fw(t)),n=P.bI(H.fy(t)),m=P.fl(H.fv(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.aP.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gm:function(a){return C.b.gm(this.a)},
h:function(a){var t,s,r,q=new P.cC(),p=this.a
if(p<0)return"-"+new P.aP(0-p).h(0)
t=q.$1(C.b.E(p,6e7)%60)
s=q.$1(C.b.E(p,1e6)%60)
r=new P.cB().$1(p%1e6)
return""+C.b.E(p,36e8)+":"+H.e(t)+":"+H.e(s)+"."+H.e(r)}}
P.cB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:7}
P.cC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:7}
P.i.prototype={
gT:function(){return H.aj(this.$thrownJsError)}}
P.aH.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.W(t)
return"Assertion failed"}}
P.c8.prototype={}
P.c_.prototype={
h:function(a){return"Throw of null."}}
P.N.prototype={
gX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gW:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+H.e(o),m=r.gX()+p+n
if(!r.a)return m
t=r.gW()
s=P.W(r.b)
return m+t+": "+s}}
P.b4.prototype={
gX:function(){return"RangeError"},
gW:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.bK.prototype={
gX:function(){return"RangeError"},
gW:function(){var t,s=H.bp(this.b)
if(typeof s!=="number")return s.be()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.bZ.prototype={
h:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.ae("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.W(o)
k.a=", "}l.d.A(0,new P.cI(k,j))
n=P.W(l.a)
m=j.h(0)
s="NoSuchMethodError: method not found: '"+H.e(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return s}}
P.cb.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.c9.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.c3.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bE.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.W(t)+"."}}
P.b6.prototype={
h:function(a){return"Stack Overflow"},
gT:function(){return null},
$ii:1}
P.bH.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cZ.prototype={
h:function(a){return"Exception: "+this.a}}
P.l.prototype={
gj:function(a){var t,s=this.gC(this)
for(t=0;s.p();)++t
return t},
h:function(a){return P.fo(this,"(",")")}}
P.v.prototype={
gm:function(a){return P.h.prototype.gm.call(C.A,this)},
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
w:function(a,b){return this===b},
gm:function(a){return H.b3(this)},
h:function(a){return"Instance of '"+H.e(H.cL(this))+"'"},
O:function(a,b){u.o.a(b)
throw H.d(P.eh(this,b.gap(),b.gar(),b.gaq()))},
toString:function(){return this.h(this)}}
P.cn.prototype={
h:function(a){return""},
$iav:1}
P.ae.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ifD:1}
W.c.prototype={}
W.bz.prototype={
h:function(a){return String(a)}}
W.bA.prototype={
h:function(a){return String(a)}}
W.a2.prototype={$ia2:1}
W.a3.prototype={
sM:function(a,b){a.height=b},
sP:function(a,b){a.width=b},
a6:function(a,b){return a.getContext(b)},
$ia3:1}
W.ao.prototype={
sF:function(a,b){a.fillStyle=b},
$iao:1}
W.I.prototype={
gj:function(a){return a.length}}
W.aN.prototype={
gj:function(a){return a.length}}
W.cz.prototype={}
W.cA.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.p.prototype={
aM:function(a,b,c,d){return a.addEventListener(b,H.bv(u.D.a(c),1),!1)},
$ip:1}
W.bJ.prototype={
gj:function(a){return a.length}}
W.a5.prototype={
gam:function(a){return a.data},
gM:function(a){return a.height},
gP:function(a){return a.width},
$ia5:1}
W.P.prototype={$iP:1}
W.aa.prototype={}
W.k.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.aA(a):t},
$ik:1}
W.c2.prototype={
gj:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.ag.prototype={$iag:1}
W.L.prototype={$iL:1}
W.dE.prototype={}
W.bc.prototype={}
W.ch.prototype={}
W.cj.prototype={}
W.cY.prototype={
$1:function(a){return this.a.$1(u.A.a(a))},
$S:17}
W.cg.prototype={}
P.cp.prototype={$ia5:1,
gam:function(a){return this.a},
gM:function(a){return this.b},
gP:function(a){return this.c}}
P.aW.prototype={$iaW:1}
P.di.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.h8,a,!1)
P.dQ(t,$.ct(),a)
return t},
$S:1}
P.dj.prototype={
$1:function(a){return new this.a(a)},
$S:1}
P.dp.prototype={
$1:function(a){return new P.aU(a)},
$S:18}
P.dq.prototype={
$1:function(a){return new P.a7(a,u.U)},
$S:19}
P.dr.prototype={
$1:function(a){return new P.Q(a)},
$S:20}
P.Q.prototype={
k:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cv("property is not a String or num"))
return P.dO(this.a[b])},
n:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cv("property is not a String or num"))
this.a[b]=P.dP(c)},
w:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a},
h:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.U(s)
t=this.aE(0)
return t}},
ak:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.aB(b)
t=P.dH(new H.R(b,t.i("@(1)").a(P.hT()),t.i("R<1,@>")),u.z)}return P.dO(s[a].apply(s,t))},
gm:function(a){return 0}}
P.aU.prototype={}
P.a7.prototype={
ac:function(a){var t=this,s=a<0||a>=t.gj(t)
if(s)throw H.d(P.dI(a,0,t.gj(t),null,null))},
k:function(a,b){if(H.dk(b))this.ac(b)
return this.$ti.c.a(this.aC(0,b))},
n:function(a,b,c){if(H.dk(b))this.ac(b)
this.aF(0,b,c)},
gj:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.d(P.fC("Bad JsArray length"))},
$il:1,
$iq:1}
P.az.prototype={
n:function(a,b,c){return this.aD(0,b,c)}}
X.b5.prototype={
S:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
j.a=a
j.b=J.f8(a)
j.c=J.f7(j.a)
t=j.ba()
s=H.C([],u.q)
for(r=t.length,q=u.V,p=0;p<t.length;t.length===r||(0,H.aG)(t),++p){o=t[p]
n=o.a
m=o.b
if(!j.b3(s,n,m)){l=new X.b9(H.C([0,0,0,0,0,0,0,0],q))
l.aY(0,j,n,m)
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
b3:function(a,b,c){var t,s,r,q,p,o
u.b9.a(a)
for(t=a.length,s=0;s<t;++s){r=a[s]
q=r.d-b
p=r.e-c
o=r.b*4
if(q*q+p*p<=o*o)return!0}return!1},
ba:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=H.C([],u.k),g=i,f=g,e=f,d=e,c=d,b=c,a=128,a0=0
while(!0){t=j.c
if(typeof t!=="number")return H.M(t)
if(!(a0<t))break
t=C.b.a7(a0,2)===0
if(t)s=0
else{r=j.b
if(typeof r!=="number")return r.D()
s=r-1}r=j.b
if(typeof r!=="number")return H.M(r)
s+=a0*r
q=0
p=0
o=0
n=0
m=0
while(!0){r=j.b
if(typeof r!=="number")return H.M(r)
if(!(m<r))break
r=J.V(j.a)
l=s*4
if(l<0||l>=r.length)return H.m(r,l)
b=r[l]
r=J.V(j.a)
k=l+1
if(k>=r.length)return H.m(r,k)
c=r[k]
k=J.V(j.a)
r=l+2
if(r>=k.length)return H.m(k,r)
d=k[r]
e=b+c+d
a+=e-C.b.B(a,3)
f=C.b.B(a,3)
b&=254
e=e<f*0.975?0:1
r=J.V(j.a)
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
if(typeof r!=="number")return H.M(r)
C.a.l(h,new X.bC(C.b.a7(g,r),a0))}q=o
p=1
o=0
n=2}break}s+=t?1:-1;++m}++a0}return h},
ay:function(a,b){var t,s,r,q,p,o,n,m,l,k=this
if(a>=1){t=k.b
if(typeof t!=="number")return t.D()
if(a<=t-2)if(b>=1){t=k.c
if(typeof t!=="number")return t.D()
t=b>t-2}else t=!0
else t=!0}else t=!0
if(t)return 0
for(s=b-1,t=b+1,r=a-1,q=a+1,p=0,o=null;s<=t;++s)for(n=r;n<=q;++n){m=J.V(k.a)
l=k.b
if(typeof l!=="number")return H.M(l)
l=(s*l+n)*4
if(l<0||l>=m.length)return H.m(m,l)
o=m[l]
p+=(o&1)*255}return C.b.E(p,9)},
K:function(a,b,c,d){var t,s,r,q,p,o=this,n=o.b
if(typeof n!=="number")return H.M(n)
t=b*n+a
n=J.V(o.a)
s=t*4
if(s<0||s>=n.length)return H.m(n,s)
r=n[s]&1
for(q=0,p=!1;!0;){n=o.b
if(typeof n!=="number")return H.M(n)
t+=c+d*n;++q
if(t>0){s=o.c
if(typeof s!=="number")return H.M(s)
s=t>=n*s
n=s}else n=!0
if(n)return q
else{n=J.V(o.a)
s=t*4
if(s<0||s>=n.length)return H.m(n,s)
if((n[s]&1)!==r){if(p)return q
else{n=J.V(o.a)
if(s>=n.length)return H.m(n,s)
r=n[s]&1}p=!0}}}}}
X.bC.prototype={}
X.b9.prototype={
aY:function(a,b,c,d){var t,s,r,q,p,o=this,n=b.K(c,d,0,-1),m=b.K(c,d,0,1),l=b.K(c,d,-1,0),k=b.K(c,d,1,0)
o.d=c
o.e=d
if(typeof k!=="number")return k.D()
if(typeof l!=="number")return H.M(l)
o.d=c+(k-l)/2
if(typeof m!=="number")return m.D()
if(typeof n!=="number")return H.M(n)
o.e=d+(m-n)/2
o.b=(k+l+n+m)/8
o.a=-1
for(t=0,s=0,r=0;r<5;++r){q=r*0.483321946706122/5
p=o.as(b,o.b,q)
if(p>t){s=q
t=p}}if(t>0){o.as(b,o.b,s)
o.a=o.b4(o.a,s)}return o.a},
as:function(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.a=-1
for(t=a.f,s=null,r=0,q=null,p=null,o=0,n=0,m=0;m<13;++m){l=0.483321946706122*m+a2
k=Math.cos(l)
j=Math.sin(l)
for(i=0;i<8;++i){s=(i-3.5)*a1
q=C.b.av(C.i.at(a.d+k*s))
p=C.b.av(C.i.at(a.e+j*s))
C.a.n(t,i,a0.ay(q,p))}l=t[1]
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
for(t=a,s=1;s<=13;++s){a=(a<<1&8191|C.b.B(a,12))>>>0
if(a<t){this.c=s*0.483321946706122
t=a}}this.c+=b-0.241660973353061
return t},
a2:function(a){var t,s,r=this,q="white",p=r.a,o=r.b,n=8*o*0.5,m=r.c;(a&&C.e).sF(a,q)
a.beginPath()
a.arc(r.d,r.e,n,0,6.283185307179586,!0)
a.fill()
for(t=0;t<13;++t){s=t*-0.483321946706122+m
C.e.sF(a,(p&1)>0?q:"red")
a.beginPath()
a.moveTo(r.d,r.e)
a.arc(r.d,r.e,n,s,s-0.483321946706122,!0)
a.closePath()
a.fill()
p=C.b.B(p,1)}C.e.sF(a,q)
a.beginPath()
a.arc(r.d,r.e,n-o,0,6.283185307179586,!0)
a.fill()
C.e.sF(a,"red")
a.beginPath()
a.arc(r.d,r.e,n-o*2,0,6.283185307179586,!0)
a.fill()
C.e.sF(a,q)
a.beginPath()
a.arc(r.d,r.e,n-o*3,0,6.283185307179586,!0)
a.fill()}}
X.cc.prototype={
aH:function(a){var t,s,r,q,p,o=this
o.e=new X.b5()
t=o.a
s="#"+H.e(t)
r=document
q=u.B.a(r.querySelector(s))
o.b=u.t.a((q&&C.f).a6(q,"2d"))
s=r.createElement("video")
s.id=H.e(t)+"-video"
o.c=s
s.autoplay=!0
s=o.c.style
s.display="none"
r.body.appendChild(o.c)
t=o.c
s=u.L
r=s.i("~(1)?")
p=r.a(new X.cS(o))
u.Y.a(null)
s=s.c
W.ck(t,"play",p,!1,s)
W.ck(o.c,"pause",r.a(new X.cT(o)),!1,s)},
aS:function(a){var t,s,r,q,p,o,n,m,l=this
u.J.a(a)
l.b.save()
l.b.scale(1,1)
l.b.drawImage(l.c,0,0)
l.b.restore()
t=l.b
s=l.c
r=P.dZ(t.getImageData(0,0,s.videoWidth,s.videoHeight))
q=l.e.S(r,l.b)
p=[]
for(t=q.length,s=u.z,o=0;o<q.length;q.length===t||(0,H.aG)(q),++o){n=q[o]
n.a2(l.b)
p.push(P.aY(["code",n.a,"x",n.d,"y",n.e,"radius",n.b*8/2,"angle",n.c],s,s))}t=l.a
m=P.aY(["canvasId",t,"topcodes",p],u.O,u._)
$.dC().k(0,"TopCodes").ak("_relayFrameData",H.C([t,C.h.a3(m,null)],u.i))}}
X.cS.prototype={
$1:function(a){var t=this.a
P.bw("video width: "+H.e(t.c.videoWidth))
P.bw("video height: "+H.e(t.c.videoHeight))
t.d=P.el(C.n,t.gaR())},
$S:2}
X.cT.prototype={
$1:function(a){var t,s
P.bw("pause")
t=this.a
s=t.d
if(s!=null)s.al()
t.d=null},
$S:2}
X.cd.prototype={
aI:function(a){var t,s,r,q,p,o=this
o.e=new X.b5()
t=o.a
s="#"+H.e(t)
r=document
q=u.B.a(r.querySelector(s))
o.b=u.t.a((q&&C.f).a6(q,"2d"))
s=r.createElement("video")
s.id=H.e(t)+"-video"
o.c=s
s.autoplay=!0
s=o.c.style
s.display="none"
r.body.appendChild(o.c)
t=o.c
s=u.L
r=s.i("~(1)?")
p=r.a(new X.cQ(o))
u.Y.a(null)
s=s.c
W.ck(t,"play",p,!1,s)
W.ck(o.c,"pause",r.a(new X.cR(o)),!1,s)},
aU:function(a){var t,s,r,q,p,o,n,m,l=this
u.J.a(a)
l.b.save()
l.b.translate(l.c.videoWidth,0)
l.b.scale(-1,1)
l.b.drawImage(l.c,0,0)
l.b.restore()
t=l.b
s=l.c
r=P.dZ(t.getImageData(0,0,s.videoWidth,s.videoHeight))
q=l.e.S(r,l.b)
p=[]
for(t=q.length,s=u.z,o=0;o<q.length;q.length===t||(0,H.aG)(q),++o){n=q[o]
n.a2(l.b)
p.push(P.aY(["code",n.a,"x",n.d,"y",n.e,"radius",n.b*8/2,"angle",n.c],s,s))}t=l.a
m=P.aY(["canvasId",t,"topcodes",p],u.O,u._)
$.dC().k(0,"TopCodes").ak("_relayFrameData",H.C([t,C.h.a3(m,null)],u.i))}}
X.cQ.prototype={
$1:function(a){var t=this.a
P.bw("video width: "+H.e(t.c.videoWidth))
P.bw("video height: "+H.e(t.c.videoHeight))
t.d=P.el(C.n,t.gaT())},
$S:2}
X.cR.prototype={
$1:function(a){var t,s
P.bw("pause")
t=this.a
s=t.d
if(s!=null)s.al()
t.d=null},
$S:2};(function aliases(){var t=J.w.prototype
t.aA=t.h
t.az=t.O
t=J.a6.prototype
t.aB=t.h
t=P.h.prototype
t.aE=t.h
t=P.Q.prototype
t.aC=t.k
t.aD=t.n
t=P.az.prototype
t.aF=t.n})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(P,"hC","fI",4)
t(P,"hD","fJ",4)
t(P,"hE","fK",4)
s(P,"eJ","hu",0)
t(P,"hG","hb",1)
t(P,"hT","dP",21)
t(P,"hS","dO",22)
t(X,"hY","i1",23)
t(X,"hW","hO",9)
t(X,"hX","hP",9)
r(X.cc.prototype,"gaR","aS",8)
r(X.cd.prototype,"gaT","aU",8)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.dF,J.w,J.bB,P.i,P.l,H.ar,H.y,H.aw,P.at,H.aK,H.bM,H.a4,H.cO,H.cJ,H.bi,H.dc,P.as,H.cF,H.bS,H.E,H.cl,H.co,P.bj,P.aI,P.bd,P.B,P.cf,P.b7,P.c5,P.c6,P.bo,P.j,P.bn,P.bD,P.da,P.aO,P.aP,P.b6,P.cZ,P.v,P.cn,P.ae,W.cz,W.dE,P.cp,P.Q,X.b5,X.bC,X.b9,X.cc,X.cd])
r(J.w,[J.bL,J.ap,J.a6,J.o,J.aq,J.X,H.ac,W.p,W.a2,W.ao,W.cg,W.cA,W.a,W.a5,P.aW])
r(J.a6,[J.c0,J.ax,J.J])
s(J.cD,J.o)
r(J.aq,[J.aT,J.bN])
r(P.i,[H.bR,H.b1,P.c8,H.bO,H.ca,H.c1,P.aH,H.ci,P.aV,P.c_,P.N,P.bZ,P.cb,P.c9,P.c3,P.bE,P.bH])
s(H.aQ,P.l)
r(H.aQ,[H.a9,H.aX])
s(H.R,H.a9)
s(P.aA,P.at)
s(P.ba,P.aA)
s(H.aL,P.ba)
s(H.aM,H.aK)
r(H.a4,[H.cK,H.c7,H.dw,H.dx,H.dy,P.cV,P.cU,P.cW,P.cX,P.dg,P.df,P.d_,P.d3,P.d0,P.d1,P.d2,P.d6,P.d7,P.d5,P.d4,P.cM,P.cN,P.dm,P.dd,P.de,P.cH,P.db,P.cI,P.cB,P.cC,W.cY,P.di,P.dj,P.dp,P.dq,P.dr,X.cS,X.cT,X.cQ,X.cR])
s(H.b2,P.c8)
r(H.c7,[H.c4,H.an])
s(H.ce,P.aH)
s(P.aZ,P.as)
s(H.a8,P.aZ)
s(H.au,H.ac)
r(H.au,[H.be,H.bg])
s(H.bf,H.be)
s(H.ab,H.bf)
s(H.bh,H.bg)
s(H.b_,H.bh)
r(H.b_,[H.bT,H.bU,H.bV,H.bW,H.bX,H.b0,H.bY])
s(H.bk,H.ci)
s(P.cm,P.bo)
s(P.bG,P.c6)
s(P.bP,P.aV)
s(P.cE,P.bD)
s(P.bQ,P.bG)
s(P.d9,P.da)
r(P.N,[P.b4,P.bK])
r(W.p,[W.k,W.ag,W.L])
r(W.k,[W.b,W.I])
s(W.c,W.b)
r(W.c,[W.bz,W.bA,W.a3,W.bJ,W.P,W.aa,W.c2])
s(W.aN,W.cg)
s(W.bb,W.aa)
s(W.bc,P.b7)
s(W.ch,W.bc)
s(W.cj,P.c5)
r(P.Q,[P.aU,P.az])
s(P.a7,P.az)
t(H.be,P.j)
t(H.bf,H.y)
t(H.bg,P.j)
t(H.bh,H.y)
t(P.aA,P.bn)
t(W.cg,W.cz)
t(P.az,P.j)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",H:"double",aF:"num",r:"String",ds:"bool",v:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","@(@)","v(a*)","v()","~(~())","v(@)","~(h?,h?)","r(f)","~(b8*)","~(r*)","~(r,@)","@(@,r)","@(r)","v(~())","v(h,av)","B<@>(@)","~(af,@)","~(a)","aU(@)","a7<@>(@)","Q(@)","h?(h?)","h?(@)","r*(P*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.h1(v.typeUniverse,JSON.parse('{"c0":"a6","ax":"a6","J":"a6","i7":"a","ie":"a","i6":"b","ih":"b","il":"b","i9":"c","ii":"k","id":"k","ic":"L","ia":"I","im":"I","ig":"a2","i8":"aa","ik":"ab","ij":"ac","bL":{"ds":[]},"ap":{"v":[]},"o":{"q":["1"],"l":["1"]},"cD":{"o":["1"],"q":["1"],"l":["1"]},"aq":{"H":[],"aF":[]},"aT":{"H":[],"f":[],"aF":[]},"bN":{"H":[],"aF":[]},"X":{"r":[]},"bR":{"i":[]},"b1":{"i":[]},"aQ":{"l":["1"]},"a9":{"l":["1"]},"R":{"a9":["2"],"l":["2"],"a9.E":"2"},"aw":{"af":[]},"aL":{"ba":["1","2"],"aA":["1","2"],"at":["1","2"],"bn":["1","2"],"K":["1","2"]},"aK":{"K":["1","2"]},"aM":{"aK":["1","2"],"K":["1","2"]},"bM":{"ec":[]},"b2":{"i":[]},"bO":{"i":[]},"ca":{"i":[]},"bi":{"av":[]},"a4":{"aR":[]},"c7":{"aR":[]},"c4":{"aR":[]},"an":{"aR":[]},"c1":{"i":[]},"ce":{"i":[]},"a8":{"as":["1","2"],"eg":["1","2"],"K":["1","2"]},"aX":{"l":["1"]},"ac":{"F":[]},"au":{"D":["1"],"F":[]},"ab":{"j":["H"],"D":["H"],"q":["H"],"F":[],"l":["H"],"y":["H"],"j.E":"H"},"b_":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"]},"bT":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"bU":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"bV":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"bW":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"bX":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"b0":{"j":["f"],"fE":[],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"bY":{"j":["f"],"D":["f"],"q":["f"],"F":[],"l":["f"],"y":["f"],"j.E":"f"},"ci":{"i":[]},"bk":{"i":[]},"B":{"aS":["1"]},"bj":{"b8":[]},"aI":{"i":[]},"bo":{"ep":[]},"cm":{"bo":[],"ep":[]},"aZ":{"as":["1","2"],"K":["1","2"]},"as":{"K":["1","2"]},"at":{"K":["1","2"]},"ba":{"aA":["1","2"],"at":["1","2"],"bn":["1","2"],"K":["1","2"]},"aV":{"i":[]},"bP":{"i":[]},"bQ":{"bG":["h?","r"]},"H":{"aF":[]},"f":{"aF":[]},"q":{"l":["1"]},"aH":{"i":[]},"c8":{"i":[]},"c_":{"i":[]},"N":{"i":[]},"b4":{"i":[]},"bK":{"i":[]},"bZ":{"i":[]},"cb":{"i":[]},"c9":{"i":[]},"c3":{"i":[]},"bE":{"i":[]},"b6":{"i":[]},"bH":{"i":[]},"cn":{"av":[]},"ae":{"fD":[]},"c":{"b":[],"k":[],"p":[]},"b":{"k":[],"p":[]},"P":{"b":[],"k":[],"p":[]},"k":{"p":[]},"bz":{"b":[],"k":[],"p":[]},"bA":{"b":[],"k":[],"p":[]},"a3":{"b":[],"k":[],"p":[]},"I":{"k":[],"p":[]},"bJ":{"b":[],"k":[],"p":[]},"aa":{"b":[],"k":[],"p":[]},"c2":{"b":[],"k":[],"p":[]},"bb":{"b":[],"k":[],"p":[]},"ag":{"p":[]},"L":{"p":[]},"bc":{"b7":["1"]},"ch":{"bc":["1"],"b7":["1"]},"cp":{"a5":[]},"a7":{"j":["1"],"q":["1"],"l":["1"],"j.E":"1"}}'))
H.h0(v.typeUniverse,JSON.parse('{"aQ":1,"au":1,"c5":1,"c6":2,"aZ":2,"bD":2,"az":1}'))
0
var u=(function rtii(){var t=H.du
return{n:t("aI"),x:t("a2"),h:t("aL<af,@>"),C:t("i"),A:t("a"),Z:t("aR"),d:t("aS<@>"),I:t("a5"),o:t("ec"),N:t("l<@>"),s:t("o<r>"),b:t("o<@>"),k:t("o<bC*>"),i:t("o<r*>"),q:t("o<b9*>"),V:t("o<f*>"),T:t("ap"),g:t("J"),p:t("D<@>"),U:t("a7<@>"),W:t("a8<af,@>"),w:t("aW"),j:t("q<@>"),f:t("K<@,@>"),r:t("k"),P:t("v"),K:t("h"),l:t("av"),u:t("r"),E:t("af"),ae:t("b8"),Q:t("F"),cr:t("ax"),cg:t("ag"),bj:t("L"),L:t("ch<a*>"),c:t("B<@>"),a:t("B<f>"),y:t("ds"),m:t("ds(h)"),cb:t("H"),z:t("@"),bd:t("@()"),v:t("@(h)"),R:t("@(h,av)"),S:t("f"),B:t("a3*"),t:t("ao*"),bL:t("P*"),bl:t("q<@>*"),b9:t("q<b9*>*"),G:t("0&*"),_:t("h*"),O:t("r*"),J:t("b8*"),bQ:t("r*(P*)*"),bc:t("aS<v>?"),X:t("h?"),F:t("bd<@,@>?"),D:t("@(a)?"),cZ:t("h?(@)?"),Y:t("~()?"),cY:t("aF"),H:t("~"),M:t("~()"),e:t("~(b8)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.f=W.a3.prototype
C.e=W.ao.prototype
C.z=J.w.prototype
C.a=J.o.prototype
C.b=J.aT.prototype
C.A=J.ap.prototype
C.i=J.aq.prototype
C.d=J.X.prototype
C.B=J.J.prototype
C.q=J.c0.prototype
C.j=J.ax.prototype
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=function() {
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
C.x=function(getTagFallback) {
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
C.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.u=function(hooks) {
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
C.w=function(hooks) {
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
C.v=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.h=new P.cE()
C.m=new H.dc()
C.c=new P.cm()
C.y=new P.cn()
C.n=new P.aP(6e4)
C.C=new P.bQ(null)
C.o=H.C(t([]),u.b)
C.D=H.C(t([]),H.du("o<af*>"))
C.p=new H.aM(0,{},C.D,H.du("aM<af*,@>"))
C.E=new H.aw("call")})();(function staticFields(){$.d8=null
$.O=0
$.aJ=null
$.e8=null
$.eN=null
$.eI=null
$.eS=null
$.dt=null
$.dz=null
$.e1=null
$.aC=null
$.bs=null
$.bt=null
$.dU=!1
$.n=C.c
$.A=H.C([],H.du("o<h>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"ib","ct",function(){return H.eM("_$dart_dartClosure")})
t($,"io","eV",function(){return H.S(H.cP({
toString:function(){return"$receiver$"}}))})
t($,"ip","eW",function(){return H.S(H.cP({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"iq","eX",function(){return H.S(H.cP(null))})
t($,"ir","eY",function(){return H.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"iu","f0",function(){return H.S(H.cP(void 0))})
t($,"iv","f1",function(){return H.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"it","f_",function(){return H.S(H.en(null))})
t($,"is","eZ",function(){return H.S(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"ix","f3",function(){return H.S(H.en(void 0))})
t($,"iw","f2",function(){return H.S(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"iy","e3",function(){return P.fH()})
t($,"iL","dC",function(){return P.eH(self)})
t($,"iz","e4",function(){return H.eM("_$dart_dartObject")})
t($,"iM","e5",function(){return function DartObject(a){this.o=a}})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,WebGLRenderingContext:J.w,WebGL2RenderingContext:J.w,SQLError:J.w,DataView:H.ac,ArrayBufferView:H.ac,Float32Array:H.ab,Float64Array:H.ab,Int16Array:H.bT,Int32Array:H.bU,Int8Array:H.bV,Uint16Array:H.bW,Uint32Array:H.bX,Uint8ClampedArray:H.b0,CanvasPixelArray:H.b0,Uint8Array:H.bY,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bz,HTMLAreaElement:W.bA,Blob:W.a2,File:W.a2,HTMLCanvasElement:W.a3,CanvasRenderingContext2D:W.ao,CDATASection:W.I,CharacterData:W.I,Comment:W.I,ProcessingInstruction:W.I,Text:W.I,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,DOMException:W.cA,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,EventTarget:W.p,HTMLFormElement:W.bJ,ImageData:W.a5,HTMLImageElement:W.P,HTMLAudioElement:W.aa,HTMLMediaElement:W.aa,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,Attr:W.k,DocumentType:W.k,Node:W.k,HTMLSelectElement:W.c2,HTMLVideoElement:W.bb,Window:W.ag,DOMWindow:W.ag,DedicatedWorkerGlobalScope:W.L,ServiceWorkerGlobalScope:W.L,SharedWorkerGlobalScope:W.L,WorkerGlobalScope:W.L,IDBKeyRange:P.aW})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:true,File:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,ImageData:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,HTMLVideoElement:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true})
H.au.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.ab.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.bh.$nativeSuperclassTag="ArrayBufferView"
H.b_.$nativeSuperclassTag="ArrayBufferView"})()
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
var t=X.hV
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
