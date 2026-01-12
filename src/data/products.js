const products = [
  {
    id: 1,
    name: "Fly Ash Bricks",
    image: "/products/fly-ash-bricks.png",

    shortDescription:
      "Eco-friendly fly ash bricks with high compressive strength.",

    description:
      "Fly ash bricks are eco-friendly construction materials manufactured using coal ash. They offer high compressive strength, uniform shape, and excellent durability for residential and commercial projects.",

    specifications: null
  },
  {
    id: 2,
    name: "Paver Block",
    image: "/products/paver-block.jpg",

    shortDescription:
      "High-strength interlocking paver blocks suitable for parking areas, pathways and gardens.",

    description:
      "High-strength interlocking paver blocks suitable for parking areas, pathways, gardens, and industrial flooring. Designed for durability, load bearing, and long-term performance.",

    specifications: {
      model: "Cosmic",
      thickness: "60 MM",
      areaPerBlock: "0.532 Sq.ft",
      piecesPer100Sqft: "188 Pieces",
      weight: "5.970 Kg",
      colors: ["red", "yellow", "grey"]
    }
  },
  {
    id: 3,
    slug: "chequered-tiles",
    name: "Chequered Tiles",
    image: "/products/chequered-tiles.jpg",
    shortDescription:
      "Durable chequered tiles designed for industrial and outdoor flooring.",
    description:
      "Chequered tiles are heavy-duty concrete tiles used for industrial flooring, footpaths, and outdoor spaces. They provide excellent grip, wear resistance, and long-term durability in high-traffic areas.",
    specifications: null
  },
  {
    id: 4,
    slug: "precast-wall",
    name: "Precast Wall",
    image: "/products/precast-wall.png",
    shortDescription:
      "Strong precast concrete wall panels for boundary and enclosure use.",
    description:
      "Precast concrete wall panels are used for boundary walls, industrial enclosures, and infrastructure projects. These panels ensure fast installation, uniform quality, and long-lasting structural strength.",
    specifications: null
  },
  {
    id: 5,
    slug: "cover-block",
    name: "Cover Block",
    image: "/products/cover-block.png",
    shortDescription:
      "Concrete cover blocks for accurate reinforcement spacing.",
    description:
      "Concrete cover blocks are used to maintain proper spacing between reinforcement bars and concrete surfaces. They help improve structural durability, strength, and corrosion resistance.",
    specifications: null
  },
  {
    id: 6,
    slug: "fencing-pole",
    name: "RCC Fencing Pole",
    image: "/products/fencing-pole.png",
    shortDescription:
      "High-strength RCC fencing poles for agricultural and industrial fencing.",
    description:
      "We manufacture high-strength pre-stressed RCC fencing poles designed for residential, commercial, and agricultural use. These poles are ideal for barbed wire fencing in fields, forests, and large plots.",
    specifications: null
  },
  {
    id: 7,
    slug: "rcc-y-pole",
    name: "RCC Y Pole",
    image: "/products/rcc-y-pole.png",
    shortDescription:
      "Durable RCC Y poles for fencing and boundary marking.",
    description:
      "RCC Y poles are widely used for fencing applications in agricultural land and industrial areas. These poles are weather-resistant, strong, and suitable for long-term outdoor use.",
    specifications: null
  },
  {
    id: 8,
    slug: "rcc-door-frame",
    name: "RCC Door Frame",
    image: "/products/rcc-door-frame.jpg",
    shortDescription:
      "Precast RCC door frames with high strength and durability.",
    description:
      "RCC door frames are precast concrete frames that offer excellent strength, termite resistance, and low maintenance. They are ideal alternatives to wooden frames for residential and commercial buildings.",
    specifications: null
  },
  {
    id: 9,
    slug: "rcc-garden-chair",
    name: "RCC Garden Chair",
    image: "/products/rcc-garden-chair.jpg",
    shortDescription:
      "Heavy-duty RCC garden chairs for parks and open spaces.",
    description:
      "RCC garden chairs are strong and weather-resistant seating solutions designed for parks, gardens, and public areas. These chairs offer long service life and minimal maintenance.",
    specifications: null
  },
  {
    id: 10,
    slug: "rcc-bench",
    name: "RCC Bench",
    image: "/products/rcc-bench.jpg",
    shortDescription:
      "Concrete benches for public seating and outdoor use.",
    description:
      "RCC benches are designed for outdoor public places such as parks, bus stops, and open spaces. These benches provide strength, stability, and long-term durability.",
    specifications: null
  },
  {
    id: 11,
    slug: "plotting-pole",
    name: "Plotting Pole",
    image: "/products/plotting-pole.jpg",
    shortDescription:
      "Concrete plotting poles for land marking and layout planning.",
    description:
      "Plotting poles are used for land marking and layout planning in residential and commercial projects. These poles ensure accurate boundary identification and long-lasting visibility.",
    specifications: null
  },
  {
    id: 12,
    slug: "tree-guard",
    name: "Tree Guard",
    image: "/products/tree-guard.png",
    shortDescription:
      "Protective RCC tree guards for plantations and landscaping.",
    description:
      "RCC tree guards are designed to protect young plants and trees from damage. They are commonly used in urban landscaping, roadside plantations, and garden areas.",
    specifications: null
  },
  {
    id: 13,
    slug: "ventilation-block",
    name: "Ventilation Block",
    image: "/products/ventilation-block.png",
    shortDescription:
      "Concrete ventilation blocks for airflow and aesthetics.",
    description:
      "Ventilation blocks are concrete blocks designed to allow air circulation while maintaining privacy. They are commonly used in residential, commercial, and industrial buildings.",
    specifications: null
  },
  { id: 14, name: "RCC Windows Frame", image: "/products/rcc-windows-frame.png" },
  { id: 15, name: "Curb Stone", image: "/products/curb-stone.png" },
  { id: 16, name: "RCC Water Tank", image: "/products/rcc-water-tank.png" },
  { id: 17, name: "Dragon Fruit Pole And Ring", image: "/products/dragon-fruit-pole-and-ring.png" },
  { id: 18, name: "RCC Guard Stone", image: "/products/rcc-guard-stone.png" },
  { id: 19, name: "RCC KM Stone", image: "/products/rcc-km-stone.png" },
  { id: 20, name: "5 KM Stone", image: "/products/5-km-stone.png" },
  { id: 21, name: "RCC Point Stone", image: "/products/rcc-point-stone.png" },
  { id: 22, name: "Flower Pot", image: "/products/flower-pot.png" },
  { id: 23, name: "Tulsi Pot", image: "/products/tulsi-pot.png" },
  { id: 24, name: "Cement Jali", image: "/products/cement-jali.png" },
  { id: 25, name: "Barbed Wire", image: "/products/barbed-wire.png" },
  { id: 26, name: "Fencing Jali", image: "/products/fencing-jali.png" },
  { id: 27, name: "RCC Dustbin", image: "/products/rcc-dustbin.png" },
  { id: 28, name: "RCC Forest Board", image: "/products/rcc-forest-board.png" },
  { id: 29, name: "RCC Drain Cover Slab", image: "/products/rcc-drain-cover-slab.png" },
  { id: 30, name: "RCC Manhole Cover", image: "/products/rcc-manhole-cover.png" },
  { id: 31, name: "RCC Stand Pole", image: "/products/rcc-stand-pole.png" },
  { id: 32, name: "U Drain", image: "/products/u-drain.png" },
  { id: 33, name: "RCC Chulha", image: "/products/rcc-chulha.png" },
  { id: 34, name: "RCC Readymade Toilet", image: "/products/rcc-readymade-toilet.png" }
]

export default products
