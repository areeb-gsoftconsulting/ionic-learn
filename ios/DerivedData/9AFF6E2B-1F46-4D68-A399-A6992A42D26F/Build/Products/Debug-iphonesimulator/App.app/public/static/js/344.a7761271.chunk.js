/*! For license information please see 344.a7761271.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkphoto_gallery_capacitor_react=self.webpackChunkphoto_gallery_capacitor_react||[]).push([[344],{9344:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(1811),i=function(t){var e,n,i,l=10*-d,v=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){l=(0,o.u)(t),E(t)},L=function(){i&&clearTimeout(i),i=void 0,e&&(T(!1),e=void 0)},w=function(t){e||g(a(t),t)},E=function(t){g(void 0,t)},g=function(t,n){if(!t||t!==e){i&&clearTimeout(i),i=void 0;var a=(0,o.p)(n),c=a.x,f=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||b(e,c,f),T(!0)}if(t){var d=h.get(t);d&&(clearTimeout(d),h.delete(t)),t.classList.remove(s);var l=function(){b(t,c,f),i=void 0};r(t)?l():i=setTimeout(l,u)}e=t}},b=function(t,e,o){if(v=Date.now(),t.classList.add(s),p){var i=c(t);null!==i&&(k(),n=i.addRipple(e,o))}},k=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},T=function(t){k();var n=e;if(n){var o=f-Date.now()+v;if(t&&o>0&&!r(n)){var i=setTimeout((function(){n.classList.remove(s),h.delete(n)}),f);h.set(n,i)}else n.classList.remove(s)}},_=document;_.addEventListener("ionGestureCaptured",L),_.addEventListener("touchstart",(function(t){l=(0,o.u)(t),w(t)}),!0),_.addEventListener("touchcancel",m,!0),_.addEventListener("touchend",m,!0),_.addEventListener("pointercancel",L,!0),_.addEventListener("mousedown",(function(t){if(2!==t.button){var e=(0,o.u)(t)-d;l<e&&w(t)}}),!0),_.addEventListener("mouseup",(function(t){var e=(0,o.u)(t)-d;l<e&&E(t)}),!0)},a=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,f=200,d=2500}}]);
//# sourceMappingURL=344.a7761271.chunk.js.map