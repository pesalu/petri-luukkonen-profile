import React from "react";
import { List } from "./List";
import { Item } from "./Item";

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
    >
      {publications.map((data, idx, arr) => {
        return (
          <Item key={idx} data={data} style={publicationListStyles.item}></Item>
        );
      })}
    </List>
  );
}
