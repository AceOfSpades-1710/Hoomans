import "./globe.css";

const controls = Array.from({ length: 20 }, (_, i) => i + 1);

const tags = [
  ["Proconsul", "https://en.wikipedia.org/wiki/Proconsul_(primate)"],
  ["Morotopithecus", "https://en.wikipedia.org/wiki/Morotopithecus"],
  ["Dryopithecus", "https://en.wikipedia.org/wiki/Dryopithecus"],
  ["Ouranopithecus", "https://en.wikipedia.org/wiki/Ouranopithecus"],

  ["Sahelanthropus", "https://en.wikipedia.org/wiki/Sahelanthropus"],
  ["Orrorin", "https://en.wikipedia.org/wiki/Orrorin"],
  ["ArdipithecusKadabba", "https://en.wikipedia.org/wiki/Ardipithecus_kadabba"],
  ["ArdipithecusRamidus", "https://en.wikipedia.org/wiki/Ardipithecus_ramidus"],

  ["AustralopithecusAnamensis", "https://en.wikipedia.org/wiki/Australopithecus_anamensis"],
  ["AustralopithecusAfarensis", "https://en.wikipedia.org/wiki/Australopithecus_afarensis"],
  ["AustralopithecusBahrelghazali", "https://en.wikipedia.org/wiki/Australopithecus_bahrelghazali"],
  ["AustralopithecusAfricanus", "https://en.wikipedia.org/wiki/Australopithecus_africanus"],
  ["AustralopithecusGarhi", "https://en.wikipedia.org/wiki/Australopithecus_garhi"],
  ["AustralopithecusSediba", "https://en.wikipedia.org/wiki/Australopithecus_sediba"],

  ["Kenyanthropus", "https://en.wikipedia.org/wiki/Kenyanthropus"],

  ["ParanthropusAethiopicus", "https://en.wikipedia.org/wiki/Paranthropus_aethiopicus"],
  ["ParanthropusBoisei", "https://en.wikipedia.org/wiki/Paranthropus_boisei"],
  ["ParanthropusRobustus", "https://en.wikipedia.org/wiki/Paranthropus_robustus"],

  ["HomoHabilis", "https://en.wikipedia.org/wiki/Homo_habilis"],
  ["HomoRudolfensis", "https://en.wikipedia.org/wiki/Homo_rudolfensis"],
  ["HomoErgaster", "https://en.wikipedia.org/wiki/Homo_ergaster"],
  ["HomoErectus", "https://en.wikipedia.org/wiki/Homo_erectus"],
  ["HomoAntecessor", "https://en.wikipedia.org/wiki/Homo_antecessor"],
  ["HomoHeidelbergensis", "https://en.wikipedia.org/wiki/Homo_heidelbergensis"],
  ["HomoRhodesiensis", "https://en.wikipedia.org/wiki/Homo_rhodesiensis"],
  ["HomoNaledi", "https://en.wikipedia.org/wiki/Homo_naledi"],

  ["Neanderthal", "https://en.wikipedia.org/wiki/Neanderthal"],
  ["Denisovan", "https://en.wikipedia.org/wiki/Denisovan"],

  ["HomoFloresiensis", "https://en.wikipedia.org/wiki/Homo_floresiensis"],
  ["HomoLuzonensis", "https://en.wikipedia.org/wiki/Homo_luzonensis"],

  ["HomoSapiens", "https://en.wikipedia.org/wiki/Homo_sapiens"]
];



export default function Globe() {
  return (
    <div className="tagcloud-wrapper">
      <div
        className="tagcloud-controls"
        style={{ "--num-elements": controls.length }}
      >
        {controls.map((i) => (
          <div
            key={i}
            className="tagcloud-control-button"
            style={{ "--index": i }}
          >
            <input type="radio" name="tagcloud-control-input" />
          </div>
        ))}

        <div className="tagcloud-rotation">
          <ul
            className="tagcloud-tags"
            style={{ "--num-elements": tags.length }}
          >
            {tags.map(([label, link], i) => (
              <li
                key={label}
                className="tagcloud-tag"
                style={{ "--index": i + 1 }}
              >
                <div>
                  <a href={link} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
