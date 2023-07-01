import React from 'react'

import gridBox from './grid.json'

export default function Gridcomponent() {
  return (
    <div className='app'>
      {
        gridBox.map(gridBox => {
          return (
            <div className='box' style={{ backgroundColor: gridBox.colorChange ? 'yellow' : 'pink' }} >
              {gridBox.id}
            </div>
          )
        })
      }
    </div>
  );
}
