import {gql} from "@apollo/client";
export const CHECKOUT = gql`
mutation Checkout {
  createOrder(
    input: {billing: {address1: "18 wadleysr road", city: "solihull", address2: "", country: GB, email: "jngatchu@gmail.com", firstName: "Jake", lastName: "Ngatchu", phone: "07935242587", state: "warwickshire"}, paymentMethod: "stripe"}
  ) {
    clientMutationId
    order {
      id
    }
  }
}
`
