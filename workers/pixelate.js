const a6=b;(function(c,d){const a5=b,f=c();while(!![]){try{const g=parseInt(a5(0x97))/0x1*(parseInt(a5(0xa5))/0x2)+parseInt(a5(0xa6))/0x3*(-parseInt(a5(0xa0))/0x4)+parseInt(a5(0x90))/0x5*(parseInt(a5(0xb5))/0x6)+parseInt(a5(0xa2))/0x7*(parseInt(a5(0x94))/0x8)+parseInt(a5(0xab))/0x9*(parseInt(a5(0xb1))/0xa)+parseInt(a5(0x91))/0xb*(-parseInt(a5(0xb9))/0xc)+-parseInt(a5(0x9d))/0xd*(parseInt(a5(0xb7))/0xe);if(g===d)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x702e5));function b(c,d){const e=a();return b=function(f,g){f=f-0x8d;let h=e[f];return h;},b(c,d);}function a(){const ae=['map','shapes','2097ffClIA','round','ellipse','length','rgba(0,0,0,0)','addEventListener','35790myghpA','data','message','postMessage','2552034ENQIQS','<svg\x20viewBox=\x220\x200\x20','14zyGLOJ','drawImage','1417176KCmHtq','<path\x20','<ellipse\x20','></path>','10hqHiyK','22EIlbTm','rgba(','EPSILON','273136Khsgtk','toString','></rect>','1609UgsGpa','join','width','entries','push','getImageData','11658816RvSVUW','height','rectangle','326296BlGlda','getContext','28bLdeRr','</svg>','pow','20sABRtl','9UnSvmE','fill:\x20','paths'];a=function(){return ae;};return a();}let e={'columns':0x14,'rows':0x14,'pixelShape':a6(0x9f),'pixelSize':0.9,'renderAs':'paths','geometryPrecision':0x3};globalThis[a6(0xb0)](a6(0xb3),j=>{const a7=a6;let [k,m]=j[a7(0xb2)];m=t(e,m);let q=r(k),{width:v,height:w}=k,{columns:z,rows:A,pixelShape:B,pixelSize:C,renderAs:D,geometryPrecision:E}=m,F=v/z,G=w/A,H=a7(0xb6)+v+'\x20'+w+'\x22>';if('rectangle'===B){for(let I=0x0;I<z;I+=0x1)for(let J=0x0;J<A;J+=0x1){let K=I*F,L=J*G,M=i((K+F/0x2)/v,(L+G/0x2)/w,k,q);if(a7(0xaf)!==M){let N=F*C,O=G*C,P=K+F/0x2-N/0x2,Q=L+G/0x2-O/0x2;if(a7(0xaa)===D){let R={'x':l(P,E),'y':l(Q,E),'width':l(N,E),'height':l(O,E),'style':a7(0xa7)+M+';'};H+='<rect\x20'+Object[a7(0x9a)](R)[a7(0xa9)](([S,T])=>S+'=\x22'+T+'\x22')[a7(0x98)]('\x20')+a7(0x96);}else{if(a7(0xa8)===D){let S={'d':[['M',l(P,E),l(Q,E)],['H',l(P+N,E)],['V',l(Q+O,E)],['H',l(P,E)],['V',l(Q,E)],['Z']][a7(0xa9)](T=>T[a7(0x98)]('\x20'))[a7(0x98)]('\x20'),'style':a7(0xa7)+M+';'};H+=a7(0x8d)+Object[a7(0x9a)](S)[a7(0xa9)](([T,U])=>T+'=\x22'+U+'\x22')['join']('\x20')+a7(0x8f);}}}}}else{if(a7(0xad)===B){for(let T=0x0;T<z;T+=0x1)for(let U=0x0;U<A;U+=0x1){let V=T*F+F/0x2,W=U*G+G/0x2,X=F/0x2*C,Y=G/0x2*C,Z=i(V/v,W/w,k,q);if('rgba(0,0,0,0)'!==Z){if(V=l(V,E),W=l(W,E),X=l(X,E),Y=l(Y,E),a7(0xaa)===D){let a0={'cx':l(V,E),'cy':l(W,E),'rx':l(X,E),'ry':l(Y,E),'style':a7(0xa7)+Z+';'};H+=a7(0x8e)+Object[a7(0x9a)](a0)[a7(0xa9)](([a1,a2])=>a1+'=\x22'+a2+'\x22')[a7(0x98)]('\x20')+'></ellipse>';}else{if(a7(0xa8)===D){let a1=E,a2={'d':[['M',l(V-X,a1),l(W,a1)],['a',l(X,a1),l(Y,a1),0x0,0x1,0x0,l(0x2*X,a1),0x0],['a',l(X,a1),l(Y,a1),0x0,0x1,0x0,l(-0x2*X,a1),0x0],['Z']][a7(0xa9)](a3=>a3['join']('\x20'))['join']('\x20'),'style':a7(0xa7)+Z+';'};H+=a7(0x8d)+Object['entries'](a2)[a7(0xa9)](([a3,a4])=>a3+'=\x22'+a4+'\x22')[a7(0x98)]('\x20')+a7(0x8f);}}}}}}H+=a7(0xa3),globalThis[a7(0xb4)](H);});let t=(c,d)=>{const a8=a6;let f={};for(let [g,h]of Object[a8(0x9a)](c))f[g]=void 0x0!==d[g]?d[g]:c[g];return f;},l=(c,d=0x0)=>{const a9=a6;let f=Math[a9(0xa4)](0xa,d);return Math[a9(0xac)]((c+Number[a9(0x93)])*f)/f;},r=c=>{const aa=a6;let d=new OffscreenCanvas(c['width'],c[aa(0x9e)])[aa(0xa1)]('2d');d[aa(0xb8)](c,0x0,0x0);let f=d[aa(0x9c)](0x0,0x0,c['width'],c[aa(0x9e)]),g=[];for(let h=0x0;h<f['data'][aa(0xae)];h+=0x4)g[aa(0x9b)]([f[aa(0xb2)][h],f[aa(0xb2)][h+0x1],f['data'][h+0x2],f[aa(0xb2)][h+0x3]]);return g;},i=(c,d,f,g)=>{const ab=a6;let h=g[Math['round'](c*f[ab(0x99)])+Math[ab(0xac)](d*f[ab(0x9e)])*f[ab(0x99)]],j=ab(0xaf);return h&&(j=s(...h)),j;},s=(c,d,f,g)=>{const ad=a6;let h=j=>{const ac=b;let k=j[ac(0x95)](0x10);return 0x1==k[ac(0xae)]?'0'+k:k;};return 0xff===g?'#'+h(c)+h(d)+h(f):0x0===g?ad(0xaf):ad(0x92)+c+','+d+','+f+','+(g=l(g/0xff,0x2))+')';};