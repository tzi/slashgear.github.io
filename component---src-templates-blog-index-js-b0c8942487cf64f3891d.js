(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6Gk8":function(e,t,n){"use strict";var a=n("dI71"),o=n("q1tI"),r=n.n(o),i=(n("tb+u"),n("GevN"),n("tmc/")),l=n.n(i),s=n("p3AD"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},r.a.createElement("img",{src:l.a,alt:"Antoine Caron",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),e)},t}(r.a.Component);t.a=c},"6zF5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),o=n.n(a),r=n("WAGf"),i=function(e){var t=e.posts,n=void 0===t?[]:t,a=e.siteUrl;return o.a.createElement(r.a,{content:{"@context":"https://schema.org","@type":"ItemList",itemListElement:n.map((function(e,t){return{"@type":"ListItem",position:t+1,url:""+a+e.node.fields.slug}}))}})}},GH6y:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("E9XD");var a=n("q1tI"),o=n.n(a),r=n("vOnD"),i=n("Wbzz"),l=r.a.footer.withConfig({displayName:"socials__Footer",componentId:"sc-932uha-0"})(["display:flex;justify-content:space-between;margin-top:4rem;"]),s={Github:"https://github.com/Slashgear",Twitter:"https://twitter.com/Slashgear_",LinkedIn:"https://www.linkedin.com/in/antoine-caron-7089788a",DevTo:"https://dev.to/slashgear_",Medium:"https://medium.com/@Slashgear_"},c=function(){return o.a.createElement(l,null,o.a.createElement("div",null,Object.keys(s).map((function(e){return o.a.createElement("a",{key:e,href:s[e]},e)})).reduce((function(e,t){return[e," • ",t]}))),o.a.createElement("div",null,o.a.createElement(i.Link,{to:"/rss.xml"},"RSS")))}},TshS:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),o=n("q1tI"),r=n.n(o),i=n("Wbzz"),l=n("mwIZ"),s=n.n(l),c=n("TJpk"),m=n.n(c),u=n("9eSz"),p=n.n(u),d=n("6Gk8"),f=n("Bl7J"),h=n("p3AD"),g=n("GH6y"),b=n("6zF5"),v=n("avl0"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this,t=s()(this,"props.data.config"),n=s()(this,"props.data.allMarkdownRemark.edges"),a=s()(t,"frontmatter.title"),o=s()(t,"frontmatter.description"),l=s()(t,"html"),c=this.props.pageContext.language;return r.a.createElement(f.a,{location:this.props.location,config:t},r.a.createElement(m.a,{htmlAttributes:{lang:c},meta:[{name:"description",content:o}],title:a}),r.a.createElement(b.a,{posts:n,siteUrl:this.props.data.site.siteMetadata.siteUrl}),r.a.createElement(d.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),r.a.createElement(v.a,{lang:c}),n.map((function(t){var n=t.node,a=s()(n,"frontmatter.title")||n.fields.slug;return r.a.createElement("div",{key:n.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(h.a)(1/4)}},r.a.createElement(i.Link,{style:{boxShadow:"none"},to:n.fields.slug},a)),r.a.createElement("small",null,r.a.createElement("time",{dateTime:n.frontmatter.dateJson},n.frontmatter.date)),r.a.createElement("small",{style:{margin:"0 1rem"}},r.a.createElement("span",{role:"img","aria-label":"Time to read"},"🕐"),n.timeToRead," min"),r.a.createElement("small",null,(n.frontmatter.tags||[]).map((function(t){return r.a.createElement(i.Link,{style:{marginRight:"0.5rem"},key:t,to:"/"+e.props.pageContext.language+"/"+t},"#",t)}))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.excerpt}}),n.frontmatter.hero&&r.a.createElement(p.a,{fluid:n.frontmatter.hero.childImageSharp.fluid,alt:n.frontmatter.title}))})),r.a.createElement(g.a,null))},t}(r.a.Component);t.default=y},avl0:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),o=n.n(a),r=n("vOnD"),i=n("Wbzz"),l=n("9eSz"),s=n.n(l),c=n("Kfvu"),m=Object(r.a)(s.a).withConfig({displayName:"fundationcomponent__Logo",componentId:"sc-1oj1f27-0"})(["flex-shrink:0;transition:filter 100ms ease-in-out;"]),u=r.a.div.withConfig({displayName:"fundationcomponent__TextWrapper",componentId:"sc-1oj1f27-1"})(["flex-grow:1;margin-left:1rem;"]),p=r.a.blockquote.withConfig({displayName:"fundationcomponent__Blocquote",componentId:"sc-1oj1f27-2"})(["border:none;"]),d=Object(r.a)(c.OutboundLink).withConfig({displayName:"fundationcomponent__Link",componentId:"sc-1oj1f27-3"})(["display:flex;color:var(--textNormal);box-shadow:none;&:hover,&:focus{","{filter:drop-shadow(5px 5px 3px white);}","{text-decoration:underline;}}"],m,u),f={fr:{text:"Si vous aimez le contenu de ce blog, ou bien qu'il vous a aidé, s'il vous plait, considérez donner à la fondation Abbé Pierre que je soutiens personnellement.",quote:"“On n’est jamais heureux que dans le bonheur qu’on donne. Donner, c’est recevoir.”"},en:{text:"If you like some content of this blog, or it has helped you, please consider donating to the Abbé Pierre Foundation which I personally support.",quote:'"We are only ever happy in the happiness we give. To give is to receive."'}},h=function(e){var t=e.lang,n=void 0===t?"en":t,a=Object(i.useStaticQuery)("62118570");return o.a.createElement(d,{target:"_blank",href:"https://www.fondation-abbe-pierre.fr/"},o.a.createElement(m,{fixed:a.img.childImageSharp.fixed,alt:"logo de la fondation abbé pierre"}),o.a.createElement(u,null,f[n].text,o.a.createElement("br",null),o.a.createElement(p,null,f[n].quote)))}},"tmc/":function(e,t,n){e.exports=n.p+"static/profile-pic-6015f9a66916f3d0b4678826cc46ec6c.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-b0c8942487cf64f3891d.js.map