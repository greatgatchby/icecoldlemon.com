import {gql} from "@apollo/client";
export const CHECKOUT = gql`
mutation Checkout($address1: String!, $address2: String!, $city: String!, $country: CountriesEnum!, $email: String!, $firstName: String!, $lastName: String!, $phone: String!, $state: String!, $paymentMethod: String = "stripe", $paymentintentid : String!) {
  checkout(
    input: {billing: {address1: $address1, city: $city, address2: $address2, country: $country, email: $email, firstName: $firstName, lastName: $lastName, phone: $phone, state: $state}, paymentMethod: $paymentMethod, isPaid: false, meta_data: [{key: "_stripe_intent_id", value: $paymentIntentId}]}
  ) {
    clientMutationId
    order {
      id
    }
  }
}
`
