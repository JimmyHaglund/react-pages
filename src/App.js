// import logo from './logo.svg';
import './App.css';
import { ProductList, ProductCard, ProductDetails } from './Product/index.js';
import { ImageService, MockProductService } from './_Services';

function App() {
  const imageService = new ImageService();
  const productService = new MockProductService();
  let allProducts;
  productService.getProducts((products) => allProducts = products)
  
  return (
    <div className="App">
      <header className="App-header">
        <ProductList imageService = {imageService} productService = {productService} />
      </header>
    </div>
  );
}

//<ProductCard id = {1} productService = {productService} imageService = {imageService}/>
export default App;
