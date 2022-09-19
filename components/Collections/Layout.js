import React from 'react'
// import Container from '../../components/common/Container'
import CardList from './parts/CardList'
import Heading from './parts/Heading'
import AnimLayout from '../AnimatedLayout'

const Layout = ({collection}) => {
  return (
    <AnimLayout>
      <div className='max-w-7xl mx-auto px-5 pt-12 '>
          <Heading title={collection.title} count={collection.products.length} />
          <CardList products={collection.products} />
      </div>
    </AnimLayout>
  )
}

export default Layout