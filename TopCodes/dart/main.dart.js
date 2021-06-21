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
a[c]=function(){a[c]=function(){H.hY(b)}
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
if(a[b]!==t)H.hZ(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.dT(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={dz:function dz(){},
eG:function(a,b,c){if(a==null)throw H.d(new H.b_(b,c.i("b_<0>")))
return a},
bO:function bO(a){this.a=a},
b_:function b_(a,b){this.a=a
this.$ti=b},
aP:function aP(){},
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
eQ:function(a){var t,s=H.eP(a)
if(s!=null)return s
t="minified:"+a
return t},
iJ:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
f:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bv(a)
if(typeof t!="string")throw H.d(H.dS(a))
return t},
b1:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cI:function(a){return H.fn(a)},
fn:function(a){var t,s,r,q
if(a instanceof P.h)return H.z(H.ak(a),null)
if(J.ai(a)===C.z||u.cr.b(a)){t=C.j(a)
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
return String.fromCharCode((C.b.B(t,10)|55296)>>>0,t&1023|56320)}throw H.d(P.dC(a,0,1114111,null,null))},
ad:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
fv:function(a){var t=H.ad(a).getFullYear()+0
return t},
ft:function(a){var t=H.ad(a).getMonth()+1
return t},
fp:function(a){var t=H.ad(a).getDate()+0
return t},
fq:function(a){var t=H.ad(a).getHours()+0
return t},
fs:function(a){var t=H.ad(a).getMinutes()+0
return t},
fu:function(a){var t=H.ad(a).getSeconds()+0
return t},
fr:function(a){var t=H.ad(a).getMilliseconds()+0
return t},
Y:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.a0(t,b)
r.b=""
if(c!=null&&c.a!==0)c.A(0,new H.cH(r,s,t))
""+r.a
return J.f6(a,new H.bJ(C.E,0,t,s,0))},
fo:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.fm(a,b,c)},
fm:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b!=null)t=b instanceof Array?b:P.dB(b,u.z)
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
C.a.a0(t,o.slice(s-r))
return m.apply(a,t)}else{if(s>r)return H.Y(a,t,c)
l=Object.keys(o)
if(c==null)for(p=l.length,k=0;k<l.length;l.length===p||(0,H.bt)(l),++k){j=o[H.L(l[k])]
if(C.m===j)return H.Y(a,t,c)
C.a.k(t,j)}else{for(p=l.length,i=0,k=0;k<l.length;l.length===p||(0,H.bt)(l),++k){h=H.L(l[k])
if(c.aU(h)){++i
C.a.k(t,c.l(0,h))}else{j=o[h]
if(C.m===j)return H.Y(a,t,c)
C.a.k(t,j)}}if(i!==c.a)return H.Y(a,t,c)}return m.apply(a,t)}},
M:function(a){throw H.d(H.dS(a))},
m:function(a,b){if(a==null)J.cq(a)
throw H.d(H.aE(a,b))},
aE:function(a,b){var t,s,r="index"
if(!H.df(b))return new P.N(!0,b,r,null)
t=H.bm(J.cq(a))
if(!(b<0)){if(typeof t!=="number")return H.M(t)
s=b>=t}else s=!0
if(s)return P.fj(b,a,r,null,t)
return P.dD(b,r)},
dS:function(a){return new P.N(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.bX()
t=new Error()
t.dartException=a
s=H.i_
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
i_:function(){return J.bv(this.dartException)},
am:function(a){throw H.d(a)},
bt:function(a){throw H.d(P.bC(a))},
S:function(a){var t,s,r,q,p,o
a=H.hV(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.G([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cM:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ei:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dA:function(a,b){var t=b==null,s=t?null:b.method
return new H.bL(a,s,t?null:b.receiver)},
U:function(a){if(a==null)return new H.cG(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.al(a,a.dartException)
return H.hu(a)},
al:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
hu:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.B(s,16)&8191)===10)switch(r){case 438:return H.al(a,H.dA(H.f(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.f(t)+" (Error "+r+")"
return H.al(a,new H.b0(q,f))}}if(a instanceof TypeError){p=$.eR()
o=$.eS()
n=$.eT()
m=$.eU()
l=$.eX()
k=$.eY()
j=$.eW()
$.eV()
i=$.f_()
h=$.eZ()
g=p.v(t)
if(g!=null)return H.al(a,H.dA(H.L(t),g))
else{g=o.v(t)
if(g!=null){g.method="call"
return H.al(a,H.dA(H.L(t),g))}else{g=n.v(t)
if(g==null){g=m.v(t)
if(g==null){g=l.v(t)
if(g==null){g=k.v(t)
if(g==null){g=j.v(t)
if(g==null){g=m.v(t)
if(g==null){g=i.v(t)
if(g==null){g=h.v(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.L(t)
return H.al(a,new H.b0(t,g==null?f:g.method))}}}return H.al(a,new H.c8(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b3()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.al(a,new P.N(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b3()
return a},
aj:function(a){var t
if(a==null)return new H.bf(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bf(a)},
hE:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
hL:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.bm(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.cU("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hL)
a.$identity=t
return t},
ff:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.c2().constructor.prototype):Object.create(new H.an(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.O
if(typeof s!=="number")return s.p()
$.O=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.e6(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.fb(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.e6(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
fb:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.eK,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.f9:H.f8
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
fc:function(a,b,c,d){var t=H.e5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
e6:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.fe(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.fc(s,!q,t,b)
if(s===0){q=$.O
if(typeof q!=="number")return q.p()
$.O=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aI
return new Function(q+(p==null?$.aI=H.cu("self"):p)+";return "+o+"."+H.f(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.O
if(typeof q!=="number")return q.p()
$.O=q+1
n+=q
q="return function("+n+"){return this."
p=$.aI
return new Function(q+(p==null?$.aI=H.cu("self"):p)+"."+H.f(t)+"("+n+");}")()},
fd:function(a,b,c,d){var t=H.e5,s=H.fa
switch(b?-1:a){case 0:throw H.d(new H.bZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
fe:function(a,b){var t,s,r,q,p,o,n,m=$.aI
if(m==null)m=$.aI=H.cu("self")
t=$.e4
if(t==null)t=$.e4=H.cu("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.fd(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.f(s)+"(this."+t+");"
o=$.O
if(typeof o!=="number")return o.p()
$.O=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.f(s)+"(this."+t+", "+n+");"
o=$.O
if(typeof o!=="number")return o.p()
$.O=o+1
return new Function(p+o+"}")()},
dT:function(a,b,c,d,e,f,g){return H.ff(a,b,c,d,!!e,!!f,g)},
f8:function(a,b){return H.cn(v.typeUniverse,H.ak(a.a),b)},
f9:function(a,b){return H.cn(v.typeUniverse,H.ak(a.c),b)},
e5:function(a){return a.a},
fa:function(a){return a.c},
cu:function(a){var t,s,r,q=new H.an("self","target","receiver","name"),p=J.ea(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.cr("Field name "+a+" not found."))},
eF:function(a){if(a==null)H.hx("boolean expression must not be null")
return a},
hx:function(a){throw H.d(new H.cb(a))},
hY:function(a){throw H.d(new P.bE(a))},
eI:function(a){return v.getIsolateTag(a)},
hZ:function(a){return H.am(new H.bO(a))},
iI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hP:function(a){var t,s,r,q,p,o=H.L($.eJ.$1(a)),n=$.dn[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.du[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.h2($.eD.$2(a,o))
if(r!=null){n=$.dn[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.du[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.dw(t)
$.dn[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.du[o]=t
return t}if(q==="-"){p=H.dw(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eN(a,t)
if(q==="*")throw H.d(P.ej(o))
if(v.leafTags[o]===true){p=H.dw(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eN(a,t)},
eN:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.dX(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dw:function(a){return J.dX(a,!1,null,!!a.$iC)},
hT:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dw(t)
else return J.dX(t,c,null,null)},
hI:function(){if(!0===$.dW)return
$.dW=!0
H.hJ()},
hJ:function(){var t,s,r,q,p,o,n,m
$.dn=Object.create(null)
$.du=Object.create(null)
H.hH()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eO.$1(p)
if(o!=null){n=H.hT(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hH:function(){var t,s,r,q,p,o,n=C.q()
n=H.aD(C.r,H.aD(C.t,H.aD(C.k,H.aD(C.k,H.aD(C.u,H.aD(C.v,H.aD(C.w(C.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.eJ=new H.dr(q)
$.eD=new H.ds(p)
$.eO=new H.dt(o)},
aD:function(a,b){return a(b)||b},
hV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aK:function aK(a,b){this.a=a
this.$ti=b},
aJ:function aJ(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b0:function b0(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a){this.a=a},
cG:function cG(a){this.a=a},
bf:function bf(a){this.a=a
this.b=null},
a4:function a4(){},
c5:function c5(){},
c2:function c2(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a){this.a=a},
cb:function cb(a){this.a=a},
d7:function d7(){},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cB:function cB(a,b){this.a=a
this.b=b
this.c=null},
aW:function aW(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aE(b,a))},
ac:function ac(){},
au:function au(){},
ab:function ab(){},
aY:function aY(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
aZ:function aZ(){},
bV:function bV(){},
bb:function bb(){},
bc:function bc(){},
bd:function bd(){},
be:function be(){},
fx:function(a,b){var t=b.c
return t==null?b.c=H.dI(a,b.z,!0):t},
ee:function(a,b){var t=b.c
return t==null?b.c=H.bi(a,"aR",[b.z]):t},
ef:function(a){var t=a.y
if(t===6||t===7||t===8)return H.ef(a.z)
return t===11||t===12},
fw:function(a){return a.cy},
dp:function(a){return H.dc(v.typeUniverse,a,!1)},
a1:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.er(a,s,!0)
case 7:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.dI(a,s,!0)
case 8:t=b.z
s=H.a1(a,t,c,a0)
if(s===t)return b
return H.eq(a,s,!0)
case 9:r=b.Q
q=H.br(a,r,c,a0)
if(q===r)return b
return H.bi(a,b.z,q)
case 10:p=b.z
o=H.a1(a,p,c,a0)
n=b.Q
m=H.br(a,n,c,a0)
if(o===p&&m===n)return b
return H.dG(a,o,m)
case 11:l=b.z
k=H.a1(a,l,c,a0)
j=b.Q
i=H.hr(a,j,c,a0)
if(k===l&&i===j)return b
return H.ep(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.br(a,h,c,a0)
p=b.z
o=H.a1(a,p,c,a0)
if(g===h&&o===p)return b
return H.dH(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.cs("Attempted to substitute unexpected RTI kind "+d))}},
br:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a1(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
hs:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a1(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
hr:function(a,b,c,d){var t,s=b.a,r=H.br(a,s,c,d),q=b.b,p=H.br(a,q,c,d),o=b.c,n=H.hs(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.ch()
t.a=r
t.b=p
t.c=n
return t},
G:function(a,b){a[v.arrayRti]=b
return a},
hB:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.eK(t)
return a.$S()}return null},
eL:function(a,b){var t
if(H.ef(b))if(a instanceof H.a4){t=H.hB(a)
if(t!=null)return t}return H.ak(a)},
ak:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.dN(a)}if(Array.isArray(a))return H.aB(a)
return H.dN(J.ai(a))},
aB:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bo:function(a){var t=a.$ti
return t!=null?t:H.dN(a)},
dN:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.hd(a,t)},
hd:function(a,b){var t=a instanceof H.a4?a.__proto__.__proto__.constructor:b,s=H.h_(v.typeUniverse,t.name)
b.$ccache=s
return s},
eK:function(a){var t,s,r
H.bm(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.dc(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
hD:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.ck(a)
r=H.dc(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.ck(r):q},
hc:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bn(r,a,H.hg)
if(!H.T(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bn(r,a,H.hj)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.df
else if(t===u.cb||t===u.cY)s=H.hf
else if(t===u.r)s=H.hh
else s=t===u.y?H.dO:null
if(s!=null)return H.bn(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hM)){r.r="$i"+q
return H.bn(r,a,H.hi)}}else if(q===7)return H.bn(r,a,H.ha)
return H.bn(r,a,H.h8)},
bn:function(a,b,c){a.b=c
return a.b(b)},
hb:function(a){var t,s,r=this
if(!H.T(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.h3
else if(r===u.K)s=H.h1
else s=H.h9
r.a=s
return r.a(a)},
dR:function(a){var t,s=a.y
if(!H.T(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dR(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
h8:function(a){var t=this
if(a==null)return H.dR(t)
return H.u(v.typeUniverse,H.eL(a,t),null,t,null)},
ha:function(a){if(a==null)return!0
return this.z.b(a)},
hi:function(a){var t,s=this
if(a==null)return H.dR(s)
t=s.r
if(a instanceof P.h)return!!a[t]
return!!J.ai(a)[t]},
iH:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.eu(a,t)},
h9:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.eu(a,t)},
eu:function(a,b){throw H.d(H.fQ(H.el(a,H.eL(a,b),H.z(b,null))))},
el:function(a,b,c){var t=P.W(a),s=H.z(b==null?H.ak(a):b,null)
return t+": type '"+H.f(s)+"' is not a subtype of type '"+H.f(c)+"'"},
fQ:function(a){return new H.bh("TypeError: "+a)},
x:function(a,b){return new H.bh("TypeError: "+H.el(a,null,b))},
hg:function(a){return a!=null},
h1:function(a){return a},
hj:function(a){return!0},
h3:function(a){return a},
dO:function(a){return!0===a||!1===a},
iu:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.x(a,"bool"))},
h0:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool"))},
iv:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.x(a,"bool?"))},
iw:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"double"))},
iy:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double"))},
ix:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"double?"))},
df:function(a){return typeof a=="number"&&Math.floor(a)===a},
iz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.x(a,"int"))},
bm:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int"))},
iA:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.x(a,"int?"))},
hf:function(a){return typeof a=="number"},
iB:function(a){if(typeof a=="number")return a
throw H.d(H.x(a,"num"))},
iD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num"))},
iC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.x(a,"num?"))},
hh:function(a){return typeof a=="string"},
iE:function(a){if(typeof a=="string")return a
throw H.d(H.x(a,"String"))},
L:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String"))},
h2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.x(a,"String?"))},
ho:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.p(s,H.z(a[r],b))
return t},
ev:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.G([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.k(a5,"T"+(r+q))
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
if(!k)m+=C.d.p(" extends ",H.z(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.z(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.d.p(a2,H.z(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.d.p(a2,H.z(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.e2(H.z(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.f(a0)},
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
return J.e2(r===11||r===12?C.d.p("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.f(H.z(a.z,b))+">"
if(m===9){q=H.ht(a.z)
p=a.Q
return p.length!==0?q+("<"+H.ho(p,b)+">"):q}if(m===11)return H.ev(a,b,null)
if(m===12)return H.ev(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.m(b,o)
return b[o]}return"?"},
ht:function(a){var t,s=H.eP(a)
if(s!=null)return s
t="minified:"+a
return t},
es:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
h_:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.dc(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bj(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bi(a,b,r)
o[b]=p
return p}else return n},
fY:function(a,b){return H.et(a.tR,b)},
fX:function(a,b){return H.et(a.eT,b)},
dc:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.eo(H.em(a,null,b,c))
s.set(b,t)
return t},
cn:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.eo(H.em(a,b,c,!0))
r.set(c,s)
return s},
fZ:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dG(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a0:function(a,b){b.a=H.hb
b.b=H.hc
return b},
bj:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.D(null,null)
t.y=b
t.cy=c
s=H.a0(a,t)
a.eC.set(c,s)
return s},
er:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fV(a,b,s,c)
a.eC.set(s,t)
return t},
fV:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.T(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.D(null,null)
r.y=6
r.z=b
r.cy=c
return H.a0(a,r)},
dI:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fU(a,b,s,c)
a.eC.set(s,t)
return t},
fU:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.T(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.dv(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.dv(r.z))return r
else return H.fx(a,b)}}q=new H.D(null,null)
q.y=7
q.z=b
q.cy=c
return H.a0(a,q)},
eq:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fS(a,b,s,c)
a.eC.set(s,t)
return t},
fS:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.T(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bi(a,"aR",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.D(null,null)
r.y=8
r.z=b
r.cy=c
return H.a0(a,r)},
fW:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.D(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a0(a,t)
a.eC.set(r,s)
return s},
cm:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fR:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bi:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.cm(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.D(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a0(a,s)
a.eC.set(q,r)
return r},
dG:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.cm(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.D(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a0(a,p)
a.eC.set(r,o)
return o},
ep:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cm(n)
if(k>0){t=m>0?",":""
s=H.cm(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fR(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.D(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a0(a,p)
a.eC.set(r,s)
return s},
dH:function(a,b,c,d){var t,s=b.cy+("<"+H.cm(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.fT(a,b,c,s,d)
a.eC.set(s,t)
return t},
fT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a1(a,b,s,0)
n=H.br(a,c,s,0)
return H.dH(a,o,n,c!==n)}}m=new H.D(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a0(a,m)},
em:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eo:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fK(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.en(a,s,h,g,!1)
else if(r===46)s=H.en(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a_(a.u,a.e,g.pop()))
break
case 94:g.push(H.fW(a.u,g.pop()))
break
case 35:g.push(H.bj(a.u,5,"#"))
break
case 64:g.push(H.bj(a.u,2,"@"))
break
case 126:g.push(H.bj(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dF(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bi(q,o,p))
else{n=H.a_(q,a.e,o)
switch(n.y){case 11:g.push(H.dH(q,n,p,a.n))
break
default:g.push(H.dG(q,n,p))
break}}break
case 38:H.fL(a,g)
break
case 42:m=a.u
g.push(H.er(m,H.a_(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dI(m,H.a_(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.eq(m,H.a_(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.ch()
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
H.dF(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.ep(q,H.a_(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dF(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.fN(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a_(a.u,a.e,i)},
fK:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
en:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.es(t,p.z)[q]
if(o==null)H.am('No "'+q+'" in "'+H.fw(p)+'"')
d.push(H.cn(t,p,o))}else d.push(q)
return n},
fL:function(a,b){var t=b.pop()
if(0===t){b.push(H.bj(a.u,1,"0&"))
return}if(1===t){b.push(H.bj(a.u,4,"1&"))
return}throw H.d(P.cs("Unexpected extended operation "+H.f(t)))},
a_:function(a,b,c){if(typeof c=="string")return H.bi(a,c,a.sEA)
else if(typeof c=="number")return H.fM(a,b,c)
else return c},
dF:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a_(a,b,c[t])},
fN:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a_(a,b,c[t])},
fM:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.cs("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.cs("Bad index "+c+" for "+b.h(0)))},
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
return H.u(a,H.ee(a,b),c,d,e)}if(s===7){t=H.u(a,b.z,c,d,e)
return t}if(q===8){if(H.u(a,b,c,d.z,e))return!0
return H.u(a,b,c,H.ee(a,d),e)}if(q===7){t=H.u(a,b,c,d.z,e)
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
if(!H.u(a,l,c,k,e)||!H.u(a,k,e,l,c))return!1}return H.ey(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.ey(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.he(a,b,c,d,e)}return!1},
ey:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
he:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.u(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.es(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.u(a,H.cn(a,b,m[q]),c,s[q],e))return!1
return!0},
dv:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.T(a))if(s!==7)if(!(s===6&&H.dv(a.z)))t=s===8&&H.dv(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hM:function(a){var t
if(!H.T(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
T:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
et:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ch:function ch(){this.c=this.b=this.a=null},
ck:function ck(a){this.a=a},
cf:function cf(){},
bh:function bh(a){this.a=a},
eM:function(a){return u.x.b(a)||u.A.b(a)||u.w.b(a)||u.I.b(a)||u.W.b(a)||u.cg.b(a)||u.bj.b(a)},
eP:function(a){return v.mangledGlobalNames[a]},
hU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
dX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.dW==null){H.hI()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.ej("Return interceptor for "+H.f(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.d3
if(p==null)p=$.d3=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.hP(a)
if(q!=null)return q
if(typeof a=="function")return C.B
t=Object.getPrototypeOf(a)
if(t==null)return C.p
if(t===Object.prototype)return C.p
if(typeof r=="function"){p=$.d3
if(p==null)p=$.d3=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
ea:function(a,b){a.fixed$length=Array
return a},
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aS.prototype
return J.bK.prototype}if(typeof a=="string")return J.X.prototype
if(a==null)return J.ap.prototype
if(typeof a=="boolean")return J.bI.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
hF:function(a){if(typeof a=="number")return J.aq.prototype
if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
dU:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
dV:function(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
hG:function(a){if(typeof a=="string")return J.X.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.ax.prototype
return a},
dq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.I.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
e2:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hF(a).p(a,b)},
f0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).w(a,b)},
f1:function(a,b,c,d){return J.dq(a).aJ(a,b,c,d)},
f2:function(a,b){return J.dV(a).L(a,b)},
V:function(a){return J.dq(a).gah(a)},
bu:function(a){return J.ai(a).gm(a)},
f3:function(a){return J.dq(a).gM(a)},
dx:function(a){return J.dV(a).gC(a)},
cq:function(a){return J.dU(a).gj(a)},
f4:function(a){return J.dq(a).gP(a)},
f5:function(a,b,c){return J.dV(a).al(a,b,c)},
f6:function(a,b){return J.ai(a).O(a,b)},
bv:function(a){return J.ai(a).h(a)},
w:function w(){},
bI:function bI(){},
ap:function ap(){},
a6:function a6(){},
bY:function bY(){},
ax:function ax(){},
I:function I(){},
o:function o(a){this.$ti=a},
cz:function cz(a){this.$ti=a},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aq:function aq(){},
aS:function aS(){},
bK:function bK(){},
X:function X(){}},P={
fD:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.hy()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bs(new P.cQ(r),1)).observe(t,{childList:true})
return new P.cP(r,t,s)}else if(self.setImmediate!=null)return P.hz()
return P.hA()},
fE:function(a){self.scheduleImmediate(H.bs(new P.cR(u.M.a(a)),0))},
fF:function(a){self.setImmediate(H.bs(new P.cS(u.M.a(a)),0))},
fG:function(a){u.M.a(a)
P.fO(0,a)},
eh:function(a,b){var t=C.b.E(a.a,1000)
return P.fP(t<0?0:t,b)},
fO:function(a,b){var t=new P.bg(!0)
t.aG(a,b)
return t},
fP:function(a,b){var t=new P.bg(!1)
t.aH(a,b)
return t},
ct:function(a,b){var t=H.eG(a,"error",u.K)
return new P.aH(t,b==null?P.f7(a):b)},
f7:function(a){var t
if(u.C.b(a)){t=a.gS()
if(t!=null)return t}return C.x},
fH:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.I()
b.a=a.a
b.c=a.c
P.ay(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.ad(r)}},
ay:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.dg(d,d,b.b,o.a,o.b)}return}q.a=a0
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
P.dg(d,d,l.b,k.a,k.b)
return}g=$.n
if(g!==h)$.n=h
else g=d
b=b.c
if((b&15)===8)new P.d1(q,c,p).$0()
else if(j){if((b&1)!==0)new P.d0(q,k).$0()}else if((b&2)!==0)new P.d_(c,q).$0()
if(g!=null)$.n=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.i("aR<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b instanceof P.B)if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.J(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.fH(b,f)
else f.aK(b)
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
hm:function(a,b){var t=u.R
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.e3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
hl:function(){var t,s
for(t=$.aC;t!=null;t=$.aC){$.bq=null
s=t.b
$.aC=s
if(s==null)$.bp=null
t.a.$0()}},
hq:function(){$.dP=!0
try{P.hl()}finally{$.bq=null
$.dP=!1
if($.aC!=null)$.dZ().$1(P.eE())}},
eB:function(a){var t=new P.cc(a),s=$.bp
if(s==null){$.aC=$.bp=t
if(!$.dP)$.dZ().$1(P.eE())}else $.bp=s.b=t},
hp:function(a){var t,s,r,q=$.aC
if(q==null){P.eB(a)
$.bq=$.bp
return}t=new P.cc(a)
s=$.bq
if(s==null){t.b=q
$.aC=$.bq=t}else{r=s.b
t.b=r
$.bq=s.b=t
if(r==null)$.bp=t}},
hX:function(a){var t=null,s=$.n
if(C.c===s){P.di(t,t,C.c,a)
return}P.di(t,t,s,u.M.a(s.af(a)))},
fA:function(a,b){var t=$.n
if(t===C.c)return P.eh(a,u.e.a(b))
return P.eh(a,u.e.a(t.ag(b,u.E)))},
dg:function(a,b,c,d,e){P.hp(new P.dh(d,e))},
ez:function(a,b,c,d,e){var t,s=$.n
if(s===c)return d.$0()
$.n=c
t=s
try{s=d.$0()
return s}finally{$.n=t}},
eA:function(a,b,c,d,e,f,g){var t,s=$.n
if(s===c)return d.$1(e)
$.n=c
t=s
try{s=d.$1(e)
return s}finally{$.n=t}},
hn:function(a,b,c,d,e,f,g,h,i){var t,s=$.n
if(s===c)return d.$2(e,f)
$.n=c
t=s
try{s=d.$2(e,f)
return s}finally{$.n=t}},
di:function(a,b,c,d){u.M.a(d)
if(C.c!==c)d=c.af(d)
P.eB(d)},
cQ:function cQ(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
bg:function bg(a){this.a=a
this.b=null
this.c=0},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c,d,e){var _=this
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
cV:function cV(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.a=a},
d0:function d0(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
cc:function cc(a){this.a=a
this.b=null},
b4:function b4(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
c3:function c3(){},
c4:function c4(){},
bl:function bl(){},
dh:function dh(a,b){this.a=a
this.b=b},
ci:function ci(){},
d8:function d8(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function(a,b,c){return b.i("@<0>").t(c).i("ec<1,2>").a(H.hE(a,new H.a8(b.i("@<0>").t(c).i("a8<1,2>"))))},
fk:function(a,b,c){var t,s
if(P.dQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.G([],u.s)
C.a.k($.A,a)
try{P.hk(a,t)}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}s=P.eg(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
e9:function(a,b,c){var t,s
if(P.dQ(a))return b+"..."+c
t=new P.ae(b)
C.a.k($.A,a)
try{s=t
s.a=P.eg(s.a,a,", ")}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dQ:function(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
hk:function(a,b){var t,s,r,q,p,o,n,m=a.gC(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.n())return
t=H.f(m.gu())
C.a.k(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return H.m(b,-1)
s=b.pop()
if(0>=b.length)return H.m(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.n()){if(k<=4){C.a.k(b,H.f(q))
return}s=H.f(q)
if(0>=b.length)return H.m(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.n();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2;--k}C.a.k(b,"...")
return}}r=H.f(q)
s=H.f(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.m(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.k(b,n)
C.a.k(b,r)
C.a.k(b,s)},
cD:function(a){var t,s={}
if(P.dQ(a))return"{...}"
t=new P.ae("")
try{C.a.k($.A,a)
t.a+="{"
s.a=!0
a.A(0,new P.cE(s,t))
t.a+="}"}finally{if(0>=$.A.length)return H.m($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
j:function j(){},
aX:function aX(){},
cE:function cE(a,b){this.a=a
this.b=b},
as:function as(){},
bk:function bk(){},
at:function at(){},
b7:function b7(){},
aA:function aA(){},
eb:function(a,b,c){return new P.aU(a,b)},
h7:function(a){return a.bc()},
fI:function(a,b){return new P.d4(a,[],P.hC())},
fJ:function(a,b,c){var t,s=new P.ae(""),r=P.fI(s,b)
r.R(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
bA:function bA(){},
bD:function bD(){},
aU:function aU(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
cA:function cA(){},
bN:function bN(a){this.b=a},
d5:function d5(){},
d6:function d6(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.c=a
this.a=b
this.b=c},
e7:function(a,b){return H.fo(a,b,null)},
fi:function(a){if(a instanceof H.a4)return a.h(0)
return"Instance of '"+H.f(H.cI(a))+"'"},
fl:function(a,b,c){var t,s,r
if(a>4294967295)H.am(P.dC(a,0,4294967295,"length",null))
t=J.ea(H.G(new Array(a),c.i("o<0>")),c)
if(a!==0&&b!=null)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dB:function(a,b){var t,s=H.G([],b.i("o<0>"))
for(t=J.dx(a);t.n();)C.a.k(s,b.a(t.gu()))
return s},
eg:function(a,b,c){var t=J.dx(b)
if(!t.n())return a
if(c.length===0){do a+=H.f(t.gu())
while(t.n())}else{a+=H.f(t.gu())
for(;t.n();)a=a+c+H.f(t.gu())}return a},
ed:function(a,b,c,d){return new P.bW(a,b,c,d)},
fg:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
fh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bF:function(a){if(a>=10)return""+a
return"0"+a},
W:function(a){if(typeof a=="number"||H.dO(a)||null==a)return J.bv(a)
if(typeof a=="string")return JSON.stringify(a)
return P.fi(a)},
cs:function(a){return new P.aG(a)},
cr:function(a){return new P.N(!1,null,null,a)},
e3:function(a,b,c){return new P.N(!0,a,b,c)},
dD:function(a,b){return new P.b2(null,null,!0,a,b,"Value not in range")},
dC:function(a,b,c,d,e){return new P.b2(b,c,!0,a,d,"Invalid value")},
fj:function(a,b,c,d,e){var t=H.bm(e==null?J.cq(b):e)
return new P.bH(t,!0,a,c,"Index out of range")},
Z:function(a){return new P.c9(a)},
ej:function(a){return new P.c7(a)},
fy:function(a){return new P.c1(a)},
bC:function(a){return new P.bB(a)},
dY:function(a){H.hU(a)},
cF:function cF(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
aO:function aO(a){this.a=a},
cx:function cx(){},
cy:function cy(){},
i:function i(){},
aG:function aG(a){this.a=a},
c6:function c6(){},
bX:function bX(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bH:function bH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a){this.a=a},
c7:function c7(a){this.a=a},
c1:function c1(a){this.a=a},
bB:function bB(a){this.a=a},
b3:function b3(){},
bE:function bE(a){this.a=a},
cU:function cU(a){this.a=a},
l:function l(){},
v:function v(){},
h:function h(){},
cj:function cj(){},
ae:function ae(a){this.a=a},
eH:function(a){var t
if(u.I.b(a)){t=J.V(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.cl(a.data,a.height,a.width)},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(){},
h4:function(a,b,c,d){var t,s,r
H.h0(b)
u.j.a(d)
if(H.eF(b)){t=[c]
C.a.a0(t,d)
d=t}s=u.z
r=P.dB(J.f5(d,P.hN(),s),s)
return P.dK(P.e7(u.Z.a(a),r))},
dL:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.U(t)}return!1},
ex:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
dK:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.dO(a))return a
if(a instanceof P.Q)return a.a
if(H.eM(a))return a
if(u.Q.b(a))return a
if(a instanceof P.aN)return H.ad(a)
if(u.Z.b(a))return P.ew(a,"$dart_jsFunction",new P.dd())
return P.ew(a,"_$dart_jsObject",new P.de($.e1()))},
ew:function(a,b,c){var t=P.ex(a,b)
if(t==null){t=c.$1(a)
P.dL(a,b,t)}return t},
dJ:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.eM(a))return a
else if(a instanceof Object&&u.Q.b(a))return a
else if(a instanceof Date){t=H.bm(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.am(P.cr("DateTime is outside valid range: "+t))
H.eG(!1,"isUtc",u.y)
return new P.aN(t,!1)}else if(a.constructor===$.e1())return a.o
else return P.eC(a)},
eC:function(a){if(typeof a=="function")return P.dM(a,$.cp(),new P.dj())
if(a instanceof Array)return P.dM(a,$.e_(),new P.dk())
return P.dM(a,$.e_(),new P.dl())},
dM:function(a,b,c){var t=P.ex(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.dL(a,b,t)}return t},
h6:function(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.h5,a)
t[$.cp()]=a
a.$dart_jsFunction=t
return t},
h5:function(a,b){u.j.a(b)
return P.e7(u.Z.a(a),b)},
hw:function(a,b){if(typeof a=="function")return a
else return b.a(P.h6(a))},
dd:function dd(){},
de:function de(a){this.a=a},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
Q:function Q(a){this.a=a},
aT:function aT(a){this.a=a},
a7:function a7(a,b){this.a=a
this.$ti=b},
az:function az(){}},W={
dE:function(a,b,c,d,e){var t=W.hv(new W.cT(c),u.A),s=t!=null
if(s&&!0){u.D.a(t)
if(s)J.f1(a,b,t,!1)}return new W.cg(a,b,t,!1,e.i("cg<0>"))},
hv:function(a,b){var t=$.n
if(t===C.c)return a
return t.ag(a,b)},
c:function c(){},
bw:function bw(){},
bx:function bx(){},
a2:function a2(){},
a3:function a3(){},
ao:function ao(){},
H:function H(){},
aM:function aM(){},
cv:function cv(){},
cw:function cw(){},
b:function b(){},
a:function a(){},
p:function p(){},
bG:function bG(){},
a5:function a5(){},
P:function P(){},
aa:function aa(){},
k:function k(){},
c0:function c0(){},
b8:function b8(){},
ag:function ag(){},
K:function K(){},
dy:function dy(a,b){this.a=a
this.$ti=b},
b9:function b9(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cg:function cg(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cT:function cT(a){this.a=a},
cd:function cd(){}},X={
hW:function(a){var t,s,r,q,p,o,n,m
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
r=new X.c_().a4(P.eH(s.getImageData(0,0,a.width,a.height)),s)
q=[]
for(p=r.length,o=u.z,n=0;n<r.length;r.length===p||(0,H.bt)(r),++n){m=r[n]
m.ai(s)
q.push(P.cC(["code",m.a,"x",m.d,"y",m.e,"radius",m.b*8/2,"angle",m.c],o,o))}return C.l.aj(P.cC(["topcodes",q],u.O,u.bl),null)},
hK:function(a){X.fC(H.L(a))},
hQ:function(){$.e0().q(0,"topcodes_initVideoScanner",X.hR())
self.scanCanvas=P.hw(X.hS(),u.bQ)},
fC:function(a){var t=new X.ca(a)
t.aF(a)
return t},
c_:function c_(){this.c=this.b=this.a=null},
bz:function bz(a,b){this.a=a
this.b=b},
b6:function b6(a){var _=this
_.a=-1
_.b=9
_.e=_.d=_.c=0
_.f=a},
ca:function ca(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a}}
var w=[C,H,J,P,W,X]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dz.prototype={}
J.w.prototype={
w:function(a,b){return a===b},
gm:function(a){return H.b1(a)},
h:function(a){return"Instance of '"+H.f(H.cI(a))+"'"},
O:function(a,b){u.o.a(b)
throw H.d(P.ed(a,b.gam(),b.gao(),b.gan()))}}
J.bI.prototype={
h:function(a){return String(a)},
gm:function(a){return a?519018:218159},
$idm:1}
J.ap.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gm:function(a){return 0},
O:function(a,b){return this.ax(a,u.o.a(b))},
$iv:1}
J.a6.prototype={
gm:function(a){return 0},
h:function(a){return String(a)}}
J.bY.prototype={}
J.ax.prototype={}
J.I.prototype={
h:function(a){var t=a[$.cp()]
if(t==null)return this.az(a)
return"JavaScript function for "+H.f(J.bv(t))},
$iaQ:1}
J.o.prototype={
k:function(a,b){H.aB(a).c.a(b)
if(!!a.fixed$length)H.am(P.Z("add"))
a.push(b)},
a0:function(a,b){var t
H.aB(a).i("l<1>").a(b)
if(!!a.fixed$length)H.am(P.Z("addAll"))
if(Array.isArray(b)){this.aI(a,b)
return}for(t=J.dx(b);t.n();)a.push(t.gu())},
aI:function(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.d(P.bC(a))
for(s=0;s<t;++s)a.push(b[s])},
al:function(a,b,c){var t=H.aB(a)
return new H.R(a,t.t(c).i("1(2)").a(b),t.i("@<1>").t(c).i("R<1,2>"))},
L:function(a,b){if(b>=a.length)return H.m(a,b)
return a[b]},
gak:function(a){return a.length!==0},
h:function(a){return P.e9(a,"[","]")},
gC:function(a){return new J.by(a,a.length,H.aB(a).i("by<1>"))},
gm:function(a){return H.b1(a)},
gj:function(a){return a.length},
l:function(a,b){if(b>=a.length||b<0)throw H.d(H.aE(a,b))
return a[b]},
q:function(a,b,c){H.aB(a).c.a(c)
if(!!a.immutable$list)H.am(P.Z("indexed set"))
if(b>=a.length||!1)throw H.d(H.aE(a,b))
a[b]=c},
$il:1,
$iq:1}
J.cz.prototype={}
J.by.prototype={
gu:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.bt(r))
t=s.c
if(t>=q){s.sab(null)
return!1}s.sab(r[t]);++s.c
return!0},
sab:function(a){this.d=this.$ti.i("1?").a(a)}}
J.aq.prototype={
as:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.Z(""+a+".toInt()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
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
a3:function(a,b){var t
if(typeof b!="number")throw H.d(H.dS(b))
t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ae(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.ae(a,b)},
ae:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.Z("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
B:function(a,b){var t
if(a>0)t=this.aQ(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aQ:function(a,b){return b>31?0:a>>>b},
$iF:1,
$iaF:1}
J.aS.prototype={$ie:1}
J.bK.prototype={}
J.X.prototype={
aT:function(a,b){if(b<0)throw H.d(H.aE(a,b))
if(b>=a.length)H.am(H.aE(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.d(H.aE(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!="string")throw H.d(P.e3(b,null,null))
return a+b},
G:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.d(P.dD(b,null))
if(c>a.length)throw H.d(P.dD(c,null))
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
H.bO.prototype={
h:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.b_.prototype={
h:function(a){return"Null is not a valid value for the parameter '"+this.a+"' of type '"+H.hD(this.$ti.c).h(0)+"'"}}
H.aP.prototype={}
H.a9.prototype={
gC:function(a){var t=this
return new H.ar(t,t.gj(t),t.$ti.i("ar<a9.E>"))}}
H.ar.prototype={
gu:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=J.dU(r),p=q.gj(r)
if(s.b!==p)throw H.d(P.bC(r))
t=s.c
if(t>=p){s.sa5(null)
return!1}s.sa5(q.L(r,t));++s.c
return!0},
sa5:function(a){this.d=this.$ti.i("1?").a(a)}}
H.R.prototype={
gj:function(a){return J.cq(this.a)},
L:function(a,b){return this.b.$1(J.f2(this.a,b))}}
H.y.prototype={}
H.aw.prototype={
gm:function(a){var t=this._hashCode
if(t!=null)return t
t=664597*J.bu(this.a)&536870911
this._hashCode=t
return t},
h:function(a){return'Symbol("'+H.f(this.a)+'")'},
w:function(a,b){if(b==null)return!1
return b instanceof H.aw&&this.a==b.a},
$iaf:1}
H.aK.prototype={}
H.aJ.prototype={
gN:function(a){return this.gj(this)===0},
h:function(a){return P.cD(this)},
$iJ:1}
H.aL.prototype={
gj:function(a){return this.a},
aN:function(a){return this.b[H.L(a)]},
A:function(a,b){var t,s,r,q,p=H.bo(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.aN(q)))}}}
H.bJ.prototype={
gam:function(){var t=this.a
return t},
gao:function(){var t,s,r,q,p=this
if(p.c===1)return C.n
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.n
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.m(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gan:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.o
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.o
p=new H.a8(u.U)
for(o=0;o<s;++o){if(o>=t.length)return H.m(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.m(r,m)
p.q(0,new H.aw(n),r[m])}return new H.aK(p,u.h)},
$ie8:1}
H.cH.prototype={
$2:function(a,b){var t
H.L(a)
t=this.a
t.b=t.b+"$"+H.f(a)
C.a.k(this.b,a)
C.a.k(this.c,b);++t.a},
$S:8}
H.cL.prototype={
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
H.b0.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bL.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.f(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.f(s.a)+")"
return r+q+"' on '"+t+"' ("+H.f(s.a)+")"}}
H.c8.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cG.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bf.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iav:1}
H.a4.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.eQ(s==null?"unknown":s)+"'"},
$iaQ:1,
gba:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.c5.prototype={}
H.c2.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.eQ(t)+"'"}}
H.an.prototype={
w:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.an))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gm:function(a){var t,s=this.c
if(s==null)t=H.b1(this.a)
else t=typeof s!=="object"?J.bu(s):H.b1(s)
return(t^H.b1(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cI(t))+"'")}}
H.bZ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.cb.prototype={
h:function(a){return"Assertion failed: "+P.W(this.a)}}
H.d7.prototype={}
H.a8.prototype={
gj:function(a){return this.a},
gN:function(a){return this.a===0},
aU:function(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return this.aL(t,a)}else{s=this.aY(a)
return s}},
aY:function(a){var t=this.d
if(t==null)return!1
return this.a1(this.X(t,J.bu(a)&0x3ffffff),a)>=0},
l:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.H(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.H(q,b)
r=s==null?o:s.b
return r}else return p.aZ(b)},
aZ:function(a){var t,s,r=this.d
if(r==null)return null
t=this.X(r,J.bu(a)&0x3ffffff)
s=this.a1(t,a)
if(s<0)return null
return t[s].b},
q:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.bo(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.a7(t==null?n.b=n.Y():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.a7(s==null?n.c=n.Y():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.Y()
q=J.bu(b)&0x3ffffff
p=n.X(r,q)
if(p==null)n.a_(r,q,[n.Z(b,c)])
else{o=n.a1(p,b)
if(o>=0)p[o].b=c
else p.push(n.Z(b,c))}}},
A:function(a,b){var t,s,r=this
H.bo(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.bC(r))
t=t.c}},
a7:function(a,b,c){var t,s=this,r=H.bo(s)
r.c.a(b)
r.Q[1].a(c)
t=s.H(a,b)
if(t==null)s.a_(a,b,s.Z(b,c))
else t.b=c},
Z:function(a,b){var t=this,s=H.bo(t),r=new H.cB(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
a1:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.f0(a[s].a,b))return s
return-1},
h:function(a){return P.cD(this)},
H:function(a,b){return a[b]},
X:function(a,b){return a[b]},
a_:function(a,b,c){a[b]=c},
aM:function(a,b){delete a[b]},
aL:function(a,b){return this.H(a,b)!=null},
Y:function(){var t="<non-identifier-key>",s=Object.create(null)
this.a_(s,t,s)
this.aM(s,t)
return s},
$iec:1}
H.cB.prototype={}
H.aW.prototype={
gj:function(a){return this.a.a},
gC:function(a){var t=this.a,s=new H.bP(t,t.r,this.$ti.i("bP<1>"))
s.c=t.e
return s}}
H.bP.prototype={
gu:function(){return this.d},
n:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.bC(r))
t=s.c
if(t==null){s.sa6(null)
return!1}else{s.sa6(t.a)
s.c=t.c
return!0}},
sa6:function(a){this.d=this.$ti.i("1?").a(a)}}
H.dr.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.ds.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.dt.prototype={
$1:function(a){return this.a(H.L(a))},
$S:10}
H.ac.prototype={$iE:1}
H.au.prototype={
gj:function(a){return a.length},
$iC:1}
H.ab.prototype={
l:function(a,b){H.ah(b,a,a.length)
return a[b]},
$il:1,
$iq:1}
H.aY.prototype={$il:1,$iq:1}
H.bQ.prototype={
l:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bR.prototype={
l:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bS.prototype={
l:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bT.prototype={
l:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bU.prototype={
l:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.aZ.prototype={
gj:function(a){return a.length},
l:function(a,b){H.ah(b,a,a.length)
return a[b]},
$ifB:1}
H.bV.prototype={
gj:function(a){return a.length},
l:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.bb.prototype={}
H.bc.prototype={}
H.bd.prototype={}
H.be.prototype={}
H.D.prototype={
i:function(a){return H.cn(v.typeUniverse,this,a)},
t:function(a){return H.fZ(v.typeUniverse,this,a)}}
H.ch.prototype={}
H.ck.prototype={
h:function(a){return H.z(this.a,null)}}
H.cf.prototype={
h:function(a){return this.a}}
H.bh.prototype={}
P.cQ.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:4}
P.cP.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:11}
P.cR.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.cS.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.bg.prototype={
aG:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bs(new P.db(this,b),0),a)
else throw H.d(P.Z("`setTimeout()` not found."))},
aH:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bs(new P.da(this,a,Date.now(),b),0),a)
else throw H.d(P.Z("Periodic timer."))},
aS:function(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw H.d(P.Z("Canceling a timer."))},
$ib5:1}
P.db.prototype={
$0:function(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.da.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.b.aE(t,p)}r.c=q
s.d.$1(r)},
$C:"$0",
$R:0,
$S:2}
P.aH.prototype={
h:function(a){return H.f(this.a)},
$ii:1,
gS:function(){return this.b}}
P.ba.prototype={
b_:function(a){if((this.c&15)!==6)return!0
return this.b.b.a2(u.m.a(this.d),a.a,u.y,u.K)},
aX:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.R.b(t))return q.a(p.b3(t,a.a,a.b,s,r,u.l))
else return q.a(p.a2(u.v.a(t),a.a,s,r))}}
P.B.prototype={
ar:function(a,b,c){var t,s,r,q=this.$ti
q.t(c).i("1/(2)").a(a)
t=$.n
if(t!==C.c){c.i("@<0/>").t(q.c).i("1(2)").a(a)
if(b!=null)b=P.hm(b,t)}s=new P.B(t,c.i("B<0>"))
r=b==null?1:3
this.a8(new P.ba(s,r,a,b,q.i("@<1>").t(c).i("ba<1,2>")))
return s},
b6:function(a,b){return this.ar(a,null,b)},
a8:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.a8(a)
return}s.a=r
s.c=t.c}P.di(null,null,s.b,u.M.a(new P.cV(s,a)))}},
ad:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.ad(a)
return}n.a=t
n.c=o.c}m.a=n.J(a)
P.di(null,null,n.b,u.M.a(new P.cZ(m,n)))}},
I:function(){var t=u.F.a(this.c)
this.c=null
return this.J(t)},
J:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aK:function(a){var t,s,r,q=this
q.a=1
try{a.ar(new P.cW(q),new P.cX(q),u.P)}catch(r){t=H.U(r)
s=H.aj(r)
P.hX(new P.cY(q,t,s))}},
U:function(a,b){var t,s,r=this
u.l.a(b)
t=r.I()
s=P.ct(a,b)
r.a=8
r.c=s
P.ay(r,t)},
$iaR:1}
P.cV.prototype={
$0:function(){P.ay(this.a,this.b)},
$S:0}
P.cZ.prototype={
$0:function(){P.ay(this.b,this.a.a)},
$S:0}
P.cW.prototype={
$1:function(a){var t,s,r,q,p,o=this.a
o.a=0
try{r=o.$ti.c
a=r.a(r.a(a))
q=o.I()
o.a=4
o.c=a
P.ay(o,q)}catch(p){t=H.U(p)
s=H.aj(p)
o.U(t,s)}},
$S:4}
P.cX.prototype={
$2:function(a,b){this.a.U(a,u.l.a(b))},
$C:"$2",
$R:2,
$S:12}
P.cY.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:0}
P.d1.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.b2(u.bd.a(r.d),u.z)}catch(q){t=H.U(q)
s=H.aj(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.ct(t,s)
p.b=!0
return}if(m instanceof P.B&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.b6(new P.d2(o),u.z)
r.b=!1}},
$S:0}
P.d2.prototype={
$1:function(a){return this.a},
$S:13}
P.d0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.a2(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.U(m)
s=H.aj(m)
r=this.a
r.c=P.ct(t,s)
r.b=!0}},
$S:0}
P.d_.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eF(q.a.b_(t))&&q.a.e!=null){q.c=q.a.aX(t)
q.b=!1}}catch(p){s=H.U(p)
r=H.aj(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.ct(s,r)
m.b=!0}},
$S:0}
P.cc.prototype={}
P.b4.prototype={
gj:function(a){var t,s,r=this,q={},p=new P.B($.n,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.cJ(q,r))
u.Y.a(new P.cK(q,p))
W.dE(r.a,r.b,s,!1,t.c)
return p}}
P.cJ.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("~(1)")}}
P.cK.prototype={
$0:function(){var t=this.b,s=t.$ti,r=s.i("1/").a(this.a.a),q=t.I()
s.c.a(r)
t.a=4
t.c=r
P.ay(t,q)},
$S:0}
P.c3.prototype={}
P.c4.prototype={}
P.bl.prototype={$iek:1}
P.dh.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.bv(this.b)
throw t},
$S:0}
P.ci.prototype={
b4:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.c===$.n){a.$0()
return}P.ez(q,q,this,a,u.H)}catch(r){t=H.U(r)
s=H.aj(r)
P.dg(q,q,this,t,u.l.a(s))}},
b5:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.c===$.n){a.$1(b)
return}P.eA(q,q,this,a,b,u.H,c)}catch(r){t=H.U(r)
s=H.aj(r)
P.dg(q,q,this,t,u.l.a(s))}},
af:function(a){return new P.d8(this,u.M.a(a))},
ag:function(a,b){return new P.d9(this,b.i("~(0)").a(a),b)},
b2:function(a,b){b.i("0()").a(a)
if($.n===C.c)return a.$0()
return P.ez(null,null,this,a,b)},
a2:function(a,b,c,d){c.i("@<0>").t(d).i("1(2)").a(a)
d.a(b)
if($.n===C.c)return a.$1(b)
return P.eA(null,null,this,a,b,c,d)},
b3:function(a,b,c,d,e,f){d.i("@<0>").t(e).t(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.n===C.c)return a.$2(b,c)
return P.hn(null,null,this,a,b,c,d,e,f)}}
P.d8.prototype={
$0:function(){return this.a.b4(this.b)},
$S:0}
P.d9.prototype={
$1:function(a){var t=this.c
return this.a.b5(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.j.prototype={
gC:function(a){return new H.ar(a,this.gj(a),H.ak(a).i("ar<j.E>"))},
L:function(a,b){return this.l(a,b)},
gak:function(a){return this.gj(a)!==0},
al:function(a,b,c){var t=H.ak(a)
return new H.R(a,t.t(c).i("1(j.E)").a(b),t.i("@<j.E>").t(c).i("R<1,2>"))},
h:function(a){return P.e9(a,"[","]")}}
P.aX.prototype={}
P.cE.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.f(a)
s.a=t+": "
s.a+=H.f(b)},
$S:5}
P.as.prototype={
A:function(a,b){var t,s=H.bo(this)
s.i("~(1,2)").a(b)
for(s=new H.aW(this,s.i("aW<1>")),s=s.gC(s);s.n();){t=s.d
b.$2(t,this.l(0,t))}},
gj:function(a){return this.a},
gN:function(a){return this.a===0},
h:function(a){return P.cD(this)},
$iJ:1}
P.bk.prototype={}
P.at.prototype={
A:function(a,b){this.a.A(0,this.$ti.i("~(1,2)").a(b))},
gN:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
h:function(a){return P.cD(this.a)},
$iJ:1}
P.b7.prototype={}
P.aA.prototype={}
P.bA.prototype={}
P.bD.prototype={}
P.aU.prototype={
h:function(a){var t=P.W(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.bM.prototype={
h:function(a){return"Cyclic error in JSON stringify"}}
P.cA.prototype={
aj:function(a,b){var t
u.cZ.a(b)
t=P.fJ(a,this.gaW().b,null)
return t},
gaW:function(){return C.C}}
P.bN.prototype={}
P.d5.prototype={
au:function(a){var t,s,r,q,p,o,n,m=a.length
for(t=J.hG(a),s=this.c,r=0,q=0;q<m;++q){p=t.aa(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(C.d.aa(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(C.d.aT(a,o)&64512)===55296)}else o=!1
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
s.a+=H.t(p)}}if(r===0)s.a+=H.f(a)
else if(r<m)s.a+=t.G(a,r,m)},
T:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.d(new P.bM(a,null))}C.a.k(t,a)},
R:function(a){var t,s,r,q,p=this
if(p.at(a))return
p.T(a)
try{t=p.b.$1(a)
if(!p.at(t)){r=P.eb(a,null,p.gac())
throw H.d(r)}r=p.a
if(0>=r.length)return H.m(r,-1)
r.pop()}catch(q){s=H.U(q)
r=P.eb(a,s,p.gac())
throw H.d(r)}},
at:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.h.h(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.au(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.T(a)
r.b8(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.T(a)
s=r.b9(a)
t=r.a
if(0>=t.length)return H.m(t,-1)
t.pop()
return s}else return!1},
b8:function(a){var t,s,r=this.c
r.a+="["
t=J.dU(a)
if(t.gak(a)){this.R(t.l(a,0))
for(s=1;s<t.gj(a);++s){r.a+=","
this.R(t.l(a,s))}}r.a+="]"},
b9:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gN(a)){n.c.a+="{}"
return!0}t=a.gj(a)*2
s=P.fl(t,null,u.X)
r=m.a=0
m.b=!0
a.A(0,new P.d6(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.au(H.L(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.m(s,o)
n.R(s[o])}q.a+="}"
return!0}}
P.d6.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.q(t,s.a++,a)
C.a.q(t,s.a++,b)},
$S:5}
P.d4.prototype={
gac:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.cF.prototype={
$2:function(a,b){var t,s,r
u.u.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.f(a.a)
t.a=r+": "
t.a+=P.W(b)
s.a=", "},
$S:14}
P.aN.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aN&&this.a===b.a&&!0},
gm:function(a){var t=this.a
return(t^C.b.B(t,30))&1073741823},
h:function(a){var t=this,s=P.fg(H.fv(t)),r=P.bF(H.ft(t)),q=P.bF(H.fp(t)),p=P.bF(H.fq(t)),o=P.bF(H.fs(t)),n=P.bF(H.fu(t)),m=P.fh(H.fr(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.aO.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aO&&this.a===b.a},
gm:function(a){return C.b.gm(this.a)},
h:function(a){var t,s,r,q=new P.cy(),p=this.a
if(p<0)return"-"+new P.aO(0-p).h(0)
t=q.$1(C.b.E(p,6e7)%60)
s=q.$1(C.b.E(p,1e6)%60)
r=new P.cx().$1(p%1e6)
return""+C.b.E(p,36e8)+":"+H.f(t)+":"+H.f(s)+"."+H.f(r)}}
P.cx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:6}
P.cy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:6}
P.i.prototype={
gS:function(){return H.aj(this.$thrownJsError)}}
P.aG.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.W(t)
return"Assertion failed"}}
P.c6.prototype={}
P.bX.prototype={
h:function(a){return"Throw of null."}}
P.N.prototype={
gW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gV:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+H.f(o),m=r.gW()+p+n
if(!r.a)return m
t=r.gV()
s=P.W(r.b)
return m+t+": "+s}}
P.b2.prototype={
gW:function(){return"RangeError"},
gV:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.f(r):""
else if(r==null)t=": Not greater than or equal to "+H.f(s)
else if(r>s)t=": Not in inclusive range "+H.f(s)+".."+H.f(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.f(s)
return t}}
P.bH.prototype={
gW:function(){return"RangeError"},
gV:function(){var t,s=H.bm(this.b)
if(typeof s!=="number")return s.bb()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.bW.prototype={
h:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.ae("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.W(o)
k.a=", "}l.d.A(0,new P.cF(k,j))
n=P.W(l.a)
m=j.h(0)
s="NoSuchMethodError: method not found: '"+H.f(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return s}}
P.c9.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.c7.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.c1.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bB.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.W(t)+"."}}
P.b3.prototype={
h:function(a){return"Stack Overflow"},
gS:function(){return null},
$ii:1}
P.bE.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cU.prototype={
h:function(a){return"Exception: "+this.a}}
P.l.prototype={
gj:function(a){var t,s=this.gC(this)
for(t=0;s.n();)++t
return t},
h:function(a){return P.fk(this,"(",")")}}
P.v.prototype={
gm:function(a){return P.h.prototype.gm.call(C.A,this)},
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
w:function(a,b){return this===b},
gm:function(a){return H.b1(this)},
h:function(a){return"Instance of '"+H.f(H.cI(this))+"'"},
O:function(a,b){u.o.a(b)
throw H.d(P.ed(this,b.gam(),b.gao(),b.gan()))},
toString:function(){return this.h(this)}}
P.cj.prototype={
h:function(a){return""},
$iav:1}
P.ae.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ifz:1}
W.c.prototype={}
W.bw.prototype={
h:function(a){return String(a)}}
W.bx.prototype={
h:function(a){return String(a)}}
W.a2.prototype={$ia2:1}
W.a3.prototype={
sM:function(a,b){a.height=b},
sP:function(a,b){a.width=b},
av:function(a,b){return a.getContext(b)},
$ia3:1}
W.ao.prototype={
sF:function(a,b){a.fillStyle=b},
$iao:1}
W.H.prototype={
gj:function(a){return a.length}}
W.aM.prototype={
gj:function(a){return a.length}}
W.cv.prototype={}
W.cw.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.p.prototype={
aJ:function(a,b,c,d){return a.addEventListener(b,H.bs(u.D.a(c),1),!1)},
$ip:1}
W.bG.prototype={
gj:function(a){return a.length}}
W.a5.prototype={
gah:function(a){return a.data},
gM:function(a){return a.height},
gP:function(a){return a.width},
$ia5:1}
W.P.prototype={$iP:1}
W.aa.prototype={}
W.k.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.ay(a):t},
$ik:1}
W.c0.prototype={
gj:function(a){return a.length}}
W.b8.prototype={$ib8:1}
W.ag.prototype={$iag:1}
W.K.prototype={$iK:1}
W.dy.prototype={}
W.b9.prototype={}
W.ce.prototype={}
W.cg.prototype={}
W.cT.prototype={
$1:function(a){return this.a.$1(u.A.a(a))},
$S:15}
W.cd.prototype={}
P.cl.prototype={$ia5:1,
gah:function(a){return this.a},
gM:function(a){return this.b},
gP:function(a){return this.c}}
P.aV.prototype={$iaV:1}
P.dd.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.h4,a,!1)
P.dL(t,$.cp(),a)
return t},
$S:1}
P.de.prototype={
$1:function(a){return new this.a(a)},
$S:1}
P.dj.prototype={
$1:function(a){return new P.aT(a)},
$S:16}
P.dk.prototype={
$1:function(a){return new P.a7(a,u.J)},
$S:17}
P.dl.prototype={
$1:function(a){return new P.Q(a)},
$S:18}
P.Q.prototype={
l:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cr("property is not a String or num"))
return P.dJ(this.a[b])},
q:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.d(P.cr("property is not a String or num"))
this.a[b]=P.dK(c)},
w:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a},
h:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.U(s)
t=this.aC(0)
return t}},
aR:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.aB(b)
t=P.dB(new H.R(b,t.i("@(1)").a(P.hO()),t.i("R<1,@>")),u.z)}return P.dJ(s[a].apply(s,t))},
gm:function(a){return 0}}
P.aT.prototype={}
P.a7.prototype={
a9:function(a){var t=this,s=a<0||a>=t.gj(t)
if(s)throw H.d(P.dC(a,0,t.gj(t),null,null))},
l:function(a,b){if(H.df(b))this.a9(b)
return this.$ti.c.a(this.aA(0,b))},
q:function(a,b,c){if(H.df(b))this.a9(b)
this.aD(0,b,c)},
gj:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.d(P.fy("Bad JsArray length"))},
$il:1,
$iq:1}
P.az.prototype={
q:function(a,b,c){return this.aB(0,b,c)}}
X.c_.prototype={
a4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
j.a=a
j.b=J.f4(a)
j.c=J.f3(j.a)
t=j.b7()
s=H.G([],u.q)
for(r=t.length,q=u.V,p=0;p<t.length;t.length===r||(0,H.bt)(t),++p){o=t[p]
n=o.a
m=o.b
if(!j.b0(s,n,m)){l=new X.b6(H.G([0,0,0,0,0,0,0,0],q))
l.aV(0,j,n,m)
if(l.a>0){n=l.d
m=l.b*8/2
if(n>m){k=j.b
if(typeof k!=="number")return k.D()
if(n<k-m){n=l.e
if(n>m){k=j.c
if(typeof k!=="number")return k.D()
m=n<k-m
n=m}else n=!1}else n=!1}else n=!1
if(n)C.a.k(s,l)}}}return s},
b0:function(a,b,c){var t,s,r,q,p,o
u.b9.a(a)
for(t=a.length,s=0;s<t;++s){r=a[s]
q=r.d-b
p=r.e-c
o=r.b*4
if(q*q+p*p<=o*o)return!0}return!1},
b7:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=H.G([],u.k),g=i,f=g,e=f,d=e,c=d,b=c,a=128,a0=0
while(!0){t=j.c
if(typeof t!=="number")return H.M(t)
if(!(a0<t))break
t=C.b.a3(a0,2)===0
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
C.a.k(h,new X.bz(C.b.a3(g,r),a0))}q=o
p=1
o=0
n=2}break}s+=t?1:-1;++m}++a0}return h},
aw:function(a,b){var t,s,r,q,p,o,n,m,l,k=this
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
X.bz.prototype={}
X.b6.prototype={
aV:function(a,b,c,d){var t,s,r,q,p,o=this,n=b.K(c,d,0,-1),m=b.K(c,d,0,1),l=b.K(c,d,-1,0),k=b.K(c,d,1,0)
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
p=o.ap(b,o.b,q)
if(p>t){s=q
t=p}}if(t>0){o.ap(b,o.b,s)
o.a=o.b1(o.a,s)}return o.a},
ap:function(a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.a=-1
for(t=a.f,s=null,r=0,q=null,p=null,o=0,n=0,m=0;m<13;++m){l=0.483321946706122*m+a2
k=Math.cos(l)
j=Math.sin(l)
for(i=0;i<8;++i){s=(i-3.5)*a1
q=C.b.as(C.h.aq(a.d+k*s))
p=C.b.as(C.h.aq(a.e+j*s))
C.a.q(t,i,a0.aw(q,p))}l=t[1]
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
b1:function(a,b){var t,s
this.c=0
for(t=a,s=1;s<=13;++s){a=(a<<1&8191|C.b.B(a,12))>>>0
if(a<t){this.c=s*0.483321946706122
t=a}}this.c+=b-0.241660973353061
return t},
ai:function(a){var t,s,r=this,q="white",p=r.a,o=r.b,n=8*o*0.5,m=r.c;(a&&C.e).sF(a,q)
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
X.ca.prototype={
aF:function(a){var t,s,r,q,p,o=this
o.e=new X.c_()
t=o.a
s="#"+H.f(t)
r=document
q=u.B.a(r.querySelector(s))
o.b=u.t.a((q&&C.f).av(q,"2d"))
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
p=r.a(new X.cN(o))
u.Y.a(null)
s=s.c
W.dE(t,"play",p,!1,s)
W.dE(o.c,"pause",r.a(new X.cO(o)),!1,s)},
aP:function(a){var t,s,r,q,p,o,n,m,l=this
u.ao.a(a)
l.b.save()
l.b.translate(l.c.videoWidth,0)
l.b.scale(-1,1)
l.b.drawImage(l.c,0,0)
l.b.restore()
t=l.b
s=l.c
r=P.eH(t.getImageData(0,0,s.videoWidth,s.videoHeight))
q=l.e.a4(r,l.b)
p=[]
for(t=q.length,s=u.z,o=0;o<q.length;q.length===t||(0,H.bt)(q),++o){n=q[o]
n.ai(l.b)
p.push(P.cC(["code",n.a,"x",n.d,"y",n.e,"radius",n.b*8/2,"angle",n.c],s,s))}t=l.a
m=P.cC(["canvasId",t,"topcodes",p],u.O,u._)
$.e0().l(0,"TopCodes").aR("_relayFrameData",H.G([t,C.l.aj(m,null)],u.i))}}
X.cN.prototype={
$1:function(a){var t=this.a
P.dY("video width: "+H.f(t.c.videoWidth))
P.dY("video height: "+H.f(t.c.videoHeight))
t.d=P.fA(C.y,t.gaO())},
$S:7}
X.cO.prototype={
$1:function(a){var t,s
P.dY("pause")
t=this.a
s=t.d
if(s!=null)s.aS()
t.d=null},
$S:7};(function aliases(){var t=J.w.prototype
t.ay=t.h
t.ax=t.O
t=J.a6.prototype
t.az=t.h
t=P.h.prototype
t.aC=t.h
t=P.Q.prototype
t.aA=t.l
t.aB=t.q
t=P.az.prototype
t.aD=t.q})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(P,"hy","fE",3)
t(P,"hz","fF",3)
t(P,"hA","fG",3)
s(P,"eE","hq",0)
t(P,"hC","h7",1)
t(P,"hO","dK",20)
t(P,"hN","dJ",21)
t(X,"hS","hW",22)
t(X,"hR","hK",23)
r(X.ca.prototype,"gaO","aP",19)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.dz,J.w,J.by,P.i,P.l,H.ar,H.y,H.aw,P.at,H.aJ,H.bJ,H.a4,H.cL,H.cG,H.bf,H.d7,P.as,H.cB,H.bP,H.D,H.ch,H.ck,P.bg,P.aH,P.ba,P.B,P.cc,P.b4,P.c3,P.c4,P.bl,P.j,P.bk,P.bA,P.d5,P.aN,P.aO,P.b3,P.cU,P.v,P.cj,P.ae,W.cv,W.dy,P.cl,P.Q,X.c_,X.bz,X.b6,X.ca])
r(J.w,[J.bI,J.ap,J.a6,J.o,J.aq,J.X,H.ac,W.p,W.a2,W.ao,W.cd,W.cw,W.a,W.a5,P.aV])
r(J.a6,[J.bY,J.ax,J.I])
s(J.cz,J.o)
r(J.aq,[J.aS,J.bK])
r(P.i,[H.bO,H.b_,P.c6,H.bL,H.c8,H.bZ,P.aG,H.cf,P.aU,P.bX,P.N,P.bW,P.c9,P.c7,P.c1,P.bB,P.bE])
s(H.aP,P.l)
r(H.aP,[H.a9,H.aW])
s(H.R,H.a9)
s(P.aA,P.at)
s(P.b7,P.aA)
s(H.aK,P.b7)
s(H.aL,H.aJ)
r(H.a4,[H.cH,H.c5,H.dr,H.ds,H.dt,P.cQ,P.cP,P.cR,P.cS,P.db,P.da,P.cV,P.cZ,P.cW,P.cX,P.cY,P.d1,P.d2,P.d0,P.d_,P.cJ,P.cK,P.dh,P.d8,P.d9,P.cE,P.d6,P.cF,P.cx,P.cy,W.cT,P.dd,P.de,P.dj,P.dk,P.dl,X.cN,X.cO])
s(H.b0,P.c6)
r(H.c5,[H.c2,H.an])
s(H.cb,P.aG)
s(P.aX,P.as)
s(H.a8,P.aX)
s(H.au,H.ac)
r(H.au,[H.bb,H.bd])
s(H.bc,H.bb)
s(H.ab,H.bc)
s(H.be,H.bd)
s(H.aY,H.be)
r(H.aY,[H.bQ,H.bR,H.bS,H.bT,H.bU,H.aZ,H.bV])
s(H.bh,H.cf)
s(P.ci,P.bl)
s(P.bD,P.c4)
s(P.bM,P.aU)
s(P.cA,P.bA)
s(P.bN,P.bD)
s(P.d4,P.d5)
r(P.N,[P.b2,P.bH])
r(W.p,[W.k,W.ag,W.K])
r(W.k,[W.b,W.H])
s(W.c,W.b)
r(W.c,[W.bw,W.bx,W.a3,W.bG,W.P,W.aa,W.c0])
s(W.aM,W.cd)
s(W.b8,W.aa)
s(W.b9,P.b4)
s(W.ce,W.b9)
s(W.cg,P.c3)
r(P.Q,[P.aT,P.az])
s(P.a7,P.az)
t(H.bb,P.j)
t(H.bc,H.y)
t(H.bd,P.j)
t(H.be,H.y)
t(P.aA,P.bk)
t(W.cd,W.cv)
t(P.az,P.j)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",F:"double",aF:"num",r:"String",dm:"bool",v:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","@(@)","v()","~(~())","v(@)","~(h?,h?)","r(e)","v(a*)","~(r,@)","@(@,r)","@(r)","v(~())","v(h,av)","B<@>(@)","~(af,@)","~(a)","aT(@)","a7<@>(@)","Q(@)","~(b5*)","h?(h?)","h?(@)","r*(P*)","~(r*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.fY(v.typeUniverse,JSON.parse('{"bY":"a6","ax":"a6","I":"a6","i1":"a","i8":"a","i0":"b","ia":"b","ie":"b","i3":"c","ib":"k","i7":"k","i6":"K","i4":"H","ig":"H","i9":"a2","i2":"aa","id":"ab","ic":"ac","bI":{"dm":[]},"ap":{"v":[]},"o":{"q":["1"],"l":["1"]},"cz":{"o":["1"],"q":["1"],"l":["1"]},"aq":{"F":[],"aF":[]},"aS":{"F":[],"e":[],"aF":[]},"bK":{"F":[],"aF":[]},"X":{"r":[]},"bO":{"i":[]},"b_":{"i":[]},"aP":{"l":["1"]},"a9":{"l":["1"]},"R":{"a9":["2"],"l":["2"],"a9.E":"2"},"aw":{"af":[]},"aK":{"b7":["1","2"],"aA":["1","2"],"at":["1","2"],"bk":["1","2"],"J":["1","2"]},"aJ":{"J":["1","2"]},"aL":{"aJ":["1","2"],"J":["1","2"]},"bJ":{"e8":[]},"b0":{"i":[]},"bL":{"i":[]},"c8":{"i":[]},"bf":{"av":[]},"a4":{"aQ":[]},"c5":{"aQ":[]},"c2":{"aQ":[]},"an":{"aQ":[]},"bZ":{"i":[]},"cb":{"i":[]},"a8":{"as":["1","2"],"ec":["1","2"],"J":["1","2"]},"aW":{"l":["1"]},"ac":{"E":[]},"au":{"C":["1"],"E":[]},"ab":{"j":["F"],"C":["F"],"q":["F"],"E":[],"l":["F"],"y":["F"],"j.E":"F"},"aY":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"]},"bQ":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"bR":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"bS":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"bT":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"bU":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"aZ":{"j":["e"],"fB":[],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"bV":{"j":["e"],"C":["e"],"q":["e"],"E":[],"l":["e"],"y":["e"],"j.E":"e"},"cf":{"i":[]},"bh":{"i":[]},"B":{"aR":["1"]},"bg":{"b5":[]},"aH":{"i":[]},"bl":{"ek":[]},"ci":{"bl":[],"ek":[]},"aX":{"as":["1","2"],"J":["1","2"]},"as":{"J":["1","2"]},"at":{"J":["1","2"]},"b7":{"aA":["1","2"],"at":["1","2"],"bk":["1","2"],"J":["1","2"]},"aU":{"i":[]},"bM":{"i":[]},"bN":{"bD":["h?","r"]},"F":{"aF":[]},"e":{"aF":[]},"q":{"l":["1"]},"aG":{"i":[]},"c6":{"i":[]},"bX":{"i":[]},"N":{"i":[]},"b2":{"i":[]},"bH":{"i":[]},"bW":{"i":[]},"c9":{"i":[]},"c7":{"i":[]},"c1":{"i":[]},"bB":{"i":[]},"b3":{"i":[]},"bE":{"i":[]},"cj":{"av":[]},"ae":{"fz":[]},"c":{"b":[],"k":[],"p":[]},"b":{"k":[],"p":[]},"P":{"b":[],"k":[],"p":[]},"k":{"p":[]},"bw":{"b":[],"k":[],"p":[]},"bx":{"b":[],"k":[],"p":[]},"a3":{"b":[],"k":[],"p":[]},"H":{"k":[],"p":[]},"bG":{"b":[],"k":[],"p":[]},"aa":{"b":[],"k":[],"p":[]},"c0":{"b":[],"k":[],"p":[]},"b8":{"b":[],"k":[],"p":[]},"ag":{"p":[]},"K":{"p":[]},"b9":{"b4":["1"]},"ce":{"b9":["1"],"b4":["1"]},"cl":{"a5":[]},"a7":{"j":["1"],"q":["1"],"l":["1"],"j.E":"1"}}'))
H.fX(v.typeUniverse,JSON.parse('{"aP":1,"au":1,"c3":1,"c4":2,"aX":2,"bA":2,"az":1}'))
0
var u=(function rtii(){var t=H.dp
return{n:t("aH"),x:t("a2"),h:t("aK<af,@>"),C:t("i"),A:t("a"),Z:t("aQ"),d:t("aR<@>"),I:t("a5"),o:t("e8"),N:t("l<@>"),s:t("o<r>"),b:t("o<@>"),k:t("o<bz*>"),i:t("o<r*>"),q:t("o<b6*>"),V:t("o<e*>"),T:t("ap"),g:t("I"),p:t("C<@>"),J:t("a7<@>"),U:t("a8<af,@>"),w:t("aV"),j:t("q<@>"),f:t("J<@,@>"),W:t("k"),P:t("v"),K:t("h"),l:t("av"),r:t("r"),u:t("af"),E:t("b5"),Q:t("E"),cr:t("ax"),cg:t("ag"),bj:t("K"),L:t("ce<a*>"),c:t("B<@>"),a:t("B<e>"),y:t("dm"),m:t("dm(h)"),cb:t("F"),z:t("@"),bd:t("@()"),v:t("@(h)"),R:t("@(h,av)"),S:t("e"),B:t("a3*"),t:t("ao*"),bL:t("P*"),bl:t("q<@>*"),b9:t("q<b6*>*"),G:t("0&*"),_:t("h*"),O:t("r*"),ao:t("b5*"),bQ:t("r*(P*)*"),bc:t("aR<v>?"),X:t("h?"),F:t("ba<@,@>?"),D:t("@(a)?"),cZ:t("h?(@)?"),Y:t("~()?"),cY:t("aF"),H:t("~"),M:t("~()"),e:t("~(b5)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.f=W.a3.prototype
C.e=W.ao.prototype
C.z=J.w.prototype
C.a=J.o.prototype
C.b=J.aS.prototype
C.A=J.ap.prototype
C.h=J.aq.prototype
C.d=J.X.prototype
C.B=J.I.prototype
C.p=J.bY.prototype
C.i=J.ax.prototype
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

C.l=new P.cA()
C.m=new H.d7()
C.c=new P.ci()
C.x=new P.cj()
C.y=new P.aO(6e4)
C.C=new P.bN(null)
C.n=H.G(t([]),u.b)
C.D=H.G(t([]),H.dp("o<af*>"))
C.o=new H.aL(0,{},C.D,H.dp("aL<af*,@>"))
C.E=new H.aw("call")})();(function staticFields(){$.d3=null
$.O=0
$.aI=null
$.e4=null
$.eJ=null
$.eD=null
$.eO=null
$.dn=null
$.du=null
$.dW=null
$.aC=null
$.bp=null
$.bq=null
$.dP=!1
$.n=C.c
$.A=H.G([],H.dp("o<h>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"i5","cp",function(){return H.eI("_$dart_dartClosure")})
t($,"ih","eR",function(){return H.S(H.cM({
toString:function(){return"$receiver$"}}))})
t($,"ii","eS",function(){return H.S(H.cM({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"ij","eT",function(){return H.S(H.cM(null))})
t($,"ik","eU",function(){return H.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"io","eX",function(){return H.S(H.cM(void 0))})
t($,"ip","eY",function(){return H.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"im","eW",function(){return H.S(H.ei(null))})
t($,"il","eV",function(){return H.S(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"ir","f_",function(){return H.S(H.ei(void 0))})
t($,"iq","eZ",function(){return H.S(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"is","dZ",function(){return P.fD()})
t($,"iF","e0",function(){return P.eC(self)})
t($,"it","e_",function(){return H.eI("_$dart_dartObject")})
t($,"iG","e1",function(){return function DartObject(a){this.o=a}})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,WebGLRenderingContext:J.w,WebGL2RenderingContext:J.w,SQLError:J.w,DataView:H.ac,ArrayBufferView:H.ac,Float32Array:H.ab,Float64Array:H.ab,Int16Array:H.bQ,Int32Array:H.bR,Int8Array:H.bS,Uint16Array:H.bT,Uint32Array:H.bU,Uint8ClampedArray:H.aZ,CanvasPixelArray:H.aZ,Uint8Array:H.bV,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bw,HTMLAreaElement:W.bx,Blob:W.a2,File:W.a2,HTMLCanvasElement:W.a3,CanvasRenderingContext2D:W.ao,CDATASection:W.H,CharacterData:W.H,Comment:W.H,ProcessingInstruction:W.H,Text:W.H,CSSStyleDeclaration:W.aM,MSStyleCSSProperties:W.aM,CSS2Properties:W.aM,DOMException:W.cw,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,EventTarget:W.p,HTMLFormElement:W.bG,ImageData:W.a5,HTMLImageElement:W.P,HTMLAudioElement:W.aa,HTMLMediaElement:W.aa,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,Attr:W.k,DocumentType:W.k,Node:W.k,HTMLSelectElement:W.c0,HTMLVideoElement:W.b8,Window:W.ag,DOMWindow:W.ag,DedicatedWorkerGlobalScope:W.K,ServiceWorkerGlobalScope:W.K,SharedWorkerGlobalScope:W.K,WorkerGlobalScope:W.K,IDBKeyRange:P.aV})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:true,File:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,ImageData:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,HTMLVideoElement:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,IDBKeyRange:true})
H.au.$nativeSuperclassTag="ArrayBufferView"
H.bb.$nativeSuperclassTag="ArrayBufferView"
H.bc.$nativeSuperclassTag="ArrayBufferView"
H.ab.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.aY.$nativeSuperclassTag="ArrayBufferView"})()
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
var t=X.hQ
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
