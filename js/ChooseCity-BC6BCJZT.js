import{u as r,a as l,b as i,d,_}from"./common-s8mLMzRm.js";import"./vendor-CvG_Gu8L.js";const V=e=>(Vue.pushScopeId("data-v-faf9b912"),e=e(),Vue.popScopeId(),e),p={class:"choose-location"},m=V(()=>Vue.createElementVNode("span",{class:"f16"},"成都",-1)),f={class:"content"},h={class:"schools"},v=Vue.defineComponent({name:"ChooseCity"}),B=Vue.defineComponent({...v,setup(e){const o=r(),s=Vue.ref(["河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","台湾","内蒙古","广西","西藏","宁夏","新疆","北京","天津","上海","重庆","香港","澳门"]);async function n(){l(),o.userinfo={...o.userinfo,location:"中国-四川-成都"},await i(500),d(),history.go(-3)}return(C,t)=>{const a=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",p,[Vue.createVNode(a,null,{center:Vue.withCtx(()=>[m]),_:1}),Vue.createElementVNode("div",f,[Vue.createElementVNode("div",h,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(s.value,(c,u)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"row",onClick:t[0]||(t[0]=k=>n()),key:u},[Vue.createElementVNode("span",null,Vue.toDisplayString(c),1)]))),128))])])])}}}),g=_(B,[["__scopeId","data-v-faf9b912"]]);export{g as default};
