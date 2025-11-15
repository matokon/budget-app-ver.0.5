import React from 'react'

export const ProgressBar = ({value = 0}) => {
  return (
    <div className='progress-bar'>
        <span>{value.toFixed()}%</span>

    </div>
  )
}
