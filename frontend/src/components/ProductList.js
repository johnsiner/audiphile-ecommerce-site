import { Link } from 'react-router-dom';
import './ProductList.css';

export default function ProductList({ productList }) {
   return (
      <div className="product-list">
         {productList.map((product) => (
            <div className="product" key={product.slug}>
               <div className="image">
                  <img
                     className="desktop"
                     src={require('../' + product.categoryImage.desktop)}
                     alt={product.name}
                  />
                  <img
                     className="tablet"
                     src={require('../' + product.categoryImage.tablet)}
                     alt={product.name}
                  />
                  <img
                     className="mobile"
                     src={require('../' + product.categoryImage.mobile)}
                     alt={product.name}
                  />
               </div>
               <div className="info">
                  {product.new && <p className="overline">new product</p>}
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="link">
                     <Link to={`/product/${product.slug}`}>see product</Link>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
