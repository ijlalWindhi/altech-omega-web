import {
  Link,
  Logo,
  Statistic as StatisticType,
  Pricing as PricingType,
} from '@/types';
import Google from '/images/google.png';
import Apple from '/images/apple.png';
import Amazon from '/images/amazon.png';
import Meta from '/images/meta.png';
import Unilever from '/images/unilever.png';
import X from '/images/x.png';

// Navbar
export const NavMenu: Link[] = [
  { title: 'Home', id: 'hero' },
  { title: 'About', id: 'about' },
  { title: 'Pricing', id: 'pricing' },
  { title: 'Contact', id: 'contact' },
];
// End Navbar

// Footer
export const FooterPageLink: string[] = ['Home', 'About', 'Pricing', 'Contact'];

export const FooterAdditionalLink: string[] = [
  'Enterprise Resource Planning',
  'Business IT Consultation',
  'Application Development',
  'Blockchain Technology',
  'BI and Data Analytic',
];

export const FooterTentangKami: string[] = [
  'Tim Kami',
  'Tutor',
  'Loan Partner',
];

export const FooterSuccessStory: string[] = [
  'Success Story',
  'Blog',
  'Podcast',
];
// End Footer

// Brand Logo
export const LogoBrand: Logo[] = [
  {
    src: Apple,
    alt: 'Apple logo',
    width: 50,
    height: 50,
  },
  {
    src: Amazon,
    alt: 'Amazon logo',
    width: 50,
    height: 50,
  },
  {
    src: Meta,
    alt: 'Meta logo',
    width: 50,
    height: 50,
  },
  {
    src: Unilever,
    alt: 'Unilever logo',
    width: 50,
    height: 50,
  },
  {
    src: Google,
    alt: 'Google logo',
    width: 50,
    height: 50,
  },
  {
    src: X,
    alt: 'X logo',
    width: 50,
    height: 50,
  },
];
// End Brand Logo

// Statistic
export const Statistic: StatisticType[] = [
  {
    value: '5+',
    title: 'Tahun Pengalaman',
  },
  {
    value: '100rb',
    title: 'Alumni',
  },
  {
    value: '5',
    title: 'Metode Kelas',
  },
  {
    value: '100+',
    title: 'Perusahaan Rekanan',
  },
];
// End Statistic

// About
export const About: string[] = [
  'Providing Financial Information as a basis of Decision Making process',
  '24/7 business and technical support',
  'Reasonable Pricing and Selected Payment Option',
  'Effective and Efficient Deliverables',
];
// End About

// Pricing
export const Pricing: PricingType[] = [
  {
    type: 'Basic',
    description: 'Suitable for small business',
    monthlyPrice: 100,
    yearlyPrice: 1000,
    discountYearlyPrice: 900,
    features: [
      '10GB Storage',
      '10 Users',
      'Unlimited Bandwidth',
      '24/7 Support',
    ],
  },
  {
    type: 'Standard',
    description: 'Suitable for medium business',
    monthlyPrice: 200,
    yearlyPrice: 2000,
    discountYearlyPrice: 1800,
    features: [
      '50GB Storage',
      '50 Users',
      'Unlimited Bandwidth',
      '24/7 Support',
    ],
  },
  {
    type: 'Premium',
    description: 'Suitable for large business',
    monthlyPrice: 300,
    yearlyPrice: 3000,
    discountYearlyPrice: 2700,
    features: [
      '100GB Storage',
      '100 Users',
      'Unlimited Bandwidth',
      '24/7 Support',
    ],
  },
];
