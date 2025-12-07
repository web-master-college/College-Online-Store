import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { fetchProduct } from '../../utils';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };
    if (productId) {
      loadProduct();
    }
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) {
    return (
      <React.Fragment>
        <Header />
        <div className="container mx-auto my-5 px-2 sm:px-8">
          <div className="text-center py-5">Loading product...</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  if (!product) {
    return (
      <React.Fragment>
        <Header />
        <div className="container mx-auto my-5 px-2 sm:px-8">
          <div className="text-center py-5">Product not found</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <BreadCrumbs />
      
      <div className="product-details container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8">
          <div className="col-span-12 max-h-[500px] md:col-span-6">
            <div className="swiper swiper-top group relative flex items-center rounded-lg">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="swiper-zoom-container">
                    <img 
                      src={product.url || '/img/product/prod-1.jpg'} 
                      alt={product.name} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="my-1">
              <Link
                className="line-clamp-2 break-all text-2xl font-medium transition-all duration-300 hover:text-primary-500"
                to={`/product/${product.id}`}>
                {product.name}
              </Link>
            </div>
            <div className="product-val-stock my-2 flex justify-between">
              <div className="" data-rater="4"></div>
              <div className="ml-auto">
                <span className={`relative z-[4] rounded-md px-2 py-1 text-xs font-bold uppercase text-white ${
                  product.stock > 0 ? 'bg-green-300' : 'bg-red-300'
                }`}>
                  {product.stock > 0 ? 'instock' : 'outofstock'}
                </span>
              </div>
            </div>
            <div className="my-5 flex items-center gap-5">
              <div className="flex rounded-lg bg-white px-3 py-2 text-primary-500 shadow">
                <span className="text-sm">$</span>
                <span className="text-2xl font-semibold leading-7">{product.price}</span>
              </div>
            </div>
            <div className="my-4">
              <p className="line-clamp-5 break-all">
                {product.description}
              </p>
            </div>
            <div className="flex gap-1">
              <form action="javascript:void(0)">
                <div className="flex flex-wrap justify-start gap-5">
                  <div className="counter inline-flex rounded-lg bg-white shadow">
                    <input
                      className="counter-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                      type="number"
                      value={quantity}
                      readOnly
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
                    <div className="flex w-5 flex-col justify-between">
                      <button 
                        className="increment text-primary-500" 
                        type="button"
                        onClick={incrementQuantity}>
                        <i className="bi bi-caret-up-fill pointer-events-none"></i>
                      </button>
                      <button 
                        className="decrement text-primary-500" 
                        type="button"
                        onClick={decrementQuantity}>
                        <i className="bi bi-caret-down-fill pointer-events-none"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="relative flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                      type="submit">
                      <i className="bi bi-cart-fill relative z-[4] flex text-xl text-white"></i>
                      <span className="relative z-[4] font-bold uppercase text-white">
                        Add to cart
                      </span>
                    </button>
                    <a
                      className="tippy tippy-wishlist wishlist-button flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-500 p-2 transition-all duration-300 hover:bg-primary-400"
                      href="javascript:void(0)">
                      <i className="bi bi-heart pointer-events-none flex text-white"></i>
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="my-5 flex flex-col gap-2">
              <a
                className="rounded-lg border bg-slate-100 p-2 transition-all duration-300 hover:bg-slate-200"
                href="javascript:void(0)"
                data-target=".modal-shipping">
                <div className="pointer-events-none flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-truck flex text-2xl text-primary-500"></i>
                    <span>Calculate Shipping Cost</span>
                  </div>
                  <i className="bi bi-arrow-right-short flex text-2xl text-primary-500"></i>
                </div>
              </a>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div className="flex gap-2">
                <b>Share:</b>
                <div className="flex items-center gap-[10px]">
                  <a href="#">
                    <i className="bi bi-facebook flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-whatsapp flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-link-45deg flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
              <h1 className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-xl font-bold uppercase">
                Description
              </h1>
            </div>
            <div className="see-more relative pb-5">
              <div className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
                <div className="see-more-content">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

