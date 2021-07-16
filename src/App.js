// import logo from './logo.svg';
import './App.css';
import { ProductList } from './Product';
import { ImageService, MockProductService } from './_Services';
import { Header } from './Header';

function App() {
  const imageService = new ImageService();
  const productService = new MockProductService();

  return (
    <div className="App">
      <header className="App-header">
        <Header name="Web Shop" />
      </header>
      <div>
        <ProductList imageService={imageService} productService={productService} />
      </div>
    </div>
  );
}

//<ProductCard id = {1} productService = {productService} imageService = {imageService}/>
export default App;
