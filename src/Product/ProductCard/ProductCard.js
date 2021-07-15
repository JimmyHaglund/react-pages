import React, { Component } from 'react';

export class ProductCard extends Component {
   constructor(props) {
      super(props);
      const blankProduct = {id: 0, name: "", price: 0, imageUrl: ""};
      this.state = {imageSource: "", product: blankProduct };
   }
   
   
   render() {
      let imgSrc = this.state.imageSource;
      let product = this.state.product;

      let name = product.name;
      let price = product.price;
      let linkUrl = './product/' + product.id;
      return <a href = {linkUrl}>
            <h2>{name}</h2>
            <img src = {imgSrc} alt = {name} width = '100%'></img>
            <p>Price: {price} :-</p>
         </a>
   }

   componentDidMount() {
      this.loadProductData();
   }

   loadImage() {
      if (this.state.product.imageUrl == "") return;
      
      let imageService = this.props.imageService;
      let requestUrl = './images/' + this.state.product.imageUrl;

      let me = this;
      imageService.loadImage(requestUrl, (imageAddress => 
         me.setState({imageSource: imageAddress})));
   }

   loadProductData() {
      let productId = this.props.id;
      let caller = this;
      this.props.productService.getProduct(productId, (fetchedProduct) => {
         caller.setState({ product: fetchedProduct }, caller.loadImage);
      });
   }
}