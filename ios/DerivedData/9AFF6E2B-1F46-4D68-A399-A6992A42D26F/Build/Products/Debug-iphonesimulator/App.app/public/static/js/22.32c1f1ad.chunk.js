"use strict";(self.webpackChunkphoto_gallery_capacitor_react=self.webpackChunkphoto_gallery_capacitor_react||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return o}});var r=n(1811),a=n(9507),i=n(7909),o=function(t,e,n,o,c){var u=t.ownerDocument.defaultView,f=(0,a.i)(t),h=function(t){return f?-t.deltaX:t.deltaX};return(0,i.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return f=(0,a.i)(t),function(t){var e=t.startX;return f?e>=u.innerWidth-50:e<=50}(n)&&e()},onStart:n,onMove:function(t){var e=h(t)/u.innerWidth;o(e)},onEnd:function(t){var e=h(t),n=u.innerWidth,a=e/n,i=function(t){return f?-t.velocityX:t.velocityX}(t),o=i>=0&&(i>.2||e>n/2),l=(o?1-a:a)*n,s=0;if(l>5){var d=l/Math.abs(i);s=Math.min(d,540)}c(o,a<=0?.01:(0,r.h)(0,a,.9999),s)}})}}}]);
//# sourceMappingURL=22.32c1f1ad.chunk.js.map