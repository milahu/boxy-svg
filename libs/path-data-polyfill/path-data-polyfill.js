SVGPathElement.prototype.getPathData&&SVGPathElement.prototype.setPathData||function(){var e={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},t=function(e){this._string=e,this._currentIndex=0,this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces()},s=-1!==window.navigator.userAgent.indexOf("MSIE ");t.prototype={parseSegment:function(){var t=this._string[this._currentIndex],s=e[t]?e[t]:null;if(null===s){if(null===this._prevCommand)return null;if(null===(s=("+"===t||"-"===t||"."===t||t>="0"&&t<="9")&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null))return null}else this._currentIndex+=1;this._prevCommand=s;var r=null,a=s.toUpperCase();return"H"===a||"V"===a?r=[this._parseNumber()]:"M"===a||"L"===a||"T"===a?r=[this._parseNumber(),this._parseNumber()]:"S"===a||"Q"===a?r=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===a?r=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===a?r=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===a&&(this._skipOptionalSpaces(),r=[]),null===r||r.indexOf(null)>=0?null:{type:s,values:r}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var t=this._string[this._currentIndex];return e[t]?e[t]:null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;var e=this.peekSegmentType();return"M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];return e<=" "&&(" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex])&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){var e=0,t=0,s=1,r=0,a=1,n=1,u=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,a=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")&&"."!==this._string[this._currentIndex])return null;for(var i=this._currentIndex;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==i)for(var l=this._currentIndex-1,h=1;l>=i;)t+=h*(this._string[l]-"0"),l-=1,h*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)s*=10,r+=(this._string.charAt(this._currentIndex)-"0")/s,this._currentIndex+=1}if(this._currentIndex!==u&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){if(this._currentIndex+=1,"+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,n=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)e*=10,e+=this._string[this._currentIndex]-"0",this._currentIndex+=1}var v=t+r;return v*=a,e&&(v*=Math.pow(10,n*e)),u===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),v)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=null,t=this._string[this._currentIndex];if(this._currentIndex+=1,"0"===t)e=0;else{if("1"!==t)return null;e=1}return this._skipOptionalSpacesOrDelimiter(),e}};var r=function(e){if(!e||0===e.length)return[];var s=new t(e),r=[];if(s.initialCommandIsMoveTo())for(;s.hasMoreData();){var a=s.parseSegment();if(null===a)break;r.push(a)}return r},a=SVGPathElement.prototype.setAttribute,n=SVGPathElement.prototype.setAttributeNS,u=SVGPathElement.prototype.removeAttribute,i=SVGPathElement.prototype.removeAttributeNS,l=window.Symbol?Symbol():"__cachedPathData",h=window.Symbol?Symbol():"__cachedNormalizedPathData",v=function(e,t,s,r,a,n,u,i,l,h){var p,_,o,c,d,y=function(e,t,s){return{x:e*Math.cos(s)-t*Math.sin(s),y:e*Math.sin(s)+t*Math.cos(s)}},x=(p=u,Math.PI*p/180),I=[];if(h)_=h[0],o=h[1],c=h[2],d=h[3];else{var f=y(e,t,-x);e=f.x,t=f.y;var m=y(s,r,-x),g=(e-(s=m.x))/2,b=(t-(r=m.y))/2,S=g*g/(a*a)+b*b/(n*n);S>1&&(a*=S=Math.sqrt(S),n*=S);var M=a*a,V=n*n,A=M*V-M*b*b-V*g*g,P=M*b*b+V*g*g,C=(i===l?-1:1)*Math.sqrt(Math.abs(A/P));c=C*a*b/n+(e+s)/2,d=C*-n*g/a+(t+r)/2,_=Math.asin(parseFloat(((t-d)/n).toFixed(9))),o=Math.asin(parseFloat(((r-d)/n).toFixed(9))),e<c&&(_=Math.PI-_),s<c&&(o=Math.PI-o),_<0&&(_=2*Math.PI+_),o<0&&(o=2*Math.PI+o),l&&_>o&&(_-=2*Math.PI),!l&&o>_&&(o-=2*Math.PI)}var w=o-_;if(Math.abs(w)>120*Math.PI/180){var E=o,N=s,G=r;o=l&&o>_?_+120*Math.PI/180*1:_+120*Math.PI/180*-1,s=c+a*Math.cos(o),r=d+n*Math.sin(o),I=v(s,r,N,G,a,n,u,0,l,[o,E,c,d])}w=o-_;var D=Math.cos(_),O=Math.sin(_),L=Math.cos(o),k=Math.sin(o),T=Math.tan(w/4),Z=4/3*a*T,H=4/3*n*T,Q=[e,t],z=[e+Z*O,t-H*D],F=[s+Z*k,r-H*L],q=[s,r];if(z[0]=2*Q[0]-z[0],z[1]=2*Q[1]-z[1],h)return[z,F,q].concat(I);I=[z,F,q].concat(I);for(var $=[],j=0;j<I.length;j+=3){a=y(I[j][0],I[j][1],x),n=y(I[j+1][0],I[j+1][1],x);var R=y(I[j+2][0],I[j+2][1],x);$.push([a.x,a.y,n.x,n.y,R.x,R.y])}return $},p=function(e){return e.map((function(e){return{type:e.type,values:Array.prototype.slice.call(e.values)}}))},_=function(e){var t=[],s=null,r=null,a=null,n=null,u=null,i=null,l=null;return e.forEach((function(e){if("M"===e.type){var h=e.values[0],p=e.values[1];t.push({type:"M",values:[h,p]}),i=h,l=p,n=h,u=p}else if("C"===e.type){var _=e.values[0],o=e.values[1],c=e.values[2],d=e.values[3];h=e.values[4],p=e.values[5];t.push({type:"C",values:[_,o,c,d,h,p]}),r=c,a=d,n=h,u=p}else if("L"===e.type){h=e.values[0],p=e.values[1];t.push({type:"L",values:[h,p]}),n=h,u=p}else if("H"===e.type){h=e.values[0];t.push({type:"L",values:[h,u]}),n=h}else if("V"===e.type){p=e.values[0];t.push({type:"L",values:[n,p]}),u=p}else if("S"===e.type){c=e.values[0],d=e.values[1],h=e.values[2],p=e.values[3];"C"===s||"S"===s?(y=n+(n-r),x=u+(u-a)):(y=n,x=u),t.push({type:"C",values:[y,x,c,d,h,p]}),r=c,a=d,n=h,u=p}else if("T"===e.type){h=e.values[0],p=e.values[1];"Q"===s||"T"===s?(_=n+(n-r),o=u+(u-a)):(_=n,o=u);var y=n+2*(_-n)/3,x=u+2*(o-u)/3,I=h+2*(_-h)/3,f=p+2*(o-p)/3;t.push({type:"C",values:[y,x,I,f,h,p]}),r=_,a=o,n=h,u=p}else if("Q"===e.type){_=e.values[0],o=e.values[1],h=e.values[2],p=e.values[3],y=n+2*(_-n)/3,x=u+2*(o-u)/3,I=h+2*(_-h)/3,f=p+2*(o-p)/3;t.push({type:"C",values:[y,x,I,f,h,p]}),r=_,a=o,n=h,u=p}else if("A"===e.type){var m=Math.abs(e.values[0]),g=Math.abs(e.values[1]),b=e.values[2],S=e.values[3],M=e.values[4];h=e.values[5],p=e.values[6];if(0===m||0===g)t.push({type:"C",values:[n,u,h,p,h,p]}),n=h,u=p;else if(n!==h||u!==p)v(n,u,h,p,m,g,b,S,M).forEach((function(e){t.push({type:"C",values:e})})),n=h,u=p}else"Z"===e.type&&(t.push(e),n=i,u=l);s=e.type})),t};SVGPathElement.prototype.setAttribute=function(e,t){"d"===e&&(this[l]=null,this[h]=null),a.call(this,e,t)},SVGPathElement.prototype.setAttributeNS=function(e,t,s){if("d"===t){var r="http://www.w3.org/2000/svg";if(e)for(var a of this.ownerSVGElement.attributes)a.name===`xmlns:${e}`&&(r=a.value);"http://www.w3.org/2000/svg"===r&&(this[l]=null,this[h]=null)}n.call(this,e,t,s)},SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[l]=null,this[h]=null),u.call(this,e)},SVGPathElement.prototype.removeAttributeNS=function(e,t){if("d"===t){var s="http://www.w3.org/2000/svg";if(e)for(var r of this.ownerSVGElement.attributes)r.name===`xmlns:${e}`&&(s=r.value);"http://www.w3.org/2000/svg"===s&&(this[l]=null,this[h]=null)}i.call(this,e,t)},SVGPathElement.prototype.getPathData=function(e){if(e&&e.normalize){if(this[h])return p(this[h]);this[l]?s=p(this[l]):(s=r(this.getAttribute("d")||""),this[l]=p(s));var t=_(function(e){var t=[],s=null,r=null,a=null,n=null;return e.forEach((function(e){var u=e.type;if("M"===u){var i=e.values[0],l=e.values[1];t.push({type:"M",values:[i,l]}),a=i,n=l,s=i,r=l}else if("m"===u)i=s+e.values[0],l=r+e.values[1],t.push({type:"M",values:[i,l]}),a=i,n=l,s=i,r=l;else if("L"===u)i=e.values[0],l=e.values[1],t.push({type:"L",values:[i,l]}),s=i,r=l;else if("l"===u)i=s+e.values[0],l=r+e.values[1],t.push({type:"L",values:[i,l]}),s=i,r=l;else if("C"===u){var h=e.values[0],v=e.values[1],p=e.values[2],_=e.values[3];i=e.values[4],l=e.values[5],t.push({type:"C",values:[h,v,p,_,i,l]}),s=i,r=l}else"c"===u?(h=s+e.values[0],v=r+e.values[1],p=s+e.values[2],_=r+e.values[3],i=s+e.values[4],l=r+e.values[5],t.push({type:"C",values:[h,v,p,_,i,l]}),s=i,r=l):"Q"===u?(h=e.values[0],v=e.values[1],i=e.values[2],l=e.values[3],t.push({type:"Q",values:[h,v,i,l]}),s=i,r=l):"q"===u?(h=s+e.values[0],v=r+e.values[1],i=s+e.values[2],l=r+e.values[3],t.push({type:"Q",values:[h,v,i,l]}),s=i,r=l):"A"===u?(i=e.values[5],l=e.values[6],t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],i,l]}),s=i,r=l):"a"===u?(i=s+e.values[5],l=r+e.values[6],t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],i,l]}),s=i,r=l):"H"===u?(i=e.values[0],t.push({type:"H",values:[i]}),s=i):"h"===u?(i=s+e.values[0],t.push({type:"H",values:[i]}),s=i):"V"===u?(l=e.values[0],t.push({type:"V",values:[l]}),r=l):"v"===u?(l=r+e.values[0],t.push({type:"V",values:[l]}),r=l):"S"===u?(p=e.values[0],_=e.values[1],i=e.values[2],l=e.values[3],t.push({type:"S",values:[p,_,i,l]}),s=i,r=l):"s"===u?(p=s+e.values[0],_=r+e.values[1],i=s+e.values[2],l=r+e.values[3],t.push({type:"S",values:[p,_,i,l]}),s=i,r=l):"T"===u?(i=e.values[0],l=e.values[1],t.push({type:"T",values:[i,l]}),s=i,r=l):"t"===u?(i=s+e.values[0],l=r+e.values[1],t.push({type:"T",values:[i,l]}),s=i,r=l):"Z"!==u&&"z"!==u||(t.push({type:"Z",values:[]}),s=a,r=n)})),t}(s));return this[h]=p(t),t}if(this[l])return p(this[l]);var s=r(this.getAttribute("d")||"");return this[l]=p(s),s},SVGPathElement.prototype.setPathData=function(e){if(0===e.length)s?this.setAttribute("d",""):this.removeAttribute("d");else{for(var t="",r=0,a=e.length;r<a;r+=1){var n=e[r];r>0&&(t+=" "),t+=n.type,n.values&&n.values.length>0&&(t+=" "+n.values.join(" "))}this.setAttribute("d",t)}},SVGRectElement.prototype.getPathData=function(e){var t=this.x.baseVal.value,s=this.y.baseVal.value,r=this.width.baseVal.value,a=this.height.baseVal.value,n=this.hasAttribute("rx")?this.rx.baseVal.value:this.ry.baseVal.value,u=this.hasAttribute("ry")?this.ry.baseVal.value:this.rx.baseVal.value;n>r/2&&(n=r/2),u>a/2&&(u=a/2);var i=[{type:"M",values:[t+n,s]},{type:"H",values:[t+r-n]},{type:"A",values:[n,u,0,0,1,t+r,s+u]},{type:"V",values:[s+a-u]},{type:"A",values:[n,u,0,0,1,t+r-n,s+a]},{type:"H",values:[t+n]},{type:"A",values:[n,u,0,0,1,t,s+a-u]},{type:"V",values:[s+u]},{type:"A",values:[n,u,0,0,1,t+n,s]},{type:"Z",values:[]}];return i=i.filter((function(e){return"A"!==e.type||0!==e.values[0]&&0!==e.values[1]})),e&&!0===e.normalize&&(i=_(i)),i},SVGCircleElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,s=this.cy.baseVal.value,r=this.r.baseVal.value,a=[{type:"M",values:[t+r,s]},{type:"A",values:[r,r,0,0,1,t,s+r]},{type:"A",values:[r,r,0,0,1,t-r,s]},{type:"A",values:[r,r,0,0,1,t,s-r]},{type:"A",values:[r,r,0,0,1,t+r,s]},{type:"Z",values:[]}];return e&&!0===e.normalize&&(a=_(a)),a},SVGEllipseElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,s=this.cy.baseVal.value,r=this.rx.baseVal.value,a=this.ry.baseVal.value,n=[{type:"M",values:[t+r,s]},{type:"A",values:[r,a,0,0,1,t,s+a]},{type:"A",values:[r,a,0,0,1,t-r,s]},{type:"A",values:[r,a,0,0,1,t,s-a]},{type:"A",values:[r,a,0,0,1,t+r,s]},{type:"Z",values:[]}];return e&&!0===e.normalize&&(n=_(n)),n},SVGLineElement.prototype.getPathData=function(){return[{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]},SVGPolylineElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var s=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[s.x,s.y]})}return e},SVGPolygonElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var s=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[s.x,s.y]})}return e.push({type:"Z",values:[]}),e}}();