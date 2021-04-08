import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
          items
            .filter((item, idx) => idx < 4) // always re rendered so bad method for large data
            .map(({ id, ...itemProps }) => (
              <CollectionItem key={id} {...itemProps} />
            ))
      }
    </div>
  </div>
)
export default PreviewCollection
