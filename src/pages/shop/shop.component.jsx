import React from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import SHOP_DATA from './shop.data.js'

class Shoppage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    const { collections } = this.state
    // console.log(collections)
    return (
      <div className='shop-page'>
        {
        collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))
      }
      </div>
    )
  }
}
export default Shoppage
