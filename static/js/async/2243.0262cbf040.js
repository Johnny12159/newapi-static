"use strict";(self.rspackChunknewapi_web=self.rspackChunknewapi_web||[]).push([[2243],{68270(e,t,r){var s=r(79015),o=r(30661),n=r(65311),i=r(89077),l=r(43303),a=r(88535),d=r(47801);function c(e){let{t}=(0,i.Bd)(),r=e.link.href.startsWith("http"),n=t(e.link.text);return r?(0,s.jsx)("a",{href:e.link.href,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-foreground text-sm transition-colors duration-200",children:n}):(0,s.jsx)(o.N_,{to:e.link.href,className:"text-muted-foreground hover:text-foreground text-sm transition-colors duration-200",children:n})}function m(e){let{t}=(0,i.Bd)(),{status:r}=(0,l.s)(),a=[];return(r?.user_agreement_enabled&&a.push({key:"user-agreement",label:t("User Agreement"),href:"/user-agreement"}),r?.privacy_policy_enabled&&a.push({key:"privacy-policy",label:t("Privacy Policy"),href:"/privacy-policy"}),0===a.length)?null:(0,s.jsx)(s.Fragment,{children:a.map((t,r)=>(0,s.jsxs)(n.Fragment,{children:[(e.leadingSeparator||r>0)&&(0,s.jsx)("span",{"aria-hidden":"true",className:"text-muted-foreground/30",children:"·"}),(0,s.jsx)(o.N_,{to:t.href,className:"hover:text-foreground transition-colors duration-200",children:t.label})]},t.key))})}function x(e){let{t}=(0,i.Bd)(),{systemName:r,logo:l,footerHtml:x,demoSiteEnabled:p}=(0,a.R)(),u=l||e.logo||"/logo.png",h=r||e.name||"New API";new Date().getFullYear();let f=(0,n.useMemo)(()=>[{title:t("footer.columns.about.title"),links:[{text:t("footer.columns.about.links.aboutProject"),href:"https://docs.newapi.pro/wiki/project-introduction/"},{text:t("footer.columns.about.links.contact"),href:"https://docs.newapi.pro/support/community-interaction/"},{text:t("footer.columns.about.links.features"),href:"https://docs.newapi.pro/wiki/features-introduction/"}]},{title:t("footer.columns.docs.title"),links:[{text:t("footer.columns.docs.links.quickStart"),href:"https://docs.newapi.pro/getting-started/"},{text:t("footer.columns.docs.links.installation"),href:"https://docs.newapi.pro/installation/"},{text:t("footer.columns.docs.links.apiDocs"),href:"https://docs.newapi.pro/api/"}]},{title:t("footer.columns.related.title"),links:[{text:t("footer.columns.related.links.oneApi"),href:"https://github.com/songquanpeng/one-api"},{text:t("footer.columns.related.links.midjourney"),href:"https://github.com/novicezk/midjourney-proxy"},{text:t("footer.columns.related.links.newApiKeyTool"),href:"https://github.com/Calcium-Ion/new-api-key-tool"}]}],[t]),g=e.columns??f;return x?(0,s.jsx)("footer",{className:(0,d.cn)("border-border/40 relative z-10 border-t",e.className),children:(0,s.jsx)("div",{className:"mx-auto w-full max-w-6xl px-6 py-5",children:(0,s.jsxs)("div",{className:"bg-muted/20 border-border/50 flex flex-col items-center justify-between gap-4 rounded-2xl border px-4 py-4 backdrop-blur-sm sm:flex-row sm:px-5",children:[(0,s.jsx)("div",{className:"custom-footer text-muted-foreground min-w-0 text-center text-sm sm:text-left",dangerouslySetInnerHTML:{__html:x}}),(0,s.jsxs)("div",{className:"border-border/60 text-muted-foreground/50 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t pt-4 text-xs sm:w-auto sm:justify-end sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("span",{className:"relative flex h-2 w-2",children:[(0,s.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),(0,s.jsx)("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),(0,s.jsx)("span",{className:"font-medium",children:t("All systems operational")})]}),(0,s.jsx)(m,{leadingSeparator:!0})]})]})})}):(0,s.jsx)("footer",{className:(0,d.cn)("border-border/40 relative z-10 border-t",e.className),children:(0,s.jsxs)("div",{className:"mx-auto max-w-6xl px-6 py-12 md:py-16",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-between gap-10 md:flex-row md:gap-16",children:[(0,s.jsxs)("div",{className:"shrink-0",children:[(0,s.jsxs)(o.N_,{to:"/",className:"group flex items-center gap-2.5",children:[(0,s.jsx)("img",{src:u,alt:h,className:"size-7 rounded-lg object-contain"}),(0,s.jsx)("span",{className:"text-sm font-semibold tracking-tight",children:h})]}),(0,s.jsx)("p",{className:"text-muted-foreground/60 mt-3 max-w-[200px] text-xs leading-relaxed",children:t("Powerful API Management Platform")})]}),!!p&&(0,s.jsx)("div",{className:"grid grid-cols-3 gap-8 md:gap-16",children:g.map((e,r)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-muted-foreground/50 mb-3 text-xs font-medium tracking-wider uppercase",children:t(e.title)}),(0,s.jsx)("ul",{className:"space-y-2.5",children:e.links.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)(c,{link:e})},t))})]},r))})]}),(0,s.jsxs)("div",{className:"border-border/30 mt-12 flex flex-col items-center justify-between gap-x-3 gap-y-2 border-t pt-6 sm:flex-row",children:[(0,s.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:justify-start",children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("span",{className:"relative flex h-2.5 w-2.5",children:[(0,s.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),(0,s.jsx)("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),(0,s.jsx)("span",{className:"font-medium text-foreground/80 tracking-wide",children:t("All systems operational")})]})}),(0,s.jsx)("div",{className:"text-muted-foreground/40 text-xs",children:(0,s.jsx)(m,{leadingSeparator:!1})})]})]})})}r.d(t,{w:()=>x})},92030(e,t,r){r.d(t,{B:()=>K});var s=r(79015),o=r(65311),n=r(10249),i=r(30661),l=r(47801);let a=[{title:"入门指南",items:[{title:"快速开始",href:"/docs/quick-start"},{title:"认证指南",href:"/docs/authentication"}]},{title:"进阶使用",items:[{title:"模型目录与计费",href:"/docs/models"},{title:"主流工具集成",href:"/docs/providers"}]},{title:"开发者参考",items:[{title:"API 参考文档",href:"/docs/api-reference"}]}];var d=r(24632),c=r(68270);let m=()=>(0,s.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"9 18 15 12 9 6"})});function x(e){let{children:t,currentPath:r="/docs/quick-start",lastUpdated:n="2026年5月27日"}=e,{currentItem:x,prevItem:p,nextItem:u}=(0,o.useMemo)(()=>{let e=a.flatMap(e=>e.items),t=e.findIndex(e=>e.href===r);return{currentItem:e[t],prevItem:t>0?e[t-1]:null,nextItem:t>=0&&t<e.length-1?e[t+1]:null}},[r]),[h,f]=(0,o.useState)([]),[g,b]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=Array.from(document.querySelectorAll("#docs-content h2[id], #docs-content h3[id]"));f(e.map(e=>({id:e.id,title:e.textContent?.replace("#","").trim()||"",level:"H2"===e.tagName?2:3})));let t=()=>{let t="";for(let r of e)r.getBoundingClientRect().top<=120&&(t=r.id);t?b(t):e.length>0&&window.scrollY<50&&b(e[0].id)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[t,r]),(0,s.jsxs)("div",{className:"flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20",children:[(0,s.jsx)(d.V,{}),(0,s.jsxs)("div",{className:"mx-auto flex w-full flex-1 items-start px-4 md:px-8 lg:px-12 xl:px-20 max-w-[1600px] pt-24 pb-20",children:[(0,s.jsx)("aside",{className:"relative hidden md:block w-[220px] lg:w-[240px] shrink-0",children:(0,s.jsx)("div",{className:"fixed top-24 z-30 h-[calc(100vh-6rem)] w-[220px] lg:w-[240px] overflow-y-auto pb-10 pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",children:(0,s.jsx)("div",{className:"flex flex-col gap-6",children:a.map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h4",{className:"mb-2.5 text-[13px] font-semibold text-foreground tracking-tight",children:e.title}),(0,s.jsx)("ul",{className:"flex flex-col gap-[2px] border-l border-border/60 ml-[1px]",children:e.items.map((e,t)=>{let o=r===e.href;return(0,s.jsx)("li",{children:(0,s.jsx)(i.N_,{to:e.href,className:(0,l.cn)("-ml-[1px] block border-l-[2px] py-1.5 pl-3.5 text-[14px] transition-colors rounded-r-md",o?"border-primary text-primary font-medium bg-primary/[0.03]":"border-transparent text-muted-foreground hover:border-border/80 hover:text-foreground"),children:e.title})},t)})})]},t))})})}),(0,s.jsx)("main",{className:"relative flex-1 md:px-10 lg:px-16 min-w-0",children:(0,s.jsxs)("div",{className:"mx-auto w-full min-w-0 max-w-[760px]",children:[(0,s.jsxs)("nav",{className:"mb-8 flex items-center gap-2 text-[13px] font-medium text-muted-foreground/80",children:[(0,s.jsx)(i.N_,{to:"/docs",className:"hover:text-foreground transition-colors",children:"开发文档"}),(0,s.jsx)(m,{}),(0,s.jsx)("span",{className:"text-foreground",children:x?.title||"文档"})]}),(0,s.jsx)("div",{id:"docs-content",children:t}),(0,s.jsxs)("div",{className:"mt-20 border-t border-border/40 pt-10",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[p?(0,s.jsxs)(i.N_,{to:p.href,className:"flex flex-col items-start gap-1 group",children:[(0,s.jsx)("span",{className:"text-[12px] text-muted-foreground group-hover:text-foreground transition-colors",children:"← 上一页"}),(0,s.jsx)("span",{className:"text-[15px] font-medium text-foreground group-hover:text-primary transition-colors",children:p.title})]}):(0,s.jsx)("div",{}),u&&(0,s.jsxs)(i.N_,{to:u.href,className:"flex flex-col items-end gap-1 group text-right",children:[(0,s.jsx)("span",{className:"text-[12px] text-muted-foreground group-hover:text-foreground transition-colors",children:"下一页 →"}),(0,s.jsx)("span",{className:"text-[15px] font-medium text-foreground group-hover:text-primary transition-colors",children:u.title})]})]}),(0,s.jsxs)("p",{className:"mt-10 text-right text-[12px] text-muted-foreground/60",children:["更新于 ",n]})]})]})}),(0,s.jsx)("div",{className:"relative hidden xl:block w-[200px] shrink-0",children:(0,s.jsxs)("div",{className:"fixed top-24 z-30 h-[calc(100vh-6rem)] w-[200px] overflow-y-auto pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",children:[(0,s.jsx)("p",{className:"font-semibold text-[13px] text-foreground mb-4 tracking-wide",children:"本页导航"}),h.length>0?(0,s.jsx)("div",{className:"flex flex-col gap-[2px] text-[13px] text-muted-foreground border-l border-border/60 ml-[1px]",children:h.map(e=>(0,s.jsx)("a",{href:`#${e.id}`,className:(0,l.cn)("transition-colors -ml-[1px] border-l-[2px] py-1 rounded-r-md",2===e.level?"pl-3.5":"pl-6",g===e.id?"text-primary font-medium border-primary bg-primary/[0.03]":"border-transparent hover:text-foreground hover:border-border/80"),children:e.title},e.id))}):(0,s.jsx)("p",{className:"text-xs text-muted-foreground/50 italic",children:"文档解析中..."})]})})]}),(0,s.jsx)("div",{className:"relative z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-t border-border/40",children:(0,s.jsx)(c.w,{})})]})}var p=r(7326),u=r(82098),h=r(48622),f=r(9037),g=r(78384),b=r(55007);let j=()=>(0,s.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,s.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),v=()=>(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}),y=()=>(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),(0,s.jsx)("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),N=()=>(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"6 9 12 15 18 9"})}),k=()=>(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"18 15 12 9 6 15"})}),w=["/docs/quick-start","/docs/authentication","/docs/models","/docs/providers","/docs/api-reference"],A=e=>o.Children.toArray(e).reduce((e,t)=>"string"==typeof t?e+t:o.isValidElement(t)&&t.props.children?e+A(t.props.children):e,"").trim().replace(/\s+/g,"-").toLowerCase(),I=e=>{let{inline:t,className:r,children:n,...i}=e,[a,d]=(0,o.useState)(!1),[c,m]=(0,o.useState)(!1),[x,p]=(0,o.useState)(!1),[u,h]=(0,o.useState)(280),y=(0,o.useRef)(null),w=/language-(\w+)/.exec(r||""),A=w?w[1]:"text",I=String(n).replace(/\n$/,"");return((0,o.useLayoutEffect)(()=>{if(y.current){let e=y.current.scrollHeight;h(e),e>280?p(!0):p(!1)}m(!1)},[I]),!t&&w)?(0,s.jsxs)("div",{className:"group relative my-6 overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-sm transition-all duration-300 hover:border-border hover:shadow-md",children:[(0,s.jsxs)("div",{className:"flex h-[38px] items-center justify-between border-b border-border/40 bg-muted/50 px-4",children:[(0,s.jsx)("span",{className:"font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",children:A}),(0,s.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(I),d(!0),setTimeout(()=>d(!1),2e3)},title:"复制代码","aria-label":"复制代码",className:"flex h-6 items-center justify-center gap-1.5 rounded-md bg-transparent px-2 text-[12px] text-muted-foreground opacity-0 transition-all hover:bg-foreground/5 hover:text-foreground group-hover:opacity-100",children:[a?(0,s.jsx)(v,{}):(0,s.jsx)(j,{}),a&&(0,s.jsx)("span",{children:"Copied"})]})]}),(0,s.jsxs)("div",{ref:y,style:{maxHeight:x?c?`${u}px`:"280px":"none"},className:(0,l.cn)("relative overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"),children:[(0,s.jsx)("div",{className:"block dark:hidden",children:(0,s.jsx)(f.A,{...i,style:g.A,language:A,PreTag:"div",customStyle:{margin:0,padding:"1rem 1.25rem",background:"transparent",fontSize:"13px",lineHeight:"1.6"},children:I})}),(0,s.jsx)("div",{className:"hidden dark:block",children:(0,s.jsx)(f.A,{...i,style:b.A,language:A,PreTag:"div",customStyle:{margin:0,padding:"1rem 1.25rem",background:"transparent",fontSize:"13px",lineHeight:"1.6"},children:I})}),!c&&x&&(0,s.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/95 to-transparent flex items-end justify-center pb-3",children:(0,s.jsx)("button",{onClick:()=>m(!0),title:"展开查看完整代码",className:"flex items-center gap-1.5 text-[12px] font-medium text-primary bg-background/90 px-4 py-1.5 rounded-full shadow-sm border border-border/40 hover:bg-background transition-all hover:scale-105 active:scale-95 backdrop-blur-sm",children:(0,s.jsx)(N,{})})})]}),c&&x&&(0,s.jsx)("div",{className:"border-t border-border/40 bg-muted/20 p-2 flex justify-center animate-fade-in",children:(0,s.jsxs)("button",{onClick:()=>m(!1),title:"收起代码",className:"flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors",children:[(0,s.jsx)(k,{})," 收起代码"]})})]}):(0,s.jsx)("code",{className:"rounded-md bg-primary/10 px-[0.3rem] py-[0.15rem] font-mono text-[13px] font-medium text-primary",...i,children:n})},P=e=>"string"==typeof e?e.replace(/\[!INFO\]\s*/i,""):o.isValidElement(e)?o.cloneElement(e,{...e.props,children:o.Children.map(e.props.children,P)}):e,_=e=>{let{children:t,...r}=e,n=e=>"string"==typeof e?e:Array.isArray(e)?e.map(n).join(""):e?.props?.children?n(e.props.children):"";if(n(t).trim().startsWith("[!INFO]")){let e=o.Children.map(t,P);return(0,s.jsxs)("div",{className:"my-6 flex items-start gap-3 rounded-r-xl border-l-[3px] border-primary bg-primary/5 py-4 pr-4 pl-4",children:[(0,s.jsx)("div",{className:"mt-[2px] shrink-0 text-primary",children:(0,s.jsx)(y,{})}),(0,s.jsx)("div",{className:"text-[14px] leading-relaxed text-foreground/90 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0",children:e})]})}return(0,s.jsx)("blockquote",{className:"my-6 border-l-2 border-primary/40 pl-4 font-normal italic text-muted-foreground/80",...r,children:t})},S=e=>{let{children:t,...r}=e,[n,i]=(0,o.useState)(0),a=o.Children.toArray(t).filter(e=>o.isValidElement(e)&&e.props.node?.tagName==="tab");return 0===a.length?(0,s.jsx)("div",{...r,children:t}):(0,s.jsxs)("div",{className:"my-8",children:[(0,s.jsx)("div",{className:"flex items-center gap-6 border-b border-border/60 px-2 mb-3",children:a.map((e,t)=>{let r=e.props.title||`Tab ${t+1}`,o=n===t;return(0,s.jsxs)("button",{onClick:()=>i(t),className:(0,l.cn)("relative pb-2.5 text-[13px] font-medium transition-colors",o?"text-primary":"text-muted-foreground hover:text-foreground"),children:[r,o&&(0,s.jsx)("div",{className:"absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary rounded-t-full"})]},t)})}),(0,s.jsx)("div",{children:a[n]})]})},L=e=>{let{children:t,...r}=e;return(0,s.jsx)("div",{className:"[&>div]:!my-0",...r,children:t})},C=e=>{let{href:t,children:r,title:o,...n}=e;if(t&&(t.startsWith("/")||t.startsWith("http://localhost")||t.startsWith("https://api.jusuapi.com"))){let e=t.replace(/^(http:\/\/localhost:\d+|https:\/\/api\.jusuapi\.com)/,"");return e.startsWith("/docs")&&!w.includes(e)?(0,s.jsxs)("span",{className:"inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded text-[13px] font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20 cursor-not-allowed select-none",title:`⚠️ 开发中预留标记：页面 [${e}] 尚未编写内容`,children:[r," (规划中)"]}):(0,s.jsx)(i.N_,{to:e,title:o||`前往 ${r} 页面`,"aria-label":o||r,className:"font-medium text-primary underline-offset-4 hover:underline",...n,children:r})}return(0,s.jsx)("a",{href:t,title:o||`跳转至外部功能: ${r}`,"aria-label":o||r,className:"font-medium text-primary underline-offset-4 hover:underline",...n})};function R(e){let{content:t,className:r}=e;return(0,s.jsx)("article",{className:(0,l.cn)("max-w-none text-foreground",r),children:(0,s.jsx)(p.oz,{remarkPlugins:[u.A],rehypePlugins:[h.A],components:{h1:e=>{let{node:t,...r}=e;return(0,s.jsx)("h1",{className:"mb-6 mt-2 text-[32px] font-bold tracking-tight text-foreground sm:text-[36px]",...r})},h2:e=>{let{node:t,children:r,...o}=e,n=A(r);return(0,s.jsxs)("h2",{id:n,className:"group scroll-mt-24 mb-5 mt-12 flex items-center border-b border-border/40 pb-2 text-[22px] font-semibold tracking-tight text-foreground",...o,children:[r,(0,s.jsx)("a",{href:`#${n}`,title:"复制链接","aria-label":"锚点链接",className:"ml-2 text-muted-foreground/0 transition-colors hover:text-primary group-hover:text-muted-foreground/40 text-[20px] font-normal no-underline",children:"#"})]})},h3:e=>{let{node:t,children:r,...o}=e,n=A(r);return(0,s.jsxs)("h3",{id:n,className:"group scroll-mt-24 mb-4 mt-8 flex items-center text-[18px] font-semibold tracking-tight text-foreground",...o,children:[r,(0,s.jsx)("a",{href:`#${n}`,title:"复制链接","aria-label":"锚点链接",className:"ml-2 text-muted-foreground/0 transition-colors hover:text-primary group-hover:text-muted-foreground/40 text-[18px] font-normal no-underline",children:"#"})]})},p:e=>{let{node:t,...r}=e;return(0,s.jsx)("p",{className:"mb-5 leading-[1.75] text-[15px] text-foreground/80 [&:last-child]:mb-0",...r})},ul:e=>{let{node:t,...r}=e;return(0,s.jsx)("ul",{className:"mb-5 ml-4 list-outside list-disc space-y-1.5 text-[15px] text-foreground/80 marker:text-muted-foreground",...r})},ol:e=>{let{node:t,...r}=e;return(0,s.jsx)("ol",{className:"mb-5 ml-4 list-outside list-decimal space-y-1.5 text-[15px] text-foreground/80 marker:text-muted-foreground",...r})},li:e=>{let{node:t,...r}=e;return(0,s.jsx)("li",{className:"pl-1 leading-[1.75]",...r})},a:C,strong:e=>{let{node:t,...r}=e;return(0,s.jsx)("strong",{className:"font-semibold text-foreground",...r})},blockquote:_,code:I,tabs:S,tab:L,table:e=>{let{node:t,...r}=e;return(0,s.jsx)("div",{className:"my-6 w-full overflow-x-auto rounded-lg border border-border/60 shadow-sm",children:(0,s.jsx)("table",{className:"w-full text-left text-[14px] border-collapse",...r})})},thead:e=>{let{node:t,...r}=e;return(0,s.jsx)("thead",{className:"bg-muted/40 border-b border-border/60",...r})},tbody:e=>{let{node:t,...r}=e;return(0,s.jsx)("tbody",{className:"divide-y divide-border/40",...r})},tr:e=>{let{node:t,...r}=e;return(0,s.jsx)("tr",{className:"transition-colors hover:bg-muted/20",...r})},th:e=>{let{node:t,...r}=e;return(0,s.jsx)("th",{className:"px-4 py-3 font-semibold text-foreground/90 whitespace-nowrap",...r})},td:e=>{let{node:t,...r}=e;return(0,s.jsx)("td",{className:"px-4 py-3 align-middle text-foreground/80 leading-relaxed",...r})}},children:t})})}let B={"quick-start":`
# 快速开始

欢迎使用本平台的统一大模型 API 服务。本指南将帮助你在 3 分钟内完成环境接入，并成功发起你的第一次对话请求。

## 1. 准备工作

在调用 API 之前，请确保你已经完成了以下基础准备：

1. **注册并登录控制台**：如果你还未注册账号，请前往 [注册页面](/sign-up) 完成注册，或直接进入 [控制台](/dashboard/overview)。
2. **保证账户余额**：我们的 API 采用按量计费模式。你可以前往 [我的钱包](/wallet) 页面查看余额或进行充值。
3. **获取 API Key**：前往控制台的 [秘钥管理](/keys) 页面，点击“创建新秘钥”，将其复制并妥善保存。

> [!INFO]
> 我们在底层实现了协议的无缝转换。你只需修改 **Base URL** 和 **API Key**，即可直接使用 OpenAI、Anthropic 或 Google 的官方 SDK 发起请求，无需修改任何业务代码逻辑。

---

## 2. 发起首次请求

本平台完全兼容 OpenAI 的 \`/v1/chat/completions\` 接口标准。请在下方选择你习惯的开发语言，查看具体接入代码：

<tabs>
<tab title="cURL">

\`\`\`bash
# 这是一个标准的终端 cURL 调用示例
# 请将 <YOUR_API_KEY> 替换为你生成的真实秘钥

curl {{BASE_URL}}/v1/chat/completions \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "你是一个非常有用的 AI 助手。"
      },
      {
        "role": "user",
        "content": "请用一句话解释什么是大语言模型？"
      }
    ]
  }'
\`\`\`

</tab>
<tab title="Python">

\`\`\`python
# 1. 确保已安装最新版官方 SDK：
# pip install --upgrade openai

import os
from openai import OpenAI

# 2. 实例化客户端，注入本平台的 URL 和你的秘钥
client = OpenAI(
    api_key="<YOUR_API_KEY>",            # 替换为你的真实秘钥
    base_url="{{BASE_URL}}/v1"           # 必须加上 /v1 后缀
)

# 3. 发起对话请求
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "你是一个非常有用的 AI 助手。"},
        {"role": "user", "content": "请用一句话解释什么是大语言模型？"}
    ]
)

# 4. 打印模型的回复
print(response.choices[0].message.content)
\`\`\`

</tab>
<tab title="Node.js">

\`\`\`javascript
# 1. 确保已安装最新版官方 SDK：
# npm install openai

import OpenAI from 'openai';

// 2. 实例化客户端
const openai = new OpenAI({
  apiKey: "<YOUR_API_KEY>",              // 替换为你的真实秘钥
  baseURL: '{{BASE_URL}}/v1',            // 必须加上 /v1 后缀
});

// 3. 异步请求函数
async function main() {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'system', content: '你是一个非常有用的 AI 助手。' },
        { role: 'user', content: '请用一句话解释什么是大语言模型？' }
    ],
  });
  
  // 4. 打印回复内容
  console.log(chatCompletion.choices[0].message.content);
}

main();
\`\`\`

</tab>
</tabs>

---

## 下一步建议

恭喜！你已经成功发起了第一次请求。接下来，你可以：
* 前往 [模型价格](/pricing) 页面查看本平台支持的 100+ 模型列表及具体计费规则。
* 如果你打算在第三方开发工具中使用，请查看我们的 [工具集成指南](/docs/providers)。
`,authentication:`
# 认证指南

所有的 API 请求都必须经过身份验证。本平台采用标准的 Bearer Token（不记名令牌）机制进行接口鉴权。

## 获取与管理 API Key

你的 API Key 是与你账户绑定的核心凭证。所有的计费、限流和调用记录都会挂载在该秘钥下。

### 创建步骤

1. 登录系统后，从左侧导航栏进入 [秘钥管理](/keys) 页面。
2. 点击右上角的 **创建新秘钥** 按钮。
3. 设定该秘钥的名称（用于区分业务场景）、过期时间以及可用额度。
4. 提交后，系统将生成一串唯一的字符串，这就是你的 API Key。

> [!INFO]
> **安全警告**：API Key 拥有直接消耗你账户余额的权限。请绝对不要将 Key 硬编码在前端代码（如 React/Vue）中，也绝对不要提交到公共的 GitHub 仓库。请始终在服务端（Node.js/Python/Go）环境变量中进行配置和调用。

---

## 如何在请求中携带凭证

### 1. 标准 HTTP 头配置
绝大多数情况下（包括 OpenAI 兼容协议），你需要在 HTTP 的 \`Headers\` 中加入 \`Authorization\` 字段：

\`\`\`bash
Authorization: Bearer <YOUR_API_KEY>
\`\`\`

*注意：\`Bearer\` 和 \`<YOUR_API_KEY>\` 之间必须保留一个空格。*

### 2. 第三方特定协议头
如果你直接请求部分特定的端点（如 Anthropic 或 Gemini 的原生兼容端点），协议头可能会有所不同。我们的网关系统同样支持自动解析以下认证头：

* **Anthropic 协议**: 使用 \`x-api-key: <YOUR_API_KEY>\`
* **Google Gemini 协议**: 使用 \`x-goog-api-key: <YOUR_API_KEY>\`

---

## 常见鉴权错误码

如果你在调用时收到以下 HTTP 状态码，通常意味着认证环节出现了问题：

* **\`401 Unauthorized\`**: 你的 API Key 不存在、已被系统禁用、或者已超过设置的过期时间。请前往 [秘钥管理](/keys) 页面检查。
* **\`403 Forbidden\`**: 你的账户状态异常（通常是因为余额不足）。请前往 [我的钱包](/wallet) 页面检查你的剩余可用额度。
* **\`429 Too Many Requests\`**: 你的请求频率超过了当前账户等级的并发限制。
`,models:`
# 模型目录与计费

本平台集成了全球顶尖的开源与商业大语言模型。所有模型均通过统一的 API 格式提供，并支持灵活的弹性计费。

## 热门模型概览

以下是当前最受开发者欢迎的核心模型列表。如需查阅包含所有长尾模型的完整名录及其实时倍率，请直接访问 [模型价格广场](/pricing)。

| 模型名称 (Model ID) | 生产厂商 | 上下文窗口 (Context) | 核心特点与适用场景 |
| :--- | :--- | :--- | :--- |
| **deepseek-chat** (V3) | DeepSeek | 64K | 极高性价比，通识能力出众，日常对话首选 |
| **deepseek-reasoner** (R1)| DeepSeek | 64K | 深度思考模型，擅长复杂数学、逻辑推理与代码编写 |
| **gpt-4o** | OpenAI | 128K | 高级多模态旗舰模型，高响应速度，综合实力顶尖 |
| **claude-3-5-sonnet** | Anthropic | 200K | 逻辑推理、超长文本分析及复杂编程长板模型 |
| **gemini-1.5-pro** | Google | 1M (100万) | 拥有海量上下文吞吐能力，适合超长视频/音视频深度理解 |

---

## 计费机制说明

本平台采用国际通用的 **Token 数量** 或者是 **按次（Reasoning/Image）** 进行扣费。

1. **扣费公式**：\`总消耗 = (输入 Token 数 \xd7 输入倍率) + (输出 Token 数 \xd7 输出倍率)\`。
2. **实时对账**：每次 API 请求的 Response Body 中都会包含 \`usage\` 字段，精确返回本次交互扣除的实际资产。你可以随时前往 [控制台首页](/dashboard/overview) 查阅扣费流水。
3. **额度保障**：当账户余额不足时，API 会自动触发 \`403 Forbidden\` 保护。建议在 [我的钱包](/wallet) 中开启低余额提醒。

---

## 模型智能分流与降级

为了保障生产环境的高可用性，我们的网关提供了智能重试与高并发调度。如果你在极高并发场景下遭遇了某家厂商的频控限制（Rate Limit），你可以通过配置动态令牌，自动切换到同等技术梯度的备用模型。

> [!INFO]
> 想要了解各模型在特定算法任务上的硬核性能排名吗？可以前往我们的 [模型排行榜](/rankings) 页面，查阅全网真实调用延迟与成功率报告。
`,providers:`
# 主流工具集成

本平台的 API 完美兼容 OpenAI 官方标准。这意味着你可以将本平台的通用非记名令牌直接配置进各类主流 AI 客户端、IDE 插件或开发辅助工具中，零成本获得百模智力支持。

## 核心配置三要素

无论你使用什么工具，请始终牢记以下核心参数对齐：
* **API Key (令牌)**：在 [秘钥管理](/keys) 生成的 \`sk-\` 密钥。
* **Base URL (代理地址)**：\`{{BASE_URL}}/v1\` （注意：**绝大多数工具都必须补齐 \`/v1\`** 才能正常通信）。
* **Model (模型选择)**：手动输入你想要调用的 Model ID（例如 \`deepseek-chat\` 或 \`gpt-4o\`）。

---

## 常用开发工具配置指南

<tabs>
<tab title="Cursor">

### 在 IDE 编程神器 Cursor 中接入

1. 打开 Cursor，点击右上角齿轮图标进入 **Settings**。
2. 导航至 **Models** 选项卡。
3. 展开 **OpenAI** 栏目：
   * 打开 **Override OpenAI Base URL** 开关。
   * 在输入框中填入：\`{{BASE_URL}}/v1\`
   * 在 **API Key** 框中填入你从 [秘钥管理](/keys) 复制的令牌。
4. 在下方 **Model Names** 中点击 **+ Add Model**，手动追加你需要的模型 ID（如 \`deepseek-chat\`、\`deepseek-reasoner\`）。
5. 关闭原生的其他厂商开关，即可在 Chat 和 Tab 补全中畅享智能编码。

</tab>
<tab title="Cline (VS Code)">

### 在 Cline 自动驾驶 Agent 中接入

1. 在 VS Code 中打开 **Cline** 插件面板，点击顶部的齿轮（设置）。
2. 在 **Provider** 下拉菜单中，选择 **OpenAI Compatible**。
3. 按照以下提示填写表单：
   * **Base URL**：填入 \`{{BASE_URL}}/v1\`
   * **API Key**：填入你的通用令牌。
   * **Model ID**：直接输入核心模型名字，如 \`deepseek-reasoner\`。
4. 点击 **Done** 保存，Cline 即可开始自动帮你阅读、修改和重构本地代码。

</tab>
<tab title="NextChat / LobeChat">

### 在各种独立 Web 网页客户端中接入

1. 进入客户端的 **设置 (Settings)** ➡️ **语言模型 (Language Model)**。
2. 找到 **OpenAI** 或 **自定义自定义模型网关** 区域：
   * 将 接口代理地址 (Base URL) 改为：\`{{BASE_URL}}/v1\`
   * 将 API Key 填入你的真实密钥。
3. 展开自定义模型列表，勾选或追加你账户中拥有的模型权限。
4. 返回聊天主界面，即可开始跨厂商的丝滑对话。

</tabs>
`,"api-reference":`
# API 参考文档

本平台的核心对话端点完全承袭 OpenAI 规范。你可以使用标准的 RESTFUL HTTP 请求与底层的各类模型进行高效深度的交互。

## 聊天对话端点

* **HTTP 方法**：\`POST\`
* **请求路径**：\`{{BASE_URL}}/v1/chat/completions\`
* **内容类型**：\`application/json\`

### 请求头 (Headers)

| 参数名 | 类型 | 是否必填 | 示例值 | 描述说明 |
| :--- | :--- | :--- | :--- | :--- |
| **Authorization** | String | 是 | Bearer sk-xxx... | 用于接口鉴权的 Bearer 令牌，注意空格。 |
| **Content-Type** | String | 是 | application/json | 固定的序列化格式。 |

---

## 请求参数 (Request Body)

\`\`\`json
{
  "model": "deepseek-chat",
  "messages": [
    {
      "role": "system",
      "content": "你是一个严谨的资深软件架构师。"
    },
    {
      "role": "user",
      "content": "如何优化大型单页应用的初始加载速度？"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 2048,
  "stream": false
}
\`\`\`

### 核心字段深度解析

* **\`model\`** *(String, 必填)*: 
  指定要执行调用的模型 ID。你可以前往 [模型价格 plaza](/pricing) 查阅当前所有可用模型的准确 ID 字符串。
* **\`messages\`** *(Array, 必填)*: 
  会话历史消息数组。包含 \`role\`（角色：可取 \`system\`、\`user\`、\`assistant\`）以及 \`content\`（具体的对话文本内容）。
* **\`temperature\`** *(Number, 选填, 默认 1.0)*: 
  采样温度。值介于 \`0\` 到 \`2\` 之间。值越高（如 1.5），模型的输出越随机、越具创造性；值越低（如 0.2），输出越稳定、越倾向于确定性的技术回答。
* **\`stream\`** *(Boolean, 选填, 默认 false)*: 
  是否开启**流式传输**。如果设为 \`true\`，服务器将以标准的 Server-Sent Events (SSE) 协议逐字向客户端推送数据流（类似于打字机效果），能大幅提升最终用户的交互体验。

---

## 返回结果 (Response Body)

### 标准 JSON 响应示例 (当 \`stream: false\` 时)

\`\`\`json
{
  "id": "chatcmpl-7df864fa9cbe498fb0e12d1b",
  "object": "chat.completion",
  "created": 1716883420,
  "model": "deepseek-chat",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "优化 SPA 的核心在于减少首屏体积。可以通过路由懒加载、组件分卷打包、开启 Gzip 压缩以及静态元数据动态拉取等技术手段实现。"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 25,
    "completion_tokens": 42,
    "total_tokens": 67
  }
}
\`\`\`

> [!INFO]
> 每次返回体中的 \`usage\` 字段是你在平台进行财务对账的核心依据。我们会根据系统后台配置的实时费率，严格扣除对应的 Token 资产。
`},E=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})}),O=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),(0,s.jsx)("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),(0,s.jsx)("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),(0,s.jsx)("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),T=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("polyline",{points:"4 17 10 11 4 5"}),(0,s.jsx)("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]}),U=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"})});function K(){let e=(0,n.z)().pathname,t=e.split("/").pop()||"quick-start",r=B[t]||`# 404

抱歉，未找到该文档内容。`,[l,a]=(0,o.useState)("加载中..."),[d,c]=(0,o.useState)(""),m=(0,o.useRef)({title:"",desc:""});(0,o.useEffect)(()=>{m.current.title=document.title;let e=document.querySelector('meta[name="description"]');return e&&(m.current.desc=e.getAttribute("content")||""),(async()=>{let e="u">typeof window?window.location.origin:"http://localhost:3000";try{let t=await fetch("/api/status"),r=await t.json();r?.success&&r?.data?(a(r.data.system_name||"API 聚合平台"),c(r.data.server_address||e)):(a("API 聚合平台"),c(e))}catch(t){a("API 聚合平台"),c(e)}})(),()=>{document.title=m.current.title;let e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",m.current.desc)}},[]),(0,o.useEffect)(()=>{if("加载中..."===l)return;let e=r.match(/^#\s+(.+)$/m),t=e?e[1].trim():"开发文档";document.title=`${t} - ${l} 开发者中心`;let s=r.split("\n").find(e=>{let t=e.trim();return t.length>10&&!t.startsWith("#")&&!t.startsWith(">")&&!t.startsWith("<")&&!t.startsWith("`")}),o=s?s.trim().substring(0,160):`${l} 官方开发文档，帮助你快速接入大模型 API。`,n=document.querySelector('meta[name="description"]');n||((n=document.createElement("meta")).setAttribute("name","description"),document.head.appendChild(n)),n.setAttribute("content",o)},[t,r,l]);let p=r.replace(/\{\{BASE_URL\}\}/g,d||("u">typeof window?window.location.origin:""));return(0,s.jsxs)(x,{currentPath:e,lastUpdated:"2026年5月28日",children:[(0,s.jsx)(R,{content:p}),(0,s.jsxs)("div",{className:"mt-12 grid gap-4 sm:grid-cols-2",children:[(0,s.jsxs)(i.N_,{to:"/docs/authentication",title:"查看平台 API 认证指南与秘钥获取方式","aria-label":"认证指南",className:"group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/40",children:[(0,s.jsx)("div",{className:"mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110",children:(0,s.jsx)(E,{})}),(0,s.jsx)("h3",{className:"mb-1 text-[15px] font-semibold text-foreground",children:"认证指南"}),(0,s.jsx)("p",{className:"text-[13px] text-muted-foreground",children:"获取并配置你的 API 访问凭证"})]}),(0,s.jsxs)(i.N_,{to:"/docs/models",title:"查阅系统支持的 100+ 大模型名录及计费标准","aria-label":"模型目录",className:"group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/40",children:[(0,s.jsx)("div",{className:"mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110",children:(0,s.jsx)(O,{})}),(0,s.jsx)("h3",{className:"mb-1 text-[15px] font-semibold text-foreground",children:"模型目录"}),(0,s.jsx)("p",{className:"text-[13px] text-muted-foreground",children:"浏览所有支持的大语言模型及计费标准"})]}),(0,s.jsxs)(i.N_,{to:"/docs/providers",title:"学习如何在第三方开发工具或平台中接入我们的 API","aria-label":"工具集成",className:"group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/40",children:[(0,s.jsx)("div",{className:"mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110",children:(0,s.jsx)(T,{})}),(0,s.jsx)("h3",{className:"mb-1 text-[15px] font-semibold text-foreground",children:"工具集成"}),(0,s.jsx)("p",{className:"text-[13px] text-muted-foreground",children:"在 Cursor、Cline 等开发工具中配置"})]}),(0,s.jsxs)(i.N_,{to:"/docs/api-reference",title:"查阅完整的 REST API 端点定义与参数参考","aria-label":"API 参考",className:"group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/40",children:[(0,s.jsx)("div",{className:"mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110",children:(0,s.jsx)(U,{})}),(0,s.jsx)("h3",{className:"mb-1 text-[15px] font-semibold text-foreground",children:"API 参考"}),(0,s.jsx)("p",{className:"text-[13px] text-muted-foreground",children:"查阅完整的 REST 端点和参数说明"})]})]})]})}}}]);