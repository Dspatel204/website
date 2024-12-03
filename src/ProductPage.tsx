import RingsSection from "./RingsSection";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 2,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 3,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 4,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 5,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
    {
      id: 6,
      name: "Petite Elodie 1.5 MM",
      price: "₹10,000",
    },
  ];

  const banners = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/e41d/d497/04e20c4b9adac9249b6d29dbb8143a0a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m1zuTmhjo7Mv6BIkdrZqaiOzR1Kty~uBnwFT003guaxlrv9X6xAvpG9wUkLYJPsC5kc~38z7mhZdMYQky6vdUecYe9333p6QUOP8lSCCs-Uu6QQ7YyKmkkvq4FLOMJEPHN27fG1J1YvL0pDca~79FmQOmNDWcTy-KBqP2nuo2R-9J9YllGwKsP4~S34dkgz6v4zSPiyczFNG8rSuLyDdEZYXU8m0AnbW1jkXU9K9N87ZwPKhmhivkDHBAqpbkO7HB3fawD6jjiniZzV~RvqRRMBChmWu50suaumQAa3mxuGCXyPhEwCHzCzxTWTcyAmGzZg1S0MuXkuT9JLY4kwyNg__",
      text: "We Create Your Dream Customized Jewelry",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/6e66/ae08/0b3c0476090f9838c54fc38e67514a72?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0xzI7jbNjbyyzRRPdHEup02HmB6OY4zO7~hlATvOQ8EDf6WbJ2GNayDPOih8THgng4CfQ4Ht0~IOMwgu6EtF5RPEN7uvTtF4f0uGE9c6WGMtzFe2ZBPi76kakSZm1oRmVyW3OrWtmL10x41hvRX2ONeGBjx0QvQjd7lo22iUl4DC-TNzmqGmLISMmusFhAllSHaL-H4RduQtrBjoL4VNuTkYuXnBlLvB4K0pXTZjuScqXu3Ma008mnQJGG1iLRRJvg5a5-8g-y~ZDwFVwdZ-caOkAaqTu14Z5G1dSx-k-TrlE1iev9Nye~IRcNlGFrZ3DMnLRM7-Pa8ivOpm8IYIw__",
      text: "Elevate Your Style: Shop Elegant Jewelry",
    },
  ];

  return (
    <>
      <RingsSection />
      <div className="product-page">
        {/* Filters Section */}
        <aside className="filters">
          <h3>Filter By</h3>
          <div>
            <h4>Price</h4>
            <input type="range" min="0" max="50000" />
          </div>
          <div>
            <h4>Category</h4>
            <ul>
              <li>Rings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
            </ul>
          </div>
          <div>
            <h4>Metal Type</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Platinum</li>
            </ul>
          </div>
        </aside>

        {/* Main Product Grid */}
        <main className="product-grid">
          {banners.map((banner) => (
            <div key={banner.id} className="banner">
              <img src={banner.image} alt={banner.text} />
              <div className="banner-text">{banner.text}</div>
            </div>
          ))}

          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src="https://s3-alpha-sig.figma.com/img/19a3/b6b0/6981dec635fceff676d6ac5706120ee0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5YksztMxki2NCFnOp~70Yhsk~Uva0IZXOM7cl16xFtZFm8DCqtqAcPDg7ZsiIe9W55f5yaOyGA6s0MH0KEBX29fnuQ3zQXpUmPlyUg8V-umHRrgbiH6eQxIlNs6pYWFAmk~dWku9fcLYrOCBj3IajT7mGzFsEOi4-kz2CHlyGBq~ZqBL6jQmygVqiblTJZe8flRAFZpGItHxMN0fuRWnUuyipsRt-NG6HbRJNeVC3Zc1iFCAbg1QwzGByiB3bZ-raHRJ47mwwk5NSGwbeUINyo7kui4IRvKCdUpJ0C-Fq1Ghy1nt8C8vSHiQcmPws9daDD9oW4b9Q-EHLF50SKqog__"
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};
export default ProductPage;
