// MWTU-MD V2 //

(function(_0x2cc975,_0x5a08d5){const _0x4763b5=_0x178a,_0x230013=_0x2cc975();while(!![]){try{const _0x2a6508=parseInt(_0x4763b5(0x1ba))/0x1+parseInt(_0x4763b5(0x1cd))/0x2+parseInt(_0x4763b5(0x1ca))/0x3+-parseInt(_0x4763b5(0x1b9))/0x4+parseInt(_0x4763b5(0x1c0))/0x5*(-parseInt(_0x4763b5(0x1bc))/0x6)+-parseInt(_0x4763b5(0x1c6))/0x7*(parseInt(_0x4763b5(0x1d3))/0x8)+-parseInt(_0x4763b5(0x1b8))/0x9*(-parseInt(_0x4763b5(0x1d5))/0xa);if(_0x2a6508===_0x5a08d5)break;else _0x230013['push'](_0x230013['shift']());}catch(_0x1fb27a){_0x230013['push'](_0x230013['shift']());}}}(_0x3cf8,0x6042f));import _0x206579 from'tesseract.js';function _0x178a(_0x587272,_0x10b8e7){const _0x3cf8c9=_0x3cf8();return _0x178a=function(_0x178a3b,_0x3289d1){_0x178a3b=_0x178a3b-0x1b5;let _0x2305c3=_0x3cf8c9[_0x178a3b];return _0x2305c3;},_0x178a(_0x587272,_0x10b8e7);}import _0x3ae8b2 from'translate-google-api';import{writeFile}from'fs/promises';function _0x3cf8(){const _0x5555a8=['sendMessage','Error\x20extracting\x20and\x20translating\x20text\x20from\x20image.','length','Error\x20extracting\x20and\x20translating\x20text\x20from\x20image:','slice','split','trim','3231RtaJqs','1547552ntmTfE','105421oUbnZv','transl','2694VewXid','body','download','toLowerCase','3365OPDugf','quoted','join','Error\x20translating\x20text.','Usage:\x20/translate\x20<target_lang>\x20<text>\x0aExample:\x20/translate\x20en\x20कैसे\x20हो\x20भाई\x0aOr\x20reply\x20to\x20an\x20image/text\x20message\x20with\x20/translate\x20<target_lang>','imageMessage','889HMMYoa','from','trans','trt','950550JuxbRh','error','text','395182RWxGAU','Error\x20translating\x20quoted\x20text:','log','.png',':\x0a\x0a','now','32744Tvilvm','Error\x20translating\x20text:','27390kFNqhZ'];_0x3cf8=function(){return _0x5555a8;};return _0x3cf8();}const translateCommand=async(_0x5040c2,_0x3aa922,_0x1a49c2)=>{const _0x35929f=_0x178a,_0x2aa426=_0x5040c2[_0x35929f(0x1bd)]['match'](/^[\\/!#.]/),_0x2e1792=_0x2aa426?_0x2aa426[0x0]:'/',_0x59fd12=_0x5040c2['body']['startsWith'](_0x2e1792)?_0x5040c2['body'][_0x35929f(0x1b5)](_0x2e1792['length'])[_0x35929f(0x1b6)]('\x20')[0x0][_0x35929f(0x1bf)]():'',_0x49b599=_0x5040c2['body'][_0x35929f(0x1b5)](_0x2e1792[_0x35929f(0x1d8)]+_0x59fd12[_0x35929f(0x1d8)])[_0x35929f(0x1b7)]()[_0x35929f(0x1b6)]('\x20'),_0x25c91a=['translate',_0x35929f(0x1c8),_0x35929f(0x1bb),_0x35929f(0x1c9)];if(_0x25c91a['includes'](_0x59fd12)){const _0x543def=_0x49b599[0x0],_0x1fa7cb=_0x49b599[_0x35929f(0x1b5)](0x1)[_0x35929f(0x1c2)]('\x20');if(_0x5040c2[_0x35929f(0x1c1)]){if(_0x5040c2[_0x35929f(0x1c1)]['mtype']===_0x35929f(0x1c5))try{const _0x1dc52c=await _0x5040c2['quoted'][_0x35929f(0x1be)]();if(!_0x1dc52c)throw new Error('Failed\x20to\x20download\x20media.');const _0x301dcf='./'+Date[_0x35929f(0x1d2)]()+_0x35929f(0x1d0);await writeFile(_0x301dcf,_0x1dc52c);const {data:{text:_0xa3f04f}}=await _0x206579['recognize'](_0x301dcf,'eng',{'logger':_0xa50748=>console[_0x35929f(0x1cf)](_0xa50748)}),_0x4ce351=await _0x3ae8b2(_0xa3f04f,{'to':_0x543def}),_0x53995c=_0x4ce351[0x0],_0x249b11=_0x543def+':\x0a\x0a'+_0x53995c;await _0x3aa922[_0x35929f(0x1d6)](_0x5040c2[_0x35929f(0x1c7)],{'text':_0x249b11},{'quoted':_0x5040c2});}catch(_0x4f5c94){console[_0x35929f(0x1cb)](_0x35929f(0x1d9),_0x4f5c94),await _0x3aa922[_0x35929f(0x1d6)](_0x5040c2['from'],{'text':_0x35929f(0x1d7)},{'quoted':_0x5040c2});}else{if(_0x5040c2[_0x35929f(0x1c1)]['text'])try{const _0x1fdf5b=_0x5040c2['quoted'][_0x35929f(0x1cc)],_0x2dcbb6=await _0x3ae8b2(_0x1fdf5b,{'to':_0x543def}),_0x20d3f9=_0x2dcbb6[0x0],_0x24085b=_0x543def+_0x35929f(0x1d1)+_0x20d3f9;await _0x3aa922[_0x35929f(0x1d6)](_0x5040c2['from'],{'text':_0x24085b},{'quoted':_0x5040c2});}catch(_0xcca8c6){console[_0x35929f(0x1cb)](_0x35929f(0x1ce),_0xcca8c6),await _0x3aa922[_0x35929f(0x1d6)](_0x5040c2['from'],{'text':'Error\x20translating\x20quoted\x20text.'},{'quoted':_0x5040c2});}}}else{if(_0x1fa7cb&&_0x543def)try{const _0x2ead5d=await _0x3ae8b2(_0x1fa7cb,{'to':_0x543def}),_0x306a50=_0x2ead5d[0x0],_0x1ba6a8=_0x543def+_0x35929f(0x1d1)+_0x306a50;await _0x3aa922['sendMessage'](_0x5040c2[_0x35929f(0x1c7)],{'text':_0x1ba6a8},{'quoted':_0x5040c2});}catch(_0x543a70){console[_0x35929f(0x1cb)](_0x35929f(0x1d4),_0x543a70),await _0x3aa922[_0x35929f(0x1d6)](_0x5040c2[_0x35929f(0x1c7)],{'text':_0x35929f(0x1c3)},{'quoted':_0x5040c2});}else{const _0x5c3323=_0x35929f(0x1c4);await _0x3aa922['sendMessage'](_0x5040c2[_0x35929f(0x1c7)],{'text':_0x5c3323},{'quoted':_0x5040c2});}}}};export default translateCommand;

// MWTU-MD V2 //
