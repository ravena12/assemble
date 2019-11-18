import React , { Component } from 'react';
import { CardElement, injectStripe, elements, ReactStripeElements , stripe, registerElements} from 'react-stripe-elements';


class Form extends Component {
    render() {
        return(
            <div>
                <main className="container">
                    <form id="payment-form">
                        <div class="form-row">
                            <label for="card-element">
                            Credit or debit card
                            </label>
                            <div id="card-element">
                            </div>

                            <div id="card-errors" role="alert"></div>
                        </div>

                        <button>Submit Payment</button>
                    </form>
                </main>

            </div>
        )
    }
}



export default injectStripe(Form);