import flexObject from './flexObject'
import React from 'react'
import './globals.css'
export default function FlexContainer() {
  return (
    <div className='container'>
      {
        flexObject.map((flexObject: { isLight: boolean }, index: number) => {
          return (
            <div className='flexbox' style={{ backgroundColor: (flexObject.isLight) ? 'yellow' : 'pink' }} >
              {index + 1}
            </div>
          )
        })
      }
    </div>
  );
}