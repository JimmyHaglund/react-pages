import React, { Component } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

export class ProductList extends Component {
   constructor(props) {
      super(props);
      this.state = { products: [] };
   }

   render() {
      const productCards = this.getProductCards(this.state.products);
      let keyId = 0;
      const list = productCards.map(card => <div 
         key = {++keyId} 
         className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
         {card}</div>
      );
      return <div className="container">
         <div className="row">
            {list}
         </div>
      </div>
   }

   getProductCards(products) {
      const productCards = [];
      const productService = this.props.productService;
      const imageService = this.props.imageService;
      for(let n = 0; n < products.length; n++) {
         productCards.push(<ProductCard 
            id = {products[n].id} 
            productService = {productService}
            imageService = {imageService}
            />);
      }
      return productCards;
   }

   componentDidMount() {
      this.getItems();
   }

   getItems() {
      let productService = this.props.productService;
      productService.getProducts((fetchedProducts) => 
         this.setState({products: fetchedProducts}));
   }
}