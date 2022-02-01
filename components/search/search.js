import {gql} from "@apollo/client";
import {Card} from "react-bootstrap";
import {Image} from 'next/image'

const SearchResult = () => {
    return (
        //search result
        <div>
            <Card>
                <Image alt={''} className={'card-image-top'} height={'800'} width={'800'} src={''}/>
            </Card>
        </div>
    )
}
export default SearchResult
const SEARCH_QUERY = gql`query MyQuery {
  products(where: {search: "h"}) {
    edges {
      node {
        id
        galleryImages {
          nodes {
            id
            sourceUrl
          }
        }
        image {
          sourceUrl
        }
        name
      }
    }
  }
}
`
