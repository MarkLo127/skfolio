"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8178],{98178:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var n=o(86883),a=o(56165),i=o(35436),r=o(85421),d=o(89488),l=o(49358),s=o(50881),c=o(42628),p=o(20457),u=o(49255),g=o(91857),m=o(25199),h=o(20998),b=o(2549),f=o(9267);const v=new RegExp("/(notebooks|edit)/(.*)"),k=/\.ipynb$/;var y;!function(e){e.handleLink="application:handle-local-link",e.toggleTop="application:toggle-top",e.togglePanel="application:toggle-panel",e.toggleZen="application:toggle-zen",e.openLab="application:open-lab",e.openTree="application:open-tree",e.rename="application:rename",e.resolveTree="application:resolve-tree"}(y||(y={}));const w={id:"@jupyter-notebook/application-extension:dirty",autoStart:!0,requires:[n.ILabStatus,u.ITranslator],activate:(e,t,o)=>{if(!(e instanceof g.NotebookApp))throw new Error(`${w.id} must be activated in Jupyter Notebook.`);const n=o.load("notebook").__("Are you sure you want to exit Jupyter Notebook?\n\nAny unsaved changes will be lost.");window.addEventListener("beforeunload",(t=>{if(e.status.isDirty)return t.returnValue=n}))}},x={id:"@jupyter-notebook/application-extension:logo",autoStart:!0,activate:e=>{const t=r.PageConfig.getBaseUrl(),o=document.createElement("a");o.href=`${t}tree`,o.target="_blank",o.rel="noopener noreferrer";const n=new f.Widget({node:o});m.jupyterIcon.element({container:o,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto",cursor:"pointer",margin:"auto"}),n.id="jp-NotebookLogo",e.shell.add(n,"top",{rank:0})}},I={id:"@jupyter-notebook/application-extension:opener",autoStart:!0,requires:[n.IRouter,d.IDocumentManager],optional:[p.ISettingRegistry],activate:(e,t,o,n)=>{const{commands:a,docRegistry:i}=e,r="router:tree";a.addCommand(r,{execute:t=>{var a;const r=t,d=null!==(a=r.path.match(v))&&void 0!==a?a:[],[,,l]=d;l&&e.started.then((async()=>{var e;const t=decodeURIComponent(l),a=new URLSearchParams(r.search);let d=i.defaultWidgetFactory(l).name;if(n){const e=(await n.load("@jupyterlab/docmanager-extension:plugin")).get("defaultViewers").composite;i.getFileTypesForPath(l).forEach((t=>{void 0!==e[t.name]&&i.getWidgetFactory(e[t.name])&&(d=e[t.name])}))}const s=null!==(e=a.get("factory"))&&void 0!==e?e:d;o.open(t,s,void 0,{ref:"_noref"})}))}}),t.register({command:r,pattern:v})}},P={id:"@jupyter-notebook/application-extension:menus",requires:[s.IMainMenu],autoStart:!0,activate:(e,t)=>{switch(t.tabsMenu.dispose(),r.PageConfig.getOption("notebookPage")){case"consoles":case"terminals":case"tree":t.editMenu.dispose(),t.kernelMenu.dispose(),t.runMenu.dispose();break;case"edit":t.kernelMenu.dispose(),t.runMenu.dispose()}}},S={id:"@jupyter-notebook/application-extension:menu-spacer",autoStart:!0,activate:e=>{const t=new f.Widget;t.id=a.DOMUtils.createDomID(),t.addClass("jp-NotebookSpacer"),e.shell.add(t,"menu",{rank:900})}},C={id:"@jupyter-notebook/application-extension:pages",autoStart:!0,requires:[u.ITranslator],optional:[a.ICommandPalette],activate:(e,t,o)=>{const n=t.load("notebook"),a=r.PageConfig.getBaseUrl();e.commands.addCommand(y.openLab,{label:n.__("Open JupyterLab"),execute:()=>{window.open(r.URLExt.join(a,"lab"))}});const i=r.PageConfig.getOption("notebookPage");e.commands.addCommand(y.openTree,{label:n.__("File Browser"),execute:()=>{"tree"===i?e.commands.execute("filebrowser:activate"):window.open(r.URLExt.join(a,"tree"))}}),o&&(o.addItem({command:y.openLab,category:"View"}),o.addItem({command:y.openTree,category:"View"}))}},R={id:"@jupyter-notebook/application-extension:path-opener",autoStart:!0,provides:g.INotebookPathOpener,activate:e=>g.defaultNotebookPathOpener},T={id:"@jupyter-notebook/application-extension:paths",autoStart:!0,provides:n.JupyterFrontEnd.IPaths,activate:e=>{if(!(e instanceof g.NotebookApp))throw new Error(`${T.id} must be activated in Jupyter Notebook.`);return e.paths}},E={id:"@jupyter-notebook/application-extension:rendermime",autoStart:!0,provides:c.IRenderMimeRegistry,description:"Provides the render mime registry.",optional:[d.IDocumentManager,c.ILatexTypesetter,a.ISanitizer,c.IMarkdownParser,u.ITranslator,g.INotebookPathOpener],activate:(e,t,o,n,a,i,d)=>{const l=(null!=i?i:u.nullTranslator).load("jupyterlab"),s=null!=d?d:g.defaultNotebookPathOpener;return t&&e.commands.addCommand(y.handleLink,{label:l.__("Handle Local Link"),execute:e=>{const o=e.path;if(null!=o)return t.services.contents.get(o,{content:!1}).then((e=>{const t=r.PageConfig.getBaseUrl();s.open({prefix:r.URLExt.join(t,"tree"),path:e.path,target:"_blank"})}))}}),new c.RenderMimeRegistry({initialFactories:c.standardRendererFactories,linkHandler:t?{handleLink:(t,o,n)=>{"A"===t.tagName&&t.hasAttribute("download")||e.commandLinker.connectNode(t,y.handleLink,{path:o,id:n})}}:void 0,latexTypesetter:null!=o?o:void 0,markdownParser:null!=a?a:void 0,translator:null!=i?i:void 0,sanitizer:null!=n?n:void 0})}},_={id:"@jupyter-notebook/application-extension:shell",autoStart:!0,provides:g.INotebookShell,optional:[p.ISettingRegistry],activate:(e,t)=>{if(!(e.shell instanceof g.NotebookShell))throw new Error(`${_.id} did not find a NotebookShell instance.`);const o=e.shell;return t&&t.load(_.id).then((e=>{const t=e.composite.layout;o.restoreLayout(t)})).catch((e=>{console.error("Fail to load settings for the layout restorer."),console.error(e)})),o}},j={id:"@jupyter-notebook/application-extension:splash",description:"Provides an empty splash screen.",autoStart:!0,provides:a.ISplashScreen,activate:e=>{const{restored:t}=e,o=document.createElement("div");return o.style.position="absolute",o.style.width="100%",o.style.height="100%",o.style.zIndex="10",{show:(e=!0)=>(o.style.backgroundColor=e?"white":"#111111",document.body.appendChild(o),new b.DisposableDelegate((async()=>{await t,document.body.removeChild(o)})))}}},L={id:"@jupyter-notebook/application-extension:status",autoStart:!0,provides:n.ILabStatus,activate:e=>{if(!(e instanceof g.NotebookApp))throw new Error(`${L.id} must be activated in Jupyter Notebook.`);return e.status}},H={id:"@jupyter-notebook/application-extension:tab-title",autoStart:!0,requires:[g.INotebookShell],activate:(e,t)=>{const o=()=>{const e=t.currentWidget;if(e instanceof i.ConsolePanel){const t=()=>{const t=e.sessionContext.path||e.sessionContext.name,o=r.PathExt.basename(t);document.title=o.replace(k,"")};return e.sessionContext.sessionChanged.connect(t),void t()}if(e instanceof l.DocumentWidget){const t=()=>{const t=r.PathExt.basename(e.context.path);document.title=t.replace(k,"")};e.context.pathChanged.connect(t),t()}};t.currentChanged.connect(o),o()}},N={id:"@jupyter-notebook/application-extension:title",autoStart:!0,requires:[g.INotebookShell,u.ITranslator],optional:[d.IDocumentManager,n.IRouter,a.IToolbarWidgetRegistry],activate:(e,t,o,n,a,i)=>{const{commands:s}=e,c=o.load("notebook"),p=document.createElement("div");i&&i.addFactory("TopBar","widgetTitle",(e=>{const t=new f.Widget({node:p});return t.id="jp-title",t}));const u=async()=>{const e=t.currentWidget;if(!(e&&e instanceof l.DocumentWidget))return;if(p.children.length>0)return;const o=document.createElement("h1");if(o.textContent=e.title.label.replace(k,""),p.appendChild(o),p.style.marginLeft="10px",!n)return;const i=()=>{const{currentWidget:e}=t;return!(!e||!n.contextForWidget(e))};s.addCommand(y.rename,{label:()=>c.__("Rename…"),isEnabled:i,execute:async()=>{var t;if(!i())return;const l=await(0,d.renameDialog)(n,e.context);if(e&&e.activate(),null===l)return;const s=e.context.path,c=r.PathExt.basename(s);if(o.textContent=c.replace(k,""),!a)return;const p=null!==(t=a.current.path.match(v))&&void 0!==t?t:[],[,u,g]=p;if(!u||!g)return;const m=encodeURIComponent(s);a.navigate(`/${u}/${m}`,{skipRouting:!0})}}),p.onclick=async()=>{s.execute(y.rename)}};t.currentChanged.connect(u),u()}},M={id:"@jupyter-notebook/application-extension:top",requires:[g.INotebookShell,u.ITranslator],optional:[p.ISettingRegistry,a.ICommandPalette],activate:(e,t,o,n,a)=>{const i=o.load("notebook"),r=t.top,d=M.id;e.commands.addCommand(y.toggleTop,{label:i.__("Show Header"),execute:()=>{r.setHidden(r.isVisible),n&&n.set(d,"visible",r.isVisible?"yes":"no")},isToggled:()=>r.isVisible});let l=!1;if(n){const t=n.load(d),o=e=>{let t=e.get("visible").composite;void 0!==e.user.visible&&(t=e.user.visible),r.setHidden("no"===t),l="automatic"===t};Promise.all([t,e.restored]).then((([e])=>{o(e),e.changed.connect((e=>{o(e)}))})).catch((e=>{console.error(e.message)}))}a&&a.addItem({command:y.toggleTop,category:"View"}),e.formatChanged.connect((()=>{l&&("desktop"===e.format?t.expandTop():t.collapseTop())}))},autoStart:!0},U={id:"@jupyter-notebook/application-extension:sidepanel",requires:[g.INotebookShell,u.ITranslator],optional:[s.IMainMenu,a.ICommandPalette],autoStart:!0,activate:(e,t,o,n,a)=>{const i=o.load("notebook");e.commands.addCommand(y.togglePanel,{label:e=>e.title,caption:e=>"left"===e.side?i.__("Show %1 in the left sidebar",e.title):"right"===e.side?i.__("Show %1 in the right sidebar",e.title):i.__("Show %1 in the sidebar",e.title),execute:e=>{var o,n;switch(e.side){case"left":t.leftCollapsed||(null===(o=t.leftHandler.currentWidget)||void 0===o?void 0:o.id)!==e.id?t.expandLeft(e.id):(t.collapseLeft(),t.currentWidget&&t.activateById(t.currentWidget.id));break;case"right":t.rightCollapsed||(null===(n=t.rightHandler.currentWidget)||void 0===n?void 0:n.id)!==e.id?t.expandRight(e.id):(t.collapseRight(),t.currentWidget&&t.activateById(t.currentWidget.id))}},isToggled:e=>{switch(e.side){case"left":{if(t.leftCollapsed)return!1;const o=t.leftHandler.currentWidget;return!!o&&o.id===e.id}case"right":{if(t.rightCollapsed)return!1;const o=t.rightHandler.currentWidget;return!!o&&o.id===e.id}}return!1}});const r={left:null,right:null},d=(o,a)=>{var i;if(null===n)return null;null===(i=r[o])||void 0===i||i.dispose();const d=new f.Menu({commands:e.commands});d.title.label=a;const l=t.widgets(o);let s=!1;for(const e of l)d.addItem({command:y.togglePanel,args:{side:o,title:`Show ${e.title.caption}`,id:e.id}}),s=!0;s&&(r[o]=n.viewMenu.addItem({type:"submenu",submenu:d}))};e.restored.then((()=>{if(n){const e=e=>"left"===e?i.__("Left Sidebar"):i.__("Right Sidebar"),o=t.leftHandler.area,n=e(o);d(o,n);const a=t.rightHandler.area,r=e(a);d(a,r);const l=(t,o)=>{const n=e(t.area);d(t.area,n)};t.leftHandler.widgetAdded.connect(l),t.leftHandler.widgetRemoved.connect(l),t.rightHandler.widgetAdded.connect(l),t.rightHandler.widgetRemoved.connect(l)}if(a){const e=new g.SidePanelPalette({commandPalette:a,command:y.togglePanel});t.leftHandler.widgets.forEach((o=>{e.addItem(o,t.leftHandler.area)})),t.rightHandler.widgets.forEach((o=>{e.addItem(o,t.rightHandler.area)})),t.leftHandler.widgetAdded.connect(((t,o)=>{e.addItem(o,t.area)})),t.leftHandler.widgetRemoved.connect(((t,o)=>{e.removeItem(o,t.area)})),t.rightHandler.widgetAdded.connect(((t,o)=>{e.addItem(o,t.area)})),t.rightHandler.widgetRemoved.connect(((t,o)=>{e.removeItem(o,t.area)}))}}))}},W={id:"@jupyter-notebook/application-extension:tree-resolver",autoStart:!0,requires:[n.IRouter],provides:n.JupyterFrontEnd.ITreeResolver,activate:(e,t)=>{const{commands:o}=e,n=new b.DisposableSet,a=new h.PromiseDelegate,i=new RegExp("/(/tree/.*)?");n.add(o.addCommand(y.resolveTree,{execute:async e=>{var t;if(n.isDisposed)return;const o=r.URLExt.queryStringToObject(null!==(t=e.search)&&void 0!==t?t:""),i=o["file-browser-path"]||"";delete o["file-browser-path"],n.dispose(),a.resolve({browser:i,file:r.PageConfig.getOption("treePath")})}})),n.add(t.register({command:y.resolveTree,pattern:i}));const d=()=>{n.isDisposed||(n.dispose(),a.resolve(null))};return t.routed.connect(d),n.add(new b.DisposableDelegate((()=>{t.routed.disconnect(d)}))),{paths:a.promise}}},D={id:"@jupyter-notebook/application-extension:tree-updater",requires:[n.IRouter],provides:n.ITreePathUpdater,activate:(e,t)=>function(e){if(e!==r.PageConfig.getOption("treePath")){const o=r.URLExt.join(r.PageConfig.getOption("baseUrl")||"/","tree",r.URLExt.encodeParts(e));t.navigate(o,{skipRouting:!0}),r.PageConfig.setOption("treePath",e)}},autoStart:!0},O={id:"@jupyter-notebook/application-extension:translator",requires:[g.INotebookShell,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{t.translator=o}},q={id:"@jupyter-notebook/application-extension:zen",autoStart:!0,requires:[u.ITranslator],optional:[a.ICommandPalette,g.INotebookShell],activate:(e,t,o,n)=>{const{commands:a}=e,i=document.documentElement,r=t.load("notebook"),d=()=>{null==n||n.expandTop(),null==n||n.menu.setHidden(!1),l=!1};let l=!1;a.addCommand(y.toggleZen,{label:r.__("Toggle Zen Mode"),execute:()=>{l?(document.exitFullscreen(),d()):(i.requestFullscreen(),null==n||n.collapseTop(),null==n||n.menu.setHidden(!0),l=!0)}}),document.addEventListener("fullscreenchange",(()=>{document.fullscreenElement||d()})),o&&o.addItem({command:y.toggleZen,category:"Mode"})}},F=[w,x,P,S,I,C,R,T,E,_,U,j,L,H,N,M,W,D,O,q]}}]);
//# sourceMappingURL=8178.3dc5216.js.map