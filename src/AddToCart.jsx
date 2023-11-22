import React, { Component } from 'react'
import './AddToCart.css'
export default class AddToCart extends Component {
    constructor(props)
    {
        super(props)
        this.state={count : 0}
    }
    handleDecrement = () => {
      this.setState(prevState => {
          if (prevState.count > 0) {
              return {
                  count: prevState.count - 1
              }
          } else {
              return {
                  count: 0
              }
          }
      })
    };
  
    handleIncrement = () => {
      this.setState(prevState => ({count: prevState.count + 1}))//for one condition this syntax is enough
    };
  
    handleCart = () => {
      if (this.state.count >= parseInt(this.props.min) && this.state.count <= parseInt(this.props.max)) {  
          alert(this.state.count + ' ' + this.props.name + ' Added in cart');
      } else if (this.state.count >= parseInt(this.props.max)){
          alert('Only limited stocks ' + this.props.max + ' ' + this.props.name + ' available');
      } else {
          alert('Please select atleast ' + this.props.min + ' ' + this.props.name + ' to add.');
      }
    };
  render() {
    return (
      <div className="class">
      <div className="imp" idName="sp">
        <table className='App'  cellPadding={10} >
        <tr className="divi">
        <th>Image</th>
        <th>Description</th>
        <th>Count</th>
        <th>Price</th>
        <th>Action</th>
        </tr>
        <tr>
        <td><img className="sim" height={100} width={150} src={this.props.imgurl} alt={this.props.name} ></img></td>
        <td width={250}>
        <u><b>{this.props.name}</b></u>
        <p>{this.props.desc}</p>
        </td>
        <td>
        <button className="butcol" onClick={this.handleDecrement}>-</button>
         &nbsp;
        {this.state.count}
         &nbsp;
        <button className="butcol" onClick={this.handleIncrement}>+</button>
        </td>
        <td>${this.props.rate}</td>
        <td><button className="butcol1" onClick={this.handleCart}>Add To Cart</button></td>
        </tr>
        </table>
        </div>
</div>
    )
  }
}
