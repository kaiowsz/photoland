import React from "react"
import { useFetch } from "../hooks/useFetch"

import { Hero, LatestProducts } from "../components"

function Home() {

  return (
    <section>
      <Hero />
      <LatestProducts />
    </section>
  )
}

export default Home