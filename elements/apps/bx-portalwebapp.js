const bY=a1;(function(af,ag){const bX=a1,ah=af();while(!![]){try{const aj=-parseInt(bX(0x50d))/0x1*(-parseInt(bX(0xa9a))/0x2)+parseInt(bX(0x327))/0x3*(-parseInt(bX(0xfcb))/0x4)+-parseInt(bX(0x55f))/0x5+-parseInt(bX(0x62a))/0x6*(-parseInt(bX(0xbda))/0x7)+parseInt(bX(0x2f1))/0x8+-parseInt(bX(0xe11))/0x9+parseInt(bX(0x8c4))/0xa;if(aj===ag)break;else ah['push'](ah['shift']());}catch(ak){ah['push'](ah['shift']());}}}(a0,0x41c9b));import a2 from'/libs/xel/xel.js';import a3 from'/libs/color/color.js';import a4 from'/libs/css-parser/css-parser.js';import'/libs/paper/paper.js';import a5 from'/libs/seed-random/seed-random.js';import a6 from'/libs/dom-purify/dom-purify.js';import a7 from'/libs/dexie/dexie.js';import a8 from'/libs/typesense/typesense.js';import a9 from'/libs/pako/pako.js';import ab from'/libs/firebase/firebase.js';import ac from'/libs/prose-mirror/prose-mirror.js';import ad from'/libs/code-mirror/code-mirror-tiny.js';const d=bY(0x57a),u=bY(0x895),p=[bY(0xda8),bY(0xdfc),'line','path',bY(0xdea),'polyline',bY(0x3f1)],m=['text',bY(0x7be),bY(0x514)],x=[...p,...m,bY(0x6fc),bY(0x88f)],g=[...p,...m],b=[bY(0xc3f),bY(0x2c8),bY(0x700),bY(0x8b4)],f=[bY(0x1e2),bY(0xd39),bY(0x45d)],w=[bY(0xdae),'g',bY(0x81d),bY(0x898),'use'],v=[...p,bY(0x7a7),bY(0x881)],y=[...x,bY(0x1023),'a','g','use'],k=['feBlend',bY(0x534),bY(0xd76),'feComposite',bY(0xedd),'feDiffuseLighting',bY(0x45f),bY(0x9be),bY(0x449),bY(0xad5),'feImage','feMerge','feMorphology',bY(0x1034),bY(0xac9),bY(0xb75),bY(0x826)],C=[bY(0x6f3),bY(0x90d),bY(0x99d),'feFuncR'],S=[bY(0x294),bY(0x80e),'feSpotLight'],T=[bY(0xf63),bY(0x6ed),bY(0x7e1),bY(0xf62)],$=[...x,...b,...f,...w,...k,...C,...S,...T,'a',bY(0xc43),bY(0x51c),'feMergeNode',bY(0xe7a),bY(0x1023),bY(0x102f),bY(0x567),bY(0xe90),bY(0x44a)],P=[bY(0xac3),'multiply',bY(0x97c),bY(0x2fe),bY(0x5dd),bY(0xa90),'color-dodge','color-burn','hard-light',bY(0x73b),bY(0xda1),bY(0xbd1),bY(0x66e),bY(0xccc),bY(0x56c),bY(0x803)],E=[bY(0x5c1),'dominant-baseline',bY(0x783),'font-size',bY(0x370),bY(0x59f),bY(0xddb),bY(0x74a),bY(0x4ff),bY(0x499),'text-decoration','text-rendering',bY(0xefe),bY(0x39a),'white-space',bY(0x91f),bY(0xf34),bY(0xc9b)],L={'a':[...T,...f,...b,...p,...w,'a',bY(0x1023),'filter',bY(0x88f),'marker',bY(0x51c),bY(0x567),bY(0xe90),'text',bY(0x44a),bY(0x10cf)],'animate':[...f,'script'],'animateMotion':[...f,bY(0x567),bY(0x67b)],'animateTransform':[...f,bY(0x567)],'bx-title':['#text'],'circle':[...T,...f,...b,bY(0x1023),bY(0xc43),bY(0x51c),'script','style'],'clipPath':[...T,...f,...p,bY(0x7a7),bY(0x881),bY(0x567),bY(0xe90)],'defs':[...T,...f,...b,...p,...w,'a',bY(0x1023),bY(0xe7a),bY(0x88f),bY(0xc43),bY(0x51c),'script',bY(0xe90),bY(0x7a7),bY(0x44a),'bx-grid','bx-guide'],'desc':[bY(0x10cf)],'ellipse':[...T,...f,...b,bY(0x1023),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90)],'feBlend':[...f,bY(0xf63),bY(0xf62),bY(0x567),'style'],'feColorMatrix':[...f,bY(0xf63),bY(0xf62),'script',bY(0xe90)],'feComponentTransfer':[...f,...C,bY(0x567),bY(0xe90)],'feComposite':[...f,bY(0xf63),bY(0xf62),'script',bY(0xe90)],'feConvolveMatrix':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feDiffuseLighting':[...f,...S,bY(0x567),bY(0xe90)],'feDisplacementMap':[...f,bY(0xf63),'set',bY(0x567),bY(0xe90)],'feDistantLight':[...f,'animate','set',bY(0x567),bY(0xe90)],'feDropShadow':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feFlood':[...f,bY(0xf63),bY(0xf62),'script',bY(0xe90)],'feFuncR':[...f,bY(0xf63),'set',bY(0x567),bY(0xe90)],'feFuncG':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feFuncB':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feFuncA':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feGaussianBlur':[...f,'animate',bY(0xf62),bY(0x567),'style'],'feImage':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feMerge':[...f,bY(0xdda),bY(0x567),'style'],'feMergeNode':[...f,bY(0xf63),'set',bY(0x567),'style'],'feMorphology':[...f,'animate',bY(0xf62),'script','style'],'feOffset':[...f,bY(0xf63),bY(0xf62),'script',bY(0xe90)],'fePointLight':[...f,bY(0xf63),'set','script','style'],'feSpecularLighting':[...f,...S,'script',bY(0xe90)],'feSpotLight':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'feTile':[...f,bY(0xf63),bY(0xf62),bY(0x567),'style'],'feTurbulence':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'filter':[...f,...k,bY(0xf63),bY(0xf62),bY(0x567),'style'],'g':[...T,...f,...b,...p,...w,'a',bY(0x1023),bY(0xe7a),bY(0x88f),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90),'text','view'],'image':[...T,...f,bY(0x1023),'mask','script',bY(0xe90)],'line':[...T,...f,...b,bY(0x1023),bY(0xc43),bY(0x51c),bY(0x567),'style'],'linearGradient':[...f,bY(0xf63),bY(0x7e1),'set',bY(0x567),bY(0x102f),'style'],'marker':[...f,...b,...p,...w,bY(0xf63),bY(0x6ed),bY(0x7e1),bY(0xf62),'a',bY(0x1023),bY(0xe7a),bY(0x88f),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90),bY(0x7a7),bY(0x44a)],'mask':[...T,...f,...p,...w,...b,'a',bY(0x1023),bY(0xe7a),bY(0x88f),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90),bY(0x7a7),'view',bY(0x7a7)],'mpath':[...f,bY(0x567)],'path':[...T,...f,...b,bY(0x1023),bY(0xc43),bY(0x51c),'script',bY(0xe90)],'pattern':[...f,...b,...p,...w,'animate',bY(0x6ed),bY(0x7e1),'set','a',bY(0x1023),bY(0xe7a),bY(0x88f),'marker',bY(0x51c),bY(0x567),bY(0xe90),bY(0x7a7),bY(0x44a)],'polygon':[...T,...f,...b,'clipPath',bY(0xc43),bY(0x51c),'script',bY(0xe90)],'polyline':[...T,...f,...b,bY(0x1023),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90)],'radialGradient':[...f,bY(0xf63),bY(0x7e1),bY(0xf62),bY(0x567),bY(0x102f),'style'],'rect':[...T,...f,...b,bY(0x1023),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90)],'script':[bY(0x10cf)],'set':[...f,bY(0x567)],'solidcolor':[...f,'script',bY(0xe90)],'stop':[...f,bY(0xf63),bY(0xf62),bY(0x567),bY(0xe90)],'style':[bY(0x10cf)],'svg':[...T,...f,...b,...p,...w,'a',bY(0x1023),bY(0xe7a),bY(0x88f),bY(0xc43),bY(0x51c),bY(0x567),bY(0xe90),bY(0x7a7),bY(0x44a)],'symbol':[...f,...b,...p,...w,bY(0xf63),bY(0x6ed),bY(0x7e1),bY(0xf62),'a',bY(0x1023),bY(0xe7a),bY(0x88f),bY(0xc43),bY(0x51c),'script',bY(0xe90),'text',bY(0x44a)],'text':[...T,...f,...b,'a',bY(0x1023),bY(0xc43),bY(0x51c),'script',bY(0xe90),bY(0x514),bY(0x7be),'#text'],'textPath':[...f,...b,'animate','set','a',bY(0x1023),bY(0xc43),bY(0x51c),bY(0x567),'style',bY(0x514),'#text'],'tspan':[...f,...b,'animate','set','a',bY(0x567),bY(0xe90),'tspan',bY(0x10cf)],'use':[...T,...f,...b,bY(0x1023),bY(0x51c),bY(0x567),bY(0xe90)],'view':[...f,'animate',bY(0x6ed),bY(0x7e1),bY(0xf62),bY(0x567),bY(0xe90)]},U=[{'name':'alignment-baseline','displayName':bY(0x306),'presentationAttributeName':bY(0xd62),'initialValue':bY(0xede),'values':[{'type':bY(0x2d0),'tokens':[bY(0xede),bY(0xc03),bY(0xefb),bY(0x236),bY(0x6b3),bY(0x337),bY(0x9ba),bY(0x10a5),bY(0xdac),bY(0xc78),bY(0x77e),bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[bY(0x7a7),'tspan',bY(0x7be),bY(0xff5)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':'baseline-shift','displayName':'#baseline-shift','presentationAttributeName':'baseline-shift','initialValue':'0','values':[{'type':bY(0x20c)},{'type':bY(0xa39)},{'type':bY(0x6dc)},{'type':bY(0x2d0),'tokens':[bY(0x982),bY(0xa82),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x514),bY(0x7be),bY(0xff5)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x941),'displayName':'#clip-path','presentationAttributeName':bY(0x941),'initialValue':bY(0xcf1),'values':[{'type':bY(0xb59)},{'type':bY(0x2d0),'tokens':['fill-box',bY(0xd96),bY(0xf9d),bY(0xcf1),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x2e6),'displayName':bY(0xa51),'presentationAttributeName':'clip-rule','initialValue':bY(0x26d),'values':[{'type':bY(0x2d0),'tokens':[bY(0x26d),'evenodd','inherit',bY(0x4b6),'unset']}],'appliesTo':[...x,bY(0x881)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x56c),'displayName':'#color','presentationAttributeName':bY(0x56c),'initialValue':bY(0x10d0),'values':[{'type':bY(0x56c)},{'type':bY(0x2d0),'tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881)],'inheritable':!0x0,'animatable':!0x0,'interpolation':['linear',bY(0xcb9),bY(0x60d)]},{'name':bY(0x815),'displayName':bY(0x52e),'presentationAttributeName':bY(0x815),'initialValue':bY(0x1ef),'values':[{'type':bY(0x2d0),'tokens':[bY(0x307),'sRGB',bY(0x809),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881),bY(0x2c8),'radialGradient'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x85f),'displayName':'#color-interpolation','presentationAttributeName':bY(0x85f),'initialValue':'linearRGB','values':[{'type':bY(0x2d0),'tokens':[bY(0x307),bY(0x1ef),'linearRGB',bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':['feBlend',bY(0x534),bY(0xd76),bY(0xbef),bY(0xedd),bY(0x636),bY(0x45f),bY(0x9be),bY(0xad5),bY(0xe2f),bY(0x97e),bY(0xac9),'feTurbulence'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x751),'displayName':bY(0x4e2),'presentationAttributeName':'cursor','initialValue':'auto','values':[{'type':'url'},{'type':bY(0x2d0),'tokens':['context-menu',bY(0xd92),bY(0x246),bY(0x77a),bY(0xbad),bY(0x5b8),'crosshair',bY(0x7a7),'vertical-text',bY(0x1d7),bY(0xe09),bY(0x597),'no-drop','not-allowed',bY(0x2cd),bY(0x8f4),bY(0xd31),bY(0x7da),bY(0x648),bY(0xd3e),bY(0xd71),'se-resize','sw-resize',bY(0x800),bY(0xdc4),bY(0x738),bY(0x10d9),bY(0xa29),bY(0x6f8),'row-resize',bY(0x5e5),bY(0xe2e),bY(0xb6f),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a','use'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'direction','displayName':'#direction','presentationAttributeName':'direction','initialValue':bY(0xfee),'values':[{'type':bY(0x2d0),'tokens':[bY(0xfee),'rtl',bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':['text',bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x106b),'displayName':'#display','presentationAttributeName':bY(0x106b),'initialValue':bY(0xb14),'values':[{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0xb14),bY(0x4c8),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0x7be),bY(0x514),bY(0xdae),'g','a',bY(0x881)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0xa00),'displayName':bY(0x4c7),'presentationAttributeName':bY(0xa00),'initialValue':bY(0x307),'values':[{'type':bY(0x2d0),'tokens':['auto',bY(0x497),bY(0x5c7),'reset-size','ideographic','alphabetic',bY(0xbf2),bY(0x9ba),'central','middle',bY(0x206),'text-before-edge','inherit',bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),'tspan'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'fill','displayName':bY(0x2dd),'presentationAttributeName':bY(0x1057),'initialValue':bY(0x10d0),'values':[{'type':bY(0x56c)},{'type':bY(0xb59)},{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0x949),'inherit',bY(0x4b6),'unset']}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),'paced']},{'name':bY(0xf36),'displayName':bY(0xfca),'presentationAttributeName':bY(0xf36),'initialValue':'1','values':[{'type':bY(0x20c)},{'type':bY(0xa39)},{'type':bY(0x2d0),'tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),bY(0x60d)]},{'name':'fill-rule','displayName':bY(0x1c7),'presentationAttributeName':bY(0xbf1),'initialValue':bY(0x26d),'values':[{'type':bY(0x2d0),'tokens':[bY(0x26d),'evenodd','inherit','initial',bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0xe7a),'displayName':bY(0x7a0),'presentationAttributeName':bY(0xe7a),'initialValue':bY(0xcf1),'values':[{'type':bY(0x5a5)},{'type':'token','tokens':[bY(0xcf1),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,'textPath',bY(0x514),'g','a',bY(0xdae),'use'],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x495),'displayName':bY(0x843),'presentationAttributeName':'flood-color','initialValue':'#000','values':[{'type':bY(0x56c)},{'type':bY(0x2d0),'tokens':['currentColor',bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':[bY(0x449)],'inheritable':!0x1,'animatable':!0x0,'interpolation':['linear','spline',bY(0x60d)]},{'name':bY(0xd83),'displayName':bY(0x351),'presentationAttributeName':bY(0xd83),'initialValue':'1','values':[{'type':bY(0x20c),'min':0x0},{'type':bY(0xa39),'min':0x0},{'type':bY(0x2d0),'tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x449)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),bY(0x60d)]},{'name':bY(0x7f9),'displayName':bY(0x84b),'presentationAttributeName':bY(0x7f9),'initialValue':null,'values':[{'type':bY(0x7f9)},{'type':bY(0x2d0),'tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x783),'displayName':'#font-family','presentationAttributeName':'font-family','initialValue':null,'values':[{'type':'font-family'},{'type':bY(0x2d0),'tokens':['cursive','fantasy','monospace','sans-serif','serif',bY(0xa22),bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':['text',bY(0x7be),'tspan'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'font-size','displayName':bY(0x10e6),'presentationAttributeName':bY(0x285),'initialValue':bY(0xc59),'values':[{'type':'token','tokens':[bY(0xbee),bY(0x1040),bY(0x48e),'medium',bY(0xbe0),bY(0x860),'xx-large',bY(0x4ab),'smaller',bY(0xd93),bY(0x4b6),bY(0xcba)]},{'type':bY(0x20c),'min':0x0},{'type':bY(0xa39),'min':0x0},{'type':bY(0x6dc),'min':0x0}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),'paced']},{'name':'font-stretch','displayName':bY(0x471),'presentationAttributeName':bY(0x370),'initialValue':bY(0xac3),'values':[{'type':bY(0x2d0),'tokens':[bY(0xac3),bY(0xe14),bY(0xb99),bY(0x29e),bY(0xb30),bY(0x7d2),'semi-condensed','semi-expanded',bY(0x1cc),bY(0x8d0),'ultra-expanded',bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[bY(0x7a7),'textPath',bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x59f),'displayName':bY(0x756),'presentationAttributeName':bY(0x59f),'initialValue':bY(0xac3),'values':[{'type':bY(0x2d0),'tokens':[bY(0xac3),bY(0x7bd),'oblique','inherit',bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),'textPath',bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'font-variant','displayName':bY(0xb0c),'presentationAttributeName':'font-variant','initialValue':bY(0xac3),'values':[{'type':'token','tokens':[bY(0xac3),'small-caps',bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x74a),'displayName':bY(0x81a),'presentationAttributeName':bY(0x74a),'initialValue':bY(0xac3),'values':[{'type':bY(0x20c)},{'type':bY(0x2d0),'tokens':['normal',bY(0xbcf),bY(0x78b),bY(0x2c9),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x10a8),'displayName':bY(0x997),'presentationAttributeName':'image-rendering','initialValue':bY(0x307),'values':[{'type':bY(0x2d0),'tokens':[bY(0x307),bY(0xc6b),'crisp-edges',bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x88f)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0xf22),'displayName':bY(0xfdd),'presentationAttributeName':null,'initialValue':'auto','values':[{'type':'token','tokens':[bY(0xa8f),'auto',bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881),bY(0x898),'marker',bY(0x7be),bY(0x514)],'inheritable':!0x1,'animatable':!0x1},{'name':'letter-spacing','displayName':bY(0x970),'presentationAttributeName':bY(0x4ff),'initialValue':bY(0xac3),'values':[{'type':bY(0x20c)},{'type':'length'},{'type':'token','tokens':[bY(0xac3),bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[bY(0x7a7),'textPath',bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':['linear',bY(0xcb9),bY(0x60d)]},{'name':bY(0x8d8),'displayName':bY(0x3d5),'presentationAttributeName':bY(0x8d8),'initialValue':bY(0xa76),'values':[{'type':'color'},{'type':bY(0x2d0),'tokens':['currentColor','inherit',bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x636),'feSpecularLighting'],'inheritable':!0x1,'animatable':!0x0,'interpolation':['linear',bY(0xcb9),'paced']},{'name':bY(0xa10),'displayName':bY(0x4f8),'presentationAttributeName':bY(0xa10),'initialValue':bY(0xac3),'values':[{'type':'number','min':0x0},{'type':bY(0xa39),'min':0x0},{'type':'length','min':0x0},{'type':'token','tokens':[bY(0xac3),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x514),bY(0x7be),'text\x20a'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),'paced']},{'name':bY(0xc43),'displayName':bY(0x10c2),'presentationAttributeName':'marker','initialValue':bY(0xcf1),'values':[{'type':'url'},{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0xd93),'initial','unset']}],'appliesTo':[...p],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0xd72),'displayName':bY(0xab7),'presentationAttributeName':'marker-start','initialValue':bY(0xcf1),'values':[{'type':bY(0xb59)},{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[...p],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'marker-mid','displayName':bY(0x96c),'presentationAttributeName':bY(0x501),'initialValue':bY(0xcf1),'values':[{'type':bY(0xb59)},{'type':'token','tokens':[bY(0xcf1),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...p],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x76a),'displayName':'#end-marker','presentationAttributeName':'marker-end','initialValue':bY(0xcf1),'values':[{'type':bY(0xb59)},{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':[...p],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x51c),'displayName':bY(0xed2),'presentationAttributeName':bY(0x51c),'initialValue':bY(0xcf1),'values':[{'type':bY(0xb59)},{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,'g','a','svg',bY(0x881)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x801),'displayName':bY(0x728),'presentationAttributeName':null,'initialValue':bY(0xac3),'values':[{'type':bY(0x2d0),'tokens':[...P,'inherit',bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881),bY(0x898),'marker',bY(0x7be),bY(0x514)],'inheritable':!0x1,'animatable':!0x1},{'name':bY(0x83a),'displayName':'#opacity','presentationAttributeName':bY(0x83a),'initialValue':'1','values':[{'type':'number'},{'type':'token','tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881),bY(0x898),bY(0xc43),bY(0x7be),'tspan'],'inheritable':!0x1,'animatable':!0x0,'interpolation':[bY(0x781),'spline',bY(0x60d)]},{'name':'overflow','displayName':bY(0x439),'presentationAttributeName':'overflow','initialValue':bY(0x79e),'values':[{'type':bY(0x2d0),'tokens':[bY(0x79e),bY(0x96e),bY(0xa78),bY(0x307),bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':[bY(0xdae),'symbol',bY(0x8b4),bY(0xc43),'image'],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0xab0),'displayName':bY(0x50a),'presentationAttributeName':null,'initialValue':bY(0xac3),'values':[{'type':'token','tokens':['normal']},{'type':bY(0x1084),'tokens':['fill',bY(0x5cd),bY(0x1006)]}],'inheritable':!0x0,'appliesTo':[...g],'animatable':!0x1},{'name':bY(0x7d8),'displayName':bY(0x1df),'presentationAttributeName':bY(0x7d8),'initialValue':bY(0x307),'values':[{'type':'token','tokens':[bY(0xf61),bY(0x3ae),bY(0x6c5),bY(0xcd9),bY(0x79e),'painted',bY(0x1057),bY(0x5cd),bY(0x3b9),bY(0xcf1),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'inheritable':!0x0,'appliesTo':[...x,bY(0xdae),'g','a',bY(0x881)],'animatable':!0x0,'interpolation':[]},{'name':bY(0x4ea),'displayName':bY(0xc61),'presentationAttributeName':bY(0x4ea),'initialValue':bY(0x307),'values':[{'type':'token','tokens':[bY(0x307),'optimizeSpeed',bY(0x1c3),'geometricPrecision',bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...p],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x202),'displayName':bY(0xdc0),'presentationAttributeName':bY(0x202),'initialValue':bY(0x10d0),'values':[{'type':bY(0x56c)},{'type':bY(0x2d0),'tokens':[bY(0x949),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x102f)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),'paced']},{'name':bY(0x237),'displayName':bY(0x396),'presentationAttributeName':bY(0x237),'initialValue':'1','values':[{'type':bY(0x20c)},{'type':'percentage'},{'type':bY(0x2d0),'tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x102f)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),bY(0x60d)]},{'name':'stroke','displayName':'#stroke','presentationAttributeName':'stroke','initialValue':bY(0xcf1),'values':[{'type':bY(0x56c)},{'type':'url'},{'type':bY(0x2d0),'tokens':[bY(0xcf1),bY(0x949),bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':['linear','spline',bY(0x60d)]},{'name':bY(0x73d),'displayName':bY(0x979),'presentationAttributeName':'stroke-dasharray','initialValue':bY(0xcf1),'values':[{'type':'dasharray'},{'type':bY(0x2d0),'tokens':['none',bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),'spline']},{'name':bY(0x770),'displayName':bY(0xe1e),'presentationAttributeName':'stroke-dashoffset','initialValue':'0','values':[{'type':bY(0x20c)},{'type':bY(0xa39)},{'type':bY(0x6dc)},{'type':bY(0x2d0),'tokens':['inherit',bY(0x4b6),'unset']}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),bY(0x60d)]},{'name':bY(0xea8),'displayName':bY(0x7b8),'presentationAttributeName':bY(0xea8),'initialValue':bY(0xf69),'values':[{'type':bY(0x2d0),'tokens':['butt',bY(0xbf4),bY(0xd66),'inherit',bY(0x4b6),'unset']}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x97a),'displayName':bY(0x977),'presentationAttributeName':bY(0x97a),'initialValue':bY(0x865),'values':[{'type':bY(0x2d0),'tokens':['miter',bY(0xbf4),'bevel',bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x4e9),'displayName':bY(0xc1e),'presentationAttributeName':'stroke-miterlimit','initialValue':'4','values':[{'type':bY(0x20c),'min':0x1},{'type':'token','tokens':['inherit',bY(0x4b6),bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':['linear',bY(0xcb9),'paced']},{'name':bY(0xbca),'displayName':'#stroke-opacity','presentationAttributeName':bY(0xbca),'initialValue':'1','values':[{'type':bY(0x20c)},{'type':'percentage'},{'type':'token','tokens':['inherit','initial',bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),bY(0x60d)]},{'name':bY(0x524),'displayName':bY(0xf8f),'presentationAttributeName':bY(0x524),'initialValue':'1','values':[{'type':bY(0x20c)},{'type':bY(0xa39)},{'type':bY(0x6dc)},{'type':'token','tokens':[bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[...g],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),bY(0xcb9),bY(0x60d)]},{'name':'text-anchor','displayName':bY(0x10cc),'presentationAttributeName':bY(0x499),'initialValue':bY(0x105f),'values':[{'type':bY(0x2d0),'tokens':[bY(0x105f),'middle',bY(0xba1),bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':['text',bY(0x7be),'tspan'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0x3d1),'displayName':bY(0xf35),'presentationAttributeName':'text-decoration','initialValue':bY(0xcf1),'values':[{'type':bY(0x1084),'tokens':[bY(0xf7e),bY(0xb88),bY(0x2ae)]},{'type':bY(0x2d0),'tokens':[bY(0xcf1),'inherit','initial',bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x946),'displayName':bY(0x55d),'presentationAttributeName':bY(0x946),'initialValue':bY(0x307),'values':[{'type':'token','tokens':[bY(0x307),'optimizeSpeed',bY(0x5d6),bY(0xa06),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'text-transform','displayName':'#text-transform','presentationAttributeName':null,'initialValue':bY(0xcf1),'values':[{'type':bY(0x2d0),'tokens':[bY(0x9e7),'uppercase','lowercase',bY(0xcf1),bY(0xd93),bY(0x4b6),bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x1},{'name':bY(0xf95),'displayName':'#transform','presentationAttributeName':bY(0xf95),'initialValue':'none','values':[{'type':bY(0x51b)},{'type':bY(0x2d0),'tokens':[bY(0xcf1)]}],'appliesTo':[bY(0xda8),'ellipse','line',bY(0xb87),bY(0xdea),bY(0xdb4),bY(0x3f1),bY(0x88f),bY(0x7a7),bY(0x514),bY(0x881),'a','g','svg'],'inheritable':!0x1,'animatable':!0x0,'interpolation':['linear',bY(0xcb9)]},{'name':bY(0xf2f),'displayName':'#transform-box','presentationAttributeName':null,'initialValue':bY(0xf9d),'values':[{'type':bY(0x2d0),'tokens':['content-box',bY(0x9c6),bY(0xbdf),bY(0xd96),bY(0xf9d)]}],'appliesTo':[bY(0xda8),bY(0xdfc),bY(0xac4),'path','polygon',bY(0xdb4),bY(0x3f1),'image','text','tspan',bY(0x881),'a','g',bY(0xdae)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':'transform-origin','displayName':bY(0x8de),'presentationAttributeName':bY(0x82c),'initialValue':bY(0x647),'values':[{'type':bY(0x2d0),'tokens':['left',bY(0xc78),'right','top',bY(0xdac)]},{'type':'length'}],'appliesTo':[bY(0xda8),bY(0xdfc),bY(0xac4),'path',bY(0xdea),'polyline',bY(0x3f1),bY(0x88f),bY(0x7a7),bY(0x514),bY(0x881),'a','g','svg'],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x39a),'displayName':bY(0x416),'presentationAttributeName':bY(0x39a),'initialValue':'normal','values':[{'type':bY(0x2d0),'tokens':[bY(0xac3),bY(0x379),'bidi-override',bY(0xd93),'initial',bY(0xcba)]}],'appliesTo':[bY(0x7a7),bY(0x7be),bY(0x514)],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0x1d1),'displayName':bY(0x7f7),'presentationAttributeName':bY(0x1d1),'initialValue':bY(0xcf1),'values':[{'type':bY(0x2d0),'tokens':[bY(0xf6a),bY(0xcf1),bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':[...x,'use'],'inheritable':!0x1,'animatable':!0x0,'interpolation':[]},{'name':bY(0xb2c),'displayName':bY(0xf0b),'presentationAttributeName':'visibility','initialValue':bY(0x79e),'values':[{'type':bY(0x2d0),'tokens':[bY(0x79e),bY(0x96e),'inherit',bY(0x4b6),'unset']}],'appliesTo':[...x,'text',bY(0x7be),bY(0x514)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':bY(0xf34),'displayName':'#word-spacing','presentationAttributeName':bY(0xf34),'initialValue':bY(0xac3),'values':[{'type':bY(0x20c)},{'type':'length'},{'type':'token','tokens':[bY(0xac3),'inherit',bY(0x4b6),'unset']}],'appliesTo':[bY(0x7a7),bY(0x7be),'tspan'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[bY(0x781),'spline',bY(0x60d)]},{'name':bY(0x5bf),'displayName':bY(0x3eb),'presentationAttributeName':bY(0x5bf),'initialValue':bY(0xac3),'values':[{'type':'token','tokens':[bY(0xac3),bY(0xc54),bY(0xd0a),bY(0xeba),bY(0xeb4),'inherit',bY(0x4b6),bY(0xcba)]}],'appliesTo':['text','textPath','tspan'],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]},{'name':'will-change','displayName':'#will-change','initialValue':bY(0x307),'values':[{'type':'token','tokens':['auto',bY(0x223),bY(0x801),bY(0xe7a),bY(0x83a),bY(0xf95)]}],'appliesTo':['rect','circle','ellipse',bY(0xac4),'path',bY(0xdea),bY(0xdb4),bY(0x88f),bY(0x7a7),bY(0x514),bY(0x881),bY(0xdae),'a','g',bY(0x6fc)],'inheritable':!0x0,'animatable':!0x1},{'name':bY(0xc9b),'displayName':bY(0x1077),'presentationAttributeName':bY(0xc9b),'initialValue':'horizontal-tb','values':[{'type':bY(0x2d0),'tokens':['horizontal-tb',bY(0xe0e),bY(0x6f1),bY(0xd93),bY(0x4b6),'unset']}],'appliesTo':['text',bY(0x514),bY(0x7be)],'inheritable':!0x0,'animatable':!0x0,'interpolation':[]}],D=U[bY(0x8fb)](af=>af['presentationAttributeName'])['filter'](af=>af);let z=(af,ag=0x0)=>{const bZ=bY;let ah=Math[bZ(0xcc1)](0xa,ag);return Math[bZ(0xbf4)]((af+Number[bZ(0x9d3)])*ah)/ah;},M=(af,ag,ah=Infinity,aj=null)=>(null!==aj&&(af=z(af,aj)),af<ag?af=ag:af>ah&&(af=ah),af);class A extends a3{get[bY(0x1ce)](){const c0=bY;return c0(0xf31);}static[bY(0xf27)](af,ag=!0x1){if(ag)return new A(af);{let ah=null;try{ah=new A(af);}catch(aj){}return ah;}}}class B{[bY(0x861)]=null;[bY(0xf42)]=0x0;#e;constructor(af){this.#e=af;}[bY(0xff4)](){const c1=bY;let af=this.#e[this[c1(0xf42)]];return this[c1(0x861)]=af,c1(0x9a0)===af[c1(0xf37)]||(this[c1(0xf42)]+=0x1),af;}['reset'](af){const c2=bY;this[c2(0xf42)]=af;}}class R{get[bY(0xf0a)](){return this.#t;}set[bY(0xf0a)](af){this.#t=af;}get[bY(0x1061)](){return new URL(this.#t)['origin'];}get[bY(0x1ce)](){const c3=bY;return c3(0xb01);}#t;constructor(af=''){this.#t=af;}static['fromString'](af,ag=!0x1){const c4=bY;let ah=[...a4[c4(0xacd)](af),new a4['EOFToken']()],aj=new B(ah);if(aj[c4(0xff4)](),c4(0x1d9)===aj[c4(0x861)][c4(0xf37)]&&aj[c4(0xff4)](),c4(0x932)===aj[c4(0x861)][c4(0xf37)]){let ak=aj[c4(0x861)][c4(0xf0a)];if(aj[c4(0xff4)](),'WHITESPACE'===aj['currentToken'][c4(0xf37)]&&aj[c4(0xff4)](),c4(0x9a0)===aj[c4(0x861)][c4(0xf37)])return new R(ak);if(ag)throw new DOMException(c4(0x347),c4(0xbbc));return null;}if(c4(0x40d)===aj[c4(0x861)][c4(0xf37)]&&c4(0xb59)===aj[c4(0x861)][c4(0xf0a)]){if(aj[c4(0xff4)](),'WHITESPACE'===aj[c4(0x861)][c4(0xf37)]&&aj['read'](),c4(0x40a)===aj['currentToken'][c4(0xf37)]){let al=aj[c4(0x861)]['value'];if(aj['read'](),c4(0x1d9)===aj[c4(0x861)][c4(0xf37)]&&aj[c4(0xff4)](),')'===aj[c4(0x861)][c4(0xf37)]){if(aj[c4(0xff4)](),c4(0x1d9)===aj[c4(0x861)][c4(0xf37)]&&aj[c4(0xff4)](),'EOF'===aj[c4(0x861)]['tokenType'])return new R(al[c4(0x963)]());if(ag)throw new DOMException(c4(0x347),c4(0xbbc));return null;}if(ag)throw new DOMException(c4(0xe00),c4(0xbbc));return null;}if(ag)throw new DOMException('Expected\x20STRING\x20token.',c4(0xbbc));return null;}if(ag)throw new DOMException(c4(0xbfe),c4(0xbbc));return null;}[bY(0xd23)](){const c5=bY;return'url('+this[c5(0xf0a)]+')';}}class I{#i;get[bY(0x740)](){return this.#i;}set[bY(0x740)](af){this.#i=af;}get[bY(0x1ce)](){return'<clock-value>';}constructor(af=0x0){this.#i=af;}static[bY(0xf27)](af,ag=!0x1){const c6=bY;let ah=[...a4[c6(0xacd)](af[c6(0x963)]()),new a4[(c6(0xc74))]()],aj=new B(ah),ak=0x0;if(aj[c6(0xff4)](),c6(0x957)===aj[c6(0x861)][c6(0xf37)]){if('ms'===aj[c6(0x861)][c6(0xae1)])ak=0.001*aj[c6(0x861)]['value'];else{if('s'===aj[c6(0x861)]['unit'])ak=aj['currentToken'][c6(0xf0a)];else{if(c6(0x339)===aj[c6(0x861)]['unit'])ak=0x3c*aj[c6(0x861)][c6(0xf0a)];else{if('h'!==aj[c6(0x861)]['unit']){if(ag)throw new DOMException(c6(0xd0d)+aj[c6(0x861)][c6(0xae1)]+c6(0x4d0),c6(0xbbc));return null;}ak=0x3c*aj['currentToken'][c6(0xf0a)]*0x3c;}}}}else{if(c6(0xbb5)!==aj[c6(0x861)][c6(0xf37)]){if(ag)throw new DOMException(c6(0xd0d)+aj[c6(0x861)]['tokenType']+c6(0x503),c6(0xbbc));return null;}{let al=aj[c6(0x861)];if(aj['read'](),c6(0x9a0)===aj['currentToken'][c6(0xf37)])return new I(al[c6(0xf0a)]);{let am=[aj['currentToken']];for(':'===aj[c6(0x861)]['tokenType']&&(aj[c6(0xff4)](),c6(0xbb5)===aj[c6(0x861)][c6(0xf37)]&&(am[c6(0xc68)](aj[c6(0x861)]),aj[c6(0xff4)](),':'===aj[c6(0x861)]['tokenType']&&(aj[c6(0xff4)](),c6(0xbb5)===aj['currentToken']['tokenType']&&am[c6(0xc68)](aj[c6(0x861)]))));am['length']<0x3;){let ar=new a4[(c6(0x8a1))]();ar[c6(0xf0a)]=0x0,ar['repr']='00',ar[c6(0x1ce)]='integer',am[c6(0x8b1)](ar);}let [an,ap,aq]=am;if(!(c6(0xa87)===an[c6(0x1ce)]&&an[c6(0xf0a)]>=0x0))throw new DOMException(c6(0x3b0),'SyntaxError');if(ak=0x3c*an[c6(0xf0a)]*0x3c,!(c6(0xa87)===ap[c6(0x1ce)]&&0x2===ap[c6(0x6c0)][c6(0x6dc)]&&ap[c6(0xf0a)]>=0x0&&ap[c6(0xf0a)]<=0x3b))throw new DOMException(c6(0x87b),c6(0xbbc));if(ak+=0x3c*ap[c6(0xf0a)],!(0x2===aq[c6(0x6c0)]['split']('.')[0x0][c6(0x6dc)]&&aq['value']>=0x0&&aq[c6(0xf0a)]<0x3c))throw new DOMException(c6(0xf54),c6(0xbbc));ak+=aq[c6(0xf0a)];}}}if(aj[c6(0xff4)](),c6(0x9a0)===aj['currentToken'][c6(0xf37)])return new I(ak);if(ag)throw new DOMException('Expected\x20EOF\x20token.','SyntaxError');return null;}[bY(0xd23)](){return this.#i+'s';}['clone'](){return new I(this.#i);}[bY(0xe69)](af){const c7=bY;return af['type']===this[c7(0x1ce)]&&af[c7(0x740)]===this['seconds'];}}class F{#s;#a;#i;get['id'](){return this.#s;}set['id'](af){this.#s=af;}get[bY(0xb05)](){return this.#a;}set[bY(0xb05)](af){this.#a=af;}get['seconds'](){return this.#i;}set[bY(0x740)](af){this.#i=af;}get['type'](){return'<event-value>';}constructor(af=null,ag=bY(0xff9),ah=0x0){this.#s=af,this.#a=ag,this.#i=ah;}static['fromString'](af,ag=!0x1,ah=!0x1){const c8=bY;af=af[c8(0x963)](),ah&&af[c8(0x9ae)]('#')&&(af=af[c8(0xe2d)](0x1));let aj=[...a4[c8(0xacd)](af),new a4['EOFToken']()],ak=new B(aj),al=null,am=null;if(ak['read'](),c8(0x20e)!==ak[c8(0x861)][c8(0xf37)]){if(ag)throw new DOMException(c8(0xd0d)+ak[c8(0x861)][c8(0xf37)]+c8(0x503),c8(0xbbc));return null;}if(am=ak[c8(0x861)]['value'],ak['read'](),c8(0x780)===ak[c8(0x861)][c8(0xf37)]&&'.'==ak[c8(0x861)][c8(0xf0a)]){if(al=am,am=null,ak['read'](),c8(0x20e)!==ak[c8(0x861)][c8(0xf37)]){if(ag)throw new DOMException(c8(0xd0d)+ak['currentToken'][c8(0xf37)]+c8(0x503),'SyntaxError');return null;}am=ak[c8(0x861)][c8(0xf0a)],ak[c8(0xff4)]();}if('WHITESPACE'===ak[c8(0x861)]['tokenType']&&ak[c8(0xff4)](),c8(0x9a0)===ak['currentToken'][c8(0xf37)])return new F(al,am,0x0);if(c8(0x780)!==ak[c8(0x861)]['tokenType']||!['+','-']['includes'](ak[c8(0x861)][c8(0xf0a)])){if(ag)throw new DOMException(c8(0xd0d)+ak[c8(0x861)][c8(0xf37)]+'\x20token.',c8(0xbbc));return null;}{let an='-'===ak[c8(0x861)][c8(0xf0a)],ap=I[c8(0xf27)](af[c8(0xc97)](ak[c8(0x861)][c8(0xf0a)])[0x1],ag);if(null!==ap)return new F(al,am,an?-ap['seconds']:ap[c8(0x740)]);}}[bY(0xd23)](af=!0x1){const c9=bY;let ag='';if(this['id']&&(af&&(ag+='#'),ag+=this['id']+'.'),ag+=this[c9(0xb05)],0x0!==this.#i){let ah=Math[c9(0x714)](this.#i);this.#i<0x0?ag+='\x20-\x20'+ah+'s':ag+=c9(0x760)+ah+'s';}return ag;}[bY(0xe04)](){return new F(this.#s,this.#a,this.#i);}[bY(0xe69)](af){const cb=bY;return af[cb(0x1ce)]===this[cb(0x1ce)]&&af['id']===this['id']&&af[cb(0xb05)]===this[cb(0xb05)]&&af[cb(0x740)]===this[cb(0x740)];}}class N{#i;get[bY(0x740)](){return this.#i;}set[bY(0x740)](af){this.#i=af;}get[bY(0x1ce)](){return'<offset-value>';}constructor(af=0x0){this.#i=af;}static[bY(0xf27)](af,ag=!0x1){const cc=bY;let ah=!0x1;'-'===(af=af[cc(0x963)]())[0x0]?(ah=!0x0,af=af[cc(0xe2d)](0x1)):'+'===af[0x0]&&(af=af[cc(0xe2d)](0x1));let aj=I['fromString'](af,ag);return null===aj?null:new N(ah?-aj[cc(0x740)]:aj[cc(0x740)]);}[bY(0xd23)](){return this.#i+'s';}[bY(0xe04)](){return new N(this.#i);}[bY(0xe69)](af){const cd=bY;return af['type']===this['type']&&af[cd(0x740)]===this['seconds'];}}class O{#s;#o;#i;get['id'](){return this.#s;}set['id'](af){this.#s=af;}get[bY(0x551)](){return this.#o;}set['repeat'](af){this.#o=af;}get[bY(0x740)](){return this.#i;}set[bY(0x740)](af){this.#i=af;}get[bY(0x1ce)](){return'<repeat-value>';}constructor(af=null,ag=0x1,ah=0x0){this.#s=af,this.#o=ag,this.#i=ah;}static[bY(0xf27)](af,ag=!0x1,ah=!0x1){const cf=bY;af=af[cf(0x963)](),ah&&af['startsWith']('#')&&(af=af[cf(0xe2d)](0x1));let aj=[...a4['tokenize'](af),new a4[(cf(0xc74))]()],ak=new B(aj),al=null,am=null;if(ak['read'](),cf(0x20e)===ak[cf(0x861)][cf(0xf37)]){if(al=ak[cf(0x861)]['value'],ak[cf(0xff4)](),cf(0x780)!==ak[cf(0x861)][cf(0xf37)]||'.'!=ak[cf(0x861)]['value']){if(ag)throw new DOMException('Unexpected\x20'+ak[cf(0x861)][cf(0xf37)]+'\x20token.',cf(0xbbc));return null;}ak[cf(0xff4)]();}if('FUNCTION'!==ak['currentToken'][cf(0xf37)]||cf(0x551)!==ak['currentToken'][cf(0xf0a)]){if(ag)throw new DOMException(cf(0xd0d)+ak[cf(0x861)][cf(0xf37)]+cf(0x503),cf(0xbbc));return null;}if(ak[cf(0xff4)](),cf(0xbb5)!==ak['currentToken'][cf(0xf37)]||'integer'!==ak[cf(0x861)]['type']){if(ag)throw new DOMException(cf(0xd0d)+ak[cf(0x861)][cf(0xf37)]+cf(0x503),cf(0xbbc));return null;}if(am=ak['currentToken'][cf(0xf0a)],ak['read'](),')'===ak['currentToken'][cf(0xf37)]&&ak['read'](),'WHITESPACE'===ak[cf(0x861)][cf(0xf37)]&&ak[cf(0xff4)](),cf(0x9a0)===ak[cf(0x861)][cf(0xf37)])return new O(al,am,0x0);if(cf(0x780)!==ak[cf(0x861)][cf(0xf37)]||!['+','-'][cf(0x1d5)](ak[cf(0x861)][cf(0xf0a)])){if(ag)throw new DOMException(cf(0xd0d)+ak[cf(0x861)][cf(0xf37)]+'\x20token.',cf(0xbbc));return null;}{let an='-'===ak['currentToken'][cf(0xf0a)],ap=I[cf(0xf27)](af[cf(0xc97)](ak['currentToken'][cf(0xf0a)])[0x1],ag);if(null!==ap)return new O(al,am,an?-ap[cf(0x740)]:ap['seconds']);}}[bY(0xd23)](af=!0x1){const cg=bY;let ag='';if(this['id']&&(af&&(ag+='#'),ag+=this['id']+'.'),ag+='repeat('+this['repeat']+')',0x0!==this.#i){let ah=Math[cg(0x714)](this.#i);this.#i<0x0?ag+=cg(0xb33)+ah+'s':ag+=cg(0x760)+ah+'s';}return ag;}['clone'](){return new O(this.#s,this.#o,this.#i);}[bY(0xe69)](af){const ch=bY;return af['type']===this[ch(0x1ce)]&&af['id']===this['id']&&af[ch(0x551)]===this['repeat']&&af[ch(0x740)]===this[ch(0x740)];}}class _{#s;#n;#i;get['id'](){return this.#s;}set['id'](af){this.#s=af;}get[bY(0xf42)](){return this.#n;}set['position'](af){this.#n=af;}get[bY(0x740)](){return this.#i;}set['seconds'](af){this.#i=af;}get['type'](){const cj=bY;return cj(0x31d);}constructor(af,ag='end',ah=0x0){this.#s=af,this.#n=ag,this.#i=ah;}static[bY(0xf27)](af,ag=!0x1,ah=!0x1){const ck=bY;af=af[ck(0x963)]()['replaceAll']('-',ck(0xb33))['replaceAll']('+',ck(0x760)),ah&&af[ck(0x9ae)]('#')&&(af=af['substring'](0x1));let aj=[...a4['tokenize'](af),new a4[(ck(0xc74))]()],ak=new B(aj),al=null,am=null;if(ak['read'](),ck(0x20e)!==ak[ck(0x861)][ck(0xf37)]){if(ag)throw new DOMException(ck(0xd0d)+ak['currentToken'][ck(0xf37)]+'\x20token.',ck(0xbbc));return null;}if(al=ak[ck(0x861)][ck(0xf0a)],ak['read'](),ck(0x780)!==ak[ck(0x861)][ck(0xf37)]||'.'!==ak[ck(0x861)][ck(0xf0a)]){if(ag)throw new DOMException(ck(0xd0d)+ak['currentToken'][ck(0xf37)]+ck(0x503),ck(0xbbc));return null;}if(ak[ck(0xff4)](),ck(0x20e)!==ak['currentToken'][ck(0xf37)]||![ck(0x1cf),ck(0xba1)]['includes'](ak[ck(0x861)][ck(0xf0a)])){if(ag)throw new DOMException(ck(0xd0d)+ak['currentToken'][ck(0xf37)]+ck(0x503),ck(0xbbc));return null;}if(am=ak[ck(0x861)]['value'],ak[ck(0xff4)](),'WHITESPACE'===ak[ck(0x861)]['tokenType']&&ak['read'](),ck(0x9a0)===ak[ck(0x861)][ck(0xf37)])return new _(al,am,0x0);if(ck(0x957)===ak[ck(0x861)][ck(0xf37)])ak[ck(0x861)]['value'];else{if(ck(0x780)!==ak['currentToken'][ck(0xf37)]||!['+','-'][ck(0x1d5)](ak[ck(0x861)][ck(0xf0a)])){if(ag)throw new DOMException(ck(0xd0d)+ak[ck(0x861)][ck(0xf37)]+ck(0x503),ck(0xbbc));return null;}{let an='-'===ak[ck(0x861)]['value'],ap=I[ck(0xf27)](af[ck(0xc97)](ak['currentToken'][ck(0xf0a)])[0x1],ag);if(null!==ap)return new _(al,am,an?-ap[ck(0x740)]:ap[ck(0x740)]);}}}[bY(0xd23)](af=!0x1){const cl=bY;let ag='';if(af&&(ag+='#'),ag+=this['id']+'.'+this['position'],0x0!==this.#i){let ah=Math[cl(0x714)](this.#i);this.#i<0x0?ag+=cl(0xb33)+ah+'s':ag+=cl(0x760)+ah+'s';}return ag;}[bY(0xe04)](){return new _(this.#s,this.#n,this.#i);}['compare'](af){const cm=bY;return af[cm(0x1ce)]===this[cm(0x1ce)]&&af['id']===this['id']&&af['position']===this[cm(0xf42)]&&af[cm(0x740)]===this[cm(0x740)];}}let q=(af,ag,ah=!0x1)=>{const cn=bY;if(af[cn(0x6dc)]!==ag['length'])return!0x1;if(ah)for(let aj in af){if(af[aj]!==ag[aj])return!0x1;}else{for(let ak=0x0;ak<af['length'];ak+=0x1)if(!ag[cn(0x1d5)](af[ak]))return!0x1;for(let al=0x0;al<ag[cn(0x6dc)];al+=0x1)if(!af[cn(0x1d5)](ag[al]))return!0x1;}return!0x0;},j=(af,ag,...ah)=>[...af[bY(0x847)](0x0,ag),...ah,...af['slice'](ag)],V=af=>[...new Set(af)],G=(af,ag)=>{const cp=bY;if(0x0===af[cp(0x6dc)])return!0x1;for(let ah=0x0;ah<af['length'];ah+=0x1)if(af[ah]!==ag)return!0x1;return!0x0;},{isFinite:H,isNaN:W,parseFloat:K}=Number,Z=af=>!Array[bY(0x5fb)](af)&&af-K(af)+0x1>=0x0,Y=bY(0xb57),X=bY(0x853);const J=['serif',bY(0xcd4),bY(0x3b7),bY(0x46d),bY(0xe91),bY(0xa22),bY(0x476),bY(0x23e),'fangsong'],Q={'arabic':bY(0xe96),'bengali':bY(0x282),'cyrillic':bY(0x343),'cyrillic-ext':bY(0x106d),'devanagari':bY(0xf9b),'greek':bY(0x592),'greek-ext':bY(0x36d),'gujarati':bY(0xcb0),'gurmukhi':'U+964-965,\x20U+A01-A75,\x20U+200C-200D,\x20U+20B9,\x20U+25CC,\x20U+262C,\x20U+A830-A839','hebrew':bY(0x1022),'kannada':bY(0x4b7),'khmer':bY(0xa30),'latin':bY(0x766),'latin-ext':bY(0x880),'malayalam':bY(0xc89),'myanmar':bY(0x461),'oriya':bY(0xeed),'sinhala':bY(0xc5b),'tamil':bY(0xeab),'thai':bY(0x5db),'telugu':bY(0x68e),'tibetan':bY(0x76b),'vietnamese':bY(0x1fe)},ee={'macos':['Arial',bY(0x37d),bY(0x8f6),'Menlo',bY(0x1085),'Apple\x20Symbols',bY(0xb39),bY(0x64b),'Geeza\x20Pro',bY(0xe10),'Ayuthaya',bY(0x365),bY(0xb0e),'Hiragino\x20Sans',bY(0x1096),'PingFang\x20HK','Apple\x20SD\x20Gothic\x20Neo',bY(0x3ef),bY(0xf00),bY(0x769),'Mukta\x20Mahee',bY(0x3a8),bY(0x263),bY(0x722),bY(0x102e),bY(0x65a),bY(0x1052),bY(0xaac),bY(0x92e),bY(0x106e),bY(0x404),bY(0x808),'Euphemia\x20UCAS',bY(0x1ed),bY(0x588),bY(0xb3f),bY(0x649)],'windows':[bY(0xdf8),bY(0x618),'Segoe\x20UI',bY(0x46e),'Segoe\x20UI\x20Symbol','Segoe\x20UI\x20Emoji',bY(0x6bf),bY(0xa8c),bY(0xb34),bY(0x1cb),bY(0xed4),'Ebrima','Estrangelo\x20Edessa',bY(0x7a1),bY(0x77f),bY(0xdd1),'Gulim',bY(0xab1),'Javanese\x20Text',bY(0xb5f),bY(0x9f5),bY(0x10ec),bY(0xc35),bY(0x3a5),bY(0x8a7),bY(0xd19),'Microsoft\x20New\x20Tai\x20Lue','Microsoft\x20YaHei',bY(0x39b),'MoolBoran',bY(0xdbd),bY(0xc4e),bY(0x82a),'Nuosu\x20SIL',bY(0xf64),bY(0xa5d),bY(0x9c5),'PMingLiU','Raavi',bY(0xc26),'Shruti',bY(0x2d7),'Sylfaen','Tunga',bY(0x9de),bY(0x531),bY(0x5ad),'Yu\x20Gothic',bY(0x1062),'Code2000'],'linux':[bY(0x3fb),bY(0x973),bY(0x808),'Noto\x20Sans\x20Ethiopic',bY(0x1e3),bY(0xa8d),bY(0xfb6),bY(0x89e),bY(0x98a),bY(0x96f),bY(0x9e4),bY(0xa92),'Droid\x20Sans\x20Devanagari',bY(0x221),'Droid\x20Sans\x20Georgian','Droid\x20Sans\x20Hebrew',bY(0x2bc),bY(0x1026),'Droid\x20Sans\x20Thai',bY(0xf7b),bY(0x988),'Lohit\x20Bengali','Lohit\x20Devanagari',bY(0x765),bY(0xc64),'Lohit\x20Marathi','Lohit\x20Odia','Lohit\x20Tamil',bY(0x1d6),bY(0x731),bY(0x25f),bY(0x5df)]};let te=document[bY(0x840)]('template'),ie=(af,...ag)=>{const cq=bY;let ah=[];for(let al=0x0;al<af[cq(0x6dc)];al+=0x1)ah['push'](af[al]),void 0x0!==ag[al]&&ah[cq(0xc68)](ag[al]);let aj=ah[cq(0xf5e)]('');te[cq(0x8c2)]=aj;let ak=document['importNode'](te['content'],!0x0);return 0x1===ak[cq(0x573)][cq(0x6dc)]?ak[cq(0xe5b)]:ak;},se=(af,...ag)=>{const cr=bY;let ah=[];for(let al=0x0;al<af['length'];al+=0x1)ah[cr(0xc68)](af[al]),void 0x0!==ag[al]&&ah[cr(0xc68)](ag[al]);let aj=ah['join'](''),ak=new CSSStyleSheet();return ak['replaceSync'](aj),ak;};var ae=new class{#l;#r=null;#h={};constructor(){const cu=bY;this.#l=new a7(cu(0x10c1)),this.#l['version'](0x1)['stores']({'cache':cu(0x7ce)});}['search'](af='',ag='alphabetical',ah='all',aj=bY(0x3b9),ak=bY(0x3b9)){return new Promise(async al=>{const cv=a1;await this.#c();let am=[],an=this.#l['cache'];''!==af[cv(0x963)]()&&(an=an[cv(0xe7a)](ap=>ap[cv(0x7ce)]['toLowerCase']()[cv(0x1d5)](af[cv(0x963)]()['toLowerCase']()))),cv(0x3b9)!==ah&&(an=an[cv(0xe7a)](ap=>ap[cv(0xf58)]===ah)),cv(0x3b9)!==aj&&(an=an[cv(0xe7a)](ap=>ap[cv(0xf17)]['includes'](aj))),am=await an[cv(0x994)](),cv(0x727)===ag?am=am[cv(0x311)]((ap,aq)=>ap[cv(0x8ec)]>aq[cv(0x8ec)]?-0x1:0x1):cv(0x937)===ag?am=am[cv(0x311)]((ap,aq)=>ap[cv(0x3c5)]>aq[cv(0x3c5)]?-0x1:0x1):cv(0x879)===ag&&(am=am[cv(0x311)]((ap,aq)=>ap[cv(0x927)]>aq['trendingRank']?-0x1:0x1)),cv(0x3b9)!==ak&&(am=am[cv(0x847)](0x28*ak,0x28*(ak+0x1))),al(am);});}[bY(0x456)](){return new Promise(async(af,ag)=>{const cw=a1;let ah;null===this.#r&&(this.#r=new a8[(cw(0x33a))]({'apiKey':cw(0xda6),'connectionTimeoutSeconds':0x5,'nodes':[{'host':X,'port':cw(0xf4f),'protocol':'https'}]}));try{ah=await this.#r[cw(0x74d)](cw(0xd2b))[cw(0x482)]()[cw(0x6b0)]();}catch(ak){return ag(ak);}let aj=ah[cw(0xc97)]('\x0a')[cw(0x8fb)](al=>JSON[cw(0xf30)](al))[cw(0x8fb)](al=>({'family':al['family'],'faces':al[cw(0x543)],'category':al['category'],'subsets':al[cw(0xf17)],'license':al['license'],'thumbnail':al['thumbnail'],'urls':al[cw(0x1030)],'dateRank':al[cw(0x8ec)],'popularityRank':al[cw(0x3c5)],'trendingRank':al['trendingRank'],'pageURL':cw(0x710)+al['id'],'cachedTime':Date[cw(0xee4)]()}));await this.#l[cw(0x3c3)][cw(0xc2a)](),await this.#l[cw(0x3c3)][cw(0x70d)](aj),af();});}[bY(0x5a9)](af,ag=!0x1){return new Promise(async ah=>{const cx=a1;let aj=[];if(await this.#c(),ag){let ak=await this.#d(af);for(let al of ak[cx(0xe07)])al[cx(0x1ce)]===CSSRule['FONT_FACE_RULE']&&aj['push'](al);}else{let am=[],an=new URL(af),ap=an[cx(0x678)][cx(0x10bd)](cx(0x106b))||'auto';if(af[cx(0x9ae)](cx(0x940))){let aq=an[cx(0x678)][cx(0x10bd)](cx(0x7ce));aq[cx(0xc97)]('|'),an[cx(0x678)]['get'](cx(0xfef));let ar={'regular':cx(0x549),'bold':'700','italic':cx(0x216),'bolditalic':'700italic','r':cx(0x549),'b':cx(0x8cd),'i':cx(0x216)};for(let au of aq[cx(0xc97)]('|')){let av=[],[aw,ax]=au[cx(0xc97)](':');for(let ay of ax[cx(0xc97)](','))ay=ar[ay]||ay,av['push'](ay);am['push']({'family':aw,'faceNames':av});}}else{if(af[cx(0x9ae)](cx(0x308))){let az=an[cx(0x678)][cx(0x51d)](cx(0x7ce));for(let aA of az){let [aB,aC]=aA[cx(0xc97)](':');if(void 0x0===aC)am[cx(0xc68)]({'family':aB,'faceNames':[cx(0x549)]});else{let aD=[],[aE,aF]=aC['split']('@'),aG=aE['split'](','),aH=aF['split'](';');for(let aI of aH){let aJ={'wght':'400','ital':'0'};for(let aK=0x0;aK<aG['length'];aK+=0x1){aJ[aG[aK]]=aI[cx(0xc97)](',')[aK];}aD[cx(0xc68)](aJ['wght']+('1'===aJ[cx(0x444)]?cx(0x7bd):''));}am[cx(0xc68)]({'family':aB,'faceNames':aD});}}}}{let aL=this.#l[cx(0x3c3)];for(let {family:aM,faceNames:aN}of am){let aO=await aL[cx(0x10bd)]({'family':aM});if(aO)for(let aP of aN){let aQ=aO[cx(0x1030)][aP];if(aQ){let aR=aP[cx(0xe2d)](0x0,0x3),aS=aP[cx(0x1d5)](cx(0x7bd))?cx(0x7bd):cx(0xac3),aT=[];for(let aW of aO[cx(0xf17)])Q[aW]&&aT['push'](Q[aW]);0x0===aT[cx(0x6dc)]&&(aT=cx(0x6e0));let aU=aT[cx(0xf5e)](','),aV=se`
                    @font-face {
                      font-family: "${aM}";
                      font-style: ${aS};
                      font-weight: ${aR};
                      font-display: ${ap};
                      font-unicode-range: ${aU};
                      src: url(${aQ});
                    }
                  `;aj[cx(0xc68)](aV['cssRules'][0x0]);}}}}}ah(aj);});}[bY(0x8d2)](af){return new Promise(async ag=>{const cy=a1;await this.#c(),ag((await this.#l[cy(0x3c3)]['where'](cy(0x7ce))[cy(0x877)](af)[cy(0x994)]())[0x0]||null);});}#d(af){return new Promise(async ag=>{const cz=a1;let ah=null;if(this.#h[af])ah=this.#h[af];else{let aj=await fetch(af),ak=await aj[cz(0x7a7)]();ah=new CSSStyleSheet(),ah[cz(0xe94)](ak),this.#h[af]=ah;}ag(ah);});}#c(){return new Promise(async af=>{const cA=a1;let ag=await this.#l['cache'][cA(0xf2e)](),ah=!0x0;if(ag>0x0){let aj=await this.#l[cA(0x3c3)][cA(0x10bd)]('Roboto');if(aj){let ak=0x4d3f6400;ah=Date['now']()-aj[cA(0xc3d)]>ak;}}0x0!==ag&&!0x0!==ah||await this[cA(0x456)](),af();});}}();class oe{get[bY(0xea4)](){return this.#u;}set[bY(0xea4)](af){this.#u=[...af];}get['type'](){const cB=bY;return cB(0xf32);}#u;constructor(af=[]){this.#u=[...af];}static['fromString'](af,ag=!0x1){const cC=bY;let ah=a4[cC(0x2be)](af),aj=[];for(let ak of ah){let al=[...ak,new a4[(cC(0xc74))]()]['filter'](ap=>cC(0x1d9)!==ap[cC(0xf37)]),am=new B(al),an={};if(am[cC(0xff4)](),'FUNCTION'===am[cC(0x861)]['type']){if('local'===am[cC(0x861)][cC(0xce8)]){let ap='';for(let aq of am['currentToken'][cC(0xf0a)])cC(0x40a)===aq[cC(0xf37)]?ap+=aq[cC(0xf0a)]:ap+=aq[cC(0x61e)]();an[cC(0x1ce)]=cC(0xcc4),an[cC(0xce8)]=ap;}else{if(cC(0xb59)===am[cC(0x861)]['name']){let ar='';for(let au of am[cC(0x861)][cC(0xf0a)])cC(0x40a)===au[cC(0xf37)]?ar+=au[cC(0xf0a)]:ar+=au[cC(0x61e)]();ar[cC(0x963)](),ar[cC(0x9ae)](cC(0x696))?an[cC(0x1ce)]=cC(0x4a5):an[cC(0x1ce)]=cC(0x1035),an[cC(0xb59)]=new R(ar),am['read'](),cC(0x40d)==am[cC(0x861)][cC(0x1ce)]&&cC(0xca0)===am[cC(0x861)][cC(0xce8)]&&(an[cC(0xca0)]=am[cC(0x861)][cC(0xf0a)][0x0][cC(0xf0a)]);}}}else{if('URL'===am['currentToken']['tokenType']){let av=am['currentToken'][cC(0xf0a)];av[cC(0x9ae)](cC(0x696))?an[cC(0x1ce)]=cC(0x4a5):an[cC(0x1ce)]='external',an[cC(0xb59)]=new R(av),am[cC(0xff4)](),cC(0x40d)==am[cC(0x861)][cC(0x1ce)]&&cC(0xca0)===am['currentToken'][cC(0xce8)]&&(an[cC(0xca0)]=am[cC(0x861)][cC(0xf0a)][0x0][cC(0xf0a)]);}}aj[cC(0xc68)](an);}return new oe(aj);}[bY(0xd23)](){const cD=bY;let af=[];for(let ag of this[cD(0xea4)])if(cD(0xcc4)===ag[cD(0x1ce)]){let ah=cD(0x433)+ag[cD(0xce8)]+')';af[cD(0xc68)](ah);}else{if(cD(0x1035)===ag[cD(0x1ce)]||cD(0x4a5)===ag[cD(0x1ce)]){let aj=cD(0x948)+ag[cD(0xb59)]+')';ag[cD(0xca0)]&&(aj+=cD(0xd13)+ag[cD(0xca0)]+'\x22)'),af[cD(0xc68)](aj);}}return af[cD(0xf5e)](',\x20');}}class ne{get[bY(0xea4)](){return this.#u;}set['items'](af){this.#u=[...af];}get['type'](){const cE=bY;return cE(0xf0d);}#u;constructor(af=[]){this.#u=[...af];}static['fromString'](af,ag=!0x1){const cF=bY;let ah=[...a4[cF(0xacd)](af),new a4[(cF(0xc74))]()],aj=new B(ah),ak=[];if(aj[cF(0xff4)](),cF(0x1d9)===aj[cF(0x861)][cF(0xf37)]&&aj[cF(0xff4)](),cF(0x40a)!==aj[cF(0x861)][cF(0xf37)]&&cF(0x20e)!==aj[cF(0x861)][cF(0xf37)]){if(ag)throw new DOMException(cF(0xaba),cF(0xbbc));return null;}for(ak[cF(0xc68)](aj['currentToken']['value']);;){let al=!0x1;if(aj[cF(0xff4)](),cF(0x1d9)===aj[cF(0x861)][cF(0xf37)]&&aj[cF(0xff4)](),','===aj[cF(0x861)][cF(0xf37)]&&(al=!0x0,aj['read']()),cF(0x1d9)===aj[cF(0x861)][cF(0xf37)]&&aj[cF(0xff4)](),'STRING'!==aj[cF(0x861)]['tokenType']&&cF(0x20e)!==aj[cF(0x861)][cF(0xf37)]){if(cF(0x9a0)===aj[cF(0x861)][cF(0xf37)]){if(al){if(ag)throw new DOMException(cF(0x652),'SyntaxError');return null;}return new ne(ak);}if(ag)throw new DOMException('Unexpected\x20token\x20\x22'+aj[cF(0x861)][cF(0xf37)]+'\x22.',cF(0xbbc));return null;}if(!al){if(ag)throw new DOMException(cF(0xc9c),'SyntaxError');return null;}ak['push'](aj[cF(0x861)][cF(0xf0a)]);}}[bY(0xd23)](){const cG=bY;return this[cG(0xea4)]['map'](af=>J[cG(0x1d5)](af)?af:'\x22'+af+'\x22')[cG(0xf5e)](',\x20');}}const le=[bY(0xf68),bY(0x487)][bY(0x1d5)](navigator[bY(0x28d)])||navigator['platform']['startsWith'](bY(0x427)),re=navigator[bY(0xd88)]['indexOf'](bY(0xf49))>-0x1&&-0x1===navigator[bY(0xd88)][bY(0xc56)](bY(0xfd1)),he='file:'===location['protocol'],ce=null!==window[bY(0x58b)]||bY(0x10c8)===document['body'][bY(0x22c)][bY(0x38d)];function a1(a,b){const c=a0();return a1=function(d,e){d=d-0x1c2;let f=c[d];return f;},a1(a,b);}let de=(af,ag=bY(0xf26))=>{const cH=bY;try{let ah=null,aj=a9[cH(0x29a)](af);if(cH(0xf26)===ag){ah='';for(let ak=0x0,al=aj['length'];ak<al;ak+=0x1){ah+=String[cH(0x336)](aj[ak]);}}else cH(0x105a)===ag&&(ah=new Blob([aj],{'type':'image/svg+xml'}));return ah;}catch(am){return null;}},ue=(af,ag=bY(0x7a7))=>new Promise(ah=>{af['file'](async aj=>{const cI=a1;let ak;ak=cI(0x105a)===ag?aj:await pe(aj,ag),ah(ak);});}),pe=(af,ag)=>new Promise(ah=>{const cJ=bY;let aj,ak,al=new FileReader();if(al[cJ(0x1012)](cJ(0xe1f),ak=am=>{const cK=cJ;al[cK(0xee0)](cK(0x75c),aj),al[cK(0xee0)]('error',ak),ah(null);}),cJ(0x7a7)===ag){let am=ge(af);cJ(0xd07)===am?al[cJ(0xb0f)](af):al[cJ(0xb43)](af),al[cJ(0x1012)](cJ(0x75c),aj=an=>{const cL=cJ;if(al[cL(0xee0)](cL(0x75c),aj),al[cL(0xee0)](cL(0xe1f),ak),'svgz'===am){let ap=new Uint8Array(an[cL(0x779)][cL(0x65d)]),aq=a9[cL(0x29a)](ap),ar='';for(let au=0x0,av=aq[cL(0x6dc)];au<av;au+=0x1){ar+=String[cL(0x336)](aq[au]);}ah(ar);}else ah(an[cL(0x779)]['result']);});}else{if(cJ(0x5e0)===ag)al[cJ(0xb0f)](af),al[cJ(0x1012)](cJ(0x75c),aj=an=>{const cM=cJ;al['removeEventListener'](cM(0x75c),aj),al['removeEventListener']('error',ak),ah(new Uint8Array(an[cM(0x779)][cM(0x65d)]));});else{if(cJ(0xcee)===ag){let an=ge(af);'svgz'===an?al[cJ(0xb0f)](af):al[cJ(0x8fa)](af),al[cJ(0x1012)](cJ(0x75c),aj=ap=>{const cN=cJ;if(al['removeEventListener']('load',aj),al['removeEventListener']('error',ak),'svgz'===an){let aq=new Uint8Array(ap[cN(0x779)][cN(0x65d)]),ar=a9[cN(0x29a)](aq),au=new Blob([ar],{'type':'image/svg+xml'}),av=me(au);ah(av);}else ah(ap[cN(0x779)][cN(0x65d)]);});}}}}),me=af=>new Promise(ag=>{const cO=bY;let ah=new FileReader();ah[cO(0x8fa)](af),ah['onloadend']=()=>{let aj=ah['result'];ag(aj);};}),xe=af=>af[bY(0xce8)]&&af[bY(0xce8)][bY(0x1d5)]('.')?af[bY(0xce8)][bY(0xe2d)](af['name'][bY(0x792)]('.')+0x1)[bY(0x10b1)]():'',ge=af=>af[bY(0xce8)]&&af[bY(0xce8)]['includes']('.')?af[bY(0xce8)]['substring'](af[bY(0xce8)][bY(0x792)]('.')+0x1)[bY(0x10b1)]():'',be=af=>af[bY(0xce8)]['substring'](0x0,af[bY(0xce8)][bY(0x792)]('.')),fe=af=>{const cP=bY;let ag='',ah=le?0x3e8:0x400;if(af<ah)ag=af+(cP(0x1079)+af+cP(0xa04));else{if(af<ah*ah){let aj=le?'\x20KB':'\x20KiB';ag=z(af/ah,0x0)+aj;}else{if(af<ah*ah*ah){let ak=le?cP(0x68a):cP(0xc1f);ag=z(af/(ah*ah),0x2)+ak;}else{let al=le?cP(0x841):'\x20GiB';ag=z(af/(ah*ah*ah),0x2)+al;}}}return ag;},we=af=>{const cQ=bY;let ag=null;return cQ(0x8b5)===af?ag=cQ(0xd98):'image/png'===af?ag=cQ(0x845):cQ(0xacc)===af?ag=cQ(0xe20):cQ(0xfec)===af?ag='webp':cQ(0x283)===af?ag=cQ(0x6ee):'image/svg+xml'===af&&(ag='svg'),ag;},ve=af=>new Promise(ag=>{const cR=bY;let ah={};if(ah['baseName']=af[cR(0xce8)][cR(0xe2d)](0x0,af[cR(0xce8)]['lastIndexOf']('.')),ah[cR(0x22a)]=af[cR(0xce8)][cR(0xe2d)](af[cR(0xce8)][cR(0x792)]('.')+0x1)['toLowerCase'](),ah[cR(0xb87)]=af['path'],ah[cR(0x3ab)]='',cR(0xdae)===ah[cR(0x22a)]){let aj=new FileReader();aj[cR(0xb43)](af,cR(0xe92)),aj[cR(0x1012)](cR(0x75c),ak=>{const cS=cR;ah[cS(0x3ab)]=ak[cS(0x779)][cS(0x65d)],ah['data']?ag(ah):ag(null);});}else{if('svgz'===ah[cR(0x22a)]){let ak=new FileReader();ak['readAsArrayBuffer'](af),ak[cR(0x1012)](cR(0x75c),al=>{const cT=cR;let am=new Uint8Array(al[cT(0x779)]['result']),an=de(am);ah['data']=an,ah[cT(0x3ab)]?ag(ah):ag(null);});}else{if('pdf'===ah[cR(0x22a)]||'ai'===ah[cR(0x22a)]){let al=new FileReader();al[cR(0xb0f)](af),al[cR(0x1012)](cR(0x75c),am=>{const cU=cR;ah[cU(0x3ab)]=new Uint8Array(am[cU(0x779)][cU(0x65d)]),ah[cU(0x3ab)]?ag(ah):ag(null);});}else{if([cR(0x845),cR(0x6b8),cR(0xd98),cR(0xe20),'webp',cR(0x6ee)][cR(0x1d5)](ah[cR(0x22a)])){let am=new FileReader();am[cR(0x8fa)](af),am['addEventListener'](cR(0x75c),an=>{const cV=cR;ah['data']=an[cV(0x779)][cV(0x65d)],ah['data']?ag(ah):ag(null);});}else ag(null);}}}}),ye=(af,ag,ah)=>af[bY(0xc97)](ag)[bY(0xf5e)](ah),ke=af=>af['replace'](/(^|[\s-])(\w)/g,(ag,ah,aj)=>ah+aj[bY(0x39d)]()),Ce=af=>{const cW=bY;let ag=document[cW(0x840)](cW(0xc4f));return ag['appendChild'](document[cW(0x37c)](af)),ag[cW(0x8c2)];},Se=af=>{const cX=bY;let ag=document[cX(0x840)](cX(0xc4f));return ag[cX(0x8c2)]=af,0x0===ag[cX(0x2bd)][cX(0x6dc)]?'':ag[cX(0x2bd)][0x0][cX(0x2f3)];},Te=(af,ag=!0x1)=>{const cY=bY;let ah={'RETURN_DOM':ag,'ALLOWED_TAGS':['p','h3','h4','ul','ol','li','blockquote','pre','code','img','hr','br','a',cY(0xe50),'em',cY(0xd00),'u',cY(0x3cb),cY(0xaef),cY(0x10cf)],'ALLOWED_ATTR':['alt',cY(0x105c),cY(0x1046),'hidden',cY(0xbd9),'loading',cY(0x6a6),cY(0xc7e),cY(0x105f),'src',cY(0xe90),cY(0x37a),cY(0x46b),cY(0xee8)],'ALLOW_DATA_ATTR':!0x1};if(ag){let aj=document['createDocumentFragment'](),ak=a6[cY(0x65e)](af,ah);for(let al of[...ak[cY(0x2bd)]])aj[cY(0x775)](al);return aj;}return a6[cY(0x65e)](af,ah);},$e=af=>{const cZ=bY;let ag=cZ(0xb44),ah=new RegExp(ag[cZ(0xc97)]('')[cZ(0xf5e)]('|'),'g');return af['toString']()[cZ(0x10b1)]()[cZ(0xf0c)](/\s+/g,'-')[cZ(0xf0c)](ah,aj=>'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'[cZ(0xc66)](ag[cZ(0xc56)](aj)))[cZ(0xf0c)](/&/g,'-and-')[cZ(0xf0c)](/[^\w\-]+/g,'')[cZ(0xf0c)](/\-\-+/g,'-')[cZ(0xf0c)](/^-+/,'')[cZ(0xf0c)](/-+$/,'');},Pe=af=>ke(new Intl[(bY(0x575))]([af],{'type':bY(0x8e9)})['of'](af)),Ee=af=>{const d0=bY;let ag=[],ah=!0x1;for(let aj of af[d0(0x44e)](d0(0xe90)))if(null===aj[d0(0xc06)](d0(0x6fc))){let ak={},al=[];for(let am of aj['sheet'][d0(0xe07)])if(am[d0(0x1ce)]===CSSRule[d0(0x10aa)]){let an=ne[d0(0xf27)](am[d0(0xe90)][d0(0x7a6)])['items'][0x0];void 0x0===ak[an]&&(ak[an]=[]),ak[an]['push'](am);}else{if(am[d0(0x1ce)]===CSSRule[d0(0x86c)]){if(am[d0(0xbd9)]['startsWith']('https://fonts.googleapis.com/css2')){let ap=new URL(am[d0(0xbd9)]),aq=new URLSearchParams(ap['search']);for(let ar of aq['getAll'](d0(0x7ce))){let [au]=ar[d0(0xc97)](':'),av=new URLSearchParams(ap[d0(0xa28)]);av[d0(0xf62)](d0(0x7ce),ar);let aw='https://fonts.googleapis.com/css2?'+decodeURIComponent(av[d0(0xd23)]());void 0x0===ak[au]&&(ak[au]=[]),ak[au][d0(0xc68)]({'cssText':d0(0x510)+encodeURI(aw)+d0(0x39e),'href':aw,'type':am[d0(0x1ce)]});}}else{if(am['href'][d0(0x9ae)](d0(0x2fb))){let ax=new URL(am[d0(0xbd9)]),ay=new URLSearchParams(ax[d0(0xa28)]);for(let az of ay[d0(0x10bd)](d0(0x7ce))['split']('|')){let [aA]=az[d0(0xc97)](':'),aB=new URLSearchParams(ax[d0(0xa28)]);aB[d0(0xf62)](d0(0x7ce),az);let aC='https://fonts.googleapis.com/css?'+decodeURIComponent(aB[d0(0xd23)]());void 0x0===ak[aA]&&(ak[aA]=[]),ak[aA][d0(0xc68)]({'cssText':'@import\x20url(\x22'+encodeURI(aC)+d0(0x39e),'href':aC,'type':am['type']});}}else al[d0(0xc68)](am);}}else al[d0(0xc68)](am);}(Object[d0(0x414)](ak)['length']>0x0||aj['hasAttribute'](d0(0x61c)))&&ag[d0(0xc68)]({'styleElement':aj,'fontRulesByFamily':ak,'otherRules':al});}{let aD=[];for(let aE of ag){let {styleElement:aF,fontRulesByFamily:aG,otherRules:aH}=aE,aI=Object[d0(0x414)](aG);if(0x0===aI[d0(0x6dc)]){if(aF['hasAttribute'](d0(0x61c))){ah=!0x0;break;}}else{if(0x1===aI[d0(0x6dc)]){let aJ=aI[0x0];if(aD[d0(0x1d5)](aJ)){ah=!0x0;break;}if(aF['getAttribute'](d0(0x61c))!==aJ){ah=!0x0;break;}if(aH[d0(0x6dc)]>0x0){ah=!0x0;break;}}else{if(aI[d0(0x6dc)]>0x1){ah=!0x0;break;}}}aD[d0(0xc68)](...aI);}}if(!0x0===ah){for(let aK of ag)for(let [aL,aM]of Object[d0(0x2b6)](aK['fontRulesByFamily'])){let aN=ag[d0(0x81c)](aO=>void 0x0!==aO[d0(0xe46)][aL]);aN!==aK&&(aN[d0(0xe46)][aL]['push'](...aM),delete aK[d0(0xe46)][aL]);}for(let {styleElement:aO,fontRulesByFamily:aP,otherRules:aQ}of ag){for(let [aR,aS]of Object['entries'](aP)){let aT=ei('svg:style'),aU='';aS[d0(0x311)](aV=>aV[d0(0x1ce)]===CSSRule['IMPORT_RULE']?-0x1:0x1);for(let aV of aS)aU+=aV[d0(0x6ae)];aT['textContent']=aU,aT[d0(0xa0a)](d0(0x61c),aR),aO[d0(0xfd9)]('data-bx-pinned')&&aT['setAttribute'](d0(0x987),''),aO[d0(0x844)](aT);}if(0x0===aQ[d0(0x6dc)])aO[d0(0x102a)]();else{let aW='';for(let aX of aQ)aW+=aX['cssText'];aO[d0(0x88e)](d0(0x61c)),aO[d0(0x88e)](d0(0x987)),aO[d0(0xad6)]=aW;}}}},Le=af=>bY(0xac3)===af?bY(0x549):bY(0xbcf)===af?bY(0x8cd):af,Ue=af=>{const d1=bY;af=af[d1(0x10b1)](),af=ye(af,'\x20',''),af=ye(af,'-','');let ag=d1(0x549);return(af=ye(af,'_',''))[d1(0x1d5)](d1(0x474))||af[d1(0x1d5)](d1(0xc41))?ag='100':af[d1(0x1d5)](d1(0x913))||af[d1(0x1d5)](d1(0x6ad))?ag=d1(0xcf6):af[d1(0x1d5)](d1(0xdd3))?ag=d1(0xaf5):af[d1(0x1d5)](d1(0xc59))?ag=d1(0x5f8):af[d1(0x1d5)](d1(0x72a))||af[d1(0x1d5)](d1(0x5a1))?ag=d1(0xe5e):af[d1(0x1d5)](d1(0x50c))||af[d1(0x1d5)](d1(0x3fe))?ag=d1(0xa41):af[d1(0x1d5)](d1(0xbcf))?ag='700':(af['includes']('black')||af[d1(0x1d5)](d1(0xdca)))&&(ag=d1(0xa23)),ag;},De=af=>{const d2=bY;af=af[d2(0x10b1)](),af=ye(af,'\x20',''),af=ye(af,'-','');let ag='normal';return(af=ye(af,'_',''))[d2(0x1d5)](d2(0x7bd))?ag=d2(0x7bd):af[d2(0x1d5)](d2(0xe85))&&(ag=d2(0xe85)),ag;},ze=(af,ag,ah='400',aj=bY(0xac3))=>{let ak=((an,ap)=>{const d3=a1;let aq=an[d3(0xe7a)](ar=>ar[d3(0x7ce)]===ap);return aq;})(af,ag),al=((an,ap)=>{const d4=a1;let aq=an[d4(0xe7a)](ar=>{const d5=d4;if(ar instanceof FontFace){if(d5(0xac3)===ap)return d5(0xac3)===ar[d5(0xe90)];if(d5(0x7bd)===ap||'oblique'===ap)return'italic'===ar[d5(0xe90)]||'oblique'===ar[d5(0xe90)];}else{let au=De(ar[d5(0xe90)]);if('normal'===ap)return d5(0xac3)===au;if(d5(0x7bd)===ap||d5(0xe85)===ap)return'italic'===au[d5(0xe90)]||d5(0xe85)===au[d5(0xe90)];}});return 0x0===aq['length']&&(aq=[...an]),aq;})(ak,aj),am=((an,ap)=>{const d6=a1;let aq=[];for(let au of an)au instanceof FontFace?aq[d6(0xc68)](au[d6(0xfc5)]):aq[d6(0xc68)](Ue(au[d6(0xe90)]));let ar=((av,aw)=>{const d7=d6;av=parseInt(av);let ax,ay=aw['map'](aA=>parseInt(aA))[d7(0x311)](),az=[...ay][d7(0x274)]();return av<0x190?ax=az[d7(0x81c)](aA=>aA<=av)||ay[d7(0x81c)](aA=>aA>av):av>=0x190&&av<=0x1f4?ax=ay[d7(0x81c)](aA=>aA>=av&&aA<=0x1f4)||az['find'](aA=>aA<av)||ay[d7(0x81c)](aA=>aA>av):av>0x1f4&&(ax=ay[d7(0x81c)](aA=>aA>=av)||az[d7(0x81c)](aA=>aA<av)),''+ax;})(ap,aq);if(ar)return an[aq[d6(0xc56)](ar)]||null;return null;})(al,ah);return am;},Me=af=>new Promise(async ag=>{const d8=bY;void 0x0===Me['t']&&(Me['t']={});let ah=Me['t'],aj=null,ak=(await import('/libs/font-kit/font-kit.js'))[d8(0x479)];if(af instanceof FontFace){let al=af['family']+'\x20'+af['weight']+'\x20'+af[d8(0xe90)];if(ah[al])aj=ah[al];else{let am=await fetch(oe[d8(0xf27)](af['src'])['items'][0x0][d8(0xb59)][d8(0xf0a)]),an=await am[d8(0x105a)](),ap=await an[d8(0x5e0)]();aj=ak[d8(0x532)](new Uint8Array(ap)),ah[al]=aj;}}else{if(af instanceof FontData){if(ah[af[d8(0x830)]])aj=ah[af['postscriptName']];else{let aq=await af[d8(0x105a)](),ar=await aq[d8(0x5e0)]();aj=ak[d8(0x532)](new Uint8Array(ar)),ah[af[d8(0x830)]]=aj;}}}ag(aj);}),Ae=af=>{const d9=bY;let ag=[];for(let {command:ah,args:aj}of af[d9(0xb87)]['commands']){let ak;d9(0xe03)===ah?ak='M':'lineTo'===ah?ak='L':d9(0x2fc)===ah?ak='Q':d9(0x2c2)===ah?ak='C':d9(0x10ce)===ah&&(ak='Z'),ag['push']({'type':ak,'values':[...aj]});}return ag;},Be=af=>{const db=bY;let ag='',ah=af[db(0x33f)][db(0xe07)][0x0];for(let aj of af[db(0x33f)]['cssRules'])aj!==ah&&(ag+='\x0a'),ag+=aj[db(0x6ae)];af['textContent']!==ag&&(af['textContent']=ag);};class Re{#p;constructor(af){this.#p=af;}[bY(0xf07)](){Ee(this.#p);}[bY(0xa28)](af='',ag=!0x0){return new Promise(async ah=>{const dc=a1;let aj=await this[dc(0xe45)](null,ag),ak={};for(let al of aj)(''===af||al['family'][dc(0x10b1)]()[dc(0x1d5)](af['trim']()[dc(0x10b1)]()))&&(void 0x0===ak[al[dc(0x7ce)]]&&(ak[al[dc(0x7ce)]]={'family':al[dc(0x7ce)],'embeddedFaces':[],'linkedFaces':[]}),al[dc(0xe44)]['includes'](dc(0x696))?ak[al[dc(0x7ce)]][dc(0x945)][dc(0xc68)](al):ak[al[dc(0x7ce)]][dc(0x1033)][dc(0xc68)](al));ah(Object[dc(0xb21)](ak));});}#m(af=null){return new Promise(async ag=>{const dd=a1;let ah=[];for(let aj of this.#p[dd(0x44e)](dd(0xe90)))if(null===aj[dd(0xc06)]('foreignObject')&&null!==aj[dd(0x33f)]){for(let ak of aj[dd(0x33f)][dd(0xe07)])if(ak[dd(0x1ce)]===CSSRule[dd(0x10aa)])ah[dd(0xc68)](ak);else{if(ak[dd(0x1ce)]===CSSRule['IMPORT_RULE']&&ak[dd(0xbd9)][dd(0x9ae)](dd(0x2fb))){let al=await ae[dd(0x5a9)](ak[dd(0xbd9)]);ah[dd(0xc68)](...al);}}}null!==af&&(ah=ah[dd(0xe7a)](am=>af===ne[dd(0xf27)](am[dd(0xe90)]['fontFamily'])[dd(0xea4)][0x0])),ag(ah);});}[bY(0xe45)](af=null,ag=!0x1){return new Promise(async ah=>{ah((await this.#m(af))['map'](aj=>this.#x(aj,ag)));});}[bY(0x786)](af,ag,ah){return new Promise(async aj=>{const df=a1;let ak=await this[df(0xe45)](af);aj(ze(ak,af,ag,ah));});}['getFontFaceBaseline'](af){return new Promise(async ag=>{const dg=a1;let ah=0x1;if(af[dg(0xe44)]){let aj=oe[dg(0xf27)](af[dg(0xe44)])['items'][0x0]['url']['value'],ak=await this.#g(aj,dg(0x5e0)),al=(await import(dg(0xf51)))[dg(0x479)]['create'](new Uint8Array(ak));if(al){let am=al[dg(0x5f9)]['ascent'],an=al[dg(0x5f9)][dg(0x397)];ah=0x1-Math[dg(0x714)](an)/(Math[dg(0x714)](am)+Math[dg(0x714)](an));}}ag(ah);});}[bY(0x10eb)](af){return new Promise(async ag=>{const dh=a1;let ah=await this.#m(af),aj=new Set();for(let ak of ah){let al=ak[dh(0xe90)][dh(0x921)]?Le(ak[dh(0xe90)][dh(0x921)]):dh(0x549);aj[dh(0xc2f)](al);}ag([...aj]);});}[bY(0xf65)](af){return new Promise(async ag=>{const dj=a1;this[dj(0xf07)]();for(let ah of this.#p['querySelectorAll']('style[data-bx-fonts]'))ah[dj(0xc51)]('data-bx-fonts')===af&&ah[dj(0xa0a)](dj(0x987),dj(0x4c3));ag();});}[bY(0xfc0)](af){return new Promise(async ag=>{const dk=a1;this[dk(0xf07)]();for(let ah of this.#p[dk(0x44e)](dk(0x3d6)))ah[dk(0xc51)]('data-bx-fonts')===af&&ah['removeAttribute']('data-bx-pinned');ag();});}[bY(0xd8d)](af){return new Promise(async ag=>{const dl=a1;this[dl(0xf07)]();let ah=this.#p[dl(0x344)](dl(0xabe)+af+'\x22]');ah&&ah[dl(0x102a)](),ag();});}[bY(0x730)](af,ag){return new Promise(async ah=>{const dm=a1;this['normalize']();let aj=this.#p[dm(0x344)](dm(0xabe)+af+'\x22]');aj||(aj=ei(dm(0x838)),aj[dm(0xa0a)](dm(0x61c),af),this.#p[dm(0x344)]('defs')[dm(0x775)](aj));let ak=dm(0x66c)+ag+');';aj[dm(0xad6)]=ak,ah();});}async[bY(0xb03)](af){return new Promise(async ag=>{const dn=a1;this[dn(0xf07)]();let ah=[...this.#p[dn(0x44e)](dn(0x3d6))];for(let aj of ah)if(aj['getAttribute'](dn(0x61c))===af){let ak=!0x1,al=[...aj[dn(0x33f)][dn(0xe07)]];for(let am=0x0;am<al['length'];am+=0x1){let an=al[am];if(an[dn(0x1ce)]===CSSRule[dn(0x86c)]){if(an[dn(0xbd9)]['startsWith'](dn(0x2fb))){let ap=await ae[dn(0x5a9)](an[dn(0xbd9)]);for(let aq of ap)if(aq[dn(0x1ce)]===CSSRule[dn(0x10aa)]){let ar=oe[dn(0xf27)](aq[dn(0xe90)][dn(0xe44)])[dn(0xea4)][0x0]||null;if(dn(0x1035)===ar?.['type']){let au=await this.#g(ar['url'][dn(0xf0a)],'dataURL');aq[dn(0xe90)][dn(0xe44)]=dn(0xd18)+encodeURI(au)+'\x22)',aj['sheet'][dn(0x24a)](aq[dn(0x6ae)],aj[dn(0x33f)][dn(0xe07)]['length']),ak=!0x0;}}}aj[dn(0x33f)][dn(0x729)](am);}else{if(an['type']===CSSRule['FONT_FACE_RULE']){let av=oe[dn(0xf27)](an[dn(0xe90)][dn(0xe44)])[dn(0xea4)][0x0]||null;if('external'===av?.[dn(0x1ce)]){let aw=await this.#g(av[dn(0xb59)][dn(0xf0a)],dn(0xcee));an[dn(0xe90)][dn(0xe44)]=dn(0xd18)+encodeURI(aw)+'\x22)',ak=!0x0;}}}}ak&&Be(aj);}ag();});}[bY(0x97f)](af){return new Promise(async ag=>{const dp=a1;this[dp(0xf07)]();let ah=[];for(let ak of af){let al=this.#p['querySelector'](dp(0xabe)+ak+'\x22]');ah[dp(0xc68)](al);}let aj=this.#p[dp(0x344)](dp(0x81d));for(let am of ah)aj[dp(0x775)](am);ag();});}[bY(0x35f)](af){return new Promise(async ag=>{const dq=a1;let ah={};for(let aj of af)void 0x0===ah[aj['family']]&&(ah[aj['family']]=[]),ah[aj['family']][dq(0xc68)](aj);for(let [ak,al]of Object['entries'](ah)){let am=await this['getFontFaces'](ak);for(let an of al){for(let ap of am)ap[dq(0xfc5)]===an[dq(0xfc5)]&&ap[dq(0xe90)]===an[dq(0xfc5)]&&ap[dq(0x5c4)]===an[dq(0x5c4)]&&ap['unicodeRange']===an[dq(0xfa4)]&&ap[dq(0x10e0)]===an[dq(0x10e0)]&&ap[dq(0x4dd)]===an[dq(0x4dd)]&&am[dq(0x102a)](ap);am[dq(0xc68)](an);}this.#b(am);}ag();});}[bY(0xe3a)](af){return new Promise(async ag=>{const dr=a1;let ah=await this[dr(0xe45)](af[dr(0x7ce)]),aj=ah[dr(0xe7a)](ak=>ak['style']!==af[dr(0xe90)]||ak[dr(0xfc5)]!==af[dr(0xfc5)]||ak[dr(0x5c4)]!==af[dr(0x5c4)]||ak['unicodeRange']!==af[dr(0xfa4)]);aj[dr(0x6dc)]!==ah[dr(0x6dc)]&&this.#b(aj),ag();});}#b(af){const du=bY;let ag=af['length']>0x0?af[0x0][du(0x7ce)]:null;if(null!==ag){if(!af[du(0x81c)](ah=>ah[du(0x7ce)]!==ag)){this[du(0xf07)]();let ah=this.#p[du(0x344)](du(0xabe)+ag+'\x22]');ah||(ah=ei('svg:style'),ah[du(0xa0a)](du(0x61c),ag),this.#p[du(0x344)](du(0x81d))[du(0x775)](ah));let aj='';for(let ak of af)aj+=this.#f(ak);return void(ah[du(0xad6)]=aj);}console['error'](du(0xcda));}}#g(af,ag=bY(0xcee)){return new Promise(async ah=>{const dv=a1;let aj=await fetch(af),ak=await aj['blob']();if(dv(0xcee)===ag)ah(await me(ak));else dv(0x5e0)===ag&&ah(await ak[dv(0x5e0)]());});}#x(af,ag=!0x1){const dw=bY;let ah=af[dw(0xe90)][dw(0xe44)],aj=ne[dw(0xf27)](af[dw(0xe90)]['fontFamily'])[dw(0xea4)][0x0],ak=af[dw(0xe90)][dw(0x6e1)]||dw(0xac3),al=af['style']['fontWeight']?Le(af[dw(0xe90)][dw(0x921)]):dw(0x549),am=af[dw(0xe90)][dw(0xace)]||'normal',an=af[dw(0xe90)]['unicodeRange']||dw(0x6e0),ap=af[dw(0xe90)][dw(0xc1a)]||'normal',aq=af[dw(0xe90)][dw(0x6ac)]||dw(0xac3);if(ag)return{'src':ah,'family':aj,'style':ak,'weight':al,'stretch':am,'unicodeRange':an,'variant':ap,'featureSettings':aq};{let ar=new FontFace(aj,ah,{'style':ak,'weight':al,'stretch':am,'unicodeRange':an,'variant':ap,'featureSettings':aq});return ar[dw(0xe44)]=ah,ar;}}#f(af){const dx=bY;let ag=dx(0xcc2);return ag+=dx(0x70c)+af[dx(0x7ce)]+dx(0x6d9),ag+=dx(0xd5a)+af[dx(0xe90)]+';\x20',ag+='font-weight:\x20'+af[dx(0xfc5)]+';\x20',ag+='font-stretch:\x20'+af[dx(0x5c4)]+';\x20',ag+=dx(0x1f4)+af['unicodeRange']+';\x20',ag+=dx(0xcce)+af[dx(0x10e0)]+';\x20',ag+=dx(0x3f8)+af[dx(0x4dd)]+';\x20',ag+=dx(0x5c0)+af[dx(0xe44)]+';\x20',ag+='}',ag;}}var Ie=new class extends EventTarget{#w='init';#v=[];#l;get[bY(0x887)](){return this.#w;}constructor(){const dy=bY;super(),this.#l=new a7('LocalFontsManager'),this.#l[dy(0xd70)](0x1)[dy(0xc2b)]({'cache':dy(0x7ce)}),this.#l[dy(0xd70)](0x2)[dy(0xc2b)]({'cache':'family'})['upgrade'](af=>af[dy(0x3c3)]['clear']()),void 0x0===window[dy(0x100e)]?this.#w=dy(0x56a):navigator['permissions'][dy(0xc77)]({'name':dy(0x517)})[dy(0x270)](af=>{const dz=dy;dz(0x299)===af[dz(0x526)]?this['refresh']():dz(0xe21)!==af['state']&&(this.#w='no-permission');});}[bY(0xa28)](af='',ag=bY(0x3b9)){return new Promise(async ah=>{const dA=a1;let aj=[],ak=this.#l[dA(0x3c3)];''!==af[dA(0x963)]()&&(ak=ak['filter'](al=>al['family'][dA(0x10b1)]()[dA(0x1d5)](af[dA(0x963)]()['toLowerCase']()))),aj=await ak[dA(0x994)](),'all'!==ag&&(aj=aj['slice'](0x28*ag,0x28*(ag+0x1))),ah(aj);});}[bY(0x456)](){return new Promise(async(af,ag)=>{const dB=a1;let ah;try{ah=await this['getLocalFontsMetadata'](!0x0);}catch(ak){return ag(ak);}let aj=[];for(let al of ah){let am=Ue(al['style'])+(dB(0x7bd)===De(al['style'])?'i':''),an=aj[dB(0x81c)](ap=>ap[dB(0x7ce)]===al[dB(0x7ce)]);if(an)!0x1===an[dB(0x543)][dB(0x1d5)](am)&&an[dB(0x543)][dB(0xc68)](am);else{let ap={'family':al[dB(0x7ce)],'faces':[am]};aj[dB(0xc68)](ap);}}for(let aq of aj)aq[dB(0x543)][dB(0x311)]();await this.#l[dB(0x3c3)][dB(0xc2a)](),await this.#l[dB(0x3c3)]['bulkPut'](aj),this.#w=dB(0x878),af();});}[bY(0xef3)](af=!0x1){return new Promise(async(ag,ah)=>{const dC=a1;if('no-api'===this['status'])ag([]);else{if(this.#v[dC(0x6dc)]<0xa||af)try{this.#v=await window[dC(0x100e)]();}catch(aj){return ah({'message':aj[dC(0x65b)],'name':aj[dC(0xce8)]});}ag(this.#v);}});}[bY(0xe7d)](){return new Promise(async af=>{const dD=a1;af(await this.#l[dD(0x3c3)][dD(0xf2e)]());});}[bY(0x8d2)](af){return new Promise(async ag=>{const dE=a1;ag((await this.#l[dE(0x3c3)][dE(0xe6f)]('family')[dE(0x877)](af)[dE(0x994)]())[0x0]||null);});}[bY(0x625)](af){return new Promise(async ag=>{const dF=a1;let ah=await this[dF(0x8d2)](af);if(ah){let aj=new Set();for(let ak of ah[dF(0x543)]){let al=ak[dF(0xe2d)](0x0,0x3);aj['add'](al);}ag([...aj]);}else ag([dF(0x549)]);});}}();let Fe=(af,ag)=>af[bY(0x8c5)]?new DOMMatrix([z(af['a'],ag),z(af['b'],ag),z(af['c'],ag),z(af['d'],ag),z(af['e'],ag),z(af['f'],ag)]):new DOMMatrix([z(af[bY(0xce5)],ag),z(af[bY(0xa09)],ag),z(af['m13'],ag),z(af[bY(0x1e1)],ag),z(af[bY(0x83d)],ag),z(af[bY(0xac7)],ag),z(af[bY(0x5e4)],ag),z(af[bY(0xb31)],ag),z(af['m31'],ag),z(af[bY(0x71f)],ag),z(af[bY(0x966)],ag),z(af['m34'],ag),z(af[bY(0x49c)],ag),z(af['m42'],ag),z(af[bY(0x521)],ag),z(af['m44'],ag)]),Ne=(af,ag)=>JSON[bY(0x585)](af)===JSON[bY(0x585)](ag),Oe=(af,ag=0x6)=>{const dG=bY;let ah=ei('svg:path'),aj=af['getPathData']();for(let ak of aj)ak[dG(0xb21)]=ak[dG(0xb21)][dG(0x8fb)](al=>z(al,ag));ah[dG(0x754)](aj);for(let al of af[dG(0xfe1)])!0x1===['x','y',dG(0xee8),dG(0x1046),'rx','ry']['includes'](al[dG(0xce8)])&&ah[dG(0xa0a)](al[dG(0xce8)],al[dG(0xf0a)]);return ah[dG(0x8c2)]=af['innerHTML'],ah;},_e=(af,ag=0x6)=>{const dH=bY;let ah=ei(dH(0x310)),aj=af[dH(0xba9)]();for(let ak of aj)ak[dH(0xb21)]=ak['values']['map'](al=>z(al,ag));ah[dH(0x754)](aj);for(let al of af[dH(0xfe1)])['cx','cy','r'][dH(0x1d5)](al[dH(0xce8)])||ah[dH(0xa0a)](al[dH(0xce8)],al[dH(0xf0a)]);return ah['innerHTML']=af[dH(0x8c2)],ah;},qe=(af,ag=0x6)=>{const dI=bY;let ah=ei(dI(0x310)),aj=af['getPathData']();for(let ak of aj)ak['values']=ak['values']['map'](al=>z(al,ag));ah['setPathData'](aj);for(let al of af[dI(0xfe1)])['cx','cy','rx','ry'][dI(0x1d5)](al['name'])||ah[dI(0xa0a)](al[dI(0xce8)],al[dI(0xf0a)]);return ah[dI(0x8c2)]=af['innerHTML'],ah;},je=(af,ag=0x6)=>{const dJ=bY;let ah=ei(dJ(0x310)),aj=af[dJ(0xba9)]();for(let ak of aj)ak[dJ(0xb21)]=ak['values'][dJ(0x8fb)](al=>z(al,ag));ah['setPathData'](aj);for(let al of af['attributes'])['x1','y1','x2','y2'][dJ(0x1d5)](al[dJ(0xce8)])||ah['setAttribute'](al['name'],al['value']);return ah[dJ(0x8c2)]=af[dJ(0x8c2)],ah;},Ve=(af,ag=0x6)=>{const dK=bY;let ah=ei(dK(0x310)),aj=af[dK(0xba9)]();for(let ak of aj)ak[dK(0xb21)]=ak['values'][dK(0x8fb)](al=>z(al,ag));ah[dK(0x754)](aj);for(let al of af[dK(0xfe1)])dK(0xa65)!==al['name']&&ah[dK(0xa0a)](al[dK(0xce8)],al[dK(0xf0a)]);return ah[dK(0x8c2)]=af[dK(0x8c2)],ah;},Ge=(af,ag=0x6)=>{const dL=bY;let ah=ei(dL(0x310)),aj=af[dL(0xba9)]();for(let ak of aj)ak[dL(0xb21)]=ak['values']['map'](al=>z(al,ag));ah[dL(0x754)](af[dL(0xba9)]());for(let al of af['attributes'])'points'!==al[dL(0xce8)]&&ah[dL(0xa0a)](al['name'],al[dL(0xf0a)]);return ah[dL(0x8c2)]=af[dL(0x8c2)],ah;};const He=['de','en','es','pl'];let We,Ke=()=>(void 0x0===We&&(We=!0x0===navigator['platform']['startsWith']('Mac')?bY(0x5d5):-0x1!==[bY(0xf68),bY(0x487),bY(0x21e)]['indexOf'](navigator[bY(0x28d)])?bY(0x644):-0x1!==[bY(0xd29),bY(0xcea),bY(0x23d),bY(0xdab)][bY(0xc56)](navigator[bY(0x28d)])?bY(0x31e):/CrOS/[bY(0xc04)](navigator[bY(0xd88)])?bY(0x3d7):/Android/[bY(0xc04)](navigator[bY(0xd88)])?'android':/Linux/[bY(0xc04)](navigator[bY(0x28d)])?'linux':null),We),Ze=()=>{const dM=bY;let af=navigator[dM(0x8e9)],[ag,ah]=af[dM(0xc97)]('-');return He['includes'](af)?af:He[dM(0x1d5)](ag)?ag:'en';},Ye=()=>{const dN=bY;let af=null,ag=Ke();return af=dN(0x5d5)===ag?'cupertino':dN(0x31e)===ag?'fluent':'adwaita',af;},Xe=()=>new Promise(async af=>{const dO=bY;let ag=null,ah=null,aj=null,ak=null;if(navigator['userAgentData']){let al;try{al=await navigator[dO(0x6c6)][dO(0x713)]([dO(0xbd2)]);}catch(am){al=navigator['userAgentData'];}for(let an of['Opera',dO(0xe48),dO(0x229),dO(0xf11),dO(0x930),dO(0xfaa)]){let ap=al[dO(0x413)][dO(0x81c)](aq=>aq[dO(0x981)]===an);if(ap){ag=dO(0xf11)===ap[dO(0x981)]?dO(0x9a3):dO(0x930)===ap['brand']?dO(0xfd1):ap['brand'],ah=ap[dO(0xd70)]||null;break;}}if(al[dO(0x28d)]){if(dO(0x1001)===al[dO(0x28d)]){if(aj='macOS',al[dO(0xbd2)]){let [aq,ar,au]=al[dO(0xbd2)][dO(0xc97)]('.');ak='10'===aq?aq+'.'+ar:aq;}}else{if(dO(0x90e)===al[dO(0x28d)]){for(let av of[dO(0xe0b),dO(0x9ac),'Debian',dO(0x9bd),'Red\x20Hat',dO(0xb8b)])if(navigator[dO(0xd88)][dO(0x1d5)](av)){aj=av+dO(0x8a8);break;}null===aj&&(aj=dO(0x90e));}else{if(dO(0x23d)===al[dO(0x28d)]){if(aj='Windows',al[dO(0xbd2)]){let [aw,ax]=al[dO(0xbd2)]['split']('.')[dO(0x8fb)](ay=>parseInt(ay));0x0===aw?0x3===ax||0x2===ax?ak='8':0x1===ax&&(ak='7'):aw<=0xa&&(ak='10'),aw>=0xd&&(ak='11');}}else aj='Chrome\x20OS'===al[dO(0x28d)]?dO(0x3a1):dO(0xcb2)===al[dO(0x28d)]?dO(0xcb2):al['platform'];}}}}else{if(navigator[dO(0xd88)][dO(0xc56)]('Safari/')>-0x1&&-0x1===navigator[dO(0xd88)][dO(0xc56)]('Chrome')){let ay=Ke();dO(0x5d5)===ay||dO(0x644)===ay?(ag='Safari',ah=navigator[dO(0xd88)][dO(0xc97)]('\x20')['find'](az=>az[dO(0x9ae)](dO(0x1029)))[dO(0xc97)]('/')[0x1],aj=dO(0x5d5)===ay?dO(0x1001):dO(0x75d)):(ag=dO(0x961),ah=navigator[dO(0xd88)][dO(0xc97)]('\x20')[dO(0x81c)](az=>az['startsWith'](dO(0xf49)))[dO(0xc97)]('/')[0x1],'windows'===ay?aj=dO(0x23d):dO(0x3d7)===ay?aj='Chrome\x20OS':dO(0x4f0)===ay?aj='Android':'linux'===ay&&(aj=dO(0x90e)));}}if(null!==ag){let az=''+ag;ah&&(az+='/'+ah),aj&&(az+=';\x20'+aj,ak&&(az+='/'+ak)),af(az);}else af(null);});const Je=bY(0x32c)[bY(0x43f)](bY(0x448),'');class Qe{#y;#k;get[bY(0x355)](){const dP=bY;return this.#y[dP(0x355)];}constructor(af){const dQ=bY;this.#k=af,this.#y=document['createElement'](dQ(0xc4f)),this.#y[dQ(0xa0a)](dQ(0xe90),Je),this.#y[dQ(0xa0a)]('class',dQ(0xeca)),this.#y[dQ(0x1017)]({'mode':dQ(0x9ff)}),this.#y['shadowRoot'][dQ(0x775)](af),document[dQ(0x10ed)][dQ(0x775)](this.#y);}['destroy'](){const dR=bY;this.#k['parentNode']===this.#y[dR(0x355)]&&this.#k[dR(0x102a)](),this.#y[dR(0x102a)](),this.#y=null;}}let et=(af,ag=0x1f4,ah)=>{let aj=null,ak=null,al=null,am=0x0,an=()=>{const dS=a1;am=new Date(),ak=null,al=af[dS(0xe42)](ah,aj);};return(...ap)=>{const dT=a1;let aq=new Date(),ar=ag-(aq-am);return aj=ap,ar<=0x0?(clearTimeout(ak),ak=null,am=aq,al=af[dT(0xe42)](ah,aj)):ak||(ak=setTimeout(an,ar)),al;};},tt=(af,ag)=>{let ah,aj=!0x1;return function(){return aj||(aj=!0x0,ah=af['apply'](ag||this,arguments),af=null),ah;};},it=af=>new Promise((ag,ah)=>{setTimeout(()=>ag(),af);}),st=af=>af/0x3e8/0x3c/0x3c/0x18,at=()=>new Date()[bY(0xc11)](),{abs:ot,tan:nt}=Math,lt=af=>{const dU=bY;if(!0x1===af['isConnected']&&new Qe(af),re){let ag=null;if(''===af[dU(0xe90)][dU(0xf95)])return ag=dU(0x2c8)===af[dU(0xa31)]||dU(0x700)===af[dU(0xa31)]?af['gradientTransform']['baseVal']['consolidate']():'pattern'===af['localName']?af[dU(0xaf3)][dU(0x4a3)][dU(0x84f)]():af[dU(0xf95)][dU(0x4a3)][dU(0x84f)](),ag?DOMMatrix['fromMatrix'](ag[dU(0x381)]):new DOMMatrix();{let ah=af[dU(0x98d)]()[dU(0x10bd)](dU(0xf95));return dU(0xcf1)===ah[dU(0xf0a)]?new DOMMatrix():ah[dU(0xbe4)]();}}{let aj=af[dU(0x98d)]()['get'](dU(0xf95));return dU(0xcf1)===aj[dU(0xf0a)]?new DOMMatrix():aj[dU(0xbe4)]();}},rt=(af,ag,ah=null)=>{const dV=bY;af[dV(0xe90)][dV(0x76c)](dV(0xf95)),null===ag?'linearGradient'===af[dV(0xa31)]||dV(0x700)===af['localName']?af[dV(0x88e)]('gradientTransform'):dV(0x8b4)===af[dV(0xa31)]?af[dV(0x88e)]('patternTransform'):af[dV(0x88e)]('transform'):(null!==ah&&(ag=Fe(ag,ah)),ag['isIdentity']?dV(0x2c8)===af['localName']||dV(0x700)===af[dV(0xa31)]?af[dV(0x88e)](dV(0x666)):dV(0x8b4)===af['localName']?af[dV(0x88e)](dV(0xaf3)):af['removeAttribute'](dV(0xf95)):'linearGradient'===af['localName']||'radialGradient'===af[dV(0xa31)]?af['setAttribute'](dV(0x666),ag[dV(0xd23)]()):dV(0x8b4)===af[dV(0xa31)]?af[dV(0xa0a)](dV(0xaf3),ag[dV(0xd23)]()):af['setAttribute'](dV(0xf95),ag[dV(0xd23)]()));},ht=(af,ag,ah='userSpaceOnUse',aj=null,ak=null)=>{const dW=bY;let al=null;{let am=lt(af),[an,ap]=((aA,aB=dW(0x307))=>{const dX=dW;let aC,aD,aE,aF,aG=tt(()=>St(aA));{let aH=getComputedStyle(aA),{transformBox:aI}=aH;if(dX(0xbdf)===aI&&''!==aA[dX(0xe90)][dX(0xb4c)]){let aJ=aA[dX(0xe90)][dX(0xb4c)][dX(0xc97)]('\x20')[dX(0x8fb)](aK=>aK[dX(0x963)]())[dX(0x8fb)](aK=>dX(0xc78)===aK?CSSUnitValue[dX(0xf30)](dX(0xf9a)):'top'===aK||'left'===aK?CSSUnitValue['parse']('0%'):dX(0xdac)===aK||dX(0xccb)===aK?CSSUnitValue[dX(0xf30)]('100%'):CSSUnitValue[dX(0xf30)](aK));if(0x1===aJ['length']?(aC=aJ[0x0],aD=aJ[0x0]):0x2===aJ[dX(0x6dc)]&&(aC=aJ[0x0],aD=aJ[0x1]),dX(0xec0)===aC[dX(0xae1)])aC=aC[dX(0xf0a)]/0x64;else{let aK=aG();aC=aC['to']('px')['value']/aK[dX(0xee8)];}if(dX(0xec0)===aD[dX(0xae1)])aD=aD[dX(0xf0a)]/0x64;else{let aL=aG();aD=aD['to']('px')[dX(0xf0a)]/aL[dX(0x1046)];}aE=dX(0x79d);}else{let {transformOrigin:aM}=aH,aN=aM[dX(0xc97)]('\x20')[dX(0x8fb)](aO=>CSSUnitValue['parse'](aO));if(dX(0xbdf)===aI){let aO=aG();aC=aN[0x0]['value']/aO[dX(0xee8)],aD=aN[0x1][dX(0xf0a)]/aO['height'],aE=dX(0x79d);}else aC=aN[0x0]['value'],aD=aN[0x1][dX(0xf0a)],aE=dX(0xc1c);}}if(dX(0x307)===aB||aB===aE)aF=new DOMPoint(aC,aD);else{if(dX(0xc1c)===aB&&dX(0x79d)===aE){let aP=aG();aF=new DOMPoint(aP['x']+aC*aP[dX(0xee8)],aP['y']+aD*aP[dX(0x1046)]),aE=dX(0xc1c);}else{if('objectBoundingBox'===aB&&dX(0xc1c)===aE){let aQ=aG();aF=new DOMPoint((aC-aQ['x'])/aQ[dX(0xee8)],(aD-aQ['y'])/aQ[dX(0x1046)]),aE=dX(0x79d);}}}return[aF,aE];})(af,dW(0xc1c)),aq=St(af);0x0===aq[dW(0xee8)]&&(aq[dW(0xee8)]=1e-7),0x0===aq[dW(0x1046)]&&(aq[dW(0x1046)]=1e-7);let ar=new DOMPoint(aq['x'],aq['y']),au=new DOMPoint(aq['x']+aq[dW(0xee8)],aq['y']),av=new DOMPoint(aq['x'],aq['y']+aq[dW(0x1046)]),aw=null;if(dW(0xc1c)===ah)aw=new DOMMatrix()[dW(0x46b)](an['x'],an['y'])[dW(0x46b)](-ag['x'],-ag['y'])['multiply'](am)[dW(0x46b)](ag['x'],ag['y'])[dW(0x46b)](-an['x'],-an['y']);else{if(dW(0x79d)===ah){let aA=new DOMPoint(ag['x']*aq[dW(0xee8)],ag['y']*aq[dW(0x1046)]);aw=new DOMMatrix()['translate'](an['x']-aq['x'],an['y']-aq['y'])[dW(0x46b)](-aA['x'],-aA['y'])['multiply'](am)[dW(0x46b)](aA['x'],aA['y'])[dW(0x46b)](-an['x']+aq['x'],-an['y']+aq['y']);}}let [ax,ay,az]=[ar,au,av][dW(0x8fb)](aB=>aB[dW(0xfc1)](aw));al=ct(ar,au,av,ax,ay,az),null!==aj&&0x1===al['a']&&0x0===al['b']&&0x0===al['c']&&0x1===al['d']&&(al['e']=z(al['e'],aj),al['f']=z(al['f'],aj));}if(rt(af,al,ak),dW(0x79d)===ah?af['style'][dW(0x687)](dW(0xf2f),dW(0xbdf)):af['style'][dW(0x76c)]('transform-box'),dW(0xc1c)===ah){let {x:aB,y:aC}=ag;aj&&(aB=z(aB,aj),aC=z(aC,aj)),0x0===ag['x']&&0x0===ag['y']?af[dW(0xe90)][dW(0x76c)](dW(0x82c)):af[dW(0xe90)][dW(0x687)](dW(0x82c),aB+dW(0x7e0)+aC+'px');}else{if(dW(0x79d)===ah){let aD=0x64*ag['x'],aE=0x64*ag['y'];aj&&(aD=z(aD,aj+0x2),aE=z(aE,aj+0x2)),0x0===ag['x']&&0x0===ag['y']?af[dW(0xe90)]['removeProperty'](dW(0x82c)):af['style'][dW(0x687)](dW(0x82c),aD+'%\x20'+aE+'%');}}},ct=(af,ag,ah,aj,ak,al)=>{let am=ax=>ax[0x0][0x0]*(ax[0x1][0x1]*ax[0x2][0x2]-ax[0x1][0x2]*ax[0x2][0x1])-ax[0x0][0x1]*(ax[0x1][0x0]*ax[0x2][0x2]-ax[0x1][0x2]*ax[0x2][0x0])+ax[0x0][0x2]*(ax[0x1][0x0]*ax[0x2][0x1]-ax[0x1][0x1]*ax[0x2][0x0]),an=am([[af['x'],af['y'],0x1],[ag['x'],ag['y'],0x1],[ah['x'],ah['y'],0x1]]),ap=am([[aj['x'],af['y'],0x1],[ak['x'],ag['y'],0x1],[al['x'],ah['y'],0x1]]),aq=am([[aj['y'],af['y'],0x1],[ak['y'],ag['y'],0x1],[al['y'],ah['y'],0x1]]),ar=am([[af['x'],aj['x'],0x1],[ag['x'],ak['x'],0x1],[ah['x'],al['x'],0x1]]),au=am([[af['x'],aj['y'],0x1],[ag['x'],ak['y'],0x1],[ah['x'],al['y'],0x1]]),av=am([[af['x'],af['y'],aj['x']],[ag['x'],ag['y'],ak['x']],[ah['x'],ah['y'],al['x']]]),aw=am([[af['x'],af['y'],aj['y']],[ag['x'],ag['y'],ak['y']],[ah['x'],ah['y'],al['y']]]);if(0x0===an)return new DOMMatrix([0x1,0x0,0x0,0x1,0x0,0x0]);{let ax=[ap/an,aq/an,ar/an,au/an,av/an,aw/an]['map'](ay=>z(ay,0xc));return new DOMMatrix(ax);}},dt=(af,ag)=>{const dY=bY;let ah=new DOMPoint(af['x'],af['y']),aj=new DOMPoint(af['x']+af['width'],af['y']),ak=new DOMPoint(af['x'],af['y']+af[dY(0x1046)]),al=new DOMPoint(ag['x'],ag['y']),am=new DOMPoint(ag['x']+ag[dY(0xee8)],ag['y']),an=new DOMPoint(ag['x'],ag['y']+ag[dY(0x1046)]);return ct(ah,aj,ak,al,am,an);},ut=(af,ag,ah,aj=0x0,ak=0x0)=>{const dZ=bY;let al=DOMMatrix[dZ(0x58c)](af),am=Bt(ag),an=Bt(ah),ap=new DOMMatrix();return ap=pt(ap,nt(am),nt(an)),al=mt(al,aj,ak),al[dZ(0xa8a)](ap),al=mt(al,-aj,-ak),al;},pt=(af,ag,ah)=>{let aj=DOMMatrix['fromMatrix'](af),ak=aj['a'],al=aj['b'];return aj['a']+=ah*aj['c'],aj['b']+=ah*aj['d'],aj['c']+=ag*ak,aj['d']+=ag*al,aj;},mt=(af,ag,ah)=>{const e0=bY;let aj=DOMMatrix[e0(0x58c)](af);return aj['e']=aj['e']+ag*aj['a']+ah*aj['c'],aj['f']=aj['f']+ag*aj['b']+ah*aj['d'],aj;},{keys:xt}=Object,gt=af=>{const e1=bY;let ag=af['querySelectorAll']('textPath');af[e1(0x44e)]('tspan');let ah=ag[e1(0x6dc)]>0x0?ag[0x0]:null;{let aj=af['hasAttribute'](e1(0xee8))||af[e1(0xfd9)](e1(0x1046))?e1(0xeba):'pre';af['style'][e1(0x687)]('white-space',aj);}if(ag[e1(0x6dc)]>0x1){for(let ak of ag)ak!==ah&&ak[e1(0x102a)]();}if(ah){ah[e1(0x659)]!==af&&af[e1(0x775)](ah);for(let al of[...af[e1(0x2bd)]])['a',e1(0x514),e1(0x10cf)][e1(0x1d5)](al['localName'])&&al[e1(0x102a)]();if(ah[e1(0xfd9)](e1(0xe90))){for(let am of ah[e1(0xe90)]){let an=af[e1(0xe90)][e1(0xfb1)](am),ap=ah[e1(0xe90)][e1(0xfb1)](am);an!==ap&&af['style'][e1(0x687)](am,ap);}ah['removeAttribute'](e1(0xe90));}}},bt=af=>{const e2=bY;{let ag=ti(af),ah=af['href'][e2(0x4a3)]?ag[e2(0x344)](af['href']['baseVal']):null;if(ah&&[e2(0x3f1),e2(0xda8),e2(0xdfc),e2(0xac4),e2(0xdb4),e2(0xdea)][e2(0x1d5)](ah[e2(0xa31)])){let aj=((ak,al=0x6)=>{const e3=e2;let am=null;return e3(0x3f1)===ak[e3(0xa31)]?am=Oe(ak,al):e3(0xda8)===ak[e3(0xa31)]?am=_e(ak,al):e3(0xdfc)===ak[e3(0xa31)]?am=qe(ak,al):e3(0xac4)===ak['localName']?am=je(ak,al):e3(0xdb4)===ak['localName']?am=Ve(ak,al):e3(0xdea)===ak['localName']&&(am=Ge(ak,al)),am;})(ah);ah[e2(0xaa3)](aj);}}},ft=af=>{const e4=bY;let ag={'rootItem':null,'childItems':[]};{let [ah,aj]=yt(af),ak={'inheritableProperties':ah,'nonInheritableProperties':aj};ag[e4(0x106a)]=ak;}{let al=0x0;for(let am of wt(af)){let an={'textContent':am[e4(0xad6)],'href':null,'inheritableProperties':{},'nonInheritableProperties':{},'isLineBreak':!0x1,'x':[],'y':[],'dx':[],'dy':[],'rotate':[],'startOffset':al,'endOffset':al+am['length'],'animations':[]};if(al+=am[e4(0x6dc)],'​'===am[e4(0xad6)]&&(an[e4(0x587)]=!0x0),!0x1===an[e4(0x587)]){for(let ap=am[e4(0x858)];ap!==af;ap=ap[e4(0x858)])if('a'===ap['localName']&&ap['hasAttribute']('_href')){an['href']=ap[e4(0xc51)](e4(0xab9));break;}}if(!0x1===an[e4(0x587)]){let aq=am[e4(0xc06)](e4(0x563)),[ar,au]=yt(aq);an[e4(0x103c)]=ar,aq!==af&&(an[e4(0x10d7)]=au);}{let av=[],aw=[],ax=[],ay=[],az=[];for(let aB=am['parentNode'];af[e4(0xff8)](aB);aB=aB[e4(0x858)])if(e4(0x514)===aB[e4(0xa31)]||e4(0x7a7)===aB['localName']){let aC=0x0;for(let aD of wt(aB)){if(aD===am)break;aC+=aD[e4(0x6dc)];}for(let aE=aC,aF=0x0;aB['x'][e4(0x4a3)][e4(0x6dc)],aF<am[e4(0x6dc)];aE+=0x1,aF+=0x1)void 0x0===av[aF]&&void 0x0!==aB['x']['baseVal'][aE]&&(av[aF]=aB['x'][e4(0x4a3)][aE][e4(0x109b)]);for(let aG=aC,aH=0x0;aB['y'][e4(0x4a3)][e4(0x6dc)],aH<am[e4(0x6dc)];aG+=0x1,aH+=0x1)void 0x0===aw[aH]&&void 0x0!==aB['y'][e4(0x4a3)][aG]&&(aw[aH]=aB['y']['baseVal'][aG][e4(0x109b)]);for(let aI=aC,aJ=0x0;aB['dx']['baseVal'][e4(0x6dc)],aJ<am['length'];aI+=0x1,aJ+=0x1)void 0x0===ax[aJ]&&void 0x0!==aB['dx'][e4(0x4a3)][aI]&&(ax[aJ]=aB['dx']['baseVal'][aI][e4(0x109b)]);for(let aK=aC,aL=0x0;aB['dy'][e4(0x4a3)][e4(0x6dc)],aL<am[e4(0x6dc)];aK+=0x1,aL+=0x1)void 0x0===ay[aL]&&void 0x0!==aB['dy']['baseVal'][aK]&&(ay[aL]=aB['dy'][e4(0x4a3)][aK][e4(0x109b)]);for(let aM=aC,aN=0x0;aB[e4(0xad7)][e4(0x4a3)][e4(0x6dc)],aN<am[e4(0x6dc)];aM+=0x1,aN+=0x1)void 0x0===az[aN]&&void 0x0!==aB[e4(0xad7)][e4(0x4a3)][aM]&&(az[aN]=''+aB[e4(0xad7)][e4(0x4a3)][aM][e4(0xf0a)]);}let aA='0';for(let aO=0x0;aO<am[e4(0x6dc)];aO+=0x1)void 0x0===av[aO]&&(av[aO]='auto'),void 0x0===aw[aO]&&(aw[aO]=e4(0x307)),void 0x0===ax[aO]&&(ax[aO]='0'),void 0x0===ay[aO]&&(ay[aO]='0'),void 0x0===az[aO]&&(az[aO]=aA),aA=az[aO];an['x']=av,an['y']=aw,an['dx']=ax,an['dy']=ay,an['rotate']=az;}{let aP=[...am[e4(0xc06)](e4(0xb80))[e4(0x44e)](e4(0x1f8))];an[e4(0x34f)]=aP;}ag[e4(0x9a6)][e4(0xc68)](an);}}for(let aQ of ag['childItems'])for(let aR of xt(aQ[e4(0x103c)]))ag[e4(0x106a)][e4(0x103c)][aR]===aQ[e4(0x103c)][aR]&&delete aQ[e4(0x103c)][aR];{let aS=ag[e4(0x9a6)][e4(0xe7a)](aT=>!aT[e4(0x587)]);if(aS[e4(0x6dc)]>0x0){let [aT,...aU]=aS;for(let aV of xt(aT[e4(0x103c)])){let aW=!0x0;for(let aX of aU)aX[e4(0x103c)][aV]!==aT[e4(0x103c)][aV]&&(aW=!0x1);if(aW){ag[e4(0x106a)][e4(0x103c)][aV]=aT[e4(0x103c)][aV];for(let aY of ag['childItems'])delete aY[e4(0x103c)][aV];}}}}if(ag[e4(0x9a6)][e4(0x6dc)]>0x1){let aZ=[],b0=null;for(let b1 of ag['childItems'])b0&&b0[e4(0xbd9)]===b1[e4(0xbd9)]&&Ne(b0[e4(0x10d7)],b1[e4(0x10d7)])&&Ne(b0[e4(0x103c)],b1[e4(0x103c)])&&(!0x1===b0['x'][e4(0x1d5)](e4(0x307))||0x0===b1['x'][e4(0x6dc)]||G(b1['x'],'auto'))&&(!0x1===b0['y'][e4(0x1d5)](e4(0x307))||0x0===b1['y'][e4(0x6dc)]||G(b1['y'],'auto'))&&!0x1===b0[e4(0x587)]&&!0x1===b1[e4(0x587)]?(b0[e4(0xad6)]+=b1[e4(0xad6)],b0['x'][e4(0xc68)](...b1['x']),b0['y'][e4(0xc68)](...b1['y']),b0['dx'][e4(0xc68)](...b1['dx']),b0['dy'][e4(0xc68)](...b1['dy']),b0[e4(0xad7)][e4(0xc68)](...b1['rotate']),b0[e4(0xf6d)]=b1['endOffset']):(aZ[e4(0xc68)](b1),b0=b1);ag[e4(0x9a6)]=aZ;}return ag;},wt=af=>{const e5=bY;let ag=[];if(af['closest']('text')){let ah=[],aj=document[e5(0xd59)](af,NodeFilter['SHOW_TEXT']);for(;aj[e5(0x876)]();)ah['push'](aj[e5(0x5d9)]);for(let ak of ah){let al=ak[e5(0x659)];if(e5(0x7a7)===al[e5(0xa31)]||e5(0x514)===al[e5(0xa31)]||e5(0x7be)===al[e5(0xa31)])al[e5(0x697)]()>0x0&&ag[e5(0xc68)](ak);else{if('a'===al['localName']){let am=al[e5(0x491)]();0x0===am['x']&&0x0===am['y']&&0x0===am[e5(0xee8)]&&0x0===am[e5(0x1046)]||ag[e5(0xc68)](ak);}}}}return ag;},vt=af=>{const e6=bY;let ag=wt(af),ah=[];for(let aj of ag){let ak=aj[e6(0xc06)]('*'),al=getComputedStyle(ak)[e6(0x10d8)],am=aj[e6(0xad6)];e6(0xc52)===al?am=am[e6(0x39d)]():e6(0x9e8)===al?am=am['toLowerCase']():e6(0x9e7)===al&&(am=ke(am)),ah[e6(0xc68)](...am[e6(0xc97)](''));}return ah;},yt=af=>{const e7=bY;let ag=getComputedStyle(af),ah={},aj={};for(let ak of U)if(ak[e7(0xfa5)][e7(0x1d5)](e7(0x7a7))||ak['appliesTo'][e7(0x1d5)]('tspan')||ak['appliesTo']['includes'](e7(0x7be))){if('font'===ak[e7(0xce8)]||e7(0x106b)===ak[e7(0xce8)])continue;!0x0===ak['inheritable']?ah[ak[e7(0xce8)]]=ag['getPropertyValue'](ak[e7(0xce8)]):!0x1===ak[e7(0xfc4)]&&(aj[ak[e7(0xce8)]]=ag['getPropertyValue'](ak['name']));}return[ah,aj];},kt=(af,ag)=>{const e8=bY;let ah=af['closest'](e8(0x7a7)),aj=0x0,ak=-0x1;for(let al of wt(ah)){if(al===af){ak=aj+ag;break;}aj+=al['length'];}return[ah,ak];},Ct=(af,ag=0x3,ah=0x6,aj=!0x1)=>new Promise(async ak=>{const e9=bY;let al=await new Re(af['closest'](e9(0xdae)))[e9(0xe45)](),am=await Ie[e9(0xef3)](),an=Ke();!0x1===[e9(0x31e),e9(0x6d2),e9(0x5d5)]['includes'](an)&&(an=e9(0x644)===an?'macos':'linux'),((au,av=null)=>{const eb=e9;let aw=ft(au),ax=av&&au['contains'](av[eb(0x8cc)]),ay=ax?kt(av['startContainer'],av[eb(0x610)])[0x1]:-0x1,az=ax?kt(av[eb(0x319)],av['endOffset'])[0x1]:-0x1;if(ax&&ay!==az){let aA=[];for(let aB of aw[eb(0x9a6)]){let aC=null;if(ay>=aB[eb(0x610)]&&az<=aB[eb(0xf6d)]?aC=[aB[eb(0xad6)][eb(0x847)](0x0,ay-aB[eb(0x610)]),aB[eb(0xad6)][eb(0x847)](ay-aB[eb(0x610)],az-aB['startOffset']),aB['textContent'][eb(0x847)](az-aB['startOffset'])]:ay>=aB[eb(0x610)]&&ay<aB[eb(0xf6d)]?aC=[aB[eb(0xad6)]['slice'](0x0,ay-aB[eb(0x610)]),aB[eb(0xad6)][eb(0x847)](ay-aB['startOffset'])]:az>aB['startOffset']&&az<=aB['endOffset']&&(aC=[aB[eb(0xad6)][eb(0x847)](0x0,az-aB[eb(0x610)]),aB[eb(0xad6)][eb(0x847)](az-aB[eb(0x610)])]),null===aC)aA[eb(0xc68)](aB);else{let aD=aB['startOffset'],aE=0x0;for(let aF of aC)if(aF[eb(0x6dc)]>0x0){let aG={'textContent':aF,'href':aB['href'],'inheritableProperties':aB['inheritableProperties'],'nonInheritableProperties':aB['nonInheritableProperties'],'startOffset':aD,'endOffset':aD+aF[eb(0x6dc)],'x':[],'y':[],'dx':[],'dy':[],'rotate':[],'animations':aB['animations']['map'](aH=>aH[eb(0xe74)](!0x0))};for(let aH=0x0;aH<aF[eb(0x6dc)];aH+=0x1)aG['x']['push'](aB['x'][aE]),aG['y'][eb(0xc68)](aB['y'][aE]),aG['dx'][eb(0xc68)](aB['dx'][aE]),aG['dy'][eb(0xc68)](aB['dy'][aE]),aG[eb(0xad7)]['push'](aB[eb(0xad7)][aE]),aE+=0x1;aA['push'](aG),aD+=aF[eb(0x6dc)];}}}aw[eb(0x9a6)]=aA;}au[eb(0x88e)]('x'),au[eb(0x88e)]('y'),au[eb(0x88e)]('dx'),au[eb(0x88e)]('dy'),au[eb(0x88e)](eb(0xad7)),au['setAttribute'](eb(0xe90),'');for(let aI of D)au[eb(0xfd9)](aI)&&eb(0xf95)!==aI&&au[eb(0x88e)](aI);{let aJ=getComputedStyle(au);for(let aK of xt(aw[eb(0x106a)][eb(0x103c)]))aJ[eb(0xfb1)](aK)!==aw[eb(0x106a)][eb(0x103c)][aK]&&au[eb(0xe90)]['setProperty'](aK,aw['rootItem']['inheritableProperties'][aK]);for(let aL of xt(aw[eb(0x106a)][eb(0x10d7)]))aJ[eb(0xfb1)](aL)!==aw[eb(0x106a)][eb(0x10d7)][aL]&&au['style'][eb(0x687)](aL,aw['rootItem'][eb(0x10d7)][aL]);}{let aM=au[eb(0x344)]('textPath')||au;for(let aN of[...aM[eb(0x2bd)]])eb(0x514)!==aN[eb(0x536)]&&'a'!==aN[eb(0x536)]&&eb(0x10cf)!==aN['nodeName']||aN[eb(0x102a)]();if(aw[eb(0x9a6)][eb(0x6dc)]>0x0)for(let aO of aw[eb(0x9a6)]){let aP=ei(eb(0xd69));if(aM['append'](aP),aO[eb(0xbd9)]){let aQ=ei(eb(0xb9f));aQ[eb(0xa0a)](eb(0xab9),aO['href']),aQ[eb(0xad6)]=aO['textContent'],aP['append'](aQ);}else aP[eb(0xad6)]=aO[eb(0xad6)];if(aO[eb(0x34f)]){for(let aR of aO[eb(0x34f)])aP[eb(0x775)](aR[eb(0xe74)](!0x0));}{let aS=getComputedStyle(aP);for(let aT of xt(aO[eb(0x103c)]))aS[eb(0xfb1)](aT)!==aO[eb(0x103c)][aT]&&aP[eb(0xe90)][eb(0x687)](aT,aO[eb(0x103c)][aT]);for(let aU of xt(aO[eb(0x10d7)]))aS[eb(0xfb1)](aU)!==aO[eb(0x10d7)][aU]&&aP[eb(0xe90)][eb(0x687)](aU,aO[eb(0x10d7)][aU]);}{let aV=aO['x'][eb(0xe7a)](aW=>eb(0x307)!==aW);aV[eb(0x6dc)]>0x0&&aP[eb(0xa0a)]('x',aV[eb(0xf5e)]('\x20'));}{let aW=aO['y'][eb(0xe7a)](aX=>eb(0x307)!==aX);aW['length']>0x0&&aP['setAttribute']('y',aW[eb(0xf5e)]('\x20'));}{let aX=[...aO['dx']];for(let aY=aX[eb(0x6dc)]-0x1;aY>=0x0&&'0'===aX[aY];aY-=0x1)aX[eb(0x3ff)]();aX[eb(0x6dc)]>0x0&&aP[eb(0xa0a)]('dx',aX[eb(0xf5e)]('\x20'));}{let aZ=[...aO['dy']];for(let b0=aZ[eb(0x6dc)]-0x1;b0>=0x0&&'0'===aZ[b0];b0-=0x1)aZ[eb(0x3ff)]();aZ[eb(0x6dc)]>0x0&&aP[eb(0xa0a)]('dy',aZ[eb(0xf5e)]('\x20'));}{let b1=[...aO[eb(0xad7)]];for(let b2=b1[eb(0x6dc)]-0x1;b2>=0x0&&b1[b2]===b1[b2-0x1];b2-=0x1)b1[eb(0x3ff)]();0x1===b1['length']&&'0'===b1[0x0]&&(b1=[]),b1[eb(0x6dc)]>0x0&&aP[eb(0xa0a)](eb(0xad7),b1[eb(0xf5e)]('\x20'));}}}if(ax){let b3=0x0,b4=null;for(let b5 of wt(au)){for(let b6=0x0;b6<=b5[eb(0xad6)][eb(0x6dc)];b6+=0x1,b3+=0x1)b3===ay&&av[eb(0x870)](b5,b6),b3===az&&(0x0===b6&&b4?av[eb(0x2ac)](b4,b4[eb(0xad6)][eb(0x6dc)]):av[eb(0x2ac)](b5,b6));b3-=0x1,b4=b5;}}})(af),ht(af,new DOMPoint(0x0,0x0),e9(0xc1c));let ap=Fe(lt(af),ah),aq=document['createDocumentFragment'](),ar=af[e9(0x44e)](e9(0x514));for(let au of ar){let av,aw=vt(au)['filter'](aF=>'​'!==aF),ax=getComputedStyle(au),ay=/[\u0590-\u05FF]/[e9(0xc04)](aw[e9(0xf5e)]('')),az=/[\u0600-\u06FF]/[e9(0xc04)](aw[e9(0xf5e)]('')),aA=parseFloat(ax[e9(0xfb1)](e9(0x285))),aB=ax[e9(0xfb1)](e9(0x74a)),aC=ax[e9(0xfb1)](e9(0x59f)),aD=ax[e9(0xfb1)](e9(0x3d1)),aE=[...ne[e9(0xf27)](ax[e9(0x7a6)])[e9(0xea4)],...ee[an]];for(let aF of aE){if(null!==ze(am,aF,aB,aC)){av=aF;break;}if(null!==ze(al,aF,aB,aC)){av=aF;break;}}if(av){let aG=[];{let aI,aJ,aK=aB,aL=aC;for(let aM of aE){let aN=ze(al,aM,aK,aL),aO=ze(am,aM,aK,aL);if(aN){aI=await Me(aN);break;}if(aO){aI=await Me(aO);break;}}aI['fonts']&&(aI=aI[e9(0xaed)][0x0]);{let aP=aw[e9(0xf5e)]('');aJ=ay?aI['layout'](aP,e9(0x8ad),'hr','ltr'):az?aI[e9(0x10e5)](aP,e9(0x475),'ar',e9(0xfee)):aI[e9(0x10e5)](aP);}for(let aQ=0x0,aR=0x0;aQ<aJ[e9(0xcd2)][e9(0x6dc)];aQ+=0x1){aw[aR];let aS=aJ[e9(0xcd2)][aQ],aT=aw[e9(0xf5e)]('')['substr'](aR,aS[e9(0x5ea)]['length']),aU=aI;if(0x0===aS['id'])for(let aV of aE){let aW,aX=ze(al,aV,aK,aL),aY=ze(am,aV,aK,aL);if(aX?aW=await Me(aX):aY&&(aW=await Me(aY)),aW){aW['fonts']&&(aW=aW['fonts'][0x0]);let aZ=aW[e9(0xf3c)](aT)[0x0];if(aZ&&0x0!==aZ['id']){aS=aZ,aU=aW;break;}}}if(aR<au[e9(0x697)]()){let b0=au['getStartPositionOfChar'](aR),b1=au['getEndPositionOfChar'](aR),b2=au[e9(0x360)](aR);e9(0x8cd)===aB&&aU[e9(0x215)]['usWeightClass'];let b3=['italic',e9(0xe85)][e9(0x1d5)](aC)&&!0x1===aU['OS/2'][e9(0x4c9)]['italic']&&0x0===aU[e9(0x9ef)],b4=aS[e9(0x228)],b5=aU[e9(0x5f9)][e9(0x2bf)],b6=aU[e9(0x5f9)][e9(0x397)],b7=b5/0x14,b8=0x1/aU[e9(0x47b)]['unitsPerEm']*aA,b9=Ae(aS);if(aD['includes']('underline')){let bc=b4,bd=b7,bf=b6/0x3;b9[e9(0xc68)]({'type':'M','values':[0x0,bf]},{'type':'L','values':[bc,bf]},{'type':'L','values':[bc,bf-bd]},{'type':'L','values':[0x0,bf-bd]},{'type':'Z','values':[]});}if(aD[e9(0x1d5)](e9(0xb88))){let bg=b4,bh=b7,bj=b5-b7;b9['push']({'type':'M','values':[0x0,bj]},{'type':'L','values':[bg,bj]},{'type':'L','values':[bg,bj-bh]},{'type':'L','values':[0x0,bj-bh]},{'type':'Z','values':[]});}if(aD['includes'](e9(0x2ae))){let bk=b4,bl=b7,bm=(b5+b6)/0x2;b9[e9(0xc68)]({'type':'M','values':[0x0,bm]},{'type':'L','values':[bk,bm]},{'type':'L','values':[bk,bm-bl]},{'type':'L','values':[0x0,bm-bl]},{'type':'Z','values':[]});}let bb=[];for(let bn of b9){let bp=new DOMMatrix();az||ay?bp[e9(0x44c)](b1['x'],b1['y']):bp[e9(0x44c)](b0['x'],b0['y']);let bq=b3?-0xe:0x0;if(bp[e9(0x8ef)](b2),bp=ut(bp,bq,0x0,0x0,0x0),bp[e9(0xfc2)](b8,-b8,0x1,0x0,0x0),'M'===bn['type']){let [br,bu]=bn[e9(0xb21)],bv=new DOMPoint(br,bu)[e9(0xfc1)](bp);bn[e9(0xb21)]=[bv['x'],bv['y']];}else{if('L'===bn[e9(0x1ce)]){let [bw,bx]=bn['values'],by=new DOMPoint(bw,bx)['matrixTransform'](bp);bn[e9(0xb21)]=[by['x'],by['y']];}else{if('Q'===bn[e9(0x1ce)]){let [bz,bA,bB,bC]=bn['values'],bD=new DOMPoint(bz,bA)[e9(0xfc1)](bp),bE=new DOMPoint(bB,bC)[e9(0xfc1)](bp);bn[e9(0xb21)]=[bD['x'],bD['y'],bE['x'],bE['y']];}else{if('C'===bn[e9(0x1ce)]){let [bF,bG,bH,bI,bJ,bK]=bn[e9(0xb21)],bL=new DOMPoint(bF,bG)[e9(0xfc1)](bp),bM=new DOMPoint(bH,bI)['matrixTransform'](bp),bN=new DOMPoint(bJ,bK)[e9(0xfc1)](bp);bn['values']=[bL['x'],bL['y'],bM['x'],bM['y'],bN['x'],bN['y']];}}}}bn[e9(0xb21)]=bn[e9(0xb21)][e9(0x8fb)](bO=>z(bO,ag)),bb[e9(0xc68)](bn);}bb[e9(0x6dc)]>0x0&&aG[e9(0xc68)](bb);}aR+=aS[e9(0x5ea)]['length'];}}let aH=[];if(!0x0===aj){for(let bO of aG)aH[e9(0xc68)](bO);}else{let bP=[];for(let bQ of aG)for(let bR of bQ)bP['push'](bR);aH[e9(0xc68)](bP);}for(let bS of aH){let bT=ei(e9(0x310));bT[e9(0x754)](bS),!0x1===ap['isIdentity']&&rt(bT,ap);for(let bU of af[e9(0xe90)])!0x1===E[e9(0x1d5)](bU)&&bT[e9(0xe90)][e9(0x687)](bU,af[e9(0xe90)][e9(0xfb1)](bU));for(let bV of au['style'])!0x1===E[e9(0x1d5)](bV)&&bT[e9(0xe90)]['setProperty'](bV,au[e9(0xe90)][e9(0xfb1)](bV));aq[e9(0x775)](bT);}}}if(aq[e9(0x573)][e9(0x6dc)]>0x0){let bW=[...aq[e9(0x573)]];af[e9(0xaa3)](aq),ak(bW);}else ak(null);}),St=(af,ag=!0x0)=>{const ed=bY;let ah=new DOMRect(0x0,0x0,0x0,0x0),aj=ag?(ak=>{const ec=a1;let al=null;if(y['includes'](ak[ec(0xa31)])){let am=getComputedStyle(ak)[ec(0x1023)];if(am&&ec(0xcf1)!==am){let an=am['substring'](0x6,am[ec(0x6dc)]-0x2),ap=ti(ak)[ec(0x344)]('#'+CSS[ec(0xa18)](an))||null;ec(0x1023)===ap?.[ec(0xa31)]&&ap!==ak&&(al=ap);}}return al;})(af):null;if(aj){let ak=St(af,!0x1),al=Rt(St(aj),lt(aj));ah=Ft(ak,al);}else{if(ed(0x514)===af[ed(0xa31)]){let am=wt(af),an=document[ed(0xa01)]();if(am[ed(0x6dc)]>0x0&&(an[ed(0x870)](am[0x0],0x0),an[ed(0x2ac)](am[am['length']-0x1],am[am[ed(0x6dc)]-0x1][ed(0x6dc)])),!0x1===an['collapsed']){let ap=an['startContainer'][ed(0xc06)](ed(0x7a7)),[,aq]=kt(an[ed(0x248)],an[ed(0x610)]),[,ar]=kt(an[ed(0x319)],an[ed(0xf6d)]),au=[];for(let av=aq;av<ar;av+=0x1){let aw=ap['getExtentOfChar'](av);au[ed(0xc68)](aw);}ah=It(au);}}else{if(ed(0x881)===af['localName'])ah=new DOMRect(0x0,0x0,af[ed(0xee8)][ed(0x4a3)]['value'],af[ed(0x1046)]['baseVal'][ed(0xf0a)]);else{if(ed(0x1023)===af[ed(0xa31)]){let ax=[];for(let ay of af['children'])if(v[ed(0x1d5)](ay['localName'])){let az=Rt(DOMRect[ed(0x23a)](ay[ed(0x491)]()),lt(ay));ax[ed(0xc68)](az);}ax[ed(0x6dc)]>0x0&&(ah=It(ax));}else ah=DOMRect['fromRect'](af[ed(0x491)]());}}}return ah;},{sin:Tt,cos:$t,acos:Pt,atan2:Et,abs:Lt,sqrt:Ut,pow:Dt,PI:zt,min:Mt,max:At}=Math;document[bY(0x452)](bY(0x895),'svg');let Bt=af=>zt*af/0xb4,Rt=(af,ag)=>{const ef=bY;let ah=[new DOMPoint(af['x'],af['y']),new DOMPoint(af['x']+af[ef(0xee8)],af['y']),new DOMPoint(af['x']+af['width'],af['y']+af['height']),new DOMPoint(af['x'],af['y']+af[ef(0x1046)])]['map'](aq=>aq[ef(0xfc1)](ag)),aj=ah[ef(0x8fb)](aq=>aq['x']),ak=ah['map'](aq=>aq['y']),al=Mt(...aj),am=Mt(...ak),an=At(...aj),ap=At(...ak);return new DOMRect(al,am,an-al,ap-am);},It=af=>{const eg=bY;if(0x0===af[eg(0x6dc)])return new DOMRect(0x0,0x0,0x0,0x0);if(0x1===af[eg(0x6dc)]){let ag=af[0x0];return new DOMRect(ag['x'],ag['y'],ag['width'],ag[eg(0x1046)]);}{let ah=Math[eg(0x339)](...af[eg(0x8fb)](am=>am['x'])),aj=Math[eg(0x339)](...af[eg(0x8fb)](am=>am['y'])),ak=Math[eg(0x689)](...af[eg(0x8fb)](am=>am['x']+am['width'])),al=Math[eg(0x689)](...af[eg(0x8fb)](am=>am['y']+am[eg(0x1046)]));return new DOMRect(ah,aj,ak-ah,al-aj);}},Ft=(af,ag)=>{const eh=bY;let ah=Math[eh(0x689)](af[eh(0x9f2)],ag[eh(0x9f2)]),aj=Math[eh(0x339)](af[eh(0xccb)],ag['right']),ak=Math[eh(0x689)](af[eh(0x77e)],ag[eh(0x77e)]),al=Math['min'](af[eh(0xdac)],ag['bottom']);return new DOMRect(ah,ak,aj-ah,al-ak);},Nt=(af,ag)=>ag['x']>=af['x']&&ag['x']<=af['x']+af[bY(0xee8)]&&ag['y']>=af['y']&&ag['y']<=af['y']+af[bY(0x1046)],Ot=(af,ag)=>af[bY(0x9f2)]<=ag[bY(0xccb)]&&ag[bY(0x9f2)]<=af[bY(0xccb)]&&af['top']<=ag[bY(0xdac)]&&ag['top']<=af['bottom'],_t=af=>{const ej=bY;{let ag=0x0,ah=[...af['children']][ej(0xe7a)](aj=>ej(0x102f)===aj[ej(0xa31)]);for(let aj of ah)if(aj[ej(0xfd9)](ej(0x6fd))){let ak=aj['offset'][ej(0x4a3)];ak<ag&&(ak=ag),ak=M(ak,0x0,0x1,0x4),ag=ak,aj[ej(0xa0a)]('offset',ak);}}},qt=af=>{const ek=bY;{let ag=0x0,ah=[...af[ek(0x573)]][ek(0xe7a)](aj=>ek(0x102f)===aj[ek(0xa31)]);for(let aj of ah)if(aj[ek(0xfd9)]('offset')){let ak=aj[ek(0x6fd)]['baseVal'];ak<ag&&(ak=ag),ak=M(ak,0x0,0x1,0x4),ag=ak,aj[ek(0xa0a)](ek(0x6fd),ak);}}af[ek(0x88e)]('fx'),af[ek(0x88e)]('fy'),af['removeAttribute']('fr');};const jt=[[bY(0x36b),bY(0xea5),bY(0xaeb),'#f4a261',bY(0x41b)],[bY(0x635),bY(0xb7f),'#a8dadc',bY(0x35d),bY(0x50b)],[bY(0x512),bY(0x406),bY(0x10d2),bY(0x4ae),bY(0x2cc)],[bY(0x450),bY(0x32f),bY(0xce1),bY(0x26f),bY(0x620)],[bY(0x4ca),bY(0x1ec),'#f77f00',bY(0xd9e),'#eae2b7'],[bY(0xbb2),bY(0x4a8),bY(0xb2b),'#81b29a',bY(0x4d1)],[bY(0x3dd),bY(0x699),'#fefae0',bY(0xe53),bY(0x9f7)],[bY(0xed1),'#83c5be',bY(0xfc9),'#ffddd2',bY(0x10c0)],[bY(0x928),bY(0x6a4),bY(0x4e4),'#118ab2',bY(0xb60)],[bY(0xb5c),bY(0x289),bY(0x56e),bY(0xc99),bY(0x816)],['#ffb5a7',bY(0xc8d),bY(0xa6c),bY(0xd7f),bY(0x931)],[bY(0x788),bY(0xdbc),bY(0xed3),'#8338ec','#3a86ff'],[bY(0xa9d),bY(0x345),bY(0xf89),bY(0x922),bY(0xa3b)],[bY(0xe93),bY(0x2ca),bY(0xf46),bY(0x542),'#fb8500'],['#d8e2dc',bY(0xac0),bY(0xa81),bY(0xb3c),bY(0xcf7)],['#3d5a80',bY(0x277),bY(0xf23),bY(0xc45),bY(0x1058)],[bY(0xd6e),bY(0x505),bY(0xe4a),bY(0x525),bY(0xef4)],[bY(0x675),bY(0xe02),bY(0x8b3),bY(0x690),'#f0f3bd'],[bY(0xf57),bY(0xed6),bY(0x62f),bY(0xe59),'#dee2ff'],['#cdb4db',bY(0xc37),bY(0xd1c),bY(0x1d0),bY(0x24e)],[bY(0x8dc),bY(0xf77),bY(0x7a9),bY(0x26e),bY(0x611)],['#1a535c',bY(0xbb7),bY(0xc93),'#ff6b6b',bY(0xa1d)],[bY(0x10b0),bY(0xcfe),bY(0x22b),bY(0x995),'#5e6472'],[bY(0xd90),'#e9edc9','#fefae0',bY(0x1070),bY(0x7b2)],[bY(0x885),bY(0x324),bY(0x89d),bY(0x640),bY(0xc30)],['#cad2c5','#84a98c',bY(0xd16),bY(0xbfb),'#2f3e46'],[bY(0xca5),bY(0x10a9),bY(0x4bd),bY(0x3c8),bY(0x3fd)],[bY(0x611),bY(0x5b4),bY(0x620),bY(0xb85),bY(0x7a9)],[bY(0xaca),bY(0xe13),bY(0xc95),bY(0x20a),bY(0x564)],['#f08080','#f4978e',bY(0xb62),'#fbc4ab',bY(0xf82)],[bY(0xa25),bY(0x8dd),bY(0xabd),bY(0x9a9),'#ffd6ba'],['#0081a7',bY(0x706),'#fdfcdc','#fed9b7',bY(0x4b3)],[bY(0x522),'#7209b7',bY(0x773),bY(0xf8b),bY(0x10a2)],[bY(0x60b),bY(0x1056),bY(0xe8c),bY(0xa94),'#caf0f8'],['#463f3a','#8a817c','#bcb8b1',bY(0x81b),bY(0xd60)],['#353535','#3c6e71','#ffffff',bY(0x745),bY(0x883)],['#ecf8f8','#eee4e1',bY(0x867),bY(0x10b3),bY(0x6dd)],[bY(0x103d),bY(0x5c9),bY(0x357),bY(0x54c),'#772e25'],[bY(0x9fe),bY(0x70a),bY(0x5f3),'#f19c79','#a44a3f'],['#cfdbd5',bY(0xc50),bY(0x787),bY(0x3a9),'#333533'],['#7bdff2',bY(0xfda),bY(0xadb),bY(0x934),bY(0x774)],['#50514f',bY(0x6d4),'#ffe066','#247ba0','#70c1b3'],['#9c89b8',bY(0xd04),bY(0x8ac),bY(0x81e),bY(0x4d9)],['#588b8b',bY(0x620),'#ffd5c2',bY(0xed7),bY(0x562)],[bY(0x371),bY(0x996),bY(0xe5c),bY(0x2b0),bY(0xfa7)],['#247ba0',bY(0xf16),'#b2dbbf','#f3ffbd',bY(0xf4d)],['#ff595e',bY(0xb7c),bY(0x6bb),'#1982c4',bY(0xdfd)],[bY(0x620),bY(0xb82),'#a5ffd6',bY(0x10b0),bY(0xb10)],['#0b132b','#1c2541',bY(0xaa5),'#5bc0be',bY(0x835)],[bY(0x758),bY(0xb8d),'#ff0054','#ff5400',bY(0x107e)],[bY(0xd26),bY(0x5f0),bY(0x6f5),bY(0x824),bY(0x399)],[bY(0x79a),bY(0x2f8),bY(0xb08),bY(0x772),bY(0xf47)],[bY(0xd9a),bY(0xb56),'#432818',bY(0x891),bY(0x586)],['#70d6ff',bY(0x46f),'#ff9770','#ffd670','#e9ff70'],[bY(0x859),bY(0x582),bY(0xc5e),bY(0x8db),'#4281a4'],['#dad7cd',bY(0xd7c),bY(0xec8),bY(0xf5d),'#344e41'],[bY(0x6c7),'#ccc5b9','#403d39',bY(0x704),bY(0xd0c)],['#ffffff',bY(0x85d),bY(0x7e3),bY(0x2ec),bY(0xb3a)],[bY(0x5cf),bY(0x4a4),bY(0x272),bY(0xbe2),bY(0xcbe)],['#0d3b66',bY(0xd8b),'#f4d35e',bY(0xd10),bY(0x4cb)],['#ff99c8',bY(0xadf),bY(0x535),bY(0x972),bY(0x109c)],['#4f000b',bY(0x2ef),bY(0x5f1),'#ff7f51',bY(0x8f1)],[bY(0xfa9),bY(0x47c),bY(0x929),bY(0xe2c),'#8d0801'],[bY(0xdcc),bY(0x57c),'#c89f9c',bY(0x5ba),'#b36a5e'],['#220901',bY(0xbbb),bY(0xd6b),'#bc3908',bY(0x28e)],['#0d1b2a','#1b263b',bY(0xab4),bY(0x244),bY(0x10ae)],[bY(0x814),bY(0x10d5),bY(0x7c6),bY(0x8ab),bY(0x493)],[bY(0x5f4),'#a4c3b2',bY(0x7ec),bY(0xb1c),bY(0xec5)],[bY(0xf1c),bY(0x340),'#a7c957',bY(0x52a),bY(0x27d)],[bY(0x823),bY(0x8c1),bY(0xdee),'#efe9ae',bY(0x9c3)],[bY(0x49b),'#ee4266',bY(0xe32),bY(0x10b4),bY(0xe9d)],[bY(0xd97),bY(0x317),'#ce796b',bY(0xa83),bY(0xe43)],[bY(0xc24),'#489fb5',bY(0x99f),'#ede7e3',bY(0xaa4)],[bY(0x9fd),bY(0x332),bY(0xae3),'#5ca4a9',bY(0x2b5)],[bY(0xdfb),bY(0xccd),bY(0xb32),bY(0x2e8),bY(0xbe9)],[bY(0xfd4),bY(0xe62),bY(0xe7e),bY(0x89b),bY(0x1060)],[bY(0x5ef),'#bfc0c0',bY(0x620),bY(0x7d6),bY(0x73f)],[bY(0xe43),bY(0x46c),bY(0x219),bY(0xbdd),bY(0x7a8)],[bY(0x5ef),bY(0x73f),bY(0xd2f),'#ffffff',bY(0x7d6)],[bY(0x6ab),bY(0x560),bY(0x94c),bY(0x8ba),bY(0x47e)],['#f9dbbd',bY(0x6be),bY(0xd43),bY(0x8c7),'#450920'],[bY(0xb49),bY(0xc75),bY(0x2b7),bY(0x4a9),bY(0xd89)],[bY(0x795),bY(0x328),'#88d498',bY(0x5cc),bY(0xd6a)],['#9381ff','#b8b8ff',bY(0xe05),bY(0xd40),bY(0xcdc)],['#ffbc42',bY(0xb3d),'#8f2d56',bY(0x90b),'#73d2de'],[bY(0xd7d),bY(0x200),'#1b4965',bY(0x10d4),bY(0xd38)],[bY(0xbe3),bY(0xe35),bY(0x333),bY(0x49f),bY(0x639)],[bY(0x7c8),bY(0x825),bY(0xde9),bY(0xa71),bY(0xeff)],['#dcdcdd','#c5c3c6',bY(0x4f6),'#4c5c68',bY(0x1045)],[bY(0xe63),bY(0x23f),'#b388eb',bY(0xe72),'#72ddf7'],[bY(0x4b0),bY(0xdce),bY(0xe83),'#525174','#513b56'],[bY(0x86e),bY(0xa3f),'#ffecd1',bY(0x2ce),bY(0x676)],['#231942',bY(0xa66),bY(0x75f),bY(0x330),bY(0x5d8)],[bY(0xdb6),bY(0x316),'#b23a48',bY(0x572),bY(0xeb8)],[bY(0x10e8),bY(0xb1e),bY(0xf1a),bY(0xec9),bY(0x6ea)],[bY(0x846),bY(0x5fc),bY(0x422),bY(0xbea),bY(0xc7a)],['#0a0908','#22333b','#eae0d5',bY(0x886),bY(0xeb6)],[bY(0x69d),bY(0xffd),bY(0x1dc),bY(0x30f),bY(0x857)],[bY(0x2b2),'#dde7c7',bY(0xb37),bY(0xfb5),bY(0x32d)],[bY(0xcfb),bY(0x643),'#fbff12',bY(0x1f3),bY(0x620)],[bY(0x1093),bY(0x58f),bY(0x9f6),bY(0xcdf),bY(0x8ce)],['#d0b8ac',bY(0x960),bY(0xfe9),bY(0xd81),bY(0x620)],['#cc5803',bY(0x904),'#ff9505',bY(0x62d),bY(0x72f)],['#edafb8',bY(0x86f),bY(0x3cf),bY(0x3ec),bY(0xc4d)],['#ee6055',bY(0x26c),bY(0x6ec),bY(0x708),bY(0x684)],['#5bc0eb',bY(0x47a),bY(0x2c1),bY(0xdfe),'#fa7921'],[bY(0xe78),bY(0x673),bY(0x52c),bY(0x278),'#b2ff9e'],[bY(0xf23),bY(0xd91),bY(0x382),bY(0xfd3),bY(0x8ed)],[bY(0x33c),bY(0x9e0),bY(0xb1f),bY(0x86d),bY(0xb9d)],[bY(0xebc),'#f38375',bY(0x726),bY(0xe81),bY(0xfb0)],[bY(0xa9f),bY(0x375),bY(0xa7a),'#ffc300',bY(0x3ed)],[bY(0xe3c),bY(0x914),bY(0xf88),bY(0xaae),'#d68c45'],['#484a47',bY(0x10ad),'#a37774',bY(0xee7),bY(0x5e3)],['#edae49',bY(0xa15),'#00798c',bY(0x74c),'#003d5b'],[bY(0x952),bY(0xbd6),'#b8b08d','#f2d492',bY(0x9c1)],[bY(0x34a),bY(0xb04),'#bfd7ea',bY(0x1082),'#c81d25'],[bY(0x458),bY(0xb71),bY(0xb58),bY(0xf90),bY(0xa79)],[bY(0x805),bY(0xbac),bY(0x44f),bY(0xbcc),bY(0x82f)],[bY(0x677),bY(0x108f),bY(0xe95),'#ee964b','#f95738'],[bY(0x6a9),bY(0xee5),bY(0xcb3),bY(0xa2a),bY(0x7a5)],[bY(0x3e8),bY(0xcd5),bY(0x27f),bY(0x1000),bY(0x4de)],['#fbfbf2',bY(0x9fc),'#cfd2cd',bY(0x10b2),bY(0x8c9)],[bY(0x1089),bY(0x326),'#fcf5c7',bY(0x508),bY(0xb92)],[bY(0x856),bY(0x6a8),'#efebce','#d8a48f',bY(0xfcc)],[bY(0xd61),bY(0xdc9),bY(0xf86),bY(0x1025),bY(0x40f)],[bY(0xc19),bY(0x101a),bY(0x7b9),bY(0xb2d),bY(0x537)],[bY(0xb5c),bY(0x289),bY(0x56e),bY(0xc99),bY(0xded)],[bY(0x241),bY(0xbb0),bY(0x437),bY(0x903),bY(0xe5d)],[bY(0x22d),bY(0x7ba),bY(0x78f),bY(0x64a),bY(0x2a7)],[bY(0xbc0),bY(0x5d0),'#2e294e',bY(0x1020),bY(0x8b0)],['#8cb369',bY(0x28f),bY(0x2c4),bY(0xd11),bY(0xc6f)],[bY(0x2e1),bY(0x109c),bY(0x6cd),bY(0x93c),bY(0x972)],[bY(0x1083),bY(0xbe6),bY(0xfc8),'#d81159',bY(0x5f7)],['#ffd6ff',bY(0x383),bY(0xa24),bY(0x9a2),'#bbd0ff'],[bY(0x290),bY(0x45b),'#2f4858',bY(0xad1),bY(0x61f)],[bY(0xc70),bY(0xe71),bY(0xce2),bY(0xaf0),bY(0x494)],[bY(0xd9c),bY(0x96d),'#f2a65a','#f58549','#772f1a'],[bY(0x389),'#d0ada7','#ad6a6c','#5d2e46','#b58db6'],[bY(0x8dc),'#f71735','#41ead4',bY(0xf77),bY(0x611)],['#cc8b86',bY(0xe49),bY(0x822),bY(0x8bb),bY(0x108c)],[bY(0x3ee),bY(0x813),bY(0x204),bY(0x91a),bY(0xca9)],[bY(0x84c),bY(0xa02),'#034078',bY(0x8e2),bY(0x3f7)],[bY(0x620),'#ffcad4',bY(0x10ac),bY(0x25b),'#f7af9d'],['#d88c9a','#f2d0a9','#f1e3d3','#99c1b9','#8e7dbe'],[bY(0x675),bY(0xc44),'#ebf2fa',bY(0xa49),bY(0x64d)],['#2f4858',bY(0x45b),bY(0xf5b),'#f6ae2d',bY(0x61f)],['#f8ffe5',bY(0x4e4),bY(0x41e),bY(0x928),bY(0x1c6)],[bY(0xd5f),bY(0x620),bY(0xd80),'#ff8a5b',bY(0x232)],[bY(0xe9c),'#a663cc',bY(0xb1d),bY(0xc63),bY(0xf0f)],[bY(0xcd3),bY(0xf18),bY(0x88a),'#dab785',bY(0xfcd)],[bY(0xbfa),'#372549',bY(0x32a),bY(0xdc6),bY(0xced)],[bY(0x2d6),'#fbd1a2',bY(0x2ba),bY(0xda2),bY(0x93f)],[bY(0x24d),bY(0x7d5),bY(0x804),bY(0x25d),bY(0xfc6)],[bY(0x795),bY(0xe02),bY(0x3bd),'#456990',bY(0x777)],[bY(0x9b8),'#246a73','#368f8b','#f3dfc1',bY(0xd03)],[bY(0xb5b),bY(0x67f),'#f0c808',bY(0x1e4),bY(0x368)],['#f3e9dc',bY(0xe8d),bY(0xa8b),'#895737',bY(0xbd4)],[bY(0x10ac),bY(0x25b),bY(0x3c0),bY(0xff2),'#f3eec3'],[bY(0x628),bY(0x1032),bY(0x8e6),bY(0x10a3),bY(0xc21)],['#292f36',bY(0xbb7),bY(0xc93),bY(0x369),bY(0xa1d)],[bY(0xf06),'#1d2d44','#3e5c76',bY(0x6b4),bY(0x5a2)],[bY(0xbcb),bY(0x1027),bY(0x8ba),'#119da4','#19647e'],['#f2d7ee',bY(0x438),bY(0xf8a),'#69306d',bY(0xf08)],[bY(0xc46),bY(0x6cf),'#d8973c',bY(0x736),'#273e47'],['#ff5e5b',bY(0xb86),bY(0x66a),'#00cecb',bY(0x1098)],['#2364aa',bY(0xd64),'#73bfb8',bY(0x2ff),bY(0xa48)],[bY(0xcde),bY(0x1019),bY(0x943),bY(0xf2a),bY(0xffc)],[bY(0x9e1),bY(0xa91),bY(0xc20),'#68a691',bY(0x40b)],[bY(0x77b),'#1f7a8c',bY(0x5b5),'#e1e5f2',bY(0x620)],[bY(0x6b6),bY(0x205),bY(0x1028),bY(0x33d),bY(0xa07)],['#000000',bY(0xa86),bY(0xa4e),bY(0x52b),bY(0x9bf)],[bY(0x6b7),bY(0xad8),'#f5dd90',bY(0xc62),'#f76c5e'],['#26547c',bY(0x928),bY(0x6a4),bY(0x4e4),'#fffcf9'],[bY(0xaf7),'#28666e',bY(0x737),bY(0x3e7),bY(0x26a)],[bY(0xe79),bY(0xaea),'#ad2e24',bY(0x6ce),'#540804'],[bY(0x91d),'#95b8d1',bY(0x6f6),'#d6eadf',bY(0xcc7)],[bY(0xc15),'#124559',bY(0x37b),'#aec3b0',bY(0x6e6)],[bY(0xa7c),bY(0xdbf),bY(0x9d2),'#76949f',bY(0x4bc)],['#b8d8ba',bY(0x3b2),bY(0x1031),bY(0x1ca),'#69585f'],[bY(0x417),bY(0x8eb),bY(0xfdb),bY(0x4ec),'#e8ddb5'],[bY(0xe06),bY(0xcbf),bY(0xdc2),bY(0xd87),bY(0x672)],['#faf3dd','#c8d5b9',bY(0xfc3),bY(0xdf1),'#4a7c59'],[bY(0x498),bY(0x3e6),bY(0x67d),bY(0xd2c),bY(0x431)],['#133c55',bY(0x410),bY(0xa6a),bY(0x25a),bY(0x959)],[bY(0xf9f),bY(0x852),bY(0x998),bY(0xea3),bY(0x608)],[bY(0x605),bY(0x83f),bY(0x88d),bY(0xe01),bY(0x7fc)],[bY(0x5e9),bY(0x373),bY(0x321),bY(0x288),bY(0x9b6)],['#ddfff7',bY(0xf21),bY(0x10b0),bY(0xe67),'#462255'],['#042a2b',bY(0x9e5),bY(0x10d3),bY(0x10af),bY(0x318)],[bY(0x45b),bY(0xf5b),bY(0xa4f),bY(0xad1),bY(0x61f)]];let Vt=af=>{const el=bY;let ag=0x0,ah=[el(0xee9),el(0x94d),el(0x965),'#107dc0',el(0x63a),el(0x604),'#13c3c0','#2e7d32',el(0xfe4),'#c2cb73',el(0xe18),'#ffc107',el(0x1010),'#d32f2f',el(0xd95),'#89a3b2','#8d6e63'];for(let aj of af){if(':'===aj)break;ag+=aj[el(0x897)](0x0);}return ah[ag%ah[el(0x6dc)]];},Gt=af=>{const em=bY;let ag=ti(af);if(!0x1===af['hasAttribute']('id')){let ah=0x0;for(;null!==ag[em(0x344)](em(0x259)+ah);)ah+=0x1;af[em(0xa0a)]('id',em(0xe39)+ah);}},Ht=(af=0x0,ag=0x64,ah=0x0,aj=null)=>{const en=bY;let ak=af+(aj?new a5(aj):Math[en(0x9ce)])()*(ag-af);return z(ak,ah);},Wt=(af,ag=bY(0xe16))=>{const ep=bY;let ah=0x811c9dc5;for(let aj=0x0,ak=af['length'];aj<ak;aj+=0x1)ah^=af[ep(0x897)](aj),ah+=(ah<<0x1)+(ah<<0x4)+(ah<<0x7)+(ah<<0x8)+(ah<<0x18);return ah>>>=0x0,'hex'===ag&&(ah=(ep(0xc83)+ah[ep(0xd23)](0x10))['substr'](-0x8)),ah;},Kt=(af=0xa)=>{const eq=bY;let ag='',ah=crypto[eq(0xb8a)](new Uint8Array(af));for(;0x0<af--;)ag+='_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[0x3f&ah[af]];return ag;},Zt=af=>{const er=bY;let ag=!0x1;if(af[er(0xfd9)](er(0x7c9))){let ah=af[er(0xc51)]('d'),aj=af[er(0xc51)]('data-bx-d')[er(0x963)]()[er(0xc97)](/[\s+,]+/);if(aj['length']>=0x3){let ak=aj[er(0x847)](0x0,aj[er(0x6dc)]-0x1),al=aj[aj[er(0x6dc)]-0x1];if(al[er(0x1d5)]('@')){let [am,an]=al[er(0xc97)]('@');an===Wt(ah+er(0x8f7)+ak['join']('\x20')+'\x20'+am)['toString'](0x20)&&(ag=!0x0);}}}return ag;},Yt=af=>{const eu=bY;if(af[eu(0xfd9)](eu(0xbd9))){let ag=af[eu(0xc51)](eu(0xbd9)),ah=ti(af)[eu(0x344)](ag);ah&&ah[eu(0x775)](af),af[eu(0x88e)]('href');}if(af[eu(0xfd9)](eu(0xd2e))){if(!0x1===af[eu(0xfd9)]('max')){let aj=Xt(af);0x1===aj[eu(0x6dc)]&&'<offset-value>'===aj[0x0][eu(0x1ce)]&&0x0===aj[0x0][eu(0x740)]&&af[eu(0xa0a)](eu(0x689),af['getAttribute'](eu(0xd2e)));}af[eu(0x88e)]('repeatDur');}af[eu(0xfd9)]('by')&&(!0x1===af[eu(0xfd9)]('to')&&af['setAttribute']('to',af[eu(0xc51)]('by')),af[eu(0x88e)]('by')),af['hasAttribute'](eu(0x418))&&af[eu(0x88e)](eu(0x418)),af[eu(0xfd9)](eu(0x339))&&af[eu(0x88e)](eu(0x339)),eu(0xbe5)===af[eu(0xc51)](eu(0x1091))&&af[eu(0x88e)](eu(0x1091)),eu(0xbe5)===af[eu(0xc51)](eu(0x689))&&af['removeAttribute'](eu(0x689));},Xt=af=>Jt(af['getAttribute']('begin')),Jt=(af,ag=!0x1)=>{const ev=bY;let ah=[];if(null!==af){let aj=af['trim']()[ev(0xc97)](';')[ev(0x8fb)](ak=>ak['trim']())[ev(0xe7a)](ak=>''!==ak);for(let ak of aj)if(ev(0xba7)===ak)!0x1===ah[ev(0x1d5)](ev(0xba7))&&ah['push'](ev(0xba7));else{let al=null;for(let am of[N,_,F,O])if(al=am[ev(0xf27)](ak,!0x1,ag),null!==al)break;null!==al&&(!0x1===(void 0x0!==ah['find'](an=>an[ev(0xe69)]&&an[ev(0xe69)](al)))&&ah[ev(0xc68)](al));}0x0===ah[ev(0x6dc)]&&ah['push'](ev(0xba7));}else ah['push'](N[ev(0xf27)]('0s'));return ah[ev(0x1d5)]('indefinite')&&(ah=0x1===ah['length']?[]:ah[ev(0xe7a)](an=>ev(0xba7)!==an)),ah;},{parseInt:Qt}=Number,ei=(af,ag=null)=>{const ew=bY;let ah=af[ew(0xc97)](':'),aj=null;if(0x1===ah[ew(0x6dc)]){let [ak]=ah;aj=document[ew(0x840)](ak,ag);}else{if(0x2===ah[ew(0x6dc)]){let [al,am]=ah;'svg'===al&&(aj=document[ew(0x452)](u,am,ag));}}return aj;},ti=af=>{const ex=bY;let ag=ex(0xdae)===af[ex(0xa31)]?af:null;for(let ah=af[ex(0x20f)];ah;ah=ah['ownerSVGElement'])ag=ah;return ag;},ii=af=>{const ey=bY;for(let ag in af[ey(0x659)][ey(0x573)]){if(af[ey(0x659)][ey(0x573)][ag]===af)return Qt(ag);}},si=(af,ag,ah=!0x0)=>{const ez=bY;let aj=af[ez(0xc06)](ag);return ah&&!aj&&af[ez(0xe60)]()['host']?si(af[ez(0xe60)]()[ez(0x1da)],ag):aj;},ai=(af,ag)=>{const eA=bY;let ah=[];if(af['length']>0x0)for(let aj of ag){let ak,al=document[eA(0xd59)](aj,NodeFilter[eA(0x9d7)],null,!0x1),am=[];for(;ak=al[eA(0x876)]();)am[eA(0xc68)](ak);for(let an of am)for(let ap of af)if(an[eA(0xad6)][eA(0x1d5)](ap)){let aq=an['textContent']['indexOf'](ap),ar=aq+ap[eA(0x6dc)],au=new Range();au[eA(0x870)](an,aq),au['setEnd'](an,ar),ah['push'](au);}}return ah;};class oi extends HTMLElement{static [bY(0x1068)]=[bY(0xce8),'version'];static #C=ie` <template> <div id="container"> <header part="header"> <img id="logo" src="/images/boxy-svg.svg" width="80px" height="80px"> <h1 id="name" part="name">Boxy SVG</h1> <h2 id="version"> <x-message href="#version"></x-message> <span id="version-number">0.0.0</span> </h2> </header> <main id="main" part="main"></main> <footer part="footer"> <h2 id="copyright">© 2012-${new Date()[bY(0xc11)]()} <a href="http://foksa.name/">Jarosław Foksa</a></h2> </footer> </div> </template>
  `;static #S=se`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      contain: strict;
    }
    :host(:focus) {
      outline: none;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    #container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      position: relative;
      position: relative;
      overflow: hidden;
      text-align: center;
      font-size: 10px;
      cursor: default;
      user-select: none;
      -webkit-user-select: none;
    }

    #container a {
      color: var(--text-color);
      text-decoration: none;
    }
    #container a:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    /**
     * Header
     */

    #logo {
      margin: 14px 0px 2px
    }

    #name {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 2px;
      cursor: text;
      width: 100%;
      user-select: text;
      -webkit-user-select: text;
    }

    #version {
      font-size: 12px;
      margin: 0 0 12px 0;
      cursor: text;
      width: 100%;
      user-select: text;
      -webkit-user-select: text;
    }

    /**
     * Main
     */

    #main {
      width: 300px;
      height: 135px;
      overflow: auto;
      border-top-width: 1px;
      border-top-style: solid;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      font-size: 12px;
      padding-left: 7px;
      padding-bottom: 8px;
      flex: 1;
      cursor: text;
      user-select: text;
      -webkit-user-select: text;
    }

    #main h3 {
      font-weight: 700;
      margin: 20px 0 6px 0;
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.8;
    }
    #main h3:first-child {
      margin-top: 15px;
    }

    #main ul,
    #main li {
      margin: 0;
      padding: 0;
    }

    #main dt,
    #main dt a {
      font-weight: 600;
    }

    #main dd {
      margin-bottom: 9px;
    }

    #main #libraries li:not(:last-child),
    #main #frameworks li:not(:last-child) {
      margin-bottom: 3px;
    }

    /**
     * Footer
     */

    #copyright {
      width: 100%;
      margin: 10px 0 11px 0;
      font-size: 11px;
      cursor: text;
      user-select: text;
      -webkit-user-select: text;
    }
  `;get[bY(0xce8)](){const eB=bY;return this['hasAttribute']('name')?this[eB(0xc51)](eB(0xce8)):eB(0x10e9);}set['name'](af){const eC=bY;this[eC(0xa0a)](eC(0xce8),af);}get[bY(0xd70)](){const eD=bY;return this[eD(0xfd9)](eD(0xd70))?this[eD(0xc51)]('version'):eD(0x33e);}set['version'](af){const eE=bY;this[eE(0xa0a)](eE(0xd70),af);}['commands']={};#T;#$;#P;#E=0x0;constructor(){const eF=bY;super(),this.#P=this[eF(0x1017)]({'mode':eF(0x9ff)}),this.#P[eF(0x48f)]=[a2[eF(0x500)],oi.#S],this.#P[eF(0x775)](document[eF(0xc3b)](oi.#C[eF(0x223)],!0x0));for(let af of this.#P[eF(0x44e)]('[id]'))this['#'+af['id']]=af;this[eF(0xa0a)]('tabindex','0'),this[eF(0x21d)][eF(0x1012)](eF(0xa78),()=>this.#L()),this[eF(0x1012)](eF(0x57f),ag=>{const eG=eF;eG(0xe73)===ag[eG(0x3cb)]&&!0x1===ag['defaultPrevented']&&this.#$&&this.#$[eG(0x225)]();});}async[bY(0x854)](){const eH=bY;if(this.#T=si(this,eH(0xf55)),this.#$=si(this,eH(0x741)),null===this[eH(0x21d)][eH(0xe5b)]){this[eH(0x21d)][eH(0x8c2)]=await(await fetch(eH(0x2a9)))[eH(0x7a7)]();let af=this.#T[eH(0xa31)]['endsWith'](eH(0xd8c));for(let ag of this[eH(0x21d)][eH(0x44e)]('a'))ag[eH(0xa0a)](eH(0x6a6),eH(0xc1b)),af&&ag[eH(0xa0a)](eH(0x779),'_blank');}this[eH(0x21d)]['scrollTop']=this.#E;}[bY(0x83b)](af,ag,ah){const eI=bY;ag!==ah&&(eI(0xce8)===af?this[eI(0x8e7)]['textContent']=this['name']:eI(0xd70)===af&&(this[eI(0x4d2)][eI(0xad6)]=this[eI(0xd70)]));}#L(){const eJ=bY;this.#E=this[eJ(0x21d)][eJ(0x269)];}}customElements[bY(0x864)](bY(0x54a),oi);class ni extends HTMLElement{static [bY(0x1068)]=[bY(0x21c)];static [bY(0x78e)]=se`:host{display:none;width:100%}:host([enabled]){display:block}h2:first-child{margin-top:0}p{font-size:13px;line-height:1.4;margin:5px 0 8px 0}section+hr{margin:20px 0}section[hidden]+hr{display:none}`;get[bY(0x21c)](){const eK=bY;return this[eK(0xfd9)](eK(0x21c));}set[bY(0x21c)](af){const eL=bY;af?this[eL(0xa0a)](eL(0x21c),''):this['removeAttribute'](eL(0x21c));}[bY(0x6e4)];['o'];constructor(){const eM=bY;super(),this['_shadowRoot']=this[eM(0x1017)]({'mode':'closed'}),this['_shadowRoot']['append'](document[eM(0xc3b)](this[eM(0xf7c)][eM(0x2a2)][eM(0x223)],!0x0)),this[eM(0x6e4)][eM(0x48f)]=[a2[eM(0x500)],ni[eM(0x78e)],this[eM(0xf7c)]['_shadowStyleSheet']];for(let af of this[eM(0x6e4)]['querySelectorAll'](eM(0x6e3)))this['#'+af['id']]=af;this['setAttribute']('extends',eM(0x30c));}[bY(0x854)](){const eN=bY;this['o']=si(this,eN(0xf55));}[bY(0x83b)](af,ag,ah){const eO=bY;ag!==ah&&eO(0x21c)===af&&(this[eO(0x21c)]?this['l']():this['h']());}['l'](){}['h'](){}}class li extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#general" autocapitalize></x-message></h2> <section id="hardware-acceleration-section"> <h3><x-message href="#hardware-acceleration" autocapitalize></x-message></h3> <p><x-message href="#hardware-acceleration-hint"></x-message></p> <x-checkbox id="hardware-acceleration-checkbox" toggled> <x-label><x-message href="#hardware-acceleration"></x-message></x-label> </x-checkbox> </section> <hr> <section id="recent-files-section" hidden> <h3><x-message href="#recent-files" autocapitalize></x-message></h3> <p><x-message href="#recent-files-hint"></x-message></p> <x-select id="recent-files-select"> <x-menu id="recent-files-menu"> <x-menuitem value="5"><x-label>5</x-label></x-menuitem> <x-menuitem value="10"><x-label>10</x-label></x-menuitem> <x-menuitem value="15"><x-label>15</x-label></x-menuitem> <x-menuitem value="20"><x-label>20</x-label></x-menuitem> <x-menuitem value="20"><x-label>30</x-label></x-menuitem> <x-menuitem value="20"><x-label>50</x-label></x-menuitem> </x-menu> </x-select> </section> <hr> <section id="settings-section"> <h3><x-message id="settings-message" href="#settings" autocapitalize></x-message></h3> <x-box id="settings-buttons"> <x-button id="import-settings-button"> <x-label><x-message href="#import" ellipsis></x-message> </x-label></x-button> <x-button id="export-settings-button"> <x-label><x-message href="#export--verb" ellipsis></x-message></x-label> </x-button>  </x-box></section> </template>
  `;static [bY(0x78e)]=se`#hardware-acceleration-checkbox{margin-top:10px}#recent-files-select{width:100%}#settings-buttons{margin-top:14px}#settings-buttons x-button{flex:1}#settings-buttons x-button+x-button{margin-left:8px}`;constructor(){const eP=bY;super(),this['#hardware-acceleration-checkbox'][eP(0x1012)](eP(0x807),()=>this.#U()),this[eP(0x873)][eP(0x1012)](eP(0x63b),()=>this.#D()),this['#import-settings-button'][eP(0x1012)](eP(0xff9),()=>this.#z()),this[eP(0x338)]['addEventListener']('click',()=>this.#M());}['l'](){this.#A();}#U(){const eQ=bY;this['o']['hardwareAcceleration']=this[eQ(0x9b7)]['toggled'];}#D(){const eR=bY;let af=parseInt(this[eR(0x873)][eR(0xf0a)]);a2['setConfig'](eR(0x1d4),af),this['o']['clearExcessiveRecentFiles']&&this['o'][eR(0x1011)](af);}#z(){this['o']['importConfig']();}#M(){this['o']['exportConfig']();}async #A(){const eS=bY;let af=this['o'];if(eS(0x938)===af['localName']||eS(0x5f2)===af['localName']){let ag=await af['hardwareAcceleration'];this[eS(0xb90)]['hidden']=!0x1,this[eS(0x9b7)][eS(0x42a)]=ag;}else this[eS(0xb90)][eS(0x96e)]=!0x0;if(eS(0x901)===af[eS(0xa31)]||'bx-portalwebapp'===af[eS(0xa31)]){let ah=a2[eS(0x4a6)](eS(0x1d4),0x5);this['#recent-files-section'][eS(0x96e)]=!0x1,this['#recent-files-select']['value']=ah+'';}else this[eS(0xd33)][eS(0x96e)]=!0x0;this[eS(0x99b)]['href']=eS(0x5f2)===af[eS(0xa31)]?'#preferences':eS(0xf1b);}}customElements[bY(0x864)](bY(0x7f8),li);class ri extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#ui" autocapitalize></x-message></h2> <section id="locale-section"> <h3><x-message href="#language" autocapitalize></x-message></h3> <x-select id="locale-select"> <x-menu id="locale-select-menu"> <x-menuitem value="auto" toggled> <x-label id="auto-locale-label"></x-label> </x-menuitem> <hr id="locale-select-separator"> </x-menu> </x-select> </section> <hr> <section id="theme-section"> <h3><x-message href="#theme" autocapitalize></x-message></h3> <x-select id="theme-select"> <x-menu> <x-menuitem value="auto" toggled> <x-icon id="auto-theme-icon"></x-icon> <x-label id="auto-theme-label"></x-label> </x-menuitem> <hr id="theme-select-separator"> <x-menuitem value="fluent"> <x-icon href="#windows"></x-icon> <x-label>Windows</x-label> </x-menuitem> <x-menuitem value="cupertino"> <x-icon href="#macos"></x-icon> <x-label>macOS</x-label> </x-menuitem> <x-menuitem value="adwaita"> <x-icon href="#gnome"></x-icon> <x-label>GNOME</x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="colors-section"> <h3><x-message href="#colors" autocapitalize></x-message></h3> <section id="color-scheme-subsection"> <h4><x-message href="#color-scheme" autocapitalize></x-message></h4> <x-select id="color-scheme-select"> <x-menu id="color-scheme-menu"> <x-menuitem value="auto"> <x-label id="auto-color-scheme-label"></x-label> </x-menuitem> <hr> <x-menuitem value="light"> <x-label><x-message href="#color-scheme.light"></x-message></x-label> </x-menuitem> <x-menuitem value="dark"> <x-label><x-message href="#color-scheme.dark"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <section id="accent-color-subsection"> <h4><x-message href="#accent-color" autocapitalize></x-message></h4> <x-box id="accent-color-box"> <x-select id="accent-color-preset-select"> <x-menu id="accent-color-preset-menu"> <x-menuitem value="auto" toggled> <x-swatch id="auto-accent-color-preset-swatch"></x-swatch> <x-label id="auto-accent-color-preset-label"></x-label> </x-menuitem> <hr> <x-menuitem value="blue"> <x-swatch></x-swatch> <x-label><x-message href="#color.blue"></x-message></x-label> </x-menuitem> <x-menuitem value="purple"> <x-swatch></x-swatch> <x-label><x-message href="#color.purple"></x-message></x-label> </x-menuitem> <x-menuitem value="pink"> <x-swatch></x-swatch> <x-label><x-message href="#color.pink"></x-message></x-label> </x-menuitem> <x-menuitem value="red"> <x-swatch></x-swatch> <x-label><x-message href="#color.red"></x-message></x-label> </x-menuitem> <x-menuitem value="orange"> <x-swatch></x-swatch> <x-label><x-message href="#color.orange"></x-message></x-label> </x-menuitem> <x-menuitem value="yellow"> <x-swatch></x-swatch> <x-label><x-message href="#color.yellow"></x-message></x-label> </x-menuitem> <x-menuitem value="green"> <x-swatch></x-swatch> <x-label><x-message href="#color.green"></x-message></x-label> </x-menuitem> <x-menuitem value="graphite"> <x-swatch></x-swatch> <x-label><x-message href="#color.graphite"></x-message></x-label> </x-menuitem> <hr> <x-menuitem value="custom"> <x-icon href="#color-wheel"></x-icon> <x-label><x-message href="#color.custom"></x-message></x-label> </x-menuitem> </x-menu> </x-select> <x-colorselect id="accent-color-select" spaces="srgb"></x-colorselect> </x-box> </section> </section> <hr> <section id="size-section"> <h3><x-message href="#size" autocapitalize></x-message></h3> <x-box id="size-box"> <x-slider id="size-slider" value="100" min="50" max="150" step="1"></x-slider> <x-numberinput id="size-input" value="100" min="50" max="150" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <hr> <section id="menubar-section"> <h3><x-message href="#menubar" autocapitalize></x-message></h3> <x-checkbox id="show-install-button-checkbox"> <x-label><x-message href="#show-install-button"></x-message></x-label> </x-checkbox> </section> <hr> <section id="canvas-section"> <h3><x-message href="#canvas" autocapitalize></x-message></h3> <x-checkbox id="limit-scrollable-area-checkbox"> <x-label><x-message href="#limit-scrollable-area"></x-message></x-label> </x-checkbox> <x-checkbox id="show-view-outline-above-objects-checkbox"> <x-label><x-message href="#show-view-outline-above-objects"></x-message></x-label> </x-checkbox> </section> </template>
  `;static [bY(0x78e)]=se`#locale-select{width:100%}#theme-select{width:100%}#colors-section section{margin-top:10px}#accent-color-box{margin-top:4px}#accent-color-preset-select{flex:1}#accent-color-select{margin-left:6px}#color-scheme-select{width:100%}#size-input{width:80px;margin-left:12px}`;#B;#R;#I;#F;#N;#O;constructor(){const eT=bY;super(),this[eT(0x83c)][eT(0x1012)](eT(0x63b),()=>this.#_()),this[eT(0x1f1)][eT(0x1012)](eT(0x63b),()=>this.#q()),this[eT(0xd02)][eT(0x1012)](eT(0x63b),()=>this.#j()),this['#accent-color-preset-select'][eT(0x1012)](eT(0x63b),af=>this.#V(af)),this[eT(0x839)][eT(0x1012)]('changestart',af=>this.#G(af)),this['#size-box'][eT(0x1012)](eT(0x63b),af=>this.#H(af)),this[eT(0x21f)][eT(0x1012)]('changeend',af=>this.#W(af)),this[eT(0xca2)]['addEventListener'](eT(0x807),()=>{const eU=eT;a2[eU(0xea6)](eU(0xae6),this[eU(0xca2)][eU(0x42a)]);}),this[eT(0x100f)][eT(0x1012)](eT(0x807),()=>{const eV=eT;a2[eV(0xea6)](eV(0xe89),this['#limit-scrollable-area-checkbox'][eV(0x42a)]);}),this[eT(0xb79)][eT(0x1012)](eT(0x807),()=>{const eW=eT;a2[eW(0xea6)]('bx-uisettings:showViewOutlineAboveObjects',this['#show-view-outline-above-objects-checkbox'][eW(0x42a)]);});{let af='';for(let ag of He)af+=eT(0x9e9)+ag+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>'+Pe(ag)+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-menuitem>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';this[eT(0x1ff)]['insertAdjacentHTML'](eT(0x227),af);}{let ah=Ye(),aj=this[eT(0x1f1)][eT(0x344)](eT(0xca4)+ah+'\x22]');this[eT(0xb45)][eT(0xf85)](aj);}!0x1===le&&this[eT(0x1f1)]['querySelector'](eT(0xd84))[eT(0x102a)]();}async['l'](){const eX=bY;await a2['whenLocalesReady'],await a2[eX(0x771)],this.#A(),this.#B=window[eX(0xf2d)](eX(0xa62)),this['o'][eX(0x1012)](eX(0x646),this.#R=()=>this.#A()),this.#B['addEventListener']('change',this.#I=()=>this.#A()),a2[eX(0x1012)](eX(0x60c),this.#F=()=>this.#A()),a2[eX(0x1012)](eX(0x4ce),this.#N=()=>this.#A()),a2['addEventListener'](eX(0x900),this.#O=()=>this.#A());}['h'](){const eY=bY;this['o'][eY(0xee0)](eY(0x646),this.#R),this.#B['removeEventListener'](eY(0x63b),this.#I),a2[eY(0xee0)](eY(0x60c),this.#F),a2[eY(0xee0)](eY(0x4ce),this.#N),a2['removeEventListener'](eY(0x900),this.#O);}#_(){const eZ=bY;a2[eZ(0xea6)](eZ(0xbd5),this[eZ(0x83c)]['value']);}#q(){const f0=bY;a2[f0(0xea6)](f0(0xca1),this[f0(0x1f1)][f0(0xf0a)]);}#j(){const f1=bY;let af=this[f1(0xd02)][f1(0xf0a)];f1(0x938)===this['o'][f1(0xa31)]?this['o'][f1(0xd4c)](af):a2[f1(0xea6)](f1(0xa37),af),this.#A();}#V(){const f2=bY;f2(0x58a)===this[f2(0x85e)][f2(0xf0a)]?(a2['setConfig'](f2(0x39c),this[f2(0x839)]['value']),this[f2(0x839)][f2(0xff9)]()):f2(0x307)===this[f2(0x85e)]['value']?a2['setConfig'](f2(0x39c),f2(0x307)):a2['setConfig'](f2(0x39c),this['#accent-color-preset-select'][f2(0xf0a)]);}#G(){const f3=bY;let af,ag;this[f3(0x85e)][f3(0xf0a)]=f3(0x58a),this['#accent-color-select']['addEventListener'](f3(0x63b),af=et(()=>{const f4=f3;a2[f4(0xea6)](f4(0x39c),this['#accent-color-select'][f4(0xf0a)]);},0x96)),this[f3(0x839)]['addEventListener'](f3(0x718),ag=()=>{const f5=f3;this[f5(0x839)][f5(0xee0)](f5(0x63b),af),this[f5(0x839)][f5(0xee0)](f5(0x718),ag);});}#H(af){const f6=bY;af[f6(0x779)]===this[f6(0x52f)]?this[f6(0x1039)][f6(0xf0a)]=this[f6(0x52f)][f6(0xf0a)]:this['#size-slider']['value']=this[f6(0x1039)][f6(0xf0a)];}#W(af){const f7=bY;let ag=z(this[f7(0x52f)][f7(0xf0a)]/0x64,0x2);a2[f7(0xea6)](f7(0x90c),ag),bridge[f7(0x6ba)](f7(0x23c),ag),this.#A();}async #A(){const f8=bY;if(f8(0x938)===this['o'][f8(0xa31)]||f8(0x5f2)===this['o'][f8(0xa31)])this[f8(0x919)][f8(0x96e)]=!0x0;else{if(f8(0xd1b)===this['o'][f8(0xa31)])this[f8(0x919)][f8(0x96e)]=!0x0;else{let af=a2['getConfig'](f8(0xbd5),f8(0x307)),ag=Ze();f8(0x307)!==af&&!0x1===He[f8(0x1d5)](af)&&(af='en'),this['#auto-locale-label'][f8(0x8c2)]=f8(0xa97)+Pe(ag)+')',this[f8(0x83c)][f8(0xf0a)]=af;}}if(f8(0x938)===this['o'][f8(0xa31)])this[f8(0x7e2)][f8(0x96e)]=!0x0;else{if(f8(0x5f2)===this['o'][f8(0xa31)])this[f8(0x7e2)]['hidden']=!0x0;else{if(f8(0xd1b)===this['o']['localName'])this[f8(0x7e2)]['hidden']=!0x0;else{let ah=a2['getConfig'](f8(0xca1),f8(0x307)),aj=Ye(),ak=this[f8(0x1f1)][f8(0x344)](f8(0xca4)+aj+'\x22]'),al=ak[f8(0x344)](f8(0xcd0))[f8(0xad6)];f8(0x42c)===ah&&!0x1===le&&(ah='auto'),this[f8(0x8f9)][f8(0xad6)]=f8(0x752)+al+')',this[f8(0xdaf)][f8(0xbd9)]=ak[f8(0x344)]('x-icon')['href'],this[f8(0x1f1)]['value']=ah;}}}if(f8(0xd1b)===this['o'][f8(0xa31)])this[f8(0xda9)][f8(0x96e)]=!0x0;else{if(f8(0x938)===this['o'][f8(0xa31)]){let am=await this['o'][f8(0x484)]();if(f8(0x307)===am){let an=await this['o']['getColorScheme'](!0x0);this[f8(0x4d6)][f8(0x8c2)]=f8(0x603)+an+'\x22></x-message>)';}else this[f8(0x4d6)]['innerHTML']='<x-message\x20href=\x22#color-scheme.auto\x22></x-message>';this[f8(0xd02)]['value']=am;}else{if(f8(0x5f2)===this['o'][f8(0xa31)]){let ap=a2[f8(0x4a6)]('bx-uisettings:colorScheme',f8(0xdd3));this[f8(0xb7d)][f8(0x573)][0x0]['hidden']=!0x0,this[f8(0xb7d)][f8(0x573)][0x1][f8(0x96e)]=!0x0,this[f8(0xd02)][f8(0xf0a)]=ap;}else{let aq=a2[f8(0x4a6)]('bx-uisettings:colorScheme',f8(0x307)),ar=window['matchMedia'](f8(0xa62))[f8(0xee6)]?f8(0xbbf):f8(0xdd3);this['#auto-color-scheme-label']['innerHTML']=f8(0x603)+ar+f8(0xf71),this[f8(0xd02)][f8(0xf0a)]=aq;}}{let {presetAccentColors:au}=a2;for(let av of[...this[f8(0xcb6)][f8(0x44e)](f8(0x1043))]){let aw=av[f8(0x659)];av['value']=au[aw['value']];}if(f8(0x938)===this['o']['localName'])this[f8(0xca6)][f8(0x96e)]=!0x0;else{if(f8(0x5f2)===this['o'][f8(0xa31)]){let ax=a2['getConfig']('bx-uisettings:accentColor',f8(0xddc)),ay=!!au[ax];this[f8(0xcb6)][f8(0x573)][0x0][f8(0x96e)]=!0x0,this[f8(0xcb6)][f8(0x573)][0x1][f8(0x96e)]=!0x0,this['#accent-color-preset-select']['value']=ay?ax:f8(0x58a),this[f8(0x839)][f8(0xf0a)]=ay?au[ax]:ax;}else{let az=a2[f8(0x4a6)](f8(0x39c),f8(0x307)),aA=this['o'][f8(0xf5f)](),aB=au[aA];if(this[f8(0xc88)]['innerHTML']=f8(0x7b1)+aA+f8(0xf71),this['#auto-accent-color-preset-swatch'][f8(0xf0a)]=aB,f8(0x307)===az)this[f8(0x85e)][f8(0xf0a)]=f8(0x307),this['#accent-color-select']['value']=aB;else{let aC=!!au[az];this[f8(0x85e)][f8(0xf0a)]=aC?az:'custom',this[f8(0x839)][f8(0xf0a)]=aC?au[az]:az;}}}}}if(f8(0x938)===this['o'][f8(0xa31)]||f8(0x5f2)===this['o'][f8(0xa31)]){let aD=a2[f8(0x4a6)]('bx-uisettings:size',f8(0x307));'auto'===aD&&(aD=window[f8(0xf2d)](f8(0x81f))['matches']?1.2:window['matchMedia']('(min-device-width:\x201025px)')[f8(0xee6)]?0x1:1.2),this[f8(0x1ee)][f8(0x96e)]=!0x1,this[f8(0x52f)][f8(0xf0a)]=z(0x64*aD,0x0),this['#size-input'][f8(0xf0a)]=z(0x64*aD,0x0);}else this[f8(0x1ee)]['hidden']=!0x0;'bx-macapp'===this['o'][f8(0xa31)]||f8(0x5f2)===this['o'][f8(0xa31)]||f8(0xd1b)===this['o'][f8(0xa31)]?this[f8(0xc0f)][f8(0x96e)]=!0x0:'bx-progressivewebapp'!==this['o'][f8(0xa31)]&&'bx-portalwebapp'!==this['o'][f8(0xa31)]||(this['#show-install-button-checkbox'][f8(0x96e)]=!0x0===this['o']['isInstalled'],this['#show-install-button-checkbox'][f8(0x42a)]=a2[f8(0x4a6)]('bx-uisettings:showInstallButton',!0x0),this[f8(0xc0f)][f8(0x96e)]=this[f8(0xca2)][f8(0x96e)]);{let aE=a2[f8(0x4a6)](f8(0xe89),!0x1),aF=a2[f8(0x4a6)]('bx-uisettings:showViewOutlineAboveObjects',!0x1);this['#limit-scrollable-area-checkbox'][f8(0x42a)]=aE,this['#show-view-outline-above-objects-checkbox'][f8(0x42a)]=aF;}}}customElements[bY(0x864)](bY(0x2ed),ri);class hi extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#markup"></x-message></h2> <section id="geometry-precision-section"> <h3><x-message href="#geometry-precision"></x-message></h3> <p><x-message href="#geometry-precision-hint"></x-message></p> <x-slider id="geometry-precision-slider" value="3" min="0" max="6" step="1"> <x-label value="0">0</x-label> <x-label value="1">1</x-label> <x-label value="2">2</x-label> <x-label value="3">3</x-label> <x-label value="4">4</x-label> <x-label value="5">5</x-label> <x-label value="6">6</x-label> </x-slider> </section> <hr> <section id="transform-precision-section"> <h3><x-message href="#transform-precision"></x-message></h3> <p><x-message href="#transform-precision-hint"></x-message></p> <x-slider id="transform-precision-slider" value="6" min="5" max="12" step="1"> <x-label value="5">5</x-label> <x-label value="6">6</x-label> <x-label value="7">7</x-label> <x-label value="8">8</x-label> <x-label value="9">9</x-label> <x-label value="10">10</x-label> <x-label value="11">11</x-label> <x-label value="12">12</x-label> </x-slider> </section> <hr> <section id="indentation-section"> <h3><x-message href="#indentation"></x-message></h3> <p><x-message href="#indentation-hint"></x-message></p> <x-slider id="indentation-slider" value="2" min="0" max="8" step="1"> <x-label value="0">0</x-label> <x-label value="1">1</x-label> <x-label value="2">2</x-label> <x-label value="3">3</x-label> <x-label value="4">4</x-label> <x-label value="5">5</x-label> <x-label value="6">6</x-label> <x-label value="7">7</x-label> <x-label value="8">8</x-label> </x-slider> </section> <hr> <section id="foreign-objects-section"> <h3><x-message href="#foreign-objects"></x-message></h3> <p><x-message href="#foreign-objects-hint"></x-message></p> <x-radios id="foreign-objects-radios"> <x-radio value="preserve"> <x-label><x-message href="#preserve"></x-message></x-label> </x-radio> <x-radio value="remove"> <x-label><x-message href="#remove"></x-message></x-label> </x-radio> <x-radio value="sanitize"> <x-label><x-message href="#sanitize"></x-message></x-label> </x-radio> </x-radios> </section> <hr> <section id="foreign-metadata-section"> <h3><x-message href="#foreign-metadata"></x-message></h3> <p><x-message href="#foreign-metadata-hint"></x-message></p> <x-radios id="foreign-metadata-radios"> <x-radio value="preserve"> <x-label><x-message href="#preserve"></x-message></x-label> </x-radio> <x-radio value="remove"> <x-label><x-message href="#remove"></x-message></x-label> </x-radio> </x-radios> </section> </template>
  `;static [bY(0x78e)]=se`#foreign-objects-radios{display:block;margin-top:10px}#foreign-metadata-radios{display:block;margin-top:10px}`;constructor(){const f9=bY;super(),this[f9(0xc79)][f9(0x1012)](f9(0x718),()=>{const fb=f9;a2[fb(0xea6)](fb(0xd7b),this[fb(0xc79)][fb(0xf0a)]);}),this[f9(0x942)][f9(0x1012)](f9(0x718),()=>{const fc=f9;a2[fc(0xea6)]('bx-markupsettings:transformPrecision',this['#transform-precision-slider'][fc(0xf0a)]);}),this[f9(0x105b)][f9(0x1012)](f9(0x718),()=>{const fd=f9;a2['setConfig'](fd(0x6d1),this[fd(0x105b)]['value']);}),this[f9(0x252)][f9(0x1012)](f9(0x807),()=>{const ff=f9;a2[ff(0xea6)](ff(0x43b),this[ff(0x252)][ff(0xf0a)]);}),this[f9(0x75b)][f9(0x1012)](f9(0x807),()=>{const fg=f9;a2[fg(0xea6)](fg(0x4e0),this[fg(0x75b)]['value']);});}['l'](){this.#A();}#A(){const fh=bY;let af=a2[fh(0x4a6)](fh(0xd7b),0x3),ag=a2[fh(0x4a6)](fh(0x7f3),0x6),ah=a2[fh(0x4a6)](fh(0x6d1),0x2),aj=a2[fh(0x4a6)]('bx-markupsettings:foreignObjects',fh(0x65e)),ak=a2[fh(0x4a6)](fh(0x4e0),fh(0x102a));this[fh(0xc79)][fh(0xf0a)]=af,this[fh(0x942)][fh(0xf0a)]=ag,this[fh(0x105b)][fh(0xf0a)]=ah,this[fh(0x252)][fh(0xf0a)]=aj,this['#foreign-metadata-radios'][fh(0xf0a)]=ak;}}customElements['define'](bY(0x5b1),hi);let ci={'colors':'unpinned','gradients':bY(0x1051),'patterns':bY(0x1051),'markers':bY(0x1051),'symbols':bY(0xcf1),'filters':bY(0x1051),'fonts':bY(0x1051),'clipPaths':bY(0x1051),'masks':bY(0x1051)};class di extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#garbage-collector" autocapitalize></x-message></h2> <section id="defs-section"> <h3 id="intro"><x-message href="#auto-remove-unused-defs" autocapitalize></x-message></h3> <x-box> <x-icon href="#defs-colors"></x-icon> <x-label><x-message href="#colors"></x-message></x-label> <x-buttons id="colors-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> <x-box> <x-icon href="#defs-gradients"></x-icon> <x-label><x-message href="#gradients"></x-message></x-label> <x-buttons id="gradients-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> <x-box> <x-icon href="#defs-patterns"></x-icon> <x-label><x-message href="#patterns"></x-message></x-label> <x-buttons id="patterns-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> <x-box> <x-icon href="#defs-markers"></x-icon> <x-label><x-message href="#markers"></x-message></x-label> <x-buttons id="markers-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> <x-box> <x-icon href="#defs-symbols"></x-icon> <x-label><x-message href="#symbols"></x-message></x-label> <x-buttons id="symbols-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> <x-box> <x-icon href="#defs-filters"></x-icon> <x-label><x-message href="#filters"></x-message></x-label> <x-buttons id="filters-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> <x-box> <x-icon href="#defs-fonts"></x-icon> <x-label><x-message href="#fonts"></x-message></x-label> <x-buttons id="fonts-buttons" tracking="1"> <x-button value="unpinned"> <x-label><x-message href="#auto-remove-unused-defs.unpinned"></x-message></x-label> </x-button> <x-button value="all"> <x-label><x-message href="#auto-remove-unused-defs.all"></x-message></x-label> </x-button> <x-button value="none"> <x-label><x-message href="#auto-remove-unused-defs.none"></x-message></x-label> </x-button> </x-buttons> </x-box> </section> </template>
  `;static [bY(0x78e)]=se`#defs-section x-box>x-icon{width:26px;height:26px;overflow:visible}#defs-section x-box>x-icon[size=small]{width:22px;height:22px}#defs-section x-box>x-icon[size=large]{width:30px;height:30px}#defs-section x-box>x-label{width:90px;margin-left:8px}#defs-section x-box+x-box{margin-top:10px}#defs-section x-buttons{flex:1}#defs-section x-buttons>x-button{flex:1}`;constructor(){const fj=bY;super(),this[fj(0x5de)]['addEventListener']('toggle',af=>{this.#K(af);});}['l'](){this.#A();}#K(af){const fk=bY;a2['setConfig']('bx-garbagecollectorsettings:collectOptions',{'colors':this[fk(0x286)]['value'],'gradients':this['#gradients-buttons'][fk(0xf0a)],'patterns':this['#patterns-buttons']['value'],'markers':this[fk(0x9f8)]['value'],'symbols':this[fk(0x662)]['value'],'filters':this['#filters-buttons'][fk(0xf0a)],'fonts':this[fk(0x7f2)][fk(0xf0a)]});}#A(){const fl=bY;let af=a2[fl(0x4a6)](fl(0xdd0),ci);this[fl(0x286)]['value']=af['colors'],this['#gradients-buttons'][fl(0xf0a)]=af['gradients'],this['#patterns-buttons']['value']=af[fl(0xc0a)],this[fl(0x9f8)]['value']=af[fl(0x1006)],this[fl(0x662)]['value']=af[fl(0x7ea)],this[fl(0xd4a)]['value']=af[fl(0x9b5)],this[fl(0x7f2)][fl(0xf0a)]=af['fonts'];}}customElements[bY(0x864)](bY(0x300),di);class ui{#Z=!0x1;#Y=!0x1;#X=!0x1;#J=!0x1;#Q=null;constructor(...af){const fm=bY;for(let ag of af)'Control'===ag?this[fm(0x875)]=!0x0:fm(0xcbb)===ag?this[fm(0xef1)]=!0x0:fm(0x10b9)===ag?this[fm(0x29f)]=!0x0:fm(0x255)===ag?this[fm(0xdd8)]=!0x0:this[fm(0xe52)]=ag;}static[bY(0xbbe)](af){const fn=bY;let ag=new ui();if(ag[fn(0x875)]=le?af[fn(0xbc2)]:af[fn(0x558)],ag[fn(0xef1)]=af['altKey'],ag[fn(0x29f)]=af[fn(0x989)],ag['meta']=le?af[fn(0x558)]:af['metaKey'],ag[fn(0xe52)]=null,af instanceof KeyboardEvent){let ah=af['key'];'\x20'===ah&&(ah='Space'),ah&&fn(0xb84)!==ah&&fn(0xcbb)!==ah&&'Shift'!==ah&&fn(0x255)!==ah&&(0x1===ah['length']?ag[fn(0xe52)]=ah['toUpperCase']():ag[fn(0xe52)]=ah);}return ag;}static[bY(0x5fa)](af){const fp=bY;let ag=new ui();return ag['ctrl']=af[fp(0x511)][fp(0x1d5)](fp(0xb84)),ag[fp(0xef1)]=af[fp(0x511)][fp(0x1d5)]('Alt'),ag[fp(0x29f)]=af['modKeys'][fp(0x1d5)](fp(0x10b9)),ag['meta']=af[fp(0x511)][fp(0x1d5)](fp(0x255)),ag[fp(0xe52)]=af[fp(0xc82)],ag;}static[bY(0xf27)](af){const fq=bY;return new ui(...af[fq(0xc97)]('+')[fq(0xe7a)](ag=>''!==ag));}get['ctrl'](){return this.#Z;}set[bY(0x875)](af){this.#Z=af;}get[bY(0xef1)](){return this.#Y;}set[bY(0xef1)](af){this.#Y=af;}get[bY(0x29f)](){return this.#X;}set[bY(0x29f)](af){this.#X=af;}get[bY(0xdd8)](){return this.#J;}set[bY(0xdd8)](af){this.#J=af;}get['key'](){return this.#Q;}set[bY(0xe52)](af){this.#Q=af;}[bY(0xee6)](...af){const fr=bY;let ag=!0x1,ah=!0x1,aj=!0x1,ak=!0x1,al=null;for(let am of af)fr(0xb84)===am?ag=!0x0:fr(0xcbb)===am?ah=!0x0:fr(0x10b9)===am?aj=!0x0:fr(0x255)===am?ak=!0x0:al=am;return ag===this['ctrl']&&ah===this[fr(0xef1)]&&ak===this['meta']&&aj===this[fr(0x29f)]&&al===this[fr(0xe52)];}[bY(0x1d5)](af){const fu=bY;return fu(0xb84)===af?this['ctrl']:fu(0xcbb)===af?this[fu(0xef1)]:fu(0x10b9)===af?this[fu(0x29f)]:fu(0x255)===af?this[fu(0xdd8)]:this[fu(0xe52)]===af;}[bY(0xe69)](af){const fv=bY;return this[fv(0x875)]===af[fv(0x875)]&&this['alt']===af[fv(0xef1)]&&this[fv(0x29f)]===af[fv(0x29f)]&&this[fv(0xdd8)]===af['meta']&&this[fv(0xe52)]===af['key'];}[bY(0xbec)](){const fw=bY;return!0x1===this['ctrl']&&!0x1===this[fw(0xef1)]&&!0x1===this[fw(0x29f)]&&!0x1===this[fw(0xdd8)]&&null===this[fw(0xe52)];}[bY(0xade)](){const fx=bY;let af='';if(le){this['meta']&&(af+='^'),this[fx(0xef1)]&&(af+='⌥'),this['shift']&&(af+='⇧'),this[fx(0x875)]&&(af+='⌘');let ag={'ArrowUp':'↑','ArrowDown':'↓','ArrowLeft':'←','ArrowRight':'→','Backspace':'⌦','Tab':'⇥'};null!==this[fx(0xe52)]&&(af+=ag[this['key']]||this[fx(0xe52)]);}else{let ah=[];this[fx(0x875)]&&ah[fx(0xc68)](fx(0xbc8)),this['alt']&&ah[fx(0xc68)]('Alt'),this[fx(0x29f)]&&ah[fx(0xc68)]('Shift'),this[fx(0xdd8)]&&ah[fx(0xc68)](fx(0x255));let aj={'ArrowUp':'Up','ArrowDown':'Down','ArrowLeft':fx(0x73c),'ArrowRight':fx(0x2a1)};null!==this['key']&&ah[fx(0xc68)](aj[this[fx(0xe52)]]||this[fx(0xe52)]),af=ah[fx(0xf5e)]('+');}return af;}[bY(0xf2b)](){const fy=bY;return this[fy(0xd23)]();}[bY(0x107a)](){const fz=bY;let af=ei(fz(0xa9b)),ag=[];return this[fz(0x875)]&&ag[fz(0xc68)]('Control'),this[fz(0xef1)]&&ag['push']('Alt'),this['shift']&&ag[fz(0xc68)](fz(0x10b9)),this[fz(0xdd8)]&&ag['push'](fz(0x255)),null!==this[fz(0xe52)]&&ag[fz(0xc68)](key),af['value']=ag,af;}[bY(0xd23)](){const fA=bY;let af=[];return this['ctrl']&&af[fA(0xc68)](fA(0xb84)),this[fA(0xef1)]&&af['push'](fA(0xcbb)),this[fA(0x29f)]&&af[fA(0xc68)](fA(0x10b9)),this[fA(0xdd8)]&&af[fA(0xc68)](fA(0x255)),null!==this[fA(0xe52)]&&af[fA(0xc68)](this[fA(0xe52)]),af[fA(0xf5e)]('+');}}let pi=Symbol(),mi=[bY(0xfe7),bY(0x35e),bY(0x705),'ArrowRight',bY(0x30a),bY(0x1088),'Shift+ArrowLeft',bY(0x477),bY(0xb2a),bY(0xe73),bY(0xab8)];class xi extends HTMLElement{static #C=ie` <template> <header id="header" part="header"> <div><x-message href="#command"></x-message></div> <div><x-message href="#shortcut"></x-message></div> </header> <main id="items" tabindex="0"></main> <footer id="footer" part="footer"> <x-box> <x-input id="filter-input" placeholder="Filter symbols"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search"></x-message></x-label> </x-input> <x-buttons id="filter-buttons" tracking="1"> <x-button skin="recessed" value="all" toggled> <x-label><x-message href="#shortcuts.all"></x-message></x-label> </x-button> <x-button skin="recessed" value="custom"> <x-label><x-message href="#shortcuts.custom"></x-message></x-label> </x-button> <x-button skin="recessed" value="conflicting"> <x-label><x-message href="#shortcuts.conflicting"></x-message> <span id="conflicting-items-counter"></span></x-label> </x-button> </x-buttons> </x-box> </footer> </template>
  `;static #S=se`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      border-width: 1px;
      border-style: solid;
      outline: none;
      flex-flow: column;
      flex: 1;
      height: 100%;
    }

    /* Header */

    #header {
      display: flex;
      align-items: center;
      min-height: 30px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      font-size: 14px;
      font-weight: 500;
    }
    #header div:first-child {
      min-width: 50%;
      margin-left: 10px;
    }
    #header div:last-child {
      margin-left: 5px;
    }

    /* Items */

    #items {
      overflow: auto;
      height: 100%;
      outline: none;
    }

    .item {
      display: flex;
      width: 100%;
      height: 30px;
      align-items: center;
      font-size: 13px;
      user-select: none;
      -webkit-user-select: none;
      box-sizing: border-box;
      border: 2px solid transparent;
      color: var(--text-color);
    }
    .item[data-conflicting] {
      color: var(--error-color);
    }
    .item[data-selected] {
      background: var(--accent-color);
      color: white;
    }
    .item[data-selected][data-conflicting] {
      background: var(--error-color);
    }
    .item[data-user-shortcut] {
      font-weight: 900;
    }
    .item[hidden] {
      display: none;
    }

    .item .command-label {
      min-width: 50%;
      padding: 8px 10px;
      white-space: pre;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item .shortcut-label {
      width: 100%;
    }
    .item[data-editable] .shortcut-label {
      padding: 2px 8px;
      margin-right: 4px;
      background: white;
      color: var(--dark-accent-color);
      font-size: 12px;
      line-height: 1;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }
    .item[data-editable][data-conflicting] .shortcut-label {
      color: var(--error-color);
    }

    .item .reset-button {
      margin: 0 4px;
      padding: 3px 7px;
      min-width: fit-content;
    }
    .item[data-editable] .reset-button {
      display: none;
    }

    /* Footer */

    #footer {
      width: 100%;
      padding: 7px;
      box-sizing: border-box;
      border-top-width: 1px;
      border-top-style: solid;
    }

    #footer #filter-input {
      width: 100%;
      max-width: none;
    }

    #footer #filter-buttons {
      margin-left: 10px;
    }
  `;get[bY(0xf0a)](){return this.#ee;}set[bY(0xf0a)](af){this.#ee=af,!0x0===this.#te&&this.#A();}#ee={};#te=!0x1;#T;#P;constructor(){const fB=bY;super(),this.#P=this['attachShadow']({'mode':fB(0xc5d)}),this.#P[fB(0x48f)]=[a2[fB(0x500)],xi.#S],this.#P[fB(0x775)](document['importNode'](xi.#C[fB(0x223)],!0x0));for(let af of this.#P[fB(0x44e)](fB(0x6e3)))this['#'+af['id']]=af;this.#P[fB(0x1012)](fB(0x57f),ag=>this.#ie(ag)),this['#items'][fB(0x1012)](fB(0x842),()=>this.#se()),this[fB(0xa35)]['addEventListener']('click',ag=>this.#ae(ag)),this['#items'][fB(0x1012)]('scroll',()=>this.#oe()),this[fB(0x1075)][fB(0x1012)](fB(0x84e),()=>this.#ne()),this['#filter-buttons'][fB(0x1012)]('toggle',()=>this.#le()),this[fB(0xa38)]['addEventListener'](fB(0xff9),()=>this['#items'][fB(0x72c)]());}[bY(0x854)](){const fC=bY;this.#T=si(this,fC(0xf55)),this.#te=!0x0,this.#A();}#se(){const fD=bY;let af=this[fD(0xa35)][fD(0x344)](fD(0x490));af&&(af[fD(0x88e)]('data-editable'),this.#re(af));}#ae(af){const fE=bY;let ag=af[fE(0x779)][fE(0xc06)](fE(0x1042)),ah=af['target'][fE(0xc06)](fE(0xe31));if(ag)this.#he(af);else{if(ah)this.#ce(af);else{for(let aj of this[fE(0xa35)][fE(0x573)])aj[fE(0xfd9)](fE(0x568))&&(aj[fE(0x88e)](fE(0x568)),this.#re(aj));}}}#ce(af){const fF=bY;let ag=af[fF(0x779)]['closest'](fF(0xe31));if(0x2===af[fF(0xdd7)])!0x1===ag[fF(0xfd9)](fF(0x568))&&(ag[fF(0xa0a)](fF(0x568),''),this.#re(ag));else{for(let ah of this[fF(0xa35)][fF(0x573)])ah===ag?ah[fF(0xa0a)](fF(0x2a6),''):ah[fF(0x88e)](fF(0x2a6)),ah[fF(0xfd9)](fF(0x568))&&(ah[fF(0x88e)]('data-editable'),this.#re(ah));}}#oe(){}#he(af){const fG=bY;let ag=af[fG(0x779)][fG(0xc06)]('.reset-button')[fG(0xc06)](fG(0xe31)),{commandID:ah}=ag[pi];delete this.#ee[ah],this[fG(0x10bf)](new CustomEvent('change')),this.#re(ag),this.#de();}#le(){const fH=bY;this[fH(0x1075)]['value']='',this.#ne();}#ie(af){const fI=bY;let ag=ui['fromEvent'](af);if(af[fI(0x779)]===this[fI(0xa35)]){let ah=this[fI(0xa35)]['querySelector'](fI(0x490));if(ah){if(af['preventDefault'](),af[fI(0xc67)](),ag[fI(0xee6)](fI(0x10b7))||ag[fI(0xee6)]('Delete')||ag['matches']('Escape')||ag[fI(0xee6)](fI(0xab8))||ag['matches']('Space'))ah[fI(0x88e)](fI(0x568)),this.#re(ah);else{if(ag[fI(0xe52)]&&!0x1===mi[fI(0x1d5)](ag[fI(0xd23)]())){let {commandID:aj,defaultShortcut:ak}=ah[pi],al=this.#ee[aj]||null;al&&ag['toString']()===al?(ah[fI(0x88e)]('data-editable'),this.#re(ah)):ak&&ag['toString']()===ak?(delete this.#ee[aj],this[fI(0x10bf)](new CustomEvent(fI(0x63b))),ah[fI(0x88e)](fI(0x568)),this.#re(ah),this.#de()):(this.#ee[aj]=ag[fI(0xd23)](),this[fI(0x10bf)](new CustomEvent(fI(0x63b))),ah[fI(0x88e)](fI(0x568)),this.#re(ah),this.#de());}}}else{if(ag['matches'](fI(0xfe7)))af[fI(0x539)](),this.#ue();else{if(ag[fI(0xee6)]('ArrowDown'))af['preventDefault'](),this.#pe();else{if(ag['matches'](fI(0xab8))){af[fI(0x539)]();let am=this[fI(0xa35)]['querySelector']('.item[data-selected]:not([hidden])');am[fI(0xa0a)](fI(0x568),''),this.#re(am);}else{if(ag[fI(0xee6)]('Backspace')||ag[fI(0xee6)](fI(0x5d7))){let an=this[fI(0xa35)][fI(0x344)](fI(0x71c)),{commandID:ap,defaultShortcut:aq}=an[pi];void 0x0!==this.#ee[ap]?(af[fI(0x539)](),delete this.#ee[ap],this[fI(0x10bf)](new CustomEvent(fI(0x63b))),this.#re(an),this.#de()):null!==aq&&(af[fI(0x539)](),this.#ee[ap]=null,this['dispatchEvent'](new CustomEvent(fI(0x63b))),this.#re(an),this.#de());}}}}}}}#me(af){let ag=ie`${'\x0a\x20\x20<div\x20class=\x22item\x22\x20part=\x22item\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22command-label\x22></div>\x0a\x20\x20\x20\x20<div\x20class=\x22shortcut-label\x22></div>\x0a\x0a\x20\x20\x20\x20<x-button\x20class=\x22button\x20reset-button\x22\x20skin=\x22recessed\x22\x20toggled\x20condensed>\x0a\x20\x20\x20\x20\x20\x20<x-label><x-message\x20href=\x22#reset\x22></x-message></x-label>\x0a\x20\x20\x20\x20</x-button>\x0a\x20\x20</div>\x0a'}`;return ag[pi]=af,this.#re(ag),ag;}#ue(){const fJ=bY;let af=[...this[fJ(0xa35)][fJ(0x44e)](fJ(0x528))],ag=this[fJ(0xa35)][fJ(0x344)](fJ(0x71c)),ah=ag?af[fJ(0xc56)](ag):-0x1,aj=af[ah-0x1];if(aj){aj[fJ(0x467)]();for(let ak of this['#items'][fJ(0x573)])ak===aj?ak[fJ(0xa0a)]('data-selected',''):ak[fJ(0x88e)](fJ(0x2a6));}}#pe(){const fK=bY;let af=[...this[fK(0xa35)][fK(0x44e)](fK(0x528))],ag=this['#items'][fK(0x344)](fK(0x71c)),ah=ag?af[fK(0xc56)](ag):-0x1,aj=af[ah+0x1];if(aj){aj[fK(0x467)]();for(let ak of this[fK(0xa35)][fK(0x573)])ak===aj?ak['setAttribute'](fK(0x2a6),''):ak['removeAttribute'](fK(0x2a6));}}async #A(){const fL=bY;if(0x0===this[fL(0xa35)][fL(0x7ac)]){let af=await this.#T[fL(0xcc9)]();this[fL(0xa35)]['innerHTML']='';for(let ag of af){let ah=this.#me(ag);this['#items']['append'](ah);}}else{for(let aj of this[fL(0xa35)][fL(0x573)])this.#re(aj);}this.#de();}#re(af){const fM=bY;let {commandID:ag,label:ah,defaultShortcut:aj}=af[pi],ak=this.#ee[ag];ak||null===ak?af[fM(0xa0a)](fM(0x93b),''):af['removeAttribute'](fM(0x93b)),af[fM(0x344)](fM(0x2b8))['innerHTML']=ah;{let al=af[fM(0x344)](fM(0xe34));af[fM(0xfd9)]('data-editable')?al[fM(0x8c2)]=fM(0xa34):ak?al[fM(0xad6)]=ui[fM(0xf27)](ak)['toDisplayString']():null===ak?al[fM(0xad6)]='':void 0x0===ak&&(al[fM(0xad6)]=aj?ui[fM(0xf27)](aj)['toDisplayString']():'');}af[fM(0x344)]('.reset-button')[fM(0x96e)]=void 0x0===ak;}#de(){const fN=bY;let af=0x0;for(let ag of this[fN(0xa35)][fN(0x573)]){let {commandID:ah,defaultShortcut:aj}=ag[pi],ak=this.#ee[ah]||aj,al=!0x1;if(ak){for(let am of this[fN(0xa35)][fN(0x573)])if(am!==ag){let an=this.#ee[am[pi][fN(0x4fc)]]||am[pi][fN(0x520)];if(an&&an===ak){al=!0x0;break;}}}al?(ag[fN(0xa0a)]('data-conflicting',''),af+=0x1):ag[fN(0x88e)](fN(0xb74));}this[fN(0x4b2)][fN(0xad6)]=af>0x0?'('+af+')':'';}#ne(){const fO=bY;let af=this[fO(0x1075)][fO(0xf0a)][fO(0x963)]()[fO(0x10b1)]();for(let ag of this[fO(0xa35)]['querySelectorAll'](fO(0x2b8))){let ah=ag[fO(0xc06)](fO(0xe31)),aj=!0x1;if(af[fO(0x6dc)]>0x0)aj=-0x1===ag[fO(0xad6)][fO(0x963)]()[fO(0x10b1)]()[fO(0xc56)](af);else aj=!0x1;aj||(fO(0x58a)===this[fO(0xa38)][fO(0xf0a)]?!0x1===ah[fO(0xfd9)](fO(0x93b))&&(aj=!0x0):fO(0x1069)===this[fO(0xa38)][fO(0xf0a)]&&!0x1===ah['hasAttribute']('data-conflicting')&&(aj=!0x0)),ah[fO(0x96e)]=aj;}}}void 0x0===customElements[bY(0x10bd)](bY(0xaff))&&customElements[bY(0x864)](bY(0xaff),xi);class gi extends ni{static ['_shadowTemplate']=ie` <template> <main id="main"> <h2><x-message href="#keyboard" autocapitalize></x-message></h2> <x-tabs id="tabs" centered> <x-tab value="shortcuts" selected="selected"> <x-label><x-message href="#shortcuts" autocapitalize></x-message></x-label> </x-tab> <x-tab value="modifiers"> <x-label><x-message href="#modifier-keys" autocapitalize></x-message></x-label> </x-tab> </x-tabs> <div id="views"> <div id="shortcuts-view" class="view"> <bx-shortcutseditor id="shortcuts-editor"></bx-shortcutseditor> </div> <div id="modifiers-view" class="view" hidden> <section id="space-modifier-section"> <h3><x-message href="#space-key" autocapitalize></x-message></h3> <x-radios id="space-modifier-radios"> <x-radio value="togglePreviousTool" toggled> <x-label><x-message href="#space-key.toggles-previous-tool"></x-message></x-label> </x-radio> <x-radio value="pan"> <x-label><x-message href="#space-key.pans-the-canvas"></x-message></x-label> </x-radio> </x-radios> </section> </div> </div> </main> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:100%;height:100%;outline:0}#main{display:flex;flex-flow:column;height:100%}#tabs{width:100%}#tabs>x-tab{flex:1}#views{display:flex;flex-flow:column;flex:1;height:100%;min-height:0;margin-top:16px}#views .view{width:100%;height:100%}`;constructor(){const fP=bY;super(),this[fP(0x10a0)][fP(0x1012)]('change',()=>this.#xe()),this[fP(0xd9d)][fP(0x1012)](fP(0x63b),()=>this.#ge()),this['#space-modifier-radios'][fP(0x1012)](fP(0x807),()=>this.#be());}['l'](){const fQ=bY;let af=a2[fQ(0x4a6)](fQ(0xb3b),{}),ag=a2[fQ(0x4a6)](fQ(0xbb3),fQ(0xe61));this[fQ(0xd9d)][fQ(0xf0a)]=af,this[fQ(0xd28)][fQ(0xf0a)]=ag;}#xe(){const fR=bY;this[fR(0xae7)][fR(0x96e)]='shortcuts'!==this[fR(0x10a0)][fR(0xf0a)],this['#modifiers-view'][fR(0x96e)]=fR(0x4a2)!==this[fR(0x10a0)][fR(0xf0a)];}#ge(){const fS=bY;a2['setConfig'](fS(0xb3b),this[fS(0xd9d)][fS(0xf0a)]);}#be(){const fT=bY;a2[fT(0xea6)](fT(0xbb3),this[fT(0xd28)][fT(0xf0a)]);}}customElements[bY(0x864)](bY(0x621),gi);let bi=af=>void 0x0!==af[bY(0x3cb)]?af[bY(0x65b)]+'\x20('+af[bY(0xce8)]+'\x20'+af[bY(0x3cb)]+')':af[bY(0x65b)]+'\x20('+af['name']+')',fi=0x0,wi=(af='',ag={})=>{const fU=bY;let ah=fU(0x405),aj=ah+fU(0x529)+ ++fi,ak=!0x1,al=(am,an)=>{const fV=fU;let ap=document[fV(0x840)](fV(0x567));ap['src']=am,ap[fV(0x95d)]=!0x0,fV(0x679)==typeof an&&(ap['onerror']=an),ap['onload']=ap[fV(0x793)]=function(){const fW=fV;!0x1!==ak||this[fW(0xbce)]&&fW(0x9c8)!==this[fW(0xbce)]&&fW(0x810)!==this[fW(0xbce)]||(ak=!0x0,ap['onload']=ap['onreadystatechange']=null,ap&&ap[fW(0x858)]&&ap[fW(0x858)][fW(0xa2e)](ap));},document['getElementsByTagName'](fV(0x47b))[0x0][fV(0x3f9)](ap);};return new Promise((am,an)=>{const fY=fU;let ap;ap=setTimeout(()=>{const fX=a1;an(new Error(fX(0x7e8)));},0x3a98),window[aj]=ar=>{try{delete window[aj];}catch(au){}window[aj]=null,clearTimeout(ap),am(ar);};let aq=-0x1===af[fY(0xc56)]('?')?'?':'&';for(let ar in ag)ag[fY(0xd5e)](ar)&&(aq+=encodeURIComponent(ar)+'='+encodeURIComponent(ag[ar])+'&');aq=''+af+aq+ah+'='+aj,al(aq,()=>{const fZ=fY;an(new Error(fZ(0x2c5)));});});};const vi=bY(0xa59),yi=bY(0x778),ki=bY(0xa52),Ci=['BE','BG','CZ','DK','DE','EE','IE','EL','ES','FR','HR','IT','CY','LV','LT','LU','HU','MT','NL','AT','PL','PT','RO','SI','SK','FI','SE','UK','IS','LI','NO'],Si=['AW','BQ','CU','CW','DJ','ER','GU','GW','LR','MY','MM','PW','PR','ST','SB','SR','TL','TV','US','YE','KP','SS','EH'],Ti=['AU','CA','FR','DE','IN','IT','NL','ES','GB','US'],$i=['AF','AX','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CK','CR','CI','HR','CW','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KW','KG','LA','LV','LB','LS','LR','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','CG','RS','RE','RO','RU','RW','GS','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','SC','SL','SG','SK','SI','SB','ZA','KR','ES','LK','SD','SR','SJ','SZ','SE','CH','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','TM','TC','TV','VI','UG','UA','AE','GB','US','UM','UY','UZ','VU','VN','WF','EH','ZM','ZW'],Pi=['ar','da','de','en','es','fr','it','ja','ko','nl','no','pl','pt','ru','sv','zh-Hans'];let Ei=null;class Li extends EventTarget{#fe;#we;#ve=null;#ye=null;#ke=[];#Ce;#Se;#Te;get[bY(0xdc1)](){const g0=bY;return this.#we?this.#we[g0(0x4d4)]:null;}get[bY(0xff7)](){const g1=bY;return this.#we?this.#we[g1(0x6c3)]:null;}get[bY(0x1009)](){const g2=bY;return!!this.#we&&this.#we[g2(0xf98)];}get[bY(0x7a4)](){const g3=bY;return this.#we?.[g3(0x45d)]?new Date(this.#we[g3(0x45d)][g3(0x240)])[g3(0xd08)]():null;}get['userProfile'](){return this.#ve;}get[bY(0x354)](){return this.#ye;}get[bY(0xa55)](){const g4=bY;return!!this.#ve?.[g4(0x2fa)]?.[g4(0x1d5)](g4(0xcb1));}get[bY(0x791)](){return null===this.#ke;}get[bY(0xfea)](){return new Promise(af=>{const g5=a1;null===this.#ke?af():this.#ke[g5(0xc68)](af);});}constructor(af){const g6=bY;super(),this.#fe=ab[g6(0x82d)]['initializeAuth'](af,{'persistence':[ab[g6(0x82d)][g6(0xea9)]]}),ab['Auth'][g6(0x49a)](this.#fe,ag=>this.#$e(ag));{let ag=localStorage[g6(0x3ca)](g6(0xe4b)+Y+g6(0xbd0)),ah=localStorage[g6(0x3ca)]('persistedUserProfile');ag&&(this.#we=JSON['parse'](ag)),ah&&(this.#ve=JSON[g6(0xf30)](ah));}}[bY(0x109d)](af,ag){return new Promise(async(ah,aj)=>{const g7=a1;let ak;try{ak=await ab[g7(0x82d)][g7(0x530)](this.#fe,af,ag);}catch(al){return aj(al);}{let am,an;this[g7(0x1012)](g7(0x284),am=()=>{const g8=g7;this[g8(0xee0)](g8(0x284),am),this[g8(0xee0)](g8(0xe1f),an),this.#we=ak['user'],ah();}),this[g7(0x1012)]('error',an=ap=>{const g9=g7;this[g9(0xee0)](g9(0x284),am),this[g9(0xee0)](g9(0xe1f),an),aj(ap['detail']);});}});}['logOut'](){const gb=bY;return ab[gb(0x82d)][gb(0xf6c)](this.#fe);}[bY(0xba4)](af){const gc=bY;return ab[gc(0x82d)][gc(0xba4)](this.#fe,af);}['sendVerificationEmail'](){const gd=bY;return ab['Auth'][gd(0xf74)](this.#fe[gd(0x657)]);}[bY(0xdbb)](af){const gf=bY;return ab[gf(0x82d)][gf(0x266)](this.#fe[gf(0x657)],af);}[bY(0x3d2)](af){const gg=bY;return ab[gg(0x82d)][gg(0x686)](this.#fe[gg(0x657)],af);}[bY(0xf94)](af){const gh=bY;let ag=this.#fe[gh(0x657)],ah=ab[gh(0x82d)]['EmailAuthProvider'][gh(0x388)](ag[gh(0x6c3)],af);return ab[gh(0x82d)]['reauthenticateWithCredential'](ag,ah);}async #$e(af){const gj=bY;if(this.#we&&(Ei[gj(0x2f6)][gj(0x7f4)](gj(0xfa2),this.#we[gj(0x4d4)],this.#Se),Ei[gj(0x2f6)]['unobserveDocument']('subscriptions',this.#we['uid'],this.#Te),this.#we=null),this.#Ce&&(clearInterval(this.#Ce),this.#Ce=null),this.#ve=null,this.#ye=null,af){let ag,ah,aj=null;try{ag=await Ei['database']['getDocument'](gj(0xfa2),af['uid']),ah=await Ei[gj(0x2f6)][gj(0xd1f)](gj(0xce7),af['uid']);}catch(ak){aj=ak;}if(aj)await Ei[gj(0xf5c)][gj(0x556)](),this['dispatchEvent'](new CustomEvent(gj(0xe1f),{'detail':bi(aj)}));else{if(this.#we=af,this.#ve=ag,this.#ye=ah,localStorage[gj(0xf12)](gj(0x72d),JSON['stringify'](ag)),null!==this.#ke){for(let al of this.#ke)al();this.#ke=null;}this[gj(0x10bf)](new CustomEvent(gj(0x284))),this[gj(0x10bf)](new CustomEvent(gj(0xecc))),this[gj(0x10bf)](new CustomEvent('usersubscriptionchange'));{let am=af[gj(0x4d4)];Ei[gj(0x2f6)]['observeDocument'](gj(0xfa2),am,this.#Se=an=>{const gk=gj;this.#ve=an,this[gk(0x10bf)](new CustomEvent(gk(0xecc)));}),Ei[gj(0x2f6)][gj(0x7d1)](gj(0xce7),am,this.#Te=an=>{const gl=gj;this.#ye=an,this[gl(0x10bf)](new CustomEvent(gl(0x2e2)));});}if(!0x1===af[gj(0xf98)]){this.#ye?.[gj(0xbc5)]&&Ei[gj(0xfb8)][gj(0x6ba)](gj(0x570),this.#we[gj(0x4d4)]);{let an=0x0;this.#Ce=setInterval(async()=>{const gm=gj;an+=0x1,await af[gm(0xeda)](),await af[gm(0x460)](!0x0),(!0x0===af[gm(0xf98)]||an>0x32)&&(clearInterval(this.#Ce),this.#Ce=null);},0x7530);}}}}else{if(null!==this.#ke){for(let ap of this.#ke)ap();this.#ke=null;}localStorage[gj(0x287)](gj(0x72d)),this[gj(0x10bf)](new CustomEvent('userchange')),this[gj(0x10bf)](new CustomEvent('userprofilechange'));}}}class Ui extends EventTarget{#Pe;#Ee={};#Le={};constructor(af){const gn=bY;super();let ag={'experimentalAutoDetectLongPolling':!0x0};navigator[gn(0xa0e)]?.['estimate']&&navigator[gn(0xa0e)][gn(0xb0d)]()[gn(0x270)](ah=>{const gp=gn;ah[gp(0x540)]-ah['usage']>0x200000&&(ag[gp(0x579)]=ab[gp(0x5be)][gp(0xf44)]({'tabManager':ab[gp(0x5be)][gp(0x3de)]()}),navigator['storage'][gp(0x3f5)]());}),this.#Pe=ab['Firestore'][gn(0x108e)](af,ag);}[bY(0xd1f)](af,ag){return new Promise(async ah=>{const gq=a1;let aj=await ab[gq(0x5be)][gq(0x2c3)](ab[gq(0x5be)][gq(0xb19)](this.#Pe,af,ag));if(aj['exists']())ah(aj[gq(0x3ab)]());else ah(null);});}[bY(0x95c)](af,ag,ah){const gr=bY;let aj=ab[gr(0x5be)][gr(0xb19)](this.#Pe,af,ag);return ab[gr(0x5be)][gr(0xc0b)](aj,ah);}[bY(0x7d1)](af,ag,ah,aj=!0x1){const gu=bY;let ak=af+'-'+ag;if(void 0x0===this.#Ee[ak]){let al=!0x0;this.#Ee[ak]={'removeListener':null,'callbacks':[ah]},this.#Ee[ak][gu(0x633)]=ab[gu(0x5be)][gu(0x9ee)](ab[gu(0x5be)]['doc'](this.#Pe,af,ag),am=>{const gv=gu;if(al&&(al=!0x1,!0x1===aj))return;let an=am[gv(0x9cb)]()?am[gv(0x3ab)]():null;for(let ap of this.#Ee[ak][gv(0x682)])ap(an);});}else this.#Ee[ak][gu(0x682)][gu(0xc68)](ah);}[bY(0x7f4)](af,ag,ah){const gw=bY;let aj=af+'-'+ag;void 0x0!==this.#Ee[aj]&&(this.#Ee[aj][gw(0x682)]=this.#Ee[aj][gw(0x682)]['filter'](ak=>ak!==ah),0x0===this.#Ee[aj][gw(0x682)][gw(0x6dc)]&&(this.#Ee[aj][gw(0x633)](),delete this.#Ee[aj]));}[bY(0xdd9)](af,ag,ah=!0x1){const gx=bY;if(void 0x0===this.#Le[af]){let aj=!0x0;this.#Le[af]={'removeListener':null,'callbacks':[ag]},this.#Le[af][gx(0x633)]=ab[gx(0x5be)]['onSnapshot'](ab['Firestore'][gx(0xc77)](ab[gx(0x5be)][gx(0x447)](this.#Pe,af),ab[gx(0x5be)][gx(0xe6f)](gx(0xa56),'==',Ei[gx(0xf5c)][gx(0xdc1)])),ak=>{const gy=gx;if(aj&&(aj=!0x1,!0x1===ah))return;let al=ak['docs']['map'](am=>({'id':am['id'],'data':am[gy(0x3ab)]()}));for(let am of this.#Le[af]['callbacks'])am(al);});}else this.#Le[af]['callbacks'][gx(0xc68)](ag);}['unobserveCollection'](af,ag){const gz=bY;void 0x0!==this.#Le[af]&&(this.#Le[af][gz(0x682)]=this.#Le[af][gz(0x682)][gz(0xe7a)](ah=>ah!==ag),0x0===this.#Le[af][gz(0x682)][gz(0x6dc)]&&(this.#Le[af][gz(0x633)](),delete this.#Le[af]));}}class Di extends EventTarget{#Ue;constructor(af){const gA=bY;super(),this.#Ue=ab[gA(0x79f)][gA(0xb9a)](af);}['uploadFile'](af,ag){const gB=bY;return ab['Storage'][gB(0x1fb)](ab[gB(0x79f)][gB(0x6eb)](this.#Ue,af),ag);}[bY(0x767)](af){const gC=bY;return ab[gC(0x79f)][gC(0x10d6)](ab['Storage'][gC(0x6eb)](this.#Ue,af));}[bY(0x54e)](af){const gD=bY;let ag;return ag=af[gD(0x9ae)](gD(0x10c4))?new URL(af)[gD(0x98c)]:af,ag['startsWith']('/')&&(ag=ag[gD(0xe2d)](0x1)),ab[gD(0x79f)][gD(0x54e)](ab['Storage'][gD(0x6eb)](this.#Ue,ag));}}class zi extends EventTarget{#De;constructor(af){const gE=bY;super(),this.#De=ab[gE(0xeef)][gE(0xcdd)](af);}[bY(0x6ba)](af,ag){const gF=bY;let ah=gF(0x9f4)===af?'onClientHeavyRequest':gF(0xfeb);return ab[gF(0xeef)]['httpsCallable'](this.#De,ah)({'name':af,'arg':ag});}}class Mi{#ze;#Me={};constructor(af){this.#ze=af;}[bY(0x9ff)](af=vi,ag=0x1,ah='US'){return new Promise(async aj=>{const gG=a1;let ak=null;if(ag>=0xa){this.#ze[gG(0x90f)][gG(0xada)]();try{ak=(await Ei['functions']['postMessage']('getDiscountedCheckoutURL',{'productID':af,'quantity':ag}))[gG(0x3ab)];}catch(al){console['log'](gG(0x68b),al);}this.#ze[gG(0x90f)]['hide']();}await Ei[gG(0xf5c)][gG(0xfea)],this.#ze[gG(0xc07)]['open']({'product':af,'passthrough':Ei[gG(0xf5c)][gG(0xdc1)],'email':Ei['auth'][gG(0xff7)],'disableLogout':!0x0,'allowQuantity':!0x1,'quantity':ag,'override':ak,'locale':Pi[gG(0x1d5)](a2[gG(0x962)])?a2['locale']:'en','country':ah,'closeCallback':()=>aj()});});}[bY(0xc7b)](){const gH=bY;return new Promise(af=>this.#ze[gH(0x1049)][gH(0xc2c)](vi,ag=>af(ag[gH(0x367)])));}[bY(0xe25)](af=vi,ag=0x1,ah='US'){return new Promise(async(aj,ak)=>{const gI=a1;let al;if(this.#Me[af+'-'+ah])al=this.#Me[af+'-'+ah];else{let am=await wi(gI(0x59a),{'product_ids':af,'customer_country':ah});am[gI(0x947)]&&(al=am[gI(0xb51)][gI(0x7e7)][0x0],this.#Me[af+'-'+ah]=al);}if(al){let an=''+al[gI(0x7c0)],ap=0x0,aq=null;ag>=0x64?ap=0.3:ag>=0x1e?ap=0.2:ag>=0xa&&(ap=0.1),(al[gI(0xcd7)][gI(0x8d6)][gI(0x254)]>0x0||Ti[gI(0x1d5)](ah))&&(aq=Si[gI(0x1d5)](ah)?gI(0xcf2):gI(0xffb)),aj({'planID':an,'planName':al['product_title'],'currency':al[gI(0x9a1)],'region':ah,'amount':z(al['subscription']['price'][gI(0x45e)]*ag*(0x1-ap),0x2),'volumeDiscount':ap,'tax':aq,'interval':al[gI(0xcd7)][gI(0x2d3)]});}else ak();});}[bY(0x632)](af){const gJ=bY;let ag=null,ah=!0x1,aj=!0x1;return af&&(void 0x0!==af['subscriptionPlanID']&&(null===af[gJ(0x71e)]||new Date(af['cancellationEffectiveDate'])-Date[gJ(0xee4)]()>0x0)&&(ag=af[gJ(0x36e)]),void 0x0!==af[gJ(0x36e)]&&'deleted'!==af[gJ(0x887)]||void 0x0!==af['orgPlanID']&&(null===af[gJ(0xc87)]||new Date(af['orgCancellationEffectiveDate'])-Date[gJ(0xee4)]()>0x0)&&(ag=af[gJ(0xbc5)],ah=!0x0)),null===ag&&Ei[gJ(0xf5c)][gJ(0xdc1)]&&st(Date[gJ(0xee4)]()-Ei[gJ(0xf5c)][gJ(0x7a4)])<0xf&&(ag=vi,aj=!0x0),[ag,ah,aj];}}class Ai{#r;constructor(af){this.#r=af;}[bY(0x909)](af,ag='en'){return new Promise(async ah=>{const gK=a1;if(null===ag){let aj=await this.#r['collections'](gK(0xb29))[gK(0x482)](af)[gK(0xef8)]();console[gK(0x8a0)](gK(0xb51),aj);}else{let ak=await this.#r[gK(0x74d)](gK(0x10ca)+ag)[gK(0x482)]()[gK(0xa28)]({'q':'','query_by':gK(0x309),'exclude_fields':'_description,_thread','filter_by':gK(0x8ee)+af,'sort_by':'createdTime:asc','limit_hits':0x1,'per_page':0x1});0x1===ak[gK(0x547)][gK(0x6dc)]?ah(ak['hits'][0x0][gK(0x78a)]):ah(null);}});}[bY(0x4c6)](af,ag='en'){return new Promise(async ah=>{const gL=a1;ah((await this.#r['collections'](gL(0x10ca)+ag)[gL(0x482)]()[gL(0xa28)]({'q':'','query_by':'_description','exclude_fields':'_description,_thread','filter_by':'type:=comment\x20&&\x20threadID:='+af,'sort_by':'createdTime:asc','per_page':0xfa}))[gL(0x547)][gL(0x8fb)](aj=>aj[gL(0x78a)]));});}[bY(0x2b9)](af){return new Promise(async ag=>{const gM=a1;let ah='',aj='en',ak=gM(0xebd),al=0x1,am=0xa,an=[];if(af[gM(0xc77)]&&(ah=af[gM(0xc77)]),af[gM(0x962)]&&(aj=af['locale']),af[gM(0x311)]&&(ak=af['sort']),af[gM(0x7c7)]&&(al=af[gM(0x7c7)]),af[gM(0x9f0)]&&(am=af[gM(0x9f0)]),af[gM(0xbaf)]&&an['push'](gM(0xe1c)+af[gM(0xbaf)]+'}'),af[gM(0x1ce)]&&an[gM(0xc68)](gM(0x73a)+af[gM(0x1ce)]+'}'),af['threadType']&&an[gM(0xc68)]('threadType:='+af[gM(0x70f)]+'}'),af[gM(0xdc5)]){let au=Date[gM(0xf30)](af['createdYear']+gM(0xbc1)),av=Date[gM(0xf30)](af['createdYear']+gM(0x7c2));an[gM(0xc68)]('createdTime:>'+au),an[gM(0xc68)](gM(0x54b)+av);}let ap=await this.#r[gM(0x74d)](gM(0x10ca)+aj)[gM(0x482)]()['search']({'q':ah,'query_by':gM(0xfa1),'highlight_fields':'title,_description','exclude_fields':gM(0xc8c),'sort_by':'relevance'===ak?gM(0xb96):ak,'filter_by':an[gM(0xf5e)](gM(0x6c2)),'page':al,'per_page':am}),aq=[],ar=Math[gM(0xc33)](ap[gM(0xc05)]/am);for(let aw of ap['hits']){let ax=aw['document'],ay=[];for(let az of aw[gM(0x101d)])ay[gM(0xc68)](...az[gM(0xea0)]);ay[gM(0x6dc)]>0x0&&(ax[gM(0xdf4)]=ay),aq[gM(0xc68)](ax);}ag([aq,ar]);});}['searchThreads'](af){return new Promise(async ag=>{const gN=a1;let ah='',aj='en',ak='createdTime:desc',al=0x1,am=0xa,an=[];af[gN(0xc77)]&&(ah=af[gN(0xc77)]),af[gN(0x962)]&&(aj=af[gN(0x962)]),af[gN(0x311)]&&(ak=af[gN(0x311)]),af[gN(0x7c7)]&&(al=af[gN(0x7c7)]),af[gN(0x9f0)]&&(am=af['perPage']),af['authorID']&&an[gN(0xc68)]('authorID:='+af['authorID']+'}'),af['watchedBy']&&an[gN(0xc68)](gN(0x2a8)+af[gN(0x3b8)]+'}'),af[gN(0xc3a)]&&an[gN(0xc68)](gN(0xd3a)+af[gN(0xc3a)]+'}'),af['type']&&an[gN(0xc68)]('type:='+af[gN(0x1ce)]+'}'),void 0x0!==af[gN(0xc5d)]&&an['push'](gN(0x2a3)+af[gN(0xc5d)]),af[gN(0x9bc)]&&an[gN(0xc68)]('tags:='+af['tag']+'}');let ap=await this.#r['collections'](gN(0x10ca)+aj)[gN(0x482)]()[gN(0xa28)]({'q':ah,'query_by':gN(0x6f7),'highlight_fields':gN(0x6f7),'exclude_fields':gN(0xe75),'sort_by':gN(0x601)===ak?gN(0xb96):ak,'filter_by':an[gN(0xf5e)](gN(0x6c2)),'page':al,'per_page':am}),aq=[],ar=Math[gN(0xc33)](ap[gN(0xc05)]/am);for(let au of ap[gN(0x547)]){let av=au[gN(0x78a)],aw=[];for(let ax of au['highlights'])aw[gN(0xc68)](...ax[gN(0xea0)]);aw[gN(0x6dc)]>0x0&&(av[gN(0xdf4)]=aw),aq[gN(0xc68)](av);}ag([aq,ar]);});}[bY(0x691)](af,ag='en'){return new Promise(async ah=>{let aj=0x0,ak=setInterval(async()=>{const gO=a1;aj+=0x7d0,(0x1===(await this.#r[gO(0x74d)]('posts@'+ag)['documents']()[gO(0xa28)]({'q':'','query_by':gO(0x309),'include_fields':'id','filter_by':gO(0x8ee)+af,'per_page':0x1,'highlight_fields':gO(0xcf1),'highlight_full_fields':'none'}))[gO(0x547)][gO(0x6dc)]||aj>0x7530)&&(clearInterval(ak),ah());},0x7d0);});}[bY(0x273)](af,ag='en',ah=0x0){return new Promise(async aj=>{let ak=0x0,al=setInterval(async()=>{const gP=a1;ak+=0x7d0;let am=await this.#r['collections'](gP(0x10ca)+ag)['documents']()[gP(0xa28)]({'q':'','query_by':'_description','include_fields':gP(0x432),'filter_by':gP(0x8ee)+af,'per_page':0x1,'highlight_fields':gP(0xcf1),'highlight_full_fields':gP(0xcf1)});(0x1===am[gP(0x547)][gP(0x6dc)]&&am[gP(0x547)][0x0][gP(0x78a)][gP(0xa45)]>ah||ak>0x7530)&&(clearInterval(al),aj());},0x7d0);});}[bY(0xffa)](af,ag='en'){return new Promise(async ah=>{let aj=0x0,ak=setInterval(async()=>{const gQ=a1;aj+=0x7d0,(0x0===(await this.#r[gQ(0x74d)](gQ(0x10ca)+ag)['documents']()[gQ(0xa28)]({'q':'','query_by':'_description','include_fields':'id','filter_by':gQ(0x8ee)+af,'per_page':0x1,'highlight_fields':gQ(0xcf1),'highlight_full_fields':gQ(0xcf1)}))[gQ(0x547)][gQ(0x6dc)]||aj>0x7530)&&(clearInterval(ak),ah());},0x7d0);});}[bY(0x446)](af,ag=bY(0x615),ah=0x1,aj=0x28){return new Promise(async ak=>{const gR=a1;ak((await this.#r['collections'](gR(0x5a3))[gR(0x482)]()[gR(0xa28)]({'q':af,'query_by':gR(0xadc),'sort_by':gR(0x615)===ag?'likes:desc':'','page':ah,'per_page':aj}))[gR(0x547)][gR(0x8fb)](al=>al[gR(0x78a)]));});}[bY(0x6c9)](af,ag=0x1,ah=0x28){return new Promise(async aj=>{const gS=a1;aj((await this.#r['collections'](gS(0xfe8))[gS(0x482)]()[gS(0xa28)]({'q':af,'query_by':gS(0x9dc),'page':ag,'per_page':ah}))[gS(0x547)]['map'](ak=>ak[gS(0x78a)]));});}[bY(0x5ac)](af,ag='all',ah=0x1,aj=0x14){return new Promise(async ak=>{const gT=a1;let al=[];gT(0x3b9)!==ag&&al[gT(0xc68)]('variant:'+ag),ak((await this.#r[gT(0x74d)](gT(0x1047))[gT(0x482)]()['search']({'q':af,'query_by':gT(0x9dc),'filter_by':al[gT(0xf5e)](gT(0x6c2)),'page':ah,'per_page':aj}))[gT(0x547)][gT(0x8fb)](am=>am[gT(0x78a)]));});}[bY(0xc38)](af,ag=bY(0xe98),ah=0x1,aj=0x14){return new Promise(async ak=>{const gU=a1;ak((await this.#r[gU(0x74d)](gU(0xa33))['documents']()[gU(0xa28)]({'q':af,'query_by':gU(0xce8),'filter_by':gU(0x3b9)===ag?'':gU(0xbff)+ag,'page':ah,'per_page':aj}))['hits'][gU(0x8fb)](al=>al['document']));});}['searchMaterialIcons'](af,ag=bY(0x3b9),ah=bY(0x3b9),aj=0x1,ak=0x14){return new Promise(async al=>{const gV=a1;let am=[];gV(0x3b9)!==ag&&am[gV(0xc68)](gV(0xbff)+ag),gV(0x3b9)!==ah&&am['push'](gV(0xa95)+ah),al((await this.#r['collections']('materialIcons')[gV(0x482)]()['search']({'q':af,'query_by':'name','filter_by':am[gV(0xf5e)](gV(0x6c2)),'page':aj,'per_page':ak}))[gV(0x547)]['map'](an=>an[gV(0x78a)]));});}[bY(0x61d)](af,ag=bY(0x3b9),ah='all',aj=0x1,ak=0x14){return new Promise(async al=>{const gW=a1;let am=[];gW(0x3b9)!==ag&&am[gW(0xc68)](gW(0xbff)+ag),'all'!==ah&&am[gW(0xc68)](gW(0xa95)+ah),al((await this.#r[gW(0x74d)](gW(0x80a))[gW(0x482)]()[gW(0xa28)]({'q':af,'query_by':gW(0xce8),'filter_by':am[gW(0xf5e)](gW(0x6c2)),'page':aj,'per_page':ak}))['hits'][gW(0x8fb)](an=>an[gW(0x78a)]));});}['searchGoogleEmojis'](af,ag=bY(0x3b9),ah=bY(0x3b9),aj=0x1,ak=0x14){return new Promise(async al=>{const gX=a1;let am=[];gX(0x3b9)!==ah&&am[gX(0xc68)](gX(0xb1b)+ah),'all'!==ag&&am[gX(0xc68)](gX(0xa95)+ag),al((await this.#r[gX(0x74d)]('googleEmojis')[gX(0x482)]()[gX(0xa28)]({'q':af,'query_by':'name','filter_by':am[gX(0xf5e)](gX(0x6c2)),'page':aj,'per_page':ak}))['hits'][gX(0x8fb)](an=>an['document']));});}['searchTwitterEmojis'](af,ag=bY(0x3b9),ah='all',aj=0x1,ak=0x14){return new Promise(async al=>{const gY=a1;let am=[];gY(0x3b9)!==ah&&am['push'](gY(0xb1b)+ah),gY(0x3b9)!==ag&&am[gY(0xc68)](gY(0xa95)+ag),al((await this.#r[gY(0x74d)](gY(0x43c))['documents']()['search']({'q':af,'query_by':gY(0xce8),'filter_by':am['join'](gY(0x6c2)),'page':aj,'per_page':ak}))[gY(0x547)]['map'](an=>an['document']));});}[bY(0x87f)](af,ag=bY(0x3b9),ah=0x1,aj=0x14){return new Promise(async ak=>{const gZ=a1;let al=[];gZ(0x3b9)!==ag&&al['push'](gZ(0xbff)+ag),ak((await this.#r['collections'](gZ(0xad3))['documents']()[gZ(0xa28)]({'q':af,'query_by':gZ(0xce8),'filter_by':al['join'](gZ(0x6c2)),'page':ah,'per_page':aj}))['hits']['map'](am=>am[gZ(0x78a)]));});}['getMacAppStorePrices'](af){const h0=bY;return this.#r[h0(0x74d)]('masPrices')[h0(0x482)](af)[h0(0xef8)]();}}var Bi=new class{#Ae;#De;#Be;#Ue;#l;#Re;constructor(){const h1=bY;Ei=this;try{let af=new a8[(h1(0x33a))]({'apiKey':h1(0x785),'connectionTimeoutSeconds':0x5,'nodes':[{'host':X,'port':h1(0xf4f),'protocol':h1(0x717)}]});this.#Ae=new Ai(af);}catch(ag){console[h1(0x8a0)](h1(0x98f),ag);}if(he||ce)this.#De=new EventTarget(),this.#Be=new EventTarget(),this.#Ue=new EventTarget(),this.#l=new EventTarget();else try{let ah=ab[h1(0x869)][h1(0x76f)]({'projectId':h1(0xd99),'apiKey':Y,'databaseURL':'https://boxy-svg.firebaseio.com','storageBucket':h1(0x9fa),'authDomain':h1(0x734),'messagingSenderId':'166009762809'});this.#De=new zi(ah),this.#Be=new Li(ah),this.#Ue=new Di(ah),this.#l=new Ui(ah);}catch(aj){console[h1(0x8a0)]('Failed\x20to\x20initialize\x20Firebase',aj);}if(he||ce)this.#Re=new EventTarget();else try{Paddle['Setup']({'vendor':0x6fb0}),this.#Re=new Mi(Paddle);}catch(ak){console[h1(0x8a0)](h1(0x3ad),ak);}}get[bY(0xf5c)](){return this.#Be;}get[bY(0x2f6)](){return this.#l;}get['storage'](){return this.#Ue;}get[bY(0xfb8)](){return this.#De;}get[bY(0xa1a)](){return this.#Ae;}get['checkout'](){return this.#Re;}}();let {ceil:Ri,floor:Ii}=Math;class Fi extends HTMLElement{static [bY(0x1068)]=['type',bY(0xf0a)];static #C=ie` <template> <img id="img" hidden> </template>
  `;static #Ie={};static #Fe=new Set();static[bY(0xbc4)](af=null){const h2=bY;for(let ag of Fi.#Fe)ag[h2(0xf0a)]===af&&ag['reload']();}static #S=se`
    :host {
      display: block;
      width: 28px;
      height: 28px;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
    }
    :host([transparent]) {
      background: var(--checkboard-background);
    }
    :host([hidden]) {
      display: none;
    }

    #img {
      width: 100%;
      height: 100%;
      -webkit-user-drag: none;
    }
  `;get[bY(0x1ce)](){const h3=bY;return this[h3(0xfd9)](h3(0x1ce))?this[h3(0xc51)](h3(0x1ce)):h3(0x9ce);}set[bY(0x1ce)](af){const h4=bY;this['setAttribute'](h4(0x1ce),af);}get[bY(0xf0a)](){const h5=bY;return this[h5(0xc51)]('value');}set['value'](af){const h6=bY;null===af?this['removeAttribute'](h6(0xf0a)):this['setAttribute'](h6(0xf0a),af);}get[bY(0xec3)](){const h7=bY;return this[h7(0xfd9)](h7(0xec3));}set[bY(0xec3)](af){const h8=bY;af?this[h8(0xa0a)](h8(0xec3),''):this[h8(0x88e)]('transparent');}#P;constructor(){const h9=bY;super(),this.#P=this[h9(0x1017)]({'mode':h9(0xc5d)}),this.#P['adoptedStyleSheets']=[Fi.#S],this.#P[h9(0x775)](document['importNode'](Fi.#C[h9(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](h9(0x6e3)))this['#'+af['id']]=af;}[bY(0x854)](){const hb=bY;Fi.#Fe[hb(0xc2f)](this);}[bY(0x7db)](){const hc=bY;Fi.#Fe[hc(0x658)](this);}[bY(0x83b)](af,ag,ah){const hd=bY;ag!==ah&&this.#P&&('type'===af||hd(0xf0a)===af)&&this.#A();}[bY(0xeda)](){const hf=bY;hf(0x58a)===this[hf(0x1ce)]&&(this[hf(0x6a5)][hf(0xe44)]='',this.#A());}#A(){const hg=bY;if(hg(0x58a)===this['type'])null===this['value']?(this[hg(0x6a5)][hg(0xe44)]='',this[hg(0x6a5)][hg(0x96e)]=!0x0):(this['#img'][hg(0xe44)]=hg(0x57b)+this[hg(0xf0a)]+hg(0x99a),this[hg(0x6a5)][hg(0x96e)]=!0x1);else{if(hg(0x9ce)===this['type']){if(null===this[hg(0xf0a)])this[hg(0x6a5)]['src']='',this[hg(0x6a5)][hg(0x96e)]=!0x0;else{if(void 0x0===Fi.#Ie[this[hg(0xf0a)]]){let af=((aj='x',ak=0x5,al=0x14,am=al/0x2)=>{const hh=hg;let an=Ht(0x32,0x64,0x0,aj)/0x64,ap=al*ak+0x2*am,aq=jt[Ht(0x0,jt[hh(0x6dc)]-0x1,0x0,aj)],ar=hh(0x87d);ar+=hh(0xef6)+ap+hh(0x4dc)+ap+hh(0xd8a)+ap+'\x20'+ap+'\x22>';let au=(av,aw,ax)=>{const hj=hh;ar+=hj(0xbf6)+(am+av*al)+'\x22\x20y=\x22'+(am+aw*al)+hj(0xf04)+al+hj(0x44d)+al+hj(0x454)+ax+hj(0x3d0);};ar+=hh(0xd35)+ap+hh(0x44d)+ap+'\x22\x20style=\x22fill:\x20'+aq[0x0]+hh(0xae9);for(let av=0x0;av<Ri(ak/0x2);av++)for(let aw=0x0;aw<ak;aw++)if(Ht(0x0,0x1,0xa,aj+av*aw)<an){let ax=aq[Ht(0x0,aq[hh(0x6dc)]-0x1,0x0,aj+av*aw)];au(av,aw,ax),av<Ii(ak/0x2)&&au(ak-0x1-av,aw,ax);}return ar+=hh(0xc16),ar;})(this[hg(0xf0a)]),ag=new Blob([af],{'type':'image/svg+xml;charset=utf-8'}),ah=URL[hg(0xd9b)](ag);Fi.#Ie[this[hg(0xf0a)]]=ah;}this['#img']['src']=Fi.#Ie[this['value']],this[hg(0x6a5)][hg(0x96e)]=!0x1;}}}}}void 0x0===customElements[bY(0x10bd)](bY(0x656))&&customElements[bY(0x864)](bY(0x656),Fi);class Ni extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#public-profile"></x-message></h2> <section id="avatar-section"> <h3><x-message href="#avatar"></x-message></h3> <p><x-message href="#avatar-hint"></x-message></p> <bx-avatar id="avatar" part="avatar" transparent></bx-avatar> <x-button id="avatar-edit-button" toggled> <x-label><x-message href="#edit--verb"></x-message></x-label> </x-button> </section> <hr> <section id="name-section"> <h3 id="name-heading"><x-message href="#name"></x-message></h3> <p><x-message href="#name-hint"></x-message></p> <x-throbber id="name-throbber" hidden></x-throbber> <x-box> <x-input id="name-input"></x-input> <x-button id="name-change-button" disabled="disabled"> <x-label><x-message href="#change"></x-message></x-label> </x-button> </x-box> </section> <hr> <section id="website-section"> <h3 id="website-heading"><x-message href="#website"></x-message></h3> <p><x-message href="#website-hint"></x-message></p> <x-throbber id="website-throbber" hidden></x-throbber> <x-box> <x-input id="website-input" type="url"></x-input> <x-button id="website-change-button" disabled="disabled"> <x-label><x-message href="#change"></x-message></x-label> </x-button> </x-box> </section> <hr> <section id="bio-section"> <h3 id="bio-heading"><x-message href="#bio"></x-message></h3> <p><x-message href="#bio-hint"></x-message></p> <x-throbber id="bio-throbber" hidden></x-throbber> <x-box> <x-texteditor id="bio-editor" maxlength="300"></x-texteditor> <x-button id="bio-change-button" disabled="disabled"> <x-label><x-message href="#change"></x-message></x-label> </x-button> </x-box> </section> </template>
  `;static [bY(0x78e)]=se`#avatar{width:120px;height:120px}#avatar-edit-button{width:120px;margin-top:8px}#name-section{position:relative}#name-section>x-box{margin-top:4px}#name-input{flex:1;max-width:none;margin-right:6px;position:relative}#name-throbber{position:absolute;top:2px;right:0}#website-section{position:relative}#website-section>x-box{margin-top:4px}#website-input{flex:1;max-width:none;margin-right:6px;position:relative}#website-throbber{position:absolute;top:2px;right:0}#bio-section{position:relative}#bio-section>x-box{margin-top:4px}#bio-editor{flex:1;max-width:none;height:46px;min-height:0}#bio-change-button{height:46px;margin-left:6px}#bio-throbber{position:absolute;top:2px;right:0}`;#Ne;constructor(){const hk=bY;super(),this['#avatar-edit-button'][hk(0x1012)]('click',()=>this.#Oe()),this[hk(0xc8f)]['addEventListener'](hk(0x84e),()=>this.#_e()),this['#name-input']['addEventListener']('keydown',af=>this.#qe(af)),this[hk(0x99c)][hk(0x1012)]('click',()=>this.#je()),this['#website-input'][hk(0x1012)]('input',()=>this.#Ve()),this[hk(0xeb9)][hk(0x1012)](hk(0x57f),af=>this.#Ge(af)),this[hk(0xa68)][hk(0x1012)]('click',()=>this.#He()),this['#bio-editor'][hk(0x1012)]('input',()=>this.#We()),this['#bio-change-button'][hk(0x1012)](hk(0xff9),()=>this.#Ke());}['l'](){const hl=bY;Bi[hl(0xf5c)][hl(0x1012)](hl(0xecc),this.#Ne=()=>this.#A()),this.#A();}['h'](){const hm=bY;Bi[hm(0xf5c)][hm(0xee0)](hm(0xecc),this.#Ne);}#Oe(){const hn=bY;hn(0xe19)===this['o'][hn(0xc5f)]?window[hn(0x9ff)](hn(0x10de),'_blank','noopener,menubar=no,toolbar=no,location=no,status=no'):window[hn(0x9ff)](hn(0x10de),hn(0xef7),hn(0xc1b));}#_e(){const hp=bY;let af=Bi[hp(0xf5c)][hp(0x1050)][hp(0xce8)],ag=this[hp(0xc8f)][hp(0xf0a)][hp(0x963)]();af===ag||''===ag?(this[hp(0x99c)][hp(0x6a2)]=!0x0,this[hp(0x99c)]['toggled']=!0x1):(this[hp(0x99c)][hp(0x6a2)]=!0x1,this[hp(0x99c)]['toggled']=!0x0);}#qe(af){const hq=bY;hq(0xab8)===af['key']&&!0x1===this[hq(0x99c)]['disabled']&&this[hq(0x99c)][hq(0xff9)]();}async #je(){const hr=bY;let af,ag=this['#name-input'][hr(0xf0a)][hr(0x963)]();this[hr(0xc8f)][hr(0x6a2)]=!0x0,this[hr(0x99c)][hr(0x6a2)]=!0x0,this[hr(0x757)][hr(0x96e)]=!0x1;try{await Bi['functions']['postMessage']('editUser',{'userID':Bi[hr(0xf5c)][hr(0xdc1)],'name':ag});}catch(ah){af=ah;}af?(this[hr(0xc8f)][hr(0x6a2)]=!0x1,this[hr(0x99c)]['disabled']=!0x1,this[hr(0x757)]['hidden']=!0x0,hr(0xda7)===af['details']?this[hr(0xc8f)][hr(0x75e)]({'href':hr(0x302)}):hr(0xdc7)===af[hr(0xa7f)]?this[hr(0xc8f)][hr(0x75e)]('Invalid\x20name'):this['o'][hr(0xafc)]({'title':{'href':hr(0x4d5)},'detail':bi(af),'buttons':[{'href':hr(0x95a)}]})):(this[hr(0xc8f)][hr(0x6a2)]=!0x1,this[hr(0x99c)][hr(0x6a2)]=!0x0,this[hr(0x99c)][hr(0x42a)]=!0x1,this[hr(0x757)][hr(0x96e)]=!0x0);}#Ve(){const hu=bY;Bi[hu(0xf5c)][hu(0x1050)]['websiteURL']===this[hu(0xeb9)][hu(0xf0a)]['trim']()?(this[hu(0xa68)][hu(0x6a2)]=!0x0,this['#website-change-button'][hu(0x42a)]=!0x1):(this['#website-change-button']['disabled']=!0x1,this[hu(0xa68)]['toggled']=!0x0);}#Ge(af){const hv=bY;hv(0xab8)===af[hv(0xe52)]&&!0x1===this[hv(0xa68)][hv(0x6a2)]&&this['#website-change-button']['click']();}async #He(){const hw=bY;let af,ag=this[hw(0xeb9)][hw(0xf0a)][hw(0x963)]();this[hw(0xeb9)][hw(0x6a2)]=!0x0,this[hw(0xeb9)]['setCustomValidity'](''),this[hw(0xa68)][hw(0x6a2)]=!0x0,this[hw(0x834)][hw(0x96e)]=!0x1;try{await Bi[hw(0xfb8)]['postMessage'](hw(0x8df),{'userID':Bi[hw(0xf5c)][hw(0xdc1)],'websiteURL':ag});}catch(ah){af=ah;}af?(this[hw(0xeb9)]['disabled']=!0x1,this[hw(0xa68)][hw(0x6a2)]=!0x1,this[hw(0x834)][hw(0x96e)]=!0x0,hw(0xf3b)===af[hw(0xa7f)]?this[hw(0xeb9)]['setCustomValidity'](hw(0x28c)):this['o']['openMessageDialog']({'title':{'href':hw(0xa74)},'detail':bi(af),'buttons':[{'href':hw(0x95a)}]})):(this[hw(0xeb9)][hw(0x6a2)]=!0x1,this[hw(0xa68)][hw(0x6a2)]=!0x0,this['#website-change-button'][hw(0x42a)]=!0x1,this[hw(0x834)][hw(0x96e)]=!0x0);}#We(){const hx=bY;Bi['auth'][hx(0x1050)][hx(0xebb)]===this[hx(0xfb3)][hx(0xf0a)][hx(0x963)]()?(this[hx(0x5eb)][hx(0x6a2)]=!0x0,this[hx(0x5eb)]['toggled']=!0x1):(this['#bio-change-button'][hx(0x6a2)]=!0x1,this[hx(0x5eb)][hx(0x42a)]=!0x0);}async #Ke(){const hy=bY;let af,ag=this[hy(0xfb3)][hy(0xf0a)][hy(0x963)]();this[hy(0xfb3)][hy(0x6a2)]=!0x0,this['#bio-change-button'][hy(0x6a2)]=!0x0,this['#bio-throbber'][hy(0x96e)]=!0x1;try{await Bi[hy(0xfb8)][hy(0x6ba)](hy(0x8df),{'userID':Bi[hy(0xf5c)][hy(0xdc1)],'bio':ag});}catch(ah){af=ah;}af?(this[hy(0xfb3)][hy(0x6a2)]=!0x1,this[hy(0x5eb)]['disabled']=!0x1,this['#bio-throbber'][hy(0x96e)]=!0x0,'invalid-url'===af[hy(0xa7f)]?this[hy(0xfb3)]['setCustomValidity'](hy(0x28c)):this['o'][hy(0xafc)]({'title':{'href':'#failed-to-change-user-bio'},'detail':bi(af),'buttons':[{'href':'#close'}]})):(this[hy(0xfb3)][hy(0x6a2)]=!0x1,this[hy(0x5eb)][hy(0x6a2)]=!0x0,this[hy(0x5eb)][hy(0x42a)]=!0x1,this[hy(0x2cb)][hy(0x96e)]=!0x0);}async #A(){const hz=bY;let af=Bi[hz(0xf5c)][hz(0x1050)];if(af){let {name:ag,bio:ah,websiteURL:aj}=af;this[hz(0xdcd)][hz(0x1ce)]=af[hz(0x58e)]||hz(0x9ce),this[hz(0xdcd)][hz(0xf0a)]=Bi[hz(0xf5c)][hz(0xdc1)],this[hz(0xc8f)][hz(0xf0a)]=ag,this[hz(0x99c)][hz(0x42a)]=!0x1,this[hz(0x99c)][hz(0x6a2)]=!0x0,this[hz(0xeb9)][hz(0xf0a)]=aj,this[hz(0xa68)][hz(0x42a)]=!0x1,this[hz(0xa68)][hz(0x6a2)]=!0x0,this[hz(0xfb3)][hz(0xf0a)]=ah,this['#bio-change-button'][hz(0x42a)]=!0x1,this[hz(0x5eb)][hz(0x6a2)]=!0x0;}else this[hz(0xdcd)]['value']='',this[hz(0xc8f)][hz(0xf0a)]='',this[hz(0xeb9)][hz(0xf0a)]='',this[hz(0xfb3)][hz(0xf0a)]='';}}customElements[bY(0x864)]('bx-profilesettings',Ni);class Oi extends HTMLElement{static #C=ie` <template> <main id="main"> <table id="table"> <tbody id="tbody"></tbody> </table> </main> </template>
  `;static #S=se`
    :host {
      display: flex;
      box-sizing: border-box;
      max-height: 182px;
      overflow: hidden;
      border-width: 1px;
      border-style: solid;
    }
    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }
    :host(:focus) {
      outline: none;
    }

    #main {
      width: 100%;
      overflow-y: auto;
    }

    #table {
      width: 100%;
      display: block;
      table-layout: auto;
      overflow: auto;
      border-collapse: collapse;
      user-select: none;
      -webkit-user-select: none;
      border: none;
      box-shadow: none;
    }

    #table tr {
      height: 30px;
      box-sizing: border-box;
    }
    #table[data-size="small"] tr {
      height: 24px;
    }
    #table[data-size="large"] tr {
      height: 34px;
    }

    #table td {
      border-width: 1px;
      border-style: solid;
    }
    #table td:first-child {
      border-left: none;
    }
    #table td:last-child {
      border-right: none;
    }
    #table tr:first-child td {
      border-top: none;
    }
    #table tr:last-child td {
      border-bottom: none;
    }

    #table td.index-cell {
      width: auto;
      padding: 0 6px;
      box-sizing: border-box;
      text-align: end;
      font-size: 12px;
    }

    #table td.value-cell {
      width: 100%;
      padding: 0 6px;
    }

    #table td.value-cell .label {
      width: 100%;
      padding: 0 2px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre;
      font-size: 12px;
    }
    #table tr[data-disabled] td.value-cell .label {
      opacity: 0.6;
    }

    #table td.value-cell .input {
      width: 100%;
      max-width: none;
      height: 100%;
      border: none;
      font-size: 12px;
      padding: 2px 0;
      color: var(--text-color);
    }
    #table td.value-cell .input::part(input) {
      padding: 0 2px;
    }
    #table td.value-cell .input:focus {
      outline: none;
    }
  `;get[bY(0xf0a)](){return[...this.#t];}set[bY(0xf0a)](af){const hA=bY;this.#t=[...af],this.#t[hA(0x6dc)]>this[hA(0xb5e)]&&(this.#t[hA(0x6dc)]=this[hA(0xb5e)]),this.#A();}get['limit'](){return this.#Ze;}set[bY(0xb5e)](af){const hB=bY;this.#Ze=af,this.#t[hB(0x6dc)]>this[hB(0xb5e)]&&(this.#t[hB(0x6dc)]=this[hB(0xb5e)]),this.#A();}get[bY(0x10d1)](){const hC=bY;return null!==this['#table'][hC(0x344)](hC(0xee3));}get[bY(0x6a2)](){const hD=bY;return this[hD(0xfd9)](hD(0x6a2));}set['disabled'](af){const hE=bY;af?this[hE(0xa0a)]('disabled',''):this['removeAttribute'](hE(0x6a2));}#t=[];#Ze=0xa;#P;constructor(){const hF=bY;super(),this.#P=this['attachShadow']({'mode':hF(0xc5d),'delegatesFocus':!0x1}),this.#P[hF(0x48f)]=[a2['themeStyleSheet'],Oi.#S],this.#P[hF(0x775)](document[hF(0xc3b)](Oi.#C['content'],!0x0));for(let af of this.#P[hF(0x44e)]('[id]'))this['#'+af['id']]=af;this.#P[hF(0x1012)]('pointerdown',ag=>this.#Ye(ag)),this.#P['addEventListener'](hF(0xff9),ag=>this.#Xe(ag)),this[hF(0x1012)]('keydown',ag=>this.#ie(ag));}[bY(0x854)](){const hG=bY;this[hG(0xbc7)]=0x0;}#Ye(af){const hH=bY;if(this[hH(0x6a2)])return;let ag=af['target'][hH(0xc06)]('tr'),ah=af[hH(0x779)][hH(0xc06)]('x-input');if(ag&&!ah&&this['#tbody'][hH(0x7ac)]>0x1){this.#Je();for(let aj of this[hH(0x580)][hH(0x573)])if(aj===ag){aj[hH(0xa0a)](hH(0x2a6),'');for(let ak of aj['children'])ak[hH(0xe87)][hH(0xc2f)](hH(0x42f));}else{aj[hH(0x88e)]('data-selected');for(let al of aj['children'])al['part'][hH(0x102a)](hH(0x42f));}}}#Xe(af){const hI=bY;if(this[hI(0x6a2)])return;let ag=af[hI(0x779)][hI(0xc06)]('tr');ag&&0x2===af[hI(0xdd7)]&&!0x1===ag[hI(0xfd9)]('data-editing')&&!0x1===ag[hI(0xfd9)](hI(0x33b))&&this.#Qe(ag);}#ie(af){const hJ=bY;this[hJ(0x6a2)]||(hJ(0xab8)===af[hJ(0xe52)]?!0x0===this[hJ(0x10d1)]?(this.#Je(),this['focus']()):this.#Qe():'Escape'===af[hJ(0xe52)]?!0x0===this[hJ(0x10d1)]&&(af[hJ(0x539)](),this.#Je(),this[hJ(0x72c)]()):'Backspace'===af[hJ(0xe52)]?!0x1===this[hJ(0x10d1)]&&(af[hJ(0x539)](),this.#et()):'ArrowUp'===af[hJ(0xe52)]?!0x1===this[hJ(0x10d1)]&&this.#tt():hJ(0x35e)===af['key']&&!0x1===this['editing']&&this.#it());}#Qe(af){const hK=bY;let ag=this[hK(0x5a6)][hK(0x344)]('tr[data-selected]');if(!0x1===ag?.[hK(0xfd9)](hK(0x33b))){ag[hK(0xa0a)](hK(0x1086),''),ag[hK(0x467)]();for(let ak of ag[hK(0x573)])ak['part'][hK(0xc2f)](hK(0x42f));let ah=ag[hK(0x344)](hK(0x1c9)),aj=ie`<x-input class="input" part="input" value="${ah[hK(0xad6)]}" validation="instant"></x-input>`;ah[hK(0xf85)](aj),ah['hidden']=!0x0,aj[hK(0xa16)](),aj[hK(0x1012)]('focusout',()=>{this.#Je();}),aj[hK(0x1012)](hK(0xa4c),al=>{const hL=hK;al['preventDefault']();let am=aj[hL(0xf0a)][hL(0x963)]();var an;am[hL(0x6dc)]>0x0&&!0x1===(an=am,new RegExp(hL(0xd47))[hL(0xc04)](an))?aj[hL(0x75e)]({'href':hL(0xc18)}):aj['setCustomValidity']('');});}}#Je(){const hM=bY;let af=this[hM(0x5a6)][hM(0x344)]('tr[data-editing]');if(af){let ag=ii(af),ah=af[hM(0x344)](hM(0x1c9)),aj=af[hM(0x344)]('.input');if(af['removeAttribute'](hM(0x1086)),ah['hidden']=!0x1,aj[hM(0x102a)](),!0x0===aj[hM(0xbab)]()){let ak=ah[hM(0xad6)],al=aj[hM(0xf0a)][hM(0x963)]()[hM(0x10b1)]();if(ak!==al){let am=null;if(''!==al){for(let an of this[hM(0x580)][hM(0x573)])if(an!==af){if(an[hM(0x344)](hM(0x1c9))[hM(0xad6)]===al){am=an;break;}}}am?(''!==ak&&(ah['textContent']='',this.#t[ag]='',this[hM(0x10bf)](new CustomEvent('change'))),this.#st(am)):(ah['textContent']=al,this.#t[ag]=''===al?null:al,this[hM(0x10bf)](new CustomEvent(hM(0x63b))));}}}}#st(af){const hN=bY;let ag=this[hN(0x5a6)][hN(0x344)](hN(0x6f2));if(ag&&ag!==af){ag[hN(0x88e)]('data-selected');for(let ah of ag[hN(0x573)])ah[hN(0xe87)][hN(0x102a)](hN(0x42f));}af['setAttribute']('data-selected','');for(let aj of af[hN(0x573)])aj['part'][hN(0xc2f)](hN(0x42f));af[hN(0x467)]();}#tt(){const hO=bY;let af=this[hO(0x5a6)][hO(0x344)](hO(0x6f2));if(af){let ag=af[hO(0x926)];if(ag){af['removeAttribute'](hO(0x2a6));for(let ah of af[hO(0x573)])ah[hO(0xe87)]['remove'](hO(0x42f));ag['setAttribute'](hO(0x2a6),'');for(let aj of ag[hO(0x573)])aj[hO(0xe87)][hO(0xc2f)]('selected-cell');ag[hO(0x467)]();}}}#it(){const hP=bY;let af=this[hP(0x5a6)]['querySelector'](hP(0x6f2));if(af){let ag=af[hP(0xbd8)];if(ag){af[hP(0x88e)](hP(0x2a6));for(let ah of af[hP(0x573)])ah[hP(0xe87)][hP(0x102a)](hP(0x42f));ag[hP(0xa0a)](hP(0x2a6),'');for(let aj of ag[hP(0x573)])aj[hP(0xe87)][hP(0xc2f)](hP(0x42f));ag[hP(0x467)]();}}}#et(){const hQ=bY;let af=this['#table'][hQ(0x344)](hQ(0x6f2)),ag=ii(af),ah=af[hQ(0x344)](hQ(0x1c9));if(af){let aj='';ah[hQ(0xad6)]!==aj&&(ah[hQ(0xad6)]=aj,this.#t[ag]=null,this[hQ(0x10bf)](new CustomEvent(hQ(0x63b))));}}#A(){const hR=bY;let af='';for(let ag=0x1;ag<=this.#Ze;ag+=0x1){let ah=this.#t[ag-0x1];af+=hR(0xcbc)+(0x1===ag?hR(0x33b):'')+hR(0xa6f)+ag+hR(0xda0)+(null==ah?'':this.#t[ag-0x1])+hR(0x48d);}this[hR(0x580)][hR(0x8c2)]=af;}}void 0x0===customElements[bY(0x10bd)]('bx-userseditor')&&customElements['define'](bY(0xa50),Oi);let _i=(af,ag)=>{const hS=bY;let ah=V([...af['keys'](),...ag[hS(0x414)]()]),aj=[];for(let ak of ah)af['get'](ak)!==ag[hS(0x10bd)](ak)&&aj[hS(0xc68)](ak);return aj;},qi=(af,ag,ah)=>{const hT=bY;let aj=new URL(af),ak=new URLSearchParams(aj[hT(0xa28)]);return null==ah||''===ah?ak['delete'](ag):ak['set'](ag,ah),aj['search']=ak[hT(0xd23)](),aj[hT(0xbd9)];};class ji extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#authentication"></x-message></h2> <section id="email-section"> <h3><x-message href="#email"></x-message></h3> <p><x-message href="#email-hint"></x-message></p> <x-box> <x-input id="email-input" type="email"></x-input> <x-button id="email-change-button" disabled="disabled"> <x-label><x-message href="#change"></x-message></x-label> </x-button> <x-button id="email-verify-button"> <x-label><x-message href="#verify"></x-message></x-label> </x-button> <x-throbber id="email-throbber" hidden></x-throbber> </x-box> </section> <hr> <section id="password-section"> <h3><x-message href="#password"></x-message></h3> <p><x-message href="#password-hint"></x-message></p> <x-box> <x-input id="password-input" type="password"> <x-label id="password-placeholder">•••••••••••</x-label> </x-input> <x-button id="password-change-button" disabled="disabled"> <x-label><x-message href="#change"></x-message></x-label> </x-button> <x-throbber id="password-throbber" hidden></x-throbber> </x-box> </section> <hr> <section id="users-section" hidden> <h3><x-message href="#users"></x-message></h3> <p id="users-hint"><x-message href="#users-emails-hint"></x-message></p> <bx-userseditor id="users-editor"></bx-userseditor> <x-box id="users-change-box"> <x-button id="users-change-button" disabled="disabled"> <x-label><x-message href="#change"></x-message></x-label> </x-button> <x-throbber id="users-change-throbber" hidden></x-throbber> </x-box> </section> </template>
  `;static ['_shadowStyleSheet']=se`#email-section>x-box{margin-top:4px}#email-input{flex:1;max-width:none}#email-change-button,#email-verify-button{margin-left:6px}#email-throbber{width:24px;height:24px;margin-left:6px}#password-section>x-box{margin-top:4px}#password-input{flex:1;max-width:none;margin-right:6px}#password-change-button{width:143px}#password-throbber{width:24px;height:24px;margin-left:6px}#users-change-box{margin-top:8px;width:100%}#users-change-button{flex:1}#users-change-throbber{margin-left:8px}`;#at;constructor(){const hU=bY;super(),this['#email-input'][hU(0x1012)](hU(0x84e),()=>this.#ot()),this[hU(0x1018)]['addEventListener'](hU(0x57f),af=>this.#nt(af)),this[hU(0x6e7)][hU(0x1012)](hU(0xff9),()=>this.#lt()),this[hU(0xa8e)][hU(0x1012)](hU(0xff9),()=>this.#rt()),this[hU(0xdb8)]['addEventListener'](hU(0x84e),()=>this.#ht()),this['#password-input'][hU(0x1012)](hU(0x57f),af=>this.#ct(af)),this[hU(0x680)][hU(0x1012)](hU(0xff9),()=>this.#dt()),this[hU(0x626)][hU(0x1012)]('click',af=>this.#ut(af)),this[hU(0xf66)]['addEventListener'](hU(0x63b),()=>this.#pt()),this[hU(0xf09)][hU(0x1012)](hU(0xff9),()=>this.#mt());}['l'](){const hV=bY;this.#A(),Bi[hV(0xf5c)]['addEventListener'](hV(0x284),this.#at=()=>this.#A());}['h'](){const hW=bY;Bi[hW(0xf5c)][hW(0xee0)](hW(0x284),this.#at);}#ot(){const hX=bY;Bi['auth'][hX(0xff7)]!==this['#email-input'][hX(0xf0a)][hX(0x963)]()&&!0x1===this[hX(0x1018)][hX(0xe1f)]?(this[hX(0x6e7)][hX(0x6a2)]=!0x1,this['#email-change-button']['toggled']=!0x0):(this[hX(0x6e7)][hX(0x6a2)]=!0x0,this[hX(0x6e7)][hX(0x42a)]=!0x1);}#nt(af){const hY=bY;hY(0xab8)===af[hY(0xe52)]&&this['#email-change-button'][hY(0xff9)]();}async #lt(){const hZ=bY;if(!0x0===this[hZ(0x1018)][hZ(0xbab)]()){this[hZ(0x1018)][hZ(0x6a2)]=!0x0,this[hZ(0x6e7)][hZ(0x6a2)]=!0x0,this[hZ(0x32b)][hZ(0x96e)]=!0x1;let af=Bi[hZ(0xf5c)][hZ(0xdc1)],ag=this[hZ(0x1018)]['value'][hZ(0x963)](),ah=Bi['auth']['userEmail'],aj=null;try{await Bi['auth']['changeEmail'](ag);}catch(ak){aj=ak;}if('auth/requires-recent-login'===aj?.[hZ(0x3cb)]){if(await this['o']['openPasswordConfirmDialog']()){aj=null;try{await Bi['auth'][hZ(0xdbb)](ag);}catch(al){aj=al;}}}this[hZ(0x1018)][hZ(0x6a2)]=!0x1,this[hZ(0x6e7)]['disabled']=!0x1,this[hZ(0x32b)][hZ(0x96e)]=!0x0,aj?hZ(0x64e)===aj[hZ(0x3cb)]?this[hZ(0x1018)][hZ(0x75e)]({'href':'#invalid-email'}):hZ(0x7bc)===aj['code']?this['#email-input']['setCustomValidity']({'href':hZ(0x68c)}):this['o'][hZ(0xafc)]({'title':{'href':hZ(0xb8e)},'detail':aj['message']+'\x20('+aj[hZ(0x3cb)]+')','buttons':[{'href':hZ(0x95a)}]}):(Bi['functions']['postMessage'](hZ(0x8df),{'userID':af,'email':ag,'oldEmail':ah}),await Bi[hZ(0xf5c)][hZ(0x5af)](),this.#xt());}}#rt(){const i0=bY;this['o'][i0(0x249)]();}#ht(){const i1=bY;this[i1(0xdb8)][i1(0xf0a)][i1(0x6dc)]>0x0?(this[i1(0x680)]['disabled']=!0x1,this[i1(0x680)][i1(0x42a)]=!0x0):(this[i1(0x680)]['disabled']=!0x0,this['#password-change-button']['toggled']=!0x1);}#ct(af){const i2=bY;i2(0xab8)===af[i2(0xe52)]&&this[i2(0x680)][i2(0xff9)]();}async #dt(){const i3=bY;if(!0x0===this[i3(0xdb8)][i3(0xbab)]()){this[i3(0xdb8)][i3(0x6a2)]=!0x0,this['#password-change-button'][i3(0x6a2)]=!0x0,this[i3(0xeac)][i3(0x96e)]=!0x1;let af=this[i3(0xdb8)][i3(0xf0a)][i3(0x963)](),ag=null;try{await Bi[i3(0xf5c)]['changePassword'](af);}catch(ah){ag=ah;}if(i3(0x86b)===ag?.[i3(0x3cb)]){if(await this['o'][i3(0x267)]()){ag=null;try{await Bi[i3(0xf5c)]['changePassword'](af);}catch(aj){ag=aj;}}}this[i3(0xdb8)]['disabled']=!0x1,this[i3(0x680)][i3(0x6a2)]=!0x1,this[i3(0xeac)]['hidden']=!0x0,ag?i3(0x86b)===ag[i3(0x3cb)]||('auth/weak-password'===ag[i3(0x3cb)]?(this[i3(0xdb8)][i3(0x75e)]({'href':'#password-too-short'}),this[i3(0xdb8)][i3(0x72c)]()):this['o'][i3(0xafc)]({'title':{'href':i3(0x393)},'detail':ag['message']+'\x20('+ag[i3(0x3cb)]+')','buttons':[{'href':'#close'}]})):this.#gt();}}#ut(af){const i4=bY;af['target'][i4(0xc06)]('a')&&(af[i4(0x539)](),this['o']['navigate'](qi(location['href'],'dialog',i4(0xea1)),!0x0));}#pt(){this['#users-change-button']['disabled']=!0x1;}async #mt(){const i5=bY;this[i5(0xf66)]['disabled']=!0x0,this[i5(0xf09)]['disabled']=!0x0,this[i5(0x7ff)][i5(0x96e)]=!0x1;let [af,...ag]=this[i5(0xf66)][i5(0xf0a)],ah=null;await it(0xfa0);try{await Bi[i5(0xfb8)][i5(0x6ba)](i5(0x8d4),{'orgLeaderID':Bi[i5(0xf5c)]['userID'],'orgUsers':ag});}catch(aj){ah=aj;}await it(0xfa0),ah?(this[i5(0xf66)][i5(0x6a2)]=!0x1,this[i5(0xf09)][i5(0x6a2)]=!0x1,this[i5(0x7ff)][i5(0x96e)]=!0x0,await this['o']['openMessageDialog']({'title':{'href':'#failed-to-change-users'},'detail':bi(ah),'buttons':[{'href':i5(0x95a)}]})):(this[i5(0xf66)][i5(0x6a2)]=!0x1,this['#users-change-button'][i5(0x6a2)]=!0x0,this['#users-change-throbber']['hidden']=!0x0);}#A(){this.#xt(),this.#gt(),this.#bt();}#xt(){const i6=bY;if(null!==Bi[i6(0xf5c)][i6(0xdc1)]){this[i6(0xb6e)][i6(0x96e)]=!0x1,this[i6(0x1018)][i6(0xf0a)]=Bi[i6(0xf5c)][i6(0xff7)],this[i6(0x1018)][i6(0x75e)](''),this[i6(0xa8e)][i6(0x6a2)]=Bi[i6(0xf5c)]['userEmailVerified'],this[i6(0x6e7)][i6(0x42a)]=!0x1,this[i6(0x6e7)][i6(0x6a2)]=!0x0;let af=Bi[i6(0xf5c)][i6(0x354)];null===af||'deleted'===af[i6(0x887)]||void 0x0===af[i6(0x887)]?this[i6(0x1018)][i6(0x6a2)]=!0x1:this[i6(0x1018)]['disabled']=!0x0;}else this[i6(0xb6e)][i6(0x96e)]=!0x0;}#gt(){const i7=bY;null!==Bi[i7(0xf5c)][i7(0xdc1)]?(this['#password-section'][i7(0x96e)]=!0x1,this[i7(0xdb8)][i7(0xf0a)]='',this[i7(0xdb8)][i7(0x75e)](''),this[i7(0x680)][i7(0x42a)]=!0x1,this['#password-change-button'][i7(0x6a2)]=!0x0):this[i7(0xfd7)][i7(0x96e)]=!0x0;}#bt(){const i8=bY;let af=Bi['auth'][i8(0x354)],[ag,ah]=Bi[i8(0x8d9)]['getEffectiveSubscriptionPlanID'](af);if(ah)this[i8(0x87e)]['hidden']=!0x0,this[i8(0x87e)][i8(0x926)][i8(0x96e)]=!0x0;else{if(null!==Bi[i8(0xf5c)]['userID']){let aj=[];af?.[i8(0x92b)]&&(aj=af['orgUsers']),this[i8(0x87e)][i8(0x96e)]=!0x1,this['#users-section'][i8(0x926)][i8(0x96e)]=!0x1,this[i8(0xf66)][i8(0xb5e)]=void 0x0!==af?.[i8(0xfb7)]?af[i8(0xfb7)]:0x1,this[i8(0xf66)][i8(0xf0a)]=[Bi['auth'][i8(0xff7)],...aj],this[i8(0xf09)][i8(0x6a2)]=!0x0;}else this['#users-section']['hidden']=!0x0,this[i8(0x87e)][i8(0x926)][i8(0x96e)]=!0x0;}}}customElements[bY(0x864)](bY(0x276),ji);const Vi='jarek@boxy-svg.com';class Gi extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#subscription"></x-message></h2> <main id="main"> <section id="info-section"> <p> <strong><x-message href="#current-plan"></x-message>:</strong> <span id="subscription-plan-span"><x-message href="#fetching" ellipsis></x-message></span> </p> <p> <strong><x-message href="#status"></x-message>:</strong> <span id="subscription-status-span"><x-message href="#fetching" ellipsis></x-message></span> </p> </section> <section id="table-section"> <table id="table"> <thead id="table-head"> <tr> <td><x-message href="subscription-plan"></x-message></td> <td> <x-radios> <x-radio id="standard-plan-radio" size="small"> <x-label><x-message href="subscription-plan.standard"></x-message></x-label> </x-radio> </x-radios> </td> <td> <x-radios> <x-radio id="premium-plan-radio" size="small"> <x-label><x-message href="subscription-plan.premium"></x-message></x-label> </x-radio> </x-radios> </td> </tr> </thead> <tbody id="table-body"> <tr> <td><x-message href="desktop-app"></x-message></td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> </tr> <tr> <td><x-message href="web-app"></x-message></td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> </tr> <tr> <td><x-message href="save-svg-files-to-disk"></x-message></td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> </tr> <tr> <td><x-message href="save-and-host-svg-files-in-cloud"></x-message></td> <td> <x-icon href="#feature-unsupported" part="no-icon"></x-icon> </td> <td> <x-button skin="flat" id="cloud-button"> <x-icon part="yes-icon" href="#feature-supported-asterisk"></x-icon> <x-popover modal> <main> <p><x-message href="#cloud-storage-hint" args="email:${Vi}"></x-message></p> </main> </x-popover> </x-button> </td> </tr> <tr> <td><x-message href="sync-settings-between-devices"></x-message></td> <td> <x-icon href="#feature-unsupported" part="no-icon"></x-icon> </td> <td> <x-icon href="#feature-supported" part="yes-icon"></x-icon> </td> </tr> </tbody> <tfoot id="table-foot"> <tr id="billing-row"> <td><x-message href="#billing"></x-message></td> <td id="billing-td" colspan="2"> <x-select id="billing-select" disabled="disabled"> <x-menu> <x-menuitem value="monthly"> <x-label><x-message href="#billing.monthly"></x-message></x-label> </x-menuitem> <x-menuitem value="yearly" toggled> <x-label><x-message href="#billing.yearly"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </td> </tr> <tr id="quantity-row"> <td> <x-box> <span><x-message href="#users"></x-message></span> <x-button id="quantity-help-button" class="help-button" skin="circular" size="small"> <x-icon href="#help"></x-icon> <x-popover modal> <main> <x-message href="#users-count-hint"></x-message> </main> </x-popover> </x-button> </x-box> </td> <td id="quantity-td" colspan="2"> <x-numberinput id="quantity-input" value="1" min="1" condensed> <x-stepper></x-stepper> </x-numberinput> </td> </tr> <tr id="discount-row"> <td> <x-box> <span><x-message href="#volume-discount"></x-message></span> <x-button id="discount-help-button" class="help-button" skin="circular" size="small"> <x-icon href="#help"></x-icon> <x-popover modal> <main> <x-message href="#volume-discount-hint"></x-message> </main> </x-popover> </x-button> </x-box> </td> <td id="discount-td" colspan="2"> <span id="discount-span"></span> </td> </tr> <tr id="region-row"> <td><x-message href="#region"></x-message></td> <td id="region-td" colspan="2"> <x-select id="region-select"> <x-menu id="region-menu"></x-menu> </x-select> </td> </tr> <tr id="price-row"> <td> <x-box> <span><x-message href="price"></x-message></span> <x-button id="price-help-button" class="help-button" skin="circular" size="small"> <x-icon href="#help"></x-icon> <x-popover modal> <main> <p><x-message href="price-proration-hint"></x-message></p> </main> </x-popover> </x-button> </x-box> </td> <td id="price-td" colspan="2"></td> </tr> </tfoot> </table> </section> <section id="buttons-section"> <x-box id="subscription-buttons"> <x-button id="billing-button" condensed disabled="disabled"> <x-icon href="#credit-card"></x-icon> <x-label><x-message href="#update-billing" ellipsis></x-message></x-label> </x-button> <x-button id="cancel-button" condensed disabled="disabled"> <x-icon href="#cancel"></x-icon> <x-label><x-message href="#cancel-subscription" ellipsis></x-message></x-label> </x-button> <x-button id="subscribe-button" condensed toggled disabled="disabled"> <x-icon href="#credit-card"></x-icon> <x-label id="subscribe-button-label"></x-label> </x-button> </x-box> </section> </main> <x-progressbar id="progress-bar" hidden></x-progressbar> </template>
  `;static [bY(0x78e)]=se`#info-section>p{line-height:1.4;margin:3px}#table-section{margin:18px 0 26px 0}table{width:100%;border-collapse:collapse;font-size:13px;overflow:visible}table tr{height:35px;border-radius:inherit}table td{padding:0 10px;box-sizing:border-box}table p:first-child{margin-top:0}table p:last-child{margin-bottom:0}thead{border-radius:inherit}thead td:nth-child(2){padding:0 6px}thead td:nth-child(3){padding:0 6px;border-top-right-radius:inherit}thead td x-radio{margin:0 auto}thead td x-radio x-label{font-weight:700;font-size:15px}tbody x-icon[part=no-icon],tbody x-icon[part=yes-icon]{margin:0 auto}tbody #cloud-button{width:100%;height:100%}tbody #cloud-button[disabled]{opacity:1}tbody #cloud-button::part(arrow){display:none}tbody #cloud-button x-icon{width:17px;height:17px}tbody #cloud-button[size=large] x-icon{width:21px;height:21px}tbody #cloud-button x-popover{width:300px;user-select:none;-webkit-user-select:none}tbody #cloud-button x-popover p{margin:0}tfoot td:nth-child(2){padding:0}tfoot .help-button{margin-left:auto}tfoot .help-button::part(arrow){display:none}tfoot x-popover p:not(:first-child){margin-top:8px}tfoot x-popover ul{margin:8px 0 0 5px;padding:0;list-style:none}tfoot x-popover li{position:relative;margin:0;padding-left:13px}tfoot x-popover li:before{position:absolute;left:0;content:"•";font-weight:700}#quantity-td{position:relative}#quantity-help-button x-popover{width:360px}#quantity-input{position:absolute;top:0;left:0;width:100%;height:100%;max-width:none;padding-left:4px;background:0 0;border:none}#quantity-input[disabled]{background:0 0;opacity:1}#quantity-input[disabled] x-stepper{visibility:hidden}#discount-td{padding:0 10px}#discount-help-button x-popover{width:320px}#billing-td{position:relative}#billing-select{position:absolute;top:0;left:0;width:100%;height:100%;background:0 0;border:none;text-align:start}#billing-select[disabled]{opacity:1}#billing-select[disabled]::before{display:none}#billing-select[disabled]::part(arrow){display:none}#region-td{position:relative}#region-select{position:absolute;top:0;left:0;width:100%;height:100%;background:0 0;border:none;text-align:start}#region-select[disabled]{opacity:1}#region-select[disabled]::before{display:none}#region-select[disabled]::part(arrow){display:none}#price-td{font-weight:700;padding:0 10px}#price-help-button x-popover{width:310px}#subscription-buttons{margin-top:10px}#subscription-buttons>x-button{flex:1;min-width:fit-content;margin-left:10px}#subscription-buttons>x-button:first-child{margin-left:0}#progress-bar{margin-top:30px}`;#ft;#F;#wt=null;#vt=null;#yt=null;constructor(){const i9=bY;super(),this['#table']['addEventListener'](i9(0xff9),af=>this.#kt(af)),this[i9(0xcb5)]['addEventListener']('changeend',af=>this.#Ct(af)),this['#billing-select'][i9(0x1012)](i9(0x63b),()=>this.#St(event)),this[i9(0x53f)][i9(0x1012)](i9(0x63b),()=>this.#Tt()),this['#billing-button'][i9(0x1012)](i9(0xff9),()=>this.#$t()),this['#cancel-button'][i9(0x1012)](i9(0xff9),()=>this.#Pt()),this['#subscribe-button'][i9(0x1012)](i9(0xff9),()=>this.#Et());}async['l'](){const ib=bY;this.#A(),Bi['auth'][ib(0x1012)](ib(0x2e2),this.#ft=()=>{this.#A();}),a2[ib(0x1012)](ib(0x60c),this.#F=()=>{this.#Lt();});}['h'](){const ic=bY;Bi['auth'][ic(0xee0)](ic(0x2e2),this.#ft),a2[ic(0xee0)](ic(0x60c),this.#F);}#kt(af){const id=bY;let ag=af[id(0x779)][id(0xc06)]('a'),ah=af['target'][id(0xc06)]('td');if(ag)af['preventDefault'](),this['o'][id(0x908)](ag[id(0xbd9)],!0x0);else{if(ah?.['cellIndex']>0x0&&ah[id(0xc06)]('thead,\x20tbody')&&!0x1===this[id(0x5a6)]['hasAttribute'](id(0x33b))){let aj;0x1===ah['cellIndex']?aj=vi:0x2===ah[id(0xe2b)]&&('monthly'===this[id(0xa63)][id(0xf0a)]?aj=ki:id(0x831)===this['#billing-select']['value']&&(aj=yi)),this.#wt!==aj&&(this.#wt=aj,this.#Lt(),this.#Ut());}}}#Ct(af){const ig=bY;this.#vt=this[ig(0xcb5)][ig(0xf0a)],this.#Lt(),this.#Ut();}#St(){const ih=bY;ih(0x831)===this[ih(0xa63)][ih(0xf0a)]?this.#wt=yi:'monthly'===this['#billing-select'][ih(0xf0a)]&&(this.#wt=ki),this.#Lt(),this.#Ut();}#Tt(){const ij=bY;this.#yt=this[ij(0x53f)]['value'],this.#Lt(),this.#Ut();}#$t(){const ik=bY;window[ik(0x9ff)](this[ik(0xa84)][ik(0xf0a)]);}#Pt(){const il=bY;window[il(0x9ff)](this[il(0x4a1)][il(0xf0a)]);}async #Et(){const im=bY;let af=Bi[im(0xf5c)][im(0x354)];if(null===af){let ag=null,ah=null;try{ag=await Bi['database'][im(0xd1f)](im(0xce7),Bi[im(0xf5c)]['userID']);}catch(aj){ah=aj;}if(null!==ag||null!==ah)return void this['o'][im(0xafc)]({'title':{'href':'#network-error'},'detail':ah?bi(ah):im(0x1e7),'buttons':[{'href':im(0x95a)}]});}if(null===af||im(0xbd3)===af[im(0x887)]||im(0x28a)===af[im(0x887)]&&null!==af[im(0x71e)])this['o']['navigate'](qi(location[im(0xbd9)],'dialog',im(0x349)+this.#wt+'×'+this.#vt+'×'+this.#yt));else{if(im(0xc02)===af[im(0x887)]){if(await this['o'][im(0x267)]()){this['#main'][im(0x96e)]=!0x0,this['#progress-bar'][im(0x96e)]=!0x1,this['o']['lockInput']();let ak=null,al=this.#wt,am=this.#vt;try{await Bi[im(0xfb8)][im(0x6ba)](im(0x650),{'userID':Bi[im(0xf5c)][im(0xdc1)],'subscriptionID':af[im(0xc23)],'planID':al,'quantity':am});}catch(an){ak=an;}if(this[im(0x21d)][im(0x96e)]=!0x1,this[im(0x8be)][im(0x96e)]=!0x0,this['o'][im(0xdf3)](),ak)this['o']['openMessageDialog']({'title':{'href':im(0x5f6)},'detail':bi(ak),'buttons':[{'href':im(0x95a)}]});else{let ap=this.#Dt(al,am);this['o']['openMessageDialog']({'title':{'href':im(0x5e1)},'detail':{'href':im(0x56d),'args':{'planName':ap}},'buttons':[{'href':im(0x95a)}]});}}}}}#Dt(af,ag=0x1){const ip=bY;let ah,aj;return aj=0x1===ag?ip(0xf96):ag+ip(0xcab),af===vi?ah=ip(0xa27)+aj+')':af===ki?ah=ip(0x80b)+aj+')':af===yi&&(ah=ip(0xb47)+aj+')'),ah;}#A(){this.#zt(),this.#Lt(),this.#Ut();}#zt(){const iq=bY;if(null===Bi[iq(0xf5c)][iq(0xdc1)])this[iq(0xcc8)]['hidden']=!0x0;else{this[iq(0xcc8)][iq(0x96e)]=!0x1;let af=Bi[iq(0xf5c)][iq(0x354)],[ag,ah]=Bi['checkout'][iq(0x632)](af);if(null===af){this['#subscription-plan-span'][iq(0x8c2)]=iq(0xab3);let aj=Bi[iq(0xf5c)][iq(0x7a4)]+0x3e8*0xf*0x3c*0x3c*0x18;st(Date[iq(0xee4)]()-aj)<0xf?this[iq(0x95e)][iq(0x8c2)]=iq(0x3bc)+aj+iq(0xa04):this[iq(0x95e)][iq(0x8c2)]=iq(0xebf)+aj+iq(0xa04);}else{if(!0x0===ah)this[iq(0xd20)][iq(0x8c2)]=ag===vi?iq(0xc12):'Premium',this[iq(0x95e)][iq(0x8c2)]='<x-message\x20href=\x22#subscription-status.active-org\x22></x-message>';else{if(this['#subscription-plan-span'][iq(0x8c2)]=this.#Dt(ag,af[iq(0xfb7)]),iq(0xc02)===af['status']){let ak=new Date(af[iq(0x7a3)])['getTime']();this[iq(0x95e)][iq(0x8c2)]=iq(0xa4a)+ak+iq(0xa04);}else{if(iq(0xbd3)===af[iq(0x887)]){let al=new Date(af[iq(0x71e)])[iq(0xd08)]();this['#subscription-status-span']['innerHTML']=iq(0x732)+al+iq(0xa04);}else{if(iq(0x28a)===af['status']){if(null===af[iq(0x71e)])this[iq(0x95e)][iq(0x8c2)]=iq(0x6a7);else{let am=new Date(af['cancellationEffectiveDate'])[iq(0xd08)]();this[iq(0x95e)][iq(0x8c2)]='<x-message\x20href=\x22#subscription-status.cancelled\x22\x20args=\x22date:'+am+'\x22></x-message>';}}}}}}}}async #Lt(){const ir=bY;if(null===Bi[ir(0xf5c)][ir(0xdc1)])this['#table-section'][ir(0x96e)]=!0x0;else{let af=Bi[ir(0xf5c)][ir(0x354)],[ag,ah]=Bi[ir(0x8d9)][ir(0x632)](af);if(null===this.#wt&&(this.#wt=ag||vi),null===this.#vt&&(this.#vt=af?af[ir(0xfb7)]:0x1),null===this.#yt&&(af&&af[ir(0xfa0)]?this.#yt=af[ir(0xfa0)]:this.#yt=await Bi['checkout'][ir(0xc7b)]()),this[ir(0x2d4)][ir(0x96e)]=!0x1,null===this.#wt){for(let aj of this[ir(0x10bb)]['querySelectorAll']('td'))aj[ir(0xe87)][ir(0x102a)](ir(0x42f));for(let ak of this[ir(0x721)][ir(0x44e)]('td'))ak[ir(0xe87)][ir(0x102a)](ir(0x42f));this[ir(0x3b1)][ir(0xe87)][ir(0x102a)](ir(0x42f)),this[ir(0x69f)][ir(0xe87)][ir(0x102a)](ir(0x42f)),this[ir(0xcef)][ir(0xe87)]['remove']('selected-cell'),this[ir(0xe30)][ir(0xe87)][ir(0x102a)](ir(0x42f)),this[ir(0x102b)]['part']['remove'](ir(0x42f)),this['#cloud-button'][ir(0x6a2)]=!0x0;}else{if(this.#wt===vi){for(let al of this['#table-head'][ir(0x44e)]('td'))0x1===al[ir(0xe2b)]?al[ir(0xe87)][ir(0xc2f)](ir(0x42f)):al['part'][ir(0x102a)](ir(0x42f));for(let am of this[ir(0x721)][ir(0x44e)]('td'))0x1===am[ir(0xe2b)]?am['part'][ir(0xc2f)](ir(0x42f)):am[ir(0xe87)][ir(0x102a)](ir(0x42f));this['#quantity-td'][ir(0xe87)][ir(0xc2f)]('selected-cell'),this[ir(0x69f)][ir(0xe87)][ir(0xc2f)]('selected-cell'),this[ir(0xcef)][ir(0xe87)][ir(0xc2f)](ir(0x42f)),this[ir(0xe30)][ir(0xe87)]['add'](ir(0x42f)),this[ir(0x102b)][ir(0xe87)]['add'](ir(0x42f)),this[ir(0x29c)]['disabled']=!0x0;}else{if(this.#wt===ki||this.#wt===yi){for(let an of this['#table-head']['querySelectorAll']('td'))0x2===an['cellIndex']?an[ir(0xe87)][ir(0xc2f)]('selected-cell'):an[ir(0xe87)][ir(0x102a)]('selected-cell');for(let ap of this[ir(0x721)][ir(0x44e)]('td'))0x2===ap[ir(0xe2b)]?ap[ir(0xe87)][ir(0xc2f)](ir(0x42f)):ap['part']['remove'](ir(0x42f));this['#quantity-td']['part']['add'](ir(0x42f)),this[ir(0x69f)][ir(0xe87)][ir(0xc2f)](ir(0x42f)),this['#billing-td']['part'][ir(0xc2f)](ir(0x42f)),this['#region-td']['part'][ir(0xc2f)](ir(0x42f)),this[ir(0x102b)][ir(0xe87)][ir(0xc2f)](ir(0x42f)),this[ir(0x29c)][ir(0x6a2)]=!0x1;}}}if(ah?(this[ir(0x5a6)]['setAttribute'](ir(0x33b),''),this[ir(0x9b1)]['disabled']=!0x0,this['#premium-plan-radio'][ir(0x6a2)]=!0x0):(this['#table'][ir(0x88e)](ir(0x33b)),this[ir(0x9b1)]['disabled']=!0x1,this['#premium-plan-radio'][ir(0x6a2)]=!0x1),this[ir(0x9b1)][ir(0x42a)]=this.#wt===vi,this['#premium-plan-radio'][ir(0x42a)]=this.#wt===ki||this.#wt===yi,ah?this[ir(0x7cc)][ir(0x96e)]=!0x0:(this['#billing-row'][ir(0x96e)]=!0x1,this.#wt===vi?(this[ir(0xa63)][ir(0x6a2)]=!0x0,this[ir(0xa63)][ir(0xf0a)]=ir(0x831)):this.#wt!==ki&&this.#wt!==yi||(this['#billing-select'][ir(0x6a2)]=ah,this[ir(0xa63)][ir(0xf0a)]=this.#wt===ki?ir(0x3f6):ir(0x831))),ah?this[ir(0x394)][ir(0x96e)]=!0x0:(this[ir(0x394)][ir(0x96e)]=!0x1,this[ir(0xcb5)][ir(0xf0a)]=this.#vt),ah)this['#region-row']['hidden']=!0x0;else{if(this['#region-row'][ir(0x96e)]=!0x1,af&&'active'===af[ir(0x887)])this[ir(0x709)][ir(0x96e)]=!0x0;else{if(this['#region-menu'][ir(0x552)]!==a2[ir(0x962)]){let aq=new Intl[(ir(0x829))](a2[ir(0x962)]),ar=new Intl['DisplayNames']([a2[ir(0x962)]],{'type':ir(0xfa0)}),au=$i[ir(0x8fb)](aw=>[aw,ar['of'](aw)])[ir(0x311)]((aw,ax)=>aq[ir(0xe69)](aw[0x1],ax[0x1])),av='';for(let [aw,ax]of au)av+=ir(0x1066)+aw+'\x22><x-label>'+ax+ir(0xf24);this[ir(0xed8)][ir(0x552)]=a2[ir(0x962)],this[ir(0xed8)][ir(0x8c2)]=av;}this['#region-select'][ir(0xf0a)]=this.#yt;}}if(ah)this[ir(0x323)][ir(0x96e)]=!0x0,this[ir(0x346)][ir(0x96e)]=!0x0;else{let ay,az=0x0;if(af&&ir(0xc02)===af[ir(0x887)]&&af['subscriptionPlanID']===this.#wt&&af[ir(0xfb7)]===this.#vt){let aB=z(af['unitPrice']*af[ir(0xfb7)],0x2),aC={'style':'currency','currency':af[ir(0x9a1)],'currencyDisplay':ir(0x898)};ay=new Intl['NumberFormat'](a2[ir(0x962)],aC)['format'](aB),af[ir(0xfb7)]>=0x64?az=0.3:af[ir(0xfb7)]>=0x1e?az=0.2:af[ir(0xfb7)]>=0xa&&(az=0.1);}else{this['#price-td'][ir(0x8c2)]=ir(0xa2c);let aD=await Bi[ir(0x8d9)][ir(0xe25)](this.#wt,this.#vt,this.#yt),aE={'style':ir(0x9a1),'currency':aD[ir(0x9a1)],'currencyDisplay':ir(0x898)};ay=new Intl['NumberFormat'](a2[ir(0x962)],aE)[ir(0xca0)](aD[ir(0x7d7)]),null!==aD[ir(0x254)]&&(ay+='\x20+\x20'+aD[ir(0x254)]),az=aD[ir(0x2ea)];}let aA=0x0===az?ir(0xf6f):0x64*az+'%';this[ir(0x323)][ir(0x96e)]=!0x1,this[ir(0x617)][ir(0x8c2)]=aA,this['#price-row'][ir(0x96e)]=!0x1,this[ir(0x102b)][ir(0x8c2)]=ay;}}}#Ut(){const iu=bY;if(null===Bi['auth'][iu(0xdc1)])this[iu(0x661)][iu(0x96e)]=!0x0;else{this[iu(0x661)][iu(0x96e)]=!0x1;let af=Bi[iu(0xf5c)][iu(0x354)],[ag,ah]=Bi[iu(0x8d9)][iu(0x632)](af);ah?(this[iu(0xa84)][iu(0x6a2)]=!0x0,this[iu(0xa84)][iu(0xf0a)]='',this[iu(0x4a1)][iu(0x6a2)]=!0x0,this['#cancel-button'][iu(0xf0a)]='',this[iu(0xf3f)][iu(0x6a2)]=!0x0,this[iu(0x10db)][iu(0x8c2)]=iu(0x5ce)):null===af||iu(0xbd3)===af['status']?(this[iu(0xa84)][iu(0x6a2)]=!0x0,this['#billing-button'][iu(0xf0a)]='',this['#cancel-button']['disabled']=!0x0,this[iu(0x4a1)][iu(0xf0a)]='',this['#subscribe-button'][iu(0x6a2)]=!0x1,this[iu(0x10db)]['innerHTML']=iu(0x5ce)):'active'===af[iu(0x887)]?(this[iu(0xa84)]['disabled']=!0x1,this[iu(0xa84)][iu(0xf0a)]=af[iu(0x105e)],this[iu(0x4a1)][iu(0x6a2)]=!0x1,this['#cancel-button'][iu(0xf0a)]=af[iu(0xceb)],this['#subscribe-button']['disabled']=this.#wt===af[iu(0x36e)]&&this.#vt===af[iu(0xfb7)],this[iu(0x10db)][iu(0x8c2)]=iu(0x527)):iu(0x28a)===af['status']&&(null===af[iu(0x71e)]?(this[iu(0xa84)][iu(0x6a2)]=!0x1,this[iu(0xa84)][iu(0xf0a)]=af[iu(0x105e)],this[iu(0x4a1)]['disabled']=!0x1,this[iu(0x4a1)][iu(0xf0a)]=af['cancelURL'],this[iu(0xf3f)]['disabled']=!0x0,this[iu(0x10db)][iu(0x8c2)]=iu(0x527)):(this[iu(0xa84)][iu(0x6a2)]=!0x0,this[iu(0xa84)]['value']='',this['#cancel-button'][iu(0x6a2)]=!0x0,this[iu(0x4a1)][iu(0xf0a)]='',this['#subscribe-button'][iu(0x6a2)]=!0x1,this['#subscribe-button-label'][iu(0x8c2)]=iu(0x5ce)));}}}customElements[bY(0x864)](bY(0xdaa),Gi);class Hi extends ni{static [bY(0x2a2)]=ie` <template> <h2><x-message href="#delete-account"></x-message></h2> <div id="default-view"> <section id="delete-account-section"> <h3><x-message href="#warning"></x-message></h3> <p><x-message href="#delete-account-hint"></x-message></p> <x-box> <x-input id="password-input" type="password"> <x-label id="password-placeholder"><x-message href="#enter-your-password-here"></x-message></x-label> </x-input> <x-button id="delete-account-button" disabled="disabled"> <x-label><x-message href="#delete-account"></x-message></x-label> </x-button> </x-box> </section> </div> <div id="progress-view" hidden> <x-progressbar id="progress-bar"></x-progressbar> <x-label id="progress-label">Connecting to server…</x-label> </div> </template>
  `;static [bY(0x78e)]=se`#default-view{width:100%;height:100%}#password-input{flex:1;max-width:none;margin-right:8px}#progress-view{display:flex;flex-flow:column;align-items:center;justify-content:center;margin-top:30px}#progress-view[hidden]{display:none}#progress-label{margin-top:14px}`;#at;constructor(){const iv=bY;super(),this[iv(0xdb8)]['addEventListener'](iv(0x84e),()=>this.#A()),this[iv(0x385)]['addEventListener'](iv(0xff9),()=>this.#Mt());}['l'](){const iw=bY;Bi[iw(0xf5c)]['addEventListener']('userchange',this.#at=()=>this.#A()),this.#A();}['h'](){const ix=bY;Bi['auth'][ix(0xee0)](ix(0x284),this.#at);}#A(){const iy=bY;0x0===this[iy(0xdb8)][iy(0xf0a)][iy(0x6dc)]?(this[iy(0x385)]['disabled']=!0x0,this['#delete-account-button']['toggled']=!0x1,this[iy(0x385)]['part'][iy(0x102a)]('delete-button')):(this['#delete-account-button'][iy(0x6a2)]=!0x1,this[iy(0x385)]['toggled']=!0x0,this[iy(0x385)][iy(0xe87)][iy(0xc2f)](iy(0x426)));}async #Mt(){const iz=bY;this[iz(0x2a4)]['hidden']=!0x0,this[iz(0xb02)]['hidden']=!0x1,this['o'][iz(0xb52)]();{this[iz(0x48a)][iz(0xad6)]=iz(0x8ca);let af=this[iz(0xdb8)][iz(0xf0a)],ag=null;try{await Bi['auth'][iz(0xf94)](af);}catch(ah){ag=ah;}if(ag)return this[iz(0x2a4)][iz(0x96e)]=!0x1,this[iz(0xb02)][iz(0x96e)]=!0x0,this['o'][iz(0xdf3)](),void(iz(0x820)===ag['code']?(this['#password-input'][iz(0x75e)](iz(0xfa6)),this['#delete-account-button']['disabled']=!0x0):this['o'][iz(0xafc)]({'title':{'href':iz(0xde3)},'detail':ag['message']+'\x20('+ag['code']+')','buttons':[{'href':iz(0x95a)}]}));}{this[iz(0x48a)][iz(0xad6)]=iz(0x698);let aj=null;try{await Bi[iz(0xfb8)][iz(0x6ba)](iz(0x8b8),Bi[iz(0xf5c)]['userID']);}catch(ak){aj=ak;}if(aj)return this[iz(0x2a4)][iz(0x96e)]=!0x1,this[iz(0xb02)][iz(0x96e)]=!0x0,this['o']['unlockInput'](),void this['o'][iz(0xafc)]({'title':{'href':iz(0xde3)},'detail':bi(aj),'buttons':[{'href':iz(0x95a)}]});}this[iz(0x48a)]['textContent']=iz(0x46a),await it(0x3e8),Bi[iz(0xf5c)][iz(0x556)]();{this['o'][iz(0xdf3)]();let al=si(this,'dialog');al&&al['close']();}}}customElements[bY(0x864)]('bx-deleteaccountsettings',Hi);class Wi extends HTMLElement{static [bY(0x1068)]=[bY(0xf0a)];static #C=ie` <template> <x-box id="container"> <sidebar id="sidebar" part="sidebar"> <x-buttons id="sidebar-buttons" tracking="1" vertical> <x-button skin="nav" value="general" id="general-button" toggled> <x-icon href="#settings"></x-icon> <x-label><x-message href="#general" autocapitalize></x-message></x-label> <x-tooltip><x-message href="#general"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="ui"> <x-icon href="#settings-ui"></x-icon> <x-label><x-message href="#ui" autocapitalize></x-message></x-label> <x-tooltip><x-message href="#ui"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="markup"> <x-icon href="#settings-markup"></x-icon> <x-label><x-message href="#markup" autocapitalize></x-message></x-label> <x-tooltip><x-message href="#markup"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="garbage-collector"> <x-icon href="#settings-garbage-collector"></x-icon> <x-label><x-message href="#garbage-collector" autocapitalize></x-message></x-label> <x-tooltip><x-message href="#garbage-collector"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="keyboard"> <x-icon href="#settings-keyboard"></x-icon> <x-label><x-message href="#keyboard" autocapitalize></x-message></x-label> <x-tooltip><x-message href="#keyboard"></x-message></x-tooltip> </x-button> <hr id="sidebar-separator-1"> <x-button skin="nav" value="profile" id="profile-button"> <x-icon href="#settings-profile"></x-icon> <x-label><x-message href="#public-profile"></x-message></x-label> <x-tooltip><x-message href="#public-profile"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="auth" id="auth-button"> <x-icon href="#settings-auth"></x-icon> <x-label><x-message href="#authentication"></x-message></x-label> <x-tooltip><x-message href="#authentication"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="subscription" id="subscription-button"> <x-icon href="#settings-subscription"></x-icon> <x-label><x-message href="#subscription"></x-message></x-label> <x-tooltip><x-message href="#subscription"></x-message></x-tooltip> </x-button> <x-button skin="nav" value="delete-account" id="delete-account-button"> <x-icon href="#settings-delete-account"></x-icon> <x-label><x-message href="#delete-account"></x-message></x-label> <x-tooltip><x-message href="#delete-account"></x-message></x-tooltip> </x-button> </x-buttons> <hr id="sidebar-separator-2"> <x-button id="logout-button" condensed> <x-icon href="#logout"></x-icon> <x-label><x-message href="#log-out"></x-message></x-label> <x-tooltip><x-message href="#log-out"></x-message></x-tooltip> </x-button> </sidebar> <main id="main"> <bx-generalsettings id="general-settings" data-name="general"></bx-generalsettings> <bx-uisettings id="ui-settings" data-name="ui"></bx-uisettings> <bx-markupsettings id="markup-settings" data-name="markup"></bx-markupsettings> <bx-garbagecollectorsettings id="garbage-collector-settings" data-name="garbage-collector"> </bx-garbagecollectorsettings> <bx-keyboardsettings id="keyboard-settings" data-name="keyboard"></bx-keyboardsettings> <bx-profilesettings id="profile-settings" data-name="profile"></bx-profilesettings> <bx-authsettings id="auth-settings" data-name="auth"></bx-authsettings> <bx-subscriptionsettings id="subscription-settings" data-name="subscription"></bx-subscriptionsettings> <bx-deleteaccountsettings id="delete-account-settings" data-name="delete-account"></bx-deleteaccountsettings> </main> </x-box> <div id="titlebar"></div> </template>
  `;static #S=se`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    :host(:focus) {
      outline: none;
    }

    #container {
      width: 100%;
      height: 100%;
    }

    /* Titlebar */

    #titlebar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 28px;
      display: none;
    }
    :host-context(bx-macapp) #titlebar {
      display: block;
      -webkit-app-region: drag;
    }

    /* Sidebar */

    #sidebar {
      display: flex;
      flex-flow: column;
      height: 100%;
      border-right: 1px solid transparent;
      box-sizing: border-box;
    }
    :host-context(bx-macapp) #sidebar {
      padding-top: 28px;
    }

    #sidebar-separator-2 {
      margin: auto 0 0 0;
    }

    #sidebar-buttons {
      min-width: 190px;
      padding: 6px;
    }
    @media all and (max-width: 770px) {
      #sidebar-buttons {
        min-width: 0px;
      }
    }

    #sidebar-buttons x-button x-icon {
      margin: 0;
    }

    #sidebar-buttons x-button x-label {
      margin-left: 12px;
    }
    @media all and (max-width: 770px) {
      #sidebar-buttons x-button x-label {
        display: none;
      }
    }

    #sidebar x-button x-tooltip {
      --align: right;
    }
    #sidebar x-button[toggled] x-tooltip {
      display: none;
    }
    @media all and (min-width: 771px) {
      #sidebar x-button x-tooltip {
        display: none;
      }
    }

    #sidebar #logout-button {
      margin: 6px;
      width: calc(100% - 12px);
    }
    @media all and (max-width: 770px) {
      #sidebar #logout-button x-icon {
        margin: 0;
      }

      #sidebar #logout-button x-label {
        display: none;
      }
    }

    /* Main */

    #main {
      width: 100%;
      height: 100%;
      padding: 30px 30px;
      box-sizing: border-box;
      overflow: auto;
    }
  `;get[bY(0xf0a)](){const iA=bY;return this[iA(0xfd9)]('value')?this[iA(0xc51)](iA(0xf0a)):iA(0x95b);}set['value'](af){null===af?this['removeAttribute']('value'):this['setAttribute']('value',af);}[bY(0x301)]={'copy':{'exec':()=>document['execCommand']('copy')},'cut':{'exec':()=>document[bY(0x9db)](bY(0xd55))},'paste':{'exec':()=>document[bY(0x9db)](bY(0xa20))},'selectAll':{'exec':()=>document[bY(0x9db)](bY(0xa16))},'undo':{'exec':()=>document[bY(0x9db)](bY(0x101f))},'redo':{'exec':()=>document[bY(0x9db)](bY(0x3b5))}};#T;#$;#P;#at;constructor(){const iB=bY;super(),this.#P=this['attachShadow']({'mode':iB(0x9ff)}),this.#P[iB(0x48f)]=[a2['themeStyleSheet'],Wi.#S],this.#P['append'](document[iB(0xc3b)](Wi.#C[iB(0x223)],!0x0));for(let af of this.#P[iB(0x44e)](iB(0x6e3)))this['#'+af['id']]=af;this[iB(0xa0a)](iB(0x366),'0'),this[iB(0x964)][iB(0x1012)](iB(0x807),()=>{const iC=iB;this[iC(0xf0a)]=this[iC(0x964)][iC(0xf0a)],this[iC(0x10bf)](new CustomEvent('valuechange'));}),this[iB(0xe9b)][iB(0x1012)](iB(0xff9),async()=>{const iD=iB;await Bi[iD(0xf5c)][iD(0x556)](),this.#$&&this.#$[iD(0x225)]();}),this[iB(0x1012)](iB(0x57f),ag=>{const iE=iB;iE(0xe73)===ag[iE(0x3cb)]&&!0x1===ag['defaultPrevented']&&this.#$&&this.#$[iE(0x225)]();});}[bY(0x854)](){const iF=bY;this.#T=si(this,'#app'),this.#$=si(this,iF(0x741)),Bi[iF(0xf5c)][iF(0x1012)](iF(0x284),this.#at=()=>this.#A()),this.#A();}[bY(0x7db)](){const iG=bY;Bi[iG(0xf5c)][iG(0xee0)]('userchange',this.#at);for(let af of this[iG(0x21d)][iG(0x573)])af[iG(0x21c)]=!0x1;}[bY(0x83b)](af,ag,ah){const iH=bY;ag!==ah&&iH(0xf0a)===af&&this.#At();}#At(){const iI=bY;this[iI(0xc8b)]&&this.#A();}#A(){const iJ=bY;let af=[iJ(0x901),'bx-portalwebapp'][iJ(0x1d5)](this.#T[iJ(0xa31)])&&null!==Bi[iJ(0xf5c)][iJ(0xdc1)],ag=this[iJ(0xf0a)];[iJ(0xae2),iJ(0xf5c),iJ(0xcd7),iJ(0x8bf)][iJ(0x1d5)](ag)&&!0x1===af&&(ag=iJ(0x95b)),iJ(0xd1b)===this.#T[iJ(0xa31)]&&iJ(0x95b)===ag&&(ag='ui'),this[iJ(0x964)][iJ(0xf0a)]=ag,this[iJ(0xcdb)][iJ(0x96e)]=iJ(0xd1b)===this.#T[iJ(0xa31)],this[iJ(0xd57)]['hidden']=!0x1===af,this[iJ(0x268)][iJ(0x96e)]=!0x1===af,this[iJ(0x7ab)]['hidden']=!0x1===af,this[iJ(0x385)][iJ(0x96e)]=!0x1===af,this[iJ(0xe9b)][iJ(0x96e)]=!0x1===af,this[iJ(0xbe8)][iJ(0x96e)]=!0x1===af,this['#sidebar-separator-2']['hidden']=!0x1===af;for(let ah of this[iJ(0x21d)][iJ(0x573)])ah[iJ(0x21c)]=ah[iJ(0xc51)](iJ(0xaf9))===ag;}}customElements[bY(0x864)](bY(0x103b),Wi);class Ki extends HTMLElement{static ['observedAttributes']=[bY(0x21c)];static #C=ie` <template> <main id="main"> <section id="locale-section"> <h4><x-message href="#language" autocapitalize></x-message></h4> <x-select id="locale-select"> <x-menu id="locale-select-menu"></x-menu> </x-select> </section> <section id="theme-section"> <h4><x-message href="#theme" autocapitalize></x-message></h4> <x-buttons id="theme-buttons" tracking="1"> <x-button value="fluent" condensed> <x-icon href="#windows"></x-icon> <x-tooltip><x-label>Windows</x-label></x-tooltip> </x-button> <x-button value="cupertino" condensed> <x-icon href="#macos"></x-icon> <x-tooltip><x-label>macOS</x-label></x-tooltip> </x-button> <x-button value="adwaita" condensed toggled> <x-icon href="#gnome"></x-icon> <x-tooltip><x-label>GNOME</x-label></x-tooltip> </x-button> </x-buttons> </section> <section id="color-scheme-section"> <h4><x-message href="#color-scheme" autocapitalize></x-message></h4> <x-buttons id="color-scheme-buttons" tracking="1"> <x-button value="light" condensed toggled> <x-label><x-message href="#color-scheme.light" autocapitalize></x-message></x-label> </x-button> <x-button value="dark" condensed> <x-label><x-message href="#color-scheme.dark" autocapitalize></x-message></x-label> </x-button> </x-buttons> </section> <section id="accent-color-section"> <h4><x-message href="#accent-color" autocapitalize></x-message></h4> <x-buttons id="accent-color-buttons" tracking="1"> <x-button value="blue" skin="flat" toggled> <x-swatch></x-swatch> </x-button> <x-button value="purple" skin="flat"> <x-swatch></x-swatch> </x-button> <x-button value="pink" skin="flat"> <x-swatch></x-swatch> </x-button> <x-button value="red" skin="flat" toggled> <x-swatch></x-swatch> </x-button> <x-button value="orange" skin="flat"> <x-swatch></x-swatch> </x-button> <x-button value="yellow" skin="flat"> <x-swatch></x-swatch> </x-button> <x-button value="green" skin="flat" toggled> <x-swatch></x-swatch> </x-button> <x-button value="graphite" skin="flat"> <x-swatch></x-swatch> </x-button> </x-buttons> </section> </main> <footer id="footer" part="footer"> <x-button id="all-settings-button"> <x-icon href="#settings"></x-icon> <x-label><x-message href="#all-settings" autocapitalize ellipsis></x-message></x-label> </x-button>  </footer></template>
  `;static #S=se`
    :host {
      width: 240px;
      min-height: 100px;
      border-radius: inherit;
    }

    h4 {
      margin-top: 0;
    }

    /**
     * Main
     */

    #main {
      padding: 10px;
    }

    /**
     * Locale section
     */

    #locale-section {
      margin-bottom: 10px;
    }
    :host-context(bx-navbar:not([collapsed])) #locale-section {
      display: none;
    }

    #locale-section h4 {
      margin-top: 0;
    }

    #locale-select {
      width: 100%;
    }

    /* Theme */

    #theme-section {
      margin-bottom: 10px;
    }

    #theme-buttons {
      width: 100%;
    }

    #theme-buttons > x-button {
      flex: 1;
    }

    /* Color scheme */

    #color-scheme-section {
      margin-bottom: 10px;
    }

    #color-scheme-buttons {
      width: 100%;
    }

    #color-scheme-buttons > x-button {
      flex: 1;
    }

    /* Accent color */

    #accent-color-section {
    }

    #accent-color-buttons {
      width: 100%;
    }

    #accent-color-buttons x-button {
      flex: 1;
      min-height: 22px;
      margin-left: 0px;
    }
    #accent-color-buttons x-button[toggled] x-swatch {
      outline: 3px solid var(--light-accent-color);
      outline-offset: 1px;
    }

    /**
     * Footer
     */

    #footer {
      padding: 10px;
      border-top: 1px solid transparent;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    #all-settings-button {
      width: 100%;
    }
  `;get[bY(0x21c)](){const iK=bY;return this[iK(0xfd9)](iK(0x21c));}set[bY(0x21c)](af){const iL=bY;af?this[iL(0xa0a)](iL(0x21c),''):this[iL(0x88e)]('enabled');}#T;#Bt;#P;#at;#N;constructor(){const iM=bY;super(),this.#P=this[iM(0x1017)]({'mode':iM(0xc5d)}),this.#P[iM(0x48f)]=[a2[iM(0x500)],Ki.#S],this.#P['append'](document[iM(0xc3b)](Ki.#C['content'],!0x0));for(let af of this.#P[iM(0x44e)](iM(0x6e3)))this['#'+af['id']]=af;this['#locale-select'][iM(0x1012)](iM(0x63b),()=>this.#_()),this[iM(0x260)]['addEventListener'](iM(0x807),()=>this.#Rt()),this[iM(0x8c8)][iM(0x1012)]('toggle',()=>this.#It()),this[iM(0xc55)][iM(0x1012)](iM(0x807),()=>this.#Ft()),this[iM(0x6f0)][iM(0x1012)]('click',()=>this.#Nt());{let ag='';for(let ah of He)ag+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-menuitem\x20value=\x22'+ah+iM(0xe36)+Pe(ah)+iM(0x73e);this['#locale-select-menu']['innerHTML']=ag;}{let aj=Ye(),ak=this[iM(0x260)]['querySelector'](iM(0xa72)+aj+'\x22]');this['#theme-buttons'][iM(0x5b3)](ak);}!0x1===le&&this[iM(0x260)][iM(0x344)](iM(0x2db))['remove']();}[bY(0x854)](){const iN=bY;this.#T=si(this,iN(0xf55)),this.#Bt=si(this,'x-button');}[bY(0x83b)](af,ag,ah){const iO=bY;ag!==ah&&iO(0x21c)===af&&(this[iO(0x21c)]?this.#Ot():this.#_t());}#Ot(){const iP=bY;Bi['auth'][iP(0x1012)]('userchange',this.#at=()=>this.#A()),a2[iP(0x1012)](iP(0x4ce),this.#N=()=>this.#A()),this.#A();}#_t(){const iQ=bY;Bi[iQ(0xf5c)][iQ(0xee0)]('userchange',this.#at),a2[iQ(0xee0)](iQ(0x4ce),this.#N);}#_(){const iR=bY;a2[iR(0xea6)](iR(0xbd5),this[iR(0x83c)][iR(0xf0a)]);}#Rt(){const iS=bY;a2[iS(0xea6)]('bx-uisettings:theme',this[iS(0x260)][iS(0xf0a)]);}#It(){const iT=bY;let af=this[iT(0x8c8)][iT(0xf0a)];iT(0x938)===this.#T[iT(0xa31)]?this.#T[iT(0xd4c)](af):a2['setConfig']('bx-uisettings:colorScheme',af);}#Ft(){const iU=bY;a2[iU(0xea6)](iU(0x39c),this[iU(0xc55)][iU(0xf0a)]);}async #Nt(){const iV=bY;await this.#Bt[iV(0xcfc)](),this.#T[iV(0x908)](qi(location[iV(0xbd9)],iV(0x741),iV(0x213)));}#A(){const iW=bY;{let af=a2[iW(0x4a6)](iW(0xbd5),iW(0x307));this[iW(0x83c)][iW(0xf0a)]=iW(0x307)===af?Ze():He[iW(0x1d5)](af)?af:'en';}{let ag=a2[iW(0x4a6)](iW(0xca1),'auto');iW(0x42c)===ag&&!0x1===le&&(ag='auto'),this[iW(0x260)]['value']=iW(0x307)===ag?Ye():ag;}{let ah=a2[iW(0x4a6)](iW(0xa37),iW(0x307)),aj=window[iW(0xf2d)](iW(0xa62))[iW(0xee6)]?iW(0xbbf):iW(0xdd3);this[iW(0x8c8)][iW(0xf0a)]='auto'===ah?aj:ah;}{let {presetAccentColors:ak}=a2,al=a2[iW(0x4a6)]('bx-uisettings:accentColor',iW(0x307)),am=this.#T[iW(0xf5f)]();if(ak[am],iW(0x307)===al)this['#accent-color-buttons'][iW(0xf0a)]=am;else{let an=!!ak[al];this[iW(0xc55)][iW(0xf0a)]=an?al:null;}for(let ap of[...this[iW(0xc55)][iW(0x44e)]('x-swatch')]){let aq=ap['parentElement'];ap[iW(0xf0a)]=ak[aq['value']];}}}}customElements[bY(0x864)](bY(0xec6),Ki);function a0(){const FM=['a.tag-anchor','#b9faf8','#blog-delete-form','Microsoft\x20Edge','setItem','foreignMetadata','containerElement','></boxy-svg>\x0a\x20\x20\x20\x20','#70c1b3','subsets','#04395e','#quick-profile-settings','#ea3546','#settings','#386641','#title-span',';charset=utf-8;base64,','setFillColor','cancel','#93e1d8','isolation','#e0fbfc','</x-label></x-menuitem>','viewAsIcons','string','fromString','#downvote-button',':scope\x20>\x20x-menuitem','#7fb800','toJSON','#logo-svg','matchMedia','count','transform-box','parse','<color>','<font-face-src>','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22','word-spacing','#text-decoration','fill-opacity','tokenType','added','#comment-delete-form','svg:mask','invalid-url','glyphsForString','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>Wersja\x20','hash','#subscribe-button','getModifierState','#previews-skeleton','position','gradientUnits','persistentLocalCache','rotate(','#023047','#ffd500','bx-fileembedform','Safari/','#votes-count-label','changestart','classHighlighter','#ff1654','curveTo3','443','bx-introblock','/libs/font-kit/font-kit.js','activeElement','$head','Invalid\x20seconds\x20format.','#app','posAtCoords','#8e9aaf','category','#library-radios','bx-placeholderblock','#86bbd8','auth','#3a5a40','join','getSystemAccentColorName','beforeunload','bounding-box','set','animate','Nyala','pinFontFamily','#users-editor','heading','iPhone','butt','non-scaling-stroke','UPNG','signOut','endOffset','hotpink','<x-message\x20href=\x22#volume-discount.none\x22></x-message>','mapping','\x22></x-message>)','unwatch','beginGroup','sendEmailVerification','boxy-svg/filesystem-permission-denied','#search-block','#fdfffc','nav-button','namespaceURI','bulletList','Droid\x20Sans\x20Fallback','constructor','.pdf','underline','editPost','/search','nextLineSetSpacingShowText','#ffdab9','Unimplemented\x20operator:\x20beginMarkedContentProps','#save-form','after','#006494','cacheControl','#fefee3','#f5cac3','#a5668b','#4361ee','dirty','#failed-to-confirm-password','#comment-form','#stroke-width','#a3cef1','#move-button','#message-sent.detail','getBoundingClientRect','reauthenticate','transform','1\x20user','Unimplemented\x20operator:\x20markPoint','emailVerified','minversion','50%','U+900-97F,\x20U+1CD0-1CF6,\x20U+1CF8-1CF9,\x20U+200C-200D,\x20U+20A8,\x20U+20B9,\x20U+25CC,\x20U+A830-A839,\x20U+A8E0-A8FB','#tutorial-symbols','view-box','#idea-delete-form','#432371','region','title,_description','profiles','#translate-button','unicodeRange','appliesTo','Wrong\x20password','#472d30','#new-idea-anchor','#001427','Chromium','/blog','/us/','blockquote','pen','#created-detail','#ffe3e0','getPropertyValue','bx-primarypanelsdock:width','#bio-editor','var(--accent-color)','#98c9a3','Noto\x20Sans\x20Hebrew','quantity','functions','.ttf','setCharSpacing','/app/','deletable','-button','#blog-form','uIVJ2fgOwds','unpinFontFamily','matrixTransform','scaleSelf','#8fc0a9','inheritable','weight','#d77a61','getFile','#ffbc42','#edf6f9','#fill-opacity','668alEPiO','#bb8588','#d5896f','finish','json','fnId','Chrome','getUserCountry','#5c6b73','#565264','presetAccentColors','bx-ideaform','#password-section','#search-input','hasAttribute','#b2f7ef','#92b6b1','#image-menuitem','#isolation','#underline-button','drop','#description','attributes','#idea-form','rermoveEventListener','#7cb342','videoid','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22','ArrowUp','uiGradients','#efe5dc','whenReady','onClientRequest','image/webp','#bug','ltr','subset','endMarkedContent','toggleItalic','#f7e3af','finished','read','text\x20a','bx-uisettings:widgetsSize','userEmail','contains','click','whenPostDeleted','VAT','#0d2c54','#31572c','commonObjs','createdTimeAsc','#c0d6df','macOS','#contact-anchor','#edit-question','data-bx-origin','svg:svg','markers','open-with-app','#failed-to-watch-post','userEmailVerified','selectedchange','mergeAttributes','bx-blogsettings','viewBox','queryLocalFonts','#limit-scrollable-area-checkbox','#f4511e','clearExcessiveRecentFiles','addEventListener','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-message\x20','votesCount','outerHTML','\x20name=\x22','attachShadow','#email-input','#ffb400','#ece2d0','#sort-select','strikethrough','highlights','checkCloudFileWriteAccess','undo','#1b998b','endsWith','U+590-5FF,\x20U+20AA,\x20U+25CC,\x20U+FB1D-FB4F','clipPath','edit-question','#003554','Droid\x20Sans\x20Tamil','#4b3f72','#364156','Version/','remove','#price-td','FILTER_SKIP','#message-dialog','Malayalam\x20Sangam\x20MN','stop','urls','#fcddbc','#fee9e1','linkedFaces','feOffset','external','#decrease-indent-button','threadUpdatedTime:desc','#cache-control-section','#size-input','#minor-version-input','bx-settings','inheritableProperties','#283d3b','#link-input','svg:linearGradient','x-small','https://storage.boxy-svg.com/artworks/-MIbjhwuFbRk_NV2Xuy-.svg','.reset-button','x-swatch','commentsCount:asc','#1985a1','height','cocoMaterial','Boxy\x20SVG\x20-\x20Tutorials','Product','Dragging\x201\x20item','#wrote-span','#canonical-link','compositionend','showSpacedText','Image','userProfile','unpinned','Noto\x20Sans\x20Zawgyi','#thumbnail','data-bx-preset','compositionupdate','#0077b6','fill','#293241','updatedTime','blob','#indentation-slider','data-language','userclose','updateURL','start','#d6cfcb','origin','Arial\x20Unicode\x20MS','#bug-block','#comment-delete-dialog','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-button\x20value=\x22','<x-menuitem\x20value=\x22','6cyxF0EqTyk','observedAttributes','conflicting','rootItem','display','green','U+460-52F,\x20U+1C80-1C88,\x20U+20B4,\x20U+2DE0-2DFF,\x20U+A640-A69F,\x20U+FE2E-FE2F','Tamil\x20Sangam\x20MN','location','#faedcd','#changes','focusout','#name-section','acos','#filter-input','dependency','#writing-mode','prioritychange','\x20<x-message\x20href=\x22#file-size-bytes-suffix\x22\x20args=\x22count:\x20','toElement','#statusbar','data-toggled','/changelog?year=','#ffbd00','#author-anchor','matrix(','46aukWdJlg0','#ff5a5f','#006ba6','token-list','Monaco','data-editing','-color','Shift+ArrowDown','#ffc09f','#agree-checkbox','translate(','#aa998f','[tabindex]','initializeFirestore','#ebebd3','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','dur','popstate','#f0ead2','dragging','unvotePost','Hiragino\x20Sans\x20GB','pushState','#ffed66','#register-to-start-15-day-free-trial','bx-searchblock','valueAsString','#e4c1f9','logIn','.description\x22></x-message>','blink','#tabs','prev','#4cc9f0','#64b6ac','publish','text-top','password-reset','xmlLanguage','image-rendering','#6d597a','FONT_FACE_RULE','artworkID','#b0d0d3','#5c6d70','#e0e1dd','#ef7b45','#ffa69e','toLowerCase','#a6a2a2','#e6beae','#3bceac','dragstart','createdTime','Backspace','#created-author-anchor','Shift','#question-move-form','#table-head','messageID','get','#icons-view','dispatchEvent','#e29578','GoogleFontsManager','#marker','dmca','https://storage.boxy-svg.com/','bx-questionpreviewblock[uid=\x22','xlink:title','zoomToFitAllViews','embedded-web','ip-box','posts@','Underline','#text-anchor','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x20toggled-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22','closePath','#text','#000','editing','#e5989b','#cdedf6','#cae9ff','#e8c2ca','deleteObject','nonInheritableProperties','textTransform','nesw-resize','#home','#subscribe-button-label','https://storage.boxy-svg.com/linux/screenshot-3.png','installprompt','/app/avatar','#license','variant','unsetLink','#tutorial-transforming-objects','edit-comment-','listItem','layout','#font-size','current','#f9c80e','Boxy\x20SVG','fnArray','getFontFamilyWeights','Kartika','body','bx-cloudbreadcrumb','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20100\x20100\x22\x20width=\x221024px\x22\x20height=\x221024px\x22>','bx-portalwebapp:showPrivacyNotification','selectedFiles','terms','crispEdges','Boxy\x20SVG\x20-\x20Bugs','Untitled','#ffc43d','#fill-rule','/profiles/','.label','#ef959d','David','expanded','command:','type','begin','#bde0fe','vector-effect','Invalid\x20directives','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20500\x20500\x22></svg>','bx-generalsettings:maxRecentFiles','includes','Lohit\x20Telugu','alias','beginMarkedContent','WHITESPACE','host','blob:','#4f772d','#failed-to-change-post-priority','activity','#pointer-events','artworks','m14','bx-title','Noto\x20Sans\x20Georgian','#fff1d0','pointerEvents','setSVG','To\x20resolve\x20this\x20problem\x20please\x20contact\x20Boxy\x20SVG\x20support.','#accent-preset-menu','-dark.css','videoID','date:\x20','#d62828','STIX\x20General','#size-section','sRGB','delete-question','#theme-select','#failed-to-write-file.trial-expired','#41ead4','font-unicode-range:\x20','mas','aria-disabled','\x20‣\x20',':scope\x20>\x20[attributeName]','classList','#version','uploadBytesResumable','#url-input','#share','U+102-103,\x20U+110-111,\x20U+128-129,\x20U+168-169,\x20U+1A0-1A1,\x20U+1AF-1B0,\x20U+1EA0-1EF9,\x20U+20AB','#locale-select-menu','#62b6cb',':scope\x20>\x20*','stop-color','#failed-to-rename-file','#ddc9b4','#212d40','text-after-edge','#failed-to-delete-post','navigation','bx-ideasettings','#e36414','bx-commentform','number','\x20items\x20selected','IDENT','ownerSVGElement','fillColor','fontSizeScale','bx-questionblock','settings','paintImageMaskXObjectGroup','OS/2','400italic','#try-redefining-search-criteria','select','#bdd5ea','openContextMenu','uploadFile','enabled','#main','iPod','#size-box','Unimplemented\x20operator\x20','Droid\x20Sans\x20Ethiopic','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','content','\x22...','close','txtElement','beforeend','advanceWidth','Brave','extension','#b8f2e6','dataset','#ff6b35','highlightTree','%;\x22></div>','#cant-connect-to-server','#publish-button','#ea526f','#home-anchor','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<bx-bugpreviewblock\x20skeleton></bx-bugpreviewblock>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','#highlight-button','ideographic','stop-opacity','HardBreak','/app','fromRect','CSS','setUISize','Windows','math','#f7aef8','creationTime','#780116','imageViewer','commentsCount:desc','#778da9','votesCount:desc','pointer','.webp','startContainer','openEmailVerifyMessageDialog','insertRule','url(#','bx-cloudfilepreview[selected]','#223843','#a2d2ff','new-comment','checkpoint','updated-asc','#foreign-objects-radios','#heading-button','tax','Meta','mousedown','openNewAppWindowWithArtworkFromCloud','#new-folder-with-selection','#pattern-','#84d2f6','#c08497','ease-out','#d8b4a0','argsArray','STIX\x20Two\x20Math','#theme-buttons','priority-asc','https://boxy-svg.com/share/','Khmer\x20Sangam\x20MN','#throbber','#tutorial-views','updateEmail','openPasswordConfirmDialog','#auth-button','scrollTop','#fedc97','configure','#60d394','nonzero','#e71d36','#e5e5e5','then','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22inner\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<x-icon\x20href=\x22','#fcca46','whenPostEdited','reverse','defaultPrevented','bx-authsettings','#98c1d9','#affc41','#edit-menu-item','bx-registerform','embedded-fonts','#new-question-anchor','#bc4749','share','#4f6d7a','filepreviewdblclick','#thread-title-span','U+964-965,\x20U+981-9FB,\x20U+200C-200D,\x20U+20B9,\x20U+25CC','image/avif','userchange','font-size','#colors-buttons','removeItem','#373f51','#8d99ae','past_due','renameFile','This\x20URL\x20is\x20not\x20valid','platform','#f6aa1c','#f4e285','#55dde0','bugs','photos-library-browser','bx-navbar:width','feDistantLight','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','improved','endAnnotation','granted','inflate','fluent','#cloud-button','noopener,menubar=no,toolbar=no,location=no,status=no','ultra-condensed','shift','#failed-to-unwatch-post','Right','_shadowTemplate','closed:=','#default-view','[editing]','data-selected','#1a659e','watchers:=','/templates/about.tpl','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','options','setEnd','setDragImage','line-through','#created-time-span','#723d46','<a\x20class=\x22item\x22\x20part=\x22item\x22\x20href=\x22','#edeec9','rejected','openNotification','#e6ebe0','entries','#ffcb77','.command-label','searchPosts','#7dcfb6','bx-blobsettings:mode','Droid\x20Sans\x20Japanese','childNodes','parseACommaSeparatedListOfComponentValues','ascent','nextLine','#9bc53d','bezierCurveTo','getDoc','#f4a259','Script\x20failed\x20to\x20load.','whenLocalesReady','#changelog-form','linearGradient','lighter','#219ebc','#bio-throbber','#6d6875','grab','#ff7d00','#created-section','token','innerHeight','threadTitle','interval','#table-section','image/svg+xml','#f79256','Simsun','#pwa-premium-price-span','<bx-sharepage></bx-sharepage>','resetScrollOffset','x-button[value=cupertino]','#failed-to-downvote-post','#fill','svg:marker','max-age','Unimplemented\x20pattern\x20Mesh','#d3f8e2','usersubscriptionchange','bx-bugblock','Highlight','-N4E97qBVfHpd-45RXUz','clip-rule','Dummy','#d7b9d5','setCharWidthAndBounds','volumeDiscount','-webkit-focus-ring-color','#007ea7','bx-uisettings','#cache-control-button','#720026','<bx-questionspage></bx-questionspage>','1049376enmVTi','toggled-thumb','nodeValue','paintInlineImageXObjectGroup','\x22\x20style=\x22order:\x20','database','chain','#003f88','JPEG','roles','https://fonts.googleapis.com/css','quadraticCurveTo','bx-blogform','overlay','#fec601','bx-garbagecollectorsettings','commands','#name-already-taken','channel','extensions','minHeight','#alignment-baseline','auto','https://fonts.googleapis.com/css2?','_description','Shift+ArrowUp','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<bx-blogpreviewblock\x20skeleton></bx-blogpreviewblock>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','bx-appsettings','isFsApiEnabled',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label\x20slot=\x22scope\x22>','#90a955','svg:path','sort','unobserveCollection','-N4E9fKzrgukg3EKdwcd','toggleHeading','paintFormXObjectBegin','#8c2f39','#e7ad99','#d84727','endContainer','</a>','rectangle','openImageImportDialog','<syncbase-value>','windows','https://storage.boxy-svg.com/artworks/-M539obL12yiuWowe01C.svg','#heading-message','#58a4b0','must-revalidate','#discount-row','#fff3b0','bx-pager','#ffee93','1047KHwDLu','#1a936f','#blog-delete-dialog','#774c60','#email-throbber','\x0a\x20\x20position:\x20fixed;\x0a\x20\x20top:\x20-1px;\x0a\x20\x20left:\x20-1px;\x0a\x20\x20width:\x201px;\x0a\x20\x20height:\x201px;\x0a\x20\x20contain:\x20strict;\x0a\x20\x20overflow:\x20hidden;\x0a','#77bfa3','#boxy-svg-monochromatic','#14213d','#be95c4',':scope\x20>\x20*:not([systemLanguage]):not([requiredExtensions])','#f4f1bb','#f7b801',':scope\x20>\x20*[selected]','nextLineShowText','fromCharCode','central','#export-settings-button','min','Client','data-disabled','#90f1ef','#7d4e57','0.0.0','sheet','#6a994e','#legal.terms-of-use','newFile','U+400-45F,\x20U+490-491,\x20U+4B0-4B1,\x20U+2116','querySelector','#f7ede2','#price-row','Expected\x20EOF\x20token.','pointerId','checkout→','#0b3954','setTheme','buffer','buttonclick','cloudStorageModel','animations','Unimplemented\x20operator:\x20paintInlineImageXObjectGroup','#flood-opacity','Unimplemented\x20operator:\x20markPointProps','#failed-to-add-comment','userSubscription','shadowRoot','thumbnails','#edddd4','rename','addListener','attachments','convertPost','hashtag','#457b9d','ArrowDown','addFontFaces','getRotationOfChar','-N4E703rMVy7qO2Nm-cM','dialog[open]','sortchange','/?dialog=settings→subscription','Kailasa','tabindex','country','#dd1c1a','#ff6b6b','timeout','#264653','setPointerCapture','U+1F00-1FFF','subscriptionPlanID','threaded','font-stretch','#c9cba3','#views','#a9bcd0','Boxy\x20SVG\x20-\x20Idea\x20#','#001d3d','#skeleton-title','shading','scrollHeight','embed','title','#598392','createTextNode','Helvetica','html','/images/iconsets/user-agents.svg#','boxy-svg/subscription-expired','matrix','#9db4c0','#e7c6ff','readOnly','#delete-account-button','.remove-button','editable','credential','#e8d6cb','setGState','#accent-preset-select','#tutorial-paths','app','#robots-meta','renameFolder','#tutorials','setFlatness','#failed-to-rename-folder','#failed-to-change-password','#quantity-row','#url-button','#stop-opacity','descent','-N4E9bKZtPTEvkCNlUcU','#f25c54','unicode-bidi','Mongolian\x20Baiti','bx-uisettings:accentColor','toUpperCase','\x22);','#no-versions-published-this-year','Creating\x20new\x20file…','Chrome\x20OS','#image-input','temp/','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20next-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20next-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22','Malgun\x20Gothic','#increase-indent-button','baseName','Noto\x20Sans\x20Kannada','#242423','#question-dialog','data','sliceString','Failed\x20to\x20initialize\x20Paddle','visiblePainted','#major-version-input','Invalid\x20hours\x20format.','#quantity-td','#d9dbbc','closeDialog','Core','redo','reply-comment-','cursive','watchedBy','all','effectAllowed','bx-blogpage','<x-message\x20href=\x22#subscription-status.active-trial\x22\x20args=\x22date:','#e4fde1','</span>','stale-if-error','#f7af9d','#priority.very-low','#comments-message','cache','#register-anchor','popularityRank','#category-select','#placeholder-description','#e56b6f','/ideas?tag=','getItem','code','History','maskId','#open-with-web-browser','#dedbd2',';\x22/>','text-decoration','changePassword','#link-button','other','#lighting-color','style[data-bx-fonts]','chromeos','bx-webapp:dontShowAgainMissingFsApiDialog','#filter-block','setLeadingMoveText','openShareDialog','#question-form','#606c38','persistentMultipleTabManager','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','missingFile','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20\x20\x20','Unimplemented\x20operator:\x20setFillGray','#inline-buttons','/boxy-svg.webmanifest','HTML','#00a5cf','#b5b682','#dd6e42','staff','You\x20haven\x27t\x20saved\x20any\x20files\x20to\x20the\x20cloud\x20yet','#white-space','#b0c4b1','#ffd60a','#7a6c5d','Kohinoor\x20Bangla','upvote','rect','data-bx-shape','.css','addToHistory','persist','monthly','#fefcfb','font-feature-settings:\x20','appendChild','blog','Noto\x20Sans','x-input','#eaac8b','ultrabold','pop','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<x-menuitem\x20value=\x22custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-icon\x20href=\x22#color-wheel\x22></x-icon>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>Custom</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</x-menuitem>\x0a\x20\x20\x20\x20\x20\x20','votes-asc','#alt-input','parser','Kohinoor\x20Telugu','callback','#ffb4a2','stopVideo','bx-bugsfilterblock','data-untitled','STRING','#694f5d','paragraph','FUNCTION','#new-bug','#051923','#386fa4','<div\x20part=\x22skeleton-item\x22\x20style=\x22width:\x20','#submit-button','brands','keys','bx-cloudbrowser:view','#unicode-bidi','#666a86','attributeType','#tutorial-shapes','https://storage.boxy-svg.com/artworks/-M538swplS6o-0WSX9gT.svg','#e76f51','[selected]','/locales/','#1b9aaa','#upvoted-by-me-switch','orderedList','nodeType','#55828b','#close-button','votes','#macos','delete-button','Mac','RadialAxial','patternUnits','toggled','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22','cupertino','first-item','#cancel','selected-cell','question','#7ae582','id,revision','local(','#failed-to-write-file.user-offline','#bug-dialog','beginImageData','#db7c26','#d3bcc0','#overflow','setFillColorN','bx-markupsettings:foreignObjects','twitterEmojis','Unimplemented\x20operator:\x20beginInlineImage','bx-bugmoveform','replaceAll','whenNextUpdate','#question-delete-form','from',')</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>W\x20tym\x20dokumencie\x20zastosowano\x20następujące\x20oznaczenia:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>[Dodano]</strong>\x20-\x20Dodanie\x20nowej\x20funkcjonalności\x20do\x20programu</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>[Poprawiono]</strong>\x20-\x20Poprawa\x20działania\x20w\x20istniejącej\x20funkcjonalności\x20programu</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>[Naprawiono]</strong>\x20-\x20Naprawa\x20błędu\x20w\x20istniejącej\x20funkcjonalności\x20programu</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>[Usunięto]</strong>\x20-\x20Usunięcie\x20istniejącej\x20funkcjonalności\x20programu</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>W\x20nawiasach\x20podana\x20jest\x20data\x20rozpoczęcia\x20oraz\x20zakończenia\x20prac\x20nad\x20daną\x20wersją\x20programu.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>O\x20ile\x20nie\x20napisano\x20inaczej,\x20funkcjonalność\x20zaplanowa\x20dla\x20danej\x20wersji\x20programu\x20została\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20zaimplementowana\x20oraz\x20wdrożona\x20zgodnie\x20z\x20planem.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','ital','priority:asc','searchColorHuntColors','collection','\x0a\x20\x20','feFlood','view','URL\x20was\x20copied\x20to\x20clipboard.','translateSelf','\x22\x20height=\x22','querySelectorAll','#c0c0c0','#000000','#breadcrumb','createElementNS','selectAllPreviews','\x22\x20style=\x22fill:\x20','scale(','refresh','folder','#e7ecef','#download-button','Unimplemented\x20graphic\x20state\x20operator:\x20','#33658a','Failed\x20to\x20parse\x20JSON\x20string','metadata','net','feDisplacementMap','getIdToken','U+1000-109F,\x20U+200C-200D,\x20U+25CC','x-input,\x20x-select','#failed-to-edit-comment','role','#password-too-short','/questions','scrollIntoViewIfNeeded','mouseup','bx-bugspage','Logging\x20out…','translate','#577399','fantasy','Segoe\x20UI\x20Historic','#ff70a6','\x22\x20autocapitalize></x-message></x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-menuitem>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','#font-stretch','bx-loginform','last-item','thin','arab','emoji','Shift+ArrowRight','bx-bugsettings','default','#fde74c','head','#708d81','/bugs/','#323031','#tutorial-compositing','setHeading','.svg','documents','addMessageListener','getColorScheme','#blog-dialog','setStrokeColor','iPad','auth/weak-password','unwatchPost','#progress-label','#priority-message','/legal','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20','small','adoptedStyleSheets','.item[data-editable]','getBBox','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>','#735d78','#02040f','flood-color','proxy-revalidate','use-script','#004e64','text-anchor','onAuthStateChanged','#540d6e','m41','author\x20created\x20tags\x20comments\x20hashtag','#edit-comment','#f18701','Unimplemented\x20operator:\x20beginGroup','#cancel-button','modifiers','baseVal','#fe7f2d','embedded','getConfig','edit-blog','#e07a5f','#fef9ef','nameDesc','larger','View','#new-question','#b5838d','isCommandToggled','#bce784','1px','#conflicting-items-counter','#f07167','</x-menu>','bx-contactform','initial','U+964-965,\x20U+C82-CF2,\x20U+200C-200D,\x20U+20B9,\x20U+25CC','radial','Italic','<br/><strong>','svg:defs','#86bbbd','#b56576','manage','textRenderingMode','x-select','endCompat','bx-legalpage','true','evenodd','update','getThreadComments','#dominant-baseline','block','fsSelection','#003049','#f95738','<div\x20class=\x22item\x22\x20part=\x22item\x20toggled-item\x22\x20data-toggled>','#buttons','themechange','#updated-detail','\x20unit.','#f2cc8f','#version-number','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22','uid','#failed-to-change-user-name','#auto-color-scheme-label','getOperatorList','bx-changelogblock','#b8bedd','#question-move-dialog','buttons','px\x22\x20height=\x22','featureSettings','#eaeaea','#anchor','bx-markupsettings:foreignMetadata','bx-bottombar:height','#cursor','changelog-','#06d6a0','toggleOrderedList','param','Unimplemented\x20operator:\x20paintXObject','#logo','stroke-miterlimit','shape-rendering','Usunięto','#b2c9ab','#symbol-','getData','auth/email-already-exists','android','updatedTimeDesc','<bx-ideaspage></bx-ideaspage>','Unimplemented\x20operator:\x20nextLineSetSpacingShowText','bx-tutorialpreviewblock','bx-imageviewer','#46494c','Focus','#line-height','settings→profile','destroy','strokeColor','commandID','renameSelected','arg','letter-spacing','themeStyleSheet','marker-mid','#detail','\x20token.','yellowgreen','#4a4e69',')\x22\x20jest\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gotowy\x20do\x20wydruku.','Wygenerowano\x20dokument','#a0ced9','↑↑↑','#paint-order','#1d3557','extrabold','171442pqsLKc','delete-comment-','#settings-button','@import\x20url(\x22','modKeys','#ffcdb2','textMatrixScale','tspan','#anchors','#save-input','local-fonts','\x20is\x20not\x20ready\x20yet','<x-message\x20href=\x22','svg:text','transform-list','mask','getAll','#code','http://schemas.microsoft.com/visio','defaultShortcut','m43','#f72585','stale-while-revalidate','stroke-width','#c9ada7','state','<x-message\x20href=\x22#change-plan\x22></x-message>','.item:not([hidden])','_json','#f2e8cf','#b8dbd9','#1dd3b0','markPointProps','#color-interpolation','#size-slider','signInWithEmailAndPassword','Vrinda','create','#hashtag-span','feColorMatrix','#d0f4de','nodeName','#6d2e46','isSpace','preventDefault','importConfig','-N4E9VuBdyB-kgVtWiT5','#tour-block','#sort-order-message','bx-blobsettings:drawingMode','#region-select','quota','-N4E9RZfKmBxa2webOuc','#ffb703','faces','Boxy\x20SVG\x20-\x20Embed','#search','(min-width:\x20880px\x20)','hits','loadedName','400','bx-about','createdTime:<','#c44536','sinkListItem','getMetadata','Plugin','separator','repeat','lang','setFillColorSpace','element','dataTransfer','logOut','#user-agent-icon','ctrlKey','boxy-svg/unknown-error','black','CodeBlock','setCurrentPoint','#text-rendering','author','2404020qQOazp','#084c61','bx-cloudbrowser','#c8553d','tspan,\x20text','#0f4c5c','#failed-to-upvote-post','#wrote-author-anchor','script','data-editable','#sort-order-button','no-api','pwa','color','#changed-subscription-plan.detail','#edf2f4','/tutorials/','verifyUser','style#embedded-fonts','#fcb9b2','children','setBlockquote','DisplayNames','paintImageMaskXObjectRepeat',']</strong>\x20','bx-sidebar:width','localCache','https://boxy-svg.com','https://storage.boxy-svg.com/avatars/','#eed7c5','bx-form','.otf','keydown','#tbody','horizontalRule','#e6b89c','created-by','#new-comment-anchor','stringify','#ffe6a7','isLineBreak','Galvji','#print-button','custom','frameElement','fromMatrix','#bugs-button','avatar','#dde5b6','#cloud-dialog','getSVG','U+370-3FF','beforeready','Zamknij','Dodano','#confirm-delete-files.detail','move','new-blog','Cloud','https://checkout.paddle.com/api/2.0/prices','\x22></x-icon>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<x-label\x20class=\x22label\x22><x-message\x20href=\x22','#footer','#bugs-anchor','#patch-version-input','font-style','#failed-to-move-files','demibold','#f0ebd8','colorHuntColors','\x22></x-swatch>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label><x-message\x20href=\x22#color.','filter-function-list','#table','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','#votes-count-button','getFontFaceRulesFromUrl','#votes-label','#delete-button','searchCocoMaterial','WenQuanYi\x20Zen\x20Hei','keypress','sendVerificationEmail','changelog','bx-markupsettings','Boxy\x20SVG\x20-\x20Question\x20#','prepend','#ffbf69','#bfdbf7','touch','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label><x-message\x20href=\x22#changelog.','cell','#page-container','#c97c5d','#tags','#backdrop','Please\x20try\x20redefining\x20your\x20search\x20query','Firestore','white-space','src:\x20','direction','focusin','bitmap','stretch','getContext','lineJoin','no-change','unvote','#197278','deletePost','scrollRestoration','#c6dabf','stroke','<x-message\x20href=\x22#subscribe\x22></x-message>','#233d4d','#f46036','#website-anchor','#cache-control-select','print','#comment-dialog','macos','optimizeLegibility','Delete','#e0b1cb','currentNode','Creating\x20new\x20folder…','U+E01-E5B,\x20U+200C-200D,\x20U+25CC','openRegisterDialog','darken','#defs-section','Symbola','arrayBuffer','#changed-subscription-plan','#install-button','#e0ac9d','m23','all-scroll','#advanced-filters-button','autocapitalize','ELEMENT_NODE','#d8dbe2','codePoints','#bio-change-button','#activity-button','keyup','https://storage.boxy-svg.com/artworks/','#2d3142','#f79d65','#ce4257','bx-linuxapp','#cbdfbd','#6b9080','Deleting\x20files…','#failed-to-change-subscription-plan','#8f2d56','500','hhea','fromElement','isArray','#87bba2','appVersion','sqrt','commentsCount','threadID','relevance','#watched-by-me-switch','<x-message\x20href=\x22#color-scheme.auto\x22></x-message>\x20(<x-message\x20href=\x22#color-scheme.','#17b978','#ddd8c4','clearConfig','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','#faae7b','bx-quickprofilesettings','#columns-view','#03045e','localeschange','paced','https://storage.boxy-svg.com/artworks/-M53G22SpckyLLTDWdKC.svg','Languages','startOffset','#ff9f1c','transformStack','boxy-svg/user-offline','#iframe','popular','#new-comment','#discount-span','Tahoma','run','#failed-to-write-file.user-not-subscribed-to-premium-plan','serializeToString','data-bx-fonts','searchRemixIcons','toSource','#f26419','#ffffff','bx-keyboardsettings','group','pdf','#menu-button','getFamilyWeights','#users-hint','#language.','#b09e99','open-with-browser','725736iaQfPl','SVG','bx-','#ffb627','openContactDialog','#efd3d7','svg:pattern','/press','getEffectiveSubscriptionPlanID','removeListener','#subheading-button','#e63946','feDiffuseLighting','/bugs?tag=','#label','#f35b04','#00838f','change','.json','lift','https://storage.boxy-svg.com/artworks/-M52fICO8STo3jd7f3h-.svg','question-','#9e2a2b','showText','#dialogs','#ff206e','ios','<bx-tutorialspage></bx-tutorialspage>','installedchange','0\x200','ne-resize','Apple\x20Color\x20Emoji','#004e89','Courier\x20New','itemsdrop','#a5be00','auth/invalid-email','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<bx-questionpreviewblock\x20skeleton></bx-questionpreviewblock>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','changeUserSubscriptionPlan','bx-blogsubpage','Unexpected\x20trailing\x20comma.','collapsed','OPS','#idea-block','bx-avatar','currentUser','delete','parentElement','Noto\x20Sans\x20Myanmar','message','#ordered-list-button','result','sanitize','x-menuitem','<bx-bugssubpage></bx-bugssubpage>','#buttons-section','#symbols-buttons','#save-to-disk-as','textMatrix','#thread-title-anchor','gradientTransform','pointerschange','svg:radialGradient','#contact-dialog','#ffffea','Space','@import\x20url(','#about-dialog','hue','/embed','toggleBold','openEmbedDialog','#5c374c','#086375','textRise','#05668d','#78290f','#083d77','searchParams','function','?category=questions','mpath','#src-locale-message','#9fffcb','locales','#086788','#password-change-button','data:application/font-','callbacks','</x-label></x-button>','#ff9b85','Boxy\x20SVG\x20Editor','updatePassword','setProperty','\x22></x-message></x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','max','\x20MB','ERROR','#email-already-registered','mousemove','U+951-952,\x20U+964-965,\x20U+C00-C7F,\x20U+1CDA,\x20U+200C-200D,\x20U+25CC','private','#02c39a','whenPostCreated','</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</section>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','<bx-questionssubpage></bx-questionssubpage>','robots','subheading','data:','getNumberOfChars','Deleting\x20account…','#283618','setStrokeCMYKColor','pos','<x-message\x20href=\x22#date-wrote\x22\x20args=\x22date:\x20','#132a13','#resize-grippie','#discount-td','Unimplemented\x20operator:\x20paintImageXObjectRepeat','xmlns','disabled','#rubber-band','#ffd166','#img','rel','<x-message\x20href=\x22#subscription-status.past-due\x22></x-message>','#d6ce93','#250902','isPointerDown','#177e89','fontFeatureSettings','ultralight','cssText','#idea.','export','<x-message\x20href=\x22#date-rel\x22\x20args=\x22date:','#pending-version-card','middle','#748cab','/questions/','#11151c','#586ba4','jpg','textInputMode','postMessage','#8ac926','axial','fontSize','#ffa5ab','Cambria\x20Math','repr','move-idea','\x20&&\x20','email','viewAsColumns','visibleFill','userAgentData','#fffcf2','.avif','searchUiGradients','clientWidth','cssLanguage','mosueover','#f694c1','#81171b','#d8c99b','#idea-move-dialog','bx-markupsettings:indentation','linux','#votes-icon','#f25f5c','#sort-order-icon','activeClipUrl','setLeading','#tour-','\x22;\x20','<a\x20class=\x22item\x22\x20part=\x22item\x20toggled-item\x22\x20href=\x22','-N4E9GzYT7D5o63OqQFx','length','#b2967d','vanilla','#monochromatic-icon-img','U+0-10FFFF','fontStyle','0\x200\x20','[id]','_shadowRoot','#priority.high','#eff6e0','#email-change-button','openCloudDialog','#idea','#43bccd','ref','#aaf683','animateMotion','avif','#post','#all-settings-button','vertical-rl','tr[data-selected]','feFuncA','highlight','#f4845f','#b8e0d2','title,_thread','col-resize','resize','.reorder-button','editArtwork','foreignObject','offset','#thumbnail-anchor','#tutorial-export','radialGradient','svg:view','#tutorial-selecting-objects','-N4E9Z-iCxxeVlxVdhCN','#252422','ArrowLeft','#00afb9','fontChar','#ffd97d','#region-row','#f6f4d2','#failed-to-change-post-tags','font-family:\x20\x22','bulkPut','0000000000','threadType','https://fonts.google.com/specimen/','ycoords','/questions?tag=','getHighEntropyValues','abs','#folder-icon','bx-messageform','https','changeend','downvoters','closeFillStroke','request','.item[data-selected]:not([hidden])','body\x20>\x20x-menuitem','cancellationEffectiveDate','m32','Unimplemented\x20operator:\x20endCompat','#table-body','Lao\x20Sangam\x20MN','isActive','svg:stop','#legal.dmca-policy','#f7a399','date','#blend-mode','deleteRule','semibold','scrollLeft','focus','persistedUserProfile','comments','#ffc971','linkFontFamily','STIX','<x-message\x20href=\x22#subscription-status.cancelled\x22\x20args=\x22date:','observe','boxy-svg.com','value=\x22','#bd632f','#7c9885','ns-resize','toggleStrike','type:=','soft-light','Left','stroke-dasharray','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-menuitem>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','#4f5d75','seconds','dialog','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<title>Ewidencja\x20prac\x20-\x20KPWI\x201/','bx-embedpage','<bx-legalsubpage></bx-legalsubpage>','#d9d9d9','\x22\x20args=\x22','comment','unsetCode','ideas','font-weight','icons','#30638e','collections','#link-menu-item','videoUID','xcoords','cursor','Auto\x20(','opened','setPathData','<p></p>','#font-style','#name-throbber','#390099','PNG','#failed-to-open-file','#foreign-metadata-radios','load','iOS','setCustomValidity','#9f86c0','\x20+\x20','parentID','sort.ascending','#failed-to-import-file','args=\x22','Lohit\x20Gujarati','U+0-FF,\x20U+131,\x20U+152-153,\x20U+2BB-2BC,\x20U+2C6,\x20U+2DA,\x20U+2DC,\x20U+2000-206F,\x20U+2074,\x20U+20AC,\x20U+2122,\x20U+2191,\x20U+2193,\x20U+2212,\x20U+2215,\x20U+FEFF,\x20U+FFFD','deleteFile','bx-rulers:space','Kohinoor\x20Gujarati','marker-end','U+F00-FFF,\x20U+200C-200D,\x20U+25CC','removeProperty','author\x20updated\x20tags\x20comments\x20hashtag','#downvote','initializeApp','stroke-dashoffset','whenThemeReady','#fdc500','#3a0ca3','#f2b5d4','append','#failed-to-write-file.user-not-subscribed','#f45b69','650791','target','progress','#022b3a','#article','#toolbar','top','Gadugi','DELIM','linear','dashArray','font-family','ellipsis','TKanym7WVw2gyGQ2c6J0mBXHSTsgkkue','getMatchedFontFace','#f5cb5c','#ffbe0b','#priority-select','document','bolder','inverseTransform','charSpacing','_shadowStyleSheet','#efefd0','theme','isReady','lastIndexOf','onreadystatechange','whenTriggerEnd','#114b5f','#banner-anchor','#failed-to-open-file.file-not-found','command','loadContent','#00296b','Unimplemented\x20operator:\x20setStrokeColorSpace','moveTenUnitsLeft','objectBoundingBox','visible','Storage','#filter','Ethiopia\x20Jiret','bx-uisettings:showDockTooltips','nextBillDate','userRegisteredTime','#ad2831','fontFamily','text','#fe5f55','#2ec4b6','createDocumentFragment','#subscription-button','childElementCount','bx-questiondeleteform','#no-results','modkeyschange','selectorText','<x-message\x20href=\x22#color.auto\x22></x-message>\x20(<x-message\x20href=\x22#color.','#d4a373','erase','#wrote-date-message','#upvote','displaymodechange',':scope\x20>\x20dialog[data-param=\x22','#stroke-line-cap','#d5b9b2','#f7c59f','priority:desc','auth/email-already-in-use','italic','textPath','setDash','product_id','#question','-12-31T23:59:59','pointerClickCount','new-question','showOpenFilePicker','#d1b3c4','page','#07beb8','data-bx-d','x-button[toggled]','#actions-box','#billing-row','#legal.','family','<hr/>','restore','observeDocument','condensed','\x22></bx-profilepage>','-N4E9iP4BJBIlju8Ow_I','#eff1f3','#ef8354','amount','pointer-events','/blog/','n-resize','disconnectedCallback','xlink:href','createdBy','#author-badges','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label\x20slot=\x22scope\x22>','px\x20','animateTransform','#theme-section','#003459','upvoted-by','libs/pdf/fonts/','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<x-box\x20id=\x22privacy-notice\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>We\x20use\x20cookies.\x20Check\x20our\x20<a\x20href=\x22/legal#web-app-privacy\x22>Privacy\x20Policy</a>\x20to\x20learn\x20more.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-button\x20id=\x22privacy-notice-button\x22\x20toggled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label><strong>OK</strong></x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</x-box>\x0a\x20\x20\x20\x20\x20\x20','products','Request\x20timed\x20out.','empty','symbols','/blog?tag=','#cce3de',':scope\x20>\x20.thumb[data-toggled]','#date-message','setLineCap','valuechange','.woff2','#fonts-buttons','bx-markupsettings:transformPrecision','unobserveDocument','#drop-indicator','Unimplemented\x20operator:\x20setCharWidthAndBounds','#vector-effect','bx-generalsettings','font','FILTER_ACCEPT','bx-legalsubpage','#50808e','#confirm-delete-files','#profile','#users-change-throbber','w-resize','mix-blend-mode','openSettingsDialog','luminosity','#dbd3d8','#ff6700','focusSaveInput','toggle','Noto\x20Sans\x20Armenian','linearRGB','remixIcons','Premium\x20(monthly\x20billing,\x20','setLink','#language-buttons','fePointLight','#skeleton-items','complete','new-idea','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x20toggled-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22','#2a3d45','#f7d1cd','color-interpolation','#d90429','Unimplemented\x20operator:\x20endAnnotation','#legal','Boxy\x20SVG\x20-\x20Questions','#font-weight','#f4f3ee','find','defs','#f0e6ef','(pointer:\x20coarse)','auth/wrong-password','-N4E9KAf2yX-kUY0YOSY','#7d4f50','#ffac81','#f27059','#3dccc7','feTurbulence','Unimplemented\x20operator:\x20setFillColor','locationchange','Collator','Nirmala\x20UI','edit-','transform-origin','Auth','upvotePost','#004e98','postscriptName','yearly','editName','selectedFolders','#website-throbber','#6fffe9','#internal-server-error','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','svg:style','#accent-color-select','opacity','attributeChangedCallback','#locale-select','m21','#login-button','#a3c9a8','createElement','\x20GB','blur','#flood-color','before','png','#c9e4ca','slice','pointerenter','only-if-cached','Tiptap','#font','#0a1128','setEditable','input','consolidate','max-stale','setLineJoin','#714674','92f3tewguhsn8o0qp.a1.typesense.net','connectedCallback','offsetWidth','#a3a380','#ecf39e','parentNode','#fe938c','insertArtwork','#status','No\x20files\x20found','#00171f','#accent-color-preset-select','color-interpolation-filters','x-large','currentToken','#description-textarea','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22','define','miter','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','#e7d8c9','#preview','App','findChildren','auth/requires-recent-login','IMPORT_RULE','#c1fba4','#001524','#f7e1d7','setStart','#sidebar','toggleCode','#recent-files-select','getViewport','ctrl','nextNode','equals','ready','trending','Decoration','Invalid\x20minutes\x20format.','#author-avatar','<?xml\x20version=\x221.0\x22\x20encoding=\x22utf-8\x22?>\x0a','#users-section','searchLogos','U+100-24F,\x20U+259,\x20U+1E00-1EFF,\x20U+2020,\x20U+20A0-20AB,\x20U+20AD-20CF,\x20U+2113,\x20U+2C60-2C7F,\x20U+A720-A7FF','use','watched-by','#284b63','NumberFormat','#335c67','#c6ac8f','status','</div>','removed','#70a288','#failed-to-reset-password','.ftl','#84b59f','removeAttribute','image','#bug-move-dialog','#99582a','getImageData','TTF','pointerdown','http://www.w3.org/2000/svg','Boxy\x20SVG\x20-\x20Ideas','charCodeAt','symbol','#sort-ascending','#changelog','#ccb7ae',':scope\x20>\x20x-shortcut.default-shortcut','#e09f3e','Noto\x20Sans\x20Lao','vmetric','log','NumberToken','webp','ws0yTmTUew8','#tutorial-fill-and-stroke','Unimplemented\x20operator:\x20setStrokeColor','dblclick','Mangal','\x20Linux','bx-sharepage','rotate(0deg)','#b392ac','#efc3e6','hebr','#separator-menuitem','Drukuj','#c5d86d','unshift','scrollIntoView','#00a896','pattern','image/jpeg','checkCloudWriteAccess','Extensions','deleteUser','beginAnnotation','#ffc857','#d1be9c','#failed-to-add-post','contact','#progress-bar','delete-account','#quick-ui-settings','#ff928b','innerHTML','endText','680180PJpLky','is2D','pointerClientPoint','#a53860','#color-scheme-buttons','#847577','Validating\x20password…','switch','commonAncestorContainer','700','#6c584c','https://storage.boxy-svg.com/artworks/-MIbjeYwL8MnSm_Eq0if.svg','extra-expanded','Util','getFamilyDescriptor','setTextRise','setOrgUsers','This\x20field\x20is\x20required','price','idea-','lighting-color','checkout','data-file-size','#9cafb7','#011627','#89b0ae','#transform-origin','editUser','edit-idea',':focus','#1282a2','https://storage.boxy-svg.com/linux/screenshot-2.png','#user-agent-button','hitTest','#fad4c0','#name','#comments-label','language','votesCount:asc','#788aa3','dateRank','#253237','id:=','rotateSelf','bx-librarypanel:currentBrowserID','#ff9b54','#thread-anchor','x.y.z','grabbing','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22','PingFang\x20SC','\x20/\x20','Ewidencja\x20prac\x20-\x20KPWI\x201/','#auto-theme-label','readAsDataURL','map','paintFormXObjectEnd','toggled-item','createdTimeDesc','setWordSpacing','accentcolorchange','bx-progressivewebapp','down','#d8572a','#e2711d','pointercancel','#previews-placeholder','href=\x22','navigate','getPost','#press','#218380','bx-uisettings:size','feFuncB','Linux','Spinner','blinkFooter','authorAvatar','getAxialAlignedBoundingBox','extralight','#4c956c','focused','toggleLink','Paragraph','bx-videoplayer','#locale-section','#bcac9b','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>','Unimplemented\x20operator:\x20setStrokeCMYKColor','#809bce','ease-in','white-space-collapse','settings→','fontWeight','#84a59d','banner','#failed-to-create-folder','objs','previousElementSibling','trendingRank','#ef476f','#f4d58d','WOFF2','orgUsers','locked','throbber','Sinhala\x20Sangam\x20MN','</li>','Google\x20Chrome','#fec89a','URL','bx-changelogpage','#f7d6e0','#profiles','Desc','popularity','bx-macapp','pointerPressure','reply-','data-user-shortcut','#ede7b1','#pager','max-age=21600','#1d4e89','https://fonts.googleapis.com/css?','clip-path','#transform-precision-slider','#00a6ed','BulletList','embeddedFaces','text-rendering','success','url(','currentColor','#footer-buttons','questions','#db3a34','#4a148c','blobUrls','websiteURL','delete-bug','getSelection','#202c39','#pwa-standard-price-span','codeBlock',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','tagschange','DIMENSION','selected','#91e5f6','#close','general','setDocument','async','#subscription-status-span','toFixed','#f3d8c7','WebKit','locale','trim','#sidebar-buttons','#299fff','m33','#sort-descending','xmlns:bx','bx-blogblock','bx-bugpreviewblock','bx-iconscloudbrowserview','#mid-marker','#eec170','hidden','Droid\x20Sans','#letter-spacing','editor','#a9def9','Noto\x20Sans\x20Arabic','#profile-block','#paragraph-button','selection','#stroke-line-join','#image-viewer','#stroke-dash-array','stroke-linejoin','indentable','screen','bx-blogfilterblock','feMorphology','reorderFontFamilies','.image-resize-grippie','brand','sub','bx-cloudfolderpreview','Unimplemented\x20operator:\x20paintImageMaskXObjectRepeat','pointermove','#title-anchor','data-bx-pinned','Lohit\x20Assamese','shiftKey','Noto\x20Sans\x20Math','useragent','pathname','computedStyleMap','move-bug','Failed\x20to\x20initialize\x20Typesense','thumbnaildblclick',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22','Moving\x201\x20item\x20to\x20\x22','-N4E9O2X_59ayE-mCV9J','toArray','#aed9e0','#ffe1a8','#image-rendering','#9f6976','pendingClip','.png','#settings-message','#name-change-button','feFuncG','#invalid-name','#82c0cc','EOF','currency','#b8c0ff','Edge','/ideas/','#watch-button','childItems','bx-shortcutssettings:userShortcuts','s-maxage','#faf9f9','downvote','tutorials','Ubuntu','fromLocation','startsWith','save','https://storage.boxy-svg.com/artworks/-M538anEpEaHc8nctPwz.svg','#standard-plan-radio','updated','#changes-list','WOFF','filters','#1b1b1e','#hardware-acceleration-checkbox','#160f29','Unknown\x20IR\x20type:\x20','mathematical','transformMatrix','tag','CentOS','feDropShadow','#f4f4f9','Sample\x20notification','#f29559','<x-message\x20href=\x22#date-wrote\x22\x20args=\x22date:','#cdeac0','pointers','Plantagenet','border-box','wordSpacing','loaded','move-question','Unimplemented\x20operator:\x20beginCompat','exists','no-transform','#icon','random','<x-button\x20value=\x22','#edit-post','PluginKey','#6a6b83','EPSILON','delete-','Gapcursor','#ghost','SHOW_TEXT','#priority.critical','isInFont','strokeAlpha','execCommand','name,tags','clippath','Visual\x20Geez\x20Unicode','#block-buttons','#ffd6e0','#efc7c2','scaleX(-1)','bx-boardrulers:space','Droid\x20Arabic\x20Kufi','#5eb1bf','searchchange','capitalize','lowercase','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-menuitem\x20value=\x22','dashPhase','bx-profileblock','#profile-avatar','lastElementChild','onSnapshot','italicAngle','perPage','bx-cloudfolderpreview[selected]','left','toISOString','convertToPDF','Leelawadee\x20UI','#adc178','#bc6c25','#markers-buttons','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-menuitem>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','boxy-svg.appspot.com','isSameEntry','#e5e6e4','#ed6a5a','#d4e09b','open','dominant-baseline','createRange','#001f54',':scope\x20>\x20x-menu','\x22></x-message>','#required-field','geometricPrecision','#d66853','saveToDiskAs','m12','setAttribute','#upvote-button','bx-searchpage','boxy-svg/email-not-verified','storage','naturalHeight','line-height','Untitled\x20folder','bitmaps-library-browser','created-asc','#subject-input','#d1495b','selectAll','/changelog','escape','attrs','index','auth/user-not-found','#link-box','#ffe66d','library','sendContactEmail','paste','txtgrp','system-ui','900','#c8b6ff','#555b6e','internal','Standard\x20(yearly\x20billing,\x20','search','nwse-resize','#800e13','updateAttributes','<x-message\x20href=\x22#fetching\x22\x20ellipsis></x-message>','stopImmediatePropagation','removeChild','contextmenu','U+1780-17FF,\x20U+200C,\x20U+25CC','localName','args','fluentIcons','<x-message\x20href=\x22#press-new-shortcut\x22></x-message>','#items','year','bx-uisettings:colorScheme','#filter-buttons','percentage','bx-cloudbrowser:sort','#f28482','.description-input','ccjJjvzspNI','#placeholder-block','#15616d','\x20<span>(','800','image/png','#questions','</title>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@media\x20print\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20page-break-inside:\x20avoid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20section\x20+\x20section\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20h1\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20h2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20h2\x20span\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20hr\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x2030px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</head>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Plan\x20i\x20Harmonogram\x20Prac\x20Dla\x20Projektu\x20Badawczo-Rozwojowego\x20Boxy\x20SVG\x20(KPWI\x201/','revision','#edit-idea','changelog-x.y.z','#ea7317','#679436','<x-message\x20href=\x22#subscription-status.active\x22\x20args=\x22date:','threadSlug','beforevalidate','Text','#586f7c','#2f4858','bx-userseditor','#clip-rule','522135','extendMarkRange','#idea-delete-dialog','isModerator','authorUID','closeStroke','<bx-errorpage></bx-errorpage>','596389','.svgz','class','setTextMatrix','Phetsarath\x20OT','#status-select','bx-blogdeleteform','Renaming\x20file…','setStrokeRGBColor','(prefers-color-scheme:\x20dark)','#billing-select','can','points','#5e548e','queryIcon','#website-change-button','nameAsc','#59a5d8','bx-questionssubpage','#f8edeb','Boxy\x20SVG\x20-\x20Changelog','Unimplemented\x20operator:\x20nextLineShowText','>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22index-cell\x22\x20part=\x22cell\x20index-cell\x22>','#textarea','#9ceaef','x-button[value=\x22','newFolder','#failed-to-change-user-website','newPost','#fff','priority','scroll','#8b8c89','#003566','.jpg','#533747','#metabar','viewport','details','comments-asc','#ffcad4','super','#c18c5d','#billing-button','#delete','#2f4550','integer','x-button','dropEffect','multiplySelf','#5e3023','Abyssinica\x20SIL','Noto\x20Sans\x20Gurmukhi','#email-verify-button','isolate','lighten','#ffe5d4','Droid\x20Sans\x20Armenian','extraStack','#90e0ef','category:','#blog','<x-message\x20href=\x22#language.auto\x22></x-message>\x20(','privacy','Mention','4YSMDWX','x-shortcut','#query-input','#f6bd60','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','#000814','idea','insertContent','unordered-list','replaceWith','#ffa62b','#3a506b','classes','\x20items','scrollElementIntoView','downvotePost','#enter-your-search-query','}\x22></x-message>','Noto\x20Sans\x20Oriya','oldLocation','#ffc9b9','textinputmodeend','paint-order','Han\x20Nom\x20A','bx-csscascadeinspector:width','<x-message\x20href=\x22#subscription-plan.standard\x22></x-message>','#415a77','paintSolidColorImageMask','/libs/pdf/pdf.js','#start-marker','Enter','_href','Expected\x20STRING\x20or\x20IDENT\x20token.','#delete-menu-item','isList','#bee3db','style[data-bx-fonts=\x22','#open-with-boxy-svg','#ffe5d9','200%','Unimplemented\x20operator:\x20endGroup','normal','line','widget','manual','m22','replaceState','feSpecularLighting','#5f0f40','#idea-move-form','image/gif','tokenize','fontStretch','bx-ideapreviewblock[id=\x22','#document','#f6ae2d','minVersion','logos','created','feGaussianBlur','textContent','rotate','#324376','\x20toggled','show','#eff7f6','tags','threadUpdatedTime:asc','toDisplayString','#fcf6bd','pointerup','unit','profile','#9bc1bc','leading','#placeholder','bx-uisettings:showInstallButton','#shortcuts-view','moveSelectionToFolder',';\x20opacity:\x200.2;\x22/>','#c75146','#e9c46a','Dropcursor','fonts','ListItem','mark','#e5dada','webkitGetAsEntry','svg:animate','patternTransform','setParagraph','300','setCharWidth','#033f63','#image','data-name','configs','<x-message\x20href=\x22#date-created\x22\x20args=\x22date:\x20','openMessageDialog','watchThread',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label\x20slot=\x22scope\x22>','bx-shortcutseditor','toSVG','<url>','#progress-view','unlinkFontFamily','#087e8b','event','#embed','endPath','#00509d','skeleton','#blog-block','#bio-section','#font-variant','estimate','PingFang\x20TC','readAsArrayBuffer','#ff686b','draggable','delete-blog','#about-anchor','inline','#locale-message','restoreScrollOffset','#bug.','#normal-icon-img','doc','#placeholder-title','skinTone:','#eaf4f4','#b298dc','#f86624','#ffef9f','.paddle-frame','values','textinputmodestart','moveTenUnitsDown','#priority.very-high','#staff-button','submit','...','login','posts','Tab','#3d405b','visibility','#a26769','size','clipGroup','extra-condensed','m24','#ada7c9','\x20-\x20','DaunPehn','lineCap','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20previous-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20previous-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22','#bfd8bd','readonly','Lucida\x20Grande','#00a8e8','bx-keyboardsettings:userShortcuts','#f4acb7','#d81159','width:\x20','Kefa','removeAllRanges','#rename','overflowX','readAsText','àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;','#theme-select-separator','userid','Premium\x20(yearly\x20billing,\x20','#message','#227c9d','#created-by-me-switch','new','transformOrigin','bx-questionmoveform','watch','bevel','#marker-','response','lockInput','eula','#comments-detail','subject','#bb9457','AIzaSyBZd8UahlnRn53EWC7snRmOAuuktqBaP6k','#6096ba','url','<span\x20class=\x22','#06aed5','#2b2d42','order','limit','Lao\x20UI','#073b4c','\x20locale=\x22','#f8ad9d','#reply-menu-item','#votes-detail','#posts-anchor','#cache-control-separator','browser','#verify-your-email-address.detail','Unimplemented\x20operator:\x20setFillColorSpace','handleWriteAccessRejection','bx-passwordconfirmform','#library-separator','#failed-to-change-post-status','#email-section','zoom-out','Lezer','#274c77','paintImageXObject','srcLocale','data-conflicting','feTile','#bug-delete-dialog','fixed','Heading','#show-view-outline-above-objects-checkbox','#editor','clipboard','#ffca3a','#color-scheme-menu','auth/invalid-password','#f1faee','tspan,text','changes','#84dcc6','cloud','Control','#cbf3f0','#d8d8d8','path','overline','#bug-delete-form','getRandomValues','Mint','findParentNode','#9e0059','#failed-to-change-email','authorName','#hardware-acceleration-section','#title','#adf7b6','preserve','bx-blogpreviewblock','adwaita','_text_match:desc','#question-delete-dialog','createNodeIterator','narrower','getStorage','pixabay.com','openLoginDialog','#7bf1a8','svg:g','svg:a','dragover','end','#version-inputs','delete-idea','sendPasswordResetEmail','updatedTimeAsc','newUser','indefinite','bx-cloudfilepreview,\x20bx-cloudfolderpreview','getPathData','Boxy\x20SVG\x20-\x20Share','reportValidity','#ebebeb','wait\x20','blog-','authorID','#f7b538','\x0a\x20\x20\x20\x20\x20\x20<!--\x20Add\x20to\x20<head>\x20-->\x0a\x20\x20\x20\x20\x20\x20<script\x20src=\x22https://boxy-svg.com/embed.js\x22\x20async></script>\x0a\x0a\x20\x20\x20\x20\x20\x20<!--\x20Add\x20to\x20<body>\x20-->\x0a\x20\x20\x20\x20\x20\x20<boxy-svg','#f4f1de','bx-keyboardsettings:spaceKeyMode','bx-shortcutssettings:spaceKeyMode','NUMBER','#cache-control-input','#4ecdc4','__search__','multiply','#save-button','#621708','SyntaxError','operatorList','fromEvent','dark','#d7263d','-01-01','metaKey','getMacAppStorePrices','reloadInstances','orgPlanID','#priority.normal','tabIndex','Ctrl','fontMatrix','stroke-opacity','#1f2041','#3a6ea5','toggleHighlight','readyState','bold',':[DEFAULT]','exclusion','platformVersion','deleted','#dab49d','bx-uisettings:locale','#283845','bx-elementspanel:sidebarWidth','nextElementSibling','href','28TmfJJO','#decrease-indent-menu-item','extend','#f7f7ff','/share','fill-box','large','toLocation','#a1c181','#3d348b','toMatrix','media','#0496ff','Y6dSQX6P3xM','#sidebar-separator-1','#f4cae0','#3b6064','currentView','isVoid','lineX','xx-small','feComposite','Editor','fill-rule','hanging','parent','round','bx-downloadbutton','<rect\x20x=\x22','min-fresh','Failed\x20to\x20connect','bug','#1a1423','#354f52','tour-','boxy-svg/user-not-authorized','Expected\x20URL\x20or\x20FUNCTION\x20token.','variant:','boxy-svg/trial-expired','6M5zcrtvo4s','active','text-bottom','test','found','closest','Checkout','configchange','flathub','patterns','setDoc','#title-input','bx-blogpreviewblock[id=\x22','paintImageXObjectRepeat','#menubar-section','fontDirection','getFullYear','Standard','setStrokeGray','miterLimit','#01161e','</svg>','Unimplemented\x20operator:\x20setStrokeGray','#invalid-email','#cebebe','fontVariant','noopener','userSpaceOnUse','\x20scale(','#stroke-miter-limit','\x20MiB','#bfd3c1','#c0fdfb','#new-idea','subscriptionID','#16697a','bx-metabar','Saysettha\x20OT','unobserve','contentWindow','selectTextblockEnd','clear','stores','Prices','#cloud','Fonts','add','#540b0e','OTF','revokeObjectURL','ceil','queryMessage','Khmer\x20UI','splice','#ffc8dd','searchFluentIcons','--preset-accent-colors','upvotedBy','importNode','setFillGray','cachedTime','mimetype','solidcolor','<x-message\x20href=\x22#date-abs\x22\x20args=\x22date:','hairline','#add-button','marker','#427aa1','#ee6c4d','#a4243b','highlighted','files','#bold-button','clientY','columns','isCommandEnabled','#4a5759','Myanmar\x20Text','div','#e8eddf','getAttribute','uppercase','<bx-commentblock\x20skeleton></bx-commentblock>','pre','#accent-color-buttons','indexOf','#nav-buttons','edit','medium','#options-section','U+964-965,\x20U+D82-DF4,\x20U+200C-200D,\x20U+25CC','threadUpdatedTime','closed','#ead2ac','displayMode','#banner-input','#shape-rendering','#f68e5f','#b8d0eb','Lohit\x20Kannada','extensionManager','charAt','stopPropagation','push','bx-commentdeleteform','bx-questionpreviewblock','pixelated','bx-bugdeleteform','foreignObjects','<bx-bugspage></bx-bugspage>','#bc4b51','#002642','#status-message','DecorationSet','#failed-to-write-file.subscription-expired','EOFToken','#17c3b2','bx-columnscloudbrowserview','query','center','#geometry-precision-slider','#364958','getDefaultRegion','about','Boxy\x20SVG\x20-\x20','spellcheck','text/html','accent','#updated-time-span','normalKey','0000000','statuschange','page-','tgrp','orgCancellationEffectiveDate','#auto-accent-color-preset-label','U+307,\x20U+323,\x20U+964-965,\x20U+D02-D7F,\x20U+200C-200D,\x20U+20B9,\x20U+25CC','endGroup','isConnected','_description,_thread','#fcd5ce','fillAlpha','#name-input','#new-blog-button','/ideas','SHOW_ELEMENT','#f7fff7','Unimplemented\x20operator:\x20paintImageMaskXObjectGroup','#fb8b24','legal-','split','namechange','#ef233c','Dependent\x20image\x20with\x20object\x20ID\x20','writing-mode','Unexpected\x20STRING\x20or\x20IDENT\x20token.','textHScale','https://storage.boxy-svg.com/artworks/-Mfmib4taXaHpujTANsc.svg','<bx-embedpage></bx-embedpage>','format','bx-uisettings:theme','#show-install-button-checkbox','#tutorial-text-and-fonts','x-menuitem[value=\x22','#355070','#accent-color-subsection','watchPost','css','#c17c74','bx-ideassubpage','\x20users','#failed-to-move-post','#author-avatar-anchor',':scope\x20>\x20bx-title','-anchor','U+964-965,\x20U+A80-AFF,\x20U+200C-200D,\x20U+20B9,\x20U+25CC,\x20U+A830-A839','moderator','Android','#640d14','threadUpdatedAuthorID','#quantity-input','#accent-color-preset-menu','closeEOFillStroke','numPages','spline','unset','Alt','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22row\x22\x20','#ideas','#619b8a','#ff8c61','#failed-to-change-file-cache-control','pow','@font-face\x20{\x20','svg:clipPath','local','Boxy\x20SVG\x20-\x20Bug\x20#','#tags-input','#eac4d5','#info-section','getAppMenuCommandsIndex','#editor-wrapper','right','saturation','#90a8c3','font-variant:\x20','#email','x-label','bx-passwordresetform','glyphs','#031d44','sans-serif','#e8dab2','bx-cloudstatusbar','subscription','.ai','visibleStroke','Passed\x20font\x20faces\x20from\x20different\x20families\x20to\x20fontsManger.#setFamilyFontFaces().','#general-button','#ffd8be','getFunctions','#f6511d','#a98467','codeBlockSyntaxHighlighter','#fca311','#e59500','#notification','#invalid-format','m11','.title\x22></x-message>','subscriptions','name','boxy-svg/user-not-subscribed','Win64','cancelURL','clientX','#eacdc2','dataURL','#billing-td','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22tag-anchor\x22\x20href=\x22','none','GST','https://itunes.apple.com/us/app/boxy-svg/id611658502','<bx-profilepage\x20userid=\x22','#open-button','200','#9d8189','#edit-button','#mas-price-span','#watch-checkbox','#0c0f0a','collapse','accentColor','#faf3dd','register','del','hypot','#color-scheme-select','#ddbea8','#f0a6ca','bx-ideadeleteform','fillStroke','svgz','getTime','lineY','nowrap','moveOneUnitRight','#eb5e28','Unexpected\x20','#thumbs','loadNewArtwork','#ee964b','#5b8e7d','edit-bug','\x20format(\x22','moveTenUnitsUp','</strong>','#52796f',')</span></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul>','url(\x22','Meiryo','exec','bx-embeddedwebapp','#ffafcc','unorderedList','bx-pagebreadcrumb','getDocument','#subscription-plan-span','WebP','bx-questionsfilterblock','toString','setTextRenderingMode','new-bug','#f7b267','\x20accent=\x22','#space-modifier-radios','Win32','lineMatrix','googleFonts','#25a18e','#advanced-filters-icon','repeatDur','#bfc0c0','upvoters','e-resize','https://flathub.org/apps/com.boxy_svg.BoxySVG','#recent-files-section','markPoint','<rect\x20width=\x22','outline-color','#failed-to-change-file-library','#5fa8d3','desc','upvoters:=','openLocalFontsImportDialog','#priority-detail','HTMLAttributes','nw-resize','#next-button','#ffeedd','#bug-form','pagination','#da627d','showModal','#previews','hasChildNodes','[a-zA-Z0-9.!#$%&\x27*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$','#questions-anchor','data-bx-','#filters-buttons','PDF','setColorScheme','img','https://storage.boxy-svg.com/artworks/-Nm_AjKqYsA_iDxqe_jA.svg','#player','#ideas-anchor',';base64,','toggleBulletList','searchThreads','#status-buttons','cut','toggleUnderline','#profile-button','application/com.boxy-svg.bx-cloudbrowser:items','createTreeWalker','font-style:\x20','pointerType','#radios','storeScrollOffset','hasOwnProperty','#25ced1','#e0afa0','#00a6fb','alignment-baseline','animate,animateMotion,animateTransform,set','#3da5d9','localeCompare','square','bx-navbar:forceCollapsed','.gif','svg:tspan','#f3e9d2','#941b0c','https://storage.boxy-svg.com/linux/screenshot-5.png','#unordered-list-button','#22223b','-500%','version','s-resize','marker-start','newArtwork','#bugs','Player','feComponentTransfer','extends','#manage-your-subscription','setFont','bx-homepage','bx-markupsettings:geometryPrecision','#a3b18a','#bee9e8','scrollWidth','#f9dcc4','#fceade','#fbfefb','bx-ideapreviewblock','flood-opacity','x-menuitem[value=cupertino]','1000%','#user-not-found','#985277','userAgent','#fe6d73','px\x22\x20viewBox=\x220\x200\x20','#faf0ca','webapp','removeFontFamily','code-block','ArrowRight','#ccd5ae','#c2dfe3','help','inherit','#back-to-form','#ec407a','stroke-box','#ecc8af','jpeg','boxy-svg','#6f1d1b','createObjectURL','#585123','#shortcuts-editor','#fcbf49','#created-date-span','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22value-cell\x22\x20part=\x22cell\x20value-cell\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22label\x22>','difference','#00b2ca','threadUpdatedAuthorName','/tutorials','#failed-to-log-in','ML0qIC62dFtk9Oro0x9Ps3IbO6Tgv5jL','name-taken','circle','#colors-section','bx-subscriptionsettings','WinCE','bottom','State','svg','#auto-theme-icon','.jpeg','data-system','HorizontalRule','setRenderingIntent','polyline','/bugs','#461220','timeStamp','#password-input','0px','#year-buttons','changeEmail','#fb5607','MS\x20PGothic','setArtworksFolders','#5f506b','#stop-color','userID','#ce6a85','<bx-blogpage></bx-blogpage>','ew-resize','createdYear','#b75d69','auth/invalid-display-name','insertAdjacentHTML','#0582ca','heavy','Code','#eee2df','#avatar','#5dd39e','#banner-image','bx-garbagecollectorsettings:collectOptions','GF\x20Zemen\x20Unicode','write','light','link','.woff','#comments','detail','meta','observeCollection','feMergeNode','font-variant','blue','.page-item[data-value=\x22','forEach','#idea-dialog','bx-ideasfilterblock','#tutorial-metadata','XML','#failed-to-delete-account','Images','#priority.low','grouping','bug-','bx-bugssubpage','#68d8d6','polygon','openFile','bx-bugpreviewblock[id=\x22','#d80032','#fec3a6','bx-ideaspage','#updated-author-anchor','#68b0ab','getFolderSize','unlockInput','keywords','bx-fileshareform','#flathub','#message-editor','Arial','lineWidth','auth/network-request-failed','#64a6bd','ellipse','#6a4c93','#e55934','bx-cloudfilepreview','Expected\x20\x22)\x22\x20token.','#69a297','#028090','moveTo','clone','#f8f7ff','#faa275','cssRules','#agree-checkbox-label','copy','moveOneUnitDown','Fedora','base64','setStrokeColorSpace','vertical-lr','#download-on-flathub','Noto\x20Nastaliq\x20Urdu','1956096POAYVT','curveTo2','#9a031e','wider','#failed-to-write-file','hex','pressure','#f57f17','standalone','#filter-form','clip','authorID:=','#view-buttons','#stroke-dash-offset','error','gif','prompt','setData','no-cache','description','getListSubscription','offsetLeft','#italic-button','text/css','openPasswordResetDialog','mouseout','cellIndex','#bf0603','substring','zoom-in','feMerge','#region-td','.item','#ffd23f','/themes/','.shortcut-label','#7678ed','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','Moving\x20','PRINT','pattern-','removeFontFace','loading','#2c6e49','documentElement','has','lineTo','Error\x20code:\x20','createdTime:asc','apply','#495867','src','getFontFaces','fontRulesByFamily','#new-post','Vivaldi','#f9eae1','#9a8c98','firebase:authUser:','Mesh','cubic-bezier(.36,.07,.19,.97)','#failed-to-send-contact-message','#home-button','strong','next','key','#dda15e','Extension','node','#bug-move-form','singularValueDecompose2dScale','#failed-to-delete-comment','#feeafa','/artworks/','firstElementChild','#e26d5c','#c32f27','600','-N4E9lwrDBIB-0Cx-_D9','getRootNode','togglePreviousTool','#706677','#fdc5f5','strike','rotate(359deg)','<div\x20class=\x22item\x20ellipsis-item\x22>…</div>','#aa4465','Asc','compare','beginText','public','offsetTop','AVIF','bx-secondarypanelsdock:height','where','#question-block','#840032','#8093f1','Escape','cloneNode','attachments,description,_description,_thread','setContent','Boxy\x20SVG\x20-\x20Search','#3c1642','#ea8c55','filter','Boxy\x20SVG\x20-\x20Legal','endInlineImage','getCacheSize','#a6808c','selectionUpdate','#settings-popover','#fbc3bc','steps','#348aa7','x-card','oblique','canonicalURL','part','<bx-ideassubpage></bx-ideassubpage>','bx-uisettings:limitScrollableArea','<bx-searchpage></bx-searchpage>','decrease-indent','#00b4d8','#c08552','</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>','some','style','monospace','UTF-8','#8ecae6','replaceSync','#f4d35e','U+600-6FF,\x20U+200C-200E,\x20U+2010-2011,\x20U+204F,\x20U+2E41,\x20U+FB50-FDFF,\x20U+FE80-FEFC','/profiles','regular','bx:','#failed-to-edit-post','#logout-button','#6f2dbd','#0ead69','#code-block-menuitem','Strike','matched_tokens','settings→subscription','<bx-homepage></bx-homepage>','#cc8b79','items','#2a9d8f','setConfig','j8v4SzypzWw','stroke-linecap','browserLocalPersistence','bx-commentblock','U+964-965,\x20U+B82-BFA,\x20U+200C-200D,\x20U+20B9,\x20U+25CC','#password-throbber','shadingFill','rgb(16,\x2016,\x2016)','#failed-to-unvote-post','pointerout','boxy-svg/user-not-subscribed-to-premium-plan','boxy-svg/user-not-signed','author\x20created\x20tags\x20comments\x20votes\x20hashtag','pre-line','watchers','#5e503f','author\x20created\x20tags\x20comments\x20priority\x20hashtag','#fed0bb','#website-input','pre-wrap','bio','#ef6351','createdTime:desc','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22','<x-message\x20href=\x22#subscription-status.expired-trial\x22\x20args=\x22date:','percent','<bx-presspage></bx-presspage>','#import','transparent','#website-section','#f6fff8','bx-quickuisettings','#details','#588157','#662e9b','offscreen-container','\x22\x20skin=\x22colored\x22\x20style=\x22background:\x20','userprofilechange','bx-headerblock','?category=ideas','setStrokeColorN','writeText','#006d77','#mask','#ff006e','DokChampa','warn','#cbc0d3','#f28f3b','#region-menu','/templates/progressive-web-app-menu.tpl','reload','#code-button','promise','feConvolveMatrix','baseline','mixed','removeEventListener','authorUserAgent','#failed-to-register-account','tr[data-editing]','now','#38040e','matches','#e88873','width','#7b1fa2','parseFromString','board','dragend','U+964-965,\x20U+B01-B77,\x20U+200C-200D,\x20U+20B9,\x20U+25CC','Blockquote','Functions','no-store','alt','bx-ideablock','getLocalFontsMetadata','#f2e9e4','max-width','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22','_blank','retrieve','OrderedList','#select-all','alphabetic','bx-vectorslibrarybrowser:provider','-50%','text-wrap','#c4fff9','Kohinoor\x20Devanagari','bx-ideamoveform','Boxy\x20SVG\x20-\x20Blog','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22','\x22\x20width=\x22','svg:rect','#0d1321','normalize','#0e103d','#users-change-button','value','#visibility','replace','<font-family>'];a0=function(){return FM;};return a0();}class Zi extends HTMLElement{static [bY(0x1068)]=[bY(0x21c)];static #C=ie` <template> <x-throbber id="throbber"></x-throbber> <main id="main" hidden> <bx-avatar id="avatar"></bx-avatar> <h3 id="name"></h3> <h4 id="email"></h4> <div id="anchors"> <a id="posts-anchor" href="/profile" target="_blank"><x-message href="#posts" autocapitalize></x-message></a> </div> </main> <footer id="footer" part="footer" hidden> <x-button id="profile-button"> <x-icon href="#login"></x-icon> <x-label><x-message href="#edit-profile" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="logout-button"> <x-icon href="#logout"></x-icon> <x-label><x-message href="#log-out" autocapitalize></x-message></x-label> </x-button>  </footer></template>
  `;static #S=se`
    :host {
      display: block flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      width: 200px;
      min-height: 200px;
      border-radius: inherit;
    }

    /**
     * Main
     */

    #main {
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Avatar */

    #avatar {
      margin: 0 auto;
      width: 120px;
      height: 120px;
    }

    /* Name */

    #name {
      margin: 7px auto 0px;
      text-align: center;
    }

    /* Email */

    #email {
      margin: 3px auto;
      text-align: center;
      opacity: 0.5;
      font-weight: 500;
    }

    /* Anchors */

    #anchors {
      font-size: 12px;
      text-align: center;
    }

    #anchors a {
      margin: 0 3px;
    }
    #anchors a:hover {
      cursor: pointer;
    }

    /**
     * Footer
     */

    #footer {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      border-top: 1px solid transparent;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    #profile-button {
      width: 100%;
    }

    #logout-button {
      width: 100%;
      margin-top: 8px;
    }
  `;get['enabled'](){const iX=bY;return this['hasAttribute'](iX(0x21c));}set['enabled'](af){const iY=bY;af?this[iY(0xa0a)](iY(0x21c),''):this[iY(0x88e)](iY(0x21c));}#T;#Bt;#P;#at;constructor(){const iZ=bY;super(),this.#P=this[iZ(0x1017)]({'mode':'closed'}),this.#P[iZ(0x48f)]=[a2[iZ(0x500)],Zi.#S],this.#P[iZ(0x775)](document[iZ(0xc3b)](Zi.#C[iZ(0x223)],!0x0));for(let af of this.#P[iZ(0x44e)]('[id]'))this['#'+af['id']]=af;this['#logout-button'][iZ(0x1012)]('click',()=>this.#qt()),this[iZ(0xd57)][iZ(0x1012)](iZ(0xff9),()=>this.#jt());}[bY(0x854)](){const j0=bY;this.#T=si(this,j0(0xf55)),this.#Bt=si(this,j0(0xa88));}[bY(0x83b)](af,ag,ah){ag!==ah&&'enabled'===af&&(this['enabled']?this.#Ot():this.#_t());}#Ot(){const j1=bY;Bi['auth'][j1(0x1012)](j1(0x284),this.#at=()=>this.#A()),this.#A();}#_t(){const j2=bY;Bi['auth'][j2(0xee0)]('userchange',this.#at);}async #qt(){const j3=bY;await this.#Bt['collapse'](),Bi[j3(0xf5c)][j3(0x556)]();}async #jt(){const j4=bY;await this.#Bt['collapse'](),this.#T[j4(0x908)](qi(location[j4(0xbd9)],j4(0x741),j4(0x4f9)));}#A(){const j5=bY;if(Bi[j5(0xf5c)][j5(0x791)]){this['#main'][j5(0x96e)]=!0x1,this[j5(0x59c)]['hidden']=!0x1,this[j5(0x264)][j5(0x96e)]=!0x0;let af=Bi['auth'][j5(0x1050)];if(af?(this[j5(0xdcd)][j5(0x96e)]=!0x1,this[j5(0xdcd)][j5(0x1ce)]=af[j5(0x58e)]||j5(0x9ce),this[j5(0xdcd)][j5(0xf0a)]=Bi[j5(0xf5c)]['userID']):this[j5(0xdcd)]['hidden']=!0x0,af?(this[j5(0x8e7)][j5(0x96e)]=!0x1,this['#name']['textContent']=af[j5(0xce8)]):this[j5(0x8e7)][j5(0x96e)]=!0x0,af?(this[j5(0xccf)][j5(0x96e)]=!0x1,this[j5(0xccf)]['textContent']=Bi[j5(0xf5c)][j5(0xff7)]):this[j5(0xccf)]['hidden']=!0x0,af){let ag=Bi[j5(0xf5c)][j5(0xdc1)],ah=$e(af['name']);this[j5(0x515)][j5(0x96e)]=!0x1,this[j5(0xb65)]['href']=j5(0x1c8)+ag+'/'+ah;}else this['#anchors'][j5(0x96e)]=!0x0;this[j5(0xd57)][j5(0x96e)]=!af,this[j5(0xe9b)]['hidden']=!af,this[j5(0x59c)]['hidden']=this[j5(0xd57)][j5(0x96e)]&&this[j5(0xe9b)]['hidden'];}else this['#main'][j5(0x96e)]=!0x0,this[j5(0x59c)]['hidden']=!0x0,this[j5(0x264)]['hidden']=!0x1;}}customElements[bY(0x864)](bY(0x609),Zi);class Yi extends HTMLElement{static #C=ie` <template> <x-button id="install-button" skin="flat" condensed hidden> <x-icon href="#install"></x-icon> <x-label><x-message href="#install"></x-message></x-label> </x-button> <x-button id="settings-button" skin="flat" condensed> <x-icon href="#settings"></x-icon> <x-label><x-message href="#settings"></x-message></x-label> <x-tooltip><x-label><x-message href="#settings"></x-message></x-label></x-tooltip> <x-popover id="settings-popover" modal> <bx-quickuisettings id="quick-ui-settings"></bx-quickuisettings> </x-popover> </x-button> <x-button id="login-button" skin="flat" condensed hidden> <x-icon id="login-icon" href="#login"></x-icon> <x-label><x-message href="#log-in" autocapitalize></x-message></x-label> <x-tooltip><x-label><x-message href="#log-in"></x-message></x-label></x-tooltip> </x-button> <x-button id="profile-button" skin="flat" condensed hidden> <bx-avatar id="profile-avatar"></bx-avatar> <x-popover id="profile-popover" modal> <bx-quickprofilesettings id="quick-profile-settings"></bx-quickprofilesettings> </x-popover> </x-button> </template>
  `;static #S=se`
    :host {
      display: block flex;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      gap: 16px;
    }
    :host([collapsed]) {
      justify-content: center;
      flex-flow: column;
      gap: 6px;
    }

    :host > x-button {
      color: var(--text-color);
    }
    :host > x-button::part(arrow) {
      display: none;
    }
    :host([collapsed]) > x-button {
      width: 100%;
    }

    :host > x-button > x-label {
      color: var(--text-color);
      font-weight: 500;
      margin-left: 8px;
    }

    :host([collapsed]) > x-button > x-label {
      display: none;
    }

    :host > x-button > x-icon {
      color: var(--text-color);
    }

    x-button > x-popover {
      cursor: initial;
    }

    x-button > x-tooltip {
      --align: right;
    }
    :host(:not([collapsed])) x-button > x-tooltip {
      display: none;
    }

    /* "Install" button */

    #install-button {
      overflow: hidden;
    }

    #install-button x-icon {
      flex: 1;
      width: 18px;
      min-width: 18px;
      height: 18px;
    }

    /* "Settings" button */

    #settings-button {
      overflow: hidden;
    }

    #settings-button x-icon {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }

    :host([collapsed]) #settings-popover {
      --align: right;
    }

    /* "Log in" button */

    #login-button {
      overflow: hidden;
    }

    #login-button x-icon {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }

    /* "Profile" button */

    #profile-avatar {
      width: 30px;
      min-width: 30px;
      height: 30px;
    }

    :host([collapsed]) #profile-popover {
      --align: right;
    }
  `;get[bY(0x653)](){const j6=bY;return this[j6(0xfd9)](j6(0x653));}set[bY(0x653)](af){const j7=bY;af?this[j7(0xa0a)](j7(0x653),''):this['removeAttribute'](j7(0x653));}#P;#T;#N;#Vt;#Gt;#ft;#R;#Ht;constructor(){const j8=bY;super(),this.#P=this[j8(0x1017)]({'mode':j8(0xc5d)}),this.#P['adoptedStyleSheets']=[a2['themeStyleSheet'],Yi.#S],this.#P[j8(0x775)](document[j8(0xc3b)](Yi.#C[j8(0x223)],!0x0));for(let af of this.#P[j8(0x44e)](j8(0x6e3)))this['#'+af['id']]=af;this[j8(0x5e2)][j8(0x1012)]('click',()=>this.#Wt()),this['#login-button'][j8(0x1012)](j8(0xff9),()=>this.#Kt()),this['#settings-popover'][j8(0x1012)]('open',()=>this['#quick-ui-settings'][j8(0x21c)]=!0x0),this[j8(0xe80)][j8(0x1012)](j8(0x225),()=>this[j8(0x8c0)]['enabled']=!0x1),this['#profile-popover'][j8(0x1012)](j8(0x9ff),()=>this[j8(0xf19)]['enabled']=!0x0),this['#profile-popover'][j8(0x1012)](j8(0x225),()=>this['#quick-profile-settings'][j8(0x21c)]=!0x1);}[bY(0x854)](){const j9=bY;this.#T=si(this,j9(0xf55)),this.#A(),Bi[j9(0xf5c)]['addEventListener'](j9(0xecc),this.#Gt=()=>{this.#A();}),a2['addEventListener'](j9(0x4ce),this.#N=()=>{this.#A();}),a2[j9(0x1012)](j9(0xc08),this.#Vt=af=>{this.#Zt(af);}),window[j9(0x1012)](j9(0x10dd),this.#Ht=af=>{this.#A();}),this.#T[j9(0x1012)](j9(0x646),this.#R=()=>{this.#A();});}[bY(0x7db)](){const jb=bY;Bi[jb(0xf5c)][jb(0xfe3)](jb(0xecc),this.#Gt),a2['removeEventListener'](jb(0x4ce),this.#N),a2[jb(0xfe3)](jb(0xc08),this.#Vt),window[jb(0x1012)](jb(0x10dd),this.#Ht),this.#T[jb(0xee0)]('installedchange',this.#R);}#Zt(af){let {key:ag,value:ah,origin:aj}=af['detail'];'bx-uisettings:showInstallButton'===ag&&this.#A();}#Wt(){const jc=bY;this.#T[jc(0x908)](qi(location[jc(0xbd9)],jc(0x741),'install'));}#Kt(){const jd=bY;this.#T[jd(0x908)](qi(location[jd(0xbd9)],'dialog',jd(0xb28)));}#A(){const jf=bY;!0x1===a2[jf(0x4a6)](jf(0xae6),!0x0)||!0x0===this.#T['isInstalled']||jf(0x901)!==this.#T[jf(0xa31)]?this['#install-button'][jf(0x96e)]=!0x0:this[jf(0x5e2)]['hidden']=(!re||!le)&&!window['install'],(!0x1===Bi['auth'][jf(0x791)]||null!==Bi[jf(0xf5c)][jf(0xdc1)]?this['#login-button'][jf(0x96e)]=!0x0:this[jf(0x83e)][jf(0x96e)]=!0x1,null===Bi[jf(0xf5c)][jf(0xdc1)]?this['#profile-button']['hidden']=!0x0:(this[jf(0xd57)]['hidden']=!0x1,this[jf(0x9ec)]['type']=Bi[jf(0xf5c)][jf(0x1050)]?.['avatar']||jf(0x9ce),this['#profile-avatar'][jf(0xf0a)]=Bi[jf(0xf5c)][jf(0xdc1)]));}}customElements[bY(0x864)](bY(0xc25),Yi);class Xi extends HTMLElement{static [bY(0x1068)]=['collapsed'];static #C=ie` <template> <div id="resize-grippie"></div> <main id="main"> <section id="branding-section"> <a id="logo-anchor" href="/" tabindex="-1"> <img id="logo" src="/images/boxy-svg.svg" alt="Boxy SVG logo" width="50px" height="50px" fetchpriority="high"> </a> <a id="heading-anchor" href="/" tabindex="-1"> <h1 part="heading">Boxy SVG</h1> </a> </section> <hr> <section id="locale-section"> <x-icon href="#locale"></x-icon> <x-select id="locale-select"> <x-menu id="locale-select-menu"></x-menu> </x-select> </section> <hr> <section id="nav-section"> <x-buttons id="nav-buttons" tracking="1"> <a id="home-anchor"> <x-button id="home-button" skin="nav" data-context="home"> <x-icon href="#home"></x-icon> <x-label><x-message href="#home"></x-message></x-label> <x-tooltip><x-label><x-message href="#home"></x-message></x-label></x-tooltip> </x-button> </a> <a id="blog-anchor"> <x-button id="blog-button" skin="nav" data-context="blog"> <x-icon href="#blog"></x-icon> <x-label><x-message href="#blog"></x-message></x-label> <x-tooltip><x-label><x-message href="#blog"></x-message></x-label></x-tooltip> </x-button> </a> <a id="ideas-anchor"> <x-button id="ideas-button" skin="nav" data-context="ideas"> <x-icon href="#ideas"></x-icon> <x-label class="label"><x-message href="#ideas"></x-message></x-label> <x-tooltip><x-label><x-message href="#ideas"></x-message></x-label></x-tooltip> </x-button> </a> <a id="bugs-anchor"> <x-button id="bugs-button" skin="nav" data-context="bugs"> <x-icon href="#bugs"></x-icon> <x-label class="label"><x-message href="#bugs"></x-message></x-label> <x-tooltip><x-label><x-message href="#bugs"></x-message></x-label></x-tooltip> </x-button> </a> <a id="questions-anchor"> <x-button id="questions-button" skin="nav" data-context="questions"> <x-icon href="#questions"></x-icon> <x-label class="label"><x-message href="#questions"></x-message></x-label> <x-tooltip><x-label><x-message href="#questions"></x-message></x-label></x-tooltip> </x-button> </a> <a id="tutorials-anchor"> <x-button id="tutorials-button" skin="nav" data-context="tutorials"> <x-icon href="#tutorials"></x-icon> <x-label class="label"><x-message href="#tutorials"></x-message></x-label> <x-tooltip><x-label><x-message href="#tutorials"></x-message></x-label></x-tooltip> </x-button> </a> <a id="changelog-anchor"> <x-button id="changelog-button" skin="nav" data-context="changelog"> <x-icon href="#document"></x-icon> <x-label class="label"><x-message href="#changelog"></x-message></x-label> <x-tooltip><x-label><x-message href="#changelog"></x-message></x-label></x-tooltip> </x-button> </a> <a id="embed-anchor"> <x-button id="embed-button" skin="nav" data-context="embed"> <x-icon href="#settings-markup"></x-icon> <x-label class="label"><x-message href="#embed"></x-message></x-label> <x-tooltip><x-label><x-message href="#embed"></x-message></x-label></x-tooltip> </x-button> </a> <a id="search-anchor"> <x-button id="search-button" skin="nav" data-context="search"> <x-icon href="#search"></x-icon> <x-label class="label"><x-message href="#search"></x-message></x-label> <x-tooltip><x-label><x-message href="#search"></x-message></x-label></x-tooltip> </x-button> </a> </x-buttons> </section> <section id="launch-section"> <a id="launch-anchor" href="/app" target="_blank"> <x-button id="launch-button" skin="header" size="large" toggled> <x-icon href="#open"></x-icon> <x-label><x-message href="#launch-app"></x-message></x-label> <x-tooltip><x-label><x-message href="#launch-app"></x-message></x-label></x-tooltip> </x-button> </a> </section> <hr> <section id="settings-section"> <bx-metabar id="metabar"></bx-metabar> </section> <hr> <section id="footer-section"> <span><a id="about-anchor" href="?dialog=about"><x-message href="#about"></x-message></a></span> <span><a id="contact-anchor" href="?dialog=contact"><x-message href="#contact"></x-message></a></span> <span><a href="/press"><x-message href="#press"></x-message></a></span> <span><a href="/legal"><x-message href="#legal"></x-message></a></span> </section> </main> </template>
  `;static #S=se`
    :host {
      width: 250px;
      height: 100%;
      position: relative;
      border-right: 1px solid transparent;
    }
    :host([collapsed]) {
      width: 58px !important;
    }

    #main {
      display: flex;
      height: 100%;
      flex-flow: column;
      overflow: auto;
    }

    a {
      font-weight: 400;
    }

    hr {
      margin: 0;
    }

    /**
     * Resize grippie
     */

    #resize-grippie {
      position: absolute;
      width: 8px;
      height: 100%;
      background: transparent;
      top: 0;
      right: -8px;
      cursor: col-resize;
      z-index: 2;
      touch-action: pan-y;
    }

    /**
     * Branding section
     */

    #branding-section {
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      padding: 8px 0px;
      background: var(--background-color);
    }

    /* Logo */

    #branding-section a {
      user-drag: none;
    }

    #branding-section img {
      display: block;
      pointer-events: none;
      user-select: none;
    }
    :host([collapsed]) #branding-section img {
      width: 40px;
      height: 40px;
    }

    /* Heading */

    #branding-section h1 {
      margin: 0px 0px 0px 6px;
      padding: 0px;
      font-size: 17px;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 1;
      user-select: none;
    }

    #heading-anchor {
      color: inherit;
      text-decoration: none;
    }
    :host([collapsed]) #heading-anchor {
      display: none;
    }

    /**
     * Locale section
     */

    #locale-section {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      background: var(--background-color);
    }
    :host([collapsed]) #locale-section {
      display: none;
    }

    #locale-section > x-icon {
      min-width: 20px;
      min-height: 20px;
      margin: 0px 8px 0px 16px;
    }

    #locale-select {
      width: 100%;
      min-width: 0px;
    }

    :host([collapsed]) #locale-section + hr {
      display: none;
    }

    /**
     * Nav section
     */

    #nav-section {
      flex: 1;
    }

    #nav-buttons {
      padding: 5px 10px;
      width: 100%;
      display: flex;
      flex-flow: column;
    }
    :host([collapsed]) #nav-buttons {
      padding: 4px;
    }

    #nav-buttons a {
      width: 100%;
      text-decoration: none;
    }
    #nav-buttons a:hover {
      filter: none;
    }
    #nav-buttons a:not([href]) {
      pointer-events: none;
    }

    #nav-buttons x-button {
      width: 100%;
    }

    #nav-buttons x-button > x-tooltip {
      --align: right;
    }
    :host(:not([collapsed])) #nav-buttons x-button > x-tooltip {
      display: none;
    }

    #nav-buttons x-icon {
    }
    :host([collapsed]) #nav-buttons x-icon {
      margin: 0;
    }

    :host([collapsed]) #nav-buttons x-button > x-label {
      display: none;
    }

    /**
     * Launch section
     */

    #launch-section {
      padding: 0 14px 12px 14px;
    }
    :host([collapsed]) #launch-section {
      padding: 0 4px 4px 4px;
    }

    #launch-button {
      width: 100%;
    }

    #launch-button x-tooltip {
      --align: right;
    }
    :host(:not([collapsed])) #launch-button x-tooltip {
      display: none;
    }

    #launch-anchor {
      text-decoration: none;
    }
    #launch-anchor:hover {
      filter: none;
    }

    :host([collapsed]) #launch-button > x-label {
      display: none;
    }

    /**
     * Settings section
     */

    #settings-section {
      padding: 4px 14px;
      background: var(--background-color);
    }

    /**
     * Footer section
     */

    #footer-section {
      padding: 8px 14px;
      font-size: 10px;
      background: var(--dark-background-color);
    }
    :host([collapsed]) #footer-section {
      display: none;
    }

    #footer-section span::after {
      content: " /";
      letter-spacing: 2px;
    }
    #footer-section span:last-child::after {
      display: none;
    }

    #footer-section a {
      color: inherit;
      text-decoration: none;
      font-weight: 500;
    }
    #footer-section a:hover {
      text-decoration: underline;
    }
  `;get[bY(0x653)](){const jg=bY;return this['hasAttribute'](jg(0x653));}set[bY(0x653)](af){const jh=bY;af?this[jh(0xa0a)](jh(0x653),''):this[jh(0x88e)](jh(0x653));}#P;#T;#Yt;#Gt;#Xt;#Jt=null;#Qt=!0x1;#ei=null;constructor(){const jj=bY;super(),this.#Jt=a2[jj(0x4a6)](jj(0x293),null),this.#Qt=a2[jj(0x4a6)](jj(0xd67),!0x1),this.#P=this[jj(0x1017)]({'mode':jj(0xc5d)}),this.#P[jj(0x48f)]=[a2['themeStyleSheet'],Xi.#S],this.#P[jj(0x775)](document[jj(0xc3b)](Xi.#C[jj(0x223)],!0x0));for(let af of this.#P[jj(0x44e)](jj(0x6e3)))this['#'+af['id']]=af;this.#P[jj(0x1012)](jj(0xff9),ag=>this.#Xe(ag)),this.#P[jj(0x1012)](jj(0x894),ag=>this.#Ye(ag)),this[jj(0x83c)][jj(0x1012)](jj(0x63b),()=>this.#_()),this[jj(0x69e)][jj(0x1012)](jj(0x894),ag=>this.#ti(ag));{let ag='';for(let ah of He)ag+=jj(0x9e9)+ah+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>'+Pe(ah)+jj(0x73e);this[jj(0x1ff)]['innerHTML']=ag,this[jj(0x83c)]['value']='en';}{let aj=window[jj(0xf2d)](jj(0x546));!0x1===this.#Qt&&(this['collapsed']=!aj['matches']),aj[jj(0x1012)](jj(0x63b),ak=>{const jk=jj;!0x1===this.#Qt&&(this[jk(0x653)]=!ak[jk(0xee6)]);});}}[bY(0x854)](){const jl=bY;this.#T=si(this,jl(0xf55)),this.#T[jl(0x1012)](jl(0x828),this.#Yt=af=>{this.#ii(af);}),Bi[jl(0xf5c)]['addEventListener'](jl(0xecc),this.#Gt=()=>{this.#A();}),a2[jl(0x1012)]('localeschange',this.#Xt=()=>{this.#si();}),this.#A();}[bY(0x7db)](){const jm=bY;this.#T[jm(0xee0)]('locationchange',this.#Yt),Bi['auth']['rermoveEventListener']('userprofilechange',this.#Gt),a2[jm(0xee0)](jm(0x60c),this.#Xt);}[bY(0x83b)](af,ag,ah){const jn=bY;ag!==ah&&jn(0x653)===af&&(this[jn(0xa7d)]['collapsed']=this[jn(0x653)]);}#ii(af){const jo=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af['detail'],ak=new URLSearchParams(ag?ag[jo(0xa28)]:''),al=new URLSearchParams(ah[jo(0xa28)]),am=null===ag||ag[jo(0x98c)]!==ah[jo(0x98c)],an=null===ag||ag[jo(0xa28)]!==ah[jo(0xa28)],ap=ak[jo(0x10bd)](jo(0x7c7))!==al['get'](jo(0x7c7)),aq=ak[jo(0x10bd)](jo(0xa36))!==al['get'](jo(0xa36));(am||an||ap||aq)&&this.#A(),jo(0xc68)===aj||'replace'===aj?(this.#ei=af[jo(0xdd7)][jo(0x526)][jo(0xa1a)],(am||ap||aq)&&this.#ai()):jo(0x3ff)===aj&&((am||ap||aq)&&null!==this.#ei&&this.#ai(af[jo(0xdd7)][jo(0x526)]['index']<this.#ei),this.#ei=af[jo(0xdd7)][jo(0x526)][jo(0xa1a)]);}#si(){this.#A();}#Ye(af){const jp=bY;af[jp(0x779)][jp(0xc06)]('a')&&af[jp(0x539)]();}#Xe(af){const jq=bY;let ag=af[jq(0x779)]['closest']('a');if(ag){let {origin:ah,pathname:aj}=ag;ah===location[jq(0x1061)]&&aj[jq(0x9ae)]('/')&&jq(0x239)!==aj&&(af[jq(0x539)](),this.#T[jq(0x908)](ag[jq(0xbd9)]));}}#_(){const jr=bY;let af=this[jr(0x83c)]['value'];a2[jr(0xea6)]('bx-uisettings:locale',af);}#ti(af){const ju=bY;if(af['buttons']>0x1)return;let ag,ah,aj=this['clientWidth'],ak=aj;this[ju(0x69e)][ju(0x36c)](af[ju(0x348)]),af[ju(0x539)](),this[ju(0x69e)][ju(0x1012)](ju(0x985),ag=al=>{const jv=ju;ak=aj-(af[jv(0xcec)]-al[jv(0xcec)]),ak=M(ak,0xaa,Math['min'](0x15e,window['innerWidth']-0xc8)),0xaa===ak?!0x1===this.#Qt&&(this[jv(0x653)]=!0x0):(this[jv(0x653)]=!0x1,this.#Qt=!0x1),this[jv(0xe90)]['width']=ak+'px',this[jv(0x10bf)](new CustomEvent(jv(0x6f9)));}),this[ju(0x69e)][ju(0x1012)](ju(0xae0),ah=()=>{const jw=ju;this[jw(0x69e)]['removeEventListener'](jw(0x985),ag),this[jw(0x69e)][jw(0xee0)](jw(0xae0),ah),this[jw(0x69e)][jw(0xee0)](jw(0x905),ah),this['collapsed']?(this[jw(0xe90)][jw(0xee8)]=null,this.#Jt=null,this.#Qt=!0x0,a2['setConfig'](jw(0x293),null),a2[jw(0xea6)](jw(0xd67),!0x0)):(this.#Jt=ak,this.#Qt=!0x1,a2[jw(0xea6)](jw(0x293),ak),a2['setConfig']('bx-navbar:forceCollapsed',null));}),this[ju(0x69e)][ju(0x1012)](ju(0x905),ah);}#ai(af=!0x1){const jx=bY;let ag;return ag=!0x1===af?this[jx(0x4e8)][jx(0xf63)]({'transform':[jx(0x8aa),jx(0xe65)]},{'duration':0x2bc,'easing':jx(0xe4d)}):this[jx(0x4e8)]['animate']({'transform':['rotate(359deg)',jx(0x8aa)]},{'duration':0x2bc,'easing':jx(0xe4d)}),ag[jx(0xff3)];}#A(){const jy=bY;this.#Qt&&(this[jy(0x653)]=!0x0),null===this.#Jt?this[jy(0xe90)][jy(0xee8)]=null:this['style']['width']=this.#Jt+'px';{let af=a2[jy(0x4a6)](jy(0xbd5),jy(0x307));jy(0x307)===af&&(af=Ze()),!0x1===He[jy(0x1d5)](af)&&(af='en'),this['#locale-select'][jy(0xf0a)]=af;}'/'===location['pathname']?(this[jy(0xe4f)]['setAttribute']('toggled',''),this[jy(0x233)]['removeAttribute'](jy(0xbd9))):(this[jy(0xe4f)][jy(0x88e)](jy(0x42a)),this['#home-anchor'][jy(0xa0a)]('href','/'));for(let ag of[jy(0x3fa),'ideas',jy(0x291),'questions',jy(0x9ab),jy(0x5b0),'embed','search'])location[jy(0x98c)][jy(0x9ae)]('/'+ag)?(this['#'+ag+jy(0xfbd)][jy(0xa0a)](jy(0x42a),''),location[jy(0x98c)]+location[jy(0xa28)]==='/'+ag?this['#'+ag+jy(0xcaf)][jy(0x88e)](jy(0xbd9)):this['#'+ag+jy(0xcaf)][jy(0xa0a)](jy(0xbd9),'/'+ag)):(this['#'+ag+jy(0xfbd)][jy(0x88e)](jy(0x42a)),this['#'+ag+jy(0xcaf)][jy(0xa0a)]('href','/'+ag));this[jy(0xa7d)][jy(0x653)]=this[jy(0x653)],this[jy(0x1002)]['href']=qi(location[jy(0xbd9)],jy(0x741),'contact'),this[jy(0xb13)][jy(0xbd9)]=qi(location['href'],jy(0x741),jy(0xc7c));}}customElements[bY(0x864)]('bx-navbar',Xi);class Ji extends HTMLElement{static #C=ie` <template> <img src="/images/boxy-svg.svg" alt="Boxy SVG logo" width="120px" height="120px" fetchpriority="high"> <h1 part="heading">Boxy SVG</h1> <h2 part="subheading"><x-message href="#scalable-vector-graphics-editor"></x-message></h2> </template>
  `;static #S=se`
    :host {
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      margin: 14px 0px 50px;
    }

    img {
      display: block;
      pointer-events: none;
      user-select: none;
      -webkit-user-select: none;
    }

    h1 {
      margin: 7px 0 0 0;
      font-size: 40px;
      font-weight: 900;
      text-transform: uppercase;
      text-align: center;
      line-height: 1.2;
    }

    h2 {
      margin: 0px;
      padding: 7px 10px;
      font-weight: 700;
      font-size: 14px;
      line-height: 1;
      text-transform: uppercase;
      border-width: 1px;
      border-style: solid;
    }
  `;#P;constructor(){const jz=bY;super(),this.#P=this[jz(0x1017)]({'mode':jz(0xc5d)}),this.#P[jz(0x48f)]=[a2['themeStyleSheet'],Ji.#S],this.#P[jz(0x775)](document[jz(0xc3b)](Ji.#C[jz(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](jz(0x6e3)))this['#'+af['id']]=af;}}customElements['define'](bY(0xecd),Ji);class Qi extends HTMLElement{static #C=ie` <template> <div id="intro-text"> <x-message href="#app-description-short"></x-message> </div> <a href="/app" target="_blank" id="launch-app-anchor"> <x-button id="launch-app-button" skin="header" toggled> <x-icon href="#open"></x-icon> <x-label><x-message href="#launch-app"></x-message></x-label> </x-button> </a> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      padding: 15px 0 40px;
    }

    :host::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 1000%;
      height: 100%;
      transform: translateX(-50%);
      content: " ";
      z-index: -1;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
    }

    /* Intro text */

    #intro-text {
      position: relative;
      padding: 10px 0 23px;
      font-size: 17px;
      text-align: center;
      line-height: 1.25;
    }

    #intro-text p {
      margin: 8px 0 0 0;
    }
    #intro-text p:first-child {
      margin: 0;
    }

    /* "Launch app" button */

    #launch-app-anchor {
      display: block;
      margin-top: 15px;
      width: 100%;
      filter: none;
      text-decoration: none;
    }

    #launch-app-button {
      width: 100%;
      height: 45px;
    }

    #launch-app-button x-icon {
      width: 19px;
      height: 19px;
    }

    #launch-app-button x-label {
      margin-left: 10px;
      font-size: 18px;
    }
  `;#P;constructor(){const jA=bY;super(),this.#P=this[jA(0x1017)]({'mode':jA(0xc5d)}),this.#P['adoptedStyleSheets']=[a2[jA(0x500)],Qi.#S],this.#P[jA(0x775)](document[jA(0xc3b)](Qi.#C['content'],!0x0));for(let af of this.#P['querySelectorAll'](jA(0x6e3)))this['#'+af['id']]=af;}}customElements[bY(0x864)](bY(0xf50),Qi);class es extends HTMLElement{static [bY(0x1068)]=[bY(0xf0a),bY(0xce8),'throbber'];static #C=ie` <template> <main id="main" part="main"> <img id="thumbnail" part="thumbnail" width="120" height="120"> <x-throbber id="throbber" hidden></x-throbber> <x-icon id="library-icon" href="#library-panel"></x-icon> </main> <footer id="footer" part="footer"> <div id="name" part="name"></div> </footer> </template>
  `;static #S=se`
    :host {
      display: flex;
      flex-flow: column;
      user-select: none;
      -webkit-user-select: none;
      pointer-events: none;
    }
    :host([hidden]) {
      display: none;
    }
    :host([highlighted]) {
      filter: brightness(1.3);
    }

    /**
     * Main
     */

    #main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 12px;
      position: relative;
      box-sizing: border-box;
      pointer-events: all;
      border-width: 1px;
      border-style: solid;
    }

    /* Thubmnail */

    #thumbnail {
      width: 100%;
      height: auto;
      display: block;
      background: var(--checkboard-background);
      border-width: 1px;
      border-style: solid;
      box-sizing: border-box;
      -webkit-user-drag: none;
    }
    #thumbnail[hidden] {
      display: none;
    }
    :host([disabled]) #thumbnail {
      opacity: 0.5;
    }

    /* Library icon */

    #library-icon {
      display: none;
      position: absolute;
      width: 14px;
      height: 14px;
      padding: 5px;
      bottom: 17px;
      right: 17px;
      background: var(--background-color);
      border: 1px solid currentColor;
    }
    :host([library]) #library-icon {
      display: flex;
    }

    /**
     * Footer
     */

    #footer {
      height: 35px;
      font-size: 14.5px;
    }
    :host([disabled]) #footer > *  {
      opacity: 0.5;
    }

    /* Name */

    #name {
      overflow: hidden;
      display: -webkit-box;
      width: fit-content;
      padding: 3px 9px;
      margin: 7px auto 0 auto;
      line-height: 1.25;
      font-weight: 500;
      font-size: 13px;
      text-align: center;
      pointer-events: all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    #name[hidden] {
      display: none;
    }

    #name-input {
      width: 100%;
      height: 23px;
      max-width: none;
      margin-top: 6px;
      font-weight: 500;
      text-align: center;
      pointer-events: all;
    }
  `;get[bY(0xf0a)](){const jB=bY;return this['hasAttribute'](jB(0xf0a))?this[jB(0xc51)]('value'):null;}set['value'](af){const jC=bY;null===af?this['removeAttribute'](jC(0xf0a)):this[jC(0xa0a)]('value',af);}get[bY(0xce8)](){const jD=bY;return this[jD(0xfd9)](jD(0xce8))?this[jD(0xc51)](jD(0xce8)):'';}set[bY(0xce8)](af){const jE=bY;this[jE(0xa0a)](jE(0xce8),af);}get[bY(0x958)](){const jF=bY;return this[jF(0xfd9)](jF(0x958));}set[bY(0x958)](af){const jG=bY;af?this[jG(0xa0a)](jG(0x958),''):this[jG(0x88e)]('selected');}get['highlighted'](){const jH=bY;return this[jH(0xfd9)]('highlighted');}set['highlighted'](af){const jI=bY;af?this['setAttribute']('highlighted',''):this[jI(0x88e)](jI(0xc47));}get[bY(0xa1e)](){const jJ=bY;return this[jJ(0xfd9)](jJ(0xa1e));}set[bY(0xa1e)](af){const jK=bY;af?this[jK(0xa0a)](jK(0xa1e),''):this[jK(0x88e)](jK(0xa1e));}get[bY(0x6a2)](){const jL=bY;return this[jL(0xfd9)](jL(0x6a2));}set[bY(0x6a2)](af){const jM=bY;af?this[jM(0xa0a)](jM(0x6a2),''):this[jM(0x88e)](jM(0x6a2));}get[bY(0x387)](){const jN=bY;return this[jN(0xfd9)](jN(0x387));}set[bY(0x387)](af){const jO=bY;af?this['setAttribute'](jO(0x387),''):this['removeAttribute'](jO(0x387));}get[bY(0x92d)](){const jP=bY;return this[jP(0xfd9)](jP(0x92d));}set[bY(0x92d)](af){const jQ=bY;af?this[jQ(0xa0a)](jQ(0x92d),''):this[jQ(0x88e)](jQ(0x92d));}#P;#oi;constructor(){const jR=bY;super(),this['setAttribute'](jR(0xb11),jR(0x4c3)),this.#P=this['attachShadow']({'mode':jR(0xc5d)}),this.#P[jR(0x48f)]=[a2[jR(0x500)],es.#S],this.#P[jR(0x775)](document['importNode'](es.#C[jR(0x223)],!0x0));for(let af of this.#P[jR(0x44e)](jR(0x6e3)))this['#'+af['id']]=af;this[jR(0x8e7)][jR(0x1012)](jR(0x8a6),()=>this.#ni()),this[jR(0x1053)][jR(0x1012)](jR(0x8a6),()=>this.#li());}['connectedCallback'](){const jS=bY;this.#oi=new ResizeObserver(et(this.#ri,0x190,this)),this.#oi[jS(0x733)](this,{'box':jS(0x9c6)}),this.#A();}[bY(0x7db)](){const jT=bY;this.#oi[jT(0xc27)](this);}[bY(0x83b)](af,ag,ah){const jU=bY;ag!==ah&&('value'===af?this.#hi():jU(0xce8)===af?this.#ci():'throbber'===af&&this.#hi());}#ni(){const jV=bY;this[jV(0x832)]();}#li(){const jW=bY;this['dispatchEvent'](new CustomEvent(jW(0x990),{'bubbles':!0x0}));}[bY(0x832)](){const jX=bY;if(this[jX(0xfd9)](jX(0x10d1)))return;this['setAttribute'](jX(0x10d1),'');let af,ag,ah=this[jX(0x8e7)]['textContent'],aj=ie`<x-input id="name-input" value="${ah}" validation="instant"></x-input>`;this[jX(0x8e7)][jX(0x844)](aj),aj[jX(0xa16)](),this[jX(0x8e7)][jX(0x96e)]=!0x0;let ak=(al=!0x1)=>{const jY=jX;this['removeAttribute'](jY(0x10d1),''),aj[jY(0xee0)](jY(0x57f),af),aj[jY(0xee0)](jY(0x1072),ag),aj[jY(0x102a)](),this[jY(0x8e7)][jY(0x96e)]=!0x1;let am=!0x0===al?ah:aj[jY(0xf0a)];ah===am?this[jY(0x8e7)]['textContent']=ah:(''===am?(this['#name'][jY(0xad6)]=jY(0x1c5),this[jY(0x8e7)][jY(0xa0a)](jY(0x409),'')):(this[jY(0x8e7)][jY(0xad6)]=Te(am),this[jY(0x8e7)][jY(0x88e)](jY(0x409))),this['dispatchEvent'](new CustomEvent(jY(0xc98),{'bubbles':!0x0,'detail':{'oldName':ah,'newName':am}}))),si(this,jY(0x108d))[jY(0x72c)]();};aj['addEventListener'](jX(0x57f),af=al=>{const jZ=jX;jZ(0xab8)===al[jZ(0xe52)]?(al[jZ(0xc67)](),ak()):jZ(0xe73)===al[jZ(0xe52)]&&(al['preventDefault'](),al[jZ(0xc67)](),ak(!0x0));}),aj[jX(0x1012)]('focusout',ag=()=>{ak();});}[bY(0x8e5)](af){const k0=bY;let ag=this[k0(0x21d)][k0(0xf93)](),ah=this[k0(0x8e7)]['getBoundingClientRect']();return af instanceof DOMRect?Ot(ag,af)||Ot(ah,af):af instanceof DOMPoint?Nt(ag,af)||Nt(ah,af):void 0x0;}#A(){this.#hi(),this.#ci();}#hi(){const k1=bY;!0x1===this[k1(0x92d)]?(this[k1(0x1053)][k1(0x96e)]=!0x1,this[k1(0x1053)][k1(0xe44)]=k1(0x5ee)+this[k1(0xf0a)]+'.png',this['#throbber'][k1(0x96e)]=!0x0):(this[k1(0x1053)][k1(0x96e)]=!0x0,this[k1(0x264)]['hidden']=!0x1),this.#ri();}#ri(){const k2=bY;this[k2(0x21d)][k2(0xe90)][k2(0x305)]=this[k2(0x21d)]['clientWidth']+0x2+'px';}#ci(){const k3=bY;''===this[k3(0xce8)]?(this[k3(0x8e7)]['textContent']='Untitled',this[k3(0x8e7)][k3(0xa0a)](k3(0x409),'')):(this[k3(0x8e7)][k3(0xad6)]=Te(this[k3(0xce8)]),this[k3(0x8e7)][k3(0x88e)](k3(0x409)));}}void 0x0===customElements['get'](bY(0xdff))&&customElements[bY(0x864)](bY(0xdff),es);class ts extends HTMLElement{static #C=ie` <template> <main id="main"> <h3><x-message href="#live-demo"></x-message></h3> <p><x-message href="#live-demo-hint"></x-message></p> <div id="items"> <a href="/app/-LYzdDlq8VjMN2Bl9HUD" target="_blank"> <bx-cloudfilepreview value="-LYzdDlq8VjMN2Bl9HUD" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LYgyzb88SCpJUl7gX90" target="_blank"> <bx-cloudfilepreview value="-LYgyzb88SCpJUl7gX90" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTc2une_8JtTkYo-5f" target="_blank"> <bx-cloudfilepreview value="-LZTc2une_8JtTkYo-5f" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LYgzGKeBXA-G2mfb7WG" target="_blank"> <bx-cloudfilepreview value="-LYgzGKeBXA-G2mfb7WG" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LYgz5nLXlz4Ao0RgrPq" target="_blank"> <bx-cloudfilepreview value="-LYgz5nLXlz4Ao0RgrPq" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTa9ZcpvUBMChd1-jc" target="_blank"> <bx-cloudfilepreview value="-LZTa9ZcpvUBMChd1-jc" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTcQ2XxWmLFiMHIif_" target="_blank"> <bx-cloudfilepreview value="-LZTcQ2XxWmLFiMHIif_" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTce0ULMNZW_iGGi0_" target="_blank"> <bx-cloudfilepreview value="-LZTce0ULMNZW_iGGi0_" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZT_kgM3DaZxqKRPPwy" target="_blank"> <bx-cloudfilepreview value="-LZT_kgM3DaZxqKRPPwy" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTaT_p33ZVSikjDgrn" target="_blank"> <bx-cloudfilepreview value="-LZTaT_p33ZVSikjDgrn" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTbRDkQe2L2kWYhety" target="_blank"> <bx-cloudfilepreview value="-LZTbRDkQe2L2kWYhety" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTd3leeSFbl_73Unfv" target="_blank"> <bx-cloudfilepreview value="-LZTd3leeSFbl_73Unfv" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZT_IJcQVKTJ6OK_ar8" target="_blank"> <bx-cloudfilepreview value="-LZT_IJcQVKTJ6OK_ar8" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTahHRSRXnFr1RaHZC" target="_blank"> <bx-cloudfilepreview value="-LZTahHRSRXnFr1RaHZC" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTb4z9OwCTNhQaxnEx" target="_blank"> <bx-cloudfilepreview value="-LZTb4z9OwCTNhQaxnEx" part="preview"></bx-cloudfilepreview> </a> <a href="/app/-LZTfGP2359sW4GS4dxb" target="_blank"> <bx-cloudfilepreview value="-LZTfGP2359sW4GS4dxb" part="preview"></bx-cloudfilepreview> </a> </div> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      padding: 40px 0;
    }

    :host::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 1000%;
      height: 100%;
      box-sizing: border-box;
      transform: translateX(-50%);
      content: " ";
      z-index: -1;
      border-top-width: 1px;
      border-top-style: solid;
    }

    h3 {
      margin: 0 0 16px 0;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
    }

    p {
      margin: 0 0 24px 0;
    }

    #items {
      display: flex;
      flex-wrap: wrap;
    }

    #items a {
      display: block;
      width: calc(25% - 14px * (3/4));
      margin: 0 14px 14px 0;
      user-select: none;
      -webkit-user-select: none;
      filter: none;
    }
    #items a:nth-child(4n) {
      margin: 0 0 14px 0;
    }

    #items bx-cloudfilepreview::part(footer) {
      display: none;
    }
  `;#P;constructor(){const k4=bY;super(),this.#P=this['attachShadow']({'mode':k4(0xc5d)}),this.#P[k4(0x48f)]=[a2['themeStyleSheet'],ts.#S],this.#P['append'](document[k4(0xc3b)](ts.#C[k4(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](k4(0x6e3)))this['#'+af['id']]=af;this.#P[k4(0x1012)](k4(0x894),ag=>this.#Ye(ag));}#Ye(af){const k5=bY;af[k5(0x779)]['closest']('a')&&af['preventDefault']();}}customElements[bY(0x864)]('bx-demoblock',ts);let is={'ui':bY(0x9b0),'svg':bY(0x63e),'filters':bY(0x60e),'typography':bY(0x41a),'developer':'https://storage.boxy-svg.com/artworks/-M539HDvYB3OU3xq88gc.svg','export':'https://storage.boxy-svg.com/artworks/-M53A7hg2lfqGOxkFpyD.svg','library':bY(0x31f),'tracing':bY(0x8cf),'symbols':bY(0x1041),'thumbnails':bY(0xc9e)};class ss extends HTMLElement{static ['observedAttributes']=[bY(0xf0a)];static #C=ie` <template> <main> <nav id="thumbs"> <a class="thumb" part="thumb" href="/" data-value="ui"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-ui.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-svg" data-value="svg"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-svg.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-filters" data-value="filters"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-filters.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-typography" data-value="typography"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-typography.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-developer" data-value="developer"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-developer.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-export" data-value="export"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-export.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-library" data-value="library"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-library.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-tracing" data-value="tracing"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-tracing.title"></x-message></x-tooltip> </x-button> </a> <a class="thumb" part="thumb" href="#tour-symbols" data-value="symbols"> <x-button class="thumb-button"> <x-tooltip><x-message href="#tour-symbols.title"></x-message></x-tooltip> </x-button> </a> </nav> <h4 id="title"></h4> <div id="image-wrapper"> <img id="image" part="image" loading="lazy" width="1818" height="1200" src="${is['ui']}" alt="Boxy SVG screenshot"> <div id="buttons"> <x-button id="prev-button" part="button" value="prev" skin="circular" size="large"> <x-icon href="#chevron-left"></x-icon> </x-button> <x-button id="next-button" part="button" value="next" skin="circular" size="large"> <x-icon href="#chevron-right"></x-icon> </x-button> </div> </div> <div id="text"> <section id="tour-ui"> <h4><x-message href="#tour-ui.title"></x-message></h4> <x-message href="#tour-ui.description"></x-message> </section> <section id="tour-svg" hidden> <h4><x-message href="#tour-svg.title"></x-message></h4> <x-message href="#tour-svg.description"></x-message> </section> <section id="tour-filters" hidden> <h4><x-message href="#tour-filters.title"></x-message></h4> <x-message href="#tour-filters.description"></x-message> </section> <section id="tour-typography" hidden> <h4><x-message href="#tour-typography.title"></x-message></h4> <x-message href="#tour-typography.description"></x-message> </section> <section id="tour-developer" hidden> <h4><x-message href="#tour-developer.title"></x-message></h4> <x-message href="#tour-developer.description"></x-message> </section> <section id="tour-export" hidden> <h4><x-message href="#tour-export.title"></x-message></h4> <x-message href="#tour-export.description"></x-message> </section> <section id="tour-library" hidden> <h4><x-message href="#tour-library.title"></x-message></h4> <x-message href="#tour-library.description"></x-message> </section> <section id="tour-tracing" hidden> <h4><x-message href="#tour-tracing.title"></x-message></h4> <x-message href="#tour-tracing.description"></x-message> </section> <section id="tour-symbols" hidden> <h4><x-message href="#tour-symbols.title"></x-message></h4> <x-message href="#tour-symbols.description"></x-message> </section> </div> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      padding: 20px 0 50px 0;
    }

    :host::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 1000%;
      height: 100%;
      transform: translateX(-50%);
      content: " ";
      z-index: -1;
    }

    /* Thumbs */

    #thumbs {
      margin: 20px 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #thumbs .thumb {
      width: 52px;
      height: 52px;
      margin-left: 12px;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      background: url("${is[bY(0x356)]}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0px 0px;
    }
    #thumbs .thumb:nth-child(1) {
      margin-left: 0;
    }
    #thumbs .thumb:nth-child(2) {
      background-position-x: -50px;
    }
    #thumbs .thumb:nth-child(3) {
      background-position-x: -100px;
    }
    #thumbs .thumb:nth-child(4) {
      background-position-x: -150px;
    }
    #thumbs .thumb:nth-child(5) {
      background-position-x: -200px;
    }
    #thumbs .thumb:nth-child(6) {
      background-position-x: -250px;
    }
    #thumbs .thumb:nth-child(7) {
      background-position-x: -300px;
    }
    #thumbs .thumb:nth-child(8) {
      background-position-x: -350px;
    }
    #thumbs .thumb:nth-child(9) {
      background-position-x: -400px;
    }
    #thumbs .thumb[data-toggled] {
      pointer-events: none;
    }
    #thumbs .thumb:focus {
      outline-color: var(--accent-color);
    }
    #thumbs .thumb:hover {
      filter: none;
    }

    #thumbs .thumb x-button {
      background: none;
      border: none;
      width: 100%;
      height: 100%;
    }

    /* Buttons */

    @media all and (max-width: 830px) {
      #buttons {
        display: none;
      }
    }

    #buttons x-button {
      cursor: pointer;
      margin-top: -16px;
    }

    #prev-button {
      position: absolute;
      left: -50px;
      top: 50%;
    }
    #prev-button x-icon {
      margin-right: 3px;
    }

    #next-button {
      position: absolute;
      right: -50px;
      top: 50%;
    }
    #next-button x-icon {
      margin-left: 3px;
    }

    /* Image */

    #image-wrapper {
      position: relative;
    }

    #image {
      min-height: 100px;
      width: 100%;
      height: auto;
      border-width: 1px;
      border-style: solid;
      box-sizing: border-box;
      cursor: zoom-in;
      user-select: none;
      -webkit-user-select: none;
      user-drag: none;
      -webkit-user-drag: none;
    }
    #image[src="https://storage.boxy-svg.com/artworks/-M539obL12yiuWowe01C.svg"] {
      background: none;
      border: none;
    }

    /* Texts */

    #text {
      margin-top: 10px;
    }

    #text section h4 {
      margin: 30px 0 0 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.2;
      padding: 0;
      opacity: 1;
      color: inherit;
    }
  `;get[bY(0xf0a)](){const k6=bY;return this[k6(0xfd9)](k6(0xf0a))?this[k6(0xc51)]('value'):'ui';}set['value'](af){const k7=bY;this['setAttribute'](k7(0xf0a),af);}#P;#T;constructor(){const k8=bY;super(),this.#P=this[k8(0x1017)]({'mode':k8(0xc5d)}),this.#P[k8(0x48f)]=[a2[k8(0x500)],ss.#S],this.#P[k8(0x775)](document[k8(0xc3b)](ss.#C[k8(0x223)],!0x0));for(let af of this.#P['querySelectorAll']('[id]'))this['#'+af['id']]=af;this.#P['addEventListener'](k8(0x894),ag=>this.#Ye(ag)),this[k8(0xd0e)]['addEventListener'](k8(0xff9),ag=>this.#di(ag)),this[k8(0x4cd)][k8(0x1012)](k8(0xff9),ag=>this.#ui(ag)),this[k8(0xaf8)]['addEventListener']('click',ag=>this.#pi());}[bY(0x854)](){const k9=bY;this.#T=si(this,k9(0xf55)),this.#A();}[bY(0x83b)](af,ag,ah){const kb=bY;ag!==ah&&kb(0xf0a)===af&&this.#A();}#Ye(af){const kc=bY;af[kc(0x779)][kc(0xc06)]('a')&&af[kc(0x539)]();}#di(af){const kd=bY;let ag=af[kd(0x779)][kd(0xc06)]('a');ag&&ag[kd(0x22c)][kd(0xf0a)]!==this[kd(0xf0a)]&&(af[kd(0x539)](),this[kd(0xf0a)]=ag[kd(0x22c)][kd(0xf0a)],this[kd(0x10bf)](new CustomEvent(kd(0x63b))));}#ui(af){const kf=bY;let ag=af[kf(0x779)][kf(0xc06)]('x-button'),ah=this[kf(0xd0e)][kf(0x344)](kf(0x7ed));if(af['preventDefault'](),kf(0xe51)===ag['value']){let aj=ah?ah[kf(0xbd8)]:null;aj&&(this['value']=aj['dataset'][kf(0xf0a)],this[kf(0x10bf)](new CustomEvent(kf(0x63b))));}else{if(kf(0x10a1)===ag[kf(0xf0a)]){let ak=ah?ah['previousElementSibling']:null;ak&&(this[kf(0xf0a)]=ak['dataset'][kf(0xf0a)],this[kf(0x10bf)](new CustomEvent('change')));}}}#pi(){const kg=bY;this.#T[kg(0x242)]['showModal'](this[kg(0xaf8)]);}#A(){const kh=bY;for(let af of this['#thumbs'][kh(0x573)])af[kh(0x22c)][kh(0xf0a)]===this[kh(0xf0a)]?(af['setAttribute'](kh(0x107c),''),af['setAttribute']('tabindex','-1'),af['part']['add'](kh(0x2f2))):(af[kh(0x88e)]('data-toggled'),af[kh(0x88e)](kh(0x366)),af['part'][kh(0x102a)](kh(0x2f2)));this['#prev-button'][kh(0x6a2)]='ui'===this[kh(0xf0a)],this[kh(0xd3f)][kh(0x6a2)]=kh(0x7ea)===this['value'],this[kh(0xaf8)][kh(0xe90)][kh(0x83a)]=0.5,this[kh(0xaf8)][kh(0xe44)]=is[this[kh(0xf0a)]],this[kh(0xaf8)][kh(0x1012)](kh(0x75c),()=>this[kh(0xaf8)]['style'][kh(0x83a)]=null,{'once':!0x0});for(let ag of this[kh(0x10cf)][kh(0x573)])ag[kh(0x96e)]=ag['id']!==kh(0xbfc)+this[kh(0xf0a)];}}customElements[bY(0x864)]('bx-tourblock',ss);class as extends HTMLElement{static ['observedAttributes']=[bY(0x1ce),bY(0xf0a)];static #C=ie` <template> <a id="anchor" rel="noopener"> <x-icon id="icon"></x-icon> <x-message id="message"></x-message> </a> </template>
  `;static #S=se`
    :host {
      display: block;
      width: 100%;
      height: 138px;
      background: red;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Anchor
     */

    #anchor {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-decoration: none;
      color: inherit;
      -webkit-user-drag: none;
    }
    #anchor:hover {
      filter: none;
    }

    /**
     * Icon
     */

    #icon {
      width: 85px;
      height: 85px;
      margin-right: 18px;
      color: white;
    }
    #icon[href="#macos"] {
      width: 75px;
      height: 75px;
      margin-right: 18px;
    }
    #icon[href="#flathub"] {
      width: 95px;
      height: 95px;
      margin-right: 28px;
    }

    /**
     * Message
     */

    #message {
      font-size: 26px;
      line-height: 1;
    }
    #message strong {
      display: block;
      color: white;
      font-size: 45px;
      font-weight: 500;
    }
  `;get['value'](){const kj=bY;return this[kj(0xc51)]('value')||kj(0x56b);}set[bY(0xf0a)](af){const kk=bY;null===af?this['removeAttribute'](kk(0xf0a)):this[kk(0xa0a)](kk(0xf0a),af);}#P;#T;#at;constructor(){const kl=bY;super(),this.#P=this[kl(0x1017)]({'mode':kl(0xc5d)}),this.#P[kl(0x48f)]=[as.#S],this.#P[kl(0x775)](document[kl(0xc3b)](as.#C[kl(0x223)],!0x0));for(let af of this.#P[kl(0x44e)](kl(0x6e3)))this['#'+af['id']]=af;this.#P[kl(0x1012)](kl(0x894),ag=>this.#Ye(ag)),this.#P[kl(0x1012)]('click',ag=>this.#Xe(ag));}[bY(0x854)](){const km=bY;this.#T=si(this,km(0xf55)),Bi['auth'][km(0x1012)](km(0x284),this.#at=()=>{this.#A();}),this.#A();}[bY(0x7db)](){const kn=bY;Bi[kn(0xf5c)][kn(0xee0)](kn(0x284),this.#at);}['attributeChangedCallback'](af,ag,ah){const kp=bY;ag!==ah&&this.#P&&kp(0xf0a)===af&&this.#A();}#Ye(af){const kq=bY;af[kq(0x779)]['closest']('a')&&af[kq(0x539)]();}#Xe(af){const kr=bY;let ag=af[kr(0x779)][kr(0xc06)]('a');ag&&ag[kr(0x1061)]===location[kr(0x1061)]&&ag[kr(0x98c)][kr(0x9ae)]('/')&&(af[kr(0x539)](),this.#T['navigate'](ag['href']));}async #A(){const ku=bY;if(ku(0x56b)===this[ku(0xf0a)])this[ku(0x9cd)][ku(0xbd9)]='#boxy-svg-medium',this[ku(0x4df)]['target']='',null===Bi[ku(0xf5c)][ku(0xdc1)]?(this['#anchor'][ku(0xbd9)]='/?dialog=register',this['#message']['href']=ku(0x1099)):(this[ku(0x4df)]['href']=ku(0x364),this[ku(0xb48)][ku(0xbd9)]=ku(0xd78));else{if(ku(0x1f5)===this['value']){let af=Bi[ku(0xf5c)][ku(0x354)]?.[ku(0xfa0)]||await Bi['checkout'][ku(0xc7b)]();this['#anchor'][ku(0x779)]=ku(0xef7),this[ku(0x4df)]['href']=ku(0xcf3)[ku(0xf0c)](ku(0xfac),'/'+af[ku(0x10b1)]()+'/'),this['#icon'][ku(0xbd9)]=ku(0x425),this[ku(0xb48)][ku(0xbd9)]='#download-on-mac-app-store';}else ku(0xc09)===this[ku(0xf0a)]&&(this[ku(0x4df)]['target']=ku(0xef7),this[ku(0x4df)]['href']=ku(0xd32),this[ku(0x9cd)]['href']=ku(0xdf6),this[ku(0xb48)][ku(0xbd9)]=ku(0xe0f));}}}customElements[bY(0x864)](bY(0xbf5),as);class os extends HTMLElement{static #C=ie` <template> <h3 part="heading"><x-message href="#get-boxy-svg"></x-message></h3> <div id="nav-buttons"> <x-button skin="footer" value="pwa" size="large" condensed toggled> <x-icon href="#windows"></x-icon> <x-icon href="#macos"></x-icon> <x-icon href="#linux"></x-icon> <x-label>PWA</x-label> </x-button> <x-button skin="footer" value="mas" size="large" part="nav-button" condensed> <x-icon href="#macos"></x-icon> <x-label>Mac App Store</x-label> </x-button> <x-button skin="footer" value="flathub" size="large" part="nav-button" condensed> <x-icon href="#linux"></x-icon> <x-label>Flathub</x-label> </x-button> </div> <div id="views"> <div class="view" data-value="pwa"> <table part="table"> <thead> <tr> <th part="cell header-cell"></th> <th part="cell header-cell"><x-message href="subscription-plan.premium"></x-message></th> <th part="cell header-cell"><x-message href="subscription-plan.standard"></x-message></th> </tr> </thead> <tbody> <tr> <td part="cell"><x-message href="desktop-app"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="web-app"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="save-svg-files-to-disk"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="save-and-host-svg-files-in-cloud"></x-message></td> <td part="cell" data-value="true"> <x-button skin="flat" id="cloud-button"> <x-icon part="true-icon" href="#feature-supported-asterisk"></x-icon> <x-popover modal> <main> <p><x-message href="#cloud-storage-hint" args="email:${Vi}"></x-message></p> </main> </x-popover> </x-button> </td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="sync-settings-between-devices"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> </tbody> <tfoot> <tr> <td part="cell footer-cell"> <x-box> <span> <x-message href="price"></x-message> (<x-message href="price.yearly-subscription"></x-message>) </span> <x-button class="price-help-button" skin="circular" size="small" part="help-button"> <x-icon href="#help"></x-icon> <x-popover modal> <main> <p><x-message href="price-tax-hint"></x-message></p> <p><x-message href="volume-discount-hint"></x-message></p> </main> </x-popover> </x-button> </x-box> </td> <td part="cell footer-cell"> <span id="pwa-premium-price-span"></span> </td> <td part="cell footer-cell"> <span id="pwa-standard-price-span"></span> </td> </tr> </tfoot> </table> </div> <div class="view" data-value="mas" hidden> <table part="table"> <thead> <tr> <th part="cell header-cell"></th> <th part="cell header-cell"><x-message href="subscription-plan.standard"></x-message></th> </tr> </thead> <tbody> <tr> <td part="cell"><x-message href="desktop-app"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="web-app"></x-message></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="save-svg-files-to-disk"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="save-and-host-svg-files-in-cloud"></x-message></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="sync-settings-between-devices"></x-message></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> </tbody> <tfoot> <tr> <td part="cell footer-cell"> <x-box> <span> <x-message href="price"></x-message> (<x-message href="price.one-time-payment"></x-message>) </span> </x-box> </td> <td part="cell footer-cell"> <span id="mas-price-span"></span> </td> </tr> </tfoot> </table> </div> <div class="view" data-value="flathub" hidden> <table part="table"> <thead> <tr> <th part="cell header-cell"></th> <th part="cell header-cell"><x-message href="subscription-plan.standard"></x-message></th> </tr> </thead> <tbody> <tr> <td part="cell"><x-message href="desktop-app"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="web-app"></x-message></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="save-svg-files-to-disk"></x-message></td> <td part="cell" data-value="true"><x-icon part="true-icon" href="#feature-supported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="save-and-host-svg-files-in-cloud"></x-message></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> <tr> <td part="cell"><x-message href="sync-settings-between-devices"></x-message></td> <td part="cell" data-value="false"><x-icon part="false-icon" href="#feature-unsupported"></x-icon></td> </tr> </tbody> <tfoot> <tr> <td part="cell footer-cell"><x-message href="price"></x-message></td> <td part="cell footer-cell"><x-message href="price.free"></x-message></td> </tr> </tfoot> </table> </div> </div> <bx-downloadbutton id="download-button"></bx-downloadbutton> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      padding: 20px  0;
    }

    :host::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 1000%;
      height: 100%;
      transform: translateX(-50%);
      content: " ";
      z-index: -1;
      border-top-width: 1px;
      border-top-style: solid;
    }

    ::selection {
      color: var(--selection-color);
      background: var(--selection-background-color);
    }

    h3 {
      margin: 0 0 26px 0;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;
    }

    /**
     * Nav buttons
     */

    #nav-buttons {
      display: flex;
      flex-wrap: wrap;
      width: calc(100% + 8px);
      margin: 14px 0 0 -4px;
      z-index: 0;
      font-size: 14px;
    }

    #nav-buttons x-button {
      flex: 1;
      margin: 4px;
    }
    #nav-buttons x-button:hover {
      cursor: pointer;
    }
    #nav-buttons x-button[toggled]:hover {
      cursor: default;
    }

    #nav-buttons x-icon {
      width: 19px;
      height: 19px;
      min-width: 19px;
    }
    #nav-buttons x-button[value="pwa"] x-icon[href="#macos"] {
      margin: 0px 2px 3px 4px;
    }

    #nav-buttons x-label {
      margin-left: 8px;
    }

    /**
     * Views
     */

    /* Tables */

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 24px;
    }

    table thead {
      background: none;
    }

    table thead th {
      padding: 10px 10px;
      border-width: 1px;
      border-style: solid;
      text-align: center;
      text-transform: uppercase;
    }
    table thead th:not(:first-child) {
      width: 110px;
    }
    @media all and (max-width: 600px) {
      table thead th:not(:first-child) {
        width: 70px;
      }
    }

    table tbody td {
      padding: 8px 20px;
      border-width: 1px;
      border-style: solid;
      text-align: center;
    }
    table tbody td:first-child {
      text-align: start;
    }
    table tbody td[data-value] {
      padding-top: 0;
      padding-bottom: 0;
    }
    table tbody td[data-value] x-icon {
      width: 15px;
      height: 15px;
    }
    table tbody td[data-value] > * {
      margin: 0 auto;
    }

    table tbody #cloud-button {
      width: 100%;
      height: 100%;
    }
    table tbody #cloud-button::part(arrow) {
      display: none;
    }
    table tbody #cloud-button[size="large"] x-icon {
      width: 15px;
      height: 15px;
    }
    table tbody #cloud-button x-popover {
      width: 300px;
      font-weight: 400;
      font-size: 14px;
      text-align: left;
      user-select: none;
      -webkit-user-select: none;
    }
    table tbody #cloud-button x-popover p {
      margin: 0;
    }

    table tfoot td {
      padding: 8px 10px;
      border-width: 1px;
      border-style: solid;
      text-align: center;
      font-weight: 700;
    }
    table tfoot td:first-child {
      padding: 8px 20px;
      text-align: start;
    }

    table .price-help-button {
      margin-left: auto;
    }
    table .price-help-button::part(arrow) {
      display: none;
    }
    table .price-help-button x-popover {
      width: 390px;
      font-weight: 400;
      font-size: 14px;
      user-select: none;
      -webkit-user-select: none;
    }
    table .price-help-button x-popover p {
      margin: 8px 0 0 0;
    }
    table .price-help-button x-popover p:first-child {
      margin: 0;
    }
    table .price-help-button x-popover ul {
      margin: 8px 0 0 8px;
      list-style: none;
      padding: 0;
    }
    table .price-help-button x-popover li {
      position: relative;
      padding-left: 13px;
      margin: 0;
    }
    table .price-help-button x-popover li:before {
      content: "•";
      font-weight: 700;
      position: absolute;
      left: 0;
    }

    /**
     * Download button
     */

    #download-button {
      margin-top: 28px;
    }
  `;#T;#P;#F;#at;#mi=null;constructor(){const kv=bY;super(),this.#P=this[kv(0x1017)]({'mode':kv(0xc5d)}),this.#P[kv(0x48f)]=[a2[kv(0x500)],os.#S],this.#P[kv(0x775)](document[kv(0xc3b)](os.#C['content'],!0x0));for(let af of this.#P[kv(0x44e)](kv(0x6e3)))this['#'+af['id']]=af;this.#P[kv(0x1012)](kv(0x894),ag=>this.#Ye(ag)),this.#P[kv(0x1012)]('click',ag=>this.#Xe(ag));}['connectedCallback'](){const kw=bY;this.#T=si(this,kw(0xf55)),this.#xi(kw(0x56b)),a2[kw(0x1012)]('localeschange',this.#F=()=>{this.#gi();}),Bi[kw(0xf5c)]['addEventListener'](kw(0x284),this.#at=()=>{this.#gi();}),this.#gi();}[bY(0x7db)](){const kx=bY;a2['removeEventListener'](kx(0x60c),this.#F),Bi['auth'][kx(0xee0)](kx(0x284),this.#at);}#Ye(af){const ky=bY;af[ky(0x779)]['closest']('a')&&af[ky(0x539)]();}#Xe(af){const kz=bY;let ag=af[kz(0x779)][kz(0xc06)]('a'),ah=af[kz(0x779)][kz(0xc06)](kz(0xa88));ag?ag[kz(0x1061)]===location[kz(0x1061)]&&ag['pathname'][kz(0x9ae)]('/')&&(af['preventDefault'](),this.#T[kz(0x908)](ag[kz(0xbd9)])):ah&&this['#nav-buttons'][kz(0xff8)](ah)&&this.#bi(ah);}#bi(af){const kA=bY;!0x1===af[kA(0x42a)]&&this.#xi(af['value']);}#fi(af,ag,ah){return new Promise(async aj=>{const kB=a1;let ak=await Bi[kB(0x8d9)][kB(0xe25)](af,0x1,ag),al={'style':kB(0x9a1),'currency':ak[kB(0x9a1)],'currencyDisplay':'symbol'};aj(new Intl[(kB(0x884))](ah,al)[kB(0xca0)](ak[kB(0x7d7)]));});}#wi(af,ag){return new Promise(async ah=>{const kC=a1;null===this.#mi?(this.#mi=Bi[kC(0xa1a)][kC(0xbc3)](0x14),this.#mi=await this.#mi):this.#mi instanceof Promise&&await this.#mi;let aj=this.#mi[af]||this.#mi['US'],[ak,al]=aj,am={'style':'currency','currency':al,'currencyDisplay':'symbol'};ah(new Intl[(kC(0x884))](ag,am)[kC(0xca0)](ak));});}#xi(af){const kD=bY;if(af!==[...this[kD(0xc57)][kD(0x573)]][kD(0x81c)](ag=>ag[kD(0x42a)])[kD(0xf0a)]){for(let ag of this['#nav-buttons'][kD(0x573)])ag[kD(0x42a)]=ag[kD(0xf0a)]===af,ag[kD(0xbc7)]=ag['value']===af?-0x1:0x0,ag['toggled']?ag[kD(0x88e)](kD(0xe87)):ag[kD(0xa0a)](kD(0xe87),kD(0xf78));for(let ah of this[kD(0x372)][kD(0x573)])ah[kD(0x96e)]=ah[kD(0x22c)][kD(0xf0a)]!==af;this[kD(0x459)][kD(0xf0a)]=af,this.#gi();}}async #gi(){const kE=bY;let af=[...this[kE(0xc57)][kE(0x573)]][kE(0x81c)](ah=>ah['toggled'])['value'],ag=Bi['auth'][kE(0x354)]?.[kE(0xfa0)]||await Bi[kE(0x8d9)][kE(0xc7b)]();kE(0x56b)===af?(this[kE(0x953)]['innerHTML']=await this.#fi(vi,ag,a2[kE(0x962)]),this[kE(0x2d8)][kE(0x8c2)]=await this.#fi(yi,ag,a2[kE(0x962)])):kE(0x1f5)===af&&(this[kE(0xcf9)][kE(0x8c2)]=await this.#wi(ag,a2['locale']));}}customElements[bY(0x864)]('bx-purchaseblock',os);class ns extends HTMLElement{static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
    }
  `;get[bY(0xfea)](){return new Promise(af=>{const kF=a1;null===this.#vi?af():this.#vi[kF(0xc68)](af);});}#vi=[];#P=null;['o']=null;constructor(){const kG=bY;super(),this.#P=this[kG(0x1017)]({'mode':kG(0x9ff)}),this[kG(0xf7c)][kG(0x2a2)]&&this.#P[kG(0x775)](document[kG(0xc3b)](this[kG(0xf7c)][kG(0x2a2)][kG(0x223)],!0x0)),this[kG(0xf7c)][kG(0x78e)]?this.#P[kG(0x48f)]=[a2[kG(0x500)],ns.#S,this['constructor'][kG(0x78e)]]:this.#P['adoptedStyleSheets']=[a2['themeStyleSheet'],ns.#S];for(let af of this.#P[kG(0x44e)](kG(0x6e3)))this['#'+af['id']]=af;this.#P[kG(0x1012)]('pointerdown',ag=>this.#Ye(ag)),this.#P[kG(0x1012)](kG(0xff9),ag=>this.#Xe(ag),!0x0),this[kG(0xa0a)](kG(0xd77),'bx-page');}[bY(0x854)](){const kH=bY;this['o']=si(this,kH(0xf55));}async[bY(0xaa8)](af){const kI=bY;await this['whenReady'];let ag=this.#P[kI(0x344)]('#'+CSS['escape'](af));ag&&ag[kI(0x8b2)]();}#Ye(af){const kJ=bY;af[kJ(0x779)][kJ(0xc06)]('a')&&af[kJ(0x539)]();}#Xe(af){const kK=bY;{let ag=af[kK(0x779)][kK(0xc06)]('a');if(ag){let ah=new URL(ag['href']);ah['origin']===location[kK(0x1061)]&&(af[kK(0x539)](),this['o'][kK(0x908)](ah['href']));}}if('dialog'===af[kK(0x779)][kK(0xa31)]){let aj=af['target'],ak=null;'bx-form'===aj[kK(0xe5b)]?.[kK(0xc51)](kK(0xd77))&&(ak=aj[kK(0xe5b)]),ak&&(ak[kK(0xf8c)]?(ak[kK(0x72c)](),ak[kK(0x910)](),af[kK(0x539)](),af[kK(0xa2d)]()):ak[kK(0x92d)]&&(af['preventDefault'](),af['stopImmediatePropagation']()));}}['u'](){if(null!==this.#vi){for(let af of this.#vi)af();this.#vi=null;}}}class ls extends ns{static [bY(0x2a2)]=ie` <template> <bx-headerblock id="header-block"></bx-headerblock> <bx-introblock id="intro-block"></bx-introblock> <bx-tourblock id="tour-block"></bx-tourblock> <bx-demoblock id="demo-block"></bx-demoblock> <bx-purchaseblock id="purchase-block"></bx-purchaseblock> </template>
  `;get[bY(0xe86)](){const kL=bY;return location[kL(0x1061)];}#Yt;#yi;[bY(0x854)](){const kM=bY;super['connectedCallback'](),this['o'][kM(0x1012)](kM(0x828),this.#Yt=af=>{this.#ii(af);}),this[kM(0x53c)][kM(0x1012)]('change',this.#yi=()=>{const kN=kM;this['o'][kN(0x908)](kN(0x6d8)+this[kN(0x53c)][kN(0xf0a)]);}),this.#ki(),this['u']();}[bY(0x7db)](){const kO=bY;this['o'][kO(0xee0)](kO(0x828),this.#Yt),this[kO(0x53c)][kO(0xee0)]('change',this.#yi);}#ii(af){const kP=bY;let {fromLocation:ag,toLocation:ah}=af[kP(0xdd7)];'/'===ah[kP(0x98c)]&&'/'===ag?.[kP(0x98c)]&&ag[kP(0xf3e)]!==ah['hash']&&this.#ki();}#ki(){const kQ=bY;location[kQ(0xf3e)][kQ(0x9ae)](kQ(0x6d8))?this[kQ(0x53c)][kQ(0xf0a)]=location[kQ(0xf3e)]['substring'](0x6):this[kQ(0x53c)][kQ(0xf0a)]='ui';}}customElements[bY(0x864)](bY(0xd7a),ls);class rs extends HTMLElement{static #C=ie` <template> <main id="main"> <h3 id="title"></h3> <p id="description"></p> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      padding: 12px 14px;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    #main {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }

    #title {
      margin: 0;
      font-size: 18px;
      font-weight: 900;
    }

    #description {
      margin: 6px 0 0 0;
      font-size: 15px;
      line-height: 1.1;
      opacity: 0.8;
    }
    #title:empty + #description {
      margin-top: 0;
    }
    #description:empty {
      display: none;
    }
  `;get[bY(0x37a)](){const kR=bY;return this[kR(0xb91)][kR(0xe5b)]?this[kR(0xb91)][kR(0xe5b)]['href']:this[kR(0xb91)]['textContent'];}set[bY(0x37a)](af){const kS=bY;af['startsWith']('#')?this['#title'][kS(0x8c2)]=kS(0x519)+af+kS(0xa04):this['#title']['textContent']=af;}get[bY(0xe24)](){const kT=bY;return this[kT(0xfe0)]['firstElementChild']?this[kT(0xfe0)][kT(0xe5b)]['href']:this[kT(0xfe0)][kT(0xad6)];}set[bY(0xe24)](af){const kU=bY;af['startsWith']('#')?this[kU(0xfe0)][kU(0x8c2)]=kU(0x519)+af+kU(0xa04):this[kU(0xfe0)]['textContent']=af;}#P;constructor(){const kV=bY;super(),this.#P=this[kV(0x1017)]({'mode':'closed'}),this.#P[kV(0x48f)]=[a2[kV(0x500)],rs.#S],this.#P[kV(0x775)](document[kV(0xc3b)](rs.#C[kV(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](kV(0x6e3)))this['#'+af['id']]=af;}}customElements[bY(0x864)](bY(0xf5a),rs);class hs extends HTMLElement{static #C=ie` <template> <main id="main"> <x-input id="search-input" type="search"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search" autocapitalize ellipsis></x-message></x-label> </x-input> <x-button id="advanced-filters-button"> <x-icon id="advanced-filters-icon" href="#switch"></x-icon> <x-popover id="advanced-filters-popover" modal> <main> <x-switch id="watched-by-me-switch"> <x-label><x-message href="#watched-by-me"></x-message></x-label> </x-switch> <x-switch id="created-by-me-switch"> <x-label><x-message href="#created-by-me"></x-message></x-label> </x-switch> </main> </x-popover> </x-button> <x-select id="sort-select"> <x-menu> <x-menuitem value="createdTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="createdTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="threadUpdatedTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="threadUpdatedTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="commentsCount:desc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="commentsCount:asc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="relevance"> <x-icon href="#search"></x-icon> <x-label><x-message href="#relevance"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Main
     */

    #main {
      display: flex;
      padding: 8px;
    }

    /* Search input */

    #search-input {
      flex: 1;
      min-width: 60px;
      max-width: none;
    }

    /* Advanced filters button */

    #advanced-filters-button {
      margin-left: 8px;
      padding: 2px 9px;
    }

    #advanced-filters-button::part(arrow) {
      display: none;
    }

    #advanced-filters-icon {
      width: 19px;
      height: 19px;
    }

    #advanced-filters-popover > main {
      padding: 12px;
    }

    #advanced-filters-popover #created-by-me-switch {
      margin-top: 12px;
    }

    /* Sort select */

    #sort-select {
      min-width: 186px;
      margin-left: 8px;
    }
    #sort-select:focus {
      z-index: 1;
    }
    @media all and (max-width: 650px) {
      #sort-select {
        width: 120px;
        min-width: 0px;
      }
    }
    @media all and (max-width: 539px) {
      #sort-select {
        width: 100px;
      }
    }
  `;get[bY(0xa28)](){const kW=bY;let [af]=this[kW(0xfd8)][kW(0xf0a)][kW(0xc97)]('#');return af[kW(0x963)]();}set['search'](af){const kX=bY;let [,ag]=this['#search-input'][kX(0xf0a)][kX(0xc97)]('#');af=af[kX(0x963)](),ag=void 0x0===ag?null:ag[kX(0x963)]();let ah=af;null!==ag&&(af[kX(0x6dc)]>0x0?ah+='\x20#'+ag:ah+='#'+ag),this[kX(0xfd8)][kX(0xf0a)]=ah;}get[bY(0x9bc)](){const kY=bY;let [af,ag]=this['#search-input'][kY(0xf0a)][kY(0xc97)]('#');return void 0x0===ag?null:ag[kY(0x963)]();}set['tag'](af){const kZ=bY;let [ag]=this['#search-input'][kZ(0xf0a)][kZ(0xc97)]('#');ag=ag['trim']();let ah=ag;null!==(af=null===af?null:af['trim']())&&(ag['length']>0x0?ah+='\x20#'+af:ah+='#'+af),this[kZ(0xfd8)]['value']=ah;}get[bY(0x3b8)](){return this.#Ci;}set[bY(0x3b8)](af){const l0=bY;this.#Ci=af,this[l0(0x602)][l0(0x42a)]=null!==af,this.#Si();}get[bY(0x7dd)](){return this.#Ti;}set[bY(0x7dd)](af){const l1=bY;this.#Ti=af,this['#created-by-me-switch'][l1(0x42a)]=null!==af,this.#Si();}get[bY(0x311)](){const l2=bY;return this['#sort-select'][l2(0xf0a)];}set[bY(0x311)](af){const l3=bY;this['#sort-select'][l3(0xf0a)]=af;}#P;#Ci=null;#Ti=null;#Gt;constructor(){const l4=bY;super(),this.#P=this[l4(0x1017)]({'mode':l4(0xc5d)}),this.#P[l4(0x48f)]=[a2[l4(0x500)],hs.#S],this.#P[l4(0x775)](document[l4(0xc3b)](hs.#C[l4(0x223)],!0x0));for(let af of this.#P[l4(0x44e)](l4(0x6e3)))this['#'+af['id']]=af;this[l4(0xfd8)]['addEventListener']('change',()=>this.#$i()),this['#watched-by-me-switch'][l4(0x1012)](l4(0x807),()=>this.#Pi()),this[l4(0xb4a)][l4(0x1012)](l4(0x807),()=>this.#Ei()),this[l4(0x101b)][l4(0x1012)]('change',()=>this.#Li());}[bY(0x854)](){const l5=bY;Bi[l5(0xf5c)][l5(0x1012)](l5(0xecc),this.#Gt=()=>{this.#Si();}),this.#Si();}[bY(0x7db)](){const l6=bY;Bi[l6(0xf5c)]['removeEventListener'](l6(0xecc),this.#Gt);}#$i(){const l7=bY;this['dispatchEvent'](new CustomEvent(l7(0x63b),{'detail':l7(0xa28)}));}#Pi(){const l8=bY;this.#Ci=this[l8(0x602)][l8(0x42a)]?Bi[l8(0xf5c)]['userID']:null,this[l8(0x10bf)](new CustomEvent(l8(0x63b),{'detail':l8(0x3b8)})),this.#Si();}#Ei(){const l9=bY;this.#Ti=this[l9(0xb4a)][l9(0x42a)]?Bi[l9(0xf5c)][l9(0xdc1)]:null,this[l9(0x10bf)](new CustomEvent('change',{'detail':l9(0x7dd)})),this.#Si();}#Li(){const lb=bY;this['dispatchEvent'](new CustomEvent(lb(0x63b),{'detail':lb(0x311)}));}async #Si(){const lc=bY;await Bi[lc(0xf5c)][lc(0xfea)],null===Bi[lc(0xf5c)][lc(0xdc1)]?this[lc(0x5e6)][lc(0x96e)]=!0x0:(this[lc(0x5e6)]['hidden']=!0x1,this[lc(0x3b8)]||this[lc(0x7dd)]?(this[lc(0xd2d)][lc(0xe90)]['color']=lc(0xfb4),this['#advanced-filters-icon'][lc(0xe90)]['transform']=lc(0x9e2)):(this['#advanced-filters-icon'][lc(0xe90)][lc(0x56c)]=null,this[lc(0xd2d)][lc(0xe90)]['transform']=null));}}customElements['define'](bY(0x97d),hs);class cs extends HTMLElement{static [bY(0x1068)]=[bY(0xa7f)];static #C=ie` <template> <div id="container"> <aside id="sidebar"> <a id="banner-anchor"> <img id="banner-image" width="245px" height="140px"> </a> <div class="skeleton"> <div id="skeleton-image" part="skeleton-item"></div> </div> </aside> <main id="main"> <hgroup> <div id="title" part="title"> <a id="title-anchor"></a> <span id="hashtag-span" part="hashtag"></span> </div> <div id="details" part="details"> <span id="created-detail"> <a id="created-author-anchor"></a> <span id="created-time-span"></span> </span> <span id="updated-detail"> <a id="updated-author-anchor"></a> <span id="updated-time-span"></span> </span> <div id="comments-detail"> <x-icon id="comments-icon" href="#comment-outline"></x-icon> <div id="comments-label"></div> </div> </div> </hgroup> <x-button id="translate-button" size="small" condensed togglable hidden> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <div class="skeleton"> <div id="skeleton-title" part="skeleton-item"></div> <div class="skeleton-details" part="skeleton-item"></div> <div class="skeleton-details" part="skeleton-item"></div> </div> </main> </div> </template>
  `;static #S=se`
    :host {
      display: flex;
      align-items: stretch;
      box-sizing: border-box;
      width: 100%;
      padding: 12px 15px;
      position: relative;
    }

    #container {
      display: flex;
      width: 100%;
    }

    #main {
      display: flex;
      justify-content: center;
      flex-flow: column;
      width: 100%;
      padding-left: 16px;
    }

    #sidebar {
      display: flex;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-weight: inherit;
    }
    a:hover {
      text-decoration: underline;
    }

    a x-label {
      cursor: inherit;
    }

    /**
     * Banner image
     */

    #banner-anchor {
      display: flex;
    }
    :host([skeleton]) #banner-anchor {
      display: none;
    }

    #banner-image {
      background: var(--background-color);
      border: 1px solid var(--border-color);
    }

    /**
     * Title
     */

    #title {
      font-weight: 700;
      font-size: 22px;
      line-height: 1.2;
    }
    :host([skeleton]) #title {
      display: none;
    }

    #title a {
      color: inherit;
      filter: none;
    }

    #title #hashtag-span {
      position: relative;
      bottom: 1px;
      margin-left: 4px;
      vertical-align: middle;
      font-size: 15px;
      text-transform: lowercase;
    }

    /**
     * Details
     */

    #details {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      margin-top: 3px;
      font-size: 13.5px;
      line-height: 1.2;
    }
    #details[hidden] {
      display: none;
    }
    :host([skeleton]) #details {
      display: none;
    }

    /* Created */

    #created-detail {
      width: 100%;
      margin: 3px 0px 6px 0px;
    }
    #created-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #created-author-anchor {
      display: inline;
    }

    /* Updated */

    #updated-detail {
      margin: 2px 12px 2px 0px;
    }

    #updated-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #updated-author-anchor {
      display: inline;
    }

    /* Tags */

    a.tag-anchor {
      display: inline-block;
      margin: 2px 6px 2px 0;
      text-decoration: none;
      vertical-align: middle;
    }
    a.tag-anchor:last-of-type {
      margin-right: 12px;
    }

    x-tag {
      vertical-align: middle;
    }

    /* Comments */

    #comments-detail {
      display: flex;
      align-items: center;
    }
    #comments-detail[hidden] {
      display: none;
    }

    #comments-icon {
      margin-left: 2px;
      transform: translateY(1px);
    }

    #comments-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /**
     * "Translate" button
     */

    #translate-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    :host([skeleton]) #translate-button {
      display: none;
    }

    /**
     * Skeleton
     */

    #skeleton-title {
      display: none;
      height: 26px;
      width: 50%;
    }
    :host([skeleton]) #skeleton-title {
      display: block;
    }

    .skeleton-details {
      display: none;
      height: 13px;
      width: 50%;
      margin-top: 12px;
      opacity: 0.7;
    }
    .skeleton-details + .skeleton-details {
      width: 20%;
    }
    :host([skeleton]) .skeleton-details {
      display: block;
    }

    #skeleton-image {
      display: none;
      width: 245px;
      height: 140px;
    }
    :host([skeleton]) #skeleton-image {
      display: block;
    }
  `;get[bY(0xa7f)](){const ld=bY;return this[ld(0xfd9)](ld(0xa7f))?this[ld(0xc51)](ld(0xa7f))[ld(0xc97)]('\x20')[ld(0xe7a)](af=>''!==af[ld(0x963)]()):[ld(0xad4),ld(0xadc)];}set['details'](af){const lf=bY;this[lf(0xa0a)](lf(0xa7f),af[lf(0xf5e)](''));}get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){this.#Ui=af,this.#A();}get[bY(0xb09)](){const lg=bY;return this['hasAttribute'](lg(0xb09));}set[bY(0xb09)](af){const lh=bY;af?this[lh(0xa0a)](lh(0xb09),''):this[lh(0x88e)](lh(0xb09));}#T;#P;#Ui=null;constructor(){const lj=bY;super(),this.#P=this[lj(0x1017)]({'mode':'closed'}),this.#P['adoptedStyleSheets']=[a2[lj(0x500)],cs.#S],this.#P['append'](document[lj(0xc3b)](cs.#C['content'],!0x0));for(let af of this.#P[lj(0x44e)](lj(0x6e3)))this['#'+af['id']]=af;this[lj(0x376)][lj(0xe90)][lj(0xee8)]=Ht(0x32,0x5a)+'%',this.#P[lj(0x1012)](lj(0x894),ag=>this.#Ye(ag)),this.#P[lj(0x1012)](lj(0xff9),ag=>this.#Xe(ag)),this['#translate-button']['addEventListener'](lj(0x807),()=>this.#Di());}[bY(0x854)](){const lk=bY;this.#T=si(this,lk(0xf55));}[bY(0x83b)](af,ag,ah){const ll=bY;ag!==ah&&ll(0xa7f)===af&&this.#A();}[bY(0x109f)](){return new Promise(async af=>{const lm=a1;this['setAttribute'](lm(0x109f),''),await it(0xc8),this[lm(0x88e)](lm(0x109f)),await it(0xc8),this['setAttribute'](lm(0x109f),''),await it(0xc8),this['removeAttribute'](lm(0x109f)),af();});}#Ye(af){const ln=bY;af[ln(0x779)][ln(0xc06)]('a')&&af[ln(0x539)]();}#Xe(af){const lp=bY;let ag=af[lp(0x779)][lp(0xc06)]('a');ag?.[lp(0x1061)]===location[lp(0x1061)]&&(ag[lp(0x98c)][lp(0x9ae)](lp(0xfab))||ag['pathname'][lp(0x9ae)](lp(0xe97)))&&(af[lp(0x539)](),this.#T[lp(0x908)](ag[lp(0xbd9)]));}async #Di(){const lq=bY;let af=this[lq(0xfa3)]['toggled']?a2[lq(0x962)]:this.#Ui['srcLocale'];He[lq(0x1d5)](af)?this.#Ui=await Bi[lq(0xa1a)][lq(0x909)](this.#Ui['id'],af):this.#Ui=await Bi['database'][lq(0xd1f)](lq(0xb29),this.#Ui['id']),this.#A();}#A(){const lr=bY;if(null===this.#Ui)return;let af=this.#Ui,ag=this['details'],ah=this[lr(0x3ab)]['id'][lr(0xc97)]('-')[0x1];this['#details']['hidden']=0x0===ag[lr(0x6dc)],this[lr(0x796)][lr(0xbd9)]='/blog/'+ah+'/'+af['threadSlug'],this[lr(0xdcf)]['src']=af[lr(0x923)];{let aj=Te(af[lr(0x37a)]);if(this[lr(0x986)][lr(0xbd9)]=lr(0x7d9)+ah+'/'+af[lr(0xa4b)],this[lr(0x986)][lr(0x8c2)]=aj,ag[lr(0x1d5)](lr(0x35c))?this[lr(0x533)][lr(0xad6)]='#'+ah:this[lr(0x533)][lr(0xad6)]='',CSS[lr(0x101d)]&&af[lr(0xdf4)]){let ak=ai(af[lr(0xdf4)],[this['#title']]),al=CSS[lr(0x101d)][lr(0x10bd)](lr(0xaef))||new Highlight();for(let am of ak)al[lr(0xc2f)](am);CSS['highlights'][lr(0xf62)]('mark',al);}}if(ag[lr(0x1d5)]('created')){let an=af[lr(0x10b6)];this[lr(0xfaf)][lr(0x96e)]=!0x1,this['#created-detail']['style'][lr(0xb5d)]=ag[lr(0xc56)]('created'),this[lr(0x10b8)]['href']=lr(0x1c8)+af[lr(0xbaf)]+'/'+$e(af[lr(0xb8f)]),this[lr(0x10b8)]['textContent']=af['authorName'],this[lr(0xa7f)][lr(0x1d5)]('author')?this[lr(0x2af)][lr(0x8c2)]=lr(0xafb)+an+'}\x22></x-message>':this[lr(0x2af)][lr(0x8c2)]='<x-message\x20href=\x22#date-rel\x22\x20args=\x22date:'+an+'}\x22></x-message>';}else this[lr(0xfaf)]['hidden']=!0x0;if(ag['includes'](lr(0x9b2))){let ap,aq,ar;this[lr(0x4cf)][lr(0x96e)]=!0x1,this[lr(0x4cf)][lr(0xe90)][lr(0xb5d)]=ag[lr(0xc56)](lr(0x9b2)),0x0===af['commentsCount']?(ap=af['createdTime'],aq=lr(0x1c8)+af['authorID']+'/'+$e(af[lr(0xb8f)]),ar=af[lr(0xb8f)]):(ap=af[lr(0xc5c)],aq=lr(0x1c8)+af[lr(0xcb4)]+'/'+$e(af[lr(0xda3)]),ar=af[lr(0xda3)]),this[lr(0xdf0)][lr(0xbd9)]=aq,this[lr(0xdf0)][lr(0xad6)]=ar,this[lr(0xa7f)][lr(0x1d5)](lr(0x55e))?this[lr(0xc81)][lr(0x8c2)]=lr(0x9c2)+ap+'}\x22></x-message>':this[lr(0xc81)][lr(0x8c2)]='<x-message\x20href=\x22#date-rel\x22\x20args=\x22date:'+ap+'}\x22></x-message>';}else this[lr(0x4cf)][lr(0x96e)]=!0x0;ag[lr(0x1d5)]('comments')?(this[lr(0xb54)][lr(0x96e)]=0x0===af['commentsCount'],this[lr(0xb54)][lr(0xe90)][lr(0xb5d)]=ag[lr(0xc56)](lr(0x72e)),this[lr(0x8e8)][lr(0xad6)]=af[lr(0x5ff)]):this['#comments-detail'][lr(0x96e)]=!0x0;for(let au of this[lr(0xec7)][lr(0x44e)](lr(0xf0e)))au['remove']();if(ag[lr(0x1d5)](lr(0xadc))&&af['tags'][lr(0x6dc)]>0x0){let av='',aw=ag['indexOf'](lr(0xadc));for(let ax of af[lr(0xadc)]){let ay=lr(0x7eb)+ye(ax,'\x20','+'),az=Vt(ax);if(ax[lr(0x1d5)](':')){let [aA,aB]=ax[lr(0xc97)](':')[lr(0x8fb)](aC=>aC[lr(0x963)]());av+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22tag-anchor\x22\x20href=\x22'+ay+'\x22\x20style=\x22order:\x20'+aw+lr(0x991)+ax+lr(0xecb)+az+lr(0x30e)+aA+lr(0x837)+aB+lr(0x1090);}else av+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22tag-anchor\x22\x20href=\x22'+ay+lr(0x2f5)+aw+lr(0x991)+ax+lr(0xecb)+az+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>'+ax+lr(0x1090);}this[lr(0xec7)][lr(0xdc8)](lr(0x227),av);}af['locale']===af[lr(0xb73)]&&af[lr(0x962)]===a2[lr(0x962)]?this[lr(0xfa3)]['hidden']=!0x0:(this['#translate-button'][lr(0x42a)]=af[lr(0x962)]===a2[lr(0x962)],this[lr(0xfa3)][lr(0x96e)]=!0x1,this['#src-locale-message'][lr(0xbd9)]=lr(0x627)+(af['srcLocale']||af[lr(0x962)]||'en'),this[lr(0xb15)][lr(0xbd9)]=lr(0x627)+a2[lr(0x962)]);}}customElements[bY(0x864)]('bx-blogpreviewblock',cs);let ds=(af,ag=bY(0xdae),ah=!0x0)=>{const lu=bY;let aj,ak,al=[];aj=lu(0x37e)===ag?ad[lu(0x60f)][lu(0x3e5)]['htmlLanguage']:lu(0xdae)===ag?ad[lu(0x60f)][lu(0xde2)]['xmlLanguage']:lu(0xca8)===ag?ad[lu(0x60f)][lu(0x23b)][lu(0x6cb)]:'js'===ag?ad[lu(0x60f)]['JS']['javascriptLanguage']:ad[lu(0x60f)][lu(0xde2)][lu(0x10a7)];{let am=aj[lu(0x403)][lu(0xf30)](af),an=Object[lu(0x532)](null),ap=new ad[(lu(0xdad))]['RangeSetBuilder']();ad[lu(0xb70)][lu(0x2e4)][lu(0x22e)](am,ad['Lezer'][lu(0x2e4)][lu(0xf4c)],(aq,ar,au)=>{const lv=lu;ap[lv(0xc2f)](aq,ar,an[au]||(an[au]=ad[lv(0x4ac)]['Decoration'][lv(0xaef)]({'class':au})));}),ak=ap[lu(0xfce)]();}{let aq=ad[lu(0xdad)][lu(0xa4d)]['of']([af]),ar=aq[lu(0xac4)](0x1),au=ar[lu(0x442)],av=ak['iter'](ar[lu(0x442)]);for(;av['value']&&av[lu(0x442)]<ar['to'];)av[lu(0x442)]>au&&al[lu(0xc68)]({'text':aq['sliceString'](au,av[lu(0x442)]),'classes':[]}),al[lu(0xc68)]({'text':aq[lu(0x3ac)](av[lu(0x442)],Math[lu(0x339)](ar['to'],av['to'])),'classes':[av[lu(0xf0a)]['spec'][lu(0xa5b)]]}),au=av['to'],av[lu(0xe51)]();au<ar['to']&&al['push']({'text':aq['sliceString'](au,ar['to']),'classes':[]});}if(!0x1===ah)return al;{let aw='';for(let ax of al)if(0x0===ax[lu(0xaa6)][lu(0x6dc)])aw+=Ce(ax[lu(0x7a7)]);else aw+=lu(0xb5a)+ax['classes'][lu(0xf5e)]('\x20')+'\x22>'+Ce(ax[lu(0x7a7)])+lu(0x3be);return aw;}},us=Symbol();class ps extends HTMLElement{static [bY(0x1068)]=[bY(0xc7e),'readonly',bY(0x6a2)];static #C=ie` <template> <link rel="stylesheet" href="/libs/prose-mirror/prose-mirror.css"> <div id="toolbar"> <x-buttons id="inline-buttons" tracking="2"> <x-button id="bold-button" value="bold" condensed> <x-icon href="#bold"></x-icon> <x-tooltip> <x-message href="#bold"></x-message> <x-shortcut value="Control+B"></x-shortcut> </x-tooltip> </x-button> <x-button id="italic-button" value="italic" condensed> <x-icon href="#italic"></x-icon> <x-tooltip> <x-message href="#italic"></x-message> <x-shortcut value="Control+I"></x-shortcut> </x-tooltip> </x-button> <x-button id="underline-button" value="underline" condensed> <x-icon href="#underline"></x-icon> <x-tooltip> <x-message href="#underline"></x-message> <x-shortcut value="Control+U"></x-shortcut> </x-tooltip> </x-button> <x-button id="strikethrough-button" value="strikethrough" condensed> <x-icon href="#strikethrough"></x-icon> <x-tooltip> <x-message href="#strikethrough"></x-message> <x-shortcut value="Control+Shift+X"></x-shortcut> </x-tooltip> </x-button> <x-button id="highlight-button" value="highlight" condensed> <x-icon href="#highlight"></x-icon> <x-tooltip> <x-message href="#highlight"></x-message> <x-shortcut value="Control+Shift+H"></x-shortcut> </x-tooltip> </x-button> <x-button id="code-button" value="code" condensed> <x-icon href="#code"></x-icon> <x-tooltip> <x-message href="#code"></x-message> <x-shortcut value="Control+E"></x-shortcut> </x-tooltip> </x-button> </x-buttons> <x-buttons id="block-buttons" tracking="1"> <x-button id="heading-button" value="heading" condensed> <x-icon href="#heading"></x-icon> <x-tooltip> <x-message href="#heading"></x-message> </x-tooltip> </x-button> <x-button id="subheading-button" value="subheading" condensed> <x-icon href="#subheading"></x-icon> <x-tooltip> <x-message href="#subheading"></x-message> </x-tooltip> </x-button> <x-button id="paragraph-button" value="paragraph" condensed> <x-icon href="#paragraph"></x-icon> <x-tooltip> <x-message href="#paragraph"></x-message> </x-tooltip> </x-button> <x-button id="unordered-list-button" value="unordered-list" condensed> <x-icon href="#unordered-list"></x-icon> <x-tooltip> <x-message href="#unordered-list"></x-message> </x-tooltip> </x-button> <x-button id="ordered-list-button" value="ordered-list" condensed> <x-icon href="#ordered-list"></x-icon> <x-tooltip> <x-message href="#ordered-list"></x-message> </x-tooltip> </x-button> </x-buttons> <x-buttons id="language-buttons" tracking="0"> <x-button value="svg" condensed> <x-icon href="#logo-svg"></x-icon> <x-tooltip>SVG</x-tooltip> </x-button> <x-button value="html" condensed> <x-icon href="#logo-html"></x-icon> <x-tooltip>HTML</x-tooltip> </x-button> <x-button value="css" condensed> <x-icon href="#logo-css"></x-icon> <x-tooltip>CSS</x-tooltip> </x-button> <x-button value="js" condensed> <x-icon href="#logo-js"></x-icon> <x-tooltip>JavaScript</x-tooltip> </x-button> </x-buttons> <x-input id="alt-input"> <x-label><x-message href="#none"></x-message></x-label> <x-tooltip><x-message href="#alternative-text"></x-message></x-tooltip> </x-input> <x-numberinput id="size-input" suffix="%" min="10" max="100" condensed> <x-label><x-message href="#size.auto"></x-message></x-label> <x-stepper></x-stepper> <x-tooltip><x-message href="#size"></x-message></x-tooltip> </x-numberinput> <x-buttons id="nesting-buttons" tracking="-1"> <x-button id="decrease-indent-button" value="decrease-indent" condensed> <x-icon href="#decrease-indent"></x-icon> <x-tooltip> <x-message href="#decrease-indent"></x-message> <x-shortcut value="Control+["></x-shortcut> </x-tooltip> </x-button> <x-button id="increase-indent-button" value="increase-indent" condensed> <x-icon href="#increase-indent"></x-icon> <x-tooltip> <x-message href="#increase-indent"></x-message> <x-shortcut value="Control+]"></x-shortcut> </x-tooltip> </x-button> </x-buttons> <x-box id="link-box"> <x-button id="link-button" value="link" condensed> <x-icon href="#link"></x-icon> <x-tooltip> <x-message href="#link"></x-message> <x-shortcut value="Control+K"></x-shortcut> </x-tooltip> </x-button> <x-input id="link-input"> <x-label><x-message href="#url"></x-message></x-label> </x-input> </x-box> <x-button id="insert-button" condensed> <x-icon href="#plus"></x-icon> <x-tooltip> <x-message href="#add"></x-message> </x-tooltip> <x-menu id="insert-menu"> <x-menuitem id="image-menuitem" value="image"> <x-icon href="#image"></x-icon> <x-label><x-message href="#image"></x-message></x-label> </x-menuitem> <x-menuitem id="code-block-menuitem" value="code-block"> <x-icon href="#code-block"></x-icon> <x-label><x-message href="#code-block"></x-message></x-label> </x-menuitem> <x-menuitem id="separator-menuitem" value="separator"> <x-icon href="#separator"></x-icon> <x-label><x-message href="#separator"></x-message></x-label> </x-menuitem> </x-menu> </x-button> </div> <article id="editor-wrapper"></article> <input id="image-input" type="file" accept=".svg,.svgz,.jpg,.jpeg,.png,.webp,.gif" hidden> <slot></slot> </template>
  `;static #S=se`
    :host {
      display: flex;
      flex-flow: column;
      position: relative;
      width: 100%;
      height: 260px;
      box-sizing: border-box;
      font-size: 14.5px;
      line-height: 1.5;
      border-width: 1px;
      border-style: solid;
    }
    :host([readonly]) {
      opacity: 0.8;
    }
    :host([disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Toolbar
     */

    #toolbar {
      border-bottom: 1px solid transparent;
      padding: 6px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px 6px;
      background: var(--background-color);
      border-color: var(--border-color);
    }

    #toolbar x-button {
      flex: 1;
      min-width: 32px;
      min-height: 26px;
      padding: 0;
    }

    #toolbar x-button > x-icon {
      width: 11px;
      height: 11px;
    }
    #toolbar x-button > x-icon[href="#highlight"],
    #toolbar x-button > x-icon[href="#link"] {
      width: 12px;
      height: 12px;
    }
    #toolbar x-button > x-icon[href$="indent"],
    #toolbar x-button > x-icon[href="#image"],
    #toolbar x-button > x-icon[href="#logo-css"],
    #toolbar x-button > x-icon[href="#logo-js"] {
      width: 13px;
      height: 13px;
    }
    #toolbar x-button > x-icon[href="#logo-svg"],
    #toolbar x-button > x-icon[href="#logo-html"] {
      width: 14px;
      height: 14px;
    }

    #toolbar #insert-button {
      flex: 0;
      margin-left: auto;
    }
    #toolbar #insert-button::part(arrow) {
      display: none;
    }
    #toolbar #insert-button x-menu {
      --align: end;
    }

    #toolbar #alt-input {
      height: 26px;
    }

    #toolbar #size-input {
      width: 65px;
      height: 26px;
    }

    /* "Link" button and input */

    #toolbar #link-box {
      flex: 1;
    }

    #toolbar #link-button {
      flex: 0;
    }
    #toolbar #link-button[toggled] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    #toolbar #link-button::part(arrow) {
      display: none;
    }

    #toolbar #link-input {
      flex: 1;
      min-width: 60px;
      height: 26px;
    }

    /**
     * Editor
     */

    #editor-wrapper {
      width: 100%;
      height: 100%;
      overflow: auto;
      flex: 1;
      display: flex;
      flex-flow: column;
    }

    #editor {
      flex: 1;
      width: 100%;
      height: 100%;
      padding: 4px 6px;
      box-sizing: border-box;
      overflow: auto;
      outline: none;
    }

    /* Selection */

    #editor ::selection {
      color: inherit;
      background: rgba(0, 0, 0, 0.1);
    }
    #editor:focus ::selection {
      color: var(--selection-color);
      background: var(--selection-background-color);
    }
    :host([error]) #editor:focus ::selection {
      background: hsla(0, 77%, 50%, 0.19);
    }

    :host(:focus) #editor .ProseMirror-selectednode {
      border-color: var(--accent-color);
      outline: 3px solid var(--light-accent-color);
    }

    /* Image resize grippie */

    #editor .image-resize-grippie {
      display: flex;
      visibility: hidden;
      pointer-events: none;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 30px;
      height: 30px;
      margin: -50px auto 24px;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
      cursor: ns-resize;
    }
    #editor img.focused + .image-resize-grippie {
      visibility: visible;
      pointer-events: all;
    }

    #editor .image-resize-grippie x-icon {
      width: 16px;
      height: 16px;
      color: rgba(255, 255, 255, 0.8);
      pointer-events: none;
    }

    /**
     * Typography adjustments
     */

    /* Heading */

    article h3 {
      margin: 12px 0;
    }

    /* Subheading */

    article h4 {
      margin: 8px 0;
    }

    /* Paragraph */

    article p:first-child {
      margin-top: 0;
    }
    article p:last-child {
      margin-bottom: 0;
    }

    /* List */

    article ul,
    article ol {
      margin: 12px 0;
    }
    article p + ul {
      margin: -10px 0 0 0;
    }
    article li > ul,
    article li > ol {
      margin: 0;
    }

    /* Horizontal rule */

    article hr {
      margin: 22px 0;
    }

    /* Image */

    article img {
      cursor: initial;
    }
  `;get[bY(0xf0a)](){const lw=bY;let af=this.#zi['getHTML']();return lw(0x755)===af&&(af=''),af;}set[bY(0xf0a)](af){const lx=bY;this.#zi[lx(0x301)][lx(0x799)](af),this.#Mi();}get['blobUrls'](){const ly=bY;let af=[];for(let ag of this[ly(0xcca)]['querySelectorAll'](ly(0xd4d)))ag[ly(0xe44)]['startsWith'](ly(0x1db))&&af[ly(0xc68)](ag[ly(0xe44)]);return af;}get['spellcheck'](){const lz=bY;return this[lz(0xfd9)](lz(0xc7e));}set[bY(0xc7e)](af){const lA=bY;af?this['setAttribute'](lA(0xc7e),''):this['removeAttribute']('spellcheck');}get[bY(0x384)](){const lB=bY;return this[lB(0xfd9)](lB(0xb38));}set[bY(0x384)](af){const lC=bY;af?this[lC(0xa0a)]('readonly',''):this[lC(0x88e)](lC(0xb38));}get[bY(0x6a2)](){const lD=bY;return this[lD(0xfd9)](lD(0x6a2));}set[bY(0x6a2)](af){const lE=bY;af?this['setAttribute'](lE(0x6a2),''):this[lE(0x88e)]('disabled');}get[bY(0xe1f)](){const lF=bY;return this['hasAttribute'](lF(0xe1f));}#P;#zi;#Ai;#Bi;#Ri=null;#Ii=!0x1;constructor(){const lG=bY;super(),this[lG(0xbc7)]=0x0,this.#P=this[lG(0x1017)]({'mode':lG(0x9ff),'delegatesFocus':!0x0}),this.#P['adoptedStyleSheets']=[a2[lG(0x500)],ps.#S],this.#P[lG(0x775)](document[lG(0xc3b)](ps.#C['content'],!0x0));for(let ag of this.#P['querySelectorAll'](lG(0x6e3)))this['#'+ag['id']]=ag;this.#Ai=this[lG(0x77d)]['querySelectorAll'](lG(0xa9b));let af={'content':'','editable':!0x1===this['readOnly']&&!0x1===this[lG(0x6a2)],'editorProps':{'attributes':{'id':lG(0x971)}},'element':this[lG(0xcca)],'extensions':[ms,xs,gs,ac[lG(0x84a)][lG(0x8b7)][lG(0xeee)],ac['Tiptap'][lG(0x8b7)]['Bold'][lG(0xbdc)]({'addKeyboardShortcuts':()=>({})}),ac['Tiptap'][lG(0x8b7)][lG(0x944)],ac[lG(0x84a)][lG(0x8b7)]['CharacterCount'][lG(0x26b)]({'limit':0x3b9ac9ff}),ac[lG(0x84a)][lG(0x8b7)][lG(0xdcb)][lG(0xbdc)]({'addKeyboardShortcuts':()=>({})})[lG(0x26b)]({'HTMLAttributes':{'translate':'no'}}),ac[lG(0x84a)]['Extensions']['Document'],ac[lG(0x84a)][lG(0x8b7)][lG(0xaec)],ac['Tiptap'][lG(0x8b7)][lG(0x9d5)],ac[lG(0x84a)]['Extensions'][lG(0x238)],ac[lG(0x84a)][lG(0x8b7)][lG(0xb78)][lG(0x26b)]({'levels':[0x3,0x4]}),ac[lG(0x84a)][lG(0x8b7)]['Highlight'][lG(0xbdc)]({'addKeyboardShortcuts':()=>({})}),ac[lG(0x84a)]['Extensions'][lG(0x3cc)],ac[lG(0x84a)]['Extensions'][lG(0xdb2)],ac['Tiptap'][lG(0x8b7)][lG(0x4b9)][lG(0xbdc)]({'addKeyboardShortcuts':()=>({})}),ac['Tiptap']['Extensions']['Link']['extend']({'addKeyboardShortcuts':()=>({})})[lG(0x26b)]({'openOnClick':!0x1}),ac[lG(0x84a)][lG(0x8b7)][lG(0xaee)],ac['Tiptap'][lG(0x8b7)][lG(0xa99)],ac[lG(0x84a)]['Extensions'][lG(0xef9)],ac[lG(0x84a)][lG(0x8b7)][lG(0x917)],ac[lG(0x84a)][lG(0x8b7)][lG(0xe9f)][lG(0xbdc)]({'addKeyboardShortcuts':()=>({}),'renderHTML'({HTMLAttributes:ah}){const lH=lG;return[lH(0xd00),ac[lH(0x84a)][lH(0x3b4)][lH(0x100b)](this['options'][lH(0xd3d)],ah),0x0];}}),ac[lG(0x84a)]['Extensions']['Text'],ac[lG(0x84a)][lG(0x8b7)][lG(0x10cb)][lG(0xbdc)]({'addKeyboardShortcuts':()=>({})})]};!0x1===re&&af['extensions'][lG(0xc68)](ac['Tiptap'][lG(0x8b7)][lG(0x4f7)]['configure']({'className':lG(0x915)})),this.#zi=new ac['Tiptap']['Core'][(lG(0xbf0))](af),this.#zi['on'](lG(0x4c5),()=>this.#Fi()),this.#zi['on'](lG(0xe7f),()=>this.#Ni()),this[lG(0x1012)](lG(0x5c2),ah=>this.#Oi(ah)),this['addEventListener'](lG(0x1072),ah=>this.#_i(ah)),this[lG(0x1012)](lG(0x57f),ah=>this.#ie(ah)),this.#P['addEventListener'](lG(0x894),ah=>this.#Ye(ah)),this[lG(0x3e3)][lG(0x1012)](lG(0xff9),ah=>this.#qi(ah)),this['#block-buttons'][lG(0x1012)]('click',ah=>this.#qi(ah)),this['#nesting-buttons'][lG(0x1012)](lG(0xff9),ah=>this.#qi(ah)),this['#insert-menu'][lG(0x1012)]('click',ah=>this.#ji(ah)),this[lG(0x80d)][lG(0x1012)](lG(0x807),ah=>this.#Vi()),this[lG(0x402)][lG(0x1012)](lG(0x63b),ah=>this.#Gi(ah)),this[lG(0x1039)][lG(0x1012)](lG(0xf4b),ah=>this.#Hi()),this[lG(0x3a2)][lG(0x1012)](lG(0x63b),ah=>this.#Wi(ah)),this[lG(0x3d3)][lG(0x1012)](lG(0xff9),ah=>this.#Ki(ah)),this[lG(0x103e)][lG(0x1012)]('change',()=>this.#Zi());}['connectedCallback'](){this.#Mi(),this.#Yi();}[bY(0x83b)](af,ag,ah){const lI=bY;ag!==ah&&('spellcheck'===af?this.#Xi():lI(0xb38)===af?this.#Ji():lI(0x6a2)===af&&this.#Qi());}[bY(0x75e)](af){this.#Ri=''===af?null:af,this.#es();}[bY(0x72c)](){const lJ=bY;this.#zi['view'][lJ(0x72c)]();}#Xi(){const lK=bY;this[lK(0xcca)][lK(0xc7e)]=this[lK(0xc7e)];}#Ji(){const lL=bY;this.#zi[lL(0x84d)](!0x1===this[lL(0x6a2)]&&!0x1===this[lL(0x384)]);}#Qi(){const lM=bY;this.#zi['setEditable'](!0x1===this[lM(0x6a2)]&&!0x1===this[lM(0x384)]),this.#Yi();}#Oi(){const lN=bY;this.#Bi=this[lN(0xf0a)],this.#Mi(),this.#es(),this[lN(0x10bf)](new CustomEvent(lN(0xb22),{'bubbles':!0x0,'composed':!0x0}));}#_i(){const lO=bY;this['dispatchEvent'](new CustomEvent(lO(0xaaf),{'bubbles':!0x0,'composed':!0x0})),this.#Mi(),this.#es(),!0x1===this['error']&&this[lO(0xf0a)]!==this.#Bi&&this[lO(0x10bf)](new CustomEvent('change',{'bubbles':!0x0}));}#ie(af){const lP=bY;let ag=ui['fromEvent'](af);for(let ah of this.#Ai)if(ag[lP(0xee6)](...ah['value'])){let aj=ah[lP(0xc06)](lP(0xa88));!0x1===aj[lP(0x6a2)]&&(af[lP(0x539)](),aj[lP(0xff9)]());break;}}#Ye(af){const lQ=bY;af[lQ(0x779)][lQ(0xee6)](lQ(0x980))&&this.#ts(af);}#ts(af){const lR=bY;let ag,ah,aj=af['target'],ak=aj[lR(0x926)],al=ak['getBoundingClientRect'](),am=al[lR(0xee8)]/al[lR(0x1046)],an=ak[lR(0xc06)]('#editor')[lR(0x6ca)];af[lR(0x539)](),aj[lR(0x36c)](af[lR(0x348)]),window['addEventListener'](lR(0x985),ag=ap=>{const lS=lR;let aq=ap[lS(0xc4a)]-af[lS(0xc4a)],ar=al[lS(0x1046)]+aq,au=M(ar*am/an*0x64,0xa,0x64,0x0);this.#zi[lS(0x301)][lS(0xa2b)]('image',{'style':lS(0xb3e)+au+'%;'});}),window['addEventListener'](lR(0xae0),ah=()=>{const lT=lR;window[lT(0xee0)](lT(0x985),ag),window[lT(0xee0)](lT(0xae0),ah);});}#Fi(){this.#Mi();}#Ni(){this.#Mi();}#qi(af){const lU=bY;let ag=af[lU(0x779)][lU(0xc06)](lU(0xa88));ag&&(lU(0xbcf)===ag[lU(0xf0a)]?this.#is():lU(0x7bd)===ag['value']?this.#ss():lU(0xf7e)===ag[lU(0xf0a)]?this.#as():lU(0x101c)===ag['value']?this.#os():lU(0x6f4)===ag[lU(0xf0a)]?this.#ns():lU(0x3cb)===ag['value']?this.#ls():lU(0xf67)===ag['value']?this.#rs(lU(0xf67)):lU(0x695)===ag[lU(0xf0a)]?this.#rs('subheading'):lU(0x40c)===ag[lU(0xf0a)]?this.#rs(lU(0x40c)):lU(0xaa2)===ag['value']?this.#rs(lU(0xd1d)):'ordered-list'===ag['value']?this.#rs(lU(0x420)):lU(0xe8b)===ag[lU(0xf0a)]?this.#zi['chain']()[lU(0x72c)]()['liftListItem'](lU(0x10e4))[lU(0x619)]()||this.#zi[lU(0x2f7)]()[lU(0x72c)]()[lU(0x63d)]()[lU(0x619)]():'increase-indent'===ag['value']&&(this.#zi[lU(0xa64)]()[lU(0x54d)](lU(0x10e4))?this.#zi[lU(0x2f7)]()[lU(0x72c)]()['sinkListItem']('listItem')[lU(0x619)]():this.#zi['can']()['setBlockquote']()&&this.#zi[lU(0x2f7)]()['focus']()[lU(0x574)]()[lU(0x619)]()));}#Vi(af){const lV=bY;let ag=this['#language-buttons']['value'];this.#zi[lV(0x301)]['updateAttributes'](lV(0x954),{'language':ag});}#ji(af){const lW=bY;let ag=af[lW(0x779)][lW(0xc06)]('x-menuitem');ag&&(lW(0x88f)===ag[lW(0xf0a)]?this[lW(0x3a2)]['click']():lW(0xd8e)===ag[lW(0xf0a)]?this.#zi['chain']()[lW(0x72c)]()[lW(0xc29)]()[lW(0xaa1)]({'type':lW(0x954)})[lW(0x619)]():lW(0x550)===ag['value']&&this.#zi[lW(0x2f7)]()[lW(0x72c)]()[lW(0xc29)]()[lW(0xaa1)]({'type':lW(0x581)})['run']());}#Hi(){const lX=bY;let af,ag;this.#Ii=!0x0,this[lX(0x1039)][lX(0xf0a)],this[lX(0x1039)][lX(0x1012)](lX(0x63b),af=ah=>{const lY=lX;let aj=this['#size-input'][lY(0xf0a)];this.#zi[lY(0x301)]['updateAttributes']('image',{'style':null===aj?null:'width:\x20'+aj+'%;'});}),this[lX(0x1039)][lX(0x1012)]('changeend',ag=ah=>{const lZ=lX;this[lZ(0x1039)][lZ(0xee0)](lZ(0x63b),af),this['#size-input'][lZ(0xee0)](lZ(0x718),ag),this.#Ii=!0x1;});}#Gi(){const m0=bY;let af=this[m0(0x402)][m0(0xf0a)];this.#zi[m0(0x301)]['updateAttributes']('image',{'alt':af});}async #Wi(af){const m1=bY;let ag=af[m1(0x779)]['files'][0x0],ah=ge(ag),aj=null;if(this['#image-input'][m1(0xf0a)]=null,'svgz'===ah){let al=await pe(ag,'arrayBuffer');aj=de(al,'blob');}else aj=ag;let ak=URL[m1(0xd9b)](aj);this.#zi[m1(0x2f7)]()['focus']()[m1(0xc29)]()[m1(0xaa1)]({'type':m1(0x88f),'attrs':{'src':ak}})[m1(0x619)]();}#Ki(af){const m2=bY;this[m2(0x3d3)]['toggled']?this.#zi[m2(0x2f7)]()[m2(0x72c)]()[m2(0x748)]()[m2(0xa53)](m2(0xdd4))[m2(0x10e1)]()[m2(0x619)]():this.#zi[m2(0x2f7)]()['focus']()[m2(0x748)]()[m2(0xa53)](m2(0xdd4))[m2(0x80c)]({'href':''})[m2(0x619)]();}#Zi(){const m3=bY;let af=this[m3(0x103e)][m3(0xf0a)];this.#zi['chain']()[m3(0x72c)]()['unsetCode']()[m3(0xa53)](m3(0xdd4))['setLink']({'href':af})['run']();}#is(){const m4=bY;this.#zi[m4(0x2f7)]()['focus']()[m4(0x748)]()[m4(0x670)]()[m4(0x619)]();}#ss(){const m5=bY;this.#zi['chain']()[m5(0x72c)]()[m5(0x748)]()[m5(0xff1)]()[m5(0x619)]();}#as(){const m6=bY;this.#zi['chain']()['focus']()[m6(0x748)]()[m6(0xd56)]()['run']();}#os(){const m7=bY;this.#zi['chain']()[m7(0x72c)]()['unsetCode']()['toggleStrike']()['run']();}#ns(){const m8=bY;this.#zi['chain']()[m8(0x72c)]()['unsetCode']()[m8(0xbcd)]()[m8(0x619)]();}#ls(){const m9=bY;this.#zi[m9(0x2f7)]()[m9(0x72c)]()[m9(0x872)]()[m9(0x619)]();}#rs(af='heading'){const mb=bY;let ag=this.#hs();mb(0xf67)===af?mb(0xf67)!==ag&&('orderedList'===ag?this.#zi['chain']()[mb(0x72c)]()['toggleOrderedList']()['setHeading']({'level':0x3})[mb(0x619)]():mb(0xd1d)===ag?this.#zi[mb(0x2f7)]()[mb(0x72c)]()[mb(0xd52)]()[mb(0x480)]({'level':0x3})['run']():this.#zi['chain']()[mb(0x72c)]()[mb(0x480)]({'level':0x3})[mb(0x619)]()):mb(0x695)===af?mb(0x695)!==ag&&(mb(0x420)===ag?this.#zi[mb(0x2f7)]()[mb(0x72c)]()['toggleOrderedList']()[mb(0x480)]({'level':0x4})[mb(0x619)]():mb(0xd1d)===ag?this.#zi['chain']()[mb(0x72c)]()[mb(0xd52)]()[mb(0x480)]({'level':0x4})[mb(0x619)]():this.#zi['chain']()['focus']()[mb(0x480)]({'level':0x4})[mb(0x619)]()):'paragraph'===af?mb(0x40c)!==ag&&(mb(0x420)===ag?this.#zi[mb(0x2f7)]()[mb(0x72c)]()[mb(0x4e5)]()['run']():'unorderedList'===ag?this.#zi[mb(0x2f7)]()[mb(0x72c)]()[mb(0xd52)]()[mb(0x619)]():this.#zi[mb(0x2f7)]()['focus']()[mb(0xaf4)]()['run']()):'orderedList'===af?mb(0x420)!==ag&&(mb(0xf67)===ag||mb(0x695)===ag?this.#zi[mb(0x2f7)]()['focus']()[mb(0xaf4)]()['toggleOrderedList']()[mb(0x619)]():this.#zi[mb(0x2f7)]()[mb(0x72c)]()['toggleOrderedList']()[mb(0x619)]()):mb(0xd1d)===af&&mb(0xd1d)!==ag&&(mb(0xf67)===ag||mb(0x695)===ag?this.#zi[mb(0x2f7)]()[mb(0x72c)]()[mb(0xaf4)]()['toggleBulletList']()[mb(0x619)]():this.#zi[mb(0x2f7)]()[mb(0x72c)]()[mb(0xd52)]()[mb(0x619)]());}#hs(){const mc=bY;return this.#zi[mc(0x723)](mc(0xf67),{'level':0x3})?'heading':this.#zi[mc(0x723)]('heading',{'level':0x4})?mc(0x695):this.#cs('bulletList')?'unorderedList':this.#cs(mc(0x420))?'orderedList':this.#zi[mc(0x723)]('codeBlock')?mc(0x3cb):this.#zi['isActive'](mc(0x88f))?mc(0x88f):this.#zi['isActive'](mc(0x40c))?mc(0x40c):mc(0x581)===this.#zi['state'][mc(0x976)]['node']?.[mc(0x1ce)]['name']?mc(0x550):mc(0xfad)===this.#zi[mc(0x526)][mc(0x976)][mc(0xe55)]?.[mc(0x1ce)][mc(0xce8)]?mc(0xfad):mc(0x3d4);}#cs(af=bY(0xf7a)){const md=bY;let ag=ac[md(0x84a)][md(0x3b4)][md(0xb8c)](ah=>ac[md(0x84a)]['Core'][md(0xabc)](ah[md(0x1ce)][md(0xce8)],this.#zi[md(0xc65)][md(0x304)]))(this.#zi[md(0x526)]['selection']);return void 0x0!==ag&&ag[md(0xe55)][md(0x1ce)][md(0xce8)]===af;}#Mi(){const mf=bY;let af=this.#hs();if(mf(0x3cb)===af||'image'===af||mf(0x550)===af){this['#inline-buttons'][mf(0x96e)]=!0x0;for(let ag of this[mf(0x3e3)]['children'])ag[mf(0x6a2)]=!0x0,ag[mf(0x42a)]=!0x1;}else this[mf(0x3e3)]['hidden']=!0x1,this[mf(0xc49)][mf(0x42a)]=this.#zi['isActive']('bold'),this[mf(0xc49)][mf(0x6a2)]=!0x1===this.#zi['can']()[mf(0x670)](),this[mf(0xe27)][mf(0x42a)]=this.#zi[mf(0x723)](mf(0x7bd)),this[mf(0xe27)][mf(0x6a2)]=!0x1===this.#zi[mf(0xa64)]()[mf(0xff1)](),this['#underline-button']['toggled']=this.#zi['isActive'](mf(0xf7e)),this[mf(0xfde)][mf(0x6a2)]=!0x1===this.#zi[mf(0xa64)]()['toggleUnderline'](),this['#strikethrough-button'][mf(0x42a)]=this.#zi['isActive'](mf(0xe64)),this['#strikethrough-button'][mf(0x6a2)]=!0x1===this.#zi['can']()[mf(0x739)](),this[mf(0x235)][mf(0x42a)]=this.#zi[mf(0x723)]('highlight'),this[mf(0x235)][mf(0x6a2)]=!0x1===this.#zi[mf(0xa64)]()[mf(0xbcd)](),this[mf(0xedb)][mf(0x42a)]=this.#zi[mf(0x723)](mf(0x3cb)),this['#code-button'][mf(0x6a2)]=!0x1===this.#zi['can']()[mf(0x872)]();{let ah=this.#zi['getAttributes'](mf(0xdd4));mf(0x3cb)===af||mf(0x88f)===af||mf(0x550)===af||void 0x0===ah[mf(0xbd9)]&&this.#zi[mf(0x44a)][mf(0x526)][mf(0x976)][mf(0x7e9)]||!0x1===this.#zi[mf(0xa64)]()[mf(0x916)]()?(this[mf(0xa1c)][mf(0x96e)]=!0x0,this[mf(0x3d3)][mf(0x96e)]=!0x0,this[mf(0x103e)][mf(0x96e)]=!0x0):(this[mf(0xa1c)][mf(0x96e)]=!0x1,this[mf(0x3d3)]['hidden']=!0x1,void 0x0!==ah[mf(0xbd9)]?(this[mf(0x3d3)][mf(0x42a)]=!0x0,this[mf(0x103e)]['value']=ah['href'],this['#link-input'][mf(0x96e)]=!0x1):(this[mf(0x3d3)]['toggled']=!0x1,this[mf(0x103e)][mf(0xf0a)]='',this[mf(0x103e)][mf(0x96e)]=!0x0));}if(mf(0x3cb)===af||mf(0x88f)===af||mf(0x550)===af){this[mf(0x9df)][mf(0x96e)]=!0x0;for(let aj of this['#block-buttons'][mf(0x573)])aj[mf(0x6a2)]=!0x0,aj['toggled']=!0x1;}else this[mf(0x9df)][mf(0x96e)]=!0x1,this[mf(0x253)][mf(0x42a)]='heading'===af,this[mf(0x253)][mf(0x6a2)]=!0x1===this.#zi[mf(0xa64)]()[mf(0x314)]({'level':0x3}),this[mf(0x634)][mf(0x42a)]=mf(0x695)===af,this[mf(0x634)][mf(0x6a2)]=!0x1===this.#zi['can']()[mf(0x314)]({'level':0x4}),this['#paragraph-button'][mf(0x42a)]=mf(0x40c)===af,this[mf(0x975)][mf(0x6a2)]=this[mf(0x253)][mf(0x6a2)],this['#unordered-list-button'][mf(0x42a)]=mf(0xd1d)===af,this[mf(0xd6d)][mf(0x6a2)]=!0x1===this.#zi[mf(0xa64)]()[mf(0xd52)](),this[mf(0x65c)][mf(0x42a)]='orderedList'===af,this[mf(0x65c)]['disabled']=!0x1===this.#zi['can']()['toggleOrderedList'](),this[mf(0xfdc)][mf(0x6a2)]=!0x1===this.#zi['can']()[mf(0xaa1)]({'type':mf(0x88f)}),this[mf(0xe9e)]['disabled']=!0x1===this.#zi['can']()[mf(0xaa1)]({'type':mf(0x954)}),this[mf(0x8ae)]['disabled']=!0x1===this.#zi['can']()['insertContent']({'type':mf(0x581)});if(this[mf(0x1036)][mf(0x6a2)]=!0x1===this.#zi[mf(0xa64)]()['liftListItem']('listItem')&&!0x1===this.#zi[mf(0xa64)]()[mf(0x63d)](),this[mf(0x3a6)]['disabled']=!0x1===this.#zi[mf(0xa64)]()[mf(0x54d)](mf(0x10e4))&&!0x1===this.#zi[mf(0xa64)]()['setBlockquote'](),mf(0x3cb)===af){let ak=[];if(!0x0===this.#zi[mf(0x44a)][mf(0x526)][mf(0x976)]['empty']){let an=ac[mf(0x84a)][mf(0x3b4)][mf(0xb8c)](ap=>mf(0x954)===ap[mf(0x1ce)][mf(0xce8)])(this.#zi[mf(0x526)][mf(0x976)]);ak['push'](an[mf(0xe55)]);}else ak=this.#zi[mf(0x44a)][mf(0x526)][mf(0x976)]['content']()[mf(0x223)][mf(0x223)]['filter'](ap=>'codeBlock'===ap[mf(0x1ce)][mf(0xce8)]);let al=ak['map'](ap=>ap['attrs'][mf(0x8e9)]),am=!0x1;al[mf(0x6dc)]>0x0&&(al[0x0],am=!0x1===G(al,al[0x0])),this[mf(0x80d)][mf(0x96e)]=!0x1;for(let ap of this[mf(0x80d)][mf(0x573)])ap['toggled']=al[mf(0x1d5)](ap['value']),ap[mf(0xedf)]=am;}else this[mf(0x80d)][mf(0x96e)]=!0x0;if(!0x1===this.#Ii){if(mf(0x88f)===af){let aq=this.#zi[mf(0x44a)][mf(0x526)][mf(0x976)][mf(0x223)]()['content']['content'][mf(0x81c)](au=>mf(0x88f)===au['type']['name']),ar=null;aq[mf(0xa19)][mf(0xe90)]&&aq[mf(0xa19)][mf(0xe90)][mf(0x1d5)](mf(0xee8))&&(ar=parseInt(aq[mf(0xa19)][mf(0xe90)][mf(0xc97)](':')[0x1])),this['#alt-input'][mf(0x96e)]=!0x1,this[mf(0x402)][mf(0xf0a)]=aq[mf(0xa19)][mf(0xef1)],this[mf(0x1039)]['hidden']=!0x1,this[mf(0x1039)][mf(0xf0a)]=ar;}else this[mf(0x402)]['hidden']=!0x0,this['#size-input'][mf(0x96e)]=!0x0;}}#Yi(){const mg=bY;this[mg(0xa0a)](mg(0x464),mg(0x84e)),this['setAttribute'](mg(0x1f6),this[mg(0x6a2)]),this[mg(0x6a2)]?(this[us]=this['tabIndex']>0x0?this[mg(0xbc7)]:0x0,this[mg(0xbc7)]=-0x1):(this[mg(0xbc7)]<0x0&&(this[mg(0xbc7)]=this[us]>0x0?this[us]:0x0),delete this[us]);}#es(){const mh=bY;this.#Ri?this['setAttribute'](mh(0xe1f),''):this[mh(0x88e)](mh(0xe1f));}}customElements[bY(0x864)]('bx-richtextarea',ps);let ms=ac[bY(0x84a)][bY(0x3b4)][bY(0xe54)][bY(0x532)]({'name':bY(0x799),'addCommands':()=>({'loadContent':af=>({tr:ag,dispatch:ah,commands:aj})=>(aj[bY(0xe76)](af,!0x1,{'preserveWhitespace':!0x0}),ah&&ag['setMeta'](bY(0x3f4),!0x1),!0x0)})}),xs=ac[bY(0x84a)][bY(0x8b7)][bY(0x55b)][bY(0xbdc)]({'addOptions'(){const mj=bY;return{...this[mj(0xbf3)]?.()};},'addAttributes':()=>({'language':{'default':null,'rendered':!0x1,'parseHTML':af=>{const mk=bY;let ag=af[mk(0x344)]('code');return ag&&ag[mk(0xfd9)]('data-language')?ag[mk(0xc51)](mk(0x105c)):null;}}}),'renderHTML'({node:af,HTMLAttributes:ag}){const ml=bY;return[ml(0xc54),ac['Tiptap'][ml(0x3b4)][ml(0x100b)](this[ml(0x2ab)][ml(0xd3d)],ag),[ml(0x3cb),{'data-language':af[ml(0xa19)][ml(0x8e9)],'translate':'no','spellcheck':!0x1},0x0]];},'addProseMirrorPlugins'(){const mm=bY;return[...this[mm(0xbf3)]?.()||[],((()=>{const mp=mm;let af=ag=>{const mn=a1;let ah=ac['Tiptap']['Core'][mn(0x86a)](ag,ak=>mn(0x954)===ak[mn(0x1ce)][mn(0xce8)]),aj=[];for(let ak of ah){let al=ak[mn(0x69b)]+0x1,am=ak[mn(0xe55)]['textContent'],an=ak[mn(0xe55)]['attrs'][mn(0x8e9)]||mn(0xdae),ap=ds(am,an,!0x1);for(let aq of ap){let ar=al+aq[mn(0x7a7)][mn(0x6dc)];if(aq[mn(0xaa6)][mn(0x6dc)]){let au=ac[mn(0x4ac)][mn(0x87a)][mn(0xb14)](al,ar,{'class':aq[mn(0xaa6)][mn(0xf5e)]('\x20')});aj[mn(0xc68)](au);}al=ar;}}return ac['View']['DecorationSet'][mn(0x532)](ag,aj);};return new ac[(mp(0xdad))][(mp(0x54f))]({'key':new ac[(mp(0xdad))][(mp(0x9d1))](mp(0xce0)),'state':{'init':(ag,{doc:ah})=>af(ah),'apply':(ag,ah,aj,ak)=>{const mq=mp;let al=aj['selection'][mq(0xf53)]['parent'][mq(0x1ce)][mq(0xce8)],am=ak[mq(0x976)][mq(0xf53)]['parent'][mq(0x1ce)]['name'],an=ac[mq(0x84a)][mq(0x3b4)][mq(0x86a)](aj['doc'],aq=>mq(0x954)===aq[mq(0x1ce)][mq(0xce8)]),ap=ac[mq(0x84a)][mq(0x3b4)][mq(0x86a)](ak['doc'],aq=>mq(0x954)===aq[mq(0x1ce)][mq(0xce8)]);return ag['docChanged']&&([al,am][mq(0x1d5)](mq(0x954))||ap['length']!==an[mq(0x6dc)]||ag[mq(0xe82)][mq(0xe8f)](aq=>void 0x0!==aq[mq(0x442)]&&void 0x0!==aq['to']&&an[mq(0xe8f)](ar=>ar[mq(0x69b)]>=aq[mq(0x442)]&&ar[mq(0x69b)]+ar['node']['nodeSize']<=aq['to'])))?af(ag[mq(0xb19)]):ah[mq(0x8fb)](ag[mq(0xf70)],ag[mq(0xb19)]);}},'props':{'decorations'(ag){return this['getState'](ag);}}});})())];}}),gs=ac['Tiptap']['Extensions'][bY(0x104f)][bY(0xbdc)]({'addOptions'(){return{...this['parent']?.()};},'addAttributes'(){const mr=bY;return{...this[mr(0xbf3)]?.(),'style':{'default':null,'renderHTML':af=>({'style':af['style']})},'width':{'default':null,'renderHTML':af=>({'width':af[mr(0xee8)]})},'height':{'default':null,'renderHTML':af=>({'height':af[mr(0x1046)]})}};},'addProseMirrorPlugins'(){const mu=bY;let af=this['editor'];return[...this[mu(0xbf3)]?.()||[],((()=>{const mv=mu;let ag=null,ah=ac[mv(0x4ac)][mv(0xc72)][mv(0x7e9)],aj=ie` <div class="image-resize-grippie" draggable="false"> <x-icon href="#chevron-down"></x-icon> </div>
        `;return new ac[(mv(0xdad))]['Plugin']({'props':{'decorations'(ak){const mw=mv;if(ag?.[mw(0xb19)]['eq'](ak['doc']))return ah;{ag=ak,ah=ac[mw(0x4ac)]['DecorationSet'][mw(0x7e9)];let al=ac[mw(0x84a)][mw(0x3b4)][mw(0x86a)](ak[mw(0xb19)],am=>mw(0x88f)===am['type'][mw(0xce8)]);for(let {node:am,pos:an}of al)ah=ah[mw(0xc2f)](ak[mw(0xb19)],[ac[mw(0x4ac)]['Decoration'][mw(0xac5)](an+0x1+am[mw(0x223)][mw(0xb2e)],aj['cloneNode'](!0x0))]);return ah;}}}});})()),new ac['State'][(mu(0x54f))]({'props':{'handleDOMEvents':{'drop':(ag,ah)=>{const mx=mu;if(null===ag[mx(0x1094)]){ah[mx(0x539)]();let aj=ag[mx(0xf56)]({'left':ah['clientX'],'top':ah['clientY']});for(let ak of ah[mx(0x555)][mx(0xea4)]){let al=ak[mx(0xaf1)](),am=xe(al)[mx(0x10b1)](),an=null;((async()=>{const my=mx;if(my(0xdae)===am)an=await ue(al,my(0x105a));else{if(my(0xd07)===am){let aq=await ue(al,my(0x5e0));an=de(aq,my(0x105a));}else[my(0xd98),my(0x6b8),'png',my(0x8a2),my(0xe20)]['includes'](am)&&(an=await ue(al,my(0x105a)));}if(an){let ar=URL[my(0xd9b)](an),{width:au,height:av}=await(ap=ar,new Promise(aw=>{const mA=my;let ax=new Image();ax['onload']=()=>{const mz=a1;aw({'width':ax['naturalWidth'],'height':ax[mz(0xa0f)]});},ax[mA(0xe44)]=ap;}));af[my(0x2f7)]()[my(0x72c)]()[my(0xc29)]()['insertContentAt'](aj['pos'],{'type':my(0x88f),'attrs':{'src':ar,'width':au,'height':av}})[my(0x619)]();}var ap;})());}return!0x0;}}}}})];}});class bs extends HTMLElement{static #C=ie` <template> <div id="form-view"> <header id="header" part="header"></header> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </div> <div id="throbber-view"> <x-throbber id="throbber"></x-throbber> </div> </template>
  `;static #S=se`
    :host {
      display: flex;
      flex-flow: column;
      position: relative;
      width: 100%;
    }
    :host(:focus) {
      outline: none;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Form view
     */

    #form-view {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
    }
    :host([throbber]) #form-view {
      display: block;
      visibility: hidden;
    }

    #header {
      border-bottom: 1px solid transparent;
    }
    #header:empty {
      display: none;
    }

    #main {
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      position: relative;
      overflow: auto;
    }

    h2 {
      margin: 0 0 12px 0;
    }

    h3:first-child {
      margin-top: 0;
    }

    p {
      font-size: 13px;
    }

    #footer {
      display: flex;
      z-index: 0;
      min-height: fit-content;
      justify-content: flex-end;
      padding: 10px 20px;
      border-top: 1px solid transparent;
    }
    #footer:empty {
      display: none;
    }

    #footer x-button + x-button {
      margin-left: 8px;
    }
    #footer x-button:first-child {
      margin-left: auto;
    }

    /**
     * Throbber view
     */

    #throbber-view {
      display: none;
      flex-flow: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0 20px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    :host([throbber]) #throbber-view {
      display: flex;
    }
  `;get[bY(0x92d)](){const mB=bY;return this[mB(0xfd9)](mB(0x92d));}set[bY(0x92d)](af){const mC=bY;af?this[mC(0xa0a)](mC(0x92d),''):this['removeAttribute'](mC(0x92d));}get[bY(0xf8c)](){return this['p'];}#P;#$;#ds=!0x1;['p']=!0x1;constructor(){const mD=bY;super();let af=this[mD(0xf7c)]['m'],ag=this[mD(0xf7c)]['v'],ah=this[mD(0xf7c)]['k'];this.#P=this['attachShadow']({'mode':mD(0x9ff)}),this.#P[mD(0x48f)]=[a2['themeStyleSheet'],bs.#S,this[mD(0xf7c)]['_shadowStyleSheet']],this.#P['append'](document['importNode'](bs.#C[mD(0x223)],!0x0)),af&&this.#P['querySelector']('#header')[mD(0x775)](document[mD(0xc3b)](af[mD(0x223)],!0x0)),ag&&this.#P[mD(0x344)](mD(0x21d))[mD(0x775)](document[mD(0xc3b)](ag[mD(0x223)],!0x0)),ah&&this.#P[mD(0x344)](mD(0x59c))[mD(0x775)](document[mD(0xc3b)](ah[mD(0x223)],!0x0));for(let aj of this.#P[mD(0x44e)](mD(0x6e3)))this['#'+aj['id']]=aj;this[mD(0xa0a)]('extends',mD(0x57d)),this['setAttribute'](mD(0x366),'0'),this[mD(0x1012)](mD(0x57f),ak=>this.#ie(ak));}[bY(0x854)](){const mE=bY;this.#$=si(this,mE(0x741));}[bY(0x7db)](){}[bY(0x910)](){return new Promise(async af=>{const mF=a1;!0x1===this.#ds&&(this.#ds=!0x0,this[mF(0xa0a)]('blink',''),await it(0xc8),this[mF(0x88e)]('blink',''),await it(0xc8),this['setAttribute'](mF(0x109f),''),await it(0xc8),this[mF(0x88e)](mF(0x109f),''),this.#ds=!0x1),af();});}[bY(0xc2a)](){this['p']=!0x1;}#ie(af){const mG=bY;if(af[mG(0xc67)](),mG(0xe73)===af['code']&&af[mG(0x539)](),!0x1===this[mG(0x92d)]&&null===this.#P[mG(0xf52)]){if(mG(0xe73)===af[mG(0x3cb)])this[mG(0xf8c)]?this[mG(0x910)]():this[mG(0x4a1)]?this[mG(0x4a1)][mG(0xff9)]():this.#$&&this.#$[mG(0x225)]();else{if(mG(0xab8)===af[mG(0xe52)]||mG(0x66b)===af['code']){let ag=this[mG(0x59c)]['querySelector'](mG(0x7ca));!0x1===ag?.['disabled']&&af[mG(0x779)]!==ag&&ag[mG(0xff9)]();}}}}}const fs=bY(0xd4e);class ws extends bs{static [bY(0x1068)]=[bY(0x1ce)];static ['v']=ie` <template> <x-box id="heading-box"> <h2 id="heading"><x-message id="heading-message"></x-message></h2> <bx-avatar id="avatar"></bx-avatar> </x-box> <section id="title-section"> <h3><x-message href="#title"></x-message></h3> <x-input id="title-input" validation="manual" maxlength="135"></x-input> </section> <section id="banner-section"> <h3><x-message href="#banner-image"></x-message></h3> <x-input id="banner-input" type="url"> <x-label>${fs}</x-label> </x-input> </section> <section id="description-section"> <h3><x-message href="#description"></x-message></h3> <bx-richtextarea id="description-textarea" spellcheck></bx-richtextarea> </section> <section id="options-section"> <x-checkbox id="watch-checkbox" toggled> <x-label><strong><x-message href="#watch-thread"></x-message></strong></x-label> <x-label><x-message href="#watch-thread.detail"></x-message></x-label> </x-checkbox> </section> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#save"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{display:flex;flex-flow:column}h2{margin:0;font-size:28px}h3{margin-bottom:6px}#heading-box{margin-bottom:8px}#avatar{width:40px;height:40px;margin-left:auto}#textarea{min-height:0;margin-top:8px;flex:1}#title-section{margin-top:0}#title-input{width:100%;max-width:none}#title-input[error]::before{top:-20px;right:-4px;left:auto}#banner-section{margin-top:16px}#banner-input{max-width:none}#description-section{display:flex;flex-flow:column;flex:1;height:100%;min-height:0;margin-top:16px}#description-textarea{height:100%;min-height:0}#description-textarea[error]::before{top:-20px;right:-4px;left:auto}#options-section{margin-top:16px}`;get[bY(0x1ce)](){const mH=bY;return this['hasAttribute'](mH(0x1ce))?this[mH(0xc51)]('type'):mH(0xb4b);}set[bY(0x1ce)](af){const mI=bY;this[mI(0xa0a)](mI(0x1ce),af);}get['title'](){const mJ=bY;return Ce(this[mJ(0xc0c)]['value']);}set[bY(0x37a)](af){this['#title-input']['value']=Se(af);}get['banner'](){const mK=bY;let af=this['#banner-input'][mK(0xf0a)][mK(0x963)]();return''===af?fs:af;}set[bY(0x923)](af){const mL=bY;this[mL(0xc60)][mL(0xf0a)]=af;}get[bY(0xe24)](){const mM=bY;return this[mM(0x862)][mM(0xf0a)];}set[bY(0xe24)](af){const mN=bY;this[mN(0x862)]['value']=Te(af);}get[bY(0x35a)](){const mO=bY;return this[mO(0x862)][mO(0x94e)];}get['watchThread'](){const mP=bY;return this[mP(0xcfa)][mP(0x42a)];}#at;constructor(){const mQ=bY;super(),this[mQ(0xc0c)][mQ(0x1012)](mQ(0x84e),()=>this.#us()),this[mQ(0x862)][mQ(0x1012)](mQ(0x84e),()=>this.#ps()),this['#submit-button'][mQ(0x1012)](mQ(0xff9),af=>this.#ms(af)),this[mQ(0x4a1)]['addEventListener']('click',af=>this.#Pt(af));}[bY(0x854)](){const mR=bY;super[mR(0x854)](),this.#xs(),this.#gs(),this.#bs(),Bi['auth'][mR(0x1012)](mR(0x284),this.#at=()=>{this.#gs();});}['disconnectedCallback'](){const mS=bY;super[mS(0x7db)](),Bi[mS(0xf5c)][mS(0xee0)](mS(0x284),this.#at);}['attributeChangedCallback'](af,ag,ah){const mT=bY;ag!==ah&&mT(0x1ce)===af&&this.#xs();}['clear'](){const mU=bY;super['clear'](),this['#title-input'][mU(0xf0a)]='',this[mU(0xc0c)][mU(0x75e)](''),this[mU(0x862)][mU(0xf0a)]='',this[mU(0x862)][mU(0x75e)](''),this[mU(0xcfa)][mU(0x42a)]=!0x0;}[bY(0xbab)](){const mV=bY;let af=!0x0;return''===this['#description-textarea'][mV(0xf0a)][mV(0x963)]()&&(this[mV(0x862)][mV(0x75e)](mV(0x8d5)),this[mV(0x862)][mV(0x72c)](),af=!0x1),''===this['#title-input'][mV(0xf0a)][mV(0x963)]()&&(this[mV(0xc0c)][mV(0x75e)](mV(0x8d5)),this['#title-input'][mV(0x72c)](),af=!0x1),af;}#us(){const mW=bY;this['p']=!0x0,this['#title-input'][mW(0x75e)]('');}#ps(){const mX=bY;this['p']=!0x0,this[mX(0x862)][mX(0x75e)]('');}#ms(af){const mY=bY;this[mY(0x10bf)](new CustomEvent(mY(0xb26)));}#Pt(af){const mZ=bY;this[mZ(0x10bf)](new CustomEvent(mZ(0xf20)));}#xs(){const n0=bY;this['#heading-message'][n0(0xbd9)]=n0(0xc58)===this['type']?n0(0x9d0):n0(0xe47);}async #gs(){const n1=bY;await Bi[n1(0xf5c)][n1(0xfea)],null!==Bi[n1(0xf5c)]['userID']&&(this['#avatar'][n1(0x1ce)]=Bi[n1(0xf5c)][n1(0x1050)][n1(0x58e)]||n1(0x9ce),this[n1(0xdcd)][n1(0xf0a)]=Bi['auth'][n1(0xdc1)]);}#bs(){const n2=bY;this['#options-section'][n2(0x96e)]=n2(0xc58)===this[n2(0x1ce)];}}customElements['define'](bY(0x2fd),ws);class vs extends HTMLElement{static #C=ie` <template> <div id="items"></div> </template>
  `;static #S=se`
    :host {
      display: flex;
      align-items: center;
      width: fit-content;
      height: 32px;
      margin: 0 0 14px 0;
      contain: style layout;
      box-sizing: border-box;
    }
    :host([size="large"]) {
      height: 38px;
    }

    /* Containers */

    #items {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: inherit;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: fit-content;
      height: 100%;
      padding: 0 13px;
      position: relative;
      border-width: 1px;
      border-style: solid;
      text-decoration: none;
      color: inherit;
      font-weight: 500;
      font-size: 13px;
    }
    .item:not(:first-child) {
      margin-left: -1px;
    }
    .item:focus {
      z-index: 1;
    }

    .item .inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      box-sizing: border-box;
    }

    /* Icon */

    .item x-icon {
      width: 14px;
      height: 14px;
      color: currentColor;
    }
    .item x-icon[href="#home"] {
      width: 16px;
      height: 16px;
    }

    /* Label */

    .item x-label {
      margin-left: 6px;
    }
  `;get[bY(0x4fe)](){return this.#fs;}set[bY(0x4fe)](af){this.#fs=af,this.#A();}get['size'](){const n3=bY;let af=this[n3(0xc51)](n3(0xb2e));return[n3(0x48e),n3(0xbe0)][n3(0x1d5)](af)?af:null;}set[bY(0xb2e)](af){const n4=bY;['small','large']['includes'](af)?this[n4(0xa0a)](n4(0xb2e),af):this[n4(0x88e)]('size');}#fs='';#P;#T;constructor(){const n5=bY;super(),this.#P=this[n5(0x1017)]({'mode':'closed'}),this.#P[n5(0x48f)]=[a2[n5(0x500)],vs.#S],this.#P['append'](document[n5(0xc3b)](vs.#C[n5(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](n5(0x6e3)))this['#'+af['id']]=af;this.#P[n5(0x1012)](n5(0x894),ag=>this.#Ye(ag)),this.#P[n5(0x1012)](n5(0xff9),ag=>this.#Xe(ag));}[bY(0x854)](){const n6=bY;this.#T=si(this,n6(0xf55)),this.#A();}#Ye(af){const n7=bY;af[n7(0x779)][n7(0xc06)]('a')&&af[n7(0x539)]();}#Xe(af){const n8=bY;let ag=af[n8(0x779)][n8(0xc06)]('a');ag&&(af[n8(0x539)](),this.#T[n8(0x908)](ag[n8(0xbd9)]));}#ws(af,ag,ah,aj='',ak=''){const n9=bY;let al,am=n9(0x271)+ah+n9(0x59b)+aj+n9(0xa04)+ak+'</x-label>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';return al=null===ag?af?n9(0x4cc)+am+n9(0x888):'<div\x20class=\x22item\x22\x20part=\x22item\x22>'+am+'</div>':af?n9(0x6da)+ag+'\x22\x20data-toggled>'+am+n9(0x31a):n9(0x2b1)+ag+'\x22>'+am+'</a>',al;}#A(){const nb=bY;let af=location['pathname'],ag=this.#ws(!0x1,'/','#home',nb(0x10da));if(af[nb(0x1021)]('/')&&(af=af[nb(0xe2d)](0x0,af['length']-0x1)),af['startsWith'](nb(0xfab)))ag+=nb(0xfab)===af?this.#ws(!0x0,null,nb(0xa96),nb(0xa96)):this.#ws(!0x1,nb(0xfab),nb(0xa96),nb(0xa96))+this.#ws(!0x0,null,'#blog',nb(0x6ef),'\x20#'+Te(af[nb(0xc97)]('/')[0x2]));else{if(af[nb(0x9ae)](nb(0xda4)))ag+=this.#ws(!0x0,null,nb(0x390),'#tutorials');else{if(af[nb(0x9ae)](nb(0xdb5)))ag+=nb(0xdb5)===af?this.#ws(!0x0,null,nb(0xd74),nb(0xd74)):this.#ws(!0x1,nb(0xdb5),nb(0xd74),nb(0xd74))+this.#ws(!0x0,null,nb(0xd74),nb(0xfed),'\x20#'+Te(af[nb(0xc97)]('/')[0x2]));else{if(af['startsWith'](nb(0xc91)))ag+=nb(0xc91)===af?this.#ws(!0x0,null,'#ideas',nb(0xcbd)):this.#ws(!0x1,nb(0xc91),nb(0xcbd),'#ideas')+this.#ws(!0x0,null,nb(0xcbd),nb(0x6e9),'\x20#'+Te(af['split']('/')[0x2]));else{if(af[nb(0x9ae)]('/questions'))ag+=nb(0x466)===af?this.#ws(!0x0,null,nb(0xa43),nb(0xa43)):this.#ws(!0x1,nb(0x466),nb(0xa43),'#questions')+this.#ws(!0x0,null,nb(0xa43),nb(0x7c1),'\x20#'+Te(af[nb(0xc97)]('/')[0x2]));else{if(af[nb(0x9ae)](nb(0xbde)))ag+=this.#ws(!0x1,null,'#share',nb(0x1fd))+this.#ws(!0x0,null,nb(0xf2c),'',this[nb(0x4fe)]||nb(0xb27));else{if(af[nb(0x9ae)](nb(0xe97)))ag+=this.#ws(!0x1,null,nb(0x7fe),nb(0x935))+this.#ws(!0x0,null,nb(0x7fe),'',this[nb(0x4fe)]);else{if(af['startsWith'](nb(0x631)))ag+=this.#ws(!0x0,null,nb(0xa96),nb(0x90a));else{if(af[nb(0x9ae)](nb(0xa17)))ag+=this.#ws(!0x0,null,nb(0xad0),nb(0x89a));else{if(af[nb(0x9ae)](nb(0x48c))){if(nb(0x48c)===af)ag+=this.#ws(!0x0,null,nb(0xad0),nb(0x818));else{let ah,aj=af[nb(0xc97)]('/')[0x2];ah=aj[nb(0x1d5)](nb(0xa98))?'#legal.privacy-policy':aj[nb(0x1d5)](nb(0x1c2))?nb(0x341):aj['includes'](nb(0xb53))?nb(0x10df):aj['includes'](nb(0x10c3))?nb(0x725):nb(0x7cd)+aj,Te(),ag+=this.#ws(!0x1,'/legal',nb(0xad0),nb(0x818))+this.#ws(!0x0,null,nb(0xad0),ah);}}else af['startsWith']('/embed')?ag+=this.#ws(!0x0,null,'#foreign-object',nb(0xb06)):af[nb(0x9ae)](nb(0xf80))&&(ag+=this.#ws(!0x0,null,nb(0x545),'#search'));}}}}}}}}}this['#items'][nb(0x8c2)]=ag,this['#items']['firstElementChild'][nb(0xe87)][nb(0xc2f)](nb(0x42d)),this[nb(0xa35)]['lastElementChild'][nb(0xe87)]['add'](nb(0x473));}}void 0x0===customElements['get'](bY(0xd1e))&&customElements['define'](bY(0xd1e),vs);class ys extends HTMLElement{static [bY(0x1068)]=['value','max'];static #C=ie` <template> <div id="items"></div> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      width: 100%;
    }
    :host([hidden]) {
      display: none;
    }
    :host([max="1"]) {
      display: none;
    }

    #items {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 0 3px;
      padding: 5px 10px;
      height: 100%;
      border-width: 1px;
      border-style: solid;
      outline-offset: 0;
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      user-select: none;
      -webkit-user-select: none;
    }
    .ellipsis-item {
      background: none;
      border: none;
    }
    .item:first-child {
      margin-left: 0;
    }
    .item:last-child {
      margin-right: 0;
    }
    .ellipsis-item {
      flex: 0;
    }

    @media all and (max-width: 750px) {
      .previous-item,
      .next-item {
        display: none;
      }
    }
  `;get['value'](){const nc=bY;return this[nc(0xfd9)](nc(0xf0a))?parseInt(this[nc(0xc51)](nc(0xf0a))):0x1;}set['value'](af){const nd=bY;af=M(af,0x1,this[nd(0x689)]),this['setAttribute']('value',af);}get[bY(0x689)](){const nf=bY;return this[nf(0xfd9)](nf(0x689))?parseFloat(this['getAttribute']('max')):0x64;}set[bY(0x689)](af){const ng=bY;this[ng(0xa0a)]('max',af);}#vs=et(this.#A,0x1f4,this);#P;#T;#Yt;constructor(){super();}['connectedCallback'](){const nh=bY;if(!this.#P){this[nh(0xa0a)](nh(0x464),nh(0x208)),this[nh(0xa0a)]('aria-label',nh(0xd42)),this.#T=si(this,'#app'),this.#P=this['attachShadow']({'mode':nh(0xc5d)}),this.#P[nh(0x48f)]=[ys.#S],this.#P[nh(0x775)](document['importNode'](ys.#C[nh(0x223)],!0x0));for(let af of this.#P[nh(0x44e)](nh(0x6e3)))this['#'+af['id']]=af;this.#P[nh(0x1012)](nh(0x894),ag=>this.#Ye(ag)),this.#P[nh(0x1012)](nh(0xff9),ag=>this.#Xe(ag)),this['addEventListener']('keydown',ag=>this.#ie(ag));}this.#T[nh(0x1012)]('locationchange',this.#Yt=()=>this.#A()),this.#A();}['disconnectedCallback'](){const nj=bY;this.#T[nj(0xee0)](nj(0x828),this.#Yt);}['attributeChangedCallback'](af,ag,ah){const nk=bY;ag!==ah&&this.#P&&(nk(0xf0a)===af||'max'===af)&&this.#A();}#Ye(af){const nl=bY;af[nl(0x779)][nl(0xc06)]('a')&&af[nl(0x539)]();}#Xe(af){const nm=bY;let ag=af[nm(0x779)][nm(0xc06)]('a');ag&&(af[nm(0x539)](),this[nm(0xf0a)]=parseInt(ag['dataset']['value']),this.#T['navigate'](ag[nm(0xbd9)]));}#ie(af){const nn=bY;let ag=this[nn(0xa35)][nn(0x344)](nn(0x8e1));if(ag){let ah=[...this['#items'][nn(0x44e)]('a')],aj=ah[nn(0xc56)](ag);if(nn(0xd8f)===af['code']){let ak=ah[aj+0x1];ak&&ak['focus']();}else{if(nn(0x705)===af[nn(0x3cb)]){let al=ah[aj-0x1];al&&al[nn(0x72c)]();}}}}#A(){const np=bY;let af='',ag=null!==this[np(0xa35)][np(0x344)](np(0x8e1)),ah=aj=>{const nq=np;let ak=new URL(location[nq(0xbd9)]),al=new URLSearchParams(location[nq(0xa28)]);return 0x1===aj?al[nq(0x658)](nq(0x7c7)):al[nq(0xf62)](nq(0x7c7),aj),ak[nq(0xa28)]=al[nq(0xd23)](),ak['href'];};if(this[np(0xf0a)]>0x1&&(af+=np(0xb36)+ah(this[np(0xf0a)]-0x1)+np(0xebe)+(this[np(0xf0a)]-0x1)+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-message\x20href=\x22#page.previous\x22></x-message>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>'),this[np(0x689)]<=0xa){for(let aj=0x1;aj<=this[np(0x689)];aj+=0x1)aj===this['value']?af+=np(0x10cd)+aj+np(0x295)+aj+np(0x222):af+=np(0x863)+ah(aj)+np(0x4d3)+aj+np(0x295)+aj+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>';}else{if(this[np(0xf0a)]<=0x6){for(let ak=0x1;ak<=0x7;ak+=0x1)ak===this[np(0xf0a)]?af+=np(0x812)+ak+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+ak+np(0x3df):af+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22'+ah(ak)+np(0xfe6)+ak+np(0x2aa)+ak+np(0x492);af+=np(0xe66);for(let al of[this[np(0x689)]-0x1,this[np(0x689)]])af+=np(0x863)+ah(al)+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22'+al+np(0x295)+al+np(0x91b);}else{if(this[np(0xf0a)]>this[np(0x689)]-0x6){for(let am of[0x1,0x2])af+=np(0x863)+ah(am)+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22'+am+np(0x295)+am+np(0x91b);af+=np(0xe66);for(let an=this['max']-0x6;an<=this['max'];an+=0x1)an===this[np(0xf0a)]?af+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x20toggled-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22'+an+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+an+np(0x3df):af+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22'+ah(an)+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22'+an+np(0x2aa)+an+np(0x492);}else{for(let ap of[0x1,0x2])af+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20part=\x22item\x20page-item\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20href=\x22'+ah(ap)+np(0x4d3)+ap+np(0x295)+ap+np(0x91b);af+=np(0xe66);for(let aq=this[np(0xf0a)]-0x1;aq<this[np(0xf0a)]+0x4;aq+=0x1)aq===this[np(0xf0a)]?af+=np(0x812)+aq+np(0x2aa)+aq+np(0x3df):af+=np(0xf03)+ah(aq)+np(0xfe6)+aq+np(0x2aa)+aq+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>';af+=np(0xe66);for(let ar of[this['max']-0x1,this['max']])af+=np(0x863)+ah(ar)+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-value=\x22'+ar+np(0x295)+ar+np(0x91b);}}}if(this[np(0xf0a)]<this[np(0x689)]&&(af+=np(0x3a4)+ah(this[np(0xf0a)]+0x1)+np(0xebe)+(this[np(0xf0a)]+0x1)+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-message\x20href=\x22#page.next\x22></x-message>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>'),this[np(0xa35)][np(0x8c2)]=af,ag){for(let au of this['#items']['querySelectorAll'](np(0xddd)+this[np(0xf0a)]+'\x22]'))au[np(0x72c)]();}}}void 0x0===customElements[bY(0x10bd)]('bx-pager')&&customElements[bY(0x864)](bY(0x325),ys);class ks extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <div id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <a id="new-blog-anchor" href="/blog?dialog=new-blog"> <x-button id="new-blog-button" toggled hidden> <x-label><strong><x-message href="#new-post"></x-message></strong></x-label> </x-button> </a> </div> <bx-blogfilterblock id="filter-block"></bx-blogfilterblock> <div id="previews"></div> <div id="previews-skeleton"></div> <bx-placeholderblock id="previews-placeholder" hidden></bx-placeholderblock> <bx-pager id="pager" value="1" max="1"></bx-pager> </main> <div id="dialogs"> <dialog id="blog-dialog"> <bx-blogform id="blog-form" type="new"></bx-blogform> </dialog> </div> </template>
  `;static [bY(0x78e)]=se`#header{display:flex;width:100%}#new-blog-anchor{height:fit-content;margin-left:auto;filter:none;text-decoration:none}#new-blog-button x-label{cursor:pointer}#previews{margin-top:14px}#previews>*{margin:12px 0}#previews>:first-child{margin-top:0}#previews-skeleton>*{margin:12px 0}#previews-skeleton>:first-child{margin-top:0}#pager{margin-top:24px}#blog-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const nr=bY;let af=location[nr(0x1061)]+nr(0xfab),ag=new URLSearchParams(location['search']),ah=!0x1;for(let [aj,ak]of ag[nr(0x2b6)]()){if(!('page'===aj&&parseInt(ak)>0x1)){ah=!0x1;break;}ah=!0x0;}return ah&&(af+='?'+ag[nr(0xd23)]()),af;}#at;#Xt;#ys;#ks=null;constructor(){const nu=bY;super(),this[nu(0x3d9)]['addEventListener'](nu(0x63b),af=>this.#Cs(af)),this[nu(0x485)][nu(0x1012)](nu(0x105d),af=>this.#Ss(af)),this[nu(0xfbe)][nu(0x1012)](nu(0xf20),af=>this.#Ts(af)),this[nu(0xfbe)][nu(0x1012)]('submit',af=>this.#$s(af));{let af='';for(let ag=0x0;ag<0xa;ag+=0x1)af+=nu(0x30b);this[nu(0xf41)][nu(0x8c2)]=af;}}async['connectedCallback'](){const nv=bY;super[nv(0x854)](),Bi[nv(0xf5c)][nv(0x1012)](nv(0x284),this.#at=()=>{this.#Ps();}),a2[nv(0x1012)](nv(0x60c),this.#Xt=()=>{this.#si();}),this['o'][nv(0x1012)](nv(0x828),this.#ys=af=>{this.#ii(af);}),this.#Es(),this.#Ps(),await this.#Ls(),nv(0x598)===new URLSearchParams(location[nv(0xa28)])[nv(0x10bd)](nv(0x741))&&this.#Us(),this['u']();}[bY(0x7db)](){const nw=bY;Bi[nw(0xf5c)][nw(0xee0)](nw(0x284),this.#at),a2[nw(0xee0)](nw(0x60c),this.#Xt),this['o'][nw(0xee0)]('locationchange',this.#ys);}#si(){this['lang']!==a2['locale']&&this.#Ls();}async #ii(af){const nx=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[nx(0xdd7)];if(nx(0xfab)===ah[nx(0x98c)]){let ak=new URLSearchParams(ag?ag[nx(0xa28)]:''),al=new URLSearchParams(ah['search']),am=_i(ak,al);{let an=['search',nx(0x882),nx(0x583),nx(0x311),nx(0x9bc),nx(0x7c7)];void 0x0!==am[nx(0x81c)](ap=>an[nx(0x1d5)](ap))&&(nx(0xc68)!==aj&&nx(0xf0c)!==aj||this['o'][nx(0x2da)](),this.#Es(),await this.#Ls(),nx(0x3ff)===aj&&this['o'][nx(0xb16)]());}if(am['includes']('dialog')){let ap=ak[nx(0x10bd)]('dialog'),aq=al[nx(0x10bd)](nx(0x741));null===aq?'new-blog'===ap&&this[nx(0x485)][nx(0x225)]():nx(0x598)===aq&&this.#Us();}}}#Cs(af){const ny=bY;let ag=new URL(location['href']),ah=new URLSearchParams(location['search']);ah[ny(0x658)](ny(0x7c7)),''===this[ny(0x3d9)][ny(0xa28)]?ah[ny(0x658)](ny(0xa28)):ah[ny(0xf62)](ny(0xa28),this[ny(0x3d9)][ny(0xa28)]),null===this[ny(0x3d9)][ny(0x3b8)]?ah[ny(0x658)](ny(0x882)):ah[ny(0xf62)](ny(0x882),this[ny(0x3d9)][ny(0x3b8)]),null===this[ny(0x3d9)][ny(0x7dd)]?ah[ny(0x658)]('created-by'):ah[ny(0xf62)]('created-by',this[ny(0x3d9)][ny(0x7dd)]),ny(0xa28)===af['detail']&&''!==this[ny(0x3d9)][ny(0xa28)][ny(0x963)]()?ah[ny(0xf62)]('sort',ny(0x601)):ny(0xebd)===this[ny(0x3d9)][ny(0x311)]?ah[ny(0x658)](ny(0x311)):ny(0xe41)===this[ny(0x3d9)]['sort']?ah[ny(0xf62)](ny(0x311),ny(0xa13)):ny(0x1037)===this['#filter-block']['sort']?ah[ny(0xf62)](ny(0x311),ny(0x9b2)):ny(0xadd)===this[ny(0x3d9)][ny(0x311)]?ah[ny(0xf62)](ny(0x311),ny(0x251)):ny(0x243)===this['#filter-block'][ny(0x311)]?ah['set'](ny(0x311),'comments'):ny(0x1044)===this[ny(0x3d9)][ny(0x311)]?ah[ny(0xf62)]('sort',ny(0xa80)):'relevance'===this[ny(0x3d9)][ny(0x311)]&&ah[ny(0xf62)](ny(0x311),ny(0x601)),null===this[ny(0x3d9)][ny(0x9bc)]?ah[ny(0x658)](ny(0x9bc)):ah[ny(0xf62)](ny(0x9bc),this['#filter-block'][ny(0x9bc)]),ag[ny(0xa28)]=ah[ny(0xd23)](),this['o']['navigate'](ag[ny(0xbd9)]);}async #$s(){const nz=bY;if(!0x0===this[nz(0xfbe)][nz(0xbab)]()){let af=await Xe(),ag=[],ah=null,aj=null,ak={'type':nz(0x3fa),'title':this['#blog-form'][nz(0x37a)],'description':this['#blog-form'][nz(0xe24)],'attachments':{},'watchThread':this[nz(0xfbe)][nz(0xafd)]};null!==af&&(ak[nz(0xd88)]=af),this[nz(0xfbe)][nz(0x92d)]=!0x0;for(let al of this[nz(0xfbe)][nz(0x35a)]){let am=await(await fetch(al))[nz(0x105a)](),an=Kt(0x1e)+'.'+we(am[nz(0x1ce)]),ap=Bi[nz(0xa0e)]['uploadFile'](nz(0x3a3)+an,am);ak[nz(0x35a)][al]=an,ag[nz(0xc68)](ap);}try{await Promise[nz(0x3b9)](ag),ah=await Bi[nz(0xfb8)][nz(0x6ba)](nz(0xa75),ak);}catch(aq){aj=aq;}if(null===aj){let ar=ah[nz(0x3ab)],au=ar['split']('-')[0x1];await Bi[nz(0xa1a)][nz(0x691)](ar,a2[nz(0x962)]),this[nz(0xfbe)][nz(0x92d)]=!0x1,this['#blog-dialog'][nz(0x225)](),this['o'][nz(0x908)](nz(0x7d9)+au);}else this[nz(0x485)][nz(0x96e)]=!0x0,this[nz(0xfbe)]['throbber']=!0x1,await this['o']['openMessageDialog']({'title':{'href':nz(0x8bc)},'detail':bi(aj),'buttons':[{'href':'#back-to-form'}]}),this[nz(0x485)][nz(0x96e)]=!0x1;}}#Ts(){const nA=bY;this['o'][nA(0x908)](qi(location['href'],nA(0x741),null));}#Ss(){const nB=bY;this['o'][nB(0x908)](qi(location[nB(0xbd9)],'dialog',null));}async #Us(){const nC=bY;await this[nC(0xfea)],await Bi[nC(0xf5c)]['whenReady'],null===Bi[nC(0xf5c)][nC(0xdc1)]?this['o'][nC(0x908)](qi(location[nC(0xbd9)],nC(0x741),nC(0xb28)),!0x0):!0x1===Bi['auth'][nC(0x1009)]?this['o'][nC(0x249)]():(this[nC(0xfbe)][nC(0xc2a)](),this[nC(0xfbe)][nC(0x92d)]=!0x1,this[nC(0x485)][nC(0x96e)]=!0x1,this[nC(0x485)][nC(0xd44)]());}#Es(){const nD=bY;let af=new URLSearchParams(location['search']),ag=af[nD(0x10bd)](nD(0x311));this[nD(0x3d9)][nD(0xa28)]=af['get'](nD(0xa28))||'',this[nD(0x3d9)][nD(0x3b8)]=af['get'](nD(0x882))||null,this[nD(0x3d9)][nD(0x7dd)]=af['get'](nD(0x583))||null,this[nD(0x3d9)]['tag']=af[nD(0x10bd)](nD(0x9bc))||null,this[nD(0x3d9)][nD(0x311)]=nD(0x601)===ag?nD(0x601):nD(0xad4)===ag?nD(0xebd):'created-asc'===ag?nD(0xe41):nD(0x9b2)===ag?'threadUpdatedTime:desc':nD(0x251)===ag?nD(0xadd):nD(0x72e)===ag?nD(0x243):'comments-asc'===ag?nD(0x1044):nD(0xebd);}#Ps(){const nE=bY;let af=null!==Bi[nE(0xf5c)][nE(0xdc1)],ag=Bi[nE(0xf5c)][nE(0xa55)];this[nE(0xc90)][nE(0x96e)]=!0x1===af||!0x1===ag;}async #Ls(){return this.#ks&&await this.#ks,this.#ks=new Promise(async af=>{const nF=a1;let ag=new URLSearchParams(location[nF(0xa28)]),ah={'query':this[nF(0x3d9)][nF(0xa28)],'locale':a2[nF(0x962)],'type':'blog','sort':this[nF(0x3d9)][nF(0x311)],'page':parseInt(ag[nF(0x10bd)]('page')||'1'),'perPage':0xa,'preview':!0x0};{let {tag:al,createdBy:am,watchedBy:an}=this[nF(0x3d9)];null!==al&&(ah[nF(0x9bc)]=al),null===am&&null===an||(await Bi['auth'][nF(0xfea)],null!==Bi[nF(0xf5c)][nF(0xdc1)]&&(null!==am&&(ah[nF(0xbaf)]=am),null!==an&&(ah['watchedBy']=an)));}this[nF(0x552)]=ah[nF(0x962)],this['#new-blog-anchor'][nF(0xbd9)]=qi(location[nF(0xbd9)],nF(0x741),nF(0x598)),this[nF(0xd45)][nF(0x8c2)]='',this[nF(0x906)][nF(0x96e)]=!0x0,this[nF(0x906)][nF(0x37a)]='#no-results',this['#previews-placeholder'][nF(0xe24)]=nF(0x217),this[nF(0xf41)]['hidden']=!0x1;let [aj,ak]=await Bi[nF(0xa1a)]['searchThreads'](ah);this[nF(0x93d)][nF(0x689)]=ak,this[nF(0x93d)][nF(0xf0a)]=ah[nF(0x7c7)],CSS[nF(0x101d)]&&CSS[nF(0x101d)][nF(0xc2a)]();for(let ap of aj){let aq=document[nF(0x840)]('x-card'),ar=document['createElement'](nF(0xb94));nF(0xebd)===ah[nF(0x311)]||nF(0xe41)===ah['sort']?ar[nF(0xa0a)](nF(0xa7f),nF(0x49d)):nF(0x1037)===ah[nF(0x311)]||nF(0xadd)===ah[nF(0x311)]?ar[nF(0xa0a)]('details',nF(0x76d)):('commentsCount:desc'===ah['sort']||nF(0x1044)===ah[nF(0x311)]||nF(0x601)===ah[nF(0x311)])&&ar[nF(0xa0a)]('details',nF(0x49d)),ar['id']=ap['id'],ar[nF(0x3ab)]=ap,aq[nF(0x775)](ar),this[nF(0xd45)]['append'](aq);}this[nF(0x906)][nF(0x96e)]=this[nF(0xd45)]['childElementCount']>0x0,this['#previews-skeleton'][nF(0x96e)]=!0x0;{let au=this['o']['oldLocation'];if(au?.[nF(0x98c)][nF(0x9ae)]('/blog/')){let av=nF(0xbae)+au[nF(0x98c)]['split']('/')[0x2],aw=this[nF(0xd45)][nF(0x344)](nF(0xc0d)+av+'\x22]');aw&&aw[nF(0x109f)]();}}this.#ks=null,af();});}}customElements['define'](bY(0x3bb),ks);class Cs extends HTMLElement{static [bY(0x1068)]=[bY(0x98b),bY(0x3e9)];static #C=ie` <template> <main> <x-button id="user-agent-button" skin="flat" size="small" hidden> <x-icon id="user-agent-icon"></x-icon> <x-tooltip id="user-agent-tooltip"></x-tooltip> </x-button> <x-button id="staff-button" skin="flat" size="small"> <x-icon id="staff-icon" href="#boxy-svg-small"></x-icon> <x-tooltip id="staff-tooltip"><x-message href="#staff-member"></x-message></x-tooltip> </x-button> </main> </template>
  `;static #S=se`
    :host {
      display: block;
    }

    main {
      display: flex;
      gap: 5px;
      justify-content: space-evenly;
    }

    #user-agent-icon {
      width: 20px;
      height: 20px;
    }
  `;get[bY(0xd88)](){const nG=bY;return this['getAttribute'](nG(0x98b));}set['userAgent'](af){const nH=bY;af?this[nH(0xa0a)](nH(0x98b),af):this[nH(0x88e)](nH(0x98b));}get[bY(0x3e9)](){const nI=bY;return this[nI(0xfd9)](nI(0x3e9));}set['staff'](af){const nJ=bY;af?this[nJ(0xa0a)]('staff',''):this[nJ(0x88e)]('staff');}get[bY(0x7e9)](){const nK=bY;return this[nK(0xfd9)](nK(0x7e9));}#Ds=null;#zs=!0x1;#P;constructor(){const nL=bY;super(),this.#P=this[nL(0x1017)]({'mode':nL(0xc5d)}),this.#P[nL(0x48f)]=[a2[nL(0x500)],Cs.#S],this.#P[nL(0x775)](document[nL(0xc3b)](Cs.#C['content'],!0x0));for(let af of this.#P[nL(0x44e)]('[id]'))this['#'+af['id']]=af;}[bY(0x854)](){this.#A();}[bY(0x83b)](af,ag,ah){const nM=bY;ag!==ah&&this.#P&&(nM(0x98b)===af?this['isConnected']&&this.#Ms():nM(0x3e9)===af&&this[nM(0xc8b)]&&this.#As());}#A(){this.#Ms(),this.#As();}#Ms(){const nN=bY;if(this[nN(0xd88)]){let [af,ag]=this[nN(0xd88)][nN(0xc97)](';\x20'),[ah,aj]=af['split']('/');this[nN(0x8e4)][nN(0x96e)]=!0x1,this[nN(0x557)]['href']=nN(0x37f)+ah['toLowerCase']();let ak='<strong>'+ah+nN(0xd15);if(void 0x0!==aj&&(ak+='\x20'+aj),ak+='',ag){let [al,am]=ag[nN(0xc97)]('/');ak+=nN(0x4ba)+al+'</strong>',void 0x0!==am&&(ak+='\x20'+am);}this['#user-agent-tooltip'][nN(0x8c2)]=ak;}else this[nN(0x8e4)][nN(0x96e)]=!0x0;this.#Bs();}#As(){const nO=bY;this[nO(0xb25)]['hidden']=!0x1===this[nO(0x3e9)],this.#Bs();}#Bs(){const nP=bY;null===this['userAgent']&&!0x1===this['staff']?this[nP(0xa0a)]('empty',''):this[nP(0x88e)](nP(0x7e9));}}void 0x0===customElements['get']('bx-userbadges')&&customElements[bY(0x864)]('bx-userbadges',Cs);class Ss extends HTMLElement{static [bY(0x1068)]=['condensed','threaded','editable',bY(0x97b),bY(0xfbc)];static #C=ie` <template> <div id="sidebar"> <a id="author-avatar-anchor"> <bx-avatar id="author-avatar"></bx-avatar> </a> <bx-userbadges id="author-badges"></bx-userbadges> </div> <header id="header" part="header"> <section id="header-left-column"> <span id="wrote-span"> <a id="wrote-author-anchor"></a> <x-message id="wrote-date-message"></x-message> </span> <span id="thread-title-span" hidden> <a id="thread-title-anchor"></a> </span> </section> <section id="header-right-column"> <x-button id="translate-button" togglable> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <x-button id="menu-button"> <x-icon href="#hamburger-menu"></x-icon> <x-menu> <x-menuitem id="edit-menu-item" hidden> <x-icon href="#edit"></x-icon> <x-label><x-message href="#edit--verb"></x-message></x-label> </x-menuitem> <x-menuitem id="decrease-indent-menu-item" hidden> <x-icon href="#decrease-indent"></x-icon> <x-label><x-message href="#decrease-indent"></x-message></x-label> </x-menuitem> <x-menuitem id="delete-menu-item" hidden> <x-icon href="#trash"></x-icon> <x-label><x-message href="#delete"></x-message></x-label> </x-menuitem> <hr id="menu-separator" hidden> <x-menuitem id="reply-menu-item" hidden> <x-icon href="#comment-outline"></x-icon> <x-label><x-message href="#reply"></x-message></x-label> </x-menuitem> <x-menuitem id="link-menu-item"> <x-icon href="#link"></x-icon> <x-label><x-message href="#copy-link"></x-message></x-label> </x-menuitem> </x-menu> </x-button> </section> </header> <main id="main" part="main"> <article id="article"></article> <div id="skeleton-items"></div> </main> <slot></slot> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      margin: 24px 0 24px 70px;
    }
    :host([condensed]) {
      margin-left: 0px;
    }

    /**
     * Sidebar
     */

    #sidebar {
      left: -68px;
      position: absolute;
    }

    /* Author avatar */

    #author-avatar-anchor {
      display: block;
      filter: none;
    }

    #author-avatar {
      width: 54px;
      height: 54px;
    }

    /* Author badges */

    #author-badges {
      margin-top: 4px;
    }

    /**
     * Header
     */

    #header {
      display: flex;
      align-items: center;
      height: 40px;
      box-sizing: border-box;
      padding: 5px 17px;
      border-width: 1px;
      border-style: solid;
      font-size: 14.5px;
    }

    #header-left-column {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    :host([skeleton]) #header-left-column {
      visibility: hidden;
    }

    #header-right-column {
      display: flex;
      margin-left: auto;
      align-items: center;
    }
    :host([skeleton]) #header-right-column {
      visibility: hidden;
    }

    /* Author name */

    #wrote-author-anchor {
      color: inherit;
      text-decoration: none;
      font-weight: 700;
    }
    #wrote-author-anchor:hover {
      text-decoration: underline;
    }

    /* Thread title */

    #thread-title-span {
      border-left: 1.5px solid var(--text-color);
      padding-left: 10px;
      margin-left: 6px;
    }

    #thread-title-anchor {
      font-weight: 700;
      color: inherit;
      text-decoration: none;
    }
    #thread-title-anchor:hover {
      text-decoration: underline;
    }

    /* "Translate" button */

    #translate-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    /* Menu button */

    #menu-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #menu-button::part(arrow) {
      display: none;
    }

    #menu-button > x-icon {
      width: 15px;
      height: 15px;
    }

    #menu-button > x-menu {
      --align: end;
    }

    /**
     * Main
     */

    #main {
      padding: 12px 20px;
      border-width: 1px;
      border-style: solid;
      border-top: none;
    }

    :host([skeleton]) #main #article {
      display: none;
    }

    #main #skeleton-items {
      display: none;
    }
    :host([skeleton]) #main #skeleton-items {
      display: block;
    }

    #main #skeleton-items > div {
      height: 17px;
    }
    #main #skeleton-items div + div {
      margin-top: 10px;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){const nQ=bY;this.#Ui=af,this[nQ(0xc8b)]&&this.#A();}get[bY(0x7d2)](){const nR=bY;return this[nR(0xfd9)](nR(0x7d2));}set['condensed'](af){const nS=bY;!0x0===af?this[nS(0xa0a)](nS(0x7d2),''):this[nS(0x88e)](nS(0x7d2));}get[bY(0x36f)](){const nT=bY;return this[nT(0xfd9)](nT(0x36f));}set[bY(0x36f)](af){const nU=bY;!0x0===af?this[nU(0xa0a)](nU(0x36f),''):this[nU(0x88e)]('threaded');}get[bY(0x387)](){const nV=bY;return this[nV(0xfd9)](nV(0x387));}set['editable'](af){const nW=bY;!0x0===af?this[nW(0xa0a)](nW(0x387),''):this[nW(0x88e)]('editable');}get[bY(0x97b)](){const nX=bY;return this[nX(0xfd9)]('indentable');}set['indentable'](af){const nY=bY;!0x0===af?this[nY(0xa0a)](nY(0x97b),''):this[nY(0x88e)](nY(0x97b));}get[bY(0xfbc)](){const nZ=bY;return this['hasAttribute'](nZ(0xfbc));}set[bY(0xfbc)](af){const o0=bY;!0x0===af?this['setAttribute'](o0(0xfbc),''):this['removeAttribute'](o0(0xfbc));}get[bY(0xb09)](){const o1=bY;return this[o1(0xfd9)](o1(0xb09));}set[bY(0xb09)](af){const o2=bY;af?this[o2(0xa0a)]('skeleton',''):this[o2(0x88e)](o2(0xb09));}#P;#T;#Ui=null;constructor(){const o3=bY;super(),this.#P=this[o3(0x1017)]({'mode':o3(0xc5d)}),this.#P['adoptedStyleSheets']=[a2[o3(0x500)],Ss.#S],this.#P[o3(0x775)](document['importNode'](Ss.#C['content'],!0x0));for(let af of this.#P['querySelectorAll'](o3(0x6e3)))this['#'+af['id']]=af;this.#P[o3(0x1012)]('click',ag=>this.#Rs(ag)),this[o3(0xfa3)][o3(0x1012)](o3(0x807),()=>this.#Di()),this[o3(0x279)][o3(0x1012)](o3(0xff9),()=>this.#Is()),this[o3(0xbdb)][o3(0x1012)](o3(0xff9),()=>this.#Fs()),this[o3(0xabb)]['addEventListener'](o3(0xff9),()=>this.#Ns()),this[o3(0xb63)]['addEventListener'](o3(0xff9),()=>this.#Os()),this[o3(0x74e)][o3(0x1012)]('click',()=>this.#_s());{let ag='';for(let ah=0x0;ah<Ht(0x1,0x4);ah+=0x1)ag+=o3(0x411)+Ht(0x28,0x64)+o3(0x22f);this[o3(0x80f)][o3(0x8c2)]=ag;}}[bY(0x854)](){const o4=bY;this.#T=si(this,'#app'),this.#A(),this[o4(0xbdb)][o4(0x6a2)]=0x0===this.#qs()['length'];}[bY(0x83b)](af,ag,ah){const o5=bY;ag!==ah&&(o5(0x7d2)===af?this.#js():o5(0x36f)===af?this.#Vs():'editable'===af?this.#Gs():o5(0x97b)===af?this.#Hs():o5(0xfbc)===af&&this.#Ws());}#js(){const o6=bY;this[o6(0x871)]['hidden']=!0x0===this['condensed'],this[o6(0x281)][o6(0x96e)]=!0x1===this[o6(0x7d2)],this[o6(0x624)][o6(0x96e)]=!0x0===this[o6(0x7d2)];}#Vs(){const o7=bY;this['#reply-menu-item'][o7(0x96e)]=!0x1===this[o7(0x36f)];}#Gs(){const o8=bY;this[o8(0x279)][o8(0x96e)]=!0x1===this['editable'],this['#menu-separator']['hidden']=!this[o8(0x387)]&&!this['indentable']&&!this[o8(0xfbc)];}#Hs(){const o9=bY;this[o9(0xbdb)][o9(0x96e)]=!0x1===this[o9(0x97b)],this['#menu-separator'][o9(0x96e)]=!this[o9(0x387)]&&!this['indentable']&&!this[o9(0xfbc)];}#Ws(){const ob=bY;this[ob(0xabb)]['hidden']=!0x1===this[ob(0xfbc)],this['#menu-separator']['hidden']=!this[ob(0x387)]&&!this[ob(0x97b)]&&!this[ob(0xfbc)];}#Rs(af){const oc=bY;af['target']['closest']('a')?this.#Ks(af):oc(0xd4d)===af['target']['localName']&&this.#pi(af);}#Ks(af){const od=bY;let ag=af[od(0x779)][od(0xc06)]('a');ag['origin']===location[od(0x1061)]&&(ag['pathname'][od(0x9ae)]('/blog')||ag[od(0x98c)][od(0x9ae)]('/bugs')||ag[od(0x98c)][od(0x9ae)](od(0xc91))||ag[od(0x98c)][od(0x9ae)](od(0x466))||ag['pathname'][od(0x9ae)](od(0xe97)))&&(af[od(0x539)](),this.#T[od(0x908)](ag[od(0xbd9)]));}#pi(af){const of=bY;this.#T[of(0x242)]['showModal'](af[of(0x779)]);}async #Di(){const og=bY;let af=this['#translate-button'][og(0x42a)]?a2[og(0x962)]:this.#Ui['srcLocale'];He[og(0x1d5)](af)?this.#Ui=await Bi[og(0xa1a)][og(0x909)](this.#Ui['id'],af):this.#Ui=await Bi['database'][og(0xd1f)](og(0xb29),this.#Ui['id']),this.#A();}async #Is(){const oh=bY;let af=new URL(location['href']),ag=new URLSearchParams(location[oh(0xa28)]);ag['set'](oh(0x741),oh(0x82b)+this[oh(0x3ab)]['id']),af[oh(0xa28)]=ag[oh(0xd23)](),await it(0x190),this.#T[oh(0x908)](af[oh(0xd23)]());}#Fs(){const oj=bY;if(oj(0xeaa)===this[oj(0x659)]['localName']){let af=this[oj(0x3ab)]['id'],ag=this[oj(0x659)][oj(0x3ab)]['parentID'],ah=[...this[oj(0x659)]['parentElement'][oj(0x573)]]['filter'](aj=>aj['data'][oj(0x10b6)]<this[oj(0x3ab)][oj(0x10b6)]);ah['length']>0x0?ah['at'](-0x1)[oj(0xf85)](this):this['parentElement'][oj(0xf85)](this),Bi[oj(0xfb8)]['postMessage'](oj(0xf7f),{'id':af,'parentID':ag});}}async #Ns(){const ok=bY;let af=new URL(location[ok(0xbd9)]),ag=new URLSearchParams(location[ok(0xa28)]);ag['set']('dialog',ok(0x9d4)+this[ok(0x3ab)]['id']),af['search']=ag['toString'](),await it(0x190),this.#T[ok(0x908)](af['toString']());}async #Os(){const ol=bY;let af=new URL(location['href']),ag=new URLSearchParams(location[ol(0xa28)]);ag[ol(0xf62)]('dialog',ol(0x93a)+this['data']['id']),af[ol(0xa28)]=ag[ol(0xd23)](),await it(0x190),this.#T[ol(0x908)](af[ol(0xd23)]());}async #_s(){const om=bY;let af=new URL(location[om(0xbd9)]);af[om(0xf3e)]=this[om(0x3ab)]['id'],navigator[om(0xb7b)][om(0xed0)](af[om(0xd23)]()),this.#T[om(0x2b4)]('Copied\x20comment\x20link\x20to\x20clipboard.');}#qs(){const on=bY;let af=[];for(let ag=this[on(0x659)];ag&&on(0xeaa)===ag[on(0xa31)];ag=ag[on(0x659)])af[on(0xc68)](ag);return af;}#A(){const op=bY;let af=this.#Ui;if(!this[op(0xb09)]){this['#author-avatar-anchor'][op(0xbd9)]='/profiles/'+af[op(0xbaf)]+'/'+$e(af['authorName']),this[op(0x87c)][op(0x1ce)]=af[op(0x911)]||op(0x9ce),this[op(0x87c)][op(0xf0a)]=af[op(0xbaf)],this[op(0x7de)][op(0xd88)]=af[op(0xee1)],this[op(0x7de)]['staff']=op(0x70e)===af['authorID'];{let ag=af[op(0x600)][op(0xc97)]('-')[0x1],ah=af['id'][op(0xc97)]('-')[0x1],aj='blog'===af[op(0x70f)]?af['threadType']:af[op(0x70f)]+'s',{createdTime:ak}=af;this['#wrote-author-anchor'][op(0xbd9)]=op(0x1c8)+af['authorID']+'/'+$e(af[op(0xb8f)]),this[op(0x566)][op(0xad6)]=af[op(0xb8f)],this['#wrote-date-message'][op(0xa0a)](op(0xbd9),'#date-wrote'),this[op(0x7b4)][op(0xa0a)](op(0xa32),op(0x1eb)+ak+'}'),this[op(0x665)][op(0x8c2)]=''+af[op(0x2d2)],this[op(0x665)][op(0xbd9)]='/'+aj+'/'+ag+'/'+af[op(0xa4b)]+'#comment-'+ah,af['locale']===af[op(0xb73)]&&af[op(0x962)]===a2[op(0x962)]?this['#translate-button'][op(0x96e)]=!0x0:(this[op(0xfa3)]['hidden']=!0x1,this[op(0xfa3)]['toggled']=af[op(0x962)]===a2[op(0x962)],this['#src-locale-message'][op(0xbd9)]=op(0x627)+(af['srcLocale']||af['locale']||'en'),this['#locale-message'][op(0xbd9)]=op(0x627)+a2[op(0x962)]);}{let al=Te(af['description'],!0x0);for(let am of al[op(0x44e)](op(0xd4d)))am[op(0xa0a)](op(0xe3b),'lazy');this[op(0x77c)][op(0x8c2)]='',this[op(0x77c)][op(0x775)](al),this[op(0x77c)][op(0x552)]=af['locale'];for(let an of this[op(0x77c)][op(0x44e)]('code'))an[op(0xfd9)](op(0x105c))&&(an[op(0x8c2)]=ds(an['textContent'],an[op(0xc51)]('data-language')));if(CSS[op(0x101d)]&&af['keywords']){let ap=ai(af[op(0xdf4)],[this[op(0x77c)]]),aq=CSS[op(0x101d)][op(0x10bd)](op(0xaef))||new Highlight();for(let ar of ap)aq[op(0xc2f)](ar);CSS['highlights'][op(0xf62)](op(0xaef),aq);}Bi[op(0xf5c)][op(0xfea)][op(0x270)](()=>{const oq=op;if(Bi[oq(0xf5c)][oq(0xa55)]){for(let au of this['#article'][oq(0x44e)](oq(0xd4d)))Bi['storage'][oq(0x54e)](au[oq(0xe44)])[oq(0x270)](av=>{const or=oq;let aw=fe(av[or(0xb2e)]);au[or(0xa0a)]('data-file-size',aw);});}});}}}}customElements[bY(0x864)]('bx-commentblock',Ss);class Ts extends HTMLElement{static ['_shadowStyleSheet']=se`:host{display:block;width:300px;overflow:auto}h3:first-child{margin-top:0}section{padding:12px 14px}`;#P;constructor(){const ou=bY;super(),this.#P=this[ou(0x1017)]({'mode':ou(0xc5d)}),this.#P[ou(0x775)](document[ou(0xc3b)](this[ou(0xf7c)][ou(0x2a2)]['content'],!0x0)),this.#P[ou(0x48f)]=[a2[ou(0x500)],Ts['_shadowStyleSheet'],this[ou(0xf7c)][ou(0x78e)]];for(let af of this.#P[ou(0x44e)]('[id]'))this['#'+af['id']]=af;this[ou(0xa0a)](ou(0xd77),'bx-postsettings');}}class $s extends Ts{static ['_shadowTemplate']=ie` <template> <section id="actions-section"> <h3><x-message href="#actions" autocapitalize></x-message></h3> <x-buttons id="action-buttons"> <x-button id="edit-button" condensed> <x-icon href="#edit"></x-icon> <x-label><x-message href="#edit--verb" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="delete-button" condensed> <x-icon href="#trash"></x-icon> <x-label><x-message href="#delete" autocapitalize ellipsis></x-message></x-label> </x-button> </x-buttons> </section> <hr> <section id="tags-section"> <h3><x-message href="#tags" autocapitalize></x-message></h3> <x-tagsinput id="tags-input"></x-tagsinput> </section> </template>
  `;static [bY(0x78e)]=se`#action-buttons{width:100%}#action-buttons x-button{flex:1}`;get[bY(0xadc)](){const ov=bY;return this['#tags-input'][ov(0xf0a)];}set[bY(0xadc)](af){const ow=bY;let ag='';for(let ah of af){if(ah[ow(0x1d5)](':')){let [aj,ak]=ah['split'](':')[ow(0x8fb)](al=>al[ow(0x963)]());ag+=ow(0x8f5)+ah+ow(0x7df)+aj+ow(0xe8e)+ak+ow(0x5a7);}else ag+=ow(0x8f5)+ah+ow(0xe36)+ah+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';this[ow(0xcc6)][ow(0x8c2)]=ag;}}constructor(){const ox=bY;super(),this[ox(0xcf8)][ox(0x1012)](ox(0xff9),()=>this.#Zs()),this['#delete-button'][ox(0x1012)](ox(0xff9),()=>this.#Ys()),this['#tags-input'][ox(0x1012)](ox(0x63b),()=>this.#Xs());}#Zs(){const oy=bY;this[oy(0x10bf)](new CustomEvent(oy(0x34d),{'detail':'edit'}));}#Ys(){const oz=bY;this[oz(0x10bf)](new CustomEvent(oz(0x34d),{'detail':oz(0x658)}));}#Xs(){const oA=bY;this[oA(0x10bf)](new CustomEvent(oA(0x956)));}}customElements[bY(0x864)](bY(0x100c),$s);class Ps extends HTMLElement{static [bY(0x1068)]=[bY(0x7d2)];static #C=ie` <template> <header id="header" part="header"> <div id="header-left-column"> <a id="author-avatar-anchor"> <bx-avatar id="author-avatar"></bx-avatar> </a> <bx-userbadges id="author-badges"></bx-userbadges> <a id="author-anchor"></a> <span id="wrote-span"></span> <a id="thread-anchor" hidden></a> </div> <div id="header-right-column"> <x-button id="translate-button" togglable> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <x-box id="actions-box"> <x-button id="watch-button"> <x-icon href="#watch"></x-icon> <x-tooltip><x-message href="#watch"></x-message></x-tooltip> </x-button> <x-button id="edit-button" hidden> <x-icon href="#edit"></x-icon> </x-button> <x-button id="settings-button" hidden> <x-icon href="#hamburger-menu"></x-icon> <x-popover id="settings-popover" modal> <bx-blogsettings id="settings"></bx-blogsettings> </x-popover> </x-button> </x-box> </div> </header> <main id="main" part="main"> <article id="article"> <h2 id="title"> <span id="title-span"></span> <span id="hashtag-span" part="hashtag"></span> </h2> <div id="tags"></div> <img id="banner-image" width="700" height="400"> <section id="description"></section> </article> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      margin: 8px 0;
    }

    /**
     * Header
     */

    #header {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      border-width: 1px;
      border-style: solid;
      font-size: 14.5px;
    }

    #header-left-column {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #header-right-column {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    /* Avatar */

    #author-avatar-anchor {
      display: inline-block;
      vertical-align: middle;
    }
    #author-avatar-anchor[hidden] {
      display: none;
    }

    /* Author badges */

    #author-badges {
      display: inline-block;
      vertical-align: middle;
      margin-left: 2px;
    }
    #author-badges[hidden],
    #author-badges[empty] {
      display: none;
    }

    /* Author name */

    #author-anchor {
      font-weight: 700;
      line-height: 31px;
      margin-left: 2px;
      text-decoration: none;
      color: inherit;
    }
    #author-anchor:hover {
      text-decoration: underline;
    }

    /* Thread anchor */

    #thread-anchor {
      font-weight: 700;
      border-left: 1.5px solid var(--text-color);
      padding-left: 10px;
      margin-left: 6px;
      color: inherit;
      text-decoration: none;
    }
    #thread-anchor:hover {
      text-decoration: underline;
    }

    /* "Translate" button */

    #translate-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    /* "Watch" button */

    #watch-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #watch-button x-icon {
      margin: 0;
    }

    /* "Edit" button */

    #edit-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #edit-button x-icon {
      margin: 0;
      width: 14px;
      height: 14px;
    }

    /* "Settings" button */

    #settings-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #settings-button::part(arrow) {
      display: none;
    }

    #settings-button > x-icon {
      width: 15px;
      height: 15px;
    }

    /**
     * Main
     */

    #main {
      padding: 22px 24px;
      border-width: 1px;
      border-style: solid;
      border-top: none;
    }
    :host([condensed]) #main {
      padding: 10px 18px;
    }

    /* Title */

    #title {
      margin: 0;
    }

    #title #hashtag-span {
      font-size: 20px;
      vertical-align: middle;
      text-transform: lowercase;
    }

    /* Tags */

    #tags {
      display: flex;
      margin-top: 5px;
    }
    #tags:empty,
    #tags[hidden] {
      display: none;
    }

    #tags a {
      display: flex;
      margin: 0 0 0 6px;
      text-decoration: none;
    }
    #tags a:first-child {
      margin-left: 0;
    }
    #tags a:active {
      outline: none;
    }

    /* Description */

    #description {
      margin-top: 20px;
    }
    #title[hidden] + #tags[hidden] + #description {
      margin-top: 0;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){this.#Ui=af,this['isConnected']&&this.#A();}get[bY(0x7d2)](){const oB=bY;return this[oB(0xfd9)](oB(0x7d2));}set['condensed'](af){const oC=bY;!0x0===af?this[oC(0xa0a)](oC(0x7d2),''):this[oC(0x88e)]('condensed');}#T;#P;#Gt;#Ui=null;constructor(){const oD=bY;super(),this.#P=this[oD(0x1017)]({'mode':oD(0xc5d)}),this.#P[oD(0x48f)]=[a2[oD(0x500)],Ps.#S],this.#P['append'](document['importNode'](Ps.#C['content'],!0x0));for(let af of this.#P['querySelectorAll'](oD(0x6e3)))this['#'+af['id']]=af;this.#P[oD(0x1012)]('click',ag=>this.#Rs(ag)),this[oD(0xfa3)]['addEventListener'](oD(0x807),()=>this.#Di()),this['#watch-button'][oD(0x1012)]('click',()=>this.#Js()),this['#edit-button'][oD(0x1012)](oD(0xff9),()=>this.#Zs()),this[oD(0xf1b)][oD(0x1012)](oD(0x34d),ag=>this.#Qs(ag)),this['#settings']['addEventListener'](oD(0x956),()=>this.#ea());}['connectedCallback'](){const oE=bY;this.#T=si(this,oE(0xf55)),Bi['auth']['addEventListener'](oE(0xecc),this.#Gt=()=>{this.#A();}),this.#A();}[bY(0x7db)](){const oF=bY;Bi[oF(0xf5c)][oF(0xee0)]('userprofilechange',this.#Gt);}[bY(0x83b)](af,ag,ah){const oG=bY;ag!==ah&&oG(0x7d2)===af&&this.#js();}#js(){const oH=bY;this[oH(0xb91)][oH(0x96e)]=!0x0===this['condensed'],this[oH(0xcad)][oH(0x96e)]=!0x0===this['condensed'],this[oH(0x7de)]['hidden']=!0x0===this[oH(0x7d2)],this['#hashtag-span'][oH(0x96e)]=!0x0===this[oH(0x7d2)],this[oH(0x8f2)][oH(0x96e)]=!0x1===this[oH(0x7d2)],this[oH(0x5bb)][oH(0x96e)]=!0x0===this[oH(0x7d2)],this[oH(0x7cb)][oH(0x96e)]=!0x0===this[oH(0x7d2)];}#Rs(af){const oI=bY;af[oI(0x779)][oI(0xc06)]('a')?this.#Ks(af):oI(0xd4d)===af['target']['localName']&&this.#pi(af);}async #Ks(af){const oJ=bY;let ag=af[oJ(0x779)][oJ(0xc06)]('a');ag[oJ(0x1061)]===location[oJ(0x1061)]&&(ag[oJ(0x98c)][oJ(0x9ae)](oJ(0xfab))||ag[oJ(0x98c)]['startsWith'](oJ(0xe97)))&&(af['preventDefault'](),this.#T[oJ(0x908)](ag[oJ(0xbd9)]));}#pi(af){const oK=bY;this.#T[oK(0x242)][oK(0xd44)](af['target']);}async #Di(){const oL=bY;let af=this[oL(0xfa3)]['toggled']?a2[oL(0x962)]:this.#Ui[oL(0xb73)];He[oL(0x1d5)](af)?this.#Ui=await Bi[oL(0xa1a)][oL(0x909)](this.#Ui['id'],af):this.#Ui=await Bi['database'][oL(0xd1f)](oL(0xb29),this.#Ui['id']),this.#A();}async #Js(){const oM=bY;let af=!0x0===this['#watch-button']['toggled']?oM(0xf72):oM(0xb4e),ag=this[oM(0x9a5)][oM(0x42a)];if(this['#watch-button'][oM(0x6a2)]=!0x0,this[oM(0x9a5)][oM(0x42a)]=oM(0xb4e)===af,!0x1===Bi['auth'][oM(0x1009)])this[oM(0x9a5)][oM(0x42a)]=ag,null===Bi[oM(0xf5c)]['userID']?this.#T[oM(0x908)](qi(location[oM(0xbd9)],oM(0x741),oM(0xb28))):this.#T[oM(0x249)]();else{let ah=this.#Ui['id'],aj=Bi['auth'][oM(0xdc1)],ak=null;try{oM(0xb4e)===af?await Bi[oM(0xfb8)][oM(0x6ba)]('watchPost',ah):await Bi[oM(0xfb8)][oM(0x6ba)](oM(0x489),ah);}catch(al){ak=al;}null===ak?(this.#Ui[oM(0xeb5)]=this.#Ui[oM(0xeb5)][oM(0xe7a)](am=>am!==aj),oM(0xb4e)===af&&this.#Ui['watchers'][oM(0xc68)](aj)):(oM(0xb4e)===af?await this.#T[oM(0xafc)]({'title':{'href':oM(0x1008)},'detail':bi(ak),'buttons':[{'href':oM(0x95a)}]}):await this.#T[oM(0xafc)]({'title':{'href':oM(0x2a0)},'detail':bi(ak),'buttons':[{'href':oM(0x95a)}]}),this[oM(0x9a5)][oM(0x42a)]=ag);}this[oM(0x9a5)][oM(0x6a2)]=!0x1;}#Zs(){const oN=bY;let af=new URL(location[oN(0xbd9)]),ag=new URLSearchParams(location[oN(0xa28)]);ag['set'](oN(0x741),oN(0x4a7)),af[oN(0xa28)]=ag[oN(0xd23)](),this.#T[oN(0x908)](af[oN(0xd23)]());}async #Qs(af){const oO=bY;if(oO(0xc58)===af['detail']){let ag=new URL(location[oO(0xbd9)]),ah=new URLSearchParams(location[oO(0xa28)]);this[oO(0x50f)][oO(0xcfc)](),ah['set']('dialog',oO(0x4a7)),ag['search']=ah[oO(0xd23)](),await it(0x190),this.#T[oO(0x908)](ag[oO(0xd23)]());}else{if(oO(0x658)===af['detail']){let aj=new URL(location['href']),ak=new URLSearchParams(location[oO(0xa28)]);this[oO(0x50f)][oO(0xcfc)](),ak['set'](oO(0x741),oO(0xb12)),aj['search']=ak['toString'](),await it(0x190),this.#T[oO(0x908)](aj[oO(0xd23)]());}}}async #ea(){const oP=bY;let af=this[oP(0xf1b)][oP(0xadc)],ag=this.#Ui['id'],ah=null;try{await Bi['functions'][oP(0x6ba)]('editPost',{'id':ag,'tags':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[oP(0xadc)]=af,this.#A()):(await this.#T['openMessageDialog']({'title':{'href':oP(0x70b)},'detail':bi(ah),'buttons':[{'href':'#close'}]}),this[oP(0xf1b)][oP(0xadc)]=this.#Ui[oP(0xadc)]);}#A(){const oQ=bY;let af=null!==Bi[oQ(0xf5c)]['userID'],ag=Bi['auth'][oQ(0xa55)],ah=af?Bi[oQ(0xf5c)][oQ(0xdc1)]:null,aj=this.#Ui;if(null!==aj){this[oQ(0xcad)][oQ(0xbd9)]=oQ(0x1c8)+aj['authorID']+'/'+$e(aj[oQ(0xb8f)]),this[oQ(0x87c)][oQ(0x1ce)]=aj[oQ(0x911)]||oQ(0x9ce),this[oQ(0x87c)][oQ(0xf0a)]=aj[oQ(0xbaf)],this[oQ(0x7de)][oQ(0xd88)]=aj[oQ(0xee1)],this[oQ(0x7de)]['staff']=oQ(0x70e)===aj['authorID'],this[oQ(0x107f)][oQ(0xbd9)]=oQ(0x1c8)+aj['authorID']+'/'+$e(aj[oQ(0xb8f)]),this[oQ(0x107f)][oQ(0xad6)]=aj['authorName'],this[oQ(0x104b)]['innerHTML']='<x-message\x20href=\x22#date-wrote\x22\x20args=\x22date:\x20'+aj[oQ(0x10b6)]+oQ(0xaab);{let ak=aj['id'][oQ(0xc97)]('-')['at'](-0x1);this['#thread-anchor'][oQ(0x8c2)]=Te(aj[oQ(0x37a)]),this[oQ(0x8f2)][oQ(0xbd9)]=oQ(0x7d9)+ak+'/'+aj[oQ(0xa4b)];}aj['locale']===aj[oQ(0xb73)]&&aj[oQ(0x962)]===a2[oQ(0x962)]?this[oQ(0xfa3)][oQ(0x96e)]=!0x0:(this[oQ(0xfa3)][oQ(0x42a)]=aj[oQ(0x962)]===a2['locale'],this[oQ(0xfa3)][oQ(0x96e)]=!0x1,this[oQ(0x67c)][oQ(0xbd9)]=oQ(0x627)+(aj[oQ(0xb73)]||aj[oQ(0x962)]||'en'),this[oQ(0xb15)][oQ(0xbd9)]=oQ(0x627)+a2[oQ(0x962)]),this[oQ(0x9a5)]['toggled']=!0x0===af&&aj[oQ(0xeb5)][oQ(0x1d5)](ah),this[oQ(0xcf8)][oQ(0x96e)]=!0x0===ag||ah!==aj[oQ(0xbaf)],this['#settings-button'][oQ(0x96e)]=!0x1===ag,!0x1===this[oQ(0xe80)][oQ(0x753)]&&(this['#settings'][oQ(0xadc)]=aj['tags']),this[oQ(0xb91)][oQ(0x552)]=aj[oQ(0x962)],this[oQ(0xf1d)][oQ(0x8c2)]=Te(aj[oQ(0x37a)]),this[oQ(0x533)][oQ(0xad6)]='#'+aj['id'][oQ(0xc97)]('-')['at'](-0x1);{let al='';for(let am of aj[oQ(0xadc)]){let an=oQ(0x7eb)+ye(am,'\x20','+'),ap=Vt(am);if(am['includes'](':')){let [aq,ar]=am[oQ(0xc97)](':')[oQ(0x8fb)](au=>au[oQ(0x963)]());al+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22'+an+oQ(0xf33)+am+'\x22\x20skin=\x22colored\x22\x20style=\x22background:\x20'+ap+oQ(0xafe)+aq+oQ(0xa9e)+ar+oQ(0x607);}else al+=oQ(0x42b)+an+oQ(0xf33)+am+oQ(0xecb)+ap+oQ(0x955)+am+oQ(0x607);}this['#tags'][oQ(0x8c2)]=al;}this[oQ(0xdcf)][oQ(0xe44)]=aj[oQ(0x923)],this[oQ(0xfe0)][oQ(0x8c2)]=Te(aj['description']),this[oQ(0xfe0)][oQ(0x552)]=aj[oQ(0x962)];for(let au of this[oQ(0xfe0)]['querySelectorAll'](oQ(0x3cb)))au['hasAttribute'](oQ(0x105c))&&(au[oQ(0x8c2)]=ds(au[oQ(0xad6)],au[oQ(0xc51)](oQ(0x105c))));if(CSS[oQ(0x101d)]&&aj[oQ(0xdf4)]){let av=ai(aj[oQ(0xdf4)],[this[oQ(0xb91)],this[oQ(0xfe0)]]),aw=CSS[oQ(0x101d)][oQ(0x10bd)](oQ(0xaef))||new Highlight();for(let ax of av)aw[oQ(0xc2f)](ax);CSS[oQ(0x101d)][oQ(0xf62)](oQ(0xaef),aw);}Bi['auth'][oQ(0xfea)]['then'](()=>{const oR=oQ;if(Bi['auth']['isModerator']){for(let ay of this['#description']['querySelectorAll']('img'))Bi[oR(0xa0e)]['getMetadata'](ay[oR(0xe44)])[oR(0x270)](az=>{const oS=oR;let aA=fe(az['size']);ay[oS(0xa0a)](oS(0x8da),aA);});}});}}}customElements[bY(0x864)](bY(0x969),Ps);class Es extends bs{static [bY(0x1068)]=[bY(0x1ce)];static ['v']=ie` <template> <x-box> <h2 id="heading"><x-message id="heading-message"></x-message></h2> <bx-avatar id="avatar"></bx-avatar> </x-box> <bx-richtextarea id="textarea" spellcheck></bx-richtextarea> <x-checkbox id="watch-checkbox" toggled> <x-label><strong><x-message href="#watch-thread"></x-message></strong></x-label> <x-label><x-message href="#watch-thread.detail"></x-message></x-label> </x-checkbox> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#save"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{display:flex;flex-flow:column}h2{margin:0;font-size:28px}#avatar{width:40px;height:40px;margin-left:auto}#textarea{min-height:0;margin-top:8px;flex:1}#watch-checkbox{margin-top:16px}`;get[bY(0x1ce)](){const oT=bY;return this[oT(0xfd9)](oT(0x1ce))?this['getAttribute'](oT(0x1ce)):oT(0xb4b);}set[bY(0x1ce)](af){const oU=bY;this[oU(0xa0a)](oU(0x1ce),af);}get[bY(0xe24)](){const oV=bY;return this[oV(0xa70)][oV(0xf0a)];}set[bY(0xe24)](af){const oW=bY;this[oW(0xa70)]['value']=Te(af),this[oW(0xa70)][oW(0x75e)]('');}get['attachments'](){const oX=bY;return this[oX(0xa70)][oX(0x94e)];}get[bY(0xafd)](){const oY=bY;return this[oY(0xcfa)][oY(0x42a)];}#at;constructor(){const oZ=bY;super(),this['#textarea'][oZ(0x1012)]('input',()=>this.#ta()),this['#submit-button'][oZ(0x1012)]('click',()=>this.#ms()),this[oZ(0x4a1)]['addEventListener'](oZ(0xff9),()=>this.#Pt());}[bY(0x854)](){const p0=bY;super['connectedCallback'](),this.#xs(),this.#gs(),this.#ia(),Bi[p0(0xf5c)][p0(0x1012)](p0(0x284),this.#at=()=>{this.#gs();});}[bY(0x7db)](){const p1=bY;super[p1(0x7db)](),Bi[p1(0xf5c)][p1(0xee0)]('userchange',this.#at);}['attributeChangedCallback'](af,ag,ah){const p2=bY;ag!==ah&&p2(0x1ce)===af&&(this.#xs(),this.#ia());}[bY(0xc2a)](){const p3=bY;super[p3(0xc2a)](),this[p3(0xa70)][p3(0xf0a)]='',this[p3(0xa70)][p3(0x75e)](''),this[p3(0xcfa)][p3(0x42a)]=!0x0;}[bY(0xbab)](){const p4=bY;let af=!0x1;return''===this[p4(0xe24)][p4(0x963)]()?(this[p4(0xa70)][p4(0x75e)](p4(0x8d5)),this[p4(0xa70)][p4(0x72c)]()):(this['#textarea'][p4(0x75e)](''),af=!0x0),af;}#ta(){const p5=bY;this[p5(0xa70)][p5(0x75e)](''),this['p']=!0x0;}#ms(){const p6=bY;this[p6(0x10bf)](new CustomEvent(p6(0xb26)));}#Pt(){const p7=bY;this[p7(0x10bf)](new CustomEvent(p7(0xf20)));}#xs(){const p8=bY;this['#heading-message'][p8(0xbd9)]=p8(0xc58)===this[p8(0x1ce)]?p8(0x49e):p8(0x616);}async #gs(){const p9=bY;await Bi['auth'][p9(0xfea)],null!==Bi[p9(0xf5c)][p9(0xdc1)]&&(this['#avatar'][p9(0x1ce)]=Bi[p9(0xf5c)][p9(0x1050)]['avatar']||'random',this[p9(0xdcd)][p9(0xf0a)]=Bi[p9(0xf5c)][p9(0xdc1)]);}#ia(){const pb=bY;this[pb(0xcfa)][pb(0x96e)]=pb(0xc58)===this[pb(0x1ce)];}}customElements[bY(0x864)](bY(0x20b),Es);class Ls extends bs{static ['v']=ie` <template> <h2><x-message href="#confirm-delete-comment"></x-message></h2> <p><x-message href="#confirm-delete-comment.detail"></x-message></p> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"><x-label><x-message href="#cancel"></x-message></x-label></x-button> <x-button id="submit-button" toggled><x-label><x-message href="#delete"></x-message></x-label></x-button> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:400px}`;constructor(){const pc=bY;super(),this['#cancel-button'][pc(0x1012)](pc(0xff9),()=>this.#Pt()),this[pc(0x412)][pc(0x1012)](pc(0xff9),af=>this.#ms(af));}#Pt(){const pd=bY;this[pd(0x10bf)](new CustomEvent(pd(0xf20)));}#ms(af){const pf=bY;this[pf(0x10bf)](new CustomEvent(pf(0xb26)));}}customElements[bY(0x864)](bY(0xc69),Ls);class Us extends bs{static ['v']=ie` <template> <h2><x-message href="#confirm-delete-post"></x-message></h2> <p><x-message href="#confirm-delete-post.detail"></x-message></p> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"><x-label><x-message href="#cancel"></x-message></x-label></x-button> <x-button id="submit-button" toggled><x-label><x-message href="#delete"></x-message></x-label></x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:400px}`;constructor(){const pg=bY;super(),this[pg(0x4a1)][pg(0x1012)]('click',()=>this.#Pt()),this[pg(0x412)][pg(0x1012)](pg(0xff9),af=>this.#ms(af));}#Pt(){const ph=bY;this[ph(0x10bf)](new CustomEvent(ph(0xf20)));}#ms(af){const pj=bY;this[pj(0x10bf)](new CustomEvent(pj(0xb26)));}}customElements['define'](bY(0xa5f),Us);class Ds extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <bx-blogblock id="blog-block"></bx-blogblock> <hr id="separator"> <h3 id="comments-heading"> <x-message id="comments-message" href="#comments" args="count: 0"></x-message> </h3> <div id="comments"></div> <a id="new-comment-anchor"> <x-button id="new-comment-button" toggled> <x-label><strong><x-message href="new-comment"></x-message></strong></x-label> </x-button> </a> </main> <div id="dialogs"> <dialog id="blog-dialog"> <bx-blogform id="blog-form" type="edit"></bx-blogform> </dialog> <dialog id="blog-delete-dialog"> <bx-blogdeleteform id="blog-delete-form"></bx-blogdeleteform> </dialog> <dialog id="comment-dialog"> <bx-commentform id="comment-form"></bx-commentform> </dialog> <dialog id="comment-delete-dialog"> <bx-commentdeleteform id="comment-delete-form"></bx-commentdeleteform> </dialog> </div> </template>
  `;static [bY(0x78e)]=se`#separator{margin:35px 0 27px}#blog-block{margin:20px 0 8px 0}#comments-heading{font-size:28px}#new-comment-anchor{display:block;margin-top:15px}#new-comment-button{width:100%;min-height:36px}#new-comment-button x-label{cursor:pointer}#blog-dialog,#comment-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const pk=bY;let af=this[pk(0xb0a)]['data']['id'][pk(0xc97)]('-')[0x1],ag=this[pk(0xb0a)]['data'][pk(0xa4b)];return location[pk(0x1061)]+'/blog/'+af+'/'+ag;}#Xt;#ys;#Gt;#sa=null;constructor(){const pl=bY;super(),this[pl(0x485)][pl(0x1012)]('userclose',af=>this.#aa(af)),this[pl(0xfbe)]['addEventListener'](pl(0xf20),af=>this.#Ts(af)),this[pl(0xfbe)][pl(0x1012)](pl(0xb26),af=>this.#$s(af)),this['#blog-delete-dialog'][pl(0x1012)]('userclose',af=>this.#aa(af)),this[pl(0xf10)]['addEventListener'](pl(0xb26),af=>this.#oa(af)),this[pl(0xf10)][pl(0x1012)](pl(0xf20),af=>this.#na(af)),this[pl(0x5d4)][pl(0x1012)]('userclose',af=>this.#aa(af)),this[pl(0xf8e)][pl(0x1012)](pl(0xb26),af=>this.#la(af)),this[pl(0xf8e)][pl(0x1012)](pl(0xf20),af=>this.#ra(af)),this[pl(0x1064)][pl(0x1012)](pl(0x105d),af=>this.#aa(af)),this['#comment-delete-form'][pl(0x1012)](pl(0xb26),af=>this.#ha(af)),this['#comment-delete-form'][pl(0x1012)]('cancel',af=>this.#ca(af));}async[bY(0x854)](){const pm=bY;super[pm(0x854)](),Bi[pm(0xf5c)][pm(0x1012)]('userprofilechange',this.#Gt=af=>{this.#da(af);}),a2[pm(0x1012)]('localeschange',this.#Xt=()=>{this.#si();}),this['o'][pm(0x1012)](pm(0x828),this.#ys=af=>{this.#ii(af);}),await this.#A();{let af=new URLSearchParams(location[pm(0xa28)])[pm(0x10bd)](pm(0x741));null!==af&&('edit-blog'===af?this.#ua():pm(0xb12)===af?this.#pa():pm(0x24f)===af?this.#ma():af[pm(0x9ae)](pm(0x3b6))?this.#xa():af[pm(0x9ae)](pm(0x10e3))?this.#ga():af[pm(0x9ae)](pm(0x50e))&&this.#ba());}this['u']();}[bY(0x7db)](){const pn=bY;Bi[pn(0xf5c)]['removeEventListener']('userprofilechange',this.#Gt),a2[pn(0xee0)](pn(0x60c),this.#Xt),this['o'][pn(0xee0)](pn(0x828),this.#ys);}#si(){const pp=bY;this[pp(0x552)]!==a2[pp(0x962)]&&this.#A();}async #ii(af){const pq=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[pq(0xdd7)];if(ah[pq(0x98c)][pq(0x9ae)](pq(0x7d9))){let ak=new URLSearchParams(ag?ag[pq(0xa28)]:''),al=new URLSearchParams(ah[pq(0xa28)]);if(V([...ak['keys'](),...al['keys']()])['includes'](pq(0x741))){let am=ak[pq(0x10bd)](pq(0x741)),an=al[pq(0x10bd)]('dialog');am!==an&&(null===an?null!==am&&(pq(0x4a7)===am?this['#blog-dialog'][pq(0x225)]():pq(0xb12)===am?this['#blog-delete-dialog']['close']():pq(0x24f)===am||am['startsWith']('reply-comment-')||am[pq(0x9ae)](pq(0x10e3))?this[pq(0x5d4)]['close']():am['startsWith'](pq(0x50e))&&this[pq(0x1064)][pq(0x225)]()):pq(0x4a7)===an?this.#ua():pq(0xb12)===an?this.#pa():pq(0x24f)===an?this.#ma():an[pq(0x9ae)]('reply-comment-')?this.#xa():an[pq(0x9ae)](pq(0x10e3))?this.#ga():an[pq(0x9ae)](pq(0x50e))&&this.#ba());}}}#da(af){const pr=bY;let ag=Bi[pr(0xf5c)][pr(0xa55)],ah=Bi['auth'][pr(0x1050)];for(let aj of this[pr(0xdd6)][pr(0x44e)](pr(0xeaa)))aj[pr(0x387)]=ag,aj[pr(0x97b)]=ag,aj['deletable']=ag;if(ah){let ak=Bi[pr(0xf5c)][pr(0xdc1)],al=this[pr(0xb0a)][pr(0x3ab)];al?.[pr(0xbaf)]===ak&&al[pr(0xb8f)]!==ah[pr(0xce8)]&&(al[pr(0xb8f)]=ah[pr(0xce8)],this[pr(0xb0a)]['data']=al);}if(ah){let am=Bi[pr(0xf5c)]['userID'];for(let an of this[pr(0xdd6)][pr(0x573)])if(null!==am&&am===an['data']?.[pr(0xbaf)]){let ap=an[pr(0x3ab)];ap[pr(0xb8f)]!==ah[pr(0xce8)]&&(ap['authorName']=ah['name'],an[pr(0x3ab)]=ap);}}}#aa(){const pu=bY;this['o'][pu(0x908)](qi(location[pu(0xbd9)],pu(0x741),null));}async #$s(){const pv=bY;if(!0x0===this[pv(0xfbe)][pv(0xbab)]()){let af=pv(0xbae)+location[pv(0x98c)][pv(0xc97)]('/')[0x2],ag=[],ah=null,aj={'id':af,'title':this[pv(0xfbe)]['title'],'description':this[pv(0xfbe)][pv(0xe24)],'banner':this['#blog-form'][pv(0x923)],'attachments':{}};this[pv(0xfbe)][pv(0x92d)]=!0x0;for(let ak of this[pv(0xfbe)]['attachments']){let al=await(await fetch(ak))['blob'](),am=Kt(0x1e)+'.'+we(al[pv(0x1ce)]),an=Bi['storage'][pv(0x21b)](pv(0x3a3)+am,al);aj[pv(0x35a)][ak]=am,ag['push'](an);}try{await Promise['all'](ag),await Bi[pv(0xfb8)][pv(0x6ba)]('editPost',aj);}catch(ap){ah=ap;}null===ah?(await Bi[pv(0xa1a)][pv(0x273)](af,a2[pv(0x962)],this['#blog-form'][pv(0xa45)]),await this[pv(0x485)][pv(0x225)](),await it(0x96),await this.#A(),this['o'][pv(0x908)](qi(location['href'],pv(0x741),null))):(this[pv(0x485)][pv(0x96e)]=!0x0,await it(0x96),await this['o'][pv(0xafc)]({'title':{'href':pv(0xe9a)},'detail':bi(ah),'buttons':[{'href':'#back-to-form'}]}),this[pv(0xfbe)][pv(0x92d)]=!0x1,this[pv(0x485)][pv(0x96e)]=!0x1);}}async #la(){const pw=bY;if(!0x0===this['#comment-form'][pw(0xbab)]()){let af=new URLSearchParams(location[pw(0xa28)])['get']('dialog');if(this['#comment-form'][pw(0x92d)]=!0x0,pw(0x24f)===af||af[pw(0x9ae)](pw(0x3b6))){let ag=pw(0xbae)+location[pw(0x98c)][pw(0xc97)]('/')[0x2],ah=await Xe(),aj=[],ak=null,al=null,am={'type':pw(0x747),'description':this[pw(0xf8e)]['description'],'attachments':{},'watchThread':this[pw(0xf8e)][pw(0xafd)],'parentID':af['startsWith'](pw(0x3b6))?af[pw(0xe2d)](0x6):ag};null!==ah&&(am[pw(0xd88)]=ah);for(let an of this['#comment-form']['attachments']){let ap=await(await fetch(an))['blob'](),aq=Kt(0x1e)+'.'+we(ap[pw(0x1ce)]),ar=Bi['storage']['uploadFile'](pw(0x3a3)+aq,ap);am[pw(0x35a)][an]=aq,aj[pw(0xc68)](ar);}try{await Promise[pw(0x3b9)](aj),ak=await Bi[pw(0xfb8)][pw(0x6ba)](pw(0xa75),am);}catch(au){al=au;}if(null===al){let av=ak[pw(0x3ab)];await Bi[pw(0xa1a)][pw(0x691)](av,a2['locale']),this['#comment-form']['throbber']=!0x1,this['o'][pw(0x908)](qi(location[pw(0xbd9)],'dialog',null)),await this.#A();let aw=this['#comments'][pw(0x344)]('#'+av);aw&&aw[pw(0x467)]();}else this[pw(0xf8e)][pw(0x92d)]=!0x1,this[pw(0x5d4)]['hidden']=!0x0,await it(0x96),await this['o']['openMessageDialog']({'title':{'href':pw(0x353)},'detail':bi(al),'buttons':[{'href':'#back-to-form'}]}),this[pw(0x5d4)]['hidden']=!0x1;}else{if(af[pw(0x9ae)]('edit-comment-')){let ax=af['substring'](0x5),ay=this['#comments'][pw(0x344)]('#'+ax),az=[],aA=null,aB=null,aC={'id':ax,'description':this[pw(0xf8e)]['description'],'attachments':{}};for(let aD of this['#comment-form'][pw(0x35a)]){let aE=await(await fetch(aD))[pw(0x105a)](),aF=Kt(0x1e)+'.'+we(aE[pw(0x1ce)]),aG=Bi[pw(0xa0e)][pw(0x21b)]('temp/'+aF,aE);aC['attachments'][aD]=aF,az[pw(0xc68)](aG);}try{await Promise[pw(0x3b9)](az),aA=await Bi[pw(0xfb8)][pw(0x6ba)](pw(0xf7f),aC);}catch(aH){aB=aH;}null===aB?(await Bi[pw(0xa1a)]['whenPostEdited'](ax,a2[pw(0x962)],this[pw(0xf8e)][pw(0xa45)]),this['o'][pw(0x908)](qi(location[pw(0xbd9)],pw(0x741),null)),await this.#A(),ay=this[pw(0xdd6)][pw(0x344)]('#'+ax),ay&&ay[pw(0x467)]()):(this[pw(0x5d4)][pw(0x96e)]=!0x0,await it(0x96),await this['o'][pw(0xafc)]({'title':{'href':pw(0x463)},'detail':bi(aB),'buttons':[{'href':'#back-to-form'}]}),this[pw(0xf8e)]['throbber']=!0x1,this[pw(0x5d4)]['hidden']=!0x1);}}}}async #oa(){const px=bY;let af='blog-'+location[px(0x98c)][px(0xc97)]('/')[0x2],ag=null;this[px(0xf10)][px(0x72c)](),this['#blog-delete-form'][px(0x92d)]=!0x0;try{await Bi['functions']['postMessage'](px(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[px(0xa1a)]['whenPostDeleted'](af,a2[px(0x962)]),await this[px(0x329)][px(0x225)](),this['o']['navigate']('/blog')):(this['o'][px(0x908)](qi(location[px(0xbd9)],px(0x741),null)),await this['o'][px(0xafc)]({'title':{'href':px(0x207)},'detail':bi(ag),'buttons':[{'href':px(0x95a)}]}));}async #ha(){const py=bY;let af=new URLSearchParams(location[py(0xa28)])[py(0x10bd)]('dialog')[py(0xe2d)](0x7),ag=null;this[py(0xf39)][py(0x72c)](),this['#comment-delete-form'][py(0x92d)]=!0x0;try{await Bi[py(0xfb8)][py(0x6ba)](py(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[py(0xa1a)][py(0xffa)](af,a2['locale']),this['o'][py(0x908)](qi(location[py(0xbd9)],'dialog',null)),await this.#A()):(this['o']['navigate'](qi(location[py(0xbd9)],py(0x741),null)),await this['o'][py(0xafc)]({'title':{'href':'#failed-to-delete-comment'},'detail':bi(ag),'buttons':[{'href':py(0x95a)}]}));}#Ts(){const pz=bY;this['o'][pz(0x908)](qi(location[pz(0xbd9)],pz(0x741),null));}#na(){const pA=bY;this['o'][pA(0x908)](qi(location[pA(0xbd9)],pA(0x741),null));}#ra(){const pB=bY;this['o'][pB(0x908)](qi(location[pB(0xbd9)],'dialog',null));}#ca(){const pC=bY;this['o'][pC(0x908)](qi(location[pC(0xbd9)],pC(0x741),null));}async #ua(){const pD=bY;if(await this['whenReady'],await Bi[pD(0xf5c)][pD(0xfea)],null===Bi[pD(0xf5c)]['userID'])this['o']['navigate'](qi(location[pD(0xbd9)],pD(0x741),pD(0xb28)),!0x0);else{if(!0x1===Bi[pD(0xf5c)]['userEmailVerified'])this['o'][pD(0x249)]();else{let af=pD(0xbae)+location['pathname']['split']('/')[0x2],{title:ag,description:ah,banner:aj,revision:ak}=await Bi['database'][pD(0xd1f)](pD(0xb29),af);this[pD(0xfbe)][pD(0xc2a)](),this[pD(0xfbe)]['title']=ag,this[pD(0xfbe)][pD(0xe24)]=ah,this['#blog-form'][pD(0x923)]=aj,this['#blog-form'][pD(0xa45)]=ak,this[pD(0xfbe)][pD(0x92d)]=!0x1,this['#blog-dialog'][pD(0x96e)]=!0x1,this['#blog-dialog']['showModal']();}}}async #pa(){const pE=bY;await this[pE(0xfea)],await Bi[pE(0xf5c)][pE(0xfea)],null===Bi[pE(0xf5c)][pE(0xdc1)]?this['o'][pE(0x908)](qi(location[pE(0xbd9)],pE(0x741),pE(0xb28)),!0x0):!0x1===Bi[pE(0xf5c)][pE(0x1009)]?this['o']['openEmailVerifyMessageDialog']():(this['#blog-delete-form']['throbber']=!0x1,this[pE(0x329)][pE(0x96e)]=!0x1,this['#blog-delete-dialog']['showModal']());}async #ma(){const pF=bY;await this[pF(0xfea)],await Bi[pF(0xf5c)][pF(0xfea)],null===Bi[pF(0xf5c)][pF(0xdc1)]?this['o'][pF(0x908)](qi(location[pF(0xbd9)],pF(0x741),pF(0xb28)),!0x0):!0x1===Bi['auth'][pF(0x1009)]?this['o'][pF(0x249)]():(this[pF(0xf8e)][pF(0xc2a)](),this[pF(0xf8e)][pF(0x1ce)]=pF(0xb4b),this[pF(0xf8e)][pF(0xe24)]='',this[pF(0xf8e)][pF(0x92d)]=!0x1,this[pF(0x5d4)][pF(0x96e)]=!0x1,this[pF(0x5d4)][pF(0xd44)]());}async #xa(){const pG=bY;await this[pG(0xfea)],await Bi[pG(0xf5c)][pG(0xfea)],null===Bi['auth']['userID']?this['o'][pG(0x908)](qi(location['href'],pG(0x741),'login'),!0x0):!0x1===Bi[pG(0xf5c)]['userEmailVerified']?this['o'][pG(0x249)]():(this[pG(0xf8e)][pG(0xc2a)](),this[pG(0xf8e)][pG(0x1ce)]=pG(0xb4b),this[pG(0xf8e)]['description']='',this[pG(0xf8e)]['throbber']=!0x1,this[pG(0x5d4)][pG(0x96e)]=!0x1,this['#comment-dialog'][pG(0xd44)]());}async #ga(){const pH=bY;if(await this[pH(0xfea)],await Bi[pH(0xf5c)]['whenReady'],null===Bi[pH(0xf5c)][pH(0xdc1)])this['o'][pH(0x908)](qi(location[pH(0xbd9)],pH(0x741),pH(0xb28)),!0x0);else{if(!0x1===Bi[pH(0xf5c)][pH(0x1009)])this['o'][pH(0x249)]();else{let af=new URLSearchParams(location['search'])[pH(0x10bd)](pH(0x741))[pH(0xe2d)](0x5),{description:ag,revision:ah}=await Bi[pH(0x2f6)][pH(0xd1f)](pH(0xb29),af);this[pH(0xf8e)][pH(0xc2a)](),this[pH(0xf8e)][pH(0x1ce)]=pH(0xc58),this[pH(0xf8e)][pH(0xe24)]=ag,this[pH(0xf8e)][pH(0xa45)]=ah,this[pH(0xf8e)][pH(0x92d)]=!0x1,this[pH(0x5d4)][pH(0x96e)]=!0x1,this[pH(0x5d4)][pH(0xd44)]();}}}async #ba(){const pI=bY;await this[pI(0xfea)],await Bi['auth']['whenReady'],null===Bi['auth'][pI(0xdc1)]?this['o'][pI(0x908)](qi(location[pI(0xbd9)],pI(0x741),pI(0xb28)),!0x0):!0x1===Bi[pI(0xf5c)][pI(0x1009)]?this['o'][pI(0x249)]():(this[pI(0xf39)][pI(0x92d)]=!0x1,this[pI(0xf39)][pI(0x96e)]=!0x1,this[pI(0x1064)][pI(0xd44)]());}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const pJ=a1;this[pJ(0x552)]=a2[pJ(0x962)],this[pJ(0xdd6)][pJ(0x8c2)]='';let ag=pJ(0xbae)+location[pJ(0x98c)][pJ(0xc97)]('/')[0x2],ah=await Bi[pJ(0xa1a)][pJ(0x909)](ag,a2['locale']),aj=ag[pJ(0xc97)]('-')[0x1];if(ah){{let ak='/blog/'+aj+'/'+ah[pJ(0xa4b)];if(location[pJ(0x98c)]!==ak){let al=location[pJ(0xbd9)]['replace'](location[pJ(0x98c)],ak);this['o']['navigate'](al,!0x0);}}if(this['#blog-block'][pJ(0x3ab)]=ah,this[pJ(0x3c2)][pJ(0xa32)]={'count':ah[pJ(0x5ff)]},this['#new-comment-anchor'][pJ(0xbd9)]=qi(location[pJ(0xbd9)],pJ(0x741),pJ(0x24f)),0x0===ah[pJ(0x5ff)])this[pJ(0xdd6)][pJ(0x8c2)]='';else{{let aq='';for(let ar=0x0;ar<Math['min'](ah[pJ(0x5ff)],0xa);ar+=0x1)aq+=pJ(0xc53);this['#comments'][pJ(0x8c2)]=aq;}let am=await Bi[pJ(0xa1a)][pJ(0x4c6)](ag,a2[pJ(0x962)]),an=document[pJ(0x7aa)](),ap=au=>{const pK=pJ;let av=document['createElement'](pK(0xeaa));av['id']=au['id'],av[pK(0x3ab)]=au,av['threaded']=!0x0,av['editable']=Bi[pK(0xf5c)][pK(0xa55)],av[pK(0x97b)]=Bi['auth']['isModerator'],av[pK(0xfbc)]=Bi[pK(0xf5c)][pK(0xa55)];let aw=am[pK(0xe7a)](ax=>ax[pK(0x761)]===au['id']);for(let ax of aw){let ay=ap(ax);av['append'](ay);}return av;};for(let au of am)if(au[pJ(0x761)]===ag){let av=ap(au);an[pJ(0x775)](av);}this[pJ(0xdd6)][pJ(0x8c2)]='',this['#comments']['append'](an);}}this.#sa=null,af();});}}customElements[bY(0x864)](bY(0x651),Ds);class zs extends HTMLElement{static #C=ie` <template> <main id="main"> <a id="thumbnail-anchor" href="/tutorials/1/selecting-objects"> <img id="thumbnail"> <x-icon id="play-icon" href="#play-video"></x-icon> </a> <div id="meta"> <h3><a id="title-anchor" href="/tutorials/1/selecting-objects"></a></h3> <p id="description"></p> </div> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      overflow: hidden;
      min-height: 190px;
    }

    #main {
      display: flex;
      min-height: inherit;
    }

    #thumbnail-anchor {
      width: 50%;
      min-width: 50%;
      min-height: inherit;
      user-select: none;
      -webkit-user-select: none;
      position: relative;
      background: var(--checkboard-background);
    }

    #thumbnail {
      width: 100%;
      display: block;
      pointer-events: none;
    }
    #thumbnail-anchor:hover #thumbnail {
      filter: brightness(0.5);
    }

    #play-icon {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 80px;
      height: 80px;
      transform: translate(-50%, -50%);
      color: white;
    }
    #thumbnail-anchor:hover #play-icon {
      display: block;
    }

    #meta {
      padding: 22px;
    }

    h3 {
      font-size: 22px;
    }

    h3 a {
      color: inherit;
      text-decoration: none;
      font-weight: inherit;
    }
    h3 a:hover {
      color: inherit;
      text-decoration: underline;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){this.#Ui=af,this.#A();}#T;#P;#Ui=null;constructor(){const pL=bY;super(),this.#P=this[pL(0x1017)]({'mode':'closed'}),this.#P['adoptedStyleSheets']=[a2[pL(0x500)],zs.#S],this.#P[pL(0x775)](document[pL(0xc3b)](zs.#C[pL(0x223)],!0x0));for(let af of this.#P['querySelectorAll']('[id]'))this['#'+af['id']]=af;this.#P['addEventListener'](pL(0x894),ag=>this.#Ye(ag)),this.#P[pL(0x1012)](pL(0xff9),ag=>this.#Xe(ag));}[bY(0x854)](){const pM=bY;this.#T=si(this,pM(0xf55)),this.#A();}[bY(0x109f)](){return new Promise(async af=>{const pN=a1;this[pN(0xa0a)]('blink',''),await it(0xc8),this['removeAttribute'](pN(0x109f)),await it(0xc8),this['setAttribute'](pN(0x109f),''),await it(0xc8),this[pN(0x88e)](pN(0x109f)),af();});}#Ye(af){const pO=bY;af[pO(0x779)][pO(0xc06)]('a')&&af[pO(0x539)]();}#Xe(af){const pP=bY;let ag=af[pP(0x779)]['closest']('a');ag&&(af['preventDefault'](),ag[pP(0xbd9)]!==location[pP(0xbd9)]&&this.#T[pP(0x908)](ag[pP(0xbd9)]));}#A(){const pQ=bY;let af=this.#Ui['messageID'][pQ(0xe2d)](this.#Ui[pQ(0x10bc)][pQ(0xc56)]('-')+0x1);this[pQ(0x1053)][pQ(0xe44)]=pQ(0x5ee)+this.#Ui['thumbnailUID']+pQ(0x481),this[pQ(0x6fe)][pQ(0xbd9)]=pQ(0x56f)+this.#Ui[pQ(0x74f)]+'/'+af,this[pQ(0x986)][pQ(0xbd9)]=pQ(0x56f)+this.#Ui[pQ(0x74f)]+'/'+af,this[pQ(0x986)][pQ(0x8c2)]='<x-message\x20href=\x22'+this.#Ui['messageID']+pQ(0xce6),this['#description'][pQ(0x8c2)]=pQ(0x519)+this.#Ui[pQ(0x10bc)]+pQ(0x109e);}}customElements[bY(0x864)](bY(0x4f4),zs);class Ms extends HTMLElement{static ['observedAttributes']=[bY(0xfe5)];static #C=ie` <template> <div id="backdrop"> <main id="main"> <div id="iframe-wrapper"> <div id="iframe"></div> </div> </main> </div> </template>
  `;static #S=se`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
    }
    :host([videoid]) {
      display: block;
    }

    #backdrop {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    #main {
      width: 100%;
      max-width: 1000px;
      margin: 30px;
    }

    #iframe-wrapper {
      overflow: hidden;
      padding-top: 56.25%;
      position: relative;
    }

    #iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      margin: 0;
    }
  `;get[bY(0x1ea)](){const pR=bY;return this[pR(0xfd9)](pR(0xfe5))?this[pR(0xc51)](pR(0xfe5)):null;}set['videoID'](af){const pS=bY;null===af?this[pS(0x88e)](pS(0xfe5)):this[pS(0xa0a)]('videoid',af);}get[bY(0x878)](){return null===this.#vi;}get[bY(0xfea)](){return new Promise(af=>{null===this.#vi?af():this.#vi['push'](af);});}#fa=!0x1;#vi=[];#wa=null;#P;[bY(0x854)](){const pT=bY;if(!this.#P){this.#P=this[pT(0x1017)]({'mode':'closed'}),this.#P[pT(0x48f)]=[a2[pT(0x500)],Ms.#S],this.#P[pT(0x775)](document['importNode'](Ms.#C[pT(0x223)],!0x0));for(let af of this.#P[pT(0x44e)]('[id]'))this['#'+af['id']]=af;this['#backdrop'][pT(0x1012)]('click',ag=>{this.#va(ag);}),this.#A();}}[bY(0x7db)](){}[bY(0x83b)](af,ag,ah){const pU=bY;ag!==ah&&this.#P&&pU(0xfe5)===af&&this.#A();}#ya(af){if(null!==this.#vi){for(let ag of this.#vi)ag();this.#vi=null;}}#ka(af){}#va(af){const pV=bY;this[pV(0x1ea)]=null,this.#A(),this[pV(0x10bf)](new CustomEvent(pV(0x225)));}async #A(){const pW=bY;null===this[pW(0x1ea)]?this.#wa&&(this.#wa[pW(0x407)](),this.#wa['destroy'](),this.#wa=null,this.#fa=!0x1,this.#vi=[]):(null===this.#wa&&(this.#wa=new YT[(pW(0xd75))](this['#iframe'],{'host':'https://www.youtube-nocookie.com','videoId':null,'playerVars':{'listType':'user_uploads','modestbranding':'1','rel':'0'},'events':{'onReady':af=>this.#ya(af),'onStateChange':af=>this.#ka(af)}})),await this[pW(0xfea)],this.#wa['loadVideoById'](this['videoID'],0x0));}}void 0x0===customElements['get'](bY(0x918))&&customElements['define']('bx-videoplayer',Ms);const As=[{'messageID':bY(0x702),'thumbnailUID':bY(0x361),'videoUID':'J_Q4YLoW45A'},{'messageID':bY(0x10e2),'thumbnailUID':bY(0x2e5),'videoUID':bY(0xc01)},{'messageID':bY(0x38c),'thumbnailUID':bY(0x6db),'videoUID':bY(0x8a3)},{'messageID':bY(0x419),'thumbnailUID':bY(0x821),'videoUID':bY(0x1081)},{'messageID':bY(0x8a4),'thumbnailUID':bY(0x993),'videoUID':bY(0xbe7)},{'messageID':bY(0x47f),'thumbnailUID':bY(0x541),'videoUID':bY(0xea7)},{'messageID':bY(0xca3),'thumbnailUID':bY(0x53b),'videoUID':bY(0x1067)},{'messageID':bY(0xf9c),'thumbnailUID':bY(0x703),'videoUID':'6Ceha-_wsHo'},{'messageID':bY(0x265),'thumbnailUID':bY(0x398),'videoUID':'W-kmNWre-wg'},{'messageID':bY(0xde1),'thumbnailUID':bY(0x313),'videoUID':'CFSNK3WBiPs'},{'messageID':'#tutorial-library','thumbnailUID':bY(0x7d4),'videoUID':bY(0xfbf)},{'messageID':bY(0x6ff),'thumbnailUID':bY(0xe5f),'videoUID':bY(0xa3d)}];class Bs extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <div id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> </div> <div id="previews"></div> <bx-videoplayer id="player"></bx-videoplayer> </main> </template>
  `;static ['_shadowStyleSheet']=se`#header{width:100%;display:flex;align-items:center}#previews x-card{overflow:hidden}#previews x-card:first-child{margin-top:0}#previews x-card:last-child{margin-bottom:0}#previews bx-tutorialpreviewblock+bx-tutorialpreviewblock{margin-top:20px}`;get[bY(0xe86)](){const pX=bY;return location[pX(0x1061)]+pX(0xda4);}#Ca;#ys;constructor(){const pY=bY;super(),this[pY(0xd4f)][pY(0x1012)](pY(0x225),this.#Ca=af=>{this.#Sa(af);});}async[bY(0x854)](){const pZ=bY;super[pZ(0x854)](),this['o']['addEventListener'](pZ(0x828),this.#ys=af=>{const q0=pZ;this.#ii(af['detail'][q0(0x9ad)],af[q0(0xdd7)][q0(0xbe1)]);}),await this.#A(),this.#ii(null,location),this['u']();}[bY(0x7db)](){const q1=bY;this['o'][q1(0xee0)](q1(0x828),this.#ys);}#ii(af,ag){const q2=bY;if(q2(0xda4)===ag[q2(0x98c)]){if(af?.[q2(0x98c)][q2(0x9ae)](q2(0x56f))){let ah=af['pathname'][q2(0xc97)]('/')[0x2];for(let aj of this[q2(0xd45)][q2(0x573)]){let ak=aj[q2(0xe5b)];ak[q2(0x3ab)][q2(0x74f)]===ah&&ak[q2(0x109f)]();}}this[q2(0xd4f)][q2(0x1ea)]=null;}else{if(ag[q2(0x98c)][q2(0x9ae)]('/tutorials/')){let al=ag[q2(0x98c)]['split']('/')[0x2];this[q2(0xd4f)][q2(0x1ea)]=al;}}}#Sa(){const q3=bY;this['o'][q3(0x908)]('/tutorials');}#A(){return new Promise(async af=>{const q4=a1;for(let ag of As){let ah=document[q4(0x840)]('bx-tutorialpreviewblock');ah[q4(0x3ab)]=ag;let aj=document['createElement'](q4(0xe84));aj[q4(0x775)](ah),this[q4(0xd45)]['append'](aj);}af();});}}customElements['define']('bx-tutorialspage',Bs);class Rs extends HTMLElement{static #C=ie` <template> <main id="main"> <x-input id="search-input" type="search"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search" autocapitalize ellipsis></x-message></x-label> </x-input> <x-buttons id="status-buttons" tracking="1"> <x-button value="all" condensed> <x-label><x-message href="#bugs.all" autocapitalize></x-message></x-label> </x-button> <x-button value="open" condensed> <x-label><x-message href="#bugs.open" autocapitalize></x-message></x-label> </x-button> <x-button value="closed" condensed> <x-label><x-message href="#bugs.closed" autocapitalize></x-message></x-label> </x-button> </x-buttons> <x-button id="advanced-filters-button"> <x-icon id="advanced-filters-icon" href="#switch"></x-icon> <x-popover id="advanced-filters-popover" modal> <main> <x-switch id="upvoted-by-me-switch"> <x-label><x-message href="#upvoted-by-me"></x-message></x-label> </x-switch> <x-switch id="watched-by-me-switch"> <x-label><x-message href="#watched-by-me"></x-message></x-label> </x-switch> <x-switch id="created-by-me-switch"> <x-label><x-message href="#created-by-me"></x-message></x-label> </x-switch> </main> </x-popover> </x-button> <x-select id="sort-select"> <x-menu> <x-menuitem value="createdTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="createdTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="threadUpdatedTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="threadUpdatedTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="votesCount:desc"> <x-icon href="#upvote"></x-icon> <x-label> <x-message href="#votes"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="votesCount:asc"> <x-icon href="#upvote"></x-icon> <x-label> <x-message href="#votes"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="commentsCount:desc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="commentsCount:asc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="priority:desc"> <x-icon href="#priority"></x-icon> <x-label> <x-message href="#priority"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="priority:asc"> <x-icon href="#priority"></x-icon> <x-label> <x-message href="#priority"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="relevance"> <x-icon href="#search"></x-icon> <x-label><x-message href="#relevance"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Main
     */

    #main {
      display: flex;
      padding: 8px;
    }

    /* Search input */

    #search-input {
      flex: 1;
      min-width: 60px;
      max-width: none;
    }

    /* Status buttons */

    #status-buttons {
      margin-left: 8px;
    }

    /* Advanced filters button */

    #advanced-filters-button {
      margin-left: 8px;
      padding: 2px 9px;
    }

    #advanced-filters-button::part(arrow) {
      display: none;
    }

    #advanced-filters-icon {
      width: 19px;
      height: 19px;
    }

    #advanced-filters-popover > main {
      padding: 12px;
    }

    #advanced-filters-popover #watched-by-me-switch {
      margin-top: 12px;
    }

    #advanced-filters-popover #created-by-me-switch {
      margin-top: 12px;
    }

    /* Sort select */

    #sort-select {
      margin-left: 8px;
    }
    #sort-select:focus {
      z-index: 1;
    }
    @media all and (max-width: 650px) {
      #sort-select {
        width: 120px;
        min-width: 0px;
      }
    }
    @media all and (max-width: 539px) {
      #sort-select {
        width: 100px;
      }
    }
  `;get[bY(0xa28)](){const q5=bY;let [af]=this['#search-input']['value']['split']('#');return af[q5(0x963)]();}set['search'](af){const q6=bY;let [,ag]=this['#search-input']['value']['split']('#');af=af[q6(0x963)](),ag=void 0x0===ag?null:ag[q6(0x963)]();let ah=af;null!==ag&&(af[q6(0x6dc)]>0x0?ah+='\x20#'+ag:ah+='#'+ag),this[q6(0xfd8)][q6(0xf0a)]=ah;}get[bY(0x9bc)](){const q7=bY;let [af,ag]=this[q7(0xfd8)][q7(0xf0a)][q7(0xc97)]('#');return void 0x0===ag?null:ag['trim']();}set[bY(0x9bc)](af){const q8=bY;let [ag]=this[q8(0xfd8)][q8(0xf0a)][q8(0xc97)]('#');ag=ag[q8(0x963)]();let ah=ag;null!==(af=null===af?null:af[q8(0x963)]())&&(ag['length']>0x0?ah+='\x20#'+af:ah+='#'+af),this[q8(0xfd8)][q8(0xf0a)]=ah;}get[bY(0x887)](){const q9=bY;return this[q9(0xd54)][q9(0xf0a)];}set['status'](af){const qb=bY;this[qb(0xd54)]['value']=af;}get[bY(0xc3a)](){return this.#Ta;}set[bY(0xc3a)](af){const qc=bY;this.#Ta=af,this['#upvoted-by-me-switch'][qc(0x42a)]=null!==af,this.#Si();}get['watchedBy'](){return this.#Ci;}set[bY(0x3b8)](af){const qd=bY;this.#Ci=af,this[qd(0x602)][qd(0x42a)]=null!==af,this.#Si();}get['createdBy'](){return this.#Ti;}set['createdBy'](af){const qf=bY;this.#Ti=af,this[qf(0xb4a)][qf(0x42a)]=null!==af,this.#Si();}get[bY(0x311)](){const qg=bY;return this[qg(0x101b)]['value'];}set[bY(0x311)](af){const qh=bY;this[qh(0x101b)][qh(0xf0a)]=af;}#P;#Gt;#Ta=null;#Ci=null;#Ti=null;constructor(){const qj=bY;super(),this.#P=this['attachShadow']({'mode':qj(0xc5d)}),this.#P[qj(0x48f)]=[a2[qj(0x500)],Rs.#S],this.#P[qj(0x775)](document[qj(0xc3b)](Rs.#C[qj(0x223)],!0x0));for(let af of this.#P[qj(0x44e)](qj(0x6e3)))this['#'+af['id']]=af;this[qj(0xfd8)][qj(0x1012)](qj(0x63b),()=>this.#$i()),this[qj(0xd54)][qj(0x1012)](qj(0x807),()=>this.#$a()),this[qj(0x41f)][qj(0x1012)](qj(0x807),()=>this.#Pa()),this[qj(0x602)][qj(0x1012)](qj(0x807),()=>this.#Pi()),this['#created-by-me-switch'][qj(0x1012)](qj(0x807),()=>this.#Ei()),this[qj(0x101b)][qj(0x1012)](qj(0x63b),()=>this.#Li());}[bY(0x854)](){const qk=bY;Bi[qk(0xf5c)]['addEventListener'](qk(0xecc),this.#Gt=()=>{this.#Si();}),this.#Si();}[bY(0x7db)](){const ql=bY;Bi[ql(0xf5c)][ql(0xee0)](ql(0xecc),this.#Gt);}#$i(){const qm=bY;this[qm(0x10bf)](new CustomEvent('change',{'detail':qm(0xa28)}));}#$a(){const qn=bY;this['dispatchEvent'](new CustomEvent(qn(0x63b),{'detail':qn(0x887)}));}#Pa(){const qo=bY;this.#Ta=this[qo(0x41f)][qo(0x42a)]?Bi[qo(0xf5c)][qo(0xdc1)]:null,this[qo(0x10bf)](new CustomEvent(qo(0x63b),{'detail':'upvotedBy'})),this.#Si();}#Pi(){const qp=bY;this.#Ci=this[qp(0x602)][qp(0x42a)]?Bi[qp(0xf5c)]['userID']:null,this[qp(0x10bf)](new CustomEvent(qp(0x63b),{'detail':'watchedBy'})),this.#Si();}#Ei(){const qq=bY;this.#Ti=this['#created-by-me-switch']['toggled']?Bi[qq(0xf5c)][qq(0xdc1)]:null,this[qq(0x10bf)](new CustomEvent(qq(0x63b),{'detail':qq(0x7dd)})),this.#Si();}#Li(){const qr=bY;this['dispatchEvent'](new CustomEvent('change',{'detail':qr(0x311)}));}async #Si(){const qu=bY;await Bi[qu(0xf5c)][qu(0xfea)],null===Bi[qu(0xf5c)][qu(0xdc1)]?this[qu(0x5e6)][qu(0x96e)]=!0x0:(this[qu(0x5e6)][qu(0x96e)]=!0x1,this['upvotedBy']||this[qu(0x3b8)]||this['createdBy']?(this[qu(0xd2d)][qu(0xe90)][qu(0x56c)]=qu(0xfb4),this[qu(0xd2d)]['style'][qu(0xf95)]=qu(0x9e2)):(this[qu(0xd2d)][qu(0xe90)]['color']=null,this['#advanced-filters-icon'][qu(0xe90)][qu(0xf95)]=null));}}customElements['define'](bY(0x408),Rs);let Is=af=>{const qv=bY;let ag='';return-0x2===af?ag=qv(0x3c1):-0x1===af?ag=qv(0xde5):0x0===af?ag=qv(0xbc6):0x1===af?ag=qv(0x6e5):0x2===af?ag=qv(0xb24):0x3===af&&(ag=qv(0x9d8)),ag;};class Fs extends HTMLElement{static [bY(0x1068)]=['details'];static #C=ie` <template> <main id="main"> <div id="title" part="title"> <a id="title-anchor"></a> <span id="hashtag-span" part="hashtag"></span> </div> <x-button id="translate-button" size="small" condensed togglable hidden> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <div id="details" part="details"> <span id="created-detail"> <a id="created-author-anchor"></a> <span id="created-time-span"></span> </span> <span id="updated-detail"> <a id="updated-author-anchor"></a> <span id="updated-time-span"></span> </span> <div id="comments-detail"> <x-icon id="comments-icon" href="#comment-outline"></x-icon> <div id="comments-label"></div> </div> <div id="votes-detail"> <x-icon id="votes-icon" href="#vote"></x-icon> <div id="votes-label"></div> </div> <div id="priority-detail"> <x-icon id="priority-icon" href="#priority"></x-icon> <div id="priority-label"> <x-message id="priority-message"></x-message> </div> </div> </div> <div id="skeleton"> <div id="skeleton-title" part="skeleton-item"></div> <div id="skeleton-details" part="skeleton-item"></div> </div> </main> </template>
  `;static #S=se`
    :host {
      display: flex;
      align-items: stretch;
      box-sizing: border-box;
      width: 100%;
      padding: 12px 15px;
      position: relative;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-weight: inherit;
    }
    a:hover {
      text-decoration: underline;
    }

    #main {
      width: 100%;
    }

    /**
     * Title
     */

    #title {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2;
    }
    :host([skeleton]) #title {
      display: none;
    }

    #title a {
      color: inherit;
      filter: none;
    }

    #title #hashtag-span {
      position: relative;
      bottom: 1px;
      margin-left: 4px;
      vertical-align: middle;
      font-size: 13px;
      text-transform: lowercase;
    }

    /**
     * "Translate" button
     */

    #translate-button {
      float: right;
    }
    :host([skeleton]) #translate-button {
      display: none;
    }

    /**
     * Details
     */

    #details {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      margin-top: 3px;
      font-size: 14.5px;
      line-height: 1.2;
    }
    #details[hidden] {
      display: none;
    }
    :host([skeleton]) #details {
      display: none;
    }

    /* Created */

    #created-detail {
      margin: 2px 12px 2px 0px;
    }

    #created-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #created-author-anchor {
      display: inline;
    }

    /* Updated */

    #updated-detail {
      margin: 2px 12px 2px 0px;
    }

    #updated-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #updated-author-anchor {
      display: inline;
    }

    /* Comments */

    #comments-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #comments-detail[hidden] {
      display: none;
    }

    #comments-icon {
      margin-left: 2px;
      transform: translateY(1px);
    }

    #comments-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Votes */

    #votes-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #votes-detail[hidden] {
      display: none;
    }

    #votes-icon {
      width: 16px;
      height: 16px;
      margin-bottom: 2px;
    }

    #votes-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Priority */

    #priority-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #priority-detail[hidden] {
      display: none;
    }

    #priority-icon {
      width: 17px;
      height: 17px;
    }

    #priority-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Tags */

    a.tag-anchor {
      display: inline-block;
      margin: 2px 6px 2px 0;
      text-decoration: none;
      vertical-align: middle;
    }
    a.tag-anchor:last-of-type {
      margin-right: 12px;
    }

    x-tag {
      vertical-align: middle;
    }

    /**
     * Skeleton
     */

    #skeleton-title {
      display: none;
      height: 20px;
      width: 50%;
    }
    :host([skeleton]) #skeleton-title {
      display: block;
    }

    #skeleton-details {
      display: none;
      height: 13px;
      width: 30%;
      margin-top: 14px;
      opacity: 0.7;
    }
    :host([skeleton]) #skeleton-details {
      display: block;
    }
  `;get[bY(0xa7f)](){const qw=bY;return this['hasAttribute'](qw(0xa7f))?this[qw(0xc51)](qw(0xa7f))[qw(0xc97)]('\x20')['filter'](af=>''!==af[qw(0x963)]()):[qw(0xad4),qw(0xadc)];}set['details'](af){const qx=bY;this[qx(0xa0a)](qx(0xa7f),af[qx(0xf5e)](''));}get['data'](){return this.#Ui;}set[bY(0x3ab)](af){this.#Ui=af,this.#A();}get['skeleton'](){const qy=bY;return this['hasAttribute'](qy(0xb09));}set[bY(0xb09)](af){const qz=bY;af?this[qz(0xa0a)](qz(0xb09),''):this['removeAttribute']('skeleton');}get[bY(0x887)](){const qA=bY;return this[qA(0xc51)](qA(0x887));}#T;#P;#Ui=null;constructor(){const qB=bY;super(),this.#P=this[qB(0x1017)]({'mode':'closed'}),this.#P[qB(0x48f)]=[a2[qB(0x500)],Fs.#S],this.#P[qB(0x775)](document[qB(0xc3b)](Fs.#C['content'],!0x0));for(let af of this.#P['querySelectorAll'](qB(0x6e3)))this['#'+af['id']]=af;this[qB(0x376)][qB(0xe90)][qB(0xee8)]=Ht(0x32,0x5a)+'%',this.#P[qB(0x1012)]('pointerdown',ag=>this.#Ye(ag)),this.#P[qB(0x1012)](qB(0xff9),ag=>this.#Xe(ag)),this[qB(0xfa3)][qB(0x1012)]('toggle',()=>this.#Di());}[bY(0x854)](){this.#T=si(this,'#app');}[bY(0x83b)](af,ag,ah){ag!==ah&&'details'===af&&this.#A();}[bY(0x109f)](){return new Promise(async af=>{const qC=a1;this[qC(0xa0a)](qC(0x109f),''),await it(0xc8),this[qC(0x88e)](qC(0x109f)),await it(0xc8),this[qC(0xa0a)](qC(0x109f),''),await it(0xc8),this[qC(0x88e)](qC(0x109f)),af();});}#Ye(af){const qD=bY;af['target'][qD(0xc06)]('a')&&af['preventDefault']();}#Xe(af){const qE=bY;let ag=af['target'][qE(0xc06)]('a');ag?.[qE(0x1061)]===location[qE(0x1061)]&&(ag[qE(0x98c)][qE(0x9ae)]('/bugs')||ag[qE(0x98c)][qE(0x9ae)](qE(0xe97)))&&(af[qE(0x539)](),this.#T[qE(0x908)](ag[qE(0xbd9)]));}async #Di(){const qF=bY;let af=this[qF(0xfa3)][qF(0x42a)]?a2[qF(0x962)]:this.#Ui['srcLocale'];He[qF(0x1d5)](af)?this.#Ui=await Bi[qF(0xa1a)][qF(0x909)](this.#Ui['id'],af):this.#Ui=await Bi[qF(0x2f6)][qF(0xd1f)](qF(0xb29),this.#Ui['id']),this.#A();}#A(){const qG=bY;let af=this.#Ui,ag=this[qG(0xa7f)];if(null!==af){this[qG(0xec7)]['hidden']=0x0===ag[qG(0x6dc)];{let ah=Te(af[qG(0x37a)]),aj=this[qG(0x3ab)]['id'][qG(0xc97)]('-')[0x1];if(this[qG(0xa0a)](qG(0x887),af[qG(0x887)]),this[qG(0x986)]['href']=qG(0x47d)+aj+'/'+af[qG(0xa4b)],this[qG(0x986)][qG(0x8c2)]=ah,ag['includes'](qG(0x35c))?this[qG(0x533)][qG(0xad6)]='#'+aj:this['#hashtag-span']['textContent']='',CSS[qG(0x101d)]&&af['keywords']){let ak=ai(af[qG(0xdf4)],[this[qG(0xb91)]]),al=CSS[qG(0x101d)][qG(0x10bd)](qG(0xaef))||new Highlight();for(let am of ak)al[qG(0xc2f)](am);CSS[qG(0x101d)][qG(0xf62)]('mark',al);}}if(af[qG(0x962)]===af[qG(0xb73)]&&af[qG(0x962)]===a2['locale']?this[qG(0xfa3)][qG(0x96e)]=!0x0:(this[qG(0xfa3)][qG(0x42a)]=af[qG(0x962)]===a2['locale'],this['#translate-button'][qG(0x96e)]=!0x1,this['#src-locale-message'][qG(0xbd9)]=qG(0x627)+(af[qG(0xb73)]||af[qG(0x962)]||'en'),this['#locale-message'][qG(0xbd9)]=qG(0x627)+a2[qG(0x962)]),ag['includes'](qG(0xad4))){let an=af[qG(0x10b6)];this['#created-detail'][qG(0x96e)]=!0x1,this['#created-detail'][qG(0xe90)][qG(0xb5d)]=ag['indexOf']('created'),this[qG(0x10b8)][qG(0xbd9)]=qG(0x1c8)+af[qG(0xbaf)]+'/'+$e(af[qG(0xb8f)]),this['#created-author-anchor'][qG(0xad6)]=af[qG(0xb8f)],this[qG(0xa7f)]['includes'](qG(0x55e))?this['#created-time-span'][qG(0x8c2)]=qG(0xafb)+an+qG(0xaab):this[qG(0x2af)]['innerHTML']='<x-message\x20href=\x22#date-rel\x22\x20args=\x22date:'+an+qG(0xaab);}else this[qG(0xfaf)]['hidden']=!0x0;if(ag[qG(0x1d5)]('updated')){let ap,aq,ar;this[qG(0x4cf)]['hidden']=!0x1,this[qG(0x4cf)][qG(0xe90)][qG(0xb5d)]=ag[qG(0xc56)](qG(0x9b2)),0x0===af['commentsCount']?(ap=af[qG(0x10b6)],aq=qG(0x1c8)+af[qG(0xbaf)]+'/'+$e(af['authorName']),ar=af[qG(0xb8f)]):(ap=af[qG(0xc5c)],aq=qG(0x1c8)+af['threadUpdatedAuthorID']+'/'+$e(af[qG(0xda3)]),ar=af[qG(0xda3)]),this[qG(0xdf0)]['href']=aq,this[qG(0xdf0)][qG(0xad6)]=ar,this[qG(0xa7f)][qG(0x1d5)](qG(0x55e))?this['#updated-time-span'][qG(0x8c2)]=qG(0x9c2)+ap+qG(0xaab):this['#updated-time-span'][qG(0x8c2)]=qG(0x6b1)+ap+qG(0xaab);}else this['#updated-detail'][qG(0x96e)]=!0x0;ag[qG(0x1d5)]('comments')?(this[qG(0xb54)]['hidden']=0x0===af[qG(0x5ff)],this[qG(0xb54)]['style']['order']=ag[qG(0xc56)]('comments'),this[qG(0x8e8)][qG(0xad6)]=af['commentsCount']):this[qG(0xb54)][qG(0x96e)]=!0x0,ag[qG(0x1d5)](qG(0x424))?(this[qG(0xb64)]['hidden']=0x0===af[qG(0x1014)],this[qG(0xb64)][qG(0xe90)]['order']=ag['indexOf']('votes'),this[qG(0x6d3)][qG(0xbd9)]=af['votesCount']<0x0?qG(0x76e):qG(0x7b5),this[qG(0x5aa)]['textContent']=af[qG(0x1014)]):this[qG(0xb64)][qG(0x96e)]=!0x0,ag[qG(0x1d5)]('priority')?(this['#priority-detail'][qG(0x96e)]=!0x1,this['#priority-detail'][qG(0xe90)]['order']=ag[qG(0xc56)]('priority'),this[qG(0x48b)][qG(0xbd9)]=Is(af['priority'])):this[qG(0xd3c)][qG(0x96e)]=!0x0;for(let au of this['#details'][qG(0x44e)](qG(0xf0e)))au['remove']();if(ag[qG(0x1d5)]('tags')&&af[qG(0xadc)][qG(0x6dc)]>0x0){let av='',aw=ag[qG(0xc56)](qG(0xadc));for(let ax of af[qG(0xadc)]){let ay='/bugs?tag='+ye(ax,'\x20','+'),az=Vt(ax);if(ax['includes'](':')){let [aA,aB]=ax['split'](':')[qG(0x8fb)](aC=>aC[qG(0x963)]());av+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22tag-anchor\x22\x20href=\x22'+ay+qG(0x2f5)+aw+qG(0x991)+ax+qG(0xecb)+az+qG(0x30e)+aA+qG(0x837)+aB+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';}else av+=qG(0xcf0)+ay+qG(0x2f5)+aw+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22'+ax+'\x22\x20skin=\x22colored\x22\x20style=\x22background:\x20'+az+qG(0x296)+ax+qG(0x1090);}this[qG(0xec7)][qG(0xdc8)]('beforeend',av);}}}}customElements[bY(0x864)](bY(0x96a),Fs);class Ns extends bs{static [bY(0x1068)]=[bY(0x1ce)];static ['v']=ie` <template> <x-box id="heading-box"> <h2 id="heading"><x-message id="heading-message"></x-message></h2> <bx-avatar id="avatar"></bx-avatar> </x-box> <section id="title-section"> <h3><x-message href="#title"></x-message></h3> <x-input id="title-input" validation="manual" maxlength="135"></x-input> </section> <section id="description-section"> <h3><x-message href="#description"></x-message></h3> <bx-richtextarea id="description-textarea" spellcheck></bx-richtextarea> </section> <section id="options-section"> <x-checkbox id="watch-checkbox" toggled> <x-label><strong><x-message href="#watch-thread"></x-message></strong></x-label> <x-label><x-message href="#watch-thread.detail"></x-message></x-label> </x-checkbox> </section> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#save"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{display:flex;flex-flow:column}h2{margin:0;font-size:28px}h3{margin-bottom:6px}#heading-box{margin-bottom:8px}#avatar{width:40px;height:40px;margin-left:auto}#textarea{min-height:0;margin-top:8px;flex:1}#title-section{margin-top:0}#title-input{width:100%;max-width:none}#title-input[error]::before{top:-20px;right:-4px;left:auto}#description-section{display:flex;flex-flow:column;flex:1;height:100%;min-height:0;margin-top:16px}#description-textarea{height:100%;min-height:0}#description-textarea[error]::before{top:-20px;right:-4px;left:auto}#options-section{margin-top:16px}`;get[bY(0x1ce)](){const qH=bY;return this[qH(0xfd9)](qH(0x1ce))?this['getAttribute'](qH(0x1ce)):qH(0xb4b);}set[bY(0x1ce)](af){const qI=bY;this[qI(0xa0a)](qI(0x1ce),af);}get[bY(0x37a)](){const qJ=bY;return Ce(this[qJ(0xc0c)][qJ(0xf0a)]);}set[bY(0x37a)](af){const qK=bY;this[qK(0xc0c)]['value']=Se(af);}get[bY(0xe24)](){const qL=bY;return this[qL(0x862)][qL(0xf0a)];}set[bY(0xe24)](af){const qM=bY;this[qM(0x862)]['value']=Te(af);}get[bY(0x35a)](){return this['#description-textarea']['blobUrls'];}get['watchThread'](){const qN=bY;return this[qN(0xcfa)][qN(0x42a)];}#at;constructor(){const qO=bY;super(),this[qO(0xc0c)]['addEventListener']('input',()=>this.#us()),this[qO(0x862)][qO(0x1012)](qO(0x84e),()=>this.#ps()),this[qO(0x412)]['addEventListener'](qO(0xff9),af=>this.#ms(af)),this[qO(0x4a1)][qO(0x1012)](qO(0xff9),af=>this.#Pt(af));}[bY(0x854)](){const qP=bY;super['connectedCallback'](),this.#xs(),this.#gs(),this.#bs(),Bi[qP(0xf5c)][qP(0x1012)](qP(0x284),this.#at=()=>{this.#gs();});}[bY(0x7db)](){const qQ=bY;super['disconnectedCallback'](),Bi[qQ(0xf5c)][qQ(0xee0)](qQ(0x284),this.#at);}[bY(0x83b)](af,ag,ah){const qR=bY;ag!==ah&&qR(0x1ce)===af&&this.#xs();}[bY(0xc2a)](){const qS=bY;super[qS(0xc2a)](),this['#title-input'][qS(0xf0a)]='',this[qS(0xc0c)][qS(0x75e)](''),this[qS(0x862)]['value']='',this[qS(0x862)][qS(0x75e)](''),this[qS(0xcfa)]['toggled']=!0x0;}[bY(0xbab)](){const qT=bY;let af=!0x0;return''===this[qT(0x862)][qT(0xf0a)][qT(0x963)]()&&(this['#description-textarea'][qT(0x75e)](qT(0x8d5)),this[qT(0x862)][qT(0x72c)](),af=!0x1),''===this[qT(0xc0c)][qT(0xf0a)]['trim']()&&(this[qT(0xc0c)][qT(0x75e)](qT(0x8d5)),this['#title-input'][qT(0x72c)](),af=!0x1),af;}#us(){const qU=bY;this['p']=!0x0,this[qU(0xc0c)][qU(0x75e)]('');}#ps(){const qV=bY;this['p']=!0x0,this['#description-textarea'][qV(0x75e)]('');}#ms(af){const qW=bY;this['dispatchEvent'](new CustomEvent(qW(0xb26)));}#Pt(af){const qX=bY;this[qX(0x10bf)](new CustomEvent(qX(0xf20)));}#xs(){const qY=bY;this[qY(0x320)][qY(0xbd9)]=qY(0xc58)===this[qY(0x1ce)]?'#edit-bug':qY(0x40e);}async #gs(){const qZ=bY;await Bi[qZ(0xf5c)][qZ(0xfea)],null!==Bi[qZ(0xf5c)][qZ(0xdc1)]&&(this['#avatar'][qZ(0x1ce)]=Bi[qZ(0xf5c)]['userProfile'][qZ(0x58e)]||qZ(0x9ce),this[qZ(0xdcd)]['value']=Bi[qZ(0xf5c)]['userID']);}#bs(){const r0=bY;this[r0(0xc5a)]['hidden']=r0(0xc58)===this[r0(0x1ce)];}}customElements[bY(0x864)]('bx-bugform',Ns);class Os extends ns{static ['_shadowTemplate']=ie` <template> <main id="main"> <div id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <a id="new-bug-anchor" href="/bugs?dialog=new-bug"> <x-button id="new-bug-button" toggled> <x-label><strong><x-message href="#new-bug"></x-message></strong></x-label> </x-button> </a> </div> <bx-bugsfilterblock id="filter-block"></bx-bugsfilterblock> <div id="previews"></div> <div id="previews-skeleton"></div> <bx-placeholderblock id="previews-placeholder" hidden></bx-placeholderblock> <bx-pager id="pager" value="1" max="2"></bx-pager> </main> <div id="dialogs"> <dialog id="bug-dialog"> <bx-bugform id="bug-form" type="new"></bx-bugform> </dialog> </div> </template>
  `;static [bY(0x78e)]=se`#header{display:flex;width:100%}#new-bug-anchor{height:fit-content;margin-left:auto;filter:none;text-decoration:none}#new-bug-button x-label{cursor:pointer}#previews{margin-top:14px}#previews>*{margin:12px 0}#previews>:first-child{margin-top:0}#previews-skeleton>*{margin:12px 0}#previews-skeleton>:first-child{margin-top:0}#pager{margin-top:24px}#bug-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const r1=bY;let af=location['origin']+r1(0xdb5),ag=new URLSearchParams(location[r1(0xa28)]),ah=!0x1;for(let [aj,ak]of ag[r1(0x2b6)]()){if(!(r1(0x7c7)===aj&&parseInt(ak)>0x1)){ah=!0x1;break;}ah=!0x0;}return ah&&(af+='?'+ag[r1(0xd23)]()),af;}#ys;#Xt;#ks=null;constructor(){const r2=bY;super(),this['#filter-block'][r2(0x1012)]('change',af=>this.#Cs(af)),this[r2(0x435)]['addEventListener'](r2(0x105d),af=>this.#Ea(af)),this['#bug-form'][r2(0x1012)](r2(0xf20),af=>this.#La(af)),this[r2(0xd41)]['addEventListener'](r2(0xb26),af=>this.#Ua(af));{let af='';for(let ag=0x0;ag<0xa;ag+=0x1)af+=r2(0x234);this[r2(0xf41)]['innerHTML']=af;}}async[bY(0x854)](){const r3=bY;super[r3(0x854)](),a2['addEventListener'](r3(0x60c),this.#Xt=()=>{this.#si();}),this['o'][r3(0x1012)]('locationchange',this.#ys=af=>{this.#ii(af);}),this.#Es(),await this.#Ls(),r3(0xd25)===new URLSearchParams(location[r3(0xa28)])['get'](r3(0x741))&&this.#Da(),this['u']();}[bY(0x7db)](){const r4=bY;a2[r4(0xee0)]('localeschange',this.#Xt),this['o']['removeEventListener'](r4(0x828),this.#ys);}#si(){const r5=bY;this[r5(0x552)]!==a2[r5(0x962)]&&this.#Ls();}async #ii(af){const r6=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[r6(0xdd7)];if(r6(0xdb5)===ah[r6(0x98c)]){let ak=new URLSearchParams(ag?ag[r6(0xa28)]:''),al=new URLSearchParams(ah[r6(0xa28)]),am=_i(ak,al);{let an=[r6(0xa28),r6(0x887),'upvoted-by','watched-by','created-by','sort',r6(0x9bc),r6(0x7c7)];void 0x0!==am[r6(0x81c)](ap=>an['includes'](ap))&&(r6(0xc68)!==aj&&'replace'!==aj||this['o'][r6(0x2da)](),this.#Es(),await this.#Ls(),r6(0x3ff)===aj&&this['o'][r6(0xb16)]());}if(am[r6(0x1d5)](r6(0x741))){let ap=ak['get']('dialog'),aq=al['get'](r6(0x741));null===aq?r6(0xd25)===ap&&this['#bug-dialog'][r6(0x225)]():r6(0xd25)===aq&&this.#Da();}}}#Cs(af){const r7=bY;let ag=new URL(location[r7(0xbd9)]),ah=new URLSearchParams(location[r7(0xa28)]);ah[r7(0x658)](r7(0x7c7)),''===this[r7(0x3d9)]['search']?ah[r7(0x658)](r7(0xa28)):ah['set'](r7(0xa28),this[r7(0x3d9)][r7(0xa28)]),r7(0x3b9)===this[r7(0x3d9)][r7(0x887)]?ah[r7(0x658)](r7(0x887)):ah['set']('status',this[r7(0x3d9)]['status']),null===this[r7(0x3d9)][r7(0xc3a)]?ah[r7(0x658)](r7(0x7e4)):ah[r7(0xf62)]('upvoted-by',this[r7(0x3d9)]['upvotedBy']),null===this[r7(0x3d9)][r7(0x3b8)]?ah[r7(0x658)](r7(0x882)):ah['set'](r7(0x882),this[r7(0x3d9)][r7(0x3b8)]),null===this[r7(0x3d9)]['createdBy']?ah['delete'](r7(0x583)):ah['set'](r7(0x583),this[r7(0x3d9)][r7(0x7dd)]),r7(0xa28)===af[r7(0xdd7)]&&''!==this[r7(0x3d9)][r7(0xa28)][r7(0x963)]()?ah[r7(0xf62)](r7(0x311),'relevance'):r7(0xebd)===this[r7(0x3d9)][r7(0x311)]?ah[r7(0xf62)]('sort','created'):r7(0xe41)===this[r7(0x3d9)][r7(0x311)]?ah[r7(0xf62)](r7(0x311),'created-asc'):r7(0x1037)===this['#filter-block']['sort']?ah[r7(0x658)](r7(0x311)):r7(0xadd)===this[r7(0x3d9)]['sort']?ah[r7(0xf62)](r7(0x311),r7(0x251)):'commentsCount:desc'===this[r7(0x3d9)][r7(0x311)]?ah['set'](r7(0x311),'comments'):'commentsCount:asc'===this[r7(0x3d9)][r7(0x311)]?ah[r7(0xf62)](r7(0x311),'comments-asc'):r7(0x245)===this[r7(0x3d9)][r7(0x311)]?ah[r7(0xf62)](r7(0x311),r7(0x424)):r7(0x8ea)===this[r7(0x3d9)][r7(0x311)]?ah['set'](r7(0x311),r7(0x401)):r7(0x7bb)===this[r7(0x3d9)][r7(0x311)]?ah[r7(0xf62)](r7(0x311),'priority'):'priority:asc'===this[r7(0x3d9)]['sort']?ah[r7(0xf62)]('sort',r7(0x261)):r7(0x601)===this[r7(0x3d9)][r7(0x311)]&&ah[r7(0xf62)]('sort','relevance'),null===this[r7(0x3d9)][r7(0x9bc)]?ah['delete'](r7(0x9bc)):ah[r7(0xf62)](r7(0x9bc),this[r7(0x3d9)][r7(0x9bc)]),ag[r7(0xa28)]=ah[r7(0xd23)](),this['o'][r7(0x908)](ag['href']);}async #Ua(){const r8=bY;if(!0x0===this['#bug-form'][r8(0xbab)]()){let af=await Xe(),ag=[],ah=null,aj=null,ak={'type':r8(0xbf9),'title':this['#bug-form'][r8(0x37a)],'description':this[r8(0xd41)]['description'],'attachments':{},'watchThread':this[r8(0xd41)][r8(0xafd)]};null!==af&&(ak[r8(0xd88)]=af),this[r8(0xd41)]['throbber']=!0x0;for(let al of this[r8(0xd41)][r8(0x35a)]){let am=await(await fetch(al))['blob'](),an=Kt(0x1e)+'.'+we(am['type']),ap=Bi[r8(0xa0e)][r8(0x21b)](r8(0x3a3)+an,am);ak[r8(0x35a)][al]=an,ag['push'](ap);}try{await Promise[r8(0x3b9)](ag),ah=await Bi['functions'][r8(0x6ba)](r8(0xa75),ak);}catch(aq){aj=aq;}if(null===aj){let ar=ah[r8(0x3ab)],au=ar['split']('-')[0x1];await Bi['index'][r8(0x691)](ar,a2[r8(0x962)]),this['#bug-form'][r8(0x92d)]=!0x1,this[r8(0x435)][r8(0x225)](),this['o'][r8(0x908)](r8(0x47d)+au);}else this[r8(0x435)][r8(0x96e)]=!0x0,this[r8(0xd41)]['throbber']=!0x1,await this['o'][r8(0xafc)]({'title':{'href':r8(0x8bc)},'detail':bi(aj),'buttons':[{'href':r8(0xd94)}]}),this[r8(0x435)][r8(0x96e)]=!0x1;}}#La(){const r9=bY;this['o']['navigate'](qi(location[r9(0xbd9)],'dialog',null));}#Ea(){const rb=bY;this['o']['navigate'](qi(location[rb(0xbd9)],'dialog',null));}async #Da(){const rc=bY;await this[rc(0xfea)],await Bi[rc(0xf5c)][rc(0xfea)],null===Bi[rc(0xf5c)][rc(0xdc1)]?this['o'][rc(0x908)](qi(location[rc(0xbd9)],rc(0x741),rc(0xb28)),!0x0):!0x1===Bi[rc(0xf5c)][rc(0x1009)]?this['o'][rc(0x249)]():(this[rc(0xd41)]['clear'](),this[rc(0xd41)][rc(0x92d)]=!0x1,this['#bug-dialog'][rc(0x96e)]=!0x1,this['#bug-dialog'][rc(0xd44)]());}#Es(){const rd=bY;let af=new URLSearchParams(location[rd(0xa28)]),ag=af[rd(0x10bd)](rd(0x311));this['#filter-block'][rd(0xa28)]=af[rd(0x10bd)](rd(0xa28))||'',this[rd(0x3d9)][rd(0x887)]=af[rd(0x10bd)]('status')||'all',this['#filter-block'][rd(0xc3a)]=af[rd(0x10bd)]('upvoted-by')||null,this[rd(0x3d9)][rd(0x3b8)]=af['get']('watched-by')||null,this[rd(0x3d9)][rd(0x7dd)]=af[rd(0x10bd)](rd(0x583))||null,this[rd(0x3d9)][rd(0x9bc)]=af[rd(0x10bd)]('tag')||null,this[rd(0x3d9)][rd(0x311)]='relevance'===ag?rd(0x601):rd(0xad4)===ag?rd(0xebd):rd(0xa13)===ag?rd(0xe41):'updated'===ag?rd(0x1037):rd(0x251)===ag?rd(0xadd):rd(0x72e)===ag?'commentsCount:desc':rd(0xa80)===ag?rd(0x1044):rd(0x424)===ag?rd(0x245):rd(0x401)===ag?rd(0x8ea):rd(0xa77)===ag?'priority:desc':'priority-asc'===ag?rd(0x445):rd(0x1037);}async #Ls(){return this.#ks&&await this.#ks,this.#ks=new Promise(async af=>{const rf=a1;let ag=new URLSearchParams(location[rf(0xa28)]),ah={'query':this[rf(0x3d9)][rf(0xa28)],'locale':a2[rf(0x962)],'type':rf(0xbf9),'sort':this[rf(0x3d9)][rf(0x311)],'page':parseInt(ag[rf(0x10bd)](rf(0x7c7))||'1'),'perPage':0xa,'preview':!0x0};{let {tag:al,status:am,createdBy:an,watchedBy:ap,upvotedBy:aq}=this[rf(0x3d9)];null!==al&&(ah[rf(0x9bc)]=al),rf(0x9ff)===am?ah[rf(0xc5d)]=!0x1:rf(0xc5d)===am&&(ah[rf(0xc5d)]=!0x0),null===an&&null===ap&&null===aq||(await Bi[rf(0xf5c)][rf(0xfea)],null!==Bi[rf(0xf5c)][rf(0xdc1)]&&(null!==an&&(ah[rf(0xbaf)]=an),null!==ap&&(ah[rf(0x3b8)]=ap),null!==aq&&(ah[rf(0xc3a)]=aq)));}this[rf(0x552)]=ah[rf(0x962)],this['#new-bug-anchor'][rf(0xbd9)]=qi(location[rf(0xbd9)],rf(0x741),rf(0xd25)),this['#previews'][rf(0x8c2)]='',this[rf(0x906)][rf(0x96e)]=!0x0,this[rf(0x906)][rf(0x37a)]='#no-results',this[rf(0x906)][rf(0xe24)]=rf(0x217),this[rf(0xf41)][rf(0x96e)]=!0x1;let [aj,ak]=await Bi[rf(0xa1a)]['searchThreads'](ah);this['#pager'][rf(0x689)]=ak,this['#pager'][rf(0xf0a)]=ah['page'],CSS['highlights']&&CSS[rf(0x101d)]['clear']();for(let ar of aj){let au=document[rf(0x840)](rf(0xe84)),av=document['createElement'](rf(0x96a));rf(0xebd)===ah[rf(0x311)]||rf(0xe41)===ah[rf(0x311)]?av[rf(0xa0a)](rf(0xa7f),rf(0x49d)):rf(0x1037)===ah[rf(0x311)]||rf(0xadd)===ah['sort']?av[rf(0xa0a)](rf(0xa7f),'author\x20updated\x20tags\x20comments\x20hashtag'):rf(0x243)===ah[rf(0x311)]||'commentsCount:asc'===ah['sort']?av[rf(0xa0a)](rf(0xa7f),'author\x20created\x20tags\x20comments\x20hashtag'):'votesCount:desc'===ah['sort']||rf(0x8ea)===ah[rf(0x311)]?av[rf(0xa0a)]('details',rf(0xeb3)):'priority:desc'===ah[rf(0x311)]||rf(0x445)===ah[rf(0x311)]?av[rf(0xa0a)]('details',rf(0xeb7)):'relevance'===ah[rf(0x311)]&&av[rf(0xa0a)](rf(0xa7f),rf(0x49d)),av['id']=ar['id'],av[rf(0x3ab)]=ar,au[rf(0x775)](av),this['#previews'][rf(0x775)](au);}this[rf(0x906)]['hidden']=this[rf(0xd45)][rf(0x7ac)]>0x0,this['#previews-skeleton']['hidden']=!0x0;{let aw=this['o'][rf(0xaad)];if(aw?.[rf(0x98c)][rf(0x9ae)]('/bugs/')){let ax='bug-'+aw['pathname'][rf(0xc97)]('/')[0x2],ay=this[rf(0xd45)][rf(0x344)](rf(0xdec)+ax+'\x22]');ay&&ay[rf(0x109f)]();}}this.#ks=null,af();});}}customElements[bY(0x864)](bY(0x469),Os);class _s extends Ts{static [bY(0x2a2)]=ie` <template> <section id="actions-section"> <h3><x-message href="#actions" autocapitalize></x-message></h3> <x-buttons id="action-buttons"> <x-button id="edit-button" condensed> <x-icon href="#edit"></x-icon> <x-label><x-message href="#edit--verb" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="move-button" condensed> <x-icon href="#move"></x-icon> <x-label><x-message href="#move" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="delete-button" condensed> <x-icon href="#trash"></x-icon> <x-label><x-message href="#delete" autocapitalize ellipsis></x-message></x-label> </x-button> </x-buttons> </section> <hr> <section id="status-section"> <h3><x-message href="#status" autocapitalize></x-message></h3> <x-select id="status-select"> <x-menu> <x-menuitem value="open" toggled> <x-label><x-message href="#bug.open" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="duplicate"> <x-label><x-message href="#bug.duplicate" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="fixed"> <x-label><x-message href="#bug.fixed" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="wont-fix"> <x-label><x-message href="#bug.wont-fix" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="out-of-date"> <x-label><x-message href="#bug.out-of-date" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="priority-section"> <h3><x-message href="#priority" autocapitalize></x-message></h3> <x-select id="priority-select"> <x-menu> <x-menuitem value="-2"> <x-label><x-message href="#priority.very-low" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="-1"> <x-label><x-message href="#priority.low" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="0" toggled> <x-label><x-message href="#priority.normal" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="1"> <x-label><x-message href="#priority.high" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="2"> <x-label><x-message href="#priority.very-high" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="3"> <x-label><x-message href="#priority.critical" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="tags-section"> <h3><x-message href="#tags" autocapitalize></x-message></h3> <x-tagsinput id="tags-input"></x-tagsinput> </section> </template>
  `;static [bY(0x78e)]=se`#action-buttons{width:100%}#action-buttons x-button{flex:1}#status-select{width:100%}#priority-select{width:100%}`;get[bY(0xa77)](){const rg=bY;return parseInt(this[rg(0x789)][rg(0xf0a)]);}set[bY(0xa77)](af){const rh=bY;this[rh(0x789)][rh(0xf0a)]=''+af;}get[bY(0x887)](){const rj=bY;return this[rj(0xa5e)][rj(0xf0a)];}set[bY(0x887)](af){const rk=bY;this[rk(0xa5e)]['value']=af;}get['tags'](){const rl=bY;return this[rl(0xcc6)]['value'];}set[bY(0xadc)](af){const rm=bY;let ag='';for(let ah of af){if(ah[rm(0x1d5)](':')){let [aj,ak]=ah[rm(0xc97)](':')['map'](al=>al[rm(0x963)]());ag+=rm(0x8f5)+ah+rm(0x7df)+aj+rm(0xe8e)+ak+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';}else ag+=rm(0x8f5)+ah+rm(0xe36)+ah+rm(0x5a7);this[rm(0xcc6)][rm(0x8c2)]=ag;}}constructor(){const rn=bY;super(),this[rn(0xcf8)][rn(0x1012)](rn(0xff9),()=>this.#Zs()),this[rn(0xf91)][rn(0x1012)](rn(0xff9),()=>this.#za()),this[rn(0x5ab)][rn(0x1012)](rn(0xff9),()=>this.#Ys()),this[rn(0x789)][rn(0x1012)]('change',()=>this.#Ma()),this['#status-select']['addEventListener'](rn(0x63b),()=>this.#Aa()),this[rn(0xcc6)][rn(0x1012)](rn(0x63b),()=>this.#Xs());}#Zs(){const rp=bY;this[rp(0x10bf)](new CustomEvent('buttonclick',{'detail':rp(0xc58)}));}#za(){const rq=bY;this[rq(0x10bf)](new CustomEvent(rq(0x34d),{'detail':'move'}));}#Ys(){const rr=bY;this[rr(0x10bf)](new CustomEvent('buttonclick',{'detail':rr(0x658)}));}#Ma(){const ru=bY;this['dispatchEvent'](new CustomEvent(ru(0x1078)));}#Aa(){const rv=bY;this[rv(0x10bf)](new CustomEvent(rv(0xc84)));}#Xs(){const rw=bY;this[rw(0x10bf)](new CustomEvent(rw(0x956)));}}customElements[bY(0x864)](bY(0x478),_s);class qs extends HTMLElement{static [bY(0x1068)]=[bY(0x7d2)];static #C=ie` <template> <div id="status" part="status"><x-message id="status-message"></x-message></div> <header id="header" part="header"> <div id="header-left-column"> <a id="author-avatar-anchor"> <bx-avatar id="author-avatar"></bx-avatar> </a> <bx-userbadges id="author-badges"></bx-userbadges> <a id="author-anchor"></a> <span id="wrote-span"></span> <a id="thread-anchor" hidden></a> </div> <div id="header-right-column"> <x-button id="translate-button" togglable> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <x-box id="actions-box"> <x-buttons id="vote-buttons"> <x-button id="votes-count-button"> <x-label id="votes-count-label">0</x-label> </x-button> <x-button id="upvote-button" value="upvote"> <x-icon id="upvote-icon" href="#upvote"></x-icon> <x-tooltip><x-message href="#upvote"></x-message></x-tooltip> </x-button> </x-buttons> <x-button id="watch-button"> <x-icon href="#watch"></x-icon> <x-tooltip><x-message href="#watch"></x-message></x-tooltip> </x-button> <x-button id="edit-button" hidden> <x-icon href="#edit"></x-icon> </x-button> <x-button id="settings-button" hidden> <x-icon href="#hamburger-menu"></x-icon> <x-popover id="settings-popover" modal> <bx-bugsettings id="settings"></bx-bugsettings> </x-popover> </x-button> </x-box> </div> </header> <main id="main" part="main"> <article id="article"> <h2 id="title"> <span id="title-span"></span> <span id="hashtag-span" part="hashtag"></span> </h2> <div id="tags"></div> <section id="description"></section> </article> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      margin: 8px 0;
    }

    /**
     * Header
     */

    #header {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      border-width: 1px;
      border-style: solid;
      font-size: 14.5px;
    }

    #header-left-column {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #header-right-column {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    /* Avatar */

    #author-avatar-anchor {
      display: inline-block;
      vertical-align: middle;
    }
    #author-avatar-anchor[hidden] {
      display: none;
    }

    /* Author badges */

    #author-badges {
      display: inline-block;
      vertical-align: middle;
      margin-left: 2px;
    }
    #author-badges[hidden],
    #author-badges[empty] {
      display: none;
    }

    /* Author name */

    #author-anchor {
      font-weight: 700;
      line-height: 31px;
      margin-left: 2px;
      text-decoration: none;
      color: inherit;
    }
    #author-anchor:hover {
      text-decoration: underline;
    }

    /* Thread anchor */

    #thread-anchor {
      font-weight: 700;
      border-left: 1.5px solid var(--text-color);
      padding-left: 10px;
      margin-left: 6px;
      color: inherit;
      text-decoration: none;
    }
    #thread-anchor:hover {
      text-decoration: underline;
    }

    /* Status badge */

    #status {
      display: none;
      position: absolute;
      top: 95px;
      left: 0;
      margin-left: 100%;
      padding: 3px 6px;
      transform: translateX(-30%) rotate(40deg);
      transform-origin: 0% 0%;
      box-sizing: border-box;
      border-width: 3px;
      border-style: solid;
      font-size: 17px;
      font-weight: 700;
      text-transform: uppercase;
      white-space: pre;
      line-height: 1;
      user-select: none;
      -webkit-user-select: none;
    }
    :host([status="duplicate"]) #status:not([hidden]),
    :host([status="out-of-date"]) #status:not([hidden]),
    :host([status="wont-fix"]) #status:not([hidden]),
    :host([status="fixed"]) #status:not([hidden]) {
      display: block;
    }

    /* "Translate" button */

    #translate-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    /* "Watch" button */

    #watch-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #watch-button x-icon {
      margin: 0;
    }

    /* "Edit" button */

    #edit-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #edit-button x-icon {
      margin: 0;
      width: 14px;
      height: 14px;
    }

    /* "Settings" button */

    #settings-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #settings-button::part(arrow) {
      display: none;
    }

    #settings-button > x-icon {
      width: 15px;
      height: 15px;
    }

    /* "Upvote" button */

    #upvote-button {
      min-height: 25px;
      padding: 0px 9px;
    }

    #upvote-icon {
      width: 14px;
      height: 14px;
      transform: translateY(-1px);
    }

    /* Votes count */

    #votes-count-button {
      margin: 0 0 0 8px;
      min-height: 25px;
      padding: 0px 9px;
      pointer-events: none;
    }

    /**
     * Main
     */

    #main {
      padding: 22px 24px;
      border-width: 1px;
      border-style: solid;
      border-top: none;
    }
    :host([condensed]) #main {
      padding: 10px 18px;
    }

    /* Title */

    #title {
      margin: 0;
    }

    #title #hashtag-span {
      font-size: 20px;
      vertical-align: middle;
      text-transform: lowercase;
    }

    /* Tags */

    #tags {
      display: flex;
      margin-top: 5px;
    }
    #tags:empty,
    #tags[hidden] {
      display: none;
    }

    #tags a {
      display: flex;
      margin: 0 0 0 6px;
      text-decoration: none;
    }
    #tags a:first-child {
      margin-left: 0;
    }
    #tags a:active {
      outline: none;
    }

    /* Description */

    #description {
      margin-top: 20px;
    }
    #title[hidden] + #tags[hidden] + #description {
      margin-top: 0;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set['data'](af){const rx=bY;this.#Ui=af,this[rx(0xc8b)]&&this.#A();}get[bY(0x7d2)](){const ry=bY;return this[ry(0xfd9)]('condensed');}set['condensed'](af){const rz=bY;!0x0===af?this[rz(0xa0a)](rz(0x7d2),''):this['removeAttribute'](rz(0x7d2));}get[bY(0x887)](){const rA=bY;return this[rA(0xc51)](rA(0x887));}#T;#P;#Gt;#Ui=null;constructor(){const rB=bY;super(),this.#P=this[rB(0x1017)]({'mode':rB(0xc5d)}),this.#P[rB(0x48f)]=[a2['themeStyleSheet'],qs.#S],this.#P[rB(0x775)](document[rB(0xc3b)](qs.#C[rB(0x223)],!0x0));for(let af of this.#P['querySelectorAll']('[id]'))this['#'+af['id']]=af;this.#P['addEventListener']('click',ag=>this.#Rs(ag)),this[rB(0xfa3)][rB(0x1012)](rB(0x807),()=>this.#Di()),this[rB(0x9a5)][rB(0x1012)](rB(0xff9),()=>this.#Js()),this[rB(0xcf8)]['addEventListener']('click',()=>this.#Zs()),this['#upvote-button'][rB(0x1012)]('click',ag=>this.#Ba(ag)),this[rB(0xf1b)]['addEventListener'](rB(0x34d),ag=>this.#Qs(ag)),this[rB(0xf1b)][rB(0x1012)](rB(0x1078),()=>this.#Ra()),this[rB(0xf1b)][rB(0x1012)](rB(0xc84),()=>this.#Ia()),this[rB(0xf1b)]['addEventListener'](rB(0x956),()=>this.#ea());}[bY(0x854)](){const rC=bY;this.#T=si(this,rC(0xf55)),Bi[rC(0xf5c)][rC(0x1012)]('userprofilechange',this.#Gt=()=>{this.#A();}),this.#A();}['disconnectedCallback'](){const rD=bY;Bi[rD(0xf5c)][rD(0xee0)]('userprofilechange',this.#Gt);}['attributeChangedCallback'](af,ag,ah){const rE=bY;ag!==ah&&rE(0x7d2)===af&&this.#js();}#js(){const rF=bY;this['#title'][rF(0x96e)]=!0x0===this[rF(0x7d2)],this[rF(0xcad)][rF(0x96e)]=!0x0===this[rF(0x7d2)],this['#author-badges'][rF(0x96e)]=!0x0===this[rF(0x7d2)],this[rF(0x533)]['hidden']=!0x0===this[rF(0x7d2)],this[rF(0x8f2)]['hidden']=!0x1===this['condensed'],this[rF(0x5bb)][rF(0x96e)]=!0x0===this[rF(0x7d2)],this['#actions-box'][rF(0x96e)]=!0x0===this[rF(0x7d2)],this[rF(0x85b)][rF(0x96e)]=!0x0===this[rF(0x7d2)];}#Rs(af){const rG=bY;af[rG(0x779)][rG(0xc06)]('a')?this.#Ks(af):rG(0xd4d)===af['target'][rG(0xa31)]&&this.#pi(af);}async #Ks(af){const rH=bY;let ag=af[rH(0x779)][rH(0xc06)]('a');ag[rH(0x1061)]===location[rH(0x1061)]&&(ag['pathname'][rH(0x9ae)](rH(0xdb5))||ag[rH(0x98c)][rH(0x9ae)](rH(0xe97)))&&(af[rH(0x539)](),this.#T[rH(0x908)](ag[rH(0xbd9)]));}#pi(af){const rI=bY;this.#T['imageViewer'][rI(0xd44)](af[rI(0x779)]);}async #Di(){const rJ=bY;let af=this[rJ(0xfa3)][rJ(0x42a)]?a2[rJ(0x962)]:this.#Ui[rJ(0xb73)];He[rJ(0x1d5)](af)?this.#Ui=await Bi[rJ(0xa1a)][rJ(0x909)](this.#Ui['id'],af):this.#Ui=await Bi['database'][rJ(0xd1f)]('posts',this.#Ui['id']),this.#A();}async #Ba(af){const rK=bY;let ag=af[rK(0x779)][rK(0xc06)](rK(0xa88)),ah=ag[rK(0x42a)]?rK(0x5c8):ag['value'],aj=this[rK(0xa0b)]['toggled'];if(this[rK(0xa0b)]['disabled']=!0x0,this[rK(0xa0b)][rK(0x42a)]=rK(0x3f0)===ah,this[rK(0x5a8)][rK(0x6a2)]=!0x0,!0x1===Bi[rK(0xf5c)]['userEmailVerified'])this['#upvote-button']['toggled']=aj,null===Bi[rK(0xf5c)][rK(0xdc1)]?this.#T[rK(0x908)](qi(location[rK(0xbd9)],rK(0x741),rK(0xb28))):this.#T[rK(0x249)]();else{let ak=this.#Ui['id'],al=Bi['auth']['userID'],am=null;try{rK(0x3f0)===ah?await Bi[rK(0xfb8)][rK(0x6ba)](rK(0x82e),ak):rK(0x9aa)===ah?await Bi[rK(0xfb8)][rK(0x6ba)](rK(0xaa9),ak):rK(0x5c8)===ah&&await Bi[rK(0xfb8)][rK(0x6ba)]('unvotePost',ak);}catch(an){am=an;}null===am?(this.#Ui[rK(0xd30)]=this.#Ui[rK(0xd30)][rK(0xe7a)](ap=>ap!==al),rK(0x3f0)===ah&&this.#Ui[rK(0xd30)][rK(0xc68)](al),this.#Ui['votesCount']=this.#Ui[rK(0xd30)][rK(0x6dc)],this[rK(0xf4a)][rK(0xad6)]=this.#Ui[rK(0x1014)]):(rK(0x3f0)===ah?await this.#T[rK(0xafc)]({'title':{'href':rK(0x565)},'detail':bi(am),'buttons':[{'href':rK(0x95a)}]}):rK(0x5c8)===ah&&await this.#T[rK(0xafc)]({'title':{'href':'#failed-to-unvote-post'},'detail':bi(am),'buttons':[{'href':rK(0x95a)}]}),this['#upvote-button'][rK(0x42a)]=aj);}this[rK(0xa0b)][rK(0x6a2)]=!0x1,this[rK(0x5a8)][rK(0x6a2)]=!0x1;}async #Js(){const rL=bY;let af=!0x0===this[rL(0x9a5)][rL(0x42a)]?rL(0xf72):'watch',ag=this[rL(0x9a5)][rL(0x42a)];if(this['#watch-button']['disabled']=!0x0,this[rL(0x9a5)]['toggled']=rL(0xb4e)===af,!0x1===Bi[rL(0xf5c)]['userEmailVerified'])this['#watch-button'][rL(0x42a)]=ag,null===Bi['auth'][rL(0xdc1)]?this.#T[rL(0x908)](qi(location[rL(0xbd9)],rL(0x741),rL(0xb28))):this.#T['openEmailVerifyMessageDialog']();else{let ah=this.#Ui['id'],aj=Bi['auth'][rL(0xdc1)],ak=null;try{rL(0xb4e)===af?await Bi['functions'][rL(0x6ba)](rL(0xca7),ah):await Bi[rL(0xfb8)][rL(0x6ba)](rL(0x489),ah);}catch(al){ak=al;}null===ak?(this.#Ui[rL(0xeb5)]=this.#Ui[rL(0xeb5)][rL(0xe7a)](am=>am!==aj),rL(0xb4e)===af&&this.#Ui[rL(0xeb5)][rL(0xc68)](aj)):(rL(0xb4e)===af?await this.#T[rL(0xafc)]({'title':{'href':rL(0x1008)},'detail':bi(ak),'buttons':[{'href':rL(0x95a)}]}):await this.#T['openMessageDialog']({'title':{'href':rL(0x2a0)},'detail':bi(ak),'buttons':[{'href':'#close'}]}),this['#watch-button'][rL(0x42a)]=ag);}this[rL(0x9a5)][rL(0x6a2)]=!0x1;}#Zs(){const rM=bY;let af=new URL(location['href']),ag=new URLSearchParams(location['search']);ag[rM(0xf62)](rM(0x741),rM(0xd12)),af[rM(0xa28)]=ag[rM(0xd23)](),this.#T[rM(0x908)](af[rM(0xd23)]());}async #Qs(af){const rN=bY;if('edit'===af['detail']){let ag=new URL(location[rN(0xbd9)]),ah=new URLSearchParams(location[rN(0xa28)]);this[rN(0x50f)][rN(0xcfc)](),ah[rN(0xf62)](rN(0x741),rN(0xd12)),ag[rN(0xa28)]=ah[rN(0xd23)](),await it(0x190),this.#T[rN(0x908)](ag['toString']());}else{if(rN(0x597)===af['detail']){let aj=new URL(location[rN(0xbd9)]),ak=new URLSearchParams(location[rN(0xa28)]);this[rN(0x50f)][rN(0xcfc)](),ak[rN(0xf62)](rN(0x741),rN(0x98e)),aj[rN(0xa28)]=ak['toString'](),await it(0x190),this.#T['navigate'](aj['toString']());}else{if(rN(0x658)===af[rN(0xdd7)]){let al=new URL(location[rN(0xbd9)]),am=new URLSearchParams(location[rN(0xa28)]);this[rN(0x50f)]['collapse'](),am['set'](rN(0x741),rN(0x950)),al[rN(0xa28)]=am[rN(0xd23)](),await it(0x190),this.#T[rN(0x908)](al[rN(0xd23)]());}}}}async #Ra(){const rO=bY;let af=this[rO(0xf1b)][rO(0xa77)],ag=this.#Ui['id'],ah=null;try{await Bi[rO(0xfb8)][rO(0x6ba)](rO(0xf7f),{'id':ag,'priority':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[rO(0xa77)]=af,this.#A()):(await this.#T[rO(0xafc)]({'title':{'href':rO(0x1dd)},'detail':bi(ah),'buttons':[{'href':'#close'}]}),this[rO(0xf1b)][rO(0xa77)]=this.#Ui[rO(0xa77)]);}async #Ia(){const rP=bY;let af=this[rP(0xf1b)][rP(0x887)],ag=this.#Ui['id'],ah=null;try{await Bi[rP(0xfb8)][rP(0x6ba)](rP(0xf7f),{'id':ag,'status':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[rP(0x887)]=af,this.#A()):(await this.#T[rP(0xafc)]({'title':{'href':rP(0xb6d)},'detail':bi(ah),'buttons':[{'href':rP(0x95a)}]}),this[rP(0xf1b)][rP(0x887)]=this.#Ui[rP(0x887)]);}async #ea(){const rQ=bY;let af=this['#settings'][rQ(0xadc)],ag=this.#Ui['id'],ah=null;try{await Bi[rQ(0xfb8)][rQ(0x6ba)](rQ(0xf7f),{'id':ag,'tags':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[rQ(0xadc)]=af,this.#A()):(await this.#T[rQ(0xafc)]({'title':{'href':'#failed-to-change-post-tags'},'detail':bi(ah),'buttons':[{'href':'#close'}]}),this[rQ(0xf1b)][rQ(0xadc)]=this.#Ui[rQ(0xadc)]);}#A(){const rR=bY;let af=null!==Bi[rR(0xf5c)][rR(0xdc1)],ag=Bi[rR(0xf5c)]['isModerator'],ah=af?Bi['auth'][rR(0xdc1)]:null,aj=this.#Ui;if(null!==aj){this['#author-avatar-anchor'][rR(0xbd9)]='/profiles/'+aj['authorID']+'/'+$e(aj[rR(0xb8f)]),this[rR(0x87c)][rR(0x1ce)]=aj['authorAvatar']||rR(0x9ce),this[rR(0x87c)][rR(0xf0a)]=aj[rR(0xbaf)],this[rR(0x7de)][rR(0xd88)]=aj[rR(0xee1)],this[rR(0x7de)]['staff']=rR(0x70e)===aj['authorID'],this['#author-anchor'][rR(0xbd9)]=rR(0x1c8)+aj[rR(0xbaf)]+'/'+$e(aj[rR(0xb8f)]),this[rR(0x107f)][rR(0xad6)]=aj[rR(0xb8f)],this[rR(0x104b)][rR(0x8c2)]='<x-message\x20href=\x22#date-wrote\x22\x20args=\x22date:\x20'+aj[rR(0x10b6)]+rR(0xaab);{let ak=aj['id'][rR(0xc97)]('-')['at'](-0x1);this[rR(0x8f2)][rR(0x8c2)]=Te(aj[rR(0x37a)]),this[rR(0x8f2)][rR(0xbd9)]=rR(0x47d)+ak+'/'+aj['threadSlug'];}aj[rR(0x962)]===aj[rR(0xb73)]&&aj[rR(0x962)]===a2[rR(0x962)]?this['#translate-button'][rR(0x96e)]=!0x0:(this['#translate-button']['toggled']=aj[rR(0x962)]===a2[rR(0x962)],this[rR(0xfa3)][rR(0x96e)]=!0x1,this[rR(0x67c)][rR(0xbd9)]=rR(0x627)+(aj[rR(0xb73)]||aj['locale']||'en'),this[rR(0xb15)][rR(0xbd9)]=rR(0x627)+a2[rR(0x962)]),this[rR(0xa0a)]('status',aj[rR(0x887)]),this['#status-message'][rR(0xbd9)]=rR(0xb17)+aj['status'],this[rR(0xa0b)][rR(0x42a)]=!0x1!==af&&aj[rR(0xd30)][rR(0x1d5)](ah),this[rR(0xf4a)]['textContent']=aj[rR(0x1014)],this[rR(0x9a5)][rR(0x42a)]=!0x0===af&&aj[rR(0xeb5)]['includes'](ah),this[rR(0xcf8)][rR(0x96e)]=!0x0===ag||ah!==aj['authorID'],this[rR(0x50f)]['hidden']=!0x1===ag,!0x1===this[rR(0xe80)][rR(0x753)]&&(this[rR(0xf1b)][rR(0xa77)]=aj[rR(0xa77)],this[rR(0xf1b)]['status']=aj[rR(0x887)],this[rR(0xf1b)]['tags']=aj[rR(0xadc)]),this['#title']['lang']=aj['locale'],this[rR(0xf1d)][rR(0x8c2)]=Te(aj[rR(0x37a)]),this[rR(0x533)][rR(0xad6)]='#'+aj['id'][rR(0xc97)]('-')['at'](-0x1);{let al='';for(let am of aj[rR(0xadc)]){let an=rR(0x637)+ye(am,'\x20','+'),ap=Vt(am);if(am[rR(0x1d5)](':')){let [aq,ar]=am[rR(0xc97)](':')[rR(0x8fb)](au=>au['trim']());al+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22'+an+rR(0xf33)+am+rR(0xecb)+ap+rR(0xafe)+aq+rR(0xa9e)+ar+rR(0x607);}else al+=rR(0x42b)+an+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22'+am+rR(0xecb)+ap+rR(0x955)+am+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';}this[rR(0x5bb)][rR(0x8c2)]=al;}this[rR(0xfe0)][rR(0x8c2)]=Te(aj[rR(0xe24)]),this[rR(0xfe0)]['lang']=aj['locale'];for(let au of this['#description'][rR(0x44e)](rR(0x3cb)))au[rR(0xfd9)](rR(0x105c))&&(au[rR(0x8c2)]=ds(au['textContent'],au[rR(0xc51)]('data-language')));if(CSS[rR(0x101d)]&&aj[rR(0xdf4)]){let av=ai(aj[rR(0xdf4)],[this[rR(0xb91)],this[rR(0xfe0)]]),aw=CSS[rR(0x101d)]['get'](rR(0xaef))||new Highlight();for(let ax of av)aw[rR(0xc2f)](ax);CSS[rR(0x101d)][rR(0xf62)]('mark',aw);}Bi[rR(0xf5c)][rR(0xfea)]['then'](()=>{const rS=rR;if(Bi[rS(0xf5c)][rS(0xa55)]){for(let ay of this[rS(0xfe0)]['querySelectorAll']('img'))Bi[rS(0xa0e)][rS(0x54e)](ay[rS(0xe44)])[rS(0x270)](az=>{const rT=rS;let aA=fe(az[rT(0xb2e)]);ay[rT(0xa0a)]('data-file-size',aA);});}});}}}customElements[bY(0x864)](bY(0x2e3),qs);class js extends bs{static ['v']=ie` <template> <h2><x-message href="#move-post"></x-message></h2> <p><x-message href="#move-post.detail"></x-message></p> <p><x-message href="#new-category"></x-message>:</p> <x-radios id="radios"> <x-radio value="idea" toggled> <x-label><x-message href="#ideas"></x-message></x-label> </x-radio> <x-radio value="question"> <x-label><x-message href="#questions"></x-message></x-label> </x-radio> </x-radios> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#move-post"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:480px}p:last-of-type{margin-bottom:6px}`;constructor(){const rU=bY;super(),this['#cancel-button'][rU(0x1012)]('click',()=>this.#Pt()),this[rU(0x412)][rU(0x1012)](rU(0xff9),af=>this.#ms(af));}#Pt(){const rV=bY;this[rV(0x10bf)](new CustomEvent(rV(0xf20)));}#ms(af){const rW=bY;this[rW(0x10bf)](new CustomEvent('submit',{'detail':this[rW(0xd5c)][rW(0xf0a)]}));}}customElements['define'](bY(0x43e),js);class Vs extends bs{static ['v']=ie` <template> <h2><x-message href="#confirm-delete-post"></x-message></h2> <p><x-message href="#confirm-delete-post.detail"></x-message></p> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"><x-label><x-message href="#cancel"></x-message></x-label></x-button> <x-button id="submit-button" toggled><x-label><x-message href="#delete"></x-message></x-label></x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:400px}`;constructor(){const rX=bY;super(),this[rX(0x4a1)][rX(0x1012)](rX(0xff9),()=>this.#Pt()),this[rX(0x412)][rX(0x1012)](rX(0xff9),af=>this.#ms(af));}#Pt(){this['dispatchEvent'](new CustomEvent('cancel'));}#ms(af){const rY=bY;this[rY(0x10bf)](new CustomEvent(rY(0xb26)));}}customElements[bY(0x864)](bY(0xc6c),Vs);class Gs extends ns{static ['_shadowTemplate']=ie` <template> <main id="main"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <bx-bugblock id="bug-block"></bx-bugblock> <hr id="separator"> <h3 id="comments-heading"> <x-message id="comments-message" href="#comments" args="count: 0"></x-message> </h3> <div id="comments"></div> <a id="new-comment-anchor"> <x-button id="new-comment-button" toggled> <x-label><strong><x-message href="new-comment"></x-message></strong></x-label> </x-button> </a> </main> <div id="dialogs"> <dialog id="bug-dialog"> <bx-bugform id="bug-form" type="edit"></bx-bugform> </dialog> <dialog id="bug-move-dialog"> <bx-bugmoveform id="bug-move-form"></bx-bugmoveform> </dialog> <dialog id="bug-delete-dialog"> <bx-bugdeleteform id="bug-delete-form"></bx-bugdeleteform> </dialog> <dialog id="comment-dialog"> <bx-commentform id="comment-form"></bx-commentform> </dialog> <dialog id="comment-delete-dialog"> <bx-commentdeleteform id="comment-delete-form"></bx-commentdeleteform> </dialog> </div> </template>
  `;static [bY(0x78e)]=se`#separator{margin:35px 0 27px}#bug-block{margin:20px 0 8px 0}#comments-heading{font-size:28px}#new-comment-anchor{display:block;margin-top:15px}#new-comment-button{width:100%;min-height:36px}#new-comment-button x-label{cursor:pointer}#bug-dialog,#comment-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const rZ=bY;let af=this[rZ(0x1063)][rZ(0x3ab)]['id'][rZ(0xc97)]('-')[0x1],ag=this[rZ(0x1063)][rZ(0x3ab)][rZ(0xa4b)];return location['origin']+rZ(0x47d)+af+'/'+ag;}#Xt;#ys;#Gt;#sa=null;constructor(){const s0=bY;super(),this[s0(0x435)][s0(0x1012)](s0(0x105d),af=>this.#aa(af)),this['#bug-form'][s0(0x1012)](s0(0xf20),af=>this.#La(af)),this[s0(0xd41)][s0(0x1012)]('submit',af=>this.#Ua(af)),this[s0(0x890)][s0(0x1012)](s0(0x105d),af=>this.#aa(af)),this[s0(0xe56)][s0(0x1012)](s0(0xb26),af=>this.#Fa(af)),this['#bug-move-form']['addEventListener'](s0(0xf20),af=>this.#Na(af)),this[s0(0xb76)][s0(0x1012)](s0(0x105d),af=>this.#aa(af)),this['#bug-delete-form'][s0(0x1012)](s0(0xb26),af=>this.#Oa(af)),this[s0(0xb89)]['addEventListener'](s0(0xf20),af=>this.#_a(af)),this[s0(0x5d4)][s0(0x1012)](s0(0x105d),af=>this.#aa(af)),this['#comment-form'][s0(0x1012)]('submit',af=>this.#la(af)),this[s0(0xf8e)]['addEventListener'](s0(0xf20),af=>this.#ra(af)),this[s0(0x1064)]['addEventListener']('userclose',af=>this.#aa(af)),this['#comment-delete-form'][s0(0x1012)](s0(0xb26),af=>this.#ha(af)),this[s0(0xf39)][s0(0x1012)](s0(0xf20),af=>this.#ca(af));}async[bY(0x854)](){const s1=bY;super['connectedCallback'](),Bi[s1(0xf5c)]['addEventListener'](s1(0xecc),this.#Gt=af=>{this.#da(af);}),a2[s1(0x1012)](s1(0x60c),this.#Xt=()=>{this.#si();}),this['o']['addEventListener'](s1(0x828),this.#ys=af=>{this.#ii(af);}),await this.#A();{let af=new URLSearchParams(location[s1(0xa28)])[s1(0x10bd)](s1(0x741));null!==af&&(s1(0xd12)===af?this.#qa():'move-bug'===af?this.#ja():'delete-bug'===af?this.#Va():s1(0x24f)===af?this.#ma():af['startsWith'](s1(0x10e3))?this.#ga():af[s1(0x9ae)](s1(0x50e))&&this.#ba());}this['u']();}[bY(0x7db)](){const s2=bY;Bi[s2(0xf5c)][s2(0xee0)](s2(0xecc),this.#Gt),a2['removeEventListener'](s2(0x60c),this.#Xt),this['o'][s2(0xee0)]('locationchange',this.#ys);}#si(){const s3=bY;this[s3(0x552)]!==a2[s3(0x962)]&&this.#A();}async #ii(af){const s4=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[s4(0xdd7)];if(ah[s4(0x98c)][s4(0x9ae)](s4(0x47d))){let ak=new URLSearchParams(ag?ag['search']:''),al=new URLSearchParams(ah[s4(0xa28)]);if(V([...ak[s4(0x414)](),...al[s4(0x414)]()])[s4(0x1d5)]('dialog')){let am=ak[s4(0x10bd)]('dialog'),an=al[s4(0x10bd)](s4(0x741));am!==an&&(null===an?null!==am&&(s4(0xd12)===am?this['#bug-dialog'][s4(0x225)]():s4(0x98e)===am?this[s4(0x890)]['close']():s4(0x950)===am?this[s4(0xb76)][s4(0x225)]():'new-comment'===am||am[s4(0x9ae)](s4(0x10e3))?this[s4(0x5d4)][s4(0x225)]():am[s4(0x9ae)]('delete-comment-')&&this[s4(0x1064)][s4(0x225)]()):'edit-bug'===an?this.#qa():s4(0x98e)===an?this.#ja():s4(0x950)===an?this.#Va():s4(0x24f)===an?this.#ma():an['startsWith']('edit-comment-')?this.#ga():an[s4(0x9ae)](s4(0x50e))&&this.#ba());}}}#da(af){const s5=bY;let ag=Bi['auth']['isModerator'],ah=Bi[s5(0xf5c)]['userProfile'];for(let aj of this[s5(0xdd6)][s5(0x573)])aj[s5(0x387)]=ag,aj[s5(0x97b)]=ag,aj[s5(0xfbc)]=ag;if(ah){let ak=Bi[s5(0xf5c)]['userID'],al=this['#bug-block'][s5(0x3ab)];al?.[s5(0xbaf)]===ak&&al[s5(0xb8f)]!==ah[s5(0xce8)]&&(al['authorName']=ah[s5(0xce8)],this['#bug-block'][s5(0x3ab)]=al);}if(ah){let am=Bi['auth'][s5(0xdc1)];for(let an of this[s5(0xdd6)][s5(0x573)])if(null!==am&&am===an['data'][s5(0xbaf)]){let ap=an[s5(0x3ab)];ap[s5(0xb8f)]!==ah['name']&&(ap[s5(0xb8f)]=ah[s5(0xce8)],an[s5(0x3ab)]=ap);}}}#aa(){const s6=bY;this['o'][s6(0x908)](qi(location[s6(0xbd9)],s6(0x741),null));}async #Ua(){const s7=bY;if(!0x0===this[s7(0xd41)]['reportValidity']()){let af=s7(0xde7)+location[s7(0x98c)][s7(0xc97)]('/')[0x2],ag=[],ah=null,aj={'id':af,'title':this[s7(0xd41)][s7(0x37a)],'description':this[s7(0xd41)][s7(0xe24)],'attachments':{}};this[s7(0xd41)][s7(0x92d)]=!0x0;for(let ak of this[s7(0xd41)]['attachments']){let al=await(await fetch(ak))['blob'](),am=Kt(0x1e)+'.'+we(al[s7(0x1ce)]),an=Bi[s7(0xa0e)][s7(0x21b)](s7(0x3a3)+am,al);aj[s7(0x35a)][ak]=am,ag['push'](an);}try{await Promise[s7(0x3b9)](ag),await Bi[s7(0xfb8)]['postMessage'](s7(0xf7f),aj);}catch(ap){ah=ap;}null===ah?(await Bi['index'][s7(0x273)](af,a2[s7(0x962)],this[s7(0xd41)]['revision']),await this['#bug-dialog'][s7(0x225)](),await it(0x96),await this.#A(),this['o']['navigate'](qi(location[s7(0xbd9)],s7(0x741),null))):(this['#bug-dialog'][s7(0x96e)]=!0x0,await it(0x96),await this['o']['openMessageDialog']({'title':{'href':s7(0xe9a)},'detail':bi(ah),'buttons':[{'href':s7(0xd94)}]}),this[s7(0xd41)]['throbber']=!0x1,this[s7(0x435)][s7(0x96e)]=!0x1);}}async #la(){const s8=bY;if(!0x0===this[s8(0xf8e)][s8(0xbab)]()){let af=new URLSearchParams(location[s8(0xa28)])[s8(0x10bd)](s8(0x741));if(this[s8(0xf8e)][s8(0x92d)]=!0x0,s8(0x24f)===af){let ag='bug-'+location[s8(0x98c)]['split']('/')[0x2],ah=await Xe(),aj=[],ak=null,al=null,am={'type':s8(0x747),'description':this[s8(0xf8e)][s8(0xe24)],'attachments':{},'watchThread':this[s8(0xf8e)][s8(0xafd)],'parentID':ag};null!==ah&&(am[s8(0xd88)]=ah);for(let an of this[s8(0xf8e)]['attachments']){let ap=await(await fetch(an))[s8(0x105a)](),aq=Kt(0x1e)+'.'+we(ap[s8(0x1ce)]),ar=Bi[s8(0xa0e)]['uploadFile']('temp/'+aq,ap);am[s8(0x35a)][an]=aq,aj[s8(0xc68)](ar);}try{await Promise['all'](aj),ak=await Bi['functions']['postMessage'](s8(0xa75),am);}catch(au){al=au;}if(null===al){let av=ak['data'];await Bi[s8(0xa1a)]['whenPostCreated'](av,a2['locale']),this[s8(0xf8e)]['throbber']=!0x1,this['o'][s8(0x908)](qi(location[s8(0xbd9)],s8(0x741),null)),await this.#A();let aw=this[s8(0xdd6)][s8(0x344)]('#'+av);aw&&aw['scrollIntoViewIfNeeded']();}else this[s8(0xf8e)][s8(0x92d)]=!0x1,this[s8(0x5d4)][s8(0x96e)]=!0x0,await it(0x96),await this['o']['openMessageDialog']({'title':{'href':s8(0x353)},'detail':bi(al),'buttons':[{'href':'#back-to-form'}]}),this[s8(0x5d4)][s8(0x96e)]=!0x1;}else{if(af[s8(0x9ae)](s8(0x10e3))){let ax=af[s8(0xe2d)](0x5),ay=this[s8(0xdd6)][s8(0x344)]('#'+ax),az=[],aA=null,aB=null,aC={'id':ax,'description':this['#comment-form'][s8(0xe24)],'attachments':{}};for(let aD of this[s8(0xf8e)][s8(0x35a)]){let aE=await(await fetch(aD))[s8(0x105a)](),aF=Kt(0x1e)+'.'+we(aE[s8(0x1ce)]),aG=Bi[s8(0xa0e)][s8(0x21b)](s8(0x3a3)+aF,aE);aC[s8(0x35a)][aD]=aF,az[s8(0xc68)](aG);}try{await Promise[s8(0x3b9)](az),aA=await Bi['functions'][s8(0x6ba)](s8(0xf7f),aC);}catch(aH){aB=aH;}null===aB?(await Bi[s8(0xa1a)][s8(0x273)](ax,a2[s8(0x962)],this[s8(0xf8e)][s8(0xa45)]),this['o'][s8(0x908)](qi(location[s8(0xbd9)],s8(0x741),null)),await this.#A(),ay=this[s8(0xdd6)][s8(0x344)]('#'+ax),ay&&ay[s8(0x467)]()):(this[s8(0x5d4)]['hidden']=!0x0,await it(0x96),await this['o'][s8(0xafc)]({'title':{'href':s8(0x463)},'detail':bi(aB),'buttons':[{'href':s8(0xd94)}]}),this['#comment-form'][s8(0x92d)]=!0x1,this[s8(0x5d4)][s8(0x96e)]=!0x1);}}}}async #Fa(af){const s9=bY;let ag='bug-'+location[s9(0x98c)][s9(0xc97)]('/')[0x2],ah=null,aj=null;this[s9(0xe56)][s9(0x72c)](),this[s9(0xe56)]['throbber']=!0x0;try{ah=(await Bi[s9(0xfb8)][s9(0x6ba)](s9(0x35b),{'id':ag,'type':af[s9(0xdd7)]}))[s9(0x3ab)];}catch(ak){aj=ak;}if(null===aj){await Bi['index']['whenPostCreated'](ag,a2[s9(0x962)]),await this[s9(0x890)]['close']();let [al,am]=ah['split']('-'),an=s9(0x3fa)===al?al:al+'s';this['o']['navigate']('/'+an+'/'+am,!0x0);}else this['o'][s9(0x908)](qi(location[s9(0xbd9)],s9(0x741),null)),await this['o'][s9(0xafc)]({'title':{'href':'#failed-to-move-post'},'detail':bi(aj),'buttons':[{'href':'#close'}]});}async #Oa(){const sb=bY;let af=sb(0xde7)+location['pathname'][sb(0xc97)]('/')[0x2],ag=null;this['#bug-delete-form'][sb(0x72c)](),this[sb(0xb89)]['throbber']=!0x0;try{await Bi[sb(0xfb8)][sb(0x6ba)](sb(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[sb(0xa1a)][sb(0xffa)](af,a2['locale']),await this['#bug-delete-dialog'][sb(0x225)](),this['o'][sb(0x908)]('/bugs')):(this['o'][sb(0x908)](qi(location[sb(0xbd9)],sb(0x741),null)),await this['o']['openMessageDialog']({'title':{'href':sb(0x207)},'detail':bi(ag),'buttons':[{'href':'#close'}]}));}async #ha(){const sc=bY;let af=new URLSearchParams(location[sc(0xa28)])[sc(0x10bd)](sc(0x741))[sc(0xe2d)](0x7),ag=null;this[sc(0xf39)][sc(0x72c)](),this[sc(0xf39)][sc(0x92d)]=!0x0;try{await Bi[sc(0xfb8)][sc(0x6ba)](sc(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[sc(0xa1a)][sc(0xffa)](af,a2['locale']),this['o'][sc(0x908)](qi(location['href'],'dialog',null)),await this.#A()):(this['o'][sc(0x908)](qi(location[sc(0xbd9)],sc(0x741),null)),await this['o']['openMessageDialog']({'title':{'href':sc(0xe58)},'detail':bi(ag),'buttons':[{'href':'#close'}]}));}#La(){const sd=bY;this['o'][sd(0x908)](qi(location[sd(0xbd9)],'dialog',null));}#Na(){const sf=bY;this['o'][sf(0x908)](qi(location[sf(0xbd9)],sf(0x741),null));}#_a(){const sg=bY;this['o'][sg(0x908)](qi(location['href'],sg(0x741),null));}#ra(){const sh=bY;this['o'][sh(0x908)](qi(location[sh(0xbd9)],'dialog',null));}#ca(){const sj=bY;this['o'][sj(0x908)](qi(location[sj(0xbd9)],'dialog',null));}async #qa(){const sk=bY;if(await this[sk(0xfea)],await Bi[sk(0xf5c)][sk(0xfea)],null===Bi[sk(0xf5c)]['userID'])this['o'][sk(0x908)](qi(location[sk(0xbd9)],sk(0x741),sk(0xb28)),!0x0);else{if(!0x1===Bi['auth']['userEmailVerified'])this['o'][sk(0x249)]();else{let af=sk(0xde7)+location[sk(0x98c)]['split']('/')[0x2],{title:ag,description:ah,revision:aj}=await Bi['database'][sk(0xd1f)]('posts',af);this['#bug-form'][sk(0xc2a)](),this[sk(0xd41)][sk(0x37a)]=ag,this[sk(0xd41)][sk(0xe24)]=ah,this[sk(0xd41)][sk(0xa45)]=aj,this['#bug-form'][sk(0x92d)]=!0x1,this['#bug-dialog']['hidden']=!0x1,this['#bug-dialog'][sk(0xd44)]();}}}async #ja(){const sl=bY;await this[sl(0xfea)],await Bi[sl(0xf5c)][sl(0xfea)],null===Bi[sl(0xf5c)][sl(0xdc1)]?this['o'][sl(0x908)](qi(location[sl(0xbd9)],sl(0x741),'login'),!0x0):!0x1===Bi[sl(0xf5c)][sl(0x1009)]?this['o']['openEmailVerifyMessageDialog']():(this[sl(0xe56)][sl(0x92d)]=!0x1,this[sl(0x890)][sl(0x96e)]=!0x1,this[sl(0x890)][sl(0xd44)]());}async #Va(){const sm=bY;await this[sm(0xfea)],await Bi['auth'][sm(0xfea)],null===Bi[sm(0xf5c)][sm(0xdc1)]?this['o'][sm(0x908)](qi(location['href'],sm(0x741),sm(0xb28)),!0x0):!0x1===Bi[sm(0xf5c)][sm(0x1009)]?this['o'][sm(0x249)]():(this[sm(0xb89)][sm(0x92d)]=!0x1,this[sm(0xb76)][sm(0x96e)]=!0x1,this[sm(0xb76)][sm(0xd44)]());}async #ma(){const sn=bY;await this[sn(0xfea)],await Bi[sn(0xf5c)]['whenReady'],null===Bi[sn(0xf5c)][sn(0xdc1)]?this['o'][sn(0x908)](qi(location[sn(0xbd9)],sn(0x741),sn(0xb28)),!0x0):!0x1===Bi[sn(0xf5c)][sn(0x1009)]?this['o'][sn(0x249)]():(this[sn(0xf8e)][sn(0xc2a)](),this['#comment-form'][sn(0x1ce)]=sn(0xb4b),this[sn(0xf8e)][sn(0xe24)]='',this[sn(0xf8e)]['throbber']=!0x1,this['#comment-dialog'][sn(0x96e)]=!0x1,this['#comment-dialog'][sn(0xd44)]());}async #ga(){const sp=bY;if(await this[sp(0xfea)],await Bi[sp(0xf5c)][sp(0xfea)],null===Bi[sp(0xf5c)][sp(0xdc1)])this['o'][sp(0x908)](qi(location[sp(0xbd9)],sp(0x741),sp(0xb28)),!0x0);else{if(!0x1===Bi['auth'][sp(0x1009)])this['o'][sp(0x249)]();else{let af=new URLSearchParams(location[sp(0xa28)])[sp(0x10bd)](sp(0x741))[sp(0xe2d)](0x5),{description:ag,revision:ah}=await Bi['database'][sp(0xd1f)]('posts',af);this[sp(0xf8e)][sp(0xc2a)](),this[sp(0xf8e)][sp(0x1ce)]=sp(0xc58),this['#comment-form'][sp(0xe24)]=ag,this[sp(0xf8e)]['revision']=ah,this[sp(0xf8e)][sp(0x92d)]=!0x1,this['#comment-dialog'][sp(0x96e)]=!0x1,this[sp(0x5d4)][sp(0xd44)]();}}}async #ba(){const sq=bY;await this['whenReady'],await Bi['auth']['whenReady'],null===Bi[sq(0xf5c)]['userID']?this['o'][sq(0x908)](qi(location['href'],sq(0x741),sq(0xb28)),!0x0):!0x1===Bi[sq(0xf5c)][sq(0x1009)]?this['o'][sq(0x249)]():(this[sq(0xf39)][sq(0x92d)]=!0x1,this[sq(0xf39)][sq(0x96e)]=!0x1,this[sq(0x1064)][sq(0xd44)]());}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const sr=a1;this[sr(0x552)]=a2[sr(0x962)],this['#comments']['innerHTML']='';let ag='bug-'+location['pathname'][sr(0xc97)]('/')[0x2],ah=await Bi[sr(0xa1a)][sr(0x909)](ag,a2[sr(0x962)]),aj=ag['split']('-')[0x1];if(ah){{let ak=sr(0x47d)+aj+'/'+ah[sr(0xa4b)];if(location['pathname']!==ak){let al=location[sr(0xbd9)][sr(0xf0c)](location[sr(0x98c)],ak);this['o'][sr(0x908)](al,!0x0);}}if(this['#bug-block'][sr(0x3ab)]=ah,this[sr(0x3c2)][sr(0xa32)]={'count':ah['commentsCount']},this[sr(0x584)][sr(0xbd9)]=qi(location[sr(0xbd9)],sr(0x741),sr(0x24f)),0x0===ah[sr(0x5ff)])this['#comments'][sr(0x8c2)]='';else{{let aq='';for(let ar=0x0;ar<Math[sr(0x339)](ah[sr(0x5ff)],0xa);ar+=0x1)aq+='<bx-commentblock\x20skeleton></bx-commentblock>';this[sr(0xdd6)]['innerHTML']=aq;}let am=await Bi[sr(0xa1a)][sr(0x4c6)](ag,a2[sr(0x962)]),an=document[sr(0x7aa)](),ap=au=>{const su=sr;let av=document[su(0x840)](su(0xeaa));av['id']=au['id'],av[su(0x3ab)]=au,av['threaded']=!0x1,av[su(0x387)]=Bi['auth'][su(0xa55)],av[su(0x97b)]=Bi[su(0xf5c)][su(0xa55)],av[su(0xfbc)]=Bi[su(0xf5c)]['isModerator'];let aw=am[su(0xe7a)](ax=>ax[su(0x761)]===au['id']);for(let ax of aw){let ay=ap(ax);av[su(0x775)](ay);}return av;};for(let au of am)if(au[sr(0x761)]===ag){let av=ap(au);an[sr(0x775)](av);}this[sr(0xdd6)][sr(0x8c2)]='',this[sr(0xdd6)][sr(0x775)](an);}}this.#sa=null,af();});}}customElements[bY(0x864)](bY(0xde8),Gs);class Hs extends HTMLElement{static #C=ie` <template> <main id="main"> <x-input id="search-input" type="search"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search" autocapitalize ellipsis></x-message></x-label> </x-input> <x-buttons id="status-buttons" tracking="1"> <x-button value="all" condensed> <x-label><x-message href="#ideas.all" autocapitalize></x-message></x-label> </x-button> <x-button value="open" condensed> <x-label><x-message href="#ideas.open" autocapitalize></x-message></x-label> </x-button> <x-button value="closed" condensed> <x-label><x-message href="#ideas.closed" autocapitalize></x-message></x-label> </x-button> </x-buttons> <x-button id="advanced-filters-button"> <x-icon id="advanced-filters-icon" href="#switch"></x-icon> <x-popover id="advanced-filters-popover" modal> <main> <x-switch id="upvoted-by-me-switch"> <x-label><x-message href="#upvoted-by-me"></x-message></x-label> </x-switch> <x-switch id="watched-by-me-switch"> <x-label><x-message href="#watched-by-me"></x-message></x-label> </x-switch> <x-switch id="created-by-me-switch"> <x-label><x-message href="#created-by-me"></x-message></x-label> </x-switch> </main> </x-popover> </x-button> <x-select id="sort-select"> <x-menu> <x-menuitem value="createdTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="createdTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="threadUpdatedTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="threadUpdatedTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="votesCount:desc"> <x-icon href="#upvote"></x-icon> <x-label> <x-message href="#votes"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="votesCount:asc"> <x-icon href="#upvote"></x-icon> <x-label> <x-message href="#votes"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="commentsCount:desc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="commentsCount:asc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="priority:desc"> <x-icon href="#priority"></x-icon> <x-label> <x-message href="#priority"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="priority:asc"> <x-icon href="#priority"></x-icon> <x-label> <x-message href="#priority"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="relevance"> <x-icon href="#search"></x-icon> <x-label><x-message href="#relevance"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Main
     */

    #main {
      display: flex;
      padding: 8px;
    }

    /* Search input */

    #search-input {
      flex: 1;
      min-width: 60px;
      max-width: none;
    }

    /* Status buttons */

    #status-buttons {
      margin-left: 8px;
    }

    /* Advanced filters button */

    #advanced-filters-button {
      margin-left: 8px;
      padding: 2px 9px;
    }

    #advanced-filters-button::part(arrow) {
      display: none;
    }

    #advanced-filters-icon {
      width: 19px;
      height: 19px;
    }

    #advanced-filters-popover > main {
      padding: 12px;
    }

    #advanced-filters-popover #watched-by-me-switch {
      margin-top: 12px;
    }

    #advanced-filters-popover #created-by-me-switch {
      margin-top: 12px;
    }

    /* Sort select */

    #sort-select {
      min-width: 186px;
      margin-left: 8px;
    }
    #sort-select:focus {
      z-index: 1;
    }
    @media all and (max-width: 650px) {
      #sort-select {
        width: 120px;
        min-width: 0px;
      }
    }
    @media all and (max-width: 539px) {
      #sort-select {
        width: 100px;
      }
    }
  `;get[bY(0xa28)](){const sv=bY;let [af]=this['#search-input'][sv(0xf0a)]['split']('#');return af['trim']();}set['search'](af){const sw=bY;let [,ag]=this['#search-input'][sw(0xf0a)][sw(0xc97)]('#');af=af[sw(0x963)](),ag=void 0x0===ag?null:ag[sw(0x963)]();let ah=af;null!==ag&&(af[sw(0x6dc)]>0x0?ah+='\x20#'+ag:ah+='#'+ag),this[sw(0xfd8)][sw(0xf0a)]=ah;}get['tag'](){const sx=bY;let [af,ag]=this[sx(0xfd8)][sx(0xf0a)][sx(0xc97)]('#');return void 0x0===ag?null:ag['trim']();}set[bY(0x9bc)](af){const sy=bY;let [ag]=this[sy(0xfd8)][sy(0xf0a)]['split']('#');ag=ag['trim']();let ah=ag;null!==(af=null===af?null:af[sy(0x963)]())&&(ag[sy(0x6dc)]>0x0?ah+='\x20#'+af:ah+='#'+af),this[sy(0xfd8)][sy(0xf0a)]=ah;}get[bY(0x887)](){const sz=bY;return this['#status-buttons'][sz(0xf0a)];}set['status'](af){const sA=bY;this[sA(0xd54)][sA(0xf0a)]=af;}get['upvotedBy'](){return this.#Ta;}set[bY(0xc3a)](af){const sB=bY;this.#Ta=af,this[sB(0x41f)]['toggled']=null!==af,this.#Si();}get[bY(0x3b8)](){return this.#Ci;}set[bY(0x3b8)](af){const sC=bY;this.#Ci=af,this[sC(0x602)][sC(0x42a)]=null!==af,this.#Si();}get[bY(0x7dd)](){return this.#Ti;}set[bY(0x7dd)](af){const sD=bY;this.#Ti=af,this['#created-by-me-switch'][sD(0x42a)]=null!==af,this.#Si();}get['sort'](){const sE=bY;return this[sE(0x101b)][sE(0xf0a)];}set[bY(0x311)](af){const sF=bY;this[sF(0x101b)][sF(0xf0a)]=af;}#P;#Gt;#Ta=null;#Ci=null;#Ti=null;constructor(){const sG=bY;super(),this.#P=this[sG(0x1017)]({'mode':sG(0xc5d)}),this.#P[sG(0x48f)]=[a2[sG(0x500)],Hs.#S],this.#P[sG(0x775)](document['importNode'](Hs.#C[sG(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](sG(0x6e3)))this['#'+af['id']]=af;this[sG(0xfd8)][sG(0x1012)](sG(0x63b),()=>this.#$i()),this['#status-buttons']['addEventListener'](sG(0x807),()=>this.#$a()),this[sG(0x41f)]['addEventListener'](sG(0x807),()=>this.#Pa()),this['#watched-by-me-switch'][sG(0x1012)]('toggle',()=>this.#Pi()),this[sG(0xb4a)][sG(0x1012)](sG(0x807),()=>this.#Ei()),this[sG(0x101b)][sG(0x1012)](sG(0x63b),()=>this.#Li());}[bY(0x854)](){const sH=bY;Bi['auth']['addEventListener'](sH(0xecc),this.#Gt=()=>{this.#Si();}),this.#Si();}[bY(0x7db)](){const sI=bY;Bi['auth'][sI(0xee0)](sI(0xecc),this.#Gt);}#$i(){const sJ=bY;this[sJ(0x10bf)](new CustomEvent(sJ(0x63b),{'detail':'search'}));}#$a(){const sK=bY;this[sK(0x10bf)](new CustomEvent(sK(0x63b),{'detail':sK(0x887)}));}#Pa(){const sL=bY;this.#Ta=this[sL(0x41f)][sL(0x42a)]?Bi['auth'][sL(0xdc1)]:null,this['dispatchEvent'](new CustomEvent(sL(0x63b),{'detail':sL(0xc3a)})),this.#Si();}#Pi(){const sM=bY;this.#Ci=this[sM(0x602)]['toggled']?Bi[sM(0xf5c)][sM(0xdc1)]:null,this[sM(0x10bf)](new CustomEvent(sM(0x63b),{'detail':sM(0x3b8)})),this.#Si();}#Ei(){const sN=bY;this.#Ti=this[sN(0xb4a)]['toggled']?Bi['auth'][sN(0xdc1)]:null,this[sN(0x10bf)](new CustomEvent(sN(0x63b),{'detail':'createdBy'})),this.#Si();}#Li(){const sO=bY;this[sO(0x10bf)](new CustomEvent(sO(0x63b),{'detail':sO(0x311)}));}async #Si(){const sP=bY;await Bi[sP(0xf5c)]['whenReady'],null===Bi[sP(0xf5c)]['userID']?this[sP(0x5e6)][sP(0x96e)]=!0x0:(this[sP(0x5e6)]['hidden']=!0x1,this[sP(0xc3a)]||this[sP(0x3b8)]||this[sP(0x7dd)]?(this['#advanced-filters-icon']['style'][sP(0x56c)]='var(--accent-color)',this[sP(0xd2d)][sP(0xe90)][sP(0xf95)]=sP(0x9e2)):(this['#advanced-filters-icon'][sP(0xe90)][sP(0x56c)]=null,this[sP(0xd2d)][sP(0xe90)][sP(0xf95)]=null));}}customElements[bY(0x864)](bY(0xde0),Hs);class Ws extends HTMLElement{static ['observedAttributes']=[bY(0xa7f)];static #C=ie` <template> <main id="main"> <div id="title" part="title"> <a id="title-anchor"></a> <span id="hashtag-span" part="hashtag"></span> </div> <x-button id="translate-button" size="small" condensed togglable hidden> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <div id="details" part="details"> <span id="created-detail"> <a id="created-author-anchor"></a> <span id="created-time-span"></span> </span> <span id="updated-detail"> <a id="updated-author-anchor"></a> <span id="updated-time-span"></span> </span> <div id="comments-detail"> <x-icon id="comments-icon" href="#comment-outline"></x-icon> <div id="comments-label"></div> </div> <div id="votes-detail"> <x-icon id="votes-icon" href="#vote"></x-icon> <div id="votes-label"></div> </div> <div id="priority-detail"> <x-icon id="priority-icon" href="#priority"></x-icon> <div id="priority-label"> <x-message id="priority-message"></x-message> </div> </div> </div> <div id="skeleton"> <div id="skeleton-title" part="skeleton-item"></div> <div id="skeleton-details" part="skeleton-item"></div> </div> </main> </template>
  `;static #S=se`
    :host {
      display: flex;
      align-items: stretch;
      box-sizing: border-box;
      width: 100%;
      padding: 12px 15px;
      position: relative;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-weight: inherit;
    }
    a:hover {
      text-decoration: underline;
    }

    #main {
      width: 100%;
    }

    /**
     * Title
     */

    #title {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2;
    }
    :host([skeleton]) #title {
      display: none;
    }

    #title a {
      color: inherit;
      filter: none;
    }

    #title #hashtag-span {
      position: relative;
      bottom: 1px;
      margin-left: 4px;
      vertical-align: middle;
      font-size: 13px;
      text-transform: lowercase;
    }

    /**
     * "Translate" button
     */

    #translate-button {
      float: right;
    }
    :host([skeleton]) #translate-button {
      display: none;
    }

    /**
     * Details
     */

    #details {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      margin-top: 3px;
      font-size: 14.5px;
      line-height: 1.2;
    }
    #details[hidden] {
      display: none;
    }
    :host([skeleton]) #details {
      display: none;
    }

    /* Created */

    #created-detail {
      margin: 2px 12px 2px 0px;
    }

    #created-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #created-author-anchor {
      display: inline;
    }

    /* Updated */

    #updated-detail {
      margin: 2px 12px 2px 0px;
    }

    #updated-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #updated-author-anchor {
      display: inline;
    }

    /* Comments */

    #comments-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #comments-detail[hidden] {
      display: none;
    }

    #comments-icon {
      margin-left: 2px;
      transform: translateY(1px);
    }

    #comments-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Votes */

    #votes-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #votes-detail[hidden] {
      display: none;
    }

    #votes-icon {
      width: 16px;
      height: 16px;
      margin-bottom: 2px;
    }

    #votes-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Priority */

    #priority-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #priority-detail[hidden] {
      display: none;
    }

    #priority-icon {
      width: 17px;
      height: 17px;
    }

    #priority-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Tags */

    a.tag-anchor {
      display: inline-block;
      margin: 2px 6px 2px 0;
      text-decoration: none;
      vertical-align: middle;
    }
    a.tag-anchor:last-of-type {
      margin-right: 12px;
    }

    x-tag {
      vertical-align: middle;
    }

    /**
     * Skeleton
     */

    #skeleton-title {
      display: none;
      height: 20px;
      width: 50%;
    }
    :host([skeleton]) #skeleton-title {
      display: block;
    }

    #skeleton-details {
      display: none;
      height: 13px;
      width: 30%;
      margin-top: 14px;
      opacity: 0.7;
    }
    :host([skeleton]) #skeleton-details {
      display: block;
    }
  `;get[bY(0xa7f)](){const sQ=bY;return this[sQ(0xfd9)]('details')?this[sQ(0xc51)](sQ(0xa7f))[sQ(0xc97)]('\x20')[sQ(0xe7a)](af=>''!==af[sQ(0x963)]()):[sQ(0xad4),'tags'];}set[bY(0xa7f)](af){const sR=bY;this[sR(0xa0a)](sR(0xa7f),af['join'](''));}get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){this.#Ui=af,this.#A();}get['skeleton'](){const sS=bY;return this['hasAttribute'](sS(0xb09));}set['skeleton'](af){const sT=bY;af?this[sT(0xa0a)](sT(0xb09),''):this[sT(0x88e)]('skeleton');}get[bY(0x887)](){const sU=bY;return this[sU(0xc51)](sU(0x887));}#T;#P;#Ui=null;constructor(){const sV=bY;super(),this.#P=this['attachShadow']({'mode':sV(0xc5d)}),this.#P[sV(0x48f)]=[a2[sV(0x500)],Ws.#S],this.#P[sV(0x775)](document['importNode'](Ws.#C[sV(0x223)],!0x0));for(let af of this.#P[sV(0x44e)](sV(0x6e3)))this['#'+af['id']]=af;this[sV(0x376)][sV(0xe90)]['width']=Ht(0x32,0x5a)+'%',this.#P[sV(0x1012)](sV(0x894),ag=>this.#Ye(ag)),this.#P[sV(0x1012)](sV(0xff9),ag=>this.#Xe(ag)),this['#translate-button']['addEventListener'](sV(0x807),()=>this.#Di());}[bY(0x854)](){this.#T=si(this,'#app');}[bY(0x83b)](af,ag,ah){const sW=bY;ag!==ah&&sW(0xa7f)===af&&this.#A();}[bY(0x109f)](){return new Promise(async af=>{const sX=a1;this['setAttribute'](sX(0x109f),''),await it(0xc8),this[sX(0x88e)](sX(0x109f)),await it(0xc8),this[sX(0xa0a)](sX(0x109f),''),await it(0xc8),this['removeAttribute'](sX(0x109f)),af();});}#Ye(af){const sY=bY;af['target']['closest']('a')&&af[sY(0x539)]();}#Xe(af){const sZ=bY;let ag=af[sZ(0x779)]['closest']('a');ag?.[sZ(0x1061)]===location[sZ(0x1061)]&&(ag[sZ(0x98c)][sZ(0x9ae)](sZ(0xc91))||ag[sZ(0x98c)][sZ(0x9ae)]('/profiles'))&&(af['preventDefault'](),this.#T[sZ(0x908)](ag['href']));}async #Di(){const t0=bY;let af=this[t0(0xfa3)]['toggled']?a2[t0(0x962)]:this.#Ui['srcLocale'];He[t0(0x1d5)](af)?this.#Ui=await Bi[t0(0xa1a)][t0(0x909)](this.#Ui['id'],af):this.#Ui=await Bi[t0(0x2f6)]['getDocument'](t0(0xb29),this.#Ui['id']),this.#A();}#A(){const t1=bY;let af=this.#Ui,ag=this[t1(0xa7f)];if(null!==af){this['#details'][t1(0x96e)]=0x0===ag['length'];{let ah=Te(af['title']),aj=this['data']['id']['split']('-')[0x1];if(this[t1(0xa0a)](t1(0x887),af[t1(0x887)]),this[t1(0x986)][t1(0xbd9)]=t1(0x9a4)+aj+'/'+af[t1(0xa4b)],this[t1(0x986)][t1(0x8c2)]=ah,ag[t1(0x1d5)](t1(0x35c))?this[t1(0x533)][t1(0xad6)]='#'+aj:this[t1(0x533)]['textContent']='',CSS[t1(0x101d)]&&af[t1(0xdf4)]){let ak=ai(af[t1(0xdf4)],[this[t1(0xb91)]]),al=CSS[t1(0x101d)]['get'](t1(0xaef))||new Highlight();for(let am of ak)al['add'](am);CSS['highlights'][t1(0xf62)](t1(0xaef),al);}}if(af[t1(0x962)]===af[t1(0xb73)]&&af['locale']===a2[t1(0x962)]?this[t1(0xfa3)][t1(0x96e)]=!0x0:(this['#translate-button'][t1(0x42a)]=af[t1(0x962)]===a2['locale'],this[t1(0xfa3)]['hidden']=!0x1,this[t1(0x67c)][t1(0xbd9)]=t1(0x627)+(af['srcLocale']||af[t1(0x962)]||'en'),this[t1(0xb15)][t1(0xbd9)]=t1(0x627)+a2[t1(0x962)]),ag[t1(0x1d5)](t1(0xad4))){let an=af[t1(0x10b6)];this[t1(0xfaf)]['hidden']=!0x1,this['#created-detail'][t1(0xe90)][t1(0xb5d)]=ag[t1(0xc56)](t1(0xad4)),this[t1(0x10b8)][t1(0xbd9)]=t1(0x1c8)+af[t1(0xbaf)]+'/'+$e(af[t1(0xb8f)]),this[t1(0x10b8)][t1(0xad6)]=af['authorName'],this[t1(0xa7f)][t1(0x1d5)]('author')?this['#created-time-span'][t1(0x8c2)]=t1(0xafb)+an+t1(0xaab):this[t1(0x2af)][t1(0x8c2)]=t1(0x6b1)+an+t1(0xaab);}else this[t1(0xfaf)][t1(0x96e)]=!0x0;if(ag[t1(0x1d5)]('updated')){let ap,aq,ar;this[t1(0x4cf)][t1(0x96e)]=!0x1,this[t1(0x4cf)][t1(0xe90)]['order']=ag[t1(0xc56)](t1(0x9b2)),0x0===af['commentsCount']?(ap=af[t1(0x10b6)],aq=t1(0x1c8)+af[t1(0xbaf)]+'/'+$e(af['authorName']),ar=af[t1(0xb8f)]):(ap=af[t1(0xc5c)],aq=t1(0x1c8)+af[t1(0xcb4)]+'/'+$e(af['threadUpdatedAuthorName']),ar=af[t1(0xda3)]),this[t1(0xdf0)][t1(0xbd9)]=aq,this[t1(0xdf0)][t1(0xad6)]=ar,this[t1(0xa7f)][t1(0x1d5)](t1(0x55e))?this['#updated-time-span']['innerHTML']=t1(0x9c2)+ap+t1(0xaab):this['#updated-time-span'][t1(0x8c2)]=t1(0x6b1)+ap+t1(0xaab);}else this['#updated-detail'][t1(0x96e)]=!0x0;ag[t1(0x1d5)](t1(0x72e))?(this[t1(0xb54)][t1(0x96e)]=0x0===af[t1(0x5ff)],this[t1(0xb54)][t1(0xe90)][t1(0xb5d)]=ag[t1(0xc56)](t1(0x72e)),this[t1(0x8e8)]['textContent']=af[t1(0x5ff)]):this['#comments-detail']['hidden']=!0x0,ag[t1(0x1d5)](t1(0x424))?(this[t1(0xb64)][t1(0x96e)]=0x0===af[t1(0x1014)],this['#votes-detail'][t1(0xe90)][t1(0xb5d)]=ag[t1(0xc56)]('votes'),this[t1(0x6d3)][t1(0xbd9)]=af['votesCount']<0x0?'#downvote':t1(0x7b5),this[t1(0x5aa)][t1(0xad6)]=af[t1(0x1014)]):this[t1(0xb64)][t1(0x96e)]=!0x0,ag[t1(0x1d5)](t1(0xa77))?(this[t1(0xd3c)][t1(0x96e)]=!0x1,this[t1(0xd3c)][t1(0xe90)][t1(0xb5d)]=ag[t1(0xc56)]('priority'),this[t1(0x48b)]['href']=Is(af[t1(0xa77)])):this[t1(0xd3c)][t1(0x96e)]=!0x0;for(let au of this['#details']['querySelectorAll']('a.tag-anchor'))au[t1(0x102a)]();if(ag[t1(0x1d5)]('tags')&&af[t1(0xadc)][t1(0x6dc)]>0x0){let av='',aw=ag[t1(0xc56)]('tags');for(let ax of af['tags']){let ay=t1(0x3c9)+ye(ax,'\x20','+'),az=Vt(ax);if(ax['includes'](':')){let [aA,aB]=ax[t1(0xc97)](':')[t1(0x8fb)](aC=>aC['trim']());av+=t1(0xcf0)+ay+t1(0x2f5)+aw+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22'+ax+t1(0xecb)+az+t1(0x30e)+aA+t1(0x837)+aB+t1(0x1090);}else av+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22tag-anchor\x22\x20href=\x22'+ay+'\x22\x20style=\x22order:\x20'+aw+t1(0x991)+ax+'\x22\x20skin=\x22colored\x22\x20style=\x22background:\x20'+az+t1(0x296)+ax+t1(0x1090);}this[t1(0xec7)][t1(0xdc8)]('beforeend',av);}}}}customElements[bY(0x864)](bY(0xd82),Ws);class Ks extends bs{static [bY(0x1068)]=[bY(0x1ce)];static ['v']=ie` <template> <x-box id="heading-box"> <h2 id="heading"><x-message id="heading-message"></x-message></h2> <bx-avatar id="avatar"></bx-avatar> </x-box> <section id="title-section"> <h3><x-message href="#title"></x-message></h3> <x-input id="title-input" validation="manual" maxlength="135"></x-input> </section> <section id="description-section"> <h3><x-message href="#description"></x-message></h3> <bx-richtextarea id="description-textarea" spellcheck></bx-richtextarea> </section> <section id="options-section"> <x-checkbox id="watch-checkbox" toggled> <x-label><strong><x-message href="#watch-thread"></x-message></strong></x-label> <x-label><x-message href="#watch-thread.detail"></x-message></x-label> </x-checkbox> </section> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#save"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{display:flex;flex-flow:column}h2{margin:0;font-size:28px}h3{margin-bottom:6px}#heading-box{margin-bottom:8px}#avatar{width:40px;height:40px;margin-left:auto}#textarea{min-height:0;margin-top:8px;flex:1}#title-section{margin-top:0}#title-input{width:100%;max-width:none}#title-input[error]::before{top:-20px;right:-4px;left:auto}#description-section{display:flex;flex-flow:column;flex:1;height:100%;min-height:0;margin-top:16px}#description-textarea{height:100%;min-height:0}#description-textarea[error]::before{top:-20px;right:-4px;left:auto}#options-section{margin-top:16px}`;get[bY(0x1ce)](){const t2=bY;return this[t2(0xfd9)](t2(0x1ce))?this['getAttribute']('type'):t2(0xb4b);}set['type'](af){const t3=bY;this[t3(0xa0a)](t3(0x1ce),af);}get[bY(0x37a)](){const t4=bY;return Ce(this[t4(0xc0c)]['value']);}set[bY(0x37a)](af){const t5=bY;this[t5(0xc0c)][t5(0xf0a)]=Se(af);}get[bY(0xe24)](){const t6=bY;return this['#description-textarea'][t6(0xf0a)];}set['description'](af){const t7=bY;this[t7(0x862)][t7(0xf0a)]=Te(af);}get[bY(0x35a)](){const t8=bY;return this['#description-textarea'][t8(0x94e)];}get[bY(0xafd)](){return this['#watch-checkbox']['toggled'];}#at;constructor(){const t9=bY;super(),this[t9(0xc0c)][t9(0x1012)](t9(0x84e),()=>this.#us()),this[t9(0x862)][t9(0x1012)](t9(0x84e),()=>this.#ps()),this[t9(0x412)][t9(0x1012)](t9(0xff9),af=>this.#ms(af)),this[t9(0x4a1)][t9(0x1012)](t9(0xff9),af=>this.#Pt(af));}['connectedCallback'](){const tb=bY;super[tb(0x854)](),this.#xs(),this.#gs(),this.#bs(),Bi[tb(0xf5c)][tb(0x1012)](tb(0x284),this.#at=()=>{this.#gs();});}[bY(0x7db)](){const tc=bY;super[tc(0x7db)](),Bi[tc(0xf5c)][tc(0xee0)](tc(0x284),this.#at);}[bY(0x83b)](af,ag,ah){const td=bY;ag!==ah&&td(0x1ce)===af&&this.#xs();}[bY(0xc2a)](){const tf=bY;super[tf(0xc2a)](),this['#title-input']['value']='',this[tf(0xc0c)]['setCustomValidity'](''),this['#description-textarea'][tf(0xf0a)]='',this[tf(0x862)][tf(0x75e)](''),this[tf(0xcfa)]['toggled']=!0x0;}[bY(0xbab)](){const tg=bY;let af=!0x0;return''===this['#description-textarea'][tg(0xf0a)][tg(0x963)]()&&(this[tg(0x862)][tg(0x75e)](tg(0x8d5)),this[tg(0x862)][tg(0x72c)](),af=!0x1),''===this[tg(0xc0c)]['value'][tg(0x963)]()&&(this[tg(0xc0c)]['setCustomValidity'](tg(0x8d5)),this[tg(0xc0c)][tg(0x72c)](),af=!0x1),af;}#us(){const th=bY;this['p']=!0x0,this['#title-input'][th(0x75e)]('');}#ps(){const tj=bY;this['p']=!0x0,this[tj(0x862)][tj(0x75e)]('');}#ms(af){const tk=bY;this[tk(0x10bf)](new CustomEvent(tk(0xb26)));}#Pt(af){const tl=bY;this[tl(0x10bf)](new CustomEvent('cancel'));}#xs(){const tm=bY;this['#heading-message'][tm(0xbd9)]=tm(0xc58)===this[tm(0x1ce)]?tm(0xa46):tm(0xc22);}async #gs(){const tn=bY;await Bi[tn(0xf5c)][tn(0xfea)],null!==Bi[tn(0xf5c)][tn(0xdc1)]&&(this[tn(0xdcd)]['type']=Bi[tn(0xf5c)][tn(0x1050)][tn(0x58e)]||tn(0x9ce),this[tn(0xdcd)][tn(0xf0a)]=Bi['auth'][tn(0xdc1)]);}#bs(){const tp=bY;this['#options-section'][tp(0x96e)]=tp(0xc58)===this['type'];}}customElements[bY(0x864)](bY(0xfd6),Ks);class Zs extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <div id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <a id="new-idea-anchor" href="/ideas?dialog=new-idea"> <x-button id="new-idea-button" toggled> <x-label><strong><x-message href="#new-idea"></x-message></strong></x-label> </x-button> </a> </div> <bx-ideasfilterblock id="filter-block"></bx-ideasfilterblock> <div id="previews"></div> <div id="previews-skeleton"></div> <bx-placeholderblock id="previews-placeholder" hidden></bx-placeholderblock> <bx-pager id="pager" value="1" max="1"></bx-pager> </main> <div id="dialogs"> <dialog id="idea-dialog"> <bx-ideaform id="idea-form" type="new"></bx-ideaform> </dialog> </div> </template>
  `;static [bY(0x78e)]=se`#header{display:flex;width:100%}#new-idea-anchor{height:fit-content;margin-left:auto;filter:none;text-decoration:none}#new-idea-button x-label{cursor:pointer}#previews{margin-top:14px}#previews>*{margin:12px 0}#previews>:first-child{margin-top:0}#previews-skeleton>*{margin:12px 0}#previews-skeleton>:first-child{margin-top:0}#pager{margin-top:24px}#idea-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const tq=bY;let af=location[tq(0x1061)]+tq(0xc91),ag=new URLSearchParams(location[tq(0xa28)]),ah=!0x1;for(let [aj,ak]of ag['entries']()){if(!(tq(0x7c7)===aj&&parseInt(ak)>0x1)){ah=!0x1;break;}ah=!0x0;}return ah&&(af+='?'+ag[tq(0xd23)]()),af;}#ys;#Xt;#ks=null;constructor(){const tr=bY;super(),this[tr(0x3d9)]['addEventListener']('change',af=>this.#Cs(af)),this[tr(0xddf)]['addEventListener']('userclose',af=>this.#Ga(af)),this[tr(0xfe2)][tr(0x1012)](tr(0xf20),af=>this.#Ha(af)),this[tr(0xfe2)][tr(0x1012)](tr(0xb26),af=>this.#Wa(af));{let af='';for(let ag=0x0;ag<0xa;ag+=0x1)af+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<bx-ideapreviewblock\x20skeleton></bx-ideapreviewblock>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-card>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';this[tr(0xf41)]['innerHTML']=af;}}async[bY(0x854)](){const tu=bY;super[tu(0x854)](),a2['addEventListener'](tu(0x60c),this.#Xt=()=>{this.#si();}),this['o'][tu(0x1012)]('locationchange',this.#ys=af=>{this.#ii(af);}),this.#Es(),await this.#Ls(),tu(0x811)===new URLSearchParams(location['search'])[tu(0x10bd)]('dialog')&&this.#Ka(),this['u']();}['disconnectedCallback'](){const tv=bY;a2[tv(0xee0)](tv(0x60c),this.#Xt),this['o'][tv(0xee0)](tv(0x828),this.#ys);}#si(){const tw=bY;this[tw(0x552)]!==a2[tw(0x962)]&&this.#Ls();}async #ii(af){const tx=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[tx(0xdd7)];if(tx(0xc91)===ah['pathname']){let ak=new URLSearchParams(ag?ag[tx(0xa28)]:''),al=new URLSearchParams(ah[tx(0xa28)]),am=_i(ak,al);{let an=['search',tx(0x887),tx(0x7e4),'watched-by',tx(0x583),tx(0x311),tx(0x9bc),'page'];void 0x0!==am[tx(0x81c)](ap=>an[tx(0x1d5)](ap))&&(tx(0xc68)!==aj&&tx(0xf0c)!==aj||this['o'][tx(0x2da)](),this.#Es(),await this.#Ls(),'pop'===aj&&this['o'][tx(0xb16)]());}if(am[tx(0x1d5)](tx(0x741))){let ap=ak[tx(0x10bd)]('dialog'),aq=al['get']('dialog');null===aq?tx(0x811)===ap&&this[tx(0xddf)][tx(0x225)]():'new-idea'===aq&&this.#Ka();}}}#Cs(af){const ty=bY;let ag=new URL(location[ty(0xbd9)]),ah=new URLSearchParams(location['search']);ah[ty(0x658)](ty(0x7c7)),''===this[ty(0x3d9)][ty(0xa28)]?ah[ty(0x658)](ty(0xa28)):ah[ty(0xf62)]('search',this[ty(0x3d9)][ty(0xa28)]),ty(0x3b9)===this['#filter-block'][ty(0x887)]?ah[ty(0x658)]('status'):ah[ty(0xf62)](ty(0x887),this[ty(0x3d9)][ty(0x887)]),null===this['#filter-block']['upvotedBy']?ah[ty(0x658)](ty(0x7e4)):ah[ty(0xf62)](ty(0x7e4),this[ty(0x3d9)][ty(0xc3a)]),null===this[ty(0x3d9)][ty(0x3b8)]?ah[ty(0x658)]('watched-by'):ah[ty(0xf62)]('watched-by',this[ty(0x3d9)][ty(0x3b8)]),null===this[ty(0x3d9)]['createdBy']?ah[ty(0x658)](ty(0x583)):ah[ty(0xf62)](ty(0x583),this['#filter-block'][ty(0x7dd)]),ty(0xa28)===af['detail']&&''!==this['#filter-block']['search'][ty(0x963)]()?ah[ty(0xf62)](ty(0x311),'relevance'):ty(0xebd)===this[ty(0x3d9)][ty(0x311)]?ah[ty(0xf62)](ty(0x311),ty(0xad4)):ty(0xe41)===this['#filter-block'][ty(0x311)]?ah['set'](ty(0x311),ty(0xa13)):'threadUpdatedTime:desc'===this[ty(0x3d9)][ty(0x311)]?ah[ty(0x658)]('sort'):ty(0xadd)===this[ty(0x3d9)][ty(0x311)]?ah[ty(0xf62)](ty(0x311),'updated-asc'):ty(0x243)===this['#filter-block'][ty(0x311)]?ah[ty(0xf62)](ty(0x311),ty(0x72e)):ty(0x1044)===this[ty(0x3d9)][ty(0x311)]?ah[ty(0xf62)]('sort','comments-asc'):ty(0x245)===this[ty(0x3d9)]['sort']?ah['set']('sort',ty(0x424)):ty(0x8ea)===this[ty(0x3d9)][ty(0x311)]?ah[ty(0xf62)]('sort',ty(0x401)):'priority:desc'===this[ty(0x3d9)]['sort']?ah['set'](ty(0x311),ty(0xa77)):ty(0x445)===this[ty(0x3d9)][ty(0x311)]?ah[ty(0xf62)](ty(0x311),ty(0x261)):ty(0x601)===this['#filter-block']['sort']&&ah[ty(0xf62)]('sort','relevance'),null===this[ty(0x3d9)]['tag']?ah[ty(0x658)](ty(0x9bc)):ah['set'](ty(0x9bc),this[ty(0x3d9)][ty(0x9bc)]),ag[ty(0xa28)]=ah[ty(0xd23)](),this['o'][ty(0x908)](ag[ty(0xbd9)]);}async #Wa(){const tz=bY;if(!0x0===this[tz(0xfe2)][tz(0xbab)]()){let af=await Xe(),ag=[],ah=null,aj=null,ak={'type':tz(0xaa0),'title':this['#idea-form']['title'],'description':this['#idea-form'][tz(0xe24)],'attachments':{},'watchThread':this[tz(0xfe2)][tz(0xafd)]};null!==af&&(ak['userAgent']=af),this[tz(0xfe2)][tz(0x92d)]=!0x0;for(let al of this['#idea-form'][tz(0x35a)]){let am=await(await fetch(al))[tz(0x105a)](),an=Kt(0x1e)+'.'+we(am[tz(0x1ce)]),ap=Bi[tz(0xa0e)]['uploadFile'](tz(0x3a3)+an,am);ak['attachments'][al]=an,ag[tz(0xc68)](ap);}try{await Promise[tz(0x3b9)](ag),ah=await Bi[tz(0xfb8)][tz(0x6ba)](tz(0xa75),ak);}catch(aq){aj=aq;}if(null===aj){let ar=ah[tz(0x3ab)],au=ar['split']('-')[0x1];await Bi[tz(0xa1a)][tz(0x691)](ar,a2[tz(0x962)]),this[tz(0xfe2)]['throbber']=!0x1,this[tz(0xddf)]['close'](),this['o'][tz(0x908)](tz(0x9a4)+au);}else this[tz(0xddf)][tz(0x96e)]=!0x0,this[tz(0xfe2)][tz(0x92d)]=!0x1,await this['o'][tz(0xafc)]({'title':{'href':tz(0x8bc)},'detail':bi(aj),'buttons':[{'href':tz(0xd94)}]}),this[tz(0xddf)]['hidden']=!0x1;}}#Ha(){const tA=bY;this['o'][tA(0x908)](qi(location['href'],tA(0x741),null));}#Ga(){const tB=bY;this['o'][tB(0x908)](qi(location[tB(0xbd9)],tB(0x741),null));}async #Ka(){const tC=bY;await this[tC(0xfea)],await Bi[tC(0xf5c)][tC(0xfea)],null===Bi[tC(0xf5c)][tC(0xdc1)]?this['o'][tC(0x908)](qi(location[tC(0xbd9)],tC(0x741),tC(0xb28)),!0x0):!0x1===Bi[tC(0xf5c)][tC(0x1009)]?this['o']['openEmailVerifyMessageDialog']():(this['#idea-form'][tC(0xc2a)](),this[tC(0xfe2)][tC(0x92d)]=!0x1,this['#idea-dialog'][tC(0x96e)]=!0x1,this[tC(0xddf)][tC(0xd44)]());}#Es(){const tD=bY;let af=new URLSearchParams(location[tD(0xa28)]),ag=af['get'](tD(0x311));this[tD(0x3d9)][tD(0xa28)]=af[tD(0x10bd)]('search')||'',this['#filter-block']['status']=af[tD(0x10bd)]('status')||'all',this[tD(0x3d9)][tD(0xc3a)]=af[tD(0x10bd)](tD(0x7e4))||null,this['#filter-block'][tD(0x3b8)]=af['get'](tD(0x882))||null,this['#filter-block'][tD(0x7dd)]=af[tD(0x10bd)](tD(0x583))||null,this['#filter-block'][tD(0x9bc)]=af['get'](tD(0x9bc))||null,this[tD(0x3d9)][tD(0x311)]=tD(0x601)===ag?tD(0x601):tD(0xad4)===ag?tD(0xebd):'created-asc'===ag?'createdTime:asc':tD(0x9b2)===ag?'threadUpdatedTime:desc':tD(0x251)===ag?'threadUpdatedTime:asc':tD(0x72e)===ag?'commentsCount:desc':tD(0xa80)===ag?tD(0x1044):'votes'===ag?tD(0x245):tD(0x401)===ag?tD(0x8ea):tD(0xa77)===ag?tD(0x7bb):'priority-asc'===ag?'priority:asc':'threadUpdatedTime:desc';}async #Ls(){return this.#ks&&await this.#ks,this.#ks=new Promise(async af=>{const tE=a1;let ag=new URLSearchParams(location[tE(0xa28)]),ah={'query':this[tE(0x3d9)][tE(0xa28)],'locale':a2[tE(0x962)],'type':'idea','sort':this[tE(0x3d9)]['sort'],'page':parseInt(ag['get'](tE(0x7c7))||'1'),'perPage':0xa,'preview':!0x0};{let {tag:al,status:am,createdBy:an,watchedBy:ap,upvotedBy:aq}=this[tE(0x3d9)];null!==al&&(ah[tE(0x9bc)]=al),'open'===am?ah[tE(0xc5d)]=!0x1:tE(0xc5d)===am&&(ah[tE(0xc5d)]=!0x0),null===an&&null===ap&&null===aq||(await Bi['auth'][tE(0xfea)],null!==Bi[tE(0xf5c)][tE(0xdc1)]&&(null!==an&&(ah[tE(0xbaf)]=an),null!==ap&&(ah[tE(0x3b8)]=ap),null!==aq&&(ah[tE(0xc3a)]=aq)));}this[tE(0x552)]=ah[tE(0x962)],this[tE(0xfa8)][tE(0xbd9)]=qi(location[tE(0xbd9)],tE(0x741),tE(0x811)),this[tE(0xd45)][tE(0x8c2)]='',this[tE(0x906)][tE(0x96e)]=!0x0,this[tE(0x906)][tE(0x37a)]=tE(0x7ae),this[tE(0x906)][tE(0xe24)]=tE(0x217),this['#previews-skeleton']['hidden']=!0x1;let [aj,ak]=await Bi[tE(0xa1a)][tE(0xd53)](ah);this[tE(0x93d)][tE(0x689)]=ak,this[tE(0x93d)][tE(0xf0a)]=ah[tE(0x7c7)],CSS[tE(0x101d)]&&CSS[tE(0x101d)][tE(0xc2a)]();for(let ar of aj){let au=document[tE(0x840)](tE(0xe84)),av=document[tE(0x840)]('bx-ideapreviewblock');'createdTime:desc'===ah[tE(0x311)]||tE(0xe41)===ah[tE(0x311)]?av[tE(0xa0a)](tE(0xa7f),tE(0x49d)):'threadUpdatedTime:desc'===ah[tE(0x311)]||'threadUpdatedTime:asc'===ah[tE(0x311)]?av[tE(0xa0a)](tE(0xa7f),tE(0x76d)):tE(0x243)===ah[tE(0x311)]||tE(0x1044)===ah[tE(0x311)]?av[tE(0xa0a)](tE(0xa7f),tE(0x49d)):tE(0x245)===ah[tE(0x311)]||tE(0x8ea)===ah['sort']?av[tE(0xa0a)](tE(0xa7f),tE(0xeb3)):tE(0x7bb)===ah[tE(0x311)]||'priority:asc'===ah[tE(0x311)]?av[tE(0xa0a)]('details',tE(0xeb7)):tE(0x601)===ah['sort']&&av[tE(0xa0a)](tE(0xa7f),tE(0x49d)),av['id']=ar['id'],av[tE(0x3ab)]=ar,au[tE(0x775)](av),this[tE(0xd45)][tE(0x775)](au);}this['#previews-placeholder']['hidden']=this['#previews'][tE(0x7ac)]>0x0,this[tE(0xf41)][tE(0x96e)]=!0x0;{let aw=this['o']['oldLocation'];if(aw?.[tE(0x98c)][tE(0x9ae)](tE(0x9a4))){let ax=tE(0x8d7)+aw[tE(0x98c)][tE(0xc97)]('/')[0x2],ay=this['#previews'][tE(0x344)](tE(0xacf)+ax+'\x22]');ay&&ay[tE(0x109f)]();}}this.#ks=null,af();});}}customElements[bY(0x864)](bY(0xdef),Zs);class Ys extends Ts{static ['_shadowTemplate']=ie` <template> <section id="actions-section"> <h3><x-message href="#actions" autocapitalize></x-message></h3> <x-buttons id="action-buttons"> <x-button id="edit-button" condensed> <x-icon href="#edit"></x-icon> <x-label><x-message href="#edit--verb" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="move-button" condensed> <x-icon href="#move"></x-icon> <x-label><x-message href="#move" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="delete-button" condensed> <x-icon href="#trash"></x-icon> <x-label><x-message href="#delete" autocapitalize ellipsis></x-message></x-label> </x-button> </x-buttons> </section> <hr> <section id="status-section"> <h3><x-message href="#status" autocapitalize></x-message></h3> <x-select id="status-select"> <x-menu> <x-menuitem value="open" toggled> <x-label><x-message href="#idea.open" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="duplicate"> <x-label><x-message href="#idea.duplicate" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="done"> <x-label><x-message href="#idea.done" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="rejected"> <x-label><x-message href="#idea.rejected" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="out-of-date"> <x-label><x-message href="#idea.out-of-date" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="priority-section"> <h3><x-message href="#priority" autocapitalize></x-message></h3> <x-select id="priority-select"> <x-menu> <x-menuitem value="-2"> <x-label><x-message href="#priority.very-low" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="-1"> <x-label><x-message href="#priority.low" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="0" toggled> <x-label><x-message href="#priority.normal" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="1"> <x-label><x-message href="#priority.high" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="2"> <x-label><x-message href="#priority.very-high" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="3"> <x-label><x-message href="#priority.critical" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="tags-section"> <h3><x-message href="#tags" autocapitalize></x-message></h3> <x-tagsinput id="tags-input"></x-tagsinput> </section> </template>
  `;static [bY(0x78e)]=se`#action-buttons{width:100%}#action-buttons x-button{flex:1}#status-select{width:100%}#priority-select{width:100%}`;get[bY(0xa77)](){const tF=bY;return parseInt(this[tF(0x789)][tF(0xf0a)]);}set[bY(0xa77)](af){const tG=bY;this[tG(0x789)][tG(0xf0a)]=''+af;}get[bY(0x887)](){const tH=bY;return this[tH(0xa5e)][tH(0xf0a)];}set[bY(0x887)](af){const tI=bY;this[tI(0xa5e)]['value']=af;}get[bY(0xadc)](){const tJ=bY;return this[tJ(0xcc6)][tJ(0xf0a)];}set['tags'](af){const tK=bY;let ag='';for(let ah of af){if(ah[tK(0x1d5)](':')){let [aj,ak]=ah[tK(0xc97)](':')[tK(0x8fb)](al=>al[tK(0x963)]());ag+=tK(0x8f5)+ah+tK(0x7df)+aj+tK(0xe8e)+ak+tK(0x5a7);}else ag+=tK(0x8f5)+ah+tK(0xe36)+ah+tK(0x5a7);this['#tags-input'][tK(0x8c2)]=ag;}}constructor(){const tL=bY;super(),this['#edit-button'][tL(0x1012)](tL(0xff9),()=>this.#Zs()),this[tL(0xf91)][tL(0x1012)]('click',()=>this.#za()),this[tL(0x5ab)][tL(0x1012)](tL(0xff9),()=>this.#Ys()),this[tL(0x789)][tL(0x1012)](tL(0x63b),()=>this.#Ma()),this[tL(0xa5e)]['addEventListener'](tL(0x63b),()=>this.#Aa()),this[tL(0xcc6)]['addEventListener'](tL(0x63b),()=>this.#Xs());}#Zs(){const tM=bY;this[tM(0x10bf)](new CustomEvent('buttonclick',{'detail':tM(0xc58)}));}#za(){const tN=bY;this[tN(0x10bf)](new CustomEvent(tN(0x34d),{'detail':'move'}));}#Ys(){const tO=bY;this[tO(0x10bf)](new CustomEvent(tO(0x34d),{'detail':tO(0x658)}));}#Ma(){const tP=bY;this['dispatchEvent'](new CustomEvent(tP(0x1078)));}#Aa(){const tQ=bY;this[tQ(0x10bf)](new CustomEvent(tQ(0xc84)));}#Xs(){const tR=bY;this['dispatchEvent'](new CustomEvent(tR(0x956)));}}customElements[bY(0x864)](bY(0x209),Ys);class Xs extends HTMLElement{static [bY(0x1068)]=['condensed'];static #C=ie` <template> <div id="status" part="status"><x-message id="status-message"></x-message></div> <header id="header" part="header"> <div id="header-left-column"> <a id="author-avatar-anchor"> <bx-avatar id="author-avatar"></bx-avatar> </a> <bx-userbadges id="author-badges"></bx-userbadges> <a id="author-anchor"></a> <span id="wrote-span"></span> <a id="thread-anchor" hidden></a> </div> <div id="header-right-column"> <x-button id="translate-button" togglable> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <x-box id="actions-box"> <x-buttons id="vote-buttons"> <x-button id="downvote-button" value="downvote"> <x-icon id="downvote-icon" href="#downvote"></x-icon> <x-tooltip><x-message href="#downvote"></x-message></x-tooltip> </x-button> <x-button id="votes-count-button"> <x-label id="votes-count-label">0</x-label> </x-button> <x-button id="upvote-button" value="upvote"> <x-icon id="upvote-icon" href="#upvote"></x-icon> <x-tooltip><x-message href="#upvote"></x-message></x-tooltip> </x-button> </x-buttons> <x-button id="watch-button"> <x-icon href="#watch"></x-icon> <x-tooltip><x-message href="#watch"></x-message></x-tooltip> </x-button> <x-button id="edit-button" hidden> <x-icon href="#edit"></x-icon> </x-button> <x-button id="settings-button" hidden> <x-icon href="#hamburger-menu"></x-icon> <x-popover id="settings-popover" modal> <bx-ideasettings id="settings"></bx-ideasettings> </x-popover> </x-button> </x-box> </div> </header> <main id="main" part="main"> <article id="article"> <h2 id="title"> <span id="title-span"></span> <span id="hashtag-span" part="hashtag"></span> </h2> <div id="tags"></div> <section id="description"></section> </article> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      margin: 8px 0;
    }

    /**
     * Header
     */

    #header {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      border-width: 1px;
      border-style: solid;
      font-size: 14.5px;
    }

    #header-left-column {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #header-right-column {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    /* Avatar */

    #author-avatar-anchor {
      display: inline-block;
      vertical-align: middle;
    }
    #author-avatar-anchor[hidden] {
      display: none;
    }

    /* Author badges */

    #author-badges {
      display: inline-block;
      vertical-align: middle;
      margin-left: 2px;
    }
    #author-badges[hidden],
    #author-badges[empty] {
      display: none;
    }

    /* Author name */

    #author-anchor {
      font-weight: 700;
      line-height: 31px;
      margin-left: 2px;
      text-decoration: none;
      color: inherit;
    }
    #author-anchor:hover {
      text-decoration: underline;
    }

    /* Thread anchor */

    #thread-anchor {
      font-weight: 700;
      border-left: 1.5px solid var(--text-color);
      padding-left: 10px;
      margin-left: 6px;
      color: inherit;
      text-decoration: none;
    }
    #thread-anchor:hover {
      text-decoration: underline;
    }

    /* Status badge */

    #status {
      display: none;
      position: absolute;
      top: 95px;
      left: 0;
      margin-left: 100%;
      padding: 3px 6px;
      transform: translateX(-30%) rotate(40deg);
      transform-origin: 0% 0%;
      box-sizing: border-box;
      border-width: 3px;
      border-style: solid;
      font-size: 17px;
      font-weight: 700;
      text-transform: uppercase;
      white-space: pre;
      line-height: 1;
      user-select: none;
      -webkit-user-select: none;
    }
    :host([status="duplicate"]) #status:not([hidden]),
    :host([status="out-of-date"]) #status:not([hidden]),
    :host([status="rejected"]) #status:not([hidden]),
    :host([status="done"]) #status:not([hidden]) {
      display: block;
    }

    /* "Translate" button */

    #translate-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    /* "Watch" button */

    #watch-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #watch-button x-icon {
      margin: 0;
    }

    /* "Edit" button */

    #edit-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #edit-button x-icon {
      margin: 0;
      width: 14px;
      height: 14px;
    }

    /* "Settings" button */

    #settings-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #settings-button::part(arrow) {
      display: none;
    }

    #settings-button > x-icon {
      width: 15px;
      height: 15px;
    }

    /* "Downvote" and "Upvote" buttons */

    #downvote-button {
      min-height: 25px;
      margin: 0 0 0 8px;
      padding: 0px 9px;
    }

    #upvote-button {
      min-height: 25px;
      padding: 0px 9px;
    }

    #downvote-icon,
    #upvote-icon {
      width: 14px;
      height: 14px;
    }
    #downvote-icon {
      transform: translateY(2px);
    }
    #upvote-icon {
      transform: translateY(-1px);
    }

    /* Votes count */

    #votes-count-button {
      min-height: 25px;
      padding: 0px 9px;
      pointer-events: none;
    }

    /**
     * Main
     */

    #main {
      padding: 22px 24px;
      border-width: 1px;
      border-style: solid;
      border-top: none;
    }
    :host([condensed]) #main {
      padding: 10px 18px;
    }

    /* Title */

    #title {
      margin: 0;
    }

    #title #hashtag-span {
      font-size: 20px;
      vertical-align: middle;
      text-transform: lowercase;
    }

    /* Tags */

    #tags {
      display: flex;
      margin-top: 5px;
    }
    #tags:empty,
    #tags[hidden] {
      display: none;
    }

    #tags a {
      display: flex;
      margin: 0 0 0 6px;
      text-decoration: none;
    }
    #tags a:first-child {
      margin-left: 0;
    }
    #tags a:active {
      outline: none;
    }

    /* Description */

    #description {
      margin-top: 20px;
    }
    #title[hidden] + #tags[hidden] + #description {
      margin-top: 0;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){const tS=bY;this.#Ui=af,this[tS(0xc8b)]&&this.#A();}get[bY(0x7d2)](){const tT=bY;return this[tT(0xfd9)]('condensed');}set[bY(0x7d2)](af){const tU=bY;!0x0===af?this[tU(0xa0a)](tU(0x7d2),''):this[tU(0x88e)](tU(0x7d2));}get[bY(0x887)](){const tV=bY;return this[tV(0xc51)](tV(0x887));}#T;#P;#Gt;#Ui=null;constructor(){const tW=bY;super(),this.#P=this[tW(0x1017)]({'mode':tW(0xc5d)}),this.#P[tW(0x48f)]=[a2[tW(0x500)],Xs.#S],this.#P[tW(0x775)](document[tW(0xc3b)](Xs.#C[tW(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](tW(0x6e3)))this['#'+af['id']]=af;this.#P['addEventListener'](tW(0xff9),ag=>this.#Rs(ag)),this[tW(0xfa3)]['addEventListener'](tW(0x807),()=>this.#Di()),this[tW(0x9a5)][tW(0x1012)](tW(0xff9),()=>this.#Js()),this[tW(0xcf8)][tW(0x1012)](tW(0xff9),()=>this.#Zs()),this['#upvote-button'][tW(0x1012)]('click',ag=>this.#Ba(ag)),this[tW(0xf28)][tW(0x1012)](tW(0xff9),ag=>this.#Ba(ag)),this[tW(0xf1b)]['addEventListener'](tW(0x34d),ag=>this.#Qs(ag)),this[tW(0xf1b)][tW(0x1012)](tW(0x1078),()=>this.#Ra()),this['#settings'][tW(0x1012)]('statuschange',()=>this.#Ia()),this[tW(0xf1b)][tW(0x1012)]('tagschange',()=>this.#ea());}['connectedCallback'](){const tX=bY;this.#T=si(this,tX(0xf55)),Bi[tX(0xf5c)][tX(0x1012)](tX(0xecc),this.#Gt=()=>{this.#A();}),this.#A();}['disconnectedCallback'](){const tY=bY;Bi[tY(0xf5c)][tY(0xee0)](tY(0xecc),this.#Gt);}[bY(0x83b)](af,ag,ah){ag!==ah&&'condensed'===af&&this.#js();}#js(){const tZ=bY;this[tZ(0xb91)][tZ(0x96e)]=!0x0===this[tZ(0x7d2)],this[tZ(0xcad)][tZ(0x96e)]=!0x0===this['condensed'],this[tZ(0x7de)][tZ(0x96e)]=!0x0===this[tZ(0x7d2)],this[tZ(0x533)]['hidden']=!0x0===this[tZ(0x7d2)],this[tZ(0x8f2)][tZ(0x96e)]=!0x1===this['condensed'],this[tZ(0x5bb)]['hidden']=!0x0===this[tZ(0x7d2)],this[tZ(0x7cb)][tZ(0x96e)]=!0x0===this[tZ(0x7d2)],this[tZ(0x85b)]['hidden']=!0x0===this['condensed'];}#Rs(af){const u0=bY;af[u0(0x779)][u0(0xc06)]('a')?this.#Ks(af):u0(0xd4d)===af[u0(0x779)][u0(0xa31)]&&this.#pi(af);}async #Ks(af){const u1=bY;let ag=af[u1(0x779)][u1(0xc06)]('a');ag['origin']===location[u1(0x1061)]&&(ag[u1(0x98c)]['startsWith']('/ideas')||ag[u1(0x98c)][u1(0x9ae)]('/profiles'))&&(af['preventDefault'](),this.#T['navigate'](ag[u1(0xbd9)]));}#pi(af){const u2=bY;this.#T[u2(0x242)]['showModal'](af[u2(0x779)]);}async #Di(){const u3=bY;let af=this['#translate-button'][u3(0x42a)]?a2['locale']:this.#Ui['srcLocale'];He[u3(0x1d5)](af)?this.#Ui=await Bi[u3(0xa1a)][u3(0x909)](this.#Ui['id'],af):this.#Ui=await Bi[u3(0x2f6)][u3(0xd1f)](u3(0xb29),this.#Ui['id']),this.#A();}async #Ba(af){const u4=bY;let ag=af[u4(0x779)]['closest'](u4(0xa88)),ah=ag[u4(0x42a)]?u4(0x5c8):ag[u4(0xf0a)],aj=this[u4(0xa0b)][u4(0x42a)],ak=this['#downvote-button'][u4(0x42a)];if(this[u4(0xa0b)][u4(0x6a2)]=!0x0,this[u4(0xa0b)]['toggled']=u4(0x3f0)===ah,this['#downvote-button'][u4(0x6a2)]=!0x0,this[u4(0xf28)][u4(0x42a)]=u4(0x9aa)===ah,this[u4(0x5a8)][u4(0x6a2)]=!0x0,!0x1===Bi[u4(0xf5c)][u4(0x1009)])this[u4(0xa0b)][u4(0x42a)]=aj,this[u4(0xf28)][u4(0x42a)]=ak,null===Bi[u4(0xf5c)]['userID']?this.#T['navigate'](qi(location['href'],u4(0x741),'login')):this.#T[u4(0x249)]();else{let al=this.#Ui['id'],am=Bi[u4(0xf5c)][u4(0xdc1)],an=null;try{u4(0x3f0)===ah?await Bi[u4(0xfb8)][u4(0x6ba)](u4(0x82e),al):'downvote'===ah?await Bi['functions'][u4(0x6ba)](u4(0xaa9),al):u4(0x5c8)===ah&&await Bi[u4(0xfb8)][u4(0x6ba)](u4(0x1095),al);}catch(ap){an=ap;}null===an?(this.#Ui[u4(0xd30)]=this.#Ui[u4(0xd30)][u4(0xe7a)](aq=>aq!==am),this.#Ui[u4(0x719)]=this.#Ui[u4(0x719)][u4(0xe7a)](aq=>aq!==am),u4(0x3f0)===ah?this.#Ui[u4(0xd30)]['push'](am):u4(0x9aa)===ah&&this.#Ui[u4(0x719)][u4(0xc68)](am),this.#Ui[u4(0x1014)]=this.#Ui['upvoters'][u4(0x6dc)]-this.#Ui[u4(0x719)][u4(0x6dc)],this[u4(0xf4a)][u4(0xad6)]=this.#Ui[u4(0x1014)]):(u4(0x3f0)===ah?await this.#T[u4(0xafc)]({'title':{'href':'#failed-to-upvote-post'},'detail':bi(an),'buttons':[{'href':u4(0x95a)}]}):u4(0x9aa)===ah?await this.#T['openMessageDialog']({'title':{'href':'#failed-to-downvote-post'},'detail':bi(an),'buttons':[{'href':u4(0x95a)}]}):'unvote'===ah&&await this.#T['openMessageDialog']({'title':{'href':u4(0xeaf)},'detail':bi(an),'buttons':[{'href':'#close'}]}),this['#upvote-button'][u4(0x42a)]=aj,this[u4(0xf28)][u4(0x42a)]=ak);}this[u4(0xf28)]['disabled']=!0x1,this[u4(0xa0b)][u4(0x6a2)]=!0x1,this[u4(0x5a8)][u4(0x6a2)]=!0x1;}async #Js(){const u5=bY;let af=!0x0===this['#watch-button'][u5(0x42a)]?u5(0xf72):u5(0xb4e),ag=this[u5(0x9a5)][u5(0x42a)];if(this[u5(0x9a5)][u5(0x6a2)]=!0x0,this[u5(0x9a5)]['toggled']='watch'===af,!0x1===Bi['auth'][u5(0x1009)])this[u5(0x9a5)]['toggled']=ag,null===Bi[u5(0xf5c)][u5(0xdc1)]?this.#T[u5(0x908)](qi(location[u5(0xbd9)],u5(0x741),'login')):this.#T[u5(0x249)]();else{let ah=this.#Ui['id'],aj=Bi['auth'][u5(0xdc1)],ak=null;try{u5(0xb4e)===af?await Bi[u5(0xfb8)][u5(0x6ba)](u5(0xca7),ah):await Bi[u5(0xfb8)][u5(0x6ba)]('unwatchPost',ah);}catch(al){ak=al;}null===ak?(this.#Ui['watchers']=this.#Ui[u5(0xeb5)][u5(0xe7a)](am=>am!==aj),u5(0xb4e)===af&&this.#Ui[u5(0xeb5)][u5(0xc68)](aj)):(u5(0xb4e)===af?await this.#T[u5(0xafc)]({'title':{'href':u5(0x1008)},'detail':bi(ak),'buttons':[{'href':u5(0x95a)}]}):await this.#T[u5(0xafc)]({'title':{'href':u5(0x2a0)},'detail':bi(ak),'buttons':[{'href':'#close'}]}),this[u5(0x9a5)][u5(0x42a)]=ag);}this['#watch-button'][u5(0x6a2)]=!0x1;}#Zs(){const u6=bY;let af=new URL(location['href']),ag=new URLSearchParams(location[u6(0xa28)]);ag[u6(0xf62)]('dialog',u6(0x8e0)),af[u6(0xa28)]=ag[u6(0xd23)](),this.#T[u6(0x908)](af[u6(0xd23)]());}async #Qs(af){const u7=bY;if('edit'===af[u7(0xdd7)]){let ag=new URL(location['href']),ah=new URLSearchParams(location[u7(0xa28)]);this['#settings-button']['collapse'](),ah[u7(0xf62)](u7(0x741),u7(0x8e0)),ag[u7(0xa28)]=ah['toString'](),await it(0x190),this.#T['navigate'](ag[u7(0xd23)]());}else{if(u7(0x597)===af[u7(0xdd7)]){let aj=new URL(location[u7(0xbd9)]),ak=new URLSearchParams(location[u7(0xa28)]);this[u7(0x50f)][u7(0xcfc)](),ak['set'](u7(0x741),u7(0x6c1)),aj['search']=ak[u7(0xd23)](),await it(0x190),this.#T[u7(0x908)](aj[u7(0xd23)]());}else{if(u7(0x658)===af[u7(0xdd7)]){let al=new URL(location['href']),am=new URLSearchParams(location['search']);this[u7(0x50f)][u7(0xcfc)](),am[u7(0xf62)]('dialog',u7(0xba3)),al['search']=am[u7(0xd23)](),await it(0x190),this.#T[u7(0x908)](al['toString']());}}}}async #Ra(){const u8=bY;let af=this[u8(0xf1b)]['priority'],ag=this.#Ui['id'],ah=null;try{await Bi[u8(0xfb8)][u8(0x6ba)](u8(0xf7f),{'id':ag,'priority':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[u8(0xa77)]=af,this.#A()):(await this.#T[u8(0xafc)]({'title':{'href':u8(0x1dd)},'detail':bi(ah),'buttons':[{'href':u8(0x95a)}]}),this['#settings']['priority']=this.#Ui['priority']);}async #Ia(){const u9=bY;let af=this[u9(0xf1b)]['status'],ag=this.#Ui['id'],ah=null;try{await Bi['functions']['postMessage'](u9(0xf7f),{'id':ag,'status':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[u9(0x887)]=af,this.#A()):(await this.#T[u9(0xafc)]({'title':{'href':u9(0xb6d)},'detail':bi(ah),'buttons':[{'href':u9(0x95a)}]}),this[u9(0xf1b)][u9(0x887)]=this.#Ui[u9(0x887)]);}async #ea(){const ub=bY;let af=this[ub(0xf1b)][ub(0xadc)],ag=this.#Ui['id'],ah=null;try{await Bi['functions'][ub(0x6ba)](ub(0xf7f),{'id':ag,'tags':af});}catch(aj){ah=aj;}null===ah?(this.#Ui['tags']=af,this.#A()):(await this.#T[ub(0xafc)]({'title':{'href':ub(0x70b)},'detail':bi(ah),'buttons':[{'href':ub(0x95a)}]}),this[ub(0xf1b)][ub(0xadc)]=this.#Ui['tags']);}#A(){const uc=bY;let af=null!==Bi[uc(0xf5c)][uc(0xdc1)],ag=Bi['auth'][uc(0xa55)],ah=af?Bi[uc(0xf5c)]['userID']:null,aj=this.#Ui;if(null!==aj){this[uc(0xcad)][uc(0xbd9)]=uc(0x1c8)+aj[uc(0xbaf)]+'/'+$e(aj[uc(0xb8f)]),this[uc(0x87c)][uc(0x1ce)]=aj[uc(0x911)]||'random',this[uc(0x87c)][uc(0xf0a)]=aj['authorID'],this[uc(0x7de)][uc(0xd88)]=aj['authorUserAgent'],this[uc(0x7de)][uc(0x3e9)]=uc(0x70e)===aj['authorID'],this[uc(0x107f)][uc(0xbd9)]='/profiles/'+aj['authorID']+'/'+$e(aj[uc(0xb8f)]),this[uc(0x107f)][uc(0xad6)]=aj['authorName'],this['#wrote-span'][uc(0x8c2)]=uc(0x69c)+aj['createdTime']+'}\x22></x-message>';{let ak=aj['id'][uc(0xc97)]('-')['at'](-0x1);this['#thread-anchor']['innerHTML']=Te(aj[uc(0x37a)]),this['#thread-anchor'][uc(0xbd9)]='/ideas/'+ak+'/'+aj[uc(0xa4b)];}aj[uc(0x962)]===aj['srcLocale']&&aj[uc(0x962)]===a2[uc(0x962)]?this[uc(0xfa3)][uc(0x96e)]=!0x0:(this['#translate-button'][uc(0x42a)]=aj['locale']===a2[uc(0x962)],this['#translate-button'][uc(0x96e)]=!0x1,this[uc(0x67c)][uc(0xbd9)]='#language.'+(aj[uc(0xb73)]||aj['locale']||'en'),this[uc(0xb15)][uc(0xbd9)]=uc(0x627)+a2[uc(0x962)]),this['setAttribute']('status',aj[uc(0x887)]),this['#status-message']['href']=uc(0x6af)+aj[uc(0x887)],!0x1===af?(this[uc(0xa0b)][uc(0x42a)]=!0x1,this[uc(0xf28)]['toggled']=!0x1):(this['#upvote-button'][uc(0x42a)]=aj[uc(0xd30)][uc(0x1d5)](ah),this[uc(0xf28)][uc(0x42a)]=aj['downvoters']['includes'](ah)),this[uc(0xf4a)][uc(0xad6)]=aj[uc(0x1014)],this[uc(0x9a5)][uc(0x42a)]=!0x0===af&&aj['watchers']['includes'](ah),this[uc(0xcf8)]['hidden']=!0x0===ag||ah!==aj[uc(0xbaf)],this[uc(0x50f)][uc(0x96e)]=!0x1===ag,!0x1===this[uc(0xe80)][uc(0x753)]&&(this['#settings'][uc(0xa77)]=aj[uc(0xa77)],this[uc(0xf1b)]['status']=aj['status'],this['#settings'][uc(0xadc)]=aj[uc(0xadc)]),this[uc(0xb91)][uc(0x552)]=aj[uc(0x962)],this[uc(0xf1d)]['innerHTML']=Te(aj[uc(0x37a)]),this[uc(0x533)]['textContent']='#'+aj['id']['split']('-')['at'](-0x1);{let al='';for(let am of aj[uc(0xadc)]){let an=uc(0x3c9)+ye(am,'\x20','+'),ap=Vt(am);if(am[uc(0x1d5)](':')){let [aq,ar]=am[uc(0xc97)](':')[uc(0x8fb)](au=>au[uc(0x963)]());al+=uc(0x42b)+an+uc(0xf33)+am+uc(0xecb)+ap+uc(0xafe)+aq+uc(0xa9e)+ar+uc(0x607);}else al+=uc(0x42b)+an+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22'+am+uc(0xecb)+ap+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>'+am+uc(0x607);}this['#tags'][uc(0x8c2)]=al;}this[uc(0xfe0)]['innerHTML']=Te(aj['description']),this[uc(0xfe0)][uc(0x552)]=aj[uc(0x962)];for(let au of this['#description']['querySelectorAll'](uc(0x3cb)))au[uc(0xfd9)](uc(0x105c))&&(au[uc(0x8c2)]=ds(au['textContent'],au[uc(0xc51)]('data-language')));if(CSS[uc(0x101d)]&&aj[uc(0xdf4)]){let av=ai(aj[uc(0xdf4)],[this[uc(0xb91)],this['#description']]),aw=CSS[uc(0x101d)][uc(0x10bd)](uc(0xaef))||new Highlight();for(let ax of av)aw[uc(0xc2f)](ax);CSS[uc(0x101d)]['set'](uc(0xaef),aw);}Bi[uc(0xf5c)]['whenReady'][uc(0x270)](()=>{const ud=uc;if(Bi[ud(0xf5c)][ud(0xa55)]){for(let ay of this[ud(0xfe0)][ud(0x44e)]('img'))Bi[ud(0xa0e)]['getMetadata'](ay[ud(0xe44)])[ud(0x270)](az=>{const uf=ud;let aA=fe(az[uf(0xb2e)]);ay[uf(0xa0a)]('data-file-size',aA);});}});}}}customElements[bY(0x864)]('bx-ideablock',Xs);class Js extends bs{static ['v']=ie` <template> <h2><x-message href="#move-post"></x-message></h2> <p><x-message href="#move-post.detail"></x-message></p> <p><x-message href="#new-category"></x-message>:</p> <x-radios id="radios"> <x-radio value="bug" toggled> <x-label><x-message href="#bugs"></x-message></x-label> </x-radio> <x-radio value="question"> <x-label><x-message href="#questions"></x-message></x-label> </x-radio> </x-radios> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#move-post"></x-message></x-label> </x-button> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:480px}p:last-of-type{margin-bottom:6px}`;constructor(){const ug=bY;super(),this[ug(0x4a1)]['addEventListener']('click',()=>this.#Pt()),this[ug(0x412)][ug(0x1012)]('click',af=>this.#ms(af));}#Pt(){const uh=bY;this['dispatchEvent'](new CustomEvent(uh(0xf20)));}#ms(af){const uj=bY;this['dispatchEvent'](new CustomEvent(uj(0xb26),{'detail':this[uj(0xd5c)][uj(0xf0a)]}));}}customElements[bY(0x864)](bY(0xf01),Js);class Qs extends bs{static ['v']=ie` <template> <h2><x-message href="#confirm-delete-post"></x-message></h2> <p><x-message href="#confirm-delete-post.detail"></x-message></p> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"><x-label><x-message href="#cancel"></x-message></x-label></x-button> <x-button id="submit-button" toggled><x-label><x-message href="#delete"></x-message></x-label></x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:400px}`;constructor(){const uk=bY;super(),this['#cancel-button'][uk(0x1012)](uk(0xff9),()=>this.#Pt()),this[uk(0x412)]['addEventListener'](uk(0xff9),af=>this.#ms(af));}#Pt(){const ul=bY;this['dispatchEvent'](new CustomEvent(ul(0xf20)));}#ms(af){const um=bY;this[um(0x10bf)](new CustomEvent(um(0xb26)));}}customElements[bY(0x864)](bY(0xd05),Qs);class ea extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <bx-ideablock id="idea-block"></bx-ideablock> <hr id="separator"> <h3 id="comments-heading"> <x-message id="comments-message" href="#comments" args="count: 0"></x-message> </h3> <div id="comments"></div> <a id="new-comment-anchor"> <x-button id="new-comment-button" toggled> <x-label><strong><x-message href="new-comment"></x-message></strong></x-label> </x-button> </a> </main> <div id="dialogs"> <dialog id="idea-dialog"> <bx-ideaform id="idea-form" type="edit"></bx-ideaform> </dialog> <dialog id="idea-move-dialog"> <bx-ideamoveform id="idea-move-form"></bx-ideamoveform> </dialog> <dialog id="idea-delete-dialog"> <bx-ideadeleteform id="idea-delete-form"></bx-ideadeleteform> </dialog> <dialog id="comment-dialog"> <bx-commentform id="comment-form"></bx-commentform> </dialog> <dialog id="comment-delete-dialog"> <bx-commentdeleteform id="comment-delete-form"></bx-commentdeleteform> </dialog> </div> </template>
  `;static [bY(0x78e)]=se`#separator{margin:35px 0 27px}#idea-block{margin:20px 0 8px 0}#comments-heading{font-size:28px}#new-comment-anchor{display:block;margin-top:15px}#new-comment-button{width:100%;min-height:36px}#new-comment-button x-label{cursor:pointer}#comment-dialog,#idea-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const un=bY;let af=this[un(0x655)][un(0x3ab)]['id'][un(0xc97)]('-')[0x1],ag=this['#idea-block'][un(0x3ab)][un(0xa4b)];return location[un(0x1061)]+un(0x9a4)+af+'/'+ag;}#Xt;#ys;#Gt;#sa=null;constructor(){const up=bY;super(),this['#idea-dialog'][up(0x1012)]('userclose',af=>this.#aa(af)),this[up(0xfe2)]['addEventListener'](up(0xf20),af=>this.#Ha(af)),this['#idea-form']['addEventListener'](up(0xb26),af=>this.#Wa(af)),this[up(0x6d0)]['addEventListener']('userclose',af=>this.#aa(af)),this[up(0xacb)]['addEventListener'](up(0xb26),af=>this.#Za(af)),this[up(0xacb)][up(0x1012)](up(0xf20),af=>this.#Ya(af)),this['#idea-delete-dialog'][up(0x1012)](up(0x105d),af=>this.#aa(af)),this[up(0xf9e)]['addEventListener']('submit',af=>this.#Xa(af)),this[up(0xf9e)][up(0x1012)](up(0xf20),af=>this.#Ja(af)),this[up(0x5d4)]['addEventListener'](up(0x105d),af=>this.#aa(af)),this[up(0xf8e)][up(0x1012)](up(0xb26),af=>this.#la(af)),this['#comment-form']['addEventListener'](up(0xf20),af=>this.#ra(af)),this['#comment-delete-dialog'][up(0x1012)](up(0x105d),af=>this.#aa(af)),this['#comment-delete-form'][up(0x1012)]('submit',af=>this.#ha(af)),this['#comment-delete-form'][up(0x1012)]('cancel',af=>this.#ca(af));}async['connectedCallback'](){const uq=bY;super[uq(0x854)](),Bi[uq(0xf5c)][uq(0x1012)](uq(0xecc),this.#Gt=af=>{this.#da(af);}),a2['addEventListener'](uq(0x60c),this.#Xt=()=>{this.#si();}),this['o'][uq(0x1012)](uq(0x828),this.#ys=af=>{this.#ii(af);}),await this.#A();{let af=new URLSearchParams(location[uq(0xa28)])[uq(0x10bd)]('dialog');null!==af&&(uq(0x8e0)===af?this.#Qa():uq(0x6c1)===af?this.#eo():uq(0xba3)===af?this.#to():uq(0x24f)===af?this.#ma():af[uq(0x9ae)]('reply-comment-')?this.#xa():af[uq(0x9ae)](uq(0x10e3))?this.#ga():af[uq(0x9ae)]('delete-comment-')&&this.#ba());}this['u']();}['disconnectedCallback'](){const ur=bY;Bi[ur(0xf5c)][ur(0xee0)]('userprofilechange',this.#Gt),a2['removeEventListener']('localeschange',this.#Xt),this['o'][ur(0xee0)](ur(0x828),this.#ys);}#si(){const uu=bY;this[uu(0x552)]!==a2[uu(0x962)]&&this.#A();}async #ii(af){const uv=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[uv(0xdd7)];if(ah['pathname'][uv(0x9ae)](uv(0x9a4))){let ak=new URLSearchParams(ag?ag[uv(0xa28)]:''),al=new URLSearchParams(ah[uv(0xa28)]);if(V([...ak[uv(0x414)](),...al[uv(0x414)]()])[uv(0x1d5)](uv(0x741))){let am=ak[uv(0x10bd)](uv(0x741)),an=al[uv(0x10bd)]('dialog');am!==an&&(null===an?null!==am&&(uv(0x8e0)===am?this['#idea-dialog'][uv(0x225)]():uv(0x6c1)===am?this[uv(0x6d0)]['close']():'delete-idea'===am?this[uv(0xa54)][uv(0x225)]():uv(0x24f)===am||am[uv(0x9ae)](uv(0x3b6))||am[uv(0x9ae)](uv(0x10e3))?this['#comment-dialog']['close']():am[uv(0x9ae)](uv(0x50e))&&this['#comment-delete-dialog'][uv(0x225)]()):uv(0x8e0)===an?this.#Qa():uv(0x6c1)===an?this.#eo():uv(0xba3)===an?this.#to():uv(0x24f)===an?this.#ma():an[uv(0x9ae)](uv(0x3b6))?this.#xa():an[uv(0x9ae)](uv(0x10e3))?this.#ga():an[uv(0x9ae)](uv(0x50e))&&this.#ba());}}}#da(af){const uw=bY;let ag=Bi[uw(0xf5c)][uw(0xa55)],ah=Bi['auth']['userProfile'];for(let aj of this[uw(0xdd6)][uw(0x44e)](uw(0xeaa)))aj[uw(0x387)]=ag,aj[uw(0x97b)]=ag,aj[uw(0xfbc)]=ag;if(ah){let ak=Bi[uw(0xf5c)][uw(0xdc1)],al=this['#idea-block']['data'];al?.[uw(0xbaf)]===ak&&al['authorName']!==ah[uw(0xce8)]&&(al[uw(0xb8f)]=ah[uw(0xce8)],this[uw(0x655)][uw(0x3ab)]=al);}if(ah){let am=Bi[uw(0xf5c)][uw(0xdc1)];for(let an of this[uw(0xdd6)]['children'])if(null!==am&&am===an['data'][uw(0xbaf)]){let ap=an[uw(0x3ab)];ap[uw(0xb8f)]!==ah[uw(0xce8)]&&(ap[uw(0xb8f)]=ah[uw(0xce8)],an[uw(0x3ab)]=ap);}}}#aa(){const ux=bY;this['o'][ux(0x908)](qi(location[ux(0xbd9)],'dialog',null));}async #Wa(){const uy=bY;if(!0x0===this[uy(0xfe2)][uy(0xbab)]()){let af='idea-'+location[uy(0x98c)][uy(0xc97)]('/')[0x2],ag=[],ah=null,aj={'id':af,'title':this['#idea-form'][uy(0x37a)],'description':this[uy(0xfe2)][uy(0xe24)],'attachments':{}};this['#idea-form'][uy(0x92d)]=!0x0;for(let ak of this[uy(0xfe2)][uy(0x35a)]){let al=await(await fetch(ak))[uy(0x105a)](),am=Kt(0x1e)+'.'+we(al[uy(0x1ce)]),an=Bi[uy(0xa0e)][uy(0x21b)](uy(0x3a3)+am,al);aj['attachments'][ak]=am,ag[uy(0xc68)](an);}try{await Promise[uy(0x3b9)](ag),await Bi['functions']['postMessage'](uy(0xf7f),aj);}catch(ap){ah=ap;}null===ah?(await Bi['index'][uy(0x273)](af,a2['locale'],this['#idea-form'][uy(0xa45)]),await this['#idea-dialog'][uy(0x225)](),await it(0x96),await this.#A(),this['o']['navigate'](qi(location[uy(0xbd9)],uy(0x741),null))):(this[uy(0xddf)][uy(0x96e)]=!0x0,await it(0x96),await this['o'][uy(0xafc)]({'title':{'href':uy(0xe9a)},'detail':bi(ah),'buttons':[{'href':'#back-to-form'}]}),this[uy(0xfe2)]['throbber']=!0x1,this[uy(0xddf)][uy(0x96e)]=!0x1);}}async #la(){const uz=bY;if(!0x0===this['#comment-form'][uz(0xbab)]()){let af=new URLSearchParams(location['search'])['get'](uz(0x741));if(this['#comment-form'][uz(0x92d)]=!0x0,'new-comment'===af||af[uz(0x9ae)](uz(0x3b6))){let ag=uz(0x8d7)+location[uz(0x98c)][uz(0xc97)]('/')[0x2],ah=await Xe(),aj=[],ak=null,al=null,am={'type':'comment','description':this['#comment-form'][uz(0xe24)],'attachments':{},'watchThread':this[uz(0xf8e)]['watchThread'],'parentID':af[uz(0x9ae)](uz(0x3b6))?af['substring'](0x6):ag};null!==ah&&(am[uz(0xd88)]=ah);for(let an of this['#comment-form'][uz(0x35a)]){let ap=await(await fetch(an))[uz(0x105a)](),aq=Kt(0x1e)+'.'+we(ap['type']),ar=Bi[uz(0xa0e)][uz(0x21b)](uz(0x3a3)+aq,ap);am[uz(0x35a)][an]=aq,aj[uz(0xc68)](ar);}try{await Promise['all'](aj),ak=await Bi[uz(0xfb8)][uz(0x6ba)](uz(0xa75),am);}catch(au){al=au;}if(null===al){let av=ak['data'];await Bi[uz(0xa1a)][uz(0x691)](av,a2['locale']),this['#comment-form'][uz(0x92d)]=!0x1,this['o'][uz(0x908)](qi(location[uz(0xbd9)],uz(0x741),null)),await this.#A();let aw=this[uz(0xdd6)][uz(0x344)]('#'+av);aw&&aw['scrollIntoViewIfNeeded']();}else this[uz(0xf8e)][uz(0x92d)]=!0x1,this[uz(0x5d4)][uz(0x96e)]=!0x0,await it(0x96),await this['o']['openMessageDialog']({'title':{'href':uz(0x353)},'detail':bi(al),'buttons':[{'href':uz(0xd94)}]}),this['#comment-dialog'][uz(0x96e)]=!0x1;}else{if(af['startsWith'](uz(0x10e3))){let ax=af['substring'](0x5),ay=this[uz(0xdd6)][uz(0x344)]('#'+ax),az=[],aA=null,aB=null,aC={'id':ax,'description':this[uz(0xf8e)][uz(0xe24)],'attachments':{}};for(let aD of this[uz(0xf8e)]['attachments']){let aE=await(await fetch(aD))['blob'](),aF=Kt(0x1e)+'.'+we(aE['type']),aG=Bi[uz(0xa0e)][uz(0x21b)](uz(0x3a3)+aF,aE);aC[uz(0x35a)][aD]=aF,az[uz(0xc68)](aG);}try{await Promise[uz(0x3b9)](az),aA=await Bi[uz(0xfb8)]['postMessage'](uz(0xf7f),aC);}catch(aH){aB=aH;}null===aB?(await Bi[uz(0xa1a)][uz(0x273)](ax,a2[uz(0x962)],this['#comment-form'][uz(0xa45)]),this['o'][uz(0x908)](qi(location['href'],uz(0x741),null)),await this.#A(),ay=this[uz(0xdd6)]['querySelector']('#'+ax),ay&&ay[uz(0x467)]()):(this[uz(0x5d4)][uz(0x96e)]=!0x0,await it(0x96),await this['o'][uz(0xafc)]({'title':{'href':'#failed-to-edit-comment'},'detail':bi(aB),'buttons':[{'href':uz(0xd94)}]}),this['#comment-form'][uz(0x92d)]=!0x1,this['#comment-dialog']['hidden']=!0x1);}}}}async #Za(af){const uA=bY;let ag='idea-'+location[uA(0x98c)][uA(0xc97)]('/')[0x2],ah=null,aj=null;this[uA(0xacb)][uA(0x72c)](),this[uA(0xacb)][uA(0x92d)]=!0x0;try{ah=(await Bi[uA(0xfb8)][uA(0x6ba)]('convertPost',{'id':ag,'type':af[uA(0xdd7)]}))[uA(0x3ab)];}catch(ak){aj=ak;}if(null===aj){await Bi[uA(0xa1a)][uA(0x691)](ag,a2['locale']),await this[uA(0x6d0)]['close']();let [al,am]=ah['split']('-'),an=uA(0x3fa)===al?al:al+'s';this['o'][uA(0x908)]('/'+an+'/'+am,!0x0);}else this['o'][uA(0x908)](qi(location['href'],'dialog',null)),await this['o']['openMessageDialog']({'title':{'href':uA(0xcac)},'detail':bi(aj),'buttons':[{'href':uA(0x95a)}]});}async #Xa(){const uB=bY;let af=uB(0x8d7)+location['pathname'][uB(0xc97)]('/')[0x2],ag=null;this[uB(0xf9e)][uB(0x72c)](),this[uB(0xf9e)][uB(0x92d)]=!0x0;try{await Bi['functions'][uB(0x6ba)](uB(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[uB(0xa1a)][uB(0xffa)](af,a2[uB(0x962)]),await this[uB(0xa54)]['close'](),this['o']['navigate']('/ideas')):(this['o']['navigate'](qi(location[uB(0xbd9)],uB(0x741),null)),await this['o'][uB(0xafc)]({'title':{'href':uB(0x207)},'detail':bi(ag),'buttons':[{'href':uB(0x95a)}]}));}async #ha(){const uC=bY;let af=new URLSearchParams(location[uC(0xa28)])[uC(0x10bd)]('dialog')[uC(0xe2d)](0x7),ag=null;this['#comment-delete-form'][uC(0x72c)](),this[uC(0xf39)][uC(0x92d)]=!0x0;try{await Bi[uC(0xfb8)][uC(0x6ba)](uC(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[uC(0xa1a)][uC(0xffa)](af,a2[uC(0x962)]),this['o'][uC(0x908)](qi(location['href'],uC(0x741),null)),await this.#A()):(this['o']['navigate'](qi(location[uC(0xbd9)],uC(0x741),null)),await this['o'][uC(0xafc)]({'title':{'href':uC(0xe58)},'detail':bi(ag),'buttons':[{'href':uC(0x95a)}]}));}#Ha(){const uD=bY;this['o'][uD(0x908)](qi(location[uD(0xbd9)],'dialog',null));}#Ya(){const uE=bY;this['o']['navigate'](qi(location[uE(0xbd9)],'dialog',null));}#Ja(){const uF=bY;this['o'][uF(0x908)](qi(location[uF(0xbd9)],'dialog',null));}#ra(){const uG=bY;this['o'][uG(0x908)](qi(location['href'],'dialog',null));}#ca(){const uH=bY;this['o'][uH(0x908)](qi(location[uH(0xbd9)],uH(0x741),null));}async #Qa(){const uI=bY;if(await this[uI(0xfea)],await Bi['auth'][uI(0xfea)],null===Bi[uI(0xf5c)][uI(0xdc1)])this['o'][uI(0x908)](qi(location[uI(0xbd9)],uI(0x741),uI(0xb28)),!0x0);else{if(!0x1===Bi[uI(0xf5c)][uI(0x1009)])this['o'][uI(0x249)]();else{let af='idea-'+location[uI(0x98c)][uI(0xc97)]('/')[0x2],{title:ag,description:ah,revision:aj}=await Bi[uI(0x2f6)][uI(0xd1f)]('posts',af);this[uI(0xfe2)]['clear'](),this[uI(0xfe2)][uI(0x37a)]=ag,this[uI(0xfe2)][uI(0xe24)]=ah,this[uI(0xfe2)]['revision']=aj,this[uI(0xfe2)][uI(0x92d)]=!0x1,this['#idea-dialog'][uI(0x96e)]=!0x1,this[uI(0xddf)]['showModal']();}}}async #eo(){const uJ=bY;await this[uJ(0xfea)],await Bi[uJ(0xf5c)]['whenReady'],null===Bi[uJ(0xf5c)]['userID']?this['o'][uJ(0x908)](qi(location[uJ(0xbd9)],uJ(0x741),'login'),!0x0):!0x1===Bi[uJ(0xf5c)][uJ(0x1009)]?this['o'][uJ(0x249)]():(this[uJ(0xacb)]['throbber']=!0x1,this[uJ(0x6d0)][uJ(0x96e)]=!0x1,this[uJ(0x6d0)]['showModal']());}async #to(){const uK=bY;await this[uK(0xfea)],await Bi[uK(0xf5c)]['whenReady'],null===Bi[uK(0xf5c)][uK(0xdc1)]?this['o']['navigate'](qi(location[uK(0xbd9)],uK(0x741),uK(0xb28)),!0x0):!0x1===Bi['auth']['userEmailVerified']?this['o'][uK(0x249)]():(this[uK(0xf9e)][uK(0x92d)]=!0x1,this[uK(0xa54)][uK(0x96e)]=!0x1,this['#idea-delete-dialog'][uK(0xd44)]());}async #ma(){const uL=bY;await this[uL(0xfea)],await Bi[uL(0xf5c)][uL(0xfea)],null===Bi['auth']['userID']?this['o'][uL(0x908)](qi(location[uL(0xbd9)],uL(0x741),uL(0xb28)),!0x0):!0x1===Bi[uL(0xf5c)]['userEmailVerified']?this['o'][uL(0x249)]():(this['#comment-form'][uL(0xc2a)](),this['#comment-form'][uL(0x1ce)]=uL(0xb4b),this['#comment-form']['description']='',this[uL(0xf8e)]['throbber']=!0x1,this['#comment-dialog'][uL(0x96e)]=!0x1,this['#comment-dialog']['showModal']());}async #xa(){const uM=bY;await this[uM(0xfea)],await Bi[uM(0xf5c)][uM(0xfea)],null===Bi['auth'][uM(0xdc1)]?this['o'][uM(0x908)](qi(location[uM(0xbd9)],'dialog',uM(0xb28)),!0x0):!0x1===Bi[uM(0xf5c)][uM(0x1009)]?this['o'][uM(0x249)]():(this[uM(0xf8e)][uM(0xc2a)](),this['#comment-form'][uM(0x1ce)]=uM(0xb4b),this[uM(0xf8e)][uM(0xe24)]='',this['#comment-form'][uM(0x92d)]=!0x1,this[uM(0x5d4)][uM(0x96e)]=!0x1,this[uM(0x5d4)][uM(0xd44)]());}async #ga(){const uN=bY;if(await this['whenReady'],await Bi[uN(0xf5c)]['whenReady'],null===Bi[uN(0xf5c)][uN(0xdc1)])this['o'][uN(0x908)](qi(location[uN(0xbd9)],'dialog',uN(0xb28)),!0x0);else{if(!0x1===Bi[uN(0xf5c)][uN(0x1009)])this['o']['openEmailVerifyMessageDialog']();else{let af=new URLSearchParams(location['search'])[uN(0x10bd)](uN(0x741))[uN(0xe2d)](0x5),{description:ag,revision:ah}=await Bi[uN(0x2f6)]['getDocument'](uN(0xb29),af);this[uN(0xf8e)][uN(0xc2a)](),this[uN(0xf8e)][uN(0x1ce)]=uN(0xc58),this[uN(0xf8e)][uN(0xe24)]=ag,this['#comment-form'][uN(0xa45)]=ah,this['#comment-form'][uN(0x92d)]=!0x1,this['#comment-dialog'][uN(0x96e)]=!0x1,this[uN(0x5d4)][uN(0xd44)]();}}}async #ba(){const uO=bY;await this[uO(0xfea)],await Bi[uO(0xf5c)][uO(0xfea)],null===Bi[uO(0xf5c)]['userID']?this['o'][uO(0x908)](qi(location[uO(0xbd9)],uO(0x741),'login'),!0x0):!0x1===Bi[uO(0xf5c)]['userEmailVerified']?this['o']['openEmailVerifyMessageDialog']():(this[uO(0xf39)]['throbber']=!0x1,this[uO(0xf39)][uO(0x96e)]=!0x1,this['#comment-delete-dialog'][uO(0xd44)]());}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const uP=a1;this[uP(0x552)]=a2[uP(0x962)],this[uP(0xdd6)][uP(0x8c2)]='';let ag=uP(0x8d7)+location[uP(0x98c)][uP(0xc97)]('/')[0x2],ah=await Bi['index'][uP(0x909)](ag,a2[uP(0x962)]),aj=ag[uP(0xc97)]('-')[0x1];if(ah){{let ak=uP(0x9a4)+aj+'/'+ah['threadSlug'];if(location[uP(0x98c)]!==ak){let al=location[uP(0xbd9)][uP(0xf0c)](location[uP(0x98c)],ak);this['o'][uP(0x908)](al,!0x0);}}if(this['#idea-block'][uP(0x3ab)]=ah,this[uP(0x3c2)][uP(0xa32)]={'count':ah[uP(0x5ff)]},this[uP(0x584)][uP(0xbd9)]=qi(location[uP(0xbd9)],uP(0x741),uP(0x24f)),0x0===ah[uP(0x5ff)])this[uP(0xdd6)][uP(0x8c2)]='';else{{let aq='';for(let ar=0x0;ar<Math[uP(0x339)](ah[uP(0x5ff)],0xa);ar+=0x1)aq+=uP(0xc53);this[uP(0xdd6)]['innerHTML']=aq;}let am=await Bi[uP(0xa1a)][uP(0x4c6)](ag,a2[uP(0x962)]),an=document[uP(0x7aa)](),ap=au=>{const uQ=uP;let av=document[uQ(0x840)](uQ(0xeaa));av['id']=au['id'],av[uQ(0x3ab)]=au,av['threaded']=!0x0,av[uQ(0x387)]=Bi[uQ(0xf5c)][uQ(0xa55)],av[uQ(0x97b)]=Bi[uQ(0xf5c)]['isModerator'],av[uQ(0xfbc)]=Bi[uQ(0xf5c)]['isModerator'];let aw=am[uQ(0xe7a)](ax=>ax[uQ(0x761)]===au['id']);for(let ax of aw){let ay=ap(ax);av['append'](ay);}return av;};for(let au of am)if(au[uP(0x761)]===ag){let av=ap(au);an['append'](av);}this[uP(0xdd6)]['innerHTML']='',this['#comments']['append'](an);}}this.#sa=null,af();});}}customElements[bY(0x864)](bY(0xcaa),ea);class ta extends HTMLElement{static #C=ie` <template> <main id="main"> <x-input id="search-input" type="search"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search" autocapitalize ellipsis></x-message></x-label> </x-input> <x-buttons id="status-buttons" tracking="1"> <x-button value="all" condensed> <x-label><x-message href="#questions.all" autocapitalize></x-message></x-label> </x-button> <x-button value="open" condensed> <x-label><x-message href="#questions.open" autocapitalize></x-message></x-label> </x-button> <x-button value="closed" condensed> <x-label><x-message href="#questions.closed" autocapitalize></x-message></x-label> </x-button> </x-buttons> <x-button id="advanced-filters-button"> <x-icon id="advanced-filters-icon" href="#switch"></x-icon> <x-popover id="advanced-filters-popover" modal> <main> <x-switch id="upvoted-by-me-switch"> <x-label><x-message href="#upvoted-by-me"></x-message></x-label> </x-switch> <x-switch id="watched-by-me-switch"> <x-label><x-message href="#watched-by-me"></x-message></x-label> </x-switch> <x-switch id="created-by-me-switch"> <x-label><x-message href="#created-by-me"></x-message></x-label> </x-switch> </main> </x-popover> </x-button> <x-select id="sort-select"> <x-menu> <x-menuitem value="createdTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="createdTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="threadUpdatedTime:desc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="threadUpdatedTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#updated-time"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="votesCount:desc"> <x-icon href="#upvote"></x-icon> <x-label> <x-message href="#votes"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="votesCount:asc"> <x-icon href="#upvote"></x-icon> <x-label> <x-message href="#votes"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="commentsCount:desc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="commentsCount:asc"> <x-icon href="#comment-outline"></x-icon> <x-label> <x-message href="#comments" args="count: unknown"></x-message> <span>↑</span> </x-label> </x-menuitem> <hr> <x-menuitem value="relevance"> <x-icon href="#search"></x-icon> <x-label><x-message href="#relevance"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Main
     */

    #main {
      display: flex;
      padding: 8px;
    }

    /* Search input */

    #search-input {
      flex: 1;
      min-width: 60px;
      max-width: none;
    }

    /* Status buttons */

    #status-buttons {
      margin-left: 8px;
    }

    /* Advanced filters button */

    #advanced-filters-button {
      margin-left: 8px;
      padding: 2px 9px;
    }

    #advanced-filters-button::part(arrow) {
      display: none;
    }

    #advanced-filters-icon {
      width: 19px;
      height: 19px;
    }

    #advanced-filters-popover > main {
      padding: 12px;
    }

    #advanced-filters-popover #watched-by-me-switch {
      margin-top: 12px;
    }

    #advanced-filters-popover #created-by-me-switch {
      margin-top: 12px;
    }

    /* Sort select */

    #sort-select {
      margin-left: 8px;
    }
    #sort-select:focus {
      z-index: 1;
    }
    @media all and (max-width: 650px) {
      #sort-select {
        width: 120px;
        min-width: 0px;
      }
    }
    @media all and (max-width: 539px) {
      #sort-select {
        width: 100px;
      }
    }
  `;get[bY(0xa28)](){const uR=bY;let [af]=this[uR(0xfd8)]['value']['split']('#');return af[uR(0x963)]();}set[bY(0xa28)](af){const uS=bY;let [,ag]=this[uS(0xfd8)]['value'][uS(0xc97)]('#');af=af[uS(0x963)](),ag=void 0x0===ag?null:ag[uS(0x963)]();let ah=af;null!==ag&&(af[uS(0x6dc)]>0x0?ah+='\x20#'+ag:ah+='#'+ag),this[uS(0xfd8)][uS(0xf0a)]=ah;}get['tag'](){const uT=bY;let [af,ag]=this[uT(0xfd8)]['value']['split']('#');return void 0x0===ag?null:ag[uT(0x963)]();}set['tag'](af){const uU=bY;let [ag]=this[uU(0xfd8)][uU(0xf0a)]['split']('#');ag=ag[uU(0x963)]();let ah=ag;null!==(af=null===af?null:af[uU(0x963)]())&&(ag[uU(0x6dc)]>0x0?ah+='\x20#'+af:ah+='#'+af),this[uU(0xfd8)][uU(0xf0a)]=ah;}get[bY(0x887)](){const uV=bY;return this[uV(0xd54)][uV(0xf0a)];}set[bY(0x887)](af){const uW=bY;this[uW(0xd54)][uW(0xf0a)]=af;}get[bY(0xc3a)](){return this.#Ta;}set['upvotedBy'](af){const uX=bY;this.#Ta=af,this[uX(0x41f)][uX(0x42a)]=null!==af,this.#Si();}get[bY(0x3b8)](){return this.#Ci;}set[bY(0x3b8)](af){const uY=bY;this.#Ci=af,this[uY(0x602)]['toggled']=null!==af,this.#Si();}get[bY(0x7dd)](){return this.#Ti;}set['createdBy'](af){const uZ=bY;this.#Ti=af,this['#created-by-me-switch'][uZ(0x42a)]=null!==af,this.#Si();}get[bY(0x311)](){const v0=bY;return this[v0(0x101b)][v0(0xf0a)];}set[bY(0x311)](af){const v1=bY;this[v1(0x101b)][v1(0xf0a)]=af;}#P;#Gt;#Ta=null;#Ci=null;#Ti=null;constructor(){const v2=bY;super(),this.#P=this[v2(0x1017)]({'mode':v2(0xc5d)}),this.#P[v2(0x48f)]=[a2[v2(0x500)],ta.#S],this.#P[v2(0x775)](document[v2(0xc3b)](ta.#C[v2(0x223)],!0x0));for(let af of this.#P[v2(0x44e)](v2(0x6e3)))this['#'+af['id']]=af;this[v2(0xfd8)][v2(0x1012)](v2(0x63b),()=>this.#$i()),this['#status-buttons'][v2(0x1012)](v2(0x807),()=>this.#$a()),this[v2(0x41f)][v2(0x1012)]('toggle',()=>this.#Pa()),this[v2(0x602)]['addEventListener']('toggle',()=>this.#Pi()),this[v2(0xb4a)][v2(0x1012)](v2(0x807),()=>this.#Ei()),this['#sort-select'][v2(0x1012)]('change',()=>this.#Li());}[bY(0x854)](){const v3=bY;Bi['auth']['addEventListener'](v3(0xecc),this.#Gt=()=>{this.#Si();}),this.#Si();}[bY(0x7db)](){const v4=bY;Bi[v4(0xf5c)]['removeEventListener'](v4(0xecc),this.#Gt);}#$i(){const v5=bY;this[v5(0x10bf)](new CustomEvent(v5(0x63b),{'detail':v5(0xa28)}));}#$a(){const v6=bY;this[v6(0x10bf)](new CustomEvent(v6(0x63b),{'detail':'status'}));}#Pa(){const v7=bY;this.#Ta=this[v7(0x41f)][v7(0x42a)]?Bi[v7(0xf5c)][v7(0xdc1)]:null,this['dispatchEvent'](new CustomEvent(v7(0x63b),{'detail':'upvotedBy'})),this.#Si();}#Pi(){const v8=bY;this.#Ci=this[v8(0x602)][v8(0x42a)]?Bi[v8(0xf5c)][v8(0xdc1)]:null,this[v8(0x10bf)](new CustomEvent(v8(0x63b),{'detail':'watchedBy'})),this.#Si();}#Ei(){const v9=bY;this.#Ti=this[v9(0xb4a)][v9(0x42a)]?Bi['auth'][v9(0xdc1)]:null,this[v9(0x10bf)](new CustomEvent(v9(0x63b),{'detail':'createdBy'})),this.#Si();}#Li(){const vb=bY;this[vb(0x10bf)](new CustomEvent(vb(0x63b),{'detail':vb(0x311)}));}async #Si(){const vc=bY;await Bi['auth'][vc(0xfea)],null===Bi[vc(0xf5c)][vc(0xdc1)]?this[vc(0x5e6)][vc(0x96e)]=!0x0:(this[vc(0x5e6)][vc(0x96e)]=!0x1,this['upvotedBy']||this[vc(0x3b8)]||this[vc(0x7dd)]?(this[vc(0xd2d)][vc(0xe90)]['color']=vc(0xfb4),this['#advanced-filters-icon'][vc(0xe90)][vc(0xf95)]='scaleX(-1)'):(this['#advanced-filters-icon'][vc(0xe90)][vc(0x56c)]=null,this[vc(0xd2d)][vc(0xe90)][vc(0xf95)]=null));}}customElements[bY(0x864)](bY(0xd22),ta);class ia extends HTMLElement{static [bY(0x1068)]=[bY(0xa7f)];static #C=ie` <template> <main id="main"> <div id="title" part="title"> <a id="title-anchor"></a> <span id="hashtag-span" part="hashtag"></span> </div> <x-button id="translate-button" size="small" condensed togglable hidden> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <div id="details" part="details"> <span id="created-detail"> <a id="created-author-anchor"></a> <span id="created-time-span"></span> </span> <span id="updated-detail"> <a id="updated-author-anchor"></a> <span id="updated-time-span"></span> </span> <div id="comments-detail"> <x-icon id="comments-icon" href="#comment-outline"></x-icon> <div id="comments-label"></div> </div> <div id="votes-detail"> <x-icon id="votes-icon" href="#vote"></x-icon> <div id="votes-label"></div> </div> </div> <div id="skeleton"> <div id="skeleton-title" part="skeleton-item"></div> <div id="skeleton-details" part="skeleton-item"></div> </div> </main> </template>
  `;static #S=se`
    :host {
      display: flex;
      align-items: stretch;
      box-sizing: border-box;
      width: 100%;
      padding: 12px 15px;
      position: relative;
    }

    a {
      color: inherit;
      text-decoration: none;
      font-weight: inherit;
    }
    a:hover {
      text-decoration: underline;
    }

    #main {
      width: 100%;
    }

    /**
     * Title
     */

    #title {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2;
    }
    :host([skeleton]) #title {
      display: none;
    }

    #title a {
      color: inherit;
      filter: none;
    }

    #title #hashtag-span {
      position: relative;
      bottom: 1px;
      margin-left: 4px;
      vertical-align: middle;
      font-size: 13px;
      text-transform: lowercase;
    }

    /**
     * "Translate" button
     */

    #translate-button {
      float: right;
    }
    :host([skeleton]) #translate-button {
      display: none;
    }

    /**
     * Details
     */

    #details {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      margin-top: 3px;
      font-size: 14.5px;
      line-height: 1.2;
    }
    #details[hidden] {
      display: none;
    }
    :host([skeleton]) #details {
      display: none;
    }

    /* Created */

    #created-detail {
      margin: 2px 12px 2px 0px;
    }

    #created-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #created-author-anchor {
      display: inline;
    }

    /* Updated */

    #updated-detail {
      margin: 2px 12px 2px 0px;
    }

    #updated-author-anchor {
      display: none;
      font-weight: 700;
    }
    :host([details*="author"]) #updated-author-anchor {
      display: inline;
    }

    /* Comments */

    #comments-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #comments-detail[hidden] {
      display: none;
    }

    #comments-icon {
      margin-left: 2px;
      transform: translateY(1px);
    }

    #comments-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Votes */

    #votes-detail {
      display: flex;
      align-items: center;
      margin-right: 12px;
    }
    #votes-detail[hidden] {
      display: none;
    }

    #votes-icon {
      width: 16px;
      height: 16px;
      margin-bottom: 2px;
    }

    #votes-label {
      margin-left: 6px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
    }

    /* Tags */

    a.tag-anchor {
      display: inline-block;
      margin: 2px 6px 2px 0;
      text-decoration: none;
      vertical-align: middle;
    }
    a.tag-anchor:last-of-type {
      margin-right: 12px;
    }

    x-tag {
      vertical-align: middle;
    }

    /**
     * Skeleton
     */

    #skeleton-title {
      display: none;
      height: 20px;
      width: 50%;
    }
    :host([skeleton]) #skeleton-title {
      display: block;
    }

    #skeleton-details {
      display: none;
      height: 13px;
      width: 30%;
      margin-top: 14px;
      opacity: 0.7;
    }
    :host([skeleton]) #skeleton-details {
      display: block;
    }
  `;get[bY(0xa7f)](){const vd=bY;return this[vd(0xfd9)](vd(0xa7f))?this[vd(0xc51)](vd(0xa7f))[vd(0xc97)]('\x20')['filter'](af=>''!==af['trim']()):[vd(0xad4),vd(0xadc)];}set[bY(0xa7f)](af){const vf=bY;this[vf(0xa0a)](vf(0xa7f),af[vf(0xf5e)](''));}get[bY(0x3ab)](){return this.#Ui;}set['data'](af){this.#Ui=af,this.#A();}get[bY(0xb09)](){const vg=bY;return this[vg(0xfd9)]('skeleton');}set[bY(0xb09)](af){const vh=bY;af?this['setAttribute'](vh(0xb09),''):this[vh(0x88e)](vh(0xb09));}get[bY(0x887)](){const vj=bY;return this[vj(0xc51)](vj(0x887));}#T;#P;#Ui=null;constructor(){const vk=bY;super(),this.#P=this[vk(0x1017)]({'mode':vk(0xc5d)}),this.#P[vk(0x48f)]=[a2[vk(0x500)],ia.#S],this.#P['append'](document[vk(0xc3b)](ia.#C[vk(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](vk(0x6e3)))this['#'+af['id']]=af;this['#skeleton-title'][vk(0xe90)]['width']=Ht(0x32,0x5a)+'%',this.#P['addEventListener']('pointerdown',ag=>this.#Ye(ag)),this.#P[vk(0x1012)](vk(0xff9),ag=>this.#Xe(ag)),this[vk(0xfa3)][vk(0x1012)]('toggle',()=>this.#Di());}['connectedCallback'](){const vl=bY;this.#T=si(this,vl(0xf55));}[bY(0x83b)](af,ag,ah){const vm=bY;ag!==ah&&vm(0xa7f)===af&&this.#A();}[bY(0x109f)](){return new Promise(async af=>{const vn=a1;this[vn(0xa0a)](vn(0x109f),''),await it(0xc8),this[vn(0x88e)](vn(0x109f)),await it(0xc8),this['setAttribute'](vn(0x109f),''),await it(0xc8),this['removeAttribute'](vn(0x109f)),af();});}#Ye(af){const vp=bY;af[vp(0x779)][vp(0xc06)]('a')&&af[vp(0x539)]();}#Xe(af){const vq=bY;let ag=af[vq(0x779)][vq(0xc06)]('a');ag?.[vq(0x1061)]===location[vq(0x1061)]&&(ag[vq(0x98c)][vq(0x9ae)](vq(0x466))||ag[vq(0x98c)][vq(0x9ae)]('/profiles'))&&(af[vq(0x539)](),this.#T[vq(0x908)](ag[vq(0xbd9)]));}async #Di(){const vr=bY;let af=this[vr(0xfa3)][vr(0x42a)]?a2[vr(0x962)]:this.#Ui[vr(0xb73)];He[vr(0x1d5)](af)?this.#Ui=await Bi[vr(0xa1a)]['getPost'](this.#Ui['id'],af):this.#Ui=await Bi['database'][vr(0xd1f)]('posts',this.#Ui['id']),this.#A();}#A(){const vu=bY;let af=this.#Ui,ag=this[vu(0xa7f)];if(null!==af){this['#details'][vu(0x96e)]=0x0===ag[vu(0x6dc)];{let ah=Te(af[vu(0x37a)]),aj=this[vu(0x3ab)]['id'][vu(0xc97)]('-')[0x1];if(this[vu(0xa0a)](vu(0x887),af[vu(0x887)]),this['#title-anchor'][vu(0xbd9)]=vu(0x6b5)+aj+'/'+af['threadSlug'],this[vu(0x986)][vu(0x8c2)]=ah,ag['includes']('hashtag')?this[vu(0x533)][vu(0xad6)]='#'+aj:this[vu(0x533)][vu(0xad6)]='',CSS[vu(0x101d)]&&af['keywords']){let ak=ai(af[vu(0xdf4)],[this[vu(0xb91)]]),al=CSS['highlights'][vu(0x10bd)](vu(0xaef))||new Highlight();for(let am of ak)al[vu(0xc2f)](am);CSS[vu(0x101d)][vu(0xf62)](vu(0xaef),al);}}if(af['locale']===af[vu(0xb73)]&&af[vu(0x962)]===a2[vu(0x962)]?this[vu(0xfa3)][vu(0x96e)]=!0x0:(this[vu(0xfa3)][vu(0x42a)]=af[vu(0x962)]===a2['locale'],this[vu(0xfa3)][vu(0x96e)]=!0x1,this['#src-locale-message'][vu(0xbd9)]=vu(0x627)+(af[vu(0xb73)]||af[vu(0x962)]||'en'),this[vu(0xb15)][vu(0xbd9)]=vu(0x627)+a2[vu(0x962)]),ag['includes'](vu(0xad4))){let an=af[vu(0x10b6)];this[vu(0xfaf)][vu(0x96e)]=!0x1,this[vu(0xfaf)][vu(0xe90)][vu(0xb5d)]=ag[vu(0xc56)](vu(0xad4)),this['#created-author-anchor']['href']=vu(0x1c8)+af[vu(0xbaf)]+'/'+$e(af[vu(0xb8f)]),this[vu(0x10b8)][vu(0xad6)]=af[vu(0xb8f)],this[vu(0xa7f)][vu(0x1d5)]('author')?this['#created-time-span'][vu(0x8c2)]=vu(0xafb)+an+vu(0xaab):this[vu(0x2af)]['innerHTML']=vu(0x6b1)+an+'}\x22></x-message>';}else this[vu(0xfaf)][vu(0x96e)]=!0x0;if(ag['includes'](vu(0x9b2))){let ap,aq,ar;this[vu(0x4cf)][vu(0x96e)]=!0x1,this[vu(0x4cf)][vu(0xe90)][vu(0xb5d)]=ag[vu(0xc56)]('updated'),0x0===af['commentsCount']?(ap=af[vu(0x10b6)],aq=vu(0x1c8)+af[vu(0xbaf)]+'/'+$e(af['authorName']),ar=af[vu(0xb8f)]):(ap=af[vu(0xc5c)],aq='/profiles/'+af[vu(0xcb4)]+'/'+$e(af['threadUpdatedAuthorName']),ar=af['threadUpdatedAuthorName']),this[vu(0xdf0)][vu(0xbd9)]=aq,this[vu(0xdf0)][vu(0xad6)]=ar,this[vu(0xa7f)][vu(0x1d5)](vu(0x55e))?this[vu(0xc81)][vu(0x8c2)]='<x-message\x20href=\x22#date-wrote\x22\x20args=\x22date:'+ap+'}\x22></x-message>':this[vu(0xc81)][vu(0x8c2)]=vu(0x6b1)+ap+'}\x22></x-message>';}else this['#updated-detail']['hidden']=!0x0;ag[vu(0x1d5)](vu(0x72e))?(this[vu(0xb54)][vu(0x96e)]=0x0===af[vu(0x5ff)],this[vu(0xb54)]['style'][vu(0xb5d)]=ag['indexOf']('comments'),this[vu(0x8e8)][vu(0xad6)]=af[vu(0x5ff)]):this[vu(0xb54)][vu(0x96e)]=!0x0,ag[vu(0x1d5)]('votes')?(this[vu(0xb64)]['hidden']=0x0===af[vu(0x1014)],this[vu(0xb64)][vu(0xe90)][vu(0xb5d)]=ag[vu(0xc56)](vu(0x424)),this[vu(0x6d3)][vu(0xbd9)]=af['votesCount']<0x0?'#downvote':vu(0x7b5),this[vu(0x5aa)][vu(0xad6)]=af['votesCount']):this[vu(0xb64)][vu(0x96e)]=!0x0;for(let au of this[vu(0xec7)][vu(0x44e)]('a.tag-anchor'))au['remove']();if(ag['includes'](vu(0xadc))&&af[vu(0xadc)][vu(0x6dc)]>0x0){let av='',aw=ag[vu(0xc56)](vu(0xadc));for(let ax of af[vu(0xadc)]){let ay=vu(0x712)+ye(ax,'\x20','+'),az=Vt(ax);if(ax[vu(0x1d5)](':')){let [aA,aB]=ax[vu(0xc97)](':')[vu(0x8fb)](aC=>aC[vu(0x963)]());av+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22tag-anchor\x22\x20href=\x22'+ay+'\x22\x20style=\x22order:\x20'+aw+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20value=\x22'+ax+vu(0xecb)+az+vu(0x30e)+aA+vu(0x837)+aB+vu(0x1090);}else av+=vu(0xcf0)+ay+vu(0x2f5)+aw+vu(0x991)+ax+'\x22\x20skin=\x22colored\x22\x20style=\x22background:\x20'+az+vu(0x296)+ax+vu(0x1090);}this[vu(0xec7)][vu(0xdc8)](vu(0x227),av);}}}}customElements[bY(0x864)](bY(0xc6a),ia);class sa extends bs{static ['observedAttributes']=['type'];static ['v']=ie` <template> <x-box id="heading-box"> <h2 id="heading"><x-message id="heading-message"></x-message></h2> <bx-avatar id="avatar"></bx-avatar> </x-box> <section id="title-section"> <h3><x-message href="#title"></x-message></h3> <x-input id="title-input" validation="manual" maxlength="135"></x-input> </section> <section id="description-section"> <h3><x-message href="#description"></x-message></h3> <bx-richtextarea id="description-textarea" spellcheck></bx-richtextarea> </section> <section id="options-section"> <x-checkbox id="watch-checkbox" toggled> <x-label><strong><x-message href="#watch-thread"></x-message></strong></x-label> <x-label><x-message href="#watch-thread.detail"></x-message></x-label> </x-checkbox> </section> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#save"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{display:flex;flex-flow:column}h2{margin:0;font-size:28px}h3{margin-bottom:6px}#heading-box{margin-bottom:8px}#avatar{width:40px;height:40px;margin-left:auto}#textarea{min-height:0;margin-top:8px;flex:1}#title-section{margin-top:0}#title-input{width:100%;max-width:none}#title-input[error]::before{top:-20px;right:-4px;left:auto}#description-section{display:flex;flex-flow:column;flex:1;height:100%;min-height:0;margin-top:16px}#description-textarea{height:100%;min-height:0}#description-textarea[error]::before{top:-20px;right:-4px;left:auto}#options-section{margin-top:16px}`;get['type'](){const vv=bY;return this[vv(0xfd9)]('type')?this[vv(0xc51)](vv(0x1ce)):vv(0xb4b);}set[bY(0x1ce)](af){const vw=bY;this['setAttribute'](vw(0x1ce),af);}get[bY(0x37a)](){const vx=bY;return Ce(this[vx(0xc0c)][vx(0xf0a)]);}set['title'](af){const vy=bY;this[vy(0xc0c)][vy(0xf0a)]=Se(af);}get['description'](){const vz=bY;return this[vz(0x862)]['value'];}set[bY(0xe24)](af){const vA=bY;this[vA(0x862)]['value']=Te(af);}get[bY(0x35a)](){const vB=bY;return this[vB(0x862)]['blobUrls'];}get[bY(0xafd)](){const vC=bY;return this[vC(0xcfa)][vC(0x42a)];}#at;constructor(){const vD=bY;super(),this['#title-input'][vD(0x1012)](vD(0x84e),()=>this.#us()),this['#description-textarea']['addEventListener'](vD(0x84e),()=>this.#ps()),this[vD(0x412)][vD(0x1012)](vD(0xff9),af=>this.#ms(af)),this[vD(0x4a1)][vD(0x1012)](vD(0xff9),af=>this.#Pt(af));}[bY(0x854)](){const vE=bY;super[vE(0x854)](),this.#xs(),this.#gs(),this.#bs(),Bi[vE(0xf5c)][vE(0x1012)]('userchange',this.#at=()=>{this.#gs();});}[bY(0x7db)](){const vF=bY;super['disconnectedCallback'](),Bi[vF(0xf5c)][vF(0xee0)](vF(0x284),this.#at);}['attributeChangedCallback'](af,ag,ah){const vG=bY;ag!==ah&&vG(0x1ce)===af&&this.#xs();}['clear'](){const vH=bY;super['clear'](),this['#title-input'][vH(0xf0a)]='',this[vH(0xc0c)]['setCustomValidity'](''),this[vH(0x862)]['value']='',this['#description-textarea'][vH(0x75e)](''),this[vH(0xcfa)][vH(0x42a)]=!0x0;}[bY(0xbab)](){const vI=bY;let af=!0x0;return''===this[vI(0x862)][vI(0xf0a)][vI(0x963)]()&&(this[vI(0x862)]['setCustomValidity']('This\x20field\x20is\x20required'),this[vI(0x862)][vI(0x72c)](),af=!0x1),''===this[vI(0xc0c)][vI(0xf0a)]['trim']()&&(this[vI(0xc0c)][vI(0x75e)](vI(0x8d5)),this[vI(0xc0c)][vI(0x72c)](),af=!0x1),af;}#us(){const vJ=bY;this['p']=!0x0,this['#title-input'][vJ(0x75e)]('');}#ps(){const vK=bY;this['p']=!0x0,this[vK(0x862)][vK(0x75e)]('');}#ms(af){const vL=bY;this['dispatchEvent'](new CustomEvent(vL(0xb26)));}#Pt(af){const vM=bY;this[vM(0x10bf)](new CustomEvent(vM(0xf20)));}#xs(){const vN=bY;this[vN(0x320)][vN(0xbd9)]=vN(0xc58)===this[vN(0x1ce)]?vN(0x1003):vN(0x4ad);}async #gs(){const vO=bY;await Bi[vO(0xf5c)][vO(0xfea)],null!==Bi[vO(0xf5c)]['userID']&&(this[vO(0xdcd)][vO(0x1ce)]=Bi[vO(0xf5c)][vO(0x1050)][vO(0x58e)]||vO(0x9ce),this[vO(0xdcd)]['value']=Bi['auth'][vO(0xdc1)]);}#bs(){const vP=bY;this[vP(0xc5a)][vP(0x96e)]=vP(0xc58)===this[vP(0x1ce)];}}customElements[bY(0x864)]('bx-questionform',sa);class aa extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <div id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <a id="new-question-anchor" href="/questions?dialog=new-question"> <x-button id="new-question-button" toggled> <x-label><strong><x-message href="#new-question"></x-message></strong></x-label> </x-button> </a> </div> <bx-questionsfilterblock id="filter-block"></bx-questionsfilterblock> <div id="previews"></div> <div id="previews-skeleton"></div> <bx-placeholderblock id="previews-placeholder" hidden></bx-placeholderblock> <bx-pager id="pager" value="1" max="1"></bx-pager> </main> <div id="dialogs"> <dialog id="question-dialog"> <bx-questionform id="question-form" type="new"></bx-questionform> </dialog> </div> </template>
  `;static ['_shadowStyleSheet']=se`#header{display:flex;width:100%}#new-question-anchor{height:fit-content;margin-left:auto;filter:none;text-decoration:none}#new-question-button x-label{cursor:pointer}#previews{margin-top:14px}#previews>*{margin:12px 0}#previews>:first-child{margin-top:0}#previews-skeleton>*{margin:12px 0}#previews-skeleton>:first-child{margin-top:0}#pager{margin-top:24px}#question-dialog{width:95%;height:95%;max-width:750px}`;get['canonicalURL'](){const vQ=bY;let af=location['origin']+vQ(0x466),ag=new URLSearchParams(location[vQ(0xa28)]),ah=!0x1;for(let [aj,ak]of ag[vQ(0x2b6)]()){if(!(vQ(0x7c7)===aj&&parseInt(ak)>0x1)){ah=!0x1;break;}ah=!0x0;}return ah&&(af+='?'+ag[vQ(0xd23)]()),af;}#ys;#Xt;#ks=null;constructor(){const vR=bY;super(),this[vR(0x3d9)]['addEventListener'](vR(0x63b),af=>this.#Cs(af)),this['#question-dialog'][vR(0x1012)](vR(0x105d),af=>this.#io(af)),this[vR(0x3dc)][vR(0x1012)](vR(0xf20),af=>this.#so(af)),this[vR(0x3dc)][vR(0x1012)]('submit',af=>this.#ao(af));{let af='';for(let ag=0x0;ag<0xa;ag+=0x1)af+=vR(0x64f);this[vR(0xf41)][vR(0x8c2)]=af;}}async['connectedCallback'](){const vS=bY;super[vS(0x854)](),a2['addEventListener'](vS(0x60c),this.#Xt=()=>{this.#si();}),this['o']['addEventListener'](vS(0x828),this.#ys=af=>{this.#ii(af);}),this.#Es(),await this.#Ls(),vS(0x7c4)===new URLSearchParams(location['search'])[vS(0x10bd)](vS(0x741))&&this.#oo(),this['u']();}[bY(0x7db)](){const vT=bY;a2['removeEventListener'](vT(0x60c),this.#Xt),this['o'][vT(0xee0)](vT(0x828),this.#ys);}#si(){const vU=bY;this[vU(0x552)]!==a2[vU(0x962)]&&this.#Ls();}async #ii(af){const vV=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af['detail'];if(vV(0x466)===ah[vV(0x98c)]){let ak=new URLSearchParams(ag?ag[vV(0xa28)]:''),al=new URLSearchParams(ah[vV(0xa28)]),am=_i(ak,al);{let an=[vV(0xa28),vV(0x887),vV(0x7e4),vV(0x882),vV(0x583),vV(0x311),'tag',vV(0x7c7)];void 0x0!==am[vV(0x81c)](ap=>an[vV(0x1d5)](ap))&&(vV(0xc68)!==aj&&vV(0xf0c)!==aj||this['o']['resetScrollOffset'](),this.#Es(),await this.#Ls(),vV(0x3ff)===aj&&this['o']['restoreScrollOffset']());}if(am[vV(0x1d5)](vV(0x741))){let ap=ak[vV(0x10bd)](vV(0x741)),aq=al[vV(0x10bd)](vV(0x741));null===aq?vV(0x7c4)===ap&&this[vV(0x3aa)]['close']():'new-question'===aq&&this.#oo();}}}#Cs(af){const vW=bY;let ag=new URL(location[vW(0xbd9)]),ah=new URLSearchParams(location['search']);ah[vW(0x658)](vW(0x7c7)),''===this[vW(0x3d9)][vW(0xa28)]?ah['delete'](vW(0xa28)):ah['set'](vW(0xa28),this[vW(0x3d9)][vW(0xa28)]),vW(0x3b9)===this[vW(0x3d9)][vW(0x887)]?ah[vW(0x658)](vW(0x887)):ah[vW(0xf62)](vW(0x887),this[vW(0x3d9)]['status']),null===this[vW(0x3d9)][vW(0xc3a)]?ah['delete'](vW(0x7e4)):ah[vW(0xf62)](vW(0x7e4),this[vW(0x3d9)][vW(0xc3a)]),null===this['#filter-block']['watchedBy']?ah[vW(0x658)](vW(0x882)):ah['set'](vW(0x882),this['#filter-block'][vW(0x3b8)]),null===this[vW(0x3d9)][vW(0x7dd)]?ah[vW(0x658)]('created-by'):ah[vW(0xf62)](vW(0x583),this[vW(0x3d9)][vW(0x7dd)]),vW(0xa28)===af['detail']&&''!==this[vW(0x3d9)]['search']['trim']()?ah[vW(0xf62)](vW(0x311),vW(0x601)):'createdTime:desc'===this['#filter-block'][vW(0x311)]?ah['set'](vW(0x311),vW(0xad4)):vW(0xe41)===this['#filter-block'][vW(0x311)]?ah[vW(0xf62)](vW(0x311),'created-asc'):vW(0x1037)===this[vW(0x3d9)][vW(0x311)]?ah[vW(0x658)]('sort'):vW(0xadd)===this['#filter-block']['sort']?ah[vW(0xf62)](vW(0x311),vW(0x251)):'commentsCount:desc'===this[vW(0x3d9)][vW(0x311)]?ah['set'](vW(0x311),'comments'):'commentsCount:asc'===this[vW(0x3d9)]['sort']?ah[vW(0xf62)](vW(0x311),'comments-asc'):vW(0x245)===this[vW(0x3d9)][vW(0x311)]?ah['set']('sort',vW(0x424)):'votesCount:asc'===this[vW(0x3d9)][vW(0x311)]?ah[vW(0xf62)](vW(0x311),'votes-asc'):vW(0x601)===this[vW(0x3d9)][vW(0x311)]&&ah[vW(0xf62)]('sort','relevance'),null===this['#filter-block'][vW(0x9bc)]?ah[vW(0x658)](vW(0x9bc)):ah[vW(0xf62)]('tag',this['#filter-block'][vW(0x9bc)]),ag[vW(0xa28)]=ah[vW(0xd23)](),this['o'][vW(0x908)](ag[vW(0xbd9)]);}async #ao(){const vX=bY;if(!0x0===this[vX(0x3dc)][vX(0xbab)]()){let af=await Xe(),ag=[],ah=null,aj=null,ak={'type':vX(0x430),'title':this[vX(0x3dc)]['title'],'description':this[vX(0x3dc)][vX(0xe24)],'attachments':{},'watchThread':this[vX(0x3dc)]['watchThread']};null!==af&&(ak[vX(0xd88)]=af),this[vX(0x3dc)]['throbber']=!0x0;for(let al of this['#question-form'][vX(0x35a)]){let am=await(await fetch(al))[vX(0x105a)](),an=Kt(0x1e)+'.'+we(am[vX(0x1ce)]),ap=Bi[vX(0xa0e)][vX(0x21b)](vX(0x3a3)+an,am);ak[vX(0x35a)][al]=an,ag['push'](ap);}try{await Promise[vX(0x3b9)](ag),ah=await Bi[vX(0xfb8)]['postMessage'](vX(0xa75),ak);}catch(aq){aj=aq;}if(null===aj){let ar=ah['data'],au=ar[vX(0xc97)]('-')[0x1];await Bi[vX(0xa1a)]['whenPostCreated'](ar,a2['locale']),this[vX(0x3dc)]['throbber']=!0x1,this[vX(0x3aa)][vX(0x225)](),this['o']['navigate'](vX(0x6b5)+au);}else this[vX(0x3aa)][vX(0x96e)]=!0x0,this[vX(0x3dc)]['throbber']=!0x1,await this['o'][vX(0xafc)]({'title':{'href':vX(0x8bc)},'detail':bi(aj),'buttons':[{'href':vX(0xd94)}]}),this[vX(0x3aa)][vX(0x96e)]=!0x1;}}#so(){const vY=bY;this['o']['navigate'](qi(location[vY(0xbd9)],vY(0x741),null));}#io(){const vZ=bY;this['o'][vZ(0x908)](qi(location[vZ(0xbd9)],vZ(0x741),null));}async #oo(){const w0=bY;await this[w0(0xfea)],await Bi[w0(0xf5c)][w0(0xfea)],null===Bi[w0(0xf5c)][w0(0xdc1)]?this['o'][w0(0x908)](qi(location['href'],w0(0x741),'login'),!0x0):!0x1===Bi[w0(0xf5c)][w0(0x1009)]?this['o']['openEmailVerifyMessageDialog']():(this['#question-form']['clear'](),this['#question-form']['throbber']=!0x1,this[w0(0x3aa)][w0(0x96e)]=!0x1,this['#question-dialog']['showModal']());}#Es(){const w1=bY;let af=new URLSearchParams(location['search']),ag=af[w1(0x10bd)](w1(0x311));this['#filter-block'][w1(0xa28)]=af['get'](w1(0xa28))||'',this[w1(0x3d9)]['status']=af['get'](w1(0x887))||w1(0x3b9),this[w1(0x3d9)][w1(0xc3a)]=af['get'](w1(0x7e4))||null,this[w1(0x3d9)]['watchedBy']=af['get']('watched-by')||null,this[w1(0x3d9)][w1(0x7dd)]=af[w1(0x10bd)](w1(0x583))||null,this[w1(0x3d9)]['tag']=af[w1(0x10bd)](w1(0x9bc))||null,this[w1(0x3d9)][w1(0x311)]=w1(0x601)===ag?'relevance':w1(0xad4)===ag?'createdTime:desc':w1(0xa13)===ag?'createdTime:asc':w1(0x9b2)===ag?'threadUpdatedTime:desc':'updated-asc'===ag?'threadUpdatedTime:asc':w1(0x72e)===ag?w1(0x243):w1(0xa80)===ag?'commentsCount:asc':w1(0x424)===ag?'votesCount:desc':w1(0x401)===ag?w1(0x8ea):w1(0x1037);}async #Ls(){return this.#ks&&await this.#ks,this.#ks=new Promise(async af=>{const w2=a1;let ag=new URLSearchParams(location[w2(0xa28)]),ah={'query':this['#filter-block'][w2(0xa28)],'locale':a2[w2(0x962)],'type':w2(0x430),'sort':this['#filter-block'][w2(0x311)],'page':parseInt(ag[w2(0x10bd)](w2(0x7c7))||'1'),'perPage':0xa,'preview':!0x0};{let {tag:al,status:am,createdBy:an,watchedBy:ap,upvotedBy:aq}=this[w2(0x3d9)];null!==al&&(ah['tag']=al),w2(0x9ff)===am?ah[w2(0xc5d)]=!0x1:'closed'===am&&(ah[w2(0xc5d)]=!0x0),null===an&&null===ap&&null===aq||(await Bi[w2(0xf5c)][w2(0xfea)],null!==Bi[w2(0xf5c)][w2(0xdc1)]&&(null!==an&&(ah[w2(0xbaf)]=an),null!==ap&&(ah[w2(0x3b8)]=ap),null!==aq&&(ah[w2(0xc3a)]=aq)));}this['lang']=ah[w2(0x962)],this[w2(0x27c)]['href']=qi(location[w2(0xbd9)],'dialog',w2(0x7c4)),this[w2(0xd45)][w2(0x8c2)]='',this[w2(0x906)][w2(0x96e)]=!0x0,this['#previews-placeholder']['title']=w2(0x7ae),this['#previews-placeholder'][w2(0xe24)]=w2(0x217),this[w2(0xf41)][w2(0x96e)]=!0x1;let [aj,ak]=await Bi[w2(0xa1a)]['searchThreads'](ah);this['#pager'][w2(0x689)]=ak,this[w2(0x93d)][w2(0xf0a)]=ah['page'],CSS[w2(0x101d)]&&CSS[w2(0x101d)]['clear']();for(let ar of aj){let au=document['createElement'](w2(0xe84)),av=document[w2(0x840)](w2(0xc6a));w2(0xebd)===ah[w2(0x311)]||w2(0xe41)===ah['sort']?av[w2(0xa0a)](w2(0xa7f),w2(0x49d)):w2(0x1037)===ah[w2(0x311)]||w2(0xadd)===ah['sort']?av['setAttribute'](w2(0xa7f),'author\x20updated\x20tags\x20comments\x20hashtag'):w2(0x243)===ah['sort']||w2(0x1044)===ah[w2(0x311)]?av['setAttribute'](w2(0xa7f),'author\x20created\x20tags\x20comments\x20hashtag'):w2(0x245)===ah[w2(0x311)]||w2(0x8ea)===ah[w2(0x311)]?av['setAttribute'](w2(0xa7f),w2(0xeb3)):w2(0x601)===ah[w2(0x311)]&&av[w2(0xa0a)]('details',w2(0x49d)),av['id']=ar['id'],av[w2(0x3ab)]=ar,au[w2(0x775)](av),this[w2(0xd45)]['append'](au);}this['#previews-placeholder'][w2(0x96e)]=this[w2(0xd45)]['childElementCount']>0x0,this[w2(0xf41)][w2(0x96e)]=!0x0;{let aw=this['o'][w2(0xaad)];if(aw?.[w2(0x98c)][w2(0x9ae)](w2(0x6b5))){let ax=w2(0x63f)+aw[w2(0x98c)]['split']('/')[0x2],ay=this[w2(0xd45)][w2(0x344)]('bx-questionpreviewblock[id=\x22'+ax+'\x22]');ay&&ay[w2(0x109f)]();}}this.#ks=null,af();});}}customElements[bY(0x864)]('bx-questionspage',aa);class oa extends Ts{static [bY(0x2a2)]=ie` <template> <section id="actions-section"> <h3><x-message href="#actions" autocapitalize></x-message></h3> <x-buttons id="action-buttons"> <x-button id="edit-button" condensed> <x-icon href="#edit"></x-icon> <x-label><x-message href="#edit--verb" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="move-button" condensed> <x-icon href="#move"></x-icon> <x-label><x-message href="#move" autocapitalize ellipsis></x-message></x-label> </x-button> <x-button id="delete-button" condensed> <x-icon href="#trash"></x-icon> <x-label><x-message href="#delete" autocapitalize ellipsis></x-message></x-label> </x-button> </x-buttons> </section> <hr> <section id="status-section"> <h3><x-message href="#status" autocapitalize></x-message></h3> <x-select id="status-select"> <x-menu> <x-menuitem value="open" toggled> <x-label><x-message href="#question.open" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="answered"> <x-label><x-message href="#question.answered" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="duplicate"> <x-label><x-message href="#question.duplicate" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="out-of-date"> <x-label><x-message href="#question.out-of-date" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="tags-section"> <h3><x-message href="#tags" autocapitalize></x-message></h3> <x-tagsinput id="tags-input"></x-tagsinput> </section> </template>
  `;static [bY(0x78e)]=se`#action-buttons{width:100%}#action-buttons x-button{flex:1}#status-select{width:100%}`;get[bY(0x887)](){const w3=bY;return this[w3(0xa5e)][w3(0xf0a)];}set['status'](af){const w4=bY;this[w4(0xa5e)][w4(0xf0a)]=af;}get[bY(0xadc)](){const w5=bY;return this[w5(0xcc6)][w5(0xf0a)];}set[bY(0xadc)](af){const w6=bY;let ag='';for(let ah of af){if(ah[w6(0x1d5)](':')){let [aj,ak]=ah[w6(0xc97)](':')[w6(0x8fb)](al=>al['trim']());ag+=w6(0x8f5)+ah+w6(0x7df)+aj+w6(0xe8e)+ak+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-tag>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';}else ag+=w6(0x8f5)+ah+w6(0xe36)+ah+w6(0x5a7);this[w6(0xcc6)][w6(0x8c2)]=ag;}}constructor(){const w7=bY;super(),this[w7(0xcf8)][w7(0x1012)](w7(0xff9),()=>this.#Zs()),this[w7(0xf91)][w7(0x1012)](w7(0xff9),()=>this.#za()),this['#delete-button'][w7(0x1012)](w7(0xff9),()=>this.#Ys()),this['#status-select'][w7(0x1012)](w7(0x63b),()=>this.#Aa()),this['#tags-input']['addEventListener']('change',()=>this.#Xs());}#Zs(){const w8=bY;this['dispatchEvent'](new CustomEvent(w8(0x34d),{'detail':w8(0xc58)}));}#za(){const w9=bY;this[w9(0x10bf)](new CustomEvent(w9(0x34d),{'detail':w9(0x597)}));}#Ys(){const wb=bY;this['dispatchEvent'](new CustomEvent(wb(0x34d),{'detail':wb(0x658)}));}#Aa(){const wc=bY;this['dispatchEvent'](new CustomEvent(wc(0xc84)));}#Xs(){const wd=bY;this['dispatchEvent'](new CustomEvent(wd(0x956)));}}customElements[bY(0x864)]('bx-questionsettings',oa);class na extends HTMLElement{static [bY(0x1068)]=['condensed'];static #C=ie` <template> <div id="status" part="status"><x-message id="status-message"></x-message></div> <header id="header" part="header"> <div id="header-left-column"> <a id="author-avatar-anchor"> <bx-avatar id="author-avatar"></bx-avatar> </a> <bx-userbadges id="author-badges"></bx-userbadges> <a id="author-anchor"></a> <span id="wrote-span"></span> <a id="thread-anchor" hidden></a> </div> <div id="header-right-column"> <x-button id="translate-button" togglable> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <x-box id="actions-box"> <x-buttons id="vote-buttons"> <x-button id="downvote-button" value="downvote"> <x-icon id="downvote-icon" href="#downvote"></x-icon> <x-tooltip><x-message href="#downvote"></x-message></x-tooltip> </x-button> <x-button id="votes-count-button"> <x-label id="votes-count-label">0</x-label> </x-button> <x-button id="upvote-button" value="upvote"> <x-icon id="upvote-icon" href="#upvote"></x-icon> <x-tooltip><x-message href="#upvote"></x-message></x-tooltip> </x-button> </x-buttons> <x-button id="watch-button"> <x-icon href="#watch"></x-icon> <x-tooltip><x-message href="#watch"></x-message></x-tooltip> </x-button> <x-button id="edit-button" hidden> <x-icon href="#edit"></x-icon> </x-button> <x-button id="settings-button" hidden> <x-icon href="#hamburger-menu"></x-icon> <x-popover id="settings-popover" modal> <bx-questionsettings id="settings"></bx-questionsettings> </x-popover> </x-button> </x-box> </div> </header> <main id="main" part="main"> <article id="article"> <h2 id="title"> <span id="title-span"></span> <span id="hashtag-span" part="hashtag"></span> </h2> <div id="tags"></div> <section id="description"></section> </article> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      margin: 8px 0;
    }

    /**
     * Header
     */

    #header {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      border-width: 1px;
      border-style: solid;
      font-size: 14.5px;
    }

    #header-left-column {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    #header-right-column {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    /* Avatar */

    #author-avatar-anchor {
      display: inline-block;
      vertical-align: middle;
    }
    #author-avatar-anchor[hidden] {
      display: none;
    }

    /* Author badges */

    #author-badges {
      display: inline-block;
      vertical-align: middle;
      margin-left: 2px;
    }
    #author-badges[hidden],
    #author-badges[empty] {
      display: none;
    }

    /* Author name */

    #author-anchor {
      font-weight: 700;
      line-height: 31px;
      margin-left: 2px;
      text-decoration: none;
      color: inherit;
    }
    #author-anchor:hover {
      text-decoration: underline;
    }

    /* Thread anchor */

    #thread-anchor {
      font-weight: 700;
      border-left: 1.5px solid var(--text-color);
      padding-left: 10px;
      margin-left: 6px;
      color: inherit;
      text-decoration: none;
    }
    #thread-anchor:hover {
      text-decoration: underline;
    }

    /* Status badge */

    #status {
      display: none;
      position: absolute;
      top: 95px;
      left: 0;
      margin-left: 100%;
      padding: 3px 6px;
      transform: translateX(-30%) rotate(40deg);
      transform-origin: 0% 0%;
      box-sizing: border-box;
      border-width: 3px;
      border-style: solid;
      font-size: 17px;
      font-weight: 700;
      text-transform: uppercase;
      white-space: pre;
      line-height: 1;
      user-select: none;
      -webkit-user-select: none;
    }
    :host([status="duplicate"]) #status:not([hidden]),
    :host([status="out-of-date"]) #status:not([hidden]),
    :host([status="answered"]) #status:not([hidden]) {
      display: block;
    }

    /* "Translate" button */

    #translate-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    /* "Watch" button */

    #watch-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #watch-button x-icon {
      margin: 0;
    }

    /* "Edit" button */

    #edit-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #edit-button x-icon {
      margin: 0;
      width: 14px;
      height: 14px;
    }

    /* "Settings" button */

    #settings-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    #settings-button::part(arrow) {
      display: none;
    }

    #settings-button > x-icon {
      width: 15px;
      height: 15px;
    }

    /* "Downvote" and "Upvote" buttons */

    #downvote-button {
      min-height: 25px;
      margin: 0 0 0 8px;
      padding: 0px 9px;
    }

    #upvote-button {
      min-height: 25px;
      padding: 0px 9px;
    }

    #downvote-icon,
    #upvote-icon {
      width: 14px;
      height: 14px;
    }
    #downvote-icon {
      transform: translateY(2px);
    }
    #upvote-icon {
      transform: translateY(-1px);
    }

    /* Votes count */

    #votes-count-button {
      min-height: 25px;
      padding: 0px 9px;
      pointer-events: none;
    }

    /**
     * Main
     */

    #main {
      padding: 22px 24px;
      border-width: 1px;
      border-style: solid;
      border-top: none;
    }
    :host([condensed]) #main {
      padding: 10px 18px;
    }

    /* Title */

    #title {
      margin: 0;
    }

    #title #hashtag-span {
      font-size: 20px;
      vertical-align: middle;
      text-transform: lowercase;
    }

    /* Tags */

    #tags {
      display: flex;
      margin-top: 5px;
    }
    #tags:empty,
    #tags[hidden] {
      display: none;
    }

    #tags a {
      display: flex;
      margin: 0 0 0 6px;
      text-decoration: none;
    }
    #tags a:first-child {
      margin-left: 0;
    }
    #tags a:active {
      outline: none;
    }

    /* Description */

    #description {
      margin-top: 20px;
    }
    #title[hidden] + #tags[hidden] + #description {
      margin-top: 0;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set['data'](af){const wf=bY;this.#Ui=af,this[wf(0xc8b)]&&this.#A();}get[bY(0x7d2)](){const wg=bY;return this[wg(0xfd9)](wg(0x7d2));}set[bY(0x7d2)](af){const wh=bY;!0x0===af?this[wh(0xa0a)](wh(0x7d2),''):this[wh(0x88e)](wh(0x7d2));}get[bY(0x887)](){const wj=bY;return this['getAttribute'](wj(0x887));}#T;#P;#Gt;#Ui=null;constructor(){const wk=bY;super(),this.#P=this[wk(0x1017)]({'mode':wk(0xc5d)}),this.#P[wk(0x48f)]=[a2[wk(0x500)],na.#S],this.#P[wk(0x775)](document[wk(0xc3b)](na.#C[wk(0x223)],!0x0));for(let af of this.#P[wk(0x44e)](wk(0x6e3)))this['#'+af['id']]=af;this.#P[wk(0x1012)]('click',ag=>this.#Rs(ag)),this[wk(0xfa3)]['addEventListener']('toggle',()=>this.#Di()),this[wk(0x9a5)]['addEventListener'](wk(0xff9),()=>this.#Js()),this[wk(0xcf8)][wk(0x1012)](wk(0xff9),()=>this.#Zs()),this['#upvote-button']['addEventListener'](wk(0xff9),ag=>this.#Ba(ag)),this[wk(0xf28)][wk(0x1012)](wk(0xff9),ag=>this.#Ba(ag)),this['#settings']['addEventListener'](wk(0x34d),ag=>this.#Qs(ag)),this[wk(0xf1b)][wk(0x1012)](wk(0xc84),()=>this.#Ia()),this[wk(0xf1b)][wk(0x1012)](wk(0x956),()=>this.#ea());}[bY(0x854)](){const wl=bY;this.#T=si(this,'#app'),Bi[wl(0xf5c)][wl(0x1012)]('userprofilechange',this.#Gt=()=>{this.#A();}),this.#A();}[bY(0x7db)](){const wm=bY;Bi[wm(0xf5c)][wm(0xee0)](wm(0xecc),this.#Gt);}[bY(0x83b)](af,ag,ah){const wn=bY;ag!==ah&&wn(0x7d2)===af&&this.#js();}#js(){const wp=bY;this['#title'][wp(0x96e)]=!0x0===this['condensed'],this[wp(0xcad)][wp(0x96e)]=!0x0===this[wp(0x7d2)],this[wp(0x7de)]['hidden']=!0x0===this[wp(0x7d2)],this[wp(0x533)][wp(0x96e)]=!0x0===this[wp(0x7d2)],this[wp(0x8f2)][wp(0x96e)]=!0x1===this['condensed'],this[wp(0x5bb)][wp(0x96e)]=!0x0===this[wp(0x7d2)],this['#actions-box'][wp(0x96e)]=!0x0===this[wp(0x7d2)],this['#status']['hidden']=!0x0===this[wp(0x7d2)];}#Rs(af){const wq=bY;af[wq(0x779)]['closest']('a')?this.#Ks(af):'img'===af['target']['localName']&&this.#pi(af);}async #Ks(af){const wr=bY;let ag=af[wr(0x779)][wr(0xc06)]('a');ag['origin']===location['origin']&&(ag[wr(0x98c)][wr(0x9ae)](wr(0x466))||ag[wr(0x98c)][wr(0x9ae)](wr(0xe97)))&&(af[wr(0x539)](),this.#T['navigate'](ag['href']));}#pi(af){const wu=bY;this.#T[wu(0x242)]['showModal'](af['target']);}async #Di(){const wv=bY;let af=this[wv(0xfa3)][wv(0x42a)]?a2[wv(0x962)]:this.#Ui['srcLocale'];He[wv(0x1d5)](af)?this.#Ui=await Bi[wv(0xa1a)][wv(0x909)](this.#Ui['id'],af):this.#Ui=await Bi[wv(0x2f6)][wv(0xd1f)]('posts',this.#Ui['id']),this.#A();}async #Ba(af){const ww=bY;let ag=af[ww(0x779)][ww(0xc06)](ww(0xa88)),ah=ag[ww(0x42a)]?ww(0x5c8):ag[ww(0xf0a)],aj=this[ww(0xa0b)][ww(0x42a)],ak=this[ww(0xf28)][ww(0x42a)];if(this[ww(0xa0b)][ww(0x6a2)]=!0x0,this[ww(0xa0b)]['toggled']=ww(0x3f0)===ah,this[ww(0xf28)][ww(0x6a2)]=!0x0,this[ww(0xf28)][ww(0x42a)]=ww(0x9aa)===ah,this['#votes-count-button'][ww(0x6a2)]=!0x0,!0x1===Bi[ww(0xf5c)]['userEmailVerified'])this[ww(0xa0b)][ww(0x42a)]=aj,this[ww(0xf28)][ww(0x42a)]=ak,null===Bi[ww(0xf5c)][ww(0xdc1)]?this.#T[ww(0x908)](qi(location['href'],ww(0x741),ww(0xb28))):this.#T[ww(0x249)]();else{let al=this.#Ui['id'],am=Bi[ww(0xf5c)][ww(0xdc1)],an=null;try{ww(0x3f0)===ah?await Bi[ww(0xfb8)][ww(0x6ba)](ww(0x82e),al):ww(0x9aa)===ah?await Bi[ww(0xfb8)]['postMessage'](ww(0xaa9),al):ww(0x5c8)===ah&&await Bi['functions'][ww(0x6ba)](ww(0x1095),al);}catch(ap){an=ap;}null===an?(this.#Ui['upvoters']=this.#Ui[ww(0xd30)][ww(0xe7a)](aq=>aq!==am),this.#Ui[ww(0x719)]=this.#Ui[ww(0x719)]['filter'](aq=>aq!==am),ww(0x3f0)===ah?this.#Ui['upvoters'][ww(0xc68)](am):'downvote'===ah&&this.#Ui[ww(0x719)]['push'](am),this.#Ui[ww(0x1014)]=this.#Ui['upvoters']['length']-this.#Ui[ww(0x719)][ww(0x6dc)],this[ww(0xf4a)][ww(0xad6)]=this.#Ui[ww(0x1014)]):(ww(0x3f0)===ah?await this.#T[ww(0xafc)]({'title':{'href':'#failed-to-upvote-post'},'detail':bi(an),'buttons':[{'href':ww(0x95a)}]}):ww(0x9aa)===ah?await this.#T[ww(0xafc)]({'title':{'href':ww(0x2dc)},'detail':bi(an),'buttons':[{'href':ww(0x95a)}]}):ww(0x5c8)===ah&&await this.#T[ww(0xafc)]({'title':{'href':ww(0xeaf)},'detail':bi(an),'buttons':[{'href':ww(0x95a)}]}),this['#upvote-button'][ww(0x42a)]=aj,this[ww(0xf28)][ww(0x42a)]=ak);}this['#downvote-button']['disabled']=!0x1,this[ww(0xa0b)][ww(0x6a2)]=!0x1,this['#votes-count-button']['disabled']=!0x1;}async #Js(){const wx=bY;let af=!0x0===this['#watch-button'][wx(0x42a)]?'unwatch':wx(0xb4e),ag=this[wx(0x9a5)][wx(0x42a)];if(this[wx(0x9a5)][wx(0x6a2)]=!0x0,this[wx(0x9a5)][wx(0x42a)]='watch'===af,!0x1===Bi[wx(0xf5c)]['userEmailVerified'])this[wx(0x9a5)][wx(0x42a)]=ag,null===Bi[wx(0xf5c)]['userID']?this.#T['navigate'](qi(location[wx(0xbd9)],wx(0x741),'login')):this.#T[wx(0x249)]();else{let ah=this.#Ui['id'],aj=Bi[wx(0xf5c)]['userID'],ak=null;try{wx(0xb4e)===af?await Bi[wx(0xfb8)][wx(0x6ba)](wx(0xca7),ah):await Bi[wx(0xfb8)][wx(0x6ba)]('unwatchPost',ah);}catch(al){ak=al;}null===ak?(this.#Ui[wx(0xeb5)]=this.#Ui[wx(0xeb5)]['filter'](am=>am!==aj),'watch'===af&&this.#Ui[wx(0xeb5)]['push'](aj)):(wx(0xb4e)===af?await this.#T['openMessageDialog']({'title':{'href':wx(0x1008)},'detail':bi(ak),'buttons':[{'href':'#close'}]}):await this.#T[wx(0xafc)]({'title':{'href':wx(0x2a0)},'detail':bi(ak),'buttons':[{'href':'#close'}]}),this[wx(0x9a5)][wx(0x42a)]=ag);}this[wx(0x9a5)][wx(0x6a2)]=!0x1;}#Zs(){const wy=bY;let af=new URL(location[wy(0xbd9)]),ag=new URLSearchParams(location[wy(0xa28)]);ag[wy(0xf62)](wy(0x741),wy(0x1024)),af[wy(0xa28)]=ag[wy(0xd23)](),this.#T[wy(0x908)](af[wy(0xd23)]());}async #Qs(af){const wz=bY;if(wz(0xc58)===af['detail']){let ag=new URL(location['href']),ah=new URLSearchParams(location[wz(0xa28)]);this['#settings-button'][wz(0xcfc)](),ah[wz(0xf62)](wz(0x741),'edit-question'),ag[wz(0xa28)]=ah[wz(0xd23)](),await it(0x190),this.#T['navigate'](ag[wz(0xd23)]());}else{if(wz(0x597)===af[wz(0xdd7)]){let aj=new URL(location[wz(0xbd9)]),ak=new URLSearchParams(location[wz(0xa28)]);this[wz(0x50f)][wz(0xcfc)](),ak[wz(0xf62)](wz(0x741),wz(0x9c9)),aj[wz(0xa28)]=ak['toString'](),await it(0x190),this.#T['navigate'](aj[wz(0xd23)]());}else{if(wz(0x658)===af[wz(0xdd7)]){let al=new URL(location[wz(0xbd9)]),am=new URLSearchParams(location[wz(0xa28)]);this['#settings-button']['collapse'](),am[wz(0xf62)](wz(0x741),wz(0x1f0)),al['search']=am['toString'](),await it(0x190),this.#T[wz(0x908)](al['toString']());}}}}async #Ia(){const wA=bY;let af=this[wA(0xf1b)]['status'],ag=this.#Ui['id'],ah=null;try{await Bi['functions'][wA(0x6ba)](wA(0xf7f),{'id':ag,'status':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[wA(0x887)]=af,this.#A()):(await this.#T[wA(0xafc)]({'title':{'href':wA(0xb6d)},'detail':bi(ah),'buttons':[{'href':wA(0x95a)}]}),this[wA(0xf1b)][wA(0x887)]=this.#Ui[wA(0x887)]);}async #ea(){const wB=bY;let af=this[wB(0xf1b)][wB(0xadc)],ag=this.#Ui['id'],ah=null;try{await Bi[wB(0xfb8)][wB(0x6ba)](wB(0xf7f),{'id':ag,'tags':af});}catch(aj){ah=aj;}null===ah?(this.#Ui[wB(0xadc)]=af,this.#A()):(await this.#T[wB(0xafc)]({'title':{'href':wB(0x70b)},'detail':bi(ah),'buttons':[{'href':wB(0x95a)}]}),this['#settings'][wB(0xadc)]=this.#Ui['tags']);}#A(){const wC=bY;let af=null!==Bi[wC(0xf5c)][wC(0xdc1)],ag=Bi[wC(0xf5c)][wC(0xa55)],ah=af?Bi[wC(0xf5c)]['userID']:null,aj=this.#Ui;if(null!==aj){this[wC(0xcad)][wC(0xbd9)]=wC(0x1c8)+aj[wC(0xbaf)]+'/'+$e(aj[wC(0xb8f)]),this['#author-avatar'][wC(0x1ce)]=aj[wC(0x911)]||wC(0x9ce),this[wC(0x87c)][wC(0xf0a)]=aj[wC(0xbaf)],this[wC(0x7de)]['userAgent']=aj[wC(0xee1)],this[wC(0x7de)][wC(0x3e9)]=wC(0x70e)===aj[wC(0xbaf)],this[wC(0x107f)][wC(0xbd9)]='/profiles/'+aj[wC(0xbaf)]+'/'+$e(aj['authorName']),this[wC(0x107f)][wC(0xad6)]=aj[wC(0xb8f)],this[wC(0x104b)][wC(0x8c2)]=wC(0x69c)+aj[wC(0x10b6)]+wC(0xaab);{let ak=aj['id'][wC(0xc97)]('-')['at'](-0x1);this['#thread-anchor'][wC(0x8c2)]=Te(aj[wC(0x37a)]),this[wC(0x8f2)]['href']=wC(0x6b5)+ak+'/'+aj[wC(0xa4b)];}aj[wC(0x962)]===aj[wC(0xb73)]&&aj[wC(0x962)]===a2[wC(0x962)]?this[wC(0xfa3)][wC(0x96e)]=!0x0:(this[wC(0xfa3)][wC(0x42a)]=aj[wC(0x962)]===a2[wC(0x962)],this[wC(0xfa3)][wC(0x96e)]=!0x1,this['#src-locale-message']['href']=wC(0x627)+(aj['srcLocale']||aj[wC(0x962)]||'en'),this[wC(0xb15)][wC(0xbd9)]=wC(0x627)+a2[wC(0x962)]),this[wC(0xa0a)](wC(0x887),aj[wC(0x887)]),this[wC(0xc71)][wC(0xbd9)]='#question.'+aj[wC(0x887)],!0x1===af?(this['#upvote-button']['toggled']=!0x1,this[wC(0xf28)]['toggled']=!0x1):(this[wC(0xa0b)][wC(0x42a)]=aj['upvoters'][wC(0x1d5)](ah),this[wC(0xf28)][wC(0x42a)]=aj['downvoters'][wC(0x1d5)](ah)),this[wC(0xf4a)]['textContent']=aj[wC(0x1014)],this[wC(0x9a5)][wC(0x42a)]=!0x0===af&&aj[wC(0xeb5)][wC(0x1d5)](ah),this[wC(0xcf8)][wC(0x96e)]=!0x0===ag||ah!==aj[wC(0xbaf)],this[wC(0x50f)][wC(0x96e)]=!0x1===ag,!0x1===this['#settings-popover'][wC(0x753)]&&(this[wC(0xf1b)][wC(0x887)]=aj[wC(0x887)],this[wC(0xf1b)]['tags']=aj[wC(0xadc)]),this[wC(0xb91)][wC(0x552)]=aj['locale'],this[wC(0xf1d)][wC(0x8c2)]=Te(aj[wC(0x37a)]),this[wC(0x533)][wC(0xad6)]='#'+aj['id'][wC(0xc97)]('-')['at'](-0x1);{let al='';for(let am of aj['tags']){let an=wC(0x712)+ye(am,'\x20','+'),ap=Vt(am);if(am['includes'](':')){let [aq,ar]=am[wC(0xc97)](':')[wC(0x8fb)](au=>au[wC(0x963)]());al+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22'+an+wC(0xf33)+am+wC(0xecb)+ap+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label\x20slot=\x22scope\x22>'+aq+wC(0xa9e)+ar+wC(0x607);}else al+=wC(0x42b)+an+wC(0xf33)+am+wC(0xecb)+ap+wC(0x955)+am+wC(0x607);}this[wC(0x5bb)]['innerHTML']=al;}this[wC(0xfe0)][wC(0x8c2)]=Te(aj['description']),this[wC(0xfe0)][wC(0x552)]=aj[wC(0x962)];for(let au of this[wC(0xfe0)][wC(0x44e)](wC(0x3cb)))au[wC(0xfd9)](wC(0x105c))&&(au[wC(0x8c2)]=ds(au[wC(0xad6)],au[wC(0xc51)](wC(0x105c))));if(CSS[wC(0x101d)]&&aj[wC(0xdf4)]){let av=ai(aj['keywords'],[this[wC(0xb91)],this[wC(0xfe0)]]),aw=CSS[wC(0x101d)]['get']('mark')||new Highlight();for(let ax of av)aw[wC(0xc2f)](ax);CSS[wC(0x101d)][wC(0xf62)](wC(0xaef),aw);}Bi[wC(0xf5c)][wC(0xfea)][wC(0x270)](()=>{const wD=wC;if(Bi[wD(0xf5c)][wD(0xa55)]){for(let ay of this[wD(0xfe0)][wD(0x44e)](wD(0xd4d)))Bi[wD(0xa0e)][wD(0x54e)](ay[wD(0xe44)])[wD(0x270)](az=>{const wE=wD;let aA=fe(az[wE(0xb2e)]);ay[wE(0xa0a)](wE(0x8da),aA);});}});}}}customElements[bY(0x864)](bY(0x212),na);class la extends bs{static ['v']=ie` <template> <h2><x-message href="#move-post"></x-message></h2> <p><x-message href="#move-post.detail"></x-message></p> <p><x-message href="#new-category"></x-message>:</p> <x-radios id="radios"> <x-radio value="bug" toggled> <x-label><x-message href="#bugs"></x-message></x-label> </x-radio> <x-radio value="idea"> <x-label><x-message href="#ideas"></x-message></x-label> </x-radio> </x-radios> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#move-post"></x-message></x-label> </x-button> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:480px}p:last-of-type{margin-bottom:6px}`;constructor(){const wF=bY;super(),this['#cancel-button']['addEventListener'](wF(0xff9),()=>this.#Pt()),this[wF(0x412)][wF(0x1012)](wF(0xff9),af=>this.#ms(af));}#Pt(){const wG=bY;this['dispatchEvent'](new CustomEvent(wG(0xf20)));}#ms(af){const wH=bY;this[wH(0x10bf)](new CustomEvent(wH(0xb26),{'detail':this[wH(0xd5c)][wH(0xf0a)]}));}}customElements['define'](bY(0xb4d),la);class ra extends bs{static ['v']=ie` <template> <h2><x-message href="#confirm-delete-post"></x-message></h2> <p><x-message href="#confirm-delete-post.detail"></x-message></p> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"><x-label><x-message href="#cancel"></x-message></x-label></x-button> <x-button id="submit-button" toggled><x-label><x-message href="#delete"></x-message></x-label></x-button> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:400px}`;constructor(){const wI=bY;super(),this[wI(0x4a1)]['addEventListener'](wI(0xff9),()=>this.#Pt()),this[wI(0x412)][wI(0x1012)](wI(0xff9),af=>this.#ms(af));}#Pt(){const wJ=bY;this['dispatchEvent'](new CustomEvent(wJ(0xf20)));}#ms(af){const wK=bY;this[wK(0x10bf)](new CustomEvent(wK(0xb26)));}}customElements[bY(0x864)](bY(0x7ad),ra);class ha extends ns{static [bY(0x2a2)]=ie` <template> <main id="main"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <bx-questionblock id="question-block"></bx-questionblock> <hr id="separator"> <h3 id="comments-heading"> <x-message id="comments-message" href="#comments" args="count: 0"></x-message> </h3> <div id="comments"></div> <a id="new-comment-anchor"> <x-button id="new-comment-button" toggled> <x-label><strong><x-message href="new-comment"></x-message></strong></x-label> </x-button> </a> </main> <div id="dialogs"> <dialog id="question-dialog"> <bx-questionform id="question-form" type="edit"></bx-questionform> </dialog> <dialog id="question-move-dialog"> <bx-questionmoveform id="question-move-form"></bx-questionmoveform> </dialog> <dialog id="question-delete-dialog"> <bx-questiondeleteform id="question-delete-form"></bx-questiondeleteform> </dialog> <dialog id="comment-dialog"> <bx-commentform id="comment-form"></bx-commentform> </dialog> <dialog id="comment-delete-dialog"> <bx-commentdeleteform id="comment-delete-form"></bx-commentdeleteform> </dialog> </div> </template>
  `;static ['_shadowStyleSheet']=se`#separator{margin:35px 0 27px}#question-block{margin:20px 0 8px 0}#comments-heading{font-size:28px}#new-comment-anchor{display:block;margin-top:15px}#new-comment-button{width:100%;min-height:36px}#new-comment-button x-label{cursor:pointer}#comment-dialog,#question-dialog{width:95%;height:95%;max-width:750px}`;get[bY(0xe86)](){const wL=bY;let af=this[wL(0xe70)]['data']['id']['split']('-')[0x1],ag=this[wL(0xe70)][wL(0x3ab)][wL(0xa4b)];return location[wL(0x1061)]+wL(0x6b5)+af+'/'+ag;}#Xt;#ys;#Gt;#sa=null;constructor(){const wM=bY;super(),this['#question-dialog'][wM(0x1012)]('userclose',af=>this.#aa(af)),this[wM(0x3dc)][wM(0x1012)](wM(0xf20),af=>this.#so(af)),this['#question-form'][wM(0x1012)](wM(0xb26),af=>this.#ao(af)),this['#question-move-dialog'][wM(0x1012)](wM(0x105d),af=>this.#aa(af)),this['#question-move-form'][wM(0x1012)](wM(0xb26),af=>this.#no(af)),this[wM(0x10ba)]['addEventListener'](wM(0xf20),af=>this.#lo(af)),this[wM(0xb97)][wM(0x1012)](wM(0x105d),af=>this.#aa(af)),this[wM(0x441)][wM(0x1012)](wM(0xb26),af=>this.#ro(af)),this['#question-delete-form']['addEventListener'](wM(0xf20),af=>this.#ho(af)),this['#comment-dialog'][wM(0x1012)](wM(0x105d),af=>this.#aa(af)),this['#comment-form'][wM(0x1012)](wM(0xb26),af=>this.#la(af)),this['#comment-form']['addEventListener'](wM(0xf20),af=>this.#ra(af)),this[wM(0x1064)][wM(0x1012)](wM(0x105d),af=>this.#aa(af)),this[wM(0xf39)]['addEventListener'](wM(0xb26),af=>this.#ha(af)),this['#comment-delete-form'][wM(0x1012)]('cancel',af=>this.#ca(af));}async[bY(0x854)](){const wN=bY;super['connectedCallback'](),Bi['auth'][wN(0x1012)](wN(0xecc),this.#Gt=af=>{this.#da(af);}),a2['addEventListener'](wN(0x60c),this.#Xt=()=>{this.#si();}),this['o'][wN(0x1012)]('locationchange',this.#ys=af=>{this.#ii(af);}),await this.#A();{let af=new URLSearchParams(location[wN(0xa28)])[wN(0x10bd)](wN(0x741));null!==af&&(wN(0x1024)===af?this.#co():wN(0x9c9)===af?this.#do():'delete-question'===af?this.#uo():wN(0x24f)===af?this.#ma():af['startsWith']('reply-comment-')?this.#xa():af[wN(0x9ae)](wN(0x10e3))?this.#ga():af[wN(0x9ae)]('delete-comment-')&&this.#ba());}this['u']();}[bY(0x7db)](){const wO=bY;Bi['auth'][wO(0xee0)](wO(0xecc),this.#Gt),a2[wO(0xee0)](wO(0x60c),this.#Xt),this['o'][wO(0xee0)](wO(0x828),this.#ys);}#si(){const wP=bY;this[wP(0x552)]!==a2['locale']&&this.#A();}async #ii(af){const wQ=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af['detail'];if(ah[wQ(0x98c)][wQ(0x9ae)](wQ(0x6b5))){let ak=new URLSearchParams(ag?ag[wQ(0xa28)]:''),al=new URLSearchParams(ah['search']);if(V([...ak['keys'](),...al[wQ(0x414)]()])['includes']('dialog')){let am=ak[wQ(0x10bd)](wQ(0x741)),an=al['get'](wQ(0x741));am!==an&&(null===an?null!==am&&(wQ(0x1024)===am?this['#question-dialog'][wQ(0x225)]():wQ(0x9c9)===am?this[wQ(0x4da)][wQ(0x225)]():'delete-question'===am?this['#question-delete-dialog'][wQ(0x225)]():wQ(0x24f)===am||am[wQ(0x9ae)](wQ(0x3b6))||am[wQ(0x9ae)](wQ(0x10e3))?this[wQ(0x5d4)][wQ(0x225)]():am[wQ(0x9ae)]('delete-comment-')&&this[wQ(0x1064)]['close']()):wQ(0x1024)===an?this.#co():wQ(0x9c9)===an?this.#do():'delete-question'===an?this.#uo():wQ(0x24f)===an?this.#ma():an[wQ(0x9ae)](wQ(0x3b6))?this.#xa():an[wQ(0x9ae)](wQ(0x10e3))?this.#ga():an['startsWith'](wQ(0x50e))&&this.#ba());}}}#da(af){const wR=bY;let ag=Bi[wR(0xf5c)][wR(0xa55)],ah=Bi[wR(0xf5c)][wR(0x1050)];for(let aj of this[wR(0xdd6)][wR(0x44e)](wR(0xeaa)))aj['editable']=ag,aj[wR(0x97b)]=ag,aj[wR(0xfbc)]=ag;if(ah){let ak=Bi[wR(0xf5c)][wR(0xdc1)],al=this[wR(0xe70)][wR(0x3ab)];al?.[wR(0xbaf)]===ak&&al[wR(0xb8f)]!==ah[wR(0xce8)]&&(al[wR(0xb8f)]=ah[wR(0xce8)],this[wR(0xe70)][wR(0x3ab)]=al);}if(ah){let am=Bi[wR(0xf5c)][wR(0xdc1)];for(let an of this[wR(0xdd6)][wR(0x573)])if(null!==am&&am===an[wR(0x3ab)][wR(0xbaf)]){let ap=an[wR(0x3ab)];ap[wR(0xb8f)]!==ah[wR(0xce8)]&&(ap[wR(0xb8f)]=ah[wR(0xce8)],an[wR(0x3ab)]=ap);}}}#aa(){const wS=bY;this['o'][wS(0x908)](qi(location[wS(0xbd9)],wS(0x741),null));}async #ao(){const wT=bY;if(!0x0===this['#question-form'][wT(0xbab)]()){let af=wT(0x63f)+location['pathname']['split']('/')[0x2],ag=[],ah=null,aj={'id':af,'title':this[wT(0x3dc)][wT(0x37a)],'description':this[wT(0x3dc)][wT(0xe24)],'attachments':{}};this['#question-form'][wT(0x92d)]=!0x0;for(let ak of this[wT(0x3dc)][wT(0x35a)]){let al=await(await fetch(ak))[wT(0x105a)](),am=Kt(0x1e)+'.'+we(al[wT(0x1ce)]),an=Bi[wT(0xa0e)][wT(0x21b)](wT(0x3a3)+am,al);aj[wT(0x35a)][ak]=am,ag['push'](an);}try{await Promise[wT(0x3b9)](ag),await Bi[wT(0xfb8)][wT(0x6ba)]('editPost',aj);}catch(ap){ah=ap;}null===ah?(await Bi[wT(0xa1a)][wT(0x273)](af,a2[wT(0x962)],this[wT(0x3dc)][wT(0xa45)]),await this[wT(0x3aa)][wT(0x225)](),await it(0x96),await this.#A(),this['o']['navigate'](qi(location[wT(0xbd9)],'dialog',null))):(this[wT(0x3aa)][wT(0x96e)]=!0x0,await it(0x96),await this['o'][wT(0xafc)]({'title':{'href':wT(0xe9a)},'detail':bi(ah),'buttons':[{'href':wT(0xd94)}]}),this['#question-form'][wT(0x92d)]=!0x1,this[wT(0x3aa)]['hidden']=!0x1);}}async #la(){const wU=bY;if(!0x0===this[wU(0xf8e)][wU(0xbab)]()){let af=new URLSearchParams(location[wU(0xa28)])[wU(0x10bd)](wU(0x741));if(this[wU(0xf8e)]['throbber']=!0x0,'new-comment'===af||af[wU(0x9ae)](wU(0x3b6))){let ag=wU(0x63f)+location[wU(0x98c)][wU(0xc97)]('/')[0x2],ah=await Xe(),aj=[],ak=null,al=null,am={'type':wU(0x747),'description':this[wU(0xf8e)][wU(0xe24)],'attachments':{},'watchThread':this['#comment-form']['watchThread'],'parentID':af['startsWith']('reply-comment-')?af[wU(0xe2d)](0x6):ag};null!==ah&&(am[wU(0xd88)]=ah);for(let an of this[wU(0xf8e)]['attachments']){let ap=await(await fetch(an))['blob'](),aq=Kt(0x1e)+'.'+we(ap['type']),ar=Bi[wU(0xa0e)][wU(0x21b)]('temp/'+aq,ap);am[wU(0x35a)][an]=aq,aj[wU(0xc68)](ar);}try{await Promise['all'](aj),ak=await Bi['functions'][wU(0x6ba)](wU(0xa75),am);}catch(au){al=au;}if(null===al){let av=ak[wU(0x3ab)];await Bi[wU(0xa1a)][wU(0x691)](av,a2['locale']),this['#comment-form'][wU(0x92d)]=!0x1,this['o'][wU(0x908)](qi(location[wU(0xbd9)],wU(0x741),null)),await this.#A();let aw=this[wU(0xdd6)][wU(0x344)]('#'+av);aw&&aw[wU(0x467)]();}else this['#comment-form'][wU(0x92d)]=!0x1,this[wU(0x5d4)][wU(0x96e)]=!0x0,await it(0x96),await this['o'][wU(0xafc)]({'title':{'href':'#failed-to-add-comment'},'detail':bi(al),'buttons':[{'href':wU(0xd94)}]}),this[wU(0x5d4)][wU(0x96e)]=!0x1;}else{if(af[wU(0x9ae)]('edit-comment-')){let ax=af['substring'](0x5),ay=this['#comments']['querySelector']('#'+ax),az=[],aA=null,aB=null,aC={'id':ax,'description':this[wU(0xf8e)]['description'],'attachments':{}};for(let aD of this[wU(0xf8e)][wU(0x35a)]){let aE=await(await fetch(aD))[wU(0x105a)](),aF=Kt(0x1e)+'.'+we(aE[wU(0x1ce)]),aG=Bi[wU(0xa0e)][wU(0x21b)](wU(0x3a3)+aF,aE);aC[wU(0x35a)][aD]=aF,az[wU(0xc68)](aG);}try{await Promise[wU(0x3b9)](az),aA=await Bi['functions'][wU(0x6ba)](wU(0xf7f),aC);}catch(aH){aB=aH;}null===aB?(await Bi[wU(0xa1a)]['whenPostEdited'](ax,a2[wU(0x962)],this[wU(0xf8e)][wU(0xa45)]),this['o']['navigate'](qi(location[wU(0xbd9)],wU(0x741),null)),await this.#A(),ay=this[wU(0xdd6)][wU(0x344)]('#'+ax),ay&&ay[wU(0x467)]()):(this[wU(0x5d4)][wU(0x96e)]=!0x0,await it(0x96),await this['o']['openMessageDialog']({'title':{'href':wU(0x463)},'detail':bi(aB),'buttons':[{'href':wU(0xd94)}]}),this['#comment-form'][wU(0x92d)]=!0x1,this[wU(0x5d4)][wU(0x96e)]=!0x1);}}}}async #no(af){const wV=bY;let ag=wV(0x63f)+location[wV(0x98c)][wV(0xc97)]('/')[0x2],ah=null,aj=null;this['#question-move-form'][wV(0x72c)](),this[wV(0x10ba)][wV(0x92d)]=!0x0;try{ah=(await Bi[wV(0xfb8)]['postMessage'](wV(0x35b),{'id':ag,'type':af[wV(0xdd7)]}))['data'];}catch(ak){aj=ak;}if(null===aj){await Bi[wV(0xa1a)][wV(0x691)](ag,a2[wV(0x962)]),await this[wV(0x4da)][wV(0x225)]();let [al,am]=ah[wV(0xc97)]('-'),an=wV(0x3fa)===al?al:al+'s';this['o']['navigate']('/'+an+'/'+am,!0x0);}else this['o'][wV(0x908)](qi(location['href'],wV(0x741),null)),await this['o'][wV(0xafc)]({'title':{'href':'#failed-to-move-post'},'detail':bi(aj),'buttons':[{'href':wV(0x95a)}]});}async #ro(){const wW=bY;let af=wW(0x63f)+location[wW(0x98c)][wW(0xc97)]('/')[0x2],ag=null;this[wW(0x441)][wW(0x72c)](),this[wW(0x441)][wW(0x92d)]=!0x0;try{await Bi[wW(0xfb8)][wW(0x6ba)](wW(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi['index'][wW(0xffa)](af,a2[wW(0x962)]),await this['#question-delete-dialog'][wW(0x225)](),this['o'][wW(0x908)](wW(0x466))):(this['o'][wW(0x908)](qi(location[wW(0xbd9)],wW(0x741),null)),await this['o'][wW(0xafc)]({'title':{'href':wW(0x207)},'detail':bi(ag),'buttons':[{'href':wW(0x95a)}]}));}async #ha(){const wX=bY;let af=new URLSearchParams(location[wX(0xa28)])['get'](wX(0x741))[wX(0xe2d)](0x7),ag=null;this[wX(0xf39)]['focus'](),this['#comment-delete-form'][wX(0x92d)]=!0x0;try{await Bi[wX(0xfb8)][wX(0x6ba)](wX(0x5ca),af);}catch(ah){ag=ah;}null===ag?(await Bi[wX(0xa1a)][wX(0xffa)](af,a2[wX(0x962)]),this['o'][wX(0x908)](qi(location[wX(0xbd9)],wX(0x741),null)),await this.#A()):(this['o'][wX(0x908)](qi(location[wX(0xbd9)],wX(0x741),null)),await this['o']['openMessageDialog']({'title':{'href':'#failed-to-delete-comment'},'detail':bi(ag),'buttons':[{'href':wX(0x95a)}]}));}#so(){const wY=bY;this['o'][wY(0x908)](qi(location['href'],wY(0x741),null));}#lo(){const wZ=bY;this['o'][wZ(0x908)](qi(location[wZ(0xbd9)],'dialog',null));}#ho(){const x0=bY;this['o']['navigate'](qi(location[x0(0xbd9)],x0(0x741),null));}#ra(){const x1=bY;this['o'][x1(0x908)](qi(location[x1(0xbd9)],x1(0x741),null));}#ca(){const x2=bY;this['o'][x2(0x908)](qi(location['href'],x2(0x741),null));}async #co(){const x3=bY;if(await this['whenReady'],await Bi[x3(0xf5c)][x3(0xfea)],null===Bi['auth'][x3(0xdc1)])this['o'][x3(0x908)](qi(location[x3(0xbd9)],x3(0x741),'login'),!0x0);else{if(!0x1===Bi['auth']['userEmailVerified'])this['o'][x3(0x249)]();else{let af=x3(0x63f)+location['pathname'][x3(0xc97)]('/')[0x2],{title:ag,description:ah,revision:aj}=await Bi[x3(0x2f6)]['getDocument'](x3(0xb29),af);this[x3(0x3dc)][x3(0xc2a)](),this[x3(0x3dc)][x3(0x37a)]=ag,this[x3(0x3dc)]['description']=ah,this[x3(0x3dc)][x3(0xa45)]=aj,this[x3(0x3dc)][x3(0x92d)]=!0x1,this[x3(0x3aa)][x3(0x96e)]=!0x1,this['#question-dialog']['showModal']();}}}async #do(){const x4=bY;await this[x4(0xfea)],await Bi['auth']['whenReady'],null===Bi[x4(0xf5c)][x4(0xdc1)]?this['o'][x4(0x908)](qi(location[x4(0xbd9)],x4(0x741),x4(0xb28)),!0x0):!0x1===Bi[x4(0xf5c)]['userEmailVerified']?this['o'][x4(0x249)]():(this['#question-move-form'][x4(0x92d)]=!0x1,this[x4(0x4da)][x4(0x96e)]=!0x1,this[x4(0x4da)]['showModal']());}async #uo(){const x5=bY;await this[x5(0xfea)],await Bi[x5(0xf5c)]['whenReady'],null===Bi[x5(0xf5c)][x5(0xdc1)]?this['o'][x5(0x908)](qi(location[x5(0xbd9)],x5(0x741),x5(0xb28)),!0x0):!0x1===Bi['auth'][x5(0x1009)]?this['o'][x5(0x249)]():(this[x5(0x441)][x5(0x92d)]=!0x1,this[x5(0xb97)][x5(0x96e)]=!0x1,this[x5(0xb97)][x5(0xd44)]());}async #ma(){const x6=bY;await this[x6(0xfea)],await Bi[x6(0xf5c)][x6(0xfea)],null===Bi['auth'][x6(0xdc1)]?this['o'][x6(0x908)](qi(location[x6(0xbd9)],x6(0x741),'login'),!0x0):!0x1===Bi[x6(0xf5c)]['userEmailVerified']?this['o'][x6(0x249)]():(this[x6(0xf8e)][x6(0xc2a)](),this[x6(0xf8e)]['type']=x6(0xb4b),this[x6(0xf8e)][x6(0xe24)]='',this['#comment-form']['throbber']=!0x1,this['#comment-dialog'][x6(0x96e)]=!0x1,this[x6(0x5d4)]['showModal']());}async #xa(){const x7=bY;await this[x7(0xfea)],await Bi[x7(0xf5c)][x7(0xfea)],null===Bi['auth'][x7(0xdc1)]?this['o']['navigate'](qi(location[x7(0xbd9)],x7(0x741),x7(0xb28)),!0x0):!0x1===Bi['auth'][x7(0x1009)]?this['o'][x7(0x249)]():(this[x7(0xf8e)]['clear'](),this[x7(0xf8e)][x7(0x1ce)]=x7(0xb4b),this[x7(0xf8e)][x7(0xe24)]='',this[x7(0xf8e)][x7(0x92d)]=!0x1,this[x7(0x5d4)][x7(0x96e)]=!0x1,this[x7(0x5d4)][x7(0xd44)]());}async #ga(){const x8=bY;if(await this[x8(0xfea)],await Bi[x8(0xf5c)][x8(0xfea)],null===Bi['auth'][x8(0xdc1)])this['o']['navigate'](qi(location[x8(0xbd9)],x8(0x741),x8(0xb28)),!0x0);else{if(!0x1===Bi[x8(0xf5c)][x8(0x1009)])this['o'][x8(0x249)]();else{let af=new URLSearchParams(location[x8(0xa28)])[x8(0x10bd)](x8(0x741))[x8(0xe2d)](0x5),{description:ag,revision:ah}=await Bi[x8(0x2f6)][x8(0xd1f)]('posts',af);this[x8(0xf8e)][x8(0xc2a)](),this[x8(0xf8e)][x8(0x1ce)]=x8(0xc58),this[x8(0xf8e)][x8(0xe24)]=ag,this[x8(0xf8e)][x8(0xa45)]=ah,this[x8(0xf8e)]['throbber']=!0x1,this[x8(0x5d4)][x8(0x96e)]=!0x1,this['#comment-dialog'][x8(0xd44)]();}}}async #ba(){const x9=bY;await this['whenReady'],await Bi[x9(0xf5c)][x9(0xfea)],null===Bi['auth']['userID']?this['o']['navigate'](qi(location[x9(0xbd9)],x9(0x741),x9(0xb28)),!0x0):!0x1===Bi['auth'][x9(0x1009)]?this['o'][x9(0x249)]():(this['#comment-delete-form'][x9(0x92d)]=!0x1,this[x9(0xf39)][x9(0x96e)]=!0x1,this['#comment-delete-dialog'][x9(0xd44)]());}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const xb=a1;this['lang']=a2[xb(0x962)],this[xb(0xdd6)][xb(0x8c2)]='';let ag=xb(0x63f)+location[xb(0x98c)][xb(0xc97)]('/')[0x2],ah=await Bi['index']['getPost'](ag,a2[xb(0x962)]),aj=ag[xb(0xc97)]('-')[0x1];if(ah){{let ak='/questions/'+aj+'/'+ah[xb(0xa4b)];if(location[xb(0x98c)]!==ak){let al=location['href']['replace'](location[xb(0x98c)],ak);this['o'][xb(0x908)](al,!0x0);}}if(this[xb(0xe70)][xb(0x3ab)]=ah,this['#comments-message']['args']={'count':ah['commentsCount']},this[xb(0x584)]['href']=qi(location[xb(0xbd9)],xb(0x741),xb(0x24f)),0x0===ah['commentsCount'])this['#comments']['innerHTML']='';else{{let aq='';for(let ar=0x0;ar<Math['min'](ah[xb(0x5ff)],0xa);ar+=0x1)aq+=xb(0xc53);this[xb(0xdd6)][xb(0x8c2)]=aq;}let am=await Bi[xb(0xa1a)][xb(0x4c6)](ag,a2[xb(0x962)]),an=document['createDocumentFragment'](),ap=au=>{const xc=xb;let av=document[xc(0x840)]('bx-commentblock');av['id']=au['id'],av[xc(0x3ab)]=au,av['threaded']=!0x0,av[xc(0x387)]=Bi['auth'][xc(0xa55)],av[xc(0x97b)]=Bi[xc(0xf5c)]['isModerator'],av[xc(0xfbc)]=Bi['auth'][xc(0xa55)];let aw=am[xc(0xe7a)](ax=>ax[xc(0x761)]===au['id']);for(let ax of aw){let ay=ap(ax);av['append'](ay);}return av;};for(let au of am)if(au[xb(0x761)]===ag){let av=ap(au);an['append'](av);}this['#comments'][xb(0x8c2)]='',this[xb(0xdd6)][xb(0x775)](an);}}this.#sa=null,af();});}}customElements[bY(0x864)](bY(0xa6b),ha);class ca extends ns{static ['_shadowTemplate']=ie` <template> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <img id="preview"> </template>
  `;static [bY(0x78e)]=se`#breadcrumb{margin-bottom:20px}#preview{background:var(--checkboard-background);border-width:1px;border-style:solid;border-color:var(--border-color)}`;get[bY(0x10ab)](){const xd=bY;return location[xd(0x98c)][xd(0xc97)]('/')[0x2];}get[bY(0xe86)](){const xf=bY;return location[xf(0x1061)]+xf(0xe5a)+this[xf(0x10ab)];}get[bY(0x694)](){return'noindex,\x20nofollow';}#sa=null;async[bY(0x854)](){const xg=bY;super[xg(0x854)](),await this.#A(),this['u']();}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const xh=a1;let ag='https://storage.boxy-svg.com/artworks/'+this[xh(0x10ab)]+xh(0x481),ah=null,aj=null,ak=null;try{ah=await fetch(ag,{'cache':xh(0xeda),'headers':{'Pragma':xh(0xe23)}}),!0x1===ah['ok']&&(ak=ah[xh(0x887)]);}catch(am){aj=am;}if(aj)await this['o']['openMessageDialog']({'title':{'href':'#failed-to-open-file'},'detail':{'href':xh(0x230)},'buttons':[{'href':xh(0x95a)}]});else{if(ak)await this['o']['openMessageDialog']({'title':{'href':xh(0x75a)},'detail':{'href':xh(0x797),'args':{'serverError':ak}},'buttons':[{'href':xh(0x95a)}]});else{let an=await ah[xh(0x7a7)](),ap=await(al=an,new Promise(async ar=>{const xj=xh;let au,av,aw=new Blob([al],{'type':xj(0x2d5)}),ax=new FileReader();ax[xj(0x8fa)](aw),ax[xj(0x1012)](xj(0x75c),au=ay=>{const xk=xj;ax['removeEventListener'](xk(0x75c),au),ax[xk(0xee0)](xk(0xe1f),av);let az=ay['target'][xk(0x65d)];ar(az);}),ax[xj(0x1012)]('error',av=ay=>{const xl=xj;ax[xl(0xee0)](xl(0x75c),au),ax[xl(0xee0)]('error',av),ar(null);});}));this[xh(0x868)][xh(0xe44)]=ap;let aq=await Bi[xh(0x2f6)][xh(0xd1f)](xh(0x1e0),this['artworkID']);this['#breadcrumb'][xh(0x4fe)]=aq[xh(0xce8)];}}var al;this.#sa=null,af();});}}customElements[bY(0x864)](bY(0x8a9),ca);class da extends HTMLElement{static #C=ie` <template> <aside> <bx-avatar id="avatar"></bx-avatar> </aside> <main id="main"> <article> <section id="name-section"></section> <section id="bio-section"></section> <section id="website-section"> <span><strong>Website:</strong></span> <a rel="nofollow noopener" id="website-anchor"></a> </section> <section id="created-section"> <span><strong>Joined:</strong></span> <span id="created-date-span"></span> </section> </article> </main> </template>
  `;static #S=se`
    :host {
      display: flex;
      border-width: 1px;
      border-style: solid;
      padding: 14px;
      font-size: 14.5px;
    }

    #main {
      margin-left: 16px;
    }

    #avatar {
      width: 110px;
      height: 110px;
    }

    #bio-section {
      margin: 5px 0px;
    }

    #name-section {
      margin: 0;
      padding: 0;
      line-height: 1.15;
      font-size: 22px;
      font-weight: 700;
    }

    #website-anchor:hover {
      text-decoration: underline;
    }
  `;get[bY(0x3ab)](){return this.#Ui;}set[bY(0x3ab)](af){this.#Ui=af,this.#A();}#P;#Ui=null;constructor(){const xm=bY;super(),this.#P=this[xm(0x1017)]({'mode':xm(0xc5d)}),this.#P[xm(0x48f)]=[a2[xm(0x500)],da.#S],this.#P['append'](document[xm(0xc3b)](da.#C[xm(0x223)],!0x0));for(let af of this.#P[xm(0x44e)](xm(0x6e3)))this['#'+af['id']]=af;}['connectedCallback'](){this.#A();}async #A(){const xn=bY;if(this.#Ui?(this[xn(0xdcd)][xn(0x96e)]=!0x1,this[xn(0xdcd)][xn(0x1ce)]=this.#Ui&&this.#Ui[xn(0x58e)]||xn(0x9ce),this[xn(0xdcd)]['value']=this.#Ui['id']):this[xn(0xdcd)][xn(0x96e)]=!0x0,this.#Ui?this[xn(0x1073)][xn(0xad6)]=this.#Ui[xn(0xce8)]:this[xn(0x1073)][xn(0xad6)]='',this.#Ui?.[xn(0xebb)]?this[xn(0xb0b)][xn(0x8c2)]=Te(this.#Ui[xn(0xebb)]):this[xn(0xb0b)][xn(0x8c2)]='',this.#Ui?.[xn(0x94f)]?(this[xn(0xec4)][xn(0x96e)]=!0x1,this[xn(0x5d1)]['href']=this.#Ui[xn(0x94f)],this['#website-anchor']['textContent']=this.#Ui[xn(0x94f)]):(this[xn(0xec4)]['hidden']=!0x0,this[xn(0x5d1)][xn(0xbd9)]='',this[xn(0x5d1)][xn(0xad6)]=''),this.#Ui){let af=0x3e8*this.#Ui[xn(0x10b6)][xn(0x740)];this[xn(0x2cf)][xn(0x96e)]=!0x1,this[xn(0xd9f)][xn(0x8c2)]=xn(0xc40)+af+xn(0xa04);}else this['#created-section'][xn(0x96e)]=!0x0,this[xn(0xd9f)][xn(0xad6)]='';}}customElements['define'](bY(0x9eb),da);class ua extends ns{static [bY(0x1068)]=[bY(0xb46)];static ['_shadowTemplate']=ie` <template> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <bx-profileblock id="profile-block"></bx-profileblock> <x-box id="nav-buttons"> <a id="activity-anchor"> <x-button id="activity-button" value="activity" condensed togglable> <x-icon href="#login"></x-icon> <x-label><x-message href="#activity" autocapitalize></x-message></x-label> </x-button> </a> <a id="ideas-anchor"> <x-button id="ideas-button" value="ideas" condensed togglable> <x-icon href="#ideas"></x-icon> <x-label><x-message href="#ideas"></x-message></x-label> </x-button> </a> <a id="bugs-anchor"> <x-button id="bugs-button" value="bugs" condensed togglable> <x-icon href="#bugs"></x-icon> <x-label><x-message href="#bugs"></x-message></x-label> </x-button> </a> <a id="questions-anchor"> <x-button id="questions-button" value="questions" condensed togglable> <x-icon href="#questions"></x-icon> <x-label><x-message href="#questions"></x-message></x-label> </x-button> </a> </x-box> <div id="previews"></div> <bx-placeholderblock id="previews-placeholder" hidden></bx-placeholderblock> <bx-pager id="pager" value="1" max="1"></bx-pager> </template>
  `;static ['_shadowStyleSheet']=se`#breadcrumb{margin-bottom:20px}#nav-buttons{margin-top:20px;width:100%}#nav-buttons>a{flex:1;margin-left:7px;text-decoration:none;filter:none}#nav-buttons>a:first-child{margin-left:0}#nav-buttons>a>x-button{width:100%}#nav-buttons>a>x-button[toggled]{z-index:1}#previews{margin-top:20px}#previews bx-commentblock,#previews x-card{margin:12px 0}#pager{margin-top:24px}`;get[bY(0xdc1)](){const xp=bY;return this['getAttribute'](xp(0xb46));}set[bY(0xdc1)](af){const xq=bY;null===af?this[xq(0x88e)](xq(0xb46)):this[xq(0xa0a)](xq(0xb46),af);}get[bY(0xe86)](){const xr=bY;let af=$e(this[xr(0x974)][xr(0x3ab)][xr(0xce8)]);return location[xr(0x1061)]+'/profiles/'+this['userID']+'/'+af;}#sa=null;#Xt;#ys;async[bY(0x854)](){const xu=bY;super['connectedCallback'](),a2[xu(0x1012)](xu(0x60c),this.#Xt=()=>{this.#si();}),this['o']['addEventListener'](xu(0x828),this.#ys=af=>{this.#ii(af);}),await this.#A(),this['u']();}[bY(0x7db)](){const xv=bY;a2[xv(0xee0)]('localeschange',this.#Xt),this['o']['removeEventListener'](xv(0x828),this.#ys);}['attributeChangedCallback'](af,ag,ah){const xw=bY;ag!==ah&&xw(0xb46)===af&&this['o']&&this.#A();}#si(){this.#A();}async #ii(af){const xx=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af[xx(0xdd7)];if(ah[xx(0x98c)][xx(0x9ae)](xx(0x1c8))){let ak=new URLSearchParams(ag?ag[xx(0xa28)]:''),al=new URLSearchParams(ah[xx(0xa28)]),am=_i(ak,al);{let an=[xx(0xf58),'page'];void 0x0!==am[xx(0x81c)](ap=>an[xx(0x1d5)](ap))&&(xx(0xc68)!==aj&&'replace'!==aj||this['o'][xx(0x2da)](),await this.#A(),'pop'===aj&&this['o']['restoreScrollOffset']());}}}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const xy=a1;let [,,ag]=location['pathname'][xy(0xc97)]('/'),ah=await Bi[xy(0x2f6)][xy(0xd1f)](xy(0xfa2),ag),aj=$e(ah['name']),ak=new URLSearchParams(location[xy(0xa28)]),al=parseInt(ak[xy(0x10bd)]('page')||'1'),am=ak['get'](xy(0xf58))||xy(0x1de);ah['id']=ag;{let an=xy(0x1c8)+this[xy(0xdc1)]+'/'+aj;if(location[xy(0x98c)]!==an){let ap=location[xy(0xbd9)][xy(0xf0c)](location[xy(0x98c)],an);this['o']['navigate'](ap,!0x0);}}this[xy(0x451)][xy(0x4fe)]=ah['name'],this[xy(0x974)]['data']=ah,this[xy(0xc57)][xy(0xf0a)]=am,this['#activity-anchor']['href']='/profiles/'+ag+'/'+aj,this[xy(0x59d)][xy(0xbd9)]=xy(0x1c8)+ag+'/'+aj+'?category=bugs',this[xy(0xd50)][xy(0xbd9)]='/profiles/'+ag+'/'+aj+xy(0xece),this[xy(0xd48)]['href']=xy(0x1c8)+ag+'/'+aj+xy(0x67a),this[xy(0x5ec)][xy(0x42a)]=xy(0x1de)===am,this[xy(0x58d)]['toggled']=xy(0x291)===am,this['#ideas-button']['toggled']='ideas'===am,this['#questions-button']['toggled']='questions'===am;{let aq;if(xy(0x1de)===am){let av={'authorID':ag,'locale':a2[xy(0x962)],'page':al};aq=await Bi[xy(0xa1a)][xy(0x2b9)](av);}else{if(xy(0x3fa)===am){let aw={'type':xy(0x3fa),'authorID':ag,'locale':a2[xy(0x962)],'page':al};aq=await Bi[xy(0xa1a)]['searchThreads'](aw);}else{if(xy(0x291)===am){let ax={'type':xy(0xbf9),'authorID':ag,'locale':a2['locale'],'page':al};aq=await Bi['index'][xy(0xd53)](ax);}else{if(xy(0x749)===am){let ay={'type':'idea','authorID':ag,'locale':a2['locale'],'page':al};aq=await Bi[xy(0xa1a)][xy(0xd53)](ay);}else{if(xy(0x94b)===am){let az={'type':'question','authorID':ag,'locale':a2[xy(0x962)],'page':al};aq=await Bi[xy(0xa1a)][xy(0xd53)](az);}}}}}let [ar,au]=aq;this['#pager'][xy(0x689)]=au,this[xy(0x93d)][xy(0xf0a)]=al,this[xy(0xd45)][xy(0x8c2)]='';for(let aA of ar){let aB;if(xy(0x3fa)===aA[xy(0x1ce)]?xy(0x1de)===am?(aB=document[xy(0x840)]('bx-blogblock'),aB[xy(0xa0a)](xy(0x7d2),'')):aB=document[xy(0x840)]('bx-blogpreviewblock'):'idea'===aA[xy(0x1ce)]?xy(0x1de)===am?(aB=document[xy(0x840)]('bx-ideablock'),aB[xy(0xa0a)]('condensed','')):(aB=document[xy(0x840)](xy(0xd82)),aB[xy(0xa0a)](xy(0xa7f),xy(0xad4))):'bug'===aA['type']?xy(0x1de)===am?(aB=document[xy(0x840)](xy(0x2e3)),aB['setAttribute'](xy(0x7d2),'')):(aB=document[xy(0x840)](xy(0x96a)),aB[xy(0xa0a)](xy(0xa7f),xy(0xad4))):xy(0x430)===aA[xy(0x1ce)]?xy(0x1de)===am?(aB=document['createElement'](xy(0x212)),aB[xy(0xa0a)](xy(0x7d2),'')):(aB=document[xy(0x840)](xy(0xc6a)),aB[xy(0xa0a)](xy(0xa7f),xy(0xad4))):xy(0x747)===aA[xy(0x1ce)]&&(aB=document['createElement']('bx-commentblock'),aB[xy(0xa0a)](xy(0x7d2),'')),aB[xy(0x4d4)]=aA['id'],aB[xy(0x3ab)]=aA,xy(0x747)===aA[xy(0x1ce)]||!0x1===aB['localName'][xy(0x1d5)]('preview'))this['#previews']['append'](aB);else{let aC=document[xy(0x840)](xy(0xe84));aC[xy(0x775)](aB),this[xy(0xd45)][xy(0x775)](aC);}}this[xy(0xd45)][xy(0x7ac)]>0x0?this['#previews-placeholder']['hidden']=!0x0:(this[xy(0x906)]['title']=xy(0x7ae),this[xy(0x906)][xy(0x96e)]=!0x1);}{let aD=this['o'][xy(0xaad)];if(aD){let aE=null;if(aD['pathname'][xy(0x9ae)](xy(0x47d))){let aF=aD[xy(0x98c)][xy(0xc97)]('/')[0x2];aE=this[xy(0xd45)]['querySelector']('bx-bugpreviewblock[uid=\x22'+aF+'\x22]');}else{if(aD['pathname'][xy(0x9ae)](xy(0x9a4))){let aG=aD[xy(0x98c)][xy(0xc97)]('/')[0x2];aE=this['#previews']['querySelector']('bx-ideapreviewblock[uid=\x22'+aG+'\x22]');}else{if(aD[xy(0x98c)]['startsWith'](xy(0x6b5))){let aH=aD[xy(0x98c)]['split']('/')[0x2];aE=this[xy(0xd45)][xy(0x344)](xy(0x10c5)+aH+'\x22]');}}}aE&&aE[xy(0x109f)]();}}this.#sa=null,af();});}}customElements[bY(0x864)]('bx-profilepage',ua);class pa extends ns{static ['_shadowTemplate']=ie` <template> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <main id="main"> <section> <hgroup> <x-icon href="#logo-svg"></x-icon> <h2><x-message href="#web-app"></x-message> (boxy-svg.com)</h2> </hgroup> <x-card> <h3><a href="/legal/web-terms"><x-message href="#legal.terms-of-use"></x-message></a></h3> </x-card> <x-card> <h3><a href="/legal/web-privacy"><x-message href="#legal.privacy-policy"></x-message></a></h3> </x-card> </section> <hr> <section> <hgroup> <x-icon href="#linux"></x-icon> <h2><x-message href="#linux-app"></x-message> (Flathub)</h2> </hgroup> <x-card hidden> <h3><a href="/legal/linux-eula"><x-message href="#legal.eula"></x-message></a></h3> </x-card> <x-card> <h3><a href="/legal/linux-privacy"><x-message href="#legal.privacy-policy"></x-message></a></h3> </x-card> </section> <hr> <section> <hgroup> <x-icon href="#macos"></x-icon> <h2><x-message href="#macos-app"></x-message> (Mac App Store)</h2> </hgroup> <x-card hidden> <h3><a href="/legal/macos-eula"><x-message href="#legal.eula"></x-message></a></h3> </x-card> <x-card> <h3><a href="/legal/macos-privacy"><x-message href="#legal.privacy-policy"></x-message></a></h3> </x-card> </section> <hr> <section hidden> <hgroup> <x-icon href="#settings-markup"></x-icon> <h2><x-message href="#web-component"></x-message></h2> </hgroup> <x-card> <h3><a href="/legal/component-terms"><x-message href="#legal.terms-of-use"></x-message></a></h3> </x-card> <x-card> <h3><a href="/legal/component-privacy"><x-message href="#legal.privacy-policy"></x-message></a></h3> </x-card> </section> <hr hidden> <section> <hgroup> <x-icon href="#copyright"></x-icon> <h2><x-message href="#legal.other"></x-message></h2> </hgroup> <x-card> <h3><a href="/legal/dmca"><x-message href="#legal.dmca-policy"></x-message></a></h3> </x-card> </section> </main> </template>
  `;static ['_shadowStyleSheet']=se`#breadcrumb{margin-bottom:20px}hr{margin:28px 0 26px}section>hgroup{display:flex;align-items:center;margin-bottom:20px}section>hgroup>x-icon{width:24px;height:24px;min-width:24px;margin-right:8px}section>hgroup>h2{margin:0;box-sizing:border-box;line-height:1.1;font-size:22px;font-weight:700}x-card{margin:0;min-height:0}x-card+x-card{margin-top:12px}x-card>h3{margin:0;font-weight:700;font-size:16px;line-height:1.2}x-card>h3>a{display:block;color:inherit;padding:12px 12px;text-decoration:none;font-weight:inherit}x-card>h3>a:hover{text-decoration:underline}`;get['canonicalURL'](){return location['origin']+'/legal';}[bY(0x854)](){super['connectedCallback'](),this['u']();}}customElements[bY(0x864)](bY(0x4c2),pa);class ma extends ns{static [bY(0x2a2)]=ie` <template> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <x-card> <x-button id="translate-button" togglable hidden> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> <main id="main"></main> </x-card> </template>
  `;static [bY(0x78e)]=se`#breadcrumb{margin-bottom:20px}x-card{position:relative}x-card:first-of-type{margin-top:20px}x-card:last-of-type{margin-bottom:0}x-card>main{padding:20px 24px}article hgroup{margin-bottom:20px}article hgroup>h2{font-size:32px;font-weight:700;margin:0}article hgroup>p{margin-top:2px}article h4{margin-top:20px}article li{margin-top:16px}article ol>li::marker{font-weight:700}article p:first-child{margin-top:0}article>:last-child{margin-bottom:0}article table{width:100%;margin:20px 0;border-collapse:collapse}article table td,article table th{padding:3px 13px;text-align:start;min-width:105px}#footnote{margin-top:-8px;font-size:12px;opacity:.8}#translate-button{float:right;min-height:25px;margin:20px 20px 0 8px;padding:0 9px}#translate-button x-tooltip{min-width:160px}`;get['canonicalURL'](){const xz=bY;return location[xz(0x1061)]+xz(0x48c);}#Xt;#Ui;constructor(){const xA=bY;super(),this[xA(0xfa3)][xA(0x1012)]('toggle',()=>this.#Di());}async[bY(0x854)](){const xB=bY;super[xB(0x854)](),this.#Ui=await Bi[xB(0xa1a)]['getPost'](xB(0xc96)+location[xB(0x98c)]['split']('/')[0x2],a2[xB(0x962)]),a2[xB(0x1012)](xB(0x60c),this.#Xt=async()=>{const xC=xB;this.#Ui=await Bi[xC(0xa1a)][xC(0x909)](this.#Ui['id'],a2['locale']),this.#A();}),await this.#A(),this['u']();}[bY(0x7db)](){const xD=bY;a2[xD(0xee0)](xD(0x60c),this.#Xt);}async #Di(){const xE=bY;let af=this[xE(0xfa3)][xE(0x42a)]?a2[xE(0x962)]:this.#Ui[xE(0xb73)];He['includes'](af)?this.#Ui=await Bi[xE(0xa1a)][xE(0x909)](this.#Ui['id'],af):this.#Ui=await Bi[xE(0x2f6)][xE(0xd1f)]('posts',this.#Ui['id']),this.#A();}#A(){return new Promise(async af=>{const xF=a1;this[xF(0x21d)][xF(0x8c2)]=this.#Ui[xF(0xe24)],this.#Ui[xF(0x962)]===this.#Ui[xF(0xb73)]&&this.#Ui[xF(0x962)]===a2[xF(0x962)]?this['#translate-button'][xF(0x96e)]=!0x0:(this[xF(0xfa3)][xF(0x42a)]=this.#Ui[xF(0x962)]===a2[xF(0x962)],this[xF(0xfa3)][xF(0x96e)]=!0x1,this['#src-locale-message'][xF(0xbd9)]='#language.'+(this.#Ui[xF(0xb73)]||this.#Ui['locale']||'en'),this[xF(0xb15)]['href']=xF(0x627)+a2[xF(0x962)]);{let ag=this[xF(0x21d)]['querySelector'](xF(0xaef));ag&&(ag[xF(0x96e)]='en'===this.#Ui[xF(0x962)]);}af();});}}customElements['define'](bY(0x7fb),ma);let xa=['https://storage.boxy-svg.com/linux/screenshot-1.png',bY(0x8e3),bY(0x10dc),'https://storage.boxy-svg.com/linux/screenshot-4.png',bY(0xd6c)];class ga extends ns{static ['_shadowTemplate']=ie` <template> <header id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> </header> <main id="main"> <x-card> <main> <article> <h2><x-message href="#press"></x-message></h2> <x-message href="#press-hint"></x-message> </article> </main> </x-card> <hr> <x-card id="icons-card" skin="document"> <main> <article> <h2><x-message href="#icons"></x-message></h2> <x-box> <x-box vertical> <h3><x-message href="#icon.normal"></x-message></h3> <img id="normal-icon-img" src="/images/boxy-svg.svg"> </x-box> <x-box vertical> <h3><x-message href="#icon.monochromatic"></x-message></h3> <img id="monochromatic-icon-img"> </x-box> </x-box> </article> </main> </x-card> <hr> <x-card id="screenshots-card" skin="document"> <main> <article> <h2><x-message href="#screenshots"></x-message></h2> <a href="${xa[0x0]}" target="_blank"> <img src="${xa[0x0]}"> </a> <a href="${xa[0x1]}" target="_blank"> <img src="${xa[0x1]}"> </a> <a href="${xa[0x2]}" target="_blank"> <img src="${xa[0x2]}"> </a> <a href="${xa[0x3]}" target="_blank"> <img src="${xa[0x3]}"> </a> <a href="${xa[0x4]}" target="_blank"> <img src="${xa[0x4]}"> </a> </article> </main> </x-card> <hr> <x-card id="description-card" skin="document"> <main> <article> <h2><x-message href="#description"></x-message></h2> <h3>Boxy SVG</h3> <p><strong><x-message href="#scalable-vector-graphics-editor"></x-message></strong></p> <x-message href="#app-description-long"></x-message> </article> </main> </x-card> </main> </template>
  `;get[bY(0xe86)](){const xG=bY;return location[xG(0x1061)]+xG(0x631);}static ['_shadowStyleSheet']=se`article h2{margin-top:0;font-size:30px}article h3{margin-top:20px;font-weight:700;font-size:18px;line-height:1.2}#main>x-card:last-child{margin-bottom:0}header{margin-bottom:26px}header #breadcrumb{margin:0 0 20px 0}header p{font-weight:500}#icons-card x-box>x-box:last-child{margin-left:24px}#icons-card img{width:160px;height:160px;margin:0}#screenshots-card a:focus{z-index:1}#screenshots-card img{width:100%;margin:24px 0 0 0}#description-card ul:last-child{margin-bottom:0}`;constructor(){const xH=bY;super(),this[xH(0xb18)][xH(0x1012)](xH(0xff9),af=>this.#pi(af)),this[xH(0x6df)][xH(0x1012)]('click',af=>this.#pi(af)),this['#screenshots-card'][xH(0x1012)](xH(0xff9),af=>this.#po(af));}async[bY(0x854)](){const xI=bY;super[xI(0x854)](),await this.#A(),this['u']();}#pi(af){const xJ=bY;this['o']['imageViewer'][xJ(0xd44)](af[xJ(0x779)]);}#po(af){const xK=bY;xK(0xd4d)===af[xK(0x779)]['localName']&&(af[xK(0x539)](),this['o']['imageViewer'][xK(0xd44)](af[xK(0x779)]));}#A(){const xL=bY;let af=a2[xL(0xa67)](xL(0x32e))[xL(0x8c2)],ag=new Blob([xL(0x10ef)+af+xL(0xc16)],{'type':xL(0x2d5)}),ah=URL[xL(0xd9b)](ag);this[xL(0x6df)]['src']=ah;}}customElements['define']('bx-presspage',ga);class ba extends HTMLElement{static #C=ie` <template> <header id="header"> <div id="title-and-date"> <h3 id="title"> <x-message href="#version"></x-message> <span id="version"></span> <a id="version-anchor" href="/changelog?year=2023#v4.14.2"> <x-icon href="#link"></x-icon> </a> </h3> <h4 id="date"><x-message id="date-message" href="#date-abs"></x-message></h4> </div> <x-button id="translate-button" togglable> <x-icon href="#translate"></x-icon> <x-tooltip> <x-message href="#machine-translation"></x-message> <br> (<x-message id="src-locale-message"></x-message> → <x-message id="locale-message"></x-message>) </x-tooltip> </x-button> </header> <main id="main"> <ul id="changes"></ul> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      position: relative;
      padding: 16px 20px;
      box-sizing: border-box;
    }

    /**
     * Header
     */

    #header {
      display: flex;
    }

    #title-and-date {
      flex: 1;
    }

    /* Title */

    #title {
      position: relative;
      margin: 0;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.2;
    }

    #title #version-anchor {
      text-decoration: none;
      vertical-align: middle;
      margin-left: 2px;
      visibility: hidden;
    }
    #title:hover #version-anchor {
      visibility: visible;
    }

    #title #version-anchor x-icon {
      width: 18px;
      height: 18px;
      display: inline-block;
    }

    /* Date */

    #date {
      margin: 2px 0 0 0;
      opacity: 0.6;
      font-size: 13px;
    }

    /* "Translate" button */

    #translate-button {
      min-height: 25px;
      padding: 0px 9px;
      margin-left: 8px;
    }

    /**
     * Main
     */

    #main ul {
      margin-bottom: 0;
    }

    #main x-tag {
      vertical-align: middle;
      margin-bottom: 2px;
      margin-right: 4px;
      background: #ec407a;
      font-size: 13px;
    }
    #main x-tag[value="added"] {
      background: var(--blue-color);
    }
    #main x-tag[value="removed"] {
      background: var(--red-color);
    }
    #main x-tag[value="fixed"] {
      background: var(--green-color);
    }
    #main x-tag[value="improved"] {
      background: var(--purple-color);
    }

    #main p {
      display: inline;
    }
  `;get['data'](){return this.#Ui;}set[bY(0x3ab)](af){const xM=bY;this.#Ui=af,this[xM(0xc8b)]&&this.#A();}#T;#P;#mo;#Ui=null;constructor(){const xN=bY;super(),this.#P=this[xN(0x1017)]({'mode':'closed'}),this.#P['adoptedStyleSheets']=[a2[xN(0x500)],ba.#S],this.#P[xN(0x775)](document[xN(0xc3b)](ba.#C[xN(0x223)],!0x0));for(let af of this.#P[xN(0x44e)](xN(0x6e3)))this['#'+af['id']]=af;this.#P[xN(0x1012)](xN(0xff9),ag=>this.#Rs(ag)),this[xN(0xfa3)][xN(0x1012)](xN(0x807),()=>this.#Di());}[bY(0x854)](){const xO=bY;this.#T=si(this,xO(0xf55)),a2['addEventListener']('themechange',this.#mo=()=>this.#xo()),this.#A();}['disconnectedCallback'](){const xP=bY;a2[xP(0xee0)](xP(0x4ce),this.#mo);}#Rs(af){const xQ=bY;let ag=af[xQ(0x779)][xQ(0xc06)]('a');ag&&ag[xQ(0x1061)]===location['origin']&&ag[xQ(0x98c)][xQ(0x9ae)](xQ(0xa17))&&(af['preventDefault'](),this.#T[xQ(0x908)](ag[xQ(0xbd9)]));}async #Di(){const xR=bY;let af=this[xR(0xfa3)][xR(0x42a)]?a2[xR(0x962)]:this.#Ui[xR(0xb73)];!0x1===He[xR(0x1d5)](af)&&(af='en'),this.#Ui=await Bi[xR(0xa1a)]['getPost'](this.#Ui['id'],af),this.#A();}#A(){const xS=bY;let af=this.#Ui;if(null!==af){{let ag=new Date(af['createdTime'])[xS(0xc11)]();this[xS(0x1fa)][xS(0xad6)]=af[xS(0xd70)],this['#version-anchor']['setAttribute']('href','/changelog?year='+ag+'#v'+af[xS(0xd70)]);}this[xS(0x7ee)][xS(0xa0a)]('args',xS(0x1eb)+af[xS(0x10b6)]),af[xS(0x962)]===af[xS(0xb73)]&&af[xS(0x962)]===a2[xS(0x962)]?this[xS(0xfa3)][xS(0x96e)]=!0x0:(this[xS(0xfa3)][xS(0x42a)]=af[xS(0x962)]===a2['locale'],this['#translate-button'][xS(0x96e)]=!0x1,this['#src-locale-message'][xS(0xbd9)]=xS(0x627)+(af['srcLocale']||af[xS(0x962)]||'en'),this[xS(0xb15)]['href']='#language.'+a2[xS(0x962)]);{let ah='';for(let aj of af['changes']){ah+='<li>'+('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-tag\x20size=\x22small\x22\x20skin=\x22colored\x22\x20value=\x22'+aj[xS(0x1ce)]+xS(0x5b7)+aj[xS(0x1ce)]+xS(0x688))+'\x20'+Ce(aj[xS(0xe24)])+xS(0x92f);}this[xS(0x1071)]['innerHTML']=ah;}this.#xo();}}#xo(){const xT=bY;let af=a2[xT(0xfd5)];for(let [ag,ah]of Object[xT(0x2b6)](af))this[xT(0x21d)][xT(0xe90)][xT(0x687)]('--'+ag+xT(0x1087),ah);}}customElements[bY(0x864)](bY(0x4d8),ba);class fa extends HTMLElement{static #C=ie` <template> <main id="main"> <x-buttons id="year-buttons" tracking="1"></x-buttons> <x-select id="sort-select"> <x-menu> <x-menuitem value="createdTime:desc" toggled> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↓</span> </x-label> </x-menuitem> <x-menuitem value="createdTime:asc"> <x-icon href="#time"></x-icon> <x-label> <x-message href="#created-time"></x-message> <span>↑</span> </x-label> </x-menuitem> </x-menu> </x-select> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Main
     */

    #main {
      display: flex;
      padding: 8px;
    }

    /* Year buttons */

    #year-buttons {
      margin-right: 8px;
    }

    /* Sort select */

    #sort-select {
      min-width: 1px;
      margin-left: auto;
    }
  `;get[bY(0xa36)](){const xU=bY;let af=this[xU(0xdba)][xU(0xf0a)];return null===af?0x7e1:parseInt(af);}set['year'](af){const xV=bY;this[xV(0xdba)][xV(0xf0a)]=''+af;}get[bY(0x311)](){const xW=bY;return this[xW(0x101b)][xW(0xf0a)];}set['sort'](af){const xX=bY;this[xX(0x101b)][xX(0xf0a)]=af;}#P;constructor(){const xY=bY;super(),this.#P=this[xY(0x1017)]({'mode':xY(0xc5d)}),this.#P[xY(0x48f)]=[a2[xY(0x500)],fa.#S],this.#P['append'](document[xY(0xc3b)](fa.#C[xY(0x223)],!0x0));for(let af of this.#P[xY(0x44e)]('[id]'))this['#'+af['id']]=af;this[xY(0xdba)][xY(0x1012)]('toggle',()=>this.#go()),this['#sort-select'][xY(0x1012)]('change',()=>this.#Li());{let ag='';for(let ah=at();ah>=0x7e1;ah-=0x1){ag+=xY(0x9cf)+ah+'\x22\x20'+(0x7e1===ah?xY(0xad9):'')+'\x20condensed><x-label>'+ah+xY(0x683);}this[xY(0xdba)]['innerHTML']=ag;}}#go(){const xZ=bY;this[xZ(0x10bf)](new CustomEvent(xZ(0x63b),{'detail':xZ(0xa36)}));}#Li(){const y0=bY;this[y0(0x10bf)](new CustomEvent(y0(0x63b),{'detail':'sort'}));}}customElements['define']('bx-changelogfilterblock',fa);class wa extends bs{static [bY(0x1068)]=['version','minversion'];static ['v']=ie` <template> <x-box> <h3 id="heading"><x-message href="#version"></x-message></h3> <x-box id="version-inputs"> <x-numberinput id="major-version-input" value="0" min="0" size="small" condensed required> <x-stepper></x-stepper> </x-numberinput> <span class="dot">.</span> <x-numberinput id="minor-version-input" value="0" min="0" size="small" condensed required> <x-stepper></x-stepper> </x-numberinput> <span class="dot">.</span> <x-numberinput id="patch-version-input" value="0" min="0" size="small" condensed required> <x-stepper></x-stepper> </x-numberinput> </x-box> </x-box> <h4 id="subheading"><x-message href="#version.pending"></x-message></h4> <div id="changes"> <ul id="changes-list"></ul> <div id="drop-indicator" hidden> <div id="drop-indicator-circle"></div> </div> </div> <x-button id="add-button" condensed> <x-icon href="#plus"></x-icon> <x-label><x-message href="#add-change"></x-message></x-label> </x-button> </template>
  `;static ['k']=ie` <template> <x-button id="save-button"> <x-label><x-message href="#save"></x-message></x-label> </x-button> <x-button id="publish-button" toggled> <x-label><x-message href="#publish"></x-message></x-label> </x-button> </template>
  `;static #bo=ie` <template> <li> <x-box> <x-select class="type-select"> <x-menu> <x-menuitem value="added"> <x-label><x-message href="#changelog.added"></x-message></x-label> </x-menuitem> <x-menuitem value="improved"> <x-label><x-message href="#changelog.improved"></x-message></x-label> </x-menuitem> <x-menuitem value="fixed"> <x-label><x-message href="#changelog.fixed"></x-message></x-label> </x-menuitem> <x-menuitem value="removed"> <x-label><x-message href="#changelog.removed"></x-message></x-label> </x-menuitem> </x-menu> </x-select> <x-input class="description-input"></x-input> <x-button class="remove-button" condensed> <x-icon href="#trash"></x-icon> </x-button> <x-button class="reorder-button" skin="flat" tracking="0" condensed> <x-icon href="#reorder"></x-icon> </x-button> </x-box> </li> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{padding:16px 20px}h3{margin:0;font-weight:700;font-size:18px;line-height:1.2}h4{margin:2px 0 0;opacity:.6;font-size:13px}#version-inputs{margin-left:6px;font-weight:700}#version-inputs x-numberinput{min-width:52px;text-align:center}#version-inputs .dot{padding:0 2px;font-size:18px;font-weight:700}#changes{position:relative}#changes-list{margin:8px 0 0 0}#changes-list li{padding:5px 0}#changes-list x-select{min-width:120px}#changes-list x-input{max-width:none;flex:1;margin-left:6px}#changes-list .remove-button{margin-left:6px}#changes-list .reorder-button{margin-left:6px}#changes-list .reorder-button x-icon{width:20px;height:20px}#drop-indicator{position:absolute;z-index:100;top:0;width:100%;height:2px;margin-left:0;display:flex;align-items:center;color:var(--dark-accent-color);background:currentColor;box-shadow:0 0 0 1px rgba(255,255,255,.7);pointer-events:none}#drop-indicator[hidden]{display:none}#drop-indicator-circle{position:absolute;right:-6px;width:8px;height:8px;box-sizing:border-box;border:2px solid currentColor;background:#fff;border-radius:99px;box-shadow:0 0 0 1px rgba(255,255,255,.7)}#add-button{margin:15px auto 0;width:calc(100% - 19px);margin-left:19px}#add-button x-icon{width:13px;height:13px}#save-button{margin-left:auto}`;get[bY(0xd70)](){const y1=bY;return this[y1(0xfd9)](y1(0xd70))?this['getAttribute'](y1(0xd70)):'0.0.0';}set[bY(0xd70)](af){const y2=bY;this[y2(0xa0a)](y2(0xd70),af);}get[bY(0xad2)](){const y3=bY;return this[y3(0xfd9)](y3(0xf99))?this[y3(0xc51)](y3(0xf99)):y3(0x33e);}set[bY(0xad2)](af){const y4=bY;this['setAttribute'](y4(0xf99),af);}get[bY(0xb81)](){return this.#fo;}set[bY(0xb81)](af){this.#fo=af,this.#wo(),this.#vo();}#fo=[];constructor(){const y5=bY;super(),this['#changes-list'][y5(0x1012)]('pointerdown',af=>this.#yo(af)),this[y5(0x9b3)]['addEventListener'](y5(0xff9),af=>this.#ko(af)),this[y5(0x9b3)][y5(0x1012)](y5(0x63b),af=>this.#Co(af)),this[y5(0xc42)][y5(0x1012)]('click',()=>this.#So()),this[y5(0xba2)][y5(0x1012)]('changeend',af=>this.#To(af)),this['#save-button'][y5(0x1012)](y5(0xff9),()=>this.#$o()),this['#publish-button'][y5(0x1012)](y5(0xff9),()=>this.#Po());}['connectedCallback'](){super['connectedCallback'](),this.#Eo(),this.#wo(),this.#vo();}[bY(0x7db)](){const y6=bY;super[y6(0x7db)]();}['attributeChangedCallback'](af,ag,ah){const y7=bY;ag!==ah&&(y7(0xd70)===af||y7(0xf99)===af)&&(this.#Eo(),this.#vo());}[bY(0xc2a)](){const y8=bY;super[y8(0xc2a)]();}#To(af){const y9=bY;af[y9(0x779)];let ag=this[y9(0x3af)][y9(0xf0a)],ah=this[y9(0x103a)][y9(0xf0a)],aj=this[y9(0x59e)][y9(0xf0a)];this[y9(0xd70)]=ag+'.'+ah+'.'+aj,this['p']=!0x0,this.#vo();}#yo(af){const yb=bY;let ag=af[yb(0x779)][yb(0xc06)](yb(0xa88));ag&&ag[yb(0xee6)](yb(0x6fa))&&this.#Lo(af);}#ko(af){const yc=bY;let ag=af[yc(0x779)][yc(0xc06)]('x-button');ag&&ag[yc(0xee6)](yc(0x386))&&this.#Uo(af);}#Co(af){const yd=bY;let ag=af['target'][yd(0xc06)](yd(0x462));ag&&(ag[yd(0xee6)]('.type-select')?this.#Do(af):ag[yd(0xee6)](yd(0xa3c))&&this.#zo(af));}#Lo(af){const yf=bY;let ag,ah,aj=af[yf(0x779)][yf(0xc06)]('li'),ak=null,al=null;window['addEventListener'](yf(0x985),ag=am=>{const yg=yf;let an,ap=this[yg(0x355)]['elementFromPoint'](am[yg(0xcec)],am[yg(0xc4a)]),aq=ap?ap[yg(0xc06)]('li'):null;if(aq&&aq!==aj&&(ak=aq,an=aq['getBoundingClientRect'](),al=am[yg(0xc4a)]<an['y']+an[yg(0x1046)]/0x2?yg(0x844):'after',(yg(0x844)===al&&ak===aj?.[yg(0xbd8)]||yg(0xf85)===al&&ak===aj?.[yg(0x926)])&&(al=null)),al&&an){let ar=ak[yg(0xe6c)];yg(0xf85)===al&&(ar+=an[yg(0x1046)]),ar<0x1&&(ar=0x1),this[yg(0x7f5)][yg(0x96e)]=!0x1,this['#drop-indicator'][yg(0xe90)][yg(0x77e)]=ar-0x1+'px';}else this[yg(0x7f5)][yg(0x96e)]=!0x0;}),window[yf(0x1012)](yf(0xae0),ah=()=>{const yh=yf;if(window[yh(0xee0)](yh(0x985),ag),window[yh(0xee0)](yh(0xae0),ah),ak&&al){let am=ii(aj),an=ii(ak),ap=this.#fo[am];this.#fo[am]=null,this.#fo[yh(0xc36)](yh(0x844)===al?an:an+0x1,0x0,ap),this.#fo=this.#fo[yh(0xe7a)](aq=>null!==aq),this['p']=!0x0,this.#wo(),this.#vo();}this[yh(0x7f5)]['hidden']=!0x0;});}#Uo(af){const yj=bY;let ag=af[yj(0x779)][yj(0xc06)]('li'),ah=ii(ag);this.#fo=this.#fo[yj(0xe7a)]((aj,ak)=>ak!==ah),this['p']=!0x0,this.#wo(),this.#vo();}#Do(af){const yk=bY;let ag=af['target'][yk(0xc06)]('li'),ah=af[yk(0x779)],aj=ii(ag);this.#fo[aj][yk(0x1ce)]=ah['value'],this['p']=!0x0,this.#vo();}#zo(af){const yl=bY;let ag=af[yl(0x779)]['closest']('li'),ah=af[yl(0x779)],aj=ii(ag);this.#fo[aj][yl(0xe24)]=ah['value'],this['p']=!0x0,this.#vo();}#So(){const ym=bY;this.#fo['push']({'type':ym(0xf38),'description':''}),this['p']=!0x0,this.#wo(),this.#vo();}#$o(){const yn=bY;this[yn(0x10bf)](new CustomEvent(yn(0x9af)));}#Po(){const yp=bY;this[yp(0x10bf)](new CustomEvent(yp(0x10a4)));}#Eo(){const yq=bY;let [af,ag,ah]=this['version'][yq(0xc97)]('.')[yq(0x8fb)](am=>parseInt(am)),[aj,ak,al]=this[yq(0xad2)][yq(0xc97)]('.')['map'](am=>parseInt(am));this[yq(0x3af)][yq(0xf0a)]=af,this[yq(0x3af)][yq(0x339)]=aj,this[yq(0x103a)][yq(0xf0a)]=ag,this[yq(0x103a)][yq(0x339)]=af===aj?ak:0x0,this['#minor-version-input']['value']<this[yq(0x103a)]['min']&&(this[yq(0x103a)][yq(0xf0a)]=this[yq(0x103a)][yq(0x339)]),this[yq(0x59e)][yq(0xf0a)]=ah,this[yq(0x59e)][yq(0x339)]=af===aj&&ag===ak?al:0x0,this[yq(0x59e)]['value']<this['#patch-version-input']['min']&&(this[yq(0x59e)][yq(0xf0a)]=this[yq(0x59e)][yq(0x339)]);}#wo(){const yr=bY;this[yr(0x9b3)][yr(0x8c2)]='';for(let af of this.#fo){let ag=document[yr(0xc3b)](wa.#bo[yr(0x223)],!0x0);ag[yr(0x344)](yr(0x4c0))[yr(0xf0a)]=af[yr(0x1ce)],ag['querySelector'](yr(0x3fc))[yr(0xf0a)]=af[yr(0xe24)],this[yr(0x9b3)][yr(0x775)](ag);}}#vo(){const yu=bY;this['#save-button'][yu(0x6a2)]=!0x1===this['p'],0x0===this.#fo[yu(0x6dc)]||this.#fo[yu(0x81c)](af=>0x0===af[yu(0xe24)][yu(0x963)]()[yu(0x6dc)])?this[yu(0x231)][yu(0x6a2)]=!0x0:this[yu(0x231)]['disabled']=!0x1;}}customElements[bY(0x864)]('bx-changelogform',wa);class va extends ns{static [bY(0x2a2)]=ie` <template> <div id="header"> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <x-box id="page-buttons"> <x-button id="print-button" condensed hidden> <x-icon href="#print"></x-icon> <x-tooltip><x-message href="#print"></x-message></x-tooltip> </x-button> <x-button id="watch-button" condensed hidden> <x-icon href="#watch"></x-icon> <x-tooltip><x-message href="#watch"></x-message></x-tooltip> </x-button> </x-box> </div> <bx-changelogfilterblock id="filter-block"></bx-changelogfilterblock> <x-card id="pending-version-card" hidden> <bx-changelogform id="changelog-form"></bx-changelogform> </x-card> <main id="main"> <article> <div id="items"></div> <bx-placeholderblock id="placeholder" hidden></bx-placeholderblock> </article> </main> </template>
  `;static ['_shadowStyleSheet']=se`#header{display:flex;align-items:start;width:100%}#page-buttons{margin-left:auto}#page-buttons x-button{margin-left:8px}x-card{margin:14px 0}x-card:last-child{margin-bottom:0}#placeholder{margin:12px 0}`;get[bY(0xe86)](){const yv=bY;let af=new URLSearchParams(location['search']),ag=!0x1===af[yv(0xe3e)](yv(0xa36))?at():af['get'](yv(0xa36));return location[yv(0x1061)]+yv(0x107d)+ag;}#Xt;#at;#ys;constructor(){const yw=bY;super(),this[yw(0x589)][yw(0x1012)](yw(0xff9),()=>this.#Mo()),this[yw(0x9a5)][yw(0x1012)](yw(0xff9),()=>this.#Js()),this[yw(0x3d9)][yw(0x1012)](yw(0x63b),af=>this.#Cs(af)),this[yw(0x2c7)][yw(0x1012)]('save',()=>this.#Ao()),this[yw(0x2c7)][yw(0x1012)](yw(0x10a4),()=>this.#Bo());}async['connectedCallback'](){const yx=bY;super['connectedCallback'](),a2[yx(0x1012)](yx(0x60c),this.#Xt=()=>this.#si()),Bi[yx(0xf5c)][yx(0x1012)](yx(0x284),this.#at=()=>this.#Ro()),this['o'][yx(0x1012)](yx(0x828),this.#ys=af=>{this.#ii(af);}),this.#Io(),this.#Es(),await this.#Fo(),this['u']();{let af=new URLSearchParams(location[yx(0xa28)]);if(yx(0x10c9)===af[yx(0x10bd)](yx(0x5d3))){let ag=af[yx(0xe3e)](yx(0xa36))?parseInt(af[yx(0x10bd)](yx(0xa36))):at();this.#No(ag);}}}['disconnectedCallback'](){const yy=bY;a2[yy(0xee0)](yy(0x60c),this.#Xt),Bi[yy(0xf5c)][yy(0xee0)](yy(0x284),this.#at),this['o'][yy(0xee0)](yy(0x828),this.#ys);}#No(af,ag=!0x0){return new Promise(async ah=>{const yz=a1;let [aj,ak]=await Bi[yz(0xa1a)][yz(0x2b9)]({'query':'','type':yz(0x5b0),'locale':'pl','createdYear':af,'sort':yz(0xe41),'page':0x1,'perPage':0xfa});aj=aj[yz(0xe7a)](ap=>yz(0xa47)!==ap['id']);let al='';for(let ap=0x0;ap<aj[yz(0x6dc)];ap+=0x1){let aq=aj[ap],ar=aj[ap-0x1],{version:au,createdTime:av,changes:aw}=aq,ax='',ay=new Date(av)['toISOString']()[yz(0xc97)]('T')[0x0],az=ar?new Date(ar['createdTime'])[yz(0x9f3)]()[yz(0xc97)]('T')[0x0]:af+'-01-01';for(let aA of aw){let aB;yz(0xf38)===aA['type']?aB=yz(0x595):yz(0x297)===aA[yz(0x1ce)]?aB='Poprawiono':yz(0xb77)===aA[yz(0x1ce)]?aB='Naprawiono':yz(0x889)===aA[yz(0x1ce)]&&(aB=yz(0x4eb)),ax+='<li><strong>['+aB+yz(0x577)+Ce(aA['description'])+yz(0x92f);}al+=yz(0xf3d)+au+yz(0xa40)+az+yz(0xb33)+ay+yz(0xd17)+ax+yz(0x692);}let am=yz(0x742)+af+yz(0xa44)+af+yz(0x443)+al+yz(0x3e1),an=0x0;if(ag&&(an=await this['o']['openMessageDialog']({'title':yz(0x507),'detail':'\x22Plan\x20i\x20Harmonogram\x20Prac\x20Dla\x20Projektu\x20Badawczo-Rozwojowego\x20Boxy\x20SVG\x20(KPWI\x201/'+af+yz(0x506),'buttons':[yz(0x8af),yz(0x594)]})),0x0===an){let aC=window[yz(0x9ff)](yz(0x8f8)+af,yz(0xe38));aC[yz(0x78a)][yz(0xdd2)](am),aC[yz(0x5d3)]();}ah();});}#si(){this.#Fo();}#Ro(){this.#Io();}async #ii(af){const yA=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af['detail'];if(yA(0xa17)===ah[yA(0x98c)]){let ak=new URLSearchParams(ag?ag[yA(0xa28)]:''),al=new URLSearchParams(ah[yA(0xa28)]),am=_i(ak,al);{let an=[yA(0xa36),'sort'];void 0x0!==am[yA(0x81c)](ap=>an[yA(0x1d5)](ap))&&(this.#Es(),await this.#Fo(),yA(0x3ff)===aj&&this['o']['restoreScrollOffset']());}}}#Mo(){const yB=bY;let af=new URLSearchParams(location['search']),ag=af[yB(0xe3e)]('year')?parseInt(af[yB(0x10bd)](yB(0xa36))):at();this.#No(ag,!0x1);}async #Js(){const yC=bY;let af=!0x0===this['#watch-button'][yC(0x42a)]?yC(0xf72):yC(0xb4e),ag=this['#watch-button'][yC(0x42a)];this['#watch-button']['disabled']=!0x0,this[yC(0x9a5)][yC(0x42a)]=yC(0xb4e)===af;let ah=null;try{await Bi[yC(0xfb8)]['postMessage'](yC(0xb4e)===af?yC(0xca7):'unwatchPost','changelog-x.y.z');}catch(aj){ah=aj;}ah&&(await this['o'][yC(0xafc)]({'title':{'href':yC(0x836)},'detail':bi(ah),'buttons':[{'href':'#close'}]}),this[yC(0x9a5)][yC(0x42a)]=ag),this[yC(0x9a5)]['disabled']=!0x1;}#Cs(af){const yD=bY;let ag=new URL(location[yD(0xbd9)]),ah=new URLSearchParams(location[yD(0xa28)]);this[yD(0x3d9)][yD(0xa36)]===at()?ah[yD(0x658)](yD(0xa36)):ah['set']('year',this[yD(0x3d9)]['year']),'createdTime:desc'===this[yD(0x3d9)][yD(0x311)]?ah[yD(0x658)](yD(0x311)):'createdTime:asc'===this[yD(0x3d9)][yD(0x311)]&&ah['set'](yD(0x311),yD(0xa13)),ag[yD(0xa28)]=ah[yD(0xd23)](),this['o'][yD(0x908)](ag[yD(0xbd9)]);}async #Ao(){const yE=bY;this[yE(0x2c7)][yE(0x92d)]=!0x0;let {version:af,changes:ag}=this['#changelog-form'],ah=await Bi[yE(0x2f6)]['getDocument'](yE(0xb29),yE(0xa47));ah[yE(0xd70)]=af,ah[yE(0xb81)]=ag,await Bi['functions']['postMessage']('editPost',{'id':yE(0xa47),'version':af,'changes':ag}),this[yE(0x2c7)][yE(0x92d)]=!0x1;}async #Bo(){const yF=bY;this[yF(0x2c7)][yF(0x92d)]=!0x0;let {version:af,changes:ag}=this[yF(0x2c7)];await Bi[yF(0xfb8)][yF(0x6ba)](yF(0xa75),{'type':yF(0x5b0),'version':af,'changes':ag}),await Bi[yF(0xfb8)]['postMessage'](yF(0xf7f),{'id':'changelog-x.y.z','version':'x.y.z','changes':[]}),await Bi[yF(0xa1a)][yF(0x691)](yF(0x4e3)+af,a2['locale']),this[yF(0x2c7)][yF(0x92d)]=!0x1,this.#Fo();}async #Io(){const yG=bY;if(null!==Bi['auth'][yG(0xdc1)]&&!0x0===Bi[yG(0xf5c)][yG(0x1009)]){let af=await Bi[yG(0xa1a)][yG(0x909)](yG(0xa47),'en');this['#print-button'][yG(0x96e)]=!Bi[yG(0xf5c)][yG(0xa55)],this[yG(0x9a5)]['hidden']=!0x1,this['#watch-button'][yG(0x42a)]=af[yG(0xeb5)]['includes'](Bi['auth'][yG(0xdc1)]);}else this[yG(0x589)][yG(0x96e)]=!0x0,this[yG(0x9a5)]['hidden']=!0x0;}#Es(){const yH=bY;let af=new URLSearchParams(location['search']),ag=af[yH(0x10bd)](yH(0xa36)),ah=af[yH(0x10bd)](yH(0x311));this[yH(0x3d9)][yH(0xa36)]=null===ag?at():parseInt(ag),this['#filter-block'][yH(0x311)]=yH(0xa13)===ah?yH(0xe41):yH(0xebd);}#Fo(){return new Promise(async af=>{const yI=a1;let ag=this[yI(0x3d9)][yI(0xa36)],ah=this[yI(0x3d9)][yI(0x311)],[aj,ak]=await Bi[yI(0xa1a)][yI(0x2b9)]({'query':'','type':yI(0x5b0),'locale':a2[yI(0x962)],'createdYear':ag,'sort':ah,'page':0x1,'perPage':0xfa}),al=aj['filter'](am=>yI(0xa47)!==am['id']);if(0x0===al[yI(0x6dc)])this[yI(0xae5)][yI(0x96e)]=!0x1,this[yI(0xae5)]['description']=yI(0x39f),this[yI(0xa35)][yI(0x8c2)]='';else{this[yI(0xae5)][yI(0x96e)]=!0x0,this[yI(0xa35)][yI(0x8c2)]='';for(let am of al){let an=document['createElement']('x-card'),ap=document[yI(0x840)]('bx-changelogblock');an[yI(0xa0a)]('id','v'+am['version']),ap['id']=am['id'],ap[yI(0x3ab)]=am,an[yI(0x775)](ap),this[yI(0xa35)][yI(0x775)](an);}}if(await Bi[yI(0xf5c)][yI(0xfea)],ag===at()&&Bi[yI(0xf5c)][yI(0xa55)]){let [[aq]]=await Bi[yI(0xa1a)][yI(0x2b9)]({'query':'','type':yI(0x5b0),'locale':'en','sort':yI(0xebd),'page':0x1,'perPage':0x1}),ar=await Bi[yI(0xa1a)][yI(0x909)](yI(0xa47),'en'),[au,av,aw]=aq[yI(0xd70)][yI(0xc97)]('.')[yI(0x8fb)](ax=>parseInt(ax));this[yI(0x6b2)][yI(0x96e)]=!0x1,this[yI(0x2c7)][yI(0xc2a)](),yI(0x8f3)===ar[yI(0xd70)]?(this[yI(0x2c7)][yI(0xd70)]=au+'.'+av+'.'+(aw+0x1),this[yI(0x2c7)][yI(0xad2)]=au+'.'+av+'.'+(aw+0x1)):(this[yI(0x2c7)][yI(0xd70)]=ar[yI(0xd70)],this['#changelog-form'][yI(0xad2)]=au+'.'+av+'.'+(aw+0x1)),this['#changelog-form'][yI(0xb81)]=ar[yI(0xb81)];}else this['#pending-version-card']['hidden']=!0x0;af();});}}customElements[bY(0x864)](bY(0x933),va);class ya{#Oo=0x0;#_o={};#qo={};#jo;constructor(af){const yJ=bY;this.#jo=af,window[yJ(0x1012)](yJ(0x65b),ag=>this.#Vo(ag));}['postMessage'](af,ag,ah){const yK=bY;void 0x0===ag&&(ag=null);let aj={'channel':yK(0x71b),'id':this.#Oo++,'name':af,'arg':ag};ah&&(this.#qo[aj['id']]=ah),this.#jo[yK(0xc28)]['postMessage'](aj);}['addMessageListener'](af,ag){const yL=bY;this.#_o[af]||(this.#_o[af]=[]),this.#_o[af][yL(0xc68)](ag);}['removeMessageListener'](af,ag){const yM=bY;this.#_o[af]&&(this.#_o[af]=this.#_o[af][yM(0xe7a)](ah=>ah!==ag));}#Vo(af){const yN=bY;if(af['source']===this.#jo[yN(0xc28)]){let ag=af[yN(0x3ab)];yN(0x71b)===ag['channel']?this.#_o[ag[yN(0xce8)]]&&this.#_o[ag[yN(0xce8)]][yN(0xdde)](ah=>{const yO=yN;ah(ag[yO(0x4fe)],aj=>{const yP=yO;let ak={'channel':'response','id':ag['id'],'name':ag[yP(0xce8)],'arg':aj};this.#jo[yP(0xc28)][yP(0x6ba)](ak);});}):yN(0xb51)===ag[yN(0x303)]&&this.#qo[ag['id']]&&(this.#qo[ag['id']](ag[yN(0x4fe)]),delete this.#qo[ag['id']]);}}}class ka extends HTMLElement{static ['observedAttributes']=[bY(0xce8),bY(0x962),bY(0x790),bY(0xc80)];static #C=ie` <template> <iframe src="/embedded-web-app.html" id="iframe" sandbox="allow-scripts allow-modals allow-same-origin" allow="clipboard-read; clipboard-write; local-fonts; ch-prefers-color-scheme" loading="lazy" hidden> </iframe> </template>
  `;static #S=se`
    :host {
      display: block;
      width: 100%;
      min-height: 600px;
      box-sizing: border-box;
      border: 1px solid #999999;
      contain: strict;
    }
    :host(:focus) {
      outline: none;
    }

    :host([theme="fluent"])         { border-color: #999999; }
    :host([theme="fluent-dark"])    { border-color: #666666; }
    :host([theme="cupertino"])      { border-color: #b0b0b0; }
    :host([theme="cupertino-dark"]) { border-color: #747474; }
    :host([theme="adwaita"])        { border-color: #d1d1d1; }
    :host([theme="adwaita-dark"])   { border-color: #525252; }

    #iframe {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      min-height: inherit;
      margin: 0;
      padding: 0;
      border: none;
      user-select: none;
      contain: strict;
      -webkit-user-select: none;
    }
    #iframe[hidden] {
      visibility: hidden;
    }
  `;get[bY(0xce8)](){const yQ=bY;return this[yQ(0xc51)](yQ(0xce8));}set[bY(0xce8)](af){const yR=bY;null===af?this[yR(0x88e)](yR(0xce8)):this['setAttribute'](yR(0xce8),af);}get[bY(0x962)](){const yS=bY;return this[yS(0xfd9)](yS(0x962))?this[yS(0xc51)]('locale'):'en';}set[bY(0x962)](af){const yT=bY;this[yT(0xa0a)]('locale',af);}get[bY(0x790)](){const yU=bY;return this[yU(0xfd9)]('theme')?this[yU(0xc51)](yU(0x790)):yU(0x29b);}set['theme'](af){const yV=bY;this['setAttribute'](yV(0x790),af);}get[bY(0xc80)](){const yW=bY;return this[yW(0xfd9)](yW(0xc80))?this[yW(0xc51)](yW(0xc80)):yW(0xddc);}set[bY(0xc80)](af){const yX=bY;this[yX(0xa0a)](yX(0xc80),af);}get#Go(){return new Promise(af=>{const yY=a1;null===this.#vi?af():this.#vi[yY(0xc68)](af);});}get#fa(){return null===this.#vi;}#P;#Ho;#vi=[];constructor(){const yZ=bY;super(),this.#P=this[yZ(0x1017)]({'mode':'closed'}),this.#P['adoptedStyleSheets']=[ka.#S],this.#P[yZ(0x775)](document[yZ(0xc3b)](ka.#C[yZ(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](yZ(0x6e3)))this['#'+af['id']]=af;this[yZ(0xa0a)]('tabindex','0'),this.#Ho=new ya(this['#iframe']),this.#Ho[yZ(0x483)](yZ(0x593),(ag,ah)=>{let {name:aj,locale:ak,theme:al,accent:am}=this;ah({'name':aj,'locale':ak,'theme':al,'accent':am});}),this.#Ho['addMessageListener'](yZ(0x878),()=>{const z0=yZ;if(null!==this.#vi){for(let ag of this.#vi)ag();this.#vi=null;}this[z0(0x614)][z0(0x96e)]=!0x1;}),this.#Ho['addMessageListener']('command',(ag,ah)=>{const z1=yZ;let aj=new CustomEvent(z1(0x798),{'detail':ag,'cancelable':!0x0});this[z1(0x10bf)](aj),ah(aj[z1(0x275)]);});}[bY(0x83b)](af,ag,ah){const z2=bY;ag!==ah&&!0x1!==this.#fa&&(z2(0xce8)===af?this.#Ho['postMessage']('setName',this[z2(0xce8)]):z2(0x962)===af?this.#Ho[z2(0x6ba)]('setLocale',this[z2(0x962)]):'theme'===af?this.#Ho[z2(0x6ba)](z2(0x34b),this[z2(0x790)]):'accent'===af&&this.#Ho[z2(0x6ba)]('setAccent',this[z2(0xc80)]));}[bY(0x591)](){return new Promise(async af=>{const z3=a1;await this.#Go,this.#Ho['postMessage'](z3(0x591),null,ag=>{af(ag);});});}[bY(0x1e6)](af){return new Promise(async ag=>{const z4=a1;await this.#Go,this.#Ho[z4(0x6ba)]('setSVG',af,()=>{ag();});});}}customElements['define']('boxy-svg',ka);class Ca extends HTMLElement{static #C=ie` <template> <main id="main"> <div id="row-1" class="row"> <section id="name-section"> <h4><x-message href="#name" autocapitalize></x-message></h4> <x-input id="name-input"> <x-label>Boxy SVG</x-label> </x-input> </section> <section id="locale-section"> <h4><x-message href="#language" autocapitalize></x-message></h4> <x-select id="locale-select"> <x-menu id="locale-select-menu"></x-menu> </x-select> </section> </div> <div id="row-2" class="row"> <section id="theme-section"> <h4><x-message href="#theme" autocapitalize></x-message></h4> <x-select id="theme-select"> <x-menu> <x-menuitem value="fluent"> <x-icon href="#windows"></x-icon> <x-label>Fluent</x-label> </x-menuitem> <x-menuitem value="fluent-dark"> <x-icon href="#windows"></x-icon> <x-label>Fluent Dark</x-label> </x-menuitem> <hr> <x-menuitem value="cupertino"> <x-icon href="#macos"></x-icon> <x-label>Cupertino</x-label> </x-menuitem> <x-menuitem value="cupertino-dark"> <x-icon href="#macos"></x-icon> <x-label>Cupertino Dark</x-label> </x-menuitem> <hr> <x-menuitem value="adwaita"> <x-icon href="#gnome"></x-icon> <x-label>Adwaita</x-label> </x-menuitem> <x-menuitem value="adwaita-dark"> <x-icon href="#gnome"></x-icon> <x-label>Adwaita Dark</x-label> </x-menuitem> </x-menu> </x-select> </section> <section id="accent-color-section"> <h4><x-message href="#accent-color" autocapitalize></x-message></h4> <x-box> <x-select id="accent-preset-select"> <x-menu id="accent-preset-menu"></x-menu> </x-select> <x-colorselect id="accent-color-select" spaces="srgb"></x-colorselect> </x-box> </section> </div> </main> </template>
  `;static #S=se`
    :host {
      display: block;
    }

    .row {
      display: flex;
    }
    .row + .row {
      margin-top: 8px;
    }

    /* Name */

    #name-input {
      min-width: 160px;
    }

    /* Locale */

    #locale-section {
      margin-left: 16px;
    }

    #locale-select {
      min-width: 130px;
    }

    /* Theme */

    #theme-select {
      min-width: 160px;
    }

    /* Accent color */

    #accent-color-section {
      margin-left: 16px;
    }

    #accent-color-select {
      margin-left: 4px;
    }

    #accent-preset-select {
      min-width: 130px;
    }
  `;get[bY(0xce8)](){return this.#Wo;}get[bY(0x962)](){return this.#Ko;}get[bY(0x790)](){return this.#Zo;}get[bY(0xcfd)](){return this.#Yo;}#Wo=null;#Ko='en';#Zo=bY(0x29b);#Yo=bY(0xddc);#Xo={};#T;#P;constructor(){const z5=bY;super(),this.#P=this['attachShadow']({'mode':'closed'}),this.#P[z5(0x48f)]=[a2[z5(0x500)],Ca.#S],this.#P[z5(0x775)](document[z5(0xc3b)](Ca.#C[z5(0x223)],!0x0));for(let af of this.#P[z5(0x44e)](z5(0x6e3)))this['#'+af['id']]=af;this['#name-input']['addEventListener'](z5(0x84e),()=>this.#_e()),this[z5(0x83c)][z5(0x1012)](z5(0x63b),()=>this.#_()),this[z5(0x1f1)][z5(0x1012)](z5(0x63b),()=>this.#q()),this['#accent-preset-select'][z5(0x1012)]('change',()=>this.#Jo()),this[z5(0x839)]['addEventListener']('change',()=>this.#Qo());{let ag='';for(let ah of He)ag+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-menuitem\x20value=\x22'+ah+z5(0xe36)+Pe(ah)+z5(0x73e);this[z5(0x1ff)][z5(0x8c2)]=ag;}{let aj='';for(let [ak,al]of Object[z5(0x2b6)](a2[z5(0xfd5)]))aj+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-menuitem\x20value=\x22'+ak+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-swatch\x20value=\x22'+al+z5(0x5a4)+ak+z5(0x470);aj+=z5(0x400),this[z5(0x1e8)]['innerHTML']=aj;}}[bY(0x854)](){this.#T=si(this,'#app'),this.#A();}#_e(){const z6=bY;let af=this[z6(0xc8f)][z6(0xf0a)];this.#Wo=''===af?null:af,this[z6(0x10bf)](new CustomEvent('change',{'detail':z6(0xce8)})),this.#A();}#_(){const z7=bY;this.#Ko=this['#locale-select'][z7(0xf0a)],this[z7(0x10bf)](new CustomEvent(z7(0x63b),{'detail':'locale'})),this.#A();}#q(){const z8=bY;this.#Zo=this[z8(0x1f1)][z8(0xf0a)],this[z8(0x10bf)](new CustomEvent('change',{'detail':z8(0x790)})),this.#A();}#Jo(){const z9=bY;let af=this[z9(0x38b)][z9(0xf0a)];this.#Yo=z9(0x58a)===af?a2[z9(0xfd5)][a2[z9(0xcfd)]]:af,this['dispatchEvent'](new CustomEvent(z9(0x63b),{'detail':z9(0xcfd)})),this.#A();}#Qo(){const zb=bY;this.#Yo=this['#accent-color-select'][zb(0xf0a)],this[zb(0x10bf)](new CustomEvent(zb(0x63b),{'detail':zb(0xcfd)})),this.#A();}#en(af){return new Promise(async ag=>{const zc=a1;if(!this.#Xo[af]){let ah={},aj=await(await fetch('/libs/xel/themes/'+this.#Zo+zc(0x3f3)))['text'](),ak=new CSSStyleSheet();ak[zc(0xe94)](aj);for(let al of ak[zc(0xe07)])if(0x1===al[zc(0x1ce)]&&zc(0x10ed)===al[zc(0x7b0)]){let am=al['style'][zc(0xfb1)](zc(0xc39));if(''!==am){let an=am['split'](',')[zc(0x8fb)](ap=>ap[zc(0x963)]())[zc(0x8fb)](ap=>ap[zc(0xc97)]('\x20'));ah=Object['fromEntries'](an);break;}}this.#Xo[af]=ah;}ag(this.#Xo[af]);});}async #A(){const zd=bY;this[zd(0xc8f)][zd(0xf0a)]=null===this.#Wo?'':this.#Wo,this[zd(0x83c)][zd(0xf0a)]=He[zd(0x1d5)](this.#Ko)?this.#Ko:'en',this[zd(0x1f1)][zd(0xf0a)]=this.#Zo;{let af=await this.#en(this.#Zo);if(af[this.#Yo]){this[zd(0x38b)][zd(0xf0a)]=this.#Yo,this[zd(0x839)][zd(0xf0a)]=af[this.#Yo];for(let ag of this[zd(0x1e8)][zd(0x573)]){let ah=ag[zd(0x344)](zd(0x1043));ah&&(ah['value']=af[ag[zd(0xf0a)]]);}}else this[zd(0x38b)][zd(0xf0a)]=zd(0x58a),this[zd(0x839)][zd(0xf0a)]=this.#Yo;for(let aj of[...this[zd(0x839)][zd(0x44e)](zd(0x1043))]){let ak=aj[zd(0x659)];aj[zd(0xf0a)]=a2[zd(0xfd5)][ak[zd(0xf0a)]];}}}}customElements['define']('bx-embedsettings',Ca);class Sa extends ns{static ['_shadowTemplate']=ie` <template> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <main id="main"> <article> <x-card id="intro-card"> <main> <h2>Embed Boxy SVG</h2> <p>With the <strong>Boxy SVG Embedded</strong> component you can add a full blown vector graphics editor to your web site or web app with just several lines of code.</p> <p>This component is currently in beta stage and to use it in production you must get explicit permission from us (please use the <a href="/embed?dialog=contact">contact form</a>). Stable version is going to be released in 2024 with per-domain pricing starting from <strong>999 USD / year</strong>.</p> </main> </x-card> <x-card id="setup-card"> <main> <h2>Setup</h2> <section id="settings-section"> <h4>Settings</h4> <bx-embedsettings id="settings"></bx-embedsettings> </section> <hr> <section id="code-section"> <h4>Code</h4> <pre><code id="code"></code></pre> </section> <hr> <section id="preview-section"> <h4>Preview</h4> <boxy-svg id="editor"></boxy-svg> </section> </main> </x-card> <x-card id="api-card"> <main> <h2>API</h2> <h3>Element <code>&lt;boxy-svg&gt;</code></h3> <h4>Properties</h4> <ul> <li> <p> <code> <strong>name</strong><span class="type">: string</span> </code> </p> <p>App name shown in the top left corner and by the "About" dialog.</p> <p>Default: <code>"Boxy SVG"</code>.</p> </li> <li> <p> <code> <strong>locale</strong><span class="type">: "de" | "en" | "es" | "pl" </span></code> </p> <p>Language to be used by the app UI.</p> <p>Default: <code>"en"</code> (English).</p> </li> <li> <p> <code> <strong>theme</strong><span class="type">: "fluent" | "fluent-dark" | "cupertino" | "cupertino-dark" | "adwaita" | "adwaita-dark" </span></code> </p> <p>Theme to be used by the app UI.</p> <p>Default: <code>"fluent"</code> (Microsoft Fluent Design System).</p> </li> <li> <p> <code> <strong>accent</strong><span class="type">: "blue" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "graphite" | string </span></code> </p> <p>Accent color to be used by the app UI. You can use either one of the preset names or a hex color code such as <code>"#bada55"</code>.</p> <p>Default: <code>"blue"</code>.</p> </li> </ul> <hr> <h4>Methods</h4> <ul> <li> <p><code><strong>getSVG()</strong><span class="type">: Promise&lt;string&gt;</span></code></p> <p>Get the edited SVG document, in form of XML-serialized string.</p> </li> <li> <p><code><strong>setSVG(svg</strong><span class="type">: string</span><strong>)</strong><span class="type">: Promise</span></code></p> <p>Set the edited SVG document.</p> </li> </ul> <hr> <h4>Events</h4> <ul> <li> <code><strong>command</strong></code> <p>Fired when user triggers a command by clicking a menu item or by pressing a keyboard shortcut.</p> <p>Your can read the ID of the command that was triggered from <code>event.detail.id</code> and prevent the default action by calling <code>event.preventDefault()</code>.</p> </li> </ul> </main> </x-card> </article> </main> </template>
  `;static [bY(0x78e)]=se`article h2{font-size:30px;margin:0 0 20px 0}article h3{margin-top:16px}article h4{margin-top:16px;margin-bottom:6px}article hr{margin:20px 0}x-card:first-child{margin-top:16px}x-card:last-child{margin-bottom:0}#editor{margin-top:14px}code span.type{opacity:.5}#api-card h4{margin-top:20px}#api-card ul+h4{margin-top:30px}#api-card ul li{margin-top:24px}#api-card ul li:first-child{margin-top:20px}#api-card ul li p{margin-top:4px}`;get[bY(0xe86)](){const zf=bY;return location[zf(0x1061)]+zf(0x66f);}constructor(){const zg=bY;super(),this['#settings'][zg(0x1012)](zg(0x63b),af=>this.#tn(af));}['connectedCallback'](){const zh=bY;super[zh(0x854)](),this.#A(),this['u']();}#tn(af){const zj=bY;let ag=af[zj(0xdd7)];this.#in(),zj(0xcfd)===ag?this[zj(0xb7a)][zj(0xc80)]=this[zj(0xf1b)][ag]:this['#editor'][ag]=this[zj(0xf1b)][ag];}#A(){this.#in();}#in(){const zk=bY;let {name:af,locale:ag,theme:ah,accentColor:aj}=this['#settings'],ak=zk(0xbb1)+(null===af?'':zk(0x1016)+af+'\x22')+('en'===ag?'':zk(0xb61)+ag+'\x22')+(zk(0x29b)===ah?'':'\x20theme=\x22'+ah+'\x22')+(zk(0xddc)===aj?'':zk(0xd27)+aj+'\x22')+zk(0xf15);this[zk(0x51e)][zk(0x8c2)]=ds((al=>{const zl=zk;for(let am of al[zl(0xc97)](/[\r\n]+/))if(am[zl(0x963)]()[zl(0x6dc)]){/^(\s+)/[zl(0xc04)](am)&&(al=al[zl(0xf0c)](new RegExp('^'+RegExp['$1'],'gm'),''));break;}return al['trim']();})(ak),'html');}}customElements[bY(0x864)](bY(0x743),Sa);class Ta extends HTMLElement{static #C=ie` <template> <main id="main"> <x-input id="query-input" type="search"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search" autocapitalize ellipsis></x-message></x-label> </x-input> <x-select id="category-select"> <x-menu> <x-menuitem value="all" toggled> <x-icon href="#logo-svg"></x-icon> <x-label><x-message href="#search.all" autocapitalize></x-message></x-label> </x-menuitem> <hr> <x-menuitem value="blog"> <x-icon href="#blog"></x-icon> <x-label><x-message href="#blog" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="ideas"> <x-icon href="#ideas"></x-icon> <x-label><x-message href="#ideas" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="bugs"> <x-icon href="#bugs"></x-icon> <x-label><x-message href="#bugs" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="questions"> <x-icon href="#questions"></x-icon> <x-label><x-message href="#questions" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
    }
    :host([hidden]) {
      display: none;
    }

    /**
     * Main
     */

    #main {
      display: flex;
      padding: 8px;
    }

    /* Query input */

    #query-input {
      flex: 1;
      min-width: 60px;
      max-width: none;
    }

    /* Category select */

    #category-select {
      width: 140px;
      margin-left: 8px;
    }
  `;get[bY(0xc77)](){const zm=bY;return this['#query-input'][zm(0xf0a)];}set[bY(0xc77)](af){const zn=bY;this[zn(0xa9c)][zn(0xf0a)]=af;}get['category'](){const zo=bY;return this['#category-select'][zo(0xf0a)];}set[bY(0xf58)](af){const zp=bY;this[zp(0x3c6)]['value']=af;}#P;constructor(){const zq=bY;super(),this.#P=this[zq(0x1017)]({'mode':zq(0xc5d)}),this.#P[zq(0x48f)]=[a2[zq(0x500)],Ta.#S],this.#P[zq(0x775)](document[zq(0xc3b)](Ta.#C[zq(0x223)],!0x0));for(let af of this.#P[zq(0x44e)]('[id]'))this['#'+af['id']]=af;this['#query-input']['addEventListener'](zq(0x63b),()=>this.#sn()),this[zq(0x3c6)][zq(0x1012)](zq(0x63b),()=>this.#an());}#sn(){const zr=bY;this['dispatchEvent'](new CustomEvent(zr(0x63b),{'detail':zr(0xc77)}));}#an(){const zu=bY;this[zu(0x10bf)](new CustomEvent(zu(0x63b),{'detail':zu(0xf58)}));}}customElements[bY(0x864)](bY(0x109a),Ta);class $a extends ns{static [bY(0x2a2)]=ie` <template> <main> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <bx-searchblock id="search-block"></bx-searchblock> <bx-placeholderblock id="placeholder-block" hidden></bx-placeholderblock> <div id="previews" hidden></div> <bx-pager id="pager" value="1" max="2" hidden></bx-pager> </main> </template>
  `;static ['_shadowStyleSheet']=se`#placeholder-block{margin:14px 0}#previews{margin-top:14px}#previews>*{margin:12px 0}#previews>:first-child{margin-top:0}#pager{margin-top:24px}`;get['canonicalURL'](){const zv=bY;return location[zv(0x1061)]+zv(0xf80);}#ys;#sa=null;constructor(){const zw=bY;super(),this[zw(0xf76)][zw(0x1012)](zw(0x63b),af=>this.#on());}async[bY(0x854)](){const zx=bY;super[zx(0x854)](),this['o'][zx(0x1012)](zx(0x828),this.#ys=af=>{this.#ii(af);}),await this.#A(),this['u']();}[bY(0x7db)](){const zy=bY;this['o']['removeEventListener'](zy(0x828),this.#ys);}async #ii(af){const zz=bY;let {fromLocation:ag,toLocation:ah,method:aj}=af['detail'];if(zz(0xf80)===ah[zz(0x98c)]){let ak=new URLSearchParams(ag?ag[zz(0xa28)]:''),al=new URLSearchParams(ah['search']),am=_i(ak,al);(am[zz(0x1d5)](zz(0xc77))||am[zz(0x1d5)](zz(0xf58))||am[zz(0x1d5)](zz(0x7c7)))&&(zz(0xc68)!==aj&&zz(0xf0c)!==aj||this['o'][zz(0x2da)](),await this.#A(),zz(0x3ff)===aj&&this['o']['restoreScrollOffset']());}}#on(){const zA=bY;let {query:af,category:ag}=this['#search-block'],ah=new URL(location[zA(0xbd9)]),aj=new URLSearchParams(location['search']);''===af?aj[zA(0x658)](zA(0xc77)):aj[zA(0xf62)](zA(0xc77),af),zA(0x3b9)===ag?aj[zA(0x658)](zA(0xf58)):aj['set'](zA(0xf58),ag),aj[zA(0x658)](zA(0x7c7)),ah['search']=aj[zA(0xd23)](),this['o'][zA(0x908)](ah[zA(0xbd9)]);}async #A(){return this.#sa&&await this.#sa,this.#sa=new Promise(async af=>{const zB=a1;let ag=new URLSearchParams(location[zB(0xa28)]),ah=ag['get'](zB(0xc77))||'',aj=ag[zB(0x10bd)](zB(0xf58))||'all',ak=parseInt(ag[zB(0x10bd)](zB(0x7c7))||'1');if(CSS[zB(0x101d)]&&CSS[zB(0x101d)][zB(0xc2a)](),this[zB(0xf76)][zB(0xc77)]=ag[zB(0x10bd)]('query')||'',this['#search-block']['category']=ag[zB(0x10bd)](zB(0xf58))||zB(0x3b9),''===ah)this[zB(0xd45)][zB(0x96e)]=!0x0,this['#placeholder-block'][zB(0x96e)]=!0x1,this['#placeholder-block'][zB(0x37a)]=zB(0x509),this['#placeholder-block'][zB(0xe24)]=zB(0xaaa),this[zB(0x93d)][zB(0x96e)]=!0x0;else{this[zB(0xd45)][zB(0x96e)]=!0x1;let al={'query':ah,'locale':a2['locale'],'page':ak};'blog'===aj?al['type']=zB(0x3fa):zB(0x749)===aj?al[zB(0x1ce)]='idea':zB(0x291)===aj?al[zB(0x70f)]=zB(0xbf9):zB(0x94b)===aj&&(al['threadType']=zB(0x430));let am=null;try{am=await Bi[zB(0xa1a)]['searchPosts'](al);}catch(an){console['error'](an);}if(null===am)this[zB(0xd45)][zB(0x8c2)]='',this['#placeholder-block'][zB(0x96e)]=!0x1,this[zB(0xa3e)][zB(0x37a)]=zB(0xbf8),this[zB(0xa3e)][zB(0xe24)]='Please\x20try\x20again\x20later.',this[zB(0x93d)][zB(0x96e)]=!0x0;else{let [ap,aq]=am;0x0===ap[zB(0x6dc)]?(this[zB(0xa3e)][zB(0x96e)]=!0x1,this[zB(0xa3e)][zB(0x37a)]='#no-results',this[zB(0xa3e)][zB(0xe24)]='#try-redefining-search-criteria',this[zB(0x93d)][zB(0x96e)]=!0x0):(this[zB(0xa3e)][zB(0x96e)]=!0x0,this[zB(0x93d)][zB(0x96e)]=!0x1,this[zB(0x93d)][zB(0x689)]=aq,this[zB(0x93d)][zB(0xf0a)]=ak),this['#previews'][zB(0x8c2)]='';for(let ar of ap){let au=null;zB(0x3fa)===ar['type']?(au=document[zB(0x840)](zB(0x969)),au[zB(0xa0a)](zB(0x7d2),'')):zB(0xaa0)===ar[zB(0x1ce)]?(au=document[zB(0x840)](zB(0xef2)),au['setAttribute'](zB(0x7d2),'')):'bug'===ar['type']?(au=document[zB(0x840)](zB(0x2e3)),au[zB(0xa0a)](zB(0x7d2),'')):zB(0x430)===ar['type']?(au=document['createElement'](zB(0x212)),au[zB(0xa0a)]('condensed','')):'comment'===ar[zB(0x1ce)]&&(au=document['createElement']('bx-commentblock'),au[zB(0xa0a)](zB(0x7d2),'')),au&&(au['uid']=ar['id'],au[zB(0x3ab)]=ar,this[zB(0xd45)][zB(0x775)](au));}}}this.#sa=null,af();});}}customElements[bY(0x864)](bY(0xa0c),$a);class Pa extends ns{static [bY(0x2a2)]=ie` <template> <main> <bx-pagebreadcrumb id="breadcrumb"></bx-pagebreadcrumb> <x-card skin="document"> <main> <article> <h2 id="heading">Page not found</h2> <p>The page you requested does not exist.</p> </article> </main> </x-card> </main> </template>
  `;static ['_shadowStyleSheet']=se`#breadcrumb{margin:0 0 20px 0}#heading{margin-top:0}`;}customElements[bY(0x864)]('bx-errorpage',Pa);class Ea extends bs{static ['v']=ie` <template> <h2><x-message href="#contact"></x-message></h2> <x-label id="hint"> <x-message href="#contact-hint" args="email: ${Vi}"></x-message> </x-label> <x-box id="email-box" vertical> <h3><x-message href="#email"></x-message></h3> <x-input type="email" id="email-input" validation="manual" required></x-input> </x-box> <x-box id="subject-box" vertical> <h3><x-message href="#subject"></x-message></h3> <x-input id="subject-input"></x-input> </x-box> <x-box id="message-box" vertical> <h3><x-message href="#message"></x-message></h3> <x-texteditor id="message-editor" name="message" validation="manual" required></x-texteditor> </x-box> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#send"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:100%;height:100%}#main{display:flex;flex-flow:column;height:100%;padding:30px}h2{margin:0 0 20px 0;font-size:28px}h3{margin-bottom:6px}#hint{margin:0 0 21px 0;font-size:14px;user-select:text;-webkit-user-select:text}#email-input{width:100%;max-width:none}#subject-box{margin-top:20px}#subject-input{width:100%;max-width:none}#message-box{flex:1;margin-top:20px;min-height:1px}#message-editor{flex:1}`;get[bY(0x6c3)](){const zC=bY;return this[zC(0x1018)][zC(0xf0a)];}get[bY(0xb55)](){const zD=bY;return this[zD(0xa14)][zD(0xf0a)];}get['message'](){return this['#message-editor']['value'];}#at;constructor(){const zE=bY;super(),this[zE(0x1018)][zE(0x1012)](zE(0x84e),()=>this.#ot()),this[zE(0xa14)][zE(0x1012)](zE(0x84e),()=>this.#nn()),this['#message-editor'][zE(0x1012)]('input',()=>this.#ln()),this[zE(0x412)]['addEventListener'](zE(0xff9),af=>this.#ms(af)),this[zE(0x4a1)][zE(0x1012)](zE(0xff9),af=>this.#Pt(af));}['connectedCallback'](){const zF=bY;super[zF(0x854)](),Bi['auth'][zF(0x1012)](zF(0x284),this.#at=()=>this.#A()),this.#A();}[bY(0x7db)](){const zG=bY;super[zG(0x7db)](),Bi['auth'][zG(0xee0)](zG(0x284),this.#at);}[bY(0xc2a)](){const zH=bY;super['clear'](),this[zH(0x1018)]['value']='',this['#email-input']['setCustomValidity'](''),this['#subject-input'][zH(0xf0a)]='',this['#subject-input'][zH(0x75e)](''),this[zH(0xdf7)][zH(0xf0a)]='',this[zH(0xdf7)][zH(0x75e)](''),this.#A();}[bY(0xbab)](){const zI=bY;let af=!0x0;return''===this[zI(0x1018)][zI(0xf0a)][zI(0x963)]()&&(this[zI(0x1018)]['setCustomValidity']({'href':'#required-field'}),this[zI(0x1018)][zI(0x72c)](),af=!0x1),''===this[zI(0xa14)][zI(0xf0a)][zI(0x963)]()&&(this[zI(0xa14)][zI(0x75e)]({'href':zI(0xa05)}),!0x0===af&&(this[zI(0xa14)]['focus'](),af=!0x1)),''===this[zI(0xdf7)][zI(0xf0a)]['trim']()&&(this[zI(0xdf7)][zI(0x75e)]({'href':'#required-field'}),!0x0===af&&(af=!0x1,this['#message-editor'][zI(0x72c)]())),af;}#ot(){const zJ=bY;this['p']=!0x0,this['#email-input'][zJ(0x75e)]('');}#nn(){const zK=bY;this['p']=!0x0,this['#subject-input'][zK(0x75e)]('');}#ln(){const zL=bY;this['p']=!0x0,this[zL(0xdf7)][zL(0x75e)]('');}#ms(af){const zM=bY;this[zM(0x10bf)](new CustomEvent(zM(0xb26)));}#Pt(af){const zN=bY;this[zN(0x10bf)](new CustomEvent(zN(0xf20)));}async #A(){const zO=bY;await Bi['auth'][zO(0xfea)],null!==Bi[zO(0xf5c)][zO(0xdc1)]?(this[zO(0x1018)][zO(0xf0a)]=Bi[zO(0xf5c)][zO(0xff7)],this[zO(0x1018)][zO(0x6a2)]=!0x0):this[zO(0x1018)][zO(0x6a2)]=!0x1;}}customElements[bY(0x864)](bY(0x4b5),Ea);class La extends bs{static [bY(0x1068)]=[bY(0xf0a)];static ['v']=ie` <template> <h2><x-message href="#share-file"></x-message></h2> <section id="url-section"> <h3><x-message href="#url"></x-message></h3> <p id="url-info"><x-message href="#share-file.url-hint"></x-message></p> <x-box> <x-input id="url-input" type="url" readonly="readonly"> <x-icon href="#share"></x-icon> </x-input> <x-button id="url-button"> <x-icon href="#copy"></x-icon> <x-label><x-message href="#copy"></x-message></x-label> </x-button> </x-box> </section> <hr id="library-separator" class="separator" hidden> <section id="library-section" hidden> <h3><x-message href="#library"></x-message></h3> <x-radios id="library-radios"> <x-radio value="none" toggled> <x-label><strong><x-message href="#library-scope.none"></x-message></strong></x-label> <x-label><x-message href="#library-scope.none-detail"></x-message></x-label> </x-radio> <x-radio value="personal"> <x-label><strong><x-message href="#library-scope.personal"></x-message></strong></x-label> <x-label><x-message href="#library-scope.personal-detail"></x-message></x-label> </x-radio> <x-radio value="org"> <x-label><strong><x-message href="#library-scope.organization"></x-message></strong></x-label> <x-label><x-message href="#library-scope.organization-detail"></x-message></x-label> </x-radio> </x-radios> </section> </template>
  `;static ['k']=ie` <template> <x-button id="close-button" toggled> <x-label><x-message href="#close"></x-message></x-label> </x-button> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:540px}.separator{margin:20px 0}#url-info{margin-top:0}#url-input{width:100%;max-width:none}#url-button{margin-left:4px}`;get[bY(0xf0a)](){const zP=bY;return this[zP(0xfd9)]('value')?this[zP(0xc51)](zP(0xf0a)):'';}set[bY(0xf0a)](af){const zQ=bY;this[zQ(0xa0a)](zQ(0xf0a),af);}#T;#at;constructor(){const zR=bY;super(),this[zR(0x1fc)][zR(0x1012)](zR(0x5c2),()=>this['#url-input'][zR(0xa16)]()),this[zR(0x1fc)]['addEventListener']('focusout',()=>window['getSelection']()[zR(0xb40)]()),this['#url-button'][zR(0x1012)](zR(0xff9),af=>this.#rn(af)),this[zR(0xf59)][zR(0x1012)](zR(0x807),()=>this.#hn()),this[zR(0x423)]['addEventListener']('click',af=>this.#cn(af));}[bY(0x854)](){const zS=bY;super['connectedCallback'](),this.#T=si(this,zS(0xf55)),Bi[zS(0xf5c)]['addEventListener'](zS(0x284),this.#at=()=>{this.#Ro();}),this.#A();}[bY(0x7db)](){const zT=bY;super[zT(0x7db)](),Bi[zT(0xf5c)][zT(0xee0)]('userchange',this.#at);}[bY(0x83b)](af,ag,ah){const zU=bY;ag!==ah&&zU(0xf0a)===af&&this[zU(0xc8b)]&&this.#A();}#Ro(){this['isConnected']&&this.#A();}#rn(){const zV=bY;navigator[zV(0xb7b)][zV(0xed0)](this['#url-input'][zV(0xf0a)]),this.#T[zV(0x2b4)](zV(0x44b));}async #hn(){const zW=bY;let af=this[zW(0xf0a)],ag=this[zW(0xf59)][zW(0xf0a)];if(null!==af){let [ah,aj]=await this.#T[zW(0x101e)](af);if(zW(0x2b3)===ah)this.#T[zW(0xb6a)](aj);else{if('granted'===ah)try{await Bi[zW(0xfb8)][zW(0x6ba)]('editArtwork',{'artworkID':af,'library':ag});}catch(ak){this.#T[zW(0xafc)]({'title':{'href':zW(0xd37)},'detail':bi(ak),'buttons':[{'href':'#close'}]});}}}}#cn(af){const zX=bY;this[zX(0x10bf)](new CustomEvent('submit'));}#A(){return new Promise(async(af,ag)=>{const zY=a1;if(null===this[zY(0xf0a)])this[zY(0x1fc)][zY(0xf0a)]='';else{await Bi[zY(0xf5c)][zY(0xfea)];let ah=await Bi[zY(0x2f6)][zY(0xd1f)](zY(0x1e0),this['value']),aj=ah?.[zY(0xa1e)]?ah[zY(0xa1e)]:zY(0xcf1);this[zY(0x1fc)][zY(0xf0a)]=zY(0x262)+this[zY(0xf0a)],Bi[zY(0xf5c)][zY(0xdc1)]===ah[zY(0xa56)]?(this['#library-section']['hidden']=!0x1,this[zY(0xb6c)][zY(0x96e)]=!0x1,this['#library-radios'][zY(0xf0a)]=aj):(this['#library-section'][zY(0x96e)]=!0x0,this['#library-separator'][zY(0x96e)]=!0x0);}af();});}}customElements[bY(0x864)](bY(0xdf5),La);class Ua extends bs{static [bY(0x1068)]=[bY(0xf0a)];static ['v']=ie` <template> <h2><x-message href="#embed-file"></x-message></h2> <section id="url-section"> <h3><x-message href="#url"></x-message></h3> <p id="url-info"><x-message href="#embed-file.url-hint"></x-message></p> <x-box> <x-input id="url-input" type="url" readonly="readonly"> <x-icon href="#share"></x-icon> </x-input> <x-button id="url-button"> <x-icon href="#copy"></x-icon> <x-label><x-message href="#copy"></x-message></x-label> </x-button> </x-box> </section> <hr id="cache-control-separator" class="separator" hidden> <section id="cache-control-section" hidden> <h3><x-message href="#caching"></x-message></h3> <p id="cache-control-info"><x-message href="#cache-control-hint"></x-message></p> <x-box> <x-select id="cache-control-select"> <x-menu> <x-menuitem value="no-cache, no-store, must-revalidate"> <x-label><x-message href="#cache-control.never-cache"></x-message></x-label> </x-menuitem> <x-menuitem value="max-age=600"> <x-label><x-message href="#cache-control.moderate"></x-message></x-label> </x-menuitem> <x-menuitem value="max-age=21600" toggled> <x-label><x-message href="#cache-control.normal"></x-message></x-label> </x-menuitem> <x-menuitem value="max-age=604800"> <x-label><x-message href="#cache-control.aggressive"></x-message></x-label> </x-menuitem> <x-menuitem value="max-age=31536000, immutable"> <x-label><x-message href="#cache-control.permanent"></x-message></x-label> </x-menuitem> <hr> <x-menuitem value="custom"> <x-label><x-message href="#cache-control.custom"></x-message></x-label> </x-menuitem> </x-menu> </x-select> <x-input id="cache-control-input"></x-input> <x-button id="cache-control-button" disabled="disabled" hidden> <x-label><x-message href="#change"></x-message></x-label> </x-button> </x-box> </section> </template>
  `;static ['k']=ie` <template> <x-button id="close-button" toggled> <x-label><x-message href="#close"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:530px}.separator{margin:20px 0}#url-info{margin-top:0}#url-input{width:100%;max-width:none}#url-button{margin-left:4px}#cache-control-info{margin-top:0}#cache-control-select{width:130px;max-width:none}#cache-control-input{flex:1;max-width:none;margin-left:4px}#cache-control-button{min-width:85px;margin-left:4px}`;get[bY(0xf0a)](){const zZ=bY;return this['hasAttribute'](zZ(0xf0a))?this['getAttribute']('value'):'';}set[bY(0xf0a)](af){const A0=bY;this['setAttribute'](A0(0xf0a),af);}#T;#at;constructor(){const A1=bY;super(),this[A1(0x1fc)][A1(0x1012)](A1(0x5c2),()=>this[A1(0x1fc)][A1(0xa16)]()),this[A1(0x1fc)][A1(0x1012)](A1(0x1072),()=>window[A1(0x951)]()[A1(0xb40)]()),this[A1(0x395)]['addEventListener'](A1(0xff9),af=>this.#rn(af)),this[A1(0x5d2)][A1(0x1012)](A1(0x63b),()=>this.#dn()),this['#cache-control-input']['addEventListener'](A1(0x84e),()=>this.#un()),this[A1(0x2ee)][A1(0x1012)]('click',()=>this.#pn()),this['#close-button']['addEventListener'](A1(0xff9),af=>this.#cn(af));}[bY(0x854)](){const A2=bY;super[A2(0x854)](),this.#T=si(this,A2(0xf55)),Bi['auth'][A2(0x1012)](A2(0x284),this.#at=()=>{this.#Ro();}),this.#A();}[bY(0x7db)](){const A3=bY;super[A3(0x7db)](),Bi[A3(0xf5c)]['removeEventListener'](A3(0x284),this.#at);}[bY(0x83b)](af,ag,ah){const A4=bY;ag!==ah&&A4(0xf0a)===af&&this[A4(0xc8b)]&&this.#A();}#Ro(){const A5=bY;this[A5(0xc8b)]&&this.#A();}#rn(){const A6=bY;navigator[A6(0xb7b)][A6(0xed0)](this[A6(0x1fc)][A6(0xf0a)]),this.#T[A6(0x2b4)](A6(0x44b));}async #dn(){const A7=bY;let af=this[A7(0xf0a)],ag=this['#cache-control-select'][A7(0xf0a)];if(null!==af){let [ah,aj]=await this.#T[A7(0x101e)](af);if(A7(0x2b3)===ah)this.#T[A7(0xb6a)](aj);else{if(A7(0x299)===ah){A7(0x58a)===ag?(ag=this[A7(0xbb6)]['value'],this[A7(0xbb6)]['disabled']=!0x1,this[A7(0x2ee)][A7(0x96e)]=!0x1):(this['#cache-control-input'][A7(0xf0a)]=ag,this[A7(0xbb6)][A7(0x6a2)]=!0x0,this[A7(0x2ee)][A7(0x96e)]=!0x0);try{await Bi['functions']['postMessage'](A7(0x6fb),{'artworkID':af,'cacheControl':ag});}catch(ak){this.#T['openMessageDialog']({'title':{'href':A7(0xcc0)},'detail':bi(ak),'buttons':[{'href':A7(0x95a)}]});}}}}}#un(){const A8=bY;this[A8(0x2ee)][A8(0x6a2)]=!0x1;}async #pn(){const A9=bY;let af=this['value'];if(null!==af){let ag=this[A9(0xbb6)][A9(0xf0a)];if((ah=>{const Ab=A9;let aj=!0x0,ak=[Ab(0xe6b),Ab(0x68f),'immutable',Ab(0xe23),Ab(0xef0),Ab(0x9cc),Ab(0x322),Ab(0x496),Ab(0x849),'max-stale'],al=[Ab(0x2df),Ab(0x9a8),Ab(0x850),Ab(0xbf7),Ab(0x523),Ab(0x3bf)];if(0x0==(Ab(0xf26)==typeof ah))aj=!0x1;else{let am=ah[Ab(0x963)]()['split'](',')['map'](an=>an['trim']()['toLowerCase']());for(let an of am)if(!0x1===ak[Ab(0x1d5)](an)){let [ap,aq]=an[Ab(0xc97)]('=');if(void 0x0===aq){aj=!0x1;break;}(!0x1===al[Ab(0x1d5)](ap)||!0x1===Z(aq))&&(aj=!0x1);}}return aj;})(ag)){this[A9(0x2ee)][A9(0x6a2)]=!0x0,this[A9(0xbb6)][A9(0x75e)]('');try{await Bi['functions']['postMessage'](A9(0x6fb),{'artworkID':af,'cacheControl':ag});}catch(ah){this.#T['openMessageDialog']({'title':{'href':A9(0xcc0)},'detail':bi(ah),'buttons':[{'href':A9(0x95a)}]}),this['#cache-control-button'][A9(0x6a2)]=!0x1;}}else this[A9(0xbb6)][A9(0x75e)](A9(0x1d2));}}#cn(af){const Ac=bY;this[Ac(0x10bf)](new CustomEvent(Ac(0xb26)));}#A(){return new Promise(async(af,ag)=>{const Ad=a1;if(null===this[Ad(0xf0a)])this['#url-input'][Ad(0xf0a)]='';else{await Bi[Ad(0xf5c)]['whenReady'];let ah=await Bi[Ad(0x2f6)][Ad(0xd1f)]('artworks',this[Ad(0xf0a)]),aj=ah?.[Ad(0xf87)]?ah[Ad(0xf87)]:Ad(0x93e);this[Ad(0x1fc)][Ad(0xf0a)]='https://storage.boxy-svg.com/artworks/'+this['value']+Ad(0x481),Bi['auth'][Ad(0xdc1)]===ah[Ad(0xa56)]?(this[Ad(0x1038)]['hidden']=!0x1,this['#cache-control-separator'][Ad(0x96e)]=!0x1,this[Ad(0xbb6)][Ad(0xf0a)]=aj,null!==this[Ad(0x5d2)][Ad(0x344)]('x-menuitem[value=\x22'+aj+'\x22]')?(this[Ad(0x5d2)]['value']=aj,this['#cache-control-input'][Ad(0x6a2)]=!0x0,this[Ad(0x2ee)][Ad(0x96e)]=!0x0):(this[Ad(0x5d2)]['value']=Ad(0x58a),this[Ad(0xbb6)]['disabled']=!0x1,this[Ad(0x2ee)][Ad(0x96e)]=!0x1)):(this['#cache-control-section'][Ad(0x96e)]=!0x0,this[Ad(0xb66)]['hidden']=!0x0);}af();});}}customElements['define'](bY(0xf48),Ua);class Da extends bs{static ['v']=ie` <template> <h2><x-message href="#log-in"></x-message></h2> <x-input id="email-input" type="email" validation="manual" required> <x-icon href="#email"></x-icon> <x-label><x-message href="#email"></x-message></x-label> </x-input> <x-input id="password-input" type="password" validation="manual" required> <x-icon href="#password"></x-icon> <x-label><x-message href="#password"></x-message></x-label> </x-input> <p id="anchors"> <a id="register-anchor" tabindex="0"><x-message href="#register"></x-message></a> <a id="password-reset-anchor" tabindex="0"><x-message href="#reset-password"></x-message></a> </p> </template>
  `;static ['k']=ie` <template> <x-button id="login-button" tabindex="0" toggled> <x-label><strong><x-message href="#log-in"></x-message></strong></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{min-width:250px}#email-input,#password-input{width:100%;max-width:none}#anchors{display:flex;align-items:center;justify-content:flex-end;font-size:13px;margin-top:10px}#password-reset-anchor{margin-left:8px}#login-button{width:100%;cursor:pointer}`;#T;#$;constructor(){const Af=bY;super(),this[Af(0x1012)](Af(0x57f),af=>this.#ie(af)),this[Af(0x1018)][Af(0x1012)]('input',()=>this[Af(0x1018)][Af(0x75e)]('')),this[Af(0xdb8)][Af(0x1012)]('input',()=>this[Af(0xdb8)][Af(0x75e)]('')),this[Af(0x515)][Af(0x1012)]('pointerdown',af=>af[Af(0x539)]()),this[Af(0x515)][Af(0x1012)]('click',af=>this.#mn(af)),this[Af(0x83e)][Af(0x1012)](Af(0x894),af=>af[Af(0x539)]()),this['#login-button'][Af(0x1012)](Af(0xff9),af=>this.#Kt(af));}[bY(0x854)](){const Ag=bY;super[Ag(0x854)](),this.#T=si(this,Ag(0xf55)),this.#$=si(this,Ag(0x741)),this[Ag(0x3c4)][Ag(0xbd9)]=qi(location[Ag(0xbd9)],Ag(0x741),Ag(0xcff)),this['#password-reset-anchor'][Ag(0xbd9)]=qi(location[Ag(0xbd9)],Ag(0x741),Ag(0x10a6));}#ie(af){const Ah=bY;!0x1===this[Ah(0x92d)]&&Ah(0xab8)===af[Ah(0xe52)]&&this['#login-button']['click']();}#mn(af){const Aj=bY;let ag=af[Aj(0x779)][Aj(0xc06)]('a');ag&&(af[Aj(0x539)](),this.#T[Aj(0x908)](ag['href']));}async #Kt(af){const Ak=bY;if(!0x1===this[Ak(0x1018)][Ak(0xbab)]())this[Ak(0x1018)][Ak(0x72c)]();else{if(!0x1===this[Ak(0xdb8)][Ak(0xbab)]())this['#password-input'][Ak(0x72c)]();else{this[Ak(0x92d)]=!0x0,this.#T[Ak(0xb52)]();let ag=this[Ak(0x1018)][Ak(0xf0a)],ah=this['#password-input'][Ak(0xf0a)],aj=null;try{await Bi[Ak(0xf5c)][Ak(0x109d)](ag,ah);}catch(ak){aj=ak;}aj?(this[Ak(0x92d)]=!0x1,this.#T[Ak(0xdf3)](),'auth/wrong-password'===aj[Ak(0x3cb)]?(this[Ak(0xdb8)]['setCustomValidity']({'href':'#wrong-password'}),this[Ak(0xdb8)][Ak(0xbab)]()):'auth/invalid-email'===aj[Ak(0x3cb)]?(this[Ak(0x1018)][Ak(0x75e)]({'href':Ak(0xc18)}),this[Ak(0x1018)][Ak(0xbab)]()):Ak(0xa1b)===aj[Ak(0x3cb)]?(this[Ak(0x1018)][Ak(0x75e)]({'href':Ak(0xd86)}),this[Ak(0x1018)][Ak(0xbab)]()):Ak(0xdfa)===aj[Ak(0x3cb)]?this.#T[Ak(0xafc)]({'title':{'href':Ak(0xda5)},'detail':{'href':'#cant-connect-to-server'},'buttons':[{'href':Ak(0x95a)}]}):this.#T[Ak(0xafc)]({'title':{'href':Ak(0xda5)},'detail':bi(aj),'buttons':[{'href':Ak(0x95a)}]})):(this[Ak(0x92d)]=!0x1,this.#T[Ak(0xdf3)](),this.#$[Ak(0x225)]());}}}}customElements[bY(0x864)](bY(0x472),Da);class za extends bs{static ['v']=ie` <template> <h2><x-message href="#confirm-password"></x-message></h2> <p><x-message href="#confirm-password.detail"></x-message></p> <x-input id="password-input" type="password" validation="manual" required> <x-icon href="#password"></x-icon> <x-label><x-message href="#password"></x-message></x-label> </x-input> </template>
  `;static ['k']=ie` <template> <x-button id="submit-button" toggled> <x-label><x-message href="#confirm"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:400px}#password-input{max-width:none}#password-input[error]{margin-bottom:10px}`;get[bY(0xf0a)](){return this.#t;}#T;#$;#t=!0x1;constructor(){const Al=bY;super(),this[Al(0x1012)](Al(0x57f),af=>this.#ie(af)),this[Al(0x412)][Al(0x1012)](Al(0xff9),()=>this.#ms());}[bY(0x854)](){const Am=bY;super['connectedCallback'](),this.#T=si(this,Am(0xf55)),this.#$=si(this,Am(0x741));}#ie(af){const An=bY;!0x1===this[An(0x92d)]&&'Enter'===af[An(0xe52)]&&this[An(0x412)]['click']();}async #ms(){const Ao=bY;if(!0x1===this[Ao(0xdb8)][Ao(0xbab)]())this[Ao(0xdb8)][Ao(0x72c)]();else{this[Ao(0x92d)]=!0x0;let af=this['#password-input'][Ao(0xf0a)],ag=null;try{await Bi[Ao(0xf5c)]['reauthenticate'](af);}catch(ah){ag=ah;}this[Ao(0x92d)]=!0x1,ag?Ao(0x820)===ag[Ao(0x3cb)]?this[Ao(0xdb8)][Ao(0x75e)](Ao(0xfa6)):this.#T['openMessageDialog']({'title':{'href':Ao(0xf8d)},'detail':authError[Ao(0x65b)]+'\x20('+authError[Ao(0x3cb)]+')','buttons':[{'href':Ao(0x95a)}]}):(this.#t=!0x0,await this.#$[Ao(0x225)]());}}}customElements[bY(0x864)](bY(0xb6b),za);class Ma extends bs{static ['v']=ie` <template> <h2><x-message href="#reset-password"></x-message></h2> <p><x-message href="#reset-password-hint"></x-message>.</p> <x-input id="email-input" type="email" validation="manual" required> <x-icon href="#email"></x-icon> <x-label><x-message href="#email"></x-message></x-label> </x-input> </template>
  `;static ['k']=ie` <template> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="submit-button" toggled> <x-label><x-message href="#send"></x-message></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:420px}#email-input{max-width:none}#email-input[error]{margin-bottom:10px}`;#T;#$;constructor(){const Ap=bY;super(),this['addEventListener']('keydown',af=>this.#ie(af)),this[Ap(0x4a1)][Ap(0x1012)]('click',()=>this.#Pt()),this[Ap(0x412)][Ap(0x1012)](Ap(0xff9),()=>this.#ms());}[bY(0x854)](){const Aq=bY;super['connectedCallback'](),this.#T=si(this,Aq(0xf55)),this.#$=si(this,Aq(0x741));}#ie(af){const Ar=bY;!0x1===this[Ar(0x92d)]&&'Enter'===af[Ar(0xe52)]&&this[Ar(0x412)]['click']();}#Pt(){const Au=bY;this.#$[Au(0x225)]();}async #ms(){const Av=bY;if(!0x1===this['#email-input'][Av(0xbab)]())this[Av(0x1018)][Av(0x72c)]();else{this[Av(0x92d)]=!0x0;let af=null;try{await Bi[Av(0xf5c)][Av(0xba4)](this[Av(0x1018)][Av(0xf0a)]);}catch(ag){af=ag;}this[Av(0x92d)]=!0x1,af?Av(0x64e)===af[Av(0x3cb)]?this[Av(0x1018)][Av(0x75e)]({'href':Av(0xc18)}):Av(0xa1b)===af['code']?this[Av(0x1018)][Av(0x75e)]({'href':Av(0xd86)}):this.#T['openMessageDialog']({'title':{'href':Av(0x88b)},'detail':af[Av(0x65b)]+'\x20('+af[Av(0x3cb)]+')','buttons':[{'href':Av(0x95a)}]}):this.#$[Av(0x225)]();}}}customElements[bY(0x864)](bY(0xcd1),Ma);class Aa extends bs{static ['v']=ie` <template> <h2><x-message href="#register"></x-message></h2> <x-input id="email-input" type="email" validation="manual" required> <x-icon href="#email"></x-icon> <x-label><x-message href="#email"></x-message></x-label> </x-input> <x-input id="name-input" validation="manual" maxlength="35" required> <x-icon href="#profile"></x-icon> <x-label><x-message href="#name"></x-message></x-label> </x-input> <x-input id="password-input" type="password" validation="manual" minlength="5" required> <x-icon href="#password"></x-icon> <x-label><x-message href="#password"></x-message></x-label> </x-input> <x-checkbox id="agree-checkbox"> <x-label id="agree-checkbox-label"><x-message href="#i-agree-to-tos-and-privacy-policy"></x-message></x-label> </x-checkbox> </template>
  `;static ['k']=ie` <template> <x-button id="submit-button" toggled disabled="disabled"> <x-label><strong><x-message href="#register"></x-message></strong></x-label> </x-button> </template>
  `;static [bY(0x78e)]=se`:host{width:308px}#email-input,#name-input,#password-input{width:100%;max-width:none}#agree-checkbox{margin-top:12px}#submit-button{width:100%;cursor:pointer}`;#T;#$;constructor(){const Aw=bY;super(),this[Aw(0x1012)](Aw(0x57f),af=>this.#ie(af)),this[Aw(0xc8f)][Aw(0x1012)](Aw(0x84e),()=>this.#_e()),this[Aw(0x1018)]['addEventListener']('input',()=>this.#ot()),this[Aw(0xdb8)][Aw(0x1012)](Aw(0x84e),()=>this.#ht()),this[Aw(0x108a)][Aw(0x1012)](Aw(0x807),()=>this.#A()),this[Aw(0xe08)][Aw(0x1012)](Aw(0xff9),af=>this.#xn(af)),this['#submit-button'][Aw(0x1012)]('click',()=>this.#ms());}[bY(0x854)](){const Ax=bY;super[Ax(0x854)](),this.#T=si(this,'#app'),this.#$=si(this,Ax(0x741));}#ie(af){const Ay=bY;Ay(0xab8)===af[Ay(0xe52)]&&!0x1===this[Ay(0x92d)]&&!0x1===this[Ay(0x412)][Ay(0x6a2)]&&this[Ay(0x412)][Ay(0xff9)]();}#_e(){const Az=bY;this[Az(0xc8f)][Az(0x75e)]('');}#ot(){const AA=bY;this[AA(0x1018)][AA(0x75e)]('');}#ht(){const AB=bY;this[AB(0xdb8)]['setCustomValidity']('');}#xn(af){const AC=bY;'a'===af['target'][AC(0xa31)]&&(af[AC(0x539)](),window['open'](af[AC(0x779)][AC(0xbd9)]));}async #ms(){const AD=bY;if(!0x1===this[AD(0x1018)][AD(0xbab)]())this[AD(0x1018)]['focus']();else{if(!0x1===this[AD(0xc8f)][AD(0xbab)]())this[AD(0xc8f)]['focus']();else{if(!0x1===this['#password-input'][AD(0xbab)]())this[AD(0xdb8)][AD(0x72c)]();else{this[AD(0x92d)]=!0x0,this.#T['lockInput']();let af=this[AD(0x1018)][AD(0xf0a)],ag=this['#name-input'][AD(0xf0a)],ah=this[AD(0xdb8)][AD(0xf0a)],aj=null;try{await Bi[AD(0xfb8)][AD(0x6ba)](AD(0xba6),{'email':af,'name':ag,'password':ah});}catch(ak){aj=ak;}null===aj?(await Bi[AD(0xf5c)][AD(0x109d)](af,ah),await Bi[AD(0xf5c)]['sendVerificationEmail'](),this[AD(0x92d)]=!0x1,this.#T[AD(0xdf3)](),this.#$['close']()):(this['throbber']=!0x1,this.#T[AD(0xdf3)](),AD(0xa26)===aj[AD(0x3cb)]?this.#T['openMessageDialog']({'title':{'href':AD(0xee2)},'detail':{'href':AD(0x836)},'buttons':[{'href':'#close'}]}):'name-taken'===aj[AD(0xa7f)]?(this['#name-input'][AD(0x75e)]({'href':'#name-already-taken'}),this[AD(0xc8f)]['focus']()):AD(0xdc7)===aj[AD(0xa7f)]?(this['#name-input'][AD(0x75e)]({'href':AD(0x99e)}),this[AD(0xc8f)]['focus']()):AD(0x64e)===aj[AD(0xa7f)]?(this[AD(0x1018)][AD(0x75e)]({'href':'#invalid-email'}),this[AD(0x1018)][AD(0x72c)]()):'auth/email-already-in-use'===aj['details']||AD(0x4ef)===aj[AD(0xa7f)]?(this[AD(0x1018)][AD(0x75e)]({'href':AD(0x68c)}),this[AD(0x1018)]['focus']()):AD(0x488)===aj[AD(0xa7f)]||AD(0xb7e)===aj[AD(0xa7f)]?(this['#password-input'][AD(0x75e)]({'href':AD(0x465)}),this[AD(0xdb8)]['focus']()):this.#T[AD(0xafc)]({'title':{'href':AD(0xee2)},'detail':bi(aj),'buttons':[{'href':'#close'}]}));}}}}#A(){const AE=bY;this[AE(0x412)]['disabled']=!this['#agree-checkbox'][AE(0x42a)];}}customElements[bY(0x864)](bY(0x27a),Aa);class Ba extends HTMLElement{static [bY(0x1068)]=[bY(0xf0a),bY(0x92d)];static #C=ie` <template> <main id="main" part="main"> <x-icon id="folder-icon" href="#folder" part="icon"></x-icon> <x-throbber id="throbber" hidden></x-throbber> </main> <footer id="footer" part="footer"> <div id="name" part="name"></div> </footer> </template>
  `;static #S=se`
    :host {
      display: flex;
      flex-flow: column;
      user-select: none;
      -webkit-user-select: none;
      pointer-events: none;
    }
    :host([hidden]) {
      display: none;
    }
    :host([highlighted]) {
      filter: brightness(1.3);
    }

    /**
     * Main
     */

    #main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 14px;
      position: relative;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
    }

    /* Folder icon */

    #folder-icon {
      width: 100%;
      height: auto;
      pointer-events: all;
    }

    /**
     * Footer
     */

    #footer {
      height: 35px;
      font-size: 14.5px;
    }
    :host([disabled]) #footer > *  {
      opacity: 0.5;
    }

    /* Name */

    #name {
      overflow: hidden;
      display: -webkit-box;
      width: fit-content;
      padding: 3px 9px;
      margin: 7px auto 0 auto;
      line-height: 1.25;
      font-weight: 500;
      font-size: 13px;
      text-align: center;
      pointer-events: all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    #name[hidden] {
      display: none;
    }

    #name-input {
      width: 100%;
      height: 23px;
      max-width: none;
      margin-top: 6px;
      font-weight: 500;
      text-align: center;
      pointer-events: all;
    }
  `;get[bY(0xf0a)](){const AF=bY;return this['hasAttribute'](AF(0xf0a))?JSON[AF(0xf30)](this[AF(0xc51)](AF(0xf0a))):[];}set[bY(0xf0a)](af){const AG=bY;0x0===af['length']?this[AG(0x88e)](AG(0xf0a)):this[AG(0xa0a)](AG(0xf0a),JSON['stringify'](af));}get[bY(0x958)](){const AH=bY;return this[AH(0xfd9)](AH(0x958));}set['selected'](af){const AI=bY;af?this[AI(0xa0a)](AI(0x958),''):this[AI(0x88e)](AI(0x958));}get['highlighted'](){const AJ=bY;return this[AJ(0xfd9)](AJ(0xc47));}set[bY(0xc47)](af){const AK=bY;af?this[AK(0xa0a)]('highlighted',''):this[AK(0x88e)](AK(0xc47));}get['disabled'](){const AL=bY;return this[AL(0xfd9)](AL(0x6a2));}set[bY(0x6a2)](af){const AM=bY;af?this[AM(0xa0a)](AM(0x6a2),''):this[AM(0x88e)]('disabled');}get[bY(0x387)](){const AN=bY;return this[AN(0xfd9)](AN(0x387));}set[bY(0x387)](af){const AO=bY;af?this[AO(0xa0a)]('editable',''):this[AO(0x88e)](AO(0x387));}get['throbber'](){const AP=bY;return this[AP(0xfd9)]('throbber');}set['throbber'](af){const AQ=bY;af?this[AQ(0xa0a)]('throbber',''):this[AQ(0x88e)](AQ(0x92d));}#P;#oi;constructor(){const AR=bY;super(),this[AR(0xa0a)](AR(0xb11),'true'),this.#P=this['attachShadow']({'mode':'closed'}),this.#P[AR(0x48f)]=[a2[AR(0x500)],Ba.#S],this.#P[AR(0x775)](document[AR(0xc3b)](Ba.#C[AR(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](AR(0x6e3)))this['#'+af['id']]=af;this[AR(0x8e7)][AR(0x1012)](AR(0x8a6),()=>this.#ni()),this['#folder-icon'][AR(0x1012)](AR(0x8a6),()=>this.#gn());}[bY(0x854)](){const AS=bY;this.#oi=new ResizeObserver(et(this.#ri,0x190,this)),this.#oi['observe'](this,{'box':AS(0x9c6)});}[bY(0x7db)](){const AT=bY;this.#oi[AT(0xc27)](this);}['attributeChangedCallback'](af,ag,ah){const AU=bY;ag!==ah&&(AU(0xf0a)===af?this.#ci():AU(0x92d)===af&&this.#hi());}#ni(){const AV=bY;this[AV(0x832)]();}#gn(){const AW=bY;this['dispatchEvent'](new CustomEvent(AW(0x990),{'bubbles':!0x0}));}[bY(0x832)](){const AX=bY;if(this[AX(0xfd9)](AX(0x10d1)))return;this[AX(0xa0a)](AX(0x10d1),'');let af,ag,ah=this[AX(0x8e7)]['textContent'],aj=ie`<x-input id="name-input" value="${ah}" validation="instant"></x-input>`;this[AX(0x8e7)]['before'](aj),aj[AX(0xa16)](),this[AX(0x8e7)][AX(0x96e)]=!0x0;let ak=(al=!0x1)=>{const AY=AX;this['removeAttribute']('editing',''),aj[AY(0xee0)](AY(0x57f),af),aj['removeEventListener'](AY(0x1072),ag),aj[AY(0x102a)](),this[AY(0x8e7)][AY(0x96e)]=!0x1;let am=!0x0===al?ah:aj[AY(0xf0a)];ah===am?this[AY(0x8e7)][AY(0xad6)]=ah:(''===am?(this[AY(0x8e7)][AY(0xad6)]=AY(0x1c5),this['#name'][AY(0xa0a)](AY(0x409),'')):(this[AY(0x8e7)]['textContent']=Te(am),this[AY(0x8e7)][AY(0x88e)]('data-untitled')),this[AY(0x10bf)](new CustomEvent(AY(0xc98),{'bubbles':!0x0,'detail':{'oldName':ah,'newName':am}}))),si(this,AY(0x108d))[AY(0x72c)]();};aj['addEventListener'](AX(0x57f),af=al=>{const AZ=AX;AZ(0xab8)===al[AZ(0xe52)]?(al['stopPropagation'](),ak()):'Escape'===al[AZ(0xe52)]&&(al[AZ(0x539)](),al[AZ(0xc67)](),ak(!0x0));}),aj['addEventListener']('focusout',ag=()=>{ak();});}[bY(0x8e5)](af){const B0=bY;let ag=this[B0(0x715)][B0(0xf93)](),ah=this[B0(0x8e7)][B0(0xf93)]();return af instanceof DOMRect?Ot(ag,af)||Ot(ah,af):af instanceof DOMPoint?Nt(ag,af)||Nt(ah,af):void 0x0;}[bY(0x4c5)](){this.#hi(),this.#ci();}#hi(){const B1=bY;!0x1===this['throbber']?(this[B1(0x715)]['hidden']=!0x1,this[B1(0x264)][B1(0x96e)]=!0x0):(this[B1(0x715)][B1(0x96e)]=!0x0,this['#throbber'][B1(0x96e)]=!0x1),this.#ri();}#ri(){const B2=bY;this[B2(0x21d)]['style']['minHeight']=this[B2(0x21d)]['clientWidth']+'px';}#ci(){const B3=bY;let af=this[B3(0xf0a)];if(0x0===af[B3(0x6dc)])this[B3(0x8e7)][B3(0xad6)]=B3(0x1c5),this[B3(0x8e7)][B3(0xa0a)]('data-untitled','');else{let ag=af[af[B3(0x6dc)]-0x1];this[B3(0x8e7)][B3(0xad6)]=Te(ag),this[B3(0x8e7)][B3(0x88e)]('data-untitled');}}}void 0x0===customElements[bY(0x10bd)](bY(0x983))&&customElements[bY(0x864)](bY(0x983),Ba);let Ra=Symbol();class Ia extends HTMLElement{static #C=ie` <template> <div id="items"></div> </template>
  `;static #S=se`
    :host {
      display: flex;
      align-items: center;
      width: fit-content;
      height: 32px;
      contain: style layout;
      box-sizing: border-box;
    }
    :host([disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }
    :host([size="large"]) {
      height: 38px;
    }

    /* Containers */

    #items {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: fit-content;
      height: 100%;
      padding: 0 13px;
      position: relative;
      border-width: 1px;
      border-style: solid;
    }
    .item:not(:first-child) {
      margin-left: -1px;
    }
    .item:focus {
      z-index: 1;
    }

    .item .inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      box-sizing: border-box;
    }

    /* Icon */

    .item x-icon {
      width: 16px;
      height: 16px;
      color: currentColor;
    }
    .item x-icon[href="#cloud"] {
      width: 20px;
      height: 20px;
    }

    /* Label */

    .item x-label {
      margin-left: 6px;
      font-weight: 500;
      font-size: 13px;
    }
  `;get['value'](){return this.#t;}set['value'](af){this.#t=af,this.#A();}get[bY(0xb2e)](){const B4=bY;let af=this['getAttribute'](B4(0xb2e));return['small',B4(0xbe0)][B4(0x1d5)](af)?af:null;}set[bY(0xb2e)](af){const B5=bY;[B5(0x48e),B5(0xbe0)]['includes'](af)?this[B5(0xa0a)]('size',af):this[B5(0x88e)]('size');}get[bY(0x6a2)](){const B6=bY;return this['hasAttribute'](B6(0x6a2));}set['disabled'](af){const B7=bY;af?this[B7(0xa0a)](B7(0x6a2),''):this[B7(0x88e)]('disabled');}#t=[];#P;constructor(){const B8=bY;super(),this.#P=this['attachShadow']({'mode':B8(0xc5d)}),this.#P[B8(0x48f)]=[a2[B8(0x500)],Ia.#S],this.#P[B8(0x775)](document[B8(0xc3b)](Ia.#C[B8(0x223)],!0x0));for(let af of this.#P[B8(0x44e)](B8(0x6e3)))this['#'+af['id']]=af;this.#P['addEventListener'](B8(0x894),ag=>this.#Ye(ag)),this.#P[B8(0x1012)](B8(0xff9),ag=>this.#Xe(ag)),this.#P[B8(0x1012)](B8(0xba0),ag=>this.#bn(ag)),this.#P[B8(0x1012)]('drop',ag=>this.#fn(ag)),this.#P['addEventListener'](B8(0x57f),ag=>this.#ie(ag));}[bY(0x854)](){this.#A();}#Ye(af){const B9=bY;af[B9(0x779)][B9(0xc06)](B9(0xe31))&&af[B9(0x539)]();}#Xe(af){const Bb=bY;let ag=af[Bb(0x779)]['closest']('.item');if(!0x1===ag?.['hasAttribute'](Bb(0x107c))){let ah=[];for(let aj of this['#items'][Bb(0x573)])if(aj!==this[Bb(0xa35)][Bb(0xe5b)]&&ah[Bb(0xc68)](aj[Bb(0x344)]('.label')[Bb(0xad6)]),aj===ag)break;this[Bb(0xf0a)]=ah,this[Bb(0x10bf)](new CustomEvent(Bb(0x63b)));}}#bn(af){const Bc=bY;let ag=af[Bc(0x779)][Bc(0xc06)](Bc(0xe31));!0x1===ag?.['hasAttribute'](Bc(0x107c))&&af[Bc(0x539)]();}#fn(af){const Bd=bY;let ag=af[Bd(0x779)][Bd(0xc06)](Bd(0xe31));ag&&af['dataTransfer'][Bd(0x4ee)](Bd(0xd58))&&this[Bd(0x10bf)](new CustomEvent(Bd(0x64c),{'detail':ag[Ra]}));}#ie(af){const Bf=bY;let ag=this[Bf(0xa35)][Bf(0x344)](Bf(0x8e1));ag&&(Bf(0xab8)!==af[Bf(0xe52)]&&Bf(0x66b)!==af[Bf(0x3cb)]||ag[Bf(0xff9)]());}#me(af,ag,ah){const Bg=bY;let aj=af[Bg(0xbd9)]?Bg(0x519)+af[Bg(0xbd9)]+Bg(0xa04):af,ak=ie` <div class="item" part="item" tabindex="0"> <div class="inner"> <x-icon href="#${ag}"></x-icon> <x-label class="label">${aj}</x-label> </div> </div>
    `;return ak[Ra]=ah,ak;}#A(){const Bh=bY;this[Bh(0xa35)][Bh(0x8c2)]='',this['#items'][Bh(0x775)](this.#me({'href':Bh(0xc2d)},'cloud',[]));for(let af=0x0;af<this[Bh(0xf0a)]['length'];af+=0x1){let ag=this[Bh(0xf0a)][Bh(0x847)](0x0,af+0x1);'__search__'===this[Bh(0xf0a)][af]?this[Bh(0xa35)][Bh(0x775)](this.#me({'href':'#search'},Bh(0xa28),ag)):this[Bh(0xa35)][Bh(0x775)](this.#me(this['value'][af],Bh(0xde6),ag));}this[Bh(0xa35)][Bh(0xe5b)]['part'][Bh(0xc2f)](Bh(0x42d)),this[Bh(0xa35)][Bh(0x9ed)][Bh(0xe87)][Bh(0xc2f)]('last-item'),this[Bh(0xa35)]['lastElementChild'][Bh(0xe87)]['add'](Bh(0x8fd)),this[Bh(0xa35)][Bh(0x9ed)][Bh(0xa0a)](Bh(0x107c),''),this[Bh(0xa35)][Bh(0x9ed)]['removeAttribute'](Bh(0x366));}}void 0x0===customElements[bY(0x10bd)](bY(0x10ee))&&customElements['define'](bY(0x10ee),Ia);class Fa extends HTMLElement{static [bY(0x1068)]=[bY(0xf0a),bY(0x92d)];static #C=ie` <template> <main id="main"> <x-throbber id="throbber" type="spin" hidden></x-throbber> <x-label id="label"></x-label> </main> </template>
  `;static #S=se`
    :host {
      display: block;
      width: 100%;
      height: 29px;
      padding: 0 16px;
      box-sizing: border-box;
      contain: style layout;
      display: flex;
      align-items: center;
    }
    :host([hidden]) {
      display: none;
    }

    #main {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #throbber {
      width: 19px;
      height: 19px;
      margin-right: 8px;
    }

    #label {
      font-size: 13px;
      opacity: 0.8;
      user-select: none;
      -webkit-user-select: none;
    }
  `;get['value'](){const Bj=bY;return this[Bj(0xfd9)](Bj(0xf0a))?this[Bj(0xc51)](Bj(0xf0a)):null;}set[bY(0xf0a)](af){const Bk=bY;null===af?this[Bk(0x88e)]('value'):this[Bk(0xa0a)]('value',af);}get[bY(0x92d)](){const Bl=bY;return this['hasAttribute'](Bl(0x92d));}set[bY(0x92d)](af){const Bm=bY;af?this['setAttribute'](Bm(0x92d),''):this[Bm(0x88e)](Bm(0x92d));}#P;constructor(){const Bn=bY;super(),this.#P=this['attachShadow']({'mode':'closed'}),this.#P[Bn(0x48f)]=[a2[Bn(0x500)],Fa.#S],this.#P[Bn(0x775)](document['importNode'](Fa.#C[Bn(0x223)],!0x0));for(let af of this.#P['querySelectorAll'](Bn(0x6e3)))this['#'+af['id']]=af;}[bY(0x854)](){this.#A();}[bY(0x83b)](af,ag,ah){const Bo=bY;ag!==ah&&(Bo(0xf0a)===af||Bo(0x92d)===af)&&this.#A();}#A(){const Bp=bY;this[Bp(0x638)][Bp(0x8c2)]=this[Bp(0xf0a)],!0x1===this[Bp(0x92d)]?this[Bp(0x264)][Bp(0x96e)]=!0x0:this['#throbber']['hidden']=!0x1;}}void 0x0===customElements[bY(0x10bd)]('bx-cloudstatusbar')&&customElements[bY(0x864)](bY(0xcd6),Fa);let Na=af=>{const Bq=bY;af[Bq(0xfd9)](Bq(0x1054))&&Bq(0xd6f)===af['getAttribute']('x')&&Bq(0xd6f)===af[Bq(0xc51)]('y')&&Bq(0xd85)===af[Bq(0xc51)](Bq(0xee8))&&Bq(0xd85)===af[Bq(0xc51)](Bq(0x1046))&&(af[Bq(0xa0a)]('x',Bq(0xefd)),af[Bq(0xa0a)]('y',Bq(0xefd)),af[Bq(0xa0a)]('width',Bq(0xac1)),af[Bq(0xa0a)](Bq(0x1046),Bq(0xac1)));};ei(bY(0x2de));let Oa=af=>{const Br=bY;let ag=ti(af);if(!0x1===af[Br(0xfd9)]('id')){let ah=0x0;for(;null!==ag['querySelector'](Br(0xb50)+ah);)ah+=0x1;af[Br(0xa0a)]('id','marker-'+ah);}},_a=af=>{const Bu=bY;let ag=!0x1;if(af[Bu(0xfd9)]('data-bx-shape')){let ah=af['getAttribute']('d'),aj=af['getAttribute'](Bu(0x3f2))[Bu(0x963)]()[Bu(0xc97)](/[\s+,]+/);if(aj[Bu(0x6dc)]>=0x3){let ak=aj[0x0],al=aj['slice'](0x1,aj[Bu(0x6dc)]-0x1),am=aj[aj[Bu(0x6dc)]-0x1];if(am[Bu(0x1d5)]('@')){let [an,ap]=am[Bu(0xc97)]('@');ap===Wt(ah+Bu(0x8f7)+ak+'\x20'+al[Bu(0xf5e)]('\x20')+'\x20'+an)['toString'](0x20)&&(ag=!0x0);}}}return ag;},qa=af=>{const Bv=bY;let ag=ti(af);if(!0x1===af[Bv(0xfd9)]('id')){let ah=0x0;for(;null!==ag[Bv(0x344)](Bv(0x4ed)+ah);)ah+=0x1;af['setAttribute']('id','symbol-'+ah);}},ja=af=>{const Bw=bY;let ag=ti(af),ah=null;try{ah=ag[Bw(0x344)](af[Bw(0xbd9)][Bw(0x4a3)]);}catch(aj){ah=null;}if(ah&&Bw(0x898)!==ah[Bw(0xa31)]){let ak=lt(af);ak[Bw(0xa8a)](lt(ah)),ak[Bw(0x44c)](af['x']['baseVal'][Bw(0xf0a)],af['y'][Bw(0x4a3)][Bw(0xf0a)]);let al=ah[Bw(0xe74)](!0x0);rt(al,ak);for(let am of af['style']){let an=al[Bw(0xe90)]['getPropertyValue'](am),ap=af[Bw(0xe90)][Bw(0xfb1)](am);''===an&&al[Bw(0xe90)][Bw(0x687)](am,ap);}for(let {name:aq,value:ar}of af[Bw(0xfe1)])D['includes'](aq)&&Bw(0xf95)!==aq&&!0x1===al[Bw(0xfd9)](aq)&&al[Bw(0xa0a)](aq,ar);for(let au of af[Bw(0x1f9)])!0x1===al['classList']['contains'](au)&&al[Bw(0x1f9)]['add'](au);for(let av of al['querySelectorAll']('*[id]'))av[Bw(0x88e)]('id');af[Bw(0xfd9)]('id')?al[Bw(0xa0a)]('id',af['id']):al[Bw(0x88e)]('id'),af[Bw(0xaa3)](al);}else{let aw=lt(af);aw[Bw(0x44c)](af['x'][Bw(0x4a3)][Bw(0xf0a)],af['y'][Bw(0x4a3)][Bw(0xf0a)]),rt(af,aw),af[Bw(0x88e)]('x'),af[Bw(0x88e)]('y');}};const Va={'foreignObjects':'sanitize','foreignMetadata':bY(0x102a)};let Ga=(af,ag=Va)=>{const Bx=bY;let ah,aj=Ha(af)||Ha(Bx(0x1d3)),ak=NodeFilter[Bx(0xc92)]|NodeFilter['SHOW_TEXT']|NodeFilter['SHOW_COMMENT'],al=document[Bx(0xb98)](aj,ak),am=[],an=[];for(;ah=al[Bx(0x876)]();)if(ah[Bx(0x421)]!==Node[Bx(0x5e8)])!0x1===(L[ah['parentNode'][Bx(0x536)]]||[])[Bx(0x1d5)](ah[Bx(0x536)])&&ah[Bx(0x102a)]();else{if(ah[Bx(0xa31)]['includes'](':')){if(ah['localName']['startsWith'](Bx(0xe99))){let aq=ah[Bx(0xa31)]['split'](':')[0x1],ar=document[Bx(0x840)](Bx(0x62c)+aq);for(let au of[...ah[Bx(0xfe1)]])ar['setAttribute'](au['name'],au[Bx(0xf0a)]);for(let av of[...ah[Bx(0x2bd)]])ar['append'](av);ah['replaceWith'](ar);}else ah[Bx(0x102a)]();}else{if(Bx(0x37a)===ah[Bx(0xa31)]){let aw=ei('svg:bx-title');aw[Bx(0x8c2)]=ah['innerHTML'];for(let {name:ax,value:ay}of ah[Bx(0xfe1)])aw[Bx(0xa0a)](ax,ay);ah['replaceWith'](aw);continue;}if(Bx(0x8cb)===ah[Bx(0xa31)]){let az=Bx(0x331),aA=ah[Bx(0x344)](az)||ah[Bx(0xe5b)];aA&&ah[Bx(0xaa3)](aA);continue;}if(Bx(0xf62)===ah[Bx(0xa31)]){let aB=ei(Bx(0xaf2));for(let {name:aC,value:aD}of ah[Bx(0xfe1)])'to'===aC?(aB[Bx(0xa0a)](Bx(0x442),aD),aB['setAttribute']('to',aD)):aB[Bx(0xa0a)](aC,aD);ah[Bx(0xaa3)](aB);continue;}if('foreignObject'===ah[Bx(0xa31)]){if(Bx(0x102a)===ag[Bx(0xc6d)]){ah[Bx(0x102a)]();continue;}am[Bx(0xc68)]([ah,ah['innerHTML']]),ah[Bx(0x8c2)]='';}else{if('metadata'===ah[Bx(0xa31)]){if(Bx(0x102a)===ag[Bx(0xf13)]){ah[Bx(0x102a)]();continue;}an[Bx(0xc68)]([ah,ah['innerHTML']]),ah['innerHTML']='';}else{if(ah!==aj){if(!0x1===(L[ah[Bx(0x858)]['localName']]||[])['includes'](ah[Bx(0xa31)])){ah[Bx(0x102a)]();continue;}}}}for(let {name:aE,value:aF}of[...ah[Bx(0xfe1)]]){if(aE[Bx(0x1d5)](':')){if(ah[Bx(0x88e)](aE),aE['startsWith'](Bx(0xe99)))aE=Bx(0xd49)+aE[Bx(0xc97)](':')[0x1],ah[Bx(0xa0a)](aE,aF);else{if(Bx(0x7dc)===aE&&!0x1===ah[Bx(0xfd9)](Bx(0xbd9)))aE='href',ah[Bx(0xa0a)](aE,aF);else{if(Bx(0x10c6)===aE&&!0x1===ah[Bx(0xfd9)](Bx(0x37a)))aE=Bx(0x37a),ah[Bx(0xa0a)](aE,aF);else{if('xml:lang'!==aE)continue;aE=Bx(0x552),ah[Bx(0xa0a)](aE,aF);}}}}aE[Bx(0x9ae)]('data-')?Bx(0x3f2)===aE?!0x1===_a(ah)&&ah[Bx(0x88e)](aE):Bx(0x7c9)===aE?!0x1===Zt(ah)&&ah['removeAttribute'](aE):Bx(0x1004)===aE&&ah[Bx(0x88e)](aE):Bx(0xbd9)===aE&&'a'===ah['localName']&&(ah[Bx(0x88e)](aE),ah[Bx(0xa0a)](Bx(0xab9),aF));}}}for(let [aG,aH]of am)Bx(0xb93)===ag[Bx(0xc6d)]?aG[Bx(0x8c2)]=aH:Bx(0x65e)===ag[Bx(0xc6d)]&&(aG[Bx(0x8c2)]=a6[Bx(0x65e)](aH));for(let [aI,aJ]of an)Bx(0xb93)===ag[Bx(0xf13)]&&(aI[Bx(0x8c2)]=aJ);let ap=new Qe(aj);for(let aK of aj['querySelectorAll'](Bx(0x7a7)))gt(aK);for(let aL of aj[Bx(0x44e)](Bx(0x7be)))bt(aL);for(let aM of aj[Bx(0x44e)](Bx(0x2c8)))_t(aM);for(let aN of aj[Bx(0x44e)]('radialGradient'))qt(aN);for(let aO of aj['querySelectorAll'](Bx(0x8b4)))Gt(aO);for(let aP of aj[Bx(0x44e)]('marker'))Oa(aP);for(let aQ of aj[Bx(0x44e)]('symbol'))qa(aQ);for(let aR of aj[Bx(0x44e)](Bx(0xe7a)))aR[Bx(0xfd9)](Bx(0x1054))&&Na(aR);for(let aS of aj[Bx(0x44e)](Bx(0x881)))ja(aS);for(let aT of aj[Bx(0x44e)](Bx(0xd63)))Yt(aT);{let aU=[];for(let {name:aV,value:aW}of[...aj[Bx(0xfe1)]])aj[Bx(0x88e)](aV),Bx(0x6a1)!==aV&&Bx(0x968)!==aV&&aU[Bx(0xc68)]({'name':aV,'value':aW});aj[Bx(0xa0a)](Bx(0x6a1),u),aj[Bx(0xa0a)](Bx(0x968),d);for(let {name:aX,value:aY}of aU)aj[Bx(0xa0a)](aX,aY);}{let aZ=aj[Bx(0x344)](':scope\x20>\x20defs');aZ||(aZ=ei(Bx(0x4bb)),aj[Bx(0x5b3)](aZ));}return Ee(aj),ap['destroy'](),document['importNode'](aj,!0x0),aj;},Ha=af=>{const By=bY;let ag=new DOMParser(),ah=ag['parseFromString'](af,By(0xc7f))[By(0x344)](By(0x10ed)),aj=null,ak=!0x0;if(0x1===ah[By(0x573)][By(0x6dc)]&&'svg'===ah[By(0x573)][0x0][By(0xa31)]){for(let al of ah['children'][0x0]['attributes'])if(al['name'][By(0x9ae)]('xmlns')&&al[By(0xf0a)][By(0x9ae)](By(0x51f))){ak=!0x1;break;}}else ak=!0x1;if(ak)aj=ah[By(0x573)][0x0];else{let am=ag[By(0xeea)](af,By(0x2d5))[By(0x344)]('svg')||null,an={'title':!0x0,'switch':!0x0};for(let ap of $)an[ap]=!0x0;if(am){let aq,ar=document[By(0xb98)](am,NodeFilter[By(0xc92)],{'acceptNode':av=>By(0x6fc)===av[By(0xa31)]?NodeFilter[By(0x102c)]:NodeFilter[By(0x7fa)]});for(;aq=ar[By(0x876)]();)aq[By(0xf79)]===u?!0x0!==an[aq[By(0xa31)]]&&aq[By(0x102a)]():aq[By(0xf79)]===d||aq[By(0x102a)]();if(!0x1===am[By(0xfd9)](By(0x6a1))){let av=document['createElementNS'](u,By(0xdae));av['setAttribute'](By(0x6a1),u);for(let aw of am[By(0xfe1)])av[By(0xa0a)](aw[By(0xce8)],am[By(0xc51)](aw[By(0xce8)]));for(let ax of[...am[By(0x2bd)]])av['append'](ax);am=av;}let au='<?xml\x20version=\x221.0\x22\x20encoding=\x22utf-8\x22?>\x0a'+new XMLSerializer()[By(0x61b)](am);aj=new DOMParser()['parseFromString'](au,By(0xc7f))['querySelector'](By(0xdae))||null;}}return aj;};class Wa extends EventTarget{get[bY(0x878)](){return this.#fa;}#T;#wn=null;#vn=null;#yn=null;#fa=!0x1;constructor(af){super(),this.#T=af;}['observe'](af){const Bz=bY;this[Bz(0xc27)](),this.#wn=af,af&&Bi['database']['observeCollection'](Bz(0x1e0),this.#yn=ag=>{this.#kn(ag);},!0x0);}[bY(0xc27)](){const BA=bY;this.#yn&&(Bi['database'][BA(0x312)](BA(0x1e0),this.#yn),this.#yn=null,this.#fa=!0x1);}#kn(af){const BB=bY;this.#vn=af,this.#fa=!0x0,this[BB(0x10bf)](new CustomEvent(BB(0x63b)));}[bY(0xc77)](af,ag='',ah=bY(0xa69),aj=!0x1){const BC=bY;let ak=[],al=[];if(this.#vn){for(let {id:am,data:an}of this.#vn)ak[BC(0xc68)]({'uid':am,'createdTime':an[BC(0x10b6)],'updatedTime':an['updatedTime'],'library':void 0x0!==an['library']?an[BC(0xa1e)]:BC(0xcf1),'folder':void 0x0!==an['folder']?[...an[BC(0x457)]]:[],'name':void 0x0!==an['name']?an['name']:an[BC(0x37a)],'size':void 0x0!==an['size']?an['size']:0x0});}for(let ap of ak)if(ap[BC(0x457)][BC(0x6dc)]>0x0)for(let aq=0x0;aq<=ap[BC(0x457)][BC(0x6dc)];aq+=0x1){let ar=ap[BC(0x457)][BC(0x847)](0x0,aq);if(ar[BC(0x6dc)]>0x0){let au=!0x1;for(let av of al)if(!0x0===q(ar,av,!0x0)){au=!0x0;break;}!0x1===au&&al[BC(0xc68)](ar);}}return!0x1===aj?(ak=ak['filter'](aw=>q(aw[BC(0x457)],af,!0x0)),al=al[BC(0xe7a)](aw=>aw['length']===af['length']+0x1&&!0x0===q(aw[BC(0x847)](0x0,aw['length']-0x1),af))):(ak=ak[BC(0xe7a)](aw=>q(aw[BC(0x457)][BC(0x847)](0x0,af[BC(0x6dc)]),af,!0x0)),al=al[BC(0xe7a)](aw=>aw[BC(0x6dc)]>af['length']&&!0x0===q(aw[BC(0x847)](0x0,af[BC(0x6dc)]),af))),''!==ag&&(ak=ak[BC(0xe7a)](aw=>-0x1!==aw['name'][BC(0x10b1)]()[BC(0xc56)](ag['toLowerCase']())),al=al[BC(0xe7a)](aw=>-0x1!==aw[aw[BC(0x6dc)]-0x1][BC(0x10b1)]()['indexOf'](ag[BC(0x10b1)]()))),BC(0x8fe)===ah||'createdTimeAsc'===ah?(ak[BC(0x311)]((aw,ax)=>aw[BC(0x10b6)]['seconds']-ax[BC(0x10b6)][BC(0x740)]),BC(0xfff)===ah&&ak[BC(0x274)]()):BC(0x4f1)===ah||'updatedTimeAsc'===ah?(ak[BC(0x311)]((aw,ax)=>aw[BC(0x1059)][BC(0x740)]-ax[BC(0x1059)][BC(0x740)]),BC(0xba5)===ah&&ak[BC(0x274)]()):BC(0x4aa)!==ah&&'nameAsc'!==ah||(ak[BC(0x311)]((aw,ax)=>aw[BC(0xce8)][BC(0xd65)](ax['name'])),BC(0x4aa)===ah&&ak[BC(0x274)]()),al[BC(0x311)]((aw,ax)=>aw[aw[BC(0x6dc)]-0x1][BC(0xd65)](ax[ax[BC(0x6dc)]-0x1])),BC(0x4aa)===ah&&al['reverse'](),[ak,al];}[bY(0xfc7)](af){const BD=bY;let ag=null;if(this.#vn){for(let {id:ah,data:aj}of this.#vn)if(ah===af){ag={'uid':af,'createdTime':aj[BD(0x10b6)],'updatedTime':aj[BD(0x1059)],'folder':void 0x0!==aj[BD(0x457)]?[...aj[BD(0x457)]]:[],'name':void 0x0!==aj['name']?aj['name']:aj[BD(0x37a)],'size':void 0x0!==aj[BD(0xb2e)]?aj['size']:0x0};break;}}return ag;}[bY(0xdf2)](af){const BE=bY;let ag=0x0;if(this.#vn)for(let {id:ah,data:aj}of this.#vn){let ak=void 0x0!==aj['folder']?aj[BE(0x457)]:[],al=void 0x0!==aj[BE(0xb2e)]?aj[BE(0xb2e)]:0x0;q(ak[BE(0x847)](0x0,af[BE(0x6dc)]),af,!0x0)&&(ag+=al);}return ag;}}class Ka extends HTMLElement{static [bY(0x1068)]=[bY(0x1ce)];static #C=ie` <template> <header id="header" part="header"> <bx-cloudbreadcrumb id="breadcrumb"></bx-cloudbreadcrumb> <div id="save-form"> <x-label id="save-label"><x-message href="#save-as"></x-message>: </x-label> <x-input id="save-input" value="Untitled"></x-input> </div> <div id="filter-form"> <x-input id="search-input" type="search"> <x-icon href="#search"></x-icon> <x-label><x-message href="#search" ellipsis></x-message></x-label> </x-input> <x-select id="sort-select"> <x-menu> <x-menuitem value="name" toggled> <x-icon href="#sort-alphabetic"></x-icon> <x-label><x-message href="#name"></x-message></x-label> </x-menuitem> <x-menuitem value="createdTime"> <x-icon href="#time"></x-icon> <x-label><x-message href="#created-time"></x-message></x-label> </x-menuitem> <x-menuitem value="updatedTime"> <x-icon href="#time"></x-icon> <x-label><x-message href="#updated-time"></x-message></x-label> </x-menuitem> </x-menu> </x-select> <x-button id="sort-order-button" value="Asc" condensed> <x-icon id="sort-order-icon" href="#sort-ascending"></x-icon> <x-tooltip> <x-message id="sort-order-message" href="#sort.ascending"></x-message> </x-tooltip> </x-button> <x-buttons id="view-buttons" tracking="1" hidden> <x-button value="icons" condensed toggled> <x-icon href="#view-icons"></x-icon> </x-button> <x-button value="columns" condensed> <x-icon href="#view-columns"></x-icon> </x-button> </x-buttons> </div> </header> <main id="main" part="main"> <bx-iconscloudbrowserview id="icons-view"></bx-iconscloudbrowserview> <bx-columnscloudbrowserview id="columns-view"></bx-columnscloudbrowserview> </main> <footer id="footer" part="footer"> <div id="footer-buttons"> <x-button id="cancel-button"> <x-label><x-message href="#cancel"></x-message></x-label> </x-button> <x-button id="open-button" toggled> <x-label><x-message href="#open"></x-message></x-label> </x-button> <x-button id="save-button" toggled> <x-label><x-message href="#save"></x-message></x-label> </x-button> </div> <bx-cloudstatusbar id="statusbar"></bx-cloudstatusbar> </footer> <div id="dialogs"></div> </template>
  `;static #S=se`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
    }
    :host(:focus) {
      outline: none;
    }

    /**
     * Header
     */

    #header {
      border-bottom-width: 1px;
      border-bottom-style: solid;
    }

    /* Breadcrumb */

    #breadcrumb {
      margin: 10px 16px;
    }

    /* Save form */

    #save-form {
      display: flex;
      align-items: center;
      padding: 10px 16px;
    }
    #save-form[hidden] {
      display: none;
    }

    #save-label {
      margin-right: 10px;
      font-weight: 500;
    }

    #save-label > x-input {
      padding: 0 8px;
    }

    #save-input {
      flex: 1;
      max-width: initial;
    }

    /* Filter form */

    #filter-form {
      display: flex;
      padding: 0px 16px 10px 16px;
    }
    #filter-form[hidden] {
      display: none;
    }

    /* Search input */

    #search-input {
      flex: 1;
      min-width: 60px;
      max-width: none;
    }

    /* Sort select */

    #sort-select {
      width: 168px;
      margin-left: 10px;
    }
    #sort-select:focus {
      z-index: 1;
    }
    @media all and (max-width: 650px) {
      #sort-select {
        width: 120px;
      }
    }
    @media all and (max-width: 539px) {
      #sort-select {
        width: 100px;
      }
    }

    /* Sort order button */

    #sort-order-button {
      margin-left: 10px;
    }

    /* View buttons */

    #view-buttons {
      margin-left: 10px;
    }

    /**
     * Main
     */

    #main {
      flex: 1;
      min-height: 1px;
    }
    #main:focus {
      outline: none;
    }

    /**
     * Footer
     */

    #footer {
      border-top-width: 1px;
      border-top-style: solid;
    }

    #footer-buttons[hidden] {
      display: none;
    }

    #footer-buttons {
      display: flex;
      justify-content: flex-end;
      padding: 10px 16px;
      box-sizing: border-box;
    }

    #footer-buttons > x-button {
      margin-left: 10px;
    }
  `;get['type'](){const BF=bY;return this['hasAttribute']('type')?this['getAttribute'](BF(0x1ce)):BF(0x9ff);}set[bY(0x1ce)](af){const BG=bY;this[BG(0xa0a)]('type',af);}get[bY(0xf0a)](){const BH=bY;return BH(0x9ff)===this['type']?this['currentView']&&this['currentView']['selectedFiles'][0x0]||null:BH(0x4be)===this[BH(0x1ce)]?this[BH(0xbeb)]?[...this['currentView'][BH(0x10f1)]]:[]:BH(0x9af)===this[BH(0x1ce)]?this[BH(0x516)][BH(0xf0a)]:void 0x0;}get[bY(0x34e)](){return this.#Cn;}get[bY(0x106f)](){return this.#Sn;}get[bY(0xa28)](){return this.#Tn;}get[bY(0x311)](){return this.#$n;}get[bY(0x44a)](){return this.#Pn;}get[bY(0xbeb)](){const BI=bY;for(let af of this['#main'][BI(0x573)])if(af[BI(0x21c)])return af;}#T;#$;#P;#Cn;#at;#En;#Sn=[];#Tn='';#$n='nameAsc';#Pn=bY(0x74b);constructor(){const BJ=bY;super(),this.#P=this[BJ(0x1017)]({'mode':BJ(0xc5d)}),this.#P[BJ(0x48f)]=[a2[BJ(0x500)],Ka.#S],this.#P['append'](document[BJ(0xc3b)](Ka.#C['content'],!0x0));for(let af of this.#P['querySelectorAll'](BJ(0x6e3)))this['#'+af['id']]=af;this[BJ(0x1012)](BJ(0x57f),ag=>this.#ie(ag)),this[BJ(0x21d)][BJ(0x1012)](BJ(0x100a),()=>this.#Ln()),this[BJ(0x21d)]['addEventListener']('filepreviewdblclick',()=>this.#Un()),this['#breadcrumb'][BJ(0x1012)](BJ(0x63b),()=>this.#Dn()),this[BJ(0x451)][BJ(0x1012)](BJ(0x64c),ag=>this.#zn(ag)),this[BJ(0x516)][BJ(0x1012)](BJ(0x84e),()=>this.#Mn()),this[BJ(0x516)][BJ(0x1012)](BJ(0x57f),ag=>this.#An(ag)),this[BJ(0xfd8)]['addEventListener'](BJ(0x84e),()=>this.#$i()),this[BJ(0x101b)][BJ(0x1012)](BJ(0x63b),()=>this.#Li()),this[BJ(0x569)][BJ(0x1012)](BJ(0xff9),()=>this.#Bn()),this['#view-buttons']['addEventListener']('toggle',()=>this.#Rn()),this['#cancel-button'][BJ(0x1012)](BJ(0xff9),()=>this.#Pt()),this['#open-button'][BJ(0x1012)](BJ(0xff9),()=>this.#In()),this[BJ(0xbba)][BJ(0x1012)]('click',()=>this.#$o());}['connectedCallback'](){const BK=bY;this.#T=si(this,BK(0xf55)),this.#$=si(this,BK(0x741)),this.#$n=a2[BK(0x4a6)](BK(0xa3a),BK(0xa69)),this.#Pn=a2['getConfig'](BK(0x415),BK(0x74b)),this.#Cn=new Wa(this.#T),this.#Cn[BK(0x733)](Bi[BK(0xf5c)][BK(0xdc1)]),Bi[BK(0xf5c)][BK(0x1012)](BK(0x284),this.#at=()=>{const BL=BK;this.#Cn['observe'](Bi[BL(0xf5c)][BL(0xdc1)]);}),this.#Cn[BK(0x1012)](BK(0x63b),this.#En=()=>{this.#Fn();}),this.#Nn(),this.#hi(),this.#ci();}[bY(0x7db)](){const BM=bY;this[BM(0x21d)][BM(0x8c2)]='',this.#Cn[BM(0xc27)](),Bi[BM(0xf5c)][BM(0xee0)](BM(0x284),this.#at),this.#Cn[BM(0xee0)](BM(0x63b),this.#En);}[bY(0x83b)](af,ag,ah){ag!==ah&&'type'===af&&(this.#Nn(),this.#vo());}#ie(af){const BN=bY;'Escape'===af[BN(0x3cb)]?!0x1===af['defaultPrevented']&&this.#$&&this.#$[BN(0x225)]():'Escape'===af[BN(0x3cb)]&&!0x1===af[BN(0x275)]&&this.#$&&this.#$[BN(0x225)]();}#Ln(){this.#ci();}#Dn(){const BO=bY;let af=this.#Tn;this.#Sn=this[BO(0x451)][BO(0xf0a)]['filter'](ag=>BO(0xbb8)!==ag),this.#Tn='',this[BO(0x10bf)](new CustomEvent(BO(0x828))),''!==af&&this[BO(0x10bf)](new CustomEvent('searchchange')),this.#Nn(),this.#ci();}#zn(af){const BP=bY;this['moveSelectionToFolder'](af[BP(0xdd7)]);}#Mn(){this.#ci();}#An(af){const BQ=bY;BQ(0xab8)===af['key']&&!0x1===this['#save-button'][BQ(0x6a2)]&&this[BQ(0xbba)][BQ(0xff9)]();}#$i(){const BR=bY;this.#Tn=this[BR(0xfd8)][BR(0xf0a)][BR(0x963)](),this['dispatchEvent'](new CustomEvent(BR(0x9e6))),this.#On(),this.#ci();}#Li(){const BS=bY;this.#$n=this[BS(0x101b)][BS(0xf0a)]+this['#sort-order-button'][BS(0xf0a)],a2['setConfig'](BS(0xa3a),this.#$n),this[BS(0x10bf)](new CustomEvent(BS(0x363))),this.#Nn();}#Bn(){const BT=bY;let af=this['sort'];af[BT(0x1021)](BT(0x936))?af=af[BT(0xf0c)]('Desc',BT(0xe68)):af[BT(0x1021)](BT(0xe68))&&(af=af[BT(0xf0c)](BT(0xe68),BT(0x936))),this.#$n=af,a2[BT(0xea6)](BT(0xa3a),af),this[BT(0x10bf)](new CustomEvent(BT(0x363))),this.#Nn();}#Rn(){const BU=bY;this.#xi(this['#view-buttons'][BU(0xf0a)]);}#Un(af){this['dispatchEvent'](new CustomEvent('submit'));}#Pt(){const BV=bY;this[BV(0x10bf)](new CustomEvent(BV(0xf20)));}#In(){const BW=bY;this[BW(0x10bf)](new CustomEvent(BW(0xb26)));}#$o(){const BX=bY;this[BX(0x10bf)](new CustomEvent('submit'));}#_n(af){const BY=bY;BY(0xa16)===af?this[BY(0xbeb)][BY(0x453)]():BY(0x358)===af?this[BY(0xbeb)]['renameSelected']():BY(0x6c4)===af?this.#xi(BY(0xc4b)):BY(0xf25)===af?this.#xi(BY(0x74b)):BY(0x27e)===af?this.#T[BY(0x3db)](this[BY(0xbeb)][BY(0x10f1)][0x0]):'embed'===af?this.#T[BY(0x671)](this[BY(0xbeb)][BY(0x10f1)][0x0]):BY(0x1007)===af?this['openFile'](this[BY(0xbeb)]['selectedFiles'][0x0],'app'):BY(0x629)===af?this[BY(0xdeb)](this[BY(0xbeb)][BY(0x10f1)][0x0],BY(0xb67)):'saveToDiskAs'===af?this.#qn(this[BY(0xbeb)][BY(0x10f1)][0x0]):BY(0x342)===af?this.#jn():BY(0xa73)===af?this.#Vn():BY(0x658)===af&&this.#Gn();}['navigate'](af){const BZ=bY;this.#Sn===af&&''===this.#Tn||(this.#Sn=af,this.#Tn='',this['dispatchEvent'](new CustomEvent(BZ(0x828))),this[BZ(0x10bf)](new CustomEvent(BZ(0x9e6))),this.#Nn());}#xi(af){const C0=bY;this.#Pn!==af&&(this.#Pn=af,a2['setConfig'](C0(0x415),af),this.#Nn(),this.#hi());}#Hn(af){const C1=bY;this[C1(0xbeb)][C1(0x92c)]=!0x0,this[C1(0x451)][C1(0x6a2)]=!0x0,this[C1(0xfd8)]['disabled']=!0x0,this[C1(0x101b)][C1(0x6a2)]=!0x0,this[C1(0x569)][C1(0x6a2)]=!0x0,this[C1(0x107b)][C1(0xf0a)]=af,this[C1(0x107b)]['throbber']=!0x0;}#Wn(){const C2=bY;this[C2(0xbeb)][C2(0x92c)]=!0x1,this['#breadcrumb'][C2(0x6a2)]=!0x1,this[C2(0xfd8)][C2(0x6a2)]=!0x1,this[C2(0x101b)]['disabled']=!0x1,this['#sort-order-button']['disabled']=!0x1,this[C2(0x107b)][C2(0x92d)]=!0x1,this.#Fn();}[bY(0x806)](af=!0x0){const C3=bY;this['#save-input']['focus'](),af&&this[C3(0x516)]['selectAll']();}['openContextMenu'](){return new Promise(async af=>{const C4=a1;let {selectedFolders:ag,selectedFiles:ah}=this[C4(0xbeb)],aj=[];this.#$n,aj=0x0===ag[C4(0x6dc)]&&0x0===ah[C4(0x6dc)]?[{'value':C4(0x342),'message':{'href':'#new-file','autocapitalize':!0x0}},{'type':C4(0x550)},{'value':C4(0xa16),'message':{'href':C4(0xefa),'autocapitalize':!0x0}}]:0x1===ag[C4(0x6dc)]&&0x0===ah[C4(0x6dc)]?[{'value':C4(0xa73),'disabled':''!==this.#Tn,'message':{'href':'#new-folder-with-selection','autocapitalize':!0x0}},{'type':'separator'},{'value':C4(0x358),'message':{'href':C4(0xb41),'autocapitalize':!0x0}},{'value':C4(0x658),'message':{'href':C4(0xa85),'autocapitalize':!0x0}},{'type':C4(0x550)},{'value':'selectAll','message':{'href':'#select-all','autocapitalize':!0x0}}]:0x0===ag['length']&&0x1===ah[C4(0x6dc)]?[{'value':C4(0xa73),'disabled':''!==this.#Tn,'message':{'href':C4(0x258),'autocapitalize':!0x0}},{'type':C4(0x550)},{'value':C4(0x1007),'message':{'href':C4(0xabf),'autocapitalize':!0x0}},{'value':C4(0x629),'message':{'href':C4(0x3ce),'autocapitalize':!0x0}},{'type':'separator'},{'value':C4(0x358),'message':{'href':C4(0xb41),'autocapitalize':!0x0}},{'value':C4(0x658),'message':{'href':C4(0xa85),'autocapitalize':!0x0}},{'type':C4(0x550)},{'value':C4(0x27e),'message':{'href':'#share','autocapitalize':!0x0,'ellipsis':!0x0}},{'value':'embed','message':{'href':'#embed','autocapitalize':!0x0,'ellipsis':!0x0}},{'value':C4(0xa08),'message':{'href':C4(0x663),'autocapitalize':!0x0,'ellipsis':!0x0}},{'type':C4(0x550)},{'value':'selectAll','message':{'href':C4(0xefa),'autocapitalize':!0x0}}]:[{'value':C4(0xa73),'disabled':''!==this.#Tn,'message':{'href':'#new-folder-with-selection','autocapitalize':!0x0}},{'type':C4(0x550)},{'value':C4(0x658),'message':{'href':'#delete','autocapitalize':!0x0}},{'type':C4(0x550)},{'value':C4(0xa16),'message':{'href':'#select-all','autocapitalize':!0x0}}];let ak=await this.#T[C4(0x21a)](aj);this[C4(0xbeb)][C4(0x72c)](),null!==ak&&this.#_n(ak),af(ak);});}[bY(0xdeb)](af,ag=bY(0x38d)){const C5=bY;C5(0x38d)===ag?C5(0x901)===this.#T[C5(0xa31)]?this.#T[C5(0x257)](af):C5(0xe19)===this.#T[C5(0xc5f)]?window['open'](C5(0xfbb)+af,'',C5(0x29d)):window['open'](C5(0xfbb)+af,'',C5(0xc1b)):C5(0xb67)===ag&&('standalone'===this.#T[C5(0xc5f)]?window[C5(0x9ff)](C5(0x5ee)+af+C5(0x481),'',C5(0x29d)):window['open'](C5(0x5ee)+af+C5(0x481),'',C5(0xc1b)));}#qn(af){return new Promise(async ag=>{const C6=a1;let ah=await fetch(C6(0x5ee)+af+C6(0x481),{'cache':C6(0xe23),'headers':{'Pragma':'no-cache'}}),aj={'foreignObjects':a2[C6(0x4a6)](C6(0x43b),'sanitize'),'foreignMetadata':a2['getConfig'](C6(0x4e0),C6(0x102a))},ak=await ah['text'](),al=Ga(ak,aj)[C6(0x344)](C6(0xcae)),am='Untitled';al?.[C6(0xad6)]['trim']()[C6(0x6dc)]>0x0&&(am=al[C6(0xad6)][C6(0x963)]());let an=new Blob([ak],{'type':C6(0x2d5)}),ap=URL[C6(0xd9b)](an);ie`<a download="${am}.svg" href="${ap}"></a>`[C6(0xff9)](),URL[C6(0xc32)](ap),ag();});}#jn(){return new Promise(async af=>{const C7=a1;let ag=this[C7(0x106f)],ah=C7(0x1c5),aj=null;this.#Hn(C7(0x3a0));{let [ak,al]=this.#Cn[C7(0xc77)](ag,''),am=new Set();for(let an of ak)am[C7(0xc2f)](''===an[C7(0xce8)]?C7(0x1c5):an[C7(0xce8)]);for(let ap of al){let aq=ap[ap[C7(0x6dc)]-0x1];am[C7(0xc2f)](aq);}if(am[C7(0xe3e)](ah)){let ar=0x2;for(;am[C7(0xe3e)](ah+'\x20'+ar);)ar+=0x1;ah=ah+'\x20'+ar;}}aj=(await Bi[C7(0xfb8)]['postMessage'](C7(0xd73),{'name':ah,'folder':ag}))['data'],(await this[C7(0xbeb)][C7(0x440)],this['currentView'][C7(0x10f1)]=[aj],this.#Wn(),af());});}['renameFile'](af,ag){return new Promise(async ah=>{const C8=a1;this.#Hn(C8(0xa60));{let [aj,ak]=await this.#T[C8(0x101e)](af);if(C8(0x2b3)===aj)this.#T[C8(0xb6a)](ak);else{if(C8(0x299)===aj)try{await Bi[C8(0xfb8)][C8(0x6ba)](C8(0x6fb),{'artworkID':af,'name':ag});}catch(al){this['o']['openMessageDialog']({'title':{'href':C8(0x203)},'detail':bi(al),'buttons':[{'href':'#close'}]});}}}await this['currentView'][C8(0x440)],this.#Wn(),ah();});}#Vn(){return new Promise(async af=>{const C9=a1;this.#Hn(C9(0x5da));let ag={},ah=C9(0xa11),aj=[...this.#Sn,ah];{let [ak]=this.#Cn[C9(0xc77)]([],'',C9(0xa69),!0x0);for(let al of this[C9(0xbeb)][C9(0x10f1)]){let am=ak[C9(0x81c)](an=>an['uid']===al);am&&(ag[am[C9(0x4d4)]]=j(am[C9(0x457)],this.#Sn[C9(0x6dc)],ah));}for(let an of this[C9(0xbeb)]['selectedFolders']){let [ap]=this.#Cn[C9(0xc77)](an,'',C9(0xa69),!0x0);for(let aq of ap)ag[aq['uid']]=j(aq[C9(0x457)],this.#Sn[C9(0x6dc)],ah);}}try{await Bi['functions'][C9(0x6ba)]('setArtworksFolders',ag);}catch(ar){this['o'][C9(0xafc)]({'title':{'href':C9(0x924)},'detail':bi(ar),'buttons':[{'href':C9(0x95a)}]});}await this[C9(0xbeb)][C9(0x440)],this[C9(0xbeb)][C9(0x833)]=[aj],this.#Wn(),af();});}['moveSelectionToFolder'](af){return new Promise(async ag=>{const Cb=a1;let {selectedFolders:ah,selectedFiles:aj}=this[Cb(0xbeb)],ak=0x0===af['length']?Cb(0x599):af[af[Cb(0x6dc)]-0x1],al=ah['length']+aj[Cb(0x6dc)],am={};0x1===al?this.#Hn(Cb(0x992)+ak+Cb(0x224)):this.#Hn(Cb(0xe37)+al+'\x20items\x20to\x20\x22'+ak+Cb(0x224));for(let an of aj)this.#Cn[Cb(0xfc7)](an),am[an]=af;for(let ap of ah){let [aq]=this.#Cn[Cb(0xc77)](ap,'','nameAsc',!0x0);for(let ar of aq){let au=ar[Cb(0x457)]['slice'](this.#Sn['length']);am[ar[Cb(0x4d4)]]=[...af,...au];}}try{await Bi[Cb(0xfb8)]['postMessage'](Cb(0xdbe),am);}catch(av){this['o'][Cb(0xafc)]({'title':{'href':Cb(0x5a0)},'detail':bi(av),'buttons':[{'href':Cb(0x95a)}]});}await this[Cb(0xbeb)]['whenNextUpdate'],this.#Wn(),ag();});}[bY(0x38f)](af,ag){return new Promise(async ah=>{const Cc=a1;this.#Hn(Cc(0xa60));let aj={};{let [ak]=this.#Cn['query'](af,'',Cc(0xa69),!0x0);for(let al of ak){let am=[...al['folder']];am[af['length']-0x1]=ag,aj[al[Cc(0x4d4)]]=am;}}try{await Bi[Cc(0xfb8)][Cc(0x6ba)](Cc(0xdbe),aj);}catch(an){this['o'][Cc(0xafc)]({'title':{'href':Cc(0x392)},'detail':bi(an),'buttons':[{'href':Cc(0x95a)}]});}{await this['currentView'][Cc(0x440)];let ap=[...af];ap[ap[Cc(0x6dc)]-0x1]=ag,this['currentView'][Cc(0x833)]=[ap];}this.#Wn(),ah();});}#Gn(af){return new Promise(async ag=>{const Cd=a1;let {selectedFiles:ah,selectedFolders:aj}=this[Cd(0xbeb)],ak=[...ah];for(let al of aj){let [am]=this.#Cn['query'](al,'',Cd(0xa69),!0x0);for(let an of am)ak['push'](an[Cd(0x4d4)]);}if(0x0===await this.#T[Cd(0xafc)]({'title':{'href':Cd(0x7fd),'args':{'filesCount':ak[Cd(0x6dc)]}},'detail':{'href':Cd(0x596)},'buttons':[{'href':'#delete'},{'href':Cd(0x42e)}]})){this.#Hn(Cd(0x5f5));for(let ap of ak){let [aq,ar]=await this.#T[Cd(0x101e)](ap);if(Cd(0x2b3)===aq&&(Cd(0xce9)===ar||Cd(0x380)===ar?aq=Cd(0x299):this.#T[Cd(0xb6a)](ar)),Cd(0x299)===aq){let au=null;try{await Bi[Cd(0xfb8)]['postMessage']('deleteArtwork',ap);}catch(av){au=av;}au?this['o'][Cd(0xafc)]({'title':{'href':'#failed-to-delete-file'},'detail':bi(error),'buttons':[{'href':Cd(0x95a)}]}):ap===this.#T['artworkID']&&(this.#T[Cd(0x908)](Cd(0x239),!0x0),this.#T[Cd(0xd0f)]());}}this.#Wn();}ag();});}#Nn(){const Cf=bY;this.#On(),'manage'===this[Cf(0x1ce)]?(this[Cf(0xf84)][Cf(0x96e)]=!0x0,this['#filter-form'][Cf(0x96e)]=!0x1):Cf(0x9af)===this[Cf(0x1ce)]?(this[Cf(0xf84)][Cf(0x96e)]=!0x1,this[Cf(0xe1a)][Cf(0x96e)]=!0x0):Cf(0x9ff)===this['type']&&(this[Cf(0xf84)][Cf(0x96e)]=!0x0,this['#filter-form'][Cf(0x96e)]=!0x1),this['#search-input']['value']=this.#Tn,this[Cf(0x311)]['endsWith'](Cf(0x936))?(this[Cf(0x101b)][Cf(0xf0a)]=this[Cf(0x311)]['split'](Cf(0x936))[0x0],this['#sort-order-button'][Cf(0x6a2)]=!0x1,this[Cf(0x569)]['value']=Cf(0x936),this['#sort-order-message'][Cf(0xbd9)]='sort.descending',this['#sort-order-icon']['href']=Cf(0x967)):this[Cf(0x311)][Cf(0x1021)](Cf(0xe68))&&(this[Cf(0x101b)][Cf(0xf0a)]=this[Cf(0x311)][Cf(0xc97)](Cf(0xe68))[0x0],this[Cf(0x569)][Cf(0x6a2)]=!0x1,this['#sort-order-button']['value']=Cf(0xe68),this[Cf(0x53d)][Cf(0xbd9)]=Cf(0x762),this[Cf(0x6d5)]['href']=Cf(0x899)),this[Cf(0xe1d)][Cf(0xf0a)]=this.#Pn;}#On(){const Cg=bY;''===this.#Tn?this[Cg(0x451)][Cg(0xf0a)]=this.#Sn:this[Cg(0x451)][Cg(0xf0a)]=[...this.#Sn,Cg(0xbb8)];}#hi(){const Ch=bY;Ch(0x74b)===this.#Pn?(this[Ch(0x10be)][Ch(0x21c)]=!0x0,this['#icons-view'][Ch(0x10f1)]=this[Ch(0x60a)][Ch(0x10f1)],this[Ch(0x10be)][Ch(0x833)]=this['#columns-view'][Ch(0x833)],this[Ch(0x60a)][Ch(0x21c)]=!0x1):Ch(0xc4b)===this.#Pn&&(this[Ch(0x60a)]['enabled']=!0x0,this[Ch(0x60a)]['selectedFiles']=this[Ch(0x10be)][Ch(0x10f1)],this[Ch(0x60a)][Ch(0x833)]=this[Ch(0x10be)][Ch(0x833)],this[Ch(0x10be)][Ch(0x21c)]=!0x1);}#ci(){this.#vo(),this.#Fn();}#vo(){const Cj=bY;'manage'===this[Cj(0x1ce)]?(this['#footer-buttons']['hidden']=!0x0,this['#cancel-button'][Cj(0x96e)]=!0x0,this[Cj(0xcf5)][Cj(0x96e)]=!0x0,this[Cj(0xbba)][Cj(0x96e)]=!0x0):Cj(0x9af)===this[Cj(0x1ce)]?(this[Cj(0x94a)]['hidden']=!0x1,this[Cj(0x4a1)][Cj(0x96e)]=!0x1,this[Cj(0xcf5)]['hidden']=!0x0,this[Cj(0xbba)]['hidden']=!0x1,this['#save-button']['disabled']=''===this['value'][Cj(0x963)]()):Cj(0x9ff)===this['type']&&(this[Cj(0x94a)]['hidden']=!0x1,this[Cj(0x4a1)][Cj(0x96e)]=!0x1,this['#open-button'][Cj(0x96e)]=!0x1,this[Cj(0xcf5)][Cj(0x6a2)]=null===this[Cj(0xf0a)],this[Cj(0xbba)]['hidden']=!0x0);}#Fn(){const Ck=bY;if(Ck(0x4be)===this[Ck(0x1ce)]){let {location:af,search:ag,sort:ah}=this,[aj,ak]=this.#Cn[Ck(0xc77)](af,ag,ah,''!==ag),{selectedFiles:al,selectedFolders:am}=this[Ck(0xbeb)],an=aj[Ck(0x6dc)]+ak['length'],ap=al[Ck(0x6dc)]+am[Ck(0x6dc)],aq='',ar='';aq=0x0===ap?an+Ck(0xaa7):ap+'\x20of\x20'+an+Ck(0x20d);{let au=0x0;if(0x0===ap){for(let av of aj)au+=av[Ck(0xb2e)];for(let aw of ak)au+=this.#Cn[Ck(0xdf2)](aw);}else{for(let ax of al)au+=aj['find'](ay=>ay[Ck(0x4d4)]===ax)[Ck(0xb2e)];for(let ay of am)au+=this.#Cn[Ck(0xdf2)](ay);}ar=fe(au);}this[Ck(0x107b)][Ck(0x96e)]=!0x1,this[Ck(0x107b)]['value']=aq+',\x20'+ar;}else this[Ck(0x107b)][Ck(0x96e)]=!0x0;}}customElements[bY(0x864)](bY(0x561),Ka);class Za extends HTMLElement{static [bY(0x1068)]=['enabled'];static #C=ie` <template> <main id="main"> <div id="previews"></div> <div id="placeholder" hidden> <div id="placeholder-title"></div> <div id="placeholder-description"></div> </div> <div id="rubber-band" part="rubber-band" hidden></div> <div id="ghost" part="ghost"></div> </main> </template>
  `;static #S=se`
    :host {
      width: 100%;
      height: 100%;
      display: none;
      flex-flow: column;
    }
    :host([enabled]) {
      display: flex;
    }
    :host([locked]) {
      opacity: 0.5;
    }
    :host(:focus) {
      outline: none;
    }

    #main {
      flex: 1;
      overflow: auto;
      padding: 16px 16px 0 16px;
      position: relative;
    }
    #main:focus {
      outline: none;
    }

    /* Previews */

    #previews {
      display: flex;
      flex-wrap: wrap;
    }

    #previews > * {
      width: calc(20% - 14px * (4/5));
      margin: 0 14px 14px 0;
    }

    #previews > *:nth-child(5n) {
      margin: 0 0 14px 0;
    }

    /* Placeholder */

    #placeholder {
      height: 100%;
      margin-top: -15px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 1.2;
      user-select: none;
      -webkit-user-select: none;
    }
    #placeholder[hidden] {
      display: none;
    }

    #placeholder-title {
      font-size: 21px;
      font-weight: 700;
      opacity: 0.65;
    }

    #placeholder-description {
      margin-top: 3px;
      opacity: 0.5;
      font-weight: 500;
      font-size: 14px;
    }

    /* Rubber band */

    #rubber-band {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0px;
      height: 0px;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      pointer-events: none;
      background: var(--rubber-band-background-color);
      border-color: var(--rubber-band-border-color);
    }

    /* Ghost */

    #ghost {
      position: absolute;
      padding: 5px 7px 5px 18px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      pointer-events: none;
      width: fit-content;
      transform: translateY(-99999px);
    }
  `;get[bY(0x440)](){return new Promise(af=>{const Cl=a1;this.#Kn[Cl(0xc68)](af);});}get[bY(0x21c)](){return this['hasAttribute']('enabled');}set[bY(0x21c)](af){const Cm=bY;af?this['setAttribute']('enabled',''):this[Cm(0x88e)](Cm(0x21c));}get[bY(0x92c)](){const Cn=bY;return this['hasAttribute'](Cn(0x92c));}set[bY(0x92c)](af){const Cp=bY;af?this[Cp(0xa0a)](Cp(0x92c),''):this[Cp(0x88e)](Cp(0x92c));}get[bY(0x10f1)](){const Cq=bY;return[...this[Cq(0xd45)][Cq(0x44e)](Cq(0x24c))]['map'](af=>af[Cq(0xf0a)]);}set[bY(0x10f1)](af){const Cr=bY;for(let ag of this[Cr(0xd45)]['querySelectorAll'](Cr(0xdff)))ag[Cr(0x958)]=af[Cr(0x1d5)](ag[Cr(0xf0a)]);}get[bY(0x833)](){const Cu=bY;return[...this['#previews'][Cu(0x44e)](Cu(0x9f1))][Cu(0x8fb)](af=>af[Cu(0xf0a)]);}set['selectedFolders'](af){const Cv=bY;for(let ag of this[Cv(0xd45)][Cv(0x44e)](Cv(0x983)))ag[Cv(0x958)]=void 0x0!==af['find'](ah=>q(ah,ag['value']));}#P;#Zn;#Kn;#En;#Yt;#Yn;#Xn;constructor(){const Cw=bY;super(),this.#P=this[Cw(0x1017)]({'mode':Cw(0xc5d)}),this.#P['adoptedStyleSheets']=[a2['themeStyleSheet'],Za.#S],this.#P[Cw(0x775)](document[Cw(0xc3b)](Za.#C['content'],!0x0)),this.#Kn=[];for(let af of this.#P['querySelectorAll'](Cw(0x6e3)))this['#'+af['id']]=af;this[Cw(0x1012)](Cw(0x57f),ag=>this.#ie(ag)),this[Cw(0x21d)][Cw(0x1012)](Cw(0x894),ag=>this.#Jn(ag)),this[Cw(0x21d)][Cw(0x1012)](Cw(0x990),ag=>this.#Qn(ag)),this[Cw(0x21d)][Cw(0x1012)](Cw(0x10b5),ag=>this.#el(ag)),this['#main']['addEventListener'](Cw(0xc98),ag=>this.#tl(ag)),this[Cw(0x21d)][Cw(0x1012)](Cw(0xa2f),ag=>this.#il(ag));}[bY(0x854)](){const Cx=bY;this[Cx(0xbc7)]=0x0,this.#Zn=si(this,Cx(0x561));}[bY(0x83b)](af,ag,ah){const Cy=bY;ag!==ah&&Cy(0x21c)===af&&(this[Cy(0x21c)]?this.#Ot():this.#_t());}#Ot(){const Cz=bY;this.#Zn[Cz(0x34e)][Cz(0x1012)](Cz(0x63b),this.#En=()=>this.#A()),this.#Zn[Cz(0x1012)](Cz(0x828),this.#Yt=()=>this.#ii()),this.#Zn['addEventListener'](Cz(0x9e6),this.#Yn=()=>this.#A()),this.#Zn['addEventListener'](Cz(0x363),this.#Xn=()=>this.#A()),this.#A();}#_t(){const CA=bY;this.#Zn[CA(0x34e)][CA(0xee0)](CA(0x63b),this.#En),this.#Zn[CA(0xee0)](CA(0x828),this.#Yt),this.#Zn[CA(0xee0)](CA(0x9e6),this.#Yn),this.#Zn[CA(0xee0)](CA(0x363),this.#Xn),this['#previews'][CA(0x8c2)]='';}#ii(){const CB=bY;let af=[...this[CB(0x10f1)],...this[CB(0x833)]];this.#A(),af[CB(0x6dc)]>0x0&&this['dispatchEvent'](new CustomEvent(CB(0x100a),{'bubbles':!0x0}));}#Jn(af){const CC=bY;if(this[CC(0x92c)])return;let ag=af[CC(0x779)][CC(0xc06)](CC(0xba8)),ah=[...this[CC(0xd45)][CC(0x44e)]('*')],aj=[...this['#previews'][CC(0x44e)](CC(0x41c))],{ctrl:ak,shift:al}=ui[CC(0xbbe)](af),am=CC(0x4be)===this.#Zn[CC(0x1ce)]&&(!0x0===ak||!0x0===al);if(new DOMPoint(af[CC(0xcec)],af[CC(0xc4a)]),af[CC(0x4db)]<=0x1){if(ag){if(!0x1===am){if(!0x1===ag[CC(0x958)]){for(let an of ah)an[CC(0x958)]=!an[CC(0x6a2)]&&an===ag;this[CC(0x10bf)](new CustomEvent(CC(0x100a),{'bubbles':!0x0}));}}else{if(!0x0===am){for(let ap of ah)ap['disabled']?ap[CC(0x958)]=!0x1:ap===ag&&(ap[CC(0x958)]=!ap['selected']);this[CC(0x10bf)](new CustomEvent(CC(0x100a),{'bubbles':!0x0}));}}}else{if(af['offsetX']<af[CC(0x779)][CC(0x6ca)]){if(aj[CC(0x6dc)]>0x0&&!0x1===al){for(let aq of aj)aq[CC(0x958)]=!0x1;this['dispatchEvent'](new CustomEvent(CC(0x100a),{'bubbles':!0x0}));}CC(0x4be)===this.#Zn['type']&&this.#sl(af);}}}}#Qn(af){const CD=bY;if(this[CD(0x92c)])return;let ag=af['target']['closest']('bx-cloudfilepreview,\x20bx-cloudfolderpreview');!0x1===ag[CD(0x6a2)]&&(CD(0xdff)===ag[CD(0xa31)]?CD(0x4be)===this.#Zn[CD(0x1ce)]?this.#Zn[CD(0xdeb)](ag[CD(0xf0a)],CD(0x38d)):this[CD(0x10bf)](new CustomEvent(CD(0x280),{'bubbles':!0x0})):CD(0x983)===ag[CD(0xa31)]&&this.#Zn[CD(0x908)](ag[CD(0xf0a)]));}async #il(af){const CE=bY;if(af[CE(0x539)](),this[CE(0x92c)]||CE(0x4be)!==this.#Zn[CE(0x1ce)])return;let ag=af[CE(0x779)][CE(0xc06)](CE(0xba8)),ah=[...this[CE(0xd45)]['querySelectorAll']('*')],aj=ah['filter'](ak=>ak[CE(0x958)]);if(ag){if(!0x1===ag[CE(0x958)]){for(let ak of ah)ak['disabled']?ak['selected']=!0x1:ak[CE(0x958)]=ak===ag;this[CE(0x10bf)](new CustomEvent(CE(0x100a),{'bubbles':!0x0}));}}else{if(aj[CE(0x6dc)]>0x0){for(let al of aj)al[CE(0x958)]=!0x1;this['dispatchEvent'](new CustomEvent('selectedchange',{'bubbles':!0x0}));}}null!==ag&&!0x1!==ag[CE(0xfd9)]('editing')||this.#Zn[CE(0x21a)]();}#el(af){const CF=bY;let ag,ah,aj,ak=[...this[CF(0xd45)]['children']],al=ak['filter'](am=>am[CF(0x958)]);af['target'],0x1===al[CF(0x6dc)]?this[CF(0x9d6)]['textContent']=CF(0x104a):this[CF(0x9d6)]['textContent']='Dragging\x20'+al['length']+'\x20items',af[CF(0x555)][CF(0x3ba)]=CF(0xe09),af[CF(0x555)][CF(0x2ad)](this[CF(0x9d6)],0x0,0x0),af[CF(0x555)][CF(0xe22)](CF(0xd58),JSON[CF(0x585)]({'files':this[CF(0x10f1)],'folders':this[CF(0x833)]})),this[CF(0xd45)]['addEventListener'](CF(0xba0),ah=am=>{const CG=CF;if(CG(0x983)===am[CG(0x779)][CG(0xa31)]){if(!0x1===am[CG(0x779)][CG(0x958)]){am[CG(0x539)]();for(let an of ak)an['highlighted']=an===am[CG(0x779)];}}else{for(let ap of ak)ap[CG(0xc47)]=!0x1;}}),this[CF(0xd45)][CF(0x1012)](CF(0xfdf),ag=am=>{const CH=CF;this[CH(0xd45)]['removeEventListener'](CH(0xfdf),ag),this[CH(0xd45)][CH(0xee0)](CH(0xba0),ah),this[CH(0xd45)][CH(0xee0)](CH(0xeec),aj);for(let ap of ak)ap[CH(0xc47)]=!0x1;let an=am[CH(0x779)];CH(0x983)===an?.['localName']&&this.#Zn[CH(0xae8)](an[CH(0xf0a)]);}),this[CF(0xd45)][CF(0x1012)](CF(0xeec),aj=am=>{const CI=CF;this[CI(0xd45)][CI(0xee0)](CI(0xfdf),ag),this[CI(0xd45)][CI(0xee0)]('dragover',ah),this[CI(0xd45)][CI(0xee0)](CI(0xeec),aj);for(let an of ak)an[CI(0xc47)]=!0x1;});}#ie(af){const CJ=bY;if(this[CJ(0x92c)]||!0x1===this[CJ(0xee6)](CJ(0x8e1))||null!==this['#previews'][CJ(0x344)](CJ(0x2a5)))return;let ag=ui[CJ(0xbbe)](af);if(ag[CJ(0xee6)]('Enter')){af['stopPropagation']();let ah=[...this[CJ(0xd45)]['querySelectorAll'](CJ(0x334))];0x1===ah[CJ(0x6dc)]&&ah[0x0][CJ(0x832)]();}else ag[CJ(0xee6)](CJ(0xb84),'A')?this['selectAllPreviews']():ag['matches'](CJ(0x705))?(af['stopPropagation'](),this.#al(CJ(0x9f2))):ag[CJ(0xee6)](CJ(0xd8f))?(af[CJ(0xc67)](),this.#al(CJ(0xccb))):ag[CJ(0xee6)](CJ(0xfe7))?(af['preventDefault'](),af['stopPropagation'](),this.#al('up')):ag['matches'](CJ(0x35e))?(af[CJ(0x539)](),af[CJ(0xc67)](),this.#al('down')):ag[CJ(0xee6)]('Shift',CJ(0x705))?(af['stopPropagation'](),CJ(0x4be)===this.#Zn['type']&&this.#al(CJ(0x9f2),!0x0)):ag[CJ(0xee6)](CJ(0x10b9),CJ(0xd8f))?(af['stopPropagation'](),CJ(0x4be)===this.#Zn[CJ(0x1ce)]&&this.#al(CJ(0xccb),!0x0)):ag['matches'](CJ(0x10b9),'ArrowUp')?(af[CJ(0xc67)](),'manage'===this.#Zn[CJ(0x1ce)]&&(af[CJ(0x539)](),this.#al('up',!0x0))):ag[CJ(0xee6)](CJ(0x10b9),'ArrowDown')&&(af['stopPropagation'](),CJ(0x4be)===this.#Zn[CJ(0x1ce)]&&(af[CJ(0x539)](),this.#al(CJ(0x902),!0x0)));}#tl(af){const CK=bY;let ag=af[CK(0x779)],{oldName:ah,newName:aj}=af[CK(0xdd7)];aj!==ah&&(CK(0xdff)===ag[CK(0xa31)]?this.#Zn[CK(0x28b)](ag[CK(0xf0a)],aj):CK(0x983)===ag['localName']&&this.#Zn[CK(0x38f)](ag[CK(0xf0a)],aj));}#sl(af){const CL=bY;let ag,ah,aj=this[CL(0x21d)][CL(0xf93)](),ak=new DOMPoint(af['clientX'],af['clientY']),al=new DOMPoint(ak['x']-aj['x'],ak['y']-aj['y']),am=new DOMPoint(al['x']+this[CL(0x21d)][CL(0x72b)],al['y']+this[CL(0x21d)][CL(0x269)]),an=[...this['#previews'][CL(0x44e)](CL(0x201))],ap=an[CL(0xe7a)](av=>!0x0===av[CL(0x958)]),aq=Symbol(),ar=Symbol(),au=Symbol();this['setPointerCapture'](af[CL(0x348)]),this['#rubber-band'][CL(0x96e)]=!0x1,this[CL(0x6a3)][CL(0xe90)][CL(0x77e)]=am['y']+'px',this[CL(0x6a3)][CL(0xe90)]['left']=am['x']+'px',this[CL(0x6a3)][CL(0xe90)][CL(0xee8)]='0px',this[CL(0x6a3)][CL(0xe90)]['height']=CL(0xdb9);for(let av of an){let aw=av[CL(0xf93)](),ax=new DOMRect(aw['x']-aj['x'],aw['y']-aj['y'],aw['width'],aw['height']),ay=new DOMRect(ax['x']+this[CL(0x21d)][CL(0x72b)],ax['y']+this[CL(0x21d)][CL(0x269)],ax[CL(0xee8)],ax[CL(0x1046)]);av[aq]=aw,av[ar]=ax,av[au]=ay;}this['addEventListener'](CL(0x985),ag=az=>{const CM=CL;let aA=new DOMPoint(az[CM(0xcec)],az[CM(0xc4a)]),aB=new DOMPoint(aA['x']-aj['x'],aA['y']-aj['y']),aC=new DOMPoint(aB['x']+this[CM(0x21d)][CM(0x72b)],aB['y']+this[CM(0x21d)][CM(0x269)]),aD=new DOMRect();aC['x']=M(aC['x'],0x0,this['#main'][CM(0xd7e)]),aC['y']=M(aC['y'],0x0,this[CM(0x21d)][CM(0x378)]),aC['x']<am['x']?(aD['x']=aC['x'],aD[CM(0xee8)]=am['x']-aC['x']):(aD['x']=am['x'],aD['width']=aC['x']-am['x']),aC['y']<am['y']?(aD['y']=aC['y'],aD[CM(0x1046)]=am['y']-aC['y']):(aD['y']=am['y'],aD[CM(0x1046)]=aC['y']-am['y']);let aE=new DOMRect(aj['x']+aD['x']-this['#main'][CM(0x72b)],aj['y']+aD['y']-this[CM(0x21d)][CM(0x269)],aD[CM(0xee8)],aD['height']);if(this['#rubber-band'][CM(0xe90)][CM(0x9f2)]=aD['x']+'px',this[CM(0x6a3)]['style'][CM(0x77e)]=aD['y']+'px',this[CM(0x6a3)]['style'][CM(0xee8)]=aD[CM(0xee8)]+'px',this[CM(0x6a3)]['style'][CM(0x1046)]=aD[CM(0x1046)]+'px',aC['y']>this[CM(0x21d)][CM(0x269)]+this[CM(0x21d)]['clientHeight']){let aF=aC['y']-(this[CM(0x21d)][CM(0x269)]+this[CM(0x21d)]['clientHeight']);this[CM(0x21d)][CM(0x269)]+=aF;}else{if(aC['y']<this[CM(0x21d)]['scrollTop']){let aG=aC['y']-this[CM(0x21d)][CM(0x269)];this[CM(0x21d)][CM(0x269)]+=aG;}}{let aH=[];for(let aI of an){let aJ=aI[au];Ot(aD,aJ)&&aH[CM(0xc68)](aI);}if(aH=aH[CM(0xe7a)](aK=>{const CN=CM;let aL=aK[au];return aM=aD,(aN=aL)['x']>=aM['x']&&aN['y']>=aM['y']&&aN['x']+aN[CN(0xee8)]<=aM['x']+aM['width']&&aN['y']+aN[CN(0x1046)]<=aM['y']+aM['height']||aK['hitTest'](aE);var aM,aN;}),af[CM(0x989)]){for(let aK of an)aH[CM(0x1d5)](aK)?aK['selected']=!ap[CM(0x1d5)](aK):aK[CM(0x958)]=ap[CM(0x1d5)](aK);}else{for(let aL of an)aL[CM(0x958)]=aH[CM(0x1d5)](aL);}}}),this[CL(0x1012)](CL(0xae0),ah=az=>{const CO=CL;this[CO(0xee0)]('pointermove',ag),this[CO(0xee0)](CO(0xae0),ah),this[CO(0xee0)](CO(0x905),ah);let aA=an[CO(0xe7a)](aB=>!0x0===aB[CO(0x958)]);!0x1===q(ap,aA)&&this['dispatchEvent'](new CustomEvent(CO(0x100a),{'bubbles':!0x0})),this[CO(0x6a3)][CO(0x96e)]=!0x0;}),this[CL(0x1012)](CL(0x905),ah);}[bY(0x453)](){const CP=bY;let af=[...this[CP(0xd45)][CP(0x44e)](CP(0x201))][CP(0xe7a)](ag=>!0x1===ag[CP(0x958)]);if(af[CP(0x6dc)]>0x0){for(let ag of af)ag[CP(0x958)]=!0x0;this[CP(0x10bf)](new CustomEvent('selectedchange',{'bubbles':!0x0}));}}#al(af,ag=!0x1){const CQ=bY;let ah=[...this[CQ(0xd45)]['querySelectorAll'](CQ(0x201))],aj=[...this[CQ(0xd45)][CQ(0x44e)](':scope\x20>\x20*[selected]')];if(CQ(0x9f2)===af){let ak=aj[CQ(0x6dc)]>0x0?aj[0x0]:null;if(ak){let al=ak;if(ak[CQ(0x926)]?.[CQ(0xe6c)]===ak[CQ(0xe6c)]&&(al=ak[CQ(0x926)]),!0x1===ag){for(let am of ah)am===al?(am['selected']=!0x0,am[CQ(0x467)]()):am['selected']=!0x1;this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}else al['selected']=!0x0,al[CQ(0x467)](),this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}else{let an=this['#previews'][CQ(0x9ed)];an&&(an[CQ(0x958)]=!0x0,an[CQ(0x467)](),this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0})));}}else{if(CQ(0xccb)===af){let ap=aj['length']>0x0?aj[aj['length']-0x1]:null;if(ap){let aq=ap;if(ap['nextElementSibling']?.[CQ(0xe6c)]===ap['offsetTop']&&(aq=ap[CQ(0xbd8)]),!0x1===ag){for(let ar of ah)ar===aq?(ar[CQ(0x958)]=!0x0,ar[CQ(0x467)]()):ar[CQ(0x958)]=!0x1;this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}else aq['selected']=!0x0,aq[CQ(0x467)](),this['dispatchEvent'](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}else{let au=this['#previews']['firstElementChild'];au&&(au[CQ(0x958)]=!0x0,au[CQ(0x467)](),this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0})));}}else{if('up'===af){let av=aj[CQ(0x6dc)]>0x0?aj[0x0]:null;if(av){let aw=av;for(let ax=av[CQ(0x926)];null!==ax;ax=ax[CQ(0x926)])if(ax[CQ(0xe26)]===av[CQ(0xe26)]){aw=ax;break;}if(!0x1===ag){for(let ay of ah)ay===aw?(ay['selected']=!0x0,ay[CQ(0x467)]()):ay[CQ(0x958)]=!0x1;this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}else{for(let az=av[CQ(0x926)];null!==az;az=az[CQ(0x926)])if(az[CQ(0x958)]=!0x0,az===aw){az[CQ(0x467)]();break;}this[CQ(0x10bf)](new CustomEvent('selectedchange',{'bubbles':!0x0}));}}else{let aA=this[CQ(0xd45)][CQ(0x9ed)];aA&&(aA['selected']=!0x0,aA[CQ(0x467)](),this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0})));}}else{if('down'===af){let aB=aj[CQ(0x6dc)]>0x0?aj[aj['length']-0x1]:null;if(aB){let aC=aB;for(let aD=aB['nextElementSibling'];null!==aD&&!(aD[CQ(0xe6c)]>aB[CQ(0xe6c)]&&(aC=aD,aD['offsetLeft']===aB[CQ(0xe26)]));aD=aD[CQ(0xbd8)]);if(!0x1===ag){for(let aE of ah)aE===aC?(aE['selected']=!0x0,aE[CQ(0x467)]()):aE[CQ(0x958)]=!0x1;this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}else{for(let aF=aB[CQ(0xbd8)];null!==aF;aF=aF[CQ(0xbd8)])if(aF['selected']=!0x0,aF===aC){aF['scrollIntoViewIfNeeded']();break;}this['dispatchEvent'](new CustomEvent(CQ(0x100a),{'bubbles':!0x0}));}}else{let aG=this[CQ(0xd45)][CQ(0xe5b)];aG&&(aG[CQ(0x958)]=!0x0,aG['scrollIntoViewIfNeeded'](),this[CQ(0x10bf)](new CustomEvent(CQ(0x100a),{'bubbles':!0x0})));}}}}}}[bY(0x4fd)](){const CR=bY;let af=this['#previews']['querySelector']('*[selected]');af&&af[CR(0x832)]();}#A(){const CS=bY;let {location:af,search:ag,sort:ah}=this.#Zn,{selectedFiles:aj,selectedFolders:ak}=this,al=this.#Zn[CS(0x34e)],[am,an]=al[CS(0xc77)](af,ag,ah,''!==ag);this[CS(0xd45)][CS(0x8c2)]='';for(let ap of an){let aq=ie`<bx-cloudfolderpreview class="preview"></bx-cloudfolderpreview>`;aq[CS(0xf0a)]=ap,CS(0x4be)===this.#Zn[CS(0x1ce)]?(aq[CS(0x387)]=!0x0,aq[CS(0x6a2)]=!0x1):(CS(0x9ff)===this.#Zn[CS(0x1ce)]||'save'===this.#Zn[CS(0x1ce)])&&(aq[CS(0x387)]=!0x1,aq[CS(0x6a2)]=!0x1);for(let ar of ak)q(ar,ap,!0x0)&&(aq[CS(0x958)]=!0x0);this[CS(0xd45)][CS(0x775)](aq);}for(let au of am){let {uid:av,name:aw,library:ax,path:ay}=au,az=ie`<bx-cloudfilepreview class="preview"></bx-cloudfilepreview>`;az['value']=av,az[CS(0xce8)]=aw,az[CS(0xa1e)]=CS(0xcf1)!==ax,CS(0x4be)===this.#Zn['type']?(az[CS(0x387)]=!0x0,az[CS(0x6a2)]=!0x1):CS(0x9ff)===this.#Zn[CS(0x1ce)]?(az[CS(0x387)]=!0x1,az[CS(0x6a2)]=!0x1):CS(0x9af)===this.#Zn[CS(0x1ce)]&&(az[CS(0x387)]=!0x1,az[CS(0x6a2)]=!0x0),aj[CS(0x1d5)](av)&&(az[CS(0x958)]=!0x0),this[CS(0xd45)][CS(0x775)](az);}if(this[CS(0xae5)][CS(0x96e)]=am[CS(0x6dc)]>0x0||an[CS(0x6dc)]>0x0,''===ag?!0x1===this.#Zn[CS(0x34e)][CS(0x878)]?(this[CS(0xb1a)][CS(0xad6)]='',this[CS(0x3c7)][CS(0xad6)]=''):this.#Zn[CS(0x106f)][CS(0x6dc)]>0x0?(this[CS(0xb1a)]['textContent']=CS(0x85c),this['#placeholder-description']['textContent']='There\x20are\x20no\x20files\x20in\x20this\x20folder'):(this[CS(0xb1a)]['textContent']=CS(0x85c),this['#placeholder-description'][CS(0xad6)]=CS(0x3ea)):(this[CS(0xb1a)][CS(0xad6)]=CS(0x85c),this[CS(0x3c7)]['textContent']=CS(0x5bd)),this.#Kn[CS(0x6dc)]>0x0){for(let aA of this.#Kn)aA();this.#Kn=[];}}}customElements[bY(0x864)](bY(0x96b),Za);class Ya extends HTMLElement{static [bY(0x1068)]=[bY(0x21c)];static #C=ie` <template> <main id="main"></main> </template>
  `;static #S=se`
    :host {
      width: 100%;
      height: 100%;
      display: none;
      flex-flow: column;
    }
    :host([enabled]) {
      display: flex;
    }
    :host([locked]) {
      opacity: 0.5;
    }
    :host(:focus) {
      outline: none;
    }

    #main {
      flex: 1;
      overflow: auto;
      background: #f8f8f8;
      padding: 16px 16px 0 16px;
    }
    #main:focus {
      outline: none;
    }
  `;get[bY(0x21c)](){const CT=bY;return this[CT(0xfd9)](CT(0x21c));}set[bY(0x21c)](af){const CU=bY;af?this['setAttribute'](CU(0x21c),''):this['removeAttribute']('enabled');}get[bY(0x92c)](){const CV=bY;return this[CV(0xfd9)]('locked');}set['locked'](af){const CW=bY;af?this[CW(0xa0a)](CW(0x92c),''):this[CW(0x88e)](CW(0x92c));}get[bY(0x10f1)](){return this.#ol;}set[bY(0x10f1)](af){this.#ol=af;}get[bY(0x833)](){return this.#nl;}set[bY(0x833)](af){this.#nl=af;}#Zn;#P;#En;#Yt;#Yn;#ol=[];#nl=[];constructor(){const CX=bY;super(),this.#P=this[CX(0x1017)]({'mode':'closed'}),this.#P[CX(0x48f)]=[a2[CX(0x500)],Ya.#S],this.#P[CX(0x775)](document['importNode'](Ya.#C[CX(0x223)],!0x0));for(let af of this.#P[CX(0x44e)]('[id]'))this['#'+af['id']]=af;}[bY(0x854)](){const CY=bY;this[CY(0xbc7)]=0x0,this.#Zn=si(this,'bx-cloudbrowser');}[bY(0x83b)](af,ag,ah){const CZ=bY;ag!==ah&&CZ(0x21c)===af&&(this[CZ(0x21c)]?this.#Ot():this.#_t());}#Ot(){const D0=bY;this.#Zn[D0(0x34e)]['addEventListener'](D0(0x63b),this.#En=()=>this.#A()),this.#Zn[D0(0x1012)](D0(0x828),this.#Yt=()=>this.#A()),this.#Zn[D0(0x1012)](D0(0x9e6),this.#Yn=()=>this.#A()),this.#A();}#_t(){const D1=bY;this.#Zn[D1(0x34e)][D1(0xee0)](D1(0x63b),this.#En),this.#Zn[D1(0xee0)](D1(0x828),this.#Yt),this.#Zn[D1(0xee0)](D1(0x9e6),this.#Yn),this['#main'][D1(0x8c2)]='';}#A(){}}customElements['define'](bY(0xc76),Ya);class Xa extends HTMLElement{static #C=ie` <template> <div id="backdrop" part="backdrop"></div> <img id="image" part="image"> </template>
  `;static #S=se`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      contain: strict;
      z-index: 1;
    }
    :host([open]) {
      display: block;
    }

    #backdrop {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #image {
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      margin: 0;
      transform-origin: 0 0;
      will-change: transform;
      box-sizing: border-box;
      background: var(--checkboard-background);
      border-width: 1px;
      border-style: solid;
      cursor: zoom-out;
    }
  `;get[bY(0x9ff)](){const D2=bY;return this['hasAttribute'](D2(0x9ff));}#T;#P;#ll;#rl;#hl;#cl;#dl;#ul;#ys;constructor(){super();}[bY(0x854)](){const D3=bY;if(this.#T=si(this,'#app'),this.#ll=!0x1,!this.#P){this.#P=this[D3(0x1017)]({'mode':D3(0xc5d)}),this.#P[D3(0x48f)]=[a2['themeStyleSheet'],Xa.#S],this.#P[D3(0x775)](document['importNode'](Xa.#C[D3(0x223)],!0x0));for(let af of this.#P[D3(0x44e)]('[id]'))this['#'+af['id']]=af;this.#P[D3(0x1012)](D3(0xff9),ag=>{this.#Xe(ag);});}}async[bY(0xd44)](af){const D4=bY;this.#rl=af;let ag,ah,{naturalWidth:aj,naturalHeight:ak}=af,al=af[D4(0xf93)]();this[D4(0xaf8)]['src']=af[D4(0xe44)],this['setAttribute'](D4(0x9ff),''),window['addEventListener']('scroll',this.#cl=()=>this.#L(event)),window['addEventListener'](D4(0x6f9),this.#dl=()=>this.#pl()),window[D4(0x1012)](D4(0x57f),this.#ul=()=>this.#ie(event)),this.#T[D4(0x1012)](D4(0x828),this.#ys=()=>this['close']());{let am=0x14,an=document['documentElement'][D4(0x855)]-document[D4(0xe3d)][D4(0x6ca)];this.#T[D4(0x6ca)]<this.#T[D4(0x98d)]()[D4(0x10bd)](D4(0xef5))[D4(0xf0a)]&&(an=0x0),ag=new DOMRect(am,am,window['innerWidth']-0x2*am-an,window[D4(0x2d1)]-0x2*am),ag[D4(0xee8)]>aj&&(ag['x']=window['innerWidth']/0x2-aj/0x2,ag['width']=aj),ag['height']>ak&&(ag['y']=window[D4(0x2d1)]/0x2-ak/0x2,ag[D4(0x1046)]=ak);}{let ap=ag[D4(0xee8)]/al['width'],aq=ag[D4(0x1046)]/al[D4(0x1046)];ap>aq?ap=aq:aq>ap&&(aq=ap);let ar=ag['x']-al['x']*ap,au=ag['y']-al['y']*aq;ar+=(ag[D4(0xee8)]-al[D4(0xee8)]*ap)/0x2,au+=(ag[D4(0x1046)]-al[D4(0x1046)]*aq)/0x2;let av=new DOMMatrix();av[D4(0x44c)](ar,au),av[D4(0xfc2)](ap,aq),ah=Rt(al,av);}{let aw=new DOMRect(0x0,0x0,aj,ak),ax=dt(aw,al),ay=dt(aw,ah);this[D4(0x5bc)]['style']['opacity']=0x1,this[D4(0xaf8)][D4(0xe90)][D4(0xee8)]=aj+'px',this['#image'][D4(0xe90)][D4(0x1046)]=ak+'px',this[D4(0xaf8)][D4(0xe90)][D4(0xf95)]=ay[D4(0xd23)]();let az=this[D4(0xaf8)][D4(0xf63)]({'transform':[ax[D4(0xd23)](),ay[D4(0xd23)]()]},{'duration':0xc8,'easing':'ease-out'}),aA=this[D4(0x5bc)][D4(0xf63)]({'opacity':[0x0,0x1]},{'duration':0xc8,'easing':D4(0x25c)});await Promise['all']([az[D4(0xff3)],aA[D4(0xff3)]]);}}async[bY(0x225)](){const D5=bY;if(this.#hl)return;let {naturalWidth:af,naturalHeight:ag}=this.#rl,ah=this[D5(0xaf8)][D5(0xf93)](),aj=this.#rl[D5(0xf93)]();window['removeEventListener']('scroll',this.#cl),window[D5(0xee0)]('resize',this.#dl),window[D5(0xee0)](D5(0x57f),this.#ul),this.#T[D5(0xee0)](D5(0x828),this.#ys);{let ak=new DOMRect(0x0,0x0,af,ag),al=dt(ak,ah),am=dt(ak,aj);this[D5(0x5bc)][D5(0xe90)][D5(0x83a)]=0x0,this['#image'][D5(0xe90)]['transform']=null;let an=this[D5(0xaf8)][D5(0xf63)]({'transform':[al[D5(0xd23)](),am[D5(0xd23)]()]},{'duration':0xc8,'easing':D5(0x91e)}),ap=this[D5(0x5bc)]['animate']({'opacity':[0x1,0x0]},{'duration':0xc8,'easing':D5(0x91e)});this.#hl=Promise[D5(0x3b9)]([an[D5(0xff3)],ap[D5(0xff3)]]),await this.#hl,this.#hl=null;}this[D5(0xaf8)][D5(0xe44)]='',this[D5(0x88e)](D5(0x9ff));}#Xe(af){const D6=bY;this[D6(0x225)](),this[D6(0x10bf)](new CustomEvent(D6(0x225)));}#L(af){this['close']();}#pl(){const D7=bY;this[D7(0x225)]();}#ie(af){const D8=bY;let ag=ui['fromEvent'](af);(ag[D8(0xee6)](D8(0xab8))||ag[D8(0xee6)](D8(0xe73)))&&(af[D8(0xc67)](),this[D8(0x225)]());}}void 0x0===customElements[bY(0x10bd)](bY(0x4f5))&&customElements[bY(0x864)](bY(0x4f5),Xa);const Ja=[0x1,0x0,0x0,0x1,0x0,0x0],Qa=[0.001,0x0,0x0,0.001,0x0,0x0],eo=0x3e9,to=bY(0x450),io=bY(0xac3),so='normal',ao=0x0,oo=0x1,no=0x2,lo=0x7,ro=0x3,ho=0x4,co=[bY(0xf69),'round',bY(0xd66)],uo=[bY(0x865),bY(0xbf4),bY(0xb4f)];class po{#ml={};#xl={'clip':0x0,'mask':0x0,'shading':0x0};#gl=null;#bl=Object[bY(0x532)](null);#fl=null;#wl=null;constructor(af){this.#gl=af;}[bY(0xb00)](af=!0x0,ag=!0x0){return new Promise(async ah=>{const D9=a1;this.#ml[D9(0xd4b)]=await import(D9(0xab6)),this.#ml[D9(0xf6b)]=(await import('/libs/upng/upng.js'))['default'];let aj=await this.#ml[D9(0xd4b)][D9(0xd1f)]({'data':this.#gl,'disableFontFace':ag,'fontExtraProperties':!0x0,'standardFontDataUrl':D9(0x7e5),'isOffscreenCanvasSupported':!0x0})[D9(0xedc)],ak=ei(D9(0x1005));ak[D9(0xa0a)](D9(0x6a1),D9(0x895)),this.#fl=ei(D9(0x4bb)),ak['append'](this.#fl);let al=0x0;for(let am=0x1;am<=aj[D9(0xcb8)];am+=0x1){let an=await aj['getPage'](am);this[D9(0xc86)]=null,this[D9(0xbbd)]=await an[D9(0x4d7)](),this[D9(0xa7e)]=an[D9(0x874)]({'scale':0x1}),this[D9(0x10e7)]=new mo(),this[D9(0x9bb)]=Ja,this[D9(0x612)]=[],this['extraStack']=[],this['commonObjs']=an['commonObjs'],this['objs']=an[D9(0x925)],this['pendingClip']=null,this['pendingEOFill']=!0x1;{let ap=[];for(let ar=0x0,au=this[D9(0xbbd)][D9(0x10ea)][D9(0x6dc)];ar<au;ar++)if(this[D9(0xbbd)][D9(0x10ea)][ar]===this.#ml['PDF']['OPS'][D9(0x1076)])for(let av of this[D9(0xbbd)][D9(0x25e)][ar]){let aw=av[D9(0x9ae)]('g_')?this[D9(0xffe)]:this[D9(0x925)],ax=new Promise(ay=>aw[D9(0x10bd)](av,ay));ap[D9(0xc68)](ax);}let aq=await Promise[D9(0x3b9)](ap);for(let ay of aq)if(ay[D9(0x5c3)]){let az=new OffscreenCanvas(ay[D9(0x5c3)][D9(0xee8)],ay[D9(0x5c3)]['height']),aA=az[D9(0x5c5)]('2d');aA['drawImage'](ay[D9(0x5c3)],0x0,0x0);let aB=aA[D9(0x892)](0x0,0x0,az[D9(0xee8)],az[D9(0x1046)]),aC=this.#ml[D9(0xf6b)]['encode']([aB[D9(0x3ab)][D9(0x34c)]],aB[D9(0xee8)],aB[D9(0x1046)],0x0),aD=new Uint8Array(aC),aE=new Blob([aD],{'type':D9(0xa42)}),aF=await me(aE);ay[D9(0xcee)]=aF;}}{let aG=ei(D9(0xb9e));if(aG[D9(0xa0a)](D9(0xa5b),D9(0xc85)+am),ak[D9(0x775)](aG),this[D9(0xf14)]=aG,this[D9(0x9bb)]=Ja,this.#vl(wo(this[D9(0xbbd)],this.#ml[D9(0xd4b)][D9(0x654)])),0x1===am){ak[D9(0xa0a)]('width',this[D9(0xa7e)][D9(0xee8)]+'px'),ak[D9(0xa0a)]('height',this[D9(0xa7e)][D9(0x1046)]+'px'),ak[D9(0xa0a)](D9(0x100d),D9(0x6e2)+this[D9(0xa7e)][D9(0xee8)]+'\x20'+this[D9(0xa7e)][D9(0x1046)]);let aH=new DOMMatrix(this[D9(0xa7e)][D9(0xf95)]);aG['setAttribute'](D9(0xf95),aH[D9(0xd23)]());}else{let aI=new DOMMatrix(this['viewport']['transform']);if(aI=new DOMMatrix()[D9(0x46b)](0x0,al)[D9(0xbb9)](aI),aG[D9(0xa0a)]('transform',aI[D9(0xd23)]()),af){let aJ=ei(D9(0x701));aJ[D9(0xa0a)](D9(0x100d),'0\x20'+al+'\x20'+this[D9(0xa7e)]['width']+'\x20'+this[D9(0xa7e)][D9(0x1046)]),this.#fl[D9(0x775)](aJ);}}al+=this[D9(0xa7e)][D9(0x1046)]+0x14;}}if(ag){let aK=ak['querySelector'](D9(0x571)),aL=[...ak[D9(0x44e)]('text')];if(aL[D9(0x6dc)]>0x0){let aM=new Qe(ak);for(let aN of aL)await Ct(aN);aM[D9(0x4fa)]();}aK&&aK[D9(0x102a)]();}ah(ak);});}#vl(af){const Db=bY;let ag=this.#ml['PDF'][Db(0x654)];for(let ah of af){let aj=ah[Db(0xa32)];switch(0x0|ah[Db(0xfd0)]){case ag[Db(0x1076)]:break;case ag['setLineWidth']:this.#yl(aj[0x0]);break;case ag[Db(0x7ef)]:this.#kl(aj[0x0]);break;case ag[Db(0x851)]:this.#Cl(aj[0x0]);break;case ag['setMiterLimit']:this.#Sl(aj[0x0]);break;case ag[Db(0x7bf)]:this.#Tl(aj[0x0],aj[0x1]);break;case ag[Db(0xdb3)]:this.#$l(aj[0x0]);break;case ag[Db(0x391)]:this.#Pl(aj[0x0]);break;case ag[Db(0x38a)]:this.#El(aj[0x0]);break;case ag[Db(0x9af)]:case ag[Db(0x7d0)]:break;case ag[Db(0xf95)]:this.#Ll(aj[0x0],aj[0x1],aj[0x2],aj[0x3],aj[0x4],aj[0x5]);break;case ag[Db(0x10ce)]:this.#Ul();break;case ag[Db(0x5cd)]:this.#Dl();break;case ag[Db(0xa57)]:this.#zl();break;case ag['fill']:this.#Ml();break;case ag['eoFill']:this.#Al();break;case ag[Db(0xd06)]:this.#Bl();break;case ag['eoFillStroke']:this.#Rl();break;case ag[Db(0x71a)]:this.#Il();break;case ag[Db(0xcb7)]:this.#Fl();break;case ag[Db(0xb07)]:this.#Nl();break;case ag['clip']:this.#Ol('nonzero');break;case ag['eoClip']:this.#Ol('evenodd');break;case ag[Db(0xe6a)]:this.#_l();break;case ag[Db(0x8c3)]:this.#ql();break;case ag[Db(0xfba)]:this.#jl(aj[0x0]);break;case ag[Db(0x8ff)]:this.#Vl(aj[0x0]);break;case ag['setHScale']:this.#Gl(aj[0x0]);break;case ag[Db(0x6d7)]:this.#Hl(aj);break;case ag[Db(0xd79)]:this.#Wl(aj);break;case ag[Db(0xd24)]:this.#Kl(aj[0x0]);break;case ag[Db(0x8d3)]:this.#Zl(aj[0x0]);break;case ag['moveText']:this.#Yl(aj[0x0],aj[0x1]);break;case ag[Db(0x3da)]:this.#Xl(aj[0x0],aj[0x1]);break;case ag[Db(0xa5c)]:this.#Jl(aj[0x0],aj[0x1],aj[0x2],aj[0x3],aj[0x4],aj[0x5]);break;case ag[Db(0x2c0)]:this.#Ql();break;case ag[Db(0x641)]:case ag[Db(0x104e)]:this.#er(aj[0x0]);break;case ag[Db(0x335)]:console['warn'](Db(0xa6e));break;case ag[Db(0xf81)]:console[Db(0xed5)](Db(0x4f3));break;case ag[Db(0xaf6)]:console['warn']('Unimplemented\x20operator:\x20setCharWidth');break;case ag[Db(0x2e9)]:console[Db(0xed5)](Db(0x7f6));break;case ag[Db(0xe0d)]:console[Db(0xed5)](Db(0x79b));break;case ag[Db(0x553)]:console[Db(0xed5)](Db(0xb69));break;case ag[Db(0x486)]:console[Db(0xed5)](Db(0x8a5));break;case ag[Db(0xecf)]:this.#tr(aj);break;case ag[Db(0xf1f)]:console['warn'](Db(0x827));break;case ag[Db(0x43a)]:this.#ir(aj);break;case ag[Db(0xc13)]:console[Db(0xed5)](Db(0xc17));break;case ag[Db(0xc3c)]:console[Db(0xed5)](Db(0x3e2));break;case ag[Db(0xa61)]:this.#sr(aj[0x0],aj[0x1],aj[0x2]);break;case ag['setFillRGBColor']:this.#ar(aj[0x0],aj[0x1],aj[0x2]);break;case ag[Db(0x69a)]:console[Db(0xed5)](Db(0x91c));break;case ag['setFillCMYKColor']:console[Db(0xed5)]('Unimplemented\x20operator:\x20setFillCMYKColor');break;case ag[Db(0xead)]:this.#or(aj[0x0]);break;case ag['beginInlineImage']:console['warn'](Db(0x43d));break;case ag[Db(0x436)]:console['warn']('Unimplemented\x20operator:\x20beginImageData');break;case ag[Db(0xe7c)]:console['warn']('Unimplemented\x20operator:\x20endInlineImage');break;case ag['paintXObject']:console[Db(0xed5)](Db(0x4e7));break;case ag[Db(0xd34)]:console[Db(0xed5)](Db(0xf97));break;case ag[Db(0x52d)]:console[Db(0xed5)](Db(0x352));break;case ag[Db(0x1d8)]:console[Db(0xed5)]('Unimplemented\x20operator:\x20beginMarkedContent');break;case ag['beginMarkedContentProps']:console[Db(0xed5)](Db(0xf83));break;case ag[Db(0xff0)]:console['warn']('Unimplemented\x20operator:\x20endMarkedContent');break;case ag['beginCompat']:console['warn'](Db(0x9ca));break;case ag[Db(0x4c1)]:console['warn'](Db(0x720));break;case ag[Db(0x315)]:this.#nr(aj[0x0],aj[0x1]);break;case ag[Db(0x8fc)]:this.#lr();break;case ag[Db(0xf73)]:console['warn'](Db(0x4a0));break;case ag[Db(0xc8a)]:console['warn'](Db(0xac2));break;case ag[Db(0x8b9)]:console[Db(0xed5)]('Unimplemented\x20operator:\x20beginAnnotation');break;case ag[Db(0x298)]:console['warn'](Db(0x817));break;case ag['paintImageMaskXObject']:this.#rr(aj[0x0]);break;case ag[Db(0x214)]:console['warn'](Db(0xc94));break;case ag[Db(0xb72)]:this.#hr(aj[0x0]);break;case ag['paintInlineImageXObject']:this.#cr(aj[0x0]);break;case ag[Db(0x2f4)]:console[Db(0xed5)](Db(0x350));break;case ag[Db(0xc0e)]:console[Db(0xed5)](Db(0x6a0));break;case ag[Db(0x576)]:console[Db(0xed5)](Db(0x984));break;case ag[Db(0xab5)]:this.#dr();break;case ag['constructPath']:this.#ur(aj[0x0],aj[0x1]);break;case eo:this.#pr(ah[Db(0xea4)]);break;default:console['warn'](Db(0x220)+ah['fn']);}}}#yl(af){af>0x0&&(this['current']['lineWidth']=af);}#kl(af){const Dc=bY;this[Dc(0x10e7)]['lineCap']=co[af];}#Cl(af){const Dd=bY;this['current'][Dd(0x5c6)]=uo[af];}#Sl(af){this['current']['miterLimit']=af;}#Tl(af,ag){const Df=bY;this[Df(0x10e7)]['dashArray']=af,this[Df(0x10e7)][Df(0x9ea)]=ag;}#$l(af){}#Pl(af){}#El(af){const Dg=bY;for(let [ag,ah]of af)switch(ag){case'LW':this.#yl(ah);break;case'LC':this.#kl(ah);break;case'LJ':this.#Cl(ah);break;case'ML':this.#Sl(ah);break;case'D':this.#Tl(ah[0x0],ah[0x1]);break;case'RI':this.#$l(ah);break;case'FL':this.#Pl(ah);break;case'Font':this.#Wl(ah);break;case'CA':this.#mr(ah);break;case'ca':this.#xr(ah);break;default:console[Dg(0xed5)](Dg(0x45a)+ag);}}#Ll(af,ag,ah,aj,ak,al){const Dh=bY;let {transform:am}=this.#ml[Dh(0xd4b)][Dh(0x8d1)];this[Dh(0x9bb)]=am(this[Dh(0x9bb)],[af,ag,ah,aj,ak,al]),this['tgrp']=null;}#Ul(){const Dj=bY;let af=this[Dj(0x10e7)];if(af[Dj(0xb87)]){let ag=af[Dj(0xb87)][Dj(0xc51)]('d')+'Z';af['path'][Dj(0xa0a)]('d',ag);}}#Dl(){const Dk=bY;let af=this[Dk(0x10e7)];af[Dk(0x554)]&&(this.#gr(af[Dk(0x554)]),af[Dk(0x554)][Dk(0xe90)][Dk(0x687)](Dk(0x1057),'none'),this.#Nl());}#zl(){this.#Ul(),this.#Dl();}#Ml(){const Dl=bY;let af=this[Dl(0x10e7)];af[Dl(0x554)]&&(af[Dl(0x554)]['style'][Dl(0x687)](Dl(0x1057),af['fillColor']),af['element'][Dl(0xe90)]['setProperty']('fill-opacity',af[Dl(0xc8e)]),this.#Nl());}#Al(){const Dm=bY;this[Dm(0x10e7)][Dm(0x554)]?.['style'][Dm(0x687)](Dm(0xbf1),'evenodd'),this.#Ml();}#Bl(){this.#Dl(),this.#Ml();}#Rl(){const Dn=bY;this[Dn(0x10e7)][Dn(0x554)]?.[Dn(0xe90)][Dn(0x687)](Dn(0xbf1),Dn(0x4c4)),this.#Bl();}#Il(){this.#Ul(),this.#Bl();}#Fl(){this.#Ul(),this.#Rl();}#Nl(){const Do=bY;let af=this[Do(0x10e7)];if(af[Do(0xb87)]=null,!this[Do(0x999)])return;if(!af[Do(0x554)])return void(this['pendingClip']=null);let ag=Do(0x9dd)+this.#xl[Do(0xe1b)]++,ah=ei(Do(0xcc3));ah[Do(0xa0a)]('id',ag),ah['setAttribute']('transform',go(this[Do(0x9bb)]));let aj=af[Do(0x554)]['cloneNode'](!0x0);if('evenodd'===this[Do(0x999)]?aj['style'][Do(0x687)](Do(0x2e6),Do(0x4c4)):aj[Do(0xe90)][Do(0x687)](Do(0x2e6),Do(0x26d)),this[Do(0x999)]=null,ah[Do(0x775)](aj),this.#fl[Do(0x775)](ah),af[Do(0x6d6)]){af[Do(0xb2f)]=null;for(let ak of this[Do(0xa93)])ak['clipGroup']=null;ah[Do(0xe90)][Do(0x687)](Do(0x941),af['activeClipUrl']);}af[Do(0x6d6)]='url(#'+ag+')',this[Do(0xc86)]=null;}#_l(){const Dp=bY;let af=this[Dp(0x10e7)];af['x']=af[Dp(0xbed)]=0x0,af['y']=af['lineY']=0x0,af[Dp(0x664)]=Ja,af[Dp(0xd2a)]=Ja,af[Dp(0x513)]=0x1,af[Dp(0x514)]=ei(Dp(0xd69)),af[Dp(0x226)]=ei('svg:text'),af[Dp(0xa21)]=ei(Dp(0xb9e)),af[Dp(0x750)]=[],af[Dp(0x711)]=[];}#ql(){const Dq=bY;let af=this[Dq(0x10e7)];af[Dq(0x4bf)]&ho&&af['txtElement']?.[Dq(0xd46)]()&&(af[Dq(0x554)]=af[Dq(0x226)],this.#Ol(Dq(0x26d)),this.#Nl());}#jl(af){const Dr=bY;this['current'][Dr(0x78d)]=af;}#Vl(af){const Du=bY;this['current'][Du(0x9c7)]=af;}#Gl(af){const Dv=bY;this[Dv(0x10e7)][Dv(0xc9d)]=af/0x64;}#Hl(af){const Dw=bY;this[Dw(0x10e7)][Dw(0xae4)]=-af;}#Wl(af){const Dx=bY;let ag=this[Dx(0x10e7)],ah=this[Dx(0xffe)]['get'](af[0x0]),aj=af[0x1],ak=Dx(0xac3),al=Dx(0xac3);if(ag[Dx(0x7f9)]=ah,!ah[Dx(0x3e0)]&&!this.#bl[ah['loadedName']]){this.#wl||(this.#wl=ei(Dx(0x838)),this.#wl[Dx(0xa0a)](Dx(0x1ce),Dx(0xe28)),this.#wl['setAttribute']('id',Dx(0x27b)),this.#fl[Dx(0x775)](this.#wl));let am=fo(ah['data'],ah[Dx(0xc3e)]);this.#wl['textContent']+='@font-face\x20{\x20font-family:\x20\x22'+ah[Dx(0x548)]+'\x22;\x20src:\x20url('+am+');\x20}\x0a',this.#bl[ah[Dx(0x548)]]=ah;}ag['fontMatrix']=ah[Dx(0xbc9)]||Qa,ah[Dx(0x55a)]?ak='900':ah[Dx(0xbcf)]&&(ak=Dx(0xbcf)),ah['italic']&&(al='italic'),aj<0x0?(aj=-aj,ag['fontDirection']=-0x1):ag[Dx(0xc10)]=0x1,ag[Dx(0x6bd)]=aj,ag[Dx(0x7a6)]=ah[Dx(0x548)],ag['fontWeight']=ak,ag[Dx(0x6e1)]=al,ag['tspan']=ei(Dx(0xd69)),ag[Dx(0x514)]['setAttribute']('y',xo(-ag['y'])),ag['xcoords']=[],ag[Dx(0x711)]=[];}#Kl(af){const Dy=bY;this[Dy(0x10e7)][Dy(0x4bf)]=af;}#Zl(af){const Dz=bY;this['current'][Dz(0x674)]=af;}#Yl(af,ag){const DA=bY;let ah=this['current'];ah['x']=ah[DA(0xbed)]+=af,ah['y']=ah[DA(0xd09)]+=ag,ah[DA(0x750)]=[],ah[DA(0x711)]=[],ah[DA(0x514)]=ei(DA(0xd69)),ah[DA(0x514)]['style'][DA(0x687)](DA(0x783),ah[DA(0x7a6)]),ah[DA(0x514)][DA(0xe90)][DA(0x687)](DA(0x285),xo(ah[DA(0x6bd)])+'px'),ah[DA(0x514)][DA(0xa0a)]('y',xo(-ah['y']));}#Xl(af,ag){this.#Hl(-ag),this.#Yl(af,ag);}#Jl(af,ag,ah,aj,ak,al){const DB=bY;let am=this[DB(0x10e7)];am[DB(0x664)]=am['lineMatrix']=[af,ag,ah,aj,ak,al],am['textMatrixScale']=Math[DB(0xd01)](af,ag),am['x']=am[DB(0xbed)]=0x0,am['y']=am[DB(0xd09)]=0x0,am[DB(0x750)]=[],am[DB(0x711)]=[],am[DB(0x514)]=ei(DB(0xd69)),am[DB(0x514)][DB(0xe90)][DB(0x687)](DB(0x783),am[DB(0x7a6)]),am[DB(0x514)][DB(0xe90)][DB(0x687)](DB(0x285),xo(am['fontSize'])+'px'),am['tspan'][DB(0xa0a)]('y',xo(-am['y'])),am[DB(0x226)]=ei(DB(0x51a)),am['txtElement'][DB(0x775)](am[DB(0x514)]);}#Ql(){const DC=bY;this.#Yl(0x0,this[DC(0x10e7)][DC(0xae4)]);}#er(af){const DD=bY;let ag=this[DD(0x10e7)],ah=ag[DD(0x7f9)],aj=ag[DD(0x6bd)];if(0x0===aj)return;let {fontSizeScale:ak,charSpacing:al,wordSpacing:am,fontDirection:an}=ag,{vertical:ap,defaultVMetrics:aq}=ah,ar=ap?0x1:-0x1,au=aj*ag['fontMatrix'][0x0],av=ag[DD(0xc9d)]*an,aw=0x0;for(let az of af){if(null===az){aw+=an*am;continue;}if('number'==typeof az){aw+=ar*az*aj/0x3e8;continue;}let aA,aB,aC=(az[DD(0x538)]?am:0x0)+al,aD=az[DD(0x707)],aE=az[DD(0xee8)];if(ap){let aF,aG=az[DD(0x89f)]||aq;aF=az[DD(0x89f)]?aG[0x1]:0.5*aE,aF=-aF*au;let aH=aG[0x2]*au;aE=aG?-aG[0x0]:aE,aA=aF/ak,aB=(aw+aH)/ak;}else aA=aw/ak,aB=0x0;(az[DD(0x9d9)]||ah[DD(0x3e0)])&&(ag['xcoords'][DD(0xc68)](ag['x']+aA),ap&&ag[DD(0x711)][DD(0xc68)](-ag['y']+aB),ag[DD(0x514)][DD(0xad6)]+=aD),aw+=ap?aE*au-aC*an:aE*au+aC*an;}ag[DD(0x514)][DD(0xa0a)]('x',ag[DD(0x750)][DD(0x8fb)](xo)[DD(0xf5e)]('\x20')),ap?ag[DD(0x514)]['setAttribute']('y',ag[DD(0x711)][DD(0x8fb)](xo)['join']('\x20')):ag[DD(0x514)][DD(0xa0a)]('y',xo(-ag['y'])),ap?ag['y']-=aw:ag['x']+=aw*av,ag['tspan'][DD(0xe90)]['setProperty'](DD(0x783),ag[DD(0x7a6)]),ag['tspan'][DD(0xe90)][DD(0x687)](DD(0x285),xo(ag[DD(0x6bd)])+'px'),ag[DD(0x6e1)]!==io&&ag[DD(0x514)]['style'][DD(0x687)](DD(0x59f),ag[DD(0x6e1)]),ag[DD(0x921)]!==so&&ag[DD(0x514)][DD(0xe90)][DD(0x687)]('font-weight',ag['fontWeight']);let ax=ag[DD(0x4bf)]&ro;if(ax===ao||ax===no?(ag['fillColor']!==to&&ag[DD(0x514)]['style'][DD(0x687)](DD(0x1057),ag[DD(0x210)]),ag[DD(0xc8e)]<0x1&&ag[DD(0x514)]['style']['setProperty'](DD(0xf36),ag[DD(0xc8e)])):ag[DD(0x4bf)]===lo?ag[DD(0x514)][DD(0xe90)]['setProperty']('fill',DD(0xec3)):ag[DD(0x514)][DD(0xe90)][DD(0x687)](DD(0x1057),'none'),ax===oo||ax===no){let aI=0x1/(ag['textMatrixScale']||0x1);this.#gr(ag[DD(0x514)],aI);}let ay=ag[DD(0x664)];0x0!==ag[DD(0x674)]&&(ay=ay['slice'](),ay[0x5]+=ag[DD(0x674)]),ag[DD(0x226)][DD(0xa0a)](DD(0xf95),go(ay)+DD(0xc1d)+xo(av)+',\x20-1)'),ag[DD(0x226)][DD(0xe90)][DD(0x687)](DD(0x5bf),DD(0xc54)),ag[DD(0x226)]['append'](ag[DD(0x514)]),ag[DD(0xa21)][DD(0x775)](ag[DD(0x226)]),this.#br()[DD(0x775)](ag[DD(0x226)]);}#tr(af){const DE=bY;'TilingPattern'===af[0x0]?this['current'][DE(0x4fb)]=this.#fr(af):this[DE(0x10e7)][DE(0x4fb)]=this.#wr(af);}#ir(af){const DF=bY;'TilingPattern'===af[0x0]?this[DF(0x10e7)]['fillColor']=this.#fr(af):this[DF(0x10e7)]['fillColor']=this.#wr(af);}#sr(af,ag,ah){const DG=bY;this[DG(0x10e7)]['strokeColor']=bo(af,ag,ah);}#ar(af,ag,ah){const DH=bY;this['current'][DH(0x210)]=bo(af,ag,ah),this['current'][DH(0x514)]=ei(DH(0xd69)),this[DH(0x10e7)][DH(0x750)]=[],this[DH(0x10e7)][DH(0x711)]=[];}#or(af){const DI=bY;let {width:ag,height:ah}=this[DI(0xa7e)],aj=this.#ml[DI(0xd4b)]['Util'][DI(0x78c)](this['transformMatrix']),[ak,al,am,an]=this.#ml[DI(0xd4b)]['Util'][DI(0x912)]([0x0,0x0,ag,ah],aj),ap=ei(DI(0xf05));ap[DI(0xa0a)]('x',ak),ap['setAttribute']('y',al),ap['setAttribute'](DI(0xee8),am-ak),ap[DI(0xa0a)]('height',an-al),ap[DI(0xe90)]['setProperty'](DI(0x1057),this.#wr(af)),this[DI(0x10e7)][DI(0xc8e)]<0x1&&ap[DI(0xe90)][DI(0x687)]('fill-opacity',this[DI(0x10e7)]['fillAlpha']),this.#br()[DI(0x775)](ap);}#nr(af,ag){const DJ=bY;if(Array[DJ(0x5fb)](af)&&0x6===af[DJ(0x6dc)]&&this.#Ll(af[0x0],af[0x1],af[0x2],af[0x3],af[0x4],af[0x5]),ag){let ah=ag[0x2]-ag[0x0],aj=ag[0x3]-ag[0x1],ak=ei(DJ(0xf05));ak[DJ(0xa0a)]('x',ag[0x0]),ak['setAttribute']('y',ag[0x1]),ak[DJ(0xa0a)](DJ(0xee8),xo(ah)),ak['setAttribute'](DJ(0x1046),xo(aj)),this[DJ(0x10e7)][DJ(0x554)]=ak,this.#Ol(DJ(0x26d)),this.#Nl();}}#lr(){}#rr(af){const DK=bY;let ag;ag=DK(0xf26)==typeof af[DK(0x3ab)]?af['data']['startsWith']('g_')?this[DK(0xffe)][DK(0x10bd)](af[DK(0x3ab)]):this[DK(0x925)]['get'](af[DK(0x3ab)]):af;let ah=this[DK(0x10e7)],aj=ag[DK(0xee8)],ak=ag['height'],al=ah[DK(0x210)];ah[DK(0x3cd)]=DK(0x51c)+this.#xl[DK(0x51c)]++;let am=ei(DK(0xf3a));am[DK(0xa0a)]('id',ah[DK(0x3cd)]);let an=ei(DK(0xf05));an[DK(0xa0a)]('x','0'),an[DK(0xa0a)]('y','0'),an[DK(0xa0a)]('width',xo(aj)),an[DK(0xa0a)](DK(0x1046),xo(ak)),an[DK(0xe90)][DK(0x687)](DK(0x1057),al),an[DK(0xe90)]['setProperty'](DK(0x51c),DK(0x24b)+ah['maskId']+')'),this.#fl[DK(0x775)](am),this.#br()[DK(0x775)](an),this.#cr(ag,am);}#hr(af){const DL=bY;let ag=null;DL(0xf26)==typeof af&&(ag=af[DL(0x9ae)]('g_')?this[DL(0xffe)][DL(0x10bd)](af):this[DL(0x925)]['get'](af)),ag?this.#cr(ag):console[DL(0xed5)](DL(0xc9a)+af+DL(0x518));}#cr(af,ag){const DM=bY;let ah=af[DM(0xee8)],aj=af[DM(0x1046)],ak=af[DM(0xcee)],al=ei(DM(0xf05));al[DM(0xa0a)]('x','0'),al[DM(0xa0a)]('y','0'),al[DM(0xa0a)](DM(0xee8),xo(ah)),al[DM(0xa0a)](DM(0x1046),xo(aj)),this[DM(0x10e7)][DM(0x554)]=al,this.#Ol('nonzero');let am=ei('svg:image');am[DM(0xa0a)]('href',ak),am[DM(0xa0a)]('x','0'),am[DM(0xa0a)]('y',xo(-aj)),am[DM(0xa0a)](DM(0xee8),xo(ah)+'px'),am[DM(0xa0a)]('height',xo(aj)+'px'),am[DM(0xa0a)](DM(0xf95),DM(0x455)+xo(0x1/ah)+'\x20'+xo(-0x1/aj)+')'),ag?ag['append'](am):this.#br()['append'](am);}#dr(){const DN=bY;let af=ei('svg:rect');af['setAttribute']('x','0'),af[DN(0xa0a)]('y','0'),af['setAttribute']('width',DN(0x4b1)),af[DN(0xa0a)](DN(0x1046),DN(0x4b1)),af[DN(0xe90)]['setProperty']('fill',this[DN(0x10e7)][DN(0x210)]),this.#br()['append'](af);}#ur(af,ag){const DO=bY;let ah=this.#ml[DO(0xd4b)][DO(0x654)],aj=this[DO(0x10e7)],ak=aj['x'],al=aj['y'],am=[],an=0x0;for(let ap of af)switch(0x0|ap){case ah['rectangle']:ak=ag[an++],al=ag[an++];let aq=ak+ag[an++],ar=al+ag[an++];am[DO(0xc68)]('M',xo(ak),xo(al),'L',xo(aq),xo(al),'L',xo(aq),xo(ar),'L',xo(ak),xo(ar),'Z');break;case ah[DO(0xe03)]:ak=ag[an++],al=ag[an++],am[DO(0xc68)]('M',xo(ak),xo(al));break;case ah[DO(0xe3f)]:ak=ag[an++],al=ag[an++],am['push']('L',xo(ak),xo(al));break;case ah['curveTo']:ak=ag[an+0x4],al=ag[an+0x5],am['push']('C',xo(ag[an]),xo(ag[an+0x1]),xo(ag[an+0x2]),xo(ag[an+0x3]),xo(ak),xo(al)),an+=0x6;break;case ah[DO(0xe12)]:am[DO(0xc68)]('C',xo(ak),xo(al),xo(ag[an]),xo(ag[an+0x1]),xo(ag[an+0x2]),xo(ag[an+0x3])),ak=ag[an+0x2],al=ag[an+0x3],an+=0x4;break;case ah[DO(0xf4e)]:ak=ag[an+0x2],al=ag[an+0x3],am[DO(0xc68)]('C',xo(ag[an]),xo(ag[an+0x1]),xo(ak),xo(al),xo(ak),xo(al)),an+=0x4;break;case ah[DO(0x10ce)]:am[DO(0xc68)]('Z');}am=am[DO(0xf5e)]('\x20'),aj[DO(0xb87)]&&af[DO(0x6dc)]>0x0&&af[0x0]!==ah[DO(0x31b)]&&af[0x0]!==ah[DO(0xe03)]?am=aj['path'][DO(0xc51)]('d')+am:(aj['path']=ei('svg:path'),this.#br()[DO(0x775)](aj[DO(0xb87)])),aj[DO(0xb87)]['setAttribute']('d',am),aj[DO(0xb87)][DO(0xe90)][DO(0x687)]('fill','none'),aj[DO(0x554)]=aj[DO(0xb87)],aj['setCurrentPoint'](ak,al);}#pr(af){const DP=bY;{this[DP(0x612)][DP(0xc68)](this[DP(0x9bb)]);let ag=this[DP(0x10e7)];this['extraStack']['push'](ag),this[DP(0x10e7)]=ag[DP(0xe04)]();}this.#vl(af),this[DP(0x9bb)]=this['transformStack'][DP(0x3ff)](),this[DP(0x10e7)]=this[DP(0xa93)][DP(0x3ff)](),this[DP(0x999)]=null,this[DP(0xc86)]=null;}#mr(af){const DQ=bY;this[DQ(0x10e7)]['strokeAlpha']=af;}#xr(af){const DR=bY;this[DR(0x10e7)][DR(0xc8e)]=af;}#fr(af){const DS=bY;let {applyTransform:ag,normalizeRect:ah}=this.#ml[DS(0xd4b)][DS(0x8d1)],aj=af[0x1],ak=af[0x2],al=af[0x3]||Ja,[am,an,ap,aq]=af[0x4],ar=af[0x5],au=af[0x6],av=af[0x7],aw='shading'+this.#xl[DS(0x377)]++,[ax,ay,az,aA]=ah([...ag([am,an],al),...ag([ap,aq],al)]),[aB,aC]=this.#ml[DS(0xd4b)]['Util'][DS(0xe57)](al),aD=ar*aB,aE=au*aC,aF=ei(DS(0x630));aF[DS(0xa0a)]('id',aw),aF[DS(0xa0a)](DS(0x429),DS(0xc1c)),aF['setAttribute']('width',aD),aF['setAttribute'](DS(0x1046),aE),aF[DS(0xa0a)]('x',''+ax),aF[DS(0xa0a)]('y',''+ay);let aG=this[DS(0xf14)],aH=this['transformMatrix'],aI=this[DS(0x10e7)][DS(0x210)],aJ=this[DS(0x10e7)][DS(0x4fb)],aK=ei(DS(0x1005));if(aK['setAttribute'](DS(0xee8),az-ax+'px'),aK[DS(0xa0a)]('height',aA-ay+'px'),aK['setAttribute'](DS(0x100d),DS(0x6e2)+(az-ax)+'\x20'+(aA-ay)),this['containerElement']=aK,this['transformMatrix']=al,0x2===av){let aL=bo(...aj);this[DS(0x10e7)][DS(0x210)]=aL,this[DS(0x10e7)][DS(0x4fb)]=aL;}return this.#vl(wo(ak,this.#ml['PDF'][DS(0x654)])),this[DS(0xf14)]=aG,this['transformMatrix']=aH,this[DS(0x10e7)][DS(0x210)]=aI,this[DS(0x10e7)][DS(0x4fb)]=aJ,aF['append'](aK[DS(0x2bd)][0x0]),this.#fl[DS(0x775)](aF),'url(#'+aw+')';}#wr(af){const DT=bY;switch('string'==typeof af&&(af=this[DT(0x925)][DT(0x10bd)](af)),af[0x0]){case DT(0x428):let ag,ah=DT(0x377)+this.#xl[DT(0x377)]++,aj=af[0x3];switch(af[0x1]){case DT(0x6bc):let ak=af[0x4],al=af[0x5];ag=ei(DT(0x103f)),ag[DT(0xa0a)]('id',ah),ag[DT(0xa0a)](DT(0xf43),'userSpaceOnUse'),ag[DT(0xa0a)]('x1',ak[0x0]),ag[DT(0xa0a)]('y1',ak[0x1]),ag['setAttribute']('x2',al[0x0]),ag['setAttribute']('y2',al[0x1]);break;case DT(0x4b8):let am=af[0x4],an=af[0x5],ap=af[0x6],aq=af[0x7];ag=ei(DT(0x668)),ag[DT(0xa0a)]('id',ah),ag[DT(0xa0a)](DT(0xf43),DT(0xc1c)),ag[DT(0xa0a)]('cx',an[0x0]),ag[DT(0xa0a)]('cy',an[0x1]),ag['setAttribute']('r',aq),ag[DT(0xa0a)]('fx',am[0x0]),ag[DT(0xa0a)]('fy',am[0x1]),ag[DT(0xa0a)]('fr',ap);break;default:throw new Error('Unknown\x20RadialAxial\x20type:\x20'+af[0x1]);}for(let ar of aj){let au=ei(DT(0x724));au[DT(0xa0a)](DT(0x6fd),ar[0x0]),au[DT(0xe90)][DT(0x687)]('stop-color',ar[0x1]),ag['append'](au);}return this.#fl[DT(0x775)](ag),DT(0x24b)+ah+')';case DT(0xe4c):return console[DT(0xed5)](DT(0x2e0)),null;case DT(0x2e7):return DT(0xf6e);default:throw new Error(DT(0x9b9)+af[0x0]);}}#Ol(af){this['pendingClip']=af;}#vr(){const DU=bY;if(!this['current'][DU(0xb2f)]){let af=ei('svg:g');af[DU(0xe90)][DU(0x687)]('clip-path',this[DU(0x10e7)][DU(0x6d6)]),this[DU(0xf14)][DU(0x775)](af),this[DU(0x10e7)]['clipGroup']=af;}return this[DU(0x10e7)]['clipGroup'];}#br(){const DV=bY;return this[DV(0xc86)]||(this[DV(0xc86)]=ei(DV(0xb9e)),this[DV(0xc86)][DV(0xa0a)](DV(0xf95),go(this[DV(0x9bb)])),this['current']['activeClipUrl']?this.#vr()[DV(0x775)](this['tgrp']):this[DV(0xf14)][DV(0x775)](this[DV(0xc86)])),this['tgrp'];}#gr(af,ag=0x1){const DW=bY;let ah=this['current'],aj=ah['dashArray'];0x1!==ag&&aj[DW(0x6dc)]>0x0&&(aj=aj[DW(0x8fb)](ak=>ag*ak)),af[DW(0xe90)][DW(0x687)](DW(0x5cd),ah['strokeColor']),af['style'][DW(0x687)](DW(0xbca),ah[DW(0x9da)]),af[DW(0xe90)][DW(0x687)](DW(0x4e9),xo(ah[DW(0xc14)])),af['style']['setProperty'](DW(0xea8),ah[DW(0xb35)]),af[DW(0xe90)][DW(0x687)]('stroke-linejoin',ah[DW(0x5c6)]),af['style'][DW(0x687)](DW(0x524),xo(ag*ah[DW(0xdf9)])+'px'),af[DW(0xe90)]['setProperty'](DW(0x73d),aj['map'](xo)['join']('\x20')),af[DW(0xe90)][DW(0x687)]('stroke-dashoffset',xo(ag*ah[DW(0x9ea)])+'px');}}class mo{constructor(){const DX=bY;this[DX(0x211)]=0x1,this[DX(0x921)]=so,this[DX(0x6bd)]=0x0,this[DX(0x664)]=Ja,this[DX(0xbc9)]=Qa,this[DX(0xae4)]=0x0,this[DX(0x4bf)]=ao,this[DX(0x513)]=0x1,this['x']=0x0,this['y']=0x0,this[DX(0xbed)]=0x0,this[DX(0xd09)]=0x0,this[DX(0x78d)]=0x0,this[DX(0x9c7)]=0x0,this[DX(0xc9d)]=0x1,this[DX(0x674)]=0x0,this['fillColor']=to,this['strokeColor']='#000000',this['fillAlpha']=0x1,this[DX(0x9da)]=0x1,this[DX(0xdf9)]=0x1,this['lineJoin']='',this['lineCap']='',this[DX(0xc14)]=0x0,this[DX(0x782)]=[],this[DX(0x9ea)]=0x0,this[DX(0x6d6)]=null,this[DX(0xb2f)]=null,this[DX(0x3cd)]='';}[bY(0xe04)](){const DY=bY;return Object[DY(0x532)](this);}[bY(0x55c)](af,ag){this['x']=af,this['y']=ag;}}let xo=af=>{const DZ=bY;if(Number['isInteger'](af))return af['toString']();let ag=af[DZ(0x95f)](0xa),ah=ag[DZ(0x6dc)]-0x1;if('0'!==ag[ah])return ag;do{ah--;}while('0'===ag[ah]);return ag[DZ(0xe2d)](0x0,'.'===ag[ah]?ah:ah+0x1);},go=af=>{const E0=bY;if(0x0===af[0x4]&&0x0===af[0x5]){if(0x0===af[0x1]&&0x0===af[0x2])return 0x1===af[0x0]&&0x1===af[0x3]?'':'scale('+xo(af[0x0])+'\x20'+xo(af[0x3])+')';if(af[0x0]===af[0x3]&&af[0x1]===-af[0x2]){let ag=0xb4*Math[E0(0x1074)](af[0x0])/Math['PI'];return E0(0xf45)+xo(ag)+')';}}else{if(0x1===af[0x0]&&0x0===af[0x1]&&0x0===af[0x2]&&0x1===af[0x3])return E0(0x108b)+xo(af[0x4])+'\x20'+xo(af[0x5])+')';}return E0(0x1080)+xo(af[0x0])+'\x20'+xo(af[0x1])+'\x20'+xo(af[0x2])+'\x20'+xo(af[0x3])+'\x20'+xo(af[0x4])+'\x20'+xo(af[0x5])+')';},bo=(af,ag,ah)=>new A('srgb',[af/0xff,ag/0xff,ah/0xff])[bY(0xd23)]({'format':bY(0xe16)}),fo=(af,ag='')=>{const E1=bY;let ah='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',aj=E1(0x696)+ag+E1(0xd51);for(let ak=0x0,al=af[E1(0x6dc)];ak<al;ak+=0x3){let am=0xff&af[ak],an=0xff&af[ak+0x1],ap=0xff&af[ak+0x2];aj+=ah[am>>0x2]+ah[(0x3&am)<<0x4|an>>0x4]+ah[ak+0x1<al?(0xf&an)<<0x2|ap>>0x6:0x40]+ah[ak+0x2<al?0x3f&ap:0x40];}return aj;},wo=(af,ag)=>{const E2=bY;let ah=[];{let ak=[];for(let an in ag)ak[ag[an]]=an;let al=af[E2(0x25e)],am=af[E2(0x10ea)];for(let ap=0x0,aq=am[E2(0x6dc)];ap<aq;ap++){let ar=am[ap];ah[E2(0xc68)]({'fnId':ar,'fn':ak[ar],'args':al[ap]});}}let aj=[];{let au=[];for(let av of ah)E2(0x9af)!==av['fn']?E2(0x7d0)===av['fn']?aj=au[E2(0x3ff)]():aj['push'](av):(aj['push']({'fnId':eo,'fn':E2(0x622),'items':[]}),au[E2(0xc68)](aj),aj=aj['at'](-0x1)['items']);}return aj;};const vo=[bY(0x256),'mouseenter','mouseleave',bY(0x68d),bY(0xe2a),bY(0x6cc),bY(0x468),'pointerover',bY(0x848),bY(0x894),bY(0x985),bY(0xae0),bY(0xeb0),'pointerleave','keydown','keyup',bY(0x5ae),'click',bY(0x8a6),bY(0x218),'compositionstart',bY(0x1055),bY(0x104d)];class yo extends HTMLElement{get[bY(0x8c6)](){return new DOMPoint(this.#yr,this.#kr);}get[bY(0x939)](){return this.#Cr;}get[bY(0x7c3)](){return this.#Sr;}get[bY(0x9c4)](){return[...this.#Tr];}get[bY(0x511)](){let {ctrl:af,alt:ag,meta:ah,shift:aj}=this.#$r;return{'ctrl':af,'alt':ag,'meta':ah,'shift':aj};}get[bY(0x6b9)](){return this.#Pr;}get[bY(0x6aa)](){return this.#Er;}get[bY(0x30d)](){return this.#Lr;}#yr=0x0;#kr=0x0;#Cr=0x0;#Sr=0x0;#Tr=new Set();#Ur=[];#Dr=null;#$r={'ctrl':!0x1,'alt':!0x1,'meta':!0x1,'shift':!0x1};#Pr=!0x1;#zr;#Er=!0x1;#Lr=!0x1;constructor(){const E3=bY;super(),this.#Lr=void 0x0!==window['FileSystemFileHandle']?.['prototype'][E3(0x9fb)]&&void 0x0!==window[E3(0x7c5)];}[bY(0x854)](){const E4=bY;window['addEventListener'](E4(0x894),af=>this.#Ye(af),!0x0),window['addEventListener'](E4(0x985),af=>this.#Mr(af)),window['addEventListener'](E4(0xae0),af=>this.#Ar(af)),window[E4(0x1012)]('pointercancel',af=>this.#Br(af)),window['addEventListener']('dragover',af=>this.#bn(af)),window[E4(0x1012)](E4(0x57f),af=>this.#ie(af)),window['addEventListener'](E4(0x5ed),af=>this.#Rr(af)),window[E4(0x1012)](E4(0x72c),af=>this.#Ir(af)),window['addEventListener'](E4(0x842),af=>this.#Fr(af)),window[E4(0x1012)]('drop',af=>this.#fn(af)),window[E4(0xf2d)]('(display-mode:\x20standalone)')[E4(0x359)](af=>this.#Nr()),this['addEventListener'](E4(0xb22),()=>this.#Pr=!0x0),this[E4(0x1012)](E4(0xaaf),()=>this.#Pr=!0x1);}[bY(0x9db)](af,ag=null){const E5=bY;let ah=this[E5(0x21d)][E5(0xe5b)];for(;ah[E5(0x355)]?.['activeElement'];)ah=ah[E5(0x355)][E5(0xf52)];for(let aj=ah;aj;aj=aj[E5(0x858)]||aj['host'])if(aj['commands']?.[af]){let ak=aj[E5(0x301)][af];if(ak){let al=!ak[E5(0x21c)]||ak[E5(0x21c)]();if(!0x0===al){ak[E5(0xd1a)](ag);break;}if(!0x1===al)break;if(null===al)continue;}}}[bY(0xc4c)](af){const E6=bY;let ag=this[E6(0x21d)][E6(0xe5b)];for(;ag[E6(0x355)]?.[E6(0xf52)];)ag=ag[E6(0x355)][E6(0xf52)];for(let ah=ag;ah;ah=ah[E6(0x858)]||ah[E6(0x1da)])if(ah[E6(0x301)]?.[af]){let aj=ah[E6(0x301)][af];if(aj){if(!aj['enabled']||aj[E6(0x21c)]())return!0x0;break;}}return!0x1;}[bY(0x4af)](af){const E7=bY;let ag=this[E7(0x21d)][E7(0xe5b)];for(;ag[E7(0x355)]?.['activeElement'];)ag=ag[E7(0x355)][E7(0xf52)];for(let ah=ag;ah;ah=ah['parentNode']||ah[E7(0x1da)])if(ah[E7(0x301)]?.[af]){let aj=ah[E7(0x301)][af];if(aj){if(!0x0===aj['toggled']?.())return!0x0;break;}}return!0x1;}[bY(0xb52)](){const E8=bY;if(!this.#zr){this.#zr={},this[E8(0xe90)]['pointerEvents']=E8(0xcf1);for(let af of vo)window[E8(0x1012)](af,this.#zr[af]=ag=>{const E9=E8;ag[E9(0xa2d)](),ag[E9(0x539)]();},!0x0);}}[bY(0xdf3)](){const Eb=bY;if(this.#zr){for(let [af,ag]of Object[Eb(0x2b6)](this.#zr))window[Eb(0xee0)](af,ag,!0x0);this.#zr=null,this[Eb(0xe90)][Eb(0x1e5)]=null;}}[bY(0x21a)](af,ag=!0x0){return new Promise(async ah=>{const Ed=a1;let aj,ak,al='',am=null,an=ar=>{const Ec=a1;let au;if('separator'===ar[Ec(0x1ce)])au=Ec(0x7cf);else{let av=void 0x0!==ar[Ec(0xf0a)]?Ec(0x735)+ar[Ec(0xf0a)]+'\x22':'',aw=ar[Ec(0x42a)]?Ec(0x42a):'',ax=ar[Ec(0x6a2)]?Ec(0x6a2):'',ay=ar[Ec(0x65b)]?.['href']?Ec(0x907)+ar[Ec(0x65b)]['href']+'\x22':'',az=ar[Ec(0x65b)]?.[Ec(0x5e7)]?'autocapitalize':'',aA=ar[Ec(0x65b)]?.[Ec(0x784)]?Ec(0x784):'',aB='';ar['message']?.['args']&&(aB=Ec(0x764)+Object[Ec(0x414)](ar['message'][Ec(0xa32)])['map'](aD=>aD+':\x20'+ar[Ec(0x65b)][Ec(0xa32)][aD])[Ec(0xf5e)](',\x20')+'\x22');let aC='';if(ar['children']){aC+='<x-menu>';for(let aD of ar[Ec(0x573)])aC+=an(aD);aC+=Ec(0x4b4);}au='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-menuitem\x20'+av+'\x20'+aw+'\x20'+ax+Ec(0x1013)+ay+'\x20'+aB+'\x20'+az+'\x20'+aA+'></x-message>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+aC+Ec(0x9f9);}return au;};for(let ar of af)al+=an(ar);let ap=ie`<x-contextmenu id="context-menu" disabled><x-menu>${al}</x-menu></x-contextmenu>`,aq=this[Ed(0x355)][Ed(0x344)](Ed(0x362));aq?aq[Ed(0x775)](ap):this[Ed(0x355)][Ed(0x775)](ap),await it(0xa),ap[Ed(0x9ff)](this[Ed(0x8c6)]['x'],this[Ed(0x8c6)]['y']),ap[Ed(0x1012)]('click',aj=async au=>{const Ef=Ed;let av=au[Ef(0x779)][Ef(0xc06)](Ef(0x65f));if(av&&(am=av[Ef(0xf0a)],av[Ef(0xf0a)]?.['startsWith'](Ef(0x1cd)))){let [,aw]=av[Ef(0xf0a)][Ef(0xc97)](':');await av[Ef(0x794)],ag&&this['execCommand'](aw);}}),ap[Ed(0x1012)](Ed(0x225),ak=async au=>{const Eg=Ed;au[Eg(0x779)]===ap[Eg(0xe5b)]&&(ap['removeEventListener'](Eg(0xff9),aj),ap[Eg(0xee0)]('close',ak),await it(0x12c),ap[Eg(0x102a)](),ah(am));});});}[bY(0x31c)](){return new Promise(async af=>{const Eh=a1;let ag=null;if(!0x0===this[Eh(0x30d)]){let ah=null;try{ah=(await window[Eh(0x7c5)]({'types':[{'description':Eh(0xde4),'accept':{'image/*':[Eh(0x99a),Eh(0xa7b),Eh(0xdb0),Eh(0xd68),Eh(0x247),Eh(0x6c8),Eh(0x481),Eh(0xa5a)],'application/pdf':['.pdf'],'application/illustrator':['.ai']}},{'description':Eh(0x62b),'accept':{'image/svg+xml':[Eh(0x481),'.svgz']}},{'description':Eh(0x759),'accept':{'image/png':['.png']}},{'description':Eh(0x2f9),'accept':{'image/jpeg':['.jpg','.jpeg']}},{'description':'GIF','accept':{'image/gif':['.gif']}},{'description':Eh(0xd21),'accept':{'image/webp':[Eh(0x247)]}},{'description':Eh(0xe6d),'accept':{'image/avif':[Eh(0x6c8)]}},{'description':'PDF','accept':{'application/pdf':[Eh(0xf7d)]}},{'description':'AI','accept':{'application/illustrator':[Eh(0xcd8)]}}]}))[0x0]||null;}catch(aj){console[Eh(0xe1f)](aj);}ah&&(ag=await ah[Eh(0xfc7)]());}else ag=await new Promise(ak=>{const Ej=Eh;let al=ie`<input type="file" accept=".svg,.svgz,.png,.jpg,.jpeg,.gif,.webp,.avif,.pdf,.ai"/>`;al['click'](),al[Ej(0x1012)](Ej(0x63b),am=>{const Ek=Ej;ak(am[Ek(0x779)]['files'][0x0]||null);},{'once':!0x0});});if(ag){let ak=be(ag),al=ge(ag),am=ag[Eh(0xce8)],an=null;an=Eh(0xdae)===al||Eh(0xd07)===al||''===al?await pe(ag,Eh(0x7a7)):'pdf'===al||'ai'===al?await pe(ag,'arrayBuffer'):await pe(ag,Eh(0xcee)),af({'baseName':ak,'extension':al,'path':am,'data':an});}});}[bY(0xd3b)](){return new Promise(async af=>{const El=a1;let ag=[];if(!0x0===this[El(0x30d)]){let aj=null;try{aj=await window['showOpenFilePicker']({'multiple':!0x0,'types':[{'description':El(0xc2e),'accept':{'font/*':[El(0xdd5),'.woff2',El(0xfb9),'.otf']}},{'description':El(0x9b4),'accept':{'font/woff':[El(0xdd5)]}},{'description':El(0x92a),'accept':{'font/woff2':[El(0x7f1)]}},{'description':El(0x893),'accept':{'font/ttf':[El(0xfb9)]}},{'description':El(0xc31),'accept':{'font/otf':[El(0x57e)]}}]});}catch(ak){console[El(0xe1f)](ak);}if(aj)for(let al of aj){let am=await al[El(0xfc7)]();ag[El(0xc68)](am);}}else{let an=await new Promise(ap=>{const Em=El;let aq=ie`<input type="file" accept=".woff,.woff2,.ttf,.otf" multiple/>`;aq['click'](),aq[Em(0x1012)]('change',ar=>{const En=Em;ap(ar['target'][En(0xc48)]||null);},{'once':!0x0});});an&&ag['push'](...an);}let ah=[];for(let ap of ag){let aq=be(ap),ar=ge(ap),au=ap[El(0xce8)],av=await pe(ap,El(0xcee));av=av[El(0xe2d)](av[El(0xc56)](El(0xe0c))+0x7),av=El(0x681)+ar+El(0xf1e)+av,ah[El(0xc68)]({'baseName':aq,'extension':ar,'path':au,'data':av});}af(ah);});}[bY(0xf5f)](){const Eo=bY;if(this.#Dr)return this.#Dr;{let af='blue';document[Eo(0x47b)][Eo(0xe90)][Eo(0x687)]('outline-color',Eo(0x2eb));let ag=getComputedStyle(document['head'])[Eo(0xfb1)]('outline-color');if(document[Eo(0x47b)][Eo(0xe90)][Eo(0x76c)](Eo(0xd36)),Eo(0xeae)!==ag){let ah=new A(ag),aj=Infinity;for(let [ak,al]of Object['entries'](a2[Eo(0xfd5)])){let am=new A(al),an=ah['deltaE'](am);an<aj&&(aj=an,af=ak);}}return this.#Dr=af,af;}}#Ye(af){const Ep=bY;0x2!==af['buttons']&&(this.#Er=!0x0),this.#yr=af[Ep(0xcec)],this.#kr=af['clientY'],!0x1===this.#Tr[Ep(0xe3e)](af[Ep(0x348)])&&(this.#Tr[Ep(0xc2f)](af[Ep(0x348)]),this[Ep(0x10bf)](new CustomEvent(Ep(0x667))));{let {ctrl:ag,alt:ah,meta:aj,shift:ak}=ui[Ep(0xbbe)](af);ag===this.#$r[Ep(0x875)]&&ah===this.#$r[Ep(0xef1)]&&aj===this.#$r[Ep(0xdd8)]&&ak===this.#$r['shift']||(this.#$r={'ctrl':ag,'alt':ah,'meta':aj,'shift':ak},this['dispatchEvent'](new CustomEvent(Ep(0x7af))));}{let al=0x1,am=null;for(this.#Ur[Ep(0xc68)](af);this.#Ur['length']>0x8;)this.#Ur[Ep(0x29f)]();for(let an of this.#Ur){if(am){if(Ep(0xfae)===an['pointerType']||Ep(0x5b6)===an[Ep(0xd5b)]){let ap=Ep(0x5b6)===an[Ep(0xd5b)]?0x9:0x3;Math[Ep(0x5fe)](Math[Ep(0xcc1)](an[Ep(0xcec)]-am[Ep(0xcec)],0x2)+Math['pow'](an[Ep(0xc4a)]-am[Ep(0xc4a)],0x2))<ap&&an[Ep(0xdb7)]-am[Ep(0xdb7)]<0x258?al+=0x1:al=0x1;}else an[Ep(0xcec)]===am[Ep(0xcec)]&&an[Ep(0xc4a)]===am['clientY']&&an[Ep(0xdb7)]-am['timeStamp']<0x258?al+=0x1:al=0x1;}am=an;}this.#Sr=al;}}#Mr(af){const Eq=bY;this.#yr=af[Eq(0xcec)],this.#kr=af[Eq(0xc4a)],this.#Cr=af[Eq(0xe17)];{let {ctrl:ag,alt:ah,meta:aj,shift:ak}=ui[Eq(0xbbe)](af);ag===this.#$r[Eq(0x875)]&&ah===this.#$r[Eq(0xef1)]&&aj===this.#$r[Eq(0xdd8)]&&ak===this.#$r['shift']||(this.#$r={'ctrl':ag,'alt':ah,'meta':aj,'shift':ak},this[Eq(0x10bf)](new CustomEvent(Eq(0x7af))));}}#Ar(af){const Er=bY;this.#Er=!0x1,!0x0===this.#Tr['has'](af[Er(0x348)])&&(this.#Tr[Er(0x658)](af[Er(0x348)]),this[Er(0x10bf)](new CustomEvent('pointerschange')));{let {ctrl:ag,alt:ah,meta:aj,shift:ak}=ui[Er(0xbbe)](af);ag===this.#$r[Er(0x875)]&&ah===this.#$r['alt']&&aj===this.#$r[Er(0xdd8)]&&ak===this.#$r[Er(0x29f)]||(this.#$r={'ctrl':ag,'alt':ah,'meta':aj,'shift':ak},this[Er(0x10bf)](new CustomEvent(Er(0x7af))));}}#Br(af){const Eu=bY;!0x0===this.#Tr['has'](af[Eu(0x348)])&&(this.#Tr[Eu(0x658)](af[Eu(0x348)]),this['dispatchEvent'](new CustomEvent('pointerschange')));}#bn(af){const Ev=bY;this.#yr=af[Ev(0xcec)],this.#kr=af[Ev(0xc4a)],af[Ev(0x539)](),af[Ev(0x555)][Ev(0xa89)]='copy';}#ie(af){const Ew=bY;let ag=ui['fromEvent'](af);ag['ctrl']===this.#$r['ctrl']&&ag[Ew(0xef1)]===this.#$r[Ew(0xef1)]&&ag[Ew(0xdd8)]===this.#$r['meta']&&ag[Ew(0x29f)]===this.#$r['shift']||(this.#$r={'ctrl':ag[Ew(0x875)],'alt':ag[Ew(0xef1)],'meta':ag[Ew(0xdd8)],'shift':ag[Ew(0x29f)]},this[Ew(0x10bf)](new CustomEvent(Ew(0x7af)))),this[Ew(0xb7a)]&&(ag[Ew(0xee6)](Ew(0xe73))?!0x1===af[Ew(0x275)]&&this[Ew(0x9db)]('transformTool'):!0x1===this['textInputMode']&&(ag['matches']('Backspace')||ag['matches'](Ew(0x5d7))?this[Ew(0x9db)](Ew(0x658)):ag[Ew(0xee6)](Ew(0x35e))?this[Ew(0x9db)](Ew(0xe0a)):ag[Ew(0xee6)](Ew(0xfe7))?this[Ew(0x9db)]('moveOneUnitUp'):ag['matches'](Ew(0x705))?this[Ew(0x9db)]('moveOneUnitLeft'):ag[Ew(0xee6)](Ew(0xd8f))?this[Ew(0x9db)](Ew(0xd0b)):ag[Ew(0xee6)](Ew(0x10b9),'ArrowDown')?this[Ew(0x9db)](Ew(0xb23)):ag[Ew(0xee6)]('Shift',Ew(0xfe7))?this[Ew(0x9db)](Ew(0xd14)):ag[Ew(0xee6)](Ew(0x10b9),Ew(0x705))?this[Ew(0x9db)](Ew(0x79c)):ag[Ew(0xee6)](Ew(0x10b9),Ew(0xd8f))&&this[Ew(0x9db)]('moveTenUnitsRight')));}#Rr(af){const Ex=bY;let {ctrl:ag,alt:ah,meta:aj,shift:ak}=ui[Ex(0xbbe)](af);ag===this.#$r['ctrl']&&ah===this.#$r[Ex(0xef1)]&&aj===this.#$r[Ex(0xdd8)]&&ak===this.#$r['shift']||(this.#$r={'ctrl':ag,'alt':ah,'meta':aj,'shift':ak},this[Ex(0x10bf)](new CustomEvent(Ex(0x7af))));}#Ir(af){const Ey=bY;window[Ey(0x1012)](Ey(0x985),ag=>{const Ez=Ey;let ah=ag[Ez(0xf40)](le?Ez(0x255):Ez(0xb84)),aj=ag[Ez(0xf40)](Ez(0xcbb)),ak=ag['getModifierState'](le?'Control':Ez(0x255)),al=ag[Ez(0xf40)](Ez(0x10b9));this.#$r[Ez(0x875)]===ah&&this.#$r[Ez(0xef1)]===aj&&this.#$r[Ez(0xdd8)]===ak&&this.#$r[Ez(0x29f)]===al||(this.#$r={'ctrl':ah,'alt':aj,'meta':ak,'shift':al},this[Ez(0x10bf)](new CustomEvent(Ez(0x7af))));},{'once':!0x0});}#Fr(af){const EA=bY;let {ctrl:ag,alt:ah,meta:aj,shift:ak}=this.#$r;(ag||ah||aj||ak)&&(this.#$r={'ctrl':!0x1,'alt':!0x1,'meta':!0x1,'shift':!0x1},this[EA(0x10bf)](new CustomEvent(EA(0x7af))));}async #fn(af){const EB=bY;if(this.#yr=af[EB(0xcec)],this.#kr=af[EB(0xc4a)],this[EB(0xb7a)]){af['preventDefault']();let ag=[],ah=[];for(let aj of af['dataTransfer']['files']){let ak=await ve(aj);if(EB(0xdae)===ak[EB(0x22a)]||EB(0xd07)===ak['extension']){let al={'foreignObjects':a2[EB(0x4a6)]('bx-markupsettings:foreignObjects',EB(0x65e)),'foreignMetadata':a2[EB(0x4a6)](EB(0x4e0),'remove')},am=Ga(ak[EB(0x3ab)],al);ag[EB(0xc68)](am);}else{if(EB(0x623)===ak[EB(0x22a)]||'ai'===ak[EB(0x22a)]){let an=null,ap=null;try{an=await new po(ak[EB(0x3ab)])[EB(0xb00)](!0x1);}catch(aq){ap=aq;}ap?'ai'===ak[EB(0x22a)]?this['openMessageDialog']({'title':{'href':'#failed-to-import-file'},'detail':{'href':'#failed-to-import-file.ai-with-no-pdf-data'},'buttons':[{'href':EB(0x95a)}]}):this[EB(0xafc)]({'title':{'href':EB(0x763)},'detail':ap[EB(0x65b)],'buttons':[{'href':EB(0x95a)}]}):ag[EB(0xc68)](an);}else['png',EB(0x6b8),'jpeg','gif',EB(0x8a2),EB(0x6ee)]['includes'](ak[EB(0x22a)])&&ah[EB(0xc68)](ak);}}if(ag[EB(0x6dc)]>0x0||ah['length']>0x0){this[EB(0xb7a)][EB(0xeeb)]['undoManager'][EB(0x250)](EB(0xec2));for(let ar of ag)this['#editor'][EB(0xeeb)][EB(0x85a)](ar,'pointer');for(let au of ah)this[EB(0xb7a)][EB(0xeeb)]['insertBitmap'](au['data'],EB(0x246),au[EB(0x3a7)]);}}}#Nr(){const EC=bY;this['dispatchEvent'](new CustomEvent(EC(0x7b6))),this[EC(0x9db)](EC(0x10c7));}}class ko extends bs{static ['v']=ie` <template> <h2 id="title"></h2> <p id="detail"></p> </template>
  `;static ['_shadowStyleSheet']=se`:host{width:485px}#title{font-size:23px}`;constructor(af){const ED=bY;if(super(),af[ED(0x37a)]){if(af[ED(0x37a)]['href']){let ag=af[ED(0x37a)]['href'],ah=af[ED(0x37a)]['args'];ah=ah?Object[ED(0x2b6)](ah)['map'](([aj,ak])=>aj+':'+ak)[ED(0xf5e)](','):'',this[ED(0xb91)]['innerHTML']=ED(0x519)+ag+ED(0x746)+ah+ED(0xa04);}else this[ED(0xb91)]['innerHTML']=Te(af[ED(0x37a)]);}if(af['detail']){if(af['detail'][ED(0xbd9)]){let aj=af['detail'][ED(0xbd9)],ak=af['detail'][ED(0xa32)];ak=ak?Object[ED(0x2b6)](ak)[ED(0x8fb)](([al,am])=>al+':'+am)[ED(0xf5e)](','):'',this[ED(0x502)][ED(0x8c2)]='<x-message\x20href=\x22'+aj+ED(0x746)+ak+ED(0xa04);}else this[ED(0x502)][ED(0x8c2)]=Te(af[ED(0xdd7)]);}if(af[ED(0x4db)]){let al='';for(let am=af[ED(0x4db)][ED(0x6dc)]-0x1;am>=0x0;am-=0x1)if(af[ED(0x4db)][am][ED(0xbd9)]){let an=af[ED(0x4db)][am]['href'],ap=af[ED(0x4db)][am][ED(0xa32)];ap=ap?Object[ED(0x2b6)](ap)[ED(0x8fb)](([aq,ar])=>aq+':'+ar)[ED(0xf5e)](','):'',al+=ED(0x1065)+am+'\x22\x20'+(0x0===am?ED(0x42a):'')+'>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-message\x20href=\x22'+an+ED(0x746)+ap+'\x22></x-message>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';}else al+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<x-button\x20value=\x22'+am+'\x22\x20'+(0x0===am?ED(0x42a):'')+ED(0x866)+Te(af[ED(0x4db)][am])+'</x-label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</x-button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';this['#footer'][ED(0x8c2)]=al;}this[ED(0x502)]['addEventListener']('click',aq=>{const EE=ED;'a'===aq[EE(0x779)][EE(0xa31)]&&this.#Ks(aq);}),this[ED(0x59c)][ED(0x1012)](ED(0xff9),aq=>this.#Or(aq));}#Ks(af){const EF=bY;af[EF(0x539)](),window[EF(0x9ff)](af[EF(0x779)][EF(0xbd9)]);}#Or(af){const EG=bY;let ag=af[EG(0x779)]['closest'](EG(0xa88));ag&&this[EG(0x10bf)](new CustomEvent(EG(0xb26),{'detail':parseInt(ag[EG(0xf0a)])}));}}customElements[bY(0x864)](bY(0x716),ko);let Co=()=>{const EH=bY;EH(0x504)===a2[EH(0x4a6)](EH(0x39c))&&a2[EH(0xea6)](EH(0x39c),EH(0x106c)),null!==a2[EH(0x4a6)](EH(0x9a7))&&(a2[EH(0xea6)](EH(0xb3b),a2[EH(0x4a6)](EH(0x9a7))),a2[EH(0xea6)](EH(0x9a7),null)),null!==a2['getConfig'](EH(0xbb4))&&(a2[EH(0xea6)]('bx-keyboardsettings:spaceKeyMode',a2['getConfig'](EH(0xbb4))),a2[EH(0xea6)](EH(0xbb4),null)),EH(0x292)===a2['getConfig'](EH(0x8f0))&&a2[EH(0xea6)](EH(0x8f0),EH(0xa12)),[EH(0xb9b),'wikimedia.org'][EH(0x1d5)](a2['getConfig'](EH(0xefc)))&&a2['setConfig'](EH(0xefc),null),null!==a2[EH(0x4a6)](EH(0x2bb))&&(a2[EH(0xea6)](EH(0x53e),EH(0x7b3)===a2['getConfig'](EH(0x2bb))?EH(0x7b3):'create'),a2['setConfig']('bx-blobsettings:mode',null)),EH(0x6de)===a2[EH(0x4a6)](EH(0xca1))&&a2[EH(0xea6)](EH(0xca1),null),null!==a2[EH(0x4a6)](EH(0xab2))&&(a2[EH(0xea6)](EH(0xbd7),a2[EH(0x4a6)](EH(0xab2))),a2['setConfig'](EH(0xab2),null)),null!==a2[EH(0x4a6)]('bx-rulers:space')&&(a2[EH(0xea6)](EH(0x9e3),a2[EH(0x4a6)](EH(0x768))),a2[EH(0xea6)](EH(0x768),null)),null!==a2[EH(0x4a6)](EH(0x3d8))&&a2['setConfig'](EH(0x3d8),null),null!==a2[EH(0x4a6)](EH(0xff6))&&a2[EH(0xea6)]('bx-uisettings:widgetsSize',null),null!==a2['getConfig'](EH(0xfb2))&&(a2[EH(0xea6)](EH(0x578),a2[EH(0x4a6)](EH(0xfb2))),a2[EH(0xea6)](EH(0xfb2),null)),null!==a2['getConfig'](EH(0xe6e))&&(a2[EH(0xea6)](EH(0x4e1),a2[EH(0x4a6)]('bx-secondarypanelsdock:height')),a2['setConfig']('bx-secondarypanelsdock:height',null)),null!==a2[EH(0x4a6)](EH(0x7a2))&&a2[EH(0xea6)](EH(0x7a2),null);};class So extends yo{static #C=ie` <template> <bx-navbar id="navbar"></bx-navbar> <main id="main"> <div id="page-container"></div> <div id="dialogs"></div> <x-notification id="notification" timeout="800"></x-notification> </main> <bx-imageviewer id="image-viewer"></bx-imageviewer> </template>
  `;static #S=se`
    :host {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%
    }

    #main {
      flex: 1 1 0%;
      box-sizing: border-box;
      overflow: hidden auto;
    }

    #main #page-container {
      padding: 20px;
      max-width: 740px;
    }
    :host([path="/"]) #main #page-container {
      padding-bottom: 0;
    }

    /**
     * Dialogs
     */

    #cloud-dialog {
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      max-width: 780px;
      max-height: 700px;
    }

    #settings-dialog {
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      max-width: 800px;
      max-height: 700px;
    }

    #about-dialog {
      width: 300px;
      height: calc(100% - 40px);
      max-height: 460px;
    }

    #contact-dialog {
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      max-width: 750px;
      max-height: 700px;
    }

    /**
     * Privacy notice
     */

    #privacy-notice p {
      margin: 0;
      white-space: nowrap;
    }

    #privacy-notice a {
      color: var(--light-accent-color);
    }

    #privacy-notice x-button {
      margin: 0 -8px 0 10px;
      cursor: pointer;
    }
  `;get[bY(0xaad)](){return this.#_r;}get[bY(0x242)](){const EI=bY;return this[EI(0x978)];}#qr=null;#_r=null;#jr=bY(0x95b);#P;#Vr;#Gr;#Hr;constructor(){const EJ=bY;super(),this['#canonical-link']=document[EJ(0x47b)][EJ(0x344)](EJ(0x104c)),this[EJ(0x38e)]=document[EJ(0x47b)][EJ(0x344)](EJ(0x38e)),Co(),fetch(EJ(0x3e4))['then'](async af=>{const EK=EJ;this.#Vr=await af[EK(0xfcf)]();}),history[EJ(0x5cb)]=EJ(0xac6),null===history[EJ(0x526)]&&history['replaceState']({'index':history[EJ(0x6dc)]-0x1,'scrollTop':0x0},null,location[EJ(0xbd9)]),re&&(document['documentElement'][EJ(0xe90)][EJ(0xb42)]=EJ(0x96e));}async[bY(0x854)](){const EL=bY;if(!this.#P){super['connectedCallback'](),await this.#Wr(),await this.#Kr(),document[EL(0x10ed)][EL(0xa0a)](EL(0xdb1),Ke()),this.#P=this[EL(0x1017)]({'mode':EL(0x9ff)}),this.#P[EL(0x48f)]=[a2[EL(0x500)],So.#S],this.#P[EL(0x775)](document[EL(0xc3b)](So.#C[EL(0x223)],!0x0));for(let af of this.#P[EL(0x44e)](EL(0x6e3)))this['#'+af['id']]=af;Bi[EL(0xf5c)]['addEventListener']('userchange',ag=>this.#Ro()),Bi['auth'][EL(0x1012)](EL(0xe1f),ag=>this.#Zr(ag)),window[EL(0xf2d)](EL(0xa62))['addListener'](()=>this.#Yr()),window[EL(0x1012)](EL(0xf60),ag=>this.#Xr(ag)),window[EL(0x1012)](EL(0x1092),ag=>this.#Jr(EL(0x3ff))),document[EL(0xe3d)][EL(0x1012)]('wheel',ag=>this.#Qr(ag),{'passive':!0x0}),a2[EL(0x1012)](EL(0xc08),ag=>this.#Zt(ag)),this.#P[EL(0x1012)](EL(0xff9),ag=>this.#Rs(ag),!0x0),this[EL(0xce3)][EL(0x1012)]('click',ag=>this.#eh(ag)),this.#Jr('load'),this.#th(),await it(0x64),this[EL(0xb16)]();}}[bY(0x53a)](){return new Promise(async af=>{const EO=a1;await it(0x12c);let ag=await new Promise(ah=>{const EM=a1;let aj=ie`<input type="file" accept=".json"/>`;aj['click'](),aj[EM(0x1012)]('change',ak=>{ah(ak['target']['files'][0x0]||null);},{'once':!0x0});});if(ag){let ah=((aj,ak=!0x0)=>{const EN=a1;let al=null;try{al=JSON[EN(0xf30)](aj);}catch(am){return void(ak&&console[EN(0xe1f)](EN(0x45c),aj,am));}return al;})(await readFile(ag,EO(0x7a7)));if(ah&&ah[EO(0x5fd)]&&ah[EO(0x10b6)]&&ah[EO(0xea4)]){a2[EO(0x606)]();for(let [aj,ak]of Object['entries'](ah[EO(0xea4)]))!0x1===aj['startsWith'](EO(0x938))&&!0x1===aj['startsWith'](EO(0x5f2))&&a2[EO(0xea6)](aj,ak);Co();}else await this[EO(0xafc)]({'title':{'href':EO(0x763)},'detail':{'href':EO(0xce4)},'buttons':[{'href':EO(0x95a)}]});}af();});}['exportConfig'](){return new Promise(async af=>{const EP=a1;let ag={'appVersion':this.#Vr[EP(0xd70)],'createdTime':Date[EP(0xee4)](),'items':{}};for(let [am,an]of Object[EP(0x2b6)](localStorage))(am['startsWith'](EP(0x62c))||am[EP(0x9ae)]('x-'))&&(ag[EP(0xea4)][am]=JSON['parse'](an));let ah=JSON[EP(0x585)](ag,null,0x2),aj=new Blob([ah],{'type':'application/json'}),ak=URL['createObjectURL'](aj),al=a2[EP(0xc34)]('#settings')[EP(0x223)]+EP(0x63c);ie`<a download="${al}" href="${ak}"></a>`[EP(0xff9)](),it(0x7530)[EP(0x270)](()=>URL[EP(0xc32)](ak)),af();});}#ih(af){return new Promise(async ag=>{const EQ=a1;if(af){let [ah]=this[EQ(0x8b6)]();if(EQ(0x299)===ah){for(let [aj,ak]of Object[EQ(0x2b6)](af)){let al=localStorage['getItem'](aj),am=JSON[EQ(0x585)](ak);al!==am&&(localStorage[EQ(0xf12)](aj,am),this['dispatchEvent'](new CustomEvent('configchange',{'detail':{'key':aj,'value':ak,'origin':EQ(0x3d4)}})));}Co();}}ag();});}#sh=et(()=>new Promise(async e=>{const ER=bY;let [t]=this[ER(0x8b6)]();if(ER(0x299)===t){let e={};for(let t of Object['keys'](localStorage))if(t['startsWith']('bx-')||t[ER(0x9ae)]('x-')){let i=localStorage[ER(0x3ca)](t),s=JSON[ER(0xf30)](i);e[t]=s;}await Bi[ER(0x2f6)][ER(0x95c)](ER(0xafa),Bi[ER(0xf5c)][ER(0xdc1)],e);}e();}),0x2710);[bY(0xcc9)](){return new Promise(async af=>{const ES=a1;let ag=await(await fetch(ES(0xed9)))[ES(0x7a7)](),ah=new DOMParser()['parseFromString'](ag,ES(0xc7f)),aj=[],ak=(al,am=[])=>{const ET=ES;for(let an of al){let ap=an[ET(0x344)](':scope\x20>\x20x-label\x20>\x20x-message');if(ap){let aq=[...am,ap[ET(0x1015)]],ar=an['getAttribute']('value'),au=an[ET(0x344)](ET(0xa03)),av=an[ET(0x344)](ET(0x89c));if(au){let aw=[...au[ET(0x44e)](ET(0xf29))];ak(aw,[...aq]);}else null!==ar&&aj[ET(0xc68)]({'commandID':ar,'label':aq['join'](ET(0x1f7)),'defaultShortcut':av?av[ET(0xc51)](ET(0xf0a)):null});}}};ak([...ah['querySelectorAll'](ES(0x71d))]),af(aj);});}['checkCloudWriteAccess'](af=!0x1){const EU=bY;if(!0x1===navigator['onLine'])return[EU(0x2b3),EU(0x613)];if(null===Bi[EU(0xf5c)][EU(0xdc1)])return[EU(0x2b3),EU(0xeb2)];if(!0x1===Bi[EU(0xf5c)][EU(0x1009)])return['rejected',EU(0xa0d)];if(!0x1===af){if(null===Bi[EU(0xf5c)][EU(0x354)])return['rejected',EU(0xeb1)];{let [ag]=Bi['checkout']['getEffectiveSubscriptionPlanID'](Bi[EU(0xf5c)][EU(0x354)]);if(null===ag)return[EU(0x2b3),EU(0x380)];if(ag===vi)return['rejected','boxy-svg/user-not-subscribed-to-premium-plan'];}}return[EU(0x299),null];}[bY(0x101e)](af){return new Promise(async ag=>{const EV=a1;let [ah,aj]=this[EV(0x8b6)](EV(0x58e)===af);if(EV(0x2b3)===ah)return ag([EV(0x2b3),aj]);if(null!==af){let ak;try{ak=await Bi[EV(0x2f6)][EV(0xd1f)](EV(0x1e0),af);}catch(al){return ag([EV(0x2b3),al[EV(0x3cb)]||EV(0x559)]);}if(null!==ak){if(ak[EV(0xa56)]!==Bi[EV(0xf5c)][EV(0xdc1)])return ag(['rejected','boxy-svg/user-not-authorized']);}}return ag([EV(0x299),null]);});}async[bY(0xb6a)](af){const EW=bY;'boxy-svg/user-offline'===af?this[EW(0xafc)]({'title':{'href':EW(0xe15)},'detail':{'href':EW(0x434)},'buttons':[{'href':'#close'}]}):EW(0xeb2)===af?this[EW(0xb9c)]():EW(0xa0d)===af?this[EW(0x249)]():EW(0xc00)===af?(this[EW(0x908)](qi(location[EW(0xbd9)],EW(0x741),EW(0xea1))),await it(0x3e8),this[EW(0xafc)]({'title':{'href':'#failed-to-write-file'},'detail':{'href':EW(0x1f2)},'buttons':[{'href':EW(0x95a)}]})):'boxy-svg/subscription-expired'===af?(this['navigate'](qi(location[EW(0xbd9)],EW(0x741),EW(0xea1))),await it(0x3e8),this['openMessageDialog']({'title':{'href':EW(0xe15)},'detail':{'href':EW(0xc73)},'buttons':[{'href':EW(0x95a)}]})):EW(0xce9)===af?(this['navigate'](qi(location[EW(0xbd9)],EW(0x741),EW(0xea1))),await it(0x3e8),this[EW(0xafc)]({'title':{'href':EW(0xe15)},'detail':{'href':EW(0x776)},'buttons':[{'href':EW(0x95a)}]})):EW(0xeb1)===af?(this[EW(0x908)](qi(location['href'],EW(0x741),EW(0xea1))),await it(0x3e8),this[EW(0xafc)]({'title':{'href':EW(0xe15)},'detail':{'href':EW(0x61a)},'buttons':[{'href':EW(0x95a)}]})):EW(0xbfd)===af?this['openMessageDialog']({'title':{'href':EW(0xe15)},'detail':{'href':'#failed-to-write-file.user-not-authorized'},'buttons':[{'href':EW(0x95a)}]}):EW(0xf75)===af?this[EW(0xafc)]({'title':{'href':EW(0xe15)},'detail':{'href':'#failed-to-write-file.filesystem-permission-denied'},'buttons':[{'href':EW(0x95a)}]}):this[EW(0xafc)]({'title':{'href':'#failed-to-write-file'},'detail':EW(0xe40)+af,'buttons':[{'href':'#close'}]});}[bY(0x2b4)](af=bY(0x9c0),ag=0xbb8){const EX=bY;this[EX(0xce3)][EX(0x8c2)]=af,this[EX(0xce3)][EX(0x36a)]=ag,this[EX(0xce3)]['opened']=!0x0;}async #th(){const EY=bY;let af=a2[EY(0x4a6)](EY(0x10f0),null);if(null===af){if(/bot|crawler|spider|crawling/i['test'](navigator[EY(0xd88)]))af=!0x1,a2['setConfig'](EY(0x10f0),!0x1);else{let ag='ZZ';try{ag=Bi[EY(0xfb8)][EY(0x6ba)](EY(0xfd2))[EY(0x3ab)];}catch(ah){}af=void 0x0!==Ci[EY(0x1d5)](ag),a2['setConfig'](EY(0x10f0),af);}}if(!0x0===af){let aj=EY(0x7e6);this[EY(0x2b4)](aj,0x0);}}[bY(0xb9c)](){return new Promise(async af=>{const EZ=a1;let ag=ie` <dialog id="login-dialog" data-param="login"> <bx-loginform></bx-loginform> </dialog>
      `;await this[EZ(0x3b3)](),this[EZ(0x642)][EZ(0x775)](ag),await it(0x64),ag[EZ(0xd44)](),ag[EZ(0x1012)](EZ(0x225),ah=>this.#aa(ah),{'once':!0x0}),af();});}[bY(0x5dc)](){return new Promise(async af=>{const F0=a1;let ag=ie` <dialog id="register-dialog" data-param="register"> <bx-registerform></bx-registerform> </dialog>
      `;await this[F0(0x3b3)](),this[F0(0x642)][F0(0x775)](ag),await it(0x64),ag[F0(0xd44)](),ag[F0(0x1012)](F0(0x225),ah=>this.#aa(ah),{'once':!0x0}),af();});}[bY(0xe29)](){return new Promise(async af=>{const F1=a1;let ag=ie` <dialog id="password-reset-dialog" data-param="password-reset"> <bx-passwordresetform></bx-passwordresetform> </dialog>
      `;await this['closeDialog'](),this[F1(0x642)][F1(0x775)](ag),await it(0x64),ag[F1(0xd44)](),ag[F1(0x1012)]('close',ah=>this.#aa(ah),{'once':!0x0}),af();});}[bY(0x267)](){return new Promise(async af=>{const F2=a1;let ag=ie` <dialog id="password-confirm-dialog" data-param="password-confirm"> <bx-passwordconfirmform></bx-passwordconfirmform> </dialog>
      `;this[F2(0x642)]['append'](ag),await it(0x64),ag['showModal'](),ag[F2(0x1012)](F2(0x225),ah=>{const F3=F2;this.#aa(ah),af(ag['firstElementChild'][F3(0xf0a)]);},{'once':!0x0});});}async #ah(){const F4=bY;let af=this['#dialogs'][F4(0x344)](F4(0x66d));null===af&&(af=ie` <dialog id="about-dialog" data-param="about"> <bx-about></bx-about> </dialog>
      `,await this[F4(0x3b3)](),this[F4(0x642)]['append'](af),await it(0x64),af[F4(0xd44)](),af[F4(0x1012)](F4(0x225),ag=>this.#aa(ag)),af[F4(0xe5b)][F4(0xd70)]=this.#Vr[F4(0xd70)]);}async[bY(0x6e8)](){const F5=bY;let af=this[F5(0x642)][F5(0x344)](F5(0x590));af||(af=ie` <dialog id="cloud-dialog" data-param="cloud"> <bx-cloudbrowser tabindex="0" type="manage"></bx-cloudbrowser> </dialog>
      `,await this['closeDialog'](),this[F5(0x642)][F5(0x775)](af),await it(0x64),af[F5(0xd44)](),af[F5(0x1012)](F5(0x225),ag=>{this.#aa(ag);}));}async[bY(0x3db)](af){const F6=bY;let ag=ie` <dialog id="share-dialog" data-param="share"> <bx-fileshareform value="${af}"></bx-fileshareform> </dialog>
    `;this['#dialogs'][F6(0x775)](ag),await it(0x64),ag['showModal'](),ag[F6(0x1012)](F6(0x225),ah=>this.#aa(ah)),ag[F6(0xe5b)][F6(0x1012)](F6(0xb26),()=>ag[F6(0x225)]());}async['openEmbedDialog'](af){const F7=bY;let ag=ie` <dialog id="embed-dialog" data-param="embed"> <bx-fileembedform value="${af}"></bx-fileembedform> </dialog>
    `;this[F7(0x642)][F7(0x775)](ag),await it(0x64),ag[F7(0xd44)](),ag[F7(0x1012)](F7(0x225),ah=>this.#aa(ah)),ag['firstElementChild']['addEventListener']('submit',()=>ag['close']());}[bY(0x802)](af=this.#jr){return new Promise(async ag=>{const F8=a1;let ah=this['#dialogs'][F8(0x344)]('#settings-dialog');if(ah)ah[F8(0xe5b)][F8(0xf0a)]=af;else{let aj=ie` <dialog id="settings-dialog" data-param="settings"> <bx-settings id="settings" value="${af}"></bx-settings> </dialog>
        `;await this[F8(0x3b3)]();let ak,al=aj['firstElementChild'];this[F8(0x642)][F8(0x775)](aj),await it(0x64),aj[F8(0xd44)](),aj[F8(0x1012)](F8(0x225),am=>{const F9=F8;al[F9(0xee0)]('valuechange',ak),this.#aa(am);}),al['addEventListener'](F8(0x7f0),ak=()=>{const Fb=F8;let am=qi(location[Fb(0xbd9)],Fb(0x741),Fb(0x920)+al[Fb(0xf0a)]);this[Fb(0x908)](am,!0x0),this.#jr=al['value'];});}this.#jr=af,ag();});}async #oh(af=vi,ag=0x1,ah='US'){const Fc=bY;if(await Bi[Fc(0xf5c)][Fc(0xfea)],await this[Fc(0x3b3)](),null===Bi[Fc(0xf5c)][Fc(0xdc1)])this['navigate'](qi(location['href'],'dialog',Fc(0xb28)),!0x0);else{await Bi[Fc(0x8d9)]['open'](af,ag,ah);let aj=new URLSearchParams(location['search']);if(aj[Fc(0x10bd)]('dialog')?.[Fc(0x9ae)](Fc(0x8d9))){aj['delete'](Fc(0x741));let ak=new URL(location[Fc(0xbd9)]);ak[Fc(0xa28)]=aj[Fc(0xd23)](),this[Fc(0x908)](ak[Fc(0xbd9)]);}}}[bY(0xafc)](af){return new Promise(ag=>{const Fd=a1;let ah,aj,ak=ie`<dialog id="message-dialog" data-param="message"></dialog>`,al=new ko(af);ak[Fd(0x775)](al),this['#dialogs'][Fd(0x775)](ak),ak[Fd(0xd44)](),ak[Fd(0x1012)](Fd(0x225),aj=am=>{const Ff=Fd;ak[Ff(0xee0)](Ff(0x225),aj),al[Ff(0xee0)](Ff(0xb26),ah),this.#aa(am),ag(-0x1);}),al[Fd(0x1012)](Fd(0xb26),ah=async am=>{const Fg=Fd;ak[Fg(0xee0)](Fg(0x225),aj),al['removeEventListener'](Fg(0xb26),ah),await ak[Fg(0x225)](),ag(am['detail']);});});}async['openEmailVerifyMessageDialog'](){const Fh=bY;if(0x1===await this[Fh(0xafc)]({'title':{'href':'#verify-your-email-address'},'detail':{'href':Fh(0xb68),'args':{'email':Bi[Fh(0xf5c)][Fh(0xff7)]}},'buttons':[{'href':'#close'},{'href':'#resend'}]})){let af;try{await Bi['auth'][Fh(0x5af)]();}catch(ag){af=ag;}af&&this['openMessageDialog']({'title':{'href':'#failed-to-send-verification-email'},'detail':af[Fh(0x65b)]+'\x20('+af[Fh(0x3cb)]+')','buttons':[{'href':Fh(0x95a)}]});}}['openContactDialog'](){return new Promise(async af=>{const Fj=a1;let ag,ah,aj,ak=ie` <dialog id="contact-dialog" data-param="contact"> <bx-contactform></bx-contactform> </dialog>
      `,al=ak[Fj(0xe5b)];await this[Fj(0x3b3)](),this[Fj(0x642)][Fj(0x775)](ak),await it(0x64),ak[Fj(0xd44)](),ak[Fj(0x1012)](Fj(0x225),ag=am=>{const Fk=Fj;ak['removeEventListener'](Fk(0x225),ag),al[Fk(0xee0)](Fk(0xf20),ah),al[Fk(0xee0)](Fk(0xb26),aj),this.#aa(am);}),al[Fj(0x1012)](Fj(0xf20),ah=am=>{this.#nh(am);}),al[Fj(0x1012)](Fj(0xb26),aj=am=>{this.#lh(am);}),af();});}['closeDialog'](af=!0x1){return new Promise(async ag=>{const Fl=a1;let ah=document['querySelector'](Fl(0xb20)),aj=this[Fl(0x642)][Fl(0x344)](Fl(0x741));ah&&ah[Fl(0x102a)](),aj?.['id']&&(af?aj[Fl(0x225)]():await aj[Fl(0x225)](),aj[Fl(0x102a)]()),ag();});}#Xr(af){const Fm=bY;this[Fm(0xd5d)]();}#Rs(af){const Fn=bY;{let ag=af[Fn(0x779)]['closest']('a');if(ag){let ah=new URL(ag['href']);ah[Fn(0x1061)]===location[Fn(0x1061)]&&(af[Fn(0x539)](),this[Fn(0x908)](ah['href']));}}if(Fn(0x741)===af[Fn(0x779)][Fn(0xa31)]){let aj=af[Fn(0x779)],ak=null;'bx-form'===aj['firstElementChild']?.[Fn(0xc51)](Fn(0xd77))&&(ak=aj[Fn(0xe5b)]),ak&&(ak[Fn(0xf8c)]?(ak[Fn(0x72c)](),ak[Fn(0x910)](),af[Fn(0x539)](),af['stopImmediatePropagation']()):ak['throbber']&&(af[Fn(0x539)](),af['stopImmediatePropagation']()));}}#Qr(af){const Fo=bY;let ag=this[Fo(0x21d)]['scrollTop'];''!==location[Fo(0xf3e)]&&!0x1===location[Fo(0xf3e)][Fo(0x9ae)](Fo(0x6d8))&&(history['pushState']({'index':history[Fo(0x526)]['index']+0x1,'scrollTop':ag},null,location[Fo(0xbd9)][Fo(0xc97)]('#')[0x0]),this.#Jr(Fo(0xc68))),this.#rh(af);}#rh=((e,t,i,s=!0x1)=>{let a=null,o=null;return(...n)=>{const Fq=a1;let l=s&&!a;return clearTimeout(a),a=setTimeout(()=>{const Fp=a1;a=null,s||(o=e[Fp(0xe42)](i,n));},t),l&&(o=e[Fq(0xe42)](i,n)),o;};})(e=>{const Fr=bY;location[Fr(0xf3e)]&&!location[Fr(0xf3e)][Fr(0x9ae)](Fr(0x6d8))||this[Fr(0xd5d)]();},0x190);#eh(af){const Fu=bY;let ag=af[Fu(0x779)]['closest'](Fu(0xa88));ag&&'privacy-notice-button'===ag['id']&&(this[Fu(0xce3)][Fu(0x753)]=!0x1,a2[Fu(0xea6)]('bx-portalwebapp:showPrivacyNotification',!0x1));}#aa(af){const Fv=bY;let ag=af['target'],ah=new URL(location[Fv(0xbd9)]),aj=new URLSearchParams(location['search']),ak=aj[Fv(0x10bd)](Fv(0x741)),al=null;ak&&(al=ak['includes']('→')?ak[Fv(0xc97)]('→')[0x0]:ak),ag[Fv(0x102a)](),delete this['#'+ag['id']],ag[Fv(0x22c)][Fv(0x4e6)]===al&&(aj[Fv(0x658)](Fv(0x741)),ah[Fv(0xa28)]=aj[Fv(0xd23)](),this['navigate'](ah[Fv(0xbd9)]));}#Ro(){const Fw=bY;null===Bi['auth'][Fw(0xdc1)]||!0x1!==Bi[Fw(0xf5c)][Fw(0x1009)]||null!==Bi[Fw(0xf5c)][Fw(0x354)]&&!0x1!==Bi['auth']['userSubscription'][Fw(0xbc5)]||this[Fw(0x249)](),null===Bi['auth'][Fw(0xdc1)]?(Bi['database'][Fw(0x7f4)](Fw(0xafa),this.#Hr,this.#Gr),this.#Gr=null,this.#Hr=null):(this.#Hr=Bi[Fw(0xf5c)][Fw(0xdc1)],Bi[Fw(0x2f6)][Fw(0x7d1)](Fw(0xafa),Bi[Fw(0xf5c)][Fw(0xdc1)],this.#Gr=af=>{af&&this.#ih(af);},!0x0));}#Zr(af){const Fx=bY;this[Fx(0xafc)]({'title':{'href':Fx(0xda5)},'detail':af['detail'],'buttons':[{'href':Fx(0x95a)}]});}#Zt(af){const Fy=bY;let {key:ag,value:ah,origin:aj}=af[Fy(0xdd7)];Fy(0xbd5)===ag?this.#Kr():Fy(0xca1)===ag||Fy(0xa37)===ag?this.#Wr():'bx-uisettings:accentColor'===ag&&this.#hh(),this.#sh();}#Yr(){this.#Wr();}async #ii(af){const Fz=bY;let {method:ag,fromLocation:ah,toLocation:aj,state:ak}=af[Fz(0xdd7)],al=new URLSearchParams(ah?ah[Fz(0xa28)]:''),am=new URLSearchParams(aj['search']),an=_i(al,am);{let ap=null===ah||ah[Fz(0x98c)]!==aj[Fz(0x98c)],aq=al[Fz(0x10bd)](Fz(0x7c7))!==am['get']('page'),ar=al[Fz(0x10bd)](Fz(0xa36))!==am[Fz(0x10bd)](Fz(0xa36));Fz(0x75c)===ag?(await this.#ch(),await this.#dh(),this['restoreScrollOffset']()):'push'===ag||Fz(0xf0c)===ag?(ap||aq||ar)&&(await this.#ch(),await this.#dh(),this[Fz(0xb16)]()):Fz(0x3ff)===ag&&(ap||aq||ar)&&(await this.#ch(),await this.#dh(),this['restoreScrollOffset']());}(null===ah||ah[Fz(0xf3e)]!==aj[Fz(0xf3e)])&&!0x1===location[Fz(0xf3e)][Fz(0x9ae)]('#tour-')&&this[Fz(0xb16)]();if(an[Fz(0x1d5)](Fz(0x741))){let au=al[Fz(0x10bd)]('dialog'),av=am[Fz(0x10bd)]('dialog');if(null===av){let aw=au['split']('→')[0x0],ax=this[Fz(0x642)][Fz(0x344)](Fz(0x7b7)+aw+'\x22]');ax?.[Fz(0x9ff)]&&ax[Fz(0x225)]();}else{if(Fz(0xb28)===av)this[Fz(0xb9c)]();else{if(Fz(0xcff)===av)this[Fz(0x5dc)]();else{if(Fz(0x10a6)===av)this[Fz(0xe29)]();else{if(Fz(0xb83)===av)this[Fz(0x6e8)]();else{if('about'===av)this.#ah();else{if(Fz(0x8bd)===av)this[Fz(0x62e)]();else{if(av[Fz(0x9ae)](Fz(0x213))){let [az,aA]=av['split']('→');this['openSettingsDialog'](aA);}else{if(av['startsWith'](Fz(0x8d9))){let [aB,aC]=av[Fz(0xc97)]('→'),[aD,aE,aF]=aC['split']('×');this.#oh(aD,aE,aF);}}}}}}}}let ay=this[Fz(0x642)][Fz(0x344)](Fz(0x102d));ay&&ay[Fz(0x225)]();}}}async #lh(){const FA=bY;let af=this.#P[FA(0x344)](FA(0x669)),ag=af[FA(0xe5b)];if(!0x0===ag[FA(0xbab)]()){let ah=null,aj=null;ag[FA(0x92d)]=!0x0;let ak={'email':ag[FA(0x6c3)],'subject':ag[FA(0xb55)],'message':ag[FA(0x65b)]};try{ah=await Bi['functions'][FA(0x6ba)](FA(0xa1f),ak);}catch(al){aj=al;}ag[FA(0x92d)]=!0x1,af['hidden']=!0x0,await it(0x64),null===aj?(await this[FA(0xafc)]({'title':{'href':'#message-sent'},'detail':{'href':FA(0xf92)},'buttons':[{'href':FA(0x95a)}]}),this['navigate'](qi(location[FA(0xbd9)],FA(0x741),null))):(await this['openMessageDialog']({'title':{'href':FA(0xe4e)},'detail':bi(aj),'buttons':[{'href':FA(0xd94)}]}),af[FA(0x96e)]=!0x1);}}#nh(){const FB=bY;this['navigate'](qi(location[FB(0xbd9)],FB(0x741),null));}[bY(0x908)](af,ag=!0x1){const FC=bY;!0x1===ag?(this[FC(0xd5d)](),history[FC(0x1097)]({'index':history[FC(0x526)][FC(0xa1a)]+0x1,'scrollTop':0x0},null,af),this.#Jr(FC(0xc68))):!0x0===ag&&(history[FC(0xac8)]({'index':history[FC(0x526)]['index'],'scrollTop':0x0},null,af),this.#Jr(FC(0xf0c)));}[bY(0xd5d)](af=this[bY(0x21d)][bY(0x269)]){const FD=bY;history['replaceState']({'index':history[FD(0x526)][FD(0xa1a)],'scrollTop':af},null,location[FD(0xbd9)]);}[bY(0xb16)](){const FE=bY;if(''!==location[FE(0xf3e)]&&!0x1===location[FE(0xf3e)][FE(0x9ae)](FE(0x6d8))){let af=this['#page-container'][FE(0xe5b)],ag=location['hash']['substring'](0x1);af[FE(0xaa8)](ag);}else this[FE(0x21d)]['scrollTop']=history[FE(0x526)][FE(0x269)];}[bY(0x2da)](){const FF=bY;this['#main'][FF(0x269)]=0x0;}#Jr(af=bY(0x3ff)){const FG=bY;let ag=!0x1;if(this.#qr&&location[FG(0x1061)]===this.#qr[FG(0x1061)]&&location[FG(0x98c)]===this.#qr[FG(0x98c)]&&location['search']===this.#qr[FG(0xa28)]&&location[FG(0xf3e)]===this.#qr[FG(0xf3e)]||(ag=!0x0),ag){let ah=this.#qr,aj=new URL(window[FG(0x106f)][FG(0xbd9)]);this.#_r=ah,this.#qr=aj;let ak=new CustomEvent('locationchange',{'detail':{'method':af,'fromLocation':ah,'toLocation':aj,'state':history['state']}});this['dispatchEvent'](ak),this.#ii(ak);}}#Kr(){return new Promise(async af=>{const FH=a1;let ag=a2[FH(0x4a6)](FH(0xbd5),'auto');if(FH(0x307)===ag&&(ag=Ze()),!0x1===He[FH(0x1d5)](ag)&&(ag='en'),ag[FH(0x1d5)]('-')){let [ah,aj]=ag['split']('-');a2[FH(0x67e)]=[FH(0x41d)+ah+'-'+aj+FH(0x88c),FH(0x41d)+ah+FH(0x88c)];}else a2[FH(0x67e)]=['/locales/'+ag+FH(0x88c)];await a2[FH(0x2c6)],document[FH(0xe3d)]['lang']=a2[FH(0x962)],af();});}#Wr(){return new Promise(async af=>{const FI=a1;let ag=a2[FI(0x4a6)](FI(0xca1),FI(0x307)),ah=a2[FI(0x4a6)]('bx-uisettings:colorScheme','auto');if(FI(0x42c)===ag&&!0x1===le&&(ag=FI(0x307)),FI(0x307)===ag){let aj=Ke();ag=FI(0x5d5)===aj||FI(0x644)===aj?FI(0x42c):'windows'===aj?'fluent':FI(0xb95);}FI(0x307)===ah&&(ah=window['matchMedia']('(prefers-color-scheme:\x20dark)')[FI(0xee6)]?FI(0xbbf):'light'),a2[FI(0x790)]=FI(0xdd3)===ah?FI(0xe33)+ag+FI(0x3f3):FI(0xe33)+ag+FI(0x1e9),await a2['whenThemeReady'],this.#hh(),af();});}#hh(){const FJ=bY;let af=a2[FJ(0x4a6)](FJ(0x39c),'auto');'auto'===af&&(af=this[FJ(0xf5f)]()),a2[FJ(0xcfd)]=af;}#ch(){return new Promise(async af=>{const FK=a1;let ag=location['pathname'],ah=this[FK(0xc51)]('path')||null;if(ag!==ah){if('/'===ag)document[FK(0x37a)]=FK(0x685),this[FK(0x5b9)][FK(0x8c2)]=FK(0xea2);else{if(ag[FK(0x9ae)](FK(0xfab)))FK(0xfab)===ag?(document[FK(0x37a)]=FK(0xf02),this[FK(0x5b9)][FK(0x8c2)]=FK(0xdc3)):(document[FK(0x37a)]='Boxy\x20SVG\x20-\x20Blog\x20post\x20#'+ag['split']('/')[0x2],this[FK(0x5b9)]['innerHTML']='<bx-blogsubpage></bx-blogsubpage>');else{if(ag['startsWith'](FK(0xda4)))document[FK(0x37a)]=FK(0x1048),null!==ah&&!0x1!==ah[FK(0x9ae)](FK(0xda4))||(this[FK(0x5b9)]['innerHTML']=FK(0x645));else{if(ag[FK(0x9ae)](FK(0xdb5)))FK(0xdb5)===ag?(document['title']=FK(0x1c4),this[FK(0x5b9)]['innerHTML']=FK(0xc6e)):(document[FK(0x37a)]=FK(0xcc5)+ag[FK(0xc97)]('/')[0x2],this['#page-container']['innerHTML']=FK(0x660));else{if(ag['startsWith'](FK(0xc91)))FK(0xc91)===ag?(document['title']=FK(0x896),this[FK(0x5b9)]['innerHTML']=FK(0x4f2)):(document['title']=FK(0x374)+ag[FK(0xc97)]('/')[0x2],this['#page-container'][FK(0x8c2)]=FK(0xe88));else{if(ag[FK(0x9ae)]('/questions'))FK(0x466)===ag?(document['title']=FK(0x819),this[FK(0x5b9)][FK(0x8c2)]=FK(0x2f0)):(document[FK(0x37a)]=FK(0x5b2)+ag[FK(0xc97)]('/')[0x2],this[FK(0x5b9)]['innerHTML']=FK(0x693));else{if(ag[FK(0x9ae)]('/share'))document[FK(0x37a)]=FK(0xbaa),this[FK(0x5b9)][FK(0x8c2)]=FK(0x2d9);else{if(ag[FK(0x9ae)](FK(0xe97))){if(FK(0xe97)===ag)document[FK(0x37a)]='Boxy\x20SVG\x20-\x20Error',this['#page-container'][FK(0x8c2)]=FK(0xa58);else{let aj=ag[FK(0xc97)]('/')[0x2],ak=await Bi[FK(0x2f6)]['getDocument'](FK(0xfa2),aj);document[FK(0x37a)]=FK(0xc7d)+ak['name'],null!==ah&&!0x1!==ah['startsWith'](FK(0x1c8)+aj)||(this['#page-container'][FK(0x8c2)]=FK(0xcf4)+aj+FK(0x7d3));}}else ag['startsWith'](FK(0x48c))?(document['title']=FK(0xe7b),this[FK(0x5b9)][FK(0x8c2)]=FK(0x48c)===ag?'<bx-legalpage></bx-legalpage>':FK(0x744)):FK(0x631)===ag?(document['title']='Boxy\x20SVG\x20-\x20Press',this[FK(0x5b9)][FK(0x8c2)]=FK(0xec1)):'/changelog'===ag?(document[FK(0x37a)]=FK(0xa6d),this['#page-container'][FK(0x8c2)]='<bx-changelogpage></bx-changelogpage>'):'/embed'===ag?(document['title']=FK(0x544),this['#page-container']['innerHTML']=FK(0xc9f)):FK(0xf80)===ag?(document['title']=FK(0xe77),this[FK(0x5b9)][FK(0x8c2)]=FK(0xe8a)):(document[FK(0x37a)]='Boxy\x20SVG\x20-\x20Error',this[FK(0x5b9)][FK(0x8c2)]='<bx-errorpage></bx-errorpage>');}}}}}}}this[FK(0xa0a)](FK(0xb87),ag);}af();});}#dh(){return new Promise(async af=>{const FL=a1;let ag=this['#page-container'][FL(0xe5b)];ag&&(await ag['whenReady'],ag['robots']?this['#robots-meta'][FL(0x223)]=ag[FL(0x694)]:this[FL(0x38e)][FL(0x223)]='index,\x20follow',ag[FL(0xe86)]?this[FL(0x104c)][FL(0xbd9)]=ag[FL(0xe86)]:this[FL(0x104c)]['href']=location[FL(0x1061)]),af();});}}customElements[bY(0x864)]('bx-portalwebapp',So);