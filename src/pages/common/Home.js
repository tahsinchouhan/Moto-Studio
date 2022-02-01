import React from 'react'
import Image from "next/image";
import Rectangle from "../../../public/images/Rectangle.png";

function Home() {
    return (
        <div>
              <div>
        <div className="rectangle-img">
          <Image src={Rectangle} alt="home" />
        </div>
        <div className="rectangle-para">
          <h2>Purity that is Priceless</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
        </div>
    )
}

export default Home
