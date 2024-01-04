/* eslint-disable react/prop-types */

import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";



const CategoryBox = ({ label, icon: Icon, selected }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = () =>{

        // use query-string for set url params
        let currentQuery = {}
        if( params){
            currentQuery = queryString.parse(params.toString())
            

            const updatedQuery = {...currentQuery, category: label}
 
            const url = queryString.stringifyUrl({
                url: '/',
                query: updatedQuery,
            })
           
            navigate(url)
        }
    }
    return (

        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 text-neutral-500 hover:text-neutral-900 transition cursor-pointer  ${selected ? 'border-b-neutral-800 text-neutral-800' : ' text-neutral-500'}`}>
            <Icon size={26} />
            <div className="text-sm font-medium">{label}</div>
        </div>

    );
};

export default CategoryBox; 