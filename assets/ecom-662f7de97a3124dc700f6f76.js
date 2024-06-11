/* Publish by EComposer at 2024-06-06 07:57:27*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-rws65rinnm"]=  window.__ectimmers["ecom-rws65rinnm"] || {};
const e=this.$el,t=this.settings.autoSlideHover;let i="";var n=!0;if(!e)return;const s=e.querySelector(".ecom-img_comp-slider");if(!s)return;const o=e.querySelector(".ecom-image_compare-overlay img"),r=e.querySelector(".ecom-image_comp-overlay");s.onmouseover=function(){a()},s.onmouseout=function(){n&&c()},s&&o&&_(),window.addEventListener("resize",function(){s&&o&&(i=o.offsetWidth,_())});function a(){r&&r.classList.add("overlay-hidden")}function c(){r&&r.classList.remove("overlay-hidden")}function _(){var l=0,g,f,b;h(),!t||window.screen.width<1024?(s.onmousedown=function(C){m(C)},e.onmouseup=function(){y()},s.ontouchstart=function(C){m(C)},e.ontouchend=function(){y()}):e.onmouseover=function(C){m(C)};function h(){s.style.left&&(i=o.offsetWidth,f=parseInt(s.style.left))}function m(C){n=!1,C.preventDefault(),C.clientX?g=C.clientX:g=C.touches[0].clientX,l=1,e.onmousemove=function(T){v(T)},e.ontouchmove=function(T){v(T)}}function y(){l=0,isNaN(b)||(f=b),n=!0,c()}function v(C){if(l==0)return!1;l==1&&a(),b=w(C),b<0&&(b=0),b>100&&(b=100),L(b)}function w(C){C=C.changedTouches?C.changedTouches[0]:C;var T;return!t||window.screen.width<1024?T=Math.round(f-(g-C.pageX)*100/i):T=Math.round(C.offsetX*100/i),T}function L(C){s.style.left=C+"%",o.style.clipPath=`polygon(${C}% 0%, ${C}% 100%, 0% 100%, 0% 0%)`}}

                    });
                    
                        document.querySelectorAll('.ecom-rws65rinnm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-rws65rinnm', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-cz84gskzc96"]=  window.__ectimmers["ecom-cz84gskzc96"] || {};
if(!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),i=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(t&&t.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",t.style.display="none",i.style.display=""}),i&&i.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",i.style.display="none",t.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-cz84gskzc96').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-cz84gskzc96', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-cd7u8jl65ns"]=  window.__ectimmers["ecom-cd7u8jl65ns"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(i){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(i.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-cd7u8jl65ns"]["stdqney0s"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var t=e.querySelector(".ecom__element--button");this.isLive&&t&&t.dataset.ecTrackingId&&t.addEventListener("click",function(i){if(window.Shopify.analytics){i.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:t.id,tracking_id:t.dataset.ecTrackingId}),t.cloneNode(!0).click()}},{once:!0}),this.isLive&&t&&t.dataset.eventTrackingFb&&t.addEventListener("click",function(i){window.fbq&&window.fbq("track",`${t.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-cd7u8jl65ns').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-cd7u8jl65ns', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-0ecpi25k87oc"]=  window.__ectimmers["ecom-0ecpi25k87oc"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}

                    });
                    
                        document.querySelectorAll('.ecom-0ecpi25k87oc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-0ecpi25k87oc', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ektlierwz7q').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ektlierwz7q', settings: {"link":"lightbox","lightbox":"no"},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}