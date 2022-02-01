import Nav from "../Nav";
import {AppContext} from "../context/AppContext";
import React, {useContext} from "react";
import client from "../ApolloClient";
import Navigation from "../Nav";
import {gql} from "@apollo/client";

const Header = (props) => {
    let navigation = props
    const [cart, setCart] = useContext(AppContext)
    return (
        <>
           <Nav props={navigation}/>
        </>
    )
}
const HEADER_FOOTER_QUERY = gql`
    query MainMenu {
    menus(where: {slug: "main-menu"}) {
    edges {
      node {
        id
        name
        menuItems {
          edges {
            node {
              id
              path
              label
            }
          }
        }
      }
    }
  }
}`
Header.getInitialProps = async () => {
    const result = await client.query({query: HEADER_FOOTER_QUERY});
    console.log(result)
    return {
        navigation: result.data.menus.edges.node.name
    }
}
export default Header
