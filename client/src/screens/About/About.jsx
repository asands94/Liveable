import Footer from '../../layouts/Footer'
import './About.css'
import house from '../../assets/house.svg'

export default function About() {
  return (
    <>
      <div className='about-info-container' >
        <div className='about-title'>
          <h1>Our Purpose</h1>
        </div>
      </div >
      <div className='about-info-container'>
        <div className='about-main-text'>
          <p>We want to encourage people to share their experience renting homes and the issues they've
            encountered, in the hopes of getting a Rental WOF.
          </p>
          <p> Housing prices are at an all time high causing the majority of people to rent their housing.
            However, many rental properties are cold, damp, and mouldy when compared to
            owned homes and landlords have no incentive to fix those issues.</p>

          <p>By instating a Rental WOF, housing standards would be set that landlords must follow in order to ensure the homes
            they are renting out are in liveable conditions. </p>

          <p>A Rental WOF would also protect landlords from from the Tenancy Tribunal.</p>

        </div>


      </div>
      <img className='about-house' src={house} alt='house' />
      <Footer />
    </>
  )
}
