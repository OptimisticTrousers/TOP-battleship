(()=>{var t={653:(t,e,r)=>{const o=r(585),i=()=>{const t={hasBeenHit:!1,isShip:!1,offLimits:!1},e=Array(10).fill(structuredClone(t)).map((()=>Array(10).fill(structuredClone(t)))),r=[o(5,"Carrier"),o(4,"Battleship"),o(3,"Destroyer"),o(3,"Submarine"),o(2,"Patrol Boat")],i=(t,r)=>e?.[t]?.[r],n=(r,o,i=(()=>Object.assign(t,{offLimits:!0}))())=>{e?.[r]?.[o]&&(e[r][o]=i)},a=(t,e)=>{n(t-1,e-1),n(t-1,e),n(t,e-1)},s=(t,e,r,o)=>{const i=o.getLength();if("vertical"===r){if(e+i<=10){for(let r=0;r<i;r+=1)n(t,e+r,o),n(t+1,e,o),n(t-1,e,o);return((t,e,r)=>{a(t,e),n(t,e+r),n(t+1,e+r),n(t-1,e+r),n(t+1,e-1)})(t,e,i),!0}}else if("horizontal"===r&&t+i<=10){for(let r=0;r<i;r+=1)n(t+r,e,o),n(t,e+1,o),n(t,e-1,o);return((t,e,r)=>{a(t,e),n(t+r,e),n(t-1,e+1),n(t+r,e+1),n(t+r,e-1)})(t,e,i),!0}return!1},l=()=>{const t=0===Math.floor(2*Math.random())?"vertical":"horizontal";return{randomColumn:Math.floor(10*Math.random()),randomRow:Math.floor(10*Math.random()),randomDirection:t}};return{checkIfOffLimitZoneWasCorrectlyImplemented:t=>e.flat().filter((t=>!0===t.offLimits)).length===t+2,getLocation:i,receiveAttack:(t,r)=>{e[t][r].hasBeenHit=!0},checkIfAllShipsHaveSunk:()=>e.flat().every((t=>!1===t.isShip||!0===t.isShip&&!0===t.hasBeenHit&&t.getStatus().every((t=>"hit"===t)))),placeShip:s,randomlyPlaceShips:()=>{const t=[];for(let e=0;e<r.length;e+=1){const{randomColumn:o,randomRow:n,randomDirection:a}=l(),c=r[e],h=i(o,n);!0===h.isShip||!0===h.offLimits||!1===s(o,n,a,c)?e-=1:t.push({randomColumn:o,randomRow:n,randomDirection:a})}return t}}};i().placeShip(1,1,"vertical",o(2,"bobs ship")),t.exports=i},585:t=>{t.exports=(t,e="ship")=>{const r=Array(t).fill("unhit");return{name:e,getLength:()=>r.length,isSunk:()=>r.every((t=>"hit"===t)),hit:e=>{e<t&&(r[e]="hit")},getStatus:()=>r,isShip:!0}}}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(653);const e=r.n(t)()();e.randomlyPlaceShips(),(({getLocation:t})=>{const e=document.querySelector("div.player-board");for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1){const i=document.createElement("div");i.classList.add("cell"),t(o,r).isShip&&i.classList.add("ship"),e.appendChild(i)}})(e)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJYyxFQUFTZCxHQUFVQSxFQUFPZSxXQUM3QixJQUFPZixFQUFpQixRQUN4QixJQUFNLEVBRVAsT0FEQVEsRUFBb0JRLEVBQUVGLEVBQVEsQ0FBRUcsRUFBR0gsSUFDNUJBLEdDTFJOLEVBQW9CUSxFQUFJLENBQUNmLEVBQVNpQixLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hWLEVBQW9CWSxFQUFFRixFQUFZQyxLQUFTWCxFQUFvQlksRUFBRW5CLEVBQVNrQixJQUM1RXBELE9BQU9zRCxlQUFlcEIsRUFBU2tCLEVBQUssQ0FBRUcsWUFBWSxFQUFNQyxJQUFLTCxFQUFXQyxNQ0ozRVgsRUFBb0JZLEVBQUksQ0FBQ0ksRUFBS0MsSUFBVTFELE9BQU8yRCxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHLGdDQ0dsRixNQUFNSSxFLE1BQWMsS0FDcEJBLEVBQVlqQyxxQkNKYyxHQUFHbEMsa0JBQ3pCLE1BQU1vRSxFQUFrQkMsU0FBU0MsY0FBYyxvQkFFL0MsSUFBSyxJQUFJekQsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLEdBQUssRUFDekIsSUFBSyxJQUFJMEQsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLEdBQUssRUFBRyxDQUM1QixNQUFNeEMsRUFBT3NDLFNBQVNHLGNBQWMsT0FDcEN6QyxFQUFLMEMsVUFBVUMsSUFBSSxRQUNmMUUsRUFBWXVFLEVBQUcxRCxHQUFHckIsUUFDbEJ1QyxFQUFLMEMsVUFBVUMsSUFBSSxRQUV2Qk4sRUFBZ0JPLFlBQVk1QyxLREp4QyxDQUFrQm9DLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5jb25zdCBjcmVhdGVTaGlwID0gcmVxdWlyZSgnLi4vc2hpcC9zaGlwJylcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbXB0eUNlbGwgPSB7IGhhc0JlZW5IaXQ6IGZhbHNlLCBpc1NoaXA6IGZhbHNlLCBvZmZMaW1pdHM6IGZhbHNlIH1cbiAgICBjb25zdCBnYW1lQm9hcmQgPSBBcnJheSgxMClcbiAgICAgICAgLmZpbGwoc3RydWN0dXJlZENsb25lKGVtcHR5Q2VsbCkpXG4gICAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoc3RydWN0dXJlZENsb25lKGVtcHR5Q2VsbCkpKVxuXG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgIGNyZWF0ZVNoaXAoNSwgJ0NhcnJpZXInKSxcbiAgICAgICAgY3JlYXRlU2hpcCg0LCAnQmF0dGxlc2hpcCcpLFxuICAgICAgICBjcmVhdGVTaGlwKDMsICdEZXN0cm95ZXInKSxcbiAgICAgICAgY3JlYXRlU2hpcCgzLCAnU3VibWFyaW5lJyksXG4gICAgICAgIGNyZWF0ZVNoaXAoMiwgJ1BhdHJvbCBCb2F0JyksXG4gICAgXVxuXG4gICAgY29uc3QgY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsgPSAoKSA9PlxuICAgICAgICBnYW1lQm9hcmQuZmxhdCgpLmV2ZXJ5KFxuICAgICAgICAgICAgKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5pc1NoaXAgPT09IGZhbHNlKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzU2hpcCA9PT0gdHJ1ZSAmJiBjZWxsLmhhc0JlZW5IaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNlbGwuZ2V0U3RhdHVzKCkuZXZlcnkoKHVuaXQpID0+IHVuaXQgPT09ICdoaXQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gKHBvc2l0aW9uLmlzU2hpcCA9PT0gZmFsc2UpIHx8XG4gICAgICAgICAgICAvLyAocG9zaXRpb24uaXNTaGlwID09PSB0cnVlICYmIHBvc2l0aW9uLmhhc0JlZW5IaXQgPT09IHRydWUpXG4gICAgICAgIClcblxuICAgIGNvbnN0IGNyZWF0ZU9mZkxpbWl0TG9jYXRpb24gPSAoKSA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtcHR5Q2VsbCwgeyBvZmZMaW1pdHM6IHRydWUgfSlcblxuICAgIGNvbnN0IGdldExvY2F0aW9uID0gKGNvbHVtbiwgcm93KSA9PiBnYW1lQm9hcmQ/Lltjb2x1bW5dPy5bcm93XVxuXG4gICAgY29uc3Qgc2V0TG9jYXRpb24gPSAoY29sdW1uLCByb3csIHNoaXAgPSBjcmVhdGVPZmZMaW1pdExvY2F0aW9uKCkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVCb2FyZD8uW2NvbHVtbl0/Lltyb3ddKSB7XG4gICAgICAgICAgICBnYW1lQm9hcmRbY29sdW1uXVtyb3ddID0gc2hpcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMgPSAoY29sdW1uLCByb3cpID0+IHtcbiAgICAgICAgLy8gdG9wLWxlZnRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93IC0gMSlcbiAgICAgICAgLy8gbGVmdFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gLSAxLCByb3cpXG4gICAgICAgIC8vIHRvcFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyAtIDEpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkT2ZmTGltaXRBcmVhRm9ySG9yaXpvbnRhbGx5UG9zaXRpb25lZFNoaXAgPSAoXG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgcm93LFxuICAgICAgICBzaGlwTGVuZ3RoXG4gICAgKSA9PiB7XG4gICAgICAgIC8vIHBvc2l0aW9ucyByZWxhdGl2ZSB0byB0aGUgc2hpcCBpdHNlbGYoaWUuIGEgaG9yaXpvbnRhbCBzaGlwJ3MgYm90dG9tIGlzIHRvIHRoZSByaWdodClcblxuICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyhjb2x1bW4sIHJvdywgc2hpcExlbmd0aClcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIHNoaXBMZW5ndGgsIHJvdylcbiAgICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uIC0gMSwgcm93ICsgMSlcbiAgICAgICAgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIHNoaXBMZW5ndGgsIHJvdyArIDEpXG4gICAgICAgIC8vIHRvcC1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyBzaGlwTGVuZ3RoLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcCA9IChcbiAgICAgICAgY29sdW1uLFxuICAgICAgICByb3csXG4gICAgICAgIHNoaXBMZW5ndGhcbiAgICApID0+IHtcbiAgICAgICAgLy8gcG9zaXRpb25zIHJlbGF0aXZlIHRvIGhvdyB0aGUgdXNlciBzZWVzIGl0KGllLiBhIHZlcnRpY2FsIHNoaXAncyBib3R0b20gaXMgdG8gdGhlIGJvdHRvbSlcblxuICAgICAgICBhZGRPZmZMaW1pdEFyZWFGb3JTaGlwcyhjb2x1bW4sIHJvdywgc2hpcExlbmd0aClcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiwgcm93ICsgc2hpcExlbmd0aClcbiAgICAgICAgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIDEsIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdyArIHNoaXBMZW5ndGgpXG4gICAgICAgIC8vIHRvcC1yaWdodFxuICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3cgLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb2x1bW4sIHJvdywgZGlyZWN0aW9uLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmIChyb3cgKyBzaGlwTGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgKyBpLCBzaGlwKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4gKyAxLCByb3csIHNoaXApXG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiAtIDEsIHJvdywgc2hpcClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkT2ZmTGltaXRBcmVhRm9yVmVydGljYWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uICsgc2hpcExlbmd0aCA8PSAxMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGNvbHVtbiArIGksIHJvdywgc2hpcClcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oY29sdW1uLCByb3cgKyAxLCBzaGlwKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbihjb2x1bW4sIHJvdyAtIDEsIHNoaXApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgc2hpcExlbmd0aFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ1xuICAgICAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcERldGFpbHMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSA9XG4gICAgICAgICAgICAgICAgbWFrZVJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tpXVxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihyYW5kb21Db2x1bW4sIHJhbmRvbVJvdylcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5pc1NoaXAgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5vZmZMaW1pdHMgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAocmFuZG9tQ29sdW1uLCByYW5kb21Sb3csIHJhbmRvbURpcmVjdGlvbiwgc2hpcCkgPT09XG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpIC09IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcERldGFpbHMucHVzaCh7IHJhbmRvbUNvbHVtbiwgcmFuZG9tUm93LCByYW5kb21EaXJlY3Rpb24gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcERldGFpbHNcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvbHVtbiwgcm93KSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFtjb2x1bW5dW3Jvd10uaGFzQmVlbkhpdCA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQgPSAoc2hpcExlbmd0aCkgPT5cbiAgICAgICAgZ2FtZUJvYXJkLmZsYXQoKS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQub2ZmTGltaXRzID09PSB0cnVlKVxuICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgc2hpcExlbmd0aCArIDJcbiAgICAvLyBhZGRpbmcgc2hpcExlbmd0aCBwbHVzIHR3byBiZWNhdXNlIGZvciBldmVyeSBpbmNyZWFzZSBpbiB0aGUgc2l6ZSBvZiBzaGlwLCB0aGUgem9uZXMgY292ZXJlZCBpbmNyZWFzZSBieSAyIHVuaXRzXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja0lmT2ZmTGltaXRab25lV2FzQ29ycmVjdGx5SW1wbGVtZW50ZWQsXG4gICAgICAgIGdldExvY2F0aW9uLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0lmQWxsU2hpcHNIYXZlU3VuayxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHMsXG4gICAgfVxufVxuXG5jb25zdCBib2IgPSBjcmVhdGVHYW1lQm9hcmQoKVxuYm9iLnBsYWNlU2hpcCgxLCAxLCAndmVydGljYWwnLCBjcmVhdGVTaGlwKDIsICdib2JzIHNoaXAnKSlcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVHYW1lQm9hcmRcbiIsImNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCBuYW1lID0gJ3NoaXAnKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBBcnJheShsZW5ndGgpLmZpbGwoJ3VuaGl0JylcblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHN0YXR1cy5sZW5ndGhcblxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHN0YXR1c1xuXG4gICAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc3RhdHVzW3Bvc2l0aW9uXSA9ICdoaXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdGF0dXMuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gJ2hpdCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRTdGF0dXMsXG4gICAgICAgIGlzU2hpcDogdHJ1ZSxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hpcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCByZW5kZXJQbGF5ZXJCb2FyZCBmcm9tICcuL2RvbSdcbmltcG9ydCBjcmVhdGVHYW1lQm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQvZ2FtZWJvYXJkJ1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpXG5wbGF5ZXJCb2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKVxuXG5yZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZClcbiIsImNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKHsgZ2V0TG9jYXRpb24gfSkgPT4ge1xuICAgIGNvbnN0IHBsYXllckJvYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5wbGF5ZXItYm9hcmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKVxuICAgICAgICAgICAgaWYgKGdldExvY2F0aW9uKGosIGkpLmlzU2hpcCkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZEFyZWEuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGxheWVyQm9hcmRcbiJdLCJuYW1lcyI6WyJjcmVhdGVTaGlwIiwiY3JlYXRlR2FtZUJvYXJkIiwiZW1wdHlDZWxsIiwiaGFzQmVlbkhpdCIsImlzU2hpcCIsIm9mZkxpbWl0cyIsImdhbWVCb2FyZCIsIkFycmF5IiwiZmlsbCIsInN0cnVjdHVyZWRDbG9uZSIsIm1hcCIsInNoaXBzIiwiZ2V0TG9jYXRpb24iLCJjb2x1bW4iLCJyb3ciLCJzZXRMb2NhdGlvbiIsInNoaXAiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGVPZmZMaW1pdExvY2F0aW9uIiwiYWRkT2ZmTGltaXRBcmVhRm9yU2hpcHMiLCJwbGFjZVNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwiaSIsImFkZE9mZkxpbWl0QXJlYUZvclZlcnRpY2FsbHlQb3NpdGlvbmVkU2hpcCIsImFkZE9mZkxpbWl0QXJlYUZvckhvcml6b250YWxseVBvc2l0aW9uZWRTaGlwIiwibWFrZVJhbmRvbUNvb3JkaW5hdGVzIiwicmFuZG9tRGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29sdW1uIiwicmFuZG9tUm93IiwiY2hlY2tJZk9mZkxpbWl0Wm9uZVdhc0NvcnJlY3RseUltcGxlbWVudGVkIiwiZmxhdCIsImZpbHRlciIsImVsZW1lbnQiLCJsZW5ndGgiLCJyZWNlaXZlQXR0YWNrIiwiY2hlY2tJZkFsbFNoaXBzSGF2ZVN1bmsiLCJldmVyeSIsImNlbGwiLCJnZXRTdGF0dXMiLCJ1bml0IiwicmFuZG9tbHlQbGFjZVNoaXBzIiwic2hpcERldGFpbHMiLCJsb2NhdGlvbiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsInN0YXR1cyIsImlzU3VuayIsInBvc2l0aW9uIiwiaGl0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGF5ZXJCb2FyZCIsInBsYXllckJvYXJkQXJlYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImoiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9