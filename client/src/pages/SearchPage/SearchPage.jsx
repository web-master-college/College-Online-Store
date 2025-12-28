import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { useLocation } from 'react-router-dom';

export default function SearchPage(props) {

    const location = useLocation();
    const {products, searchValue} = location.state || {}

    return (
        <>
            <Header />
            <BreadCrumbs first={'Home'} second={props.second} />
            <Search products={products} searchValue={searchValue} {...props}/> 
            <Footer />
        </>
    )
}
