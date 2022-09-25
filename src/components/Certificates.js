import { List } from "./List";
const certificateListStyles = {
  section: {
    className: "certificate section",
  },
  title: {
    className: "section-title",
  },
  container: {
    className: "certificate__container bd-grid",
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

export function Certificates({ listTitle, certificates }) {
  certificates.forEach((certificate) => {
    certificate.imgUrl = certificate.badgeUrl;
    certificate.imgLink = certificate.url;
    certificate.url = certificate.accomplishmentUrl;
  });

  return (
    <List
      id="certificates"
      title={listTitle}
      items={certificates}
      style={certificateListStyles}
    ></List>
  );
}
