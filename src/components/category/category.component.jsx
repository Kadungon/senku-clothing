import { useParams } from "react-router-dom";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  return (
    <div className="category-container">
      <h1>{category}</h1>
    </div>
  );
};

export default Category;
