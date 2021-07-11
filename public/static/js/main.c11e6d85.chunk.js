(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){e.exports=n(52)},30:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(13),l=n.n(o),c=(n(30),n(16)),i=n.n(c),s=n(22),u=n(24),d=n(7),h=n(8),m=n(6),g=n(10),b=n(9),f=(n(32),n(54)),v=n(55),p=n(57),y=n(56),k=n(58),O=n(23),E=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).canvas=r.a.createRef(),a}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props.audioData,t=this.canvas.current,n=t.height,a=t.width,r=t.getContext("2d"),o=0,l=1*a/e.length;r.lineWidth=2,r.strokeStyle="#000000",r.clearRect(0,0,a,n),r.beginPath(),r.moveTo(0,n/2);var c,i=Object(O.a)(e);try{for(i.s();!(c=i.n()).done;){var s=c.value/255*n;r.lineTo(o,s),o+=l}}catch(u){i.e(u)}finally{i.f()}r.lineTo(o,n/2),r.stroke()}},{key:"render",value:function(){return r.a.createElement("canvas",{width:"1000",height:"100",ref:this.canvas})}}]),n}(a.Component),S=(a.Component,n(33));function j(){return r.a.createElement(f.a,{fluid:!0,key:"1"},r.a.createElement(v.a,{fluid:!0,className:"text-center",style:{marginTop:-20,marginBottom:-20}},r.a.createElement("h1",null,r.a.createElement("span",{"aria-label":"hi",role:"img"},"\ud83d\udc4b")),r.a.createElement("h1",null,"Hello, Participant"),r.a.createElement("br",null),r.a.createElement("h4",null,"and thank you for doing this survey!")))}function w(){return r.a.createElement(v.a,{key:"2",fluid:!0,className:"d-flex justify-content-center align-items-center"},r.a.createElement(p.a,{style:{maxWidth:"600px"}},r.a.createElement(y.a,{style:{maxWidth:"600px"}},r.a.createElement("h5",null,"Here, you can record your audio."),r.a.createElement("p",null,"After the audio is recorded, we will generate a ",r.a.createElement("b",null,"unique link")," ","for this recording."),r.a.createElement("p",null,"Send me this link, please!"))))}var x=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(d.a)(this,n),a=t.call(this,e);var r=navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){var t=new MediaRecorder(e);return t.onstop=a.recorderOnStop,t.ondataavailable=a.recorderOnDataAvailable,t}));return a.state={isToggleOn:!1,chunks:[],blob:null,mediaRecorder:r},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.handleSend=a.handleSend.bind(Object(m.a)(a)),a.handleDelete=a.handleDelete.bind(Object(m.a)(a)),a.recorderOnStop=a.recorderOnStop.bind(Object(m.a)(a)),a.recorderOnDataAvailable=a.recorderOnDataAvailable.bind(Object(m.a)(a)),a}return Object(h.a)(n,[{key:"recorderOnStop",value:function(e){this.setState((function(e){var t=prompt("Please enter your participant ID (or leave blank if you don't remember)");console.log(t),console.log(e.chunks);var n=new Blob(e.chunks,{type:"audio/ogg; codecs=opus"});return console.log(n),{chunks:[],blob:n}}))}},{key:"recorderOnDataAvailable",value:function(e){this.setState((function(t){var n=[];return console.log(n),n.push.apply(n,Object(u.a)(t.chunks)),n.push(e.data),{chunks:n,blob:null}}))}},{key:"handleClick",value:function(){this.setState((function(e){return e.isToggleOn?e.mediaRecorder.then((function(e){"inactive"!==e.state?(e.stop(),console.log(e.state)):console.log("Already inactive!")})):e.mediaRecorder.then((function(e){"recording"!==e.state?(e.start(),console.log(e.state)):console.log("Already recording!")})),{isToggleOn:!e.isToggleOn,mediaRecorder:e.mediaRecorder}}))}},{key:"handleSend",value:function(){this.setState((function(e){var t=this,n=S.generate(),a="./recording/"+n,r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:n,blob:e.blob})};fetch(a,r).then(function(){var e=Object(s.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.ok){e.next=2;break}return e.abrupt("return",Promise.reject(n.status));case 2:return e.next=4,n.json();case 4:(a=e.sent)&&a.message&&t.setState({postId:a.id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.setState({errorMessage:e}),console.error("There was an error!",e)})),console.log(a)}))}},{key:"handleDelete",value:function(){this.setState((function(e){return{isToggleOn:!1,blob:null}}))}},{key:"render",value:function(){var e=this.state.isToggleOn?"Stop recording":"Record",t=this.state.isToggleOn?"danger":"primary";return this.state.blob?r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{color:t,size:"lg",style:{minWidth:200},onClick:this.handleClick},e),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("audio",{style:{minWidth:320},controls:!0,src:URL.createObjectURL(this.state.blob)})),r.a.createElement(k.a,{color:"success",size:"lg",style:{minWidth:20,marginRight:10},onClick:this.handleSend},"Send"),r.a.createElement(k.a,{color:"danger",size:"lg",style:{minWidth:20,marginLeft:0},onClick:this.handleDelete},"Delete")):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{color:t,size:"lg",style:{minWidth:200},onClick:this.handleClick},e))}}]),n}(r.a.Component);var C=function(){return r.a.createElement("div",null,r.a.createElement(j,{key:"1"}),r.a.createElement(w,{key:"2"}),r.a.createElement("br",{key:"3"}),r.a.createElement(x,{key:"4"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(51);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c11e6d85.chunk.js.map