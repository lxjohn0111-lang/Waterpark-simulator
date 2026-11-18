(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=`attached`,u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,O=1018,k=1020,A=35902,j=35899,ee=1021,M=1022,te=1023,N=1026,ne=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,P=33778,ue=33779,de=35840,fe=35841,pe=35842,me=35843,he=36196,ge=37492,_e=37496,ve=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,ke=37815,Ae=37816,je=37817,Me=37818,Ne=37819,Pe=37820,F=37821,Fe=36492,Ie=36494,Le=36495,I=36283,Re=36284,ze=36285,Be=36286,Ve=2300,He=2301,Ue=2302,We=2303,Ge=2400,Ke=2401,qe=2402,Je=3200,Ye=`srgb`,Xe=`srgb-linear`,Ze=`linear`,Qe=`srgb`,$e=7680,et=35044,tt=35048,nt=2e3;function rt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function it(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(){let e=at(`canvas`);return e.style.display=`block`,e}var st={};function ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ut(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function dt(...e){let t=e.join(` `);t in st||(st[t]=!0,L(...e))}function ft(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var pt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},mt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ht=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),gt=1234567,_t=Math.PI/180,vt=180/Math.PI;function yt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ht[e&255]+ht[e>>8&255]+ht[e>>16&255]+ht[e>>24&255]+`-`+ht[t&255]+ht[t>>8&255]+`-`+ht[t>>16&15|64]+ht[t>>24&255]+`-`+ht[n&63|128]+ht[n>>8&255]+`-`+ht[n>>16&255]+ht[n>>24&255]+ht[r&255]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]).toLowerCase()}function bt(e,t,n){return Math.max(t,Math.min(n,e))}function xt(e,t){return(e%t+t)%t}function St(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ct(e,t,n){return e===t?0:(n-e)/(t-e)}function wt(e,t,n){return(1-n)*e+n*t}function Tt(e,t,n,r){return wt(e,t,1-Math.exp(-n*r))}function Et(e,t=1){return t-Math.abs(xt(e,t*2)-t)}function Dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function kt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function At(e,t){return e+Math.random()*(t-e)}function jt(e){return e*(.5-Math.random())}function Mt(e){e!==void 0&&(gt=e);let t=gt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nt(e){return e*_t}function Pt(e){return e*vt}function Ft(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function It(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Lt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Rt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function zt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bt(e,t){if(t.constructor===Float32Array)return e;let n=zt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Vt(e,t){if(t.constructor===Float32Array)return e;let n=zt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Ht={DEG2RAD:_t,RAD2DEG:vt,generateUUID:yt,clamp:bt,euclideanModulo:xt,mapLinear:St,inverseLerp:Ct,lerp:wt,damp:Tt,pingpong:Et,smoothstep:Dt,smootherstep:Ot,randInt:kt,randFloat:At,randFloatSpread:jt,seededRandom:Mt,degToRad:Nt,radToDeg:Pt,isPowerOfTwo:Ft,ceilPowerOfTwo:It,floorPowerOfTwo:Lt,setQuaternionFromProperEuler:Rt,normalize:Vt,denormalize:Bt};o=Symbol.iterator;var R=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=R,e.prototype.isVector2=!0;var Ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var z=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wt.copy(this).projectOnVector(e),this.sub(Wt)}reflect(e){return this.sub(Wt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=z,t.prototype.isVector3=!0;var Wt=new z,Gt=new Ut,Kt=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return dt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(qt.makeScale(e,t)),this}rotate(e){return dt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(qt.makeRotation(-e)),this}translate(e,t){return dt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(qt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=Kt,n.prototype.isMatrix3=!0;var qt=new Kt,Jt=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yt=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xt(){let e={enabled:!0,workingColorSpace:Xe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Qt(e.r),e.g=Qt(e.g),e.b=Qt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=$t(e.r),e.g=$t(e.g),e.b=$t(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xe]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Jt,fromXYZ:Yt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Jt,fromXYZ:Yt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),e}var Zt=Xt();function Qt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function $t(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var en,tn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{en===void 0&&(en=at(`canvas`)),en.width=e.width,en.height=e.height;let t=en.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=en}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=at(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Qt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Qt(t[e]/255)*255):t[e]=Qt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},nn=0,rn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=yt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(an(r[t].image)):e.push(an(r[t]))}else e=an(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function an(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?tn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var on=0,sn=new z,cn=class e extends mt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=te,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=yt(),this.name=``,this.source=new rn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sn).x}get height(){return this.source.getSize(sn).y}get depth(){return this.source.getSize(sn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null,cn.DEFAULT_MAPPING=300,cn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var ln=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=ln,r.prototype.isVector4=!0;var un=class extends mt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new cn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new rn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},dn=class extends un{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fn=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},pn=class extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},B=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/mn.setFromMatrixColumn(e,0).length(),i=1/mn.setFromMatrixColumn(e,1).length(),a=1/mn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gn,e,_n)}lookAt(e,t,n){let r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),vn.crossVectors(n,bn),vn.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),vn.crossVectors(n,bn)),vn.normalize(),yn.crossVectors(bn,vn),r[0]=vn.x,r[4]=yn.x,r[8]=bn.x,r[1]=vn.y,r[5]=yn.y,r[9]=bn.y,r[2]=vn.z,r[6]=yn.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],N=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=mn.set(r[0],r[1],r[2]).length(),o=mn.set(r[4],r[5],r[6]).length(),s=mn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),hn.copy(this);let c=1/a,l=1/o,u=1/s;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=l,hn.elements[5]*=l,hn.elements[6]*=l,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=B,i.prototype.isMatrix4=!0;var mn=new z,hn=new B,gn=new z(0,0,0),_n=new z(1,1,1),vn=new z,yn=new z,bn=new z,xn=new B,Sn=new Ut,Cn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sn.setFromEuler(this),this.setFromQuaternion(Sn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER=`XYZ`;var wn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Tn=0,En=new z,Dn=new Ut,On=new B,kn=new z,An=new z,jn=new z,Mn=new Ut,Nn=new z(1,0,0),Pn=new z(0,1,0),Fn=new z(0,0,1),In={type:`added`},Ln={type:`removed`},Rn={type:`childadded`,child:null},zn={type:`childremoved`,child:null},Bn=class e extends mt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tn++}),this.uuid=yt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new Cn,r=new Ut,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new B},normalMatrix:{value:new Kt}}),this.matrix=new B,this.matrixWorld=new B,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Nn,e)}rotateY(e){return this.rotateOnAxis(Pn,e)}rotateZ(e){return this.rotateOnAxis(Fn,e)}translateOnAxis(e,t){return En.copy(e).applyQuaternion(this.quaternion),this.position.add(En.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nn,e)}translateY(e){return this.translateOnAxis(Pn,e)}translateZ(e){return this.translateOnAxis(Fn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kn.copy(e):kn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),An.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(An,kn,this.up):On.lookAt(kn,An,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Dn.setFromRotationMatrix(On),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(ut(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(In),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null):ut(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ln),zn.child=e,this.dispatchEvent(zn),zn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(In),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,e,jn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,Mn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Bn.DEFAULT_UP=new z(0,1,0),Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=class extends Bn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Hn={type:`move`},Un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Kn={h:0,s:0,l:0};function qn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Zt.workingColorSpace){if(e=xt(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=qn(i,r,e+1/3),this.g=qn(i,r,e),this.b=qn(i,r,e-1/3)}return Zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ye){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){let n=Wn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qt(e.r),this.g=Qt(e.g),this.b=Qt(e.b),this}copyLinearToSRGB(e){return this.r=$t(e.r),this.g=$t(e.g),this.b=$t(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return Zt.workingToColorSpace(Jn.copy(this),e),Math.round(bt(Jn.r*255,0,255))*65536+Math.round(bt(Jn.g*255,0,255))*256+Math.round(bt(Jn.b*255,0,255))}getHexString(e=Ye){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(Jn.copy(this),t);let n=Jn.r,r=Jn.g,i=Jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Ye){Zt.workingToColorSpace(Jn.copy(this),e);let t=Jn.r,n=Jn.g,r=Jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Kn);let n=wt(Gn.h,Kn.h,t),r=wt(Gn.s,Kn.s,t),i=wt(Gn.l,Kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jn=new V;V.NAMES=Wn;var Yn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new V(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Xn=class extends Bn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new z,Qn=new z,$n=new z,er=new z,tr=new z,nr=new z,rr=new z,ir=new z,ar=new z,or=new z,sr=new ln,cr=new ln,lr=new ln,ur=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zn.subVectors(r,t),Qn.subVectors(n,t),$n.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Qn),s=Zn.dot($n),c=Qn.dot(Qn),l=Qn.dot($n),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,er)!==null&&er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,er)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,er.x),s.addScaledVector(a,er.y),s.addScaledVector(o,er.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return sr.setScalar(0),cr.setScalar(0),lr.setScalar(0),sr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),lr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sr,i.x),a.addScaledVector(cr,i.y),a.addScaledVector(lr,i.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Qn.subVectors(e,t),Zn.cross(Qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Zn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;tr.subVectors(r,n),nr.subVectors(i,n),ir.subVectors(e,n);let s=tr.dot(ir),c=nr.dot(ir);if(s<=0&&c<=0)return t.copy(n);ar.subVectors(e,r);let l=tr.dot(ar),u=nr.dot(ar);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(tr,a);or.subVectors(e,i);let f=tr.dot(or),p=nr.dot(or);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(nr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return rr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(rr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,pr):pr.fromBufferAttribute(r,t),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Sr.subVectors(this.max,xr),hr.subVectors(e.a,xr),gr.subVectors(e.b,xr),_r.subVectors(e.c,xr),vr.subVectors(gr,hr),yr.subVectors(_r,gr),br.subVectors(hr,_r);let t=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-br.z,br.y,vr.z,0,-vr.x,yr.z,0,-yr.x,br.z,0,-br.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-br.y,br.x,0];return!Tr(t,hr,gr,_r,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,hr,gr,_r,Sr))?!1:(Cr.crossVectors(vr,yr),t=[Cr.x,Cr.y,Cr.z],Tr(t,hr,gr,_r,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fr=[new z,new z,new z,new z,new z,new z,new z,new z],pr=new z,mr=new dr,hr=new z,gr=new z,_r=new z,vr=new z,yr=new z,br=new z,xr=new z,Sr=new z,Cr=new z,wr=new z;function Tr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){wr.fromArray(e,a);let o=i.x*Math.abs(wr.x)+i.y*Math.abs(wr.y)+i.z*Math.abs(wr.z),s=t.dot(wr),c=n.dot(wr),l=r.dot(wr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Er=new z,Dr=new R,Or=0,kr=class extends mt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Or++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=et,this.updateRanges=[],this.gpuType=T,this.version=0,this._normalizationScale=e===void 0?void 0:zt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix4(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyNormalMatrix(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.transformDirection(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Bt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Vt(e,this.array):Math.round(e*t)}},Ar=class extends kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jr=class extends kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},H=class extends kr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mr=new dr,Nr=new z,Pr=new z,Fr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Mr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Nr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Pr)),this.expandByPoint(Nr.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ir=0,Lr=new B,Rr=new Bn,zr=new z,Br=new dr,Vr=new dr,Hr=new z,Ur=class e extends mt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=yt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(rt(e)?jr:Ar)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Kt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Lr.makeRotationFromQuaternion(e),this.applyMatrix4(Lr),this}rotateX(e){return Lr.makeRotationX(e),this.applyMatrix4(Lr),this}rotateY(e){return Lr.makeRotationY(e),this.applyMatrix4(Lr),this}rotateZ(e){return Lr.makeRotationZ(e),this.applyMatrix4(Lr),this}translate(e,t,n){return Lr.makeTranslation(e,t,n),this.applyMatrix4(Lr),this}scale(e,t,n){return Lr.makeScale(e,t,n),this.applyMatrix4(Lr),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new H(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)ut(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Br.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(this.boundingBox.min,Br.min),this.boundingBox.expandByPoint(Hr),Hr.addVectors(this.boundingBox.max,Br.max),this.boundingBox.expandByPoint(Hr)):(this.boundingBox.expandByPoint(Br.min),this.boundingBox.expandByPoint(Br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)ut(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(Br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vr.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(Br.min,Vr.min),Br.expandByPoint(Hr),Hr.addVectors(Br.max,Vr.max),Br.expandByPoint(Hr)):(Br.expandByPoint(Vr.min),Br.expandByPoint(Vr.max))}Br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Hr.fromBufferAttribute(a,t),o&&(zr.fromBufferAttribute(e,t),Hr.add(zr)),r=Math.max(r,n.distanceToSquared(Hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new kr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let l=new z,u=new z,d=new z,f=new R,p=new R,m=new R,h=new z,g=new z;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new z,b=new z,x=new z,S=new z;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new kr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Hr.fromBufferAttribute(e,t),Hr.normalize(),e.setXYZ(t,Hr.x,Hr.y,Hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new kr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=et,this.updateRanges=[],this.version=0,this.uuid=yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Gr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=yt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Kr=new z,qr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:zt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix4(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyNormalMatrix(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.transformDirection(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ct(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new kr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ct(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Bt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Vt(e,this.data.array):Math.round(e*t)}},Jr=new z,Yr=new z,Xr=new Kt,Zr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Jr.subVectors(n,t).cross(Yr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Jr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xr.getNormalMatrix(e),r=this.coplanarPoint(Jr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qr=0,$r=class extends mt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qr++}),this.uuid=yt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$e,this.stencilZFail=$e,this.stencilZPass=$e,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new V().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Zr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ei=class extends $r{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ti,ni=new z,ri=new z,ii=new z,ai=new R,oi=new R,si=new B,ci=new z,li=new z,ui=new z,di=new R,fi=new R,pi=new R,mi=class extends Bn{constructor(e=new ei){if(super(),this.isSprite=!0,this.type=`Sprite`,ti===void 0){ti=new Ur;let e=new Wr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ti.setIndex([0,1,2,0,2,3]),ti.setAttribute(`position`,new qr(e,3,0,!1)),ti.setAttribute(`uv`,new qr(e,2,3,!1))}this.geometry=ti,this.material=e,this.center=new R(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ut(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ri.setFromMatrixScale(this.matrixWorld),si.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ri.multiplyScalar(-ii.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;hi(ci.set(-.5,-.5,0),ii,a,ri,r,i),hi(li.set(.5,-.5,0),ii,a,ri,r,i),hi(ui.set(.5,.5,0),ii,a,ri,r,i),di.set(0,0),fi.set(1,0),pi.set(1,1);let o=e.ray.intersectTriangle(ci,li,ui,!1,ni);if(o===null&&(hi(li.set(-.5,.5,0),ii,a,ri,r,i),fi.set(0,1),o=e.ray.intersectTriangle(ci,ui,li,!1,ni),o===null))return;let s=e.ray.origin.distanceTo(ni);s<e.near||s>e.far||t.push({distance:s,point:ni.clone(),uv:ur.getInterpolation(ni,ci,li,ui,di,fi,pi,new R),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function hi(e,t,n,r,i,a){ai.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?oi.copy(ai):(oi.x=a*ai.x-i*ai.y,oi.y=i*ai.x+a*ai.y),e.copy(t),e.x+=oi.x,e.y+=oi.y,e.applyMatrix4(si)}var gi=new z,_i=new z,vi=new z,yi=new z,bi=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_i.copy(e).add(t).multiplyScalar(.5),vi.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(_i);let i=e.distanceTo(t)*.5,a=-this.direction.dot(vi),o=yi.dot(this.direction),s=-yi.dot(vi),c=yi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(_i).addScaledVector(vi,d),f}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),r=gi.dot(gi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,N=C/w,ne=1/w,re=T-te*D,ie=E-N*D,ae=O-te*A,oe=k-N*A,se=j-te*M,ce=ee-N*M,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=ne*(le*D+P*A+ue*M);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xi=class extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Si=new B,Ci=new bi,wi=new Fr,Ti=new z,Ei=new z,Di=new z,Oi=new z,ki=new z,Ai=new z,ji=new z,Mi=new z,Ni=class extends Bn{constructor(e=new Ur,t=new xi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ki.fromBufferAttribute(s,e),a?Ai.addScaledVector(ki,r):Ai.addScaledVector(ki.sub(t),r))}t.add(Ai)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere),wi.applyMatrix4(i),Ci.copy(e.ray).recast(e.near),wi.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(wi,Ti)===null||Ci.origin.distanceToSquared(Ti)>(e.far-e.near)**2)||(Si.copy(i).invert(),Ci.copy(e.ray).applyMatrix4(Si),(n.boundingBox===null||Ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Fi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Fi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Fi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Fi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Pi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Mi.copy(s),Mi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Mi);return l<n.near||l>n.far?null:{distance:l,point:Mi.clone(),object:e}}function Fi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ei),e.getVertexPosition(c,Di),e.getVertexPosition(l,Oi);let u=Pi(e,t,n,r,Ei,Di,Oi,ji);if(u){let e=new z;ur.getBarycoord(ji,Ei,Di,Oi,e),i&&(u.uv=ur.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=ur.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=ur.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};ur.getNormal(Ei,Di,Oi,t.normal),u.face=t,u.barycoord=e}return u}var Ii=new ln,Li=new ln,Ri=new ln,zi=new ln,Bi=new B,Vi=new z,Hi=new Fr,Ui=new B,Wi=new bi,Gi=class extends Ni{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=l,this.bindMatrix=new B,this.bindMatrixInverse=new B,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dr),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Vi),this.boundingBox.expandByPoint(Vi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Vi),this.boundingSphere.expandByPoint(Vi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(r),e.ray.intersectsSphere(Hi)!==!1&&(Ui.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Ui),(this.boundingBox===null||Wi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Wi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ln,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():L(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Li.fromBufferAttribute(r.attributes.skinIndex,e),Ri.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ii.copy(t),t.set(0,0,0,0)):(Ii.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ii.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ri.getComponent(e);if(r!==0){let i=Li.getComponent(e);Bi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(zi.copy(Ii).applyMatrix4(Bi),r)}}return t.isVector4&&(t.w=Ii.w),t.applyMatrix4(this.bindMatrixInverse)}},Ki=class extends Bn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},qi=class extends cn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ji=new B,Yi=new B,Xi=class e{constructor(e=[],t=[]){this.uuid=yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){L(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new B)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new B;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Yi;Ji.multiplyMatrices(i,t[r]),Ji.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qi(t,e,e,te,T);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(L(`Skeleton: No bone found with UUID:`,r),i=new Ki),this.bones.push(i),this.boneInverses.push(new B().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Zi=class extends kr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new B,$i=new B,ea=[],ta=new dr,na=new B,ra=new Ni,ia=new Fr,aa=class extends Ni{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,na)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),ta.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(ta)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),ia.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),e.ray.intersectsSphere(ia)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Qi),$i.multiplyMatrices(n,Qi),ra.matrixWorld=$i,ra.raycast(e,ea);for(let e=0,n=ea.length;e<n;e++){let n=ea[e];n.instanceId=i,n.object=this,t.push(n)}ea.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(r*this.count),r,this.count,re,T));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oa=new Fr,sa=new R(.5,.5),ca=new z,la=class{constructor(e=new Zr,t=new Zr,n=new Zr,r=new Zr,i=new Zr,a=new Zr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oa)}intersectsSprite(e){return oa.center.set(0,0,0),oa.radius=.7071067811865476+sa.distanceTo(e.center),oa.applyMatrix4(e.matrixWorld),this.intersectsSphere(oa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ua=new B,da=class e{constructor(){this.coordinateSystem=nt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ua.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new la),n[e].setFromProjectionMatrix(ua,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new la),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},fa=class extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new V(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pa=new z,ma=new z,ha=new B,ga=new bi,_a=new Fr,va=new z,ya=new z,ba=class extends Bn{constructor(e=new Ur,t=new fa){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)pa.fromBufferAttribute(t,e-1),ma.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=pa.distanceTo(ma);e.setAttribute(`lineDistance`,new H(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),_a.radius+=i,e.ray.intersectsSphere(_a)===!1)return;ha.copy(r).invert(),ga.copy(e.ray).applyMatrix4(ha);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=xa(this,e,ga,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=xa(this,e,ga,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=xa(this,e,ga,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=xa(this,e,ga,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(pa.fromBufferAttribute(s,i),ma.fromBufferAttribute(s,a),n.distanceSqToSegment(pa,ma,va,ya)>r)return;va.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(va);if(!(c<t.near||c>t.far))return{distance:c,point:ya.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Sa=new z,Ca=new z,wa=class extends ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Sa.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Sa.distanceTo(Ca);e.setAttribute(`lineDistance`,new H(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ta=class extends $r{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ea=new B,Da=new bi,Oa=new Fr,ka=new z,Aa=class extends Bn{constructor(e=new Ur,t=new Ta){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=i,e.ray.intersectsSphere(Oa)===!1)return;Ea.copy(r).invert(),Da.copy(e.ray).applyMatrix4(Ea);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ka.fromBufferAttribute(l,n),ja(ka,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ka.fromBufferAttribute(l,a),ja(ka,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ja(e,t,n,r,i,a,o){let s=Da.distanceSqToPoint(e);if(s<n){let n=new z;Da.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ma=class extends cn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Na=class extends cn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pa=class extends cn{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=N,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends Pa{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=N){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},La=class e extends Ur{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new H(c,3)),this.setAttribute(`normal`,new H(l,3)),this.setAttribute(`uv`,new H(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ra=class e extends Ur{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new z,g=new z;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new H(o,3)),this.setAttribute(`normal`,new H(s,3)),this.setAttribute(`uv`,new H(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},za=class e extends Ur{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new z,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new H(a,3)),this.setAttribute(`normal`,new H(o,3)),this.setAttribute(`uv`,new H(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ba=class e extends Ur{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new H(u,3)),this.setAttribute(`normal`,new H(d,3)),this.setAttribute(`uv`,new H(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Va=class e extends Ba{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class e extends Ur{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new H(i,3)),this.setAttribute(`normal`,new H(i.slice(),3)),this.setAttribute(`uv`,new H(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ua=class e extends Ha{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],i=[],a=[],o=new z,s=new B;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(bt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(bt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ga=class extends Wa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new R){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ka=class extends Ga{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function qa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ja=new z,Ya=new z,Xa=new qa,Za=new qa,Qa=new qa,$a=class extends Wa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ya.subVectors(r[0],r[1]).add(r[0]),c=Ya);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ja.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ja),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Xa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Za.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Qa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Xa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Za.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Qa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Xa.calc(s),Za.calc(s),Qa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function eo(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function to(e,t){let n=1-e;return n*n*t}function no(e,t){return 2*(1-e)*e*t}function ro(e,t){return e*e*t}function io(e,t,n,r){return to(e,t)+no(e,n)+ro(e,r)}function ao(e,t){let n=1-e;return n*n*n*t}function oo(e,t){let n=1-e;return 3*n*n*e*t}function so(e,t){return 3*(1-e)*e*e*t}function co(e,t){return e*e*e*t}function lo(e,t,n,r,i){return ao(e,t)+oo(e,n)+so(e,r)+co(e,i)}var uo=class extends Wa{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(lo(e,r.x,i.x,a.x,o.x),lo(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends Wa{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(lo(e,r.x,i.x,a.x,o.x),lo(e,r.y,i.y,a.y,o.y),lo(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends Wa{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends Wa{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends Wa{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(io(e,r.x,i.x,a.x),io(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Wa{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(io(e,r.x,i.x,a.x),io(e,r.y,i.y,a.y),io(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Wa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(eo(o,s.x,c.x,l.x,u.x),eo(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}},vo=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:$a,CubicBezierCurve:uo,CubicBezierCurve3:fo,EllipseCurve:Ga,LineCurve:po,LineCurve3:mo,QuadraticBezierCurve:ho,QuadraticBezierCurve3:go,SplineCurve:_o}),yo=class extends Wa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new vo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new vo[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},bo=class extends yo{constructor(e){super(),this.type=`Path`,this.currentPoint=new R,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new po(this.currentPoint.clone(),new R(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ho(this.currentPoint.clone(),new R(e,t),new R(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new uo(this.currentPoint.clone(),new R(e,t),new R(n,r),new R(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new _o([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ga(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xo=class extends bo{constructor(e){super(e),this.uuid=yt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new bo().fromJSON(n))}return this}};function So(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Co(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ao(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return To(a,o,n,s,c,l,0),o}function Co(e,t,n,r,i){let a;if(i===es(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Zo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Zo(i/r|0,e[i],e[i+1],a);return a&&Uo(a,a.next)&&(Qo(a),a=a.next),a}function wo(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Uo(n,n.next)||Ho(n.prev,n,n.next)===0)){if(Qo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function To(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Fo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Do(e,r,i,a):Eo(e))t.push(c.i,e.i,l.i),Qo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Oo(wo(e),t),To(e,t,n,r,i,a,2)):o===2&&ko(e,t,n,r,i,a):To(wo(e),t,n,r,i,a,1);break}}}function Eo(e){let t=e.prev,n=e,r=e.next;if(Ho(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Bo(i,s,a,c,o,l,m.x,m.y)&&Ho(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Do(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ho(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Lo(p,m,t,n,r),v=Lo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Bo(s,u,c,d,l,f,y.x,y.y)&&Ho(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Bo(s,u,c,d,l,f,b.x,b.y)&&Ho(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Bo(s,u,c,d,l,f,y.x,y.y)&&Ho(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Bo(s,u,c,d,l,f,b.x,b.y)&&Ho(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Oo(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Uo(r,i)&&Wo(r,n,n.next,i)&&Jo(r,i)&&Jo(i,r)&&(t.push(r.i,n.i,i.i),Qo(n),Qo(n.next),n=e=i),n=n.next}while(n!==e);return wo(n)}function ko(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Vo(o,e)){let s=Xo(o,e);o=wo(o,o.next),s=wo(s,s.next),To(o,t,n,r,i,a,0),To(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ao(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Co(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ro(o))}i.sort(jo);for(let e=0;e<i.length;e++)n=Mo(i[e],n);return n}function jo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Mo(e,t){let n=No(e,t);if(!n)return t;let r=Xo(n,e);return wo(r,r.next),wo(n,n.next)}function No(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Uo(e,n))return n;do{if(Uo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&zo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Jo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Po(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Po(e,t){return Ho(e.prev,e,t.prev)<0&&Ho(t.next,e,e.next)<0}function Fo(e,t,n,r){let i=e;do i.z===0&&(i.z=Lo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Io(i)}function Io(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Lo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ro(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function zo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Bo(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&zo(e,t,n,r,i,a,o,s)}function Vo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!qo(e,t)&&(Jo(e,t)&&Jo(t,e)&&Yo(e,t)&&(Ho(e.prev,e,t.prev)||Ho(e,t.prev,t))||Uo(e,t)&&Ho(e.prev,e,e.next)>0&&Ho(t.prev,t,t.next)>0)}function Ho(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Uo(e,t){return e.x===t.x&&e.y===t.y}function Wo(e,t,n,r){let i=Ko(Ho(e,t,n)),a=Ko(Ho(e,t,r)),o=Ko(Ho(n,r,e)),s=Ko(Ho(n,r,t));return!!(i!==a&&o!==s||i===0&&Go(e,n,t)||a===0&&Go(e,r,t)||o===0&&Go(n,e,r)||s===0&&Go(n,t,r))}function Go(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ko(e){return e>0?1:e<0?-1:0}function qo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Wo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Jo(e,t){return Ho(e.prev,e,e.next)<0?Ho(e,t,e.next)>=0&&Ho(e,e.prev,t)>=0:Ho(e,t,e.prev)<0||Ho(e,e.next,t)<0}function Yo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Xo(e,t){let n=$o(e.i,e.x,e.y),r=$o(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Zo(e,t,n,r){let i=$o(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Qo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $o(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function es(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ts=class{static triangulate(e,t,n=2){return So(e,t,n)}},ns=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];rs(e),is(n,e);let a=e.length;t.forEach(rs);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,is(n,t[e]);let o=ts.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function rs(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function is(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var as=class e extends Ur{constructor(e=new xo([new R(.5,.5),new R(-.5,.5),new R(-.5,-.5),new R(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new H(r,3)),this.setAttribute(`uv`,new H(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?os:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new z,b=new z,x=new z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!ns.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];ns.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||ut(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new R(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new R(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,te=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),te=te.concat(M)}let N;if(p===0)N=ns.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=ns.triangulateShape(e,t)}let ne=N.length,re=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],te[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],te[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ne;e++){let n=N[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ne;e++){let n=N[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ne;e++){let t=N[e];ce(t[2],t[1],t[0])}for(let e=0;e<ne;e++){let t=N[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ss(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new vo[i.type]().fromJSON(i)),new e(r,t.options)}},os={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new R(a,o),new R(s,c),new R(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new R(o,1-c),new R(l,1-d),new R(f,1-m),new R(h,1-_)]:[new R(s,1-c),new R(u,1-d),new R(p,1-m),new R(g,1-_)]}};function ss(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var cs=class e extends Ha{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ls=class e extends Ur{constructor(e=[new R(0,-.5),new R(.5,0),new R(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=bt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new z,d=new R,f=new z,p=new z,m=new z,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new H(a,3)),this.setAttribute(`uv`,new H(o,2)),this.setAttribute(`normal`,new H(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},us=class e extends Ur{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new H(p,3)),this.setAttribute(`normal`,new H(m,3)),this.setAttribute(`uv`,new H(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ds=class e extends Ur{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new R;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new H(s,3)),this.setAttribute(`normal`,new H(c,3)),this.setAttribute(`uv`,new H(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},fs=class e extends Ur{constructor(e=new xo([new R(0,.5),new R(-.5,-.5),new R(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new H(r,3)),this.setAttribute(`normal`,new H(i,3)),this.setAttribute(`uv`,new H(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;ns.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];ns.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=ns.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ps(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function ps(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ms=class e extends Ur{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new H(p,3)),this.setAttribute(`normal`,new H(m,3)),this.setAttribute(`uv`,new H(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},hs=class e extends Ur{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new z,f=new z,p=new z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new H(c,3)),this.setAttribute(`normal`,new H(l,3)),this.setAttribute(`uv`,new H(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},gs=class e extends Ur{constructor(e=new go(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,s=new z,c=new R,l=new z,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new H(u,3)),this.setAttribute(`normal`,new H(d,3)),this.setAttribute(`uv`,new H(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new vo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _s(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ys(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ys(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function vs(e){let t={};for(let n=0;n<e.length;n++){let r=_s(e[n]);for(let e in r)t[e]=r[e]}return t}function ys(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function bs(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xs(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Ss={clone:_s,merge:vs},Cs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ws=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ts=class extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cs,this.fragmentShader=ws,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=bs(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new V().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ln().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Kt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new B().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Es=class extends Ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},U=class extends $r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new V(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ds=class extends U{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new R(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new V(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new V(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new V(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return dt(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){dt(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Os=class extends $r{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ks=class extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Je,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},As=class extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function js(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ms(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ns=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ps=class extends Ns{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ge,endingEnd:Ge}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ke:i=e,o=2*t-n;break;case qe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ke:a=e,s=2*n-t;break;case qe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Fs=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Is=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ls=class extends Ns{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Bs(n,t,g,y,r);i[p]=Rs(x,o,_,b,m)}return i}};function Rs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function zs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Bs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Rs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=zs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Vs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ms(e.settings)&&(n.settings={inTangents:js(e.settings.inTangents,Array),outTangents:js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Is(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ps(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ls(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ve:t=this.InterpolantFactoryMethodDiscrete;break;case He:t=this.InterpolantFactoryMethodLinear;break;case Ue:t=this.InterpolantFactoryMethodSmooth;break;case We:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ve;case this.InterpolantFactoryMethodLinear:return He;case this.InterpolantFactoryMethodSmooth:return Ue;case this.InterpolantFactoryMethodBezier:return We}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ms(this.settings)&&(Hs(this.settings.inTangents,e),Hs(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ms(this.settings)&&(Us(this.settings.inTangents,e),Us(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ut(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(ut(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){ut(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){ut(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&it(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){ut(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ue,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ms(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Hs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Us(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Vs.prototype.ValueTypeName=``,Vs.prototype.TimeBufferType=Float32Array,Vs.prototype.ValueBufferType=Float32Array,Vs.prototype.DefaultInterpolation=He;var Ws=class extends Vs{constructor(e,t,n){super(e,t,n)}};Ws.prototype.ValueTypeName=`bool`,Ws.prototype.ValueBufferType=Array,Ws.prototype.DefaultInterpolation=Ve,Ws.prototype.InterpolantFactoryMethodLinear=void 0,Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}};Gs.prototype.ValueTypeName=`color`;var Ks=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}};Ks.prototype.ValueTypeName=`number`;var qs=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},Js=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qs(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName=`quaternion`,Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends Vs{constructor(e,t,n){super(e,t,n)}};Ys.prototype.ValueTypeName=`string`,Ys.prototype.ValueBufferType=Array,Ys.prototype.DefaultInterpolation=Ve,Ys.prototype.InterpolantFactoryMethodLinear=void 0,Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}};Xs.prototype.ValueTypeName=`vector`;var Zs=class extends Bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qs=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},$s=new B,ec=new z,tc=new z,nc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=y,this.map=null,this.mapPass=null,this.matrix=new B,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(ec),tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($s,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rc=new z,ic=new Ut,ac=new z,oc=class extends Bn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new B,this.projectionMatrix=new B,this.projectionMatrixInverse=new B,this.coordinateSystem=nt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rc,ic,ac),ac.x===1&&ac.y===1&&ac.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,ic,ac.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rc,ic,ac),ac.x===1&&ac.y===1&&ac.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,ic,ac.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sc=new z,cc=new R,lc=new R,uc=class extends oc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_t*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vt*2*Math.atan(Math.tan(_t*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sc.x,sc.y).multiplyScalar(-e/sc.z),sc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sc.x,sc.y).multiplyScalar(-e/sc.z)}getViewSize(e,t){return this.getViewBounds(e,cc,lc),t.subVectors(lc,cc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_t*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dc=class extends nc{constructor(){super(new uc(90,1,.5,500)),this.isPointLightShadow=!0}},fc=class extends Zs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},pc=class extends oc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mc=class extends nc{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hc=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new mc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},gc=-90,_c=1,vc=class extends Bn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new uc(gc,_c,e,t);r.layers=this.layers,this.add(r);let i=new uc(gc,_c,e,t);i.layers=this.layers,this.add(i);let a=new uc(gc,_c,e,t);a.layers=this.layers,this.add(a);let o=new uc(gc,_c,e,t);o.layers=this.layers,this.add(o);let s=new uc(gc,_c,e,t);s.layers=this.layers,this.add(s);let c=new uc(gc,_c,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},yc=class extends uc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},bc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xc.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function xc(){this._document.hidden===!1&&this.reset()}var Sc=`\\[\\]\\.:\\/`,Cc=RegExp(`[\\[\\]\\.:\\/]`,`g`),wc=`[^\\[\\]\\.:\\/]`,Tc=`[^`+Sc.replace(`\\.`,``)+`]`,Ec=`((?:WC+[\\/:])*)`.replace(`WC`,wc),Dc=`(WCOD+)?`.replace(`WCOD`,Tc),Oc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,wc),kc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,wc),Ac=RegExp(`^`+Ec+Dc+Oc+kc+`$`),jc=[`material`,`materials`,`bones`,`map`],Mc=class{constructor(e,t,n){let r=n||Nc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Cc,``)}static parseTrackName(e){let t=Ac.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);jc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){ut(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){ut(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){ut(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){ut(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){ut(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){ut(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){ut(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;ut(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){ut(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){ut(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nc.Composite=Mc,Nc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Nc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Nc.prototype.GetterByBindingType=[Nc.prototype._getValue_direct,Nc.prototype._getValue_array,Nc.prototype._getValue_arrayElement,Nc.prototype._getValue_toArray],Nc.prototype.SetterByBindingTypeAndVersioning=[[Nc.prototype._setValue_direct,Nc.prototype._setValue_direct_setNeedsUpdate,Nc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nc.prototype._setValue_array,Nc.prototype._setValue_array_setNeedsUpdate,Nc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nc.prototype._setValue_arrayElement,Nc.prototype._setValue_arrayElement_setNeedsUpdate,Nc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nc.prototype._setValue_fromArray,Nc.prototype._setValue_fromArray_setNeedsUpdate,Nc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pc=new B,Fc=class{constructor(e,t,n=0,r=1/0){this.ray=new bi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Pc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(e,t=!0,n=[]){return Lc(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Lc(e[r],this,n,t);return n.sort(Ic),n}};function Ic(e,t){return e.distance-t.distance}function Lc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Lc(r[e],t,n,!0)}}a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;var Rc=class extends wa{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],i=new Ur;i.setIndex(new kr(n,1)),i.setAttribute(`position`,new H(r,3)),super(i,new fa({color:t,toneMapped:!1})),this.box=e,this.type=`Box3Helper`,this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function zc(e,t,n,r){let i=Bc(r);switch(n){case ee:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case M:return e*t*3/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:case me:return Math.max(e,16)*Math.max(t,8)/4;case de:case pe:return Math.max(e,8)*Math.max(t,8)/2;case he:case ge:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fe:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case I:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ze:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bc(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case O:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case A:case j:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Vc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Hc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Uc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Wc={basic:{uniforms:vs([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:Uc.meshbasic_vert,fragmentShader:Uc.meshbasic_frag},lambert:{uniforms:vs([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:Uc.meshlambert_vert,fragmentShader:Uc.meshlambert_frag},phong:{uniforms:vs([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Uc.meshphong_vert,fragmentShader:Uc.meshphong_frag},standard:{uniforms:vs([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Uc.meshphysical_vert,fragmentShader:Uc.meshphysical_frag},toon:{uniforms:vs([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new V(0)}}]),vertexShader:Uc.meshtoon_vert,fragmentShader:Uc.meshtoon_frag},matcap:{uniforms:vs([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:Uc.meshmatcap_vert,fragmentShader:Uc.meshmatcap_frag},points:{uniforms:vs([W.points,W.fog]),vertexShader:Uc.points_vert,fragmentShader:Uc.points_frag},dashed:{uniforms:vs([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Uc.linedashed_vert,fragmentShader:Uc.linedashed_frag},depth:{uniforms:vs([W.common,W.displacementmap]),vertexShader:Uc.depth_vert,fragmentShader:Uc.depth_frag},normal:{uniforms:vs([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:Uc.meshnormal_vert,fragmentShader:Uc.meshnormal_frag},sprite:{uniforms:vs([W.sprite,W.fog]),vertexShader:Uc.sprite_vert,fragmentShader:Uc.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Uc.background_vert,fragmentShader:Uc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Uc.backgroundCube_vert,fragmentShader:Uc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Uc.cube_vert,fragmentShader:Uc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Uc.equirect_vert,fragmentShader:Uc.equirect_frag},distance:{uniforms:vs([W.common,W.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Uc.distance_vert,fragmentShader:Uc.distance_frag},shadow:{uniforms:vs([W.lights,W.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:Uc.shadow_vert,fragmentShader:Uc.shadow_frag}};Wc.physical={uniforms:vs([Wc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Uc.meshphysical_vert,fragmentShader:Uc.meshphysical_frag};var Gc={r:0,b:0,g:0},Kc=new B,qc=new Kt;qc.set(-1,0,0,0,1,0,0,0,1);function Jc(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Ni(new La(1,1,1),new Ts({name:`BackgroundCubeMaterial`,uniforms:_s(Wc.backgroundCube.uniforms),vertexShader:Wc.backgroundCube.vertexShader,fragmentShader:Wc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qc),l.material.toneMapped=Zt.getTransfer(i.colorSpace)!==Qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ni(new us(2,2),new Ts({name:`BackgroundMaterial`,uniforms:_s(Wc.background.uniforms),vertexShader:Wc.background.vertexShader,fragmentShader:Wc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(i.colorSpace)!==Qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Gc,xs(e)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Yc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Xc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Zc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&L(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Qc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Zr,s=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $c=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ma(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),i=new Ts({name:`CubemapFromEquirect`,uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ni(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new vc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},el=256,tl=3,nl=20,rl=256,il=16,al=3,ol=new z,sl=new V,cl=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vc(1,10,null),this._boxMesh=new Ni(new La(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ol}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(sl));let h=new vc(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(el,Lt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?el:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ll(e,!1,!1),n=Math.log2(e)-tl;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ll(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ml()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=dl(),this._integrationMaterial=fl());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/il);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-al)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(rl*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pl());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function ll(e,t,n){return new $c(e,{minFilter:v,generateMipmaps:t,type:E,colorSpace:Xe,depthBuffer:n})}function ul(e,t,n){return new Ts({name:e,uniforms:t,vertexShader:Uc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function dl(){return ul(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fl(){return ul(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:il}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pl(){return ul(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${nl}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ml(){return ul(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hl(){return ul(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new $c(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new cl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new cl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _l(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&dt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vl(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?jr:Ar)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function yl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:ut(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xl(e,t,n){let r=new WeakMap,i=new ln;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new fn(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new R(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Sl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function wl(e,t,n,r,i,a){let o=new dn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Ur;u.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new H([0,2,0,0,2,0],2));let d=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ni(u,d),p=new pc(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new dn(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),c=new dn(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Pa(t,n),a===!0&&(l.format=ne,l.type=k)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Zt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Cl[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Tl=new cn,El=new Pa(1,1),Dl=new Fa(1),Ol=new fn,kl=new pn,Al=new Ma,jl=[],Ml=[],Nl=new Float32Array(16),Pl=new Float32Array(9),Fl=new Float32Array(4);function Il(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=jl[i];if(a===void 0&&(a=new Float32Array(i),jl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ll(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Rl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function zl(e,t){let n=Ml[t];n===void 0&&(n=new Int32Array(t),Ml[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Bl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ll(n,t))return;e.uniform2fv(this.addr,t),Rl(n,t)}}function Hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ll(n,t))return;e.uniform3fv(this.addr,t),Rl(n,t)}}function Ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ll(n,t))return;e.uniform4fv(this.addr,t),Rl(n,t)}}function Wl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ll(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rl(n,t)}else{if(Ll(n,r))return;Fl.set(r),e.uniformMatrix2fv(this.addr,!1,Fl),Rl(n,r)}}function Gl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ll(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rl(n,t)}else{if(Ll(n,r))return;Pl.set(r),e.uniformMatrix3fv(this.addr,!1,Pl),Rl(n,r)}}function Kl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ll(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rl(n,t)}else{if(Ll(n,r))return;Nl.set(r),e.uniformMatrix4fv(this.addr,!1,Nl),Rl(n,r)}}function ql(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Jl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ll(n,t))return;e.uniform2iv(this.addr,t),Rl(n,t)}}function Yl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ll(n,t))return;e.uniform3iv(this.addr,t),Rl(n,t)}}function Xl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ll(n,t))return;e.uniform4iv(this.addr,t),Rl(n,t)}}function Zl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ql(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ll(n,t))return;e.uniform2uiv(this.addr,t),Rl(n,t)}}function $l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ll(n,t))return;e.uniform3uiv(this.addr,t),Rl(n,t)}}function eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ll(n,t))return;e.uniform4uiv(this.addr,t),Rl(n,t)}}function tu(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function nu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?tu(El):Tl,n.setTexture2D(t||a,i)}function ru(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||kl,i)}function iu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?tu(Dl):Al,n.setTextureCube(t||a,i)}function au(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ol,i)}function ou(e){switch(e){case 5126:return Bl;case 35664:return Vl;case 35665:return Hl;case 35666:return Ul;case 35674:return Wl;case 35675:return Gl;case 35676:return Kl;case 5124:case 35670:return ql;case 35667:case 35671:return Jl;case 35668:case 35672:return Yl;case 35669:case 35673:return Xl;case 5125:return Zl;case 36294:return Ql;case 36295:return $l;case 36296:return eu;case 35678:case 36198:case 36298:case 36306:case 35682:return nu;case 35679:case 36299:case 36307:return ru;case 35680:case 36300:case 36308:case 36293:return iu;case 36289:case 36303:case 36311:case 36292:return au}}function su(e,t){e.uniform1fv(this.addr,t)}function cu(e,t){let n=Il(t,this.size,2);e.uniform2fv(this.addr,n)}function lu(e,t){let n=Il(t,this.size,3);e.uniform3fv(this.addr,n)}function uu(e,t){let n=Il(t,this.size,4);e.uniform4fv(this.addr,n)}function du(e,t){let n=Il(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fu(e,t){let n=Il(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function pu(e,t){let n=Il(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function mu(e,t){e.uniform1iv(this.addr,t)}function hu(e,t){e.uniform2iv(this.addr,t)}function gu(e,t){e.uniform3iv(this.addr,t)}function _u(e,t){e.uniform4iv(this.addr,t)}function vu(e,t){e.uniform1uiv(this.addr,t)}function yu(e,t){e.uniform2uiv(this.addr,t)}function bu(e,t){e.uniform3uiv(this.addr,t)}function xu(e,t){e.uniform4uiv(this.addr,t)}function Su(e,t,n){let r=this.cache,i=t.length,a=zl(n,i);Ll(r,a)||(e.uniform1iv(this.addr,a),Rl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?tu(El):Tl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Cu(e,t,n){let r=this.cache,i=t.length,a=zl(n,i);Ll(r,a)||(e.uniform1iv(this.addr,a),Rl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||kl,a[e])}function wu(e,t,n){let r=this.cache,i=t.length,a=zl(n,i);Ll(r,a)||(e.uniform1iv(this.addr,a),Rl(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?tu(Dl):Al;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Tu(e,t,n){let r=this.cache,i=t.length,a=zl(n,i);Ll(r,a)||(e.uniform1iv(this.addr,a),Rl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ol,a[e])}function Eu(e){switch(e){case 5126:return su;case 35664:return cu;case 35665:return lu;case 35666:return uu;case 35674:return du;case 35675:return fu;case 35676:return pu;case 5124:case 35670:return mu;case 35667:case 35671:return hu;case 35668:case 35672:return gu;case 35669:case 35673:return _u;case 5125:return vu;case 36294:return yu;case 36295:return bu;case 36296:return xu;case 35678:case 36198:case 36298:case 36306:case 35682:return Su;case 35679:case 36299:case 36307:return Cu;case 35680:case 36300:case 36308:case 36293:return wu;case 36289:case 36303:case 36311:case 36292:return Tu}}var Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ou(t.type)}},Ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eu(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Au=/(\w+)(\])?(\[|\.)?/g;function ju(e,t){e.seq.push(t),e.map[t.id]=t}function Mu(e,t,n){let r=e.name,i=r.length;for(Au.lastIndex=0;;){let a=Au.exec(r),o=Au.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ju(n,l===void 0?new Du(s,e,t):new Ou(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ku(s),ju(n,e)),n=e}}}var Nu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Mu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Pu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Fu=37297,Iu=0;function Lu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ru=new Kt;function zu(e){Zt._getMatrix(Ru,Zt.workingColorSpace,e);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Ze:return[t,`LinearTransferOETF`];case Qe:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Bu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Lu(e.getShaderSource(t),r)}return i}function Vu(e,t){let n=zu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Hu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Uu(e,t){let n=Hu[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Wu=new z;function Gu(){return Zt.getLuminanceCoefficients(Wu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Wu.x.toFixed(4)}, ${Wu.y.toFixed(4)}, ${Wu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ku(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Yu).join(`
`)}function qu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ju(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Yu(e){return e!==``}function Xu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Zu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qu=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(e){return e.replace(Qu,ed)}function ed(e,t){let n=Uc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return $u(n)}var td=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(e){return e.replace(td,rd)}function rd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function id(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ad={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function od(e){return ad[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var sd={302:`ENVMAP_MODE_REFRACTION`};function cd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:sd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ld={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ud(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ld[e.combine]||`ENVMAP_BLENDING_NONE`}function dd(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=od(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=cd(n),d=ud(n),f=Ku(n),p=qu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Yu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Yu).join(`
`),g.length>0&&(g+=`
`)):(h=[id(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Yu).join(`
`),g=[id(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Uc.tonemapping_pars_fragment,n.toneMapping===0?``:Uu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Uc.colorspace_pars_fragment,Vu(`linearToOutputTexel`,n.outputColorSpace),Gu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Yu).join(`
`)),o=$u(o),o=Xu(o,n),o=Zu(o,n),s=$u(s),s=Xu(s,n),s=Zu(s,n),o=nd(o),s=nd(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Pu(i,i.VERTEX_SHADER,v),x=Pu(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Bu(i,b,`vertex`),n=Bu(i,x,`fragment`);ut(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Nu(i,m),w=Ju(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Fu)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Iu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var fd=0,pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new md(e),t.set(e,n)),n}},md=class{constructor(e){this.id=fd++,this.code=e,this.usedTimes=0}};function hd(e){return e===1030||e===37490||e===36285}function gd(e,t,n,r,i,a){let o=new wn,s=new pd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Wc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,N=!!i.matcap,ne=!!b,re=ne&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:N,envMap:ne,envMapMode:ne&&b.mapping,envMapPMREM:re,envMapMaxLod:re?I.length-1:null,envMapSize:re?I[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&hd(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:P&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Wc[t];n=Ss.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new dd(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function _d(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function vd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function bd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||vd),r.length>1&&r.sort(t||yd),i.length>1&&i.sort(t||yd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function xd(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new bd,e.set(t,[i])):n>=r.length?(i=new bd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Sd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new V};break;case`SpotLight`:n={position:new z,direction:new z,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function Cd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var wd=0;function Td(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ed(e){let t=new Sd,n=Cd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new B,o=new B;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Td);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=wd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Dd(e){let t=new Ed(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Od(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Dd(e),t.set(n,[a])):r>=i.length?(a=new Dd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var kd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ad=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jd=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Md=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Nd=new B,Pd=new z,Fd=new z;function Id(e,t,n){let r=new la,i=new R,a=new R,o=new ln,s=new ks,c=new As,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:kd,fragmentShader:Ad}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ur;h.setAttribute(`position`,new kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ni(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new dn(i.x,i.y,{format:ae,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Pa(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=N,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else l.isPointLight?(d.map=new $c(i.x),d.map.depthTexture=new Fa(i.x,w)):(d.map=new dn(i.x,i.y),d.map.depthTexture=new Pa(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=N,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Pd.setFromMatrixPosition(l.matrixWorld),e.position.copy(Pd),Fd.copy(e.position),Fd.add(jd[t]),e.up.copy(Md[t]),e.lookAt(Fd),e.updateMatrixWorld(),n.makeTranslation(-Pd.x,-Pd.y,-Pd.z),Nd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Nd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new dn(i.x,i.y,{format:ae,type:E}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ld(e,t){function n(){let t=!1,n=new ln,r=null,i=new ln(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=pt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),M=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new ln().fromArray(ie),se=new ln().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ut(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:ut(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:ut(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ut(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function we(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){ut(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function I(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function ze(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:Be}}function Rd(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new R,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):at(`canvas`)}function D(e,t,n){let r=1,i=Be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ze:Zt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function N(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){ae(e.target)}function ie(e){oe(e.target)}function ae(e){e.removeEventListener(`dispose`,re),N(e),ce(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function oe(e){e.removeEventListener(`dispose`,ie),N(e),P(e)}function se(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ae(t))}C.clear(),b.clear()}function ce(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&le(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function le(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function P(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ae(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(t,i){let a=r.get(t);if(t.isVideoTexture&&Re(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ye(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let be={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},xe={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},Se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ce(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,be[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,be[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,be[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,xe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,xe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function we(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re),te(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=he(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&le(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Te(n.start,r.width,4),c=Te(t.start,r.width,4);n.start<=i+1&&a===c&&Te(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function De(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=we(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Zt.getPrimaries(Zt.workingColorSpace),r=o.colorSpace===``?null:Zt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=ze(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);Ce(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=M(o,t);if(o.isDepthTexture)p=ee(o.format===ne,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&Ee(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=zc(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=zc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Be(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Be(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Oe(t,o,s){if(o.image.length!==6)return;let c=we(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Zt.getPrimaries(Zt.workingColorSpace),r=o.colorSpace===``?null:Zt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ze(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=j(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=M(o,h);Ce(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=ee(o.format===ne,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Be(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Le(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function je(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ye(i.depthTexture,0):ge(i.depthTexture,0);let u=c.__webglTexture,d=Le(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)je(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?je(i.__webglFramebuffer[0],t,0):je(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ae(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ae(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,i){let a=r.get(t);n!==void 0&&ke(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Me(t)}function Pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ie),te(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Le(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Ce(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ke(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ke(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Ce(c,a),ke(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Ce(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ke(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ke(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Me(t)}function F(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Fe=[];function Ie(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Fe.length=0,Fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Fe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Le(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Re(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ze(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ut(`WebGLTextures: Unsupported texture color space:`,n)),t}function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=se}function zd(e,t){function n(n,r=``){let i,a=Zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Bd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ts({vertexShader:Bd,fragmentShader:Vd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ud=class extends mt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Hd,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new R,T=null,E=null,D=new uc;D.viewport=new ln;let O=new uc;O.viewport=new ln;let A=[D,O],j=new yc,ee=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Un,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Un,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Un,x[e]=t),t.getHandSpace()};function re(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,M=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ne:N,a=_.stencil?k:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new dn(d.textureWidth,d.textureHeight,{format:te,type:y,depthTexture:new Pa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new dn(f.framebufferWidth,f.framebufferHeight,{format:te,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(ee!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,M=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;oe(j,i);for(let e=0;e<a.length;e++)oe(a[e],i);j.projectionMatrix.copy(D.projectionMatrix),j.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),se(e,j,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=vt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new uc,o.layers.enable(n),o.viewport=new ln,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ia,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new Vc;P.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Wd=new B,Gd=new Kt;Gd.set(-1,0,0,0,1,0,0,0,1);function Kd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xs(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Wd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Gd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function qd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Jd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yd=null;function Xd(){return Yd===null&&(Yd=new qi(Jd,16,16,ae,E),Yd.name=`DFG_LUT`,Yd.minFilter=g,Yd.magFilter=g,Yd.wrapS=d,Yd.wrapT=d,Yd.generateMipmaps=!1,Yd.needsUpdate=!0),Yd}var Zd=class{constructor(e={}){let{canvas:t=ot(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([y,w,S,k,D,O]),_=new Uint32Array(4),b=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},C=null,T=null,A=[],j=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,te=!1,N=null,ne=null,re=null,ae=null;this._outputColorSpace=Ye;let ce=0,le=0,P=null,ue=-1,de=null,fe=new ln,pe=new ln,me=null,he=new V(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new ln(0,0,_e,ve),Ce=new ln(0,0,_e,ve),we=!1,Te=new la,Ee=new da,De=!1,Oe=!1,ke=new B,Ae=new z,je=new ln,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return P===null?ye:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,$e,et,tt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),ut(`WebGLRenderer: `+e.message),e}function st(){Ie=new _l(F),Ie.init(),rt=new zd(F,Ie),Le=new Zc(F,Ie,e,rt),I=new Ld(F,Ie),Le.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),ne=F.createFramebuffer(),re=F.createFramebuffer(),ae=F.createFramebuffer(),Re=new bl(F),ze=new _d,Be=new Rd(F,Ie,I,ze,Le,rt,Re),Ve=new gl(M),He=new Hc(F),it=new Yc(F,He),Ue=new vl(F,He,Re,it),We=new Sl(F,Ue,He,it,Re),$e=new xl(F,Le,Be),Xe=new Qc(ze),Ge=new gd(M,Ve,Ie,Le,it,Xe),Ke=new Kd(M,ze),qe=new xd,Je=new Od(Ie),Qe=new Jc(M,Ve,I,We,p,s),Ze=new Id(M,We,Le),at=new qd(F,Re,Le,I),et=new Xc(F,Ie,Re),tt=new yl(F,Ie,Re),Re.programs=Ge.programs,M.capabilities=Le,M.extensions=Ie,M.properties=ze,M.renderLists=qe,M.shadowMap=Ze,M.state=I,M.info=Re}m!==1009&&(ee=new wl(m,t.width,t.height,o,r,i));let lt=new Ud(M,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){lt.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)ut(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=h.has(t)}if(e){let e=P.texture.type,t=g.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),Qe.dispose(),qe.dispose(),Je.dispose(),Be.dispose(),ze.dispose(),Ve.dispose(),We.dispose(),Ue.dispose(),it.dispose(),at.dispose(),Ge.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,xt),lt.removeEventListener(`sessionend`,St),Ct.stop()};function dt(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),te=!0}function pt(){ct(`WebGLRenderer: Context Restored.`),te=!1;let e=Re.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;st(),Re.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function mt(e){ut(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){_t(e),ze.remove(e)}function _t(e){let t=ze.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=He.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=ze.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){N!==null&&e.isNodeMaterial&&N.setObject(r,e),De===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),N!==null&&N.renderStart(e,t,n),T=Je.get(n),T.init(t),j.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Oe=this.localClippingEnabled,De=Xe.init(this.clippingPlanes,Oe),De===!0&&Xe.setGlobalState(this.clippingPlanes,t),N!==null&&Ze.render(T.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),T=j.pop(),N!==null&&N.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=ze.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Vc;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,lt.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},lt.addEventListener(`sessionstart`,xt),lt.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){ut(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;N!==null&&N.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=ee!==null&&(P===null||n)&&ee.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),T=Je.get(e,j.length),T.init(t),T.state.textureUnits=Be.getTextureUnits(),j.push(T),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):Te.setFromProjectionMatrix(ke,nt,t.reversedDepth),Oe=this.localClippingEnabled,De=Xe.init(this.clippingPlanes,Oe),C=qe.get(e,A.length),C.init(),A.push(C),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,M.sortObjects)}wt(e,t,0,M.sortObjects),C.finish(),N!==null&&N.updateLights(T.state.lightsArray),M.sortObjects===!0&&C.sort(be,xe),Ne=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ne&&Qe.addToRenderList(C,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&Xe.beginShadows();let i=T.state.shadowsArray;if(Ze.render(i,e,t),De===!0&&Xe.endShadows(),(r&&ee.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Ne&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(C,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Ne&&Qe.render(e),Tt(C,e,t)}P!==null&&le===0&&(Be.updateMultisampleRenderTarget(P),Be.updateRenderTargetMipmap(P)),r&&ee.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),it.resetDefaultState(),ue=-1,de=null,j.pop(),j.length>0?(T=j[j.length-1],Be.setTextureUnits(T.state.textureUnits),De===!0&&Xe.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,A.pop(),C=A.length>0?A[A.length-1]:null,N!==null&&N.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=We.update(e),a=e.material;a.visible&&C.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&C.push(e,i,c,n,je.z,s,t)}}else a.visible&&C.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),De===!0&&Xe.setGlobalState(M.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new dn(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let a=T.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(he),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&Qe.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),De===!0&&Xe.setGlobalState(M.clippingPlanes,r),Dt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(he,ge),d!==void 0&&(r.viewport=d),M.toneMapping=u}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){N!==null&&i.isNodeMaterial&&N.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function kt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function At(e,t,n){t.isScene!==!0&&(t=Me);let r=ze.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Nt(e,s),d}else s.uniforms=Ge.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,M),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Nt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=kt(T.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function jt(e,t,n,r,i){let a=ze.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=At(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Nu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Nt(e,t){let n=ze.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Me),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=ze.get(r),y=T.state.lights;if(De===!0&&(Oe===!0||e!==de)){let t=e===de&&r.id===ue;Xe.setState(r,e,t)}let b=!1,S=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===kt(T.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(S=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||S===!0)&&(C=S===!0?jt(r,t,i,s,h):At(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,C,v));let w=!1,E=!1,D=!1,O=C.getUniforms(),k=v.uniforms;if(I.useProgram(C.program)&&(w=!0,E=!0,D=!0),r.id!==ue&&(ue=r.id,E=!0),w||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,E=!0,D=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,Be),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,Be),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,Be));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&$e.update(i,n,C),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Xd()),E){if(O.setValue(F,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Ft(k,D),a&&r.fog===!0&&Ke.refreshFogUniforms(k,a),Ke.refreshMaterialUniforms(k,r,ye,ve,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=x,t=0;for(let n of T.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;k.probesSH.value=e.textures,k.probesMin.value=e.min,k.probesMax.value=e.max,k.probesResolution.value=e.resolution}Nu.upload(F,Mt(v),k,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Nu.upload(F,Mt(v),k,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,C),at.bind(n,C)}}return C}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=ze.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),ze.get(e.texture).__webglTexture=t,ze.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=ze.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=ze.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,ze.get(e.texture).__webglTexture,ze.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&ze.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=ze.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?ze.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ne),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=ze.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=ze.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=ze.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Lt(e){let t=ze.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){ut(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=ze.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Lt(o);if(u.__formatReadable===!1){ut(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){ut(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=P===null?null:ze.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=ze.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:ze.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ft(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=ze.get(e),r=ze.get(t),h=ze.get(n.__renderTarget),g=ze.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||ze.has(e)){let n=ze.get(e),r=ze.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,re),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){ze.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return nt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}},G={time:{day:1,minutes:520,speed:1,paused:!1,total:0,real:0},quality:`medium`,settings:{volume:.8,music:.45,sfx:.9,sensitivity:1,invertY:!1,quality:`auto`,fov:75,showFps:!1},isTouch:!1},Qd=new Map,K={on(e,t){Qd.has(e)||Qd.set(e,[]),Qd.get(e).push(t)},off(e,t){let n=Qd.get(e);if(n){let e=n.indexOf(t);e>=0&&n.splice(e,1)}},emit(e,t){let n=Qd.get(e);if(n)for(let e=0;e<n.length;e++)n[e](t)}},$d=`splashhaven_`,ef=new class{constructor(){this.sdk=null,this.ready=!1,this.environment=`disabled`,this.adPlaying=!1,this.gameplayActive=!1,this.listeners={adStart:[],adEnd:[],settings:[]},this.muted=!1,this.lastMidgame=0}async init(){if(!document.querySelector(`script[src*="crazygames"]`)&&!(window.CrazyGames&&window.CrazyGames.SDK))return console.info(`[SDK] No CrazyGames SDK script on this page, running standalone.`),!1;let e=performance.now();for(;!(window.CrazyGames&&window.CrazyGames.SDK)&&performance.now()-e<3e3;)await new Promise(e=>setTimeout(e,50));if(!(window.CrazyGames&&window.CrazyGames.SDK))return console.info(`[SDK] CrazyGames SDK not available, running standalone.`),!1;try{if(this.sdk=window.CrazyGames.SDK,await Promise.race([this.sdk.init(),new Promise((e,t)=>setTimeout(()=>t(Error(`SDK init timeout`)),6e3))]),this.environment=this.sdk.environment||`crazygames`,this.ready=this.environment!==`disabled`,this.ready)try{let e=this.sdk.game.settings;e&&e.muteAudio&&(this.muted=!0),this.sdk.game.addSettingsChangeListener(e=>{this.muted=!!(e&&e.muteAudio),this.listeners.settings.forEach(t=>t(e))})}catch{}return console.info(`[SDK] initialized, environment:`,this.environment),this.ready}catch(e){return console.warn(`[SDK] init failed`,e),this.sdk=null,this.ready=!1,!1}}on(e,t){(this.listeners[e]=this.listeners[e]||[]).push(t)}emit(e,...t){(this.listeners[e]||[]).forEach(e=>e(...t))}loadingStart(){try{this.ready&&this.sdk.game.loadingStart()}catch{}}loadingStop(){try{this.ready&&this.sdk.game.loadingStop()}catch{}}gameplayStart(){if(!this.gameplayActive){this.gameplayActive=!0;try{this.ready&&this.sdk.game.gameplayStart()}catch{}}}gameplayStop(){if(this.gameplayActive){this.gameplayActive=!1;try{this.ready&&this.sdk.game.gameplayStop()}catch{}}}happytime(){try{this.ready&&this.sdk.game.happytime()}catch{}}requestAd(e){return new Promise(t=>{if(!this.ready){e===`rewarded`?(this.adPlaying=!0,this.emit(`adStart`),setTimeout(()=>{this.adPlaying=!1,this.emit(`adEnd`),t(!0)},700)):t(!1);return}if(e===`midgame`&&performance.now()-this.lastMidgame<18e4){t(!1);return}let n=!1,r=e=>{this.adPlaying&&(this.adPlaying=!1,this.emit(`adEnd`)),t(e)};try{this.sdk.ad.requestAd(e,{adStarted:()=>{n=!0,this.adPlaying=!0,this.emit(`adStart`)},adFinished:()=>{e===`midgame`&&(this.lastMidgame=performance.now()),r(!0)},adError:e=>{console.info(`[SDK] ad error`,e),r(!1)}})}catch{r(!1)}setTimeout(()=>{n||r(!1)},12e3)})}saveItem(e,t){let n=$d+e;try{if(this.ready&&this.sdk.data){this.sdk.data.setItem(n,t);return}}catch{}try{localStorage.setItem(n,t)}catch{}}loadItem(e){let t=$d+e;try{if(this.ready&&this.sdk.data){let e=this.sdk.data.getItem(t);if(e!=null)return e}}catch{}try{return localStorage.getItem(t)}catch{return null}}removeItem(e){let t=$d+e;try{this.ready&&this.sdk.data&&this.sdk.data.removeItem(t)}catch{}try{localStorage.removeItem(t)}catch{}}},tf=(e,t,n)=>e<t?t:e>n?n:e,nf=(e,t,n)=>e+(t-e)*n,rf=(e,t,n)=>{let r=tf((n-e)/(t-e),0,1);return r*r*(3-2*r)},af=(e,t,n,r)=>nf(e,t,1-Math.exp(-n*r)),of=Math.PI*2;function sf(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var q=(e=0,t=1)=>e+Math.random()*(t-e),cf=e=>e[Math.floor(Math.random()*e.length)],lf=e=>Math.random()<e;function uf(e,t){let n=(t-e)%of;return n>Math.PI&&(n-=of),n<-Math.PI&&(n+=of),n}function J(e){let t=e<0;e=Math.abs(Math.round(e));let n=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return(t?`-$`:`$`)+n}function df(e){e=(e%1440+1440)%1440;let t=Math.floor(e/60),n=Math.floor(e%60);return String(t).padStart(2,`0`)+`:`+String(n).padStart(2,`0`)}function ff(e,t){let n=new Float32Array(e*e);for(let e=0;e<n.length;e++)n[e]=t();return(t,r)=>{let i=Math.floor(t),a=Math.floor(r),o=t-i,s=r-a,c=(i%e+e)%e,l=(a%e+e)%e,u=(c+1)%e,d=(l+1)%e,f=o*o*o*(o*(o*6-15)+10),p=s*s*s*(s*(s*6-15)+10),m=n[l*e+c],h=n[l*e+u],g=n[d*e+c],_=n[d*e+u];return m+(h-m)*f+(g-m)*p+(m-h-g+_)*f*p}}function pf(e,t,n,r,i=.5){let a=sf(r),o=[];for(let e=0;e<n;e++)o.push(ff(t<<e,a));let s=new Float32Array(e*e),c=0,l=1;for(let e=0;e<n;e++)c+=l,l*=i;for(let r=0;r<e;r++)for(let a=0;a<e;a++){let u=0;l=1;for(let s=0;s<n;s++){let n=t<<s;u+=o[s](a/e*n,r/e*n)*l,l*=i}s[r*e+a]=u/c}return s}var mf=new Uint8Array(512);(()=>{let e=sf(1337),t=[...Array(256).keys()];for(let n=255;n>0;n--){let r=Math.floor(e()*(n+1));[t[n],t[r]]=[t[r],t[n]]}for(let e=0;e<512;e++)mf[e]=t[e&255]})();function hf(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=n&255,s=r&255,c=(e,t)=>mf[mf[o+e]+s+t]/255,l=i*i*(3-2*i),u=a*a*(3-2*a),d=c(0,0),f=c(1,0),p=c(0,1),m=c(1,1);return d+(f-d)*l+(p-d)*u+(d-f-p+m)*l*u}function gf(e,t,n=4){let r=0,i=.5,a=1;for(let o=0;o<n;o++)r+=hf(e*a,t*a)*i,a*=2.03,i*=.5;return r/(1-.5**n)}function _f(e,t,n){switch((n%4+4)%4){case 0:return[e,t];case 1:return[t,-e];case 2:return[-e,-t];default:return[-t,e]}}new z,new z,new z,new B,new Ut,new Cn,new V;var vf=`Ava.Liam.Mia.Noah.Zoe.Leo.Ella.Max.Lily.Sam.Ivy.Jack.Ruby.Finn.Luna.Theo.Nora.Owen.Isla.Eli.Maya.Kai.Chloe.Ben.Aria.Jude.Sofia.Milo.Grace.Ezra.Hana.Omar.Lena.Ravi.Yuki.Diego.Ines.Tomas.Amara.Felix.Nina.Hugo.Elsa.Marco.Priya.Jonas.Layla.Rosa.Aiden.Emma`.split(`.`),yf=`ABCDEFGHJKLMNOPRSTVWY`,Y={},bf=4;function xf(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function Sf(e,t=!0,n=!0){return t&&(e.colorSpace=Ye),n&&(e.wrapS=e.wrapT=u),e.anisotropy=bf,e.generateMipmaps=!0,e.minFilter=v,e.magFilter=g,e.needsUpdate=!0,e}function Cf(e,t=!0,n=!0){return Sf(new Na(e),t,n)}function wf(e,t,n){let r=new Uint8Array(t*t*4);for(let i=0;i<t;i++){let a=(i-1+t)%t*t,o=(i+1)%t*t,s=i*t;for(let i=0;i<t;i++){let c=(i-1+t)%t,l=(i+1)%t,u=(e[s+c]-e[s+l])*n,d=(e[a+i]-e[o+i])*n,f=1/Math.sqrt(u*u+d*d+1),p=(s+i)*4;r[p]=(u*f*.5+.5)*255,r[p+1]=(d*f*.5+.5)*255,r[p+2]=(f*.5+.5)*255,r[p+3]=255}}return Sf(new qi(r,t,t,te),!1,!0)}function Tf(e,t){let n=xf(e,e),r=n.getContext(`2d`),i=r.createImageData(e,e),a=i.data;for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=(n*e+r)*4,o=t(r,n,n*e+r);a[i]=tf(o[0],0,255),a[i+1]=tf(o[1],0,255),a[i+2]=tf(o[2],0,255),a[i+3]=o[3]===void 0?255:o[3]}return r.putImageData(i,0,0),n}function Ef(){let e=sf(11),t=[];for(let n=0;n<256;n++){let n=e(),r=.8+e()*.12-(n<.12?.12:0),i=.53+(e()-.5)*.03,a=.42+e()*.25,o=new V().setHSL(i,a,r*.86);t.push([o.r*255,o.g*255,o.b*255])}let n=pf(512,32,3,5),r=new Float32Array(262144);Y.poolTile=Cf(Tf(512,(e,i,a)=>{let o=Math.floor(e/32),s=Math.floor(i/32),c=e-o*32,l=i-s*32,u=Math.min(c,l,31-c,31-l),d=u<1.6,f=tf((u-1)/3,0,1);if(r[a]=d?0:.35+f*.65+n[a]*.08,d){let e=222+n[a]*18;return[e-8,e,e+2]}let p=t[s*16+o],m=.94+n[a]*.12+(c<4&&l<4?.06:0);return[p[0]*m,p[1]*m,p[2]*m]})),Y.poolTileN=wf(r,512,2.2)}function Df(){let e=sf(21),t=[];for(let n=0;n<16;n++)t.push([.92+e()*.1,e()*1e3]);let n=pf(512,8,5,22),r=pf(512,64,2,23),i=new Float32Array(262144);for(let t=0;t<900;t++){let t=Math.floor(e()*512),n=Math.floor(e()*512),r=1+Math.floor(e()*2);for(let e=-r;e<=r;e++)for(let a=-r;a<=r;a++)a*a+e*e<=r*r&&(i[(n+e+512)%512*512+(t+a+512)%512]=1)}let a=new Float32Array(262144);Y.deck=Cf(Tf(512,(e,o,s)=>{let c=Math.floor(e/128),l=Math.floor(o/128),u=e-c*128,d=o-l*128,f=Math.min(u,d,127-u,127-d),p=f<2,m=t[l*4+c],h=Math.abs(Math.sin((e*.02+n[s]*6+m[1])*1.3));if(a[s]=p?0:.6+n[s]*.25-i[s]*.4+tf(f/4,0,1)*.2,p)return[150,140,124];let g=m[0]*(.86+n[s]*.22+r[s]*.06)*(.96+h*.05)-i[s]*.18;return[228*g,214*g,188*g]})),Y.deckN=wf(a,512,3.5)}function Of(){let e=1024,t=pf(e,4,5,31),n=pf(e,32,3,32),r=sf(33),i=new Float32Array(e*e);for(let t=0;t<6e4;t++){let t=r()*e,n=r()*e,a=4+r()*9,o=-Math.PI/2+(r()-.5)*.9,s=.5+r()*.5;for(let r=0;r<a;r++){let c=Math.floor(t+Math.cos(o)*r+e)%e,l=Math.floor(n+Math.sin(o)*r+e)%e;i[l*e+c]=Math.max(i[l*e+c],s*(1-r/a*.5))}}let a=new Float32Array(e*e);Y.grass=Cf(Tf(e,(e,r,o)=>{let s=t[o],c=n[o],l=i[o];a[o]=l*.8+c*.4;let u=tf((s-.55)*2.2,0,1),d=62+u*40,f=108+u*22,p=38+u*8,m=.62+l*.55+(c-.5)*.25;return[d*m,f*m,p*m]})),Y.grassN=wf(a,e,1.6)}function kf(){let e=pf(512,8,5,41),t=pf(512,64,2,42),n=new Float32Array(262144);Y.concrete=Cf(Tf(512,(r,i,a)=>{n[a]=e[a]*.6+t[a]*.4;let o=182*(.86+e[a]*.2+(t[a]-.5)*.08);return[o,o*.99,o*.96]})),Y.concreteN=wf(n,512,1.4)}function Af(){let e=512/5,t=pf(512,4,4,51),n=sf(52),r=[];for(let e=0;e<5;e++)r.push([.85+n()*.25,n()*100]);let i=new Float32Array(262144);Y.wood=Cf(Tf(512,(n,a,o)=>{let s=Math.floor(n/e),c=n-s*e,l=r[s],u=c<3||c>99.4,d=Math.sin((a*.06+t[o]*9+l[1])*2)*.5+.5,f=Math.abs(Math.sin(c*.15+t[o]*4+l[1]))**6;if(i[o]=u?0:.7+d*.1,u)return[60,40,25];let p=l[0]*(.8+d*.15-f*.12);return[176*p,122*p,76*p]})),Y.woodN=wf(i,512,2.5)}function jf(){let e=pf(512,16,4,61),t=sf(62),n=new Float32Array(262144);Y.asphalt=Cf(Tf(512,(r,i,a)=>{let o=t();n[a]=e[a]+(o>.97?.4:0);let s=58+e[a]*26+(o>.96?40:o<.03?-20:0);return[s,s,s*1.03]})),Y.asphaltN=wf(n,512,1.2)}function Mf(){let e=pf(512,8,5,71),t=sf(72),n=new Float32Array(262144);Y.sand=Cf(Tf(512,(r,i,a)=>{let o=t();n[a]=e[a]*.7+o*.3;let s=.85+e[a]*.2+(o-.5)*.12;return[236*s,214*s,170*s]})),Y.sandN=wf(n,512,1.5)}function Nf(){let e=pf(256,8,4,81),t=new Float32Array(65536);Y.bark=Cf(Tf(256,(n,r,i)=>{let a=(1-r%32/32)**3;t[i]=a*.8+e[i]*.3;let o=.55+a*.45+(e[i]-.5)*.25;return[150*o,118*o,82*o]})),Y.barkN=wf(t,256,4)}function Pf(){let e=xf(512,128),t=e.getContext(`2d`);t.clearRect(0,0,512,128);let n=sf(91);for(let e=0;e<70;e++){let r=e/70,i=10+r*492,a=(1-r**1.6)*58+8;for(let e of[-1,1]){let o=e*(.95+n()*.25),s=i+Math.cos(o-e*.1)*a*.5+a*.55,c=64+Math.sin(o)*a,l=t.createLinearGradient(i,64,s,c);l.addColorStop(0,`rgb(${50+n()*15},${100+n()*25},${30+n()*10})`),l.addColorStop(1,`rgb(${85+n()*25},${140+n()*25},${45+n()*15})`),t.strokeStyle=l,t.lineWidth=6-r*3,t.lineCap=`round`,t.beginPath(),t.moveTo(i,64),t.quadraticCurveTo(i+a*.3,64+Math.sin(o)*a*.6,s,c),t.stroke()}}t.strokeStyle=`#7a8a3a`,t.lineWidth=4,t.beginPath(),t.moveTo(0,64),t.lineTo(512,64),t.stroke(),Y.palmLeaf=Cf(e,!0,!1)}function Ff(){let e=xf(256,256),t=e.getContext(`2d`),n=sf(101);for(let e=0;e<46;e++){let e=20+n()*216,r=256*(.45+n()*.55),i=(n()-.5)*60,a=5+n()*6,o=t.createLinearGradient(0,256,0,256-r),s=.75+n()*.3;o.addColorStop(0,`rgb(${62*s},${98*s},${36*s})`),o.addColorStop(1,`rgb(${105*s+25},${150*s+20},${55*s})`),t.fillStyle=o,t.beginPath(),t.moveTo(e-a/2,256),t.quadraticCurveTo(e-a/4+i*.4,256-r*.5,e+i,256-r),t.quadraticCurveTo(e+a/4+i*.4,256-r*.5,e+a/2,256),t.closePath(),t.fill()}Y.grassBlades=Cf(e,!0,!1)}function If(){let e=sf(111),t=[];for(let n=0;n<36;n++){let n=Math.round((e()-.5)*30),r=Math.round((e()-.5)*30);n===0&&r===0&&(n=3);let i=Math.hypot(n,r);t.push({kx:n,ky:r,a:1/i**1.25,p:e()*Math.PI*2})}let n=pf(512,16,3,112),r=new Float32Array(262144);for(let e=0;e<512;e++)for(let i=0;i<512;i++){let a=0,o=i/512,s=e/512;for(let e of t)a+=Math.sin((e.kx*o+e.ky*s)*Math.PI*2+e.p)*e.a;r[e*512+i]=a+n[e*512+i]*.6}Y.waterN=wf(r,512,2)}function Lf(){let e=pf(256,4,5,121),t=new Uint8Array(262144);for(let n=0;n<65536;n++){let r=e[n]*255;t[n*4]=r,t[n*4+1]=r,t[n*4+2]=r,t[n*4+3]=255}Y.macro=Sf(new qi(t,256,256,te),!1,!0)}function Rf(){let e=pf(256,16,4,131),t=sf(132),n=new Float32Array(65536);for(let e=0;e<2600;e++){let e=t()*256,r=t()*256,i=2+t()*4,a=.4+t()*.6;for(let t=-i;t<=i;t++)for(let o=-i;o<=i;o++){let s=o*o/(i*i)+t*t/(i*i*.4);if(s<1){let i=(Math.floor(r+t)%256+256)%256*256+(Math.floor(e+o)%256+256)%256;n[i]=Math.max(n[i],a*(1-s*.5))}}}let r=new Float32Array(65536);Y.foliage=Cf(Tf(256,(t,i,a)=>{r[a]=n[a];let o=.35+n[a]*.75+(e[a]-.5)*.3;return[48*o,104*o,36*o]})),Y.foliageN=wf(r,256,3)}function zf(){let e=pf(256,8,5,141),t=new Float32Array(65536);Y.rock=Cf(Tf(256,(n,r,i)=>{t[i]=e[i];let a=.55+e[i]*.5;return[150*a,138*a,122*a]})),Y.rockN=wf(t,256,5)}function Bf(){let e=sf(151),t=xf(256,256),n=t.getContext(`2d`);n.fillStyle=`#8a6a3a`,n.fillRect(0,0,256,256);for(let t=0;t<2200;t++){let t=e()*256,r=e()*256,i=10+e()*26,a=120+e()*90;n.strokeStyle=`rgba(${a},${a*.78},${a*.42},0.8)`,n.lineWidth=1+e()*1.5,n.beginPath(),n.moveTo(t,r),n.lineTo(t+(e()-.5)*4,r+i),n.stroke()}Y.thatch=Cf(t)}function Vf(){let e=xf(256,128),t=e.getContext(`2d`);t.clearRect(0,0,256,128),t.fillStyle=`#f3f3ee`,t.fillRect(0,26,256,9),t.fillRect(0,92,256,9);for(let e=0;e<8;e++){let n=e*32+6;t.beginPath(),t.moveTo(n,128),t.lineTo(n,12),t.lineTo(n+10,2),t.lineTo(n+20,12),t.lineTo(n+20,128),t.closePath(),t.fill()}t.strokeStyle=`rgba(0,0,0,0.15)`,t.lineWidth=1;for(let e=0;e<8;e++)t.beginPath(),t.moveTo(e*32+26,14),t.lineTo(e*32+26,128),t.stroke();Y.fence=Cf(e,!0,!0)}function Hf(e,t,n=8){let r=xf(256,64),i=r.getContext(`2d`);for(let r=0;r<n;r++)i.fillStyle=r%2?t:e,i.fillRect(r*256/n,0,256/n+1,64);return Cf(r)}function Uf(e,t={}){let n=t.w||512,r=t.h||128,i=xf(n,r),a=i.getContext(`2d`),o=t.radius??18,s=t.bg||`#1aa7e0`;if(a.clearRect(0,0,n,r),a.fillStyle=s,Wf(a,0,0,n,r,o),a.fill(),t.bg2){let e=a.createLinearGradient(0,0,0,r);e.addColorStop(0,s),e.addColorStop(1,t.bg2),a.fillStyle=e,Wf(a,0,0,n,r,o),a.fill()}t.border&&(a.strokeStyle=t.border,a.lineWidth=t.borderW||8,Wf(a,6,6,n-12,r-12,o-4),a.stroke()),a.textAlign=`center`,a.textBaseline=`middle`;let c=Array.isArray(e)?e:[e],l=r/(c.length+.2);return c.forEach((e,r)=>{let i=(t.size||.62)*l*(r===0?1:.62);a.font=`${t.italic?`italic `:``}900 ${i}px "Arial Black", "Segoe UI", system-ui, sans-serif`;let o=l*(r+.6);t.shadow!==!1&&(a.fillStyle=`rgba(0,0,0,0.3)`,a.fillText(e,n/2+3,o+4)),a.fillStyle=t.fg||`#ffffff`,a.fillText(e,n/2,o)}),Cf(i,!0,!1)}function Wf(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function Gf(){let e=1024,t=xf(e,320),n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,320);r.addColorStop(0,`#22c3f5`),r.addColorStop(.6,`#0c84c9`),r.addColorStop(1,`#075a92`),n.fillStyle=r,Wf(n,10,10,1004,300,60),n.fill(),n.strokeStyle=`#ffffff`,n.lineWidth=12,Wf(n,22,22,980,276,50),n.stroke();let i=n.createRadialGradient(e*.82,92,10,e*.82,92,80);i.addColorStop(0,`#fff7b8`),i.addColorStop(.5,`#ffd34a`),i.addColorStop(1,`rgba(255,160,40,0)`),n.fillStyle=i,n.beginPath(),n.arc(e*.82,92,80,0,Math.PI*2),n.fill();for(let e=0;e<2;e++){n.fillStyle=e?`rgba(255,255,255,0.95)`:`rgba(150,235,255,0.7)`,n.beginPath();let t=250+e*16;n.moveTo(30,290);for(let r=30;r<=994;r+=8)n.lineTo(r,t+Math.sin(r*.025+e*2)*12);n.lineTo(994,290),n.closePath(),n.fill()}n.textAlign=`center`,n.textBaseline=`middle`,n.font=`italic 900 128px "Arial Black", "Segoe UI", system-ui, sans-serif`,n.fillStyle=`#064a78`,n.fillText(`SPLASH HAVEN`,518,142.4),n.fillStyle=`#ffffff`,n.fillText(`SPLASH HAVEN`,e/2,134.4),n.font=`900 34px "Arial Black", "Segoe UI", system-ui, sans-serif`,n.fillStyle=`#0a5d93`,n.fillText(`W A T E R P A R K`,e/2,268),Y.logo=Cf(t,!0,!1)}function Kf(){let e=xf(512,512),t=e.getContext(`2d`);t.clearRect(0,0,512,512),t.fillStyle=`rgba(240,240,235,0.9)`;let n=512/20;for(let e=0;e<=7;e++){let r=e*2.6*n+10;t.fillRect(r,0,4,5*n),t.fillRect(r,512-5*n,4,5*n)}Y.parkingLines=Cf(e,!0,!0)}function qf(){let e=xf(64,256),t=e.getContext(`2d`);t.clearRect(0,0,64,256),t.fillStyle=`rgba(255,214,60,0.95)`,t.fillRect(28,0,8,150),Y.roadLine=Cf(e,!0,!0)}function Jf(){let e=e=>{let t=xf(128,128);return e(t.getContext(`2d`)),Cf(t,!0,!1)},t=(e,t)=>{e.fillStyle=`rgba(0,0,0,0.25)`,e.beginPath(),e.arc(66,62,54,0,Math.PI*2),e.fill(),e.fillStyle=t,e.beginPath(),e.arc(64,58,52,0,Math.PI*2),e.fill(),e.strokeStyle=`#ffffff`,e.lineWidth=7,e.stroke()},n=(e,t)=>{e.fillStyle=`#3a2a00`,e.beginPath(),e.arc(46,48,7,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(82,48,7,0,Math.PI*2),e.fill(),e.strokeStyle=`#3a2a00`,e.lineWidth=7,e.lineCap=`round`,e.beginPath(),t===`happy`?e.arc(64,64,22,.15*Math.PI,.85*Math.PI):e.arc(64,96,22,1.2*Math.PI,1.8*Math.PI),e.stroke()};Y.iconHappy=e(e=>{t(e,`#ffd23a`),n(e,`happy`)}),Y.iconAngry=e(e=>{t(e,`#ff5a3a`),n(e,`sad`)}),Y.iconHelp=e(e=>{t(e,`#ff2a2a`),e.fillStyle=`#fff`,e.font=`900 80px Arial`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`!`,64,62)}),Y.iconWrench=e(e=>{t(e,`#ff9a1a`),e.fillStyle=`#fff`,e.font=`900 64px Arial`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`✖`,64,60)}),Y.iconVip=e(e=>{t(e,`#b06cff`),e.fillStyle=`#ffe36a`,e.font=`900 56px Arial`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`★`,64,60)}),Y.iconDirty=e(e=>{t(e,`#7a9a3a`),e.fillStyle=`#fff`,e.font=`900 54px Arial`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`~`,64,58)}),Y.spark=e(e=>{let t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.25,`rgba(255,255,255,0.8)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,128,128)})}async function Yf(e,t){bf=Math.min(8,e.capabilities.getMaxAnisotropy());let n=[[`Tiling the pools`,Ef],[`Laying stone decks`,Df],[`Growing grass`,Of],[`Pouring concrete`,kf],[`Sawing planks`,Af],[`Paving roads`,jf],[`Raking sand`,Mf],[`Planting palms`,()=>{Nf(),Pf(),Ff(),Rf()}],[`Making waves`,If],[`Painting signs`,()=>{Lf(),zf(),Bf(),Vf(),Gf(),Kf(),qf(),Jf()}]];for(let e=0;e<n.length;e++)t&&t(e/n.length,n[e][0]+`…`),await new Promise(e=>setTimeout(e,0)),n[e][1]()}var Xf=-.12,Zf=1260,Qf=6e3,$f=[`1,2`,`2,2`,`1,3`,`2,3`],ep={slide:[16726843,2006015,16761370,3068779,10636287,16742938,16732067,1626569],fabric:[15811901,2919668,16764730,3260522,16743096,16777215,8211680,16747050]},tp={uTime:{value:0},uWaterY:{value:Xf},uSunI:{value:1},uAmb:{value:1},uGlow:{value:0},uWind:{value:1},uNight:{value:0}},X={},np=new Map,rp=`
float causticsFn(vec2 p, float t) {
  vec2 i = p; float c = 1.0; float inten = 0.005;
  for (int n = 0; n < 4; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 4.0;
  c = 1.17 - pow(c, 1.4);
  return pow(abs(c), 8.0);
}
`;function ip(e,t={}){let n=t.glow||`vec3(0.10, 0.62, 0.95)`;return e.onBeforeCompile=e=>{e.uniforms.uTime=tp.uTime,e.uniforms.uWaterY=tp.uWaterY,e.uniforms.uSunI=tp.uSunI,e.uniforms.uAmb=tp.uAmb,e.uniforms.uGlow=tp.uGlow,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPosU;`).replace(`#include <project_vertex>`,`#include <project_vertex>
{ vec4 wpu = vec4(transformed,1.0);
#ifdef USE_INSTANCING
 wpu = instanceMatrix * wpu;
#endif
 vWPosU = (modelMatrix * wpu).xyz; }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vWPosU;
uniform float uTime; uniform float uWaterY; uniform float uSunI; uniform float uAmb; uniform float uGlow;
`+rp).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
        float uwDepth = uWaterY - vWPosU.y;
        float csv = 0.0;
        if (uwDepth > 0.0) {
          csv = causticsFn(mod(vWPosU.xz * 2.4166, 6.2831853) - 250.0, uTime * 0.55 + 23.0);
          float csv2 = causticsFn(mod(vWPosU.xz * 1.37 + 1.7, 6.2831853) - 250.0, uTime * 0.41 + 7.0);
          csv = csv * 0.65 + csv2 * 0.5;
          reflectedLight.directDiffuse *= (0.5 + csv * 2.6 * smoothstep(0.0, 0.25, uwDepth));
        }`).replace(`#include <opaque_fragment>`,`
        if (uwDepth > 0.0) {
          vec3 deepCol = vec3(0.015, 0.20, 0.30) * (0.25 + 0.75 * uAmb);
          float ab = 1.0 - exp(-uwDepth * 0.42);
          outgoingLight = mix(outgoingLight, deepCol, ab * 0.75);
          outgoingLight += uGlow * ${n} * (0.55 + csv * 0.9) * (0.6 + 0.4 * smoothstep(0.0, 1.2, uwDepth));
        }
        #include <opaque_fragment>`)},e.customProgramCacheKey=()=>`underwater`+n,e}function ap(e,t=`leaf`,n=1){let r=e.onBeforeCompile;if(e.onBeforeCompile=(e,i)=>{r&&r(e,i),e.uniforms.uTime=tp.uTime,e.uniforms.uWind=tp.uWind,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime; uniform float uWind;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #endif
          ip += vec3(modelMatrix[3][0], 0.0, modelMatrix[3][2]);
          float ph = ip.x * 0.37 + ip.z * 0.21;
          float sw = sin(uTime * 1.25 + ph) * 0.6 + sin(uTime * 2.9 + ph * 1.7) * 0.25 + sin(uTime * 5.3 + ph * 3.1) * 0.08;
          ${t===`leaf`?`float wgt = uv.x * uv.x * `+n.toFixed(3)+`;
 transformed.x += sw * 0.22 * wgt * uWind; transformed.y += (sin(uTime * 3.7 + ph + uv.x * 4.0) * 0.06 - 0.02) * wgt * uWind; transformed.z += cos(uTime * 1.1 + ph) * 0.12 * wgt * uWind;`:t===`grass`?`float wgt = uv.y * `+n.toFixed(3)+`;
 float gph = ip.x * 1.7 + ip.z * 1.3; transformed.x += (sin(uTime * 2.1 + gph) * 0.08 + sin(uTime * 4.7 + gph * 2.0) * 0.03) * wgt * uWind; transformed.z += cos(uTime * 1.7 + gph) * 0.05 * wgt * uWind;`:`float wgt = max(0.0, position.y) * `+n.toFixed(3)+`;
 wgt = wgt * wgt; transformed.x += sw * 0.03 * wgt * uWind; transformed.z += cos(uTime * 0.9 + ph) * 0.015 * wgt * uWind;`}
        }`)},t===`grass`){let t=e.onBeforeCompile;e.onBeforeCompile=(e,n)=>{t(e,n),e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
 normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)}}return e.customProgramCacheKey=()=>`wind_`+t+n,e}function op(e,t=1,n=1){let r=e.clone();return r.repeat.set(t,n),r.needsUpdate=!0,r}function sp(){X.poolTile=ip(new U({map:Y.poolTile,normalMap:Y.poolTileN,normalScale:new R(.6,.6),roughness:.22,metalness:0})),X.poolTileDark=ip(new U({color:868216,roughness:.3})),X.poolTileWarm=ip(new U({map:Y.poolTile,normalMap:Y.poolTileN,color:15267583,roughness:.2}),{glow:`vec3(0.95, 0.65, 0.25)`}),X.sandUW=ip(new U({map:Y.sand,normalMap:Y.sandN,roughness:.9})),X.deck=new U({map:Y.deck,normalMap:Y.deckN,roughness:.78,normalScale:new R(.8,.8)}),X.coping=new U({color:15920870,roughness:.55,map:Y.concrete,normalMap:Y.concreteN,normalScale:new R(.3,.3)}),X.concrete=new U({map:Y.concrete,normalMap:Y.concreteN,roughness:.9,color:14736854}),X.concreteDark=new U({map:Y.concrete,normalMap:Y.concreteN,roughness:.9,color:9407364}),X.steel=new U({color:14672872,metalness:.85,roughness:.32}),X.steelDark=new U({color:5922920,metalness:.8,roughness:.4}),X.chrome=new U({color:16777215,metalness:1,roughness:.08}),X.wood=new U({map:Y.wood,normalMap:Y.woodN,roughness:.75}),X.woodDark=new U({map:Y.wood,normalMap:Y.woodN,roughness:.7,color:9069640}),X.whitePaint=new U({color:16119280,roughness:.5}),X.stucco=new U({color:15985368,roughness:.92,map:Y.concrete,normalMap:Y.concreteN,normalScale:new R(.7,.7)}),X.blackPlastic=new U({color:1842978,roughness:.55}),X.rubber=new U({color:1381653,roughness:.9}),X.glass=new Ds({color:10474728,metalness:0,roughness:.05,transparent:!0,opacity:.35,envMapIntensity:1.5,depthWrite:!1}),X.glassDark=new U({color:2243144,metalness:.3,roughness:.08}),X.sand=new U({map:Y.sand,normalMap:Y.sandN,roughness:.95}),X.asphalt=new U({map:Y.asphalt,normalMap:Y.asphaltN,roughness:.92}),X.rock=new U({map:Y.rock,normalMap:Y.rockN,roughness:.95}),X.thatch=new U({map:Y.thatch,roughness:1,side:2}),X.bark=ap(new U({map:Y.bark,normalMap:Y.barkN,roughness:.95}),`trunk`,.11),X.palmLeaf=ap(new U({map:Y.palmLeaf,alphaTest:.45,side:2,roughness:.75}),`leaf`,1),X.foliage=new U({map:Y.foliage,normalMap:Y.foliageN,roughness:.9}),X.foliageDark=new U({map:Y.foliage,normalMap:Y.foliageN,roughness:.9,color:10137738}),X.fence=new U({map:Y.fence,alphaTest:.5,side:2,roughness:.6}),X.lampGlow=new U({color:16773584,emissive:16765578,emissiveIntensity:0,roughness:.3}),X.poolLight=new U({color:14678783,emissive:9431295,emissiveIntensity:.4,roughness:.2}),X.fire=new xi({color:16753962,transparent:!0,opacity:.9,blending:2,depthWrite:!1}),X.redLight=new U({color:16720418,emissive:16711680,emissiveIntensity:2}),X.greenLight=new U({color:2293572,emissive:65331,emissiveIntensity:1.5}),X.screen=new U({color:1118481,emissive:3852543,emissiveIntensity:.6,roughness:.2}),X.ghostOk=new xi({color:4521881,transparent:!0,opacity:.38,depthWrite:!1}),X.ghostBad=new xi({color:16729156,transparent:!0,opacity:.38,depthWrite:!1}),X.tex=op}function cp(e,t=.35){let n=`p`+e+`_`+t;return np.has(n)||np.set(n,new U({color:e,roughness:t,metalness:0})),np.get(n)}function lp(e){let t=`s`+e;return np.has(t)||np.set(t,new Ds({color:e,roughness:.28,metalness:0,clearcoat:1,clearcoatRoughness:.08,side:2})),np.get(t)}function up(e){let t=`f`+e;return np.has(t)||np.set(t,new U({color:e,roughness:.92,side:2})),np.get(t)}function Z(e,t=.6){let n=`c`+e+`_`+t;return np.has(n)||np.set(n,new U({color:e,roughness:t})),np.get(n)}function dp(e,t=0){let n=new U({map:e,roughness:.5,transparent:!0,alphaTest:.05});return t>0&&(n.emissive=new V(16777215),n.emissiveMap=e,n.emissiveIntensity=t,n.userData.nightSign=!0),n}var fp={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},pp=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},mp=new pc(-1,1,1,-1,0,1),hp=new class extends Ur{constructor(){super(),this.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new H([0,2,0,0,2,0],2))}},gp=class{constructor(e){this._mesh=new Ni(hp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},_p=class extends pp{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ts?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ss.clone(e.uniforms),this.material=new Ts({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},vp=class extends pp{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},yp=class extends pp{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},bp=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:E}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _p(fp),this.copyPass.material.blending=0,this.timer=new bc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}vp!==void 0&&(r instanceof vp?n=!0:r instanceof yp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},xp=class extends pp{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new V}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Sp={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new V(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Cp=class e extends pp{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new V(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(i,a,{type:E,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new dn(i,a,{type:E,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new dn(i,a,{type:E,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Sp;this.highPassUniforms=Ss.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ts({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ss.clone(fp.uniforms),this.blendMaterial=new Ts({uniforms:this.copyUniforms,vertexShader:fp.vertexShader,fragmentShader:fp.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new V,this._oldClearAlpha=1,this._basic=new xi,this._fsQuad=new gp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Ts({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ts({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Cp.BlurDirectionX=new R(1,0),Cp.BlurDirectionY=new R(0,1);var wp={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Tp=class extends pp{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ss.clone(wp.uniforms),this.material=new Es({name:wp.name,uniforms:this.uniforms,vertexShader:wp.vertexShader,fragmentShader:wp.fragmentShader}),this._fsQuad=new gp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ep={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new R(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Dp=class extends _p{constructor(){super(Ep)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}},Op={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new B},cameraProjectionMatrixInverse:{value:new B},cameraWorldMatrix:{value:new B},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new z(-1,-1,-1)},sceneBoxMax:{value:new z(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},kp={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ap={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function jp(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Mp(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new z(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new qi(i,t,t);return a.wrapS=u,a.wrapT=u,a.needsUpdate=!0,a}function Mp(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Np={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Pp(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new R},cameraProjectionMatrixInverse:{value:new B},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Pp(e,t,n){let r=Fp(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Fp(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new z(Math.cos(a),Math.sin(a),o))}return r}var Ip=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,ee=_-1+3*d,M=v-1+3*d,te=c&255,N=l&255,ne=u&255,re=this.perm[te+this.perm[N+this.perm[ne]]]%12,ie=this.perm[te+y+this.perm[N+b+this.perm[ne+x]]]%12,ae=this.perm[te+S+this.perm[N+C+this.perm[ne+w]]]%12,oe=this.perm[te+1+this.perm[N+1+this.perm[ne+1]]]%12,se=.6-g*g-_*_-v*v;se<0?r=0:(se*=se,r=se*se*this._dot3(this.grad3[re],g,_,v));let ce=.6-T*T-E*E-D*D;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[ie],T,E,D));let le=.6-O*O-k*k-A*A;le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[ae],O,k,A));let P=.6-j*j-ee*ee-M*M;return P<0?o=0:(P*=P,o=P*P*this._dot3(this.grad3[oe],j,ee,M)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,ee=T>D?2:0,M=+(E>D),te=O+k+A+j+ee+M,N=+(a[te][0]>=3),ne=+(a[te][1]>=3),re=+(a[te][2]>=3),ie=+(a[te][3]>=3),ae=+(a[te][0]>=2),oe=+(a[te][1]>=2),se=+(a[te][2]>=2),ce=+(a[te][3]>=2),le=+(a[te][0]>=1),P=+(a[te][1]>=1),ue=+(a[te][2]>=1),de=+(a[te][3]>=1),fe=w-N+c,pe=T-ne+c,me=E-re+c,he=D-ie+c,ge=w-ae+2*c,_e=T-oe+2*c,ve=E-se+2*c,ye=D-ce+2*c,be=w-le+3*c,xe=T-P+3*c,Se=E-ue+3*c,Ce=D-de+3*c,we=w-1+4*c,Te=T-1+4*c,Ee=E-1+4*c,De=D-1+4*c,Oe=h&255,ke=g&255,Ae=_&255,je=v&255,Me=o[Oe+o[ke+o[Ae+o[je]]]]%32,Ne=o[Oe+N+o[ke+ne+o[Ae+re+o[je+ie]]]]%32,Pe=o[Oe+ae+o[ke+oe+o[Ae+se+o[je+ce]]]]%32,F=o[Oe+le+o[ke+P+o[Ae+ue+o[je+de]]]]%32,Fe=o[Oe+1+o[ke+1+o[Ae+1+o[je+1]]]]%32,Ie=.6-w*w-T*T-E*E-D*D;Ie<0?l=0:(Ie*=Ie,l=Ie*Ie*this._dot4(i[Me],w,T,E,D));let Le=.6-fe*fe-pe*pe-me*me-he*he;Le<0?u=0:(Le*=Le,u=Le*Le*this._dot4(i[Ne],fe,pe,me,he));let I=.6-ge*ge-_e*_e-ve*ve-ye*ye;I<0?d=0:(I*=I,d=I*I*this._dot4(i[Pe],ge,_e,ve,ye));let Re=.6-be*be-xe*xe-Se*Se-Ce*Ce;Re<0?f=0:(Re*=Re,f=Re*Re*this._dot4(i[F],be,xe,Se,Ce));let ze=.6-we*we-Te*Te-Ee*Ee-De*De;return ze<0?p=0:(ze*=ze,p=ze*ze*this._dot4(i[Fe],we,Te,Ee,De)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Lp=class e extends pp{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=jp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new dn(this.width,this.height,{type:E,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ts({defines:Object.assign({},Op.defines),uniforms:Ss.clone(Op.uniforms),vertexShader:Op.vertexShader,fragmentShader:Op.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Os,this.normalMaterial.blending=0,this.pdMaterial=new Ts({defines:Object.assign({},Np.defines),uniforms:Ss.clone(Np.uniforms),vertexShader:Np.vertexShader,fragmentShader:Np.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ts({defines:Object.assign({},kp.defines),uniforms:Ss.clone(kp.uniforms),vertexShader:kp.vertexShader,fragmentShader:kp.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ts({uniforms:Ss.clone(fp.uniforms),vertexShader:fp.vertexShader,fragmentShader:fp.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new Ts({uniforms:Ss.clone(Ap.uniforms),vertexShader:Ap.vertexShader,fragmentShader:Ap.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new gp(null),this._originalClearColor=new V,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new Pa;e.format=ne,e.type=k,this.normalRenderTarget=new dn(this.width,this.height,{minFilter:p,magFilter:p,type:E,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Pp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ip,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new qi(r,e,e,te,y);return i.wrapS=u,i.wrapT=u,i.needsUpdate=!0,i}};Lp.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Rp={uniforms:{tDiffuse:{value:null},uUnder:{value:0},uTime:{value:0},uSat:{value:1.18},uVig:{value:.32},uRes:{value:new R(1,1)},uFlash:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uUnder, uTime, uSat, uVig, uFlash; uniform vec2 uRes;
    varying vec2 vUv;
    void main(){
      vec2 uv = vUv;
      if (uUnder > 0.0) {
        uv += vec2(sin(uv.y * 22.0 + uTime * 2.2), cos(uv.x * 18.0 + uTime * 1.7)) * 0.0045 * uUnder;
      }
      vec3 c = texture2D(tDiffuse, uv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, uSat);
      // gentle warm highlights / cool shadows split-tone
      c *= mix(vec3(0.97, 1.0, 1.04), vec3(1.03, 1.0, 0.97), smoothstep(0.0, 1.2, l));
      if (uUnder > 0.0) {
        vec3 deep = vec3(0.02, 0.22, 0.30);
        float d = length(vUv - 0.5);
        c = mix(c, deep * (0.6 + l * 0.8), 0.45 * uUnder);
        c *= mix(1.0, 0.55, smoothstep(0.2, 0.75, d) * uUnder);
        c += vec3(0.03, 0.09, 0.1) * uUnder * (0.5 + 0.5 * sin(uv.x * 40.0 + uTime * 3.0) * sin(uv.y * 30.0 - uTime * 2.0)) * smoothstep(0.6, 0.0, vUv.y - 0.4);
      }
      float v = smoothstep(0.85, 0.25, length((vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0) * 0.9));
      c *= mix(1.0 - uVig, 1.0, v);
      c += uFlash;
      gl_FragColor = vec4(c, 1.0);
    }`};function zp(e){let t=new Zd({canvas:e,antialias:!1,powerPreference:`high-performance`,stencil:!1,alpha:!1});return t.outputColorSpace=Ye,t.toneMapping=4,t.toneMappingExposure=.6,t.shadowMap.enabled=!0,t.shadowMap.type=1,t.transmissionResolutionScale=.5,t.setClearColor(8894688),t}var Bp=class{constructor(e,t,n,r){this.renderer=e,this.scene=t,this.camera=n,this.vmScene=r,this.quality=null,this.composer=null}build(e){this.quality=e;let t=this.renderer,n=Math.min(window.devicePixelRatio||1,e===`high`?2:e===`medium`?1.5:1);t.setPixelRatio(n*(e===`low`?.85:1));let r=window.innerWidth,i=window.innerHeight;t.setSize(r,i,!1),this.composer&&this.composer.dispose();let a=new bp(t,new dn(r*t.getPixelRatio(),i*t.getPixelRatio(),{type:E}));if(a.setPixelRatio(t.getPixelRatio()),a.setSize(r,i),this.renderPass=new xp(this.scene,this.camera),a.addPass(this.renderPass),this.gtao=null,e===`high`)try{this.gtao=new Lp(this.scene,this.camera,r,i),this.gtao.output=Lp.OUTPUT.Default,this.gtao.blendIntensity=.75,this.gtao.updateGtaoMaterial({radius:.8,distanceExponent:1.5,thickness:1.2,scale:1,samples:12}),a.addPass(this.gtao)}catch(e){console.warn(`GTAO unavailable`,e),this.gtao=null}let o=new xp(this.vmScene,this.camera);o.clear=!1,o.clearDepth=!0,a.addPass(o),this.vmPass=o,e===`low`?this.bloom=null:(this.bloom=new Cp(new R(r,i),.32,.55,.92),a.addPass(this.bloom)),this.grade=new _p(Rp),this.grade.uniforms.uRes.value.set(r,i),a.addPass(this.grade),a.addPass(new Tp),this.fxaa=new Dp,this.fxaa.setSize(r*t.getPixelRatio(),i*t.getPixelRatio()),a.addPass(this.fxaa),this.composer=a}resize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.fxaa&&this.fxaa.setSize(e*this.renderer.getPixelRatio(),t*this.renderer.getPixelRatio()),this.grade.uniforms.uRes.value.set(e,t)}render(e){let t=this.grade.uniforms;if(t.uTime.value+=e,t.uUnder.value+=((G.player&&G.player.underwater?1:0)-t.uUnder.value)*Math.min(1,e*8),t.uFlash.value*=Math.max(0,1-e*4),this.bloom){let e=G.env?G.env.nightF:0;this.bloom.strength=.3+e*.45,this.bloom.threshold=(this._bloomT??1.6)*(1-e*.55)}this.vmScene.environment=this.scene.environment,this.composer.render(e)}},Vp=class e extends Ni{constructor(){let t=e.SkyShader,n=new Ts({name:t.name,uniforms:Ss.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new La(1,1,1),n),this.isSky=!0}};Vp.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new z},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Hp={sunny:{cover:.18,density:.35,sun:1,arrive:1.18,label:`Sunny`,icon:`☀️`,temp:[29,34],fog:.0016,thirst:1.35},partly:{cover:.42,density:.45,sun:.92,arrive:1,label:`Partly cloudy`,icon:`⛅`,temp:[25,29],fog:.0019,thirst:1.1},overcast:{cover:.78,density:.7,sun:.5,arrive:.72,label:`Overcast`,icon:`☁️`,temp:[21,25],fog:.0028,thirst:.9},rain:{cover:.95,density:.9,sun:.32,arrive:.4,label:`Rain shower`,icon:`🌧️`,temp:[19,22],fog:.0045,thirst:.8}},Up=class{constructor(e,t){this.scene=e,this.renderer=t,this.weather=`sunny`,this.weatherBlend={cover:.18,density:.35,sun:1,fog:.0016,rain:0},this.temp=30,this.sunDir=new z(0,1,0),this.nightF=0,this.lastEnvEl=-999,this.lastEnvCover=-1,this.envTimer=0,this.sky=new Vp,this.sky.scale.setScalar(9e3),this.sky.material.uniforms.turbidity.value=3.2,this.sky.material.uniforms.rayleigh.value=1.6,this.sky.material.uniforms.mieCoefficient.value=.004,this.sky.material.uniforms.mieDirectionalG.value=.84,this.sky.material.uniforms.cloudScale.value=22e-5,this.sky.material.uniforms.cloudSpeed.value=3e-5,this.sky.material.uniforms.cloudElevation.value=.55,this.sky.frustumCulled=!1,e.add(this.sky);let n=(e,t)=>{e.uniforms.skyGain={value:t},e.fragmentShader=e.fragmentShader.replace(`uniform float showSunDisc;`,`uniform float showSunDisc;
uniform float skyGain;`).replace(`gl_FragColor = vec4( texColor, 1.0 );`,`gl_FragColor = vec4( texColor * skyGain, 1.0 );`)};n(this.sky.material,.38),this.envScene=new Xn,this.envSky=new Vp,this.envSky.scale.setScalar(4e3);let r={};for(let e of Object.keys(this.sky.material.uniforms))r[e]=this.sky.material.uniforms[e];this.envSky.material.uniforms=r,n(this.envSky.material,1),this.envSky.material.uniforms.skyGain={value:1},this.envScene.add(this.envSky),this.envGround=new Ni(new za(3e3,32).rotateX(-Math.PI/2),new xi({color:4020780})),this.envGround.position.y=-20,this.envScene.add(this.envGround),this.pmrem=new cl(t),this.envRT=null,this.sun=new hc(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.035;let i=this.sun.shadow.camera;this.shadowExtent=48,i.left=-this.shadowExtent,i.right=this.shadowExtent,i.top=this.shadowExtent,i.bottom=-this.shadowExtent,i.near=1,i.far=260,e.add(this.sun),e.add(this.sun.target),this.hemi=new Qs(12573951,5925701,.4),e.add(this.hemi),e.fog=new Yn(12375786,.0016);let a=new Ur,o=1800,s=new Float32Array(o*3);for(let e=0;e<o;e++){let t=Math.random()*2-1,n=Math.random()*Math.PI*2,r=Math.sqrt(1-t*t),i=Math.abs(t)*.95+.05;s[e*3]=Math.cos(n)*r*3500,s[e*3+1]=i*3500,s[e*3+2]=Math.sin(n)*r*3500}a.setAttribute(`position`,new kr(s,3)),this.starMat=new Ta({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Aa(a,this.starMat),this.stars.frustumCulled=!1,this.stars.renderOrder=-1,e.add(this.stars),this.moon=new Ni(new za(60,32),new xi({color:15922431,fog:!1,transparent:!0,opacity:0})),e.add(this.moon);let c=2600,l=new Ur;this.rainPos=new Float32Array(c*6),this.rainN=c;for(let e=0;e<c;e++)this._resetDrop(e,!0,new z);l.setAttribute(`position`,new kr(this.rainPos,3)),this.rain=new wa(l,new fa({color:11191517,transparent:!0,opacity:0,depthWrite:!1})),this.rain.frustumCulled=!1,e.add(this.rain),this.pointLights=[];for(let t=0;t<6;t++){let t=new fc(16766880,0,16,2);t.position.set(0,-100,0),e.add(t),this.pointLights.push(t)}this.lightAnchors=[]}_resetDrop(e,t,n){let r=n.x+(Math.random()-.5)*50,i=n.z+(Math.random()-.5)*50,a=t?n.y+Math.random()*30:n.y+18+Math.random()*10,o=this.rainPos;o[e*6]=r,o[e*6+1]=a,o[e*6+2]=i,o[e*6+3]=r+.05,o[e*6+4]=a-.5,o[e*6+5]=i}setQuality(e){let t=e===`high`?4096:e===`medium`?2048:1024;this.shadowExtent=e===`low`?34:48;let n=this.sun.shadow.camera;n.left=-this.shadowExtent,n.right=this.shadowExtent,n.top=this.shadowExtent,n.bottom=-this.shadowExtent,n.updateProjectionMatrix(),this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.shadow.radius=e===`high`?3:2}setWeather(e,t=!1){if(!Hp[e])return;this.weather=e;let n=Hp[e];this.temp=Math.round(nf(n.temp[0],n.temp[1],Math.random())),t&&Object.assign(this.weatherBlend,{cover:n.cover,density:n.density,sun:n.sun,fog:n.fog,rain:+(e===`rain`)})}get weatherInfo(){return Hp[this.weather]}computeSun(e){let t=1215,n,r;if(e>=360&&e<=t){let t=(e-360)/855;n=Math.sin(Math.PI*t)*Ht.degToRad(66)-Ht.degToRad(1.5),r=Ht.degToRad(nf(-115,115,t))}else{let i=((e<360?e+1440:e)-t)/585;n=-Math.sin(Math.PI*i)*Ht.degToRad(35)-Ht.degToRad(1.5),r=Ht.degToRad(nf(115,245,i))}return{el:n,az:r}}update(e,t){let n=G.time.minutes,r=Hp[this.weather],i=this.weatherBlend;i.cover=af(i.cover,r.cover,.25,e),i.density=af(i.density,r.density,.25,e),i.sun=af(i.sun,r.sun,.25,e),i.fog=af(i.fog,r.fog,.25,e),i.rain=af(i.rain,+(this.weather===`rain`),.4,e);let{el:a,az:o}=this.computeSun(n),s=Math.cos(a);this.sunDir.set(Math.sin(o)*s,Math.sin(a),Math.cos(o)*s).normalize();let c=this.sky.material.uniforms;c.sunPosition.value.copy(this.sunDir).multiplyScalar(4e5),c.cloudCoverage.value=i.cover,c.cloudDensity.value=i.density,c.time.value+=e*(1+G.time.speed),c.turbidity.value=nf(3,9,tf(i.cover-.3,0,1)),c.rayleigh.value=nf(1.6,.8,tf(i.cover-.4,0,1));let l=Ht.radToDeg(a),u=rf(-6,6,l),d=1-rf(-8,2,l);this.nightF=d,tp.uNight.value=d,tp.uGlow.value=rf(4,-5,l)*1.2,tp.uAmb.value=nf(.07,1,u)*nf(1,.75,tf(i.cover-.4,0,1));let f=1-rf(4,28,l),p=new V().setRGB(1,nf(.96,.62,f),nf(.9,.38,f)),m=rf(-3,8,l)*3.4*i.sun;tp.uSunI.value=m/3.4;let h;l>-3?(h=this.sunDir,this.sun.color.copy(p),this.sun.intensity=Math.max(m,0)*(this._sunMul??1)):(h=new z(-.35,.82,-.45).normalize(),this.sun.color.setRGB(.55,.68,1),this.sun.intensity=.75*rf(-3,-10,l));let g=this.shadowExtent*2/this.sun.shadow.mapSize.x,_=Math.round(t.x/g)*g,v=Math.round(t.z/g)*g;this.sun.target.position.set(_,0,v),this.sun.position.set(_+h.x*120,h.y*120,v+h.z*120),this.sun.target.updateMatrixWorld(),this.hemi.intensity=nf(.75,.55,u)*(this._hemiMul??1),G.renderer.toneMappingExposure=nf(.6,1.05,d)*(this._expMul??1),this.scene.environmentIntensity=(this._envI??.38)*nf(.5,1,u),this.hemi.color.setRGB(nf(.2,.72,u),nf(.27,.84,u),nf(.48,1,u)),this.hemi.groundColor.setRGB(nf(.04,.32,u),nf(.05,.36,u),nf(.08,.24,u));let y=rf(18,2,l)*rf(-8,0,l),b=new V().setRGB(.66,.79,.93);b.lerp(new V(.96,.66,.46),y*.75),b.lerp(new V(.025,.04,.075),d),b.lerp(new V(.55,.6,.66).multiplyScalar(u*.95+.05),tf((i.cover-.5)*1.6,0,.85)),this.scene.fog.color.copy(b),this.scene.fog.density=i.fog*(1+i.rain*.6),this.starMat.opacity=d*(1-i.cover*.8),this.stars.position.copy(t);let x=new z(-.35,.62,-.7).normalize();if(this.moon.position.copy(t).addScaledVector(x,3e3),this.moon.lookAt(t),this.moon.material.opacity=d*(1-i.cover*.7),this.rain.material.opacity=i.rain*.45,this.rain.visible=i.rain>.02,this.rain.visible){let n=this.rainPos,r=22*e;for(let e=0;e<this.rainN;e++)n[e*6+1]-=r,n[e*6+4]-=r,(n[e*6+4]<0||Math.abs(n[e*6]-t.x)>26||Math.abs(n[e*6+2]-t.z)>26)&&this._resetDrop(e,!1,t);this.rain.geometry.attributes.position.needsUpdate=!0}let S=rf(6,-4,l);X.lampGlow.emissiveIntensity=S*3.2,X.poolLight.emissiveIntensity=.4+S*4;for(let e of this.nightSigns||[])e.emissiveIntensity=.05+S*.9;this.updatePointLights(t,S),this.envTimer-=e;let C=Math.abs(l-this.lastEnvEl)>1.2,w=Math.abs(i.cover-this.lastEnvCover)>.06;(C||w)&&this.envTimer<=0&&this.refreshEnv(l,u)}refreshEnv(e,t){this.envTimer=.4,this.lastEnvEl=e,this.lastEnvCover=this.weatherBlend.cover;let n=this.sky.material.uniforms,r=n.showSunDisc.value;n.showSunDisc.value=0,this.envGround.material.color.setRGB(.22*t+.01,.3*t+.012,.16*t+.02);let i=this.pmrem.fromScene(this.envScene,.02,1,1e4);n.showSunDisc.value=r,this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture}updatePointLights(e,t){let n=this.pointLights;if(t<.05||!this.lightAnchors.length){for(let e of n)e.intensity=0;return}let r=this.lightAnchors,i=[];for(let t=0;t<r.length;t++){let n=r[t],a=(n.x-e.x)**2+(n.z-e.z)**2;a>2500||i.push([a,n])}i.sort((e,t)=>e[0]-t[0]);for(let e=0;e<n.length;e++){let r=n[e];if(e<i.length){let n=i[e][1];r.position.set(n.x,n.y,n.z),r.color.setHex(n.color||16766880),r.intensity=t*(n.intensity||10),r.distance=n.range||14}else r.intensity=0}}};function Wp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ur;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Gp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Gp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Gp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new kr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Kp=new B,qp=new Ut,Jp=new Cn,Yp=new z,Xp=new z;function Zp(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&e!==`uv`&&t.deleteAttribute(e);if(!t.attributes.uv){let e=t.attributes.position.count;t.setAttribute(`uv`,new kr(new Float32Array(e*2),2))}return t.attributes.normal||t.computeVertexNormals(),t}var Qp=class{constructor(){this.parts=new Map}add(e,t,n=0,r=0,i=0,a=0,o=0,s=0,c=1,l=1,u=1){Jp.set(a,o,s,`YXZ`),qp.setFromEuler(Jp),Yp.set(c,l,u),Xp.set(n,r,i),Kp.compose(Xp,qp,Yp);let d=Zp(e);return d.applyMatrix4(Kp),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(d),this}addMatrix(e,t,n){let r=Zp(e);return r.applyMatrix4(n),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(r),this}box(e,t,n,r,i=0,a=0,o=0,s=0,c=0,l=0){return this.add(new La(e,t,n),r,i,a,o,c,s,l)}boxUV(e,t,n,r,i=0,a=0,o=0,s=0,c=1){let l=new La(e,t,n);return $p(l,e,t,n,c),this.add(l,r,i,a,o,0,s,0)}cyl(e,t,n,r,i=0,a=0,o=0,s=12,c=0,l=0,u=0,d=!1){return this.add(new Ba(e,t,n,s,1,d),r,i,a,o,c,l,u)}sphere(e,t,n=0,r=0,i=0,a=1,o=1,s=1,c=14,l=10){return this.add(new ms(e,c,l),t,n,r,i,0,0,0,a,o,s)}beam(e,t,n,r,i=8){let a=new z().subVectors(t,e),o=a.length();if(o<1e-4)return this;let s=new Ba(n,n,o,i,1,!1),c=new Ut().setFromUnitVectors(new z(0,1,0),a.normalize()),l=new B().compose(new z().addVectors(e,t).multiplyScalar(.5),c,new z(1,1,1));return this.addMatrix(s,r,l)}build(e={}){let t=[],n=new dr;for(let[r,i]of this.parts){let a=i.length===1?i[0]:Wp(i,!1);a.computeBoundingBox(),a.computeBoundingSphere(),n.union(a.boundingBox),t.push({geometry:a,material:r,castShadow:e.castShadow!==!1&&!r.transparent,receiveShadow:e.receiveShadow!==!1})}return{parts:t,bbox:n}}};function $p(e,t,n,r,i=1){let a=e.attributes.uv,o=[[r,n],[r,n],[t,r],[t,r],[t,n],[t,n]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;a.setXY(n,a.getX(n)*o[e][0]*i,a.getY(n)*o[e][1]*i)}a.needsUpdate=!0}function em(e,t={}){let n=new Vn;for(let r of e.parts){let e=t.material||r.material,i=new Ni(r.geometry,e);i.castShadow=t.castShadow??r.castShadow,i.receiveShadow=r.receiveShadow,n.add(i)}return n}var tm=class{constructor(e,t,n=16,r={}){this.opts=r,this.prefab=e,this.parent=t,this.cap=0,this.count=0,this.meshes=[],this.handles=[],this._grow(n)}_grow(e){let t=this.meshes;this.meshes=this.prefab.parts.map((n,r)=>{let i=new aa(n.geometry,n.material,e);return i.castShadow=n.castShadow&&this.opts.shadows!==!1,i.receiveShadow=n.receiveShadow,i.count=this.count,i.frustumCulled=!1,(n.material.userData.instColor||n.instColor)&&(i.instanceColor=new Zi(new Float32Array(e*3).fill(1),3)),t[r]&&(i.instanceMatrix.array.set(t[r].instanceMatrix.array.subarray(0,this.count*16)),t[r].instanceColor&&i.instanceColor&&i.instanceColor.array.set(t[r].instanceColor.array.subarray(0,this.count*3)),this.parent.remove(t[r]),t[r].dispose()),i.instanceMatrix.setUsage(tt),this.parent.add(i),i}),this.cap=e}add(e,t){this.count>=this.cap&&this._grow(this.cap*2);let n=this.count++,r={i:n,pool:this};this.handles[n]=r;for(let r of this.meshes)r.setMatrixAt(n,e),r.instanceColor&&t&&r.setColorAt(n,t),r.count=this.count,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0);return r}setMatrix(e,t){for(let n of this.meshes)n.setMatrixAt(e.i,t),n.instanceMatrix.needsUpdate=!0}setColor(e,t){for(let n of this.meshes)n.instanceColor&&(n.setColorAt(e.i,t),n.instanceColor.needsUpdate=!0)}remove(e){if(!e||e.pool!==this||e.i<0)return;let t=this.count-1,n=e.i;if(n!==t){let e=this.handles[t];for(let e of this.meshes)if(e.getMatrixAt(t,Kp),e.setMatrixAt(n,Kp),e.instanceColor){let r=new V;e.getColorAt(t,r),e.setColorAt(n,r)}e.i=n,this.handles[n]=e}this.handles[t]=void 0,this.count=t,e.i=-1;for(let e of this.meshes)e.count=this.count,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}setVisible(e){for(let t of this.meshes)t.visible=e}freeze(){for(let e of this.meshes)e.computeBoundingSphere(),e.frustumCulled=!0}},nm=(e,t,n)=>new z(e,t,n),rm={},im={};function am(e){let t=e.clone();return t.color=new V(16777215),t.userData.instColor=!0,t}function om(){im.cushion=am(new U({roughness:.85})),im.fabric=am(new U({roughness:.9,side:2})),im.carPaint=am(new Ds({roughness:.35,metalness:.4,clearcoat:1,clearcoatRoughness:.1})),im.flowerA=Z(16732042,.7),im.flowerB=Z(16765498,.7),im.flowerC=Z(16777215,.7),im.flowerD=Z(10771711,.7),im.flamingo=Z(16748472,.55),im.grassMat=ap(new U({map:Y.grassBlades,alphaTest:.5,side:2,roughness:.95,color:15266008}),`grass`,1)}function sm(){let e=new Qp,t=cp(16053490,.4);e.box(.08,.05,1.9,t,-.33,.33,0),e.box(.08,.05,1.9,t,.33,.33,0);for(let[n,r]of[[-.33,-.85],[.33,-.85],[-.33,.55],[.33,.55]])e.box(.06,.33,.06,t,n,.165,r);for(let n=0;n<9;n++)e.box(.62,.025,.11,t,0,.37,-.9+n*.14);let n=new La(.66,.04,.72);return e.add(n,t,0,.62,.62,-.72,0,0),e.add(new La(.6,.06,1.22),im.cushion,0,.41,-.34),e.add(new La(.6,.06,.66),im.cushion,0,.66,.6,-.72,0,0),e.box(.6,.08,.22,im.cushion,0,.88,.86,0,-.72),e.build()}function cm(){let e=new Qp;e.cyl(.035,.035,2.55,X.woodDark,0,1.27,0,8),e.cyl(.28,.32,.12,Z(3816768,.6),0,.06,0,16);let t=new Va(1.45,.55,10,1,!0);e.add(t,im.fabric,0,2.38,0);for(let t=0;t<10;t++){let n=t/10*Math.PI*2;e.beam(nm(0,2.62,0),nm(Math.cos(n)*1.42,2.11,Math.sin(n)*1.42),.012,X.woodDark,4)}e.sphere(.05,X.woodDark,0,2.68,0);let n=new Ba(1.46,1.46,.12,20,1,!0);return e.add(n,im.fabric,0,2.06,0),e.build()}function lm(){let e=new Qp,t=X.steelDark;for(let n of[-.8,.8])e.box(.06,.42,.42,t,n,.21,0),e.box(.06,.45,.06,t,n,.62,-.22,0,.25);for(let t=0;t<4;t++)e.boxUV(1.9,.04,.1,X.wood,0,.44,-.16+t*.11,0,1);for(let t=0;t<3;t++)e.add(new La(1.9,.1,.035),X.wood,0,.6+t*.13,-.25-t*.03,.25,0,0);return e.build()}function um(){let e=new Qp,t=cp(3050327,.5);return e.cyl(.27,.24,.85,t,0,.425,0,16),e.cyl(.3,.3,.08,cp(2055996,.5),0,.88,0,16),e.cyl(.16,.16,.02,X.blackPlastic,0,.925,0,12),e.box(.3,.16,.01,cp(16777215,.5),0,.55,.255),e.build()}function dm(){let e=new Qp,t=Z(2830389,.45);return e.cyl(.07,.1,4.2,t,0,2.1,0,10),e.cyl(.2,.24,.3,t,0,.15,0,12),e.beam(nm(0,4.1,0),nm(0,4.2,.7),.04,t),e.cyl(.26,.16,.22,t,0,4.18,.75,14),e.cyl(.2,.2,.04,X.lampGlow,0,4.06,.75,14),e.build()}function fm(){let e=new Qp,t=6.2,n=.9,r=[],i=[],a=[],o=e=>[2*(1-e)*e*n*.25+e*e*n,e*t];for(let e=0;e<=14;e++){let n=e/14,[a,s]=o(n),c=.2-n*.07+(n<.08?(.08-n)*2.2:0);for(let e=0;e<=9;e++){let o=e/9*Math.PI*2;r.push(a+Math.cos(o)*c,s,Math.sin(o)*c),i.push(e/9,n*t/2.4)}}for(let e=0;e<14;e++)for(let t=0;t<9;t++){let n=e*10+t,r=n+9+1;a.push(n,r,n+1,r,r+1,n+1)}let s=new Ur;s.setAttribute(`position`,new H(r,3)),s.setAttribute(`uv`,new H(i,2)),s.setIndex(a),s.computeVertexNormals(),e.add(s,X.bark);let[c,l]=o(1),u=sf(7);for(let t=0;t<10;t++){let n=2.6+u()*.9,r=new us(n,.95,10,2),i=r.attributes.position;for(let e=0;e<i.count;e++){let t=i.getX(e)+n/2,r=i.getY(e),a=t/n,o=a*.55-a*a*1.7-Math.abs(r)*.25;i.setXYZ(e,t,o,r)}r.computeVertexNormals();let a=t/10*Math.PI*2+u()*.3,o=-.1+u()*.35;e.add(r,X.palmLeaf,c,l,0,0,a,o)}for(let t=0;t<3;t++){let n=new us(1.6,.6,6,1),r=n.attributes.position;for(let e=0;e<r.count;e++){let t=r.getX(e)+.8,n=t/1.6;r.setXYZ(e,t*.5,t*.85-n*n*.4,r.getY(e))}n.computeVertexNormals(),e.add(n,X.palmLeaf,c,l,0,0,t*2.1,0)}let d=Z(5913884,.7);for(let t=0;t<4;t++){let n=t*1.7;e.sphere(.11,d,c+Math.cos(n)*.18,l-.18,Math.sin(n)*.18,1,1.15,1,8,6)}return e.build()}function pm(){let e=new Qp;e.cyl(.42,.34,.5,X.concrete,0,.25,0,16),e.cyl(.38,.38,.04,Z(3811866,.95),0,.48,0,16);let t=new cs(.42,2);xm(t,.08,3),e.add(t,X.foliage,0,.78,0,0,0,0,1,.75,1);let n=sf(3),r=[im.flowerA,im.flowerB,im.flowerC,im.flowerD];for(let t=0;t<18;t++){let i=n()*Math.PI*2,a=.12+n()*.28,o=.75+n()*.3;e.sphere(.045,r[t%4],Math.cos(i)*a,o+(.3-a)*.5,Math.sin(i)*a,1,1,1,6,4)}return e.build()}function mm(){let e=new Qp,t=new La(1,.9,1,4,4,4);return xm(t,.05,4),$p(t,1,.9,1,1),e.add(t,X.foliage,0,.47,0),e.build()}function hm(){let e=new Qp,t=new Ua(.6,2);xm(t,.18,1.6),e.add(t,X.rock,0,.35,0,0,0,0,1.2,.8,1);let n=new Ua(.32,1);return xm(n,.1,2),e.add(n,X.rock,.5,.18,.3),e.build()}function gm(){let e=new Qp,t=Z(11766346,.7);e.cyl(.045,.05,1.9,t,0,.95,0,8);for(let t=1;t<5;t++)e.cyl(.055,.055,.03,Z(8215082,.8),0,t*.4,0,8);return e.cyl(.11,.06,.18,X.steelDark,0,1.95,0,10),e.add(new Va(.08,.32,8),X.fire,0,2.18,0),e.add(new Va(.05,.22,8),X.lampGlow,0,2.13,0),e.build({castShadow:!0})}function _m(){let e=new Qp,t=im.flamingo;e.sphere(.22,t,0,.78,0,1,.75,1.5);let n=new $a([nm(0,.85,.25),nm(0,1.05,.38),nm(0,1.25,.25),nm(0,1.35,.1),nm(0,1.42,.18)]);return e.add(new gs(n,12,.045,6),t),e.sphere(.08,t,0,1.44,.2),e.add(new Va(.035,.14,6),Z(2236962,.5),0,1.4,.3,Math.PI/2+.6,0,0),e.cyl(.012,.012,.6,t,.05,.3,0,4),e.cyl(.012,.012,.6,t,-.05,.3,0,4),e.add(new Va(.12,.3,6),t,0,.82,-.32,-Math.PI/2+.3,0,0),e.build()}function vm(){let e=new Qp;e.boxUV(1.9,.25,1.9,X.woodDark,0,.125,0,0,1),e.box(1.75,.04,1.75,Z(3811866,.95),0,.25,0);let t=sf(17),n=[im.flowerA,im.flowerB,im.flowerC,im.flowerD];for(let r=0;r<14;r++){let i=(t()-.5)*1.5,a=(t()-.5)*1.5,o=new cs(.18,1);e.add(o,X.foliage,i,.4,a,0,0,0,1,.8,1);for(let o=0;o<4;o++)e.sphere(.05,n[(r+o)%4],i+(t()-.5)*.25,.52+t()*.08,a+(t()-.5)*.25,1,1,1,6,4)}return e.build()}function ym(e){let t=new Qp,n=new La(1,.05,1);$p(n,1,.05,1,.5);let r=e===`wood`?X.wood:e===`red`?im.terracotta||(im.terracotta=new U({map:Y.deck,normalMap:Y.deckN,color:14254682,roughness:.8})):X.deck;return t.add(n,r,0,.025,0),t.build({castShadow:!1})}function bm(){let e=new Qp;e.boxUV(1.8,.05,.8,X.wood,0,.75,0,0,1);for(let t of[-.65,.65])e.boxUV(1.8,.05,.3,X.wood,0,.45,t,0,1);for(let t of[-.7,.7])e.add(new La(.06,.9,.06),X.woodDark,t,.4,.3,.55,0,0),e.add(new La(.06,.9,.06),X.woodDark,t,.4,-.3,-.55,0,0),e.box(.06,.06,1.6,X.woodDark,t,.4,0);return e.cyl(.03,.03,2.4,X.steel,0,1.2,0,6),e.add(new Va(1.3,.45,8,1,!0),im.fabric,0,2.3,0),e.build()}function xm(e,t,n){let r=e.attributes.position,i=new z;for(let e=0;e<r.count;e++){i.set(r.getX(e),r.getY(e),r.getZ(e));let a=gf(i.x*n+10,i.z*n+i.y*n*.7,3)-.5,o=i.length()||1;i.multiplyScalar(1+a*t*2/o),r.setXYZ(e,i.x,i.y,i.z)}e.computeVertexNormals()}function Sm(e,t,n,r,i,a){let o=new U({map:a,roughness:.85,side:2}),s=new us(t,n,1,1);e.add(s,o,0,r,i+n/2*Math.cos(.45),-Math.PI/2+.45,0,0);for(let a=0;a<Math.round(t/.4);a++){let s=-t/2+.2+a*.4,c=new za(.2,8,Math.PI,Math.PI);e.add(c,o,s,r-n*Math.sin(.45)+0,i+n*Math.cos(.45)+.01,0,0,0)}}function Cm(e,t,n,r,i,a){e.boxUV(t,.15,n,X.concrete,0,.075,0,0,1),e.boxUV(t,r,.12,i,0,r/2+.15,-n/2+.06,0,1),e.boxUV(.12,r,n,i,-t/2+.06,r/2+.15,0,0,1),e.boxUV(.12,r,n,i,t/2-.06,r/2+.15,0,0,1),e.boxUV(t,1,.12,i,0,.65,n/2-.06,0,1),e.box(t+.1,.06,.45,Z(15921906,.3),0,1.18,n/2-.1),e.boxUV(t,.5,.12,i,0,r+.15-.25,n/2-.06,0,1);for(let a of[-t/2+.06,t/2-.06])e.box(.14,r-1.4,.14,i,a,1.15+(r-1.4)/2,n/2-.06);e.box(t+.5,.18,n+.6,a,0,r+.24,.1)}function wm(){let e=new Qp,t=2.4;Cm(e,2.8,t,2.6,X.wood,Z(16052714,.6)),Sm(e,3,.9,2.45,t/2,Hf(`#e8463b`,`#ffffff`,10)),e.box(.8,1.8,.6,Z(14212578,.4),-.7,1.05,-.8),e.box(.7,1.5,.02,X.screen,-.7,1.15,-.49);for(let n=0;n<6;n++)e.cyl(.04,.04,.22,cp([3126783,16734778,3858282][n%3],.2),.3+n*.12,1.32,t/2-.15,8);let n=Uf([`COOL DRINKS`],{bg:`#ffffff`,fg:`#0b8fd1`,w:512,h:140,border:`#0b8fd1`});return e.add(new us(2.4,.66),dp(n,.6),0,3.35,t/2-.1),e.box(2.5,.72,.08,Z(757713,.5),0,3.35,t/2-.16),e.cyl(.32,.22,.7,cp(16730698,.3),.95,3.35,-.2,14),e.cyl(.33,.33,.08,cp(16777215,.3),.95,3.72,-.2,14),e.cyl(.03,.03,.5,cp(16768570,.3),1,3.95,-.2,6,0,0,.3),e.build()}function Tm(){let e=new Qp,t=cp(16773622,.35);e.box(1.6,.9,.9,t,0,.75,0),e.box(1.65,.08,.95,cp(16743096,.3),0,1.24,0),e.box(1.5,.3,.8,X.glass,0,1.43,0);for(let t of[-.6,.6])e.add(new hs(.22,.06,8,16),X.rubber,t,.24,.48);e.cyl(.05,.05,.45,X.steel,.7,.4,-.3,6,0,0,Math.PI/2);let n=[16773832,16752324,9067066,10154164];for(let t=0;t<4;t++)e.sphere(.12,cp(n[t],.6),-.5+t*.33,1.32,0,1,.5,1,10,6);return e.cyl(.03,.03,1.8,X.steel,0,2.1,-.1,6),e.add(new Va(1.25,.45,12,1,!0),up(16743096),0,3,-.1),e.add(new Ba(1.26,1.26,.1,24,1,!0),up(16777215),0,2.74,-.1),e.add(new Va(.16,.45,12),Z(14263130,.8),0,3.48,-.1,Math.PI,0,0),e.sphere(.19,cp(16752324,.5),0,3.75,-.1),e.build()}function Em(){let e=new Qp,t=2.8;Cm(e,3.8,t,2.7,Z(13191727,.75),Z(2894892,.7)),Sm(e,4,1,2.5500000000000003,t/2,Hf(`#ffcc2a`,`#c94a2f`,12)),e.box(1.2,.9,.7,X.steel,-1,.6,-.9),e.box(1,.04,.6,X.steelDark,-1,1.07,-.9),e.box(.6,1.6,.6,X.steel,1.2,.95,-.9);let n=Uf([`BURGERS`,`FRIES · HOT DOGS`],{bg:`#1d1d1d`,fg:`#ffd23a`,w:512,h:200});e.add(new us(1.4,.55),dp(n,.5),0,2.15,-1.27),e.cyl(.62,.66,.22,Z(14260805,.7),0,3.45,0,20),e.cyl(.7,.7,.06,Z(4173370,.8),0,3.5900000000000003,0,20),e.cyl(.66,.66,.16,Z(7027230,.8),0,3.7,0,20),e.cyl(.7,.68,.04,Z(16761370,.6),0,3.8000000000000003,0,4),e.sphere(.66,Z(14721874,.6),0,3.8400000000000003,0,1,.55,1,20,10),e.cyl(.08,.08,.5,X.steelDark,0,3.1,0,6);let r=Uf([`BURGER BAY`],{bg:`#ffcc2a`,fg:`#9b2a12`,w:512,h:120});return e.add(new us(2.6,.6),dp(r,.6),0,3.3200000000000003,1.71),e.build()}function Dm(){let e=new Qp,t=2.6;Cm(e,3,t,2.6,Z(3116874,.75),Z(15986662,.6)),Sm(e,3.2,.9,2.45,t/2,Hf(`#2f8f4a`,`#ffffff`,10)),e.sphere(.65,Z(11556154,.95),0,1,-.7,1,.8,.8,14,8),e.box(.45,.35,.1,X.blackPlastic,0,.9,-.2),e.add(new us(.3,.2),X.fire,0,.88,-.14);let n=new Ba(.9,.9,.12,16,1,!1,0,Math.PI/3.2);e.add(n,Z(15906891,.7),0,3.7,0,Math.PI/2,0,0);for(let t=0;t<4;t++)e.cyl(.07,.07,.04,Z(12593182,.6),Math.sin(.3+t*.12)*(.3+t*.12),3.7+Math.cos(.3+t*.12)*(.3+t*.12),.07,10,Math.PI/2,0,0);let r=Uf([`PIZZA PIER`],{bg:`#ffffff`,fg:`#2f8f4a`,w:512,h:120,border:`#c0281e`});return e.add(new us(2.4,.56),dp(r,.6),0,3.22,1.61),e.build()}function Om(){let e=new Qp,t=3.6;Cm(e,3.8,t,2.9,Z(2794953,.7),Z(16777215,.6)),Sm(e,4,1,2.75,t/2,Hf(`#2aa5c9`,`#ffe36a`,12));let n=[16730698,16765498,4906874,16743096,3842303];for(let r=0;r<5;r++)e.add(new hs(.25,.09,8,18),cp(n[r],.3),-1.4+r*.7,2.2,t/2-.25);for(let t=0;t<3;t++)e.box(3.2,.05,.5,X.wood,0,.6+t*.55,-1.4);for(let t=0;t<12;t++)e.box(.18,.25,.18,cp(n[t%5],.5),-1.4+t%6*.55,.75+Math.floor(t/6)*.55,-1.4);for(let t=0;t<6;t++){let r=new ms(.6,12,10,t/6*Math.PI*2,Math.PI/3);e.add(r,cp(t%2?16777215:n[t%5],.3),0,3.9,0)}let r=Uf([`SURF SHOP`],{bg:`#ffe36a`,fg:`#1d6f9a`,w:512,h:120});return e.add(new us(2.6,.6),dp(r,.6),0,3.52,2.11),e.build()}function km(){let e=new Qp,t=2.7;e.boxUV(3.8,t,2.8,X.stucco,0,t/2,0,0,.5),e.box(4.3999999999999995,.2,3.4,Z(8030869,.7),0,2.8000000000000003,0),e.boxUV(3.82,.9,2.82,X.poolTile,0,.45,0,0,2),e.box(.85,2,.06,Z(2785236,.4),-.9,1,1.43),e.box(.85,2,.06,Z(14701978,.4),.9,1,1.43);let n=Uf([`WC`],{bg:`#ffffff`,fg:`#20445a`,w:256,h:128});e.add(new us(.9,.45),dp(n,.4),0,2.35,1.42);for(let t=0;t<4;t++)e.box(.6,.05,.04,Z(6710886,.6),0,2.2+t*.08,-2.8/2-.02);return e.build()}function Am(){let e=new Qp;e.boxUV(2.8,.08,1.6,X.poolTile,0,.04,0,0,2),e.boxUV(2.8,2.2,.15,X.stucco,0,1.1,-.72,0,.5);for(let t=0;t<3;t++){let n=-.9+t*.9;e.cyl(.03,.03,2.3,X.chrome,n,1.15,-.55,8),e.beam(nm(n,2.28,-.55),nm(n,2.28,-.2),.025,X.chrome),e.cyl(.11,.07,.05,X.chrome,n,2.25,-.18,12),e.cyl(.04,.04,.12,X.chrome,n+.08,1.2,-.55,6,0,0,Math.PI/2)}return e.box(2.6,.03,.12,X.steelDark,0,.09,.6),e.build()}function jm(){let e=new Qp,t=2.8,n=2.8;e.boxUV(4.8,n,t,X.stucco,0,n/2,-.2,0,.5),e.box(5.6,.2,4.199999999999999,Z(16052714,.6),0,2.9,.2);for(let t of[-4.8/2-.25,2.65])e.cyl(.08,.08,n,Z(16052714,.6),t,n/2,1.4,10);let r=[16734778,16761370,2797823,3858298];for(let n=0;n<8;n++)for(let i=0;i<3;i++)e.box(.5,.62,.04,cp(r[(n+i)%4],.4),-1.9+n*.54,.55+i*.68,t/2-.18),e.box(.08,.03,.03,X.steel,-1.8+n*.54,.65+i*.68,t/2-.15);let i=Uf([`CHANGING & LOCKERS`],{bg:`#20445a`,fg:`#ffffff`,w:768,h:110});return e.add(new us(3.8,.55),dp(i,.6),0,3.25,.95),e.box(3.9,.6,.06,Z(2114650,.6),0,3.25,.91),e.build()}function Mm(){let e=new Qp,t=2.6;return e.boxUV(2.8,t,2.8,Z(16777215,.7),0,t/2,0,0,1),e.box(3.1999999999999997,.15,3.1999999999999997,Z(14170682,.6),0,2.67,0),e.box(1,2,.06,X.glassDark,0,1,1.43),e.box(.7,.2,.05,Z(14170682,.5),0,2.25,1.43),e.box(.2,.7,.05,Z(14170682,.5),0,2.25,1.4349999999999998),e.box(.5,.15,.05,Z(14170682,.5),0,3.1,0),e.box(.8,.8,.1,Z(16777215,.5),0,3.1500000000000004,0),e.box(.6,.18,.12,Z(14170682,.5),0,3.1500000000000004,0),e.box(.18,.6,.12,Z(14170682,.5),0,3.1500000000000004,0),e.build()}function Nm(){let e=new Qp,t=Z(16119280,.6),n=[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]];for(let[r,i]of n)e.beam(nm(r*1.2,0,i*1.2),nm(r*.8,2.1,i*.8),.06,t,6);e.box(1.5,.08,1.5,X.wood,0,2.1,0),e.box(.7,.06,.5,Z(14170682,.5),0,2.55,-.2),e.box(.7,.7,.06,Z(14170682,.5),0,2.9,-.45);for(let n of[-.3,.3])e.box(.06,.45,.06,t,n,2.32,-.2);for(let n=0;n<6;n++)e.box(.6,.04,.06,t,0,.3+n*.32,.75+n*.03);for(let n of[-.3,.3])e.beam(nm(n,0,.75),nm(n,2.1,.95),.03,t,4);for(let[n,r,i,a]of[[0,-.72,1.5,.05],[-.72,0,.05,1.5],[.72,0,.05,1.5]])e.box(i,.05,a,t,n,2.75,r);for(let[r,i]of n)e.box(.05,.65,.05,t,r*1.2,2.45,i*1.2);e.cyl(.03,.03,1.4,X.steel,0,3.4,0,6),e.add(new Va(1.2,.4,4,1,!0),up(14170682),0,4.2,0,0,Math.PI/4,0),e.add(new hs(.22,.07,8,16),cp(16734762,.4),.76,1.6,0,0,Math.PI/2,0);let r=Uf([`LIFEGUARD`],{bg:`#d83a3a`,fg:`#ffffff`,w:512,h:100});return e.add(new us(1.3,.26),dp(r,.3),0,1.85,.62),e.build()}function Pm(){let e=new Qp,t=new hs(1.35,.14,10,40);return e.add(t,X.coping,0,.42,0,Math.PI/2,0,0),e.add(new Ba(1.35,1.4,.42,40,1,!0),X.coping,0,.21,0),e.add(new za(1.3,32),X.poolTile,0,.06,0,-Math.PI/2,0,0),e.cyl(.18,.28,1.2,X.coping,0,.6,0,16),e.cyl(.65,.4,.15,X.coping,0,1.2,0,24),e.cyl(.1,.14,.6,X.coping,0,1.5,0,12),e.cyl(.32,.2,.1,X.coping,0,1.8,0,16),e.sphere(.08,X.chrome,0,1.9,0),e.build()}function Fm(){let e=new Qp;e.boxUV(1.8,.3,1.8,X.concreteDark,0,.15,0,0,1);for(let t=0;t<3;t++)for(let n=0;n<3;n++)e.cyl(.12,.12,.7,Z([14170682,2785236,16761370][(t+n)%3],.5),-.5+t*.5,.65,-.5+n*.5,10,.12*(t-1),0,.12*(n-1));return e.box(.3,.4,.2,Z(3355443,.6),.75,.5,.75),e.build()}function Im(){let e=new Qp;return e.cyl(.05,.05,2.4,X.woodDark,-.9,1.2,0,6),e.cyl(.05,.05,2.4,X.woodDark,.9,1.2,0,6),e.box(2.2,1.1,.06,Z(16777215,.6),0,1.75,0),e.build()}function Lm(){let e=new Qp,t=new xo;t.moveTo(-2.1,.35),t.lineTo(2.1,.35),t.quadraticCurveTo(2.25,.4,2.2,.8),t.lineTo(2.05,.95),t.lineTo(-2,.98),t.quadraticCurveTo(-2.2,.9,-2.15,.45),t.closePath();let n=new as(t,{depth:1.7,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2,curveSegments:6});n.translate(0,0,-.85),e.add(n,im.carPaint,0,0,0,0,Math.PI/2,0);let r=new xo;r.moveTo(-1.2,.95),r.lineTo(1,.95),r.lineTo(.45,1.5),r.lineTo(-.95,1.5),r.closePath();let i=new as(r,{depth:1.5,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});i.translate(0,0,-.75),e.add(i,X.glassDark,0,0,0,0,Math.PI/2,0);for(let[t,n]of[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]])e.cyl(.36,.36,.26,X.rubber,t,.36,n,14,0,0,Math.PI/2),e.cyl(.2,.2,.28,X.steel,t,.36,n,10,0,0,Math.PI/2);return e.box(1.4,.12,.05,X.lampGlow,0,.75,-2.25),e.box(1.4,.1,.05,X.redLight,0,.8,2.22),e.build()}function Rm(){let e=new Qp;e.cyl(.18,.28,3.2,X.bark,0,1.6,0,8);let t=sf(5);for(let n=0;n<5;n++){let r=new cs(1.3+t()*.6,0);xm(r,.3,.8),n>2&&r.scale(.8,.8,.8);let i=t()*Math.PI*2,a=n===0?0:1;e.add(r,X.foliageDark,Math.cos(i)*a,3.6+t()*1.4,Math.sin(i)*a)}return e.build()}function zm(){let e=new Qp;e.cyl(.14,.22,2,X.bark,0,1,0,6);for(let t=0;t<4;t++){let n=new Va(2-t*.4,2.2,7);xm(n,.15,1.2),e.add(n,X.foliageDark,0,2.2+t*1.2,0)}return e.build()}function Bm(){let e=new Qp;for(let t=0;t<3;t++){let n=new us(.7,.5);n.translate(0,.25,0);let r=n.attributes.normal;for(let e=0;e<r.count;e++)r.setXYZ(e,0,1,0);e.add(n,im.grassMat,0,0,0,0,t/3*Math.PI,0)}return e.build({castShadow:!1})}var Vm={sunbed:sm,umbrella:cm,bench:lm,bin:um,lamp:dm,palm:fm,planter:pm,hedge:mm,rock:hm,tiki:gm,flamingo:_m,flowerBed:vm,picnic:bm,pathStone:()=>ym(`stone`),pathWood:()=>ym(`wood`),pathRed:()=>ym(`red`),drinks:wm,icecream:Tm,burger:Em,pizza:Dm,souvenir:Om,toilets:km,showers:Am,lockers:jm,firstaid:Mm,lifeguard:Nm,fountain:Pm,fireworks:Fm,forsale:Im,car:Lm,broadTree:Rm,pine:zm,grassClump:Bm};function Hm(e){if(!rm[e]){let t=Vm[e];if(!t)throw Error(`No prefab builder: `+e);rm[e]=t()}return rm[e]}var Um=40,Wm=class{constructor(e){this.scene=e,this.holeUniform={value:Array.from({length:Um},()=>new ln(0,0,0,0))},this.holeCount={value:0},this._buildGround(),this._buildHills(),this._buildParking(),this._buildEntrance(),this._buildDistantTrees(),this.fenceGroup=new Vn,e.add(this.fenceGroup),this.saleGroup=new Vn,e.add(this.saleGroup),this.saleSigns=[],this.grass=null,this.grassCenter=new R(1e9,1e9),this.movingCars=[],this._buildMovingCars()}_buildGround(){let e=new us(360,360,1,1).rotateX(-Math.PI/2),t=Y.grass.clone();t.repeat.set(360/7,360/7),t.needsUpdate=!0;let n=Y.grassN.clone();n.repeat.set(360/7,360/7),n.needsUpdate=!0;let r=new U({map:t,normalMap:n,normalScale:new R(.9,.9),roughness:.96,metalness:0,color:14871256}),i=this.holeUniform,a=this.holeCount;r.onBeforeCompile=e=>{e.uniforms.uHoles=i,e.uniforms.uHoleCount=a,e.uniforms.uMacro={value:Y.macro},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vGW;`).replace(`#include <project_vertex>`,`#include <project_vertex>
 vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
          varying vec3 vGW; uniform vec4 uHoles[${Um}]; uniform int uHoleCount; uniform sampler2D uMacro;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
          for (int i = 0; i < ${Um}; i++) {
            if (i >= uHoleCount) break;
            vec4 h = uHoles[i];
            if (h.w < -9000.0) { if (distance(vGW.xz, h.xy) < h.z) discard; }
            else if (vGW.x > h.x && vGW.x < h.z && vGW.z > h.y && vGW.z < h.w) discard;
          }`).replace(`#include <map_fragment>`,`
          vec4 sampledDiffuseColor = texture2D(map, vMapUv);
          vec4 s2 = texture2D(map, vMapUv * 0.31 + vec2(0.17, 0.53));
          sampledDiffuseColor = mix(sampledDiffuseColor, s2, 0.45);
          diffuseColor *= sampledDiffuseColor;
          float m1 = texture2D(uMacro, vGW.xz * 0.011).r;
          float m2 = texture2D(uMacro, vGW.xz * 0.047 + 0.3).r;
          diffuseColor.rgb *= mix(vec3(0.78, 0.86, 0.66), vec3(1.15, 1.1, 0.86), smoothstep(0.3, 0.75, m1)) * (0.86 + 0.28 * m2);`)},r.customProgramCacheKey=()=>`ground`;let o=new Ni(e,r);o.position.set(0,0,15),o.receiveShadow=!0,this.scene.add(o),this.ground=o}setHoles(e){let t=Math.min(Um,e.length);for(let n=0;n<Um;n++){let r=this.holeUniform.value[n];if(n<t){let t=e[n];t.circle?r.set(t.x,t.z,t.r,-9999):r.set(t.x0,t.z0,t.x1,t.z1)}else r.set(0,0,0,0)}this.holeCount.value=t}get maxHoles(){return Um}_buildHills(){let e=[],t=[],n=[],r=[],i=new V(6258490),a=new V(4087596),o=new V(8030810);for(let r=0;r<=34;r++){let s=170+(r/34)**1.6*1400;for(let c=0;c<=120;c++){let l=c/120*Math.PI*2,u=Math.cos(l)*s,d=Math.sin(l)*s+15,f=gf(u*.004+10,d*.004-3,5),p=rf(170,520,s)*(f*f*70+4)-1.5+rf(700,1500,s)*f*120;r===0&&(p=-.3),e.push(u,p,d);let m=i.clone().lerp(a,Math.min(1,f*1.1)).lerp(o,rf(70,160,p)*.5);t.push(m.r,m.g,m.b),n.push(u/12,d/12)}}for(let e=0;e<34;e++)for(let t=0;t<120;t++){let n=e*121+t,i=n+120+1;r.push(n,n+1,i,i,n+1,i+1)}let s=new Ur;s.setAttribute(`position`,new H(e,3)),s.setAttribute(`color`,new H(t,3)),s.setAttribute(`uv`,new H(n,2)),s.setIndex(r),s.computeVertexNormals();let c=Y.grass.clone();c.needsUpdate=!0;let l=new Ni(s,new U({vertexColors:!0,map:c,roughness:1,color:13686976}));l.receiveShadow=!0,this.scene.add(l),this.hillHeight=(e,t)=>{let n=Math.hypot(e,t-15),r=gf(e*.004+10,t*.004-3,5);return rf(170,520,n)*(r*r*70+4)-1.5}}_buildParking(){let e=new Qp,t=new La(100,.06,26);$p(t,100,.06,26,.25),e.add(t,X.asphalt,0,0,86);let n=new La(360,.06,9);$p(n,360,.06,9,.25),e.add(n,X.asphalt,0,.005,104),e.box(360,.18,.3,X.concrete,0,.09,99.4),e.box(360,.18,.3,X.concrete,0,.09,108.6);let r=new La(28,.08,9);$p(r,28,.08,9,.5),e.add(r,X.deck,0,.02,68.5);let i=new La(10,.08,26);$p(i,10,.08,26,.5),e.add(i,X.deck,0,.025,86);let a=Z(15921900,.6);for(let t of[-1,1])for(let n=0;n<=14;n++){let r=t*(7+n*2.8);e.box(.12,.01,5,a,r,.035,76.5),e.box(.12,.01,5,a,r,.035,95.5),e.box(.12,.01,5,a,r,.035,85.5)}for(let t=-178;t<178;t+=6)e.box(3,.01,.15,Z(16765498,.6),t,.04,104);let o=em(e.build({castShadow:!1}));o.traverse(e=>{e.isMesh&&(e.receiveShadow=!0)}),this.scene.add(o);let s=new tm(Hm(`car`),this.scene,64);this.carPool=s;let c=sf(99),l=[14211288,1710618,11545130,2771632,15921906,6974058,2783818,14725168,3836624],u=new B;for(let e of[-1,1])for(let[t,n]of[[76.5,Math.PI],[85.5,0],[95.5,0]])for(let r=0;r<14;r++){if(c()<.38)continue;let i=e*(8.4+r*2.8);u.compose(new z(i,0,t),new Ut().setFromEuler(new Cn(0,n+(c()-.5)*.05,0)),new z(1,1,1)),s.add(u,new V(l[Math.floor(c()*l.length)]))}s.freeze(),this.decoPalms=[];for(let e=74;e<99;e+=6)for(let t of[-6,6])this.decoPalms.push([t,e]);for(let e of[-16,-12,12,16])this.decoPalms.push([e,71])}_buildMovingCars(){let e=Hm(`car`),t=[11545130,2771632,15921906,1710618,14725168];for(let n=0;n<5;n++){let r=new Vn;for(let i of e.parts){let e=i.material;e.userData.instColor&&(e=e.clone(),e.color=new V(t[n]),e.userData={});let a=new Ni(i.geometry,e);a.castShadow=!0,r.add(a)}let i=n%2?1:-1;r.position.set(-170+Math.random()*340,0,i>0?102:106),r.rotation.y=i>0?-Math.PI/2:Math.PI/2,this.scene.add(r),this.movingCars.push({g:r,dir:i,speed:9+Math.random()*6})}}_buildEntrance(){let e=new Qp,t=X.stucco;for(let n of[-7.5,7.5])e.boxUV(2.2,7.5,2.2,t,n,3.75,64,0,.5),e.boxUV(2.6,.5,2.6,Z(1736632,.5),n,7.75,64,0,1),e.add(new Va(1.6,1.6,4),Z(16742938,.6),n,8.8,64,0,Math.PI/4,0),e.boxUV(2.24,.4,2.24,Z(2278389,.5),n,1.2,64,0,1);let n=new hs(7.5,.35,10,40,Math.PI);e.add(n,Z(1736632,.45),0,7.4,63.85,0,0,0,1,.45,1),e.box(13,.5,.6,Z(16777215,.5),0,7,64),e.add(new us(10.5,3.3),dp(Y.logo,.7),0,8.9,64.42),e.add(new us(10.5,3.3),dp(Y.logo,.7),0,8.9,63.58,0,Math.PI,0),e.box(10.8,3.5,.7,Z(679315,.5),0,8.9,64);for(let t of[-4.3,4.3]){e.boxUV(2.4,2.6,2.2,Z(16774368,.7),t,1.3,64.2,0,1),e.box(1.6,1,.05,X.glassDark,t,1.6,65.32),e.box(2.8,.15,2.8,Z(16742938,.6),t,2.7,64.2),e.box(1.2,.08,.35,Z(16777215,.5),t,1.05,65.4);let n=Uf([`TICKETS`],{bg:`#ff7a1a`,fg:`#ffffff`,w:256,h:64});e.add(new us(1.4,.36),dp(n,.5),t,2.35,65.33)}for(let t of[-2.2,-.75,.75,2.2]){e.box(.25,1,1.2,X.steel,t,.5,64.2);for(let n=0;n<3;n++){let r=n/3*Math.PI*2;e.beam(new z(t,.9,64.2),new z(t+Math.cos(r)*.55,.9+Math.sin(r)*.2,64.2),.025,X.chrome)}}for(let t of[-11,-9.6,9.6,11])e.cyl(.05,.06,7,X.steel,t,3.5,65.2,8),e.add(new us(1.4,.9),up([2278389,16742938,16765498,3858298][(t>0?2:0)+ +(Math.abs(t)>10)]),t+.72,6.4,65.2);for(let n of[-13,13])e.boxUV(4,.7,1.2,t,n,.35,64.4,0,.5);let r=em(e.build());this.scene.add(r),this.entrance=r}_buildDistantTrees(){let e=new tm(Hm(`broadTree`),this.scene,256,{shadows:!1}),t=new tm(Hm(`pine`),this.scene,256,{shadows:!1}),n=sf(2024),r=new B,i=0;for(let a=0;a<2600&&i<520;a++){let a=n()*Math.PI*2,o=78+n()**.8*320,s=Math.cos(a)*o,c=Math.sin(a)*o+15;if(c>64&&c<112&&Math.abs(s)<60||Math.abs(s)<70&&c>-70&&c<66||c>98&&c<112)continue;let l=o>165?this.hillHeight(s,c):0,u=.8+n()*.9;r.compose(new z(s,l-.2,c),new Ut().setFromEuler(new Cn(0,n()*6.28,0)),new z(u,u*(.85+n()*.4),u)),(n()<.6?e:t).add(r),i++}e.freeze(),t.freeze()}rebuildFence(e){for(let e of[...this.fenceGroup.children])this.fenceGroup.remove(e),e.geometry&&e.geometry.dispose();let t=new Set(e),n=new Qp,r=1.25,i=[];for(let n of e){let[e,r]=n.split(`,`).map(Number),a=-64+e*32,o=-64+r*32,s=a+32,c=o+32;t.has(`${e},${r-1}`)||i.push([a,o,s,o]),t.has(`${e},${r+1}`)||i.push([a,c,s,c]),t.has(`${e-1},${r}`)||i.push([a,o,a,c]),t.has(`${e+1},${r}`)||i.push([s,o,s,c])}let a=(e,t,i,a)=>{let o=Math.hypot(i-e,a-t);if(o<.1)return;let s=new us(o,r),c=s.attributes.uv;for(let e=0;e<c.count;e++)c.setX(e,c.getX(e)*o/2);let l=Math.atan2(-(a-t),i-e);n.add(s,X.fence,(e+i)/2,r/2,(t+a)/2,0,l,0);let u=Math.max(1,Math.round(o/2.5));for(let r=0;r<=u;r++){let o=r/u;n.box(.14,1.4,.14,X.whitePaint,e+(i-e)*o,1.4/2,t+(a-t)*o)}};for(let[e,t,n,r]of i)if(t===r&&t===64&&Math.min(e,n)<-9&&Math.max(e,n)>9)a(Math.min(e,n),t,-9,t),a(9,t,Math.max(e,n),t);else if(t===r&&t===64&&e>=-9&&n<=9)continue;else if(t===r&&t===64){let r=Math.min(e,n),i=Math.max(e,n);i<=-9||r>=9?a(r,t,i,t):(r<-9&&a(r,t,-9,t),i>9&&a(9,t,i,t))}else a(e,t,n,r);let o=em(n.build());for(let e of[...o.children])this.fenceGroup.add(e)}rebuildSaleSigns(e,t){for(let e of this.saleSigns)this.saleGroup.remove(e.group);this.saleSigns=[];let n=new Set(e),r=Hm(`forsale`);for(let e=0;e<4;e++)for(let i=0;i<4;i++){let a=`${e},${i}`;if(n.has(a)||!(n.has(`${e-1},${i}`)||n.has(`${e+1},${i}`)||n.has(`${e},${i-1}`)||n.has(`${e},${i+1}`)))continue;let o=em(r),s=t(),c=Uf([`FOR SALE`,`$`+s.toLocaleString(`en-US`)],{bg:`#ffffff`,fg:`#d8341e`,w:512,h:256,border:`#d8341e`}),l=new Ni(new us(2.1,1.05),dp(c,.3));l.position.set(0,1.75,.04);let u=l.clone();u.rotation.y=Math.PI,u.position.z=-.04,o.add(l,u);let d=-64+e*32+16,f=-64+i*32+16,p=0;n.has(`${e},${i+1}`)?(f=-64+(i+1)*32-2,p=0):n.has(`${e},${i-1}`)?(f=-64+i*32+2,p=Math.PI):n.has(`${e+1},${i}`)?(d=-64+(e+1)*32-2,p=Math.PI/2):n.has(`${e-1},${i}`)&&(d=-64+e*32+2,p=-Math.PI/2),o.position.set(d,0,f),o.rotation.y=p,this.saleGroup.add(o),this.saleSigns.push({group:o,plot:a,x:d,z:f,price:s})}}initGrass(e){this.grass&&(this.grass.meshes.forEach(e=>this.scene.remove(e)),this.grass=null),e&&(this.grass=new tm(Hm(`grassClump`),this.scene,e),this.grassCap=e,this.grassCell=e>6e3?.5:.7,this.grassR=e>6e3?24:20,this.grassCenter.set(1e9,1e9))}refreshGrass(e,t=!1){if(!this.grass)return;let n=Math.round(e.x/4)*4,r=Math.round(e.z/4)*4;if(!t&&n===this.grassCenter.x&&r===this.grassCenter.y)return;this.grassCenter.set(n,r);let i=this.grass;for(;i.count>0;)i.remove(i.handles[i.count-1]);let a=this.grassR,o=this.grassCell,s=new B,c=new Ut,l=new Cn,u=new z,d=new z,f=G.park&&G.park.grid,p=Math.floor((n-a)/o),m=Math.ceil((n+a)/o),h=Math.floor((r-a)/o),g=Math.ceil((r+a)/o);for(let e=h;e<=g;e++)for(let t=p;t<=m&&!(i.count>=this.grassCap);t++){let p=Math.sin(t*127.1+e*311.7)*43758.5453,m=p-Math.floor(p),h=Math.sin(t*269.5+e*183.3)*43758.5453,g=h-Math.floor(h),_=(t+m)*o,v=(e+g)*o,y=Math.hypot(_-n,v-r);if(y>a||v>64.5&&v<112&&Math.abs(_)<52||v>61&&v<67&&Math.abs(_)<15||f&&!f.isGrass(_,v))continue;let b=rf(a,a-6,y),x=(.55+m*.7)*b;l.set(0,g*6.28,0),c.setFromEuler(l),u.set(_,0,v),d.set(x*(.8+g*.5),x,x*(.8+g*.5)),s.compose(u,c,d),i.add(s)}}update(e){for(let t of this.movingCars)t.g.position.x+=t.dir*t.speed*e,t.g.position.x>180&&(t.g.position.x=-180),t.g.position.x<-180&&(t.g.position.x=180)}},Gm=class{constructor(e,t,n){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.alpha0=new Float32Array(t);let r=new Ur;this.aPos=new kr(this.pos,3).setUsage(tt),this.aCol=new kr(this.col,4).setUsage(tt),this.aSize=new kr(this.size,1).setUsage(tt),r.setAttribute(`position`,this.aPos),r.setAttribute(`color`,this.aCol),r.setAttribute(`size`,this.aSize),r.setDrawRange(0,0),this.mat=new Ts({uniforms:{uScale:{value:600},uTex:{value:Y.spark}},vertexShader:`
        attribute float size; attribute vec4 color; varying vec4 vCol; uniform float uScale;
        void main() { vCol = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(size * uScale / -mv.z, 1.0, 256.0); }`,fragmentShader:`
        varying vec4 vCol; uniform sampler2D uTex;
        void main() { float a = texture2D(uTex, gl_PointCoord).a; gl_FragColor = vec4(vCol.rgb, vCol.a * a); if (gl_FragColor.a < 0.01) discard; }`,transparent:!0,depthWrite:!1,blending:n?2:1}),this.points=new Aa(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}emit(e,t,n,r,i,a,o,s,c,l,u,d=1,f=1,p=0){let m;m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),this.pos[m*3]=e,this.pos[m*3+1]=t,this.pos[m*3+2]=n,this.vel[m*3]=r,this.vel[m*3+1]=i,this.vel[m*3+2]=a,this.col[m*4]=c,this.col[m*4+1]=l,this.col[m*4+2]=u,this.col[m*4+3]=d,this.alpha0[m]=d,this.size[m]=s,this.life[m]=o,this.maxLife[m]=o,this.grav[m]=f,this.drag[m]=p}update(e){let t=this.n,n=this.pos,r=this.vel;for(let i=0;i<t;i++){if(this.life[i]-=e,this.life[i]<=0||n[i*3+1]<-3){if(t--,i!==t){n[i*3]=n[t*3],n[i*3+1]=n[t*3+1],n[i*3+2]=n[t*3+2],r[i*3]=r[t*3],r[i*3+1]=r[t*3+1],r[i*3+2]=r[t*3+2];for(let e=0;e<4;e++)this.col[i*4+e]=this.col[t*4+e];this.size[i]=this.size[t],this.life[i]=this.life[t],this.maxLife[i]=this.maxLife[t],this.grav[i]=this.grav[t],this.drag[i]=this.drag[t],this.alpha0[i]=this.alpha0[t]}i--;continue}let a=1-this.drag[i]*e;r[i*3]*=a,r[i*3+1]=r[i*3+1]*a-9.81*this.grav[i]*e,r[i*3+2]*=a,n[i*3]+=r[i*3]*e,n[i*3+1]+=r[i*3+1]*e,n[i*3+2]+=r[i*3+2]*e;let o=this.life[i]/this.maxLife[i];this.col[i*4+3]=this.alpha0[i]*Math.min(1,o*3)}this.n=t,this.points.geometry.setDrawRange(0,t),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},Km=class{constructor(e){this.scene=e,this.water=new Gm(e,3500,!1),this.glow=new Gm(e,4e3,!0),this.rockets=[],this.fireworksShow=null;let t=new Ba(.035,.035,.12,10).rotateZ(Math.PI/2).translate(0,.035,0),n=new Ba(.045,.032,.11,10).rotateX(Math.PI/2.3).translate(0,.04,0),r=new cs(.06,0).scale(1.4,.45,1).translate(0,.025,0);this.trashMeshes=[new aa(t,new U({color:14170682,metalness:.7,roughness:.3}),300),new aa(n,cp(16777215,.5),300),new aa(r,cp(16761370,.4),300)];for(let t of this.trashMeshes)t.count=0,t.castShadow=!0,t.frustumCulled=!1,e.add(t);this.trash=[];let i=new Ba(.13,.13,.025,20).rotateX(Math.PI/2);this.coinMat=new U({color:16762938,metalness:.75,roughness:.25,emissive:16753664,emissiveIntensity:.55}),this.coinMesh=new aa(i,this.coinMat,200),this.coinMesh.count=0,this.coinMesh.frustumCulled=!1,this.coinMesh.castShadow=!0,e.add(this.coinMesh),this.coins=[];let a=new us(.16,.09).rotateX(-Math.PI/2);this.leafMesh=new aa(a,new U({color:7043626,roughness:.8,side:2}),500),this.leafMesh.count=0,this.leafMesh.frustumCulled=!1,e.add(this.leafMesh),this.leaves=[],this.ducks=[],this.duckProto=this._makeDuck(!1),this.goldDuckProto=this._makeDuck(!0),this.birds=[];let o=new U({color:16053488,roughness:.8,side:2}),s=new U({color:3816770,roughness:.8,side:2});for(let t=0;t<9;t++){let t=new Vn,n=new Ni(new ms(.12,8,6),o);n.scale.set(.8,.7,2.2),t.add(n);let r=new Ni(new ms(.08,8,6),o);r.position.set(0,.05,.25),t.add(r);let i=new us(.7,.22).translate(.35,0,0).rotateX(-Math.PI/2),a=new us(.25,.16).translate(.82,0,-.02).rotateX(-Math.PI/2),c=new Vn,l=new Vn;c.add(new Ni(i,o),new Ni(a,s)),l.add(new Ni(i,o),new Ni(a,s)),l.scale.x=-1,t.add(c,l),t.scale.setScalar(1.6),e.add(t),this.birds.push({g:t,wl:c,wr:l,cx:q(-40,40),cz:q(-20,60),r:q(18,45),h:q(22,40),a:q(0,6.28),sp:q(.12,.22)*(Math.random()<.5?1:-1),ph:q(0,6)})}this._m=new B,this._q=new Ut,this._e=new Cn,this._s=new z(1,1,1),this._p=new z}_makeDuck(e){let t=new Vn,n=e?new U({color:16765770,metalness:1,roughness:.15,emissive:5583616,emissiveIntensity:.5}):cp(16768042,.3),r=new Ni(new ms(.16,14,10),n);r.scale.set(1,.75,1.3),r.position.y=.06;let i=new Ni(new ms(.1,12,10),n);i.position.set(0,.22,.12);let a=new Ni(new Va(.04,.09,8),cp(16742938,.4));a.rotation.x=Math.PI/2,a.position.set(0,.2,.24);let o=Z(1118481,.3);for(let e of[-1,1]){let n=new Ni(new ms(.018,6,5),o);n.position.set(e*.06,.25,.19),t.add(n)}return t.add(r,i,a),t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}splash(e,t,n,r=1){let i=Math.round(26*r);for(let a=0;a<i;a++){let i=Math.random()*Math.PI*2,a=Math.random(),o=(1.2+Math.random()*2.2)*r;this.water.emit(e+Math.cos(i)*a*.3,t+.05,n+Math.sin(i)*a*.3,Math.cos(i)*o*.6,2+Math.random()*3.5*r,Math.sin(i)*o*.6,.7+Math.random()*.5,.12+Math.random()*.14,.88,.97,1,.75,1,.3)}for(let i=0;i<6*r;i++){let r=Math.random()*Math.PI*2;this.water.emit(e+Math.cos(r)*.4,t+.02,n+Math.sin(r)*.4,Math.cos(r)*1.2,.3,Math.sin(r)*1.2,.9,.5,.95,1,1,.35,.05,2)}}spray(e,t,n,r,i,a,o=.12,s=.3){this.water.emit(e,t,n,r+(Math.random()-.5)*s,i+(Math.random()-.5)*s,a+(Math.random()-.5)*s,1.1,o,.9,.97,1,.6,1,.1)}bubble(e,t,n){this.water.emit(e,t,n,(Math.random()-.5)*.2,.4+Math.random()*.3,(Math.random()-.5)*.2,.6,.05+Math.random()*.06,.95,1,1,.8,-.05,.5)}steam(e,t,n){this.water.emit(e,t,n,(Math.random()-.5)*.15,.25+Math.random()*.2,(Math.random()-.5)*.15,2.2,.5+Math.random()*.4,.9,.92,.95,.12,-.01,.3)}sparkle(e,t,n,r=16765770,i=14){let a=new V(r);for(let r=0;r<i;r++){let r=Math.random()*Math.PI*2,i=Math.random()*Math.PI-Math.PI/2,o=1+Math.random()*2;this.glow.emit(e,t,n,Math.cos(r)*Math.cos(i)*o,Math.sin(i)*o+1.5,Math.sin(r)*Math.cos(i)*o,.6+Math.random()*.4,.12+Math.random()*.1,a.r,a.g,a.b,1,.4,1.5)}}dust(e,t,n,r=30){for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2;this.water.emit(e+Math.cos(r)*.5,t+.1,n+Math.sin(r)*.5,Math.cos(r)*2.5,.6+Math.random(),Math.sin(r)*2.5,.8,.35+Math.random()*.3,.95,.92,.85,.5,.2,2.5)}}confetti(e,t,n,r=120){let i=[16730698,16765498,3858298,2797823,16743096,10771711];for(let a=0;a<r;a++){let r=new V(cf(i)),a=Math.random()*Math.PI*2;this.glow.emit(e,t,n,Math.cos(a)*q(1,5),q(3,9),Math.sin(a)*q(1,5),q(1.8,3),q(.1,.18),r.r,r.g,r.b,1,.35,.8)}}fire(e,t,n){this.glow.emit(e+(Math.random()-.5)*.06,t,n+(Math.random()-.5)*.06,(Math.random()-.5)*.2,.6+Math.random()*.5,(Math.random()-.5)*.2,.35+Math.random()*.2,.18+Math.random()*.1,1,.55+Math.random()*.2,.15,.8,-.2,1)}launchRocket(e,t){let n=[16726586,16765498,3866506,3846399,16739029,16777215,16751146,10775295];this.rockets.push({x:e,y:1,z:t,vx:q(-1.5,1.5),vy:q(22,30),vz:q(-1.5,1.5),t:q(1.2,1.7),col:new V(cf(n)),col2:new V(cf(n)),type:Math.floor(Math.random()*3)}),G.audio&&G.audio.play(`launch`,{pos:new z(e,1,t),vol:.6})}explode(e){for(let t=0;t<140;t++){let n=Math.random()*2-1,r=Math.random()*Math.PI*2,i=Math.sqrt(1-n*n),a=e.type===1?11:q(6,12),o=t%2?e.col:e.col2;this.glow.emit(e.x,e.y,e.z,Math.cos(r)*i*a,n*a,Math.sin(r)*i*a,q(1.4,2.4),q(.35,.6),o.r,o.g,o.b,1,.12,1.4)}this.glow.emit(e.x,e.y,e.z,0,0,0,.25,6,1,.95,.8,1,0,0),G.audio&&G.audio.play(`boom`,{pos:new z(e.x,e.y,e.z),vol:1})}startFireworks(e){e.length&&(this.fireworksShow={t:0,dur:40,launchers:e,next:0},K.emit(`fireworks`))}addTrash(e,t){if(this.trash.length>=290)return null;let n={x:e,z:t,kind:Math.floor(Math.random()*3),ry:Math.random()*Math.PI*2,id:Math.random(),claimed:null};return this.trash.push(n),this._rebuildTrash(),K.emit(`trashSpawned`,n),n}removeTrash(e){let t=this.trash.indexOf(e);return t<0?!1:(this.trash.splice(t,1),this._rebuildTrash(),!0)}_rebuildTrash(){let e=[0,0,0];for(let t of this.trash){let n=this.trashMeshes[t.kind];this._e.set(0,t.ry,0),this._q.setFromEuler(this._e),this._p.set(t.x,0,t.z),this._m.compose(this._p,this._q,this._s),n.setMatrixAt(e[t.kind]++,this._m)}this.trashMeshes.forEach((t,n)=>{t.count=e[n],t.instanceMatrix.needsUpdate=!0})}trashNear(e,t,n){let r=0,i=n*n;for(let n of this.trash)(n.x-e)**2+(n.z-t)**2<i&&r++;return r}nearestTrash(e,t,n,r=!1){let i=null,a=n*n;for(let n of this.trash){if(r&&n.claimed)continue;let o=(n.x-e)**2+(n.z-t)**2;o<a&&(a=o,i=n)}return i}addCoin(e,t,n,r){this.coins.length>=190||this.coins.push({x:e,y:t,z:n,vy:3.2,value:r,t:0,ground:Math.max(.25,t>0?.25:Xf+.12),life:120})}setPoolDebris(e,t){this.leaves=this.leaves.filter(t=>t.pool!==e);let n=e.pool;for(let r=0;r<t;r++){let t,r;if(n.shape===`circle`){let e=Math.random()*6.28,i=Math.sqrt(Math.random())*n.r*.85;t=Math.cos(e)*i,r=Math.sin(e)*i}else t=(Math.random()-.5)*n.hw*1.8,r=(Math.random()-.5)*n.hl*1.8;let[i,a]=e.poolToWorld(t,r);n.floorFn(t,r)>-.12-.05||this.leaves.push({pool:e,x:i,z:a,ry:Math.random()*6.28,ph:Math.random()*6.28,lx:t,lz:r})}}removeLeavesNear(e,t,n){let r=this.leaves.length;return this.leaves=this.leaves.filter(r=>(r.x-e)**2+(r.z-t)**2>n*n),r-this.leaves.length}addDuck(e,t){let n=e.pool,r=0,i=0;for(let e=0;e<10;e++){if(n.shape===`circle`){let e=Math.random()*6.28,t=Math.sqrt(Math.random())*n.r*.7;r=Math.cos(e)*t,i=Math.sin(e)*t}else r=(Math.random()-.5)*n.hw*1.6,i=(Math.random()-.5)*n.hl*1.6;if(n.floorFn(r,i)<-.42)break}let[a,o]=e.poolToWorld(r,i),s=(t?this.goldDuckProto:this.duckProto).clone();s.position.set(a,Xf,o),this.scene.add(s);let c={pool:e,mesh:s,x:a,z:o,gold:t,vx:q(-.15,.15),vz:q(-.15,.15),ph:Math.random()*6,value:t?750:Math.round(q(60,160))};return this.ducks.push(c),c}removeDuck(e){let t=this.ducks.indexOf(e);t>=0&&this.ducks.splice(t,1),this.scene.remove(e.mesh)}update(e,t,n){this.water.update(e),this.glow.update(e);let r=(G.renderer?G.renderer.domElement.height:800)*.75;this.water.mat.uniforms.uScale.value=r,this.glow.mat.uniforms.uScale.value=r;for(let t=this.rockets.length-1;t>=0;t--){let n=this.rockets[t];n.vy-=9.81*e*.6,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.t-=e,this.glow.emit(n.x,n.y,n.z,(Math.random()-.5)*.5,-1,(Math.random()-.5)*.5,.5,.18,1,.75,.4,.8,.2,1),n.t<=0&&(this.explode(n),this.rockets.splice(t,1))}let i=this.fireworksShow;if(i){if(i.t+=e,i.next-=e,i.next<=0){let e=cf(i.launchers),t=i.t>i.dur-6?3:1;for(let n=0;n<t;n++)this.launchRocket(e.x+q(-.5,.5),e.z+q(-.5,.5));i.next=i.t>i.dur-6?.25:q(.6,1.6)}i.t>i.dur&&(this.fireworksShow=null)}let a=this.coinMesh,o=0;for(let t=this.coins.length-1;t>=0;t--){let n=this.coins[t];n.t+=e,n.life-=e,n.vy!==0&&(n.vy-=9.81*e,n.y+=n.vy*e,n.y<=n.ground&&(n.y=n.ground,n.vy=0)),n.life<=0&&this.coins.splice(t,1)}for(let e of this.coins){this._e.set(0,n*3+e.x,0),this._q.setFromEuler(this._e),this._p.set(e.x,e.y+(e.vy===0?Math.sin(n*3+e.z)*.06:0),e.z);let t=e.life<3?e.life/3:1;this._s.set(t,t,t),this._m.compose(this._p,this._q,this._s),a.setMatrixAt(o++,this._m)}this._s.set(1,1,1),a.count=o,a.instanceMatrix.needsUpdate=!0;let s=this.leafMesh,c=0;for(let e of this.leaves){if(c>=500)break;this._e.set(Math.sin(n+e.ph)*.08,e.ry+Math.sin(n*.2+e.ph)*.3,0),this._q.setFromEuler(this._e),this._p.set(e.x+Math.sin(n*.15+e.ph)*.2,Xf+.012+Math.sin(n*1.3+e.ph)*.008,e.z+Math.cos(n*.13+e.ph)*.2),this._m.compose(this._p,this._q,this._s),s.setMatrixAt(c++,this._m)}s.count=c,s.instanceMatrix.needsUpdate=!0;for(let t of this.birds){t.a+=t.sp*e,t.ph+=e*(6+Math.sin(n*.3+t.cx)*2);let r=t.cx+Math.cos(t.a)*t.r,i=t.cz+Math.sin(t.a)*t.r,a=t.h+Math.sin(n*.4+t.cz)*2;t.g.position.set(r,a,i);let o=t.sp>0?1:-1;t.g.rotation.set(0,Math.atan2(-Math.sin(t.a)*o,Math.cos(t.a)*o),-.25*o);let s=Math.sin(t.ph)>-.2?Math.sin(t.ph)*.6:-.12;t.wl.rotation.z=s,t.wr.rotation.z=-s,t.g.visible=!G.env||G.env.nightF<.7}for(let t of this.ducks){t.ph+=e;let n=t.pool.pool;t.x+=t.vx*e,t.z+=t.vz*e;let[r,i]=t.pool.poolLocal(t.x,t.z);((n.shape===`circle`?Math.hypot(r,i)>n.r*.75:Math.abs(r)>n.hw-.4||Math.abs(i)>n.hl-.4)||n.floorFn(r,i)>-.37)&&(t.vx=-t.vx,t.vz=-t.vz,t.x+=t.vx*e*2,t.z+=t.vz*e*2),t.mesh.position.set(t.x,Xf-.02+Math.sin(t.ph*2)*.02+(t.pool.waveAt?t.pool.waveAt(t.x,t.z):0),t.z),t.mesh.rotation.set(Math.sin(t.ph*1.7)*.08,Math.atan2(t.vx,t.vz),Math.sin(t.ph*2.1)*.08),t.gold&&Math.random()<e*4&&this.sparkle(t.x,Xf+.3,t.z,16765770,1)}}},qm={uWaveAmp:{value:0},uRipple:{value:1}},Jm=new V(4183786),Ym=new V(8032058),Xm=new V(2274520),Zm=new V(7309882),Qm=`
uniform float uWaveAmp;
float waveH(vec2 p, float t) {
  return uWaveAmp * (0.32 * sin(1.15 * p.y - 2.1 * t) + 0.1 * sin(2.4 * p.y + 0.6 * p.x - 3.2 * t) + 0.05 * sin(0.9 * p.x + 1.3 * t));
}
`;function $m(e,t,n){return qm.uWaveAmp.value*(.32*Math.sin(1.15*t-2.1*n)+.1*Math.sin(2.4*t+.6*e-3.2*n)+.05*Math.sin(.9*e+1.3*n))}function eh(e={}){let t=G.quality===`low`,n;n=t?new U({color:Xm.clone(),transparent:!0,opacity:.72,roughness:.04,metalness:.15,normalMap:Y.waterN,normalScale:new R(.35,.35),envMapIntensity:1.3,depthWrite:!1}):new Ds({color:16777215,transmission:1,thickness:.5,ior:1.33,roughness:.035,metalness:0,attenuationColor:Jm.clone(),attenuationDistance:2.2,specularIntensity:1,normalMap:Y.waterN,normalScale:new R(.28,.28),envMapIntensity:1.15}),n.userData.isWater=!0;let r=!!e.wave;return n.onBeforeCompile=e=>{e.uniforms.uTime=tp.uTime,e.uniforms.uRipple=qm.uRipple,e.uniforms.uWaveAmp=qm.uWaveAmp,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
varying vec2 vWaterUV;
`+(r?Qm:``)).replace(`#include <project_vertex>`,`#include <project_vertex>
 vWaterUV = (modelMatrix * vec4(transformed, 1.0)).xz * 0.22;`),r&&(e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`
          float e = 0.15;
          float h0 = waveH(position.xz, uTime);
          float hx = waveH(position.xz + vec2(e, 0.0), uTime);
          float hz = waveH(position.xz + vec2(0.0, e), uTime);
          vec3 objectNormal = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3( tangent.xyz );
          #endif`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
 transformed.y += h0;`)),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uTime; uniform float uRipple;
varying vec2 vWaterUV;`).replace(`#include <normal_fragment_maps>`,`
        #ifdef USE_NORMALMAP_TANGENTSPACE
          vec2 wuv = vWaterUV;
          vec3 n1 = texture2D(normalMap, wuv + uTime * vec2(0.021, 0.013)).xyz * 2.0 - 1.0;
          vec3 n2 = texture2D(normalMap, wuv * 1.63 + vec2(0.37, 0.11) - uTime * vec2(0.012, 0.019)).xyz * 2.0 - 1.0;
          vec3 n3 = texture2D(normalMap, wuv * 0.31 + uTime * vec2(-0.006, 0.008)).xyz * 2.0 - 1.0;
          vec3 mapN = normalize(vec3(n1.xy + n2.xy + n3.xy * 0.7, n1.z * 1.2));
          mapN.xy *= normalScale * uRipple;
          normal = normalize(tbn * mapN);
        #endif`)},n.customProgramCacheKey=()=>`water`+(r?`W`:``)+(t?`L`:`H`),n}function th(e,t){e.attenuationColor?(e.attenuationColor.copy(Jm).lerp(Ym,t),e.attenuationDistance=2.2-t*1.5,e.color.setRGB(1-t*.15,1-t*.05,1-t*.3)):(e.color.copy(Xm).lerp(Zm,t),e.opacity=.72+t*.2)}var nh={m:null};function rh(){return nh.m||(nh.m=new Ts({uniforms:{uTime:tp.uTime,uAmb:tp.uAmb,uGlow:tp.uGlow,uN:{value:Y.waterN}},vertexShader:`
        varying vec3 vW;
        void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
        uniform float uTime, uAmb, uGlow; uniform sampler2D uN; varying vec3 vW;
        void main() {
          vec3 V = normalize(cameraPosition - vW);
          vec2 n = texture2D(uN, vW.xz * 0.25 + uTime * vec2(0.02, 0.014)).xy * 2.0 - 1.0;
          vec2 n2 = texture2D(uN, vW.xz * 0.41 - uTime * vec2(0.016, 0.021)).xy * 2.0 - 1.0;
          float cosT = abs(V.y) + (n.x + n2.y) * 0.05;
          float win = smoothstep(0.6, 0.72, cosT);
          float amb = max(uAmb, 0.08);
          vec3 tir = vec3(0.03, 0.30, 0.38) * (0.35 + 0.65 * amb) + vec3(0.1, 0.5, 0.65) * uGlow * 0.4;
          tir += vec3(0.25, 0.45, 0.5) * pow(max(0.0, n.x * n2.y), 2.0) * amb;
          vec3 col = mix(tir, vec3(0.8, 0.97, 1.0) * (0.3 + 0.9 * amb), win);
          float a = mix(0.96, 0.18, win);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,side:1,transparent:!0,depthWrite:!1,fog:!1})),nh.m}function ih(e,t={}){let n=new Ni(e,eh(t));n.receiveShadow=!1,n.castShadow=!1,n.renderOrder=1;let r=new Ni(e,rh());return r.renderOrder=2,n.add(r),n}var ah=class{constructor(){this.pos=[],this.nor=[],this.uv=[]}quad(e,t,n,r,i,a,o,s,c){this.pos.push(...e,...t,...n,...e,...n,...r);for(let e=0;e<6;e++)this.nor.push(...i);this.uv.push(...a,...o,...s,...a,...s,...c)}build(){let e=new Ur;return e.setAttribute(`position`,new H(this.pos,3)),e.setAttribute(`normal`,new H(this.nor,3)),e.setAttribute(`uv`,new H(this.uv,2)),e}};function oh(e,t,n,r=!1){return r?t=>{let r=(t+e/2)/e;if(r<.18)return-n;let i=(r-.18)/.82;return-n+(n+.03)*i**.85}:Math.abs(t-n)<.01?()=>-t:r=>{let i=(r+e/2)/e;if(i<.42)return-t;if(i>.72)return-n;let a=(i-.42)/.3;return-t+(t-n)*(a*a*(3-2*a))}}function sh(e,t,n,r,i,a){let o=new ah,s=new ah,c=[],l=Math.max(4,Math.ceil(t/.6));for(let e=0;e<=l;e++)c.push(-t/2+t*e/l);let u=e/2;for(let e=0;e<l;e++){let t=c[e],r=c[e+1],i=n(t),a=n(r),o=new z(0,r-t,-(a-i)).normalize();s.quad([-u,i,t],[-u,a,r],[u,a,r],[u,i,t],[o.x,o.y,o.z],[-u,t],[-u,r],[u,r],[u,t])}for(let e=0;e<l;e++){let t=c[e],r=c[e+1],i=n(t),a=n(r);i>=-.01&&a>=-.01||(o.quad([-u,0,r],[-u,a,r],[-u,i,t],[-u,0,t],[1,0,0],[r,0],[r,a],[t,i],[t,0]),o.quad([u,0,t],[u,i,t],[u,a,r],[u,0,r],[-1,0,0],[t,0],[t,i],[r,a],[r,0]))}let d=n(-t/2),f=n(t/2);return o.quad([-u,0,-t/2],[-u,d,-t/2],[u,d,-t/2],[u,0,-t/2],[0,0,1],[-u,0],[-u,d],[u,d],[u,0]),r||o.quad([u,0,t/2],[u,f,t/2],[-u,f,t/2],[-u,0,t/2],[0,0,-1],[u,0],[u,f],[-u,f],[-u,0]),{walls:o.build(),floor:s.build()}}function ch(e,t,n,r,i){let a=X.chrome,o=e=>[new z(e,-i,.16),new z(e,-.2,.16),new z(e,.55,.12),new z(e,.85,-.1),new z(e,.7,-.35),new z(e,.02,-.42)],s=new B().makeRotationY(r).setPosition(t,0,n);for(let t of[-.28,.28]){let n=new gs(new $a(o(t)),24,.025,8);e.addMatrix(n,a,s)}for(let t=0;t<3;t++){let n=new La(.56,.03,.1);n.translate(0,-.25-t*.3,.18),e.addMatrix(n,X.steel,s)}}function lh(e){let t=e.W,n=e.L,r=e.dS,i=e.dD,a=e.deck??1.5,o=!!e.beach,s=oh(n,r,i,o),c=new Qp,l=e.tileMat||X.poolTile,{walls:u,floor:d}=sh(t,n,s,o,l);if(c.add(u,l),c.add(d,e.floorMat||l),e.lanes){let r=e.lanes;for(let e=1;e<r;e++){let i=-t/2+t*e/r,a=new us(.22,n-2.4).rotateX(-Math.PI/2);c.add(a,X.poolTileDark,i,s(0)+.01,0),c.add(new us(.22,1).rotateX(0),X.poolTileDark,i,-.55,-n/2+.01)}}if(e.band)for(let[r,i,a,s,l]of[[0,-n/2+.005,t,.01,0],[0,n/2-.005,t,.01,0],[-t/2+.005,0,.01,n,0],[t/2-.005,0,.01,n,0]])o&&i>0&&a>1||c.box(a,.16,s,e.band,r,-.2,i,l);let f=.34,p=.075,m=(e,t,n,r)=>{let i=new La(n,p,r);$p(i,n,p,r,1),c.add(i,X.coping,e,p/2-.005,t)};m(0,-n/2-f/2+.05,t+f*2-.1,f),o||m(0,n/2+f/2-.05,t+f*2-.1,f),m(-t/2-f/2+.05,0,f,n-.1+0),m(t/2+f/2-.05,0,f,n-.1);let h=t+a*2;n+a*2;let g=(t,n,r,i)=>{if(r<=.01||i<=.01)return;let a=new La(r,.04,i);$p(a,r,.04,i,.5),c.add(a,e.deckMat||X.deck,t,.015,n)};g(0,-n/2-a/2,h,a),g(0,n/2+a/2,h,a),g(-t/2-a/2,0,a,n),g(t/2+a/2,0,a,n);let _=Math.max(1,Math.floor(n/5));for(let e=0;e<_;e++){let r=-n/2+n*(e+.5)/_,i=Math.max(s(r)+.25,-.55);i>-.32||(c.add(new za(.13,16),X.poolLight,-t/2+.012,i,r,0,Math.PI/2,0),c.add(new za(.13,16),X.poolLight,t/2-.012,i,r,0,-Math.PI/2,0))}if(e.ladders!==!1&&!o){let e=n*.3;ch(c,-t/2,-e,Math.PI/2,Math.min(1,-s(-e)-.1)),ch(c,t/2,e,-Math.PI/2,Math.min(1,-s(e)-.1))}e.extras&&e.extras(c,s);let v=c.build(),y=em(v);y.traverse(e=>{e.isMesh&&(e.castShadow=e.material!==X.deck&&e.material!==X.coping&&e.castShadow)});let b;b=e.wave?new us(t,n,Math.ceil(t*1.5),Math.ceil(n*1.5)):new us(t+.02,n+.02,1,1),b.rotateX(-Math.PI/2);let x=ih(b,{wave:!!e.wave});return x.position.y=Xf,y.add(x),{group:y,water:x,meta:{shape:`rect`,hw:t/2,hl:n/2,floorFn:(e,t)=>s(t),beach:o,deckW:a,holeLocal:[-t/2,-n/2,t/2,n/2],depthMax:Math.max(r,i)},prefab:v}}function uh(e){let t=e.R||1.6,n=e.depth||.9,r=e.deckHalf||2.5,i=new Qp,a=X.poolTileWarm,o=e=>{let t=e.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,-t.getX(e),0,-t.getZ(e));let n=e.index.array;for(let e=0;e<n.length;e+=3){let t=n[e];n[e]=n[e+2],n[e+2]=t}return e},s=o(new Ba(t,t,n,36,1,!0));i.add(s,a,0,-n/2,0);let c=new ds(t-.45,t,36,1).rotateX(-Math.PI/2);i.add(c,a,0,-n*.5,0);let l=o(new Ba(t-.45,t-.45,n*.5,36,1,!0));i.add(l,a,0,-n*.75,0),i.add(new za(t-.45,36).rotateX(-Math.PI/2),a,0,-n,0),i.add(new hs(t+.12,.13,10,48),X.coping,0,0,0,Math.PI/2,0,0),r*2;let u=new xo;u.moveTo(-r,-r),u.lineTo(r,-r),u.lineTo(r,r),u.lineTo(-r,r),u.closePath();let d=new bo;d.absarc(0,0,t+.05,0,Math.PI*2,!0),u.holes.push(d);let f=new fs(u,32).rotateX(-Math.PI/2),p=f.attributes.uv,m=f.attributes.position;for(let e=0;e<p.count;e++)p.setXY(e,m.getX(e)*.5,m.getZ(e)*.5);i.add(f,X.woodDark,0,.035,0);for(let e=0;e<6;e++){let r=e/6*Math.PI*2;i.add(new za(.05,10),X.chrome,Math.cos(r)*(t-.01),-n*.3,Math.sin(r)*(t-.01),0,-r-Math.PI/2,0)}for(let e=0;e<4;e++){let r=e/4*Math.PI*2+.4;i.add(new za(.1,12),X.poolLight,Math.cos(r)*(t-.46),-n*.62,Math.sin(r)*(t-.46),0,-r-Math.PI/2,0)}i.add(new gs(new $a([new z(t-.2,-.4,.4),new z(t-.1,.5,.4),new z(t+.3,.75,.4),new z(t+.55,.02,.4)]),16,.025,6),X.chrome);let h=i.build(),g=em(h),_=ih(new za(t+.02,40).rotateX(-Math.PI/2));return _.position.y=Xf,g.add(_),{group:g,water:_,meta:{shape:`circle`,r:t,floorFn:(e,r)=>Math.hypot(e,r)>t-.45?-n*.5:-n,deckW:r-t,depthMax:n,holeLocal:null},prefab:h}}function dh(e){e.cyl(.12,.16,1.6,cp(16777215,.4),0,.35,0,12);let t=new ms(.95,20,10,0,Math.PI*2,0,Math.PI/2.2);e.add(t,cp(16730698,.35),0,1,0);for(let t=0;t<7;t++){let n=t/7*Math.PI*2;e.sphere(.12,cp(16777215,.4),Math.cos(n)*.55,1.62,Math.sin(n)*.55,1,.5,1)}for(let[t,n]of[[-2,-1.8],[2,1.8]])e.sphere(.32,cp(3858282,.35),t,-.3,n,1,.8,1.1),e.sphere(.09,cp(16777215,.3),t-.12,-.05,n+.25),e.sphere(.09,cp(16777215,.3),t+.12,-.05,n+.25)}function fh(e,t,n){let r=-n/2-1.3;e.boxUV(t+1.2,3.2,1.6,X.stucco,0,1.6,r,0,.5),e.box(t+1.6,.25,2,Z(1736632,.5),0,3.3,r);for(let r=0;r<5;r++){let i=-t/2+1.2+r*((t-2.4)/4);e.box(1.6,.9,.06,X.steelDark,i,-.55,-n/2+.03);for(let t=0;t<5;t++)e.box(1.5,.05,.08,X.steel,i,-.9+t*.18,-n/2+.05)}}var ph=new z(0,1,0),mh={kiddie:{name:`Wiggle Kiddie Slide`,H:2.6,kind:`open`,R:.45,kids:!0,fun:.45,thrill:.1,turtle:[[`S`,.6,.3],[`R`,60,2.2],[`L`,60,2.2],[`S`,.8,.35]],pool:{W:4,L:3.5,depth:.55},friction:.55},twister:{name:`Twister`,H:8,kind:`open`,R:.55,fun:.75,thrill:.45,turtle:[[`S`,4.5,.3],[`L`,720,3.4],[`S`,4.5,.3]],pool:{W:5,L:6,depth:1.1},friction:.35},racer:{name:`Rapid Racer`,H:7,kind:`open`,R:.5,fun:.8,thrill:.55,twin:!0,profile:`racer`,length:25,pool:{W:6,L:5,depth:1.1},friction:.3},anaconda:{name:`Anaconda`,H:11,kind:`tube`,R:.6,fun:.9,thrill:.7,turtle:[[`S`,3,.25],[`R`,120,3.2],[`L`,300,3.6],[`R`,180,3.2],[`S`,3.5,.3]],pool:{W:5,L:6,depth:1.2},friction:.25},freefall:{name:`Free Fall`,H:12,kind:`open`,R:.55,fun:1,thrill:1,profile:`drop`,length:26,pool:{W:5,L:6,depth:1.3},friction:.25,brake:1.6},typhoon:{name:`Typhoon Tower`,H:16,kind:`tube`,R:.62,fun:1.15,thrill:.9,turtle:[[`S`,4.5,.25],[`L`,450,4],[`R`,90,3],[`S`,3,.6],[`R`,360,3.4],[`S`,4,.35]],pool:{W:6,L:6,depth:1.3},friction:.22}};function hh(e){let t=[],n=0,r=1.5,i=0,a=.2;t.push({x:n,z:r,w:.1});for(let o of e.turtle){let[e,s,c,l]=o;if(e===`S`){let e=Math.max(1,Math.round(s/a)),o=c??1;for(let a=0;a<e;a++)n+=s/e*Math.sin(i),r+=s/e*Math.cos(i),t.push({x:n,z:r,w:o})}else{let o=Ht.degToRad(s),u=o*c,d=Math.max(2,Math.round(u/a)),f=e===`L`?1:-1,p=l??1;for(let e=0;e<d;e++){let e=o/d*f,a=i+e/2,s=u/d;n+=Math.sin(a)*s,r+=Math.cos(a)*s,i+=e,t.push({x:n,z:r,w:p})}}}let o=0;for(let e=1;e<t.length;e++)o+=Math.hypot(t[e].x-t[e-1].x,t[e].z-t[e-1].z)*t[e].w;let s=e.H+.05,c=(s-(Xf+.38))/o,l=s,u=[new z(t[0].x,s,t[0].z)];for(let e=1;e<t.length;e++)l-=Math.hypot(t[e].x-t[e-1].x,t[e].z-t[e-1].z)*t[e].w*c,u.push(new z(t[e].x,l,t[e].z));return gh(u,6),[u]}function gh(e,t){let n=e.map(e=>e.y);for(let r=1;r<e.length-1;r++){let i=0,a=0;for(let o=-t;o<=t;o++){let t=Math.min(e.length-1,Math.max(0,r+o));i+=n[t],a++}e[r].y=i/a}}function _h(e){let t=e.twin?[-.72,.72]:[0],n=e.length,r=e.H,i=[];for(let a of t){let t=[],o=Math.round(n/.2);for(let i=0;i<=o;i++){let s=i/o,c=1.5+s*n,l;if(e.profile===`racer`)l=r+.05-(r+.05-(Xf+.38))*s**1.05+Math.sin(s*Math.PI*3)*.55*(1-s)*Math.min(1,s*6);else{let e=Xf+.38,t=c-1.5;if(t<1)l=r+.05-t*.05;else if(t<8){let e=(t-1)/7;l=.75+(r-.75)*.5*(1+Math.cos(Math.PI*e))}else{let r=(t-8)/(n-8);l=.75+(e-.75)*r}}t.push(new z(a,l,c))}e.profile===`drop`?gh(t,4):gh(t,2),i.push(t)}return i}function vh(e,t=.1){let n=new $a(e,!1,`centripetal`,.5),r=n.getLength(),i=Math.max(2,Math.ceil(r/t)),a=n.getSpacedPoints(i),o=[],s=[],c=[],l=[];for(let e=0;e<=i;e++){let t=a[Math.max(0,e-1)],n=a[Math.min(i,e+1)];o.push(new z().subVectors(n,t).normalize())}let u=ph.clone();for(let e=0;e<=i;e++){let t=o[e],n;n=Math.abs(t.dot(ph))<.985?ph.clone().addScaledVector(t,-t.dot(ph)).normalize():u.clone().addScaledVector(t,-t.dot(u)).normalize(),u=n,s.push(n),c.push(new z().crossVectors(t,n).normalize())}for(let e=0;e<=i;e++){let t=o[Math.max(0,e-2)],n=o[Math.min(i,e+2)],a=(Math.min(i,e+2)-Math.max(0,e-2))*(r/i),s=new z().subVectors(n,t).divideScalar(a||1);l.push(s.dot(c[e]))}return{P:a,T:o,U:s,S:c,K:l,L:r,ds:r/i,n:i}}function yh(e,t){let n=1/30,r=t.friction??.3,i=0,a=1.4,o=0,s=[],{P:c,ds:l,n:u}=e,d=0;for(;i<e.L&&d++<2e4;){let d=Math.min(u-1,Math.floor(i/l)),f=(c[d+1].y-c[d].y)/l,p=-9.81*f/Math.sqrt(1+f*f)-r-.008*a*a;t.brake&&i>e.L-10&&(p-=t.brake),a=Math.max(1.2,a+p*n),a=Math.min(a,17);let m=e.K[d],h=Math.max(-1.25,Math.min(1.25,Math.atan2(a*a*m,9.81)));o+=(h-o)*.2,s.push({s:i,v:a,bank:o}),i+=a*n}return s.push({s:e.L,v:a,bank:0}),{frames:s,dt:n,duration:s.length*n,maxSpeed:Math.max(...s.map(e=>e.v))}}var bh=new z;new z;function xh(e,t,n){let r=Math.max(0,Math.min(e.n-1e-4,t/e.ds)),i=Math.floor(r),a=r-i;return n.pos.lerpVectors(e.P[i],e.P[i+1],a),n.tan.lerpVectors(e.T[i],e.T[i+1],a).normalize(),n.up.lerpVectors(e.U[i],e.U[i+1],a).normalize(),n.side.lerpVectors(e.S[i],e.S[i+1],a).normalize(),n}function Sh(e,t,n,r,i=.25,a=!1){let o=[],s=[],c=[],l=t.length,u=Math.max(2,Math.ceil((r-n)/i)+1),d=0;for(let i=0;i<u;i++){let a=Math.min(r,n+i*(r-n)/(u-1)),c=Math.max(0,Math.min(e.n-1e-4,a/e.ds)),f=Math.floor(c),p=c-f;bh.lerpVectors(e.P[f],e.P[f+1],p);let m=new z().lerpVectors(e.U[f],e.U[f+1],p).normalize(),h=new z().lerpVectors(e.S[f],e.S[f+1],p).normalize();for(let e=0;e<l;e++){let[n,r,i]=t[e];o.push(bh.x+h.x*n+m.x*r,bh.y+h.y*n+m.y*r,bh.z+h.z*n+m.z*r),s.push(i??e/(l-1),a/2)}d++}let f=a?l:l-1;for(let e=0;e<d-1;e++)for(let t=0;t<f;t++){let n=e*l+t,r=e*l+(t+1)%l,i=n+l,a=r+l;c.push(n,r,i,r,a,i)}let p=new Ur;return p.setAttribute(`position`,new H(o,3)),p.setAttribute(`uv`,new H(s,2)),p.setIndex(c),p.computeVertexNormals(),p}function Ch(e,t,n,r,i){let a=[];for(let o=0;o<=r;o++){let s=t+(n-t)*o/r;a.push([Math.sin(s)*e,-Math.cos(s)*e+i,o/r])}return a}function wh(e,t,n,r,i){let a=n.R,o=t.L,s=Ht.degToRad(102),c=.05,l=(n,o)=>{e.add(Sh(t,Ch(a,-s,s,16,a),n,o),r),e.add(Sh(t,Ch(a+c,s,-s,16,a),n,o),r);for(let i of[-1,1]){let l=s*i,u=[Math.sin(l)*a,-Math.cos(l)*a+a],d=[Math.sin(l)*(a+c+.03),-Math.cos(l)*(a+c+.03)+a+.02];e.add(Sh(t,i>0?[u,d]:[d,u],n,o),r)}e.add(Sh(t,Ch(a-.012,-.55,.55,6,a),n,o),i)};if(n.kind===`tube`){let n=1.2,s=o-2;l(0,1.25),e.add(Sh(t,Ch(a,-Math.PI,Math.PI,28,a),n,s,.25),r),e.add(Sh(t,Ch(a+c,Math.PI,-Math.PI,28,a),n,s,.25),r),e.add(Sh(t,Ch(a-.012,-.55,.55,6,a),n,s),i),l(s-.05,o);for(let n=2.7;n<s;n+=3)e.add(Sh(t,Ch(a+c+.035,Math.PI,-Math.PI,28,a),n,n+.12,.12),r)}else{l(0,o);for(let n=2;n<o-.5;n+=3)e.add(Sh(t,Ch(a+c+.03,s+.05,-s-.05,16,a),n,n+.1,.1),r)}}function Th(e,t,n,r){let i=[],a=t<3.5?1:Math.max(3,Math.ceil(t/1.85)|1),o=t/a,s=[-2,-3.1],c=Z(12172480,.8),l=Z(16053492,.5);i.push(new z(-2.4,0,-2));for(let t=0;t<a;t++){let n=t%2,u=s[n],d=n===0?1:-1,f=t*o,p=(t+1)*o,m=Math.max(4,Math.round(o/.19));for(let t=0;t<m;t++){let n=(t+.5)/m,r=-1.5*d+3*n*d;e.box(3/m+.02,.06,.9,c,r,f+o*(t+1)/m-.03,u)}for(let t of[-.47,.47])e.beam(new z(-1.5*d,f,u+t),new z(1.5*d,p,u+t),.04,r,6);let h=n===0?.45:-.45;e.beam(new z(-1.5*d,f+1,u+h),new z(1.5*d,p+1,u+h),.025,l,6);for(let t=0;t<=3;t++){let n=t/3;e.box(.04,1,.04,l,-1.5*d+3*n*d,f+o*n+.5,u+h)}i.push(new z(-1.5*d,f,u),new z(1.5*d,p,u));let g=2*d;t<a-1&&(e.box(1,.1,2.1,c,g,p-.05,-2.55),e.box(.04,1,2.1,l,g+.48*d,p+.5,-2.55),e.beam(new z(g+.48*d,p+1,-1.5),new z(g+.48*d,p+1,-3.6),.025,l),i.push(new z(g,p,u),new z(g,p,s[1-n])))}e.box(1,.12,2.6,c,2,t-.06,-1.2),i.push(new z(2,t,-2),new z(2,t,-.6),new z(.6,t,-.2),new z(0,t,.9)),e.boxUV(3,.14,3,X.concrete,0,t-.07,0,0,1);let u=t+2.4;for(let[t,n]of[[-1.45,-1.45],[1.45,-1.45],[-1.45,1.45],[1.45,1.45]])e.cyl(.1,.12,u,r,t,u/2,n,10);for(let[n,i]of[[-2.45,-1.55],[2.45,-1.55],[-2.45,-3.55],[2.45,-3.55]])e.cyl(.08,.1,t,r,n,t/2,i,8);for(let n=0;n<t-1;n+=3){let i=Math.min(t-.2,n+3);e.beam(new z(-1.45,n,1.45),new z(1.45,i,1.45),.03,r,4),e.beam(new z(1.45,n,1.45),new z(-1.45,i,1.45),.03,r,4)}if(e.box(.05,1.05,3,l,-1.5,t+.5,0),e.box(.05,1.05,1.5,l,1.5,t+.5,.75),e.box(1,1.05,.05,l,-1,t+.5,1.5),e.box(1,1.05,.05,l,1,t+.5,1.5),e.box(3,1.05,.05,l,0,t+.5,-1.5),t>3.5){let t=new Va(2.6,1.3,4,1,!0);e.add(t,n,0,u+.6,0,0,Math.PI/4,0),e.add(new ms(.16,10,8),n,0,u+1.3,0)}return i}function Eh(e,t,n,r){let i=t.L;for(let a=1.5;a<i-.5;a+=2.8){let i=Math.min(t.n,Math.round(a/t.ds)),o=t.P[i];if(o.y<.7||r(o))continue;let s=o.y-.08;e.cyl(.075,.09,s,n,o.x,s/2,o.z,8),e.cyl(.25,.28,.12,Z(10132122,.9),o.x,.06,o.z,10);let c=t.S[i];e.beam(new z(o.x-c.x*.45,s-.02,o.z-c.z*.45),new z(o.x+c.x*.45,s-.02,o.z+c.z*.45),.05,n,6)}}var Dh={};function Oh(e){if(Dh[e])return Dh[e];let t=mh[e],n=(t.profile?_h(t):hh(t)).map(e=>vh(e,.1)),r=n.map(e=>e.P[e.n]),i=r.reduce((e,t)=>e+t.x,0)/r.length,a=Math.max(...r.map(e=>e.z)),o=t.pool.W,s=t.pool.L,c={x0:i-o/2,z0:a-.35,x1:i+o/2,z1:a-.35+s,depth:t.pool.depth},l=-2.6,u=2.6,d=-3.7,f=1.6;for(let e of n)for(let n of e.P)l=Math.min(l,n.x-t.R-.2),u=Math.max(u,n.x+t.R+.2),d=Math.min(d,n.z-t.R-.2),f=Math.max(f,n.z+t.R+.2);l=Math.min(l,c.x0-1),u=Math.max(u,c.x1+1),f=Math.max(f,c.z1+1),l=Math.floor(l),d=Math.floor(d),u=Math.ceil(u),f=Math.ceil(f);let p=u-l,m=f-d,h=-(l+p/2),g=-(d+m/2),_=new z(h,0,g);for(let e of n)for(let t of e.P)t.add(_);c.x0+=h,c.x1+=h,c.z0+=g,c.z1+=g;let v=_.clone(),y=new Uint8Array(p*m),b=(e,t,n)=>{let r=Math.floor(e+p/2),i=Math.floor(t+m/2);if(r<0||i<0||r>=p||i>=m)return;let a=i*p+r;y[a]=Math.max(y[a],n)};for(let e=-2.6;e<=2.6;e+=.5)for(let t=-3.7;t<=1.6;t+=.5)b(e+h,t+g,2);for(let e of n)for(let t=0;t<=e.n;t+=3){let n=e.P[t],r=n.y<2.3?2:1;for(let e=-.8;e<=.8;e+=.4)for(let t=-.8;t<=.8;t+=.4)b(n.x+e,n.z+t,r)}for(let e=c.x0-1+.5;e<c.x1+1;e+=1)for(let t=c.z0-1+.5;t<c.z1+1;t+=1){let n=e>c.x0&&e<c.x1&&t>c.z0&&t<c.z1,r=Math.floor(e+p/2),i=Math.floor(t+m/2);if(r<0||i<0||r>=p||i>=m)continue;let a=i*p+r;n?y[a]=3:y[a]!==2&&(y[a]=4)}let x={type:e,def:t,lanes:n,timelines:n.map(e=>yh(e,t)),pool:c,w:p,d:m,mask:y,off:v,entrance:new z(-2.6,0,-2).add(_),queueDir:new z(-1,0,0),exit:new z((c.x0+c.x1)/2,0,c.z1+.6),exitWater:new z((c.x0+c.x1)/2,Xf,c.z1-.8),climb:null};return Dh[e]=x,x}function kh(e,t){let n=Oh(e),r=n.def,i=new Qp,a=lp(t),o=r.twin?lp(t===16761370?2006015:16761370):a,s=jh();n.lanes.forEach((e,t)=>wh(i,e,r,t===0?a:o,s));let c=new Qp,l=Th(c,r.H,a,X.steel),u=c.build(),d=n.off,f=new B().makeTranslation(d.x,0,d.z);for(let e of u.parts)i.addMatrix(e.geometry.clone(),e.material,f);n.climb=l.map(e=>e.clone().add(d));let p=e=>e.x>d.x-2.7&&e.x<d.x+2.7&&e.z>d.z-3.8&&e.z<d.z+1.7;n.lanes.forEach(e=>Eh(i,e,X.steel,p));let m=Uf([r.name.toUpperCase()],{bg:`#ffffff`,fg:`#`+t.toString(16).padStart(6,`0`),w:512,h:128,border:`#`+t.toString(16).padStart(6,`0`)}),h=n.entrance.x-.4,g=n.entrance.z+1.2;i.cyl(.04,.04,2.2,X.steelDark,h,1.1,g,6),i.add(new us(1.4,.36),dp(m,.5),h,2.1,g+.03),i.box(1.46,.42,.04,Z(3355443,.5),h,2.1,g-0);for(let e=0;e<4;e++){let t=n.entrance.x-.6-e*1;i.cyl(.03,.03,.9,X.chrome,t,.45,n.entrance.z-.55,6),i.cyl(.03,.03,.9,X.chrome,t,.45,n.entrance.z+.55,6)}let _=i.build(),v=em(_),y=lh({W:n.pool.x1-n.pool.x0,L:n.pool.z1-n.pool.z0,dS:n.pool.depth,dD:n.pool.depth,deck:1,ladders:!1});return y.group.position.set((n.pool.x0+n.pool.x1)/2,0,(n.pool.z0+n.pool.z1)/2),v.add(y.group),{group:v,design:n,prefab:_,poolMeta:y.meta,water:y.water}}var Ah=null;function jh(){if(!Ah){let e=Y.waterN.clone();e.repeat.set(1,1),e.needsUpdate=!0,Ah=new U({color:12580095,transparent:!0,opacity:.45,roughness:.03,metalness:.1,normalMap:e,normalScale:new R(.6,.6),depthWrite:!1,envMapIntensity:1.6})}return Ah}function Mh(e){Ah&&(Ah.normalMap.offset.y-=e*1.6)}var Nh=class{constructor(){let e=29440;this.N=e,this.land=new Uint8Array(e),this.base=new Int32Array(e),this.prop=new Int32Array(e),this.floor=new Int32Array(e),this.deck=new Uint8Array(e),this.water=new Int32Array(e),this.block=new Uint8Array(e),this.bwalk=new Uint8Array(e),this.pblock=new Uint8Array(e),this.fixed=new Uint8Array(e),this.version=0,this.gScore=new Float32Array(e),this.parent=new Int32Array(e),this.stamp=new Uint32Array(e),this.closed=new Uint32Array(e),this.curStamp=1,this.heap=new Int32Array(e),this.heapF=new Float32Array(e),this.heapPos=new Int32Array(e)}idx(e,t){return t*160+e}cellOf(e,t){return[Math.floor(e- -80),Math.floor(t- -80)]}inBounds(e,t){return e>=0&&t>=0&&e<160&&t<184}idxAt(e,t){let n=Math.floor(e- -80),r=Math.floor(t- -80);return this.inBounds(n,r)?r*160+n:-1}centerOf(e,t){return[e+-80+.5,t+-80+.5]}setOwnedPlots(e){this.land.fill(0);for(let t of e){let[e,n]=t.split(`,`).map(Number),r=-64+e*32,i=-64+n*32;for(let e=i;e<i+32;e++)for(let t=r;t<r+32;t++){let n=this.idxAt(t+.5,e+.5);n>=0&&(this.land[n]=1)}}for(let e=64;e<99;e++)for(let t=-14;t<14;t++){let n=this.idxAt(t+.5,e+.5);n>=0&&!this.land[n]&&(this.land[n]=2)}for(let e=76;e<99;e++)for(let t=-48;t<48;t++){let n=this.idxAt(t+.5,e+.5);n>=0&&!this.land[n]&&(this.land[n]=2)}this.recomputeBlock()}recomputeBlock(){let e=this.N;for(let t=0;t<e;t++){let e=0;this.land[t]?(this.water[t]||this.fixed[t]||this.base[t]&&!this.bwalk[t]||this.prop[t]&&this.pblock[t])&&(e=1):e=1,this.block[t]=e}this.version++}isWalkable(e,t){let n=this.idxAt(e,t);return n>=0&&!this.block[n]}isGrass(e,t){let n=this.idxAt(e,t);return n<0||!this.base[n]&&!this.prop[n]&&!this.floor[n]&&!this.water[n]&&!this.deck[n]&&!this.fixed[n]&&this.land[n]!==2}nearestWalkable(e,t,n=6){if(this.inBounds(e,t)&&!this.block[this.idx(e,t)])return[e,t];for(let r=1;r<=n;r++){let n=null,i=1e9;for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++){if(Math.max(Math.abs(o),Math.abs(a))!==r)continue;let s=e+o,c=t+a;if(!this.inBounds(s,c)||this.block[this.idx(s,c)])continue;let l=o*o+a*a;l<i&&(i=l,n=[s,c])}if(n)return n}return null}cellCost(e){return this.floor[e]?.7:this.deck[e]?.85:this.land[e]===2?.8:1.15}_push(e,t){let n=this.heapN++;this.heap[n]=e,this.heapF[n]=t,this.heapPos[e]=n,this._up(n)}_up(e){let t=this.heap,n=this.heapF,r=this.heapPos;for(;e>0;){let i=e-1>>1;if(n[i]<=n[e])break;let a=t[i],o=n[i];t[i]=t[e],n[i]=n[e],r[t[i]]=i,t[e]=a,n[e]=o,r[a]=e,e=i}}_pop(){let e=this.heap,t=this.heapF,n=this.heapPos,r=e[0],i=--this.heapN;if(i>0){e[0]=e[i],t[0]=t[i],n[e[0]]=0;let r=0;for(;;){let a=r*2+1,o=a+1,s=r;if(a<i&&t[a]<t[s]&&(s=a),o<i&&t[o]<t[s]&&(s=o),s===r)break;let c=e[s],l=t[s];e[s]=e[r],t[s]=t[r],n[e[s]]=s,e[r]=c,t[r]=l,n[c]=r,r=s}}return r}findPath(e,t,n,r,i=3e4){let[a,o]=this.cellOf(e,t),[s,c]=this.cellOf(n,r),l=this.nearestWalkable(a,o,8),u=this.nearestWalkable(s,c,6);if(!l||!u)return null;[a,o]=l,[s,c]=u;let d=this.idx(a,o),f=this.idx(s,c);if(d===f)return[[n,r]];let p=++this.curStamp,m=this.gScore,h=this.parent,g=this.stamp,_=this.closed,v=this.block;this.heapN=0,m[d]=0,h[d]=-1,g[d]=p;let y=(e,t)=>{let n=Math.abs(e-s),r=Math.abs(t-c);return(n+r+(1.4142-2)*Math.min(n,r))*.8};this._push(d,y(a,o)*1.2);let b=!1,x=0,S=[1,-1,0,0,1,1,-1,-1],C=[0,0,1,-1,1,-1,1,-1];for(;this.heapN>0;){let e=this._pop();if(e===f){b=!0;break}if(_[e]===p)continue;if(_[e]=p,++x>i)break;let t=e%160,n=e/160|0;for(let r=0;r<8;r++){let i=t+S[r],a=n+C[r];if(i<0||a<0||i>=160||a>=184)continue;let o=a*160+i;if(v[o]||_[o]===p||r>=4&&(v[n*160+i]||v[a*160+t]))continue;let s=(r>=4?1.4142:1)*this.cellCost(o),c=m[e]+s;(g[o]!==p||c<m[o])&&(g[o]=p,m[o]=c,h[o]=e,this._push(o,c+y(i,a)*1.2))}}if(!b)return null;let w=[];for(let e=f;e!==-1;e=h[e])w.push(e);w.reverse();let T=[],E=0,D=e=>this.centerOf(e%160,e/160|0);for(T.push(D(w[0]));E<w.length-1;){let e=Math.min(w.length-1,E+30),t=D(w[E]);for(;e>E+1&&!this.lineClear(t[0],t[1],...D(w[e]));)e--;T.push(D(w[e])),E=e}return this.isWalkable(n,r)&&(T[T.length-1]=[n,r]),T.shift(),T.length||T.push([n,r]),T}lineClear(e,t,n,r){let i=n-e,a=r-t,o=Math.ceil(Math.hypot(i,a)/.35);for(let n=1;n<o;n++){let r=n/o,s=e+i*r,c=t+a*r;if(!this.isWalkable(s,c)||!this.isWalkable(s+.3,c)||!this.isWalkable(s-.3,c)||!this.isWalkable(s,c+.3)||!this.isWalkable(s,c-.3))return!1}return!0}randomParkPoint(e=Math.random){for(let t=0;t<60;t++){let t=-64+e()*128,n=-64+e()*128,r=this.idxAt(t,n);if(r>=0&&this.land[r]===1&&!this.block[r])return[t,n]}return null}},Ph=[{key:`pools`,name:`Pools`,icon:`🏊`},{key:`slides`,name:`Slides`,icon:`🌀`},{key:`food`,name:`Food & Shops`,icon:`🍔`},{key:`facility`,name:`Facilities`,icon:`🚻`},{key:`decor`,name:`Decoration`,icon:`🌴`},{key:`paths`,name:`Paths`,icon:`🧱`},{key:`tools`,name:`Manage`,icon:`🔧`}],Fh={pool_small:{name:`Lagoon Pool`,cat:`pools`,kind:`pool`,cost:2400,level:1,desc:`Classic 8×5 m pool with a deep end. Guests love a swim.`,pool:{W:8,L:5,dS:1,dD:1.5,deck:1.5,band:!0},fun:.5,capacity:10,upkeep:40,appeal:4},pool_kids:{name:`Splash Pad Pool`,cat:`pools`,kind:`pool`,cost:1900,level:2,desc:`Shallow pool with a mushroom fountain. Kids go wild for it.`,pool:{W:6,L:6,dS:.45,dD:.45,deck:1.5,kids:!0,ladders:!1},fun:.6,capacity:10,upkeep:30,appeal:5,kidsOnly:!0},pool_leisure:{name:`Leisure Pool`,cat:`pools`,kind:`pool`,cost:4300,level:3,desc:`Roomy 12×9 m free-form fun pool for lots of swimmers.`,pool:{W:12,L:9,dS:.9,dD:1.8,deck:1.5,band:!0},fun:.6,capacity:24,upkeep:60,appeal:6},jacuzzi:{name:`Hot Tub`,cat:`pools`,kind:`pool`,cost:2300,level:3,desc:`Bubbling, glowing hot tub. Restores energy fast.`,pool:{jacuzzi:!0,R:1.6,depth:.9,deckHalf:2.5},fun:.45,rest:!0,capacity:6,upkeep:35,appeal:5},pool_lap:{name:`Olympic Lap Pool`,cat:`pools`,kind:`pool`,cost:6800,level:5,desc:`10×18 m lane pool with a 2 m deep end.`,pool:{W:10,L:18,dS:1.2,dD:2,deck:1.5,lanes:5},fun:.55,capacity:30,upkeep:80,appeal:6},wavepool:{name:`Tsunami Wave Pool`,cat:`pools`,kind:`pool`,cost:18e3,level:7,desc:`Huge beach-entry pool with a wave machine. The crowd favourite!`,pool:{W:16,L:22,dS:0,dD:2.2,deck:2,beach:!0,wave:!0,ladders:!1},fun:1,capacity:50,upkeep:220,appeal:14},slide_kiddie:{name:`Wiggle Kiddie Slide`,cat:`slides`,kind:`slide`,slide:`kiddie`,cost:1600,level:1,desc:`Gentle little slide for the youngest guests.`,upkeep:25,appeal:4,kidsOnly:!0},slide_twister:{name:`Twister`,cat:`slides`,kind:`slide`,slide:`twister`,cost:4800,level:2,desc:`8 m tower, double spiral open flume.`,upkeep:60,appeal:8},slide_racer:{name:`Rapid Racer`,cat:`slides`,kind:`slide`,slide:`racer`,cost:7200,level:4,desc:`Twin-lane bumpy racing slide. Race your friends!`,upkeep:80,appeal:9},slide_anaconda:{name:`Anaconda`,cat:`slides`,kind:`slide`,slide:`anaconda`,cost:9800,level:5,desc:`Enclosed tube that coils through darkness. 11 m tall.`,upkeep:100,appeal:10},slide_freefall:{name:`Free Fall`,cat:`slides`,kind:`slide`,slide:`freefall`,cost:12500,level:6,desc:`12 m near-vertical speed drop. Not for the faint-hearted!`,upkeep:120,appeal:12},slide_typhoon:{name:`Typhoon Tower`,cat:`slides`,kind:`slide`,slide:`typhoon`,cost:21e3,level:8,desc:`16 m giant tube with multiple helices. The park icon.`,upkeep:180,appeal:16},drinks:{name:`Cool Drinks Hut`,cat:`food`,kind:`shop`,prefab:`drinks`,size:[3,3],cost:900,level:1,desc:`Sells ice-cold drinks. Essential on hot days!`,shop:{type:`drink`,price:3,needs:{thirst:-.7}},upkeep:20,appeal:2,service:[0,2]},icecream:{name:`Ice Cream Cart`,cat:`food`,kind:`shop`,prefab:`icecream`,size:[2,2],cost:750,level:1,desc:`Sweet treats that make guests happy.`,shop:{type:`snack`,price:4,needs:{hunger:-.3,thirst:-.15},happy:6},upkeep:15,appeal:3,service:[0,1.5]},burger:{name:`Burger Bay`,cat:`food`,kind:`shop`,prefab:`burger`,size:[4,3],cost:2200,level:2,desc:`Burgers, fries & hot dogs for hungry swimmers.`,shop:{type:`food`,price:8,needs:{hunger:-.75}},upkeep:40,appeal:3,service:[0,2.2]},pizza:{name:`Pizza Pier`,cat:`food`,kind:`shop`,prefab:`pizza`,size:[3,3],cost:2600,level:4,desc:`Wood-fired pizza slices. Guests pay a bit more.`,shop:{type:`food`,price:7,needs:{hunger:-.7},happy:3},upkeep:45,appeal:3,service:[0,2]},souvenir:{name:`Surf Shop`,cat:`food`,kind:`shop`,prefab:`souvenir`,size:[4,4],cost:3500,level:5,desc:`Inflatables, towels & souvenirs. Big margins from happy guests.`,shop:{type:`souvenir`,price:15,happy:8},upkeep:50,appeal:4,service:[0,2.6]},toilets:{name:`Restrooms`,cat:`facility`,kind:`building`,prefab:`toilets`,size:[4,3],cost:1200,level:1,desc:`Every park needs them. Keep them clean!`,facility:`toilet`,upkeep:20,service:[0,2],capacity:3},showers:{name:`Outdoor Showers`,cat:`facility`,kind:`building`,prefab:`showers`,size:[3,2],cost:600,level:1,desc:`Rinse off before a swim. Keeps pools cleaner.`,facility:`shower`,upkeep:10,service:[0,1.4],capacity:3},lockers:{name:`Changing & Lockers`,cat:`facility`,kind:`building`,prefab:`lockers`,size:[6,4],cost:2e3,level:3,desc:`Guests rent lockers on arrival (+$3 each) and feel safer.`,facility:`lockers`,upkeep:30,service:[0,2.2],capacity:4},firstaid:{name:`First Aid Station`,cat:`facility`,kind:`building`,prefab:`firstaid`,size:[3,3],cost:2500,level:4,desc:`Improves park safety rating.`,facility:`firstaid`,upkeep:40,service:[0,2],appeal:1},lifeguard:{name:`Lifeguard Tower`,cat:`facility`,kind:`prop`,prefab:`lifeguard`,size:[2,2],cost:800,level:2,desc:`Hire lifeguards to watch nearby pools and rescue swimmers.`,onDeck:!0,blocks:!0,facility:`lifeguard`,upkeep:5,appeal:1},sunbed:{name:`Sun Lounger`,cat:`facility`,kind:`prop`,prefab:`sunbed`,size:[1,2],cost:180,level:1,desc:`Guests relax here to restore energy.`,onDeck:!0,blocks:!0,colorable:!0,facility:`sunbed`,upkeep:1,appeal:1},bench:{name:`Park Bench`,cat:`facility`,kind:`prop`,prefab:`bench`,size:[2,1],cost:150,level:1,desc:`A place to sit and eat.`,onDeck:!0,blocks:!0,facility:`bench`,upkeep:1,appeal:.5},picnic:{name:`Picnic Table`,cat:`facility`,kind:`prop`,prefab:`picnic`,size:[2,2],cost:380,level:2,desc:`Shaded table for 4. Guests love eating here.`,onDeck:!0,blocks:!0,colorable:!0,facility:`picnic`,upkeep:2,appeal:1.5},bin:{name:`Trash Bin`,cat:`facility`,kind:`prop`,prefab:`bin`,size:[1,1],cost:60,level:1,desc:`Guests near a bin drop far less litter.`,onDeck:!0,blocks:!0,facility:`bin`,upkeep:1},lamp:{name:`Lamp Post`,cat:`facility`,kind:`prop`,prefab:`lamp`,size:[1,1],cost:200,level:1,desc:`Lights up the park after sunset.`,onDeck:!0,blocks:!0,light:!0,upkeep:2,appeal:.5},palm:{name:`Palm Tree`,cat:`decor`,kind:`prop`,prefab:`palm`,size:[1,1],cost:300,level:1,desc:`Tropical vibes. Boosts nearby scenery.`,onDeck:!0,blocks:!0,appeal:3.5,randomYaw:!0},umbrella:{name:`Beach Umbrella`,cat:`decor`,kind:`prop`,prefab:`umbrella`,size:[1,1],cost:220,level:1,desc:`Shade for sunbathers. Press C to change colour.`,onDeck:!0,blocks:!1,colorable:!0,appeal:1.5},planter:{name:`Flower Pot`,cat:`decor`,kind:`prop`,prefab:`planter`,size:[1,1],cost:120,level:1,desc:`A pretty pot of flowers.`,onDeck:!0,blocks:!0,appeal:2},hedge:{name:`Hedge`,cat:`decor`,kind:`prop`,prefab:`hedge`,size:[1,1],cost:60,level:1,desc:`Neat hedge block for borders.`,onDeck:!1,blocks:!0,appeal:1},flowerBed:{name:`Flower Bed`,cat:`decor`,kind:`prop`,prefab:`flowerBed`,size:[2,2],cost:280,level:2,desc:`Colourful raised bed of flowers.`,onDeck:!0,blocks:!0,appeal:4.5},rock:{name:`Boulder`,cat:`decor`,kind:`prop`,prefab:`rock`,size:[1,1],cost:140,level:2,desc:`Natural stone accent.`,onDeck:!0,blocks:!0,appeal:1.5,randomYaw:!0},tiki:{name:`Tiki Torch`,cat:`decor`,kind:`prop`,prefab:`tiki`,size:[1,1],cost:180,level:3,desc:`Flickering torch, gorgeous at night.`,onDeck:!0,blocks:!0,appeal:2,light:!0,lightColor:16751162},flamingo:{name:`Flamingo Statue`,cat:`decor`,kind:`prop`,prefab:`flamingo`,size:[1,1],cost:260,level:3,desc:`Every waterpark needs a flamingo.`,onDeck:!0,blocks:!0,appeal:3,randomYaw:!0},fountain:{name:`Plaza Fountain`,cat:`decor`,kind:`building`,prefab:`fountain`,size:[3,3],cost:3200,level:4,desc:`Grand fountain. Huge scenery boost.`,appeal:14,upkeep:20,fountain:!0},fireworks:{name:`Fireworks Launcher`,cat:`decor`,kind:`building`,prefab:`fireworks`,size:[2,2],cost:6e3,level:5,desc:`Nightly fireworks show at closing. Guests adore it (+happiness, +rating).`,appeal:2,upkeep:60,fireworks:!0},pathStone:{name:`Stone Path`,cat:`paths`,kind:`path`,prefab:`pathStone`,size:[1,1],cost:15,level:1,desc:`Guests walk faster on paths. Hold mouse to paint.`,appeal:.2},pathWood:{name:`Boardwalk`,cat:`paths`,kind:`path`,prefab:`pathWood`,size:[1,1],cost:20,level:2,desc:`Warm wooden decking.`,appeal:.3},pathRed:{name:`Terracotta Path`,cat:`paths`,kind:`path`,prefab:`pathRed`,size:[1,1],cost:18,level:3,desc:`Sun-baked terracotta tiles.`,appeal:.3},tool_move:{name:`Move`,cat:`tools`,kind:`tool`,tool:`move`,cost:0,level:1,desc:`Pick up an object and place it somewhere else for free.`},tool_sell:{name:`Demolish`,cat:`tools`,kind:`tool`,tool:`sell`,cost:0,level:1,desc:`Remove an object and get 50% of its price back.`}};for(let[e,t]of Object.entries(Fh))t.key=e;var Ih={janitor:{name:`Janitor`,icon:`🧹`,wage:90,level:1,desc:`Picks up litter and cleans restrooms.`,color:3055194},lifeguard:{name:`Lifeguard`,icon:`🛟`,wage:130,level:2,desc:`Watches pools from a Lifeguard Tower and rescues swimmers.`,color:14170682},pooltech:{name:`Pool Technician`,icon:`🧪`,wage:110,level:2,desc:`Skims and treats pool water.`,color:1998808},mechanic:{name:`Mechanic`,icon:`🔧`,wage:150,level:3,desc:`Inspects and repairs slides.`,color:16747034}},Lh=[0,0,120,330,650,1100,1700,2500,3500,4800,6400,8300,10600,13300,16500,20200,24500,29500,35200,41800,49400];function Rh(e){return e<Lh.length?Lh[e]:Math.round(Lh[Lh.length-1]+(e-Lh.length+1)*9e3)}var zh=[0,6e3,9e3,13e3,18e3,24e3,32e3,42e3,54e3,68e3,85e3,105e3,13e4];function Bh(){return{tickets:0,food:0,shops:0,tips:0,lockers:0,bonus:0,wages:0,upkeep:0,build:0,land:0,guestsIn:0,guestsOut:0,happySum:0,happyN:0,rides:0,swims:0,sales:0,peakGuests:0,trashPicked:0}}var Vh=class{constructor(e){this.scene=e,this.root=new Vn,e.add(this.root),this.grid=new Nh,this.objects=new Map,this.nextId=1,this.owned=[...$f],this.cash=Qf,this.ticketPrice=15,this.foodMult=1,this.today=Bh(),this.history=[],this.records={bestDay:0,maxGuests:0,totalGuests:0,totalEarned:0},this.rating=2.5,this.ratingTarget=2.5,this.ratingParts={happy:.5,clean:.8,attractions:.3,scenery:.2,safety:.3},this.staff={janitor:1,lifeguard:0,pooltech:0,mechanic:0},this.instPools=new Map,this.lists={pools:[],slides:[],shops:[],fac:{},decor:[],lights:[],fireworks:[],fountains:[],all:[]},this.holes=[],this.appealGrid=new Float32Array(400),this.ratingTimer=0,this.saveTimer=0,this.parkName=`Splash Haven`,this.flags={},this.marketing=0,this._reserveEntrance(),this.grid.setOwnedPlots(this.owned)}_reserveEntrance(){let e=this.grid,t=(t,n,r,i)=>{for(let a=n;a<i;a++)for(let n=t;n<r;n++){let t=e.idxAt(n+.5,a+.5);t>=0&&(e.fixed[t]=1)}};t(-9,62,-6,66),t(6,62,9,66),t(-6,63,-3,66),t(3,63,6,66),t(-17,64,-9,66),t(9,64,17,66),this.reserved=(e,t)=>e>=-4&&e<4&&t>=56&&t<64.5;for(let t=64;t<73;t++)for(let n=-14;n<14;n++){let r=e.idxAt(n+.5,t+.5);r>=0&&!e.fixed[r]&&(e.floor[r]=-1)}}dimsFor(e){if(e.kind===`pool`){let t=e.pool;return t.jacuzzi?[t.deckHalf*2,t.deckHalf*2]:[t.W+t.deck*2,t.L+t.deck*2]}if(e.kind===`slide`){let t=Oh(e.slide);return[t.w,t.d]}return e.size||[1,1]}rotDims(e,t){let[n,r]=this.dimsFor(e);return t%2?[r,n]:[n,r]}cellType(e,t,n,r,i){switch(e.kind){case`pool`:{let r=e.pool;if(r.jacuzzi)return Math.hypot(t,n)<r.R+.35?`water`:`deck`;let i=r.W/2,a=r.L/2;return Math.abs(t)<=i+.01&&Math.abs(n)<=a+.01?`water`:r.wave&&n<-a-.4?`B`:`deck`}case`slide`:{let a=Oh(e.slide),o=Math.floor(t+r/2),s=Math.floor(n+i/2),c=a.mask[s*r+o];return c===0?null:c===1?`W`:c===2?`B`:c===3?`water`:`deck`}case`path`:return`floor`;case`prop`:return e.blocks?`prop`:`propw`;default:return`B`}}forFootprint(e,t,n,r,i){let[a,o]=this.dimsFor(e),[s,c]=r%2?[o,a]:[a,o],l=t+s/2,u=n+c/2;for(let t=0;t<o;t++)for(let n=0;n<a;n++){let s=n-a/2+.5,c=t-o/2+.5,d=this.cellType(e,s,c,a,o);if(!d)continue;let[f,p]=_f(s,c,r);i(Math.floor(l+f),Math.floor(u+p),d)}}canPlace(e,t,n,r,i=0){let a=this.grid,o=null;return e.kind===`pool`&&!e.pool.jacuzzi&&this.holes.length>=38?{ok:!1,reason:`Too many pools`}:(this.forFootprint(e,t,n,r,(t,n,r)=>{if(o)return;let s=a.idxAt(t+.5,n+.5);if(s<0||a.land[s]!==1){o=`Outside your land`;return}if(a.fixed[s]){o=`Blocked`;return}let c=a.base[s],l=a.prop[s],u=!c||c===i,d=!l||l===i;if(r===`floor`)u?a.floor[s]>0&&a.floor[s]!==i&&(o=`Already paved`):o=`Blocked`;else if(this.reserved(t+.5,n+.5))o=`Keep the entrance clear`;else if(r===`prop`||r===`propw`){if(!d){o=`Space occupied`;return}!u&&!(a.deck[s]&&e.onDeck)&&(o=`Space occupied`)}else u&&d||(o=`Space occupied`)}),{ok:!o,reason:o})}place(e,t,n,r,i={}){let a=Fh[e];if(!a)return null;let o=i.id||this.nextId++;i.id&&i.id>=this.nextId&&(this.nextId=i.id+1);let[s,c]=this.rotDims(a,r),l={id:o,key:e,def:a,x0:t,z0:n,rot:r,W:s,D:c,cx:t+s/2,cz:n+c/2,yaw:r*Math.PI/2,color:i.color??(a.colorable||a.kind===`slide`?ep[a.kind===`slide`?`slide`:`fabric`][Math.floor(Math.random()*8)]:null),seed:i.seed??Math.random(),condition:100,broken:!1,dirt:0,quality:i.quality??100,queue:[],users:new Set,revenue:0,sales:0,visits:0,group:null,inst:null,cells:[]};return l.toWorld=(e,t)=>{let[n,r]=_f(e,t,l.rot);return[l.cx+n,l.cz+r]},l.toLocal=(e,t)=>_f(e-l.cx,t-l.cz,(4-l.rot)%4),this._buildVisual(l),this._occupy(l),this._registerLists(l,!0),this.objects.set(o,l),i.free||this.spend(a.cost,`build`),i.silent||K.emit(`placed`,l),this._dirtyNav(),l}_buildVisual(e){let t=e.def,n=new z(e.cx,0,e.cz);if(t.kind===`pool`){let r=t.pool,i;if(r.jacuzzi)i=uh(r);else{let e={...r};r.kids&&(e.extras=e=>dh(e)),r.wave&&(e.extras=e=>fh(e,r.W,r.L)),r.band&&(e.band=X.poolTileDark),i=lh(e)}i.group.position.copy(n),i.group.rotation.y=e.yaw,this.root.add(i.group),e.group=i.group;let a=i.meta;e.pool={shape:a.shape,hw:a.hw,hl:a.hl,r:a.r,floorFn:a.floorFn,beach:a.beach,water:i.water,mat:i.water.material,swimmers:new Set,wave:!!r.wave,kids:!!r.kids,jacuzzi:!!r.jacuzzi,capacity:t.capacity||10,depthMax:a.depthMax},e.waveAt=r.wave?(t,n)=>{let[r,i]=e.toLocal(t,n);return $m(r,i,G.time.real)}:null,e.poolLocal=e.toLocal,e.poolToWorld=e.toWorld,th(e.pool.mat,1-e.quality/100)}else if(t.kind===`slide`){let r=kh(t.slide,e.color);r.group.position.copy(n),r.group.rotation.y=e.yaw,this.root.add(r.group),e.group=r.group;let i=r.design,a=new B().makeRotationY(e.yaw).setPosition(n);e.slide={design:i,def:mh[t.slide],matrix:a,riders:[],nextDispatch:[0,0],lane:0,entrance:i.entrance.clone().applyMatrix4(a),exit:i.exit.clone().applyMatrix4(a),exitWater:i.exitWater.clone().applyMatrix4(a),queueDir:i.queueDir.clone().applyAxisAngle(new z(0,1,0),e.yaw),climb:i.climb.map(e=>e.clone().applyMatrix4(a)),top:i.climb[i.climb.length-1].clone().applyMatrix4(a)};let o=i.pool.x1-i.pool.x0,s=i.pool.z1-i.pool.z0;e.landing={lcx:(i.pool.x0+i.pool.x1)/2,lcz:(i.pool.z0+i.pool.z1)/2,hw:o/2,hl:s/2,depth:i.pool.depth,water:r.water,mat:r.water.material}}else if(t.kind===`prop`||t.kind===`path`){let r=Hm(t.prefab),i=this.instPools.get(t.prefab);i||(i=new tm(r,this.root,32),this.instPools.set(t.prefab,i));let a=e.yaw+(t.randomYaw?e.seed*Math.PI*2:0),o=t.prefab===`palm`?.85+e.seed*.45:t.prefab===`rock`?.8+e.seed*.6:1,s=new B().compose(n,new Ut().setFromAxisAngle(new z(0,1,0),a),new z(o,o,o));e.inst=i.add(s,e.color==null?new V(16777215):new V(e.color)),e.instPool=i,e.matrix=s}else{let r=em(Hm(t.prefab));r.position.copy(n),r.rotation.y=e.yaw,this.root.add(r),e.group=r}if(e.bbox=new dr,e.group)e.group.updateMatrixWorld(!0),e.bbox.setFromObject(e.group);else{let n=Hm(t.prefab);e.bbox.copy(n.bbox).applyMatrix4(e.matrix),t.kind===`path`&&(e.bbox.min.y=0,e.bbox.max.y=.12)}if(t.light){let[n,r]=t.prefab===`lamp`?e.toWorld(0,.75):e.toWorld(0,0);e.light={x:n,y:t.prefab===`lamp`?3.9:2.3,z:r,color:t.lightColor||16766880,intensity:t.prefab===`lamp`?70:22,range:t.prefab===`lamp`?24:12}}this._setupPoints(e)}_setupPoints(e){let t=e.def,n=(t,n,r=0)=>{let[i,a]=e.toWorld(t,n);return new z(i,r,a)},[r,i]=this.dimsFor(t);e.points={},(t.kind===`shop`||t.facility===`lockers`||t.facility===`firstaid`)&&(e.points.service=n(0,i/2+.6),e.points.queueDir=n(0,i/2+1.6).sub(e.points.service).normalize(),e.points.clerk=n(0,i/2-1)),t.facility===`toilet`&&(e.points.doors=[n(-.9,i/2+.5),n(.9,i/2+.5)],e.points.service=n(0,i/2+1),e.points.queueDir=n(0,i/2+2).sub(e.points.service).normalize()),t.facility===`shower`&&(e.points.spots=[-.9,0,.9].map(t=>({pos:n(t,-.15),yaw:e.yaw+Math.PI,taken:null,head:n(t,-.18,2.24)})),e.points.service=n(0,i/2+.7),e.points.queueDir=n(0,i/2+2).sub(e.points.service).normalize()),t.facility===`sunbed`&&(e.points.seats=[{pos:n(0,0),approach:n(.9,0),yaw:e.yaw+Math.PI,taken:null,pose:`lie`}]),t.facility===`bench`&&(e.points.seats=[-.45,.45].map(t=>({pos:n(t,.05),approach:n(t,.8),yaw:e.yaw,taken:null,pose:`sit`}))),t.facility===`picnic`&&(e.points.seats=[[-.5,.65,Math.PI],[.5,.65,Math.PI],[-.5,-.65,0],[.5,-.65,0]].map(([t,r,i])=>({pos:n(t,r),approach:n(t,r*1.9),yaw:e.yaw+i,taken:null,pose:`sit`}))),t.facility===`lifeguard`&&(e.points.seat=n(0,-.2,2.6),e.points.ladder=n(0,1.4),e.points.guard=null),t.facility===`bin`&&(e.points.use=n(0,.8)),t.fountain&&(e.points.view=[0,1,2,3,4,5].map(e=>{let t=e/6*Math.PI*2;return n(Math.cos(t)*2.3,Math.sin(t)*2.3)})),t.kind===`pool`&&!t.pool.jacuzzi&&(e.points.center=n(0,0))}_occupy(e){let t=this.grid;if(e.cells=[],this.forFootprint(e.def,e.x0,e.z0,e.rot,(n,r,i)=>{let a=t.idxAt(n+.5,r+.5);if(!(a<0)){if(e.cells.push([a,i]),i===`floor`)t.floor[a]=e.id;else if(i===`prop`||i===`propw`)t.prop[a]=e.id,t.pblock[a]=+(i===`prop`);else{if(t.floor[a]>0){let e=this.objects.get(t.floor[a]);e&&this.remove(e,0,!0)}t.base[a]=e.id,t.bwalk[a]=+(i===`W`||i===`deck`),i===`water`&&(t.water[a]=e.id),i===`deck`&&(t.deck[a]=1)}}}),e.pool&&e.pool.shape===`rect`){let t=e.pool,n=[[-t.hw,-t.hl],[t.hw,t.hl]].map(([t,n])=>e.toWorld(t,n));e.hole={x0:Math.min(n[0][0],n[1][0]),z0:Math.min(n[0][1],n[1][1]),x1:Math.max(n[0][0],n[1][0]),z1:Math.max(n[0][1],n[1][1])}}else if(e.pool&&e.pool.shape===`circle`)e.hole={circle:!0,x:e.cx,z:e.cz,r:e.pool.r+.02};else if(e.landing){let t=e.landing,n=[[t.lcx-t.hw,t.lcz-t.hl],[t.lcx+t.hw,t.lcz+t.hl]].map(([t,n])=>e.toWorld(t,n));e.hole={x0:Math.min(n[0][0],n[1][0]),z0:Math.min(n[0][1],n[1][1]),x1:Math.max(n[0][0],n[1][0]),z1:Math.max(n[0][1],n[1][1])},e.pool={shape:`rect`,hw:t.hw,hl:t.hl,floorFn:()=>-t.depth,water:t.water,mat:t.mat,swimmers:new Set,landing:!0,lcx:t.lcx,lcz:t.lcz,capacity:4,depthMax:t.depth},e.poolLocal=(n,r)=>{let[i,a]=e.toLocal(n,r);return[i-t.lcx,a-t.lcz]},e.poolToWorld=(n,r)=>e.toWorld(n+t.lcx,r+t.lcz)}e.hole&&(this.holes.push(e.hole),this._updateHoles())}_updateHoles(){G.terrain&&G.terrain.setHoles(this.holes)}_release(e){let t=this.grid;for(let[n,r]of e.cells)r===`floor`?t.floor[n]===e.id&&(t.floor[n]=0):r===`prop`||r===`propw`?t.prop[n]===e.id&&(t.prop[n]=0,t.pblock[n]=0):t.base[n]===e.id&&(t.base[n]=0,t.bwalk[n]=0,t.water[n]=0,t.deck[n]=0);if(e.cells=[],e.hole){let t=this.holes.indexOf(e.hole);t>=0&&this.holes.splice(t,1),e.hole=null,this._updateHoles()}}remove(e,t=.5,n=!1){if(this.objects.has(e.id)){if(e.def.kind===`pool`||e.def.kind===`slide`){let n=new Set;for(let[t,r]of e.cells)r===`deck`&&this.grid.prop[t]&&n.add(this.grid.prop[t]);for(let e of n){let n=this.objects.get(e);n&&this.remove(n,t,!0)}}this._release(e),this._registerLists(e,!1),e.group&&(this.root.remove(e.group),(e.def.kind===`pool`||e.def.kind===`slide`)&&Hh(e.group)),e.inst&&e.instPool.remove(e.inst),this.objects.delete(e.id),t>0&&this.earn(Math.round(e.def.cost*t),`bonus`,!1),K.emit(`removed`,e),this._dirtyNav()}}_registerLists(e,t){let n=this.lists,r=e.def,i=n=>{if(t)n.push(e);else{let t=n.indexOf(e);t>=0&&n.splice(t,1)}};i(n.all),r.kind===`pool`&&i(n.pools),r.kind===`slide`&&i(n.slides),r.kind===`shop`&&i(n.shops),r.facility&&(n.fac[r.facility]=n.fac[r.facility]||[],i(n.fac[r.facility])),r.appeal&&(r.cat===`decor`||r.cat===`paths`)&&i(n.decor),e.light&&i(n.lights),r.fireworks&&i(n.fireworks),r.fountain&&i(n.fountains),G.env&&(G.env.lightAnchors=n.lights.map(e=>e.light)),this._rebuildAppeal()}_dirtyNav(){this.grid.recomputeBlock(),K.emit(`navChanged`),G.terrain&&G.terrain.refreshGrass(G.camera?G.camera.position:new z,!0)}_rebuildAppeal(){let e=this.appealGrid;e.fill(0);for(let t of this.lists.all){let n=t.def.appeal||0;if(!n)continue;let r=t.def.kind===`slide`||t.def.kind===`pool`?2:1,i=Math.floor((t.cx+80)/8),a=Math.floor((t.cz+80)/8);for(let t=-r;t<=r;t++)for(let o=-r;o<=r;o++){let r=i+o,s=a+t;r<0||s<0||r>=20||s>=20||(e[s*20+r]+=n/(1+Math.abs(o)+Math.abs(t)))}}}appealAt(e,t){let n=Math.floor((e+80)/8),r=Math.floor((t+80)/8);return n<0||r<0||n>=20||r>=20?0:this.appealGrid[r*20+n]}earn(e,t=`other`,n=!0,r=null){e<=0||(this.cash+=e,this.today[t]!==void 0&&(this.today[t]+=e),this.records.totalEarned+=e,K.emit(`cash`,{delta:e,cat:t,pos:r,popup:n}))}spend(e,t=`build`){e<=0||(this.cash-=e,this.today[t]!==void 0&&(this.today[t]+=e),K.emit(`cash`,{delta:-e,cat:t}))}canAfford(e){return this.cash>=e}landPrice(){return zh[Math.min(zh.length-1,this.owned.length-3)]||15e4}canBuyPlot(e){if(this.owned.includes(e))return!1;let[t,n]=e.split(`,`).map(Number);return t<0||n<0||t>3||n>3?!1:[[1,0],[-1,0],[0,1],[0,-1]].some(([e,r])=>this.owned.includes(`${t+e},${n+r}`))}buyPlot(e){let t=this.landPrice();return!this.canBuyPlot(e)||this.cash<t?!1:(this.spend(t,`land`),this.owned.push(e),this.grid.setOwnedPlots(this.owned),this._dirtyNav(),G.terrain.rebuildFence(this.owned),G.terrain.rebuildSaleSigns(this.owned,()=>this.landPrice()),K.emit(`landBought`,e),!0)}poolAt(e,t){if(this.grid.idxAt(e,t)<0)return null;let n=new Set;for(let[r,i]of[[0,0],[.6,0],[-.6,0],[0,.6],[0,-.6]]){let a=this.grid.idxAt(e+r,t+i);a>=0&&this.grid.water[a]&&n.add(this.grid.water[a])}for(let r of n){let n=this.objects.get(r);if(!n||!n.pool)continue;let[i,a]=n.poolLocal(e,t),o=n.pool;if(o.shape===`circle`){if(Math.hypot(i,a)<o.r)return{obj:n,lx:i,lz:a,floorY:o.floorFn(i,a)}}else if(Math.abs(i)<o.hw&&Math.abs(a)<o.hl)return{obj:n,lx:i,lz:a,floorY:o.floorFn(i,a)}}return null}randomSwimPoint(e,t=!1){let n=e.pool;for(let r=0;r<12;r++){let r,i;if(n.shape===`circle`){let e=Math.random()*6.28,t=Math.sqrt(Math.random())*(n.r-.5);r=Math.cos(e)*t,i=Math.sin(e)*t}else r=(Math.random()-.5)*(n.hw*2-1),i=(Math.random()-.5)*(n.hl*2-1);let a=n.floorFn(r,i);if(t&&a<-1.1&&!n.kids||a>-.37)continue;let[o,s]=e.poolToWorld(r,i);return new z(o,0,s)}return null}poolEdgePoint(e,t,n){let r=null,i=1e9;for(let[a,o]of e.cells){if(o!==`deck`||this.grid.block[a]||this.grid.prop[a])continue;let s=a%160,c=Math.floor(a/160),l=s+-80+.5,u=c+-80+.5,d=!1;for(let[t,n]of[[1,0],[-1,0],[0,1],[0,-1]]){let r=this.grid.idxAt(l+t,u+n);r>=0&&this.grid.water[r]===e.id&&(d=!0)}if(!d)continue;let f=(l-t)**2+(u-n)**2;f<i&&(i=f,r=new z(l,0,u))}return r}waterEntryFrom(e,t){let n=e.pool,[r,i]=e.poolLocal(t.x,t.z);if(n.shape===`circle`){let e=Math.hypot(r,i)||1;r=r/e*(n.r-.6),i=i/e*(n.r-.6)}else r=tf(r,-n.hw+.6,n.hw-.6),i=tf(i,-n.hl+.6,n.hl-.6);let[a,o]=e.poolToWorld(r,i);return new z(a,0,o)}pickObject(e,t=30,n=null){let r=null,i=t,a=new z;for(let t of this.lists.all)if((!n||n(t))&&e.intersectBox(t.bbox,a)){let n=a.distanceTo(e.origin),o=t.def.kind===`pool`||t.def.kind===`slide`?2.5:0;n+o<i&&(i=n+o,r=t)}return r}tick(e,t){for(let t of this.lists.pools.concat(this.lists.slides)){if(!t.pool)continue;let n=t.pool.swimmers.size,r=t.quality;t.quality=tf(t.quality-n*.045*e-.004*e*(G.env&&G.env.weather===`rain`?3:1),0,100),Math.floor(r/6)!==Math.floor(t.quality/6)&&this.refreshPoolLook(t)}for(let e of this.lists.slides)if(e.broken)continue;this.marketing>0&&(this.marketing=Math.max(0,this.marketing-e)),this.ratingTimer-=t,this.ratingTimer<=0&&(this.ratingTimer=1.5,this.computeRating()),this.rating=af(this.rating,this.ratingTarget,.5,t)}refreshPoolLook(e){let t=1-e.quality/100;th(e.pool.mat,t**.8);let n=e.pool.shape===`circle`?Math.PI*e.pool.r*e.pool.r:e.pool.hw*e.pool.hl*4;G.effects&&G.effects.setPoolDebris(e,Math.round(Math.max(0,t-.15)*n*1.1))}computeRating(){let e=G.guests?G.guests.list:[],t=e.length,n=0;for(let t of e)n+=t.happiness;let r=t?n/t/100:.6,i=G.effects?G.effects.trash.length:0,a=0,o=0;for(let e of this.lists.pools)a+=e.quality,o++;for(let e of this.lists.slides)a+=e.quality,o++;let s=(this.lists.fac.toilet||[]).reduce((e,t)=>e+t.dirt,0)/Math.max(1,(this.lists.fac.toilet||[]).length),c=tf(1-i/(12+t*.35),0,1)*.5+(o?a/o/100:1)*.35+(1-s/100)*.15,l=this.lists.pools.length,u=this.lists.slides.length,d=this.lists.slides.filter(e=>e.broken).length,f=new Set(this.lists.all.filter(e=>e.def.kind===`pool`||e.def.kind===`slide`||e.def.kind===`shop`).map(e=>e.key)).size,p=tf((l*1+(u-d)*1.4+f*.6)/14,0,1),m=0;for(let e of this.lists.all)m+=e.def.appeal||0;let h=this.owned.length*32*32,g=tf(m/(h/45),0,1),_=this.lists.fac,v=this.staff.lifeguard>0&&(_.lifeguard||[]).length?Math.min(1,this.staff.lifeguard/Math.max(1,l*.5)):0,y=tf((_.toilet&&_.toilet.length?.3:0)+v*.35+(_.firstaid&&_.firstaid.length?.2:0)+Math.min(.15,(_.bin||[]).length*.02),0,1);this.ratingParts={happy:r,clean:c,attractions:p,scenery:g,safety:y};let b=r*.36+c*.22+p*.22+g*.1+y*.1;this.ratingTarget=tf(b*5.05,.5,5)}endOfDay(){let e=0;for(let[t,n]of Object.entries(this.staff))e+=Ih[t].wage*n;let t=0;for(let e of this.lists.all)t+=e.def.upkeep||0;this.spend(e,`wages`),this.spend(t,`upkeep`);let n=this.today,r=n.tickets+n.food+n.shops+n.tips+n.lockers+n.bonus,i=n.wages+n.upkeep+n.build+n.land,a=r-n.wages-n.upkeep,o={day:G.time.day,income:r,expenses:i,profit:a,stats:{...n},rating:this.rating,cash:this.cash,newRecord:a>this.records.bestDay&&G.time.day>1};return a>this.records.bestDay&&(this.records.bestDay=a),this.history.push({day:G.time.day,income:r,profit:a,guests:n.guestsIn,rating:this.rating}),this.history.length>14&&this.history.shift(),this.today=Bh(),o}serialize(){let e=[];for(let t of this.objects.values())e.push([t.key,t.x0,t.z0,t.rot,t.color,Math.round(t.seed*1e3)/1e3,Math.round(t.quality),Math.round(t.condition),t.id]);return{v:3,objs:e,owned:this.owned,cash:Math.round(this.cash),ticket:this.ticketPrice,food:this.foodMult,staff:this.staff,history:this.history,records:this.records,today:this.today,flags:this.flags,marketing:this.marketing}}restore(e){this.owned=e.owned||[...$f],this.grid.setOwnedPlots(this.owned),this.cash=e.cash??6e3,this.ticketPrice=e.ticket??15,this.foodMult=e.food??1,this.staff=Object.assign({janitor:0,lifeguard:0,pooltech:0,mechanic:0},e.staff||{}),this.history=e.history||[],this.records=Object.assign(this.records,e.records||{}),this.today=Object.assign(Bh(),e.today||{}),this.flags=e.flags||{},this.marketing=e.marketing||0;for(let[t,n,r,i,a,o,s,c,l]of e.objs||[]){if(!Fh[t]||!this.canPlace(Fh[t],n,r,i).ok)continue;let e=this.place(t,n,r,i,{free:!0,silent:!0,color:a,seed:o,quality:s,id:l});e&&(e.condition=c??100,e.pool&&this.refreshPoolLook(e))}this._dirtyNav()}};function Hh(e){e.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&e.material.userData&&e.material.userData.isWater&&e.material.dispose())})}var Uh=[15845544,15250575,13802100,11695954,9263675,7029032,16176315,13208934],Wh=[2036748,3810324,5978654,9067051,13146714,14860922,2763306,10566170,10132122],Gh=[15222331,2006015,16761370,3068779,10636287,16742938,16732067,1626569,1780331,1118481,16777215,16748448,7069951],Q={root:0,spine:1,head:2,armL:3,foreL:4,armR:5,foreR:6,thighL:7,shinL:8,thighR:9,shinR:10},Kh=11;function qh(e){let t=[];for(let e=0;e<Kh;e++)t.push(new Ki);let[n,r,i,a,o,s,c,l,u,d,f]=t;return n.position.set(0,.95*e,0),r.position.set(0,.1*e,0),n.add(r),i.position.set(0,.47*e,0),r.add(i),a.position.set(.19*e,.36*e,0),r.add(a),o.position.set(0,-.27*e,0),a.add(o),s.position.set(-.19*e,.36*e,0),r.add(s),c.position.set(0,-.27*e,0),s.add(c),l.position.set(.095*e,-.04*e,0),n.add(l),u.position.set(0,-.43*e,0),l.add(u),d.position.set(-.095*e,-.04*e,0),n.add(d),f.position.set(0,-.43*e,0),d.add(f),t}var Jh=class{constructor(){this.pos=[],this.nor=[],this.si=[],this.sw=[],this.part=[],this.idx=[],this.vc=0}add(e,t,n,r){let i=(e.index,e);i.applyMatrix4(t);let a=i.attributes.position,o=i.attributes.normal,s=this.vc;for(let e=0;e<a.count;e++){let t=a.getX(e),i=a.getY(e),s=a.getZ(e);this.pos.push(t,i,s),this.nor.push(o.getX(e),o.getY(e),o.getZ(e));let c=typeof n==`function`?n(t,i,s):n;this.si.push(c,0,0,0),this.sw.push(1,0,0,0),this.part.push(typeof r==`function`?r(t,i,s):r)}if(i.index)for(let e of i.index.array)this.idx.push(s+e);else for(let e=0;e<a.count;e++)this.idx.push(s+e);this.vc+=a.count}build(){let e=new Ur;return e.setAttribute(`position`,new H(this.pos,3)),e.setAttribute(`normal`,new H(this.nor,3)),e.setAttribute(`skinIndex`,new Ar(this.si,4)),e.setAttribute(`skinWeight`,new H(this.sw,4)),e.setAttribute(`aPart`,new H(this.part,1)),e.setIndex(this.idx),e.computeBoundingSphere(),e.boundingSphere=new Fr(new z(0,.9,0),1.6),e}},Yh=(e,t,n,r=1,i=1,a=1,o=0,s=0,c=0)=>new B().compose(new z(e,t,n),new Ut().setFromEuler(new Cn(o,s,c)),new z(r,i,a));function Xh({gender:e,kid:t,hair:n,suit:r,glasses:i,floaties:a,cap:o}){let s=t?.62:1,c=t?1.28:1,l=new Jh,u=e===`f`,d=new ls((u?[[.001,.84],[.13,.86],[.165,.95],[.15,1.04],[.122,1.12],[.145,1.24],[.158,1.31],[.142,1.4],[.11,1.45],[.05,1.49],[.045,1.55],[.001,1.56]]:[[.001,.84],[.135,.86],[.16,.95],[.152,1.05],[.142,1.13],[.16,1.26],[.17,1.35],[.15,1.43],[.11,1.47],[.055,1.5],[.05,1.56],[.001,1.57]]).map(([e,t])=>new R(e*s,t*s)),14),f=u?1.18:1.3,p=u?.78:.74;l.add(d,Yh(0,0,0,f,1,p),(e,t)=>t<1*s?Q.root:Q.spine,(e,t,n)=>{let i=t/s;return i>1.47?0:r===`trunks`?+(i<1):r===`onepiece`?+(i<1.42):r===`bikini`?+(i<1||i>1.22&&i<1.36):r===`shirt`?i<1?3:1:0});let m=1.635*s+(t?.03:0),h=new ms(.105,16,12);l.add(h,Yh(0,m,.005,.93*s*c,1.08*s*c,1*s*c),Q.head,0),l.add(new ms(.02,6,5),Yh(0,m-.012*s*c,.104*s*c,s*c,s*c,1.2*s*c),Q.head,0);for(let e of[-1,1])l.add(new ms(.022,6,5),Yh(e*.097*s*c,m,0,.6*s*c,s*c,s*c),Q.head,0);for(let e of[-1,1])l.add(new ms(.015,6,5),Yh(e*.036*s*c,m+.018*s*c,.093*s*c,s*c,s*c,.6*s*c),Q.head,4);if(i&&l.add(new La(.17,.04,.02),Yh(0,m+.018*s*c,.1*s*c,s*c,s*c,s*c),Q.head,4),o)l.add(new ms(.115,16,8,0,Math.PI*2,0,1.75),Yh(0,m+.005,-.004,s*c*.95,s*c*1.06,s*c),Q.head,3);else if(n!==`bald`){let e=new ms(.114,16,8,0,Math.PI*2,0,n===`curly`?1.9:1.62);l.add(e,Yh(0,m+.012,-.012,s*c*.97,s*c*(n===`curly`?1.12:1.05),s*c*1.02,-.25),Q.head,2),n===`long`&&l.add(new ms(.11,12,8),Yh(0,m-.1*s*c,-.06*s*c,s*c*1,s*c*1.5,s*c*.55),Q.head,2),n===`pony`&&l.add(new Ra(.04,.14,4,8),Yh(0,m-.04*s*c,-.13*s*c,s*c,s*c,s*c,.5),Q.head,2),n===`bun`&&l.add(new ms(.06,10,8),Yh(0,m+.1*s*c,-.07*s*c,s*c,s*c,s*c),Q.head,2)}for(let e of[1,-1]){let t=e>0?Q.armL:Q.armR,n=e>0?Q.foreL:Q.foreR,i=e*.205*s;l.add(new Ra(u?.042:.05,.19,4,8),Yh(i,1.27*s,0,s,s,s),t,r===`shirt`?(e,t)=>+(t>1.26*s):0),l.add(new Ra(u?.036:.041,.2,4,8),Yh(i,1.03*s,0,s,s,s),n,0),l.add(new ms(u?.042:.049,8,6),Yh(i,1.14*s,0,s,s,s),n,0),l.add(new ms(.045,8,6),Yh(i,.84*s,.01*s,.75*s,1.15*s,.5*s),n,0),a&&l.add(new hs(.07,.035,8,12),Yh(i,1.3*s,0,s,s,s,Math.PI/2),t,3)}for(let e of[1,-1]){let t=e>0?Q.thighL:Q.thighR,n=e>0?Q.shinL:Q.shinR,i=e*.095*s,a=r===`trunks`?.6:r===`shirt`?.62:.85;l.add(new Ra(u?.068:.074,.29,4,10),Yh(i,.69*s,0,s,s,s),t,(e,t)=>t>a*s?r===`shirt`?3:1:0),l.add(new Ra(u?.052:.056,.33,4,8),Yh(i,.29*s,0,s,s,s),n,0),l.add(new ms(u?.062:.066,8,6),Yh(i,.48*s,0,s,s,s),n,0),l.add(new La(.085,.055,.22),Yh(i,.03*s,.045*s,s,s,s),n,r===`shirt`?3:0)}return l.build()}function Zh(e){let t=new U({roughness:.62,metalness:0}),n={uSkin:{value:new V(e.skin)},uSuit:{value:new V(e.suit)},uHair:{value:new V(e.hair)},uAccent:{value:new V(e.accent)},uWet:{value:0},uFlash:{value:0}};return t.userData.uni=n,t.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aPart;
varying float vPart;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vPart = aPart;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vPart;
uniform vec3 uSkin, uSuit, uHair, uAccent; uniform float uWet; uniform float uFlash;`).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec3 pc = vPart < 0.5 ? uSkin : vPart < 1.5 ? uSuit : vPart < 2.5 ? uHair : vPart < 3.5 ? uAccent : vec3(0.03);
        diffuseColor.rgb = pc;`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        roughnessFactor = (vPart < 0.5 ? 0.55 : vPart < 1.5 ? 0.7 : vPart < 2.5 ? 0.85 : vPart < 3.5 ? 0.45 : 0.2) * (1.0 - uWet * 0.55);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
 totalEmissiveRadiance += vec3(1.0, 0.85, 0.3) * uFlash;`)},t.customProgramCacheKey=()=>`person`,t}var Qh=new Map;function $h(e,t){return Qh.has(e)||Qh.set(e,Xh(t)),Qh.get(e)}function eg(e={}){let t=e.kid??Math.random()<.28,n=e.gender||(Math.random()<.5?`f`:`m`),r=cf(n===`f`?[`long`,`long`,`pony`,`bun`,`short`,`curly`]:[`short`,`short`,`curly`,`bald`,`short`]),i=e.suit||(n===`f`?cf(t?[`onepiece`,`onepiece`,`bikini`]:[`bikini`,`onepiece`,`bikini`]):`trunks`),a=cf(Uh);return{kid:t,gender:n,hair:t&&r===`bald`?`short`:r,suit:i,glasses:!t&&Math.random()<.18,floaties:t&&Math.random()<.45,cap:!e.staff&&Math.random()<.06,colors:{skin:a,suit:e.suitColor??cf(Gh),hair:cf(Wh),accent:e.accent??cf([16747050,16765498,16777215,2236962])}}}function tg(e){let t=$h([e.gender,e.kid?`k`:`a`,e.hair,e.suit,e.glasses?`g`:``,e.floaties?`f`:``,e.cap?`c`:``].join(`|`),e),n=Zh(e.colors),r=new Gi(t,n),i=qh(e.kid?.62:1);return r.add(i[0]),r.updateMatrixWorld(!0),r.bind(new Xi(i)),r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!0,{mesh:r,bones:i,rest:i.map(e=>e.position.clone()),scale:e.kid?.62:1,rot:new Float32Array(33),uni:n.userData.uni}}var ng=new Float32Array(33);function $(e,t,n,r){ng[e*3]=t,ng[e*3+1]=n,ng[e*3+2]=r}function rg(e,t,n,r,i=0){ng.fill(0);let a=0,o=0,s=e.scale;switch(t){case`walk`:case`run`:case`climb`:{let e=t===`run`?.75:t===`climb`?.6:.45,r=Math.sin(n),i=Math.cos(n);$(Q.thighL,-r*e-(t===`climb`?.35:0),0,0),$(Q.thighR,r*e-(t===`climb`?.35:0),0,0),$(Q.shinL,Math.max(0,i)*e*1.3+(t===`climb`?.4:0),0,0),$(Q.shinR,Math.max(0,-i)*e*1.3+(t===`climb`?.4:0),0,0),$(Q.armL,r*e*.75,0,.1),$(Q.armR,-r*e*.75,0,-.1),$(Q.foreL,-.25-(t===`run`?.8:0),0,0),$(Q.foreR,-.25-(t===`run`?.8:0),0,0),$(Q.spine,t===`run`?.15:t===`climb`?.2:.03,r*.08,0),$(Q.root,0,-r*.06,0),a=Math.abs(r)*.035*s;break}case`swim`:{$(Q.root,1.2,0,0),$(Q.head,-.95,0,0);let e=Math.sin(n),t=Math.cos(n);$(Q.armL,-1.5+e*.35,0,.35+t*.5),$(Q.armR,-1.5+e*.35,0,-.35-t*.5),$(Q.foreL,-.4-Math.max(0,t)*.8,0,0),$(Q.foreR,-.4-Math.max(0,t)*.8,0,0),$(Q.thighL,.2+e*.35,0,.15),$(Q.thighR,.2-e*.35,0,-.15),$(Q.shinL,.4+Math.max(0,e)*.6,0,0),$(Q.shinR,.4+Math.max(0,-e)*.6,0,0),a=-.15*s;break}case`tread`:{let e=Math.sin(n*.8);$(Q.armL,-.3,0,.9+e*.3),$(Q.armR,-.3,0,-.9-e*.3),$(Q.foreL,-.5,0,0),$(Q.foreR,-.5,0,0),$(Q.thighL,-.3+e*.3,0,0),$(Q.thighR,-.3-e*.3,0,0),$(Q.shinL,.6,0,0),$(Q.shinR,.6,0,0);break}case`drown`:{let e=Math.sin(n*2.6);$(Q.armL,-2.7+e*.5,0,.3+e*.2),$(Q.armR,-2.7-e*.5,0,-.3+e*.2),$(Q.head,-.4,e*.3,0),$(Q.spine,0,e*.2,0),$(Q.thighL,-.5+e*.4,0,0),$(Q.thighR,-.5-e*.4,0,0),$(Q.shinL,.8,0,0),$(Q.shinR,.8,0,0),a=Math.sin(n*1.7)*.12*s;break}case`lie`:$(Q.root,-Math.PI/2,0,0),$(Q.head,-.15,Math.sin(n*.1)*.2,0),$(Q.armL,-.1,0,.18),$(Q.armR,-.1,0,-.18),$(Q.foreL,-.3-i*1.2,0,0),$(Q.foreR,-.2,0,0),$(Q.thighL,-.12,0,.04),$(Q.thighR,0,0,-.04),$(Q.shinL,.25,0,0),a=-.95*s+.62,o=0;break;case`slide`:$(Q.root,-Math.PI/2+.25,0,0),$(Q.head,-.5,0,0),$(Q.armL,-.2,0,.45),$(Q.armR,-.2,0,-.45),$(Q.foreL,-1.2,0,0),$(Q.foreR,-1.2,0,0),$(Q.thighL,0,0,.05),$(Q.thighR,0,0,-.05),a=-.95*s+.15;break;case`sit`:$(Q.thighL,-1.5,0,.06),$(Q.thighR,-1.5,0,-.06),$(Q.shinL,1.45,0,0),$(Q.shinR,1.45,0,0),$(Q.armL,-.4,0,.12),$(Q.armR,-.4-i*.8,0,-.12),$(Q.foreL,-.6,0,0),$(Q.foreR,-.6-i*1.2,0,0),$(Q.spine,-.08+Math.sin(n*.3)*.03,0,0),$(Q.head,0,Math.sin(n*.2)*.4,0),a=-.95*s+.5*s+.02,o=-.05;break;case`cheer`:{let e=Math.sin(n*2.5);$(Q.armL,-2.8+e*.2,0,.35),$(Q.armR,-2.8-e*.2,0,-.35),$(Q.foreL,-.3,0,0),$(Q.foreR,-.3,0,0),a=Math.max(0,e)*.08*s;break}case`eat`:{let e=Math.max(0,Math.sin(n*.7));$(Q.armR,-.6-e*.7,0,-.15),$(Q.foreR,-1.4-e*.4,0,0),$(Q.armL,0,0,.08),$(Q.foreL,-.2,0,0),$(Q.head,-.1+e*.15,0,0);break}case`bend`:$(Q.spine,.95,0,0),$(Q.head,-.5,0,0),$(Q.armL,-.9,0,.1),$(Q.armR,-1.1,0,-.1),$(Q.thighL,-.5,0,0),$(Q.thighR,-.5,0,0),$(Q.shinL,.6,0,0),$(Q.shinR,.6,0,0),a=-.12*s;break;case`work`:{let e=Math.sin(n*2);$(Q.spine,.35,e*.25,0),$(Q.armL,-1.1+e*.3,0,.25),$(Q.armR,-1-e*.3,0,-.25),$(Q.foreL,-.6,0,0),$(Q.foreR,-.6,0,0),$(Q.thighL,-.2,0,0),$(Q.thighR,.1,0,0);break}case`jump`:$(Q.armL,-2.6,0,.5),$(Q.armR,-2.6,0,-.5),$(Q.thighL,-.9,0,0),$(Q.thighR,-.9,0,0),$(Q.shinL,1.2,0,0),$(Q.shinR,1.2,0,0);break;default:{let e=Math.sin(n*.5);$(Q.armL,e*.03,0,.1),$(Q.armR,-e*.03,0,-.1),$(Q.foreL,-.15,0,0),$(Q.foreR,-.15,0,0),$(Q.spine,e*.02,Math.sin(n*.17)*.12,0),$(Q.head,0,Math.sin(n*.23)*.5,0),$(Q.thighR,.02,0,-.05)}}let c=Math.min(1,r*12),l=e.rot,u=e.bones;for(let e=0;e<Kh;e++){let t=e*3;l[t]+=(ng[t]-l[t])*c,l[t+1]+=(ng[t+1]-l[t+1])*c,l[t+2]+=(ng[t+2]-l[t+2])*c,u[e].rotation.set(l[t],l[t+1],l[t+2])}u[0].position.set(e.rest[0].x+0,e.rest[0].y+a,e.rest[0].z+o)}var ig=[];function ag(e,t,n,r){e.pathPending=!0,e.pathReqId=(e.pathReqId||0)+1,ig.push({agent:e,x:t,z:n,cb:r,id:e.pathReqId})}function og(e=8){let t=0;for(;ig.length&&t<e;){let e=ig.shift();if(e.agent.dead||e.id!==e.agent.pathReqId)continue;let n=G.park.grid.findPath(e.agent.pos.x,e.agent.pos.z,e.x,e.z,25e3);e.agent.pathPending=!1,e.cb(n),t++}}function sg(e){e.pathReqId=(e.pathReqId||0)+1,e.pathPending=!1}var cg={};function lg(e){return cg[e]||(cg[e]=new ei({map:Y[e],depthTest:!0,transparent:!0,fog:!1})),cg[e]}var ug=class{constructor(e){this.look=e,this.person=tg(e),this.mesh=this.person.mesh,this.scale=this.person.scale,this.pos=new z,this.yaw=0,this.path=null,this.pi=0,this.onArrive=null,this.speed=1.25,this.pose=`idle`,this.ph=Math.random()*10,this.posY=0,this.icon=null,this.iconName=null,this.hidden=!1,this.dead=!1,this.animTick=0,this.customOrient=!1,G.scene.add(this.mesh)}setIcon(e){e!==this.iconName&&(this.iconName=e,e?(this.icon||(this.icon=new mi(lg(e)),this.icon.scale.set(.55,.55,.55),this.icon.renderOrder=10,G.scene.add(this.icon)),this.icon.material=lg(e),this.icon.visible=!0):this.icon&&(this.icon.visible=!1))}walkTo(e,t,n,r){this.path=null,ag(this,e,t,e=>{e?(this.path=e,this.pi=0,this.onArrive=()=>n&&n(!0)):r?r():n&&n(!1)})}walkDirect(e,t){this.path=e.map(e=>Array.isArray(e)?e:[e.x,e.z]),this.pi=0,this.onArrive=()=>t&&t(!0)}stop(){this.path=null,this.onArrive=null,sg(this)}stepPath(e){if(!this.path)return!1;let t=this.path[this.pi];if(!t){this.path=null;let e=this.onArrive;return this.onArrive=null,e&&e(),!1}let n=t[0]-this.pos.x,r=t[1]-this.pos.z,i=Math.hypot(n,r),a=this.speed,o=G.park.grid.idxAt(this.pos.x,this.pos.z);o>=0&&(G.park.grid.floor[o]||G.park.grid.deck[o])&&(a*=1.12);let s=a*e;if(i<=s+.02){if(this.pos.x=t[0],this.pos.z=t[1],this.pi++,this.pi>=this.path.length){this.path=null;let e=this.onArrive;this.onArrive=null,e&&e()}}else{this.pos.x+=n/i*s,this.pos.z+=r/i*s;let t=Math.atan2(n,r);this.yaw+=uf(this.yaw,t)*Math.min(1,e*8)}return!0}faceTo(e,t,n=1){let r=Math.atan2(e-this.pos.x,t-this.pos.z);this.yaw+=uf(this.yaw,r)*Math.min(1,n*6)}render(e,t,n,r=!0){let i=this.mesh;if(i.visible=!this.hidden,this.hidden){this.icon&&(this.icon.visible=!1);return}this.customOrient||(i.position.set(this.pos.x,this.posY,this.pos.z),i.rotation.set(0,this.yaw,0));let a=(this.pos.x-n.x)**2+(this.pos.z-n.z)**2;this.ph+=t*(this.pose===`run`?9:this.pose===`walk`||this.pose===`climb`?6.2*this.speed/1.25:3),this.animTick++;let o=a>6400?6:a>1600?2:1;r&&this.animTick%o===0&&rg(this.person,this.pose,this.ph,e*o,this.poseExtra||0),this.icon&&this.iconName&&(this.icon.visible=!0,this.icon.position.set(this.pos.x,this.iconY??this.posY+2.15*this.scale+.15,this.pos.z))}dispose(){this.dead=!0,G.scene.remove(this.mesh),this.mesh.material.dispose(),this.icon&&G.scene.remove(this.icon)}},dg=new Map;function fg(e,t){dg.clear();for(let t of e){if(t.hidden||t.noSep)continue;let e=Math.floor(t.pos.x/1.5)*73856093^Math.floor(t.pos.z/1.5)*19349663,n=dg.get(e);n||(n=[],dg.set(e,n)),n.push(t)}for(let e of dg.values())if(!(e.length<2))for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],a=e[r],o=a.pos.x-i.pos.x,s=a.pos.z-i.pos.z,c=o*o+s*s,l=.42*(i.scale+a.scale);if(c>1e-4&&c<l*l){let e=Math.sqrt(c),n=(l-e)*.5*Math.min(1,t*6),r=o/e,u=s/e,d=i.path?1:.3,f=a.path?1:.3;G.park.grid.isWalkable(i.pos.x-r*n*d,i.pos.z-u*n*d)&&(i.pos.x-=r*n*d,i.pos.z-=u*n*d),G.park.grid.isWalkable(a.pos.x+r*n*f,a.pos.z+u*n*f)&&(a.pos.x+=r*n*f,a.pos.z+=u*n*f)}}}var pg=new z(0,0,67.2),mg=new z(0,0,61.5),hg={pos:new z,tan:new z,up:new z,side:new z},gg=new B,_g=new z,vg=new z,yg=new z,bg={slideGreat:[`That slide was AMAZING!`,`Wooo! Again!`,`Best slide ever!`,`My heart is racing!`],slideOk:[`That was fun!`,`Nice little slide.`],poolClean:[`The water is crystal clear!`,`Such a refreshing swim.`],poolDirty:[`Eww, this water is gross...`,`Somebody clean this pool!`],trash:[`There is litter everywhere.`,`This park is so dirty.`],scenery:[`What a beautiful park!`,`Love all these palm trees.`,`So pretty here!`],hungryNone:[`I'm starving, where is the food?`],thirstyNone:[`So thirsty... no drinks anywhere?`],toiletNone:[`I really need a restroom!`],toiletDirty:[`These restrooms are disgusting!`],tooExpensive:[`The ticket is way too expensive!`,`I'm not paying that much!`],foodPricey:[`That was a rip-off.`,`Overpriced snacks...`],foodGood:[`Yum, delicious!`,`Just what I needed.`],queueLong:[`This line is too long!`,`I've been waiting forever.`],broken:[`The slide is broken?!`,`Ugh, it's closed.`],tired:[`I need a place to lie down.`],crowded:[`It's so crowded here.`],boring:[`There's not much to do here.`],happyLeave:[`Best day ever! I'll be back!`,`What a great waterpark!`],sadLeave:[`I want to go home.`,`Not coming back here.`],rescued:[`Thank you lifeguard!`],rain:[`Ugh, rain...`],fireworks:[`Wow, fireworks!!`]},xg=1,Sg=class{constructor(){this.list=[],this.spawnAcc=0,this.thoughtFeed=[],this.decisionIdx=0,this.maxGuests=80,this.emergencies=[]}setQuality(e){this.maxGuests=e===`high`?110:e===`medium`?80:45}spawn(e=!1){let t=eg(),n=new ug(t);if(n.id=xg++,n.name=cf(vf)+` `+yf[Math.floor(Math.random()*yf.length)]+`.`,n.kid=t.kid,n.speed=(n.kid?1.35:1.2)*q(.88,1.12),n.needs={hunger:q(.05,.4),thirst:q(.1,.45),energy:q(.75,1),bladder:q(0,.35),fun:q(0,.25)},n.happiness=q(62,80),n.cash=Math.round(q(25,110))+(n.kid?0:20),n.spent=0,n.thrill=n.kid?q(0,.5):q(.2,1),n.vip=!n.kid&&lf(.025+(G.park.rating>3.5?.02:0)),n.vip&&(n.cash+=300,n.happiness=70),n.stayMin=q(140,330),n.enteredAt=G.time.total,n.task=null,n.wet=0,n.thought=null,n.thoughtT=0,n.carrying=null,n.eatT=0,n.decideCD=q(0,1.5),n.inPark=e,n.lockerDone=!1,n.showered=!1,n.envT=q(0,10),n.posY=0,n.rides=0,n.visited=new Set,e){let e=G.park.grid.randomParkPoint()||[0,50];n.pos.set(e[0],0,e[1]),n.enteredAt=G.time.total-q(0,60)}else{let e=Math.random()<.5?-1:1;n.pos.set(e*q(8,44),0,cf([81,90,99.5])+q(-.5,.5)),Math.random()<.35&&n.pos.set(q(-3,3),0,q(95,98)),this.setTask(n,{type:`arrive`})}return n.yaw=Math.random()*6.28,n.vip&&n.setIcon(`iconVip`),this.list.push(n),n}despawn(e){this.clearTask(e),e.dispose();let t=this.list.indexOf(e);t>=0&&this.list.splice(t,1)}think(e,t,n=`neutral`){let r=bg[t],i=r?cf(r):t;e.thought={text:i,kind:n},e.thoughtT=G.time.total;let a=this.thoughtFeed.find(e=>e.key===t);a?(a.count++,a.t=G.time.total,a.text=i):(this.thoughtFeed.push({key:t,text:i,kind:n,count:1,t:G.time.total}),this.thoughtFeed.length>24&&this.thoughtFeed.shift())}addHappy(e,t){e.happiness=tf(e.happiness+t,0,100)}unmet(e,t){e.unmetT=e.unmetT||{},G.time.total-(e.unmetT[t]??-999)<45||(e.unmetT[t]=G.time.total,this.think(e,t,`bad`),this.addHappy(e,-3))}setTask(e,t){this.clearTask(e),e.task=t,t.phase=t.phase||`start`,t.t=0,t.dtMin=0,this.runTask(e,0)}clearTask(e){let t=e.task;if(t){if(t.obj){let n=t.obj,r=n.queue.indexOf(e);r>=0&&n.queue.splice(r,1),n.users.delete(e),n.pool&&n.pool.swimmers.delete(e),t.seat&&t.seat.taken===e&&(t.seat.taken=null),t.spot&&t.spot.taken===e&&(t.spot.taken=null)}e.hidden=!1,e.customOrient=!1,e.noSep=!1,e.task=null,e.stop(),e.posY=0,e.iconName===`iconHelp`&&e.setIcon(e.vip?`iconVip`:null),e.poseExtra=0}}fail(e,t){t&&(this.think(e,t,`bad`),this.addHappy(e,-4)),this.clearTask(e),e.decideCD=q(.5,2)}decide(e){let t=G.park,n=e.needs,r=G.time.total-e.enteredAt;if(G.time.minutes>=1260||G.time.minutes<510||e.happiness<12||r>e.stayMin&&lf(.3)||n.energy<.06){this.setTask(e,{type:`leave`});return}if(!e.lockerDone&&(t.lists.fac.lockers||[]).length&&!e.kid){e.lockerDone=!0;let n=this.best(e,t.lists.fac.lockers,e=>e.queue.length<6,.5);if(n){this.setTask(e,{type:`service`,obj:n,kind:`lockers`});return}}if(e.carrying&&lf(.6)){let t=this.allSeats([`picnic`,`bench`]),n=this.bestSeat(e,t,18);if(n){this.setTask(e,{type:`seat`,obj:n.obj,seat:n.seat,dur:q(14,26)});return}}if(n.bladder>.72){let n=this.best(e,t.lists.fac.toilet||[],e=>e.queue.length<6);if(n){this.setTask(e,{type:`service`,obj:n,kind:`toilet`});return}this.unmet(e,`toiletNone`)}if(n.thirst>.6&&!e.carrying){let r=this.best(e,t.lists.shops.filter(e=>e.def.shop.type===`drink`||e.def.shop.type===`snack`&&n.thirst<.8),e=>e.queue.length<7);if(r){this.setTask(e,{type:`service`,obj:r,kind:`shop`});return}this.unmet(e,`thirstyNone`)}if(n.hunger>.62&&!e.carrying){let n=this.best(e,t.lists.shops.filter(e=>e.def.shop.type===`food`||e.def.shop.type===`snack`),e=>e.queue.length<7);if(n){this.setTask(e,{type:`service`,obj:n,kind:`shop`});return}this.unmet(e,`hungryNone`)}if(n.energy<.35){let n=t.lists.pools.filter(e=>e.pool.jacuzzi&&e.pool.swimmers.size<e.pool.capacity);if(n.length&&lf(.35)){this.setTask(e,{type:`pool`,obj:this.best(e,n,null),dur:q(18,35),rest:!0});return}let r=this.allSeats([`sunbed`,`bench`,`picnic`]),i=this.bestSeat(e,r,50);if(i){this.setTask(e,{type:`seat`,obj:i.obj,seat:i.seat,dur:q(25,55)});return}this.unmet(e,`tired`)}let i=[],a=t.lists.slides.filter(t=>!t.broken&&(!t.def.kidsOnly||e.kid)&&(!e.kid||t.slide.def.thrill<.75||e.thrill>.4));for(let t of a){let n=(t.slide.def.fun*1.2+(e.thrill-t.slide.def.thrill*.6)*.8+(e.visited.has(t.id)?-.25:.25))*(t.def.kidsOnly?1.5:1);i.push([n-t.queue.length*.06,()=>this.setTask(e,{type:`slide`,obj:t})])}for(let r of t.lists.pools){if(r.pool.jacuzzi&&n.energy>.7||r.pool.kids&&!e.kid&&lf(.85)||!r.pool.kids&&e.kid&&lf(.25)||r.pool.swimmers.size>=r.pool.capacity)continue;let t=r.def.fun*1.1+(r.quality-60)/200+(r.pool.wave?.5:0)+(e.wet<.2?.15:0);i.push([t,()=>this.setTask(e,{type:`pool`,obj:r,dur:q(25,60)})])}if(!e.showered&&(t.lists.fac.shower||[]).length&&lf(.5)){e.showered=!0;let n=this.best(e,t.lists.fac.shower,e=>e.queue.length<4);n&&i.push([1.4,()=>this.setTask(e,{type:`service`,obj:n,kind:`shower`})])}for(let n of t.lists.shops.filter(e=>e.def.shop.type===`souvenir`))e.cash>20&&e.happiness>55&&i.push([.35+(e.happiness-55)/100,()=>this.setTask(e,{type:`service`,obj:n,kind:`shop`})]);for(let n of t.lists.fountains)i.push([.3,()=>this.setTask(e,{type:`view`,obj:n})]);if(n.energy<.6||lf(.15)){let t=this.bestSeat(e,this.allSeats([`sunbed`]),40);t&&i.push([.55+(.6-n.energy),()=>this.setTask(e,{type:`seat`,obj:t.obj,seat:t.seat,dur:q(20,45)})])}i.push([.22,()=>this.setTask(e,{type:`wander`})]),i.length===1&&this.unmet(e,`boring`),i.sort((e,t)=>t[0]-e[0]);let o=i.slice(0,4),s=0;for(let e of o)s+=Math.max(.05,e[0]);let c=Math.random()*s;for(let e of o)if(c-=Math.max(.05,e[0]),c<=0){e[1]();return}o[0][1]()}best(e,t,n,r=.04){let i=null,a=-1e9;for(let o of t){if(!o||n&&!n(o))continue;let t=-Math.hypot(o.cx-e.pos.x,o.cz-e.pos.z)*r-o.queue.length*.3+Math.random()*.6+(o.condition||100)/400;t>a&&(a=t,i=o)}return i}allSeats(e){let t=[];for(let n of e)for(let e of G.park.lists.fac[n]||[])for(let n of e.points.seats||[])n.taken||t.push({obj:e,seat:n});return t}bestSeat(e,t,n){let r=null,i=n;for(let n of t){let t=Math.hypot(n.seat.pos.x-e.pos.x,n.seat.pos.z-e.pos.z)+Math.random()*6;t<i&&(i=t,r=n)}return r}runTask(e,t){let n=e.task;if(!n)return;n.t+=t;let r=G.park;switch(n.type){case`arrive`:return this.taskArrive(e,n,t);case`leave`:return this.taskLeave(e,n,t);case`wander`:if(n.phase===`start`){n.phase=`walk`;let t=r.grid.randomParkPoint(),i=r.lists.decor;if(i.length&&lf(.5)){let e=cf(i);t=[e.cx+q(-3,3),e.cz+q(-3,3)]}if(!t)return this.fail(e);e.pose=`walk`,e.walkTo(t[0],t[1],t=>{if(!t)return this.fail(e);n.phase=`look`,n.t=0,n.dur=q(3,7),e.pose=`idle`})}else n.phase===`look`&&n.t>n.dur&&(r.appealAt(e.pos.x,e.pos.z)>14&&lf(.4)&&(this.think(e,`scenery`,`good`),this.addHappy(e,3)),this.clearTask(e));return;case`view`:{let r=n.obj;if(n.phase===`start`){n.phase=`walk`;let t=cf(r.points.view);e.pose=`walk`,e.walkTo(t.x,t.z,t=>{if(!t)return this.fail(e);n.phase=`look`,n.t=0,e.pose=`idle`})}else n.phase===`look`&&(e.faceTo(r.cx,r.cz,t),n.t>6&&(this.addHappy(e,5),e.needs.fun+=.08,lf(.3)&&this.think(e,`scenery`,`good`),this.maybeTip(e,.15),this.clearTask(e)));return}case`seat`:return this.taskSeat(e,n,t);case`service`:return this.taskService(e,n,t);case`pool`:return this.taskPool(e,n,t);case`slide`:return this.taskSlide(e,n,t);case`bin`:if(n.phase===`start`){n.phase=`walk`,e.pose=`walk`;let t=n.obj.points.use;e.walkTo(t.x,t.z,t=>{if(!t)return this.dropLitter(e,1),this.fail(e);n.phase=`use`,n.t=0,e.pose=`idle`})}else n.phase===`use`&&(e.faceTo(n.obj.cx,n.obj.cz,t),n.t>.8&&(e.litter=0,this.clearTask(e)));return;case`drown`:return this.taskDrown(e,n,t)}}taskArrive(e,t){if(t.phase===`start`)t.phase=`toGate`,e.pose=`walk`,e.walkTo(pg.x+q(-1.6,1.6),pg.z+q(0,1.5),n=>{n?(t.phase=`pay`,t.t=0,e.pose=`idle`):e.walkDirect([[0,75],[pg.x,pg.z]],()=>{t.phase=`pay`,t.t=0,e.pose=`idle`})});else if(t.phase===`pay`&&t.t>.6){let n=G.park,r=9+n.rating*5.5+Math.min(12,n.lists.slides.length*2+n.lists.pools.length)+(e.vip?30:0)+q(-4,6),i=n.ticketPrice*(e.kid?.6:1);if(i>r*1.25||i>r&&lf(.6)){this.think(e,`tooExpensive`,`bad`),K.emit(`guestRefused`,e),t.phase=`goHome`,e.pose=`walk`,e.walkTo(q(-30,30),97,()=>this.despawn(e),()=>this.despawn(e));return}let a=Math.min(e.cash+40,Math.round(i));n.earn(a,`tickets`,!0,new z(e.pos.x,2.2,e.pos.z)),n.today.guestsIn++,n.records.totalGuests++,i>r*.85&&this.addHappy(e,-6),i<r*.5&&this.addHappy(e,5),e.inPark=!0,e.enteredAt=G.time.total,K.emit(`guestEntered`,e),t.phase=`enter`,e.pose=`walk`,e.walkDirect([[tf(e.pos.x,-1.8,1.8),65.5],[q(-1.5,1.5),mg.z]],()=>this.clearTask(e))}}taskLeave(e,t){if(t.phase===`start`){if(t.phase=`toGate`,e.pose=`walk`,!e.inPark){e.walkTo(q(-30,30),97,()=>this.despawn(e),()=>this.despawn(e));return}e.walkTo(q(-1.5,1.5),mg.z,t=>{let n=G.park;n.today.guestsOut++,n.today.happySum+=e.happiness,n.today.happyN++,e.happiness>75?this.think(e,`happyLeave`,`good`):e.happiness<35&&this.think(e,`sadLeave`,`bad`),e.vip&&e.happiness>70&&(n.earn(400,`bonus`,!0,new z(e.pos.x,2.2,e.pos.z)),K.emit(`vipHappy`,e)),K.emit(`guestLeft`,e),e.inPark=!1,e.walkDirect([[tf(e.pos.x,-1.8,1.8),65.5],[q(-2,2),pg.z+1]],()=>{e.walkTo(q(-30,30),cf([81,90,97]),()=>this.despawn(e),()=>this.despawn(e))})},()=>{this.despawn(e)})}}taskSeat(e,t){let n=t.seat;if(t.phase===`start`){if(n.taken&&n.taken!==e)return this.fail(e);n.taken=e,t.phase=`walk`,e.pose=`walk`,e.walkTo(n.approach.x,n.approach.z,r=>{if(!r)return this.fail(e);t.phase=`sit`,t.t=0,e.pos.set(n.pos.x,0,n.pos.z),e.yaw=n.yaw,e.pose=n.pose,e.noSep=!0,n.pose===`lie`&&(e.posY=0)})}else if(t.phase===`sit`&&(e.pos.set(n.pos.x,0,n.pos.z),e.yaw=n.yaw,e.needs.energy=Math.min(1,e.needs.energy+.012*t.dtMin),e.carrying&&(e.poseExtra=1),t.t*2>(t.dur||30))){if(t.obj.def.facility===`sunbed`){let t=G.park.lists.all.some(t=>t.key===`umbrella`&&Math.hypot(t.cx-e.pos.x,t.cz-e.pos.z)<2.6);this.addHappy(e,t?7:4)}else this.addHappy(e,3);this.maybeTip(e,.08),this.clearTask(e)}}taskService(e,t,n){let r=t.obj,i=G.park;if(t.phase===`start`){if(!i.objects.has(r.id))return this.fail(e);if(t.kind===`toilet`&&r.dirt>85)return this.fail(e,`toiletDirty`);t.phase=`walk`,e.pose=`walk`;let n=r.points.service;e.walkTo(n.x+r.points.queueDir.x*2,n.z+r.points.queueDir.z*2,n=>{if(!n)return this.fail(e);r.queue.push(e),t.phase=`queue`,t.t=0})}else if(t.phase===`queue`){let i=r.queue.indexOf(e);if(i<0)return this.fail(e);let a=r.points.service,o=r.points.queueDir,s=a.x+o.x*i*.8,c=a.z+o.z*i*.8,l=Math.hypot(s-e.pos.x,c-e.pos.z);if(l>.08){e.pose=`walk`;let t=Math.min(l,e.speed*n);e.pos.x+=(s-e.pos.x)/l*t,e.pos.z+=(c-e.pos.z)/l*t,e.faceTo(s,c,n)}else e.pose=`idle`,e.faceTo(a.x-o.x,a.z-o.z,n);if(t.t>40&&i>1)return this.think(e,`queueLong`,`bad`),this.addHappy(e,-6),this.fail(e);let u=t.kind===`toilet`?2:t.kind===`shower`?3:1;if(i<u&&l<.3&&r.users.size<u){if(r.queue.splice(i,1),r.users.add(e),t.phase=`use`,t.t=0,t.kind===`toilet`){let t=r.points.doors[Math.floor(Math.random()*2)];e.walkDirect([t],()=>{e.hidden=!0}),e.pose=`walk`}if(t.kind===`shower`){let n=r.points.spots.find(e=>!e.taken);n&&(n.taken=e,t.spot=n,e.walkDirect([n.pos],()=>{e.yaw=n.yaw,e.pose=`idle`}),e.pose=`walk`)}}}else t.phase===`use`&&(t.kind===`shop`||t.kind===`lockers`?(e.pose=`idle`,e.faceTo(r.points.clerk.x,r.points.clerk.z,n),t.t>(r.def.service?r.def.service[1]:2)&&this.completeService(e,t)):t.kind===`toilet`?t.t>4&&(e.hidden=!1,e.needs.bladder=0,r.dirt=Math.min(100,r.dirt+3),this.completeService(e,t)):t.kind===`shower`&&(t.spot&&Math.random()<.7&&G.effects.spray(t.spot.head.x,t.spot.head.y,t.spot.head.z,0,-2.5,0,.08,.5),e.wet=1,t.t>3.5&&(this.addHappy(e,2),this.completeService(e,t))))}completeService(e,t){let n=t.obj,r=G.park;if(n.users.delete(e),t.kind===`shop`){let t=n.def.shop,i=Math.round(t.price*r.foodMult*(e.vip?1.5:1)),a=t.price*1.35;if(e.cash>=i&&!(i>a*1.6&&lf(.7))){if(e.cash-=i,e.spent+=i,r.earn(i,t.type===`souvenir`?`shops`:`food`,!0,new z(n.points.service.x,2.4,n.points.service.z)),r.today.sales++,n.sales++,n.revenue+=i,t.needs)for(let[n,r]of Object.entries(t.needs))e.needs[n]=tf(e.needs[n]+r,0,1);this.addHappy(e,(t.happy||2)-(i>a?5:0)),i>a?this.think(e,`foodPricey`,`bad`):lf(.3)&&this.think(e,`foodGood`,`good`),t.type!==`souvenir`&&(e.carrying=t.type,e.eatT=0,e.litter=1),K.emit(`sale`,{obj:n,guest:e,price:i})}else this.think(e,`foodPricey`,`bad`),this.addHappy(e,-5)}else t.kind===`lockers`?e.cash>=3&&(e.cash-=3,r.earn(3,`lockers`,!0,new z(n.points.service.x,2.4,n.points.service.z)),this.addHappy(e,3)):t.kind===`toilet`&&(this.addHappy(e,2),n.dirt>60&&(this.think(e,`toiletDirty`,`bad`),this.addHappy(e,-8)));this.clearTask(e)}swimY(e,t,n,r){let i=G.park.poolAt(n,r),a=i?i.floorY:-1.2,o=t.waveAt?t.waveAt(n,r):0,s=a+.02,c=Xf+o-1.08*e.scale;return{y:Math.max(s,c),deep:c>s+.05,floor:a}}taskPool(e,t,n){let r=t.obj,i=G.park;if(!i.objects.has(r.id))return this.fail(e);if(t.phase===`start`){let n=i.poolEdgePoint(r,e.pos.x,e.pos.z);if(!n)return this.fail(e);t.edge=n,t.phase=`walk`,e.pose=`walk`,e.walkTo(n.x,n.z,n=>{if(!n)return this.fail(e);t.phase=`enter`,t.t=0,t.from=e.pos.clone(),t.to=i.waterEntryFrom(r,t.edge),r.pool.swimmers.add(e),e.noSep=!0,r.quality<40&&(this.think(e,`poolDirty`,`bad`),this.addHappy(e,-6))})}else if(t.phase===`enter`){let i=Math.min(1,t.t/1.2);e.pos.lerpVectors(t.from,t.to,i);let a=this.swimY(e,r,e.pos.x,e.pos.z);e.posY=nf(.03,a.y,Math.min(1,i*1.4)),e.faceTo(t.to.x,t.to.z,n),e.pose=i<.5?`jump`:a.deep?`swim`:`walk`,i>=1&&(G.effects.splash(e.pos.x,Xf,e.pos.z,e.kid?.6:.9),G.audio&&G.audio.play(`splash`,{pos:e.pos,vol:.5}),G.park.today.swims++,t.phase=`swim`,t.t=0,t.target=null,e.wet=1)}else if(t.phase===`swim`){if((!t.target||Math.hypot(t.target.x-e.pos.x,t.target.z-e.pos.z)<.3)&&(t.target=i.randomSwimPoint(r,e.kid),t.pause=lf(.3)?q(1,4):0,t.target||(t.target=e.pos.clone())),t.pause>0)t.pause-=n;else{let i=t.target.x-e.pos.x,a=t.target.z-e.pos.z,o=Math.hypot(i,a),s=(r.pool.jacuzzi?.15:.62)*n;o>.01&&(e.pos.x+=i/o*Math.min(s,o),e.pos.z+=a/o*Math.min(s,o),e.faceTo(t.target.x,t.target.z,n*.6))}let a=this.swimY(e,r,e.pos.x,e.pos.z);if(e.posY=a.y,e.pose=r.pool.jacuzzi?`sit`:a.deep?t.pause>0?`tread`:`swim`:t.pause>0?`idle`:`walk`,r.pool.jacuzzi&&(e.posY=-.95*e.scale+.45*e.scale-.45+.02,e.needs.energy=Math.min(1,e.needs.energy+.02*t.dtMin)),e.needs.fun=Math.min(1,e.needs.fun+.01*t.dtMin),e.needs.energy=Math.max(0,e.needs.energy-(r.pool.jacuzzi?0:.002)*t.dtMin),a.deep&&a.floor<-1.3&&!r.pool.jacuzzi&&Math.random()<12e-5*t.dtMin*(e.kid?2.2:1)&&G.time.minutes>570)return this.startDrowning(e,r);if(G.player&&Math.random()<.02*n&&G.effects.splash(e.pos.x,Xf,e.pos.z,.25),t.t*2>(t.dur||40)){t.phase=`toExit`,t.t=0;let n=i.poolEdgePoint(r,e.pos.x,e.pos.z);if(!n){t.phase=`exit`,t.edge=e.pos.clone(),t.from=e.pos.clone();return}t.edge=n,t.exitWater=i.waterEntryFrom(r,n)}}else if(t.phase===`toExit`){let i=t.exitWater.x-e.pos.x,a=t.exitWater.z-e.pos.z,o=Math.hypot(i,a),s=.75*n;o>.05&&(e.pos.x+=i/o*Math.min(s,o),e.pos.z+=a/o*Math.min(s,o),e.faceTo(t.exitWater.x,t.exitWater.z,n));let c=this.swimY(e,r,e.pos.x,e.pos.z);e.posY=c.y,e.pose=c.deep?`swim`:`walk`,(o<=.05||t.t>25)&&(t.phase=`exit`,t.t=0,t.from=e.pos.clone())}else if(t.phase===`exit`){let n=Math.min(1,t.t/1);if(e.pos.lerpVectors(t.from,t.edge,n),e.posY=nf(e.posY,.03,n),e.pose=`climb`,n>=1){r.pool.swimmers.delete(e);let t=r.quality;t>75?(this.addHappy(e,6+r.def.fun*6),lf(.25)&&this.think(e,`poolClean`,`good`)):t<45?(this.addHappy(e,-4),this.think(e,`poolDirty`,`bad`)):this.addHappy(e,3),e.visited.add(r.id),this.maybeTip(e,.2),K.emit(`swam`,{guest:e,obj:r}),this.clearTask(e)}}}startDrowning(e,t){this.clearTask(e),e.task={type:`drown`,obj:t,phase:`drown`,t:0,real:0},t.pool.swimmers.add(e),e.noSep=!0,e.setIcon(`iconHelp`);let n={guest:e,obj:t,t:0,timeout:40,handledBy:null};this.emergencies.push(n),e.emergency=n,K.emit(`drowning`,n)}taskDrown(e,t,n){e.posY=this.swimY(e,t.obj,e.pos.x,e.pos.z).y+.12,e.pose=`drown`,Math.random()<.25&&G.effects.splash(e.pos.x,Xf,e.pos.z,.18)}rescue(e,t){let n=e.emergency;if(!n)return;let r=this.emergencies.indexOf(n);r>=0&&this.emergencies.splice(r,1),e.emergency=null,this.think(e,`rescued`,`good`),e.happiness=Math.max(40,e.happiness-10);let i=e.task&&e.task.obj;if(this.clearTask(e),i){let t=G.park.poolEdgePoint(i,e.pos.x,e.pos.z);t&&e.pos.copy(t)}e.posY=0,e.needs.energy=Math.min(e.needs.energy,.3),K.emit(`rescued`,{guest:e,by:t})}failRescue(e){let t=e.guest,n=this.emergencies.indexOf(e);n>=0&&this.emergencies.splice(n,1),t.emergency=null,K.emit(`rescueFailed`,e);for(let e of this.list)Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<25&&this.addHappy(e,-12);this.despawn(t)}taskSlide(e,t,n){let r=t.obj,i=G.park;if(!i.objects.has(r.id))return this.fail(e);let a=r.slide;if(r.broken&&(t.phase===`start`||t.phase===`walk`||t.phase===`queue`))return this.fail(e,`broken`);if(t.phase===`start`){t.phase=`walk`,e.pose=`walk`;let n=a.entrance,i=a.queueDir,o=r.queue.length;e.walkTo(n.x+i.x*(o*.75+.5),n.z+i.z*(o*.75+.5),n=>{if(!n)return this.fail(e);if(r.queue.length>12)return this.think(e,`queueLong`,`bad`),this.addHappy(e,-4),this.fail(e);r.queue.push(e),t.phase=`queue`,t.t=0})}else if(t.phase===`queue`){let i=r.queue.indexOf(e);if(i<0)return this.fail(e);let o=a.entrance,s=a.queueDir,c=o.x+s.x*(i*.75+.3),l=o.z+s.z*(i*.75+.3),u=Math.hypot(c-e.pos.x,l-e.pos.z);if(u>.08){e.pose=`walk`;let t=Math.min(u,e.speed*n);e.pos.x+=(c-e.pos.x)/u*t,e.pos.z+=(l-e.pos.z)/u*t,e.faceTo(c,l,n)}else e.pose=`idle`,e.faceTo(o.x,o.z,n);if(t.t>70)return this.think(e,`queueLong`,`bad`),this.addHappy(e,-8),this.fail(e);let d=G.time.sim;i===0&&u<.4&&d>=(a.nextClimb||0)&&(r.queue.shift(),a.nextClimb=d+2.6,t.phase=`climb`,t.t=0,t.ci=0,e.noSep=!0,t.climb=[e.pos.clone(),...a.climb])}else if(t.phase===`climb`){e.pose=`climb`;let i=t.climb,o=1.15*n;for(;o>0&&t.ci<i.length-1;){let r=e.pos,a=i[t.ci+1],s=Math.hypot(a.x-r.x,a.y-e.posY,a.z-r.z);if(s<=o)e.pos.set(a.x,0,a.z),e.posY=a.y,o-=s,t.ci++;else{let t=o/s;e.pos.x+=(a.x-r.x)*t,e.pos.z+=(a.z-r.z)*t,e.posY+=(a.y-e.posY)*t,e.faceTo(a.x,a.z,n*2),o=0}}if(t.ci>=i.length-1){let n=a.design.lanes.length;t.lane=n>1?a.lane=(a.lane+1)%n:0,t.phase=`ride`,t.t=0,t.fi=0,e.customOrient=!0,r.users.add(e),e.pose=`slide`}}else if(t.phase===`ride`){let n=a.design.timelines[t.lane],o=Math.min(n.frames.length-1,Math.floor(t.t/n.dt)),s=n.frames[o],c=a.design.lanes[t.lane];xh(c,s.s,hg);let l=a.def.R,u=s.bank,d=Math.cos(u),f=Math.sin(u);vg.copy(hg.up).multiplyScalar(d).addScaledVector(hg.side,f);let p=hg.pos.clone().addScaledVector(hg.up,l).addScaledVector(hg.up,-l*d).addScaledVector(hg.side,-l*f);if(p.applyMatrix4(a.matrix),vg.transformDirection(a.matrix),yg.copy(hg.tan).transformDirection(a.matrix),_g.crossVectors(vg,yg).normalize(),yg.crossVectors(_g,vg).normalize(),gg.makeBasis(_g,vg,yg),e.mesh.quaternion.setFromRotationMatrix(gg),e.mesh.position.copy(p),e.pos.set(p.x,0,p.z),e.posY=p.y,o>=n.frames.length-1){e.customOrient=!1,r.users.delete(e);let n=yg.clone();e.pos.x+=n.x*1.6,e.pos.z+=n.z*1.6,G.effects.splash(e.pos.x,Xf,e.pos.z,1.5),G.audio&&G.audio.play(`splash`,{pos:e.pos,vol:.9}),t.phase=`swimOut`,t.t=0,r.pool.swimmers.add(e),e.yaw=Math.atan2(n.x,n.z),e.wet=1,r.condition-=q(.4,.9),r.visits++,i.today.rides++,e.rides++;let o=a.def.fun;e.needs.fun=Math.min(1,e.needs.fun+.3*o),e.needs.energy=Math.max(0,e.needs.energy-.04);let s=r.quality<40?-5:0;this.addHappy(e,8+o*10+(e.thrill-a.def.thrill*.5)*6+s),this.think(e,o>.7?`slideGreat`:`slideOk`,`good`),e.visited.add(r.id),K.emit(`ride`,{guest:e,obj:r}),r.condition<=0&&(r.condition=0,r.broken=!0,K.emit(`broken`,r))}}else if(t.phase===`swimOut`){let i=a.exitWater,o=i.x-e.pos.x,s=i.z-e.pos.z,c=Math.hypot(o,s),l=.85*n;c>.05&&(e.pos.x+=o/c*Math.min(l,c),e.pos.z+=s/c*Math.min(l,c),e.faceTo(i.x,i.z,n));let u=this.swimY(e,r,e.pos.x,e.pos.z);e.posY=t.t<.6?nf(u.y-.6,u.y,t.t/.6):u.y,e.pose=u.deep?`swim`:`walk`,(c<=.05||t.t>15)&&(t.phase=`climbOut`,t.t=0,t.from=e.pos.clone())}else if(t.phase===`climbOut`){let n=Math.min(1,t.t/1);e.pos.lerpVectors(t.from,a.exit,n),e.posY=nf(e.posY,.03,n),e.pose=`climb`,n>=1&&(r.pool.swimmers.delete(e),e.pose=`cheer`,this.maybeTip(e,.3),this.clearTask(e),e.decideCD=1.2,e.pose=`cheer`)}}maybeTip(e,t){if(e.happiness<72||!lf(t*(e.vip?2.5:1)))return;let n=e.vip?Math.round(q(20,50)):Math.round(q(2,9));e.cash<n||(e.cash-=n,G.effects.addCoin(e.pos.x+q(-.4,.4),1.4,e.pos.z+q(-.4,.4),n),K.emit(`tipDropped`,{guest:e,value:n}))}dropLitter(e){e.litter&&(e.litter=0,G.park.grid.isWalkable(e.pos.x,e.pos.z)&&G.effects.addTrash(e.pos.x+q(-.3,.3),e.pos.z+q(-.3,.3)))}update(e,t,n){let r=G.park,i=G.time.minutes;if(i>=540&&i<1200){let e=i/60,t=tf((e-9)/2.5,0,1)*tf((19.5-e)/3,0,1)*(e>11.5&&e<16?1.15:1),a=.45+r.rating/5*1.25,o=0;for(let e of r.lists.pools)o+=e.pool.capacity*.6;for(let e of r.lists.slides)o+=(e.def.appeal||5)*1.2;o+=r.lists.shops.length*1.5+r.lists.decor.length*.15;let s=tf(o/22,.5,4.5),c=G.env?G.env.weatherInfo.arrive:1,l=r.marketing>0?1.6:1,u=.16*t*a*s*c*l;this.spawnAcc+=u*n;let d=this.list.length;for(;this.spawnAcc>=1;)--this.spawnAcc,d<this.maxGuests&&this.spawn(!1)}this.list.length>r.records.maxGuests&&(r.records.maxGuests=this.list.length),this.list.length>r.today.peakGuests&&(r.today.peakGuests=this.list.length),og(10);let a=G.camera.position;for(let t=this.emergencies.length-1;t>=0;t--){let n=this.emergencies[t];n.t+=e,!n.handledBy&&n.t>n.timeout&&this.failRescue(n)}let o=this.list.length;for(let i=0;i<o;i++){let o=this.list[i];if(o&&!o.dead){if(o.inPark){let e=o.needs,t=G.env?G.env.weatherInfo.thirst:1;e.hunger=Math.min(1,e.hunger+.0022*n),e.thirst=Math.min(1,e.thirst+.0028*n*t),e.bladder=Math.min(1,e.bladder+.0021*n),e.energy=Math.max(0,e.energy-.0013*n),e.fun=Math.max(0,e.fun-.002*n);let i=.02;if(e.hunger>.85&&(i-=.25),e.thirst>.85&&(i-=.3),e.bladder>.9&&(i-=.35),e.energy<.15&&(i-=.15),e.fun<.1&&(i-=.08),o.happiness=tf(o.happiness+i*n,0,100),o.wet=Math.max(0,o.wet-.01*n),o.person.uni.uWet.value=o.wet,o.carrying&&(o.eatT+=n,o.task&&o.task.type===`seat`||(o.poseExtra=0),o.eatT>16&&(o.carrying=null,o.litter))){let e=r.lists.fac.bin||[],t=null,n=14;for(let r of e){let e=Math.hypot(r.cx-o.pos.x,r.cz-o.pos.z);e<n&&(n=e,t=r)}t&&(!o.task||o.task.type===`wander`)?this.setTask(o,{type:`bin`,obj:t}):t&&lf(.75)?o.litter=0:lf(.6)?this.dropLitter(o):o.litter=0}if(o.envT-=n,o.envT<=0){o.envT=q(8,14);let e=G.effects.trashNear(o.pos.x,o.pos.z,7);e>2&&(this.addHappy(o,-e*.8),lf(.3)&&this.think(o,`trash`,`bad`));let t=r.appealAt(o.pos.x,o.pos.z);this.addHappy(o,Math.min(3,t*.08)),G.env&&G.env.weather===`rain`&&!(o.task&&o.task.type===`pool`)&&(this.addHappy(o,-2),lf(.15)&&this.think(o,`rain`,`bad`)),this.list.length>40+r.lists.pools.reduce((e,t)=>e+t.pool.capacity,0)*1.4+r.lists.slides.length*8&&(this.addHappy(o,-2),lf(.1)&&this.think(o,`crowded`,`bad`)),o.happiness<25&&!o.vip?o.setIcon(o.iconName===`iconHelp`?`iconHelp`:`iconAngry`):o.iconName===`iconAngry`&&o.setIcon(null)}}o.task?(o.task.dtMin=n,this.runTask(o,t)):o.inPark&&(o.decideCD-=t,o.pose===`cheer`&&o.decideCD>0||(o.pose=`idle`),o.decideCD<=0&&!o.pathPending&&(o.decideCD=q(.4,1.2),this.decide(o))),o.dead||(o.path&&(o.stepPath(t),o.pose!==`walk`&&o.pose!==`run`&&o.pose!==`climb`&&!o.hidden&&(o.pose=`walk`)),o.carrying&&o.pose===`idle`&&(o.pose=`eat`),o.render(e,t,a))}}fg(this.list,t)}pick(e,t=12){let n=null,r=t,i=new z;for(let t of this.list){if(t.hidden)continue;i.set(t.pos.x,t.posY+1.1*t.scale,t.pos.z),t.customOrient&&i.copy(t.mesh.position);let a=e.origin.distanceTo(i);a>r||e.distanceSqToPoint(i)<.1444&&(r=a,n=t)}return n}activityText(e){let t=e.task;if(!t)return`Deciding what to do`;switch(t.type){case`arrive`:return`Arriving`;case`leave`:return`Heading home`;case`wander`:return`Strolling around`;case`view`:return`Admiring the fountain`;case`seat`:return t.seat&&t.seat.pose===`lie`?`Sunbathing`:`Resting`;case`service`:return t.kind===`toilet`?`Using the restroom`:t.kind===`shower`?`Showering`:t.kind===`lockers`?`Renting a locker`:`Buying from `+t.obj.def.name;case`pool`:return(t.obj.pool.jacuzzi?`Relaxing in the `:`Swimming in the `)+t.obj.def.name;case`slide`:return t.phase===`queue`?`Queueing for `+t.obj.def.name:t.phase===`ride`?`Riding `+t.obj.def.name+`!`:`Going to `+t.obj.def.name;case`drown`:return`DROWNING! Needs help!`;case`bin`:return`Throwing away trash`}return``}},Cg=class{constructor(){this.list=[]}spawn(e){let t=Ih[e],n=eg({kid:!1,suit:`shirt`,suitColor:t.color,accent:1780298,staff:!0});n.cap=e===`lifeguard`||e===`janitor`,n.colors.hair=n.colors.hair;let r=new ug(n);r.type=e,r.speed=1.45;let i=G.park.grid.randomParkPoint()||[6,50];return r.pos.set(i[0],0,Math.min(i[1],54)),G.park.grid.isWalkable(r.pos.x,r.pos.z)||r.pos.set(i[0],0,i[1]),r.job=null,r.cd=q(.2,1),r.name=t.name,this.list.push(r),r}sync(){let e=G.park.staff;for(let t of Object.keys(Ih)){let n=this.list.filter(e=>e.type===t);for(let r=n.length;r<(e[t]||0);r++)this.spawn(t);for(let r=e[t]||0;r<n.length;r++)this.remove(n[r])}}remove(e){this.endJob(e),e.dispose();let t=this.list.indexOf(e);t>=0&&this.list.splice(t,1)}endJob(e){let t=e.job;t&&(t.trash&&(t.trash.claimed=null),t.obj&&t.obj.servicedBy===e&&(t.obj.servicedBy=null),t.tower&&t.tower.points.guard===e&&(t.tower.points.guard=null),t.em&&t.em.handledBy===e&&(t.em.handledBy=null)),e.job=null,e.stop(),e.posY=0,e.noSep=!1}update(e,t){let n=G.camera.position;for(let r of this.list)r.cd-=t,!r.job&&r.cd<=0&&!r.pathPending&&(r.cd=q(.6,1.4),this.findJob(r)),r.job&&this.runJob(r,t),r.path&&(r.stepPath(t),r.pose!==`run`&&(r.pose=`walk`)),r.render(e,t,n);fg(this.list,t)}findJob(e){let t=G.park,n=G.effects;switch(e.type){case`janitor`:{let r=n.nearestTrash(e.pos.x,e.pos.z,70,!0);if(r){r.claimed=e,e.job={kind:`trash`,trash:r,phase:`go`,t:0},e.walkTo(r.x,r.z,t=>{t?(e.job.phase=`pick`,e.job.t=0,e.pose=`bend`):(r.claimed=null,this.endJob(e))});return}let i=(t.lists.fac.toilet||[]).filter(e=>e.dirt>25&&!e.servicedBy).sort((e,t)=>t.dirt-e.dirt);if(i.length){let t=i[0];t.servicedBy=e,e.job={kind:`toilet`,obj:t,phase:`go`,t:0};let n=t.points.service;e.walkTo(n.x,n.z,t=>{t?(e.job.phase=`work`,e.job.t=0,e.pose=`work`):this.endJob(e)});return}this.patrol(e);return}case`lifeguard`:{let n=G.guests.emergencies.find(t=>!t.handledBy&&Math.hypot(t.obj.cx-e.pos.x,t.obj.cz-e.pos.z)<45);if(n)return this.respond(e,n);let r=(t.lists.fac.lifeguard||[]).find(t=>!t.points.guard||t.points.guard===e);if(r){r.points.guard=e,e.job={kind:`tower`,tower:r,phase:`go`,t:0};let t=r.points.ladder;e.walkTo(t.x,t.z,t=>{t?(e.job.phase=`climb`,e.job.t=0,e.job.from=e.pos.clone()):this.endJob(e)});return}this.patrol(e,!0);return}case`pooltech`:{let n=t.lists.pools.concat(t.lists.slides).filter(e=>e.pool&&e.quality<82&&!e.servicedBy).sort((e,t)=>e.quality-t.quality);if(n.length){let r=n[0],i=t.poolEdgePoint(r,e.pos.x,e.pos.z);if(i){r.servicedBy=e,e.job={kind:`pool`,obj:r,phase:`go`,t:0},e.walkTo(i.x,i.z,t=>{t?(e.job.phase=`work`,e.job.t=0,e.pose=`work`):this.endJob(e)});return}}this.patrol(e);return}case`mechanic`:{let n=t.lists.slides.filter(e=>(e.broken||e.condition<65)&&!e.servicedBy).sort((e,t)=>t.broken-e.broken||e.condition-t.condition);if(n.length){let t=n[0];t.servicedBy=e,e.job={kind:`repair`,obj:t,phase:`go`,t:0};let r=t.slide.entrance;e.walkTo(r.x-t.slide.queueDir.z*1.2,r.z+t.slide.queueDir.x*1.2,t=>{t?(e.job.phase=`work`,e.job.t=0,e.pose=`work`):this.endJob(e)});return}this.patrol(e)}}}patrol(e,t=!1){let n,r=G.park.lists.pools;if(t&&r.length){let e=cf(r);n=G.park.poolEdgePoint(e,e.cx+q(-8,8),e.cz+q(-8,8)),n=n?[n.x,n.z]:null}else n=G.park.grid.randomParkPoint();n&&(e.job={kind:`patrol`,phase:`go`,t:0},e.walkTo(n[0],n[1],()=>{e.job&&e.job.kind===`patrol`&&(e.job.phase=`wait`,e.job.t=0,e.pose=`idle`)}))}respond(e,t){this.endJob(e),t.handledBy=e,e.job={kind:`rescue`,em:t,phase:`run`,t:0},e.pose=`run`;let n=t.guest,r=G.park.poolEdgePoint(t.obj,n.pos.x,n.pos.z);r?(G.audio&&G.audio.play(`whistle`,{pos:e.pos,vol:.8}),e.speed=3.6,e.walkTo(r.x,r.z,n=>{!n||!e.job?(t.handledBy=null,e.speed=1.45,this.endJob(e)):(e.job.phase=`swim`,e.job.t=0,G.effects.splash(e.pos.x,Xf,e.pos.z,1.2),G.audio&&G.audio.play(`splash`,{pos:e.pos,vol:.8}),e.noSep=!0)})):(t.handledBy=null,this.endJob(e))}runJob(e,t){let n=e.job;switch(n.t+=t,n.kind){case`trash`:n.phase===`pick`?(e.pose=`bend`,n.t>1.1&&(G.effects.removeTrash(n.trash)&&K.emit(`staffTrash`,e),this.endJob(e))):G.effects.trash.includes(n.trash)||this.endJob(e);break;case`toilet`:n.phase===`work`&&(e.faceTo(n.obj.cx,n.obj.cz,t),n.t>4&&(n.obj.dirt=0,this.endJob(e)));break;case`pool`:if(n.phase===`work`){e.faceTo(n.obj.cx,n.obj.cz,t);let r=n.obj;r.quality=Math.min(100,r.quality+3.2*t),Math.random()<t*2&&G.park.refreshPoolLook(r),(n.t>9||r.quality>=100)&&(G.park.refreshPoolLook(r),this.endJob(e))}break;case`repair`:if(n.phase===`work`){let r=n.obj;e.faceTo(r.slide.entrance.x,r.slide.entrance.z,t),Math.random()<t*6&&G.effects.sparkle(e.pos.x+Math.sin(e.yaw)*.6,1,e.pos.z+Math.cos(e.yaw)*.6,16760928,2),n.t>6&&(r.condition=100,r.broken&&(r.broken=!1,K.emit(`repaired`,{obj:r,by:`staff`})),this.endJob(e))}break;case`tower`:{let t=n.tower;if(!G.park.objects.has(t.id)){this.endJob(e);break}if(n.phase===`climb`){let r=Math.min(1,n.t/1.5);e.pos.lerpVectors(n.from,t.points.seat,r),e.posY=nf(0,t.points.seat.y,r),e.pose=`climb`,r>=1&&(n.phase=`sit`,e.yaw=t.yaw,e.noSep=!0)}else if(n.phase===`sit`){e.pos.set(t.points.seat.x,0,t.points.seat.z),e.posY=t.points.seat.y-.52,e.yaw=t.yaw,e.pose=`sit`;let n=G.guests.emergencies.find(e=>!e.handledBy&&Math.hypot(e.obj.cx-t.cx,e.obj.cz-t.cz)<30);n&&(e.posY=0,e.pos.copy(t.points.ladder),this.respond(e,n))}break}case`rescue`:{let r=n.em,i=r.guest;if(i.dead||!i.emergency){e.speed=1.45,this.endJob(e);break}if(n.phase===`swim`){let a=i.pos.x-e.pos.x,o=i.pos.z-e.pos.z,s=Math.hypot(a,o),c=1.8*t;s>.6&&(e.pos.x+=a/s*c,e.pos.z+=o/s*c,e.faceTo(i.pos.x,i.pos.z,t));let l=G.park.poolAt(e.pos.x,e.pos.z);if(e.posY=Math.max(l?l.floorY:-1,Xf-1.05),e.pose=`swim`,s<=.6||n.t>20){G.guests.rescue(i,`lifeguard`),n.phase=`out`,n.t=0;let t=G.park.poolEdgePoint(r.obj,e.pos.x,e.pos.z);n.from=e.pos.clone(),n.edge=t||e.pos.clone()}}else if(n.phase===`out`){let t=Math.min(1,n.t/1.5);e.pos.lerpVectors(n.from,n.edge,t),e.posY=nf(e.posY,0,t),e.pose=`climb`,t>=1&&(e.speed=1.45,e.noSep=!1,this.endJob(e),e.cd=2)}break}case`patrol`:n.phase===`wait`&&n.t>q(2,6)&&this.endJob(e)}}},wg=1.65,Tg=.3,Eg={pos:new z,tan:new z,up:new z,side:new z},Dg=new z,Og=new z,kg=new B,Ag=[{key:`hand`,name:`Grabber`,icon:`✋`,hint:`Pick up litter & interact`},{key:`skimmer`,name:`Skimmer`,icon:`🥅`,hint:`Hold to clean pool water`},{key:`wrench`,name:`Wrench`,icon:`🔧`,hint:`Hold to repair slides`}],jg=class{constructor(e){this.cam=e,this.pos=new z(0,0,59),this.vel=new z,this.yaw=0,this.pitch=-.05,this.onGround=!0,this.mode=`walk`,this.tool=0,this.ride=null,this.climbOut=null,this.bob=0,this.bobAmt=0,this.stepDist=0,this.underwater=!1,this.waterY=-99,this.inWater=!1,this.hold={kind:null,t:0},this.aim=null,this.confirmBuy=null,this.lookOff={yaw:0,pitch:0},this.ray=new Fc,this.fovKick=0,this._buildViewmodels()}_buildViewmodels(){let e=new Vn;G.vmScene.add(e),this.vmRoot=e;let t=new Qp;t.cyl(.012,.012,.9,X.steel,0,0,-.45,8,Math.PI/2,0,0),t.box(.04,.12,.05,X.blackPlastic,0,-.06,.02),t.box(.03,.02,.09,Z(16742938,.5),.012,-.012,-.94),t.box(.03,.02,.09,Z(16742938,.5),-.012,-.012,-.94);let n=em(t.build());t=new Qp,t.cyl(.014,.014,2,X.steel,0,0,-1,8,Math.PI/2,0,0),t.box(.035,.035,.18,Z(2006015,.4),0,0,0),t.add(new hs(.2,.012,6,24),cp(2006015,.4),0,0,-2.18,Math.PI/2,0,0);let r=new U({color:16777215,transparent:!0,opacity:.55,side:2,roughness:.9});t.add(new Va(.2,.22,16,1,!0),r,0,-.11,-2.18,Math.PI,0,0);let i=em(t.build());t=new Qp,t.box(.045,.02,.32,X.chrome,0,0,-.16),t.add(new hs(.045,.018,6,12,Math.PI*1.5),X.chrome,0,0,-.34,Math.PI/2,0,Math.PI*.75),t.box(.05,.03,.12,Z(14170682,.5),0,0,0);let a=em(t.build());this.vmTools=[n,i,a];for(let t of this.vmTools)t.visible=!1,e.add(t),t.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1)});t=new Qp,t.add(new Ra(.045,.32,4,8),Z(15250575,.6),0,0,.12,Math.PI/2,0,0),this.vmArm=em(t.build()),e.add(this.vmArm),this.setTool(0)}setTool(e){this.tool=(e+Ag.length)%Ag.length,this.vmTools.forEach((e,t)=>e.visible=t===this.tool),this.toolAnim=0,this.hold={kind:null,t:0},K.emit(`tool`,this.tool)}get forward(){return Dg.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}eyePos(e=new z){return e.copy(this.cam.position)}blockedAt(e,t,n){let r=G.park.grid,i=r.idxAt(e,t);return!!(i<0||!r.land[i]||r.fixed[i]||r.base[i]&&!r.bwalk[i]&&!r.water[i]||r.prop[i]&&r.pblock[i]||n<-.18&&!r.water[i])}collides(e,t,n){let r=Tg;return this.blockedAt(e-r,t-r,n)||this.blockedAt(e+r,t-r,n)||this.blockedAt(e-r,t+r,n)||this.blockedAt(e+r,t+r,n)}groundAt(e,t){let n=G.park.poolAt(e,t);if(n)return{y:n.floorY,pool:n};let r=G.park.grid,i=r.idxAt(e,t),a=0;return i>=0&&(r.deck[i]||r.floor[i])&&(a=.04),t>63&&t<112&&Math.abs(e)<52&&(a=.05),{y:a,pool:null}}teleport(e,t,n=0){this.pos.set(e,0,t),this.vel.set(0,0,0),this.yaw=n,this.ride=null,this.climbOut=null}update(e,t){let n=G.settings,r=.0021*n.sensitivity,i=t.mouse.dx+t.touch.look.dx*.5,a=t.mouse.dy+t.touch.look.dy*.5;if(n.invertY&&(a=-a),(t.locked||G.isTouch)&&!G.ui.blocking&&(this.ride&&this.ride.phase===`ride`?(this.lookOff.yaw=tf(this.lookOff.yaw-i*r,-1.3,1.3),this.lookOff.pitch=tf(this.lookOff.pitch-a*r,-.7,.7)):(this.yaw-=i*r,this.pitch=tf(this.pitch-a*r,-1.52,1.52))),this.vmSway={x:tf(i*4e-4,-.03,.03),y:tf(a*4e-4,-.03,.03)},this.ride){this.updateRide(e,t),this.updateViewmodel(e,0);return}if(this.climbOut){this.updateClimbOut(e),this.updateCamera(e),this.updateViewmodel(e,0);return}let o=!G.ui.blocking,s=0,c=0;o&&((t.down(`KeyW`)||t.down(`ArrowUp`))&&(c+=1),(t.down(`KeyS`)||t.down(`ArrowDown`))&&--c,(t.down(`KeyA`)||t.down(`ArrowLeft`))&&--s,(t.down(`KeyD`)||t.down(`ArrowRight`))&&(s+=1),s+=t.touch.move.x,c+=t.touch.move.y);let l=Math.hypot(s,c);l>1&&(s/=l,c/=l);let u=new z(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),d=new z(Math.cos(this.yaw),0,-Math.sin(this.yaw)),f=u.multiplyScalar(c).addScaledVector(d,s),p=o&&(t.down(`ShiftLeft`)||t.down(`ShiftRight`)),m=o&&(t.down(`Space`)||t.tdown(`jump`)),h=o&&(t.hit(`Space`)||t.thit(`jump`)),g=o&&(t.down(`KeyC`)||t.down(`ControlLeft`)),_=this.groundAt(this.pos.x,this.pos.z),v=_.pool,y=v&&v.obj.waveAt?v.obj.waveAt(this.pos.x,this.pos.z):0,b=v?Xf+y:-99;this.waterY=b;let x=v?b-_.y:0,S=v&&x>1.2&&this.pos.y<b-1,C=v&&!S&&this.pos.y<b-.1,w=this.inWater;this.inWater=!!v&&this.pos.y<b-.15,this.inWater&&!w&&this.vel.y<-2&&(G.effects.splash(this.pos.x,b,this.pos.z,1.3),G.audio.play(`splashBig`,{vol:.9}),K.emit(`playerSplash`));let T=p?7.2:4.3;if(S?T=p?3.8:2.6:C&&(T=p?3:2.2),this.mode=S?`swim`:`walk`,S){let t=3.5,n=this.pos.y+wg<b-.05,r=f.clone();n&&c!==0&&(r.y=Math.sin(this.pitch)*c*.8),this.vel.x=af(this.vel.x,r.x*T,t,e),this.vel.z=af(this.vel.z,r.z*T,t,e);let i=b-wg+.18;g?this.vel.y=af(this.vel.y,-2.4,3,e):m?this.vel.y=af(this.vel.y,2.2,3,e):n&&r.y?this.vel.y=af(this.vel.y,r.y*T,3,e):this.vel.y=af(this.vel.y,(i-this.pos.y)*2.5,4,e),this.pos.y>i+.15&&(this.vel.y-=9*e),h&&this.pos.y>b-wg-.3&&this.tryClimbOut(),Math.random()<e*3*l&&G.effects.splash(this.pos.x+q(-.3,.3),b,this.pos.z+q(-.3,.3),.12)}else{let t=this.onGround?14:3;this.vel.x=af(this.vel.x,f.x*T,t,e),this.vel.z=af(this.vel.z,f.z*T,t,e),this.vel.y-=(this.inWater?6:19)*e,this.inWater&&(this.vel.y*=1-2.5*e),h&&this.onGround&&(this.inWater?this.tryClimbOut():(this.vel.y=5.4,this.onGround=!1,G.audio.play(`jump`,{vol:.3})))}let E=this.pos.x+this.vel.x*e;this.collides(E,this.pos.z,this.pos.y)?this.vel.x=0:this.pos.x=E;let D=this.pos.z+this.vel.z*e;this.collides(this.pos.x,D,this.pos.y)?this.vel.z=0:this.pos.z=D,this.pos.y+=this.vel.y*e;let O=this.groundAt(this.pos.x,this.pos.z);this.pos.y<=O.y?(this.vel.y<-7&&!this.inWater&&G.audio.play(`land`,{vol:.4}),this.pos.y=O.y,this.vel.y=Math.max(0,this.vel.y),this.onGround=!0):this.onGround=this.pos.y-O.y<.05,this.collides(this.pos.x,this.pos.z,this.pos.y)&&!this.inWater&&this.unstick();let k=Math.hypot(this.vel.x,this.vel.z);this.onGround&&!S?(this.stepDist+=k*e,this.stepDist>(p?2.1:1.6)&&(this.stepDist=0,G.audio.play(this.inWater?`stepWater`:O.y>.02?`stepHard`:`step`,{vol:.25})),this.bob+=k*e*2.1,this.bobAmt=af(this.bobAmt,Math.min(1,k/4.3),8,e)):(this.bobAmt=af(this.bobAmt,0,6,e),this.bob+=e*1.5),this.fovKick=af(this.fovKick,p&&k>5?6:0,5,e),this.updateCamera(e),this.updateViewmodel(e,k),this.collectNearby(e)}unstick(){for(let e=.5;e<6;e+=.5)for(let t=0;t<6.28;t+=.5){let n=this.pos.x+Math.cos(t)*e,r=this.pos.z+Math.sin(t)*e;if(!this.collides(n,r,0)){this.pos.x=n,this.pos.z=r;return}}}tryClimbOut(){let e=new z(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),t=null,n=1e9;for(let r=-Math.PI;r<Math.PI;r+=Math.PI/8)for(let i of[.7,1,1.3]){let a=Math.cos(r)*i,o=Math.sin(r)*i,s=this.pos.x+a,c=this.pos.z+o;if(G.park.poolAt(s,c)||this.collides(s,c,.05))continue;let l=i-(a*e.x+o*e.z)*.8;l<n&&(n=l,t=new z(s,.04,c))}t&&(this.climbOut={from:this.pos.clone(),to:t,t:0},G.audio.play(`splash`,{vol:.4}),G.effects.splash(this.pos.x,Xf,this.pos.z,.5))}updateClimbOut(e){let t=this.climbOut;t.t+=e/.55;let n=Math.min(1,t.t);this.pos.x=nf(t.from.x,t.to.x,n),this.pos.z=nf(t.from.z,t.to.z,n),this.pos.y=nf(t.from.y,t.to.y,Math.sin(n*Math.PI/2))+Math.sin(n*Math.PI)*.3,n>=1&&(this.climbOut=null,this.vel.set(0,0,0),this.onGround=!0,this.inWater=!1)}updateCamera(e){let t=Math.sin(this.bob*2)*.045*this.bobAmt,n=Math.cos(this.bob)*.03*this.bobAmt,r=Og.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=this.mode===`swim`?Math.sin(G.time.real*1.8)*.05:0;this.cam.position.set(this.pos.x,this.pos.y+wg+t+i,this.pos.z).addScaledVector(r,n),this.cam.up.set(0,1,0),this.cam.rotation.set(this.pitch,this.yaw,Math.sin(this.bob)*.004*this.bobAmt,`YXZ`);let a=G.settings.fov+this.fovKick;Math.abs(this.cam.fov-a)>.05&&(this.cam.fov=a,this.cam.updateProjectionMatrix()),this.updateUnderwater()}updateUnderwater(){let e=this.cam.position,t=G.park.poolAt(e.x,e.z),n=t?Xf+(t.obj.waveAt?t.obj.waveAt(e.x,e.z):0):-99,r=!!t&&e.y<n-.02;r!==this.underwater&&(this.underwater=r,K.emit(`underwater`,r))}updateViewmodel(e,t){let n=this.vmRoot;n.position.copy(this.cam.position),n.quaternion.copy(this.cam.quaternion),this.toolAnim=(this.toolAnim||0)+e;let r=this.tool,i=this.vmTools[r],a=+!!this.hold.kind;this.actBlend=af(this.actBlend||0,a,10,e);let o=this.vmSway||{x:0,y:0},s=Math.cos(this.bob)*.012*this.bobAmt-o.x,c=Math.abs(Math.sin(this.bob))*.014*this.bobAmt+o.y,l=this.ride||this.mode===`swim`||G.build.active;if(i.visible=!l,this.vmArm.visible=!l,l)return;let u=this.actBlend,d=G.time.real;r===0?(i.position.set(.28+s,-.32+c+Math.sin(this.pickAnim||0)*-.08,-.35),i.rotation.set(-.35+(this.pickAnim?Math.sin(this.pickAnim)*.5:0),.15,.08),this.pickAnim&&(this.pickAnim+=e*12,this.pickAnim>Math.PI&&(this.pickAnim=0))):r===1?(i.position.set(.32+s+Math.sin(d*5)*.08*u,-.42+c,-.25),i.rotation.set(-.45-u*.25,.12+Math.sin(d*5)*.25*u,.05)):(i.position.set(.3+s,-.3+c,-.42),i.rotation.set(-.25+Math.sin(d*14)*.25*u,.3,Math.sin(d*14)*.4*u)),this.vmArm.position.set(i.position.x+.02,i.position.y-.02,i.position.z+.12),this.vmArm.rotation.set(-.4,.2,0)}startRide(e){if(this.ride||e.broken)return!1;let t=e.slide,n=t.design.lanes.length,r=n>1?t.lane=(t.lane+1)%n:0,i=this.pos.clone();return this.ride={obj:e,phase:`climb`,t:0,ci:0,pts:[i,t.entrance.clone(),...t.climb],lane:r,cur:i.clone()},this.lookOff.yaw=0,this.lookOff.pitch=0,K.emit(`playerRideStart`,e),!0}updateRide(e){let t=this.ride,n=t.obj.slide;if(t.t+=e,!G.park.objects.has(t.obj.id))this.ride=null;else if(t.phase===`climb`){let n=4.5*e;for(;n>0&&t.ci<t.pts.length-1;){let e=t.pts[t.ci+1],r=t.cur.distanceTo(e);r<=n?(t.cur.copy(e),n-=r,t.ci++):(t.cur.lerp(e,n/r),n=0)}let r=t.pts[Math.min(t.pts.length-1,t.ci+1)];if(r.distanceTo(t.cur)>.2){let n=Math.atan2(-(r.x-t.cur.x),-(r.z-t.cur.z));this.yaw+=uf(this.yaw,n)*Math.min(1,e*3)}this.pitch=af(this.pitch,.05,3,e),this.pos.copy(t.cur),this.cam.position.set(t.cur.x,t.cur.y+wg+Math.abs(Math.sin(t.t*7))*.04,t.cur.z),this.cam.up.set(0,1,0),this.cam.rotation.set(this.pitch,this.yaw,0,`YXZ`),t.ci>=t.pts.length-1&&(t.phase=`ready`,t.t=0,G.hud.toast(`3… 2… 1… GO!`,`gold`))}else if(t.phase===`ready`){xh(n.design.lanes[t.lane],.5,Eg),Dg.copy(Eg.pos).applyMatrix4(n.matrix);let r=this.pos,i=Math.atan2(-(Dg.x-r.x),-(Dg.z-r.z));this.yaw+=uf(this.yaw,i)*Math.min(1,e*4),this.pitch=af(this.pitch,-.35,4,e),this.cam.position.set(r.x,r.y+1.1,r.z),this.cam.rotation.set(this.pitch,this.yaw,0,`YXZ`),t.t>.9&&(t.phase=`ride`,t.t=0,G.audio.startWhoosh())}else if(t.phase===`ride`){let r=n.design.timelines[t.lane],i=n.design.lanes[t.lane],a=t.t/r.dt,o=Math.min(r.frames.length-2,Math.floor(a)),s=Math.min(1,a-o),c=r.frames[o],l=r.frames[o+1],u=nf(c.s,l.s,s),d=nf(c.bank,l.bank,s),f=nf(c.v,l.v,s);xh(i,u,Eg);let p=n.def.R,m=Math.cos(d),h=Math.sin(d),g=Eg.up.clone().multiplyScalar(m).addScaledVector(Eg.side,h),_=Eg.pos.clone().addScaledVector(Eg.up,p).addScaledVector(Eg.up,-p*m).addScaledVector(Eg.side,-p*h);_.applyMatrix4(n.matrix),g.transformDirection(n.matrix);let v=Eg.tan.clone().transformDirection(n.matrix),y=_.clone().addScaledVector(g,.62).addScaledVector(v,-.15);this.lookOff.yaw=af(this.lookOff.yaw,0,.8,e),this.lookOff.pitch=af(this.lookOff.pitch,0,.8,e);let b=new z().crossVectors(v,g).normalize(),x=v.clone().applyAxisAngle(g,this.lookOff.yaw);x.applyAxisAngle(b,this.lookOff.pitch-.12),kg.lookAt(y,y.clone().add(x),g),this.cam.position.copy(y),this.cam.quaternion.setFromRotationMatrix(kg),this.pos.set(_.x,_.y,_.z),G.audio.setWhoosh(f),this.fovKick=af(this.fovKick,Math.min(18,f*1.2),3,e);let S=G.settings.fov+this.fovKick;this.cam.fov=S,this.cam.updateProjectionMatrix(),Math.random()<e*f*.8&&G.effects.spray(_.x,_.y+.1,_.z,v.x*f*.3,1.5,v.z*f*.3,.06,.6),this.updateUnderwater(),a>=r.frames.length-1&&this.endRide(v,f)}}endRide(e,t){let n=this.ride;n.obj.slide,G.audio.stopWhoosh();let r=this.pos.clone().addScaledVector(e,1.8),i=G.park.poolAt(r.x,r.z);this.pos.set(r.x,i?Math.max(i.floorY,Xf-wg-.5):0,r.z),this.vel.set(e.x*Math.min(4,t*.4),-1,e.z*Math.min(4,t*.4)),this.yaw=Math.atan2(-e.x,-e.z),this.pitch=0,this.ride=null,this.inWater=!0,G.effects.splash(r.x,Xf,r.z,2.2),G.audio.play(`splashBig`,{vol:1}),this.fovKick=0,n.obj.condition-=.6,n.obj.condition<=0&&(n.obj.condition=0,n.obj.broken=!0,K.emit(`broken`,n.obj)),K.emit(`playerRide`,n.obj)}bumpCombo(){let e=G.time.real;return this.combo=e-(this.comboT??-99)<3.5?(this.combo||0)+1:1,this.comboT=e,this.combo>=5&&this.combo%5==0&&(G.audio.play(`quest`,{vol:.5}),G.hud.toast(`🔥 Clean-up streak x${this.combo}!`,`gold`)),this.combo}collectNearby(e){let t=G.effects,n=this.pos.x,r=this.pos.z,i=this.pos.y+.8;for(let a=t.coins.length-1;a>=0;a--){let o=t.coins[a],s=n-o.x,c=r-o.z,l=Math.hypot(s,c);if(l<4.2&&o.vy===0){let t=Math.min(l,(4.2-l)*3*e+2*e);o.x+=s/(l||1)*t,o.z+=c/(l||1)*t,o.y=nf(o.y,i,e*3)}if(l<.9){t.coins.splice(a,1);let e=this.bumpCombo(),n=e>2?Math.min(20,e):0;G.park.earn(o.value+n,`tips`,!1),G.hud.floater(`+$${o.value}${n?` +`+n+` combo`:``}`,new z(o.x,o.y+.5,o.z),``),G.audio.play(`coin`,{vol:.7}),t.sparkle(o.x,o.y,o.z,16765770,10),K.emit(`coinCollected`,o)}}for(let e=t.ducks.length-1;e>=0;e--){let i=t.ducks[e];Math.hypot(n-i.x,r-i.z)<1.3&&Math.abs(this.pos.y+1- -.12)<2&&this.collectDuck(i)}}collectDuck(e){G.effects.removeDuck(e),G.park.earn(e.value,`bonus`,!0,new z(e.x,1.2,e.z)),G.effects.sparkle(e.x,Xf+.3,e.z,e.gold?16765770:16773754,e.gold?50:24),G.audio.play(e.gold?`jackpot`:`duck`,{vol:.9}),K.emit(`duck`,e)}updateInteraction(e,t){let n=G.hud;if(G.ui.blocking||this.ride||G.build.active){n.setPrompt(``),n.setInfo(null),n.setProgress(-1),this.hold.kind=null;return}let r=this.cam,i=r.position.clone(),a=new z(0,0,-1).applyQuaternion(r.quaternion),o=new bi(i,a);this.ray.set(i,a);let s=t.hit(`KeyE`)||t.thit(`interact`),c=t.down(`KeyE`)||t.tdown(`interact`),l=t.mouse.leftPressed||t.thit(`use`),u=t.mouse.left||t.tdown(`use`),d=``,f=null,p=-1,m=null,h=G.effects,g=G.park,_=G.guests.emergencies.find(e=>!e.handledBy&&Math.hypot(e.guest.pos.x-this.pos.x,e.guest.pos.z-this.pos.z)<2.6);if(_&&(d=Mg(`E`)+`Rescue the swimmer!`,s&&G.guests.rescue(_.guest,`player`)),!d)for(let e of h.ducks){let t=new z(e.x,Xf+.15,e.z);if(t.distanceTo(i)<4.5&&o.distanceSqToPoint(t)<.25){d=Mg(`E`)+(e.gold?`Grab the GOLDEN duck!`:`Grab rubber duck`)+`<span class="sub">+${J(e.value)}</span>`,(s||l&&this.tool===0)&&this.collectDuck(e);break}}if(!d&&this.tool===0){let e=null,t=3.6;for(let n of h.trash){let r=new z(n.x,.05,n.z),a=r.distanceTo(i);a>t||o.distanceSqToPoint(r)<.2025*(1+a*.2)&&(t=a,e=n)}if(e&&(d=Mg(`E`)+`Pick up litter`,s||l)){h.removeTrash(e),this.pickAnim=.01,g.today.trashPicked++,G.audio.play(`pickup`,{vol:.6});let t=this.bumpCombo();G.hud.floater(t>1?`Combo x${t}! +$${t}`:`+1 Clean`,new z(e.x,.6,e.z),t>1?``:`green`),t>1&&g.earn(t,`bonus`,!1),K.emit(`trashPicked`),d=``}}if(!d&&this.tool===1){let t=(Xf-i.y)/a.y;if(a.y<-.02&&t>0&&t<7){let n=i.clone().addScaledVector(a,t),r=g.poolAt(n.x,n.z);if(r){let t=r.obj,i=Math.round(t.quality);if(d=Mg(`LMB`,!0)+`Hold to skim ${t.def.kind===`slide`?`landing pool`:t.def.name}<span class="sub">Water quality ${i}%</span>`,p=t.quality/100,u){m=`skim`;let r=t.quality;t.quality=Math.min(100,t.quality+11*e),Math.floor(r/10)!==Math.floor(t.quality/10)&&(g.refreshPoolLook(t),K.emit(`poolCleaned`,t)),h.removeLeavesNear(n.x,n.z,1.3),Math.random()<e*14&&h.spray(n.x+q(-.3,.3),Xf+.05,n.z+q(-.3,.3),q(-.5,.5),1.2,q(-.5,.5),.07,.4),Math.random()<e*3&&G.audio.play(`swish`,{vol:.35});for(let e of[...h.trash])(e.x-n.x)**2+(e.z-n.z)**2<1&&h.removeTrash(e)}}}d||(d=`<span class="sub">Aim at pool water and hold the mouse to clean it</span>`)}if(!d&&this.tool===2){let t=g.pickObject(o,14,e=>e.def.kind===`slide`);if(t){let n=Math.round(t.condition);if(d=(t.condition<100?Mg(`LMB`,!0)+`Hold to repair `:``)+t.def.name+`<span class="sub">${t.broken?`⚠ BROKEN`:`Condition `+n+`%`}</span>`,p=t.condition/100,u&&t.condition<100){if(m=`repair`,t.condition=Math.min(100,t.condition+18*e),Math.random()<e*10){let e=o.at(Math.min(6,i.distanceTo(new z(t.cx,1,t.cz))),new z);h.sparkle(e.x,e.y,e.z,16756800,3)}Math.random()<e*5&&G.audio.play(`clank`,{vol:.4}),t.condition>=100&&(t.broken&&(t.broken=!1,K.emit(`repaired`,{obj:t,by:`player`})),G.audio.play(`fixed`,{vol:.6}))}}d||(d=`<span class="sub">Aim at a slide and hold the mouse to repair it</span>`)}if(!d||d.startsWith(`<span class="sub">`))for(let e of g.lists.slides){let t=e.slide.entrance;if(Math.hypot(t.x-this.pos.x,t.z-this.pos.z)<3.2&&Math.abs(this.pos.y)<1){d=e.broken?`<span class="sub">${e.def.name} is broken — use the Wrench [3]</span>`:Mg(`E`)+`Ride `+e.def.name+`<span class="sub">Skip the queue — you own the place!</span>`,s&&!e.broken&&this.startRide(e);break}}if(!d||d.startsWith(`<span class="sub">`)){let t=g.pickObject(o,5,e=>e.def.facility===`toilet`);t&&t.dirt>5&&(d=Mg(`E`,!1,!0)+`Hold to clean restrooms<span class="sub">${Math.round(t.dirt)}% dirty</span>`,p=1-t.dirt/100,c&&(m=`clean`,t.dirt=Math.max(0,t.dirt-30*e),Math.random()<e*4&&G.audio.play(`swish`,{vol:.3}),t.dirt<=0&&K.emit(`toiletCleaned`,t)))}if(!d||d.startsWith(`<span class="sub">`))for(let e of G.terrain.saleSigns){let t=new z(e.x,1.7,e.z);if(t.distanceTo(i)<9&&o.distanceSqToPoint(t)<1.4*1.4){let t=g.landPrice(),n=this.confirmBuy&&this.confirmBuy.plot===e.plot&&G.time.real-this.confirmBuy.t<3;d=Mg(`E`)+(n?`Press again to confirm purchase`:`Buy this land`)+`<span class="sub">${J(t)} · expands your park</span>`,s&&(g.canAfford(t)?n?g.buyPlot(e.plot)&&(this.confirmBuy=null):this.confirmBuy={plot:e.plot,t:G.time.real}:(G.hud.toast(`Not enough cash for this land`,`bad`),G.audio.play(`error`)));break}}if((!d||d.startsWith(`<span class="sub">`))&&this.inWater&&this.pos.y>this.waterY-wg-.4&&(d=Mg(`Space`)+`Climb out`+(this.mode===`swim`?`<span class="sub">Hold C to dive · Space to surface</span>`:``)),!f){let e=G.guests.pick(o,14);if(e)f=Pg(e);else{let e=g.pickObject(o,18);if(e&&([`pool`,`slide`,`shop`,`building`].includes(e.def.kind)||[`lifeguard`,`toilet`].includes(e.def.facility)))f=Fg(e);else{let e=G.staff.list.find(e=>{let t=new z(e.pos.x,e.posY+1.1,e.pos.z);return t.distanceTo(i)<14&&o.distanceSqToPoint(t)<.16});e&&(f=`<div class="ic-title">${e.name}</div><div class="ic-row">Staff member<b>${e.job?Ig(e):`Idle`}</b></div>`)}}}this.hold.kind=m,n.setPrompt(d),n.setInfo(f),n.setProgress(m?p:-1),n.setCrosshairActive(!!d&&!d.startsWith(`<span class="sub">`))}};function Mg(e,t=!1,n=!1){return`<span class="key">${t?`🖱`:e}</span>`}function Ng(e,t){return`<div class="mini-bar"><div style="width:${Math.round(tf(e,0,1)*100)}%;background:${t}"></div></div>`}function Pg(e){let t=e.happiness,n=t>70?`#4ce08a`:t>40?`#ffd34a`:`#ff5a5a`,r=`<div class="ic-title">${t>75?`😄`:t>55?`🙂`:t>35?`😐`:`😠`} ${e.name}${e.vip?` ⭐ VIP`:``}</div>`;return r+=`<div class="ic-row">Happiness<b>${Math.round(t)}%</b></div>${Ng(t/100,n)}`,r+=`<div class="ic-row">Wallet<b>${J(e.cash)}</b></div>`,r+=`<div class="ic-row">Hunger / Thirst<b>${Math.round(e.needs.hunger*100)}% / ${Math.round(e.needs.thirst*100)}%</b></div>`,r+=`<div class="ic-row">Energy<b>${Math.round(e.needs.energy*100)}%</b></div>`,r+=`<div class="ic-row" style="color:#cfe7f5">${G.guests.activityText(e)}</div>`,e.thought&&G.time.total-e.thoughtT<240&&(r+=`<div class="ic-thought">“${e.thought.text}”</div>`),r}function Fg(e){let t=e.def,n=`<div class="ic-title">${t.name}</div>`;return e.pool&&t.kind===`pool`&&(n+=`<div class="ic-row">Swimmers<b>${e.pool.swimmers.size} / ${e.pool.capacity}</b></div>`,n+=`<div class="ic-row">Water quality<b>${Math.round(e.quality)}%</b></div>${Ng(e.quality/100,e.quality>60?`#27d3ff`:`#9a8a3a`)}`),t.kind===`slide`&&(n+=`<div class="ic-row">Status<b style="color:${e.broken?`#ff5a5a`:`#4ce08a`}">${e.broken?`BROKEN`:`Open`}</b></div>`,n+=`<div class="ic-row">Condition<b>${Math.round(e.condition)}%</b></div>${Ng(e.condition/100,e.condition>50?`#4ce08a`:`#ff8a3a`)}`,n+=`<div class="ic-row">Queue<b>${e.queue.length} guests</b></div><div class="ic-row">Rides<b>${e.visits}</b></div>`),t.kind===`shop`&&(n+=`<div class="ic-row">Price<b>${J(t.shop.price*G.park.foodMult)}</b></div><div class="ic-row">Sold<b>${e.sales}</b></div><div class="ic-row">Revenue<b>${J(e.revenue)}</b></div><div class="ic-row">Queue<b>${e.queue.length}</b></div>`),t.facility===`toilet`&&(n+=`<div class="ic-row">Cleanliness<b>${Math.round(100-e.dirt)}%</b></div>`),t.facility===`lifeguard`&&(n+=`<div class="ic-row">Lifeguard<b>${e.points.guard?`On duty`:`Vacant — hire one!`}</b></div>`),t.appeal&&!n.includes(`Queue`)&&(n+=`<div class="ic-row">Scenery<b>+${t.appeal}</b></div>`),n}function Ig(e){let t=e.job;switch(t.kind){case`trash`:return`Picking up litter`;case`toilet`:return`Cleaning restrooms`;case`pool`:return`Treating pool water`;case`repair`:return`Repairing `+t.obj.def.name;case`tower`:return`On watch`;case`rescue`:return`RESCUING!`;default:return`Patrolling`}}function Lg(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.fillStyle=`rgba(255,255,255,0.10)`,t.fillRect(0,0,64,64),t.strokeStyle=`rgba(255,255,255,0.85)`,t.lineWidth=3,t.strokeRect(1.5,1.5,61,61);let n=new Na(e);return n.wrapS=n.wrapT=u,n}var Rg=class{constructor(){this.active=!1,this.mode=`place`,this.def=null,this.rot=0,this.colorIdx=0,this.ghost=null,this.ghostMeshes=[],this.valid=!1,this.moving=null,this.hover=null,this.lastPaint=null,this.confirmSell=null,this.gridTex=Lg(),this.footMat=new xi({map:this.gridTex,color:6750122,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),this.foot=new Ni(new us(1,1).rotateX(-Math.PI/2),this.footMat),this.foot.visible=!1,this.foot.renderOrder=3,G.scene.add(this.foot),this.boxHelper=new Rc(new dr,16729156),this.boxHelper.visible=!1,G.scene.add(this.boxHelper),this.target=new z}start(e){let t=Fh[e];t&&(this.clearGhost(),this.active=!0,this.moving=null,this.confirmSell=null,t.kind===`tool`?(this.mode=t.tool,this.def=t):(this.mode=`place`,this.def=t,(t.colorable||t.kind===`slide`)&&(this.colorIdx=Math.floor(Math.random()*8)),this.makeGhost(t)),K.emit(`buildMode`,!0),this.updatePanel())}stop(){this.moving&&this.cancelMove(),this.active=!1,this.clearGhost(),this.foot.visible=!1,this.boxHelper.visible=!1,K.emit(`buildMode`,!1),G.hud.setBuildPanel(null)}get color(){if(!this.def)return 16777215;let e=this.def.kind===`slide`?ep.slide:ep.fabric;return e[this.colorIdx%e.length]}clearGhost(){this.ghost&&(G.scene.remove(this.ghost),this.ghostUnique&&this.ghost.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()}),this.ghost=null,this.ghostMeshes=[])}makeGhost(e,t){this.clearGhost();let n;if(e.kind===`pool`){let t=e.pool;if(t.jacuzzi)n=uh(t).group;else{let e={...t};t.kids&&(e.extras=e=>dh(e)),t.wave&&(e.extras=e=>fh(e,t.W,t.L)),n=lh(e).group}}else n=e.kind===`slide`?kh(e.slide,t??this.color).group:em(Hm(e.prefab));this.ghostUnique=e.kind===`pool`||e.kind===`slide`;let r=[];n.traverse(e=>{e.isMesh&&(e.material&&e.material.userData&&e.material.userData.isWater&&e.material.dispose(),e.material=X.ghostOk,e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=4,r.push(e))}),this.ghost=n,this.ghostMeshes=r,G.scene.add(n)}setGhostValid(e){let t=e?X.ghostOk:X.ghostBad;for(let e of this.ghostMeshes)e.material=t;this.footMat.color.setHex(e?6750122:16733525)}aimPoint(){let e=G.camera,t=new z(0,0,-1).applyQuaternion(e.quaternion),n=e.position,r;r=t.y<-.03?-n.y/t.y:60,r=Math.min(r,45);let i=n.clone().addScaledVector(t,r);return t.y>=-.03&&(i.y=0),i}update(e,t){if(!this.active||G.ui.blocking)return;if(t.mouse.rightPressed||t.hit(`KeyQ`)||t.thit(`build`)){if(this.moving)this.cancelMove();else{this.stop();return}}let n=G.park,r=G.camera,i=new bi(r.position.clone(),new z(0,0,-1).applyQuaternion(r.quaternion));if(this.mode===`sell`||this.mode===`move`&&!this.moving){let e=n.pickObject(i,45);this.hover=e,e?(this.boxHelper.box.copy(e.bbox).expandByScalar(.05),this.boxHelper.material.color.setHex(this.mode===`sell`?16729156:4500223),this.boxHelper.visible=!0):this.boxHelper.visible=!1,(t.mouse.leftPressed||t.thit(`use`))&&(e&&this.mode===`sell`?this.sell(e):e&&this.mode===`move`&&this.beginMove(e)),this.updatePanel();return}this.boxHelper.visible=!1;let a=this.def;(t.hit(`KeyR`)||t.mouse.wheel)&&(this.rot=(this.rot+(t.mouse.wheel<0?3:1))%4,G.audio.play(`tick`,{vol:.4})),t.hit(`KeyC`)&&(a.colorable||a.kind===`slide`)&&!this.moving&&(this.colorIdx++,a.kind===`slide`&&this.makeGhost(a),G.audio.play(`tick`,{vol:.4}));let o=this.aimPoint(),[s,c]=n.rotDims(a,this.rot),l=Math.round(o.x-s/2),u=Math.round(o.z-c/2),d=l+s/2,f=u+c/2,p=this.moving?this.moving.id:0,m=n.canPlace(a,l,u,this.rot,p),h=this.moving?0:a.cost,g=n.cash>=h;this.valid=m.ok&&g,this.reason=m.ok?g?``:`Not enough cash`:m.reason,this.ghost&&(this.ghost.position.set(d,.02,f),this.ghost.rotation.y=this.rot*Math.PI/2),this.foot.visible=!0,this.foot.position.set(d,.07,f),this.foot.scale.set(s,1,c),this.gridTex.repeat.set(s,c),this.setGhostValid(this.valid);let _=t.mouse.leftPressed||t.thit(`use`),v=a.kind===`path`&&(t.mouse.left||t.tdown(`use`));if((_||v)&&this.valid){let e=`${l},${u}`;(!v||_||this.lastPaint!==e)&&(this.lastPaint=e,this.placeAt(l,u))}else _&&!this.valid&&(G.audio.play(`error`,{vol:.5}),G.hud.toast(this.reason||`Cannot place here`,`bad`));this.updatePanel()}placeAt(e,t){let n=G.park,r=this.def;if(this.moving){let r=this.moving,i={key:r.key,color:r.color,seed:r.seed,quality:r.quality,condition:r.condition};n.remove(r,0,!0);let a=n.place(i.key,e,t,this.rot,{free:!0,silent:!0,color:i.color,seed:i.seed,quality:i.quality});a&&(a.condition=i.condition,a.pool&&n.refreshPoolLook(a)),this.moving=null,G.effects.dust(a.cx,0,a.cz,24),G.audio.play(`build`,{vol:.7}),this.clearGhost(),this.foot.visible=!1;return}let i=r.colorable||r.kind===`slide`?this.color:void 0,a=n.place(r.key,e,t,this.rot,{color:i});if(!a)return;let o=r.kind===`pool`||r.kind===`slide`||r.kind===`shop`||r.kind===`building`;G.effects.dust(a.cx,0,a.cz,o?60:14),o&&G.effects.sparkle(a.cx,2,a.cz,10481919,30),G.audio.play(r.kind===`path`?`tick`:`build`,{vol:r.kind===`path`?.35:.8}),r.kind!==`path`&&G.hud.floater(`-`+J(r.cost),new z(a.cx,2.5,a.cz),`red`),o&&G.hud.shake(.25),(r.kind===`slide`||r.kind===`pool`)&&this.stop()}sell(e){let t=e.def.kind===`pool`||e.def.kind===`slide`||e.def.kind===`shop`||e.def.kind===`building`;t&&(!this.confirmSell||this.confirmSell.o!==e||G.time.real-this.confirmSell.t>3)?(this.confirmSell={o:e,t:G.time.real},G.hud.toast(`Click again to demolish ${e.def.name} (+${J(e.def.cost*.5)})`,`gold`)):(this.confirmSell=null,G.effects.dust(e.cx,0,e.cz,t?50:12),G.park.remove(e,.5),G.audio.play(`sell`,{vol:.7}),G.hud.floater(`+`+J(e.def.cost*.5),new z(e.cx,2,e.cz),`green`),this.boxHelper.visible=!1)}beginMove(e){e.def.kind===`slide`&&e.queue.length+e.users.size,this.moving=e,this.def=e.def,this.rot=e.rot,this.makeGhost(e.def,e.color),e.group&&(e.group.visible=!1),e.inst&&(this.hiddenMatrix=e.matrix.clone(),e.instPool.setMatrix(e.inst,new B().makeScale(0,0,0))),G.audio.play(`tick`,{vol:.5})}cancelMove(){let e=this.moving;e&&(e.group&&(e.group.visible=!0),e.inst&&this.hiddenMatrix&&e.instPool.setMatrix(e.inst,this.hiddenMatrix),this.moving=null,this.mode=`move`,this.clearGhost(),this.foot.visible=!1)}updatePanel(){let e=this.def,t=``;if(this.mode===`sell`)t=`<div class="bp-title">🔨 Demolish</div><div>${this.hover?this.hover.def.name+` · refund <span class="bp-cost">`+J(this.hover.def.cost*.5)+`</span>`:`Aim at an object`}</div><div class="bp-keys"><span><span class="kk">LMB</span>Demolish</span><span><span class="kk">RMB</span>Exit</span><span><span class="kk">B</span>Catalog</span></div>`;else if(this.mode===`move`&&!this.moving)t=`<div class="bp-title">✋ Move</div><div>${this.hover?this.hover.def.name:`Aim at an object to pick it up`}</div><div class="bp-keys"><span><span class="kk">LMB</span>Pick up</span><span><span class="kk">RMB</span>Exit</span></div>`;else if(e){let n=this.moving?0:e.cost,r=G.park.cash>=n;t=`<div class="bp-title">${this.moving?`Moving: `:``}${e.name} <span class="bp-cost ${r?``:`bad`}">${this.moving?`FREE`:J(n)}</span></div>`,t+=`<div class="bp-keys"><span><span class="kk">LMB</span>${e.kind===`path`?`Paint`:`Place`}</span><span><span class="kk">R</span>Rotate</span>${(e.colorable||e.kind===`slide`)&&!this.moving?`<span><span class="kk">C</span>Colour</span>`:``}<span><span class="kk">RMB</span>${this.moving?`Cancel`:`Exit`}</span><span><span class="kk">B</span>Catalog</span></div>`,t+=`<div class="bp-msg">${this.valid?``:this.reason||``}</div>`}G.hud.setBuildPanel(t)}},zg=[{id:`t_trash`,text:`Pick up 3 pieces of litter`,hint:`Aim at litter on the ground and press E`,goal:3,ev:`trashPicked`,cash:150,xp:40},{id:`t_ride`,text:`Ride the Twister slide`,hint:`Walk to the slide's queue entrance and press E`,goal:1,ev:`playerRide`,cash:250,xp:50},{id:`t_build`,text:`Place 2 Sun Loungers`,hint:`Press B → Facilities → Sun Lounger`,goal:2,ev:`placed`,filter:e=>e.key===`sunbed`,cash:250,xp:50},{id:`t_skim`,text:`Skim a pool for 4 seconds`,hint:`Press 2 for the skimmer, aim at water, hold left mouse`,goal:4,ev:`skimSec`,cash:200,xp:40},{id:`t_hire`,text:`Hire a Pool Technician`,hint:`Press Tab → Staff (unlocks at level 2)`,goal:1,ev:`hired`,filter:e=>e===`pooltech`,cash:300,xp:60,minLevel:2},{id:`t_coins`,text:`Collect 5 tip coins`,hint:`Happy guests drop coins — walk over them`,goal:5,ev:`coinCollected`,cash:200,xp:50},{id:`t_food`,text:`Build a Burger Bay`,hint:`Unlocks at level 2 · B → Food & Shops`,goal:1,ev:`placed`,filter:e=>e.key===`burger`,cash:400,xp:80,minLevel:2},{id:`t_rating`,text:`Reach a 3★ park rating`,hint:`Keep guests happy, the park clean & add scenery`,goal:3,ev:`rating`,cash:600,xp:100}];function Bg(e){let t=e,n=Object.values(Fh).filter(e=>e.level<=t&&e.cost>0);return[()=>{let e=Math.round((900+t*650)/100)*100;return{text:`Earn ${J(e)} today`,goal:e,ev:`earnToday`,cash:Math.round(e*.18),xp:60+t*10}},()=>{let e=25+t*10;return{text:`Welcome ${e} guests today`,goal:e,ev:`guestEntered`,cash:200+t*80,xp:50+t*8}},()=>{let e=15+t*6;return{text:`Guests ride slides ${e} times`,goal:e,ev:`ride`,cash:200+t*80,xp:50+t*8}},()=>{let e=8+t*2;return{text:`Pick up ${e} pieces of litter`,goal:e,ev:`trashPicked`,cash:120+t*50,xp:50}},()=>{let e=4+Math.floor(t/2);return{text:`Place ${e} decorations`,goal:e,ev:`placed`,filter:e=>e.def.cat===`decor`,cash:150+t*60,xp:50}},()=>{let e=20+t*8;return{text:`Sell ${e} food & drinks`,goal:e,ev:`sale`,cash:200+t*70,xp:60}},()=>{let e=6+t*2;return{text:`Collect ${e} tip coins`,goal:e,ev:`coinCollected`,cash:150+t*50,xp:50}},()=>{let e=2+Math.floor(t/3);return{text:`Ride slides yourself ${e} times`,goal:e,ev:`playerRide`,cash:150+t*60,xp:60}},()=>{let e=30+t*12;return{text:`Have ${e} guests in the park at once`,goal:e,ev:`guestsNow`,cash:300+t*100,xp:80}},()=>{let e=Math.min(5,Math.floor((G.park.rating+.6)*2)/2);return{text:`Reach a ${e.toFixed(1)}★ rating`,goal:e,ev:`rating`,cash:300+t*100,xp:80,decimal:!0}},()=>{let e=10+t*4;return{text:`Guests take ${e} swims`,goal:e,ev:`swam`,cash:180+t*60,xp:50}},()=>{let e=cf(n.filter(e=>[`pools`,`slides`,`food`].includes(e.cat)));return{text:`Build a ${e.name}`,goal:1,ev:`placed`,filter:t=>t.key===e.key,cash:Math.round(e.cost*.3),xp:60+t*5}}]}var Vg=class{constructor(){this.xp=0,this.level=1,this.tutIndex=0,this.quests=[],this.seenUnlocks=new Set(Object.values(Fh).filter(e=>e.level<=1).map(e=>e.key)),this.questCounter=0,this.completedQuests=0,this.tutDone=new Set,this._wire()}get xpNext(){return Rh(this.level+1)}get xpPrev(){return Rh(this.level)}addXP(e,t){if(!(e<=0)){for(this.xp+=e,t&&e>=5&&G.hud.floater(`+${e} XP`,t,`xp`);this.xp>=this.xpNext;)this.level++,this.onLevelUp();K.emit(`xp`)}}onLevelUp(){let e=this.level,t=400+e*300;G.park.earn(t,`bonus`,!1);let n=Object.values(Fh).filter(t=>t.level===e&&t.kind!==`tool`),r=Object.entries(Ih).filter(([,t])=>t.level===e).map(([,e])=>e);G.hud.levelUp(e,t,n,r),G.audio.play(`levelup`,{vol:1}),G.effects.confetti(G.camera.position.x,G.camera.position.y+2,G.camera.position.z,160),G.sdk.happytime();for(let e of n)this.seenUnlocks.delete(e.key);this.refreshQuests()}_wire(){let e=(e,t)=>K.on(e,t);e(`trashPicked`,()=>{this.addXP(3),this.progress(`trashPicked`,1)}),e(`guestEntered`,()=>{this.addXP(2),this.progress(`guestEntered`,1)}),e(`sale`,e=>{this.addXP(1),this.progress(`sale`,1)}),e(`ride`,()=>{this.addXP(1),this.progress(`ride`,1)}),e(`swam`,()=>{this.progress(`swam`,1)}),e(`playerRide`,e=>{this.addXP(10,new z(G.camera.position.x,G.camera.position.y+.5,G.camera.position.z)),this.progress(`playerRide`,1)}),e(`placed`,e=>{this.addXP(Math.max(2,Math.round(e.def.cost/70))),this.progress(`placed`,1,e)}),e(`repaired`,e=>{this.addXP(e.by===`player`?25:5)}),e(`rescued`,e=>{e.by===`player`?(this.addXP(45),G.park.earn(250,`bonus`,!0,new z(e.guest.pos.x,2,e.guest.pos.z))):this.addXP(8)}),e(`coinCollected`,()=>{this.addXP(1),this.progress(`coinCollected`,1)}),e(`duck`,e=>{this.addXP(e.gold?120:25)}),e(`landBought`,()=>{this.addXP(150)}),e(`hired`,e=>{this.progress(`hired`,1,e)}),e(`poolCleaned`,()=>{this.addXP(4)}),e(`cash`,e=>{e.delta>0&&[`tickets`,`food`,`shops`,`tips`,`lockers`].includes(e.cat)&&this.progress(`earnToday`,e.delta)})}refreshQuests(){this.quests=this.quests.filter(e=>!e.done||G.time.real-e.doneAt<2.5);let e=()=>this.quests.filter(e=>!e.done),t=e().filter(e=>e.tut).length;for(let n=0;n<zg.length&&t<2&&e().length<3;n++){let e=zg[n];this.tutDone.has(e.id)||this.quests.some(t=>t.id===e.id&&!t.done)||e.minLevel&&this.level<e.minLevel||(this.quests.push({...e,tut:!0,progress:0,done:!1,uid:++this.questCounter}),t++)}let n=this.tutDone.size>=3?3:0,r=0;for(;e().length<Math.max(n,Math.min(3,e().length))&&r++<10;){let t=cf(Bg(this.level))();e().some(e=>e.ev===t.ev)||(t.progress=0,t.done=!1,t.uid=++this.questCounter,t.ev===`rating`&&G.park.rating>=t.goal&&(t.goal=Math.min(5,t.goal+.5),t.text=`Reach a ${t.goal.toFixed(1)}★ rating`),this.quests.push(t))}K.emit(`quests`)}progress(e,t,n){let r=!1;for(let i of this.quests)i.done||i.ev!==e||(!i.filter||i.filter(n))&&(i.progress=Math.min(i.goal,i.progress+t),r=!0,i.progress>=i.goal&&this.complete(i));r&&K.emit(`quests`)}setValue(e,t){for(let n of this.quests)n.done||n.ev!==e||(n.progress=Math.min(n.goal,t),t>=n.goal&&this.complete(n))}complete(e){e.done=!0,e.doneAt=G.time.real,e.tut&&this.tutDone.add(e.id),this.completedQuests++,G.park.earn(e.cash,`bonus`,!1),G.audio.play(`quest`,{vol:.9}),G.hud.toast(`✅ Goal complete: ${e.text} · +${J(e.cash)} · +${e.xp} XP`,`good`),G.hud.floater(`+`+J(e.cash),new z(G.camera.position.x,G.camera.position.y+.4,G.camera.position.z).add(new z(0,0,-2).applyQuaternion(G.camera.quaternion)),``),this.addXP(e.xp),setTimeout(()=>this.refreshQuests(),2200),K.emit(`quests`)}update(){this.setValue(`guestsNow`,G.guests.list.filter(e=>e.inPark).length),this.setValue(`rating`,Math.round(G.park.rating*2)/2)}onNewDay(){for(let e of this.quests)!e.done&&e.ev===`earnToday`&&(e.progress=0);K.emit(`quests`)}serialize(){return{xp:this.xp,level:this.level,tut:this.tutIndex,tutDone:[...this.tutDone],quests:this.quests.filter(e=>!e.done).map(e=>({text:e.text,goal:e.goal,ev:e.ev,cash:e.cash,xp:e.xp,progress:e.progress,tut:e.tut,id:e.id,hint:e.hint})),seen:[...this.seenUnlocks],done:this.completedQuests}}restore(e){if(e){this.xp=e.xp||0,this.level=e.level||1,this.tutIndex=e.tut||0,this.completedQuests=e.done||0,this.tutDone=new Set(e.tutDone||[]),this.seenUnlocks=new Set(e.seen||[]),this.quests=[];for(let t of e.quests||[]){let e=t.tut?zg.find(e=>e.id===t.id):null;(t.ev!==`placed`||e)&&this.quests.push({...t,filter:e?e.filter:void 0,done:!1,uid:++this.questCounter})}this.refreshQuests()}}};function Hg(e){let t=[],n=(n,r,i,a=0,o={})=>{let s=Fh[n],c=e.canPlace(s,r,i,a);return c.ok?e.place(n,r,i,a,{free:!0,silent:!0,...o}):(t.push(`${n}@${r},${i}: ${c.reason}`),null)};for(let e=42;e<64;e++)for(let t=-3;t<=2;t++)n(`pathStone`,t,e);for(let e=36;e<42;e++)for(let t=-10;t<=9;t++)n(`pathStone`,t,e);n(`pool_small`,-22,45,0);for(let e of[-21,-19,-17,-15,-13])n(`sunbed`,e,52,0,{color:2919668});n(`umbrella`,-20,53,0,{color:15811901}),n(`umbrella`,-16,53,0,{color:16764730}),n(`umbrella`,-12,53,0,{color:16777215}),n(`slide_twister`,10,17,0,{color:2006015}),n(`drinks`,-7,46,1),n(`icecream`,4,50,3),n(`toilets`,-12,58,1),n(`showers`,-10,43,0),n(`picnic`,-10,47,0,{color:15811901}),n(`bench`,3,46,3),n(`bench`,-4,52,1);for(let[e,t]of[[-4,44],[3,53],[-11,37],[10,41]])n(`bin`,e,t);for(let[e,t]of[[-4,49],[3,43],[-11,42],[9,43],[4,56],[-5,56]])n(`lamp`,e,t);for(let[e,t]of[[-24,46],[-24,51],[-9,55],[5,44],[5,59],[-6,59],[10,61],[-14,61],[9,47],[-13,40],[24,43],[-27,58],[27,58],[-28,30],[28,12],[-20,10],[0,8],[-14,25],[-26,38],[26,50],[17,47],[21,55]])n(`palm`,e,t);for(let[e,t]of[[-5,62],[4,62],[-5,60],[4,60]])n(`planter`,e,t);for(let e=-19;e<=-10;e++)n(`hedge`,e,63);for(let e=9;e<=18;e++)n(`hedge`,e,63);n(`flowerBed`,-9,59,0),n(`flowerBed`,6,57,0);for(let[e,t]of[[-25,55],[12,44],[-2,34]])n(`rock`,e,t);t.length&&console.warn(`[starter] failed placements:`,t),e._dirtyNav()}function Ug(){let e=G.effects;for(let[t,n]of[[-1.2,57.5],[1.5,54],[-2.5,50.3],[6.5,52],[-6,40.5],[2.2,45.5]])e.addTrash(t,n);for(let[t,n]of[[.5,55],[-1.8,52],[1.2,48]])e.addCoin(t,1.2,n,Math.round(q(3,8)));let t=G.park.lists.pools[0];t&&e.addDuck(t,!1)}var Wg=e=>document.getElementById(e),Gg=class{constructor(){this.el=Wg(`hud`),this.cashShown=0,this.deltaT=0,this.deltaAcc=0,this.floaters=[],this.floaterPool=[],this.shakeT=0,this.lastPrompt=null,this.lastInfo=null,this.minimapT=0,this.mm=Wg(`minimap`).getContext(`2d`),this.toastsEl=Wg(`toasts`),this.lastQuestHtml=``,this._buildHotbar(),K.on(`cash`,e=>this.onCash(e)),K.on(`quests`,()=>this.renderQuests()),K.on(`xp`,()=>this.renderXP()),K.on(`tool`,()=>this.renderHotbar()),K.on(`buildMode`,()=>this.renderHotbar()),this.renderXP()}show(){this.el.classList.remove(`hidden`),this.cashShown=G.park.cash}_buildHotbar(){let e=Wg(`hotbar`),t={hand:`<svg viewBox="0 0 32 32"><path d="M6 26 L22 8" stroke="#cfd8df" stroke-width="3" stroke-linecap="round"/><path d="M20 6l6-2-2 6z" fill="#ff7a1a"/><rect x="3" y="24" width="6" height="6" rx="2" fill="#333"/></svg>`,skimmer:`<svg viewBox="0 0 32 32"><path d="M4 28 L20 12" stroke="#cfd8df" stroke-width="3" stroke-linecap="round"/><ellipse cx="23" cy="9" rx="6" ry="6" fill="none" stroke="#27a8ff" stroke-width="3"/><path d="M19 10q4 8 8-2" fill="rgba(255,255,255,.6)"/></svg>`,wrench:`<svg viewBox="0 0 32 32"><path d="M8 26 L20 14" stroke="#dfe6ec" stroke-width="5" stroke-linecap="round"/><circle cx="22" cy="10" r="6" fill="none" stroke="#dfe6ec" stroke-width="4"/><path d="M22 4v6h6" stroke="#0b1a26" stroke-width="3"/></svg>`,build:`<svg viewBox="0 0 32 32"><path d="M4 26h24v3H4z" fill="#ffd34a"/><path d="M8 26V14l8-6 8 6v12" fill="#27d3ff"/><rect x="13" y="18" width="6" height="8" fill="#0b6fa8"/></svg>`,tablet:`<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="3" fill="#dfe6ec"/><rect x="8.5" y="6" width="15" height="18" rx="1" fill="#27d3ff"/><path d="M11 20l3-4 3 2 4-6" stroke="#fff" stroke-width="2" fill="none"/></svg>`},n=[...Ag.map((e,n)=>({k:String(n+1),n:e.name,icon:t[e.key],act:()=>G.player.setTool(n),id:`tool`+n})),{k:`B`,n:`Build`,icon:t.build,act:()=>G.menus.toggleCatalog(),id:`build`},{k:`Tab`,n:`Manage`,icon:t.tablet,act:()=>G.menus.toggleTablet(),id:`tablet`}];e.innerHTML=n.map(e=>`<div class="slot" data-id="${e.id}"><span class="k">${e.k}</span>${e.icon}<span class="n">${e.n}</span></div>`).join(``),e.querySelectorAll(`.slot`).forEach((e,t)=>e.addEventListener(`click`,e=>{e.stopPropagation(),n[t].act()})),this.renderHotbar()}renderHotbar(){Wg(`hotbar`).querySelectorAll(`.slot`).forEach(e=>{let t=e.dataset.id,n=!1;t.startsWith(`tool`)&&(n=!G.build?.active&&G.player&&G.player.tool===Number(t.slice(4))),t===`build`&&(n=!!G.build?.active),e.classList.toggle(`active`,n)})}onCash(e){e.popup!==!1&&e.pos&&e.delta>0&&this.floater(`+`+J(e.delta),e.pos,e.cat===`tips`?``:`green`),this.deltaAcc+=e.delta,this.deltaT=1.6;let t=Wg(`cash-delta`);t.textContent=(this.deltaAcc>0?`+`:``)+J(this.deltaAcc),t.className=this.deltaAcc>=0?`pos`:`neg`}update(e){let t=G.park,n=t.cash-this.cashShown;this.cashShown+=Math.abs(n)<1?n:n*Math.min(1,e*8),Wg(`cash`).textContent=J(this.cashShown),this.deltaT-=e,this.deltaT<=0&&this.deltaAcc!==0&&(this.deltaAcc=0,Wg(`cash-delta`).className=``),Wg(`guest-count`).textContent=G.guests.list.filter(e=>e.inPark).length;let r=t.rating,i=Wg(`stars`),a=``;for(let e=1;e<=5;e++)a+=`<span class="${r>=e-.25?`full`:r>=e-.75?`half`:``}">★</span>`;i.innerHTML!==a&&(i.innerHTML=a),Wg(`rating-num`).textContent=r.toFixed(1),Wg(`clock`).textContent=df(G.time.minutes),Wg(`day-label`).textContent=`Day `+G.time.day,Wg(`speed-label`).textContent=G.time.speed+`x`,Wg(`weather-ico`).textContent=G.env.nightF>.5?G.env.weather===`rain`?`🌧️`:`🌙`:G.env.weatherInfo.icon,Wg(`weather-ico`).title=G.env.weatherInfo.label+` `+G.env.temp+`°C`;let o=G.time.minutes>=540&&G.time.minutes<1260,s=Wg(`park-status`);if(s.textContent=o?`OPEN · ${G.env.temp}°C ${G.env.weatherInfo.label.toUpperCase()}`:`CLOSED`,s.classList.toggle(`closed`,!o),this.updateFloaters(e),this.updateAlerts(),this.minimapT-=e,this.minimapT<=0&&(this.minimapT=.2,this.drawMinimap()),this.shakeT>0){this.shakeT-=e;let t=this.shakeT*.08;G.camera.position.x+=(Math.random()-.5)*t,G.camera.position.y+=(Math.random()-.5)*t}}shake(e){this.shakeT=Math.max(this.shakeT,e)}renderXP(){let e=G.progression;if(!e)return;Wg(`lvl-num`).textContent=e.level,Wg(`level-badge`).textContent=e.level;let t=e.xp-e.xpPrev,n=e.xpNext-e.xpPrev;Wg(`xp-fill`).style.width=Math.round(tf(t/n,0,1)*100)+`%`,Wg(`xp-text`).textContent=`${t.toLocaleString()} / ${n.toLocaleString()} XP`}renderQuests(){let e=G.progression;if(!e)return;let t=e.quests.map(e=>{let t=e.decimal?e.progress.toFixed(1)+` / `+e.goal.toFixed(1):e.goal>200?J(e.progress)+` / `+J(e.goal):Math.floor(e.progress)+` / `+e.goal;return`<div class="quest ${e.done?`done`:``} ${e.tut?`tut`:``}"><div class="q-title"><span>${e.done?`✅ `:``}${e.text}</span><span class="q-rew">+${J(e.cash)}</span></div>${e.hint&&!e.done?`<div class="q-hint">${e.hint}</div>`:``}<div class="q-bar"><div style="width:${Math.round(tf(e.progress/e.goal,0,1)*100)}%"></div></div><div class="q-hint" style="text-align:right">${t}</div></div>`}).join(``);t!==this.lastQuestHtml&&(Wg(`quests`).innerHTML=t,this.lastQuestHtml=t)}setPrompt(e){e!==this.lastPrompt&&(Wg(`prompt`).innerHTML=e,this.lastPrompt=e)}setInfo(e){if(e===this.lastInfo)return;this.lastInfo=e;let t=Wg(`infocard`);e?(t.innerHTML=e,t.classList.remove(`hidden`)):t.classList.add(`hidden`)}setProgress(e){let t=Wg(`progress-ring`);e<0?t.classList.add(`hidden`):(t.classList.remove(`hidden`),Wg(`ring-fg`).style.strokeDashoffset=(100.5*(1-tf(e,0,1))).toFixed(1))}setCrosshairActive(e){Wg(`crosshair`).classList.toggle(`active`,e)}setBuildPanel(e){let t=Wg(`build-panel`);e?(t.classList.remove(`hidden`),t.innerHTML!==e&&(t.innerHTML=e)):t.classList.add(`hidden`)}setCrosshairVisible(e){Wg(`crosshair`).style.display=e?``:`none`}toast(e,t=``){let n=document.createElement(`div`);for(n.className=`toast `+t,n.innerHTML=e,this.toastsEl.prepend(n);this.toastsEl.children.length>5;)this.toastsEl.lastChild.remove();setTimeout(()=>{n.classList.add(`out`),setTimeout(()=>n.remove(),500)},4200)}floater(e,t,n=``){let r=this.floaterPool.pop();if(r||(r=document.createElement(`div`),Wg(`floaters`).appendChild(r)),r.className=`floater `+n,r.textContent=e,r.style.display=``,this.floaters.push({el:r,pos:t.clone(),t:0}),this.floaters.length>40){let e=this.floaters.shift();e.el.style.display=`none`,this.floaterPool.push(e.el)}}updateFloaters(e){let t=G.camera,n=window.innerWidth,r=window.innerHeight,i=new z;for(let a=this.floaters.length-1;a>=0;a--){let o=this.floaters[a];if(o.t+=e,o.t>1.6){o.el.style.display=`none`,this.floaterPool.push(o.el),this.floaters.splice(a,1);continue}i.copy(o.pos),i.y+=o.t*.9;let s=i.distanceTo(t.position);if(i.project(t),i.z>1||s>60){o.el.style.opacity=0;continue}let c=tf(10/s,.55,1.5);o.el.style.opacity=o.t<1.1?1:1-(o.t-1.1)/.5,o.el.style.transform=`translate(-50%,-50%) translate(${(i.x*.5+.5)*n}px, ${(-i.y*.5+.5)*r}px) scale(${c})`}}updateAlerts(){let e=Wg(`alerts`),t=[];for(let e of G.guests.emergencies)t.push(`<div class="alert">🆘 Swimmer in trouble at ${e.obj.def.kind===`slide`?e.obj.def.name+` pool`:e.obj.def.name}! ${Math.max(0,Math.ceil(e.timeout-e.t))}s</div>`);let n=G.park.lists.slides.filter(e=>e.broken);n.length&&t.push(`<div class="alert warn">🔧 ${n.map(e=>e.def.name).join(`, `)} broken</div>`);let r=t.join(``);e.innerHTML!==r&&(e.innerHTML=r);let i=Wg(`compass-arrows`),a=G.guests.emergencies.filter(e=>!e.handledBy).map(e=>({x:e.guest.pos.x,y:.5,z:e.guest.pos.z,label:`HELP!`})),o=``,s=G.camera,c=window.innerWidth,l=window.innerHeight;for(let e of a){let t=new z(e.x,e.y,e.z),n=t.distanceTo(s.position);t.project(s);let r=t.x,i=t.y,a=t.z>1;a&&(r=-r,i=-i);let u=!a&&Math.abs(r)<.9&&Math.abs(i)<.85;if(!u){let e=Math.max(Math.abs(r)/.9,Math.abs(i)/.85);r/=e,i/=e}let d=Math.atan2(r,i),f=(r*.5+.5)*c,p=(-i*.5+.5)*l;o+=`<div class="cmp-arrow" style="left:${f}px;top:${p}px"><div class="tri" style="transform:rotate(${u?180:d*180/Math.PI}deg)"></div><div class="lbl">${e.label} ${Math.round(n)}m</div></div>`}i.innerHTML!==o&&(i.innerHTML=o)}drawMinimap(){let e=this.mm,t=G.park,n=200/145,r=e=>(e- -70)*n,i=e=>(e- -70)*n;e.fillStyle=`#26402c`,e.fillRect(0,0,200,200);for(let a=0;a<4;a++)for(let o=0;o<4;o++)e.fillStyle=t.owned.includes(`${a},${o}`)?`#4f8a45`:`#31503a`,e.fillRect(r(-64+a*32)+.5,i(-64+o*32)+.5,32*n-1,32*n-1);e.fillStyle=`#c9bfa8`,e.fillRect(r(-14),i(64),28*n,9*n);for(let a of t.lists.all)a.def.kind===`path`&&(e.fillStyle=`#d8ccb0`,e.fillRect(r(a.x0),i(a.z0),a.W*n+.5,a.D*n+.5));for(let a of t.lists.all){let t=a.def;if(t.kind===`pool`)e.fillStyle=`#d9cfb8`,e.fillRect(r(a.x0),i(a.z0),a.W*n,a.D*n),a.hole&&!a.hole.circle?(e.fillStyle=a.quality>50?`#2ec5ef`:`#7a9a4a`,e.fillRect(r(a.hole.x0),i(a.hole.z0),(a.hole.x1-a.hole.x0)*n,(a.hole.z1-a.hole.z0)*n)):a.hole&&(e.fillStyle=`#ffb36a`,e.beginPath(),e.arc(r(a.cx),i(a.cz),a.hole.r*n,0,6.3),e.fill());else if(t.kind===`slide`){e.strokeStyle=`#`+(a.color||16777215).toString(16).padStart(6,`0`),e.lineWidth=2.2;for(let t of a.slide.design.lanes){e.beginPath();for(let n=0;n<=t.n;n+=10){let o=t.P[n].clone().applyMatrix4(a.slide.matrix);n===0?e.moveTo(r(o.x),i(o.z)):e.lineTo(r(o.x),i(o.z))}e.stroke()}a.hole&&(e.fillStyle=`#2ec5ef`,e.fillRect(r(a.hole.x0),i(a.hole.z0),(a.hole.x1-a.hole.x0)*n,(a.hole.z1-a.hole.z0)*n)),e.fillStyle=a.broken?`#ff4444`:`#e0e0e0`;let t=a.slide.entrance;e.fillRect(r(t.x)-2,i(t.z)-2,4,4)}else t.kind===`shop`?(e.fillStyle=`#ffb02a`,e.fillRect(r(a.x0),i(a.z0),a.W*n,a.D*n)):t.kind===`building`?(e.fillStyle=`#b8c4cc`,e.fillRect(r(a.x0),i(a.z0),a.W*n,a.D*n)):t.prefab===`palm`&&(e.fillStyle=`#2f7a2a`,e.beginPath(),e.arc(r(a.cx),i(a.cz),1.6,0,6.3),e.fill())}e.fillStyle=`#c08a40`;for(let t of G.effects.trash)e.fillRect(r(t.x)-.7,i(t.z)-.7,1.4,1.4);e.fillStyle=`rgba(255,255,255,0.85)`;for(let t of G.guests.list)e.fillRect(r(t.pos.x)-.8,i(t.pos.z)-.8,1.6,1.6);for(let t of G.staff.list)e.fillStyle=`#`+{janitor:3858298,lifeguard:16730698,pooltech:3840767,mechanic:16752682}[t.type].toString(16),e.fillRect(r(t.pos.x)-1.3,i(t.pos.z)-1.3,2.6,2.6);let a=3+Math.sin(G.time.real*8)*1.5;for(let t of G.guests.emergencies)e.strokeStyle=`#ff2a2a`,e.lineWidth=2,e.beginPath(),e.arc(r(t.guest.pos.x),i(t.guest.pos.z),a+2,0,6.3),e.stroke();e.fillStyle=`#27d3ff`,e.fillRect(r(-4),i(63.2),8*n,2);let o=G.player.pos;e.save(),e.translate(r(o.x),i(o.z)),e.rotate(-G.player.yaw),e.fillStyle=`#ffd34a`,e.strokeStyle=`#000`,e.lineWidth=1,e.beginPath(),e.moveTo(0,-6),e.lineTo(4.5,5),e.lineTo(0,2.5),e.lineTo(-4.5,5),e.closePath(),e.fill(),e.stroke(),e.restore()}levelUp(e,t,n,r){let i=Wg(`levelup`),a=n.slice(0,6).map((e,t)=>`<div class="lu-item" style="animation-delay:${.15+t*.08}s">${G.thumbs&&G.thumbs[e.key]?`<img src="${G.thumbs[e.key]}">`:``}${e.name}</div>`).join(``)+r.map(e=>`<div class="lu-item">${e.icon} Hire ${e.name}s</div>`).join(``);i.innerHTML=`<div class="lu-title">LEVEL ${e}!</div><div class="lu-sub">+${J(t)} bonus${n.length?` · New items unlocked`:``}</div><div class="lu-unlocks">${a}</div>`,i.classList.remove(`hidden`),clearTimeout(this.luTimer),this.luTimer=setTimeout(()=>i.classList.add(`hidden`),5200)}},Kg=()=>document.getElementById(`overlay-root`),qg=class{constructor(){this.open=null,this.catTab=`pools`,this.tabletTab=`overview`,this.el=null,this.refreshT=0,K.on(`cash`,()=>{this.open===`catalog`&&this.updateAffordability()})}close(e=!0){this.el&&(this.el.remove(),this.el=null);let t=this.open;return this.open=null,G.ui.blocking=!1,e&&!G.isTouch&&G.input.lock(),(t===`pause`||t===`summary`)&&G.sdk.gameplayStart(),G.hud.setCrosshairVisible(!0),t}_mount(e,t=``){this.el&&this.el.remove();let n=document.createElement(`div`);return n.className=`overlay `+t,n.innerHTML=e,Kg().appendChild(n),this.el=n,G.ui.blocking=!0,G.hud.setCrosshairVisible(!1),n.addEventListener(`mousedown`,e=>e.stopPropagation()),n}toggleCatalog(){this.open===`catalog`?this.close():(this.open&&this.close(!1),G.build.active&&G.build.moving&&G.build.cancelMove(),this.open=`catalog`,G.input.unlock(),this.renderCatalog(),G.audio.play(`open`,{vol:.5}))}renderCatalog(){let e=G.progression.level,t=Ph.map(e=>`<div class="tab ${e.key===this.catTab?`active`:``}" data-cat="${e.key}"><span class="tico">${e.icon}</span><span>${e.name}</span></div>`).join(``),n=Object.values(Fh).filter(e=>e.cat===this.catTab).map(t=>{let n=t.level>e,r=G.park.cash>=t.cost,i=!n&&!G.progression.seenUnlocks.has(t.key),a=G.thumbs&&G.thumbs[t.key]?`<img class="thumb" src="${G.thumbs[t.key]}">`:`<div class="thumb" style="display:flex;align-items:center;justify-content:center;font-size:42px">${t.kind===`tool`?t.tool===`sell`?`🔨`:`✋`:`🏗️`}</div>`;return`<div class="card ${n?`locked`:``}" data-key="${t.key}">${a}${n?`<div class="lock">🔒 Level ${t.level}</div>`:``}${i?`<div class="new">NEW</div>`:``}<div class="c-body"><div class="c-name">${t.name}</div><div class="c-desc">${t.desc}</div><div class="c-foot"><span class="c-price ${r||t.cost===0?``:`bad`}" data-cost="${t.cost}">${t.cost?J(t.cost):`Free`}</span>${t.size?`<span class="c-tag">${t.size[0]}×${t.size[1]}</span>`:t.kind===`pool`||t.kind===`slide`?`<span class="c-tag">${G.park.dimsFor(t).join(`×`)}</span>`:``}</div></div></div>`}).join(``),r=this._mount(`<div class="window"><div class="win-head"><div class="win-title">🏗️ Build</div><div class="win-cash" id="cat-cash">${J(G.park.cash)}</div><button class="btn x gray" id="cat-close">✕</button></div><div class="win-body"><div class="tabs">${t}</div><div class="content"><div class="grid">${n}</div></div></div></div>`);r.querySelectorAll(`.tab`).forEach(e=>e.addEventListener(`click`,()=>{this.catTab=e.dataset.cat,G.audio.play(`tick`,{vol:.4}),this.renderCatalog()})),r.querySelectorAll(`.card`).forEach(e=>e.addEventListener(`click`,()=>{let t=Fh[e.dataset.key];t.level>G.progression.level?G.audio.play(`error`,{vol:.5}):G.park.cash<t.cost?(G.audio.play(`error`,{vol:.5}),G.hud.toast(`Not enough cash`,`bad`)):(G.progression.seenUnlocks.add(t.key),this.close(!0),G.build.start(t.key),G.audio.play(`click`,{vol:.6}))})),r.querySelector(`#cat-close`).addEventListener(`click`,()=>this.close()),r.addEventListener(`click`,e=>{e.target===r&&this.close()})}updateAffordability(){if(!this.el)return;let e=this.el.querySelector(`#cat-cash`);e&&(e.textContent=J(G.park.cash)),this.el.querySelectorAll(`.c-price`).forEach(e=>e.classList.toggle(`bad`,Number(e.dataset.cost)>G.park.cash))}toggleTablet(e){this.open===`tablet`&&!e?this.close():(this.open&&this.close(!1),G.build.active&&G.build.stop(),this.open=`tablet`,e&&(this.tabletTab=e),G.input.unlock(),this.renderTablet(),G.audio.play(`open`,{vol:.5}))}renderTablet(){let e=[[`overview`,`📊`,`Overview`],[`finance`,`💰`,`Finances`],[`prices`,`🏷️`,`Prices`],[`staff`,`👷`,`Staff`],[`guests`,`💭`,`Guests`],[`land`,`🗺️`,`Land`],[`goals`,`🎯`,`Goals`],[`settings`,`⚙️`,`Settings`]].map(([e,t,n])=>`<div class="tab ${e===this.tabletTab?`active`:``}" data-tab="${e}"><span class="tico">${t}</span><span>${n}</span></div>`).join(``),t=this._mount(`<div class="window"><div class="win-head"><div class="win-title">📱 ${G.park.parkName} Manager</div><div class="win-cash" id="tab-cash">${J(G.park.cash)}</div><button class="btn x gray" id="tab-close">✕</button></div><div class="win-body"><div class="tabs">${e}</div><div class="content" id="tab-content"></div></div></div>`);t.querySelectorAll(`.tab`).forEach(e=>e.addEventListener(`click`,()=>{this.tabletTab=e.dataset.tab,G.audio.play(`tick`,{vol:.4}),this.renderTablet()})),t.querySelector(`#tab-close`).addEventListener(`click`,()=>this.close()),t.addEventListener(`click`,e=>{e.target===t&&this.close()}),this.renderTabletContent()}renderTabletContent(){let e=this.el&&this.el.querySelector(`#tab-content`);if(!e)return;let t=G.park,n=this.el.querySelector(`#tab-cash`);n&&(n.textContent=J(t.cash));let r=t.today,i=r.tickets+r.food+r.shops+r.tips+r.lockers+r.bonus,a=G.guests.list.filter(e=>e.inPark),o=a.length?a.reduce((e,t)=>e+t.happiness,0)/a.length:0,s=t.ratingParts,c=(e,t=`#27d3ff`)=>`<div class="mini-bar" style="height:8px"><div style="width:${Math.round(tf(e,0,1)*100)}%;background:${t}"></div></div>`;switch(this.tabletTab){case`overview`:e.innerHTML=`
          <div class="kpis">
            <div class="kpi"><div class="kl">Cash</div><div class="kv gold">${J(t.cash)}</div></div>
            <div class="kpi"><div class="kl">Guests in park</div><div class="kv">${a.length}</div></div>
            <div class="kpi"><div class="kl">Avg. happiness</div><div class="kv ${o>65?`green`:o<40?`red`:``}">${Math.round(o)}%</div></div>
            <div class="kpi"><div class="kl">Rating</div><div class="kv gold">${t.rating.toFixed(1)}★</div></div>
            <div class="kpi"><div class="kl">Income today</div><div class="kv green">${J(i)}</div></div>
            <div class="kpi"><div class="kl">Visitors today</div><div class="kv">${r.guestsIn}</div></div>
          </div>
          <div class="section-title">Rating breakdown</div>
          <div class="row"><div class="r-main"><div class="r-title">😊 Guest happiness</div>${c(s.happy,`#4ce08a`)}</div></div>
          <div class="row"><div class="r-main"><div class="r-title">🧽 Cleanliness</div><div class="r-sub">Litter: ${G.effects.trash.length} · Pools & restrooms condition</div>${c(s.clean)}</div></div>
          <div class="row"><div class="r-main"><div class="r-title">🎢 Attractions</div><div class="r-sub">${t.lists.pools.length} pools · ${t.lists.slides.length} slides · ${t.lists.shops.length} shops</div>${c(s.attractions,`#ffd34a`)}</div></div>
          <div class="row"><div class="r-main"><div class="r-title">🌴 Scenery</div><div class="r-sub">Palms, flowers, fountains & decorations</div>${c(s.scenery,`#7cffd4`)}</div></div>
          <div class="row"><div class="r-main"><div class="r-title">🛟 Safety & facilities</div><div class="r-sub">Restrooms, lifeguards on towers, first aid, bins</div>${c(s.safety,`#ff8a6a`)}</div></div>
          <div class="section-title">Boosts</div>
          <div class="row"><div class="r-ico">📣</div><div class="r-main"><div class="r-title">Advertising campaign</div><div class="r-sub">+60% visitors for 6 in-game hours ${t.marketing>0?`· <b style="color:#4ce08a">ACTIVE ${Math.ceil(t.marketing/60)}h left</b>`:``}</div></div><button class="btn small gold" id="btn-ad" ${t.marketing>0?`disabled`:``}>${J(this.adCost())}</button></div>
          <div class="row"><div class="r-ico">🎬</div><div class="r-main"><div class="r-title">Sponsor deal</div><div class="r-sub">Watch a short ad to receive ${J(this.sponsorValue())}</div></div><button class="btn small green" id="btn-sponsor" ${this.sponsorCD()>0?`disabled`:``}>${this.sponsorCD()>0?Math.ceil(this.sponsorCD())+`s`:`▶ Watch`}</button></div>
          <div class="row"><div class="r-ico">⏩</div><div class="r-main"><div class="r-title">Game speed</div><div class="r-sub">Press T to cycle</div></div><div class="seg" id="seg-speed">${[1,2,3].map(e=>`<button class="${G.time.speed===e?`on`:``}" data-s="${e}">${e}x</button>`).join(``)}</div></div>`,e.querySelector(`#btn-ad`).addEventListener(`click`,()=>{let e=this.adCost();t.cash>=e?(t.spend(e,`upkeep`),t.marketing=360,G.audio.play(`cash`),G.hud.toast(`📣 Advertising campaign launched!`,`good`),this.renderTabletContent()):G.audio.play(`error`)}),e.querySelector(`#btn-sponsor`).addEventListener(`click`,()=>this.watchSponsor()),e.querySelectorAll(`#seg-speed button`).forEach(e=>e.addEventListener(`click`,()=>{G.time.speed=Number(e.dataset.s),this.renderTabletContent()}));break;case`finance`:{let n=t.history.slice(-10),i=Math.max(100,...n.map(e=>Math.abs(e.profit))),a=n.map(e=>`<div class="b ${e.profit<0?`neg`:``}" style="height:${Math.max(2,Math.abs(e.profit)/i*100)}%" title="${J(e.profit)}"><span>D${e.day}</span></div>`).join(``)||`<div style="color:#9fb6c6">Finish your first day to see history.</div>`;e.innerHTML=`
          <div class="section-title">Today</div>
          <table class="sum-table">
            <tr><td>🎟️ Tickets</td><td class="pos">${J(r.tickets)}</td></tr>
            <tr><td>🍔 Food & drinks</td><td class="pos">${J(r.food)}</td></tr>
            <tr><td>🛍️ Shops</td><td class="pos">${J(r.shops)}</td></tr>
            <tr><td>🪙 Tips</td><td class="pos">${J(r.tips)}</td></tr>
            <tr><td>🔐 Lockers</td><td class="pos">${J(r.lockers)}</td></tr>
            <tr><td>🎁 Bonuses & rewards</td><td class="pos">${J(r.bonus)}</td></tr>
            <tr><td>🏗️ Construction</td><td class="neg">-${J(r.build)}</td></tr>
            <tr><td>🗺️ Land</td><td class="neg">-${J(r.land)}</td></tr>
            <tr><td>👷 Wages (due at close)</td><td class="neg">-${J(Object.entries(t.staff).reduce((e,[t,n])=>e+Ih[t].wage*n,0))}</td></tr>
            <tr><td>🔧 Upkeep (due at close)</td><td class="neg">-${J(t.lists.all.reduce((e,t)=>e+(t.def.upkeep||0),0))}</td></tr>
          </table>
          <div class="section-title" style="margin-top:18px">Daily profit</div>
          <div class="bars">${a}</div>
          <div class="section-title" style="margin-top:26px">Records</div>
          <div class="kpis"><div class="kpi"><div class="kl">Best day</div><div class="kv gold">${J(t.records.bestDay)}</div></div><div class="kpi"><div class="kl">Most guests at once</div><div class="kv">${t.records.maxGuests}</div></div><div class="kpi"><div class="kl">Total visitors</div><div class="kv">${t.records.totalGuests}</div></div><div class="kpi"><div class="kl">Total earned</div><div class="kv green">${J(t.records.totalEarned)}</div></div></div>`;break}case`prices`:{let n=Math.round(9+t.rating*5.5+Math.min(12,t.lists.slides.length*2+t.lists.pools.length));e.innerHTML=`
          <div class="row"><div class="r-ico">🎟️</div><div class="r-main"><div class="r-title">Entry ticket <span style="color:#ffd34a" id="tp-val">${J(t.ticketPrice)}</span></div><div class="r-sub">Guests currently think a fair price is around <b>${J(n)}</b>. Kids pay 60%.</div></div><input type="range" min="0" max="120" step="1" value="${t.ticketPrice}" id="tp"></div>
          <div class="row"><div class="r-ico">🍔</div><div class="r-main"><div class="r-title">Food & drink prices <span style="color:#ffd34a" id="fp-val">${Math.round(t.foodMult*100)}%</span></div><div class="r-sub">Higher prices earn more per sale but annoy guests above ~135%.</div></div><input type="range" min="50" max="250" step="5" value="${Math.round(t.foodMult*100)}" id="fp"></div>
          <div class="section-title" style="margin-top:14px">Menu</div>
          ${Object.values(Fh).filter(e=>e.shop).map(e=>`<div class="row"><div class="r-main"><div class="r-title">${e.name}</div><div class="r-sub">${e.desc}</div></div><b style="color:#ffd34a">${J(e.shop.price*t.foodMult)}</b></div>`).join(``)}`,e.querySelector(`#tp`).addEventListener(`input`,n=>{t.ticketPrice=Number(n.target.value),e.querySelector(`#tp-val`).textContent=J(t.ticketPrice)}),e.querySelector(`#fp`).addEventListener(`input`,n=>{t.foodMult=Number(n.target.value)/100,e.querySelector(`#fp-val`).textContent=Math.round(t.foodMult*100)+`%`});break}case`staff`:e.innerHTML=Object.entries(Ih).map(([e,n])=>{let r=n.level>G.progression.level;return`<div class="row" style="${r?`opacity:.5`:``}"><div class="r-ico">${n.icon}</div><div class="r-main"><div class="r-title">${n.name}s ${r?`<span style="color:#ffd34a;font-size:12px">🔒 Level ${n.level}</span>`:``}</div><div class="r-sub">${n.desc} · ${J(n.wage)}/day each</div></div>
            <button class="btn small gray" data-fire="${e}" ${r||!t.staff[e]?`disabled`:``}>−</button><div class="count">${t.staff[e]||0}</div><button class="btn small green" data-hire="${e}" ${r?`disabled`:``}>+ Hire</button></div>`}).join(``)+`<div class="r-sub" style="margin-top:10px;color:#9fb6c6">Lifeguards sit on Lifeguard Towers (build them next to pools). Wages are paid at the end of each day.</div>`,e.querySelectorAll(`[data-hire]`).forEach(e=>e.addEventListener(`click`,()=>{let n=e.dataset.hire;(t.staff[n]||0)>=12||(t.staff[n]=(t.staff[n]||0)+1,G.staff.sync(),G.audio.play(`click`),K.emit(`hired`,n),this.renderTabletContent(),n===`lifeguard`&&!(t.lists.fac.lifeguard||[]).length&&G.hud.toast(`Tip: build a Lifeguard Tower next to your pools!`,`gold`))})),e.querySelectorAll(`[data-fire]`).forEach(e=>e.addEventListener(`click`,()=>{let n=e.dataset.fire;t.staff[n]=Math.max(0,(t.staff[n]||0)-1),G.staff.sync(),G.audio.play(`tick`),this.renderTabletContent()}));break;case`guests`:{let t=[...G.guests.thoughtFeed].sort((e,t)=>t.t-e.t);e.innerHTML=`<div class="kpis"><div class="kpi"><div class="kl">In park</div><div class="kv">${a.length}</div></div><div class="kpi"><div class="kl">Avg. happiness</div><div class="kv">${Math.round(o)}%</div></div><div class="kpi"><div class="kl">Avg. wallet</div><div class="kv gold">${J(a.length?a.reduce((e,t)=>e+t.cash,0)/a.length:0)}</div></div><div class="kpi"><div class="kl">Hungry / Thirsty</div><div class="kv">${a.filter(e=>e.needs.hunger>.6).length} / ${a.filter(e=>e.needs.thirst>.6).length}</div></div></div>
          <div class="section-title">What guests are saying</div>
          ${t.map(e=>`<div class="thought ${e.kind}"><span>“${e.text}”</span><span class="tc">×${e.count}</span></div>`).join(``)||`<div class="r-sub">No thoughts yet.</div>`}`;break}case`land`:{let n=``;for(let e=0;e<4;e++)for(let r=0;r<4;r++){let i=`${r},${e}`,a=t.owned.includes(i),o=t.canBuyPlot(i);n+=`<div class="plot ${a?`owned`:o?`buy`:`no`} ${e===3&&(r===1||r===2)?`gate`:``}" data-plot="${i}">${a?`✓ Owned`:o?`🏷️ `+J(t.landPrice()):`—`}</div>`}e.innerHTML=`<div class="section-title">Expand your park (north is up, entrance at the bottom)</div><div class="landmap">${n}</div><div class="r-sub" style="margin-top:12px">Each plot is 32×32 m. You can also buy land in-world by walking to a <b>FOR SALE</b> sign.</div>`,e.querySelectorAll(`.plot.buy`).forEach(e=>e.addEventListener(`click`,()=>{let n=e.dataset.plot;t.cash<t.landPrice()?(G.audio.play(`error`),G.hud.toast(`Not enough cash`,`bad`)):t.buyPlot(n)&&(G.audio.play(`cash`),this.renderTabletContent())}));break}case`goals`:{let t=G.progression;e.innerHTML=`<div class="kpis"><div class="kpi"><div class="kl">Level</div><div class="kv">${t.level}</div></div><div class="kpi"><div class="kl">XP</div><div class="kv">${t.xp.toLocaleString()}</div></div><div class="kpi"><div class="kl">Goals completed</div><div class="kv green">${t.completedQuests}</div></div></div>
          <div class="section-title">Active goals</div>
          ${t.quests.filter(e=>!e.done).map(e=>`<div class="row"><div class="r-ico">🎯</div><div class="r-main"><div class="r-title">${e.text}</div><div class="r-sub">${e.hint||``}</div>${c(e.progress/e.goal,`#4ce08a`)}</div><b style="color:#ffd34a">+${J(e.cash)}</b></div>`).join(``)}
          <div class="section-title" style="margin-top:14px">Next unlocks</div>
          ${Object.values(Fh).filter(e=>e.level>t.level&&e.level<=t.level+2).map(e=>`<div class="row"><div class="r-ico">🔒</div><div class="r-main"><div class="r-title">${e.name}</div><div class="r-sub">Level ${e.level} · ${e.desc}</div></div></div>`).join(``)}`;break}case`settings`:e.innerHTML=this.settingsHTML(),this.bindSettings(e)}}adCost(){return 400+G.progression.level*250}sponsorValue(){return 500+G.progression.level*250}sponsorCD(){return Math.max(0,(this.sponsorAt||-999)+240-G.time.real)}async watchSponsor(){this.sponsorCD()>0||(await G.ads.rewarded()&&(this.sponsorAt=G.time.real,G.park.earn(this.sponsorValue(),`bonus`,!1),G.audio.play(`jackpot`),G.hud.toast(`🎬 Sponsor paid ${J(this.sponsorValue())}!`,`gold`)),this.open===`tablet`&&this.renderTabletContent())}settingsHTML(){let e=G.settings;return`
      <div class="settings-row"><span>Graphics quality</span><div class="seg" id="seg-q">${[`auto`,`low`,`medium`,`high`].map(t=>`<button class="${e.quality===t?`on`:``}" data-q="${t}">${t[0].toUpperCase()+t.slice(1)}</button>`).join(``)}</div></div>
      <div class="settings-row"><span>Master volume</span><input type="range" min="0" max="100" value="${Math.round(e.volume*100)}" data-set="volume"></div>
      <div class="settings-row"><span>Music</span><input type="range" min="0" max="100" value="${Math.round(e.music*100)}" data-set="music"></div>
      <div class="settings-row"><span>Sound effects</span><input type="range" min="0" max="100" value="${Math.round(e.sfx*100)}" data-set="sfx"></div>
      <div class="settings-row"><span>Mouse sensitivity</span><input type="range" min="20" max="300" value="${Math.round(e.sensitivity*100)}" data-set="sensitivity"></div>
      <div class="settings-row"><span>Field of view</span><input type="range" min="60" max="100" value="${e.fov}" data-set="fov"></div>
      <div class="settings-row"><span>Invert mouse Y</span><div class="seg" id="seg-inv"><button class="${e.invertY?``:`on`}" data-v="0">Off</button><button class="${e.invertY?`on`:``}" data-v="1">On</button></div></div>
      <div class="settings-row"><span>Show FPS</span><div class="seg" id="seg-fps"><button class="${e.showFps?``:`on`}" data-v="0">Off</button><button class="${e.showFps?`on`:``}" data-v="1">On</button></div></div>
      <div class="settings-row"><span style="color:#ff9a9a">Start a new park</span><button class="btn small red" id="btn-reset">Reset progress</button></div>`}bindSettings(e){let t=G.settings;e.querySelectorAll(`#seg-q button`).forEach(n=>n.addEventListener(`click`,()=>{t.quality=n.dataset.q,G.applyQuality(!0),G.saveSettings(),e.querySelectorAll(`#seg-q button`).forEach(e=>e.classList.toggle(`on`,e===n))})),e.querySelectorAll(`input[data-set]`).forEach(e=>e.addEventListener(`input`,()=>{let n=e.dataset.set,r=Number(e.value);n===`fov`?t.fov=r:t[n]=r/100,G.audio.applyVolumes(),G.saveSettings()})),e.querySelectorAll(`#seg-inv button`).forEach(n=>n.addEventListener(`click`,()=>{t.invertY=n.dataset.v===`1`,G.saveSettings(),e.querySelectorAll(`#seg-inv button`).forEach(e=>e.classList.toggle(`on`,e===n))})),e.querySelectorAll(`#seg-fps button`).forEach(n=>n.addEventListener(`click`,()=>{t.showFps=n.dataset.v===`1`,G.saveSettings(),e.querySelectorAll(`#seg-fps button`).forEach(e=>e.classList.toggle(`on`,e===n))}));let n=e.querySelector(`#btn-reset`);n&&n.addEventListener(`click`,()=>{n.dataset.confirm?G.resetGame():(n.dataset.confirm=`1`,n.textContent=`Click again to confirm`)})}showPause(){if(this.open===`pause`)return;this.open&&this.close(!1),this.open=`pause`,G.sdk.gameplayStop();let e=this._mount(`<div class="center-card"><div class="pause-logo">SPLASH HAVEN</div><h2>Paused</h2>
      <div class="btns"><button class="btn green" id="p-resume">▶ Resume</button><button class="btn" id="p-manage">📱 Manage park</button><button class="btn gray" id="p-settings">⚙️ Settings</button><button class="btn gray" id="p-help">❓ Controls</button></div><div id="p-extra"></div></div>`);e.querySelector(`#p-resume`).addEventListener(`click`,()=>{this.close(!0)}),e.querySelector(`#p-manage`).addEventListener(`click`,()=>{this.close(!1),G.sdk.gameplayStart(),this.toggleTablet(`overview`)}),e.querySelector(`#p-settings`).addEventListener(`click`,()=>{let t=e.querySelector(`#p-extra`);t.innerHTML=this.settingsHTML(),this.bindSettings(t)}),e.querySelector(`#p-help`).addEventListener(`click`,()=>{e.querySelector(`#p-extra`).innerHTML=Jg()})}showSummary(e){this.open&&this.close(!1),G.build.active&&G.build.stop(),this.open=`summary`,G.input.unlock(),G.sdk.gameplayStop();let t=e.stats,n=t.happyN?Math.round(t.happySum/t.happyN):0,r=this._mount(`<div class="center-card"><h1>🌙 Day ${e.day} complete!</h1><h2>${G.park.parkName} daily report</h2>
      <table class="sum-table">
        <tr><td>🎟️ Visitors</td><td>${t.guestsIn}</td></tr>
        <tr><td>😊 Happiness of leaving guests</td><td>${n}%</td></tr>
        <tr><td>🎢 Slide rides · 🏊 swims</td><td>${t.rides} · ${t.swims}</td></tr>
        <tr><td>💵 Income</td><td class="pos">${J(e.income)}</td></tr>
        <tr><td>👷 Wages</td><td class="neg">-${J(t.wages)}</td></tr>
        <tr><td>🔧 Upkeep</td><td class="neg">-${J(t.upkeep)}</td></tr>
        <tr class="tot"><td>Profit</td><td class="${e.profit>=0?`pos`:`neg`}">${J(e.profit)}</td></tr>
      </table>
      ${e.newRecord?`<div class="record">🏆 NEW RECORD DAY!</div>`:``}
      <div class="btns">
        ${e.profit>0?`<button class="btn gold" id="s-double">🎬 Watch ad: +${J(Math.max(250,e.income*.5))} bonus</button>`:``}
        <button class="btn green" id="s-next">☀️ Start Day ${e.day+1}</button>
      </div></div>`),i=r.querySelector(`#s-next`);i.addEventListener(`click`,async()=>{i.disabled=!0,this.close(!0),G.startNextDay(),e.day>=2&&await G.ads.midgame()});let a=r.querySelector(`#s-double`);a&&a.addEventListener(`click`,async()=>{if(a.disabled=!0,await G.ads.rewarded()){let t=Math.round(Math.max(250,e.income*.5));G.park.earn(t,`bonus`,!1),G.audio.play(`jackpot`),a.textContent=`✅ +${J(t)} added!`}else a.textContent=`Ad not available right now`})}update(e){this.open===`tablet`&&(this.refreshT-=e,this.refreshT<=0&&(this.refreshT=1,[`overview`,`guests`,`finance`].includes(this.tabletTab)&&!document.activeElement?.matches?.(`input`)&&this.renderTabletContent()))}};function Jg(){return`<div class="keys-help">
    <span class="kk">W A S D</span><span>Move · <b>Shift</b> sprint</span>
    <span class="kk">Mouse</span><span>Look around</span>
    <span class="kk">Space</span><span>Jump · swim up · climb out of pools</span>
    <span class="kk">C</span><span>Dive underwater</span>
    <span class="kk">E</span><span>Interact · pick up litter · ride slides · rescue</span>
    <span class="kk">LMB</span><span>Use tool (hold to skim / repair)</span>
    <span class="kk">1 2 3</span><span>Grabber · Skimmer · Wrench (or mouse wheel)</span>
    <span class="kk">B</span><span>Build menu · <b>R</b> rotate · <b>C</b> colour · <b>RMB</b> exit</span>
    <span class="kk">Tab</span><span>Park manager tablet</span>
    <span class="kk">T</span><span>Game speed 1x / 2x / 3x</span>
    <span class="kk">Esc</span><span>Pause</span></div>`}async function Yg(e,t,n){let r=new Xn,i=document.createElement(`canvas`);i.width=4,i.height=64;let a=i.getContext(`2d`),o=a.createLinearGradient(0,0,0,64);o.addColorStop(0,`#5fb6e6`),o.addColorStop(1,`#1d4a66`),a.fillStyle=o,a.fillRect(0,0,4,64);let s=new Na(i);s.colorSpace=Ye,r.background=s,r.environment=t,r.environmentIntensity=.45,r.add(new Qs(14676735,5925701,.7));let c=new hc(16773856,2.6);c.position.set(5,9,6),r.add(c);let l=new U({color:4155956,roughness:1}),u=new Ni(new za(60,32).rotateX(-Math.PI/2),l);u.position.y=-.02,r.add(u);let d=new uc(32,192/144,.1,500),f={},p=document.createElement(`canvas`);p.width=192,p.height=144;let m=p.getContext(`2d`),h=e.shadowMap.enabled;e.shadowMap.enabled=!1;let g=Object.values(Fh).filter(e=>e.kind!==`tool`),_=new R;e.getSize(_);let v=e.getPixelRatio(),y=0;for(let t of g){let i,a=!1;try{if(t.kind===`pool`){let e=t.pool;if(e.jacuzzi)i=uh(e).group;else{let t={...e};e.kids&&(t.extras=e=>dh(e)),e.wave&&(t.extras=t=>fh(t,e.W,e.L)),e.band&&(t.band=X.poolTileDark),i=lh(t).group}a=!0}else t.kind===`slide`?(i=kh(t.slide,ep.slide[y%ep.slide.length]).group,a=!0):i=em(Hm(t.prefab))}catch(e){console.warn(`thumb fail`,t.key,e);continue}t.colorable&&i.traverse(e=>{e.isMesh&&e.material.userData.instColor&&(e.material=e.material.clone(),e.material.color.setHex(ep.fabric[y%8]))}),r.add(i),u.position.y=t.kind===`pool`||t.kind===`slide`?-3:-.02;let o=new dr().setFromObject(i).getBoundingSphere(new Fr),s=Math.max(.4,o.radius)/Math.sin(Ht.degToRad(16))*(t.kind===`pool`?.62:t.kind===`slide`?.7:.8),c=t.kind===`path`?new z(.6,1.1,.9).normalize():t.kind===`pool`?new z(.7,.9,1).normalize():new z(.75,.5,1).normalize();d.position.copy(o.center).addScaledVector(c,s),d.lookAt(o.center),d.near=s*.05,d.far=s*4,d.updateProjectionMatrix(),e.setScissorTest(!0),e.setViewport(0,0,192/v,144/v),e.setScissor(0,0,192/v,144/v),e.render(r,d);let l=e.domElement;m.clearRect(0,0,192,144),m.drawImage(l,0,l.height-144,192,144,0,0,192,144),f[t.key]=p.toDataURL(`image/jpeg`,.85),r.remove(i),a&&i.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.userData&&e.material.userData.isWater&&e.material.dispose())}),y++,y%6==0&&(n&&n(y/g.length),await new Promise(e=>setTimeout(e,0)))}return e.setScissorTest(!1),e.setViewport(0,0,_.x,_.y),e.shadowMap.enabled=h,f}var Xg=class{constructor(){this.ctx=null,this.ready=!1,this.muteReasons=new Set,this.whoosh=null,this.musicOn=!0}init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.filter=t.createBiquadFilter(),this.filter.type=`lowpass`,this.filter.frequency.value=2e4,this.filter.Q.value=.7,this.master.connect(this.filter),this.filter.connect(t.destination),this.sfx=t.createGain(),this.sfx.connect(this.master),this.music=t.createGain(),this.music.connect(this.master),this.amb=t.createGain(),this.amb.connect(this.master);let n=e=>{let n=t.sampleRate*2,r=t.createBuffer(1,n,t.sampleRate),i=r.getChannelData(0),a=0,o=0,s=0,c=0;for(let t=0;t<n;t++){let n=Math.random()*2-1;e===`white`?i[t]=n:e===`brown`?(a=(a+.02*n)/1.02,i[t]=a*3.5):(o=.997*o+n*.029591,s=.985*s+n*.032534,c=.95*c+n*.048056,i[t]=(o+s+c+n*.05)*1.6)}return r};this.noise={white:n(`white`),pink:n(`pink`),brown:n(`brown`)},this._startAmbience(),this._startMusic(),this.applyVolumes(),this.ready=!0}applyVolumes(){if(!this.ctx)return;let e=G.settings,t=this.muteReasons.size>0,n=this.ctx.currentTime;this.master.gain.setTargetAtTime(t?0:e.volume,n,.05),this.sfx.gain.setTargetAtTime(e.sfx,n,.05),this.music.gain.setTargetAtTime(e.music*.32,n,.2),this.amb.gain.setTargetAtTime(e.sfx*.9,n,.2)}setMuted(e,t){t?this.muteReasons.add(e):this.muteReasons.delete(e),this.applyVolumes()}setUnderwater(e){this.ctx&&this.filter.frequency.setTargetAtTime(e?600:2e4,this.ctx.currentTime,.08)}_env(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+i)}_osc(e,t,n,r,i,a,o,s){let c=this.ctx.createOscillator(),l=this.ctx.createGain();return c.type=e,c.frequency.setValueAtTime(t,n),s&&c.frequency.exponentialRampToValueAtTime(s,n+r+a),this._env(l,n,r,i,a),c.connect(l),l.connect(o),c.start(n),c.stop(n+r+a+.05),c}_noise(e,t,n,r,i,a,o,s,c,l=1){let u=this.ctx.createBufferSource();u.buffer=this.noise[e],u.playbackRate.value=.8+Math.random()*.4;let d=this.ctx.createBiquadFilter();d.type=o,d.frequency.setValueAtTime(s,t),d.Q.value=l,c&&d.frequency.exponentialRampToValueAtTime(c,t+n+i);let f=this.ctx.createGain();this._env(f,t,n,r,i),u.connect(d),d.connect(f),f.connect(a),u.start(t,Math.random()),u.stop(t+n+i+.05)}play(e,t={}){if(!this.ctx||this.ctx.state!==`running`)return;let n=this.ctx,r=t.vol??1,i=this.sfx;if(t.pos&&G.camera){let e=G.camera.position,a=e.distanceTo(t.pos);if(a>70)return;r*=1/(1+a*.09);let o=n.createStereoPanner(),s=new z(1,0,0).applyQuaternion(G.camera.quaternion),c=t.pos.clone().sub(e).normalize();o.pan.value=Math.max(-.9,Math.min(.9,c.dot(s))),o.connect(this.sfx),i=o}if(r<.01)return;let a=n.currentTime+.005;switch(e){case`coin`:this._osc(`square`,1318.5,a,.003,.08*r,.09,i),this._osc(`square`,1975.5,a+.07,.003,.08*r,.25,i),this._osc(`sine`,3951,a+.07,.003,.05*r,.3,i);break;case`cash`:this._noise(`white`,a,.005,.25*r,.05,i,`bandpass`,3e3),[2093,2637,3136].forEach((e,t)=>this._osc(`sine`,e,a+.06+t*.03,.005,.12*r,.6,i));break;case`jackpot`:[523,659,784,1047,1319,1568].forEach((e,t)=>this._osc(`triangle`,e,a+t*.07,.005,.18*r,.35,i)),[2093,2637,3136].forEach((e,t)=>this._osc(`sine`,e,a+.45+t*.05,.005,.1*r,.8,i));break;case`splash`:this._noise(`white`,a,.01,.35*r,.45,i,`bandpass`,1800,300,.8),this._osc(`sine`,110,a,.005,.25*r,.18,i,50);break;case`splashBig`:this._noise(`white`,a,.01,.6*r,1.1,i,`bandpass`,2200,220,.6),this._noise(`white`,a+.05,.05,.25*r,.9,i,`highpass`,3e3,1500),this._osc(`sine`,90,a,.005,.5*r,.3,i,40);break;case`step`:this._noise(`brown`,a,.004,.5*r,.08,i,`lowpass`,700);break;case`stepHard`:this._noise(`white`,a,.002,.18*r,.05,i,`bandpass`,1400,900,1.2);break;case`stepWater`:this._noise(`white`,a,.01,.2*r,.18,i,`bandpass`,1200,400);break;case`jump`:this._noise(`pink`,a,.01,.1*r,.1,i,`bandpass`,600);break;case`land`:this._noise(`brown`,a,.004,.6*r,.15,i,`lowpass`,400);break;case`pickup`:this._osc(`sine`,500,a,.004,.25*r,.09,i,1100),this._noise(`white`,a,.002,.1*r,.03,i,`highpass`,4e3);break;case`build`:this._osc(`sine`,120,a,.004,.6*r,.25,i,45),this._osc(`triangle`,320,a+.02,.003,.2*r,.15,i,260),this._noise(`brown`,a,.005,.4*r,.3,i,`lowpass`,900),this._osc(`sine`,880,a+.12,.004,.08*r,.3,i),this._osc(`sine`,1320,a+.18,.004,.06*r,.35,i);break;case`sell`:this._osc(`sawtooth`,700,a,.01,.08*r,.3,i,150),this._noise(`brown`,a,.01,.5*r,.35,i,`lowpass`,600);break;case`tick`:this._osc(`square`,2200,a,.001,.05*r,.025,i);break;case`click`:this._osc(`triangle`,1200,a,.002,.15*r,.05,i,900);break;case`open`:this._noise(`pink`,a,.06,.12*r,.18,i,`bandpass`,600,2400,1.5);break;case`error`:this._osc(`square`,190,a,.005,.07*r,.1,i),this._osc(`square`,140,a+.11,.005,.07*r,.16,i);break;case`levelup`:[523.25,659.25,783.99,1046.5].forEach((e,t)=>{this._osc(`triangle`,e,a+t*.11,.005,.22*r,.4,i),this._osc(`sine`,e*2,a+t*.11,.005,.06*r,.5,i)}),[1046.5,1318.5,1568].forEach(e=>this._osc(`triangle`,e,a+.5,.01,.15*r,1.3,i)),this._noise(`white`,a+.5,.2,.06*r,1,i,`highpass`,6e3);break;case`quest`:this._osc(`sine`,784,a,.005,.2*r,.35,i),this._osc(`sine`,1046.5,a+.1,.005,.2*r,.6,i),this._osc(`triangle`,1568,a+.1,.005,.06*r,.6,i);break;case`duck`:{let e=this._osc(`sine`,900,a,.01,.25*r,.25,i);e.frequency.linearRampToValueAtTime(1500,a+.08),e.frequency.linearRampToValueAtTime(1e3,a+.26),this.play(`coin`,{vol:.6});break}case`whistle`:{let e=this.ctx.createOscillator(),t=this.ctx.createGain(),n=this.ctx.createOscillator(),o=this.ctx.createGain();e.frequency.value=2900,n.frequency.value=28,o.gain.value=140,n.connect(o),o.connect(e.frequency),this._env(t,a,.02,.12*r,.7),e.connect(t),t.connect(i),e.start(a),n.start(a),e.stop(a+.8),n.stop(a+.8);break}case`clank`:this._osc(`square`,420+Math.random()*80,a,.001,.07*r,.12,i),this._osc(`sine`,1310+Math.random()*200,a,.001,.08*r,.25,i);break;case`fixed`:[660,880,1320].forEach((e,t)=>this._osc(`triangle`,e,a+t*.08,.005,.15*r,.25,i));break;case`swish`:this._noise(`white`,a,.04,.12*r,.18,i,`bandpass`,1200,3e3,1.5);break;case`launch`:this._osc(`sine`,500,a,.05,.05*r,1.2,i,1900),this._noise(`white`,a,.05,.08*r,1,i,`highpass`,3e3);break;case`boom`:{let e=t.pos&&G.camera?Math.min(.5,G.camera.position.distanceTo(t.pos)/340):0;this._noise(`brown`,a+e,.005,1*r,1.8,i,`lowpass`,300,80),this._osc(`sine`,60,a+e,.005,.6*r,.8,i,30);for(let t=0;t<10;t++)this._noise(`white`,a+e+.3+Math.random()*1.2,.002,.05*r,.03,i,`highpass`,5e3);break}}}startWhoosh(){if(!this.ctx)return;this.stopWhoosh();let e=this.ctx.createBufferSource();e.buffer=this.noise.pink,e.loop=!0;let t=this.ctx.createBiquadFilter();t.type=`bandpass`,t.frequency.value=500,t.Q.value=.6;let n=this.ctx.createGain();n.gain.value=0,e.connect(t),t.connect(n),n.connect(this.sfx),e.start(),this.whoosh={s:e,f:t,g:n}}setWhoosh(e){if(!this.whoosh)return;let t=this.ctx.currentTime;this.whoosh.g.gain.setTargetAtTime(Math.min(.9,e*.06),t,.1),this.whoosh.f.frequency.setTargetAtTime(300+e*90,t,.1)}stopWhoosh(){if(!this.whoosh)return;let e=this.whoosh;this.whoosh=null,e.g.gain.setTargetAtTime(0,this.ctx.currentTime,.1),setTimeout(()=>{try{e.s.stop()}catch{}},500)}_loop(e,t,n,r=1){let i=this.ctx.createBufferSource();i.buffer=this.noise[e],i.loop=!0;let a=this.ctx.createBiquadFilter();a.type=t,a.frequency.value=n,a.Q.value=r;let o=this.ctx.createGain();return o.gain.value=0,i.connect(a),a.connect(o),o.connect(this.amb),i.start(),{s:i,f:a,g:o}}_startAmbience(){this.crowd=this._loop(`pink`,`bandpass`,750,.7),this.crowd2=this._loop(`pink`,`bandpass`,1600,1.2),this.waterAmb=this._loop(`brown`,`lowpass`,600,.5),this.rainAmb=this._loop(`white`,`highpass`,1400,.4),this.windAmb=this._loop(`brown`,`bandpass`,260,.4),this.birdT=1,this.cricketT=1}updateAmbience(e){if(!this.ctx||this.ctx.state!==`running`)return;let t=this.ctx.currentTime,n=G.camera.position,r=0;for(let e of G.guests.list){let t=Math.hypot(e.pos.x-n.x,e.pos.z-n.z);t<30&&(r+=1-t/30)}let i=Math.min(.35,r*.03)*(.8+Math.sin(t*.7)*.2);this.crowd.g.gain.setTargetAtTime(i,t,.5),this.crowd2.g.gain.setTargetAtTime(i*.35*(.6+Math.sin(t*1.9)*.4),t,.3);let a=99;for(let e of G.park.lists.pools)a=Math.min(a,Math.hypot(e.cx-n.x,e.cz-n.z)-Math.max(e.W,e.D)*.4);let o=Math.max(0,1-a/25)*.22*(.8+Math.sin(t*.43)*.2)+(G.player.mode===`swim`?.25:0);this.waterAmb.g.gain.setTargetAtTime(o,t,.4);let s=G.env.weatherBlend.rain;this.rainAmb.g.gain.setTargetAtTime(s*.22,t,.5),this.windAmb.g.gain.setTargetAtTime(.03+G.env.weatherBlend.cover*.05,t,1);let c=G.env.nightF;if(this.birdT-=e,this.birdT<=0&&(this.birdT=1.5+Math.random()*5,c<.5&&s<.5&&this._chirp()),this.cricketT-=e,this.cricketT<=0&&(this.cricketT=.4+Math.random()*.6,c>.5))for(let e=0;e<3;e++)this._osc(`sine`,4400+Math.random()*300,t+e*.05,.004,.012,.03,this.amb)}_chirp(){let e=this.ctx.currentTime,t=2600+Math.random()*2400,n=2+Math.floor(Math.random()*4),r=this.ctx.createStereoPanner();r.pan.value=Math.random()*1.6-.8,r.connect(this.amb);for(let i=0;i<n;i++)this._osc(`sine`,t,e+i*.12,.01,.025,.08,r).frequency.linearRampToValueAtTime(t*(1.2+Math.random()*.4),e+i*.12+.05)}_startMusic(){let e=this.ctx;this.bpm=98,this.step=0,this.nextT=e.currentTime+.3,this.prog=[[53,57,60,65],[48,52,55,60],[50,53,57,62],[46,50,53,58],[55,58,62,67],[48,52,55,60],[53,57,60,65],[46,50,53,58]],this.melodyRng=1,this.musicTimer=setInterval(()=>this._schedule(),30)}_mtof(e){return 440*2**((e-69)/12)}_schedule(){let e=this.ctx;if(!e||e.state!==`running`)return;let t=60/this.bpm/4;for(;this.nextT<e.currentTime+.15;){let e=this.step,n=Math.floor(e/16)%this.prog.length,r=this.prog[n],i=e%16,a=this.nextT,o=this.music,s=G.env?G.env.nightF:0;if(i===0||i===6||i===10||i===14&&Math.random()<.5){let e=i===10?r[2]-12:r[0]-12;this._osc(`triangle`,this._mtof(e),a,.01,.32,.32,o),this._osc(`sine`,this._mtof(e-12),a,.01,.2,.25,o)}if(i%2==0&&Math.random()<.82){let e=r[(i/2+Math.floor(Math.random()*2))%4]+12+(Math.random()<.2?12:0),t=this._mtof(e);this._osc(`sine`,t,a,.004,.11*(1-s*.4),.42,o),this._osc(`sine`,t*2.01,a,.003,.035,.18,o),this._osc(`triangle`,t*4,a,.002,.015,.08,o)}if(i===8&&Math.random()<.6){let e=r[Math.floor(Math.random()*4)]+24;this._osc(`triangle`,this._mtof(e),a,.02,.05,.7,o)}if(s<.6){let e=i%4==2?.07:.03;this._noise(`white`,a,.003,e,.05,o,`highpass`,7e3)}if((i===0||i===8)&&this._osc(`sine`,120,a,.002,.18,.18,o,45),i===0)for(let e of r)this._osc(`sawtooth`,this._mtof(e),a,.4,.012,1.9,o);this.step++,this.nextT+=t}}},Zg=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,left:!1,right:!1,leftPressed:!1,rightPressed:!1,wheel:0},this.locked=!1,this.onLockChange=null,this.touch={move:{x:0,y:0},look:{dx:0,dy:0},buttons:new Set,pressed:new Set},this.enabled=!0,this.fallback=!1,this.everLocked=!1,this.rDrag=null,window.addEventListener(`keydown`,e=>{if(e.target&&(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`))return;let t=e.code;([`Space`,`Tab`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`KeyB`].includes(t)||t===`KeyF`&&e.ctrlKey)&&e.preventDefault(),t===`Escape`&&this.fallback&&this.locked?this._setVirtual(!1):(this.keys.has(t)||this.pressed.add(t),this.keys.add(t))}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code)}),window.addEventListener(`blur`,()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1,this.rDrag=null}),document.addEventListener(`mousemove`,e=>{if(!this.locked)return;let t=e.movementX||0,n=e.movementY||0;if(this.fallback){if(!(e.buttons&2))return;this.rDrag&&(this.rDrag.dist+=Math.abs(t)+Math.abs(n)),t*=1.6,n*=1.6}this.mouse.dx+=Math.max(-250,Math.min(250,t)),this.mouse.dy+=Math.max(-250,Math.min(250,n))}),e.addEventListener(`mousedown`,e=>{this.locked&&(e.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),e.button===2&&(this.mouse.right=!0,this.fallback?this.rDrag={dist:0}:this.mouse.rightPressed=!0))}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1,this.fallback&&this.locked&&this.rDrag&&this.rDrag.dist<6&&(this.mouse.rightPressed=!0),this.rDrag=null)}),window.addEventListener(`wheel`,e=>{this.locked&&(this.mouse.wheel+=Math.sign(e.deltaY))},{passive:!0}),window.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`pointerlockchange`,()=>{this.fallback||(this.locked=document.pointerLockElement===e,this.locked&&(this.everLocked=!0),this.mouse.left=this.mouse.right=!1,this.mouse.dx=this.mouse.dy=0,this.onLockChange&&this.onLockChange(this.locked))}),document.addEventListener(`pointerlockerror`,()=>this._lockFailed())}lock(){if(!G.isTouch){if(this.fallback)this._setVirtual(!0);else try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>this._lockFailed())}catch{this._lockFailed()}}}unlock(){this.fallback?this._setVirtual(!1):document.pointerLockElement&&document.exitPointerLock()}_lockFailed(){this.locked||(this.everLocked?this.onLockError&&this.onLockError():(this.fallback=!0,this.canvas.style.cursor=`crosshair`,this._setVirtual(!0),this.onFallback&&this.onFallback()))}_setVirtual(e){this.locked!==e&&(this.locked=e,this.mouse.left=this.mouse.right=!1,this.mouse.dx=this.mouse.dy=0,this.rDrag=null,this.onLockChange&&this.onLockChange(e))}down(e){return this.keys.has(e)}hit(e){return this.pressed.has(e)}tdown(e){return this.touch.buttons.has(e)}thit(e){return this.touch.pressed.has(e)}endFrame(){this.pressed.clear(),this.mouse.dx=this.mouse.dy=0,this.mouse.leftPressed=this.mouse.rightPressed=!1,this.mouse.wheel=0,this.touch.look.dx=this.touch.look.dy=0,this.touch.pressed.clear()}setupTouch(){document.getElementById(`touch-ui`).classList.remove(`hidden`);let e=document.getElementById(`joy-zone`),t=document.getElementById(`joy-base`),n=document.getElementById(`joy-knob`),r=null,i=0,a=0;e.addEventListener(`touchstart`,e=>{r=e.changedTouches[0].identifier;let n=t.getBoundingClientRect();i=n.left+n.width/2,a=n.top+n.height/2,e.preventDefault()},{passive:!1}),e.addEventListener(`touchmove`,e=>{for(let t of e.changedTouches){if(t.identifier!==r)continue;let e=t.clientX-i,o=t.clientY-a,s=Math.hypot(e,o);s>50&&(e=e/s*50,o=o/s*50),n.style.transform=`translate(${e}px, ${o}px)`,this.touch.move.x=e/50,this.touch.move.y=-o/50}e.preventDefault()},{passive:!1});let o=e=>{for(let t of e.changedTouches)t.identifier===r&&(r=null,n.style.transform=``,this.touch.move.x=this.touch.move.y=0)};e.addEventListener(`touchend`,o),e.addEventListener(`touchcancel`,o);let s=null,c=0,l=0;this.canvas.addEventListener(`touchstart`,e=>{for(let t of e.changedTouches)s===null&&(s=t.identifier,c=t.clientX,l=t.clientY);e.preventDefault()},{passive:!1}),this.canvas.addEventListener(`touchmove`,e=>{for(let t of e.changedTouches)t.identifier===s&&(this.touch.look.dx+=(t.clientX-c)*2.2,this.touch.look.dy+=(t.clientY-l)*2.2,c=t.clientX,l=t.clientY);e.preventDefault()},{passive:!1});let u=e=>{for(let t of e.changedTouches)t.identifier===s&&(s=null)};this.canvas.addEventListener(`touchend`,u),this.canvas.addEventListener(`touchcancel`,u);for(let e of document.querySelectorAll(`#touch-btns .tb`)){let t=e.dataset.t;e.addEventListener(`touchstart`,e=>{this.touch.buttons.add(t),this.touch.pressed.add(t),e.preventDefault(),e.stopPropagation()},{passive:!1});let n=e=>{this.touch.buttons.delete(t),e.preventDefault()};e.addEventListener(`touchend`,n),e.addEventListener(`touchcancel`,n)}}},Qg=e=>document.getElementById(e),$g=Qg(`load-fill`),e_=Qg(`load-text`);function t_(e,t){$g.style.width=Math.round(e*100)+`%`,t&&(e_.textContent=t)}var n_=()=>new Promise(e=>setTimeout(e,0));G.ui={blocking:!1,started:!1},G.sdk=ef,window.__G=G,window.__ITEMS=Fh;function r_(){try{let e=JSON.parse(ef.loadItem(`settings`)||`null`);e&&Object.assign(G.settings,e)}catch{}}G.saveSettings=()=>{try{ef.saveItem(`settings`,JSON.stringify(G.settings))}catch{}};function i_(){let e=G.settings.quality;if(e!==`auto`)return e;if(G.autoQuality)return G.autoQuality;if(G.isTouch)return`low`;let t=navigator.hardwareConcurrency||4,n=navigator.deviceMemory||8;return t<=2||n<=2?`low`:`medium`}async function a_(){G.isTouch=(`ontouchstart`in window||navigator.maxTouchPoints>0)&&window.matchMedia&&window.matchMedia(`(pointer: coarse)`).matches,t_(.02,`Connecting…`),await ef.init(),ef.loadingStart(),r_();let e=Qg(`game`),t=zp(e);G.renderer=t;let n=new Xn;G.scene=n;let r=new uc(G.settings.fov,window.innerWidth/window.innerHeight,.05,4e3);G.camera=r;let i=new Xn;i.add(new Qs(15398655,6978138,1.2));let a=new hc(16777215,1.6);a.position.set(1,2,1),i.add(a),G.vmScene=i,t.setSize(window.innerWidth,window.innerHeight,!1),await Yf(t,(e,t)=>t_(.05+e*.4,t)),sp(),om(),t_(.48,`Building the world…`),await n_(),G.quality=i_(),G.env=new Up(n,t),G.env.setQuality(G.quality),G.terrain=new Wm(n),G.effects=new Km(n),G.audio=new Xg,G.input=new Zg(e),t_(.56,`Opening the gates…`),await n_(),G.park=new Vh(n),G.guests=new Sg,G.guests.setQuality(G.quality),G.staff=new Cg,G.player=new jg(r),G.build=new Rg,G.progression=new Vg,G.hud=new Gg,G.menus=new qg,G.pipeline=new Bp(t,n,r,i),G.pipeline.build(G.quality);let o=new tm(Hm(`palm`),n,32),s=new B;for(let[e,t]of G.terrain.decoPalms)s.compose(new z(e,0,t),new Ut().setFromAxisAngle(new z(0,1,0),Math.random()*6.28),new z(1,1,1).multiplyScalar(.9+Math.random()*.3)),o.add(s);t_(.62,`Loading your park…`),await n_();let c=c_();c||o_(),G.terrain.rebuildFence(G.park.owned),G.terrain.rebuildSaleSigns(G.park.owned,()=>G.park.landPrice()),G.staff.sync(),G.env.setWeather(G.env.weather||`sunny`,!0),G.player.updateCamera(0),G.env.update(.016,r.position),G.env.refreshEnv(30,1),G.terrain.initGrass(G.quality===`high`?9e3:G.quality===`medium`?5e3:0),G.terrain.refreshGrass(r.position,!0),t_(.7,`Photographing attractions…`),await n_();try{G.thumbs=await Yg(t,n.environment,e=>t_(.7+e*.2))}catch(e){console.warn(e),G.thumbs={}}t_(.92,`Warming up shaders…`),await n_();try{t.compile(n,r)}catch{}G.pipeline.render(.016),t_(1,`Splash!`),d_(),window.addEventListener(`resize`,()=>G.pipeline.resize()),G.pipeline.resize(),G.isTouch&&G.input.setupTouch(),await new Promise(e=>setTimeout(e,150)),Qg(`loading`).classList.add(`fade`),setTimeout(()=>Qg(`loading`).remove(),700),ef.loadingStop(),G.hud.show(),G.hud.renderQuests(),G.hud.renderXP(),ef.gameplayStart(),G.ui.started=!0,G.isTouch?G.audio.init():Qg(`intro-hint`).classList.remove(`hidden`),setTimeout(()=>{if(c?G.hud.toast(`👋 Welcome back! Day ${G.time.day} at ${G.park.parkName}.`,`gold`):G.hud.toast(`🌴 Welcome to <b>Splash Haven</b>! Your waterpark is open — make it legendary.`,`gold`),G.offline){let e=G.offline;G.park.earn(e.earned,`bonus`,!1),setTimeout(()=>{G.hud.toast(`💰 While you were away (${e.awayMin>=60?Math.floor(e.awayMin/60)+`h `:``}${Math.round(e.awayMin%60)}m) your park earned <b>${J(e.earned)}</b>!`,`gold`),G.audio.play(`jackpot`,{vol:.8})},1600)}},800),v_=performance.now(),requestAnimationFrame(T_)}function o_(){G.time.day=1,G.time.minutes=545,G.time.total=0,Hg(G.park),G.park.computeRating(),G.park.rating=G.park.ratingTarget,Ug();for(let e=0;e<14;e++)G.guests.spawn(!0);for(let e=0;e<4;e++)G.guests.spawn(!1);G.player.teleport(0,59.5,-.2),G.player.pitch=.04,G.progression.refreshQuests(),G.env.setWeather(`sunny`,!0)}function s_(){try{let e={v:3,park:G.park.serialize(),prog:G.progression.serialize(),time:{day:G.time.day,minutes:Math.min(G.time.minutes,Zf-1),total:G.time.total},player:{x:G.player.pos.x,z:G.player.pos.z,yaw:G.player.yaw},weather:G.env.weather,thoughts:G.guests.thoughtFeed.slice(-12),savedAt:Date.now()};ef.saveItem(`save`,JSON.stringify(e))}catch(e){console.warn(`save failed`,e)}}function c_(){let e=null;try{e=ef.loadItem(`save`)}catch{}if(!e)return!1;try{let t=JSON.parse(e);if(!t||t.v!==3)return!1;G.time.day=t.time.day,G.time.minutes=tf(t.time.minutes,540,Zf-1),G.time.total=t.time.total||0,G.park.restore(t.park),G.progression.restore(t.prog),G.env.setWeather(t.weather||`sunny`,!0),G.guests.thoughtFeed=t.thoughts||[];let n=t.player?t.player.x:0,r=t.player?t.player.z:59.5;G.player.teleport(n,r,t.player?t.player.yaw:0),G.player.collides(n,r,0)&&G.player.teleport(0,59.5,0);let i=Math.min(30,8+G.park.lists.all.length/10);for(let e=0;e<i;e++)G.guests.spawn(!0);if(G.park.computeRating(),G.park.rating=G.park.ratingTarget,t.savedAt&&G.park.history.length){let e=Math.min(240,(Date.now()-t.savedAt)/6e4),n=G.park.history[G.park.history.length-1],r=Math.max(0,n.income)/6,i=Math.round(e*r*.12);e>2&&i>0&&(G.offline={earned:i,awayMin:e})}return!0}catch(e){return console.warn(`load failed`,e),!1}}G.saveGame=s_,G.resetGame=()=>{ef.removeItem(`save`),location.reload()},G.ads={async rewarded(){l_(!0);let e=await ef.requestAd(`rewarded`);return l_(!1),e},async midgame(){l_(!0),await ef.requestAd(`midgame`),l_(!1)}};function l_(e){G.time.adPause=e,G.audio.setMuted(`ad`,e)}G.applyQuality=e=>{let t=i_(),n=t===`low`!=(G.quality===`low`);if(G.quality=t,G.env.setQuality(t),G.pipeline.build(t),G.guests.setQuality(t),G.terrain.initGrass(t===`high`?9e3:t===`medium`?5e3:0),G.terrain.refreshGrass(G.camera.position,!0),n)for(let e of G.park.lists.pools.concat(G.park.lists.slides)){if(!e.pool)continue;let t=e.pool.water.material,n=eh({wave:e.pool.wave});e.pool.water.material=n,e.pool.mat=n,th(n,(1-e.quality/100)**.8),t.dispose()}G.pipeline.resize()};var u_=-999;function d_(){let e=G.hud;K.on(`drowning`,t=>{e.toast(`🆘 A swimmer is in trouble at the <b>${t.obj.def.name}</b>! Swim over and press E — or hire lifeguards.`,`bad`),G.audio.play(`whistle`,{vol:.5})}),K.on(`rescued`,t=>{t.by===`player`?(e.toast(`🛟 You saved a swimmer! +$250 reward`,`good`),G.audio.play(`jackpot`,{vol:.7}),G.effects.sparkle(t.guest.pos.x,1,t.guest.pos.z,8191956,30)):e.toast(`🛟 Your lifeguard rescued a swimmer.`,`good`)}),K.on(`rescueFailed`,()=>{G.park.spend(300,`upkeep`),e.toast(`🚑 Paramedics had to step in. Nearby guests are upset (−$300 fine). Hire lifeguards!`,`bad`)}),K.on(`broken`,t=>{e.toast(`🔧 <b>${t.def.name}</b> has broken down! Repair it with the Wrench [3] or hire a Mechanic.`,`bad`),G.audio.play(`error`,{vol:.6})}),K.on(`repaired`,t=>{e.toast(`✅ ${t.obj.def.name} is running again${t.by===`player`?` — nice work!`:`.`}`,`good`)}),K.on(`landBought`,()=>{e.toast(`🗺️ New land purchased! More room to build.`,`gold`),G.audio.play(`cash`),G.effects.confetti(G.player.pos.x,3,G.player.pos.z,80)}),K.on(`vipHappy`,()=>e.toast(`⭐ A VIP guest loved your park and left a glowing review! +$400`,`gold`)),K.on(`guestRefused`,()=>{G.time.real-u_>90&&(u_=G.time.real,e.toast(`🎟️ Some guests turn back at the gate — the ticket feels too expensive.`,`bad`))}),K.on(`duck`,t=>e.toast(t.gold?`🦆✨ GOLDEN DUCK! +${J(t.value)}`:`🦆 Rubber duck found! +${J(t.value)}`,`gold`)),K.on(`fireworks`,()=>e.toast(`🎆 Fireworks show! Guests are cheering.`,`gold`)),K.on(`underwater`,e=>G.audio.setUnderwater(e)),K.on(`placed`,()=>G.hud.renderHotbar()),Qg(`game`).addEventListener(`click`,()=>{G.audio.init(),!G.ui.started||G.ui.blocking||G.isTouch||G.input.locked||G.input.lock()}),Qg(`intro-hint`).addEventListener(`click`,()=>{G.audio.init(),G.input.lock()}),G.input.onLockChange=e=>{e?(Qg(`intro-hint`).classList.add(`hidden`),G.menus.open===`pause`&&G.menus.close(!1),G.audio.init()):!G.menus.open&&G.ui.started&&!G.isTouch&&G.menus.showPause()},G.input.onLockError=()=>{G.menus.open||Qg(`intro-hint`).classList.remove(`hidden`)},G.input.onFallback=()=>{let e=document.querySelector(`#intro-hint .ih-sub`);e&&(e.textContent=`Hold right mouse + drag to look · WASD move · E interact · B build · Tab manage`),G.hud.toast(`🖱️ Mouse capture is off in this window. <b>Hold the right mouse button and drag</b> to look around; aim with the centre dot.`,`gold`)},document.addEventListener(`visibilitychange`,()=>{G.audio.setMuted(`hidden`,document.hidden),document.hidden&&s_()}),window.addEventListener(`beforeunload`,s_),ef.on(`settings`,e=>G.audio.setMuted(`sdk`,!!(e&&e.muteAudio))),ef.muted&&G.audio.setMuted(`sdk`,!0),ef.on(`adStart`,()=>G.audio.setMuted(`ad`,!0)),ef.on(`adEnd`,()=>G.audio.setMuted(`ad`,!1))}function f_(e){(e.hit(`KeyB`)||e.thit(`build`))&&(G.menus.open===`catalog`?G.menus.close():G.menus.open&&G.menus.open!==`tablet`||(G.build.active&&!e.thit(`build`)&&G.build.stop(),G.menus.toggleCatalog())),(e.hit(`Tab`)||e.thit(`tablet`))&&(G.menus.open===`tablet`?G.menus.close():G.menus.open&&G.menus.open!==`catalog`||G.menus.toggleTablet()),e.hit(`Escape`)&&(G.menus.open===`catalog`||G.menus.open===`tablet`)&&G.menus.close(),G.menus.open||(G.build.active||(e.hit(`Digit1`)&&G.player.setTool(0),e.hit(`Digit2`)&&G.player.setTool(1),e.hit(`Digit3`)&&G.player.setTool(2),e.mouse.wheel&&G.player.setTool(G.player.tool+(e.mouse.wheel>0?1:-1)),e.thit(`tool`)&&G.player.setTool(G.player.tool+1)),e.hit(`KeyT`)&&(G.time.speed=G.time.speed%3+1,G.hud.toast(`⏩ Game speed ${G.time.speed}x`)),e.hit(`KeyF`)&&G.settings.showFps)}var p_=!1,m_=!1,h_=0;function g_(e){let t=G.time,n=t.minutes,r=2*t.speed;t.minutes>=1299&&(r=0),t.minutes>=1260&&G.guests.list.filter(e=>e.inPark).length===0&&(r=12);let i=e*r;if(t.minutes+=i,t.total+=i,n<1260&&t.minutes>=1260&&(G.hud.toast(`🔔 The park is closing — guests are heading home.`,``),G.audio.play(`quest`,{vol:.5})),!m_&&t.minutes>=1235&&G.park.lists.fireworks.length){m_=!0,G.effects.startFireworks(G.park.lists.fireworks.map(e=>({x:e.cx,z:e.cz})));for(let e of G.guests.list)e.inPark&&(G.guests.addHappy(e,10),lf(.3)&&G.guests.think(e,`fireworks`,`good`))}if(t.minutes>=1299&&!p_){p_=!0;for(let e of[...G.guests.list])G.guests.despawn(e);let e=G.park.endOfDay();s_(),e.newRecord&&ef.happytime(),G.menus.showSummary(e)}return h_+=i,h_>=60&&(h_-=60,__()),i}function __(){let e=G.park,t=G.time.minutes;if(t<540||t>1260)return;let n=e.lists.pools.filter(e=>!e.pool.jacuzzi);n.length&&G.effects.ducks.length<3&&lf(.4)&&G.effects.addDuck(cf(n),lf(.08));let r=G.env.weather;if(r===`rain`&&lf(.6))G.env.setWeather(cf([`partly`,`overcast`]));else if(lf(.12)){let e=cf([`sunny`,`sunny`,`partly`,`partly`,`overcast`,`rain`]);e!==r&&(G.env.setWeather(e),e===`rain`?G.hud.toast(`🌧️ A rain shower rolls in — fewer visitors for a while.`,``):e===`sunny`&&G.hud.toast(`☀️ The sun is out! Expect a rush of thirsty guests.`,`gold`))}}G.startNextDay=()=>{G.time.day++,G.time.minutes=500,p_=!1,m_=!1,h_=0,G.env.setWeather(cf([`sunny`,`sunny`,`sunny`,`partly`,`partly`,`overcast`]),!0),G.progression.onNewDay();for(let e of G.park.lists.pools.concat(G.park.lists.slides))e.pool&&(e.quality=Math.max(0,e.quality-q(4,10)),G.park.refreshPoolLook(e));for(let e of G.park.lists.fac.toilet||[])e.dirt=Math.max(0,e.dirt-20);for(let e=0;e<3;e++){let e=G.park.grid.randomParkPoint();e&&G.effects.addTrash(e[0],e[1])}G.hud.toast(`☀️ Day ${G.time.day} — ${G.env.weatherInfo.label}, ${G.env.temp}°C. Gates open at 09:00!`,`gold`),s_()};var v_=0,y_=0,b_=0,x_=0,S_=0,C_=0,w_=null;function T_(e){requestAnimationFrame(T_);let t=Math.min(.05,(e-v_)/1e3);v_=e,t<=0||E_(t,!0)}function E_(e,t){let n=G.input,r=G.menus.open===`pause`||G.menus.open===`summary`||G.time.adPause;G.time.real+=r?0:e,tp.uTime.value=G.time.real,r||f_(n);let i=e*(r?0:G.time.speed);G.time.sim=(G.time.sim||0)+i;let a=0;if(r||(a=g_(e)),r)G.player.updateViewmodel(e,0);else{G.player.update(e,n),G.build.update(e,n),G.player.updateInteraction(e,n),G.player.hold.kind===`skim`&&G.progression.progress(`skimSec`,e),G.guests.update(e,i,a),G.staff.update(e,i),G.park.tick(a,e),G.progression.update();let t=G.time.real%75;qm.uWaveAmp.value+=(+(t<50)-qm.uWaveAmp.value)*Math.min(1,e*.5),Mh(e),O_(e)}if(G.env.update(e,G.camera.position),G.terrain.update(r?0:e),G.effects.update(r?0:e,G.camera.position,G.time.real),!t)n.endFrame();else if(G.terrain.refreshGrass(G.camera.position),G.hud.update(e),G.menus.update(e),G.audio.updateAmbience(e),G.pipeline.render(e),n.endFrame(),C_+=e,C_>30&&!r&&(C_=0,s_()),y_+=e,b_++,x_+=e,x_>5){let e=b_/y_;if(y_=0,b_=0,x_=0,G.settings.showFps?(w_||(w_=document.createElement(`div`),w_.style.cssText=`position:fixed;left:8px;bottom:8px;z-index:99;font:700 12px monospace;color:#fff;text-shadow:0 1px 2px #000`,document.body.appendChild(w_)),w_.textContent=e.toFixed(0)+` FPS · `+G.quality):w_&&(w_.remove(),w_=null),G.settings.quality===`auto`&&!r&&S_<3&&!G.debugNoAuto&&(S_++,e<30&&G.quality!==`low`)){let e=G.quality===`high`?`medium`:`low`;G.autoQuality=e,G.applyQuality(!0),G.hud.toast(`⚙️ Graphics set to ${e} for smoother play (change in Settings).`)}}}G.debugStep=(e=30,t=1/30)=>{for(let n=0;n<e;n++)E_(t,!1)};var D_=0;function O_(e){if(D_+=e,D_<.033)return;D_=0;let t=G.camera.position,n=G.effects;for(let e of G.park.lists.fountains)if(!(Math.hypot(e.cx-t.x,e.cz-t.z)>60)){for(let t=0;t<4;t++)n.spray(e.cx,1.95,e.cz,q(-.6,.6),q(4.5,5.5),q(-.6,.6),.1,.2);for(let t=0;t<6;t++){let r=t/6*Math.PI*2+G.time.real*.3;n.spray(e.cx+Math.cos(r)*.6,1.25,e.cz+Math.sin(r)*.6,Math.cos(r)*1.2,1.6,Math.sin(r)*1.2,.07,.1)}}for(let e of G.park.lists.pools)if(!(Math.hypot(e.cx-t.x,e.cz-t.z)>50)){if(e.pool.kids)for(let t=0;t<5;t++){let t=Math.random()*Math.PI*2;n.spray(e.cx+Math.cos(t)*.9,1.55,e.cz+Math.sin(t)*.9,Math.cos(t)*1.1,-.2,Math.sin(t)*1.1,.08,.15)}if(e.pool.jacuzzi){for(let t=0;t<3;t++){let t=Math.random()*6.28,r=Math.random()*1.4;n.bubble(e.cx+Math.cos(t)*r,Xf,e.cz+Math.sin(t)*r)}(G.env.nightF>.3||Math.random()<.3)&&n.steam(e.cx+q(-1,1),Xf+.1,e.cz+q(-1,1))}}for(let e of G.park.lists.all)e.key!==`tiki`||G.env.nightF<.3||Math.hypot(e.cx-t.x,e.cz-t.z)>35||n.fire(e.cx,2.3,e.cz)}a_().catch(e=>{console.error(e),e_.textContent=`Something went wrong while loading. Please refresh. (`+(e&&e.message)+`)`});