import { Globe, Users, TrendingUp, Award, Leaf, Briefcase, Truck, Wrench, Zap, Home } from 'lucide-react';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Our Verticals',
    path: '/verticals',
    dropdown: [
      { name: 'Mahindra Tractors', path: 'https://www.mahindratractor.com/', external: true },
      { name: 'Mahindra Construction Equipment', path: 'https://www.mahindraconstructionequipment.com', external: true },
      { name: 'Mahindra Tractor X-Change', path: 'https://www.x-changetractor.com/', external: true }, // Using main farm equipment site as fallback
      { name: 'Maruti Suzuki Arena', path: 'https://www.arenaofmahbubnagar.com/', external: true },
      { name: 'Maruti Suzuki Nexa', path: 'https://www.nexaofbhoothpurroad.com/', external: true },
      { name: 'Maruti Suzuki True Value', path: 'https://www.marutisuzukitruevalue.com/used-cars-in-mahbubnagar', external: true },
      { name: 'Maruti Suzuki Commercial', path: 'https://www.commercialofyenugonda.com/', external: true },
      { name: 'TVS Motor', path: 'https://www.tvsmotor.com', external: true },
      { name: 'Total Energies', path: 'https://totalenergies.com', external: true },
      { name: 'Shaktiman Agro', path: 'https://www.shaktimanagro.com', external: true },
      { name: 'Goodyear Tyres', path: 'https://www.goodyear.co.in', external: true },
      { name: 'Roots', path: 'https://www.rootsindia.com/', external: true },
      { name: 'EXIDE', path: 'https://www.exideindustries.com', external: true },
      { name: 'Manufacturing Unit', path: 'https://manufacturing.srijayarama.com/', external: true }, // Keeping internal
      { name: 'Sri Rama Landmark', path: 'https://sriramalandmark.com/', external: true }, // Keeping internal
    ]
  },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

export const verticals = [
  {
    id: 'mahindra-tractors',
    title: 'Mahindra Tractors',
    description: 'Empowering farmers with tough and reliable tractors for every agricultural need.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1592860986145-66255f053a59?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.mahindratractor.com/',
    external: true
  },
  {
    id: 'mahindra-construction-equipment',
    title: 'Mahindra Construction Equipment',
    description: 'Building the nation with high-performance construction machinery.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581094794329-cd2c2dec5d01?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.mahindraconstructionequipment.com',
    external: true
  },
  {
    id: 'mahindra-tractor-x-change',
    title: 'Mahindra Tractor X-Change',
    description: 'Trusted platform for buying and selling used tractors.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1530267981375-f0de93cdf538?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.x-changetractor.com/',
    external: true
  },
  {
    id: 'maruti-suzuki-arena',
    title: 'Maruti Suzuki Arena',
    description: 'Experience the joy of mobility with our wide range of passenger vehicles.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.arenaofmahbubnagar.com/',
    external: true
  },
  {
    id: 'maruti-suzuki-nexa',
    title: 'Maruti Suzuki Nexa',
    description: 'Creating inspiring experiences for the global consumer.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.nexaofbhoothpurroad.com/',
    external: true
  },
  {
    id: 'maruti-suzuki-true-value',
    title: 'Maruti Suzuki True Value',
    description: 'India’s most trusted destination for pre-owned cars.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.marutisuzukitruevalue.com/used-cars-in-mahbubnagar',
    external: true
  },
  {
    id: 'maruti-suzuki-commercial',
    title: 'Maruti Suzuki Commercial',
    description: 'Partnering in your progress with our commercial vehicle range.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1605218427360-facb4c3d843c?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.commercialofyenugonda.com/',
    external: true
  },
  {
    id: 'tvs-motor',
    title: 'TVS Motor',
    description: 'Championing progress through mobility with two-wheelers and three-wheelers.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.tvsmotor.com',
    external: true
  },
  {
    id: 'total-energies',
    title: 'Total Energies',
    description: 'Providing high-quality lubricants and energy solutions.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1516937941348-c09e5542945c?auto=format&fit=crop&q=80&w=800',
    link: 'https://totalenergies.com',
    external: true
  },
  {
    id: 'shaktiman-agro',
    title: 'Shaktiman Agro',
    description: 'Advanced agricultural implements for modern farming.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.shaktimanagro.com',
    external: true
  },
  {
    id: 'goodyear-tyres',
    title: 'Goodyear Tyres',
    description: 'Keeping you moving with world-class tires.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.goodyear.co.in',
    external: true
  },
  {
    id: 'roots',
    title: 'Roots',
    description: 'Cleaning solutions for a cleaner world.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.rootsindia.com/',
    external: true
  },
  {
    id: 'exide',
    title: 'EXIDE',
    description: 'Powering your world with reliable battery solutions.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.exideindustries.com',
    external: true
  },
  {
    id: 'manufacturing-unit',
    title: 'Manufacturing Unit',
    description: 'Own manufacturing of Tractor trailers and Agriculture implements.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    link: 'https://manufacturing.srijayarama.com/',
    external: true
  },
  {
    id: 'sri-rama-landmark',
    title: 'Sri Rama Landmark',
    description: 'Developing gated communities and apartments for modern living.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    link: 'https://sriramalandmark.com/',
    external: true
  },
];

export const leadership = [
  {
    id: 1,
    name: 'Leadership Team',
    role: 'Visionaries',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    bio: 'Guiding the group with a vision for growth and community development.',
  },
];

import s1 from '../assets/s1.jpg';
import mahindraTractor from '../assets/mahindra_tractor.jpg';
import s55 from '../assets/s55.jpg';

export const stories = [
  {
    id: 1,
    type: 'statement',
    title: 'Formation of the Sri Jayarama Memorial and Welfare Trust',
    content: 'The Sri Jayarama Group has pledged to contribute significantly to community welfare through the newly formed trust, focusing on health and education.',
    image: s1,
    category: 'STATEMENT',
    link: '#'
  },
  {
    id: 2,
    type: 'fact',
    title: 'Did you know',
    content: 'Sri Jayarama Group started with a single tractor dealership in 1974 and has now expanded to over 15 verticals across Telangana.',
    highlight: '50+ Years of Excellence',
    category: 'FACTS',
    theme: 'blue'
  },
  {
    id: 3,
    type: 'social-post',
    platform: 'facebook',
    content: "Whether it's over open seas or deep below the city, #SriJayaramaGroup turns tough terrain into engineering breakthroughs.",
    image: mahindraTractor,
    date: 'a day ago',
    link: '#'
  },
  {
    id: 4,
    type: 'social-post',
    platform: 'instagram',
    content: "Excellence at work. As above, so below. Celebrating our team's dedication to building a better future.",
    image: s55,
    date: 'a day ago',
    link: '#'
  }
];
