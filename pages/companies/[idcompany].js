import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCompanyById, getProductsByCompany } from "../../services/companies";

const Company = () => {
  const router = useRouter();
  const [companyInfo, setCompanyInfo] = useState();
  const [companyId, setCompanyId] = useState();

  useEffect(() => {
    const { idcompany } = router?.query;
    setCompanyId(idcompany);
    async function getCompanyInfo() {
      if(!!idcompany){
        const response = await getCompanyById(idcompany);
        setCompanyInfo(response);
      }
    }
    getCompanyInfo();
  }, [router.query.idcompany]);
  return (
    <>
      <div className="lg:w-8/12 lg:mx-auto mb-8">
        <header className="flex flex-wrap items-center p-4 md:py-8">
          {/* Profile Picture */}
          <ProfileInfo companyInfo={companyInfo} />

          {/* Meta Company */}
          <MetaInfo companyInfo={companyInfo} />
        </header>
        <ProductList companyInfo={companyInfo} companyId={companyId} />
      </div>
    </>
  );
};

export default Company;

const ProfileInfo = (props) => {
  const { companyInfo } = props;
  return (
    <>
      <div className="md:w-3/12 md:ml-16">
        <img
          className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-green-500 p-1"
          src={companyInfo?.profile_picture}
          alt={companyInfo?.social_reason}
        />
      </div>
    </>
  );
};

const MetaInfo = (props) => {
  const { companyInfo } = props;
  return (
    <>
      <div className="w-8/12 md:w-7/12 ml-4">
        <div className="md:flex md:flex-wrap md:items-center mb-4">
          <h2 className="text-4xl inline-block font-normal text-grey-900 md:mr-2 mb-2 sm:mb-0">
            {companyInfo?.social_reason}
          </h2>

          {/* <!-- badge --> */}
          <span
            className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2"
            aria-hidden="true"
          >
            <i
              className="fas fa-check text-white text-xs inset-x-0
                               ml-1 mt-px"
            ></i>
          </span>

          {/* <!-- follow button --> */}
          {/* <a
            href="#"
            className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block block"
          >
            Follow
          </a> */}
        </div>

        {/* <!-- post, following, followers list for medium screens --> */}
        <ul className="hidden md:flex space-x-8 mb-4">
          <li>
            <span className="font-semibold">136 </span>
            products
          </li>

          <li>
            <span className="font-semibold">40.5k </span>
            sales
          </li>
          <li>
            <span className="font-semibold">5.0 </span>
            rate
          </li>
        </ul>

        {/* <!-- user meta form medium screens --> */}
        <div className="hidden md:block">{companyInfo?.description}</div>
      </div>
    </>
  );
};

const ProductList = (props) => {
  const { companyInfo, companyId } = props;
  const [ productList, setProductList ] = useState([])
  const [ productFilters, setProductFilter ] = useState({colors:[''],sizes:[''],materials:['']})
  const [ limit, setLimit ] = useState(9)
  const [ skipt, setSkip ] = useState(0)
  useEffect(() => {
    async function getProductsList() {
      if(!!companyId) {
        const response = await getProductsByCompany(companyId,productFilters,limit,skipt);
        console.log({response})
        setProductList(response);
      }
    }
    getProductsList();
  }, [companyId]);

  return (
    <>
      <div className="px-px md:px-3">
        {/* <!-- user following for mobile only --> */}
        <ul
          className="flex md:hidden justify-around space-x-8 border-t 
                    text-center p-2 text-gray-600 leading-snug text-sm"
        >
          <li>
            <span className="font-semibold text-gray-800 block">136</span>
            posts
          </li>

          <li>
            <span className="font-semibold text-gray-800 block">40.5k</span>
            followers
          </li>
          <li>
            <span className="font-semibold text-gray-800 block">302</span>
            following
          </li>
        </ul>

        {/* <!-- insta freatures --> */}
        <ul
          className="flex items-center justify-around md:justify-center space-x-12  
                        uppercase tracking-widest font-semibold text-xs text-gray-600
                        border-t"
        >
          {/* <!-- posts tab is active --> */}
          {/* <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
            <a className="inline-block p-3" href="#">
              <i className="fas fa-th-large text-xl md:text-xs"></i>
              <span className="hidden md:inline">post</span>
            </a>
          </li> */}
          <li>
            <a className="inline-block p-3" href="#">
              <i className="far fa-square text-xl md:text-xs"></i>
              <span className="hidden md:inline">PRODUCTS</span>
            </a>
          </li>
          {/* <li>
            <a className="inline-block p-3" href="#">
              <i
                className="fas fa-user border border-gray-500
                                px-1 pt-1 rounded text-xl md:text-xs"
              ></i>
              <span className="hidden md:inline">tagged</span>
            </a>
          </li> */}
        </ul>
        {/* <!-- flexbox grid --> */}
        <div className="flex flex-wrap -mx-px md:-mx-3">
          {/* <!-- column --> */}

          {productList.map((item, index) => {
            return <ProductCard product={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

const ProductCard = (props) => {
  const { product } = props;
  console.log({product})
  return (
    <>
      <div className="w-1/3 p-px md:px-3">
        {/* <!-- post 1--> */}
        <a href="#">
          <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
            {/* <!-- post image--> */}
            <img
              className="w-full h-full left-0 top-0 object-cover"
              src={product?.images[0]}
              alt={product?.name}
            />

            <i className="fas fa-square right-0 top-0 m-1"></i>
            {/* <!-- overlay--> */}
            <div
              className="overlay bg-gray-800 bg-opacity-25 w-full h-full 
                                    left-0 top-0 hidden"
            >
              <div
                className="flex justify-center items-center 
                                        space-x-4 h-full"
              >
                <span className="p-2">
                  <i className="fas fa-heart"></i>
                  412K
                </span>

                <span className="p-2">
                  <i className="fas fa-comment"></i>
                  2,909
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>
    </>
  );
};
