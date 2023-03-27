"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\ud83d\udce6 Installation",image:"./header.jpg"},i=void 0,s={unversionedId:"super_nodes/installation",id:"super_nodes/installation",title:"\ud83d\udce6 Installation",description:"Find the latest version on Nuget! Note the version number and add the following to your project's .csproj file, replacing  with whatever compatible version you need from Nuget.",source:"@site/docs/super_nodes/01_installation.md",sourceDirName:"super_nodes",slug:"/super_nodes/installation",permalink:"/docs/super_nodes/installation",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/super_nodes/01_installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udce6 Installation",image:"./header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd2e SuperNodes",permalink:"/docs/super_nodes/"},next:{title:"\ud83e\udd16 Source Generators",permalink:"/docs/super_nodes/source_generators"}},l={image:n(4467).Z},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Find the latest version on ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Chickensoft.SuperNodes/"},"Nuget"),"! Note the version number and add the following to your project's ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"{VERSION}")," with whatever compatible version you need from Nuget."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<ItemGroup>\n  \x3c!-- Include SuperNodes as a Source Generator --\x3e\n  <PackageReference Include="Chickensoft.SuperNodes" Version="{VERSION}" PrivateAssets="all" OutputItemType="analyzer" />\n\n  \x3c!-- Type definitions and attributes used by SuperNodes. --\x3e\n  \x3c!-- By convention, version will be the same as the generator itself. --\x3e\n  <PackageReference Include="Chickensoft.SuperNodes.Types" Version="{VERSION}" />\n</ItemGroup>\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Because SuperNodes is a source generator, you have to include the ",(0,o.kt)("inlineCode",{parentName:"p"},'PrivateAssets="all" OutputItemType="analyzer"')," to tell the build system how to use it.")),(0,o.kt)("p",null,"Your node scripts are now ready to be supercharged! In the next section, we'll begin explaining how to take advantage of the features SuperNodes provides."))}u.isMDXComponent=!0},4467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/header-bbf251851f04eefa5fd63323124240f2.jpg"}}]);