(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[56],{296:function(e,a,t){"use strict";var l=t(5),n=t(13),r=t(63),s=t(2),i=t.n(s),c=t(14),o=t.n(c),m=t(59),u=t.n(m),f=t(60),p=t(65);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.q,transition:o.a.shape(p.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:b(b({},p.a.defaultProps),{},{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,s=e.cssModule,c=e.tag,o=e.color,m=e.isOpen,h=e.toggle,d=e.children,E=e.transition,g=e.fade,O=e.innerRef,y=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),k=Object(f.m)(u()(a,"alert","alert-"+o,{"alert-dismissible":h}),s),j=Object(f.m)(u()("close",t),s),v=b(b(b({},p.a.defaultProps),E),{},{baseClass:g?E.baseClass:"",timeout:g?E.timeout:0});return i.a.createElement(p.a,Object(l.a)({},y,v,{tag:c,className:k,in:m,role:"alert",innerRef:O}),h?i.a.createElement("button",{type:"button",className:j,"aria-label":r,onClick:h},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,d)}g.propTypes=d,g.defaultProps=E,a.a=g},339:function(e,a,t){"use strict";t.r(a);var l=t(23),n=t(24),r=t(29),s=t(26),i=t(25),c=t(2),o=t.n(c),m=t(107),u=t(108),f=t(140),p=t(303),h=t(141),b=t(296),d=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={visible:!0},n.onDismiss=n.onDismiss.bind(Object(r.a)(n)),n}return Object(n.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(p.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(h.a,null,o.a.createElement(b.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),o.a.createElement(b.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),o.a.createElement(b.a,{color:"success"},"This is a success alert \u2014 check it out!"),o.a.createElement(b.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),o.a.createElement(b.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),o.a.createElement(b.a,{color:"info"},"This is a info alert \u2014 check it out!"),o.a.createElement(b.a,{color:"light"},"This is a light alert \u2014 check it out!"),o.a.createElement(b.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(p.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null," use ",o.a.createElement("code",null,".alert-link")," to provide links")),o.a.createElement(h.a,null,o.a.createElement(b.a,{color:"primary"},"This is a primary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"secondary"},"This is a secondary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"success"},"This is a success alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"danger"},"This is a danger alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"warning"},"This is a warning alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"info"},"This is a info alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"light"},"This is a light alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(b.a,{color:"dark"},"This is a dark alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(p.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"additional content")),o.a.createElement(h.a,null,o.a.createElement(b.a,{color:"success"},o.a.createElement("h4",{className:"alert-heading"},"Well done!"),o.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),o.a.createElement("hr",null),o.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(p.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"dismissing")),o.a.createElement(h.a,null,o.a.createElement(b.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(c.Component);a.default=d},65:function(e,a,t){"use strict";var l=t(5),n=t(13),r=t(63),s=t(2),i=t.n(s),c=t(14),o=t.n(c),m=t(59),u=t.n(m),f=t(70),p=t(60);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var d=b(b({},f.Transition.propTypes),{},{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:p.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),E=b(b({},f.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,r=e.baseClassActive,s=e.className,c=e.cssModule,o=e.children,m=e.innerRef,h=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(p.o)(h,p.c),d=Object(p.n)(h,p.c);return i.a.createElement(f.Transition,b,(function(e){var n="entered"===e,f=Object(p.m)(u()(s,t,n&&r),c);return i.a.createElement(a,Object(l.a)({className:f},d,{ref:m}),o)}))}g.propTypes=d,g.defaultProps=E,a.a=g}}]);
//# sourceMappingURL=56.b1ca489e.chunk.js.map