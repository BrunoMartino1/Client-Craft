import{o as s,d as r,a as e,K as D,r as $,A as N,n as p,e as c,t as y,h as k,B as P,C as F,j as S,m as g,D as j,u as m,k as T,y as L,b as d,w as a,E,c as _,i as C,Z as O,f as h,F as x,g as B,O as z}from"./app-b7f552e4.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const I={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),K=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[H,K];function Z(u,n){return s(),r("svg",R,U)}const q=V(I,[["render",Z]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},Q={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ne=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(u){const n=D(),o=$(!0),l=$("success"),t=$("");return N(async()=>{var v,i;l.value=((v=n.props.jetstream.flash)==null?void 0:v.bannerStyle)||"success",t.value=((i=n.props.jetstream.flash)==null?void 0:i.banner)||"",o.value=!0}),(v,i)=>(s(),r("div",null,[o.value&&t.value?(s(),r("div",{key:0,class:p({"bg-indigo-500":l.value=="success","bg-red-700":l.value=="danger"})},[e("div",G,[e("div",J,[e("div",Q,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":l.value=="success","bg-red-600":l.value=="danger"}])},[l.value=="success"?(s(),r("svg",W,Y)):c("",!0),l.value=="danger"?(s(),r("svg",ee,se)):c("",!0)],2),e("p",oe,y(t.value),1)]),e("div",re,[e("button",{type:"button",class:p(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":l.value=="success","hover:bg-red-600 focus:bg-red-600":l.value=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=k(f=>o.value=!1,["prevent"]))},ae,2)])])])],2)):c("",!0)]))}},le={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(u){const n=u;let o=$(!1);const l=i=>{o.value&&i.key==="Escape"&&(o.value=!1)};P(()=>document.addEventListener("keydown",l)),F(()=>document.removeEventListener("keydown",l));const t=S(()=>({48:"w-48"})[n.width.toString()]),v=S(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(i,f)=>(s(),r("div",le,[e("div",{onClick:f[0]||(f[0]=M=>j(o)?o.value=!m(o):o=!m(o))},[g(i.$slots,"trigger")]),T(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=M=>j(o)?o.value=!1:o=!1)},null,512),[[L,m(o)]]),d(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[T(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,v.value]]),style:{display:"none"},onClick:f[2]||(f[2]=M=>j(o)?o.value=!1:o=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[g(i.$slots,"content")],2)],2),[[L,m(o)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},de=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(n,o)=>(s(),r("div",null,[u.as=="button"?(s(),r("button",ue,[g(n.$slots,"default")])):u.as=="a"?(s(),r("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[g(n.$slots,"default")],8,de)):(s(),_(m(C),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[g(n.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const n=u,o=S(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(s(),_(m(C),{href:u.href,class:p(o.value)},{default:a(()=>[g(l.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const n=u,o=S(()=>n.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(l,t)=>(s(),r("div",null,[u.as=="button"?(s(),r("button",{key:0,class:p([o.value,"w-full text-left"])},[g(l.$slots,"default")],2)):(s(),_(m(C),{key:1,href:u.href,class:p(o.value)},{default:a(()=>[g(l.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},ge={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},ke=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ce=e("div",{class:"border-t border-gray-200"},null,-1),je=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Be=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ml-3 relative"},De={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ne=["src","alt"],Pe={key:1,class:"inline-flex rounded-md"},Fe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200"},null,-1),Ie=["onSubmit"],Re={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ke={class:"pt-2 pb-3 space-y-1"},Ue={class:"pt-4 pb-1 border-t border-gray-200"},Ze={class:"flex items-center px-4"},qe={key:0,class:"shrink-0 mr-3"},Ge=["src","alt"],Je={class:"font-medium text-base text-gray-800"},Qe={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},ut={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"AppLayout",props:{title:String},setup(u){const n=$(!1),o=t=>{z.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},l=()=>{z.post(route("logout"))};return(t,v)=>(s(),r("div",null,[d(m(O),{title:u.title},null,8,["title"]),d(ie),e("div",he,[e("nav",pe,[e("div",ge,[e("div",fe,[e("div",me,[e("div",ve,[d(m(C),{href:t.route("dashboard")},{default:a(()=>[d(q,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[d(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[h(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(s(),_(A,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",we,[e("button",xe,[h(y(t.$page.props.auth.user.current_team.name)+" ",1),ke])])]),content:a(()=>[e("div",$e,[Se,d(w,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[h(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),_(w,{key:0,href:t.route("teams.create")},{default:a(()=>[h(" Create New Team ")]),_:1},8,["href"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(x,{key:1},[Ce,je,(s(!0),r(x,null,B(t.$page.props.auth.user.all_teams,i=>(s(),r("form",{key:i.id,onSubmit:k(f=>o(i),["prevent"])},[d(w,{as:"button"},{default:a(()=>[e("div",Te,[i.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Le,ze)):c("",!0),e("div",null,y(i.name),1)])]),_:2},1024)],40,Me))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),e("div",Ae,[d(A,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",De,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ne)])):(s(),r("span",Pe,[e("button",Fe,[h(y(t.$page.props.auth.user.name)+" ",1),Ee])]))]),content:a(()=>[Oe,d(w,{href:t.route("profile.show")},{default:a(()=>[h(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),_(w,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[h(" API Tokens ")]),_:1},8,["href"])):c("",!0),Ve,e("form",{onSubmit:k(l,["prevent"])},[d(w,{as:"button"},{default:a(()=>[h(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Re,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:v[0]||(v[0]=i=>n.value=!n.value)},[(s(),r("svg",He,[e("path",{class:p({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ke,[d(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[h(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ue,[e("div",Ze,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",qe,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ge)])):c("",!0),e("div",null,[e("div",Je,y(t.$page.props.auth.user.name),1),e("div",Qe,y(t.$page.props.auth.user.email),1)])]),e("div",We,[d(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[h(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),_(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[h(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),e("form",{method:"POST",onSubmit:k(l,["prevent"])},[d(b,{as:"button"},{default:a(()=>[h(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(s(),r(x,{key:1},[Ye,et,d(b,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[h(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),_(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[h(" Create New Team ")]),_:1},8,["href","active"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(x,{key:1},[tt,st,(s(!0),r(x,null,B(t.$page.props.auth.user.all_teams,i=>(s(),r("form",{key:i.id,onSubmit:k(f=>o(i),["prevent"])},[d(b,{as:"button"},{default:a(()=>[e("div",rt,[i.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",nt,it)):c("",!0),e("div",null,y(i.name),1)])]),_:2},1024)],40,ot))),128))],64)):c("",!0)],64)):c("",!0)])])],2)]),t.$slots.header?(s(),r("header",lt,[e("div",ut,[g(t.$slots,"header")])])):c("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{ht as _};
