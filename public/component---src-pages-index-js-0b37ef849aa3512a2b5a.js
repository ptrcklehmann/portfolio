(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(175),o=n(180),c=n.n(o),l=(n(146),n(206)),s=n(147),m=n(143),u=n(315),d=n(148),M=n(149),p=n(217),g=n.n(p),h=n(318),f=n(219),y=n(141),w=n(4),N=n.n(w),j=Object(y.default)(m.Link).withConfig({displayName:"SocialLink__IconLink",componentId:"sc-123ku7f-0"})(["transition:color 0.5s;color:",";&:hover{color:",";}"],Object(h.a)(["theme","colors","primary"]),Object(h.a)(["theme","colors","verde"])),b=function(e){var t=e.fontAwesomeIcon,n=e.name,a=e.url;return r.a.createElement(f.Tooltip,{title:n,position:"bottom",trigger:"mouseenter"},r.a.createElement(j,{href:a,target:"_blank"},r.a.createElement(g.a,{name:t})))};b.propTypes={fontAwesomeIcon:N.a.string.isRequired,name:N.a.string.isRequired,url:N.a.string.isRequired};var x=b,T=y.default.svg.withConfig({displayName:"MouseIcon__MouseContainer",componentId:"xyrakf-0"})(["max-width:2.5rem;width:100%;height:auto;"]),E=y.default.span.withConfig({displayName:"MouseIcon__ScrollLink",componentId:"xyrakf-1"})(["position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);cursor:pointer;@media only screen and (max-width:700px){display:none;}"]),I=Object(y.keyframes)(["0%,20%{transform:translateY(0) scaleY(1);}10%{opacity:1;}100%{transform:translateY(36px) scaleY(2);opacity:0.01;}"]),D=y.default.rect.attrs({stroke:function(e){return e.theme.colors.primary},strokeWidth:"3"}).withConfig({displayName:"MouseIcon__Mouse",componentId:"xyrakf-2"})([""]),k=y.default.circle.withConfig({displayName:"MouseIcon__Scroll",componentId:"xyrakf-3"})(["animation-name:",";animation-duration:1.5s;animation-timing-function:cubic-bezier(0.65,-0.55,0.25,1.5);animation-iteration-count:infinite;transform-origin:50% 20.5px;will-change:transform;fill:",";"],I,function(e){return e.theme.colors.primary}),L=function(e){var t=e.onClick;return r.a.createElement(E,{onClick:t},r.a.createElement(T,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 76 130"},r.a.createElement("g",{fill:"none"},r.a.createElement(D,{width:"70",height:"118",x:"1.5",y:"1.5",rx:"36"}),r.a.createElement(k,{cx:"36.5",cy:"31.5",r:"4.5"}))))};L.propTypes={onClick:N.a.func};var z=L,v=n(150),C=(n(169),function(){return r.a.createElement("div",null,r.a.createElement(v.a,{color:"pretinhoMaisClaro",height:["35vh","80vh"],width:["95vw","60vw"]}),r.a.createElement(v.a,{color:"pretinhoClaro",height:["38vh","80vh"],width:["50vw","35vw"]}),r.a.createElement(v.a,{color:"pretinho",height:["25vh","35vh"],width:["75vw","60vw"],invertX:!0}),r.a.createElement(v.a,{color:"grafite",height:["20vh","20vh"],width:["100vw","100vw"],invertX:!0,invertY:!0}))}),O=function(){return r.a.createElement(M.a.Container,{id:"home",Background:C},r.a.createElement(s.StaticQuery,{query:"1608748843",render:function(e){var t=e.contentfulAbout,n=t.name,i=t.socialLinks,o=t.roles;return r.a.createElement(a.Fragment,null,r.a.createElement(m.Heading,{textAlign:"center",as:"h1",color:"primary",fontSize:[5,6,8],mb:[3,4,5]},"Hey there, I'm "+n+"!"),r.a.createElement(m.Heading,{as:"h2",color:"verde",fontSize:[4,5,6],mb:[3,5],textAlign:"center"},r.a.createElement(u.a,null,o.map(function(e){return r.a.createElement(m.Text,{width:[400,500],key:e},e)}))),r.a.createElement(m.Flex,{alignItems:"center",justifyContent:"center",flexWrap:"wrap"},i.map(function(e){var t=e.id,n=c()(e,["id"]);return r.a.createElement(m.Box,{mx:3,fontSize:[5,6,6],key:t},r.a.createElement(x,n))})),r.a.createElement(d.c,{section:"about"},function(e){var t=e.onClick;return r.a.createElement(z,{onClick:t})}))},data:l}))},A=n(221),S=n(222),Q=n.n(S),Y=n(155),U=n.n(Y),q=(n(302),y.default.a.withConfig({displayName:"MarkdownRenderer__StyledLink",componentId:"sc-160z34z-0"})(["display:inline-block;transition:color 250ms,text-shadow 250ms;color:white;text-decoration:none;cursor:pointer;position:relative;&:after{position:absolute;z-index:-1;bottom:-1px;left:50%;transform:translateX(-50%);content:'';width:100%;height:3px;background-color:",";transition:all 250ms;}&:hover{color:white;&::after{height:110%;width:110%;}}"],function(e){return e.theme.colors.primaryLight})),_=y.default.p.withConfig({displayName:"MarkdownRenderer__MarkdownParagraph",componentId:"sc-160z34z-1"})(["line-height:2em;&:first-child{margin-top:0em;}"]),R=y.default.ul.withConfig({displayName:"MarkdownRenderer__MarkdownList",componentId:"sc-160z34z-2"})(["margin:0;"]),P=y.default.li.withConfig({displayName:"MarkdownRenderer__MarkdownListItem",componentId:"sc-160z34z-3"})(["margin:1em 0;line-height:2em;"]),G=function(e){var t=e.href,n=e.children;return t.startsWith("#")?r.a.createElement(d.c,{section:t.substring(1,t.length)},function(e){var t=e.onClick;return r.a.createElement(q,{onClick:t},n)}):r.a.createElement(q,{href:t,target:"_blank"},n)};G.propTypes={href:N.a.string.isRequired,children:N.a.node};var Z={paragraph:function(e){return r.a.createElement(_,e)},list:function(e){return r.a.createElement(R,e)},listItem:function(e){return r.a.createElement(P,e)},link:G},W=function(){return r.a.createElement("div",null,r.a.createElement(v.a,{color:"pretinhoClaro",height:["50vh","20vh"],width:["50vw","50vw"],invertY:!0}),r.a.createElement(v.a,{color:"pretinho",height:["20vh","40vh"],width:["75vw","70vw"],invertX:!0}),r.a.createElement(v.a,{color:"grafite",height:["25vh","20vh"],width:["100vw","100vw"]}))},B=Object(y.default)(m.Image).withConfig({displayName:"About__ProfilePicture",componentId:"d8hx5z-0"})(["border-radius:50%;transition:all 0.25s ease-out;&:hover{border-radius:20%;}"]),H=function(){return r.a.createElement(M.a.Container,{id:"about",Background:W},r.a.createElement(M.a.Header,{name:"About me",icon:"🙋‍♂️",label:"person"}),r.a.createElement(s.StaticQuery,{query:"1331387878",render:function(e){var t=e.contentfulAbout,n=t.aboutMe,a=t.profile;return r.a.createElement(m.Flex,{justifyContent:"center",alignItems:"center",flexWrap:"wrap"},r.a.createElement(m.Box,{width:[1,1,4/6],px:[1,2,4]},r.a.createElement(U.a,{bottom:!0},r.a.createElement(Q.a,{source:n.childMarkdownRemark.rawMarkdownBody,renderers:Z}))),r.a.createElement(m.Box,{width:[1,1,2/6],style:{maxWidth:"300px",margin:"auto"}},r.a.createElement(U.a,{right:!0},r.a.createElement(B,{src:a.image.src,alt:a.title,mt:[4,4,0],ml:[0,0,1]}))))},data:A}))},F=(n(32),n(303)),V=y.default.div.withConfig({displayName:"Card__CardContainer",componentId:"sc-1ta9k8w-0"})(["display:grid;grid-gap:30px;grid-template-columns:repeat( auto-fill,minmax(",",1fr) );justify-items:center;@media only screen and (max-width:400px){grid-template-columns:repeat(auto-fill,minmax(280px,1fr));}"],function(e){return e.minWidth}),X=Object(y.default)(m.Card).attrs({bg:"white",boxShadow:0,borderRadius:8,color:"black"}).withConfig({displayName:"Card",componentId:"sc-1ta9k8w-1"})(["position:relative;box-shadow:0 2px 2px rgba(0,0,0,0.2);transition:all 0.25s;top:0;height:100%;cursor:",";&:hover{top:-10px;box-shadow:0 12px 16px rgba(0,0,0,0.2);}"],function(e){return e.onClick?"pointer":"default"}),J=Object(y.default)(m.Box).withConfig({displayName:"ImageSubtitle",componentId:"sc-1e7i66g-0"})(["position:absolute;display:inline;padding:10px;font-size:14px;font-weight:600;text-transform:uppercase;",":0;",":0;",";"],function(e){return e.x||"left"},function(e){return e.y||"top"},function(e){return e.invert?"float: left; padding-right: 20px; clip-path: polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);":"float: right; padding-left: 20px; clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);"}),K={xs:"@media screen and (max-width: 40em)",sm:"@media screen and (min-width: 40em) and (max-width: 52em)",md:"@media screen and (min-width: 52em) and (max-width: 64em)",lg:"@media screen and (min-width: 64em)"},$=function(e){return function(t){var n;return t[e]&&((n={})[K[e]]={display:"none"},n)}},ee=$("xs"),te=$("sm"),ne=$("md"),ae=$("lg"),re=y.default.div.withConfig({displayName:"Hide",componentId:"sc-148ocpz-0"})([],ee,te,ne,ae,function(e){var t;return e.query&&((t={})[e.query]={display:"none"},t)}),ie=function(){return r.a.createElement("div",null,r.a.createElement(v.a,{color:"pretinho",height:["80vh","80vh"],width:["100vw","100vw"],invertX:!0}),r.a.createElement(v.a,{color:"grafite",height:["50vh","20vh"],width:["50vw","50vw"],invertX:!0}),r.a.createElement(v.a,{color:"pretinhoClaro",height:["25vh","40vh"],width:["75vw","60vw"],invertX:!0,invertY:!0}),r.a.createElement(v.a,{color:"grafite",height:["25vh","20vh"],width:["100vw","100vw"],invertY:!0}))},oe="@media (max-width: 400px)",ce=Object(y.default)(m.Text).withConfig({displayName:"Projects__Title",componentId:"sc-12cvuyi-0"})(["font-size:14px;font-weight:600;text-transform:uppercase;display:table;border-bottom:"," 5px solid;"],Object(h.a)(["theme","colors","primary"])),le=y.default.div.withConfig({displayName:"Projects__TextContainer",componentId:"sc-12cvuyi-1"})(["display:flex;flex-direction:column;padding:10px;width:100%;width:calc(100% - ",");","{width:calc(100% - ("," / 2));}"],"200px",oe,"200px"),se=y.default.div.withConfig({displayName:"Projects__ImageContainer",componentId:"sc-12cvuyi-2"})(["margin:auto;width:",";","{width:calc("," / 2);}"],"200px",oe,"200px"),me=Object(y.default)(m.Image).withConfig({displayName:"Projects__ProjectImage",componentId:"sc-12cvuyi-3"})(["width:",";height:",";padding:40px;margin-top:0px;","{height:calc("," / 2);width:calc("," / 2);margin-top:calc("," / 4);padding:10px;}"],"200px","200px",oe,"200px","200px","200px"),ue=y.default.div.withConfig({displayName:"Projects__ProjectTag",componentId:"sc-12cvuyi-4"})(["position:relative;height:",";top:calc( -"," - 4px );","{top:calc(-"," - 4px + ("," / 4));}"],"200px","200px",oe,"200px","200px"),de=function(e){var t=e.name,n=e.description,a=e.projectUrl,i=e.repositoryUrl,o=e.type,c=e.publishedDate,l=e.logo;return r.a.createElement(X,{p:0},r.a.createElement(m.Flex,{style:{height:"200px"}},r.a.createElement(le,null,r.a.createElement("span",null,r.a.createElement(ce,{my:2,pb:1},t)),r.a.createElement(m.Text,{width:[1],style:{overflow:"auto"}},n)),r.a.createElement(se,null,r.a.createElement(me,{src:l.image.src,alt:l.title}),r.a.createElement(ue,null,r.a.createElement(m.Flex,{style:{float:"right"}},r.a.createElement(m.Box,{mx:1,fontSize:5},r.a.createElement(x,{name:"Check repository",fontAwesomeIcon:"github",url:i})),r.a.createElement(m.Box,{mx:1,fontSize:5},r.a.createElement(x,{name:"See project",fontAwesomeIcon:"globe",url:a}))),r.a.createElement(J,{bg:"verde",color:"verdeEscuro",y:"bottom",x:"right"},o),r.a.createElement(re,{query:oe},r.a.createElement(J,{bg:"verde",invert:!0},c))))))};de.propTypes={name:N.a.string.isRequired,description:N.a.string.isRequired,projectUrl:N.a.string.isRequired,repositoryUrl:N.a.string.isRequired,type:N.a.string.isRequired,publishedDate:N.a.string.isRequired,logo:N.a.shape({image:N.a.shape({src:N.a.string})}).isRequired};var Me=function(){return r.a.createElement(M.a.Container,{id:"projects",Background:ie},r.a.createElement(M.a.Header,{name:"Projects",icon:"💻",Box:"notebook"}),r.a.createElement(s.StaticQuery,{query:"3598858759",render:function(e){var t=e.contentfulAbout;return r.a.createElement(V,{minWidth:"350px"},t.projects.map(function(e,t){return r.a.createElement(U.a,{bottom:!0,delay:200*t},r.a.createElement(de,Object.assign({key:e.id},e)))}))},data:F}))},pe=(n(304),y.default.img.withConfig({displayName:"Writing__CoverImage",componentId:"sc-1bgpzyr-0"})(["width:100%;object-fit:cover;"])),ge=Object(y.default)(m.Heading).withConfig({displayName:"Writing__EllipsisHeading",componentId:"sc-1bgpzyr-1"})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-inline-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;border-bottom:"," 5px solid;"],function(e){return e.theme.colors.primary}),he=function(e){var t=e.title,n=e.text,a=e.image,i=e.url,o=e.date,c=e.time;return r.a.createElement(X,{onClick:function(){return window.open(i,"_blank")},pb:4},r.a.createElement(ge,{m:3,p:1},t),a&&r.a.createElement(pe,{src:a,height:"200px",alt:t}),r.a.createElement(m.Text,{m:3},n),r.a.createElement(J,{bg:"primaryLight",color:"white",x:"right",y:"bottom"},o+" - "+Math.ceil(c)+" min"))};he.propTypes={title:N.a.string.isRequired,text:N.a.string.isRequired,image:N.a.string.isRequired,url:N.a.string.isRequired,date:N.a.string.isRequired,time:N.a.number.isRequired};n(77),n(51),n(305);var fe=n(307),ye=n.n(fe),we=n(156),Ne=function(e){var t=e.onClick,n=e.selected,a=e.children;return r.a.createElement(m.Box,{ml:[2,3],color:"background",fontSize:[2,3]},r.a.createElement(we.a,{onClick:t,selected:n},a))};Ne.propTypes={onClick:N.a.func,selected:N.a.bool,children:N.a.node};var je=Ne,be=n(314),xe=n.n(be),Te=Object(y.default)(ye.a).withConfig({displayName:"Header__HeaderContainer",componentId:"oavssd-0"})([".headroom--pinned{background:",";}span:{color:",";}position:absolute;width:100%;"],function(e){return e.theme.colors.pretinhoClaro},function(e){return e.theme.colors.verde}),Ee=function(){return r.a.createElement(Te,null,r.a.createElement(U.a,{top:!0},r.a.createElement(m.Flex,{flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",p:3},r.a.createElement(d.d,null,function(e){var t=function(e){return Object.entries(e).reduce(function(e,t){var n,a=t[0],r=t[1];return"home"===a?Object.assign({},e,{home:r}):Object.assign({},e,{links:[].concat(e.links,[{name:(n=a,n&&n[0].toUpperCase()+n.slice(1)),value:r}])})},{links:[],home:null})}(e.allLinks),n=t.home,i=t.links,o=n&&r.a.createElement(m.Image,{src:xe.a,width:"50px",alt:"Portfolio Logo",onClick:n.onClick}),c=i.map(function(e){var t=e.name,n=e.value;return r.a.createElement(je,{key:t,onClick:n.onClick,selected:n.selected},t)});return r.a.createElement(a.Fragment,null,o,r.a.createElement(m.Flex,{mr:[0,3,5]},c))}))))},Ie=y.default.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"jocsoy-0"})(["padding:1em;background:",";color:",";display:flex;flex:0 1 auto;flex-direction:column;justify-content:center;align-items:center;"],function(e){return e.theme.colors.pretinho},function(e){return e.theme.colors.verde});y.default.img.withConfig({displayName:"Footer__RenponsiveLogo",componentId:"jocsoy-1"})(["width:100px;height:25px;@media (min-width:400px){width:150px;height:35px;}"]);N.a.string.isRequired,N.a.string.isRequired,N.a.string;var De=function(){return r.a.createElement(Ie,null,r.a.createElement(U.a,{bottom:!0},r.a.createElement("span",null,r.a.createElement(m.Text,{mb:2,pb:1,style:{borderBottom:"white 3px solid",display:"table"}},"Copyright © 2019 Patrick Lehmann"))))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(Ee,null),r.a.createElement(O,null),r.a.createElement(H,null),r.a.createElement(Me,null),r.a.createElement(De,null))}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return M});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(153),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),M=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){"use strict";n(146);var a=n(0),r=n.n(a),i=n(141),o=n(148),c=n(143),l=n(4),s=n.n(l),m=n(181),u=n.n(m),d=n(156),M=i.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"sc-18uueee-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;"]),p=function(){return r.a.createElement("div",null)},g=function(e){var t=e.id,n=e.children,a=e.Background,i=void 0===a?p:a;return r.a.createElement(o.b,{id:t,style:{position:"relative"}},r.a.createElement(i,null),r.a.createElement(M,null,n))};g.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,Background:s.a.func};var h=function(e){var t=e.name,n=e.icon,a=void 0===n?"":n,i=e.label,o=void 0===i?"":i;return r.a.createElement(u.a,{left:!0},r.a.createElement(c.Heading,{color:"secondaryDark",mb:4},r.a.createElement(d.a,{selected:!0},t,a&&r.a.createElement("span",{role:"img","aria-label":o,style:{marginLeft:"10px"}},a))))};h.propTypes={name:s.a.string.isRequired,icon:s.a.string,label:s.a.string},t.a={Container:g,Header:h}},150:function(e,t,n){"use strict";var a=n(141).default.div.withConfig({displayName:"Triangle",componentId:"le4p17-0"})(["position:absolute;width:0;height:0;z-index:-2;"," "," @media only screen and (min-width:768px){"," ",";}"],function(e){var t=e.theme.colors[e.color]||e.color,n=e.height[0]+" solid "+t+";";return e.invertY?"border-bottom: "+n+"; bottom: 0;":"border-top: "+n+";"},function(e){var t=e.width[0]+" solid transparent;";return e.invertX?"border-left: "+t+"; right: 0;":"border-right: "+t+";"},function(e){var t=e.height[1];return e.invertY?"border-bottom-width: "+t+";":"border-top-width: "+t+";"},function(e){var t=e.width[1];return e.invertX?"border-left-width: "+t+";":"border-right-width: "+t+";"});t.a=a},153:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},156:function(e,t,n){"use strict";var a=n(141),r=n(318),i=a.default.span.withConfig({displayName:"LinkAnimated",componentId:"sc-2abb6z-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.verde},function(e){return e.onClick?"pointer":"default"},Object(r.a)(["theme","colors","verdeEscuro"]));t.a=i},162:function(e,t){e.exports={colors:{background:"#414a4c",backgroundDark:"#232b2b",primary:"#b0b0b0",primaryLight:"#232b2b",primaryDark:"#232b2b",secondary:"#3b444b",secondaryLight:"#3b444b",secondaryDark:"#b3b6b7",pretinho:"#232323",pretinhoClaro:"#1f1f1f",pretinhoMaisClaro:"#1b1b1b",grafite:"#3a3a3a",verde:"#29f3c3",verdeEscuro:"#189175"}}},163:function(e){e.exports={data:{contentfulAbout:{name:"Patrick Lehmann",description:"I develop Front and Back-end solutions",profile:{favicon16:{src:"//images.ctfassets.net/0i9xzrkr1hf9/6nf3rNaaVaUqYcoAcciSeC/6e422972885e3e501918488233a69412/32590221.png?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/0i9xzrkr1hf9/6nf3rNaaVaUqYcoAcciSeC/6e422972885e3e501918488233a69412/32590221.png?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/0i9xzrkr1hf9/6nf3rNaaVaUqYcoAcciSeC/6e422972885e3e501918488233a69412/32590221.png?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/0i9xzrkr1hf9/6nf3rNaaVaUqYcoAcciSeC/6e422972885e3e501918488233a69412/32590221.png?w=180&fl=progressive&q=50"}}}}}},164:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},175:function(e,t,n){"use strict";var a=n(176),r=n.n(a),i=n(0),o=n.n(i),c=n(141),l=n(4),s=n.n(l),m=n(148),u=(n(177),n(152)),d=n.n(u),M=n(162),p=n.n(M),g=(n(146),n(163)),h=n(178),f=n.n(h),y=n(147),w=function(e){var t=e.theme,n=void 0===t?{}:t;return o.a.createElement(y.StaticQuery,{query:"4063282471",render:function(e){var t=e.contentfulAbout,a=t.name,r=t.description,i=t.profile,c=a+" Portofolio";return o.a.createElement(f.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,c),o.a.createElement("meta",{name:"description",content:r}),o.a.createElement("link",{rel:"shortcut icon",href:i.favicon32.src}),o.a.createElement("meta",{name:"theme-color",content:n.background}),o.a.createElement("meta",{name:"image",content:i.favicon32.src}),o.a.createElement("meta",{itemProp:"name",content:c}),o.a.createElement("meta",{itemProp:"description",content:r}),o.a.createElement("meta",{itemProp:"image",content:i.favicon32.src}),o.a.createElement("meta",{name:"og:title",content:c}),o.a.createElement("meta",{name:"og:description",content:r}),o.a.createElement("meta",{name:"og:image",content:i.bigIcon.src}),o.a.createElement("meta",{name:"og:site_name",content:c}),o.a.createElement("meta",{name:"og:locale",content:"en_US"}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:c}),o.a.createElement("meta",{name:"twitter:description",content:r}),o.a.createElement("meta",{name:"twitter:image",content:i.bigIcon.src}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:i.appleIcon.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:i.favicon32.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:i.favicon16.src}),o.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:g})};w.propTypes={theme:s.a.object};var N=Object(c.withTheme)(w);function j(){var e=r()(["\n  * { box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: Cabin;\n  background: #272727;\n  color: white;\n  \n}\n\n"]);return j=function(){return e},e}var b=Object(c.createGlobalStyle)(j());d()({ssrFadeout:!0});var x=function(e){var t=e.children;return o.a.createElement(i.Fragment,null,o.a.createElement(b,null),o.a.createElement(c.ThemeProvider,{theme:p.a},o.a.createElement(m.a,null,o.a.createElement(N,null),t)))};x.propTypes={children:s.a.node.isRequired};t.a=x},206:function(e){e.exports={data:{contentfulAbout:{name:"Patrick Lehmann",roles:["HTML5","CSS3 (Sass)","JavaScript (ES6)","React","PHP","Java + Java EE"],socialLinks:[{id:"e20c9b85-0866-5997-8ba4-c24d18e0e054",url:"https://github.com/ptrcklehmann",name:"Github",fontAwesomeIcon:"github"},{id:"4cd92736-3aec-5c27-bb2b-841c700cf73d",url:"https://medium.com/@ptrcklehmann",name:"Medium",fontAwesomeIcon:"medium"},{id:"97e89d27-0dd0-539a-b1e8-f57942b275a8",url:"https://patricklehmann.typeform.com/to/sO8rb9",name:"Contact me",fontAwesomeIcon:"envelope"},{id:"71f92cfd-c26a-581d-8a09-d1423df892a2",url:"https://twitter.com/patrico",name:"Twitter",fontAwesomeIcon:"twitter"}]}}}},221:function(e){e.exports={data:{contentfulAbout:{aboutMe:{childMarkdownRemark:{rawMarkdownBody:"Hello 👋 I'm Mate a gatsby starter which is focus on simplicity and extensibility. It's build with Gatsby(duh), [Rebass](https://jxnblk.com/rebass/) (styled-component system) and [Contentful](https://www.contentful.com/).\n\nThe starter will give you 4 sections (it's really easy to add more if you want 😃):\n* [Landing:](#home) Displays a nice greeting with your name, also your roles (what you  are) and all your social links.\n* [About:](#about) Show the about section where you can write about who you are, what you like to do, etc. Also you can add a photo next to it!\n* [Project:](#projects) Displays a card for all your project that you've made and also the posibility to link with github or and external link.\n* [Writting:](#writting) Take the information about your medium user and show up to 6 stories as cards with the link to Medium."}},profile:{title:"ptrckl Logo",image:{src:"//images.ctfassets.net/0i9xzrkr1hf9/6nf3rNaaVaUqYcoAcciSeC/6e422972885e3e501918488233a69412/32590221.png?w=450&fl=progressive&q=100"}}}}}},303:function(e){e.exports={data:{contentfulAbout:{projects:[{id:"172cb726-050d-52f3-9e23-aa529fe48229",name:"Facebook",description:"Facebook is a popular free social networking website that allows registered users to keep in touch with friends.",projectUrl:"http://facebook.com/",repositoryUrl:"https://github.com/facebook",publishedDate:"2004",type:"Web",logo:{title:"Facebook logo",image:{src:"//images.ctfassets.net/0i9xzrkr1hf9/u3Um4zkMrAaQioyq4oSIW/1727dcfe0348a83c5a554322f8a764f9/600px-Facebook_logo__28square_29.png?w=200&fl=progressive&q=100"}}},{id:"7aa9b16d-f43f-5199-839a-89f24f1b7cdc",name:"Gatsby JS",description:" Gatsby is a React-based, GraphQL powered, static site generator. Overall think, part Jekyll, part create-react-app.",projectUrl:"https://www.gatsbyjs.org/",repositoryUrl:"https://github.com/gatsbyjs/gatsby",publishedDate:"2016",type:"Framework",logo:{title:"Gatsby logo",image:{src:"//images.ctfassets.net/0i9xzrkr1hf9/6rkOXCpyvuekYIgy6U6gGu/c53acc8154c4f5518598b5f0cb25b0f6/1_t5EnAu3eSWJA0rmZ9v3xuw.png?w=200&fl=progressive&q=100"}}},{id:"d5b809dc-bb7b-555d-a135-ce7436b9b1b8",name:"Google",description:"It is the most-used search engine on the World Wide Web, handling more than three billion searches each day.",projectUrl:"https://www.google.com/",repositoryUrl:"https://github.com/google",publishedDate:"1998",type:"Web",logo:{title:"Google Logo",image:{src:"//images.ctfassets.net/0i9xzrkr1hf9/3AorRmtWOsGQ4o8gK0YWKG/bd10b8af72cce2b2ce461d2506dab0ca/google_PNG19630.png?w=200&fl=progressive&q=100"}}}]}}}},304:function(e){e.exports={data:{allMediumPost:{edges:[{node:{id:"01e6764c-c747-5e17-9f13-6e42dba452c1",uniqueSlug:"test-story-464595b5c93e",title:"Test Story",createdAt:"Jan 2019",virtuals:{subtitle:"That’s my story, end of the",readingTime:.033962264150943396,previewImage:{imageId:""}},author:{username:"ptrcklehmann"}}}]}}}},314:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA1NCIgaGVpZ2h0PSIxMDU0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsaXAtcnVsZT0iZXZlbm9kZCI+CgogIDxnIHN0cm9rZT0ibnVsbCIgaWQ9ImxheWVyMTAzIj4KICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0ibTI5NC42MDY0MTIsMTA0OS41OTc2NzFjLTkuNDI4MDA4LC0zLjYwNDgyNyAtMzkuMDk4NTAzLC0zOC4yNjY2MiAtNTkuODk1NTc5LC02OS4wNDYyOTNjLTc4LjE5NzAwNywtMTE3LjAxODIxNSAtOTcuODg0OTA1LC0yMjYuODI2Nzc4IC02OC40OTE3MDQsLTM4NC4zMjk5NjhjOS43MDUzMDIsLTUxLjI5OTQ1NSAyMS45MDYyNTQsLTkzLjcyNTQ5IDQxLjU5NDE1MiwtMTQ0LjQ3MDM1NmMxMS4zNjkwNjgsLTI5LjExNTkwNyAxNy43NDY4MzgsLTM4LjU0MzkxNSAyOS4zOTMyMDEsLTQyLjk4MDYyNGMzLjg4MjEyMSwtMS4zODY0NzIgODkuMDExNDg2LC0yLjQ5NTY0OSAyMDcuMTM4ODc5LC0yLjQ5NTY0OWwyMDAuNDgzODE1LDBsMy4wNTAyMzgsLTE0LjQxOTMwNmMxLjY2Mzc2NiwtOC4wNDE1MzYgMjAuMjQyNDg4LC05My4xNzA5MDEgNDAuNzYyMjY5LC0xODkuMzkyMDQxYzIwLjc5NzA3NiwtOTUuOTQzODQ1IDM5LjA5ODUwMywtMTc4LjAyMjk3MiA0MC40ODQ5NzUsLTE4Mi4xODIzODhjMS42NjM3NjYsLTQuMTU5NDE1IDcuMjA5NjUzLC05LjQyODAwOCAxMi43NTU1NCwtMTEuOTIzNjU3YzE5LjY4Nzg5OSwtOS40MjgwMDggMzkuNjUzMDkyLDIuMjE4MzU1IDM5LjY1MzA5MiwyMy4yOTI3MjVjMCw1LjU0NTg4NyAtMTcuNDY5NTQ0LDkxLjc4NDQzIC0zOC44MjEyMDksMTkxLjMzMzEwMWMtMjEuMzUxNjY1LDk5LjgyNTk2NiAtMzguODIxMjA5LDE4MS42Mjc3OTkgLTM4LjgyMTIwOSwxODIuMTgyMzg4YzAsMC41NTQ1ODkgMjEuOTA2MjU0LDEuMTA5MTc3IDQ4LjgwMzgwNSwxLjEwOTE3N2M2MC43Mjc0NjMsMCA2NC42MDk1ODMsMS4zODY0NzIgNzYuMjU1OTQ2LDI2LjM0Mjk2M2M0MS4wMzk1NjQsODcuNjI1MDE0IDY5LjMyMzU4NywyNDIuMzU1MjYxIDYwLjcyNzQ2MywzMzQuNjk0MjhjLTYuMTAwNDc2LDY4Ljc2ODk5OSAtMzIuOTk4MDI4LDE0MS42OTc0MTMgLTc2LjI1NTk0NiwyMDcuNDE2MTczYy0yMC4yNDI0ODgsMzAuNTAyMzc4IC01Mi42ODU5MjYsNjkuMDQ2MjkzIC02Mi4zOTEyMjksNzQuMDM3NTkxYy01LjI2ODU5MywyLjc3Mjk0MyAtNTcuMzk5OTMsMy42MDQ4MjcgLTIyOC43Njc4MzgsMy4zMjc1MzJjLTEyMi4wMDk1MTQsMCAtMjI0LjMzMTEyOSwtMS4xMDkxNzcgLTIyNy42NTg2NjEsLTIuNDk1NjQ5em00NTIuNTQ0Mzc4LC04MC45Njk5NWMxMC4yNTk4OTEsLTE0LjE0MjAxMiAxOS42ODc4OTksLTI3LjQ1MjE0MSAyMS4zNTE2NjUsLTI5LjExNTkwN2MxLjk0MTA2LC0yLjc3Mjk0MyAtNDcuNjk0NjI4LC0zLjYwNDgyNyAtMjQ2LjIzNzM4MiwtMy42MDQ4MjdsLTI0OC43MzMwMzEsMGw0LjcxNDAwNCw3Ljc2NDI0MmM2LjM3Nzc3LDkuOTgyNTk3IDI2LjA2NTY2OSwzNi4zMjU1NiAzMi45OTgwMjgsNDQuMzY3MDk2bDUuMjY4NTkzLDYuMTAwNDc2bDQxMS43ODIxMDksMGwxOC44NTYwMTYsLTI1LjUxMTA4em02NC4wNTQ5OTUsLTExNS4wNzcxNTVjMTEuNjQ2MzYzLC0zMi4xNjYxNDUgMTMuNTg3NDIzLC0zOS4wOTg1MDMgMTkuMTMzMzEsLTY4Ljc2ODk5OWM3LjIwOTY1MywtMzguODIxMjA5IDMuNjA0ODI3LC0xMTMuNDEzMzg5IC04Ljg3MzQxOSwtMTgyLjE4MjM4OGwtMS45NDEwNiwtMTAuNTM3MTg1bC0yOTcuMjU5NTQyLDBsLTI5Ny4yNTk1NDIsMGwtMy4wNTAyMzgsMTYuMDgzMDcyYy03Ljc2NDI0MiwzOS45MzAzODYgLTkuNDI4MDA4LDU0LjkwNDI4MSAtMTAuODE0NDgsOTcuODg0OTA1Yy0yLjIxODM1NSw2Mi4xMTM5MzQgNC4xNTk0MTUsMTAyLjg3NjIwNCAyMy4wMTU0MzEsMTUxLjY4MDAwOWw3Ljc2NDI0MiwxOS45NjUxOTNsNTYwLjY4OTE3NCwwbDguNTk2MTI1LC0yNC4xMjQ2MDh6bS03LjQ4Njk0NywtMzIwLjU1MjI2OGMwLC0zLjMyNzUzMiAtMTUuNTI4NDg0LC01MC43NDQ4NjYgLTIwLjc5NzA3NiwtNjMuNTAwNDA2Yy0xLjk0MTA2LC00LjcxNDAwNCAtMTYuOTE0OTU1LC00Ljk5MTI5OCAtMjU5LjI3MDIxNywtNC45OTEyOThjLTIwMi40MjQ4NzUsMCAtMjU3Ljg4Mzc0NSwwLjgzMTg4MyAtMjYwLjEwMjEsMy42MDQ4MjdjLTMuMzI3NTMyLDMuODgyMTIxIC0yMi43MzgxMzcsNTkuMDYzNjk2IC0yMi43MzgxMzcsNjQuNjA5NTgzYzAsMy4zMjc1MzIgNDEuODcxNDQ3LDMuODgyMTIxIDI4MS40NTM3NjUsMy44ODIxMjFjMjI5LjU5OTcyMSwwIDI4MS40NTM3NjUsLTAuNTU0NTg5IDI4MS40NTM3NjUsLTMuNjA0ODI3eiIvPgogICA8cGF0aCBzdHJva2U9Im51bGwiIGlkPSJzdmdfMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJtNTA1LjkwNDcwNiwzMjguNjMyMzYyYy00MC40ODQ5NzUsLTEyLjQ3ODI0NiAtMzEuNjExNTU2LC03Mi45Mjg0MTQgMTAuODE0NDgsLTcyLjkyODQxNGMxNC4xNDIwMTIsMCAyNC40MDE5MDMsNS44MjMxODEgMzEuODg4ODUsMTguMzAxNDI3YzE3LjE5MjI1LDI4LjAwNjcyOSAtMTAuODE0NDgsNjQuMDU0OTk1IC00Mi43MDMzMyw1NC42MjY5ODd6Ii8+CiAgIDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z18zIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Im0zMzMuNzA0OTE1LDI0OC40OTQyOTVjLTQ3LjQxNzMzNCwtMjEuOTA2MjU0IC00Ni4wMzA4NjIsLTkyLjMzOTAxOCAxLjk0MTA2LC0xMTIuMzA0MjExYzE0LjQxOTMwNiwtNi4xMDA0NzYgMzguODIxMjA5LC01LjU0NTg4NyA1MS41NzY3NDksMC44MzE4ODNjMjEuOTA2MjU0LDExLjM2OTA2OCAzNC4zODQ0OTksMzEuNjExNTU2IDM0LjM4NDQ5OSw1NS43MzYxNjRjMCwyNC4xMjQ2MDggLTEyLjQ3ODI0Niw0NC4zNjcwOTYgLTM0LjM4NDQ5OSw1NS43MzYxNjRjLTEzLjU4NzQyMyw2LjkzMjM1OSAtMzguNTQzOTE1LDYuOTMyMzU5IC01My41MTc4MDksMHoiLz4KICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzQiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0ibTQ4My40NDM4NjQsMTQwLjM0OTQ5OWMtMzQuNjYxNzk0LC0xNS41Mjg0ODQgLTQxLjMxNjg1OCwtNjAuMTcyODc0IC0xMi40NzgyNDYsLTg0LjU3NDc3N2M0MS4wMzk1NjQsLTM0LjM4NDQ5OSAxMDAuMzgwNTU0LDExLjY0NjM2MyA3Ny45MTk3MTIsNjAuNzI3NDYzYy02LjEwMDQ3NiwxMy4zMTAxMjkgLTEyLjIwMDk1MSwxOS4xMzMzMSAtMjYuMDY1NjY5LDI0Ljk1NjQ5MWMtMTMuMzEwMTI5LDUuNTQ1ODg3IC0yNS43ODgzNzQsNS4yNjg1OTMgLTM5LjM3NTc5OCwtMS4xMDkxNzd6Ii8+CiAgPC9nPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-index-js-0b37ef849aa3512a2b5a.js.map