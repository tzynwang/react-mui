(this["webpackJsonpreact-mui"]=this["webpackJsonpreact-mui"]||[]).push([[0],{126:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),i=n.n(c),o=n(219),s=n(105),l={components:{MuiButton:{styleOverrides:{root:{height:"40px",fontWeight:"bold",fontSize:"16px",lineHeight:"24px","&.Mui-disabled":{backgroundColor:"#bdbdbd",color:"#fff"}},containedSecondary:{color:"#000"},textPrimary:{color:"#000"}}}}},d={components:{MuiCheckbox:{styleOverrides:{root:{padding:"4px 0",paddingRight:"8px"}}},MuiFormControlLabel:{styleOverrides:{root:{marginLeft:"0",marginRight:"32px"}}}}},j={palette:{primary:{main:"#1f86ff",dark:"#0075fe"},secondary:{main:"#e5e5e5",dark:"#bdbdbd"}}},b={components:{MuiTabs:{styleOverrides:{root:{minHeight:"32px"}}},MuiTab:{styleOverrides:{root:{minHeight:"32px",padding:"6px 8px",fontSize:"14px",fontWeight:"bold","&.Mui-selected":{color:"#000"},"&:not(.Mui-selected)":{color:"#747474"},"&:not(:first-of-type)":{marginLeft:"16px"}}}}}},u={components:{MuiTextField:{styleOverrides:{root:{width:"300px"}}},MuiOutlinedInput:{styleOverrides:{root:{backgroundColor:"#e5e5e5","&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#747474"}},input:{height:"40px",padding:"0",paddingLeft:"0","&::placeholder":{fontSize:"16px",lineHeight:"24px",color:"#747474",opacity:"1"}},notchedOutline:{borderColor:"transparent"}}}}},x=Object(s.a)(l,d,j,b,u),h=(n(126),n(82)),O=n.n(h),p=n(99),g=n(13),f=n(100),m=n.n(f),v=n(220),y=n(102),C=n.n(y),w=n(103),P=n.n(w),M=n(1);var k=function(){return Object(M.jsxs)(r.a.Fragment,{children:[Object(M.jsx)(v.a,{variant:"contained",startIcon:Object(M.jsx)(C.a,{}),disableElevation:!0,children:"\u65b0\u589e\u72d0\u72f8"}),Object(M.jsx)(v.a,{variant:"contained",startIcon:Object(M.jsx)(P.a,{}),disableElevation:!0,disabled:!0,children:"\u4e0d\u80fd\u7de8\u8f2f\u72d0\u72f8"}),Object(M.jsx)(v.a,{variant:"contained",disableElevation:!0,children:"\u78ba\u5b9a"}),Object(M.jsx)(v.a,{variant:"text",disableElevation:!0,children:"\u53d6\u6d88"}),Object(M.jsx)(v.a,{variant:"contained",color:"secondary",disableElevation:!0,children:"\u4e0a\u4e00\u72d0"})]})},E=n(214),I=n(223),S=n(104),T=n.n(S);var F=function(){return Object(M.jsxs)(r.a.Fragment,{children:[Object(M.jsx)(E.a,{id:"outlined-basic",variant:"outlined",label:!1,placeholder:"\u8acb\u8f38\u5165\u72d0\u72f8",InputProps:{startAdornment:Object(M.jsx)(I.a,{position:"start",children:Object(M.jsx)(T.a,{})})},sx:{marginRight:"8px"}}),Object(M.jsx)(v.a,{variant:"contained",disableElevation:!0,children:"\u641c\u5c0b"})]})},L=n(224),H=n(225),R=n(216);var z=function(){return Object(M.jsxs)(L.a,{row:!0,children:[Object(M.jsx)(H.a,{control:Object(M.jsx)(R.a,{defaultChecked:!0}),label:"\u5317\u72d0"}),Object(M.jsx)(H.a,{control:Object(M.jsx)(R.a,{}),label:"\u85cf\u72d0"}),Object(M.jsx)(H.a,{control:Object(M.jsx)(R.a,{}),label:"\u9280\u72d0"})]})},A=n(217),B=n(226);var W=function(e){var t=e.tabContent,n=e.currentTab,a=e.handleTabChange;return Object(M.jsx)(A.a,{value:n,onChange:a,"aria-label":"gender tabs",children:t.map((function(e){return Object(M.jsx)(B.a,{label:e,value:e},e)}))})},D=n(213),J=function(e){var t=e.from,n=e.to,a=e.count;return"\u7b2c".concat(t,"\u81f3").concat(n,"\u9805\uff0c\u7e3d\u8a08").concat(a,"\u9805")};var N=function(e){var t=e.count,n=e.page,a=e.handlePageChange,r=e.rowsPerPage;return Object(M.jsx)(D.a,{component:"div",count:t,page:n,onPageChange:a,rowsPerPage:r,rowsPerPageOptions:[],labelDisplayedRows:J})},G=n(229),q=n(232),K=n(227),Q=n(228),U=n(230),V=n(231);var X=function(e){var t=e.userList;return Object(M.jsx)(Q.a,{children:Object(M.jsxs)(G.a,{sx:{minWidth:650},"aria-label":"demo table",children:[Object(M.jsx)(U.a,{children:Object(M.jsxs)(V.a,{children:[Object(M.jsx)(K.a,{children:"Gender"}),Object(M.jsx)(K.a,{children:"Name"}),Object(M.jsx)(K.a,{children:"Email"}),Object(M.jsx)(K.a,{children:"Age"}),Object(M.jsx)(K.a,{children:"Country"})]})}),Object(M.jsx)(q.a,{children:t.map((function(e){return Object(M.jsxs)(V.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(M.jsx)(K.a,{component:"th",scope:"row",children:e.gender}),Object(M.jsxs)(K.a,{children:[e.name.first," ",e.name.last]}),Object(M.jsx)(K.a,{children:e.email}),Object(M.jsx)(K.a,{children:e.dob.age}),Object(M.jsx)(K.a,{children:e.location.country})]},e.login.uuid)}))})]})})},Y=n(222),Z=n(211),$=["female","male"];var _=function(){var e=Object(a.useState)("female"),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(g.a)(c,2),o=i[0],s=i[1],l=Object(a.useState)(0),d=Object(g.a)(l,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://randomuser.me/api/?gender=".concat(n,"&results=").concat(10,"&page=").concat(j+1));case 2:t=e.sent,s(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,j]),Object(M.jsxs)(Y.a,{className:"App",sx:{p:3},children:[Object(M.jsx)(Z.a,{spacing:2,direction:"row",sx:{margin:"1rem 0"},children:Object(M.jsx)(k,{})}),Object(M.jsx)(Z.a,{direction:"row",sx:{margin:"1rem 0"},children:Object(M.jsx)(F,{})}),Object(M.jsx)(Z.a,{direction:"row",sx:{margin:"1rem 0"},children:Object(M.jsx)(z,{})}),Object(M.jsxs)(Y.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(W,{tabContent:$,currentTab:n,handleTabChange:function(e,t){r(t)}}),Object(M.jsx)(N,{count:50,page:j,handlePageChange:function(e,t){b(t)},rowsPerPage:10})]}),Object(M.jsx)(X,{userList:o})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(o.a,{theme:x,children:Object(M.jsx)(_,{})})}),document.getElementById("root")),ee()}},[[152,1,2]]]);
//# sourceMappingURL=main.ce967c0c.chunk.js.map