import{_ as i,a as o}from"./plugin-vue_export-helper.973b88e4.js";import{u as d,a as m,o as u,c as h,b as s,e as v,p as l,f as E,g as j,h as f,i as I,j as _}from"./vendor.1d5f75a0.js";const c=e=>(l("data-v-1e2528fb"),e=e(),E(),e),b={class:"wrap"},x=c(()=>s("div",{class:"title"},"\u{1F451} KingUI",-1)),A=c(()=>s("div",{class:"tip"},"\u91CD\u91CF\u3001\u4E0D\u53EF\u9760\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93",-1)),g={class:"content"},O={setup(e){const t=d();return window.addEventListener("message",r=>{let a=r.data;if(a.type=="go-route")try{t.push({name:a.routeName})}catch{t.push({path:"/"})}}),(r,a)=>{const p=m("router-view");return u(),h("div",b,[x,A,s("div",g,[v(p)])])}}};var R=i(O,[["__scopeId","data-v-1e2528fb"]]);const V=[{path:"/home",name:"home",component:()=>o(()=>import("./home.d07105dc.js"),["assets/home.d07105dc.js","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"])},{path:"/button",name:"button",component:()=>o(()=>import("./button.bba6c731.js"),["assets/button.bba6c731.js","assets/button.9ebc8ced.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"])},{path:"/loading",name:"loading",component:()=>o(()=>import("./loading.7e18757d.js"),["assets/loading.7e18757d.js","assets/loading.9b5c92e9.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"])},{path:"/icon",name:"icon",component:()=>o(()=>import("./icon.6cd3b06e.js"),["assets/icon.6cd3b06e.js","assets/icon.ee5e7121.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"])},{path:"/:pathMatch(.*)*",redirect:{name:"home"}}];var L=j({history:f(),routes:V});const n=I(R);n.use(L);Object.entries({"./sitecomponents/ItemWrap.vue":()=>o(()=>import("./ItemWrap.5a3c811d.js"),["assets/ItemWrap.5a3c811d.js","assets/ItemWrap.6ac23a4c.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"]),"./sitecomponents/SectionWrap.vue":()=>o(()=>import("./SectionWrap.f09d6416.js"),["assets/SectionWrap.f09d6416.js","assets/SectionWrap.6644ebc8.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"])}).forEach(e=>{let t=e[0].replace(/\.\/sitecomponents\/(.+)\.vue/,"$1");n.component(t,_(e[1]))});Object.entries({"./components/button/index.vue":()=>o(()=>import("./index.8333fe41.js"),["assets/index.8333fe41.js","assets/index.50585e2c.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"]),"./components/icon/index.vue":()=>o(()=>import("./index.2000ad1a.js"),["assets/index.2000ad1a.js","assets/index.fe9c2408.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"]),"./components/loading/index.vue":()=>o(()=>import("./index.d9808ccf.js"),["assets/index.d9808ccf.js","assets/index.b9e1f419.css","assets/plugin-vue_export-helper.973b88e4.js","assets/plugin-vue_export-helper.ff8e3de4.css","assets/vendor.1d5f75a0.js"])}).forEach(e=>{let t=e[0].replace(/\.\/components\/(.+)\/index\.vue/,"$1");t=t.charAt(0).toUpperCase()+t.substring(1),n.component(t,_(e[1]))});n.mount("#app");
