import "./slider.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

function LeftNavButton(props) {
  const { className, onClick } = props;
  return (
    <span onClick={onClick} className='slick-prev slick-arrow'>
      <i className='feather-icon icon-chevron-left'></i>
    </span>
  );
}

function RightNavButton(props) {
  const { className, onClick } = props;
  return (
    <span onClick={onClick} className='slick-next slick-arrow'>
      <i className='feather-icon icon-chevron-right'></i>
    </span>
  );
}

function Home() {

  const [allProducts, setAllProducts] = useState([]);
  const [searchQueryByProductname, setSearchQueryByProductname] = useState("");


  useEffect(() => {
    const searchObject = { name: searchQueryByProductname };
     if (searchQueryByProductname?.length > 0) {
      console.log(searchObject);
      axios
        .post("http://localhost:5000/products/prod/searchProductByName", searchObject)
        .then((res) => {
          setAllProducts(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get("http://localhost:5000/products/prod")
        .then((res) => {
          setAllProducts(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchQueryByProductname]);









  const introductions = [
    {
      imageUrl: "assets/images/slider/slide-1.jpg",
      "first-comment": "Opening Sale Discount 50%",
      "second-comment": "SuperMarket For Fresh Grocery",
      "third-comment": "",
      "fourth-comment":
        "Introduced a new model for online grocery shopping and convenient home delivery.",
      "fifth-comment": "Shop Now",
    },
    {
      imageUrl: "assets/images/slider/slider-2.jpg",
      "first-comment": "Free Shipping - orders over $100",
      "second-comment": "Free Shipping on orders over ",
      "third-comment": " $100",
      "fourth-comment":
        "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
      "fifth-comment": "Shop Now",
    },
  ];

  const categories = [
    {
      name: "tea, coffee &amp drinks",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "baby care",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "pet care",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "chicken &amp meet",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "cleaninng essentials",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "moez mahmoud",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "mekla",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "ma9rouna",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "chicken &amp meet",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "cleaninng essentials",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "moez mahmoud",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "mekla",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
    {
      name: "ma9rouna",
      src: "assets/images/category/category-tea-coffee-drinks.jpg",
    },
  ];

  //Slider settings for the intro
  const settings_intro = {
    draggable: true,
    rows: 1,
    nextArrow: null,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    dots: true,
    className: "slider-intro",
    centerMode: true,
  };

  //Slider settings for the featured categories
  const settings_feature = {
    draggable: true,
    nextArrow: <RightNavButton />,
    prevArrow: <LeftNavButton />,
    rows: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };

  const zoom = (f) => {
    const t = f.currentTarget;
    let offsetX = f.offsetX || f.touches[0].pageX;
    let offsetY = f.offsetY ? f.offsetY : f.touches[0].pageY;
    const x = (offsetX / t.offsetWidth) * 100;
    const y = (offsetY / t.offsetHeight) * 100;
    t.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div>
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='offcanvas-header border-bottom'>
          <div className='text-start'>
            <h5 id='offcanvasRightLabel' className='mb-0 fs-4'>
              Shop Cart
            </h5>
            <small>Location in 382480</small>
          </div>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <div className=''>
            <div className='alert alert-danger p-2' role='alert'>
              You’ve got FREE delivery. Start{" "}
              <a href='#!' className='alert-link'>
                checkout now!
              </a>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item py-3 ps-0 border-top'>
                <div className='row align-items-center'>
                  <div className='col-3 col-md-2'>
                    <img
                      src='assets/images/products/product-img-1.jpg'
                      alt='Ecommerce'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-4 col-md-6 col-lg-5'>
                    <a href='pages/shop-single.html' className='text-inherit'>
                      <h6 className='mb-0'>Haldiram's Sev Bhujia</h6>
                    </a>
                    <span>
                      <small className='text-muted'>.98 / lb</small>
                    </span>

                    <div className='mt-2 small lh-1'>
                      {" "}
                      <a
                        href='#!'
                        className='text-decoration-none text-inherit'
                      >
                        {" "}
                        <span className='me-1 align-text-bottom'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-trash-2 text-success'
                          >
                            <polyline points='3 6 5 6 21 6'></polyline>
                            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                            <line x1='10' y1='11' x2='10' y2='17'></line>
                            <line x1='14' y1='11' x2='14' y2='17'></line>
                          </svg>
                        </span>
                        <span className='text-muted'>Remove</span>
                      </a>
                    </div>
                  </div>

                  <div className='col-3 col-md-3 col-lg-3'>
                    <div className='input-group input-spinner  '>
                      <input
                        type='button'
                        defaultValue='-'
                        className='button-minus  btn  btn-sm '
                        data-field='quantity'
                      />
                      <input
                        type='number'
                        step='1'
                        max='10'
                        defaultValue='1'
                        name='quantity'
                        className='quantity-field form-control-sm form-input   '
                      />
                      <input
                        type='button'
                        defaultValue='+'
                        className='button-plus btn btn-sm '
                        data-field='quantity'
                      />
                    </div>
                  </div>

                  <div className='col-2 text-lg-end text-start text-md-end col-md-2'>
                    <span className='fw-bold'>$5.00</span>
                  </div>
                </div>
              </li>

              <li className='list-group-item py-3 ps-0'>
                <div className='row align-items-center'>
                  <div className='col-3 col-md-2'>
                    <img
                      src='assets/images/products/product-img-2.jpg'
                      alt='Ecommerce'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-4 col-md-6 col-lg-5'>
                    <a href='pages/shop-single.html' className='text-inherit'>
                      <h6 className='mb-0'>NutriChoice Digestive </h6>
                    </a>
                    <span>
                      <small className='text-muted'>250g</small>
                    </span>

                    <div className='mt-2 small lh-1'>
                      {" "}
                      <a
                        href='#!'
                        className='text-decoration-none text-inherit'
                      >
                        {" "}
                        <span className='me-1 align-text-bottom'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-trash-2 text-success'
                          >
                            <polyline points='3 6 5 6 21 6'></polyline>
                            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                            <line x1='10' y1='11' x2='10' y2='17'></line>
                            <line x1='14' y1='11' x2='14' y2='17'></line>
                          </svg>
                        </span>
                        <span className='text-muted'>Remove</span>
                      </a>
                    </div>
                  </div>
                  <div className='col-3 col-md-3 col-lg-3'>
                    <div className='input-group input-spinner  '>
                      <input
                        type='button'
                        defaultValue='-'
                        className='button-minus  btn  btn-sm '
                        data-field='quantity'
                      />
                      <input
                        type='number'
                        step='1'
                        max='10'
                        defaultValue='1'
                        name='quantity'
                        className='quantity-field form-control-sm form-input   '
                      />
                      <input
                        type='button'
                        defaultValue='+'
                        className='button-plus btn btn-sm '
                        data-field='quantity'
                      />
                    </div>
                  </div>

                  <div className='col-2 text-lg-end text-start text-md-end col-md-2'>
                    <span className='fw-bold text-danger'>$20.00</span>
                    <div className='text-decoration-line-through text-muted small'>
                      $26.00
                    </div>
                  </div>
                </div>
              </li>

              <li className='list-group-item py-3 ps-0'>
                <div className='row align-items-center'>
                  <div className='col-3 col-md-2'>
                    <img
                      src='assets/images/products/product-img-3.jpg'
                      alt='Ecommerce'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-4 col-md-6 col-lg-5'>
                    <a href='pages/shop-single.html' className='text-inherit'>
                      <h6 className='mb-0'>Cadbury 5 Star Chocolate</h6>
                    </a>
                    <span>
                      <small className='text-muted'>1 kg</small>
                    </span>

                    <div className='mt-2 small lh-1'>
                      {" "}
                      <a
                        href='#!'
                        className='text-decoration-none text-inherit'
                      >
                        {" "}
                        <span className='me-1 align-text-bottom'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-trash-2 text-success'
                          >
                            <polyline points='3 6 5 6 21 6'></polyline>
                            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                            <line x1='10' y1='11' x2='10' y2='17'></line>
                            <line x1='14' y1='11' x2='14' y2='17'></line>
                          </svg>
                        </span>
                        <span className='text-muted'>Remove</span>
                      </a>
                    </div>
                  </div>

                  <div className='col-3 col-md-3 col-lg-3'>
                    <div className='input-group input-spinner  '>
                      <input
                        type='button'
                        defaultValue='-'
                        className='button-minus  btn  btn-sm '
                        data-field='quantity'
                      />
                      <input
                        type='number'
                        step='1'
                        max='10'
                        defaultValue='1'
                        name='quantity'
                        className='quantity-field form-control-sm form-input   '
                      />
                      <input
                        type='button'
                        defaultValue='+'
                        className='button-plus btn btn-sm '
                        data-field='quantity'
                      />
                    </div>
                  </div>

                  <div className='col-2 text-lg-end text-start text-md-end col-md-2'>
                    <span className='fw-bold'>$15.00</span>
                    <div className='text-decoration-line-through text-muted small'>
                      $20.00
                    </div>
                  </div>
                </div>
              </li>

              <li className='list-group-item py-3 ps-0'>
                <div className='row align-items-center'>
                  <div className='col-3 col-md-2'>
                    <img
                      src='assets/images/products/product-img-4.jpg'
                      alt='Ecommerce'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-4 col-md-6 col-lg-5'>
                    <a href='pages/shop-single.html' className='text-inherit'>
                      <h6 className='mb-0'>Onion Flavour Potato</h6>
                    </a>
                    <span>
                      <small className='text-muted'>250g</small>
                    </span>

                    <div className='mt-2 small lh-1'>
                      {" "}
                      <a
                        href='#!'
                        className='text-decoration-none text-inherit'
                      >
                        {" "}
                        <span className='me-1 align-text-bottom'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-trash-2 text-success'
                          >
                            <polyline points='3 6 5 6 21 6'></polyline>
                            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                            <line x1='10' y1='11' x2='10' y2='17'></line>
                            <line x1='14' y1='11' x2='14' y2='17'></line>
                          </svg>
                        </span>
                        <span className='text-muted'>Remove</span>
                      </a>
                    </div>
                  </div>

                  <div className='col-3 col-md-3 col-lg-3'>
                    <div className='input-group input-spinner  '>
                      <input
                        type='button'
                        defaultValue='-'
                        className='button-minus  btn  btn-sm '
                        data-field='quantity'
                      />
                      <input
                        type='number'
                        step='1'
                        max='10'
                        defaultValue='1'
                        name='quantity'
                        className='quantity-field form-control-sm form-input   '
                      />
                      <input
                        type='button'
                        defaultValue='+'
                        className='button-plus btn btn-sm '
                        data-field='quantity'
                      />
                    </div>
                  </div>

                  <div className='col-2 text-lg-end text-start text-md-end col-md-2'>
                    <span className='fw-bold'>$15.00</span>
                    <div className='text-decoration-line-through text-muted small'>
                      $20.00
                    </div>
                  </div>
                </div>
              </li>

              <li className='list-group-item py-3 ps-0 border-bottom'>
                <div className='row align-items-center'>
                  <div className='col-3 col-md-2'>
                    <img
                      src='assets/images/products/product-img-5.jpg'
                      alt='Ecommerce'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-4 col-md-6 col-lg-5'>
                    <a href='pages/shop-single.html' className='text-inherit'>
                      <h6 className='mb-0'>Salted Instant Popcorn </h6>
                    </a>
                    <span>
                      <small className='text-muted'>100g</small>
                    </span>

                    <div className='mt-2 small lh-1'>
                      {" "}
                      <a
                        href='#!'
                        className='text-decoration-none text-inherit'
                      >
                        {" "}
                        <span className='me-1 align-text-bottom'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-trash-2 text-success'
                          >
                            <polyline points='3 6 5 6 21 6'></polyline>
                            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                            <line x1='10' y1='11' x2='10' y2='17'></line>
                            <line x1='14' y1='11' x2='14' y2='17'></line>
                          </svg>
                        </span>
                        <span className='text-muted'>Remove</span>
                      </a>
                    </div>
                  </div>

                  <div className='col-3 col-md-3 col-lg-3'>
                    <div className='input-group input-spinner  '>
                      <input
                        type='button'
                        defaultValue='-'
                        className='button-minus  btn  btn-sm '
                        data-field='quantity'
                      />
                      <input
                        type='number'
                        step='1'
                        max='10'
                        defaultValue='1'
                        name='quantity'
                        className='quantity-field form-control-sm form-input   '
                      />
                      <input
                        type='button'
                        defaultValue='+'
                        className='button-plus btn btn-sm '
                        data-field='quantity'
                      />
                    </div>
                  </div>

                  <div className='col-2 text-lg-end text-start text-md-end col-md-2'>
                    <span className='fw-bold'>$15.00</span>
                    <div className='text-decoration-line-through text-muted small'>
                      $25.00
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className='d-flex justify-content-between mt-4'>
              <a href='#!' className='btn btn-primary'>
                Continue Shopping
              </a>
              <a href='#!' className='btn btn-dark'>
                Update Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade'
        id='locationModal'
        tabIndex='-1'
        aria-labelledby='locationModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-sm modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body p-6'>
              <div className='d-flex justify-content-between align-items-start '>
                <div>
                  <h5 className='mb-1' id='locationModalLabel'>
                    Choose your Delivery Location
                  </h5>
                  <p className='mb-0 small'>
                    Enter your address and we will specify the offer you area.{" "}
                  </p>
                </div>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='my-5'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search your area'
                />
              </div>
              <div className='d-flex justify-content-between align-items-center mb-2'>
                <h6 className='mb-0'>Select Location</h6>
                <a
                  href='#'
                  className='btn btn-outline-gray-400 text-muted btn-sm'
                >
                  Clear All
                </a>
              </div>
              <div>
                <div data-simplebar style={{ height: "300px" }}>
                  <div className='list-group list-group-flush'>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action active'
                    >
                      <span>Alabama</span>
                      <span>Min:$20</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Alaska</span>
                      <span>Min:$30</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Arizona</span>
                      <span>Min:$50</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>California</span>
                      <span>Min:$29</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Colorado</span>
                      <span>Min:$80</span>
                    </a>
                    <a
                      href='#'
                      className='list-group-item d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action'
                    >
                      <span>Florida</span>
                      <span>Min:$90</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className='mt-8'>
          <div className='container'>
            <Slider className='silder-intro' {...settings_intro}>
              {introductions.map((intro, index) => (
                <div className='intro'>
                  <div
                    className='intro-container'
                    style={{
                      backgroundImage: `url(${intro.imageUrl})`,
                    }}
                  >
                    <div className='ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center'>
                      <span className='badge text-bg-warning'>
                        {intro["first-comment"]}
                      </span>
                      <h2 className='text-dark display-5 fw-bold mt-4'>
                        {intro["second-comment"]}
                        <span className='text-primary'>
                          {intro["third-comment"]}
                        </span>
                      </h2>
                      <p className='lead'>{intro["fourth-comment"]}</p>
                      <a href='#!' className='btn btn-dark mt-3'>
                        Shop Now{" "}
                        <i className='feather-icon icon-arrow-right ms-1'></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className='mb-lg-10 mt-lg-14 my-8'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 mb-6'>
                <h3 className='mb-0'>Featured Categories</h3>
              </div>
            </div>
            <div className='category-slider'>
              <Slider className='silder-feature' {...settings_feature}>
                {categories.map((category, index) => (
                  <a
                    href='pages/shop-grid.html'
                    className='text-decoration-none text-inherit'
                    tabIndex='-1'
                  >
                    <div className='card card-product '>
                      <div className='card-body text-center  py-8'>
                        <img
                          src={category.src}
                          alt='Grocery Ecommerce Template'
                          className='mb-3'
                        />
                        <div className='text-truncate'>{category.name}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6 mb-3 mb-lg-0'>
                <div>
                  <div
                    className='py-10 px-8 rounded'
                    style={{
                      background:
                        "url(assets/images/banner/grocery-banner.png)no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <h3 className='fw-bold mb-1'>Fruits & Vegetables</h3>
                      <p className='mb-4'>
                        Get Upto <span className='fw-bold'>30%</span> Off
                      </p>
                      <a href='#!' className='btn btn-dark'>
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 '>
                <div>
                  <div
                    className='py-10 px-8 rounded'
                    style={{
                      background:
                        "url(assets/images/banner/grocery-banner-2.jpg)no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <h3 className='fw-bold mb-1'>Freshly Baked Buns</h3>
                      <p className='mb-4'>
                        Get Upto <span className='fw-bold'>25%</span> Off
                      </p>
                      <a href='#!' className='btn btn-dark'>
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


       {/****** Product List   ********/}
        <section className='my-lg-14 my-8'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 mb-6'>
                <h3 className='mb-0'>Popular Products</h3>
              </div>
            </div>
            <div className='row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3'>
            {allProducts?.map((product, index) => {
              return(
                <div className='col' key={index}>
                  <div className='card card-product'>
                    <div className='card-body'>
                      <div className='text-center position-relative '>
                         {/* stock */}
                        <div className=' position-absolute top-0 start-0'>
                          <span 
                          className={`badge 
                          ${product?.inStock ? 
                          "bg-success" : "bg-danger"}`
                          }>
                          {product?.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                        {/* image */}
                        <a href='#!'>
                          {" "}
                          <img
                            src='assets/images/products/product-img-1.jpg'
                            alt='Grocery Ecommerce Template'
                            className='mb-3 img-fluid'
                          />
                        </a>
                        {/* action */}
                        <div className='card-product-action'>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='modal'
                            data-bs-target='#quickViewModal'
                          >
                            <i
                              className='bi bi-eye'
                              data-bs-toggle='tooltip'
                              data-bs-html='true'
                              title='Quick View'
                            ></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Wishlist'
                          >
                            <i className='bi bi-heart'></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Compare'
                          >
                            <i className='bi bi-arrow-left-right'></i>
                          </a>
                        </div>
                      </div>
                       {/* category */}
                      <div className='text-small mb-1'>
                        <a href='#!' className='text-decoration-none text-muted'>
                          <small> {product.category}</small>
                        </a>
                      </div>
                       {/* name */}
                      <h2 className='fs-6'>
                      <Link to={`/productDetail?id=${product._id}`}>
                        <a
                          href='pages/shop-single.html'
                          className='text-inherit text-decoration-none'
                        >
                           {product.name}
                        </a>
                        </Link>
                      </h2>
                       {/* rating */}
                      <div>
                        <small className='text-warning'>
                          {" "}
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-half'></i>
                        </small>{" "}
                        <span className='text-muted small'>4.5(149)</span>
                      </div>
                      
                      <div className='d-flex justify-content-between align-items-center mt-3'>
                        {/* Price */}
                        <div>
                          <span className='text-dark'>{product.reduction} DT</span>{" "}
                          <span className='text-decoration-line-through text-muted'>
                          {product.price} DT
                          </span>
                        </div>
                        {/* Add to shop */}
                        <div>
                          <a href='#!' className='btn btn-primary btn-sm'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='feather feather-plus'
                            >
                              <line x1='12' y1='5' x2='12' y2='19'></line>
                              <line x1='5' y1='12' x2='19' y2='12'></line>
                            </svg>{" "}
                            Add
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              );
            })}
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 mb-6'>
                <h3 className='mb-0'>Daily Best Sells</h3>
              </div>
            </div>
            <div className='table-responsive-xl pb-6'>
              <div className='row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap'>
                <div className='col'>
                  <div
                    className=' pt-8 px-6 px-xl-8 rounded'
                    style={{
                      background:
                        "url(assets/images/banner/banner-deal.jpg)no-repeat",
                      backgroundSize: "cover",
                      height: "470px",
                    }}
                  >
                    <div>
                      <h3 className='fw-bold text-white'>
                        100% Organic Coffee Beans.
                      </h3>
                      <p className='text-white'>
                        Get the best deal before close.
                      </p>
                      <a href='#!' className='btn btn-primary'>
                        Shop Now{" "}
                        <i className='feather-icon icon-arrow-right ms-1'></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card card-product'>
                    <div className='card-body'>
                      <div className='text-center  position-relative '>
                        {" "}
                        <a href='pages/shop-single.html'>
                          <img
                            src='assets/images/products/product-img-11.jpg'
                            alt='Grocery Ecommerce Template'
                            className='mb-3 img-fluid'
                          />
                        </a>
                        <div className='card-product-action'>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='modal'
                            data-bs-target='#quickViewModal'
                          >
                            <i
                              className='bi bi-eye'
                              data-bs-toggle='tooltip'
                              data-bs-html='true'
                              title='Quick View'
                            ></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Wishlist'
                          >
                            <i className='bi bi-heart'></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Compare'
                          >
                            <i className='bi bi-arrow-left-right'></i>
                          </a>
                        </div>
                      </div>
                      <div className='text-small mb-1'>
                        <a
                          href='#!'
                          className='text-decoration-none text-muted'
                        >
                          <small>Tea, Coffee & Drinks</small>
                        </a>
                      </div>
                      <h2 className='fs-6'>
                        <a
                          href='pages/shop-single.html'
                          className='text-inherit text-decoration-none'
                        >
                          Roast Ground Coffee
                        </a>
                      </h2>

                      <div className='d-flex justify-content-between align-items-center mt-3'>
                        <div>
                          <span className='text-dark'>$13</span>{" "}
                          <span className='text-decoration-line-through text-muted'>
                            $18
                          </span>
                        </div>
                        <div>
                          <small className='text-warning'>
                            {" "}
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-half'></i>
                          </small>
                          <span>
                            <small>4.5</small>
                          </span>
                        </div>
                      </div>
                      <div className='d-grid mt-2'>
                        <a href='#!' className='btn btn-primary '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-plus'
                          >
                            <line x1='12' y1='5' x2='12' y2='19'></line>
                            <line x1='5' y1='12' x2='19' y2='12'></line>
                          </svg>{" "}
                          Add to cart{" "}
                        </a>
                      </div>
                      <div className='d-flex justify-content-start text-center mt-3'>
                        <div
                          className='deals-countdown w-100'
                          data-countdown='2028/10/10 00:00:00'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card card-product'>
                    <div className='card-body'>
                      <div className='text-center  position-relative '>
                        {" "}
                        <a href='pages/shop-single.html'>
                          <img
                            src='assets/images/products/product-img-12.jpg'
                            alt='Grocery Ecommerce Template'
                            className='mb-3 img-fluid'
                          />
                        </a>
                        <div className='card-product-action'>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='modal'
                            data-bs-target='#quickViewModal'
                          >
                            <i
                              className='bi bi-eye'
                              data-bs-toggle='tooltip'
                              data-bs-html='true'
                              title='Quick View'
                            ></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Wishlist'
                          >
                            <i className='bi bi-heart'></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Compare'
                          >
                            <i className='bi bi-arrow-left-right'></i>
                          </a>
                        </div>
                      </div>
                      <div className='text-small mb-1'>
                        <a
                          href='#!'
                          className='text-decoration-none text-muted'
                        >
                          <small>Fruits & Vegetables</small>
                        </a>
                      </div>
                      <h2 className='fs-6'>
                        <a
                          href='pages/shop-single.html'
                          className='text-inherit text-decoration-none'
                        >
                          Crushed Tomatoes
                        </a>
                      </h2>
                      <div className='d-flex justify-content-between align-items-center mt-3'>
                        <div>
                          <span className='text-dark'>$13</span>{" "}
                          <span className='text-decoration-line-through text-muted'>
                            $18
                          </span>
                        </div>
                        <div>
                          <small className='text-warning'>
                            {" "}
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-half'></i>
                          </small>
                          <span>
                            <small>4.5</small>
                          </span>
                        </div>
                      </div>
                      <div className='d-grid mt-2'>
                        <a href='#!' className='btn btn-primary '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-plus'
                          >
                            <line x1='12' y1='5' x2='12' y2='19'></line>
                            <line x1='5' y1='12' x2='19' y2='12'></line>
                          </svg>{" "}
                          Add to cart{" "}
                        </a>
                      </div>
                      <div className='d-flex justify-content-start text-center mt-3 w-100'>
                        <div
                          className='deals-countdown w-100'
                          data-countdown='2028/12/9 00:00:00'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card card-product'>
                    <div className='card-body'>
                      <div className='text-center  position-relative '>
                        {" "}
                        <a href='pages/shop-single.html'>
                          <img
                            src='assets/images/products/product-img-13.jpg'
                            alt='Grocery Ecommerce Template'
                            className='mb-3 img-fluid'
                          />
                        </a>
                        <div className='card-product-action'>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='modal'
                            data-bs-target='#quickViewModal'
                          >
                            <i
                              className='bi bi-eye'
                              data-bs-toggle='tooltip'
                              data-bs-html='true'
                              title='Quick View'
                            ></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Wishlist'
                          >
                            <i className='bi bi-heart'></i>
                          </a>
                          <a
                            href='#!'
                            className='btn-action'
                            data-bs-toggle='tooltip'
                            data-bs-html='true'
                            title='Compare'
                          >
                            <i className='bi bi-arrow-left-right'></i>
                          </a>
                        </div>
                      </div>
                      <div className='text-small mb-1'>
                        <a
                          href='#!'
                          className='text-decoration-none text-muted'
                        >
                          <small>Fruits & Vegetables</small>
                        </a>
                      </div>
                      <h2 className='fs-6'>
                        <a
                          href='pages/shop-single.html'
                          className='text-inherit text-decoration-none'
                        >
                          Golden Pineapple
                        </a>
                      </h2>
                      <div className='d-flex justify-content-between align-items-center mt-3'>
                        <div>
                          <span className='text-dark'>$13</span>{" "}
                          <span className='text-decoration-line-through text-muted'>
                            $18
                          </span>
                        </div>
                        <div>
                          <small className='text-warning'>
                            {" "}
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-half'></i>
                          </small>
                          <span>
                            <small>4.5</small>
                          </span>
                        </div>
                      </div>
                      <div className='d-grid mt-2'>
                        <a href='#!' className='btn btn-primary '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-plus'
                          >
                            <line x1='12' y1='5' x2='12' y2='19'></line>
                            <line x1='5' y1='12' x2='19' y2='12'></line>
                          </svg>{" "}
                          Add to cart{" "}
                        </a>
                      </div>
                      <div className='d-flex justify-content-start text-center mt-3'>
                        <div
                          className='deals-countdown w-100'
                          data-countdown='2028/11/11 00:00:00'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='my-lg-14 my-8'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-lg-3'>
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'>
                    <img src='assets/images/icons/clock.svg' alt='' />
                  </div>
                  <h3 className='h5 mb-3'>10 minute grocery now</h3>
                  <p>
                    Get your order delivered to your doorstep at the earliest
                    from EcoWaste pickup stores near you.
                  </p>
                </div>
              </div>
              <div className='col-md-6  col-lg-3'>
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'>
                    <img src='assets/images/icons/gift.svg' alt='' />
                  </div>
                  <h3 className='h5 mb-3'>Best Prices & Offers</h3>
                  <p>
                    Cheaper prices than your local supermarket, great cashback
                    offers to top it off. Get best pricess & offers.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-lg-3'>
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'>
                    <img src='assets/images/icons/package.svg' alt='' />
                  </div>
                  <h3 className='h5 mb-3'>Wide Assortment</h3>
                  <p>
                    Choose from 5000+ products across food, personal care,
                    household, bakery, veg and non-veg & other categories.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-lg-3'>
                <div className='mb-8 mb-xl-0'>
                  <div className='mb-6'>
                    <img src='assets/images/icons/refresh-cw.svg' alt='' />
                  </div>
                  <h3 className='h5 mb-3'>Easy Returns</h3>
                  <p>
                    Not satisfied with a product? Return it at the doorstep &
                    get a refund within hours. No questions asked
                    <a href='#!'>policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    {/* quick View Modal */}
      <div
        className='modal fade'
        id='quickViewModal'
        tabIndex='-1'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body p-8'>
              <div className='position-absolute top-0 end-0 me-3 mt-3'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='product productModal' id='productModal'>
                    <div
                      className='zoom'
                      onMouseMove={(event) => zoom(event)}
                      style={{
                        backgroundImage:
                          "url(assets/images/products/product-single-img-1.jpg)",
                      }}
                    >
                      <img
                        src='assets/images/products/product-single-img-1.jpg'
                        alt=''
                      />
                    </div>
                    <div>
                      <div
                        className='zoom'
                        onMouseMove={(event) => zoom(event)}
                        style={{
                          backgroundImage:
                            "url(assets/images/products/product-single-img-2.jpg)",
                        }}
                      >
                        <img
                          src='assets/images/products/product-single-img-2.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className='zoom'
                        onMouseMove={(event) => zoom(event)}
                        style={{
                          backgroundImage:
                            " url(assets/images/products/product-single-img-3.jpg)",
                        }}
                      >
                        <img
                          src='assets/images/products/product-single-img-3.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className='zoom'
                        onMouseMove={(event) => zoom(event)}
                        style={{
                          backgroundImage:
                            "url(assets/images/products/product-single-img-4.jpg)",
                        }}
                      >
                        <img
                          src='assets/images/products/product-single-img-4.jpg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>

                  <div className='product-tools'>
                    <div
                      className='thumbnails row g-3'
                      id='productModalThumbnails'
                    >
                      <div className='col-3 tns-nav-active'>
                        <div className='thumbnails-img'>
                          <img
                            src='assets/images/products/product-single-img-1.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='col-3'>
                        <div className='thumbnails-img'>
                          <img
                            src='assets/images/products/product-single-img-2.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='col-3'>
                        <div className='thumbnails-img'>
                          <img
                            src='assets/images/products/product-single-img-3.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='col-3'>
                        <div className='thumbnails-img'>
                          <img
                            src='assets/images/products/product-single-img-4.jpg'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='ps-lg-8 mt-6 mt-lg-0'>
                    <a href='#!' className='mb-4 d-block'>
                      Bakery Biscuits
                    </a>
                    <h2 className='mb-1 h1'>Napolitanke Ljesnjak</h2>
                    <div className='mb-4'>
                      <small className='text-warning'>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-fill'></i>
                        <i className='bi bi-star-half'></i>
                      </small>
                      <a href='#' className='ms-2'>
                        (30 reviews)
                      </a>
                    </div>
                    <div className='fs-4'>
                      <span className='fw-bold text-dark'>$32</span>
                      <span className='text-decoration-line-through text-muted'>
                        $35
                      </span>
                      <span>
                        <small className='fs-6 ms-2 text-danger'>26% Off</small>
                      </span>
                    </div>
                    <hr className='my-6' />
                    <div className='mb-4'>
                      <button
                        type='button'
                        className='btn btn-outline-secondary'
                      >
                        250g
                      </button>
                      <button
                        type='button'
                        className='btn btn-outline-secondary'
                      >
                        500g
                      </button>
                      <button
                        type='button'
                        className='btn btn-outline-secondary'
                      >
                        1kg
                      </button>
                    </div>
                    <div>
                      <div className='input-group input-spinner  '>
                        <input
                          type='button'
                          defaultValue='-'
                          className='button-minus  btn  btn-sm '
                          data-field='quantity'
                        />
                        <input
                          type='number'
                          step='1'
                          max='10'
                          defaultValue='1'
                          name='quantity'
                          className='quantity-field form-control-sm form-input   '
                        />
                        <input
                          type='button'
                          defaultValue='+'
                          className='button-plus btn btn-sm '
                          data-field='quantity'
                        />
                      </div>
                    </div>
                    <div className='mt-3 row justify-content-start g-2 align-items-center'>
                      <div className='col-lg-4 col-md-5 col-6 d-grid'>
                        <button type='button' className='btn btn-primary'>
                          <i className='feather-icon icon-shopping-bag me-2'></i>
                          Add to cart
                        </button>
                      </div>
                      <div className='col-md-4 col-5'>
                        <a
                          className='btn btn-light'
                          href='#'
                          data-bs-toggle='tooltip'
                          data-bs-html='true'
                          aria-label='Compare'
                        >
                          <i className='bi bi-arrow-left-right'></i>
                        </a>
                        <a
                          className='btn btn-light'
                          href='#!'
                          data-bs-toggle='tooltip'
                          data-bs-html='true'
                          aria-label='Wishlist'
                        >
                          <i className='feather-icon icon-heart'></i>
                        </a>
                      </div>
                    </div>
                    <hr className='my-6' />
                    <div>
                      <table className='table table-borderless'>
                        <tbody>
                          <tr>
                            <td>Product Code:</td>
                            <td>FBB00255</td>
                          </tr>
                          <tr>
                            <td>Availability:</td>
                            <td>In Stock</td>
                          </tr>
                          <tr>
                            <td>Type:</td>
                            <td>Fruits</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>
                              <small>
                                01 day shipping.
                                <span className='text-muted'>
                                  ( Free pickup today)
                                </span>
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
