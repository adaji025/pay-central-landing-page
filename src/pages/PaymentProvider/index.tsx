import { Fragment } from 'react'
import Banner from '../../components/_shared/Banner'
import Growth from './components/Growth'
import Works from './components/Work'
import Offer from './components/Offer'

const Home = () => {
  return (
    <Fragment>
      <Banner
        desc="Unlock a world of opportunities as a payment provider with PayCentral. Join our platform designed to empower your business, streamline operations, and connect you with businesses actively seeking your expertise."
        title="Empowering Payment Providers"
      />
      <Growth />
      <Offer />
      <Works />
    </Fragment>
  )
}

export default Home
