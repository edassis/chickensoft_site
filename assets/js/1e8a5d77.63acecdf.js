"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[5613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"\ud83d\udd75\ufe0f Static Reflection",image:"./header.jpg"},o=void 0,s={unversionedId:"super_nodes/static_reflection",id:"super_nodes/static_reflection",title:"\ud83d\udd75\ufe0f Static Reflection",description:'At compile-time, SuperNodes will generate information about the properties and fields in a SuperNode script, as well as any properties or fields that have been added by PowerUps. These "static reflection" tables can be read by the SuperNode (or even an external assembly), allowing you to inspect the structure of a SuperNode at runtime without using expensive C# reflection calls!',source:"@site/docs/super_nodes/03_static_reflection.md",sourceDirName:"super_nodes",slug:"/super_nodes/static_reflection",permalink:"/docs/super_nodes/static_reflection",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/super_nodes/03_static_reflection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udd75\ufe0f Static Reflection",image:"./header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 Source Generators",permalink:"/docs/super_nodes/source_generators"},next:{title:"\ud83d\udd04 Lifecycle Handlers",permalink:"/docs/super_nodes/lifecycle-handlers"}},p={image:n(4467).Z},l=[{value:"\ud83d\udcca Static Reflection Tables",id:"-static-reflection-tables",level:2},{value:"\ud83c\udfab Available Information",id:"-available-information",level:2},{value:"\ud83e\uddd0 Introspection",id:"-introspection",level:2},{value:"\ud83d\udcdc SuperNode Introspection",id:"-supernode-introspection",level:3},{value:"\ud83d\udd0b PowerUp Introspection",id:"-powerup-introspection",level:3},{value:"\ud83d\udce6 Cross-Assembly Introspection",id:"-cross-assembly-introspection",level:3}],c=(d="Details",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'At compile-time, SuperNodes will generate information about the properties and fields in a SuperNode script, as well as any properties or fields that have been added by PowerUps. These "static reflection" tables can be read by the SuperNode (or even an external assembly), allowing you to inspect the structure of a SuperNode at runtime ',(0,i.kt)("em",{parentName:"p"},"without")," using expensive C# reflection calls!"),(0,i.kt)("h2",{id:"-static-reflection-tables"},"\ud83d\udcca Static Reflection Tables"),(0,i.kt)("p",null,"Below is an example SuperNode with an applied PowerUp."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AdvancedReflection;\n\nusing System;\nusing Godot;\nusing SuperNodes.Types;\n\n[SuperNode(typeof(MyPowerUp))]\npublic partial class MySuperNode : Node2D {\n  public override partial void _Notification(int what);\n\n  [Export(PropertyHint.Range, "0, 100")]\n  public int Probability { get; set; } = 50;\n}\n\n[PowerUp]\npublic partial class MyPowerUp : Node2D {\n  [Obsolete("MyName is obsolete \u2014 please use Identifier instead.")]\n  public string MyName { get; set; } = nameof(MyPowerUp);\n\n  public string Identifier { get; set; } = nameof(MyPowerUp);\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MySuperNode")," script has a property that it exports to the Godot editor, ",(0,i.kt)("inlineCode",{parentName:"p"},"Probability"),". Because it also applies ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPowerUp"),", the SuperNode ends up gaining two additional properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"MyName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier"),"."),(0,i.kt)("p",null,"At compile-time, SuperNodes will ",(0,i.kt)("a",{parentName:"p",href:"./#-beneath-the-magic"},"generate")," the following static reflection implementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"MySuperNode"),". The generated implementation includes the table of properties, their attributes, types, visibility, mutability information, and methods to get and set the values of those properties."),(0,i.kt)(c,{summary:(0,i.kt)("summary",null,(0,i.kt)("code",null,"StaticReflectionExample.MySuperNode_Reflection.g.cs")),mdxType:"Details"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'#nullable enable\nusing System;\nusing System.Collections.Generic;\nusing System.Collections.Immutable;\nusing Godot;\nusing SuperNodes.Types;\n\nnamespace StaticReflectionExample {\n  partial class MySuperNode : ISuperNode {\n    public ImmutableDictionary<string, ScriptPropertyOrField> PropertiesAndFields\n      => ScriptPropertiesAndFields;\n\n    public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }\n      = new Dictionary<string, ScriptPropertyOrField>() {\n      ["Identifier"] = new ScriptPropertyOrField(\n        Name: "Identifier",\n        Type: typeof(string),\n        IsField: false,\n        IsMutable: true,\n        IsReadable: true,\n        ImmutableDictionary<string, ImmutableArray<ScriptAttributeDescription>>.Empty\n      ),\n      ["MyName"] = new ScriptPropertyOrField(\n        Name: "MyName",\n        Type: typeof(string),\n        IsField: false,\n        IsMutable: true,\n        IsReadable: true,\n        new Dictionary<string, ImmutableArray<ScriptAttributeDescription>>() {\n          ["global::System.ObsoleteAttribute"] = new ScriptAttributeDescription[] {\n            new ScriptAttributeDescription(\n              Name: "ObsoleteAttribute",\n              Type: typeof(global::System.ObsoleteAttribute),\n              ArgumentExpressions: new dynamic[] {\n                "MyName is obsolete \u2014 please use Identifier instead.",\n              }.ToImmutableArray()\n            )\n          }.ToImmutableArray()\n        }.ToImmutableDictionary()\n      ),\n      ["Probability"] = new ScriptPropertyOrField(\n        Name: "Probability",\n        Type: typeof(int),\n        IsField: false,\n        IsMutable: true,\n        IsReadable: true,\n        new Dictionary<string, ImmutableArray<ScriptAttributeDescription>>() {\n          ["global::Godot.ExportAttribute"] = new ScriptAttributeDescription[] {\n            new ScriptAttributeDescription(\n              Name: "ExportAttribute",\n              Type: typeof(global::Godot.ExportAttribute),\n              ArgumentExpressions: new dynamic[] {\n                Godot.PropertyHint.Range, "0, 100",\n              }.ToImmutableArray()\n            )\n          }.ToImmutableArray()\n        }.ToImmutableDictionary()\n      )\n      }.ToImmutableDictionary();\n\n    public TResult GetScriptPropertyOrFieldType<TResult>(\n      string scriptProperty, ITypeReceiver<TResult> receiver\n    ) => ReceiveScriptPropertyOrFieldType(scriptProperty, receiver);\n\n    public static TResult ReceiveScriptPropertyOrFieldType<TResult>(\n      string scriptProperty, ITypeReceiver<TResult> receiver\n    ) {\n      switch (scriptProperty) {\n        case "Identifier":\n          return receiver.Receive<string>();\n        case "MyName":\n          return receiver.Receive<string>();\n        case "Probability":\n          return receiver.Receive<int>();\n        default:\n          throw new System.ArgumentException(\n            $"No field or property named \'{scriptProperty}\' was found on MySuperNode."\n          );\n      }\n    }\n\n    public dynamic GetScriptPropertyOrField(string scriptProperty) {\n      switch (scriptProperty) {\n        case "Identifier":\n          return Identifier;\n        case "MyName":\n          return MyName;\n        case "Probability":\n          return Probability;\n        default:\n          throw new System.ArgumentException(\n            $"No field or property named \'{scriptProperty}\' was found on MySuperNode."\n          );\n      }\n    }\n\n    public void SetScriptPropertyOrField(string scriptProperty, dynamic value) {\n      switch (scriptProperty) {\n        case "Identifier":\n          Identifier = value;\n          break;\n        case "MyName":\n          MyName = value;\n          break;\n        case "Probability":\n          Probability = value;\n          break;\n        default:\n          throw new System.ArgumentException(\n            $"No field or property named \'{scriptProperty}\' was found on MySuperNode."\n          );\n      }\n    }\n  }\n}\n#nullable disable\n'))),(0,i.kt)("h2",{id:"-available-information"},"\ud83c\udfab Available Information"),(0,i.kt)("p",null,"That was a lot of generated code to look at all at once. Let's take a closer look at what's happening!"),(0,i.kt)("p",null,"SuperNodes generates a static property on each SuperNode class called ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertiesAndFields"),". It also generates an instance member, ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertiesAndFields")," that just returns the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertiesAndFields"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"    public ImmutableDictionary<string, ScriptPropertyOrField> PropertiesAndFields\n      => ScriptPropertiesAndFields;\n\n    public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }\n      = new Dictionary<string, ScriptPropertyOrField>() {\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertiesAndFields")," instance property makes it easier for outside objects classes to access static information about a particular instance's class.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertiesAndFields")," is just a mapping of property and field names found in the SuperNode class (and any of its applied PowerUps) to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertyOrField")," object."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperNodes.Types")," package has to be included in each project that wants to use SuperNodes, as well as in any assemblies that want to leverage SuperNodes' static reflection capabilities. If the models were injected rather than shared in a package, each assembly would have its own copy of the models which would make cross-assembly static reflection more difficult."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"./installation"},"installation")," for information about how to setup SuperNodes and its runtime types.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertyOrField")," model contains information about whether the member is a property or field, its mutability and readability, as well as a dictionary of attributes that are applied to the member."),(0,i.kt)("p",null,"Here's a closer look at the information provided about the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyName")," property from ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPowerUp")," that has an ",(0,i.kt)("inlineCode",{parentName:"p"},"[Obsolete]")," attribute on it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// ...\npublic static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }\n  = new Dictionary<string, ScriptPropertyOrField>() {\n  // ...\n  ["MyName"] = new ScriptPropertyOrField(\n    Name: "MyName",\n    Type: typeof(string),\n    IsField: false,\n    IsMutable: true,\n    IsReadable: true,\n    new Dictionary<string, ImmutableArray<ScriptAttributeDescription>>() {\n      ["global::System.ObsoleteAttribute"] = new ScriptAttributeDescription[] {\n        new ScriptAttributeDescription(\n          Name: "ObsoleteAttribute",\n          Type: typeof(global::System.ObsoleteAttribute),\n          ArgumentExpressions: new dynamic[] {\n            "MyName is obsolete \u2014 please use Identifier instead.",\n          }.ToImmutableArray()\n        )\n      }.ToImmutableArray()\n    }.ToImmutableDictionary()\n  ),\n  // ...\n')),(0,i.kt)("p",null,"The attributes dictionary is a map of the attribute's full type name to an array of attribute descriptions, since some attributes ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.attributeusageattribute.allowmultiple"},"allow multiples of the same type to be applied"),"."),(0,i.kt)("p",null,"Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertyOrField")," model, each ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptAttributeDescription")," model contains information about the attribute's friendly name, type, and the arguments passed to the attribute's constructor. Since these arguments are C# constants, they are able to provided in an immutable, dynamic array."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you aren't super familiar with dynamic types, you can read more about them ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/interop/using-type-dynamic"},"here"),".")),(0,i.kt)("h2",{id:"-introspection"},"\ud83e\uddd0 Introspection"),(0,i.kt)("p",null,"Using the generated reflection utilities, we can manipulate the properties and fields of a SuperNode anywhere in our codebase."),(0,i.kt)("h3",{id:"-supernode-introspection"},"\ud83d\udcdc SuperNode Introspection"),(0,i.kt)("p",null,"Inside a script, you can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertiesAndFields")," dictionary to get information about a particular property or field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[SuperNode(typeof(MyPowerUp))]\npublic partial class MySuperNode : Node2D {\n  public override partial void _Notification(int what);\n\n  [Export(PropertyHint.Range, "0, 100")]\n  public int Probability { get; set; } = 50;\n\n  public void OnReady() {\n    foreach (var property in PropertiesAndFields.Keys) {\n      GD.Print($"{property} = {GetScriptPropertyOrField(property)}");\n    }\n    // Change probability to 100\n    SetScriptPropertyOrField("Probability", 100);\n  }\n}\n')),(0,i.kt)("h3",{id:"-powerup-introspection"},"\ud83d\udd0b PowerUp Introspection"),(0,i.kt)("p",null,"Inside a PowerUp, you can also access the generated reflection tables ",(0,i.kt)("em",{parentName:"p"},"if")," (and only if) you declare stubs for them. You can mark the stubs with the ",(0,i.kt)("inlineCode",{parentName:"p"},"[PowerUpIgnore]")," attribute to prevent them from being copied over into a SuperNode implementation and causing duplicate definition errors."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The easiest way to declare stubs for the generated reflection tables is to mark your PowerUp class as ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[PowerUp]\npublic abstract partial class MyPowerUp : Node2D {\n  [Obsolete("MyName is obsolete \u2014 please use Identifier instead.")]\n  public string MyName { get; set; } = nameof(MyPowerUp);\n\n  public string Identifier { get; set; } = nameof(MyPowerUp);\n\n  #region StaticReflectionStubs\n\n  [PowerUpIgnore]\n  public abstract ImmutableDictionary<string, ScriptPropertyOrField> PropertiesAndFields { get; }\n\n  [PowerUpIgnore]\n  public abstract dynamic GetScriptPropertyOrField(string name);\n\n  [PowerUpIgnore]\n  public abstract void SetScriptPropertyOrField(string name, dynamic value);\n\n  #endregion StaticReflectionStubs\n\n  [PowerUpIgnore]\n\n  public void OnMyPowerUp(int what) {\n    foreach (var property in PropertiesAndFields.Keys) {\n      GD.Print($"{property} = {GetScriptPropertyOrField(property)}");\n    }\n    // Change identifier\n    SetScriptPropertyOrField("Identifier", "AnotherIdentifier");\n  }\n}\n')),(0,i.kt)("h3",{id:"-cross-assembly-introspection"},"\ud83d\udce6 Cross-Assembly Introspection"),(0,i.kt)("p",null,"If you're writing code in another assembly that wants to load code from an assembly that uses SuperNodes, you can access the publicly generated static reflection utilities the same as if you were inside the codebase."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using AnAssemblyUsingSuperNodes;\nusing SuperNodes.Types;\n\npublic static void Main() {\n  var mySuperNode = new MySuperNode();\n  var properties = mySuperNode.PropertiesAndFields.Keys;\n\n  // ...\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're importing multiple assemblies that use SuperNodes and want to store references to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptPropertyOrField")," objects, you can include the ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperNodes.Types")," package in your project so that each assembly shares the same definition of the reflection models.")))}m.isMDXComponent=!0},4467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/header-bbf251851f04eefa5fd63323124240f2.jpg"}}]);