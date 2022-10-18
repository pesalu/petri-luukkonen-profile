import { List } from "./List";
import { Item } from "./Item";

const projectListStyles = {
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

export function Projects({ listTitle, projects }) {
  console.log(projects);
  projects.forEach((project) => {
    project.imgUrl = project.projectLogo;
    project.imgLink = project.url;
  });

  return (
    <List
      id="projects"
      title={listTitle}
      items={projects}
      style={projectListStyles}
    >
      {projects.map((data, idx, arr) => {
        return (
          <Item key={idx} data={data} style={projectListStyles.item}></Item>
        );
      })}
    </List>
  );
}
