(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[55],{355:function(e,t,a){"use strict";a.r(t);var i=a(23),l=a(24),o=a(27),n=a(26),r=a(25),s=a(2),c=a.n(s),m=a(95),u=a(96),g=a(132),d=a(298),p=a(133),h=a(66),E=a(351),f=a(303),b=a(304),q=a(5),v=a(13),y=a(14),k=a.n(y),C=a(59),S=a.n(C),N=a(60),D={tag:N.q,className:k.a.string,cssModule:k.a.object},x=function(e){var t=e.className,a=e.cssModule,i=e.tag,l=Object(v.a)(e,["className","cssModule","tag"]),o=Object(N.m)(S()(t,"modal-footer"),a);return c.a.createElement(i,Object(q.a)({},l,{className:o}))};x.propTypes=D,x.defaultProps={tag:"div"};var O=x,L=function(e){Object(n.a)(a,e);var t=Object(r.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={modal:!1,large:!1,small:!1,primary:!1,success:!1,warning:!1,danger:!1,info:!1},l.toggle=l.toggle.bind(Object(o.a)(l)),l.toggleLarge=l.toggleLarge.bind(Object(o.a)(l)),l.toggleSmall=l.toggleSmall.bind(Object(o.a)(l)),l.togglePrimary=l.togglePrimary.bind(Object(o.a)(l)),l.toggleSuccess=l.toggleSuccess.bind(Object(o.a)(l)),l.toggleWarning=l.toggleWarning.bind(Object(o.a)(l)),l.toggleDanger=l.toggleDanger.bind(Object(o.a)(l)),l.toggleInfo=l.toggleInfo.bind(Object(o.a)(l)),l}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleSmall",value:function(){this.setState({small:!this.state.small})}},{key:"togglePrimary",value:function(){this.setState({primary:!this.state.primary})}},{key:"toggleSuccess",value:function(){this.setState({success:!this.state.success})}},{key:"toggleWarning",value:function(){this.setState({warning:!this.state.warning})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"toggleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(g.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Bootstrap Modals"),c.a.createElement(p.a,null,c.a.createElement(h.a,{onClick:this.toggle,className:"mr-1"},"Launch demo modal"),c.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},c.a.createElement(f.a,{toggle:this.toggle},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"primary",onClick:this.toggle},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggle},"Cancel"))),c.a.createElement(h.a,{onClick:this.toggleLarge,className:"mr-1"},"Launch large modal"),c.a.createElement(E.a,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-lg "+this.props.className},c.a.createElement(f.a,{toggle:this.toggleLarge},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"primary",onClick:this.toggleLarge},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggleLarge},"Cancel"))),c.a.createElement(h.a,{onClick:this.toggleSmall,className:"mr-1"},"Launch small modal"),c.a.createElement(E.a,{isOpen:this.state.small,toggle:this.toggleSmall,className:"modal-sm "+this.props.className},c.a.createElement(f.a,{toggle:this.toggleSmall},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"primary",onClick:this.toggleSmall},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggleSmall},"Cancel"))),c.a.createElement("hr",null),c.a.createElement(h.a,{color:"primary",onClick:this.togglePrimary,className:"mr-1"},"Primary modal"),c.a.createElement(E.a,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary "+this.props.className},c.a.createElement(f.a,{toggle:this.togglePrimary},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"primary",onClick:this.togglePrimary},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.togglePrimary},"Cancel"))),c.a.createElement(h.a,{color:"success",onClick:this.toggleSuccess,className:"mr-1"},"Success modal"),c.a.createElement(E.a,{isOpen:this.state.success,toggle:this.toggleSuccess,className:"modal-success "+this.props.className},c.a.createElement(f.a,{toggle:this.toggleSuccess},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"success",onClick:this.toggleSuccess},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggleSuccess},"Cancel"))),c.a.createElement(h.a,{color:"warning",onClick:this.toggleWarning,className:"mr-1"},"Warning modal"),c.a.createElement(E.a,{isOpen:this.state.warning,toggle:this.toggleWarning,className:"modal-warning "+this.props.className},c.a.createElement(f.a,{toggle:this.toggleWarning},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"warning",onClick:this.toggleWarning},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggleWarning},"Cancel"))),c.a.createElement(h.a,{color:"danger",onClick:this.toggleDanger,className:"mr-1"},"Danger modal"),c.a.createElement(E.a,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger "+this.props.className},c.a.createElement(f.a,{toggle:this.toggleDanger},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"danger",onClick:this.toggleDanger},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggleDanger},"Cancel"))),c.a.createElement(h.a,{color:"info",onClick:this.toggleInfo,className:"mr-1"},"Info modal"),c.a.createElement(E.a,{isOpen:this.state.info,toggle:this.toggleInfo,className:"modal-info "+this.props.className},c.a.createElement(f.a,{toggle:this.toggleInfo},"Modal title"),c.a.createElement(b.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),c.a.createElement(O,null,c.a.createElement(h.a,{color:"primary",onClick:this.toggleInfo},"Do Something")," ",c.a.createElement(h.a,{color:"secondary",onClick:this.toggleInfo},"Cancel"))))))))}}]),a}(s.Component);t.default=L}}]);
//# sourceMappingURL=55.67ed4d19.chunk.js.map