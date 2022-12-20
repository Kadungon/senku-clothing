import hats from "../../images/hats.png";
import jackets from "../../images/jackets.png";
import sneakers from "../../images/sneakers.png";
import womens from "../../images/womens.png";
import mens from "../../images/men.png";

import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: hats,
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: jackets,
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: sneakers,
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: womens,
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: mens,
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
