import { categories } from "./categories";
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (<CategoryItem category={category} />))}
        </div>
    );
}

export default Directory;