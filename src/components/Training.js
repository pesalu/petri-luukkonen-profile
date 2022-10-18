import { List } from "./List";
import { Item } from "./Item";
const trainingListStyles = {
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

export function Training({ listTitle, certificates: trainings }) {
  trainings.forEach((training) => {
    training.imgUrl = training.badgeUrl;
    training.imgLink = training.url;
    training.url = training.accomplishmentUrl;
  });

  return (
    <List
      id="certificates"
      title={listTitle}
      items={trainings}
      style={trainingListStyles}
    >
      {trainings.map((data, idx, arr) => {
        return (
          <Item key={idx} data={data} style={trainingListStyles.item}></Item>
        );
      })}
    </List>
  );
}
