import { Category } from './types';

// Helper to standardise IDs for scrolling
const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/g, '-');

export const INVENTORY_DATA: Category[] = [
      {
    title: "Fastening & Joining",
    slug: toSlug("Fastening & Joining"),
    items: [
      { name: "Anchors", imagePath: "/fastening\\anchor.webp" },
      { name: "Bolts", imagePath: "/fastening\\bolts.webp" },
      { name: "Cable Ties", imagePath: "/fastening\\cable-ties.jpg" },
      { name: "Eyebolts", imagePath: "/fastening\\eyebolts.jpg" },
      { name: "Helical Inserts", imagePath: "/fastening\\helical-inserts.jpg" },
      { name: "Key Stock", imagePath: "/fastening\\keystock.jpg" },
      { name: "Lanyards", imagePath: "/fastening\\lanyards.avif" },
      { name: "Magnets", imagePath: "/fastening\\magnets.jpg" },
      { name: "Nails", imagePath: "/fastening\\nails.jpg" },
      { name: "Nuts" , imagePath: "/fastening\\nuts.jpg"},
      { name: "Pins", imagePath: "/fastening\\pins.jpg" },
      { name: "Retaining Rings", imagePath: "/fastening\\retaining-rings.jpg" },
      { name: "Rivets", imagePath: "/fastening\\rivets.jpg" },
      { name: "Screws", imagePath: "/fastening\\screws.jpg" },
      { name: "Shims", imagePath: "/fastening\\shims.jpg" },
      { name: "Spacers", imagePath: "/fastening\\spacers.jpg" },
      { name: "Staples", imagePath: "/fastening\\staples.jpg" },
      { name: "Studs", imagePath: "/fastening\\studs.jpg" },
      { name: "Threaded Rods", imagePath: "/fastening\\threaded-rods.jpg" },
      { name: "U-Bolts", imagePath: "/fastening\\u-bolts.jpg" },
      { name: "Washers", imagePath: "/fastening\\washers.jpg" }
    ]
  },
  {
    title: "Abrading & Polishing",
    slug: toSlug("Abrading & Polishing"),
    items: [
      { name: "Abrasive Belts", imagePath: "/abrasive\\belt.jpg" }, // Example: Real image path
      { name: "Abrasive Discs", imagePath: "/abrasive\\discs.jpg" }, 
      { name: "Abrasive Wheels", imagePath: "/abrasive\\abrasive-wheels.jpg" },
      { name: "Buffing Wheels", imagePath: "/abrasive\\buffing-wheels.jpg" },
      { name: "Deburring Tools", imagePath: "/abrasive\\deburring-tools.jpg" },
      { name: "Files", imagePath: "/abrasive\\files.jpg" },
      { name: "Grinding Wheels", imagePath: "/abrasive\\grinding-wheels.jpg" },
      { name: "Honing Tools", imagePath: "/abrasive\\honing-tools.jpg" },
      { name: "Polishing Compounds", imagePath: "/abrasive\\polishing-compound.webp" },
      { name: "Sandpaper", imagePath: "/abrasive\\sandpaper.jpg" },
      { name: "Sharpening Stones", imagePath: "/abrasive\\sharpening-stones.webp" },
      { name: "Wire Brushes", imagePath: "/abrasive\\wire-brushes.jpg"}
    ]
  },
  {
    title: "Building & Grounds",
    slug: toSlug("Building & Grounds"),
    items: [
      { name: "Acoustic Tiles", imagePath: "/building&grounds\\acoustic-tiles.jpg" },
      { name: "Awnings", imagePath: "/building&grounds\\Awnings.webp" },
      { name: "Barriers & Railings", imagePath: "/building&grounds\\barriers-railings.jpg" },
      { name: "Doors", imagePath: "/building&grounds\\doors.webp" },
      { name: "Drainage", imagePath: "/building&grounds\\drainage.avif" },
      { name: "Flooring", imagePath: "/building&grounds\\flooring.webp" },
      { name: "Grounds Maintenance", imagePath: "/building&grounds\\ground-maintainance.jpg" },
      { name: "Ladders", imagePath: "/building&grounds\\ladders.jpg" },
      { name: "Matting", imagePath: "/building&grounds\\matting.jpg" },
      { name: "Stairs", imagePath: "/building&grounds\\stairs.jpg" },
      { name: "Windows", imagePath: "/building&grounds\\windows.webp" }
    ]
  },
  {
    title: "Electrical & Lighting",
    slug: toSlug("Electrical & Lighting"),
    items: [
      { name: "Batteries", imagePath: "/electrical\\batteries.jpg" },
      { name: "Circuit Breakers", imagePath: "/electrical\\circuit-breakers.jpg" },
      { name: "Conduit", imagePath: "/electrical\\conduit.jpg" },
      { name: "Electrical Boxes", imagePath: "/electrical\\electrical-boxes.jpg" },
      { name: "Extension Cords", imagePath: "/electrical\\extension-cords.webp" },
      { name: "Fuses", imagePath: "/electrical\\fuses.jpg" },
      { name: "Light Bulbs", imagePath: "/electrical\\light-bulbs.webp" },
      { name: "Lighting Fixtures", imagePath: "/electrical\\light-fixture.avif" },
      { name: "Outlets & Plugs", imagePath: "/electrical\\outlets-plugs.webp" },
      { name: "Switches", imagePath: "/electrical\\switches.webp" },
      { name: "Transformers", imagePath: "/electrical\\transformer.webp" },
      { name: "Wire & Cable", imagePath: "/electrical\\wire-cables.webp" }
    ]
  },
  {
    title: "Fabricating",
    slug: toSlug("Fabricating"),
    items: [
      { name: "Insulation", imagePath: "/fabricating\\insulation.jpg" },
      { name: "Machine Guards", imagePath: "/fabricating\\machine-guards.webp" },
      { name: "Noise Control", imagePath: "/fabricating\\noise-control.jpg" },
      { name: "Plastic Fabrication", imagePath: "/fabricating\\plastic-fabrications.png" },
      { name: "Sheet Metal Tools", imagePath: "/fabricating\\sheet-metal-tools.jpg" },
      { name: "Shim Stock", imagePath: "/fabricating\\shim-stock.jpg" },
      { name: "Vibration Control Mounts", imagePath: "/fabricating\\vibration-control-mounts.jpg" }
    ]
  },

  {
    title: "Filtering",
    slug: toSlug("Filtering"),
    items: [
      { name: "Air Filters" },
      { name: "Compressed Air Filters" },
      { name: "Filter Bags" },
      { name: "Filter Cartridges" },
      { name: "Hydraulic Filters" },
      { name: "Liquid Filters" },
      { name: "Oil Filters" },
      { name: "Strainers" },
      { name: "Water Filters" }
    ]
  },
  {
    title: "Flow & Level Control",
    slug: toSlug("Flow & Level Control"),
    items: [
      { name: "Flow Switches" },
      { name: "Flowmeters" },
      { name: "Gauges" },
      { name: "Level Switches" },
      { name: "Pumps" },
      { name: "Regulators" },
      { name: "Solenoid Valves" },
      { name: "Valves" }
    ]
  },
  {
    title: "Furniture & Storage",
    slug: toSlug("Furniture & Storage"),
    items: [
      { name: "Bins & Totes" },
      { name: "Cabinets" },
      { name: "Carts" },
      { name: "Chairs & Stools" },
      { name: "Desks" },
      { name: "Drawers" },
      { name: "Lockers" },
      { name: "Racks" },
      { name: "Shelving" },
      { name: "Workbenches" }
    ]
  },
  {
    title: "Hand Tools",
    slug: toSlug("Hand Tools"),
    items: [
      { name: "Clamps" },
      { name: "Crimpers" },
      { name: "Files" },
      { name: "Hammers", imagePath: "/images/hand-tools/hammers.jpg" }, // Example
      { name: "Knives" },
      { name: "Multi-Tools" },
      { name: "Pliers" },
      { name: "Pry Bars" },
      { name: "Ratchets" },
      { name: "Saws" },
      { name: "Screwdrivers", imagePath: "/images/hand-tools/screwdrivers.jpg" }, // Example
      { name: "Sockets" },
      { name: "Staplers" },
      { name: "Wrenches" }
    ]
  },
  {
    title: "Hardware",
    slug: toSlug("Hardware"),
    items: [
      { name: "Bumpers" },
      { name: "Casters" },
      { name: "Door Hardware" },
      { name: "Drawer Slides" },
      { name: "Handles" },
      { name: "Hinges" },
      { name: "Hooks" },
      { name: "Knobs" },
      { name: "Latches" },
      { name: "Locks" },
      { name: "Springs" }
    ]
  },
  {
    title: "Heating & Cooling",
    slug: toSlug("Heating & Cooling"),
    items: [
      { name: "Air Conditioners" },
      { name: "Blowers" },
      { name: "Chillres" },
      { name: "Ducting" },
      { name: "Fans" },
      { name: "Heat Exchangers" },
      { name: "Heaters" },
      { name: "HVAC Controls" },
      { name: "Thermostats" },
      { name: "Vents" }
    ]
  },
  {
    title: "Lubricating",
    slug: toSlug("Lubricating"),
    items: [
      { name: "Dispensing Equipment" },
      { name: "Funnels" },
      { name: "Grease" },
      { name: "Grease Guns" },
      { name: "Lubricants" },
      { name: "Lubricators" },
      { name: "Oilers" },
      { name: "Oils" }
    ]
  },
  {
    title: "Material Handling",
    slug: toSlug("Material Handling"),
    items: [
      { name: "Cranes" },
      { name: "Dock Equipment" },
      { name: "Dollies" },
      { name: "Drum Handling" },
      { name: "Forklifts" },
      { name: "Hoists" },
      { name: "Jacks" },
      { name: "Lift Tables" },
      { name: "Pallet Trucks" },
      { name: "Slings" },
      { name: "Winches" }
    ]
  },
  {
    title: "Measuring & Inspecting",
    slug: toSlug("Measuring & Inspecting"),
    items: [
      { name: "Calipers" },
      { name: "Gauges" },
      { name: "Indicators" },
      { name: "Levels" },
      { name: "Magnifiers" },
      { name: "Micrometers" },
      { name: "Microscopes" },
      { name: "Protractors" },
      { name: "Rulers" },
      { name: "Scales" },
      { name: "Squares" },
      { name: "Tape Measures" },
      { name: "Thermometers" }
    ]
  },
  {
    title: "Office Supplies & Signs",
    slug: toSlug("Office Supplies & Signs"),
    items: [
      { name: "Boards & Easels" },
      { name: "Cleaning Supplies" },
      { name: "Envelopes" },
      { name: "Labels" },
      { name: "Office Furniture" },
      { name: "Paper" },
      { name: "Pens & Pencils" },
      { name: "Signs" },
      { name: "Tags" }
    ]
  },
  {
    title: "Pipe, Tubing, Hose & Fittings",
    slug: toSlug("Pipe, Tubing, Hose & Fittings"),
    items: [
      { name: "Hose" },
      { name: "Hose Clamps" },
      { name: "Hose Fittings" },
      { name: "Hose Reels" },
      { name: "Manifolds" },
      { name: "Pipe" },
      { name: "Pipe Fittings" },
      { name: "Pipe Hangers" },
      { name: "Tank Fittings" },
      { name: "Tube Benders" },
      { name: "Tube Cutters" },
      { name: "Tubing" }
    ]
  },
  {
    title: "Plumbing & Janitorial",
    slug: toSlug("Plumbing & Janitorial"),
    items: [
      { name: "Bathroom Fixtures" },
      { name: "Cleaning Chemicals" },
      { name: "Drains" },
      { name: "Faucets" },
      { name: "Mops & Brooms" },
      { name: "Paper Products" },
      { name: "Pumps" },
      { name: "Sinks" },
      { name: "Toilets" },
      { name: "Trash Cans" },
      { name: "Water Heaters" }
    ]
  },
  {
    title: "Power Transmission",
    slug: toSlug("Power Transmission"),
    items: [
      { name: "Bearings" },
      { name: "Belts" },
      { name: "Bushings" },
      { name: "Chains" },
      { name: "Clutches" },
      { name: "Couplings" },
      { name: "Gears" },
      { name: "Linear Motion" },
      { name: "Motors" },
      { name: "Pulleys" },
      { name: "Shafts" },
      { name: "Sprockets" }
    ]
  },
  {
    title: "Pressure & Temperature Control",
    slug: toSlug("Pressure & Temperature Control"),
    items: [
      { name: "Controllers" },
      { name: "Gauges" },
      { name: "Heating Elements" },
      { name: "Pressure Switches" },
      { name: "Recorders" },
      { name: "Sensors" },
      { name: "Thermocouples" },
      { name: "Thermometers" },
      { name: "Transducers" }
    ]
  },
  {
    title: "Pulling & Lifting",
    slug: toSlug("Pulling & Lifting"),
    items: [
      { name: "Chain" },
      { name: "Clamps" },
      { name: "Eye Bolts" },
      { name: "Hoists" },
      { name: "Hooks" },
      { name: "Rope" },
      { name: "Shackles" },
      { name: "Slings" },
      { name: "Turnbuckles" },
      { name: "Winches" },
      { name: "Wire Rope" }
    ]
  },
  {
    title: "Raw Materials",
    slug: toSlug("Raw Materials"),
    items: [
      { name: "Ceramics" },
      { name: "Fabrics" },
      { name: "Felt" },
      { name: "Fiberglass" },
      { name: "Foam" },
      { name: "Glass" },
      { name: "Metals" },
      { name: "Plastics" },
      { name: "Rubber" },
      { name: "Wood" }
    ]
  },
  {
    title: "Safety Supplies",
    slug: toSlug("Safety Supplies"),
    items: [
      { name: "Clothing" },
      { name: "Ear Protection" },
      { name: "Eye Protection" },
      { name: "Fall Protection" },
      { name: "Fire Extinguishers" },
      { name: "First Aid" },
      { name: "Gloves" },
      { name: "Hard Hats" },
      { name: "Masks" },
      { name: "Respirators" },
      { name: "Safety Shoes" },
      { name: "Vests" }
    ]
  },
  {
    title: "Sawing & Cutting",
    slug: toSlug("Sawing & Cutting"),
    items: [
      { name: "Bandsaw Blades" },
      { name: "Circular Saw Blades" },
      { name: "Cut-Off Wheels" },
      { name: "Dies" },
      { name: "Drill Bits" },
      { name: "End Mills" },
      { name: "Hole Saws" },
      { name: "Jigsaw Blades" },
      { name: "Knives" },
      { name: "Reamers" },
      { name: "Reciprocating Saw Blades" },
      { name: "Taps" }
    ]
  },
  {
    title: "Sealing",
    slug: toSlug("Sealing"),
    items: [
      { name: "Compression Packing" },
      { name: "Gaskets" },
      { name: "O-Rings" },
      { name: "Sealants" },
      { name: "Seals" },
      { name: "Thread Sealants" },
      { name: "Weatherstripping" }
    ]
  },
  {
    title: "Shipping",
    slug: toSlug("Shipping"),
    items: [
      { name: "Bags" },
      { name: "Boxes" },
      { name: "Bubble Wrap" },
      { name: "Envelopes" },
      { name: "Labels" },
      { name: "Packing Peanuts" },
      { name: "Pallets" },
      { name: "Shrink Wrap" },
      { name: "Strapping" },
      { name: "Tape" }
    ]
  },
  {
    title: "Suspending",
    slug: toSlug("Suspending"),
    items: [
      { name: "Beam Clamps" },
      { name: "Cable" },
      { name: "Chain" },
      { name: "Hangers" },
      { name: "Hooks" },
      { name: "Strut Channels" },
      { name: "Threaded Rod" },
      { name: "Wire Rope" }
    ]
  }
];

// Helper to get simple list of names for the Sidebar
export const SIDEBAR_LINKS = INVENTORY_DATA.map(cat => cat.title).sort();