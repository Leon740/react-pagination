(self.webpackChunkreact_pagination_z4=self.webpackChunkreact_pagination_z4||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/tailwindcss/tailwind.css");const __WEBPACK_DEFAULT_EXPORT__={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Body/Body.stories":["./src/components/Body/Body.stories.tsx",712,556,780,433],"./components/Body/Body.stories.tsx":["./src/components/Body/Body.stories.tsx",712,556,780,433],"./components/Button/Button.stories":["./src/components/Button/Button.stories.tsx",712,556,721],"./components/Button/Button.stories.tsx":["./src/components/Button/Button.stories.tsx",712,556,721],"./components/Controls/Controls.stories":["./src/components/Controls/Controls.stories.tsx",712,556,780,637],"./components/Controls/Controls.stories.tsx":["./src/components/Controls/Controls.stories.tsx",712,556,780,637],"./components/ErrorBoundary/ErrorBoundary.stories":["./src/components/ErrorBoundary/ErrorBoundary.stories.tsx",712,556,887],"./components/ErrorBoundary/ErrorBoundary.stories.tsx":["./src/components/ErrorBoundary/ErrorBoundary.stories.tsx",712,556,887],"./components/Examples/Example.stories":["./src/components/Examples/Example.stories.tsx",712,556,820],"./components/Examples/Example.stories.tsx":["./src/components/Examples/Example.stories.tsx",712,556,820],"./components/Loader/Loader.stories":["./src/components/Loader/Loader.stories.tsx",712,556,943],"./components/Loader/Loader.stories.tsx":["./src/components/Loader/Loader.stories.tsx",712,556,943],"./components/NextButton/NextButton.stories":["./src/components/NextButton/NextButton.stories.tsx",712,556,780,863],"./components/NextButton/NextButton.stories.tsx":["./src/components/NextButton/NextButton.stories.tsx",712,556,780,863],"./components/Numbers/Numbers.stories":["./src/components/Numbers/Numbers.stories.tsx",712,556,780,871],"./components/Numbers/Numbers.stories.tsx":["./src/components/Numbers/Numbers.stories.tsx",712,556,780,871],"./components/Pagination/Pagination.stories":["./src/components/Pagination/Pagination.stories.tsx",712,556,780,889],"./components/Pagination/Pagination.stories.tsx":["./src/components/Pagination/Pagination.stories.tsx",712,556,780,889],"./components/PrevButton/PrevButton.stories":["./src/components/PrevButton/PrevButton.stories.tsx",712,556,780,279],"./components/PrevButton/PrevButton.stories.tsx":["./src/components/PrevButton/PrevButton.stories.tsx",712,556,780,279],"./components/Search/Search.stories":["./src/components/Search/Search.stories.tsx",712,556,780,41],"./components/Search/Search.stories.tsx":["./src/components/Search/Search.stories.tsx",712,556,780,41],"./components/SearchResultsNotFound/SearchResultsNotFound.stories":["./src/components/SearchResultsNotFound/SearchResultsNotFound.stories.tsx",712,556,495],"./components/SearchResultsNotFound/SearchResultsNotFound.stories.tsx":["./src/components/SearchResultsNotFound/SearchResultsNotFound.stories.tsx",712,556,495],"./components/Stats/Stats.stories":["./src/components/Stats/Stats.stories.tsx",712,556,780,139],"./components/Stats/Stats.stories.tsx":["./src/components/Stats/Stats.stories.tsx",712,556,780,139]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[477],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);