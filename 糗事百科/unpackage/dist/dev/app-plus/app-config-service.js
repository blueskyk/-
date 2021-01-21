
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","pages/search/search","pages/add-input/add-input","pages/topic-cate/topic-cate","pages/topic-detail/topic-detail","pages/user-list/user-list","pages/user-chat/user-chat","pages/detail/detail","pages/user-set/user-set","pages/change-password/change-password","pages/bind-email/bind-email","pages/change-userinfo/change-userinfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"糗事百科","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"tabBar":{"color":"#ADADAD","selectedColor":"#FEE42A","backgroundColor":"#FFF","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"糗事","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/paper/paper","text":"小纸条","iconPath":"./static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"pagePath":"pages/home/home","text":"我的","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"糗事百科","compilerVersion":"3.0.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","bounce":"false","titleNView":{"searchInput":{"align":"center","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":true},"buttons":[{"color":"#ff9619","colorPressed":"#bbb","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false,"bounce":"false"}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小纸条","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#000","colorPressed":"#bbb","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"false","scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":false},"buttons":[{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/topic-cate/topic-cate","meta":{},"window":{"navigationBarTitleText":"话题分类","enablePullDownRefresh":false}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/user-list/user-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"slide-in-left","bounce":"false","scrollIndicator":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":false},"buttons":[{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/user-chat/user-chat","meta":{},"window":{"navigationBarTitleText":"聊天页","enablePullDownRefresh":false,"titleNView":{"buttons":[{"color":"#000","colorPressed":"#bbb","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/user-set/user-set","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false}},{"path":"/pages/change-password/change-password","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false,"scrollIndicator":"none"}},{"path":"/pages/bind-email/bind-email","meta":{},"window":{"navigationBarTitleText":"绑定邮箱","enablePullDownRefresh":false,"scrollIndicator":"none"}},{"path":"/pages/change-userinfo/change-userinfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
