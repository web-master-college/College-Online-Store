import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePrevious } from '../../customHooks';
import { addCategory, removeCategory } from '../../reducers/categorySlice';

export default function CategoryBox(props) {
    const selectedCategories = useSelector(state => state.category.selectedCategories);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const prevCategories = usePrevious(selectedCategories, []);

    console.log('All Categories', selectedCategories);

    const onClickCategory = e =>{
        const categoryId = parseInt(e.target.dataset.categoryid);
        const isChecked  = e.target.checked;
        if(isChecked){
            console.log('adding ', categoryId)
            dispatch(addCategory(categoryId));
        }else{
            console.log('removing ', categoryId)
            dispatch(removeCategory(categoryId));
        }
        
       
    }   

    useEffect(() =>{
            if(selectedCategories.length !== prevCategories.length){
                navigate(`/category?categoryId=${selectedCategories.join(',')}`)
            }
    },[selectedCategories.length, prevCategories.length])


    const selectedCategoriesMap = new Set(selectedCategories);
    return (
        <label
            className="flex cursor-pointer select-none items-center gap-2 p-1 transition-all duration-300 hover:text-primary-500"
            key={props.category.id}>
            <input
                data-total-categories={selectedCategories.length}
                className="h-4 w-4 rounded border text-primary-500 focus:border-transparent focus:ring focus:ring-primary-400 focus:ring-offset-0"
                type="checkbox" onChange={onClickCategory} defaultChecked={selectedCategoriesMap.has(props.category.id)} data-categoryid={props.category.id} />
            <span>{props.category.name}</span>
        </label>
    )
}
