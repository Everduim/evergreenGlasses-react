import React from 'react'
import "../pages/Home.scss"
const Home = () => {
  return (
    <main>
  <section class="hero">
    <h1>Welcome to Evergreen glasses Optics</h1>
    <p>Buy your lenses and accessories from the comfort of your home.</p>
    <br />
    <img className="img-home" src="https://i.pinimg.com/736x/c0/51/54/c05154c279d9dda23eed889f53c71627--optical-shop-optician.jpg" alt="" />
    <br />
    <a href="/products" class="button">View products</a>
  </section>
  <section class="featured-products">
    <h2>Featured Products</h2>
    
  </section>
  <section class="testimonials">
    <h2>Testimonials from our clients</h2>
  </section>
</main>

  )
}

export default Home