import { useState } from "react";
import RingsSection from "./RingsSection";

const ProductPage = () => {
  const banners = [
    {
      id: 1,
      banner_image:
        "https://s3-alpha-sig.figma.com/img/e41d/d497/04e20c4b9adac9249b6d29dbb8143a0a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1zuTmhjo7Mv6BIkdrZqaiOzR1Kty~uBnwFT003guaxlrv9X6xAvpG9wUkLYJPsC5kc~38z7mhZdMYQky6vdUecYe9333p6QUOP8lSCCs-Uu6QQ7YyKmkkvq4FLOMJEPHN27fG1J1YvL0pDca~79FmQOmNDWcTy-KBqP2nuo2R-9J9YllGwKsP4~S34dkgz6v4zSPiyczFNG8rSuLyDdEZYXU8m0AnbW1jkXU9K9N87ZwPKhmhivkDHBAqpbkO7HB3fawD6jjiniZzV~RvqRRMBChmWu50suaumQAa3mxuGCXyPhEwCHzCzxTWTcyAmGzZg1S0MuXkuT9JLY4kwyNg__",
      text: "We Create Your Dream Customized Jewelry",
    },
    {
      id: 2,
      banner_image:
        "https://s3-alpha-sig.figma.com/img/6e66/ae08/0b3c0476090f9838c54fc38e67514a72?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0xzI7jbNjbyyzRRPdHEup02HmB6OY4zO7~hlATvOQ8EDf6WbJ2GNayDPOih8THgng4CfQ4Ht0~IOMwgu6EtF5RPEN7uvTtF4f0uGE9c6WGMtzFe2ZBPi76kakSZm1oRmVyW3OrWtmL10x41hvRX2ONeGBjx0QvQjd7lo22iUl4DC-TNzmqGmLISMmusFhAllSHaL-H4RduQtrBjoL4VNuTkYuXnBlLvB4K0pXTZjuScqXu3Ma008mnQJGG1iLRRJvg5a5-8g-y~ZDwFVwdZ-caOkAaqTu14Z5G1dSx-k-TrlE1iev9Nye~IRcNlGFrZ3DMnLRM7-Pa8ivOpm8IYIw__",
      text: "Elevate Your Style: Shop Elegant Jewelry",
    },
  ];
  const [sortOption, setSortOption] = useState("Best Seller");

  const products = [
    {
      id: 1,
      name: "Petite Elodie 1.5 MM",
      isNew: true,
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 2,
      name: "Petite Elodie 1.5 MM",
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 3,
      isNew: true,
      availableColors: ["gold", "silver", "rose-gold"],
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 4,
      name: "Petite Elodie 1.5 MM",
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 5,
      isNew: true,
      name: "Petite Elodie 1.5 MM",
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 6,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
      availableColors: ["gold", "silver", "rose-gold"],
    },
    banners[0],
    {
      id: 7,
      name: "Petite Elodie 1.5 MM",
      isNew: true,
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 8,
      name: "Petite Elodie 1.5 MM",
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 9,
      isNew: true,
      availableColors: ["gold", "silver", "rose-gold"],
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 10,
      name: "Petite Elodie 1.5 MM",
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 11,
      isNew: true,
      name: "Petite Elodie 1.5 MM",
      availableColors: ["gold", "silver", "rose-gold"],
      price: "₹10,000",
    },
    {
      id: 12,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
      availableColors: ["gold", "silver", "rose-gold"],
    },
    banners[1],
    {
      id: 14,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
      availableColors: ["gold", "silver", "rose-gold"],
    },
  ];

  return (
    <>
      <RingsSection />
      <div className="product-page">
        {/* Filters Section */}
        <aside className="filters">
          {/* <div className="filter-header">
            <h4>Availability</h4>
            <div>
              <input type="checkbox" id="in-stock" />
              <label htmlFor="in-stock">In Stock (51)</label>
            </div>
            <div>
              <input type="checkbox" id="out-of-stock" />
              <label htmlFor="out-of-stock">Out of Stock (0)</label>
            </div>
          </div>
          <div className="filter-header">
            <h4>Price</h4>
            <div className="price-range">
              <input type="number" placeholder="₹10,000" />
              <span>to</span>
              <input type="number" placeholder="₹49,000" />
            </div>
          </div>
          <div className="filter-header">
            <h4>Carat</h4>
            <ul>
              <li>1 Carat</li>
              <li>1.5 Carat</li>
            </ul>
          </div>
          <div className="filter-header">
            <h4>Metal</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Rose Gold</li>
            </ul>
          </div> */}
        </aside>
        {/* Product Grid */}
        <div>
          <div className="sort-bar">
            <div>
              <span>Round</span>
              <span>In Stock (51)</span>
              <span>Price</span>
            </div>
            <div>
              <label htmlFor="sort">Sort By:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Best Seller">Best Seller</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
          <main className="product-grid">
            <div className="product-list">
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    width: product.banner_image ? "70%" : "100%",
                  }}
                >
                  {product.banner_image ? (
                    <img src={product.banner_image} style={{ width: "100%" }} />
                  ) : (
                    <div className="product-card">
                      {product.isNew && <span className="new-badge">New</span>}
                      {/* {!product.banner_image && ( */}
                      <img
                        src="https://s3-alpha-sig.figma.com/img/19a3/b6b0/6981dec635fceff676d6ac5706120ee0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5YksztMxki2NCFnOp~70Yhsk~Uva0IZXOM7cl16xFtZFm8DCqtqAcPDg7ZsiIe9W55f5yaOyGA6s0MH0KEBX29fnuQ3zQXpUmPlyUg8V-umHRrgbiH6eQxIlNs6pYWFAmk~dWku9fcLYrOCBj3IajT7mGzFsEOi4-kz2CHlyGBq~ZqBL6jQmygVqiblTJZe8flRAFZpGItHxMN0fuRWnUuyipsRt-NG6HbRJNeVC3Zc1iFCAbg1QwzGByiB3bZ-raHRJ47mwwk5NSGwbeUINyo7kui4IRvKCdUpJ0C-Fq1Ghy1nt8C8vSHiQcmPws9daDD9oW4b9Q-EHLF50SKqog__"
                        alt={product.name}
                        className="product-image"
                      />
                      {/* )} */}
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-price">{product.price}</p>
                      <div className="product-colors">
                        {product.availableColors?.map((color, index) => (
                          <span
                            key={index}
                            className={`color-swatch ${color}`}
                          ></span>
                        ))}
                      </div>
                      <button className="wishlist-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.5165 17.3416C10.2332 17.4416 9.7665 17.4416 9.48317 17.3416C7.0665 16.5166 1.6665 13.0749 1.6665 7.24159C1.6665 4.66659 3.7415 2.58325 6.29984 2.58325C7.8165 2.58325 9.15817 3.31659 9.99984 4.44992C10.8415 3.31659 12.1915 2.58325 13.6998 2.58325C16.2582 2.58325 18.3332 4.66659 18.3332 7.24159C18.3332 13.0749 12.9332 16.5166 10.5165 17.3416Z"
                            stroke="#2F2F2F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
