import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import hands from "./assets/hands.png"
import scenery from "./assets/scenery.png"
import "./hero.css"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const revealRef = useRef(null)
  const sceneryRef = useRef(null)
  const handsRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const reveal = revealRef.current

    const lenis = new Lenis({ smooth: true })
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add(t => lenis.raf(t * 1000))
    gsap.ticker.lagSmoothing(0)

    const trigger = ScrollTrigger.create({
      trigger: reveal,
      start: "top top",
      end: () => `+=${window.innerHeight * 1.5}`,
      pin: true,
      scrub: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: self => {
        const p = self.progress
        reveal.style.setProperty("--progress", p)

        if (p > 0.6) {
          titleRef.current.style.opacity = (p - 0.6) * 2.5
          titleRef.current.style.transform =
            `translateY(${(1 - p) * 40}px)`
        }
      }
    })

    const moveCamera = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40

      sceneryRef.current.style.transform =
        `translate(${x * 0.6}px, ${y * 0.6}px) scale(1.08)`

      handsRef.current.style.transform =
        `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", moveCamera)

    return () => {
      window.removeEventListener("mousemove", moveCamera)
      trigger.kill()
      lenis.destroy()
    }
  }, [])

  return (
    <section id="hero" className="reveal" ref={revealRef}>
      <div ref={sceneryRef} className="scenery">
        <img src={scenery} alt="" />
      </div>

      <div className="blackout" />

      <div ref={handsRef} className="hands-wrapper">
        <div className="tear tear--left">
          <img src={hands} alt="" />
        </div>

        <div className="tear tear--right">
          <img src={hands} alt="" />
        </div>
      </div>

      <h1 ref={titleRef} className="reveal-title">
        HOOMANS <br />
        <span>WALKING EARTH SINCE 300,000 BC</span>
      </h1>
    </section>
  )
}
