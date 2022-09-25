import { Item } from "./Item";
// export function Certificate({ certificate }) {
//   return (
//     <div className="certificate__content">
//       {certificate.badgeUrl && (
//         <img
//           src={certificate.badgeUrl}
//           alt="certificate badge"
//           className="badge__img__small"
//           onClick={() => {
//             window.open(certificate.accomplishmentUrl, "_blank");
//           }}
//         />
//       )}

//       <div
//         className="certificate__data bd-grid"
//         onClick={() => {
//           window.open(certificate.url, "_blank");
//         }}
//       >
//         <h3 className="certificate__title">{certificate.name}</h3>
//         <span className="education__studies">
//           {certificate.date} | {certificate.organization}
//         </span>
//         <p className="certificate__description">{certificate.description}</p>
//       </div>
//     </div>
//   );
// }
export function Certificate({ certificate }) {
  // let data = {...certificate, imgUrl: certificate.badgeUrl};
  // data.imgLink = certificate.accomplishmentUrl;
  // data["imgUrl"] = certificate.badgeUrl;
  certificate["imgUrl"] = certificate["badgeUrl"];

  delete certificate["badgeUrl"];
  return <Item data={certificate}></Item>;
}
