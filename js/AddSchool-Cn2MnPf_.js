import{u as E,c as N,aj as h,Q as T,O as w,e as g,R as k,a as D,b as C,d as I,_ as L}from"./common-s8mLMzRm.js";import{u as b}from"./other-qP_wSEGc.js";import"./vendor-CvG_Gu8L.js";const a=i=>(Vue.pushScopeId("data-v-d7261222"),i=i(),Vue.popScopeId(),i),A={class:"school"},j=a(()=>Vue.createElementVNode("span",{class:"f16"},"添加学校",-1)),Y={class:"content"},x=a(()=>Vue.createElementVNode("div",{class:"left"},"学校",-1)),B={class:"right"},P=a(()=>Vue.createElementVNode("div",{class:"left"},"院系",-1)),H={class:"right"},J=a(()=>Vue.createElementVNode("div",{class:"left"},"入学时间",-1)),M={class:"right"},O={id:"trigger1"},R=a(()=>Vue.createElementVNode("div",{class:"left"},"学历",-1)),$={class:"right"},z=a(()=>Vue.createElementVNode("div",{class:"left"},"展示范围",-1)),F={class:"right"},G=Vue.defineComponent({name:"AddSchool"}),Q=Vue.defineComponent({...G,setup(i){const s=E(),d=VueRouter.useRouter(),V=b(),e=Vue.reactive({localSchool:N(s.userinfo.school),educationList:[{id:1,name:"专科"},{id:2,name:"本科"},{id:3,name:"硕士"},{id:4,name:"博士"}]});Vue.onMounted(()=>{let t=localStorage.getItem("changeSchool"),o=localStorage.getItem("changeDepartment"),u=localStorage.getItem("changeDisplayType"),l=localStorage.getItem("changeJoinTime"),n=localStorage.getItem("changeEducation");t!==null&&(e.localSchool.name=t),o!==null&&(e.localSchool.department=o),u!==null&&(e.localSchool.displayType=~~u),l!==null&&(e.localSchool.joinTime=~~l),n!==null&&(e.localSchool.education=n)});const c=Vue.computed(()=>s.userinfo.school),m=Vue.computed(()=>c.value.name!==e.localSchool.name||c.value.department!==e.localSchool.department||c.value.joinTime!==e.localSchool.joinTime||c.value.education!==e.localSchool.education?!0:c.value.displayType!==e.localSchool.displayType),S=Vue.computed(()=>e.localSchool.displayType===h.DISPLAY_TYPE.ALL?"公开可见":e.localSchool.displayType===h.DISPLAY_TYPE.SCHOOL?"校友可见":e.localSchool.displayType===h.DISPLAY_TYPE.ME?"仅自己可见":"");function _(){new T({trigger:"#trigger1",title:"学历",wheels:[{data:Array.apply(null,{length:50}).map((t,o)=>new Date().getFullYear()-o)}],callback:(t,o)=>{localStorage.setItem("changeJoinTime",o[0]),o.localSchool.joinTime=~~o[0]}}).show()}function f(){w(e.educationList,t=>{localStorage.setItem("changeEducation",t.name),e.localSchool.education=t.name})}function r(t){return t||"点击设置"}function v(t){if(!e.localSchool.name)return g("请先选择学校 ");V(t)}function y(){m.value?k("学校信息30天内只允许修改一次，是否保存修改",p,()=>{localStorage.clear(),d.back()}):(localStorage.clear(),d.back())}async function p(){m.value&&(D(),s.userinfo={...s.userinfo,school:e.localSchool},await C(500),I(),localStorage.clear(),d.back(),g("修改成功"))}return(t,o)=>{const u=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",A,[Vue.createVNode(u,{onBack:y},{center:Vue.withCtx(()=>[j]),right:Vue.withCtx(()=>[Vue.createElementVNode("div",null,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["f16",m.value?"save-yes":"save-no"]),onClick:p},"保存",2)])]),_:1}),Vue.createElementVNode("div",Y,[Vue.createElementVNode("div",{class:"row",onClick:o[0]||(o[0]=n=>Vue.unref(V)("/me/choose-school"))},[x,Vue.createElementVNode("div",B,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.name)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:o[1]||(o[1]=n=>v("/me/choose-department"))},[P,Vue.createElementVNode("div",H,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.department)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:_},[J,Vue.createElementVNode("div",M,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.joinTime)),1),Vue.createVNode(l,{scale:"1",direction:"right"}),Vue.withDirectives(Vue.createElementVNode("div",O,null,512),[[Vue.vShow,!1]])])]),Vue.createElementVNode("div",{class:"row",onClick:f},[R,Vue.createElementVNode("div",$,[Vue.createElementVNode("span",null,Vue.toDisplayString(r(e.localSchool.education)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:o[2]||(o[2]=n=>Vue.unref(V)("/me/display-type",{displayType:e.localSchool.displayType}))},[z,Vue.createElementVNode("div",F,[Vue.createElementVNode("span",null,Vue.toDisplayString(S.value),1),Vue.createVNode(l,{scale:"1",direction:"right"})])])])])}}}),W=L(Q,[["__scopeId","data-v-d7261222"]]);export{W as default};
