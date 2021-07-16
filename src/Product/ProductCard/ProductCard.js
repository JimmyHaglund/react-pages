import React, { Component } from 'react';

export class ProductCard extends Component {
   constructor(props) {
      super(props);
      const blankProduct = {id: 0, name: "", price: 0, imageUrl: ""};
      this.state = {
         imageSource: "", 
         product: blankProduct ,
         gridType: "m-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"
      };
      this.handleClick = this.handleClick.bind(this);
      console.log(this);
   }
   
   
   render() {
      let imgSrc = this.state.imageSource;
      let product = this.state.product;

      let name = product.name;
      let price = product.price;
      let cssClass = "productCard card " + this.state.gridType;
      return <div key={this.state.product.id} className={cssClass} onClick = {this.handleClick}>
         <img className="card-img-top" src = {imgSrc} alt = {name} width = '100%'></img>
         <h4 className="card-title text-primary"><b>{name}</b></h4>
         <p className="card-text price"><b>{price} Kr</b></p>
      </div>
   }

   handleClick() {
      console.log("Clicked on " + this.state.product.name);
      this.props.onClick(this.props.id);
   }

   componentDidMount() {
      this.loadProductData();
   }

   loadImage() {
      if (this.state.product.imageUrl === "") return;
      
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