import React , { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from './Form';


class Billing extends Component {
    render() {
  
        return(
            <div>
                <StripeProvider apiKey="pk_test_fhLgnOuPipR7KmoUiSUxitGw00QDw3FeAR">
                    <Elements>
                        <Form />
                    </Elements>
                </StripeProvider>
            </div>
        )
    }
}

export default Billing;