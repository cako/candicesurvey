(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},33:function(e,t,n){},34:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),c=n.n(o),l=(n(33),n(34),n(56)),i=n(57);var s=function(){return r.a.createElement(l.a,{fluid:!0,key:"1"},r.a.createElement(i.a,{fluid:!0,className:"text-center",style:{marginTop:-20,marginBottom:-20}},r.a.createElement("h1",null,r.a.createElement("span",{"aria-label":"hi",role:"img"},"\ud83d\udc4b")),r.a.createElement("h1",null,"Hello, Participant"),r.a.createElement("br",null),r.a.createElement("h4",null,"and thank you for doing this survey!")))},u=n(58),d=n(59);var h=function(){return r.a.createElement(i.a,{key:"2",fluid:!0,className:"d-flex justify-content-center align-items-center"},r.a.createElement(u.a,{style:{maxWidth:"600px"}},r.a.createElement(d.a,{style:{maxWidth:"600px"}},r.a.createElement("h5",null,"Here, you can record your audio."),r.a.createElement("br",null),r.a.createElement("p",null,"After the audio is recorded, a ",r.a.createElement("b",null,"unique link")," will be generated.",r.a.createElement("br",null),"Please send me this link!"))))},m=n(18),f=n.n(m),b=n(25),v=n(27),g=n(9),p=n(10),k=n(6),y=n(12),O=n(11),E=n(60),S=n(61),w=n(26),x=function(e){Object(y.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).canvas=r.a.createRef(),a}return Object(p.a)(n,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props.audioData,t=this.canvas.current,n=t.height,a=t.width,r=t.getContext("2d"),o=0,c=1*a/e.length;r.lineWidth=2,r.strokeStyle="#000000",r.clearRect(0,0,a,n),r.beginPath(),r.moveTo(0,n/2);var l,i=Object(w.a)(e);try{for(i.s();!(l=i.n()).done;){var s=l.value/255*n;r.lineTo(o,s),o+=c}}catch(u){i.e(u)}finally{i.f()}r.lineTo(o,n/2),r.stroke()}},{key:"render",value:function(){return r.a.createElement("canvas",{width:"1000",height:"100",ref:this.canvas})}}]),n}(a.Component),j=(a.Component,n(45)),R="https://candicesurvey2020.herokuapp.com";function C(e){var t=e.url_id?{text:e.url_id,color:"success"}:{text:"Send",color:"warning"};return e.url_id?r.a.createElement(E.a,{color:"success"},"Find your recording at"," ",r.a.createElement("a",{href:R+t.text,target:"_blank"},R+t.text)):r.a.createElement(S.a,{color:t.color,size:"lg",style:{minWidth:20,marginRight:10},onClick:e.onClick},t.text)}var T=function(e){Object(y.a)(n,e);var t=Object(O.a)(n);function n(e){var a;Object(g.a)(this,n),a=t.call(this,e);var r=navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){var t=new MediaRecorder(e);return t.onstop=a.recorderOnStop,t.onstart=a.recorderOnStart,t.ondataavailable=a.recorderOnDataAvailable,t}));return a.state={isToggleOn:!1,url_id:"",chunks:[],blob:null,mediaRecorder:r},a.handleClick=a.handleClick.bind(Object(k.a)(a)),a.handleSend=a.handleSend.bind(Object(k.a)(a)),a.handleDelete=a.handleDelete.bind(Object(k.a)(a)),a.recorderOnStop=a.recorderOnStop.bind(Object(k.a)(a)),a.recorderOnStart=a.recorderOnStart.bind(Object(k.a)(a)),a.recorderOnDataAvailable=a.recorderOnDataAvailable.bind(Object(k.a)(a)),a}return Object(p.a)(n,[{key:"recorderOnStop",value:function(e){this.setState((function(e){return{blob:new Blob(e.chunks,{type:"audio/ogg; codecs=opus"})}}))}},{key:"recorderOnDataAvailable",value:function(e){this.setState((function(t){var n=[];return n.push.apply(n,Object(v.a)(t.chunks)),n.push(e.data),{chunks:n}}))}},{key:"recorderOnStart",value:function(e){this.setState((function(e){return{chunks:[],blob:null}}))}},{key:"handleClick",value:function(){this.setState((function(e){return e.isToggleOn?e.mediaRecorder.then((function(e){"inactive"!==e.state?(e.stop(),console.log("mediaRecorder status: "+e.state)):console.info("mediaRecorder is already inactive")})):e.mediaRecorder.then((function(e){"recording"!==e.state?(e.start(),console.log("mediaRecorder status: "+e.state)):console.info("mediaRecorder is already recording")})),{isToggleOn:!e.isToggleOn,mediaRecorder:e.mediaRecorder}}))}},{key:"handleSend",value:function(){this.setState((function(e){var t=j.generate(),n="./recording/"+t,a=new Blob(e.chunks,{type:"audio/ogg; codecs=opus"}),r=new window.FileReader;return r.readAsDataURL(a),r.onloadend=function(){var e=r.result;e=e.split(",")[1];var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:t,audio:e})};fetch(n,a).then(function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}return e.abrupt("return",Promise.reject(t.status));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("There was an error uploading the file!\n",e)}))},console.log(n),{url_id:n}}))}},{key:"handleDelete",value:function(){this.setState((function(e){return{isToggleOn:!1,blob:null,url_id:""}}))}},{key:"render",value:function(){var e=this.state.isToggleOn?{text:"Stop recording",color:"danger"}:{text:"Record",color:"primary"};this.state.url_id&&this.state.url_id;return this.state.blob?r.a.createElement("div",{className:"text-center"},r.a.createElement(S.a,{color:e.color,size:"lg",style:{minWidth:200},onClick:this.handleClick},e.text),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("audio",{style:{minWidth:320},controls:!0,src:URL.createObjectURL(this.state.blob)})),r.a.createElement(C,{url_id:this.state.url_id,onClick:this.handleSend})):r.a.createElement("div",{className:"text-center"},r.a.createElement(S.a,{color:e.color,size:"lg",style:{minWidth:200},onClick:this.handleClick},e.text))}}]),n}(r.a.Component);var D=function(){return r.a.createElement("div",null,r.a.createElement(s,{key:"1"}),r.a.createElement(h,{key:"2"}),r.a.createElement("br",{key:"3"}),r.a.createElement(T,{key:"4"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(54);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.f63c574b.chunk.js.map