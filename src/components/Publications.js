import React from "react";
import { BoxIcon } from "./BoxIcon";
import { List } from "./List";

// function Publication(props) {
//   return (
//     <div
//       className="publication__content"
//       onClick={() => {
//         window.open(props.publication.url, "_blank");
//       }}
//     >
//       <div className="interests__icon">
//         <BoxIcon name="bx-receipt"></BoxIcon>
//       </div>

//       <div className="certificate__data">
//         <p className="publication__description">
//           {props.publication.chicagoCiteString}
//         </p>
//       </div>
//     </div>
//   );
// }
// export function Publications(props) {
//   return (
//     <section className="publication section" id="publications">
//       <h2 className="section-title">{props.t("publications")}</h2>
//       <div className="publication__container">
//         {props
//           .t("publications", {
//             ns: "cvcontent",
//             returnObjects: true,
//           })
//           .map((publication, idx, arr) => (
//             <Publication key={idx} publication={publication}></Publication>
//           ))}
//       </div>
//     </section>
//   );
// }

const publicationListStyles = {
  section: {
    className: "publication section",
  },
  title: {
    className: "section-title",
  },
  container: {
    className: "publication__container",
  },
  item: {
    section: {
      className: "certificate__content",
    },
    container: {
      className: "certificate__data bd-grid",
    },
    title: {
      className: "certificate__title",
    },
    metaData: {
      className: "meta_data",
    },
    description: {
      className: "item_description",
    },
  },
};

export function Publications({ listTitle, publications }) {
  publications.forEach((publication) => {
    console.log(publication);
    publication.imgUrl = publication.badgeUrl;
    publication.description = publication.chicagoCiteString;
  });

  return (
    <List
      id="publications"
      title={listTitle}
      items={publications}
      style={publicationListStyles}
    ></List>
  );
}
