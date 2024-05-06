// import React from "react";
// // import { Fade } from "react-reveal";
// import Link from 'next/link';
// import technology from '../../data/sections/technology.json';

// export function ServiceCard({ item }) {
//   function onClick() {
//     setTimeout(() => {
//       window.scrollTo({ behavior: "smooth", top: 0 });
//     }, 300);
//   }
//   return (
//     <section
//       className="services__content__main__card__wrapper"
//           technologies ={technology?.map((technology) =>
//             technology.title
//               .trim()
//               .replaceAll(" ", "-")
//               .replaceAll("-&-", "-")
//               .replaceAll(".", "")
//               .replaceAll("/", "-")
//               .toLowerCase()
//     >
//       <Fade up>
//         <div className="services__content__main__card">
//           <img
//             loading="lazy"
//             alt={item.title}
//             className="services__content__main__card__img"
//           />
//           <div className="services__content__main__card__content">
//             <div className="services__content__main__card__content__heading heading">
//               {item.title}
//             </div>
//             <div className="services__content__main__card__content__info">
//               {item.description.length > 150
//                 ? technology.description.substring(0, 150) + "..."
//                 : technology.description}
//             </div>
//             <Link
//               onClick={onClick}
//               to={technology.title
//                 .trim()
//                 .replaceAll(" ", "-")
//                 .replaceAll("-&-", "-")
//                 .replaceAll(".", "")
//                 .replaceAll("/", "-")
//                 .toLowerCase()}
//               className="services__content__main__card__content__link"
//             >
//               Learn more
//             </Link>
//           </div>
//         </div>
//       </Fade>
//     </section>
//   );
// }
