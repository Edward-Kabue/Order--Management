"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h9": () => (/* binding */ getAllPostsWithSlug),
/* harmony export */   "DT": () => (/* binding */ getAllPostsForHome),
/* harmony export */   "ds": () => (/* binding */ getPostAndMorePosts)
/* harmony export */ });
/* unused harmony export getPreviewPostBySlug */
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8107);

const getUniquePosts = (posts)=>{
    const slugs = new Set();
    return posts.filter((post)=>{
        if (slugs.has(post.slug)) {
            return false;
        } else {
            slugs.add(post.slug);
            return true;
        }
    });
};
const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;
const getClient = (preview)=>preview ? _sanity__WEBPACK_IMPORTED_MODULE_0__/* .previewClient */ .S9 : _sanity__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP
;
async function getPreviewPostBySlug(slug) {
    const data = await getClient(true).fetch(`*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`, {
        slug
    });
    return data[0];
}
async function getAllPostsWithSlug() {
    const data = await _sanity__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fetch */ .ZP.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
    return data;
}
async function getAllPostsForHome(preview) {
    const results = await getClient(preview).fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
    return getUniquePosts(results);
}
async function getPostAndMorePosts(slug, preview) {
    const curClient = getClient(preview);
    const [post, morePosts] = await Promise.all([
        curClient.fetch(`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`, {
            slug
        }).then((res)=>{
            return res === null || res === void 0 ? void 0 : res[0];
        }),
        curClient.fetch(`*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`, {
            slug
        }), 
    ]);
    return {
        post,
        morePosts: getUniquePosts(morePosts)
    };
}


/***/ }),

/***/ 2979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yf": () => (/* binding */ CMS_NAME),
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL)
/* harmony export */ });
/* unused harmony export CMS_URL */
const CMS_NAME = 'Sanity';
const CMS_URL = 'https://sanity.io/';
const HOME_OG_IMAGE_URL = 'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Sanity**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB2aWV3Qm94PSIwIDAgMTA1IDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMWVtIj48dGl0bGU%2BU2FuaXR5PC90aXRsZT48cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik03OC4xNzkzIDcuOTkyNjFWMjEuMDAyOEg3My45MDMxVjEwLjIxMzhMNzguMTc5MyA3Ljk5MjYxWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNMjAuOTUxMSAyMS4zM0wzMC45NDQgMTYuMTA1MUwyOS43MTIxIDEyLjkxNDFMMjMuMTMzMiAxNS45ODIxTDIwLjk1MTEgMjEuMzNaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik03My45MDMxIDEwLjIwMjdMODQuNzQ0MyA0LjY1NDc3TDgyLjkxMjYgMS41NTcxTDczLjkwMzEgNS45NTk5N1YxMC4yMDI3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNNDMuMzcwNSA2Ljk2MjMzVjIxLjAwMjhIMzkuMjkyN1YxLjAwNzE0TDQzLjM3MDUgNi45NjIzM1oiIGZpbGw9ImN1cnJlbnRDb2xvciI%2BPC9wYXRoPjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTI3LjEyOTkgNi4xODYxN0wyMC45NTExIDIxLjMzTDE3Ljc3MzEgMTguNTk0M0wyNS4xMzUzIDEuMDA3MTRMMjcuMTI5OSA2LjE4NjE3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggZD0iTTI1LjEzNTMgMS4wMDcxNEgyOS4zNDc3TDM3LjEzODYgMjEuMDAyOEgzMi44MjY5TDI1LjEzNTMgMS4wMDcxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciI%2BPC9wYXRoPjxwYXRoIGQ9Ik00NC4wMDEyIDEuMDA3MTRMNTIuOTgyNCAxNC42NjgyVjIxLjAwMjhMMzkuMjkyNyAxLjAwNzE0SDQ0LjAwMTJaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNNjQuOTE4MyAxLjAwNzE0SDYwLjY3MzlWMjEuMDA2M0g2NC45MTgzVjEuMDA3MTRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNNzMuOTAzMSA0LjY1NDc0SDY3LjM3VjEuMDA3MTRIODIuNTg2N0w4NC43NDQzIDQuNjU0NzRINzguMTc5M0g3My45MDMxWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNOTcuMjc1NCAxMy40MTUzVjIxLjAwMjhIOTMuMDYyOVYxMy40MTUzIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNOTMuMDYyOSAxMy40MTUyTDEwMC4xOTEgMS4wMDcxNEgxMDQuNjY2TDk3LjI3NTQgMTMuNDE1Mkg5My4wNjI5WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNOTMuMDYzIDEzLjQxNTJMODUuNzM2MyAxLjAwNzE0SDkwLjM0NTZMOTUuMzA5MiA5LjUxMDA4TDkzLjA2MyAxMy40MTUyWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggZD0iTTEuOTYxMjYgMy4zMTQ3OUMxLjk2MTI2IDYuMDk5MjEgMy43MTE0NSA3Ljc1NTk1IDcuMjE1MzYgOC42Mjk1NkwxMC45MjgzIDkuNDc1MzNDMTQuMjQ0NCAxMC4yMjM2IDE2LjI2MzkgMTIuMDgyMiAxNi4yNjM5IDE1LjExMDNDMTYuMjg5NyAxNi40Mjk1IDE1Ljg1MzEgMTcuNzE3MyAxNS4wMjc0IDE4Ljc1NzlDMTUuMDI3NCAxNS43MzY4IDEzLjQzNjcgMTQuMTA0NCA5LjU5OTcyIDEzLjEyMjlMNS45NTQwOSAxMi4zMDg1QzMuMDM0NzUgMTEuNjU0MSAwLjc4MTQ3OCAxMC4xMjYyIDAuNzgxNDc4IDYuODM3MDlDMC43NjYxMjMgNS41NjY5MyAxLjE4MTE2IDQuMzI3ODEgMS45NjEyNiAzLjMxNDc5IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik01Mi45ODI0IDEzLjY0MTVWMS4wMDcxNEg1Ny4wNjAyVjIxLjAwMjhINTIuOTgyNFYxMy42NDE1WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNMTIuNzQ1OCAxNC4zNjg5QzE0LjMyOTQgMTUuMzY0MyAxNS4wMjM4IDE2Ljc1NjUgMTUuMDIzOCAxOC43NTQ0QzEzLjcxMyAyMC40MDQxIDExLjQxMDEgMjEuMzMgOC43MDMzMyAyMS4zM0M0LjE0NzE4IDIxLjMzIDAuOTU4NTc3IDE5LjEyNjggMC4yNSAxNS4yOTgySDQuNjI1NDdDNS4xODg3OCAxNy4wNTU5IDYuNjgwMzQgMTcuODcwMyA4LjY3MTQ0IDE3Ljg3MDNDMTEuMTAxOSAxNy44NzAzIDEyLjcxNzQgMTYuNTk2NCAxMi43NDkzIDE0LjM2MTkiIGZpbGw9ImN1cnJlbnRDb2xvciI%2BPC9wYXRoPjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTQuMjM1NjcgNy40NDI2N0MzLjUxMjUgNy4wMjA0NSAyLjkxOTIgNi40MTM3NSAyLjUxODczIDUuNjg2OTdDMi4xMTgyNyA0Ljk2MDE5IDEuOTI1NTggNC4xNDA0NSAxLjk2MTEzIDMuMzE0NzZDMy4yMjU5NCAxLjY3ODkxIDUuNDI2MDggMC42Nzk5OTMgOC4xMDgwNCAwLjY3OTk5M0MxMi43NDkyIDAuNjc5OTkzIDE1LjQzNDcgMy4wODg1MiAxNi4wOTcyIDYuNDc4NTZIMTEuODg4M0MxMS40MjQyIDUuMTQyMDMgMTAuMjYyMSA0LjEwMTM2IDguMTQzNDcgNC4xMDEzNkM1Ljg3OTU3IDQuMTAxMzYgNC4zMzQ4NyA1LjM5NjExIDQuMjQ2MjkgNy40NDI2NyIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPC9zdmc%2B&widths=undefined&widths=auto&heights=250&heights=150';


/***/ }),

/***/ 8107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iQ": () => (/* binding */ urlForImage),
/* harmony export */   "S9": () => (/* binding */ previewClient),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports imageBuilder, usePreviewSubscription, client, getClient */
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5879);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_1__);


const config = {
    // Find your project ID and dataset in `sanity.json` in your studio project
    dataset: "production" || 0,
    projectId: "ht1m86yi",
    useCdn: typeof document !== 'undefined' && "production" === 'production',
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // When in production the Sanity API is only queried on build-time, and on-demand when responding to webhooks.
    // Thus the data need to be fresh and API response time is less important.
    // When in development/working locally, it's more important to keep costs down as hot reloading can incurr a lot of API calls
    // And every page load calls getStaticProps.
    // To get the lowest latency, lowest cost, and latest data, use the Instant Preview mode
    apiVersion: '2022-03-13'
};
const imageBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()(config);
const urlForImage = (source)=>imageBuilder.image(source).auto('format').fit('max')
;
const usePreviewSubscription = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createPreviewSubscriptionHook)(config);
const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)(config);
const previewClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
});
const getClient = (usePreview)=>usePreview ? previewClient : client
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 6047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Avatar({ name , picture  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: picture,
                className: "mr-4 h-12 w-12 rounded-full",
                alt: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xl font-bold",
                children: name
            })
        ]
    }));
};


/***/ }),

/***/ 6763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto px-5",
        children: children
    }));
};


/***/ }),

/***/ 2467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoverImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8107);




function CoverImage({ title , url , imageObject , slug  }) {
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        width: 1240,
        height: 540,
        alt: `Cover Image for ${title}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('shadow-small', {
            'transition-shadow duration-200 hover:shadow-medium': slug
        }),
        src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_3__/* .urlForImage */ .iQ)(imageObject).width(1240).height(540).url()
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "-mx-5 sm:mx-0",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            as: `/posts/${slug}`,
            href: "/posts/[slug]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                "aria-label": title,
                children: image
            })
        }) : image
    }));
};


/***/ }),

/***/ 6152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString  }) {
    if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString))) {
        return 'No date';
    }
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, 'LLLL\td, yyyy')
    }));
};


/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(2979);
;// CONCATENATED MODULE: ./src/components/blg/meta.js



function Meta() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: `A statically generated blog example using Next.js and Sanity.io.`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: constants/* HOME_OG_IMAGE_URL */.vC
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/blg/layout.js


function Layout({ preview , children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            })
        ]
    }));
};


/***/ }),

/***/ 9060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoreStories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/blg/avatar.js
var avatar = __webpack_require__(6047);
// EXTERNAL MODULE: ./src/components/blg/date.js
var blg_date = __webpack_require__(6152);
// EXTERNAL MODULE: ./src/components/blg/cover-image.js
var cover_image = __webpack_require__(2467);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/sanity.js
var sanity = __webpack_require__(8107);
;// CONCATENATED MODULE: ./src/components/blg/post-preview.js






function PostPreview({ title , coverImage , date , excerpt , author , slug ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    slug: slug,
                    title: title,
                    imageObject: coverImage,
                    url: (0,sanity/* urlForImage */.iQ)(coverImage).url()
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mb-3 text-3xl leading-snug",
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
                className: "mb-4 text-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx(blg_date/* default */.Z, {
                    dateString: date
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-4 text-lg leading-relaxed",
                children: excerpt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                name: author === null || author === void 0 ? void 0 : author.name,
                picture: author === null || author === void 0 ? void 0 : author.picture
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/blg/more-stories.js


function MoreStories({ posts  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl",
                children: "More Stories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32 grid grid-cols-1 md:grid-cols-2",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(PostPreview, {
                        title: post.title,
                        coverImage: post.coverImage,
                        date: post.date,
                        author: post.author,
                        slug: post.slug,
                        excerpt: post.excerpt
                    }, post.slug)
                )
            })
        ]
    }));
};


/***/ })

};
;