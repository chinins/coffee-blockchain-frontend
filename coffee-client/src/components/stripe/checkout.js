import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CoffeeActions from '../../redux/actions/coffees';
import { StripeProvider } from 'react-stripe-elements';
import Payment from './payment'



class Checkout extends Component {

  coffeeId = ':coffee_id';   // to change to passed url params later
  // coffeeId = this.props.match.params.coffeeId

  componentDidMount() {
    this.props.getCoffee(this.coffeeId);
  }

  // create a function for the price 

  id = 'ecedd2e7-c913-4250-a331-932c219c8000'    // to change later

  render() {

    return (
      <div>
      
        "Hello"

            <StripeProvider apiKey="pk_test_eaHxpZdwd2DYpjuAz4KpbGim">
          <Payment />
        </StripeProvider>
       
        {/* <form action="/createTransaction" method="POST">
          <script
            src="https://checkout.stripe.com/checkout.js" className ="stripe-button"
            data-key="pk_test_eaHxpZdwd2DYpjuAz4KpbGim"
            data-amount="999"
            data-name="coffechain"
            data-description="Example charge"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto"
            data-currency="eur"
            data-zip-code="true">
          </script>
        </form> */}
      </div>
      
    )
  }
};

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
