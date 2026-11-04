"use strict";var j=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var h=j(function(L,R){
function D(e,r,t,q,o,i,f,a,g,x){var v,c,u,l,y,b,n,s,P,m;for(v=r.data,c=o.data,u=a.data,l=r.accessors[0],y=o.accessors[0],b=a.accessors[1],n=q,s=f,P=x,m=0;m<e;m++)b(u,P,l(v,n)-y(c,s)),n+=t,s+=i,P+=g;return a}R.exports=D
});var M=j(function(Q,z){
var k=require('@stdlib/array-base-arraylike2object/dist'),E=h(),p=5;function F(e,r,t,q,o,i,f,a,g,x){var v,c,u,l,y,b,n,s;if(e<=0)return a;if(l=k(r),y=k(o),b=k(a),l.accessorProtocol||y.accessorProtocol||b.accessorProtocol)return E(e,l,t,q,y,i,f,b,g,x),a;if(v=q,c=f,u=x,t===1&&i===1&&g===1){if(n=e%p,n>0)for(s=0;s<n;s++)a[u]=r[v]-o[c],v+=t,c+=i,u+=g;if(e<p)return a;for(s=n;s<e;s+=p)a[u]=r[v]-o[c],a[u+1]=r[v+1]-o[c+1],a[u+2]=r[v+2]-o[c+2],a[u+3]=r[v+3]-o[c+3],a[u+4]=r[v+4]-o[c+4],v+=p,c+=p,u+=p;return a}for(s=0;s<e;s++)a[u]=r[v]-o[c],v+=t,c+=i,u+=g;return a}z.exports=F
});var B=j(function(S,A){
var O=require('@stdlib/strided-base-stride2offset/dist'),G=M();function H(e,r,t,q,o,i,f){return G(e,r,t,O(e,t),q,o,O(e,o),i,f,O(e,f))}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=M();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
