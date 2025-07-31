export const CONTACT_INFO = {
  phone: '+420 123 456 789',
  email: 'ruslan@zahradnik.cz',
  location: 'Brno a okolí',
  serviceArea: 'Obsluhuji oblasti do 30 km od Brna'
} as const;

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Travnatá zahrada s nově položeným trávníkem a okrasnými rostlinami',
    category: 'Trávníky'
  },
  {
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Moderní zahradní design s vyvýšenými záhony a dekorativními kameny',
    category: 'Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Realizace zahradních chodníčků z přírodního kamene',
    category: 'Chodníky'
  },
  {
    url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Kompletní zahradní úprava s automatickým zavlažovacím systémem',
    category: 'Závlaha'
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mlatová cesta s okrasnými keři a sezónním osázením',
    category: 'Cesty'
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Terénní úpravy s výsadbou stromů a tvarovanými záhony',
    category: 'Výsadba'
  }
] as const;

export const NAV_ITEMS = [
  { href: '#uvod', label: 'Úvod' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#galerie', label: 'Galerie' }
] as const;

export const SERVICE_AREA_MAP_IMAGE = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

export const HERO_VIDEO_SOURCE = '/hero.mp4'; 