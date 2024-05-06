"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 6224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Clients1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/clients1.json
const clients1_namespaceObject = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/9.png","Image":"/img/clients/brands//09.png","url":"https://www.kamemetv.co.ke/"},{"id":2,"lightImage":"/img/clients/brands/light/1.png","Image":"/img/clients/brands//01.png","url":"https://Kymba.de"},{"id":3,"lightImage":"/img/clients/brands/light/11.jpg","Image":"/img/clients/brands//03.png","url":"https://www.mediamaxnetwork.co.ke/"},{"id":4,"lightImage":"/img/clients/brands/light/10.jpg","Image":"/img/clients/brands//04.png","url":"https://www.motorhub.co.ke/"},{"id":5,"lightImage":"/img/clients/brands/light/7.png","Image":"/img/clients/brands//07.png","url":"https://cafric.org/"},{"id":6,"lightImage":"/img/clients/brands/light/8.png","Image":"/img/clients/brands//08.png","url":"https://zyaraschoolofhospitality.ac.ke/"},{"id":7,"lightImage":"/img/clients/brands/light/2.png","Image":"/img/clients/brands//04.png","url":"https://nyotanjema.co.ke/"},{"id":8,"lightImage":"/img/clients/brands/light/5.png","Image":"/img/clients/brands//04.png","url":"https://www.smep.co.ke/"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/Clients1/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Clients1 = ({ theme , subBG  })=>{
    var first = clients1_namespaceObject.slice(0, clients1_namespaceObject.length / 2);
    var second = clients1_namespaceObject.slice(4, clients1_namespaceObject.length);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients section-padding ${subBG ? 'sub-bg' : ''}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sec-head custom-font mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Clients"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    children: [
                                        "Our ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " Clients"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row bord",
                                    children: first.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-3 col-6 brands",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? '.3' : item.id == 2 ? '.6' : item.id == 3 ? '.8' : item.id == 4 ? '.3' : item.id == 5 ? '.3' : item.id == 6 ? '.3' : item.id == 7 ? '.3' : item.id == 8 ? '.3' : item.id == 9 ? '.3' : item.id == 10 ? '.3' : item.id == 11 ? '.3' : item.id == 12 ? '.3' : item.id == 13 ? '.3' : ''}s`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === 'light' ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.Image,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: item.url,
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: second.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${item.id == 5 ? 'col-md-3 col-6 brands sm-mb30' : item.id == 6 ? 'col-md-3 col-6 brands sm-mb30' : item.id == 7 ? 'col-md-3 col-6 brands' : item.id == 8 ? 'col-md-3 col-6 brands' : ''}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? '.4' : item.id == 2 ? '.7' : item.id == 3 ? '.5' : item.id == 4 ? '.3' : ''}s`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === 'light' ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.Image,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id)
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Clients1 = (Clients1);


/***/ })

};
;