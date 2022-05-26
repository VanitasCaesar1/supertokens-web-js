var supertokensEmailVerification;(()=>{"use strict";var e={7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WINDOW_UNDEFINED_ERROR=t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.",t.WINDOW_UNDEFINED_ERROR="If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined."},2173:function(e,t){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var n=e.call(this,t)||this;return n.isSuperTokensGeneralError=!0,n}return r(t,e),t.isThisError=function(e){return!0===e.isSuperTokensGeneralError},t}(Error);t.default=o},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var r=new URL(e);return t?r.hostname.startsWith("localhost")||(o=r.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+r.host:"https://"+r.host:r.protocol+"//"+r.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),n(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=n(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return n(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),n("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var r=this;this.startsWith=function(e){return r.value.startsWith(e.value)},this.appendPath=function(t){return new e(r.value+t.value)},this.getAsStringDangerous=function(){return r.value},this.value=n(t)}},634:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1260),s=n(255),u=n(2173),c=function(){function e(e,t){var n=this;this.get=function(e,t,a,s,u){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,a),r({method:"GET"},t),s,u)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.post=function(e,t,a,s){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:if(void 0===t.body)throw new Error("Post request must have a body");return[4,this.fetch(this.getFullUrl(e),r({method:"POST"},t),a,s)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.delete=function(e,t,a,s){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e),r({method:"DELETE"},t),a,s)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.put=function(e,t,a,s){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e),r({method:"PUT"},t),a,s)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.fetch=function(e,t,a,u){return o(n,void 0,void 0,(function(){var n,o,c,l,f,h;return i(this,(function(i){switch(i.label){case 0:return n=void 0===t?{}:t.headers,[4,this.callPreAPIHook({preAPIHook:a,url:e,requestInit:r(r({},t),{headers:r(r({},n),{"fdi-version":s.supported_fdi.join(","),"Content-Type":"application/json",rid:this.recipeId})})})];case 1:return o=i.sent(),c=o.requestInit,l=o.url,[4,fetch(l,c)];case 2:if((f=i.sent()).status>=300)throw f;return void 0===u?[3,4]:(h=f.clone(),[4,u({requestInit:c,url:e,fetchResponse:h})]);case 3:i.sent(),i.label=4;case 4:return[2,f]}}))}))},this.callPreAPIHook=function(e){return o(n,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return void 0===e.preAPIHook?[2,{url:e.url,requestInit:e.requestInit}]:[4,e.preAPIHook({url:e.url,requestInit:e.requestInit})];case 1:return[2,t.sent()]}}))}))},this.getFullUrl=function(e,t){var r=new a.default(e),o="".concat(n.appInfo.apiDomain.getAsStringDangerous()).concat(n.appInfo.apiBasePath.getAsStringDangerous()).concat(r.getAsStringDangerous());return void 0===t?o:o+"?"+new URLSearchParams(t)},this.getResponseJsonOrThrowGeneralError=function(e){return o(n,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return[4,e.clone().json()];case 1:if("GENERAL_ERROR"===(t=r.sent()).status)throw n=void 0===t.message?"No Error Message Provided":t.message,new u.default(n);return[2,t]}}))}))},this.recipeId=e,this.appInfo=t}var t;return t=e,e.preparePreAPIHook=function(e){var n=e.recipePreAPIHook,a=e.action,s=e.options,u=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){var o;return i(t,(function(t){switch(t.label){case 0:return[4,n(r(r({},e),{action:a,userContext:u}))];case 1:return o=t.sent(),void 0===s||void 0===s.preAPIHook?[2,o]:[2,s.preAPIHook({url:o.url,requestInit:o.requestInit,userContext:u})]}}))}))}},e.preparePostAPIHook=function(e){var n=e.recipePostAPIHook,a=e.action,s=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){return i(t,(function(t){switch(t.label){case 0:return[4,n(r(r({},e),{userContext:s,action:a}))];case 1:return t.sent(),[2]}}))}))}},e}();t.default=c},5857:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getEmailVerificationTokenFromURL=t.isEmailVerified=t.sendVerificationEmail=t.verifyEmail=t.init=void 0;var o=n(6923),i=n(8122),a=function(){function e(){}return e.init=function(e){return o.default.init(e)},e.verifyEmail=function(e){return o.default.getInstanceOrThrow().recipeImplementation.verifyEmail(r(r({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.sendVerificationEmail=function(e){return o.default.getInstanceOrThrow().recipeImplementation.sendVerificationEmail(r(r({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.isEmailVerified=function(e){return o.default.getInstanceOrThrow().recipeImplementation.isEmailVerified(r(r({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.getEmailVerificationTokenFromURL=function(e){return o.default.getInstanceOrThrow().recipeImplementation.getEmailVerificationTokenFromURL(r(r({},e),{userContext:(0,i.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e}();t.default=a;var s=a.init;t.init=s;var u=a.verifyEmail;t.verifyEmail=u;var c=a.sendVerificationEmail;t.sendVerificationEmail=c;var l=a.isEmailVerified;t.isEmailVerified=l;var f=a.getEmailVerificationTokenFromURL;t.getEmailVerificationTokenFromURL=f},6923:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var o=n(8094),i=n(5120),a=n(6333),s=n(8122),u=function(){function e(e){this.config=(0,o.normaliseUserInput)(e);var t=new a.default((0,i.default)({recipeId:this.config.recipeId,appInfo:this.config.appInfo,preAPIHook:this.config.preAPIHook,postAPIHook:this.config.postAPIHook}));this.recipeImplementation=t.override(this.config.override.functions).build()}return e.init=function(t){return function(n){return e.instance=new e(r(r({},t),{appInfo:n,recipeId:e.RECIPE_ID})),e.instance}},e.getInstanceOrThrow=function(){if(void 0===e.instance){var t="No instance of EmailVerification found. Make sure to call the EmailVerification.init method.";throw t=(0,s.checkForSSRErrorAndAppendIfNeeded)(t),Error(t)}return e.instance},e.reset=function(){(0,s.isTest)()&&(e.instance=void 0)},e.RECIPE_ID="emailverification",e}();t.Recipe=u,t.default=u},5120:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var i=n(634),a=n(8122);function s(e){var t=new i.default(e.recipeId,e.appInfo);return{verifyEmail:function(n){var a=n.options,s=n.userContext;return r(this,void 0,void 0,(function(){var n,r,u,c;return o(this,(function(o){switch(o.label){case 0:return n=this.getEmailVerificationTokenFromURL({userContext:s}),[4,t.post("/user/email/verify",{body:JSON.stringify({method:"token",token:n})},i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"VERIFY_EMAIL",options:a,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,userContext:s,action:"VERIFY_EMAIL"}))];case 1:return r=o.sent(),u=r.jsonBody,c=r.fetchResponse,[2,{status:u.status,fetchResponse:c}]}}))}))},isEmailVerified:function(n){var a=n.options,s=n.userContext;return r(this,void 0,void 0,(function(){var n,r,u;return o(this,(function(o){switch(o.label){case 0:return[4,t.get("/user/email/verify",{},void 0,i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"IS_EMAIL_VERIFIED",options:a,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,userContext:s,action:"IS_EMAIL_VERIFIED"}))];case 1:return n=o.sent(),r=n.jsonBody,u=n.fetchResponse,[2,{status:"OK",isVerified:r.isVerified,fetchResponse:u}]}}))}))},sendVerificationEmail:function(n){var a=n.options,s=n.userContext;return r(this,void 0,void 0,(function(){var n,r,u;return o(this,(function(o){switch(o.label){case 0:return[4,t.post("/user/email/verify/token",{body:JSON.stringify({})},i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"SEND_VERIFY_EMAIL",options:a,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,userContext:s,action:"SEND_VERIFY_EMAIL"}))];case 1:return n=o.sent(),r=n.jsonBody,u=n.fetchResponse,[2,{status:r.status,fetchResponse:u}]}}))}))},getEmailVerificationTokenFromURL:function(){var e=(0,a.getQueryParams)("token");return void 0===e?"":e}}}t.default=s,t.getRecipeImplementation=s},8094:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUserInput=void 0;var o=n(6069);t.normaliseUserInput=function(e){var t=r({functions:function(e){return e}},e.override);return r(r({},(0,o.normaliseRecipeModuleConfig)(e)),{override:t})}},6069:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseRecipeModuleConfig=void 0,t.normaliseRecipeModuleConfig=function(e){var t=this,o=e.preAPIHook;void 0===o&&(o=function(e){return n(t,void 0,void 0,(function(){return r(this,(function(t){return[2,e]}))}))});var i=e.postAPIHook;return void 0===i&&(i=function(){return n(t,void 0,void 0,(function(){return r(this,(function(e){return[2]}))}))}),{recipeId:e.recipeId,appInfo:e.appInfo,preAPIHook:o,postAPIHook:i}}},8122:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var r=n(9092),o=n(7611),i=n(7992),a=n(1260);t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var n=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];n.searchParams.set(t,r)})),n.href}catch(n){var r=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(r).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];o.searchParams.set(t,n)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,n,r=new a.default("");return void 0!==e.apiGatewayPath&&(r=new a.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:r.appendPath((t=o.DEFAULT_API_BASE_PATH,n=e.apiBasePath,void 0!==n?new a.default(n):new a.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)}},255:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.supported_fdi=t.package_version=void 0,t.package_version="0.0.1",t.supported_fdi=["1.8","1.9","1.10"]},2225:function(e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getProxyObject=void 0,t.getProxyObject=function(e){for(var t=n(n({},e),{_call:function(e,t){throw new Error("This function should only be called through the recipe object")}}),r=function(e){"_call"!==e&&(t[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._call(e,t)})},o=0,i=Object.keys(t);o<i.length;o++)r(i[o]);return t}},6333:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OverrideableBuilder=void 0;var r=n(2225),o=function(){function e(e){this.layers=[e],this.proxies=[]}return e.prototype.override=function(e){for(var t=(0,r.getProxyObject)(this.layers[0]),n=e(t,this),o=0,i=Object.keys(this.layers[0]);o<i.length;o++){var a=i[o];n[a]===t[a]||"_call"===a?delete n[a]:void 0===n[a]&&(n[a]=null)}return this.layers.push(n),this.proxies.push(t),this},e.prototype.build=function(){var e=this;if(this.result)return this.result;this.result={};for(var t=0,n=this.layers;t<n.length;t++)for(var r=n[t],o=0,i=Object.keys(r);o<i.length;o++){var a=i[o],s=r[a];void 0!==s&&(this.result[a]=null===s?void 0:"function"==typeof s?s.bind(this.result):s)}for(var u=function(t){c.proxies[t]._call=function(n,r){for(var o=t;o>=0;--o){var i=e.layers[o][n];if(null!=i)return i.bind(e.result).apply(void 0,r)}}},c=this,l=0;l<this.proxies.length;++l)u(l);return this.result},e}();t.OverrideableBuilder=o,t.default=o},1936:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function o(){if("undefined"==typeof window)throw Error("If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined.");return window}Object.defineProperty(t,"__esModule",{value:!0});var i={key:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().localStorage.key(e)]}))}))},clear:function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,o().localStorage.clear()]}))}))},getItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().localStorage.getItem(e)]}))}))},removeItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().localStorage.removeItem(e)]}))}))},setItem:function(e,t){return n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,o().localStorage.setItem(e,t)]}))}))},keySync:function(e){return o().localStorage.key(e)},clearSync:function(){return o().localStorage.clear()},getItemSync:function(e){return o().localStorage.getItem(e)},removeItemSync:function(e){return o().localStorage.removeItem(e)},setItemSync:function(e,t){return o().localStorage.setItem(e,t)}},a={key:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().sessionStorage.key(e)]}))}))},clear:function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return[2,o().sessionStorage.clear()]}))}))},getItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().sessionStorage.getItem(e)]}))}))},removeItem:function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){return[2,o().sessionStorage.removeItem(e)]}))}))},setItem:function(e,t){return n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,o().sessionStorage.setItem(e,t)]}))}))},keySync:function(e){return o().sessionStorage.key(e)},clearSync:function(){return o().sessionStorage.clear()},getItemSync:function(e){return o().sessionStorage.getItem(e)},removeItemSync:function(e){return o().sessionStorage.removeItem(e)},setItemSync:function(e,t){return o().sessionStorage.setItem(e,t)}};t.defaultWindowHandlerImplementation={history:{replaceState:function(e,t,n){return o().history.replaceState(e,t,n)},getState:function(){return o().history.state}},location:{getHref:function(){return o().location.href},setHref:function(e){o().location.href=e},getSearch:function(){return o().location.search},getHash:function(){return o().location.hash},getPathName:function(){return o().location.pathname},assign:function(e){o().location.assign(e)},getHostName:function(){return o().location.hostname},getOrigin:function(){return o().location.origin}},getDocument:function(){return o().document},localStorage:i,sessionStorage:a}},7860:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(1936),o=function(){function e(e){var t=function(e){return e};void 0!==e&&(t=e),this.windowHandler=t(r.defaultWindowHandlerImplementation)}return e.init=function(t){void 0===e.instance&&(e.instance=new e(t))},e.getReferenceOrThrow=function(){if(void 0===e.instance)throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");return e.instance},e}();t.WindowHandlerReference=o,t.default=o},9092:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(7860))}},t={},n=function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(5857);supertokensEmailVerification=n})();