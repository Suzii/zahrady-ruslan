export const CONTACT_INFO = {
  name: 'Ruslan Masurjak',
  phone: '+420 123 456 789',
  email: 'ruslan@zahradnik.cz',
  location: 'Brno a okolí',
  serviceArea: 'Obsluhuji oblasti do 30 km od Brna'
} as const;

export const GALLERY_IMAGES = [
  {
    url: '/public/img/flower-beds.jpg',
    description: 'Profesionální pokládka travních koberců pro dokonalý zelený trávník'
  },
  {
    url: '/public/img/irrigation.jpg',
    description: 'Automatický zavlažovací systém pro efektivní péči o trávník a záhony'
  },
  {
    url: '/public/img/trees-planting.jpg',
    description: 'Výsadba okrasných keřů a stromů podle individuálních požadavků'
  },
  {
    url: '/public/img/flower-beds2.jpg',
    description: 'Zakládání záhonů s mulčením'
  },
  {
    url: '/public/img/stone-dry-wall.jpg',
    description: 'Suché zídky a skalky z přírodního kamene pro dekorativní prvky zahrady'
  },
  {
    url: '/public/img/raised-beds.jpg',
    description: 'Vyvýšené záhony na míru pro pohodlné pěstování zeleniny a bylinek'
  },
  {
    url: '/public/img/stepping-stones.jpg',
    description: 'Zahradní chodníčky z přírodního kamene s profesionálním provedením'
  } 
] as const;

export const NAV_ITEMS = [
  { href: '#uvod', label: 'Úvod' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#galerie', label: 'Galerie' }
] as const;

export const SERVICE_AREA_MAP_IMAGE = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

export const HERO_VIDEO_SOURCE = '/hero.mp4'; 