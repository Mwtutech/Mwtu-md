// MWTU-MD V2 //

function _0x7b7c(){const _0x568304=['2kgrkFg','announcement','from','groupMetadata','An\x20error\x20occurred\x20while\x20updating\x20the\x20group\x20setting.','not_announcement','Error\x20during\x20scheduled\x20task\x20execution:','error','\x20at\x20','log','join','trim','3267228inwccN','\x20IST','Scheduling\x20','startsWith','h:mm\x20A','HH:mm','21HXDpnr','group','format','3423108jsrXFL','*📛\x20YOU\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*','\x20open*\x20or\x20*','sender','toLowerCase','Africa/Nairobi','1183286XgMqtn','4812070UFuazq','slice','groupSettingUpdate','length','body','\x20close*','Executing\x20scheduled\x20task\x20for\x20','participants','decodeJid','admin','\x20open\x2004:00\x20PM*','1598336PMVLfn','find','Group\x20successfully\x20opened.','4722200FGVTSi','Error:','\x22\x20at\x20','schedule','map','60578109VZlcPb','Group\x20successfully\x20closed.','close','split','Please\x20specify\x20a\x20setting\x20(open/close)\x20and\x20optionally\x20a\x20time.\x0a\x0aExample:\x0a*','reply','includes','sendMessage','*📛\x20BOT\x20MUST\x20BE\x20AN\x20ADMIN\x20TO\x20USE\x20THIS\x20COMMAND*','Group\x20will\x20be\x20set\x20to\x20\x22'];_0x7b7c=function(){return _0x568304;};return _0x7b7c();}(function(_0x5e1c01,_0x46a299){const _0x14b551=_0x5e85,_0xf8ad36=_0x5e1c01();while(!![]){try{const _0x9e097e=parseInt(_0x14b551(0x201))/0x1*(-parseInt(_0x14b551(0x1e6))/0x2)+-parseInt(_0x14b551(0x1fb))/0x3+-parseInt(_0x14b551(0x1d4))/0x4+-parseInt(_0x14b551(0x202))/0x5+parseInt(_0x14b551(0x1f2))/0x6*(-parseInt(_0x14b551(0x1f8))/0x7)+-parseInt(_0x14b551(0x1d7))/0x8+parseInt(_0x14b551(0x1dc))/0x9;if(_0x9e097e===_0x46a299)break;else _0xf8ad36['push'](_0xf8ad36['shift']());}catch(_0x44ac8a){_0xf8ad36['push'](_0xf8ad36['shift']());}}}(_0x7b7c,0xc85d4));function _0x5e85(_0x3df56e,_0x2765b3){const _0x7b7c4f=_0x7b7c();return _0x5e85=function(_0x5e8535,_0x43bbab){_0x5e8535=_0x5e8535-0x1cd;let _0x5840fb=_0x7b7c4f[_0x5e8535];return _0x5840fb;},_0x5e85(_0x3df56e,_0x2765b3);}import _0x1d4b9f from'node-cron';import _0x2b3cfd from'moment-timezone';let scheduledTasks={};const groupSetting=async(_0x4bcdad,_0x1a6ec0)=>{const _0x30aa7c=_0x5e85;try{const _0x2252c3=_0x4bcdad['body']['match'](/^[\\/!#.]/),_0x24467a=_0x2252c3?_0x2252c3[0x0]:'/',_0xee23fe=_0x4bcdad['body'][_0x30aa7c(0x1f5)](_0x24467a)?_0x4bcdad[_0x30aa7c(0x1cd)][_0x30aa7c(0x203)](_0x24467a[_0x30aa7c(0x205)])[_0x30aa7c(0x1df)]('\x20')[0x0]['toLowerCase']():'',_0x1087c9=[_0x30aa7c(0x1f9)];if(!_0x1087c9[_0x30aa7c(0x1e2)](_0xee23fe))return;if(!_0x4bcdad['isGroup'])return _0x4bcdad[_0x30aa7c(0x1e1)]('*📛\x20THIS\x20COMMAND\x20CAN\x20ONLY\x20BE\x20USED\x20IN\x20GROUPS*');const _0x5df243=await _0x1a6ec0[_0x30aa7c(0x1e9)](_0x4bcdad['from']),_0x112ab1=_0x5df243[_0x30aa7c(0x1d0)],_0xd6c050=await _0x1a6ec0[_0x30aa7c(0x1d1)](_0x1a6ec0['user']['id']),_0x4864f7=_0x112ab1['find'](_0x447925=>_0x447925['id']===_0xd6c050)?.[_0x30aa7c(0x1d2)],_0xfa1a80=_0x112ab1[_0x30aa7c(0x1d5)](_0x1234ac=>_0x1234ac['id']===_0x4bcdad[_0x30aa7c(0x1fe)])?.[_0x30aa7c(0x1d2)];if(!_0x4864f7)return _0x4bcdad[_0x30aa7c(0x1e1)](_0x30aa7c(0x1e4));if(!_0xfa1a80)return _0x4bcdad[_0x30aa7c(0x1e1)](_0x30aa7c(0x1fc));const _0x59af5e=_0x4bcdad[_0x30aa7c(0x1cd)]['slice'](_0x24467a[_0x30aa7c(0x205)]+_0xee23fe[_0x30aa7c(0x205)])[_0x30aa7c(0x1f1)]()[_0x30aa7c(0x1df)](/\s+/);if(_0x59af5e[_0x30aa7c(0x205)]<0x1)return _0x4bcdad[_0x30aa7c(0x1e1)](_0x30aa7c(0x1e0)+(_0x24467a+_0xee23fe)+'\x20open*\x20or\x20*'+(_0x24467a+_0xee23fe)+_0x30aa7c(0x1d3));const _0x5059b5=_0x59af5e[0x0][_0x30aa7c(0x1ff)](),_0x234e48=_0x59af5e[_0x30aa7c(0x203)](0x1)[_0x30aa7c(0x1f0)]('\x20');if(!_0x234e48){if(_0x5059b5===_0x30aa7c(0x1de))return await _0x1a6ec0[_0x30aa7c(0x204)](_0x4bcdad['from'],'announcement'),_0x4bcdad[_0x30aa7c(0x1e1)](_0x30aa7c(0x1dd));else return _0x5059b5==='open'?(await _0x1a6ec0[_0x30aa7c(0x204)](_0x4bcdad['from'],_0x30aa7c(0x1eb)),_0x4bcdad[_0x30aa7c(0x1e1)]('Group\x20successfully\x20opened.')):_0x4bcdad[_0x30aa7c(0x1e1)]('Invalid\x20setting.\x20Use\x20\x22open\x22\x20to\x20open\x20the\x20group\x20and\x20\x22close\x22\x20to\x20close\x20the\x20group.\x0a\x0aExample:\x0a*'+(_0x24467a+_0xee23fe)+_0x30aa7c(0x1fd)+(_0x24467a+_0xee23fe)+_0x30aa7c(0x1ce));}if(!/^\d{1,2}:\d{2}\s*(?:AM|PM)$/i['test'](_0x234e48))return _0x4bcdad[_0x30aa7c(0x1e1)]('Invalid\x20time\x20format.\x20Use\x20HH:mm\x20AM/PM\x20format.\x0a\x0aExample:\x0a*'+(_0x24467a+_0xee23fe)+'\x20open\x2004:00\x20PM*');const [_0x595fc0,_0x19332e]=_0x2b3cfd(_0x234e48,[_0x30aa7c(0x1f6),'hh:mm\x20A'])['format'](_0x30aa7c(0x1f7))[_0x30aa7c(0x1df)](':')[_0x30aa7c(0x1db)](Number),_0x38f437=_0x19332e+'\x20'+_0x595fc0+'\x20*\x20*\x20*';console[_0x30aa7c(0x1ef)](_0x30aa7c(0x1f4)+_0x5059b5+_0x30aa7c(0x1ee)+_0x38f437+'\x20IST'),scheduledTasks[_0x4bcdad['from']]&&(scheduledTasks[_0x4bcdad[_0x30aa7c(0x1e8)]]['stop'](),delete scheduledTasks[_0x4bcdad[_0x30aa7c(0x1e8)]]),scheduledTasks[_0x4bcdad['from']]=_0x1d4b9f[_0x30aa7c(0x1da)](_0x38f437,async()=>{const _0x16e134=_0x30aa7c;try{console[_0x16e134(0x1ef)](_0x16e134(0x1cf)+_0x5059b5+'\x20at\x20'+_0x2b3cfd()[_0x16e134(0x1fa)]('HH:mm')+_0x16e134(0x1f3));if(_0x5059b5===_0x16e134(0x1de))await _0x1a6ec0[_0x16e134(0x204)](_0x4bcdad[_0x16e134(0x1e8)],_0x16e134(0x1e7)),await _0x1a6ec0[_0x16e134(0x1e3)](_0x4bcdad['from'],{'text':_0x16e134(0x1dd)});else _0x5059b5==='open'&&(await _0x1a6ec0[_0x16e134(0x204)](_0x4bcdad['from'],_0x16e134(0x1eb)),await _0x1a6ec0[_0x16e134(0x1e3)](_0x4bcdad['from'],{'text':_0x16e134(0x1d6)}));}catch(_0x482106){console[_0x16e134(0x1ed)](_0x16e134(0x1ec),_0x482106),await _0x1a6ec0['sendMessage'](_0x4bcdad['from'],{'text':_0x16e134(0x1ea)});}},{'timezone':_0x30aa7c(0x200)}),_0x4bcdad[_0x30aa7c(0x1e1)](_0x30aa7c(0x1e5)+_0x5059b5+_0x30aa7c(0x1d9)+_0x234e48+'\x20IST.');}catch(_0x270626){console[_0x30aa7c(0x1ed)](_0x30aa7c(0x1d8),_0x270626),_0x4bcdad[_0x30aa7c(0x1e1)]('An\x20error\x20occurred\x20while\x20processing\x20the\x20command.');}};export default groupSetting;

// MWTU-MD V2 //