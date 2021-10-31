// Automatically generated with Reach 0.1.6 (09c295c6)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (09c295c6)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v182 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v183 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v186 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:44:40:application',
    fs: ['at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v187 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:57:31:application',
    fs: ['at ./index.rsh:45:54:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:42:13:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v188 = stdlib.digest(ctc1, [v187, v186]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v183, v188, v182],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc0],
    pay: [v183, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v58, from: v190 } = txn1;
      
      sim_r.txns.push({
        amt: v191,
        kind: 'to',
        tok: undefined
        });
      const v199 = stdlib.add(v194, v193);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v58, from: v190 } = txn1;
  ;
  const v199 = stdlib.add(v194, v193);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v199],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v192, v193, v199],
      evt_cnt: 0,
      funcNum: 2,
      lct: v194,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v271, time: v270, didSend: v150, from: v269 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v273 = stdlib.addressEq(v190, v269);
        stdlib.assert(v273, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v191,
          kind: 'from',
          to: v190,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v271, time: v270, didSend: v150, from: v269 } = txn3;
    ;
    const v273 = stdlib.addressEq(v190, v269);
    stdlib.assert(v273, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:39:29:application',
      fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v205], secs: v207, time: v206, didSend: v69, from: v204 } = txn2;
    const v209 = stdlib.add(v191, v191);
    ;
    const v211 = stdlib.add(v206, v193);
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v192, v204, v205, v209, v211, v187, v186],
      evt_cnt: 2,
      funcNum: 3,
      lct: v206,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v216, v217], secs: v219, time: v218, didSend: v80, from: v215 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v221 = stdlib.addressEq(v190, v215);
        stdlib.assert(v221, {
          at: './index.rsh:66:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v222 = stdlib.digest(ctc1, [v216, v217]);
        const v223 = stdlib.digestEq(v192, v222);
        stdlib.assert(v223, {
          at: 'reach standard library:62:17:application',
          fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v224 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:55:decimal', stdlib.UInt_max, 4), v205);
        const v225 = stdlib.add(v217, v224);
        const v226 = stdlib.mod(v225, stdlib.checkedBigNumberify('./index.rsh:6:71:decimal', stdlib.UInt_max, 3));
        const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v229 = [stdlib.checkedBigNumberify('./index.rsh:73:34:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:73:42:decimal', stdlib.UInt_max, 2)];
        const v230 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:74:37:decimal', stdlib.UInt_max, 1)];
        const v231 = v228 ? v229 : v230;
        const v232 = [stdlib.checkedBigNumberify('./index.rsh:72:34:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 0)];
        const v233 = v227 ? v232 : v231;
        const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:71:21:array', stdlib.UInt_max, 0)];
        const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:71:21:array', stdlib.UInt_max, 1)];
        const v236 = stdlib.mul(v234, v191);
        sim_r.txns.push({
          amt: v236,
          kind: 'from',
          to: v190,
          tok: undefined
          });
        const v241 = stdlib.mul(v235, v191);
        sim_r.txns.push({
          amt: v241,
          kind: 'from',
          to: v204,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v211],
      tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v254, time: v253, didSend: v124, from: v252 } = txn4;
      ;
      const v256 = stdlib.addressEq(v204, v252);
      stdlib.assert(v256, {
        at: 'reach standard library:206:7:dot',
        fs: ['at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:39:29:application',
        fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v216, v217], secs: v219, time: v218, didSend: v80, from: v215 } = txn3;
      ;
      const v221 = stdlib.addressEq(v190, v215);
      stdlib.assert(v221, {
        at: './index.rsh:66:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v222 = stdlib.digest(ctc1, [v216, v217]);
      const v223 = stdlib.digestEq(v192, v222);
      stdlib.assert(v223, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v224 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:55:decimal', stdlib.UInt_max, 4), v205);
      const v225 = stdlib.add(v217, v224);
      const v226 = stdlib.mod(v225, stdlib.checkedBigNumberify('./index.rsh:6:71:decimal', stdlib.UInt_max, 3));
      const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v229 = [stdlib.checkedBigNumberify('./index.rsh:73:34:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:73:42:decimal', stdlib.UInt_max, 2)];
      const v230 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:74:37:decimal', stdlib.UInt_max, 1)];
      const v231 = v228 ? v229 : v230;
      const v232 = [stdlib.checkedBigNumberify('./index.rsh:72:34:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 0)];
      const v233 = v227 ? v232 : v231;
      const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:71:21:array', stdlib.UInt_max, 0)];
      const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:71:21:array', stdlib.UInt_max, 1)];
      const v236 = stdlib.mul(v234, v191);
      ;
      const v241 = stdlib.mul(v235, v191);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v226), {
        at: './index.rsh:80:24:application',
        fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v58, from: v190 } = txn1;
  ;
  const v199 = stdlib.add(v194, v193);
  stdlib.protect(ctc2, await interact.acceptWager(v191), {
    at: './index.rsh:55:25:application',
    fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v203 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:56:48:application',
    fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v190, v191, v192, v193, v199, v203],
    evt_cnt: 1,
    funcNum: 1,
    lct: v194,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v191, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v205], secs: v207, time: v206, didSend: v69, from: v204 } = txn2;
      
      const v209 = stdlib.add(v191, v191);
      sim_r.txns.push({
        amt: v191,
        kind: 'to',
        tok: undefined
        });
      const v211 = stdlib.add(v206, v193);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v199],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v271, time: v270, didSend: v150, from: v269 } = txn3;
    ;
    const v273 = stdlib.addressEq(v190, v269);
    stdlib.assert(v273, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:39:29:application',
      fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:60:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v205], secs: v207, time: v206, didSend: v69, from: v204 } = txn2;
    const v209 = stdlib.add(v191, v191);
    ;
    const v211 = stdlib.add(v206, v193);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v211],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v190, v191, v192, v204, v205, v209, v211],
        evt_cnt: 0,
        funcNum: 4,
        lct: v206,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v254, time: v253, didSend: v124, from: v252 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v256 = stdlib.addressEq(v204, v252);
          stdlib.assert(v256, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v209,
            kind: 'from',
            to: v204,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc4, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v254, time: v253, didSend: v124, from: v252 } = txn4;
      ;
      const v256 = stdlib.addressEq(v204, v252);
      stdlib.assert(v256, {
        at: 'reach standard library:206:7:dot',
        fs: ['at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:39:29:application',
        fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:37:28:function exp)', 'at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v216, v217], secs: v219, time: v218, didSend: v80, from: v215 } = txn3;
      ;
      const v221 = stdlib.addressEq(v190, v215);
      stdlib.assert(v221, {
        at: './index.rsh:66:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v222 = stdlib.digest(ctc3, [v216, v217]);
      const v223 = stdlib.digestEq(v192, v222);
      stdlib.assert(v223, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v224 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:55:decimal', stdlib.UInt_max, 4), v205);
      const v225 = stdlib.add(v217, v224);
      const v226 = stdlib.mod(v225, stdlib.checkedBigNumberify('./index.rsh:6:71:decimal', stdlib.UInt_max, 3));
      const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v229 = [stdlib.checkedBigNumberify('./index.rsh:73:34:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:73:42:decimal', stdlib.UInt_max, 2)];
      const v230 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:74:37:decimal', stdlib.UInt_max, 1)];
      const v231 = v228 ? v229 : v230;
      const v232 = [stdlib.checkedBigNumberify('./index.rsh:72:34:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 0)];
      const v233 = v227 ? v232 : v231;
      const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:71:21:array', stdlib.UInt_max, 0)];
      const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:71:21:array', stdlib.UInt_max, 1)];
      const v236 = stdlib.mul(v234, v191);
      ;
      const v241 = stdlib.mul(v235, v191);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v226), {
        at: './index.rsh:80:24:application',
        fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 80
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:49:9:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:49:9:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
global Round
load 252
+
store 251
txn Sender
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 250
pop
global Round
load 251
<
assert
load 254
dup
+
store 249
// "CheckPay"
// "./index.rsh:58:7:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
global Round
load 252
+
store 248
load 255
load 254
itob
concat
load 253
concat
txn Sender
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 1
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:60:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:60:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_afterHandler2:
// Handler 3
dup
int 3
==
bz l8_afterHandler3
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 32
store 252
dup
int 104
extract_uint64
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 248
dup
int 8
extract_uint64
store 247
pop
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:66:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:66:9:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:68:18:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 253
load 248
itob
load 247
itob
concat
sha256
==
assert
load 247
int 4
load 251
-
+
int 3
%
store 246
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 246
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 246
int 2
==
select
dup
store 245
int 0
extract_uint64
load 254
*
dup
bz l9_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l9_checkTxnK:
pop
load 245
int 8
extract_uint64
load 254
*
dup
bz l10_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l10_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l11_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l8_afterHandler3:
// Handler 4
dup
int 4
==
bz l12_afterHandler4
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 32
store 252
dup
int 104
extract_uint64
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:67:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:67:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 252
txn Sender
==
assert
load 250
dup
bz l13_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l13_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l14_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l12_afterHandler4:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v216",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v216",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200125e3803806200125e833981016040819052620000269162000269565b60008080556040805160208101909152908152604080518351815260208085015180518284015290810151828401529091015160608201527f2b503748d0ce4d38b7205da582fbada74bd25ba4394ec04043207368c5ec170e9060800160405180910390a1602082015151620000a0903414600762000162565b602082015160400151620000b5904362000300565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015392600292909101906200018c565b50504360035550620003649050565b81620001885760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019a9062000327565b90600052602060002090601f016020900481019282620001be576000855562000209565b82601f10620001d957805160ff191683800117855562000209565b8280016001018555821562000209579182015b8281111562000209578251825591602001919060010190620001ec565b50620002179291506200021b565b5090565b5b808211156200021757600081556001016200021c565b604051606081016001600160401b03811182821017156200026357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027d57600080fd5b604080519081016001600160401b0381118282101715620002ae57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002c857600080fd5b620002d262000232565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033c57607f821691505b602082108114156200035e57634e487b7160e01b600052602260045260246000fd5b50919050565b610eea80620003746000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c15780638f2b3760146100d6578063ab53f2c6146100e9578063fd948b861461010c57005b80630d19a5fb146100775780631e93b0f11461008a5780634666ce22146100ae57005b3661007557005b005b610075610085366004610c00565b61011f565b34801561009657600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100bc366004610c00565b6102ba565b3480156100cd57600080fd5b5060015461009b565b6100756100e4366004610c23565b610554565b3480156100f557600080fd5b506100fe61083d565b6040516100a5929190610c35565b61007561011a366004610c00565b6108da565b61012f6003600054146019610a53565b6101498135158061014257506001548235145b601a610a53565b60008080556002805461015b90610c92565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c92565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ce3565b90506102008160c00151431015601b610a53565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc05796278260405161022f9190610d81565b60405180910390a161024334156017610a53565b606081015161025e906001600160a01b031633146018610a53565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f1935050505015801561029f573d6000803e3d6000fd5b50600080805560018190556102b690600290610a78565b5050565b6102ca6001600054146009610a53565b6102e4813515806102dd57506001548235145b600a610a53565b6000808055600280546102f690610c92565b80601f016020809104026020016040519081016040528092919081815260200182805461032290610c92565b801561036f5780601f106103445761010080835404028352916020019161036f565b820191906000526020600020905b81548152906001019060200180831161035257829003601f168201915b50505050508060200190518101906103879190610dab565b90506103a6604051806040016040528060008152602001600081525090565b6103b782608001514310600b610a53565b6040805184358152602080860135908201527fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a160208201516104039080610e44565b815260208201516104179034146008610a53565b60608201516104269043610e44565b8160200181815250506104816040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152858201356080840152835160a08401528382015160c0840152600360005543600155516105299183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061054d929190610ab5565b5050505050565b6105646003600054146014610a53565b61057e8135158061057757506001548235145b6015610a53565b60008080556002805461059090610c92565b80601f01602080910402602001604051908101604052809291908181526020018280546105bc90610c92565b80156106095780601f106105de57610100808354040283529160200191610609565b820191906000526020600020905b8154815290600101906020018083116105ec57829003601f168201915b50505050508060200190518101906106219190610ce3565b905061062b610b39565b61063c8260c0015143106016610a53565b604080518435815260208086013590820152848201358183015290517f50ba70e108cf0b98d2c9380757bd805c1176858d8c80b33125bd6a70c52bfbc79181900360600190a161068e34156011610a53565b81516106a6906001600160a01b031633146012610a53565b604080516106f2916106cc91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360400151146013610a53565b6003826080015160046107059190610e5c565b610713906040860135610e44565b61071d9190610e73565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146107775780511561076d57806040015161077d565b806020015161077d565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916107a79190610e95565b6040518115909202916000818181858888f193505050501580156107cf573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83602001518360800151602001516107f99190610e95565b6040518115909202916000818181858888f19350505050158015610821573d6000803e3d6000fd5b506000808055600181905561083890600290610a78565b505050565b60006060600054600280805461085290610c92565b80601f016020809104026020016040519081016040528092919081815260200182805461087e90610c92565b80156108cb5780601f106108a0576101008083540402835291602001916108cb565b820191906000526020600020905b8154815290600101906020018083116108ae57829003601f168201915b50505050509050915091509091565b6108ea600160005414600e610a53565b610904813515806108fd57506001548235145b600f610a53565b60008080556002805461091690610c92565b80601f016020809104026020016040519081016040528092919081815260200182805461094290610c92565b801561098f5780601f106109645761010080835404028352916020019161098f565b820191906000526020600020905b81548152906001019060200180831161097257829003601f168201915b50505050508060200190518101906109a79190610dab565b90506109bb81608001514310156010610a53565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d15826040516109ea9190610d81565b60405180910390a16109fe3415600c610a53565b8051610a16906001600160a01b03163314600d610a53565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561029f573d6000803e3d6000fd5b816102b65760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610a8490610c92565b6000825580601f10610a94575050565b601f016020900490600052602060002090810190610ab29190610bd3565b50565b828054610ac190610c92565b90600052602060002090601f016020900481019282610ae35760008555610b29565b82601f10610afc57805160ff1916838001178555610b29565b82800160010185558215610b29579182015b82811115610b29578251825591602001919060010190610b0e565b50610b35929150610bd3565b5090565b6040518060a0016040528060008152602001610b68604051806040016040528060008152602001600081525090565b8152602001610b8a604051806040016040528060008152602001600081525090565b8152602001610bac604051806040016040528060008152602001600081525090565b8152602001610bce604051806040016040528060008152602001600081525090565b905290565b5b80821115610b355760008155600101610bd4565b600060408284031215610bfa57600080fd5b50919050565b600060408284031215610c1257600080fd5b610c1c8383610be8565b9392505050565b600060608284031215610bfa57600080fd5b82815260006020604081840152835180604085015260005b81811015610c6957858101830151858201606001528201610c4d565b81811115610c7b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ca657607f821691505b60208210811415610bfa57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cde57600080fd5b919050565b600060e08284031215610cf557600080fd5b60405160e0810181811067ffffffffffffffff82111715610d2657634e487b7160e01b600052604160045260246000fd5b604052610d3283610cc7565b81526020830151602082015260408301516040820152610d5460608401610cc7565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b81358152604081016020830135801515808214610d9d57600080fd5b806020850152505092915050565b600060a08284031215610dbd57600080fd5b60405160a0810181811067ffffffffffffffff82111715610dee57634e487b7160e01b600052604160045260246000fd5b604052610dfa83610cc7565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e5757610e57610e2e565b500190565b600082821015610e6e57610e6e610e2e565b500390565b600082610e9057634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610eaf57610eaf610e2e565b50029056fea2646970667358221220e8b6d9f1e327118210187544cfd91a2d10e6538317718ff42a01fa5a3491f9fb64736f6c63430008090033`,
  BytecodeLen: 4702,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
