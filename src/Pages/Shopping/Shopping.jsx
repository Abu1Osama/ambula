import React from "react";
import ShoppingCard from "./ShoppingCard";
import "../Shopping/ShoppingCard.css"
import Navbar from "../../Components/Navbar/Navbar";

function Shopping() {
  const product = [
    {
      id: 1,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1928961_019_f?x1_grid&v=1676388993",
      description:
        "A waterproof-breathable rain jacket with zippered hand pockets.",
      name: "Mens Cedar Cliff™ Rain Jacket",
      price: "150.00 ",
      rating: 4,
    },
    {
      id: 2,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034471_010_f?x1_grid&v=1676388993",
      description:
        "A lightweight puffer with synthetic insulation makes a versatile, packable layer.",
      name: "Men's Silver Falls™ Jacket",
      price: "160.00 ",
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1955432_397_f_om?x1_grid&v=1676388993",
      description:
        "An everyday polo shirt built with advanced sweat-wicking and sun-blocking tech.",
      name: "Men's Tech Trail™ Novelty Polo",
      price: "50.00 ",
      rating: 5,
    },
    {
      id: 4,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034801_464_f?x1_grid&v=1676388993",
      description:
        "A classic hiking short now crafted of recycled materials and packed with comfort features.",
      name: "Men's Silver Ridge Utility™ Cargo Shorts",
      price: "50.00 ",
      rating: 3.2,
    },
    {
      id: 5,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2028681_100_f_om?x1_grid&v=1676388993",
      description:
        "A classic hybrid shoe for water or land with enhanced breathability, cushioning, and traction.",
      name: "Men's Drainmaker™ IV Water Shoe",
      price: "90.00 ",
      rating: 2.2,
    },
    {
      id: 6,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2028691_023_f_om?x1_grid&v=1676388993",
      description:
        "Waterproof-breathable pants built to perform and protect on and off the golf course.",
      name: "Men's OutDry™ Extreme Mesh Golf Pants",
      price: "150.00 ",
      rating: 2.3,
    },
    {
      id: 7,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2031313_010_f_om?x1_grid&v=1676388993",
      description: "A performance jacket made with sweat-wicking technology.",
      name: "Men's Triple Canyon™ Full Zip Jacket",
      price: "55.91 ",
      rating: 4.7,
    },
    {
      id: 8,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2038231_010_f?x1_grid&v=1676388993",
      description:
        "A 21-inch-tall carry-on case for daily essentials wherever you travel.",
      name: "Atlas Explorer™ 42L Carry On Roller Bag",
      price: "180.00 ",
      rating: 3.6,
    },
    {
      id: 9,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034511_350_f?x1_grid&v=1676388993",
      description:
        "A lightweight puffer vest with synthetic insulation makes a versatile, packable layer.",
      name: "Men's Silver Falls™ Vest - Tall",
      price: "130.00 ",
      rating: 2.9,
    },
    {
      id: 10,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2031631_100_f?x1_grid&v=1676388993",
      description:
        "A sturdy trail-running jacket with advanced rain-and-stain repellency.",
      name: "Men's Endless Trail™ Wind Shell Jacket",
      price: "80.00 ",
      rating: 4.3,
    },
    {
      id: 11,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030721_271_f?x1_grid&v=1676388993",
      description:
        "A classic hiking shirt now crafted with recycled materials and ready for anything.",
      name: "Men's Silver Ridge Utility™Lite Short Sleeve Shirt",
      price: "55.00 ",
      rating: 3.9,
    },
    {
      id: 12,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2012963_028_f_om?x1_grid&v=1676388993",
      description:
        "A classic hiking shirt now crafted with recycled materials ",
      name: "Men's Silver Ridge™ Utility Convertible Pant - Big",
      price: "70.00 ",
      rating: 4.9,
    },
    {
      id: 13,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2037511_011_f?x1_grid&v=1676388993",
      description:
        "Crafted of recycled materials and featuring wicking power, these shorts are trail ready.",
      name: "Men's Coral Ridge™ Pull-On Shorts",
      price: "55.00 ",
      rating: 3.6,
    },
    {
      id: 14,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2012955_010_f_om?x1_grid&v=1676388993",
      description:
        "Classic technical hiking pants now crafted of recycled materials.",
      name: "Men's Silver Ridge™ Utility Pants - Big",
      price: "60.00 ",
      rating: 4.1,
    },
    {
      id: 15,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033041_010_f?x1_grid&v=1676388993",
      description:
        "A lightweight, high-performance jacket with a waterproof-breathable shell and a soft-touch lining.",
      name: "Men's PFG™ Omni-Tech™ 3D Rain Jacket",
      price: "200.00 ",
      rating: 4.8,
    },
    {
      id: 16,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1955431_010_f?x1_grid&v=1676388993",
      description:
        "A Columbia classic featuring a cozy hood and soft-yet-rugged fleece to keep you warm when temperatur...",
      name: "Men's Steens Mountain Full Zip Fleece Hoodie - Tall",
      price: "55.91 ",
      rating: 3.1,
    },
    {
      id: 17,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034512_010_f_om?x1_grid&v=1676388993",
      description:
        "A lightweight puffer vest with synthetic insulation makes a versatile, packable layer.",
      name: "Men's Silver Falls™ Vest - Big",
      price: "130.00 ",
      rating: 1,
    },
    {
      id: 18,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033201_010_f?x1_grid&v=1676388993",
      description:
        "A polo built for anglers with sun-shielding and sweat-wicking tech.",
      name: "Men's PFG Tamiami™ Polo",
      price: "60.00 ",
      rating: 1.9,
    },
    {
      id: 19,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1831491_488_f?x1_grid&v=1676388993",
      description:
        "This PFG hoodie provides next-to-skin comfort thanks to our sweat-activated, super cooling technolog...",
      name: "Men's PFG Terminal Deflector Zero™ Hoodie",
      price: "75.00 ",
      rating: 2.9,
    },
    {
      id: 20,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033251_100_f_om?x1_grid&v=1676388993",
      description:
        "A lightweight button-down shirt built with breezy back venting.",
      name: "Men's PFG Bonefish™ Short Sleeve Shirt",
      price: "50.00 ",
      rating: 3.5,
    },
    {
      id: 21,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034431_010_f?x1_grid&v=1676388993",
      description:
        "An insulated hooded jacket featuring our most advanced thermal-reflective lining technology.",
      name: "Men's Platinum Peak™ Softshell Jacket",
      price: "150.00 ",
      rating: 3.6,
    },
    {
      id: 22,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1805102_053_f_om?x1_grid&v=1676388993",
      description:
        "Ideal for weekends or work, these UPF 50, 2-way stretch pants keep you moving anywhere.",
      name: "Men's Rapid Rivers™ Pants - Big",
      price: "75.00 ",
      rating: 5,
    },
    {
      id: 23,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1955432_397_f_om?x1_grid&v=1676388993",
      description:
        "A Columbia classic featuring a cozy hood and soft-yet-rugged fleece to keep you warm when temperatur...",
      name: "Men's Steens Mountain Full Zip Fleece Hoodie - Big",
      price: "55.91 ",
      rating: 4.2,
    },
    {
      id: 24,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2027151_417_f?x1_grid&v=1676388993",
      description:
        "An everyday trail-running shoe with a responsive midsole and a grippy outsole.",
      name: "Men's Montrail™ Trinity™ FKT Shoe",
      price: "140.00 ",
      rating: 3.4,
    },
    {
      id: 25,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1990891_271_f?x1_grid&v=1676388993",
      description:
        "Lightweight pull-on shorts with an adjustable waist for all-day comfort.",
      name: "Men's Scenic Ridge™ Pull-On Shorts",
      price: "45.00 ",
      rating: 2.1,
    },
    {
      id: 26,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2028681_100_f_om?x1_grid&v=1676388993",
      description:
        "A versatile waterproof-breathable jacket built to perform and protect on and off the golf course.",
      name: "Men's OutDry™ Extreme Mesh Golf Jacket",
      price: "200.00 ",
      rating: 4.7,
    },
    {
      id: 27,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2032001_023_f?x1_grid&v=1676388993",
      description:
        "Quick-drying shorts built with advanced repellency and sun-blocking tech.",
      name: "Men's Summertide Stretch™ Printed Shorts",
      price: "60.00 ",
      rating: 3.1,
    },
    {
      id: 28,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2037521_011_f?x1_grid&v=1676388993",
      description:
        "Crafted of recycled materials and featuring wicking power, these pants are trail ready.",
      name: "Men's Coral Ridge™ Pull-On Pants",
      price: "70.00 ",
      rating: 1.6,
    },
    {
      id: 29,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030721_271_f?x1_grid&v=1676388993",
      description:
        "A classic hiking shirt now crafted with recycled materials and ready for anything.",
      name: "Men's Silver Ridge Utility™ Lite Short Sleeve Shirt-Tall",
      price: "55.00 ",
      rating: 1.9,
    },
    {
      id: 30,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033281_019_f_om?x1_grid&v=1676388993",
      description: "Simple, stylish shorts that perform on and off the water.",
      name: "Men's PFG Bonefish™ Shorts",
      price: "55.00 ",
      rating: 3.4,
    },
    {
      id: 31,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033141_316_f_om?x1_grid&v=1676388993",
      description: "A sun-shielding and sweat-wicking polo.",
      name: "Men's PFG Super Terminal Tackle™ Polo",
      price: "55.00 ",
      rating: 2.9,
    },
    {
      id: 32,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034492_039_f_om?x1_grid&v=1676388993",
      description:
        "A lightweight puffer with synthetic insulation makes a versatile, packable layer.",
      name: "Men's Silver Falls™ Jacket - Big",
      price: "160.00 ",
      rating: 3.9,
    },
    {
      id: 33,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2027291_302_f?x1_grid&v=1676388993",
      description:
        "A cushy slide made with our lightest, softest cushioning and built for post-activity recovery.",
      name: "Men's Thrive Revive™ Slide Sandal",
      price: "50.00 ",
      rating: 4.3,
    },
    {
      id: 34,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034391_010_f?x1_grid&v=1676388993",
      description:
        "A wind-ready jacket built with a breathable back venting system.",
      name: "Men's Coho River™ Jacket",
      price: "100.00 ",
      rating: 3.7,
    },
    {
      id: 35,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034101_010_f?x1_grid&v=1676388993",
      description:
        "Waterproof rain pants with fully sealed seams and a drawstring are ready for the heaviest downpours.",
      name: "Men's Hazy Trail™ Rain Pants",
      price: "99.00 ",
      rating: 4.7,
    },
    {
      id: 36,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030841_350_f?x1_grid&v=1676388993",
      description:
        "Quick-drying shorts built with advanced repellency and our highest level of sun protection.",
      name: "Men's Summerdry™ Belted Shorts",
      price: "55.00 ",
      rating: 2.8,
    },
    {
      id: 37,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1988761_010_f?x1_grid&v=1676388993",
      description:
        "A rugged, adjustable field jacket with chest pockets is your new everyday layer.",
      name: "Men's Tanner Ranch™ Field Jacket",
      price: "130.00 ",
      rating: 1.9,
    },
    {
      id: 38,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034511_271_f?x1_grid&v=1676388993",
      description:
        "A lightweight puffer vest with synthetic insulation makes a versatile, packable layer.",
      name: "Men's Silver Falls™ Vest",
      price: "130.00 ",
      rating: 3.5,
    },
    {
      id: 39,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034801_464_f?x1_grid&v=1676388993",
      description:
        "A powerful adventure shirt with advanced wicking and super-cooling tech.",
      name: "Men's Titan Pass™ 2.0 Irico Long Sleeve Shirt",
      price: "85.00 ",
      rating: 5,
    },
    {
      id: 40,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2027011_231_f?x1_grid&v=1676388993",
      description:
        "This full-grain leather, waterproof shoe features all-terrain, wet/dry traction.",
      name: "Men's Trailstorm™ Crest Waterproof Shoe",
      price: "130.00 ",
      rating: 4,
    },
    {
      id: 41,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2036883_350_f?x1_grid&v=1676388993",
      description:
        "An everyday polo shirt built with advanced sweat-wicking and sun-blocking tech.",
      name: "Men's Tech Trail™ Novelty Polo - Tall",
      price: "50.00 ",
      rating: 2,
    },
    {
      id: 42,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034471_010_f?x1_grid&v=1676388993",
      description: "A windproof windbreaker for breezy adventures.",
      name: "Men's Loop Trail™ Windbreaker",
      price: "80.00 ",
      rating: 1,
    },
    {
      id: 43,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2040541_255_f?x1_grid&v=1676388993",
      description:
        "A lightweight hiker that's built with comfort and quickness in mind.",
      name: "Men's Plateau Venture™ Shoe",
      price: "90.00 ",
      rating: 4.3,
    },
    {
      id: 44,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2027191_302_f?x1_grid&v=1676388993",
      description: "A grippy, comfy three-strap adventure sandal.",
      name: "Men's Breaksider™ Sandal",
      price: "60.00 ",
      rating: 4.5,
    },
    {
      id: 45,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033202_010_f?x1_grid&v=1676388993",
      description:
        "A polo built for anglers with sun-shielding and sweat-wicking tech.",
      name: "Men's PFG Tamiami™ Polo - Big",
      price: "60.00 ",
      rating: 3.5,
    },
    {
      id: 46,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2027061_206_f?x1_grid&v=1676388993",
      description:
        "A plush, high-traction leather flip flop built for the water.",
      name: "Men's PFG Rostra™ Beachcomber™ LE Flip Flop",
      price: "60.00 ",
      rating: 3.7,
    },
    {
      id: 47,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030701_023_f?x1_grid&v=1676388993",
      description:
        "A durable hiking shirt featuring rain-and-stain-resistant fabric and a cooling back vent.",
      name: "Men's Newton Ridge™ Plaid Short Sleeve Shirt - Tall",
      price: "75.00 ",
      rating: 3.5,
    },
    {
      id: 48,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2032571_348_f?x1_grid&v=1676388993",
      description:
        "A 28-liter rucksack with a large main compartment, laptop sleeve, and padded back.",
      name: "Columbia Trek™ 28L Rucksack",
      price: "75.00 ",
      rating: 4.7,
    },
    {
      id: 49,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030731_257_f?x1_grid&v=1676388993",
      description:
        "A trail classic now made with recycled materials and ready for anything.",
      name: "Men's Silver Ridge Utility™ Vest",
      price: "75.00 ",
      rating: 3.9,
    },
    {
      id: 50,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1889591_030_f?x1_grid&v=1676388993",
      description:
        "A lightweight and vented casual shoe designed for traction on the boat or on land.",
      name: "Men's Bahama™ Vent Loco III Shoe",
      price: "75.00 ",
      rating: 2.9,
    },
    {
      id: 51,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1928961_019_f?x1_grid&v=1676388993",
      description:
        "A stain-resistant long sleeve fishing shirt that's built for a day along a sunny shoreline.",
      name: "Men's PFG Blood and Guts™ IV Woven Long Sleeve Shirt - Tall",
      price: "70.00 ",
      rating: 3,
    },
    {
      id: 52,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033261_443_f?x1_grid&v=1676388993",
      description:
        "A water-ready button-up shirt that's built for staying afloat.",
      name: "Men's PFG Super Bonefish™ Short Sleeve Shirt",
      price: "70.00 ",
      rating: 3.8,
    },
    {
      id: 53,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2031211_010_f?x1_grid&v=1676388993",
      description: "A classic hoodie you can't get enough of.",
      name: "Men's Columbia Lodge™ French Terry II Hoodie",
      price: "70.00 ",
      rating: 4.7,
    },
    {
      id: 54,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2037291_469_f?x1_grid&v=1676388993",
      description: "A lightweight polo built with a ribbed collar and cuffs.",
      name: "Men's PFG Super Bonefish™ Pique Polo",
      price: "70.00 ",
      rating: 2.9,
    },
    {
      id: 55,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033071_019_f?x1_grid&v=1676388993",
      description:
        "Shorts designed to perform and protect on or off water with built-in UPF 50 and advanced repellency.",
      name: "Men's Blood 'N Guts™ Stretch Shorts",
      price: "65.00 ",
      rating: 3.9,
    },
    {
      id: 56,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2034491_491_f?x1_grid&v=1676388993",
      description:
        "A lightweight puffer with synthetic insulation makes a versatile, packable layer.",
      name: "Men's Silver Falls™ Jacket - Tall",
      price: "160.00 ",
      rating: 4.7,
    },
    {
      id: 57,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2040621_011_f_om?x1_grid&v=1676388993",
      description: "A comfy hoodie with a warm kangaroo pocket.",
      name: "Men's CSC™ Graphic Hoodie",
      price: "60.00 ",
      rating: 2.7,
    },
    {
      id: 58,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033201_010_f?x1_grid&v=1676388993",
      description:
        "A polo built for anglers with sun-shielding and sweat-wicking tech.",
      name: "Men's PFG Tamiami™ Polo - Tall",
      price: "60.00 ",
      rating: 2.6,
    },
    {
      id: 59,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1928952_024_f_om?x1_grid&v=1676388993",
      description:
        "A stain-resistant short sleeve fishing shirt that's built for a day along a sunny shoreline.",
      name: "Men's PFG Blood and Guts™ IV Woven Short Sleeve Shirt - Big",
      price: "60.00 ",
      rating: 2.7,
    },
    {
      id: 60,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030722_010_f_om?x1_grid&v=1676388993",
      description:
        "A classic hiking shirt now crafted with recycled materials and ready for anything.",
      name: "Men's Silver Ridge Utility™ Lite Short Sleeve Shirt-Big",
      price: "55.00 ",
      rating: 4.5,
    },
    {
      id: 61,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2030852_397_f?x1_grid&v=1676388993",
      description:
        "Quick-drying shorts built with advanced repellency and our highest level of sun protection.",
      name: "Men's Summerdry™ Brief Shorts - Big",
      price: "55.00 ",
      rating: 4.6,
    },
    {
      id: 62,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033191_316_f?x1_grid&v=1676388993",
      description:
        "A hoodie built for anglers with advanced sweat-wicking and sun-blocking tech.",
      name: "Men's PFG Terminal Tackle™ Fish Flag Hoodie",
      price: "55.00 ",
      rating: 5,
    },
    {
      id: 63,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2036882_011_f_om?x1_grid&v=1676388993",
      description:
        "An everyday polo shirt built with advanced sweat-wicking and sun-blocking tech.",
      name: "Men's Tech Trail™ Novelty Polo - Big",
      price: "50.00 ",
      rating: 4.7,
    },
    {
      id: 64,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2027031_088_f?x1_grid&v=1676388993",
      description:
        "A low-profile boat shoe with razor siping for advanced wet-dry traction.",
      name: "Men's PFG Slack Tide™ Boat Shoe",
      price: "70.00 ",
      rating: 3.7,
    },
    {
      id: 65,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2037621_350_f?x1_grid&v=1676388993",
      description: "This small sling pack holds a tablet and daily essentials.",
      name: "Columbia Trek™ 7L Sling Pack",
      price: "45.00 ",
      rating: 4.6,
    },
    {
      id: 66,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2032591_010_f?x1_grid&v=1676388993",
      description:
        "Carry your phone, sunglasses, keys, and more in this versatile pack.",
      name: "Convey™ 4L Crossbody Bag",
      price: "45.00 ",
      rating: 1.9,
    },
    {
      id: 67,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2031671_839_f?x1_grid&v=1676388993",
      description:
        "A mesh trail-running half-zip shirt with advanced sweat-wicking fabric.",
      name: "Men's Endless Trail™ Half Zip Mesh Long Sleeve Shirt",
      price: "65.00 ",
      rating: 4.5,
    },
    {
      id: 68,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2033221_443_f?x1_grid&v=1676388993",
      description:
        "A lightweight polo shirt built with advanced sweat-wicking and sun-blocking tech.",
      name: "Men's PFG Super Slack Tide™ Stretch Polo",
      price: "65.00 ",
      rating: 3.5,
    },
    {
      id: 69,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1990711_221_f?x1_grid&v=1676388993",
      description:
        "A sturdy hiking pant made with water-repellent fabric and UPF 50 sun protection.",
      name: "Men's Tech Trail™ II Pants",
      price: "60.00 ",
      rating: 2.5,
    },
    {
      id: 70,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1890701_499_f?x1_grid&v=1676388993",
      description:
        "A 22-liter backpack with adjustable straps, a laptop sleeve, bottle pocket, and a PFG graphic logo.",
      name: "PFG Zigzag™ 22L Backpack",
      price: "58.00 ",
      rating: 3.4,
    },
    {
      id: 71,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2037501_302_f?x1_grid&v=1676388993",
      description:
        "Crafted of recycled materials and featuring wicking power, this tee is trail ready.",
      name: "Men's Coral Ridge™ Performance Short Sleeve Shirt",
      price: "55.00 ",
      rating: 2.2,
    },
    {
      id: 72,
      image:
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/2032421_019_f?x1_grid&v=1676388993",
      description:
        "A shady bucket hat with sun-shielding and advanced repellency built right in.",
      name: "PFG Slack Tide™ Bucket Hat",
      price: "35.00 ",
      rating: 1.1,
    },
  ];

  return (
    <>
    <Navbar/>
      <h1 className="heading">Products</h1>
    <div className="product-list">
      {product.map((item) => {
        return  <ShoppingCard key={item.id} data={item} />;
      })}
    </div>
      </>
  );
}

export default Shopping;
