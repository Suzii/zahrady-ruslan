import { CONTACT_INFO } from './constants';

// SEO-specific constants that can be used in index.html
export const SEO_CONSTANTS = {
  // Site information
  SITE_NAME: 'Zahrady Ruslan',
  SITE_URL: 'https://zahrady-ruslan.lovable.app/',
  
  // Contact information (from constants)
  CONTACT_PERSON_NAME: CONTACT_INFO.name,
  CONTACT_PHONE: CONTACT_INFO.phone,
  CONTACT_EMAIL: CONTACT_INFO.email,
  CONTACT_LOCATION: CONTACT_INFO.location,
  SERVICE_AREA: CONTACT_INFO.serviceArea,
  
  // Business information
  BUSINESS_NAME: 'Zahrady Ruslan',
  BUSINESS_ALTERNATE_NAME: 'Ruslan - Zahradnické služby',
  BUSINESS_DESCRIPTION: 'Profesionální zahradník specializující se na kompletní realizace zahrad a údržbu v Brně a okolí do 30 km.',
  
  // Location coordinates
  LATITUDE: 49.1951,
  LONGITUDE: 16.6068,
  SERVICE_RADIUS: 30000,
  
  // Operating hours
  OPENING_HOURS: 'Mo-Fr 08:00-17:00',
  
  // Images
  OG_IMAGE: 'https://zahrady-ruslan.lovable.app/og-image.jpg',
  LOGO_IMAGE: 'https://zahrady-ruslan.lovable.app/logo.png',
  
  // Meta information
  META_TITLE: 'Ruslan - Zahradnické služby Brno | Realizace a udržba zahrad',
  META_DESCRIPTION: 'Profesionální zahradník Ruslan nabízí kompletní realizace zahrad v Brně a okolí do 30 km. Pokládka trávníku, sázení stromů, závlaha, chodníčky, suché zídky.',
  META_KEYWORDS: 'zahradník Brno, realizace zahrad Brno, pokládka trávníku, zavlažování, sázení stromů, závlaha zahrad, údržba zahrad'
} as const;

 