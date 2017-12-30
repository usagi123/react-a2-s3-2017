import React from 'react'
import { fetchCarts, deleteCart, addToCart } from './main.js';


export default class ShoppingCart extends React.Component{
    constructor() {
        super()

        this.state ={
            id: '', name: '', price: '', description: '',
            brand: '', producer: '', imageUrl: ''
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchCarts())
    }
    handleDelete(id){
        if (confirm('Do you want to delete?')) {
            this.props.dispatch({
                type: 'DELETE_CART',
                payload: id
            })
        this.props.dispatch(deleteCart(id))
        }
    }
    render(){
        return(
            <div className="left">
                  <div>
                   <h3>Shopping Cart</h3>
                  </div>
                  <div>
                  <table>
                    <thead>
                        <tr>
                        <td>Id</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Brand</td>
                        <td>Producer</td>
                        <td>Type</td>
                        <td>Image</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.carts.map((cart, i)=>
                            <tr key={i}>
                            <td>{cart.id}</td>
                                <td>{cart.name}</td>
                                <td>{cart.price}</td>
                                <td>{cart.description}</td>
                                <td>{cart.brand}</td>
                                <td>{cart.producer}</td>
                                <td><img src={cart.imageUrl} width="55px" height="55px" /></td>
                                <td><button onClick={()=>this.handleDelete(cart._id)}>Delete</button></td>
                            </tr>
                            
                        )}
                    </tbody>
                    <div>
                    </div>
                    <div>
                    <a href='/order' type='button' value='Checkout'>Check_Out</a>
                    </div>
                        
                  </table>
                  </div>

                </div>


        )
    }
}