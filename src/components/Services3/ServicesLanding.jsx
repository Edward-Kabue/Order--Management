// import React from 'react';
// import Scrollspy from 'react-scrollspy';
// // import { Fade } from 'react-reveal';
// import { ServiceCard } from "./ServiceCard.jsx";
// import technology from '../../data/sections/technology.json';

// const TechServicesLanding = () => {
//   return (
//     <>
//     <div className="services__heading heading">Our Services</div>
//     <div className="services__content">
//       {technology?.length > 0 ? (
//         <Scrollspy
//           technologies ={technology?.map((technology) =>
//             technology.title
//               .trim()
//               .replaceAll(" ", "-")
//               .replaceAll("-&-", "-")
//               .replaceAll(".", "")
//               .replaceAll("/", "-")
//               .toLowerCase()
//           )}
//           offset={-200}
//           currentClassName="active"
//           className="services__content__sidebar"
//         >
//           {technology?.map((technology) => (
//             <li
//               className="services__content__sidebar__link"
//               key={JSON.stringify(technology)}
//             >
//                 <a
//                   href={
//                     "#" +
//                     technology.title
//                       .trim()
//                       .replaceAll(" ", "-")
//                       .replaceAll("-&-", "-")
//                       .replaceAll(".", "")
//                       .replaceAll("/", "-")
//                       .toLowerCase()
//                   }
//                 >
//                   {technology.title}
//                 </a>
//             </li>
//           ))}
//           <img
//             loading="lazy"
//             // src={serviceSidebarSvg}
//             alt="serviceSidebarSvg"
//             className="services__content__sidebar__svg"
//           />
//         </Scrollspy>
//       ) : null}
//       <div className="services__content__main">
//         {technology?.map((technology, i) => (
//           <ServiceCard technology={technology} key={technology._id} />
//         ))}
//       </div>
//     </div>
//   </>
//   );
// };

// export default TechServicesLanding;
