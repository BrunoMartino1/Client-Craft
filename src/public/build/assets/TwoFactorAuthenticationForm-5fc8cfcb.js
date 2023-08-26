import{r as _,s as N,o as e,d as a,a as l,m as O,b as n,w as o,f as r,t as C,q as R,n as b,l as Q,K as Y,T as D,j as I,x as U,c as h,e as i,u as F,F as j,g as z,O as P}from"./app-b7f552e4.js";import{_ as G}from"./Modal-1768a618.js";import{_ as W}from"./DialogModal-1d7dcefb.js";import{_ as B,a as q}from"./TextInput-55406bef.js";import{_ as $}from"./PrimaryButton-f0870004.js";import{_ as T}from"./SecondaryButton-3f575f52.js";import{_ as J}from"./DangerButton-05b88c3c.js";import{_ as X}from"./InputLabel-2f53bc99.js";import"./SectionTitle-33db1878.js";import"./_plugin-vue_export-helper-c27b6911.js";const Z={class:"mt-4"},y={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(w,{emit:x}){const g=_(!1),t=N({password:"",error:"",processing:!1}),s=_(null),m=()=>{axios.get(route("password.confirmation")).then(c=>{c.data.confirmed?x("confirmed"):(g.value=!0,setTimeout(()=>s.value.focus(),250))})},v=()=>{t.processing=!0,axios.post(route("password.confirm"),{password:t.password}).then(()=>{t.processing=!1,f(),Q().then(()=>x("confirmed"))}).catch(c=>{t.processing=!1,t.error=c.response.data.errors.password[0],s.value.focus()})},f=()=>{g.value=!1,t.password="",t.error=""};return(c,u)=>(e(),a("span",null,[l("span",{onClick:m},[O(c.$slots,"default")]),n(W,{show:g.value,onClose:f},{title:o(()=>[r(C(w.title),1)]),content:o(()=>[r(C(w.content)+" ",1),l("div",Z,[n(B,{ref_key:"passwordInput",ref:s,modelValue:t.password,"onUpdate:modelValue":u[0]||(u[0]=p=>t.password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:R(v,["enter"])},null,8,["modelValue","onKeyup"]),n(q,{message:t.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[n(T,{onClick:f},{default:o(()=>[r(" Cancel ")]),_:1}),n($,{class:b(["ml-3",{"opacity-25":t.processing}]),disabled:t.processing,onClick:v},{default:o(()=>[r(C(w.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900"},te={key:1,class:"text-lg font-medium text-gray-900"},oe={key:2,class:"text-lg font-medium text-gray-900"},se=l("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[l("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),ae={key:3},ne={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600"},le={key:0,class:"font-semibold"},ce={key:1},ie=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},de={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},_e=l("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[l("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),ve={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},he={class:"mt-5"},ye={key:0},we={key:1},Ve={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(w){const x=w,g=Y(),t=_(!1),s=_(!1),m=_(!1),v=_(null),f=_(null),c=_([]),u=D({code:""}),p=I(()=>{var d;return!t.value&&((d=g.props.auth.user)==null?void 0:d.two_factor_enabled)});U(p,()=>{p.value||(u.reset(),u.clearErrors())});const L=()=>{t.value=!0,P.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([M(),E(),S()]),onFinish:()=>{t.value=!1,s.value=x.requiresConfirmation}})},M=()=>axios.get(route("two-factor.qr-code")).then(d=>{v.value=d.data.svg}),E=()=>axios.get(route("two-factor.secret-key")).then(d=>{f.value=d.data.secretKey}),S=()=>axios.get(route("two-factor.recovery-codes")).then(d=>{c.value=d.data}),K=()=>{u.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{s.value=!1,v.value=null,f.value=null}})},H=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>S())},V=()=>{m.value=!0,P.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{m.value=!1,s.value=!1}})};return(d,A)=>(e(),h(G,null,{title:o(()=>[r(" Two Factor Authentication ")]),description:o(()=>[r(" Add additional security to your account using two factor authentication. ")]),content:o(()=>[p.value&&!s.value?(e(),a("h3",ee," You have enabled two factor authentication. ")):p.value&&s.value?(e(),a("h3",te," Finish enabling two factor authentication. ")):(e(),a("h3",oe," You have not enabled two factor authentication. ")),se,p.value?(e(),a("div",ae,[v.value?(e(),a("div",ne,[l("div",re,[s.value?(e(),a("p",le," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(e(),a("p",ce," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),l("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:v.value},null,8,ie),f.value?(e(),a("div",ue,[l("p",de,[r(" Setup Key: "),l("span",{innerHTML:f.value},null,8,me)])])):i("",!0),s.value?(e(),a("div",fe,[n(X,{for:"code",value:"Code"}),n(B,{id:"code",modelValue:F(u).code,"onUpdate:modelValue":A[0]||(A[0]=k=>F(u).code=k),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(K,["enter"])},null,8,["modelValue","onKeyup"]),n(q,{message:F(u).errors.code,class:"mt-2"},null,8,["message"])])):i("",!0)])):i("",!0),c.value.length>0&&!s.value?(e(),a("div",pe,[_e,l("div",ve,[(e(!0),a(j,null,z(c.value,k=>(e(),a("div",{key:k},C(k),1))),128))])])):i("",!0)])):i("",!0),l("div",he,[p.value?(e(),a("div",we,[n(y,{onConfirmed:K},{default:o(()=>[s.value?(e(),h($,{key:0,type:"button",class:b(["mr-3",{"opacity-25":t.value}]),disabled:t.value},{default:o(()=>[r(" Confirm ")]),_:1},8,["class","disabled"])):i("",!0)]),_:1}),n(y,{onConfirmed:H},{default:o(()=>[c.value.length>0&&!s.value?(e(),h(T,{key:0,class:"mr-3"},{default:o(()=>[r(" Regenerate Recovery Codes ")]),_:1})):i("",!0)]),_:1}),n(y,{onConfirmed:S},{default:o(()=>[c.value.length===0&&!s.value?(e(),h(T,{key:0,class:"mr-3"},{default:o(()=>[r(" Show Recovery Codes ")]),_:1})):i("",!0)]),_:1}),n(y,{onConfirmed:V},{default:o(()=>[s.value?(e(),h(T,{key:0,class:b({"opacity-25":m.value}),disabled:m.value},{default:o(()=>[r(" Cancel ")]),_:1},8,["class","disabled"])):i("",!0)]),_:1}),n(y,{onConfirmed:V},{default:o(()=>[s.value?i("",!0):(e(),h(J,{key:0,class:b({"opacity-25":m.value}),disabled:m.value},{default:o(()=>[r(" Disable ")]),_:1},8,["class","disabled"]))]),_:1})])):(e(),a("div",ye,[n(y,{onConfirmed:L},{default:o(()=>[n($,{type:"button",class:b({"opacity-25":t.value}),disabled:t.value},{default:o(()=>[r(" Enable ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ve as default};
