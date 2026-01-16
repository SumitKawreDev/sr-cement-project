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
    image: "/products/tree-guard.jpg",
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
    image: "/products/ventilation-block.jpg",
    shortDescription:
      "Concrete ventilation blocks for airflow and aesthetics.",
    description:
      "Ventilation blocks are concrete blocks designed to allow air circulation while maintaining privacy. They are commonly used in residential, commercial, and industrial buildings.",
    specifications: null
  },
  {
  id: 14,
  slug: "rcc-windows-frame",
  name: "RCC Windows Frame",
  image: "/products/rcc-windows-frame.jpg",
  shortDescription:
    "Durable RCC window frames for residential and commercial buildings.",
  description:
    "RCC window frames are precast concrete frames designed to provide long-lasting strength, weather resistance, and low maintenance. Suitable for residential, commercial, and industrial construction.",
  specifications: null
},
  {
  id: 15,
  slug: "curb-stone",
  name: "Curb Stone",
  image: "/products/curb-stone.jpg",
  shortDescription:
    "Concrete curb stones for road edges and landscaping projects.",
  description:
    "Curb stones define road edges, footpaths, and landscaped areas, improving safety, drainage control, and durability in infrastructure projects.",
  specifications: null
},
  {
  id: 16,
  slug: "rcc-water-tank",
  name: "RCC Water Tank",
  image: "/products/rcc-water-tank.jpg",
  shortDescription:
    "High-strength RCC water tanks for long-term water storage.",
  description:
    "RCC water tanks are engineered for safe and durable water storage with high load-bearing strength, leak resistance, and long service life.",
  specifications: null
},
  {
  id: 17,
  slug: "dragon-fruit-pole-and-ring",
  name: "Dragon Fruit Pole And Ring",
  image: "/products/dragon-fruit-pole-and-ring.jpg",
  shortDescription:
    "RCC poles and rings designed for dragon fruit farming support.",
  description:
    "Manufactured using high-quality RCC, these poles and rings provide strong, stable support required for long-term dragon fruit cultivation.",
  specifications: null
},
  {
  id: 18,
  slug: "rcc-guard-stone",
  name: "RCC Guard Stone",
  image: "/products/rcc-guard-stone.jpg",
  shortDescription:
    "RCC guard stones for roadside safety and traffic guidance.",
  description:
    "Installed along highways and roads to guide traffic and enhance safety, offering durability and weather resistance.",
  specifications: null
},
  {
  id: 19,
  slug: "rcc-km-stone",
  name: "RCC KM Stone",
  image: "/products/rcc-km-stone.jpg",
  shortDescription:
    "Concrete kilometer stones for road distance marking.",
  description:
    "Used on highways and roads to indicate distance information with high visibility and long-lasting outdoor performance.",
  specifications: null
},
  {
  id: 20,
  slug: "five-km-stone",
  name: "5 KM Stone",
  image: "/products/5-km-stone.jpg",
  shortDescription:
    "Concrete distance stones used in highway infrastructure.",
  description:
    "Installed at intervals on highways and major roads to mark distances, ensuring durability and visibility.",
  specifications: null
},
  {
  id: 21,
  slug: "rcc-point-stone",
  name: "RCC Point Stone",
  image: "/products/rcc-point-stone.jpg",
  shortDescription:
    "Concrete point stones for land boundary marking.",
  description:
    "Used for marking land boundaries and reference points in surveying and construction with long-term durability.",
  specifications: null
},
  {
  id: 22,
  slug: "flower-pot",
  name: "Flower Pot",
  image: "/products/flower-pot.jpg",
  shortDescription:
    "Decorative concrete flower pots for gardens and landscaping.",
  description:
    "Suitable for homes, parks, and commercial landscaping, combining durability with aesthetic design.",
  specifications: null
},
  {
  id: 23,
  slug: "tulsi-pot",
  name: "Tulsi Pot",
  image: "/products/tulsi-pot.jpg",
  shortDescription:
    "Traditional RCC tulsi pots with durable design.",
  description:
    "Designed for traditional and religious use, offering long-lasting strength and weather resistance.",
  specifications: null
},
  {
  id: 24,
  slug: "cement-jali",
  name: "Cement Jali",
  image: "/products/cement-jali.jpg",
  shortDescription:
    "Decorative cement jali blocks for ventilation and partitions.",
  description:
    "Allows airflow while enhancing architectural appearance and privacy in residential and commercial buildings.",
  specifications: null
},
  {
  id: 25,
  slug: "barbed-wire",
  name: "Barbed Wire",
  image: "/products/barbed-wire.jpg",
  shortDescription:
    "High-quality barbed wire for agricultural and industrial fencing.",
  description:
    "Provides strong boundary protection for farms, industrial areas, and restricted zones with long-term durability.",
  specifications: null
},
  {
  id: 26,
  slug: "fencing-jali",
  name: "Fencing Jali",
  image: "/products/fencing-jali.jpg",
  shortDescription:
    "Concrete fencing jali for secure boundary protection.",
  description:
    "Used to secure residential, industrial, and agricultural boundaries with strength and visibility.",
  specifications: null
},
  {
  id: 27,
  slug: "rcc-dustbin",
  name: "RCC Dustbin",
  image: "/products/rcc-dustbin.jpg",
  shortDescription:
    "Heavy-duty RCC dustbins for public and industrial waste management.",
  description:
    "Designed for municipalities and industrial areas, offering durability, capacity, and weather resistance.",
  specifications: null
},
  {
  id: 28,
  slug: "rcc-forest-board",
  name: "RCC Forest Board",
  image: "/products/rcc-forest-board.jpg",
  shortDescription:
    "Concrete forest boards for signage and information display.",
  description:
    "Used in forest areas and public locations to display information with durability for outdoor conditions.",
  specifications: null
},
  {
  id: 29,
  slug: "rcc-drain-cover-slab",
  name: "RCC Drain Cover Slab",
  image: "/products/rcc-drain-cover-slab.jpg",
  shortDescription:
    "Strong RCC drain cover slabs for drainage systems.",
  description:
    "Covers open drains and channels, providing safety, load-bearing strength, and durability.",
  specifications: null
},
  {
  id: 30,
  slug: "rcc-manhole-cover",
  name: "RCC Manhole Cover",
  image: "/products/rcc-manhole-cover.jpg",
  shortDescription:
    "Durable RCC manhole covers for underground utilities.",
  description:
    "Protects underground drainage and sewer systems with high strength and wear resistance.",
  specifications: null
},
  {
  id: 31,
  slug: "rcc-stand-pole",
  name: "RCC Stand Pole",
  image: "/products/rcc-stand-pole.jpg",
  shortDescription:
    "Concrete stand poles for signage and utility installations.",
  description:
    "Used for signboards, lighting, and utilities, offering stability and long service life.",
  specifications: null
},
  {
  id: 32,
  slug: "u-drain",
  name: "U Drain",
  image: "/products/u-drain.jpg",
  shortDescription:
    "Precast U-drains for efficient water drainage systems.",
  description:
    "Ensures smooth water flow in urban, industrial, and infrastructure projects with durable performance.",
  specifications: null
},
  {
  id: 33,
  slug: "rcc-chulha",
  name: "RCC Chulha",
  image: "/products/rcc-chulha.jpg",
  shortDescription:
    "Traditional RCC chulha for rural and outdoor cooking.",
  description:
    "Heat-resistant concrete cooking platform suitable for rural households and outdoor kitchens.",
  specifications: null
},
  {
  id: 34,
  slug: "rcc-readymade-toilet",
  name: "RCC Readymade Toilet",
  image: "/products/rcc-readymade-toilet.jpg",
  shortDescription:
    "Precast RCC readymade toilets for public and site use.",
  description:
    "Prefabricated concrete toilet units for public places and construction sites, offering quick installation and durability.",
  specifications: null
},
]

export default products
