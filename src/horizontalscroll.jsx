import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import scenery2 from "./assets/scenery2.png"

import img1 from "./assets/skulls/image1.png"
import img2 from "./assets/skulls/image2.png"
import img3 from "./assets/skulls/image3.png"
import img4 from "./assets/skulls/image4.png"
import img5 from "./assets/skulls/image5.png"

import "./horizontalscroll.css"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const sceneryRef = useRef(null)

  useEffect(() => {

    const panels = gsap.utils.toArray(".horizontal-panel")

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + window.innerWidth * panels.length
      }
    })

    const moveCamera = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40

      sceneryRef.current.style.transform =
        `translate(${x * 0.6}px, ${y * 0.6}px) scale(1.08)`
    }

    window.addEventListener("mousemove", moveCamera)

    return () => {
      window.removeEventListener("mousemove", moveCamera)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="horizontal" className="horizontal-section">

      <div ref={sceneryRef} className="horizontal-scenery">
        <img src={scenery2} alt="" />
      </div>

      <div className="horizontal-wrapper">

        <div className="horizontal-panel panel-intro">
          <h2 className="panel-title">
            SKULLS
            <span>The skull, shaped by ages</span>
          </h2>
        </div>

        <div className="horizontal-panel panel-project">
          <div className="project-image">
            <img src={img1} alt="" />
          </div>
          <div className="project-caption">
            <p>Dryopithecus</p>
            <h3>12,000,000 BC - 9,000,000 BC</h3>
          </div>
        </div>

        <div className="horizontal-panel panel-project">
          <div className="project-image">
            <img src={img2} alt="" />
          </div>
          <div className="project-caption">
            <p>Australopithecus</p>
            <h3>4,200,000 BC - 1,900,000 BC</h3>
          </div>
        </div>

        <div className="horizontal-panel panel-project">
          <div className="project-image">
            <img src={img3} alt="" />
          </div>
          <div className="project-caption">
            <p>Homo Habilis</p>
            <h3>2,400,000 BC - 1,400,000 BC</h3>
          </div>
        </div>

        <div className="horizontal-panel panel-project">
          <div className="project-image">
            <img src={img4} alt="" />
          </div>
          <div className="project-caption">
            <p>Homo Erectus</p>
            <h3>1,900,000 BC - 110,000 BC</h3>
          </div>
        </div>

        <div className="horizontal-panel panel-project">
          <div className="project-image">
            <img src={img5} alt="" />
          </div>
          <div className="project-caption">
            <p>Homo Sapiens</p>
            <h3>300,000 BC - Now</h3>
          </div>
        </div>

      </div>
    </section>
  )
}
