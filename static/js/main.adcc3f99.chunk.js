(this["webpackJsonpreact-quizz-app"]=this["webpackJsonpreact-quizz-app"]||[]).push([[0],{202:function(e,n,t){},206:function(e,n,t){},284:function(e,n,t){},292:function(e,n,t){},293:function(e,n,t){},359:function(e,n,t){},360:function(e,n,t){},361:function(e,n,t){},363:function(e,n,t){},364:function(e,n,t){},365:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t.n(r),i=t(27),c=t.n(i),a=(t(201),t(202),t(57)),o=t(17),u=t(372),j=t(186),l=t(178),d=t(26),b=t.n(d),f=t(41),O=t(24),h=function(e){e&&sessionStorage.setItem("login_user",JSON.stringify(e))},p=function(){var e=sessionStorage.getItem("login_user");return e?JSON.parse(e):null},m=function(){sessionStorage.removeItem("login_user")},x=function(e,n){return localStorage.setItem(e,JSON.stringify(n))},v=function(e){var n=localStorage.getItem(e);return n?JSON.parse(n):null},w=t(80),g=t(46),y=t(190),q=t(55),S=[{id:Object(q.v4)(),email:"admin@quiz-app.com",password:"admin",name:"Admin",userType:"Admin"},{id:Object(q.v4)(),email:"user1@quiz-app.com",password:"12345",name:"Mark",userType:"User"},{id:Object(q.v4)(),email:"user2@quiz-app.com",password:"12345",name:"Henry",userType:"User"},{id:Object(q.v4)(),email:"user3@quiz-app.com",password:"12345",name:"Bob",userType:"User"}],N=[{id:Object(q.v4)(),question:"What are the advantages of using React?"},{id:Object(q.v4)(),question:"What are the differences between functional and class components?"},{id:Object(q.v4)(),question:"What is the virtual DOM? How does react use the virtual DOM to render the UI?"},{id:Object(q.v4)(),question:"What are the differences between controlled and uncontrolled components?"}],A={},T=function(e,n){return new Promise((function(t,r){var s=S.find((function(t){return t.email===e&&t.password===n}));s&&setTimeout((function(){return t(s)}),500),setTimeout((function(){return r(new Error("User not found"))}),500)}))},C=function(){return new Promise((function(e,n){v("questions")&&void 0!==v("questions")?setTimeout((function(){return e(v("questions"))}),500):(x("questions",N),setTimeout((function(){return e(N)}),500)),setTimeout((function(){return n(new Error("Something went wrong!!!"))}),500)}))},I=function(e){return new Promise((function(n,t){e.question||t(new Error("Not empty question allowed!!!"));var r=v("questions"),s={id:Object(q.v4)(),question:e.question};r=[].concat(Object(y.a)(r),[s]),setTimeout((function(){return n(r)}),500)}))},E=function(e,n){return new Promise((function(t,r){var s=v("questions"),i=s.findIndex((function(n){return n.id===e}));return n?(s[i].question=n,x("questions",s),setTimeout((function(){return t(s)}),250)):setTimeout((function(){return r(new Error("Question not found"))}),250)}))},P=function(e){return new Promise((function(n,t){var r=v("questions").filter((function(n){return n.id!==e}));setTimeout((function(){return n(r)}),500),setTimeout((function(){return t(new Error("User not found"))}),500)}))},Q=function(){return new Promise((function(e,n){v("answers")&&void 0!==v("answers")?setTimeout((function(){return e(v("answers"))}),500):(x("answers",A),setTimeout((function(){return e(A)}),500)),setTimeout((function(){return n(new Error("Something went wrong!!!"))}),500)}))},k=function(e){return new Promise((function(n,t){var r=null;v("answers")&&(A=v("answers"),r=A[e]),setTimeout((function(){return n(r)}),500),setTimeout((function(){return t(new Error("Something went wrong!!!"))}),500)}))},z=function(e,n){return new Promise((function(t,r){n.answer||setTimeout((function(){return r(new Error("Empty answer not allowed!!!"))}),500);var s=A[e];if(s){var i=s[n.id];if(i)i.answer=n.answer,i.previousAnswer.push(n.answer),s[n.id]=i,A[e][n.id]=i;else{var c={question:n.question,answer:n.answer,previousAnswer:[n.answer]};A[e]=Object(g.a)(Object(g.a)({},A[e]),{},Object(w.a)({},n.id,c))}}else A=Object(g.a)(Object(g.a)({},A),{},Object(w.a)({},e,Object(w.a)({},n.id,{question:n.question,answer:n.answer,previousAnswer:[n.answer]})));setTimeout((function(){return t(A)}),500),setTimeout((function(){return r(new Error("Something went wrong!!!"))}),500)}))},U=t(3),F=Object(r.createContext)({currentUser:null,authenticateUser:function(){},logout:function(){},loading:!1,error:null});function _(e){var n=e.children,t=Object(r.useState)(!1),s=Object(O.a)(t,2),i=s[0],c=s[1],a=Object(r.useState)(null),o=Object(O.a)(a,2),u=o[0],j=o[1],l=Object(r.useState)(null),d=Object(O.a)(l,2),x=d[0],v=d[1];function w(){return(w=Object(f.a)(b.a.mark((function e(n,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,T(n,t).then((function(e){h(e),j(e),c(!1)})).catch((function(e){c(!1),v(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){var e=p();e&&j(e)}),[]);var g={currentUser:u,authenticateUser:function(e,n){return w.apply(this,arguments)},loading:i,logout:function(){m(),j(null)},error:x};return Object(U.jsx)(F.Provider,{value:g,children:n})}var J=t(174),D=t(177),W=t.n(D),H=t(176),M=t.n(H),B=(t(206),t(188)),R=t(373),L=t(193);function V(){var e=Object(r.useContext)(F),n=e.currentUser,t=e.logout,s=Object(o.g)();return Object(U.jsxs)(J.Header,{className:"header",children:[Object(U.jsx)("div",{className:"logo",children:Object(U.jsx)(a.b,{to:"/",children:"React Quiz App"})}),Object(U.jsx)("div",{className:"header-right-side",children:n?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("span",{children:[n.name,", Signed in"]})," ","Admin"!==n.userType?Object(U.jsxs)(B.a,{onClick:function(){s.push("/quiz")},type:"primary",children:["Start Quiz ",Object(U.jsx)(R.a,{})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(B.a,{onClick:function(){s.push("/answers")},type:"primary",children:"Answers"}),Object(U.jsxs)(B.a,{onClick:function(){s.push("/questions")},type:"primary",children:[Object(U.jsx)(L.a,{})," Questions"]})]}),Object(U.jsxs)(B.a,{onClick:function(){t(),s.push("/signin")},type:"primary",children:[Object(U.jsx)(M.a,{})," Sign Out"]})]}):Object(U.jsx)(a.b,{to:"/signin",children:Object(U.jsxs)(B.a,{type:"primary",children:[Object(U.jsx)(W.a,{})," Sign In"]})})})]})}t(284);var G=u.a.Content;function K(e){var n=e.children,t=Object(r.useContext)(F),s=t.loading,i=t.error,c=t.setError;return Object(r.useEffect)((function(){i&&(j.a.error({message:i}),c(null))}),[i]),Object(U.jsx)(l.a,{spinning:s,children:Object(U.jsxs)(u.a,{children:[Object(U.jsx)(V,{}),Object(U.jsx)(G,{children:n})]})})}var X=t(192);function Y(e){var n=e.component,t=Object(X.a)(e,["component"]);return Object(U.jsx)(o.b,Object(g.a)(Object(g.a)({},t),{},{render:function(e){return p()?Object(U.jsx)(n,Object(g.a)({},e)):Object(U.jsx)(o.a,{to:"/signin"})}}))}var Z=t(374),$=t(375),ee=t(376),ne=t(371),te=t(368);t(292);function re(e){var n=e.title;return Object(U.jsx)("div",{className:"title",children:Object(U.jsx)("h1",{children:n})})}function se(e){var n=e.answer;return Object(U.jsxs)("div",{className:"answer-section",children:[Object(U.jsx)("div",{className:"icon-section",children:Object(U.jsx)("span",{className:"answer-icon",children:"A"})}),Object(U.jsx)("span",{children:n})]})}function ie(e){var n=e.question;return Object(U.jsxs)("div",{className:"answer-section",children:[Object(U.jsx)("div",{className:"icon-section",children:Object(U.jsx)("span",{className:"question-icon",children:"Q"})}),Object(U.jsx)("span",{children:n})]})}function ce(){var e=Object(r.useState)(!0),n=Object(O.a)(e,2),t=n[0],s=n[1],i=Object(r.useState)(!1),c=Object(O.a)(i,2),a=c[0],o=c[1],u=Object(r.useState)(null),j=Object(O.a)(u,2),l=j[0],d=j[1];function h(){return(h=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,Q().then((function(e){x("answers",e),d(e),s(!1)})).catch((function(e){s(!1),o(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),{loading:t,error:a,answers:l}}t(293);var ae=ne.a.Panel;function oe(){var e=Object(r.useContext)(F).currentUser,n=ce(),t=n.answers,s=n.loading,i=Object(o.g)();return Object(r.useEffect)((function(){e&&"Admin"!==(null===e||void 0===e?void 0:e.userType)&&i.push("/")}),[e]),Object(U.jsxs)(l.a,{spinning:s,children:[Object(U.jsx)(re,{title:"Answers"}),Object(U.jsx)(te.a,{name:"dynamic_form_nest_item",autoComplete:"off",className:"container",children:Object(U.jsx)(ne.a,{defaultActiveKey:["0"],expandIcon:function(){return Object(U.jsx)(Z.a,{})},className:"user-collapse",children:t&&Object.keys(t).map((function(e,n){return Object(U.jsx)(ae,{header:e,children:Object.keys(t[e]).map((function(n,r){return Object(U.jsx)(ne.a,{expandIconPosition:"right",expandIcon:function(e){return e.isActive?Object(U.jsx)($.a,{}):Object(U.jsx)(ee.a,{})},className:"question-collapse",children:Object(U.jsx)(ae,{header:Object(U.jsx)(ie,{question:t[e][n].question}),children:Object(U.jsx)(se,{answer:t[e][n].answer})},r)})}))},n)}))})})]})}t(359);function ue(){var e=Object(o.g)(),n=Object(r.useContext)(F).currentUser;return Object(r.useEffect)((function(){n&&"Admin"===n.userType&&e.push("/questions")}),[]),Object(U.jsxs)("div",{className:"text-box",children:[Object(U.jsxs)("h1",{className:"primary-heading",children:[Object(U.jsx)("span",{children:"Welcome to the"}),Object(U.jsx)("span",{children:"React Quiz App"})]}),Object(U.jsx)(a.b,{to:"/quiz",children:Object(U.jsx)(B.a,{type:"default",shape:"round",size:"large",children:"Start Quiz"})})]})}t(360);function je(){return Object(U.jsxs)("div",{className:"text-box",children:[Object(U.jsxs)("h1",{className:"primary-heading",children:[Object(U.jsx)("span",{children:"404"}),Object(U.jsx)("span",{children:"Not Found"})]}),Object(U.jsx)(a.b,{to:"/",children:Object(U.jsx)(B.a,{type:"default",shape:"round",size:"large",children:"Go Home"})})]})}t(361);var le=t(195),de=t(377),be=t(369),fe=be.a.Paragraph;function Oe(e){var n=e.onChange,t=e.question,r=e.handleDelete;return Object(U.jsxs)("div",{className:"answer-section",children:[Object(U.jsx)("div",{className:"icon-section",children:Object(U.jsx)("span",{className:"question-icon",children:"Q"})}),Object(U.jsx)(fe,{editable:{onChange:function(e){return n(e,t)},icon:Object(U.jsx)(B.a,{type:"primary",children:Object(U.jsx)(le.a,{})})},children:t.question}),Object(U.jsx)(B.a,{type:"primary",onClick:function(){return r(t.id)},children:Object(U.jsx)(de.a,{})})]})}var he=t(370);function pe(e){var n=e.form,t=e.handleAddQuestion;return Object(U.jsxs)(te.a,{layout:"inline",className:"add-question-form",onFinish:t,form:n,children:[Object(U.jsx)(te.a.Item,{name:"question",style:{width:"80%"},children:Object(U.jsx)(he.a.TextArea,{placeholder:"Add Question"})}),Object(U.jsx)(te.a.Item,{children:Object(U.jsx)(B.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Add Question"})})]})}function me(){var e=Object(r.useState)(!0),n=Object(O.a)(e,2),t=n[0],s=n[1],i=Object(r.useState)(!1),c=Object(O.a)(i,2),a=c[0],o=c[1],u=Object(r.useState)([]),j=Object(O.a)(u,2),l=j[0],d=j[1];function h(){return(h=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,C().then((function(e){x("questions",e),d(e),s(!1)})).catch((function(e){s(!1),o(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,I(n).then((function(e){x("questions",e),d(e),s(!1)})).catch((function(e){s(!1),o(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,P(n).then((function(e){x("questions",e),d(e),s(!1)})).catch((function(e){s(!1),o(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(f.a)(b.a.mark((function e(n,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,E(n,t).then((function(e){x("questions",e),d(e),s(!1)})).catch((function(e){s(!1),o(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),{loading:t,error:a,questions:l,addQuestion:function(e){return p.apply(this,arguments)},removeQuestion:function(e){return m.apply(this,arguments)},editQuestions:function(e,n){return v.apply(this,arguments)}}}var xe=function(){var e=te.a.useForm(),n=Object(O.a)(e,1)[0],t=Object(o.g)(),s=Object(r.useContext)(F).currentUser,i=me(),c=i.questions,a=i.loading,u=i.addQuestion,j=i.removeQuestion,d=i.editQuestions,b=function(e,n){n.id&&e.length>0&&e!==n.question&&d(n.id,e)},f=function(e){j(e)};return Object(r.useEffect)((function(){"Admin"!==(null===s||void 0===s?void 0:s.userType)&&t.push("/")}),[]),Object(U.jsxs)(l.a,{spinning:a,children:[Object(U.jsx)(re,{title:"Questions"}),Object(U.jsx)(te.a,{name:"dynamic_form_nest_item",autoComplete:"off",className:"container",children:c.map((function(e,n){return Object(U.jsx)(te.a.Item,{children:Object(U.jsx)(Oe,{index:n,onChange:b,question:e,handleDelete:f})},e.id)}))}),Object(U.jsx)(pe,{form:n,handleAddQuestion:function(e){u(e),n.resetFields()}})]})};function ve(e){var n=Object(r.useState)(!0),t=Object(O.a)(n,2),s=t[0],i=t[1],c=Object(r.useState)(!1),a=Object(O.a)(c,2),o=a[0],u=a[1],j=Object(r.useState)(null),l=Object(O.a)(j,2),d=l[0],h=l[1],p=Object(r.useState)([]),m=Object(O.a)(p,2),v=m[0],w=m[1];function g(){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.next=3,k(e).then((function(e){h(e),i(!1)})).catch((function(e){i(!1),u(e.toString())}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function q(){return(q=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,C().then((function(e){x("questions",e),w(e),i(!1)})).catch((function(e){i(!1),u(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(f.a)(b.a.mark((function e(n,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,z(n,t).then((function(e){x("answers",e),g(),i(!1)})).catch((function(e){i(!1),u(e.toString())}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){g(),function(){q.apply(this,arguments)}()}),[e]),{loading:s,error:o,answers:d,submitAnswer:function(e,n){return S.apply(this,arguments)},questions:v}}var we=be.a.Paragraph;function ge(e){var n,t=e.answers,r=e.question,s=e.handleSubmitAnswer,i=e.form;return Object(U.jsxs)("div",{className:"answer-section",children:[Object(U.jsx)("div",{className:"icon-section",children:Object(U.jsx)("span",{className:"answer-icon",children:"A"})}),t&&t[null===r||void 0===r?void 0:r.id]?Object(U.jsx)("div",{className:"text-section",children:Object(U.jsx)(we,{editable:{onChange:function(e){return s(r,e)},icon:Object(U.jsx)(B.a,{type:"primary",children:Object(U.jsx)(le.a,{})})},children:null===(n=t[null===r||void 0===r?void 0:r.id])||void 0===n?void 0:n.answer})}):Object(U.jsxs)(te.a,{layout:"inline",form:i,children:[Object(U.jsx)(te.a.Item,{name:"answer-".concat(r.id),children:Object(U.jsx)(he.a.TextArea,{})}),Object(U.jsx)(te.a.Item,{children:Object(U.jsx)(B.a,{type:"primary",onClick:function(){return s(r)},children:"Submit"})})]},r.id)]})}var ye=t(367);function qe(e){var n=e.prevAns;return Object(U.jsx)(ye.b,{header:Object(U.jsx)("div",{children:"Previous Answer"}),bordered:!0,dataSource:n,renderItem:function(e){return Object(U.jsx)(ye.b.Item,{children:e})},style:{marginTop:"15px"}})}t(363);var Se=ne.a.Panel;function Ne(){var e=Object(o.g)(),n=Object(r.useContext)(F).currentUser,t=ve(null===n||void 0===n?void 0:n.email),s=t.loading,i=t.error,c=t.answers,a=t.submitAnswer,u=t.questions,d=te.a.useForm(),b=Object(O.a)(d,1)[0];Object(r.useEffect)((function(){"Admin"===(null===n||void 0===n?void 0:n.userType)&&e.push("/questions")}),[n]),Object(r.useEffect)((function(){i&&j.a.error({message:i})}),[i]);var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t;t||(r=b.getFieldValue("answer-".concat(e.id)));var s=Object(g.a)(Object(g.a)({},e),{},{answer:r});a(null===n||void 0===n?void 0:n.email,s)};return Object(U.jsxs)(l.a,{spinning:s,children:[Object(U.jsx)(re,{title:"Quiz"}),Object(U.jsx)("div",{className:"container",children:Object(U.jsx)(ne.a,{accordion:!0,expandIconPosition:"right",expandIcon:function(e){return e.isActive?Object(U.jsx)($.a,{}):Object(U.jsx)(ee.a,{})},children:u&&u.map((function(e,n){var t,r;return Object(U.jsxs)(Se,{header:Object(U.jsxs)("div",{className:"answer-section",children:[Object(U.jsx)("div",{className:"icon-section",children:Object(U.jsx)("span",{className:"question-icon",children:"Q"})}),e.question]}),children:[Object(U.jsx)(ge,{answers:c,question:e,handleSubmitAnswer:f,form:b}),c&&(null===(t=c[null===e||void 0===e?void 0:e.id])||void 0===t?void 0:t.previousAnswer.length)>1?Object(U.jsx)(qe,{prevAns:null===(r=c[null===e||void 0===e?void 0:e.id])||void 0===r?void 0:r.previousAnswer.slice(0,-1)}):null]},e.id)}))})})]})}var Ae=t(378),Te=t(379);t(364);function Ce(){var e=Object(r.useContext)(F),n=e.authenticateUser,t=e.currentUser,s=Object(o.g)(),i=te.a.useForm(),c=Object(O.a)(i,1)[0];Object(r.useEffect)((function(){t&&s.push("/")}),[t]);return Object(U.jsxs)(te.a,{name:"normal_signin",className:"signin-form",initialValues:{remember:!0},onFinish:function(e){n(e.email,e.password),c.resetFields()},form:c,children:[Object(U.jsx)(te.a.Item,{className:"form-title",children:Object(U.jsx)("h1",{children:"Sign in to Continue"})}),Object(U.jsx)(te.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:Object(U.jsx)(he.a,{prefix:Object(U.jsx)(Z.a,{className:"site-form-item-icon"}),placeholder:"Email",autoComplete:"new-password",type:"email"})}),Object(U.jsx)(te.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(U.jsx)(he.a,{prefix:Object(U.jsx)(Ae.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",autoComplete:"new-password"})}),Object(U.jsx)(te.a.Item,{children:Object(U.jsxs)(B.a,{type:"primary",htmlType:"submit",className:"signin-form-button",children:[Object(U.jsx)(Te.a,{})," Sign in"]})})]})}var Ie=function(){return Object(U.jsx)(a.a,{children:Object(U.jsx)(_,{children:Object(U.jsx)(K,{children:Object(U.jsxs)(o.d,{children:[Object(U.jsx)(o.b,{exact:!0,path:"/signin",component:Ce}),Object(U.jsx)(Y,{exact:!0,path:"/",component:ue}),Object(U.jsx)(Y,{exact:!0,path:"/questions",component:xe}),Object(U.jsx)(Y,{exact:!0,path:"/answers",component:oe}),Object(U.jsx)(Y,{exact:!0,path:"/quiz",component:Ne}),Object(U.jsx)(o.b,{component:je})]})})})})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,380)).then((function(n){var t=n.getCLS,r=n.getFID,s=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),s(e),i(e),c(e)}))};c.a.render(Object(U.jsx)(s.a.StrictMode,{children:Object(U.jsx)(Ie,{})}),document.getElementById("root")),Ee()}},[[365,1,2]]]);
//# sourceMappingURL=main.adcc3f99.chunk.js.map