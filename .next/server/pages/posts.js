"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 3233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/blg/container.js
var container = __webpack_require__(6763);
// EXTERNAL MODULE: ./src/components/blg/more-stories.js + 1 modules
var more_stories = __webpack_require__(9060);
// EXTERNAL MODULE: ./src/components/blg/avatar.js
var avatar = __webpack_require__(6047);
// EXTERNAL MODULE: ./src/components/blg/date.js
var blg_date = __webpack_require__(6152);
// EXTERNAL MODULE: ./src/components/blg/cover-image.js
var cover_image = __webpack_require__(2467);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/blg/hero-post.js





function HeroPost({ title , coverImage , date , excerpt , author , slug ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    slug: slug,
                    imageObject: coverImage,
                    title: title,
                    url: coverImage
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28 md:grid md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mb-4 text-4xl leading-tight lg:text-6xl",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    as: `/posts/${slug}`,
                                    href: "/posts/[slug]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:underline",
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-4 text-lg md:mb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(blg_date/* default */.Z, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-4 text-lg leading-relaxed",
                                children: excerpt
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                name: author === null || author === void 0 ? void 0 : author.name,
                                picture: author === null || author === void 0 ? void 0 : author.picture
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/blg/layout.js + 1 modules
var layout = __webpack_require__(717);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(2979);
;// CONCATENATED MODULE: ./src/pages/posts.jsx








function Blog({ allPosts , preview  }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            preview: preview,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Next.js Blog Example with ",
                            constants/* CMS_NAME */.yf
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                    children: [
                        heroPost && /*#__PURE__*/ jsx_runtime_.jsx(HeroPost, {
                            title: heroPost.title,
                            coverImage: heroPost.coverImage,
                            date: heroPost.date,
                            author: heroPost.author,
                            slug: heroPost.slug,
                            excerpt: heroPost.excerpt
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    }));
};
async function getStaticProps({ preview =false  }) {
    const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
    return {
        props: {
            allPosts,
            preview
        },
        revalidate: 1
    };
}


/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,473], () => (__webpack_exec__(3233)));
module.exports = __webpack_exports__;

})();