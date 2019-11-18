import React , { Component } from 'react';
import { Button} from 'react-mdl';
import { Link } from 'react-router-dom';




class ReviewCart extends Component {
  
    render() {
      const cart = [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 },
    { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 },
    { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }];

    function Items(props) {
        return (
          <table>
            <thead>
              <tr>
                <th>Your Cart</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            {props.values.map(item => (
              <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.unitPrice}</td>
              </tr>
            </tbody>
            ))}
              <tfoot>
              <tr>
                <td>SubTotal</td>
                <td>{cart.reduce((a, c) => a + c.unitPrice * c.quantity, 0)}</td>
              </tr>
            </tfoot>
          </table>
        );
      }
        return(
            <div>
              <div className="page-content" />
              <Items values={cart} />
              <Link to="/billing">
                <Button raised colored>Check out</Button>
              </Link>
            </div>
        )
    }
}

export default ReviewCart;