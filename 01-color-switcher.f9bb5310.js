!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),n={timerId:null,start:function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled",!0),this.timerId=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));t.style.backgroundColor=e}),1e3)},stop:function(){clearInterval(this.timerId),r.setAttribute("disabled",!0),e.removeAttribute("disabled")}};e.addEventListener("click",(function(){n.start()})),r.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=01-color-switcher.f9bb5310.js.map
