(()=>{var t={653:(t,e,r)=>{const o=r(585);t.exports=()=>{const t={hasBeenHit:!1,isShip:!1,offLimits:!1},e=Array(10).fill(structuredClone(t)).map((()=>Array(10).fill(structuredClone(t)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],n=(t,r)=>e?.[t]?.[r],i=(r,o,n=(()=>Object.assign(t,{offLimits:!0}))())=>{e?.[r]?.[o]&&(e[r][o]=n)},a=(t,e)=>{i(t-1,e-1),i(t-1,e),i(t,e-1)},s=(t,e,r,o)=>{const n=o.getLength();if("vertical"===r){if(e+n<=10){for(let r=0;r<n;r+=1)i(t,e+r,o),i(t+1,e+r),i(t-1,e+r);return((t,e,r)=>{a(t,e),i(t,e+r),i(t+1,e+r),i(t-1,e+r),i(t+1,e-1)})(t,e,n),!0}}else if("horizontal"===r&&t+n<=10){for(let r=0;r<n;r+=1)i(t+r,e,o),i(t+r,e+1),i(t+r,e-1);return((t,e,r)=>{a(t,e),i(t+r,e),i(t-1,e+1),i(t+r,e+1),i(t+r,e-1)})(t,e,n),!0}return!1},l=()=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal";return{randomColumn:Math.floor(10*Math.random()),randomRow:Math.floor(10*Math.random()),randomDirection:t}};return{checkIfOffLimitZoneWasCorrectlyImplemented:t=>e.flat().filter((t=>!0===t.offLimits)).length===t+2,getLocation:n,receiveAttack:(t,r)=>{e[t][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>e.flat().every((t=>!1===t.isShip||!0===t.isShip&&!0===t.hasBeenHit&&t.getStatus().every((t=>"hit"===t)))),placeShip:s,randomlyPlaceShips:()=>{const t=[];for(let e=0;e<r.length;e+=1){const{randomColumn:o,randomRow:i,randomDirection:a}=l(),c=r[e],h=n(o,i);!0===h.isShip||!0===h.offLimits||!1===s(o,i,a,c)?e-=1:t.push({randomColumn:o,randomRow:i,randomDirection:a})}return t}}}},585:t=>{t.exports=(t,e="ship")=>{const r=Array(t).fill("unhit");return{name:e,getLength:()=>r.length,isSunk:()=>r.every((t=>"hit"===t)),hit:e=>{e<t&&(r[e]="hit")},getStatus:()=>r,isShip:!0}}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=(t,e,r,o)=>{const n=o(e,r);n.isShip&&(t.classList.add("hit"),n.isSunk()&&t.classList.add("sunk"))};var e=r(653),o=r.n(e);const n=o()(),i=o()();n.randomlyPlaceShips(),i.randomlyPlaceShips(),(({getLocation:e})=>{const r=document.querySelector("div.enemy-board");for(let o=0;o<10;o+=1)for(let n=0;n<10;n+=1){const i=r.querySelector(`.cell:nth-child(${10*n+o+1})`);i.addEventListener("click",(()=>{t(i,o,n,e)}))}})(i),(({getLocation:t})=>{const e=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const n=e.querySelector(`.cell:nth-child(${10*o+r+1})`);t(o,r).isShip&&n.classList.add("ship")}})(n)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBR0EsRUFBTSxHQUFJQSxHQUFPLEVBQUcsQ0FDbEMsTUFBTTZCLEVBQU82QyxFQUFnQkgsY0FDekIsbUJBQXlCLEdBQU52RSxFQUFXRCxFQUFTLE1BRXZDRCxFQUFZRSxFQUFLRCxHQUFRVCxRQUN6QnVDLEVBQUtvQyxVQUFVQyxJQUFJLFVDUG5DUyxDQUEwQlIsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHsgaGFzQmVlbkhpdDogZmFsc2UsIGlzU2hpcDogZmFsc2UsIG9mZkxpbWl0czogZmFsc2UgfVxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IEFycmF5KDEwKVxuICAgICAgICAuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSlcbiAgICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSkpXG5cbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgY3JlYXRlU2hpcCg1LCAnQ2FycmllcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDQsICdCYXR0bGVzaGlwJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMywgJ0Rlc3Ryb3llcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdTdWJtYXJpbmUnKSxcbiAgICAgICAgY3JlYXRlU2hpcCgyLCAnUGF0cm9sIEJvYXQnKSxcbiAgICBdXG5cbiAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayA9ICgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZXZlcnkoXG4gICAgICAgICAgICAoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gZmFsc2UpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTaGlwID09PSB0cnVlICYmIGNlbGwuaGFzQmVlbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VsbC5nZXRTdGF0dXMoKS5ldmVyeSgodW5pdCkgPT4gdW5pdCA9PT0gJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSBmYWxzZSkgfHxcbiAgICAgICAgICAgIC8vIChwb3NpdGlvbi5pc1NoaXAgPT09IHRydWUgJiYgcG9zaXRpb24uaGFzQmVlbkhpdCA9PT0gdHJ1ZSlcbiAgICAgICAgKVxuXG4gICAgY29uc3QgY3JlYXRlT2ZmTGltaXRMb2NhdGlvbiA9ICgpID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1wdHlDZWxsLCB7IG9mZkxpbWl0czogdHJ1ZSB9KVxuXG4gICAgY29uc3QgZ2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3cpID0+IGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddXG5cbiAgICBjb25zdCBzZXRMb2NhdGlvbiA9IChjb2x1bW4sIHJvdywgc2hpcCA9IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24oKSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZUJvYXJkPy5bY29sdW1uXT8uW3Jvd10pIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10gPSBzaGlwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgLSAxKVxuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdylcbiAgICAgICAgLy8gdG9wXG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93IC0gMSlcbiAgICB9XG5cbiAgICBjb25zdCBhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcCA9IChcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICAgIHNoaXBMZW5ndGhcbiAgICApID0+IHtcbiAgICAgICAgLy8gcG9zaXRpb25zIHJlbGF0aXZlIHRvIHRoZSBzaGlwIGl0c2VsZihpZS4gYSBob3Jpem9udGFsIHNoaXAncyBib3R0b20gaXMgdG8gdGhlIHJpZ2h0KVxuXG4gICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvclNoaXBzKGNvbHVtbiwgcm93KVxuICAgICAgICAvLyBib3R0b21cbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93KVxuICAgICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cgKyAxKVxuICAgICAgICAvLyBib3R0b20tcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgc2hpcExlbmd0aCwgcm93ICsgMSlcbiAgICAgICAgLy8gdG9wLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIHNoaXBMZW5ndGgsIHJvdyAtIDEpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwID0gKFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICkgPT4ge1xuICAgICAgICAvLyBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gaG93IHRoZSB1c2VyIHNlZXMgaXQoaWUuIGEgdmVydGljYWwgc2hpcCdzIGJvdHRvbSBpcyB0byB0aGUgYm90dG9tKVxuXG4gICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvclNoaXBzKGNvbHVtbiwgcm93KVxuICAgICAgICAvLyBib3R0b21cbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgKyBzaGlwTGVuZ3RoKVxuICAgICAgICAvLyBib3R0b20tcmlnaHRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgMSwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgLy8gdG9wLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIDEsIHJvdyAtIDEpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbHVtbiwgcm93LCBkaXJlY3Rpb24sIHNoaXApID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgaWYgKHJvdyArIHNoaXBMZW5ndGggPD0gMTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyArIGksIHNoaXApXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIDEsIHJvdyArIGkpXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyArIGkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcChcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIHNoaXBMZW5ndGhcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYgKGNvbHVtbiArIHNoaXBMZW5ndGggPD0gMTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBpLCByb3csIHNoaXApXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyArIDEpXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdyAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xuICAgICAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcERldGFpbHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSA9XG4gICAgICAgICAgICAgICAgbWFrZVJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tpXVxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihyYW5kb21Db2x1bW4sIHJhbmRvbVJvdylcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5pc1NoaXAgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5vZmZMaW1pdHMgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAocmFuZG9tQ29sdW1uLCByYW5kb21Sb3csIHJhbmRvbURpcmVjdGlvbiwgc2hpcCkgPT09XG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpIC09IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcERldGFpbHMucHVzaCh7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcERldGFpbHNcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10uaGFzQmVlbkhpdCA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQgPSAoc2hpcExlbmd0aCkgPT5cbiAgICAgICAgZ2FtZUJvYXJkLmZsYXQoKS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQub2ZmTGltaXRzID09PSB0cnVlKVxuICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgc2hpcExlbmd0aCArIDJcbiAgICAvLyBhZGRpbmcgc2hpcExlbmd0aCBwbHVzIHR3byBiZWNhdXNlIGZvciBldmVyeSBpbmNyZWFzZSBpbiB0aGUgc2l6ZSBvZiBzaGlwLCB0aGUgem9uZXMgY292ZXJlZCBpbmNyZWFzZSBieSAyIHVuaXRzXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQsXG4gICAgICAgIGdldExvY2F0aW9uLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHMsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUdhbWVCb2FyZFxuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgsIG5hbWUgPSAnc2hpcCcpID0+IHtcblxuICAgIGNvbnN0IHN0YXR1cyA9IEFycmF5KGxlbmd0aCkuZmlsbCgndW5oaXQnKVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gc3RhdHVzLmxlbmd0aFxuXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzXG5cbiAgICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGF0dXNbcG9zaXRpb25dID0gJ2hpdCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHN0YXR1cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSAnaGl0JylcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBoaXQsXG4gICAgICAgIGdldFN0YXR1cyxcbiAgICAgICAgaXNTaGlwOiB0cnVlLFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiY29uc3QgY2hlY2tJZkVuZW15Q2VsbEhhc1NoaXAgPSAoY2VsbCwgY29sdW1uLCByb3csIGdldExvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgY2VsbExvY2F0aW9uID0gZ2V0TG9jYXRpb24oY29sdW1uLCByb3cpXG4gICAgaWYgKGNlbGxMb2NhdGlvbi5pc1NoaXApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICBpZiAoY2VsbExvY2F0aW9uLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkTGlzdGVuZXJzVG9QbGF5ZXJCb2FyZCA9ICh7IGdldExvY2F0aW9uIH0pID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucGxheWVyLWJvYXJkJylcblxuICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDEwOyBjb2x1bW4gKz0gMSkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJCb2FyZEFyZWEucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmNlbGw6bnRoLWNoaWxkKCR7cm93ICogMTAgKyBjb2x1bW4gKyAxfSlgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoZ2V0TG9jYXRpb24ocm93LCBjb2x1bW4pLmlzU2hpcCkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQgPSAoeyBnZXRMb2NhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgZW5lbXlCb2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZW5lbXktYm9hcmQnKVxuXG4gICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMTA7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3cgKz0gMSkge1xuICAgICAgICAgICAgLy8gQ3JlZGl0aW5nIGZvcm11bGEgdG8gY2FsY3VsYXRlIG50aC1jaGlsZCB1c2luZyBuZXN0ZWQgbG9vcDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODg3MjY2Mi9tYXRoLXRvLWRldGVybWluZS1pdGVtLWluZGV4LWJhc2VkLW9uLWNvbC1yb3ctc2VsZWN0aW9uLWluLWdyaWRcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBlbmVteUJvYXJkQXJlYS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuY2VsbDpudGgtY2hpbGQoJHtyb3cgKiAxMCArIGNvbHVtbiArIDF9KWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tJZkVuZW15Q2VsbEhhc1NoaXAoY2VsbCwgY29sdW1uLCByb3csIGdldExvY2F0aW9uKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGFkZExpc3RlbmVyc1RvUGxheWVyQm9hcmQsIGFkZExpc3RlbmVyc1RvRW5lbXlCb2FyZH0gZnJvbSAnLi9kb20nXG5cbmltcG9ydCBjcmVhdGVHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQvZ2FtZWJvYXJkJ1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpXG5jb25zdCBlbmVteUJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcblxucGxheWVyQm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKClcbmVuZW15Qm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKClcblxuYWRkTGlzdGVuZXJzVG9FbmVteUJvYXJkKGVuZW15Qm9hcmQpXG5cbmFkZExpc3RlbmVyc1RvUGxheWVyQm9hcmQocGxheWVyQm9hcmQpXG5cblxuXG4iXSwibmFtZXMiOlsiY3JlYXRlU2hpcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbXB0eUNlbGwiLCJoYXNCZWVuSGl0IiwiaXNTaGlwIiwib2ZmTGltaXRzIiwiZ2FtZUJvYXJkIiwiQXJyYXkiLCJmaWxsIiwic3RydWN0dXJlZENsb25lIiwibWFwIiwic2hpcHMiLCJnZXRMb2NhdGlvbiIsImNvbHVtbiIsInJvdyIsInNldExvY2F0aW9uIiwic2hpcCIsIk9iamVjdCIsImFzc2lnbiIsImNyZWF0ZU9mZkxpbWl0TG9jYXRpb24iLCJhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyIsInBsYWNlU2hpcCIsImRpcmVjdGlvbiIsInNoaXBMZW5ndGgiLCJnZXRMZW5ndGgiLCJpIiwiYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwIiwiYWRkT2ZmTGltaXRBcmVhRm9ySG9yaXpvbnRhbGx5UG9zaXRpb25lZFNoaXAiLCJtYWtlUmFuZG9tQ29vcmRpbmF0ZXMiLCJyYW5kb21EaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db2x1bW4iLCJyYW5kb21Sb3ciLCJjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQiLCJmbGF0IiwiZmlsdGVyIiwiZWxlbWVudCIsImxlbmd0aCIsInJlY2VpdmVBdHRhY2siLCJjaGVja0lmQWxsU2hpcHNIYXZlU3VuayIsImV2ZXJ5IiwiY2VsbCIsImdldFN0YXR1cyIsInVuaXQiLCJyYW5kb21seVBsYWNlU2hpcHMiLCJzaGlwRGV0YWlscyIsImxvY2F0aW9uIiwicHVzaCIsIm5hbWUiLCJzdGF0dXMiLCJpc1N1bmsiLCJwb3NpdGlvbiIsImhpdCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY2hlY2tJZkVuZW15Q2VsbEhhc1NoaXAiLCJjZWxsTG9jYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJwbGF5ZXJCb2FyZCIsImVuZW15Qm9hcmQiLCJlbmVteUJvYXJkQXJlYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRMaXN0ZW5lcnNUb0VuZW15Qm9hcmQiLCJwbGF5ZXJCb2FyZEFyZWEiLCJhZGRMaXN0ZW5lcnNUb1BsYXllckJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==