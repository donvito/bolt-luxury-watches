import { Watch } from '../types/watch';

export const featuredWatch: Watch = {
  id: 'featured',
  brand: 'Patek Philippe',
  model: 'Grand Complications',
  reference: '5208T-010',
  price: 1200000,
  year: 2023,
  movement: 'Caliber R CH 27 PS QI',
  case: {
    material: 'Titanium',
    diameter: 42,
    thickness: 15.11,
    waterResistance: 50
  },
  description: 'A masterpiece of haute horlogerie, featuring a minute repeater, monopusher chronograph, and instantaneous perpetual calendar. This exceptional timepiece represents the pinnacle of Patek Philippe\'s technical prowess.',
  history: 'Created for the most discerning collectors, this Grand Complications model showcases Patek Philippe\'s mastery of the most sophisticated watchmaking complications, continuing their tradition of excellence since 1839.',
  imageUrl: 'https://images.unsplash.com/photo-1663564304546-38addf4a4358?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

export const watches: Watch[] = [
  {
    id: '1',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5711/1A-010',
    price: 134600,
    year: 2021,
    movement: 'Automatic Caliber 26-330 S C',
    case: {
      material: 'Stainless Steel',
      diameter: 40,
      thickness: 8.3,
      waterResistance: 120
    },
    description: 'The iconic Nautilus 5711, discontinued in 2021, represents the pinnacle of luxury sports watches. Its distinctive porthole-inspired case and horizontal embossed dial have made it one of the most sought-after timepieces.',
    history: 'Designed by the legendary Gérald Genta in 1976, the Nautilus revolutionized luxury watchmaking by introducing a high-end sports watch in steel.',
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    brand: 'A. Lange & Söhne',
    model: 'Datograph Perpetual',
    reference: '410.038',
    price: 287000,
    year: 2020,
    movement: 'Manual-Wind Caliber L952.1',
    case: {
      material: 'Platinum',
      diameter: 41,
      thickness: 13.5,
      waterResistance: 30
    },
    description: 'The Datograph Perpetual combines a flyback chronograph with a perpetual calendar, representing the pinnacle of German watchmaking excellence.',
    history: 'A. Lange & Söhne, revived in 1990 after the German reunification, continues the legacy of Ferdinand A. Lange\'s precision watchmaking from 1845.',
    imageUrl: 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    brand: 'Audemars Piguet',
    model: 'Royal Oak Perpetual Calendar',
    reference: '26574ST.OO.1220ST.01',
    price: 218000,
    year: 2023,
    movement: 'Calibre 5134',
    case: {
      material: 'Stainless Steel',
      diameter: 41,
      thickness: 9.5,
      waterResistance: 50
    },
    description: 'A masterpiece of complications, this Royal Oak Perpetual Calendar displays week, day, date, month, astronomical moon, and leap year in an iconic octagonal case.',
    history: 'The Royal Oak, introduced in 1972, revolutionized luxury watchmaking with its steel case and integrated bracelet design.',
    imageUrl: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    brand: 'F.P. Journe',
    model: 'Chronomètre Souverain',
    reference: 'CS.PT.40',
    price: 176800,
    year: 2023,
    movement: 'Caliber 1304',
    case: {
      material: 'Platinum',
      diameter: 40,
      thickness: 8.6,
      waterResistance: 30
    },
    description: 'The Chronomètre Souverain embodies F.P. Journe\'s pursuit of chronometric excellence, featuring a power reserve indicator and small seconds.',
    history: 'François-Paul Journe, one of the most respected modern watchmakers, creates fewer than 900 timepieces annually.',
    imageUrl: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80'
  }
];