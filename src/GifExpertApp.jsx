import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Hello'])

  return (
    <>
      <div className='flex flex-row items-center justify-center font-mono'>
        <h2 className='text-5xl py-5 my-5'>GifExpertApp</h2>
      </div>
      <AddCategory className='bg-green-600 my-11' setCategories={setCategories} />
      <hr />

      <ol>
        {
                categories.map(category => (
                  <GifGrid
                    key={category}
                    category={category}
                  />
                ))
            }
      </ol>
    </>
  )
}
