(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);n(8);var a=n(0),c=n.n(a),r=n(6),i=n.n(r),o=n(1),l=n(2),s=n(4),u=n(3),m=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.time=setInterval((function(){var t=new Date;e.setState({time:t.toLocaleTimeString()}),console.log(t.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.time)}},{key:"render",value:function(){var e=this.state.time;return c.a.createElement("p",null,"Current time:"," ",e)}}]),n}(c.a.Component)),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isClockVisible;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"text-muted"},"React clock"),t?c.a.createElement(m,null):c.a.createElement("p",null,"Keep waiting: ",c.a.createElement("span",{className:" spinner-border text-primary spinner-grow-sm ",role:"status"})),c.a.createElement("button",{className:"btn btn-outline-success",type:"button",onClick:function(){e.setState({isClockVisible:!0})}},"Show clock"),c.a.createElement("button",{className:"btn btn-outline-warning",type:"button",onClick:function(){e.setState({isClockVisible:!1})}},"Hide clock"))}}]),n}(c.a.Component);i.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.833d378e.chunk.js.map