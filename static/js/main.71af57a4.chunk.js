(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n.n(a),i=n(26),s=n.n(i),u=n(9),o=n(18),l=n(5),j=n(7),d=n.n(j),b=n(14),p=n(19);n(36),n(48),n(47);p.a.initializeApp({apiKey:"AIzaSyCQ_KSVPaT_m6QxR2VtfduCpTBk1tn7-RE",authDomain:"nwitter-b101e.firebaseapp.com",projectId:"nwitter-b101e",storageBucket:"nwitter-b101e.appspot.com",messagingSenderId:"1070303776599",appId:"1:1070303776599:web:aecf687152116233793812"});var O=p.a,h=p.a.auth(),x=p.a.firestore(),f=p.a.storage(),m=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),o=s[0],l=s[1],j=Object(a.useState)(!0),p=Object(u.a)(j,2),O=p[0],x=p[1],f=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?(c(r),console.log(n,r)):"password"===n&&(l(r),console.log(n,r))},m=function(){var e=Object(b.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=9;break}return e.next=5,h.createUserWithEmailAndPassword(n,o);case 5:r=e.sent,console.log(r),e.next=12;break;case 9:return e.next=11,h.signInWithEmailAndPassword(n,o);case 11:r=e.sent;case 12:console.log(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:m,children:[Object(r.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:f}),Object(r.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:f}),Object(r.jsx)("input",{type:"submit",value:O?"Create Account":"Log In"})]}),Object(r.jsx)("span",{onClick:function(){return x((function(e){return!e}))},children:O?"SignIng":"CreateAccount"})]})},g=function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new O.auth.GoogleAuthProvider:"github"===n&&(r=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:e,name:"google",children:"Continue With Google"}),Object(r.jsx)("button",{onClick:e,name:"github",children:"Continue With GitHub"})]})})]})},v=n(29),w=n(50),y=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),j=l[0],p=l[1],O=function(){var e=Object(b.a)(d.a.mark((function e(n){var r,a,c,u,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===j){e.next=17;break}return r=f.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=5,r.putString(j,"data_url");case 5:return a=e.sent,e.next=8,a.ref.getDownloadURL();case 8:return c=e.sent,console.log("attachmentUrl",c),u={text:i,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=13,x.collection("nweets").add(u);case 13:s(""),p(""),e.next=23;break;case 17:if(""!==j){e.next=23;break}return o={text:i,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:j},e.next=21,x.collection("nweets").add(o);case 21:s(""),p("");case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{onSubmit:O,children:[Object(r.jsx)("input",{value:i,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(e){var t=e.currentTarget.result;console.log("finishedEvent",e),p(t)}}}),Object(r.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{alt:"attachement",src:j,width:"50px",height:"50px"}),Object(r.jsx)("button",{onClick:function(){p("")},children:"Clear"})]})]})},k=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),i=Object(u.a)(c,2),s=i[0],o=i[1],l=Object(a.useState)(t.text),j=Object(u.a)(l,2),p=j[0],O=j[1],h=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("wann dlelete?"),console.log(n),!n){e.next=7;break}return e.next=5,x.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,f.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return o((function(e){return!e}))},g=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("nweets/".concat(t.id)).update({text:p});case 3:o(!1),console.log("newNweet",p);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:s?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:g,children:[Object(r.jsx)("input",{type:"text",placeholder:"Edit yours",value:p,onChange:function(e){var t=e.target.value;O(t)},required:!0}),Object(r.jsx)("input",{type:"submit",value:"Update Neweet"})]}),Object(r.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(r.jsxs)(r.Fragment,{children:[" ",Object(r.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(r.jsx)("img",{alt:"Hello",src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:h,children:"Delete Nweet"}),Object(r.jsx)("button",{onClick:m,children:"Edit Nweet"})]})]})})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(u.a)(n,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){x.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));s(t),console.log(t)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{userObj:t}),Object(r.jsx)("div",{children:null===i||void 0===i?void 0:i.map((function(e){return Object(r.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(e){var t=e.userObj;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/",children:"HOME"})}),Object(r.jsx)("li",{children:Object(r.jsxs)(o.b,{to:"/profile",children:[t.displayName,"'s Profile"]})})]})})},U=function(e){var t=e.userObj,n=e.refreshUser,c=Object(l.g)(),i=Object(a.useState)(t.displayName),s=Object(u.a)(i,2),o=s[0],j=s[1],p=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),r.target.value,t.displayName===o){e.next=5;break}return e.next=5,t.updateProfile({displayName:o});case 5:n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:p,children:[Object(r.jsx)("input",{type:"text",placeholder:"DisplayName",onChange:function(e){var t=e.target.value;j(t)},value:o}),Object(r.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(r.jsx)("button",{onClick:function(){h.signOut(),c.push("/")},children:"Log Out"})]})},I=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(r.jsxs)(o.a,{children:[t&&Object(r.jsx)(S,{userObj:n}),Object(r.jsx)(l.d,{children:t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",children:Object(r.jsx)(C,{userObj:n})}),Object(r.jsx)(l.b,{exact:!0,path:"/profile",children:Object(r.jsx)(U,{userObj:n,refreshUser:a})}),Object(r.jsx)(l.a,{from:"*",to:"/"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",children:Object(r.jsx)(g,{})}),Object(r.jsx)(l.a,{from:"*",to:"/"})]})})]})};var N=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(r.jsx)("div",{children:n?Object(r.jsx)(I,{refreshUser:function(){console.log(h.currentUser.displayName);var e=h.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:o,isLoggedIn:Boolean(o)}):"Initializing...."})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.71af57a4.chunk.js.map