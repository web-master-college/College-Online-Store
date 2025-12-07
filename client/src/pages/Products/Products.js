import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import TopTitle from '../../components/TopTitle/TopTitle';
import { fetchProducts } from '../../utils';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <BreadCrumbs />
      <TopTitle />
      
      <div className="section">
        <div className="container">
          <div className="row">
            {loading ? (
              <div className="text-center py-5">Loading products...</div>
            ) : (
              <div className="grid grid-cols-12 gap-5 px-2 sm:px-8">
                {products.map((product) => (
                  <div key={product.id} className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="card-container relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all duration-300 hover:z-[2] hover:-translate-y-2 hover:shadow-xl">
                      <div className="absolute right-[10px] top-[10px]">
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-wishlist wishlist-button flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)">
                            <i className="bi bi-heart pointer-events-none flex text-white"></i>
                          </a>
                        </div>
                        <div className="p-[2px]">
                          <a
                            className="tippy tippy-left-card-view flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-black/30 transition-all duration-300 hover:bg-primary-400"
                            href="javascript:void(0)"
                            data-target=".modal-quick">
                            <i className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
                          </a>
                        </div>
                      </div>
                      <div className="h-[190px] overflow-hidden rounded-lg">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="h-full w-full object-contain"
                            src={product.url || '/img/product/prod-1.jpg'}
                            alt={product.name} />
                        </Link>
                      </div>
                      <div className="my-2 flex justify-between">
                        <div className="my-2" data-rater="5"></div>
                        <div>
                          <span className={`relative z-[4] rounded-md px-2 py-1 text-xs font-bold uppercase text-white ${
                            product.stock > 0 ? 'bg-green-300' : 'bg-red-300'
                          }`}>
                            {product.stock > 0 ? 'instock' : 'outofstock'}
                          </span>
                        </div>
                      </div>
                      <div className="my-1">
                        <Link className="line-clamp-1 break-all font-medium" to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </div>
                      <div className="my-1">
                        <p className="line-clamp-2 text-sm text-gray-400">
                          {product.description}
                        </p>
                      </div>
                      <div className="my-1">
                        <span className="text-lg font-bold">{product.price}&#8362;</span>
                      </div>
                      <div className="mt-auto">
                        <Link
                          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                          to={`/product/${product.id}`}>
                          <span className="relative z-[4] font-bold uppercase text-white">
                            View details
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

