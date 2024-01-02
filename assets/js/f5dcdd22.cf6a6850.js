"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[5614],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7625:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={title:"GDScript vs C# in Godot 4",description:"Deep-dive into the advantages and disadvantages of GDScript and C#, as well as tips on how to choose one \u2014 or use them both!",image:"./header.jpg",slug:"gdscript-vs-csharp",keywords:["Godot","game engine","GDScript","C#","programming language","game development","indie game development","scripting","performance optimization","syntax comparison","cross-platform","community support","tutorials","comparison","pros and cons","game engine features","2D game development","3D game development","game development tips","game design","game programming","game publishing"],authors:["joanna"]},i=void 0,s={permalink:"/blog/gdscript-vs-csharp",source:"@site/blog/2023-04-26-gdscript-vs-csharp/index.md",title:"GDScript vs C# in Godot 4",description:"Deep-dive into the advantages and disadvantages of GDScript and C#, as well as tips on how to choose one \u2014 or use them both!",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[],readingTime:9.435,hasTruncateMarker:!0,authors:[{name:"Joanna",title:"Founder @ Chickensoft",url:"/authors/joanna",imageURL:"/img/authors/joanna.jpg",key:"joanna"}],frontMatter:{title:"GDScript vs C# in Godot 4",description:"Deep-dive into the advantages and disadvantages of GDScript and C#, as well as tips on how to choose one \u2014 or use them both!",image:"./header.jpg",slug:"gdscript-vs-csharp",keywords:["Godot","game engine","GDScript","C#","programming language","game development","indie game development","scripting","performance optimization","syntax comparison","cross-platform","community support","tutorials","comparison","pros and cons","game engine features","2D game development","3D game development","game development tips","game design","game programming","game publishing"],authors:["joanna"]},prevItem:{title:"Can Godot Deliver?",permalink:"/blog/godot-delivers"},nextItem:{title:"Godot and C#: A Viable Unity Alternative",permalink:"/blog/godot-unity-alternative"}},l={image:o(4123).Z,authorsImageUrls:[void 0]},p=[{value:"\ud83e\udd16 GDScript",id:"-gdscript",level:2},{value:"\u2600\ufe0f GDScript Pros",id:"\ufe0f-gdscript-pros",level:3},{value:"\ud83c\udf27 GDScript Cons",id:"-gdscript-cons",level:3},{value:"#\ufe0f\u20e3 C#",id:"\ufe0f\u20e3-c",level:2},{value:"\ud83c\udf27 C# Cons",id:"-c-cons",level:3},{value:"\u2600\ufe0f C# Pros",id:"\ufe0f-c-pros",level:3},{value:"\ud83c\udf9f Free Stuff",id:"-free-stuff",level:3},{value:"\ud83d\ude05 Afraid of Commitment?",id:"-afraid-of-commitment",level:2},{value:"\ud83c\udf81 Wrapping Up",id:"-wrapping-up",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("FancyImage"),u=c("BlogDiscordInvite"),m={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d,{src:o(4879).Z,alt:"Godot allows you to use two incredible languages to build games, right out of the box. But how do you know which one to use?",mdxType:"FancyImage"}),(0,n.kt)("p",null,'Almost every day, someone asks "Should I use GDScript or C# to make my Godot game?"'),(0,n.kt)("p",null,"A lot of amazing advice has been given out on the Godot Reddit, the forums, various Discord servers, and just about anywhere people are talking about Godot \u2014 so let's write it up, once and for all!"),(0,n.kt)("p",null,"In this article, we\u2019ll take a deep dive into the advantages and disadvantages of GDScript and C# in Godot 4.x, as well as tips on how to choose one \u2014 or use them both!"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In case you don't have time to read all this, here's why you might pick GDScript:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u2705 You're new to coding or you're a casual hobbyist."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You're an expert who doesn't mind dynamic types."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You want seamless engine integration and native extension support."),(0,n.kt)("li",{parentName:"ul"},"\u2705 Performance isn't a major concern (it usually isn't for game scripts)."),(0,n.kt)("li",{parentName:"ul"},"\u2705 No fighting with tooling. Write your code inside the engine itself!")),(0,n.kt)("p",{parentName:"admonition"},"On the other hand, here's some reasons why you might choose C#:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u2705 You have experience with managed languages such as Java, Go, or Dart."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You already know C#, perhaps from using Unity previously or writing enterprise applications."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You prefer static typing."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You prefer curly braces over whitespace-delimited syntax."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You need access to mature developer tooling: linting, custom analyzers, and source generation."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You want additional performance without resorting to a systems language."),(0,n.kt)("li",{parentName:"ul"},"\u2705 You need access to the vast library of .NET packages."),(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f You don't need to export to iOS or web \u2014\xa0yet. ",(0,n.kt)("a",{parentName:"li",href:"https://godotengine.org/article/dev-snapshot-godot-4-2-dev-3/"},"While C# Android export is being tested")," in the latest releases, support for exporting to iOS and web are still planned for future releases. You can ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/godotengine/godot/issues/68153#issuecomment-1299672279"},"track the progress here"),"."),(0,n.kt)("li",{parentName:"ul"},"\u274c You don't need to integrate with any GDExtensions. Currently, Godot does not generate C# bindings for GDExtensions, meaning you cannot call a GDExtension from C#. You can work around this by calling into GDScript from C# if you are willing to incur the performance penalty."))),(0,n.kt)("h2",{id:"-gdscript"},"\ud83e\udd16 GDScript"),(0,n.kt)("p",null,"As you likely know, Godot provides its own high-level, dynamically typed programming language called GDScript. While GDScript often gets compared to Python, I find the syntax to be even friendlier, with ",(0,n.kt)("a",{parentName:"p",href:"https://godotengine.org/article/gdscript-progress-report-feature-complete-40/#typed-arrays"},"optional type hints")," that are also reminiscent of TypeScript or Swift."),(0,n.kt)(d,{src:o(9925).Z,alt:"GDScript code inside the Godot Engine editor.",mdxType:"FancyImage"},"The Godot Engine will provide this script as a starting point for all ",(0,n.kt)("code",null,"CharacterBody3D")," nodes."),(0,n.kt)("p",null,"For quick prototypes and experiments, I will often just throw together a quick script using GDScript (or hack away on someone else's) until I get what I want. In almost every case, it is simply easier and faster to use GDScript."),(0,n.kt)("p",null,"If you happen to be handy with C++ or Rust, you can create a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/what_is_gdextension.html"},"GDExtension")," for just about anything you can't do in GDScript (or that would be too slow to do in GDScript). Godot will generate bindings for extensions, allowing you to call your extension code from GDScript with no additional work. Pretty magical!"),(0,n.kt)("p",null,"To sweeten the deal further, ",(0,n.kt)("a",{parentName:"p",href:"https://gdscript.com/articles/godot-4-gdscript/"},"Godot 4 has drastically improved GDScript"),": it's ",(0,n.kt)("a",{parentName:"p",href:"https://godotengine.org/article/gdscript-progress-report-typed-instructions/#how-faster-is-it"},"considerably faster"),", can ",(0,n.kt)("a",{parentName:"p",href:"https://godotengine.org/article/dev-snapshot-godot-4-0-beta-6/"},"handle circular/cyclic dependencies"),", and supports ",(0,n.kt)("a",{parentName:"p",href:"https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#lambda-functions"},"lambda functions"),". On top of all that, just about every tutorial or video you watch regarding Godot uses GDScript."),(0,n.kt)("p",null,"If you're not sold yet, there probably isn't anything else I can say to get you to use it."),(0,n.kt)("h3",{id:"\ufe0f-gdscript-pros"},"\u2600\ufe0f GDScript Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 Incredibly easy to learn and well supported."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd1d Many large, friendly communities that provide hands-on support."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcda Tons of tutorials and videos."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd73 Supports every platform Godot supports."),(0,n.kt)("li",{parentName:"ul"},"\u2728 Always up-to-date with the latest Godot features."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0c Perfect native extension integration."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\ude9b Tooling support \u2014 you can write GDScript directly inside the Godot Engine's editor, or use the ",(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools"},"official VSCode extension"),". You can even get a ",(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Razoric.gdscript-toolkit-formatter"},"VSCode extension for formatting")," your GDScript files, too.")),(0,n.kt)("h3",{id:"-gdscript-cons"},"\ud83c\udf27 GDScript Cons"),(0,n.kt)("p",null,"So what's the catch with GDScript? Not much, really, but I'll list a few considerations to be aware of here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca8 Not necessarily as performant as C#. There is a performance penalty when calling into the Godot engine from C# due to marshalling, but C# itself tends to execute considerably faster than GDScript."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd12 Any code written in GDScript is completely specific to the Godot engine. This is usually not a problem for game scripts (since they are not very portable by nature), but it's worth mentioning."),(0,n.kt)("li",{parentName:"ul"},"\u2b1c\ufe0f Whitespace-delimited syntax. If you can't stand Python or just strongly prefer curly braces, no amount of GDScript will ever soothe your soul. Likewise, if you love whitespace-delimited syntax, you'll feel right at home."),(0,n.kt)("li",{parentName:"ul"},"\u26a1\ufe0f Not statically typed. While you can specify type hints to help with error-checking, they are optional at best. For some, this is an advantage. For others, the lack of enforced static typing presents a headache.")),(0,n.kt)("p",null,"For the majority of game developers I've spoken to, none of those are typically deal-breakers. GDScript has a cult following for a reason: it's ",(0,n.kt)("em",{parentName:"p"},"really"),", ",(0,n.kt)("em",{parentName:"p"},"really")," great. Now that you know its strengths and weaknesses, you can feel confident choosing it."),(0,n.kt)("p",null,"Still not convinced? Let's talk about C#."),(0,n.kt)("h2",{id:"\ufe0f\u20e3-c"},"#\ufe0f\u20e3 C","#"),(0,n.kt)("p",null,"While not as popular as GDScript, ",(0,n.kt)("a",{parentName:"p",href:"https://godotengine.org/article/whats-new-in-csharp-for-godot-4-0/"},"C# support in Godot has come a long ways"),". Out of the approximately 5,000 surveyed users, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSe-OIpxXqou9cDnPXEAjxzpICbf8_YZB3jUizdECXRydtB8cA/viewanalytics"},"only about 13%")," said they were using C# to build Godot games."),(0,n.kt)(d,{src:o(5814).Z,alt:"C# script for a Godot node.",mdxType:"FancyImage"},"C# code for an editor tool that helps visualize a ",(0,n.kt)("code",null,"RayCast3D"),"."),(0,n.kt)("h3",{id:"-c-cons"},"\ud83c\udf27 C# Cons"),(0,n.kt)("p",null,"Before we get too far, it's worth reiterating a couple of points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u274c Godot can't export C# games for iOS or web."),(0,n.kt)("li",{parentName:"ul"},"\u274c You cannot call GDExtensions directly from C#.")),(0,n.kt)("p",null,"If either of those are an immediate must-have for your project, you should ",(0,n.kt)("strong",{parentName:"p"},"not")," use C#. Unless you are optimistic and believe those shortcomings will be addressed by the time your project requires them, you should use GDScript or a third party language integration instead."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"C# is incredibly powerful and allows you to tap into the massive .NET ecosystem of packages and tools, but it comes at a cost. If you're up for an adventure, don't mind a challenge, and can live with the drawbacks mentioned above, C# might be an excellent fit for your project.")),(0,n.kt)("h3",{id:"\ufe0f-c-pros"},"\u2600\ufe0f C# Pros"),(0,n.kt)("p",null,"Because C# is a general-purpose programming language that first appeared 23 years ago, it is hard to fully extol its virtues. In the interest of time, I'll list a few positives within the context of Godot game development:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude80 C# is a well-established language with the full weight of Microsoft behind it. If you've ever used Java or Dart, you'll also feel right at home."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee0 Incredible tooling support. Want to create a custom analyzer with an automatic fix? A source generator? A template project? You can do that."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\uddd1\u200d\ud83d\udcbb Choice of IDE's: You can use ",(0,n.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual Studio"),", ",(0,n.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"JetBrains Rider"),", or ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce6 The entire .NET package ecosystem. If there's a nuget package that solves your problem, you can probably use it."),(0,n.kt)("li",{parentName:"ul"},"\ud83e\udd1d There's an extremely helpful C# channel in the official ",(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/4JBkykG"},"Godot Discord"),"."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc24 We have a Chickensoft Discord server dedicated to supporting the Godot C# community. If you run into questions or just want to talk, feel free to stop by and say hello!")),(0,n.kt)(u,{mdxType:"BlogDiscordInvite"}),(0,n.kt)("h3",{id:"-free-stuff"},"\ud83c\udf9f Free Stuff"),(0,n.kt)("p",null,"While there aren't many Godot addons created with C#, ",(0,n.kt)("a",{parentName:"p",href:"/"},"Chickensoft")," provides a number of well-tested packages to help you get started. Each project began as a piece of my own personal game project before being broken into separate packages to share with the community. Each project is fully tested and has 100% code coverage (for my own peace of mind)."),(0,n.kt)("p",null,"Want to quickly create a Godot game with basic CI/CD and unit testing already setup? Use our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotGame"},(0,n.kt)("inlineCode",{parentName:"a"},"dotnet new")," template")," for creating a game. We have ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotPackage"},"a package template")," for creating nuget packages for use with Godot, too."),(0,n.kt)("p",null,"Need to inject code into lifecycle methods in your scripts automatically? We have a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/SuperNodes"},"source generator")," for that. How about automatic, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/AutoInject"},"node-based dependency injection"),"?"),(0,n.kt)("p",null,"We even have our own command line tool, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotEnv"},"GodotEnv"),", that will automatically manage Godot addons for your project based on an ",(0,n.kt)("inlineCode",{parentName:"p"},"addons.json")," file and let you symlink addons locally while they're in development. No more git submodules for addons!"),(0,n.kt)(d,{src:o(8145).Z,alt:"Chickensoft's package offerings",mdxType:"FancyImage"},"Chickensoft's package offerings as of April 2023."),(0,n.kt)("p",null,"If you'd like to use Godot from a GitHub actions workflow, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/setup-godot"},"setup-godot")," to run Godot directly on a macOS, Windows, or Linux runner."),(0,n.kt)("p",null,"We also have packages for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GoDotTest"},"running tests inside Godot"),", creating basic ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GoDotNet"},"state machines")," in C#, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GoDotLog"},"logging"),", and a handful of other things."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Chickensoft is an open source organization \u2014 all of our offerings are ",(0,n.kt)("em",{parentName:"p"},"free"),". We welcome contributions and feedback from the community!")),(0,n.kt)("h2",{id:"-afraid-of-commitment"},"\ud83d\ude05 Afraid of Commitment?"),(0,n.kt)("p",null,"Since you can mix and match C# and GDScript in the same project, you only have to choose which language you want to use for the ",(0,n.kt)("em",{parentName:"p"},"majority")," of your project."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Since most of the existing Godot addons are written with GDScript, it's unlikely you'd need to call into C# from GDScript if you picked GDScript for your scripting language.")),(0,n.kt)("p",null,"If you happened to have chosen C# as your primary scripting language, you may need to be able to call into GDScript occasionally from C# since it is impractical to rewrite every addon you might need in C#. While this probably isn't as efficient as keeping everything in one language, it can really help in a pinch."),(0,n.kt)("p",null,"So, if you hate committing to a single language, why not have both",(0,n.kt)("sup",{parentName:"p",id:"fnref-1-1b5a27"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1-1b5a27",className:"footnote-ref"},"1")),"? The Godot documentation discusses ",(0,n.kt)("a",{parentName:"p",href:"https://docs.godotengine.org/en/stable/tutorials/scripting/cross_language_scripting.html"},"how to bridge between C# and GDScript"),"."),(0,n.kt)("h2",{id:"-wrapping-up"},"\ud83c\udf81 Wrapping Up"),(0,n.kt)("p",null,"Even though Chickensoft is dedicated to the C# Godot community, C# isn't necessarily the correct choice for every Godot game. For most people, GDScript is probably the best choice."),(0,n.kt)("p",null,"I like to think that if you need (or want) to use C#, you already know that deep down inside."),(0,n.kt)("p",null,"Ultimately, if you decide to embark on an adventure and use C# for your next Godot game, we're happy to lend a hand and cheer you on in the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/gSjaPgMmYW"},"Chickensoft Discord"),". Either way, we wish you the best of luck and we hope to hear from you! \ud83d\ude00"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you're interested in what I'm up to, you are more than welcome to ",(0,n.kt)("a",{parentName:"p",href:"https://mastodon.online/@jolexxa"},"follow me on Mastodon")," or ",(0,n.kt)("a",{parentName:"p",href:"https://discordapp.com/users/jolexxa#4292"},"reach out to me on Discord"),".")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1-1b5a27"},"Practically speaking, there are very good reasons to keep the majority of your codebase in a single language: consistency, ease of refactoring, lowering the barrier to ramp up contributors, etc.",(0,n.kt)("a",{parentName:"li",href:"#fnref-1-1b5a27",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},5814:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/csharp-29bbb32ea6cfd0a1c9e629f6f9b12c93.jpg"},9925:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/gdscript-831b1ed3fbd1b289c088668ab59af206.jpg"},4879:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/header-21c88cc459ceb56203dc02f13843129f.jpg"},8145:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/packages-3c75742dc012cf97c2da1cc1da8d9f4c.jpg"},4123:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/header-21c88cc459ceb56203dc02f13843129f.jpg"}}]);