/* eslint-disable react/prop-types */

import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";



const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category')
    console.log(category);
    return (
        <Container>
            <div className="flex justify-center gap-2 overflow-x-auto pb-4">
                {categories.map(item => <CategoryBox key={item.label}
                    label={item.label}
                    icon={item.icon}
                    selected={category === item.label}
                />)}
            </div>
        </Container>
    );
};

export default Categories;