(this.webpackJsonpv8plondon=this.webpackJsonpv8plondon||[]).push([[0],[,,,,function(e,c,t){e.exports={Nav:"Nav_Nav__2Xj4Q",active:"Nav_active__2qyrf",OurServiceSubmenu:"Nav_OurServiceSubmenu__2jw9J",ToggleBtn:"Nav_ToggleBtn__1K9_f",open:"Nav_open__1seKG"}},,,,,function(e,c,t){e.exports={Home:"Home_Home__1uCvv",Container:"Home_Container__1bm4a",Headers:"Home_Headers___wAtf",SeeMoreWrapper:"Home_SeeMoreWrapper__2jaos",SeeMoreBtn:"Home_SeeMoreBtn__1RFz1",LogoWrapper:"Home_LogoWrapper__6mmuY",Logo:"Home_Logo__2twc1"}},,,,,,,,,,,,function(e,c,t){e.exports={AboutUs:"AboutUs_AboutUs__14RxT"}},function(e,c,t){e.exports={OurService:"OurService_OurService__IFnFk"}},function(e,c,t){e.exports={Bodywork:"Bodywork_Bodywork__25bvv"}},function(e,c,t){e.exports={Repairs:"Repairs_Repairs__1Bh16"}},function(e,c,t){e.exports={Servicing:"Servicing_Servicing__3gcOR"}},function(e,c,t){e.exports={Tuning:"Tuning_Tuning__2rC37"}},function(e,c,t){e.exports={SpecialOffers:"SpecialOffers_SpecialOffers__3lT7-"}},function(e,c,t){e.exports={Gallery:"Gallery_Gallery__24KQf"}},function(e,c,t){e.exports={Contact:"Contact_Contact__22Kf2"}},,,,,,,function(e,c,t){},function(e,c,t){},,,,,,,function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(17),r=t.n(s),i=(t(36),t(5)),o=t(2),l=(t(37),t(18)),j=t(19),u=t(31),b=t(30),O=t(4),x=t.n(O),d=t(0),p=function(e){Object(u.a)(t,e);var c=Object(b.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=c.call(this,e)).toggleBtn=Object(n.createRef)(),a.nav=Object(n.createRef)(),a}return Object(j.a)(t,[{key:"render",value:function(){var e=this;return this.toggleClickHandler=function(){e.toggleBtn.current.classList.toggle(x.a.open),e.nav.current.classList.toggle(x.a.open)},document.addEventListener("click",(function(c){var t=c.target;"A"!==t.nodeName&&"SPAN"!==t.nodeName&&t!==e.toggleBtn.current&&e.toggleBtn.current.className.includes(x.a.open)&&(e.toggleBtn.current.classList.remove(x.a.open),e.nav.current.classList.remove(x.a.open))})),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("nav",{ref:this.nav,className:x.a.Nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{exact:!0,activeClassName:x.a.active,to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/About-us",children:"About Us"})}),Object(d.jsxs)("li",{children:[Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Our-service",children:"Our Service"}),Object(d.jsx)("div",{className:x.a.OurServiceSubmenu,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Bodywork",children:"Bodywork"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Repairs",children:"Repairs"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Servicing",children:"Servicing"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Tuning",children:"Tuning"})})]})})]}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Special-offers",children:"Special Offers"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Gallery",children:"Gallery"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{activeClassName:x.a.active,to:"/Contact",children:"Contact"})})]})}),Object(d.jsxs)("div",{ref:this.toggleBtn,className:x.a.ToggleBtn,onClick:this.toggleClickHandler,children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]})}}]),t}(n.Component),h=t(9),v=t.n(h),m=function(){return Object(d.jsx)("section",{className:v.a.Home,children:Object(d.jsx)("div",{className:v.a.Container,children:Object(d.jsxs)("div",{className:v.a.Headers,children:[Object(d.jsx)("h1",{children:"Welcome to V8P London"}),Object(d.jsx)("h2",{children:"We'll make your car awesome!"}),Object(d.jsxs)("div",{className:v.a.SeeMoreWrapper,children:[Object(d.jsx)(i.b,{to:"/Our-service",children:Object(d.jsx)("div",{className:v.a.SeeMoreBtn,children:"Our Service"})}),Object(d.jsx)(i.b,{to:"/About-us",children:Object(d.jsx)("div",{className:v.a.SeeMoreBtn,children:"About Us"})})]}),Object(d.jsx)("div",{className:v.a.LogoWrapper,children:Object(d.jsx)("div",{className:v.a.Logo})})]})})})},_=t(21),f=t.n(_),g=function(){return Object(d.jsx)("section",{className:f.a.AboutUs,children:Object(d.jsx)("p",{children:"About Us"})})},N=t(22),S=t.n(N),C=function(){return Object(d.jsx)("section",{className:S.a.OurService,children:Object(d.jsx)("p",{children:"ourService"})})},B=t(23),y=t.n(B),k=function(){return Object(d.jsx)("section",{className:y.a.Bodywork,children:Object(d.jsx)("p",{children:"bodywork"})})},H=t(24),w=t.n(H),A=function(){return Object(d.jsx)("section",{className:w.a.Repairs,children:Object(d.jsx)("p",{children:"repairs"})})},L=t(25),T=t.n(L),R=function(){return Object(d.jsx)("section",{className:T.a.Servicing,children:Object(d.jsx)("p",{children:"servicing"})})},G=t(26),F=t.n(G),M=function(){return Object(d.jsx)("section",{className:F.a.Tuning,children:Object(d.jsx)("p",{children:"tuning"})})},W=t(27),U=t.n(W),K=function(){return Object(d.jsx)("section",{className:U.a.SpecialOffers,children:Object(d.jsx)("p",{children:"specialOffers"})})},P=t(28),I=t.n(P),J=function(){return Object(d.jsx)("section",{className:I.a.Gallery,children:Object(d.jsx)("p",{children:"Gallery"})})},E=t(29),Q=t.n(E),q=function(){return Object(d.jsx)("section",{className:Q.a.Contact,children:Object(d.jsx)("p",{children:"contact"})})};var z=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(o.a,{exact:!0,path:"/About-us",component:g}),Object(d.jsx)(o.a,{exact:!0,path:"/Our-service",component:C}),Object(d.jsx)(o.a,{exact:!0,path:"/Bodywork",component:k}),Object(d.jsx)(o.a,{exact:!0,path:"/Repairs",component:A}),Object(d.jsx)(o.a,{exact:!0,path:"/Servicing",component:R}),Object(d.jsx)(o.a,{exact:!0,path:"/Tuning",component:M}),Object(d.jsx)(o.a,{exact:!0,path:"/Special-offers",component:K}),Object(d.jsx)(o.a,{exact:!0,path:"/Gallery",component:J}),Object(d.jsx)(o.a,{exact:!0,path:"/Contact",component:q})]})]})})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),D()}],[[44,1,2]]]);
//# sourceMappingURL=main.ef89a382.chunk.js.map