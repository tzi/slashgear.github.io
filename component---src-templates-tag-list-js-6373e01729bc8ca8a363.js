(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"02V3":function(t){t.exports=JSON.parse('{"fr":{"tagList":{"description":"All blog post with the usage of this tag: ","title":"| Antoine Caron"}},"en":{"tagList":{"description":"Tous les articles de blog utilisant ce tag: ","title":"| Antoine Caron"}}}')},"6zF5":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=a("WAGf"),l=function(t){var e=t.posts,a=void 0===e?[]:e,n=t.siteUrl;return r.a.createElement(i.a,{content:{"@context":"https://schema.org","@type":"ItemList",itemListElement:a.map((function(t,e){return{"@type":"ListItem",position:e+1,url:""+n+t.node.fields.slug}}))}})}},GH6y:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("E9XD");var n=a("q1tI"),r=a.n(n),i=a("vOnD"),l=a("Wbzz"),o=i.a.footer.withConfig({displayName:"socials__Footer",componentId:"sc-932uha-0"})(["display:flex;justify-content:space-between;margin-top:4rem;"]),s={Github:"https://github.com/Slashgear",Twitter:"https://twitter.com/Slashgear_",LinkedIn:"https://www.linkedin.com/in/antoine-caron-7089788a",DevTo:"https://dev.to/slashgear_",Medium:"https://medium.com/@Slashgear_"},m=function(){return r.a.createElement(o,null,r.a.createElement("div",null,Object.keys(s).map((function(t){return r.a.createElement("a",{key:t,href:s[t]},t)})).reduce((function(t,e){return[t," • ",e]}))),r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/rss.xml"},"RSS")))}},HIEY:function(t,e,a){"use strict";a.r(e),a.d(e,"tagListFragment",(function(){return E}));var n=a("q1tI"),r=a.n(n),i=a("TJpk"),l=a.n(i),o=a("mwIZ"),s=a.n(o),m=a("Wbzz"),c=a("9eSz"),u=a.n(c),g=a("Bl7J"),d=a("p3AD"),p=a("GH6y"),f=a("6zF5"),h=a("02V3");e.default=function(t){var e=t.location,a=t.pageContext,n=t.data,i=s()(n,"allMarkdownRemark.edges");return r.a.createElement(g.a,{location:e,config:{fields:{slug:a.slug},frontmatter:{title:"#"+a.tag}}},r.a.createElement(l.a,{htmlAttributes:{lang:a.language},meta:[{name:"description",content:h[a.language].tagList.description+" "+a.tag}],title:a.tag.charAt(0).toUpperCase()+a.tag.slice(1)+" "+h[a.language].tagList.title}),r.a.createElement(f.a,{posts:i,siteUrl:n.site.siteMetadata.siteUrl}),i.map((function(t){var e=t.node,n=s()(e,"frontmatter.title")||e.fields.slug;return r.a.createElement("div",{key:e.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(d.a)(1/4)}},r.a.createElement(m.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),r.a.createElement("small",null,r.a.createElement("time",{dateTime:e.frontmatter.dateJson},e.frontmatter.date)),r.a.createElement("small",{style:{margin:"0 1rem"}},r.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),e.timeToRead," min"),r.a.createElement("small",null,(e.frontmatter.tags||[]).map((function(t){return r.a.createElement(m.Link,{style:{marginRight:"0.5rem"},key:t,to:"/"+a.language+"/"+t},"#",t)}))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}),e.frontmatter.hero&&r.a.createElement(u.a,{fluid:e.frontmatter.hero.childImageSharp.fluid,alt:e.frontmatter.title}))})),r.a.createElement(p.a,null))};var E="4257359640"}}]);
//# sourceMappingURL=component---src-templates-tag-list-js-6373e01729bc8ca8a363.js.map