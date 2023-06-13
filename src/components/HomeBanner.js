import React from 'react'

const HomeBanner = () => {
  return (
    <div className='home-banner'>
        <div className='our-story'>
            <h1 className='our-story-card-title' data-uia="hero-title">Unlimited movies,TV shows and more</h1>
            <h2 className='our-story-card-subtitle' data-uia="out-story-card-subtitle">watch anywhere.cancel anytime.</h2>
            <p className='email-from-title'>Ready to Watch?Enter your email to create or restart your membership </p>
            <div className='input-group'>
                <input type="text" className='form-control' placeholder='Email Address'></input>
                <button className='input-group-button btn btn-danger text-white'>Get Started</button>
            </div>
        </div>
        <div className='shadow'></div>
        <img className='concord-img vlv-creative' src="https://ceotudent.com/wp-content/uploads/2020/05/netflix-poster.jpg"></img>
    </div>
  )
}

export default HomeBanner