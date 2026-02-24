import Globe from "./globe.jsx"
import "./AroundTheGlobe.css"

export default function AroundTheGlobe() {
  return (
    <section id="globe" className="around-wrapper">
      <div className="around-inner">

        <div className="around-left">
          <h1>FOOTPRINTS</h1>
          <p>
            <br />
            A living constellation of human ancestry, 
            spinning through millions of years of evolution in three dimensions. 
            Each point represents a species that shaped the path from ancient great 
            apes to modern Homo sapiens, revealing our story not as a straight line, 
            but as a dynamic, branching journey across time.
            <br /><br />
            Hover, click, explore.
          </p>
        </div>

        <div className="around-right">
          <Globe />
        </div>

      </div>
    </section>
  )
}
