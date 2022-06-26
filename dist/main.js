(()=>{var t={653:(t,e,r)=>{const o=r(585),n=()=>{const t={hasBeenHit:!1,isShip:!1,offLimits:!1},e=Array(10).fill(structuredClone(t)).map((()=>Array(10).fill(structuredClone(t)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],n=()=>Object.assign(t,{offLimits:!0}),i=(t,r)=>e?.[t]?.[r],a=(t,r,o=n())=>{e[t][r]=o},s=(t,e,r,o)=>{const i=o.getLength();if("vertical"===r){if(e+i<=10){for(let r=0;r<i;r+=1)a(t,e+r,o);return((t,e,r)=>{const o=n();a(t,e+r,o)})(t,e,i),!0}}else if("horizontal"===r&&t+i<=10){for(let r=0;r<i;r+=1)a(t+r,e,o);return((t,e,r)=>{const o=n();a(t+r,e,o)})(t,e,i),!0}return!1},l=()=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal";return{randomColumn:Math.floor(10*Math.random()),randomRow:Math.floor(10*Math.random()),randomDirection:t}};return{getLocation:i,receiveAttack:(t,r)=>{e[t][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>e.flat().every((t=>!1===t.isShip||!0===t.isShip&&!0===t.hasBeenHit&&t.getStatus().every((t=>"hit"===t)))),placeShip:s,randomlyPlaceShips:()=>{const t=[];for(let e=0;e<r.length;e+=1){const{randomColumn:o,randomRow:n,randomDirection:a}=l(),c=r[e],h=i(o,n);!0===h.isShip||!0===h.offLimits||!1===s(o,n,a,c)?e-=1:t.push({randomColumn:o,randomRow:n,randomDirection:a})}return t}}};n().placeShip(0,0,"vertical",o(3,"bobs ship")),t.exports=n},585:t=>{t.exports=(t,e="ship")=>{const r=Array(t).fill("unhit");return{name:e,getLength:()=>r.length,isSunk:()=>r.every((t=>"hit"===t)),hit:e=>{e<t&&(r[e]="hit")},getStatus:()=>r,isShip:!0}}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(653);const e=r.n(t)()();e.randomlyPlaceShips(),(({getLocation:t})=>{const e=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const n=document.createElement("div");n.classList.add("cell"),t(o,r).isShip&&n.classList.add("ship"),e.appendChild(n)}})(e)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUdBLEVBQUksR0FBSUEsR0FBSyxFQUFHLENBQzVCLE1BQU16QyxFQUFPdUMsU0FBU0csY0FBYyxPQUNwQzFDLEVBQUsyQyxVQUFVQyxJQUFJLFFBQ2ZyRSxFQUFZa0UsRUFBR3pELEdBQUdwQixRQUNsQm9DLEVBQUsyQyxVQUFVQyxJQUFJLFFBRXZCTixFQUFnQk8sWUFBWTdDLEtESnhDLENBQWtCcUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmNvbnN0IGNyZWF0ZVNoaXAgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IHsgaGFzQmVlbkhpdDogZmFsc2UsIGlzU2hpcDogZmFsc2UsIG9mZkxpbWl0czogZmFsc2UgfVxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IEFycmF5KDEwKVxuICAgICAgICAuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSlcbiAgICAgICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChzdHJ1Y3R1cmVkQ2xvbmUoZW1wdHlDZWxsKSkpXG5cbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgY3JlYXRlU2hpcCg1LCAnQ2FycmllcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDQsICdCYXR0bGVzaGlwJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMywgJ0Rlc3Ryb3llcicpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdTdWJtYXJpbmUnKSxcbiAgICAgICAgY3JlYXRlU2hpcCgyLCAnUGF0cm9sIEJvYXQnKSxcbiAgICBdXG5cbiAgICBjb25zdCBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayA9ICgpID0+XG4gICAgICAgIGdhbWVCb2FyZC5mbGF0KCkuZXZlcnkoXG4gICAgICAgICAgICAoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gZmFsc2UpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNTaGlwID09PSB0cnVlICYmIGNlbGwuaGFzQmVlbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VsbC5nZXRTdGF0dXMoKS5ldmVyeSgodW5pdCkgPT4gdW5pdCA9PT0gJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSBmYWxzZSkgfHxcbiAgICAgICAgICAgIC8vIChwb3NpdGlvbi5pc1NoaXAgPT09IHRydWUgJiYgcG9zaXRpb24uaGFzQmVlbkhpdCA9PT0gdHJ1ZSlcbiAgICAgICAgKVxuXG5cbiAgICBjb25zdCBjcmVhdGVPZmZMaW1pdExvY2F0aW9uID0gKCkgPT5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbXB0eUNlbGwsIHsgb2ZmTGltaXRzOiB0cnVlIH0pXG5cbiAgICBjb25zdCBnZXRMb2NhdGlvbiA9IChjb2x1bW4sIHJvdykgPT4gZ2FtZUJvYXJkPy5bY29sdW1uXT8uW3Jvd11cblxuICAgIGNvbnN0IHNldExvY2F0aW9uID0gKGNvbHVtbiwgcm93LCBzaGlwID0gY3JlYXRlT2ZmTGltaXRMb2NhdGlvbigpKSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10gPSBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMgPSAoY29sdW1uLCByb3csIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3QgdG9wID0gW2NvbHVtbiwgcm93LTFdXG4gICAgICAgIGNvbnN0IGxlZnQgPSBbY29sdW1uIC0gMSwgcm93XVxuICAgICAgICBjb25zdCB0b3BSaWdodCA9IFtjb2x1bW4gKyAxLCByb3cgLSAxXVxuICAgICAgICBjb25zdCB0b3BMZWZ0ID0gW2NvbHVtbiAtIDEsIHJvdyAtIDFdXG4gICAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gW2NvbHVtbiArIDEsIHJvdyArIHNoaXBMZW5ndGhdXG4gICAgICAgIGNvbnN0IGxlZnRSaWdodCA9IFtjb2x1bW4gLSAxLCByb3cgKyBzaGlwTGVuZ3RoXVxuXG5cblxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwID0gKFxuICAgICAgICBjb2x1bW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgc2hpcExlbmd0aFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCByaWdodCA9IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24oKVxuICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyhjb2x1bW4sIHJvdywgc2hpcExlbmd0aClcblxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3csIHJpZ2h0KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcCA9IChcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICAgIHNoaXBMZW5ndGhcbiAgICApID0+IHtcbiAgICAgICAgY29uc3QgYmVsb3cgPSBjcmVhdGVPZmZMaW1pdExvY2F0aW9uKClcbiAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMoY29sdW1uLCByb3csIHNoaXBMZW5ndGgpXG5cbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgKyBzaGlwTGVuZ3RoLCBiZWxvdylcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29sdW1uLCByb3csIGRpcmVjdGlvbiwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBpZiAocm93ICsgc2hpcExlbmd0aCA8PSAxMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgaSwgc2hpcClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gKyBzaGlwTGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uICsgaSwgcm93LCBzaGlwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcChcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIHNoaXBMZW5ndGhcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9XG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCdcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICByZXR1cm4geyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgcmFuZG9tRGlyZWN0aW9uIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21seVBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBEZXRhaWxzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgeyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgcmFuZG9tRGlyZWN0aW9uIH0gPVxuICAgICAgICAgICAgICAgIG1ha2VSYW5kb21Db29yZGluYXRlcygpXG4gICAgICAgICAgICBjb25zdCBzaGlwID0gc2hpcHNbaV1cbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb24ocmFuZG9tQ29sdW1uLCByYW5kb21Sb3cpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaXNTaGlwID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ub2ZmTGltaXRzID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24sIHNoaXApID09PVxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaSAtPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoaXBEZXRhaWxzLnB1c2goeyByYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgcmFuZG9tRGlyZWN0aW9uIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBEZXRhaWxzXG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb2x1bW4sIHJvdykgPT4ge1xuICAgICAgICBnYW1lQm9hcmRbY29sdW1uXVtyb3ddLmhhc0JlZW5IaXQgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TG9jYXRpb24sXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGNoZWNrSWZBbGxTaGlwc0hhdmVTdW5rLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJhbmRvbWx5UGxhY2VTaGlwcyxcbiAgICB9XG59XG5cbmNvbnN0IGJvYiA9IGNyZWF0ZUdhbWVCb2FyZCgpXG5ib2IucGxhY2VTaGlwKDAsIDAsICd2ZXJ0aWNhbCcsIGNyZWF0ZVNoaXAoMywgJ2JvYnMgc2hpcCcpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUdhbWVCb2FyZFxuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgsIG5hbWUgPSAnc2hpcCcpID0+IHtcblxuICAgIGNvbnN0IHN0YXR1cyA9IEFycmF5KGxlbmd0aCkuZmlsbCgndW5oaXQnKVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gc3RhdHVzLmxlbmd0aFxuXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzXG5cbiAgICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGF0dXNbcG9zaXRpb25dID0gJ2hpdCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHN0YXR1cy5ldmVyeSgocG9zaXRpb24pID0+IHBvc2l0aW9uID09PSAnaGl0JylcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBoaXQsXG4gICAgICAgIGdldFN0YXR1cyxcbiAgICAgICAgaXNTaGlwOiB0cnVlLFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHJlbmRlclBsYXllckJvYXJkIGZyb20gJy4vZG9tJ1xuaW1wb3J0IGNyZWF0ZUdhbWVCb2FyZCBmcm9tICcuL2dhbWVib2FyZC9nYW1lYm9hcmQnXG5cbmNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcbnBsYXllckJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpXG5cbnJlbmRlclBsYXllckJvYXJkKHBsYXllckJvYXJkKVxuIiwiY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoeyBnZXRMb2NhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnBsYXllci1ib2FyZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpXG4gICAgICAgICAgICBpZiAoZ2V0TG9jYXRpb24oaiwgaSkuaXNTaGlwKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllckJvYXJkQXJlYS5hcHBlbmRDaGlsZChjZWxsKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQbGF5ZXJCb2FyZFxuIl0sIm5hbWVzIjpbImNyZWF0ZVNoaXAiLCJjcmVhdGVHYW1lQm9hcmQiLCJlbXB0eUNlbGwiLCJoYXNCZWVuSGl0IiwiaXNTaGlwIiwib2ZmTGltaXRzIiwiZ2FtZUJvYXJkIiwiQXJyYXkiLCJmaWxsIiwic3RydWN0dXJlZENsb25lIiwibWFwIiwic2hpcHMiLCJjcmVhdGVPZmZMaW1pdExvY2F0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TG9jYXRpb24iLCJjb2x1bW4iLCJyb3ciLCJzZXRMb2NhdGlvbiIsInNoaXAiLCJwbGFjZVNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiaSIsImJlbG93IiwiYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwIiwicmlnaHQiLCJhZGRPZmZMaW1pdEFyZWFGb3JIb3Jpem9udGFsbHlQb3NpdGlvbmVkU2hpcCIsIm1ha2VSYW5kb21Db29yZGluYXRlcyIsInJhbmRvbURpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvbHVtbiIsInJhbmRvbVJvdyIsInJlY2VpdmVBdHRhY2siLCJjaGVja0lmQWxsU2hpcHNIYXZlU3VuayIsImZsYXQiLCJldmVyeSIsImNlbGwiLCJnZXRTdGF0dXMiLCJ1bml0IiwicmFuZG9tbHlQbGFjZVNoaXBzIiwic2hpcERldGFpbHMiLCJsZW5ndGgiLCJsb2NhdGlvbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsInN0YXR1cyIsImlzU3VuayIsInBvc2l0aW9uIiwiaGl0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGF5ZXJCb2FyZCIsInBsYXllckJvYXJkQXJlYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImoiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9