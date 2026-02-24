import { useState } from "react"
import "./species.css"

import img1 from "./assets/species/1.jpg"
import img2 from "./assets/species/2.png"
import img3 from "./assets/species/3.jpg"
import img4 from "./assets/species/4.jpg"
import img5 from "./assets/species/5.jpg"

const slides = [
  {
    title: "Dryopi- thecus",
    status: "An ancient ape that lived around 12 to 9 million years ago, Dryopithecus is long extinct and known mostly from fossil fragments in Europe. It likely moved through trees much like modern apes and sits near the branching point that later produced today’s great apes. Think of it as part of the early warm-up act before hominins ever appeared.",
    image: img1
  },
  {
    title: "Austral opithecus",
    status: "Living roughly 4 to 2 million years ago in Africa, Australopithecus species are extinct but hugely important. They walked upright on two legs yet still had small, ape-like brains. These were some of the first true bipeds, bridging the gap between apes and the earliest humans.",
    image: img2
  },
  {
    title: "Homo Habilis",
    status: "Often called the “handy human,” Homo habilis lived about 2.4 to 1.4 million years ago and is extinct today. It’s one of the earliest members of the Homo genus and is associated with simple stone tools, marking a big leap in problem-solving and survival skills.",
    image: img3
  },
  {
    title: "Homo Erectus",
    status: "Homo erectus appeared around 2 million years ago and survived for over a million years, making it one of the most successful early humans, though now extinct. It was the first human species to spread out of Africa, use fire, and have body proportions similar to modern humans. A true world traveler of prehistory.",
    image: img4
  },
  {
    title: "Homo Sapiens",
    status: "That’s us. The only surviving human species, emerging around 300,000 years ago in Africa and now spread across the entire planet. Unlike all the others in your slider, Homo sapiens isn’t extinct, though our impact on Earth is… dramatic, to say the least.",
    image: img5
  }
]

export default function Species() {
  const [active, setActive] = useState(0)

  return (
    <section id="species" className="species-wrapper">
      <div className="slider">

        <div className="slider-content">
          <span className="meta">Ancestor</span>
          <h1>{slides[active].title}</h1>

          <span className="meta">Status</span>
          <p className="status">{slides[active].status}</p>
        </div>

        <div className="image-stack">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt={slide.title}
              className={i === active ? "active" : ""}
              loading="lazy"
            />
          ))}
        </div>

        <div className="pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
