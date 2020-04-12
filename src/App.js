import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {"items":[{"name":"item 1","price":{"actual":319,"display":900},"discount":64},{"name":"item 2","price":{"actual":319,"display":900},"discount":64},{"name":"item 3","price":{"actual":319,"display":900},"discount":64},{"name":"item 4","price":{"actual":319,"display":900},"discount":64},{"name":"item 5","price":{"actual":319,"display":900},"discount":64},{"name":"item 6","price":{"actual":319,"display":900},"discount":64},{"name":"item 7","price":{"actual":319,"display":900},"discount":64},{"name":"item 8","price":{"actual":319,"display":900},"discount":64}]};
  }
  render(){
    return(
      <div className="flex-container">
        <Header />
        <Filters /> 
        <div className="RootCart">
            {this.state.items.map((dynamicComponent, i) => <Content 
                      key = {i} componentData = {dynamicComponent}/>)}
        </div>
        <Footer />
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <span><i class="fa fa-search"></i></span>
        <span><i class="fa fa-shopping-cart"></i></span>
      </div>
    )
  }
}

class Filters extends React.Component{
  render(){
    return(
      <div className="filters">
        <h3>Filters</h3>
        <button className="btn_a">Apply</button>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
     return (
        <div className="Cart_content">
          <div className="item_img"><img src="./../img/laptop.jpg" /></div>
           <div>{this.props.componentData.name}</div>
           <div>
             <b>&#8377; {this.props.componentData.price.display}</b>&nbsp;
             <strike>{this.props.componentData.price.actual}</strike>&nbsp;
             <span>{this.props.componentData.discount}% off</span>
           </div>
           
           <button className="btn">Add to cart</button>
        </div>
     );
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
       &copy;Copyright
      </div>
    )
  }
}

export default App;
