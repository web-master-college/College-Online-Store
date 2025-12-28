import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CategoryBox(props) {
    const navigate = useNavigate();
    const selectedCategories = useSelector(state => state.category.selectedCategories);


    const onClickCategory = e =>{
        const categoryId = e.target.dataset.categoryid;
        navigate(`/category/${categoryId}`,{
            state: {
                categoryName: props.category.name
            }
        });
    }   

    return (
        <label
            className="flex cursor-pointer select-none items-center gap-2 p-1 transition-all duration-300 hover:text-primary-500"
            key={props.category.id}>
            <input
                className="h-4 w-4 rounded border text-primary-500 focus:border-transparent focus:ring focus:ring-primary-400 focus:ring-offset-0"
                type="checkbox" onChange={onClickCategory} defaultChecked={selectedCategories.has(props.category.id)} data-categoryid={props.category.id} />
            <span>{props.category.name}</span>
        </label>
    )
}
