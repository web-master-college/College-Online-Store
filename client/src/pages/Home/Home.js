import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { fetchProducts } from '../../utils';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
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
      
      {/* Banners Section */}
      <div className="banners-section container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="swiper-container col-span-12 overflow-hidden rounded-lg md:col-span-8">
            <div className="swiper swiper-banner group relative flex items-center">
              <div className="swiper-wrapper max-h-[377px]">
                <div className="swiper-slide">
                  <img src="/img/banner/banner-1.jpg" alt="banner 1" />
                </div>
                <div className="swiper-slide">
                  <img src="/img/banner/banner-2.jpg" alt="banner 2" />
                </div>
                <div className="swiper-slide">
                  <img src="/img/banner/banner-3.jpg" alt="banner 3" />
                </div>
              </div>
              <div className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
                &#10095;
              </div>
              <div className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
                &#10094;
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="group relative col-span-4 hidden overflow-hidden rounded-lg md:block">
            <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-transparent to-black/70"></div>
            <img
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 hover:transform"
              src="/img/categories/sec-desktop-g.jpg"
              alt="banner-img" />
            <div className="absolute left-0 top-0 flex h-full w-full items-center">
              <div className="z-[2] p-5">
                <h3 className="text-lg font-bold uppercase text-primary-500 drop-shadow-xl">
                  Armed pc gamer
                </h3>
                <p className="my-5 text-white drop-shadow-md">
                  Choose your pc and play!
                </p>
                <Link
                  className="relative inline-block overflow-hidden rounded-lg bg-primary-500 px-3 py-2 text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                  to="/products">
                  <span className="relative z-[4]">Shop now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="information-section container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2">
                <i className="bi bi-truck flex p-3 text-[40px] text-primary-500"></i>
              </div>
              <div>
                <h6 className="font-bold capitalize">Free shipping</h6>
                <p className="break-all text-sm text-gray-400">Orders over $100</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2">
                <i className="bi bi-cash-coin flex p-3 text-[40px] text-primary-500"></i>
              </div>
              <div>
                <h6 className="font-bold capitalize">Money back</h6>
                <p className="break-all text-sm text-gray-400">With a 30 day</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2">
                <i className="bi bi-shield-check flex p-3 text-[40px] text-primary-500"></i>
              </div>
              <div>
                <h6 className="font-bold capitalize">Secure payment</h6>
                <p className="break-all text-sm text-gray-400">Secured payment</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex sm:col-span-6 lg:col-span-3">
            <div className="flex w-full items-center gap-4 rounded-lg bg-white p-5 transition-all duration-300 hover:shadow-lg xs:pl-[20%] sm:pl-5">
              <div className="rounded-full border-2">
                <i className="bi bi-headset flex p-3 text-[40px] text-primary-500"></i>
              </div>
              <div>
                <h6 className="font-bold capitalize">Online support</h6>
                <p className="break-all text-sm text-gray-400">Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="offers-section container mx-auto my-5 px-2 sm:px-8">
        <div className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
          <h1 className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-2xl font-bold uppercase">
            Offers
          </h1>
        </div>

        {loading ? (
          <div className="py-5 text-center">Loading products...</div>
        ) : (
          <div className="swiper swiper-cards-1 group relative flex items-center py-5">
            <div className="swiper-wrapper">
            <Swiper
              className="swiper-wrapper"
              loop={true}
              spaceBetween={20}
              slidesPerView={4}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
               autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {products.map((product) => (
                 <SwiperSlide>
                <div key={product.id} className="swiper-slide h-auto">
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
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </React.Fragment>
  );
}

