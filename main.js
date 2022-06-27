(()=>{var t={653:(t,e,r)=>{const o=r(585);t.exports=()=>{const t={hasBeenHit:!1,isShip:!1,offLimits:!1},e=Array(10).fill(structuredClone(t)).map((()=>Array(10).fill(structuredClone(t)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],n=(t,r)=>e?.[t]?.[r],a=(r,o,n=(()=>Object.assign(t,{offLimits:!0}))())=>(void 0===e?.[r]?.[o]||(e[r][o]=n),!0),i=(t,e)=>{a(t-1,e-1),a(t,e-1)},s=(t,r,o,n)=>{const s=n.getLength();if("vertical"===o){if(r>=0&&r+s-1<e.length){for(let e=0;e<s;e+=1)a(t,r+e,n),a(t+1,r+e),a(t-1,r+e);return((t,e,r)=>{i(t,e),a(t,e+r),a(t+1,e+r),a(t-1,e+r),a(t+1,e-1)})(t,r,s),!0}}else if("horizontal"===o&&t>=0&&t+s-1<e.length){for(let e=0;e<s;e+=1)a(t+e,r,n),a(t+e,r+1),a(t+e,r-1);return((t,e,r)=>{i(t,e),a(t+r,e),a(t-1,e+1),a(t+r,e+1),a(t+r,e-1)})(t,r,s),!0}return!1},l=()=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal";return{randomColumn:Math.floor(10*Math.random()),randomRow:Math.floor(10*Math.random()),randomDirection:t}};return{checkIfOffLimitZoneWasCorrectlyImplemented:t=>e.flat().filter((t=>!0===t.offLimits)).length===t+2,getLocation:n,receiveAttack:(t,r)=>{e[t][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>e.flat().every((t=>!1===t.isShip||!0===t.isShip&&!0===t.hasBeenHit&&t.getStatus().every((t=>"hit"===t)))),placeShip:s,randomlyPlaceShips:()=>{const t=[];for(let e=0;e<r.length;e+=1){const{randomColumn:o,randomRow:a,randomDirection:i}=l(),c=r[e],h=n(o,a);!0===h.isShip||!0===h.offLimits||!1===s(o,a,i,c)?e-=1:t.push({randomColumn:o,randomRow:a,randomDirection:i})}return t},makeRandomCoordinates:l}}},61:t=>{t.exports=(t="player")=>({getName:()=>t,attack:(t,e,{getLocation:r,receiveAttack:o})=>{const n=r(t,e);return void 0===n.hasBeenHit||n.getStatus().includes("unhit")?(o(t,e),"It's a hit!"):"You have already hit this spot!"}})},585:t=>{t.exports=(t,e="ship")=>{const r=Array(t).fill("unhit");return{name:e,getLength:()=>r.length,isSunk:()=>r.every((t=>"hit"===t)),hit:e=>{e<t&&(r[e]="hit")},getStatus:()=>r,isShip:!0}}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=(t,e,r,o)=>o.attack(t,e,r),e=(r,o,n)=>{const{randomColumn:a,randomRow:i}=o.makeRandomCoordinates(),s=o.getLocation(a,i);return"You have already hit this spot!"===t(a,i,o,n)?e(r,o,n):(s.isShip?r.classList.add("hit"):r.classList.add("miss"),{randomColumn:a,randomRow:i})};var o=r(653),n=r.n(o),a=r(585),i=r.n(a),s=r(61),l=r.n(s);const c=n()(),h=n()(),d=l()(),u=l()();c.randomlyPlaceShips(),h.placeShip(0,0,"horizontal",i()(5)),h.placeShip(3,4,"horizontal",i()(3)),h.placeShip(6,7,"horizontal",i()(2)),h.placeShip(9,1,"vertical",i()(3)),h.placeShip(5,9,"horizontal",i()(4));const m=(()=>{const t={};return{publish:function(e,r){Array.isArray(t[e])&&t[e].forEach((t=>{t(r)}))},subscribe:function e(r,o){Array.isArray(e[r])||(t[r]=[]),t[r].push(o);const n=t[r].length-1;return{unsubscribe(){t[r].splice(n,1)}}}}})();((t,e,r,o,n)=>{const a=document.querySelector("div.enemy-board");for(let i=0;i<10;i+=1)for(let s=0;s<10;s+=1){const l=a.querySelector(`.cell:nth-child(${10*s+i+1})`);l.setAttribute("column",i),l.setAttribute("row",s),l.addEventListener("click",(()=>{n.publish("click",{cell:l,column:i,row:s,playerBoard:t,enemyBoard:e,player:r,enemy:o})}),{once:!0})}})(c,h,d,u,m),m.subscribe("click",(({cell:r,column:o,row:n,playerBoard:a,enemyBoard:i,player:s,enemy:l})=>{((e,r,o,n,a)=>{n.getLocation(r,o).isShip?e.classList.add("hit"):e.classList.add("miss"),t(r,o,n,a)})(r,o,n,i,s);const{randomColumn:c,randomRow:h}=e(r,a,l);((t,e)=>{const r=document.querySelector(`.cell[column='${t}'][row='${e}']`);r.classList.contains("ship")?r.classList.add("hit"):r.classList.add("miss")})(c,h)})),(({getLocation:t})=>{const e=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const n=e.querySelector(`.cell:nth-child(${10*o+r+1})`);n.setAttribute("column",r),n.setAttribute("row",o),t(o,r).isShip&&n.classList.add("ship")}})(c)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0QsR0FBUVQsUUFDekJ3QyxFQUFLMkMsVUFBVUMsSUFBSSxVQ3ZEbkMwQixDQUFrQjlCLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHsgaGFzQmVlbkhpdDogZmFsc2UsIGlzU2hpcDogZmFsc2UsIG9mZkxpbWl0czogZmFsc2UgfVxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IEFycmF5KDEwKVxuICAgICAgICAuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSlcbiAgICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSkpXG5cbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgY3JlYXRlU2hpcCg1LCAnQ2FycmllcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDQsICdCYXR0bGVzaGlwJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMywgJ0Rlc3Ryb3llcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdTdWJtYXJpbmUnKSxcbiAgICAgICAgY3JlYXRlU2hpcCgyLCAnUGF0cm9sIEJvYXQnKSxcbiAgICBdXG5cbiAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayA9ICgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZXZlcnkoXG4gICAgICAgICAgICAoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gZmFsc2UpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTaGlwID09PSB0cnVlICYmIGNlbGwuaGFzQmVlbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VsbC5nZXRTdGF0dXMoKS5ldmVyeSgodW5pdCkgPT4gdW5pdCA9PT0gJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSBmYWxzZSkgfHxcbiAgICAgICAgICAgIC8vIChwb3NpdGlvbi5pc1NoaXAgPT09IHRydWUgJiYgcG9zaXRpb24uaGFzQmVlbkhpdCA9PT0gdHJ1ZSlcbiAgICAgICAgKVxuXG4gICAgY29uc3QgY3JlYXRlT2ZmTGltaXRMb2NhdGlvbiA9ICgpID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1wdHlDZWxsLCB7IG9mZkxpbWl0czogdHJ1ZSB9KVxuXG4gICAgY29uc3QgZ2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3cpID0+IGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddXG5cbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IChjb2x1bW4sIHJvdywgc2hpcCA9IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24oKSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkPy5bY29sdW1uXT8uW3Jvd10gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWVcbiAgICAgICAgZ2FtZUJvYXJkW2NvbHVtbl1bcm93XSA9IHNoaXBcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgLSAxKVxuICAgICAgICAvLyB0b3BcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwID0gKFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICkgPT4ge1xuICAgICAgICAvLyBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHNoaXAgaXRzZWxmKGllLiBhIGhvcml6b250YWwgc2hpcCdzIGJvdHRvbSBpcyB0byB0aGUgcmlnaHQpXG5cbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyArIDEpXG4gICAgICAgIC8vIGJvdHRvbS1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cgKyAxKVxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JWZXJ0aWNhbGx5UG9zaXRpb25lZFNoaXAgPSAoXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgICBzaGlwTGVuZ3RoXG4gICAgKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9ucyByZWxhdGl2ZSB0byBob3cgdGhlIHVzZXIgc2VlcyBpdChpZS4gYSB2ZXJ0aWNhbCBzaGlwJ3MgYm90dG9tIGlzIHRvIHRoZSBib3R0b20pXG5cbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3cpXG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIGJvdHRvbS1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyB0b3AtcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29sdW1uLCByb3csIGRpcmVjdGlvbiwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBpZiAocm93ID49IDAgJiYgcm93ICsgc2hpcExlbmd0aCAtIDEgPCBnYW1lQm9hcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgKyBpLCBzaGlwKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3cgKyBpKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyBpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JWZXJ0aWNhbGx5UG9zaXRpb25lZFNoaXAoXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBzaGlwTGVuZ3RoXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPj0gMCAmJiBjb2x1bW4gKyBzaGlwTGVuZ3RoIC0gMSA8IGdhbWVCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpLCByb3csIHNoaXApXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyArIDEpXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xuICAgICAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcERldGFpbHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSA9XG4gICAgICAgICAgICAgICAgbWFrZVJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tpXVxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihyYW5kb21Db2x1bW4sIHJhbmRvbVJvdylcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5pc1NoaXAgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5vZmZMaW1pdHMgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAocmFuZG9tQ29sdW1uLCByYW5kb21Sb3csIHJhbmRvbURpcmVjdGlvbiwgc2hpcCkgPT09XG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpIC09IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcERldGFpbHMucHVzaCh7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcERldGFpbHNcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10uaGFzQmVlbkhpdCA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQgPSAoc2hpcExlbmd0aCkgPT5cbiAgICAgICAgZ2FtZUJvYXJkLmZsYXQoKS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQub2ZmTGltaXRzID09PSB0cnVlKVxuICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgc2hpcExlbmd0aCArIDJcbiAgICAvLyBhZGRpbmcgc2hpcExlbmd0aCBwbHVzIHR3byBiZWNhdXNlIGZvciBldmVyeSBpbmNyZWFzZSBpbiB0aGUgc2l6ZSBvZiBzaGlwLCB0aGUgem9uZXMgY292ZXJlZCBpbmNyZWFzZSBieSAyIHVuaXRzXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQsXG4gICAgICAgIGdldExvY2F0aW9uLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHMsXG4gICAgICAgIG1ha2VSYW5kb21Db29yZGluYXRlcyxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlR2FtZUJvYXJkXG4iLCJjb25zdCBjcmVhdGVQbGF5ZXIgPSAobmFtZSA9ICdwbGF5ZXInKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWVcblxuICAgIGNvbnN0IGF0dGFjayA9IChjb2x1bW4sIHJvdywgeyBnZXRMb2NhdGlvbiwgcmVjZWl2ZUF0dGFjayB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oY29sdW1uLCByb3cpXG4gICAgICAgIGlmIChsb2NhdGlvbi5oYXNCZWVuSGl0ID09PSB1bmRlZmluZWQgfHwgbG9jYXRpb24uZ2V0U3RhdHVzKCkuaW5jbHVkZXMoJ3VuaGl0JykpIHtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soY29sdW1uLCByb3cpXG4gICAgICAgICAgICByZXR1cm4gXCJJdCdzIGEgaGl0IVwiXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ1lvdSBoYXZlIGFscmVhZHkgaGl0IHRoaXMgc3BvdCEnXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgYXR0YWNrLFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGF5ZXJcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCBuYW1lID0gJ3NoaXAnKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBBcnJheShsZW5ndGgpLmZpbGwoJ3VuaGl0JylcblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHN0YXR1cy5sZW5ndGhcblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc3RhdHVzW3Bvc2l0aW9uXSA9ICdoaXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdGF0dXMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gJ2hpdCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRTdGF0dXMsXG4gICAgICAgIGlzU2hpcDogdHJ1ZSxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hpcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImNvbnN0IGhhbmRsZUF0dGFjayA9IChjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCwgcGxheWVyKSA9PlxuICAgIHBsYXllci5hdHRhY2soY29sdW1uLCByb3csIGVuZW15Qm9hcmQpXG5cbmNvbnN0IGF0dGFja0VuZW15Q2VsbCA9IChjZWxsLCBjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3QgY2VsbExvY2F0aW9uID0gZW5lbXlCb2FyZC5nZXRMb2NhdGlvbihjb2x1bW4sIHJvdylcbiAgICBpZiAoY2VsbExvY2F0aW9uLmlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgfVxuICAgIGhhbmRsZUF0dGFjayhjb2x1bW4sIHJvdywgZW5lbXlCb2FyZCwgcGxheWVyKVxufVxuXG5jb25zdCBhdHRhY2tQbGF5ZXJDZWxsID0gKGNlbGwsIHBsYXllckJvYXJkLCBlbmVteSkgPT4ge1xuICAgIGNvbnN0IHsgcmFuZG9tQ29sdW1uLCByYW5kb21Sb3cgfSA9IHBsYXllckJvYXJkLm1ha2VSYW5kb21Db29yZGluYXRlcygpXG4gICAgY29uc3QgY2VsbExvY2F0aW9uID0gcGxheWVyQm9hcmQuZ2V0TG9jYXRpb24ocmFuZG9tQ29sdW1uLCByYW5kb21Sb3cpXG4gICAgaWYoaGFuZGxlQXR0YWNrKHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCBwbGF5ZXJCb2FyZCwgZW5lbXkpID09PSAnWW91IGhhdmUgYWxyZWFkeSBoaXQgdGhpcyBzcG90IScpIHJldHVybiBhdHRhY2tQbGF5ZXJDZWxsKGNlbGwsIHBsYXllckJvYXJkLCBlbmVteSlcbiAgICBpZiAoY2VsbExvY2F0aW9uLmlzU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICB9XG5cbiAgICByZXR1cm4geyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdyB9XG59XG5cbmNvbnN0IHJlbmRlckVuZW15QXRhY2tzID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2VsbFtjb2x1bW49JyR7Y29sdW1ufSddW3Jvdz0nJHtyb3d9J11gXG4gICAgKVxuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIH1cbn1cblxuLy8gaHR0cHM6Ly9qc21hbmlmZXN0LmNvbS90aGUtcHVibGlzaC1zdWJzY3JpYmUtcGF0dGVybi1pbi1qYXZhc2NyaXB0L1xuXG5leHBvcnQgY29uc3QgcHViU3ViID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0ge31cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZVtldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKVxuICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyUGxheWVyU2hpcHMgPSAoeyBnZXRMb2NhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnBsYXllci1ib2FyZCcpXG5cbiAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAxMDsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdyArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcGxheWVyQm9hcmRBcmVhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5jZWxsOm50aC1jaGlsZCgke3JvdyAqIDEwICsgY29sdW1uICsgMX0pYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbHVtbicsIGNvbHVtbilcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdyb3cnLCByb3cpXG4gICAgICAgICAgICBpZiAoZ2V0TG9jYXRpb24ocm93LCBjb2x1bW4pLmlzU2hpcCkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQgPSAoXG4gICAgcGxheWVyQm9hcmQsXG4gICAgZW5lbXlCb2FyZCxcbiAgICBwbGF5ZXIsXG4gICAgZW5lbXksXG4gICAgcHNcbikgPT4ge1xuICAgIGNvbnN0IGVuZW15Qm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmVuZW15LWJvYXJkJylcblxuICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIC8vIENyZWRpdGluZyBmb3JtdWxhIHRvIGNhbGN1bGF0ZSBudGgtY2hpbGQgdXNpbmcgbmVzdGVkIGxvb3A6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg4NzI2NjIvbWF0aC10by1kZXRlcm1pbmUtaXRlbS1pbmRleC1iYXNlZC1vbi1jb2wtcm93LXNlbGVjdGlvbi1pbi1ncmlkXG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZW5lbXlCb2FyZEFyZWEucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmNlbGw6bnRoLWNoaWxkKCR7cm93ICogMTAgKyBjb2x1bW4gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29sdW1uJywgY29sdW1uKVxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3JvdycsIHJvdylcblxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcy5wdWJsaXNoKCdjbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdHRhY2sgPSAoe1xuICAgIGNlbGwsXG4gICAgY29sdW1uLFxuICAgIHJvdyxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBlbmVteUJvYXJkLFxuICAgIHBsYXllcixcbiAgICBlbmVteSxcbn0pID0+IHtcbiAgICAvLyBodW1hbiBwbGF5ZXIgYXR0YWNraW5nIGNvbXB1dGVyXG4gICAgYXR0YWNrRW5lbXlDZWxsKGNlbGwsIGNvbHVtbiwgcm93LCBlbmVteUJvYXJkLCBwbGF5ZXIpXG4gICAgLy8gY29tcHV0ZXIgYXR0YWNraW5nIGh1bWFuXG4gICAgY29uc3QgeyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdyB9ID0gYXR0YWNrUGxheWVyQ2VsbChcbiAgICAgICAgY2VsbCxcbiAgICAgICAgcGxheWVyQm9hcmQsXG4gICAgICAgIGVuZW15XG4gICAgKVxuICAgIHJlbmRlckVuZW15QXRhY2tzKHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93KVxufVxuIiwiaW1wb3J0IHsgYWRkTGlzdGVuZXJzVG9FbmVteUJvYXJkLCByZW5kZXJQbGF5ZXJTaGlwcyxwdWJTdWIsIGF0dGFja30gZnJvbSAnLi9kb20nXG5cbmltcG9ydCBjcmVhdGVHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQvZ2FtZWJvYXJkJ1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi9zaGlwL3NoaXAnXG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcidcblxuY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKVxuY29uc3QgZW5lbXlCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpXG5cbmNvbnN0IHBsYXllciA9IGNyZWF0ZVBsYXllcigpXG5cbmNvbnN0IGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKClcblxucGxheWVyQm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKClcbmVuZW15Qm9hcmQucGxhY2VTaGlwKDAsIDAsICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCg1KSlcbmVuZW15Qm9hcmQucGxhY2VTaGlwKDMsIDQsICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCgzKSlcbmVuZW15Qm9hcmQucGxhY2VTaGlwKDYsIDcsICdob3Jpem9udGFsJywgY3JlYXRlU2hpcCgyKSlcbmVuZW15Qm9hcmQucGxhY2VTaGlwKDksIDEsICd2ZXJ0aWNhbCcsIGNyZWF0ZVNoaXAoMykpXG5lbmVteUJvYXJkLnBsYWNlU2hpcCg1LCA5LCAnaG9yaXpvbnRhbCcsIGNyZWF0ZVNoaXAoNCkpXG5cbmNvbnN0IHBzID0gcHViU3ViKClcblxuYWRkTGlzdGVuZXJzVG9FbmVteUJvYXJkKHBsYXllckJvYXJkLCBlbmVteUJvYXJkLCBwbGF5ZXIsIGNvbXB1dGVyLCBwcylcblxucHMuc3Vic2NyaWJlKCdjbGljaycsIGF0dGFjaylcblxuXG5yZW5kZXJQbGF5ZXJTaGlwcyhwbGF5ZXJCb2FyZCkiXSwibmFtZXMiOlsiY3JlYXRlU2hpcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbXB0eUNlbGwiLCJoYXNCZWVuSGl0IiwiaXNTaGlwIiwib2ZmTGltaXRzIiwiZ2FtZUJvYXJkIiwiQXJyYXkiLCJmaWxsIiwic3RydWN0dXJlZENsb25lIiwibWFwIiwic2hpcHMiLCJnZXRMb2NhdGlvbiIsImNvbHVtbiIsInJvdyIsInNldExvY2F0aW9uIiwic2hpcCIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZU9mZkxpbWl0TG9jYXRpb24iLCJ1bmRlZmluZWQiLCJhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyIsInBsYWNlU2hpcCIsImRpcmVjdGlvbiIsInNoaXBMZW5ndGgiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJpIiwiYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwIiwiYWRkT2ZmTGltaXRBcmVhRm9ySG9yaXpvbnRhbGx5UG9zaXRpb25lZFNoaXAiLCJtYWtlUmFuZG9tQ29vcmRpbmF0ZXMiLCJyYW5kb21EaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db2x1bW4iLCJyYW5kb21Sb3ciLCJjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQiLCJmbGF0IiwiZmlsdGVyIiwiZWxlbWVudCIsInJlY2VpdmVBdHRhY2siLCJjaGVja0lmQWxsU2hpcHNIYXZlU3VuayIsImV2ZXJ5IiwiY2VsbCIsImdldFN0YXR1cyIsInVuaXQiLCJyYW5kb21seVBsYWNlU2hpcHMiLCJzaGlwRGV0YWlscyIsImxvY2F0aW9uIiwicHVzaCIsIm5hbWUiLCJnZXROYW1lIiwiYXR0YWNrIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJpc1N1bmsiLCJwb3NpdGlvbiIsImhpdCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaGFuZGxlQXR0YWNrIiwiZW5lbXlCb2FyZCIsInBsYXllciIsImF0dGFja1BsYXllckNlbGwiLCJwbGF5ZXJCb2FyZCIsImVuZW15IiwiY2VsbExvY2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29tcHV0ZXIiLCJwcyIsInN1YnNjcmliZXJzIiwicHVibGlzaCIsImV2ZW50TmFtZSIsImRhdGEiLCJpc0FycmF5IiwiZm9yRWFjaCIsImNhbGxiYWNrIiwic3Vic2NyaWJlIiwiaW5kZXgiLCJ1bnN1YnNjcmliZSIsInNwbGljZSIsInB1YlN1YiIsImVuZW15Qm9hcmRBcmVhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQiLCJhdHRhY2tFbmVteUNlbGwiLCJjb250YWlucyIsInJlbmRlckVuZW15QXRhY2tzIiwicGxheWVyQm9hcmRBcmVhIiwicmVuZGVyUGxheWVyU2hpcHMiXSwic291cmNlUm9vdCI6IiJ9