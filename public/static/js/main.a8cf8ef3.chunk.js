(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},34:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),o=a.n(l),i=(a(33),a(34),a(56)),c=a(57);var s=function(){return r.a.createElement(i.a,{fluid:!0,key:"1"},r.a.createElement(c.a,{fluid:!0,className:"text-center",style:{marginTop:-20,marginBottom:-20}},r.a.createElement("h1",null,r.a.createElement("span",{"aria-label":"hi",role:"img"},"\ud83d\udc4b")),r.a.createElement("h1",null,"Hello, Participant"),r.a.createElement("br",null),r.a.createElement("h4",null,"and thank you for doing this survey!")))},d=a(58),u=a(59);var h=function(){return r.a.createElement(c.a,{key:"2",fluid:!0,className:"d-flex justify-content-center align-items-center"},r.a.createElement(d.a,{style:{maxWidth:"600px"}},r.a.createElement(u.a,{style:{maxWidth:"600px"}},r.a.createElement("h5",null,"Here, you can record your audio."),r.a.createElement("br",null),r.a.createElement("p",null,"After the audio is recorded, a ",r.a.createElement("b",null,"unique link")," will be generated.",r.a.createElement("br",null),"Please send me this link!"))))},m=a(18),b=a.n(m),v=a(25),f=a(27),g=a(9),p=a(10),k=a(6),y=a(12),E=a(11),O=a(60),S=a(61),w=a(26),x=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).canvas=r.a.createRef(),n}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(){this.draw()}},{key:"draw",value:function(){var e=this.props.audioData,t=this.canvas.current,a=t.height,n=t.width,r=t.getContext("2d"),l=0,o=1*n/e.length;r.lineWidth=2,r.strokeStyle="#000000",r.clearRect(0,0,n,a),r.beginPath(),r.moveTo(0,a/2);var i,c=Object(w.a)(e);try{for(c.s();!(i=c.n()).done;){var s=i.value/255*a;r.lineTo(l,s),l+=o}}catch(d){c.e(d)}finally{c.f()}r.lineTo(l,a/2),r.stroke()}},{key:"render",value:function(){return r.a.createElement("canvas",{width:"1000",height:"100",ref:this.canvas})}}]),a}(n.Component),j=(n.Component,a(45)),R="https://candicesurvey2020.herokuapp.com";function C(e){var t=Date.now(),a=null;do{a=Date.now()}while(a-t<e)}function T(e){var t=e.url_id?{text:e.url_id,color:"success"}:{text:"Send",color:"warning"};return"success"==e.status?r.a.createElement(O.a,{color:"success"},"Find your recording at",r.a.createElement("br",null),r.a.createElement("a",{href:R+t.text,target:"_blank"},R+t.text)):"uploading"==e.status?r.a.createElement(O.a,{color:"warning"},"Your recording at will soon be available at",r.a.createElement("br",null),r.a.createElement("a",{href:R+t.text,target:"_blank"},R+t.text)):"failed"==e.status?r.a.createElement(O.a,{color:"danger"},"The upload has failed! \ud83d\ude22"):r.a.createElement(S.a,{color:t.color,size:"lg",style:{minWidth:20,marginRight:10},onClick:e.onClick},t.text)}var D=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(g.a)(this,a),n=t.call(this,e);var r=navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){var t=new MediaRecorder(e);return t.onstop=n.recorderOnStop,t.onstart=n.recorderOnStart,t.ondataavailable=n.recorderOnDataAvailable,t}));return n.state={isToggleOn:!1,url_id:"",chunks:[],blob:null,sendStatus:"",mediaRecorder:r},n.handleClick=n.handleClick.bind(Object(k.a)(n)),n.handleSend=n.handleSend.bind(Object(k.a)(n)),n.handleDelete=n.handleDelete.bind(Object(k.a)(n)),n.recorderOnStop=n.recorderOnStop.bind(Object(k.a)(n)),n.recorderOnStart=n.recorderOnStart.bind(Object(k.a)(n)),n.recorderOnDataAvailable=n.recorderOnDataAvailable.bind(Object(k.a)(n)),n}return Object(p.a)(a,[{key:"recorderOnStop",value:function(e){var t=new Blob(this.state.chunks,{type:"audio/ogg; codecs=opus"});this.setState({blob:t})}},{key:"recorderOnDataAvailable",value:function(e){var t=[];t.push.apply(t,Object(f.a)(this.state.chunks)),t.push(e.data),this.setState({chunks:t})}},{key:"recorderOnStart",value:function(e){this.setState((function(e){return{chunks:[],blob:null}}))}},{key:"handleClick",value:function(){this.state.isToggleOn?this.state.mediaRecorder.then((function(e){"inactive"!==e.state?(e.stop(),console.log("mediaRecorder status: "+e.state)):console.info("mediaRecorder is already inactive")})):this.state.mediaRecorder.then((function(e){"recording"!==e.state?(e.start(),console.log("mediaRecorder status: "+e.state)):console.info("mediaRecorder is already recording")})),this.setState({isToggleOn:!this.state.isToggleOn,mediaRecorder:this.state.mediaRecorder})}},{key:"handleSend",value:function(){var e=j.generate(),t="./recording/"+e;console.log("Uploading to "+t);var a=new Blob(this.state.chunks,{type:"audio/ogg; codecs=opus"});this.setState({url_id:t,sendStatus:"uploading"});var n=new window.FileReader;n.readAsDataURL(a);var r=this;n.onloadend=function(){var a=n.result;a=a.split(",")[1];var l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:e,audio:a})};fetch(t,l).then(function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.setState({sendStatus:"uploading"}),t.ok){e.next=4;break}return r.setState({sendStatus:"failed"}),e.abrupt("return",Promise.reject(t.status));case 4:C(3e3),r.setState({sendStatus:"success"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){r.setState({sendStatus:"failed"}),console.error("There was an error uploading the file!\n",e)}))},console.log(this.state.sendStatus)}},{key:"handleDelete",value:function(){this.setState({isToggleOn:!1,blob:null,url_id:""})}},{key:"render",value:function(){var e=this.state.isToggleOn?{text:"Stop recording",color:"danger"}:{text:"Record",color:"primary"};this.state.url_id&&this.state.url_id;return this.state.blob?r.a.createElement("div",{className:"text-center"},r.a.createElement(S.a,{color:e.color,size:"lg",style:{minWidth:200},onClick:this.handleClick},e.text),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("audio",{style:{minWidth:320},controls:!0,src:URL.createObjectURL(this.state.blob)})),r.a.createElement(T,{status:this.state.sendStatus,url_id:this.state.url_id,onClick:this.handleSend})):r.a.createElement("div",{className:"text-center"},r.a.createElement(S.a,{color:e.color,size:"lg",style:{minWidth:200},onClick:this.handleClick},e.text))}}]),a}(r.a.Component);var _=function(){return r.a.createElement("div",null,r.a.createElement(s,{key:"1"}),r.a.createElement(h,{key:"2"}),r.a.createElement("br",{key:"3"}),r.a.createElement(D,{key:"4"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a8cf8ef3.chunk.js.map