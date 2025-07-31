# Dynamic HTML Constants - Implementation Guide

## Overview
This project implements a system to use dynamic data from TypeScript constants in the `index.html` file. This allows you to maintain all your business information in one place (`src/lib/constants.ts`) and have it automatically injected into the HTML during the build process.

## How It Works

### 1. Template Variables in HTML
The `index.html` file uses template variables in the format `{{VARIABLE_NAME}}` that get replaced during the build process.

### 2. Vite Plugin
A custom Vite plugin (`injectConstantsPlugin`) reads the constants from your TypeScript files and replaces the template variables in the HTML.

### 3. SEO Constants File
The `src/lib/seo-constants.ts` file contains all the SEO-related constants that can be used in the HTML.

## Available Template Variables

### Contact Information
- `{{CONTACT_PHONE}}` - Phone number from constants
- `{{CONTACT_EMAIL}}` - Email address from constants
- `{{CONTACT_LOCATION}}` - Location from constants
- `{{SERVICE_AREA}}` - Service area description from constants

### Site Information
- `{{SITE_NAME}}` - Website name
- `{{SITE_URL}}` - Website URL
- `{{SITE_DESCRIPTION}}` - Website description

### Business Information
- `{{BUSINESS_NAME}}` - Business name
- `{{BUSINESS_ALTERNATE_NAME}}` - Alternative business name
- `{{BUSINESS_DESCRIPTION}}` - Business description

### Meta Information
- `{{META_TITLE}}` - Page title
- `{{META_DESCRIPTION}}` - Meta description
- `{{META_KEYWORDS}}` - Meta keywords

### Images
- `{{OG_IMAGE}}` - Open Graph image URL
- `{{LOGO_IMAGE}}` - Logo image URL

### Operating Hours
- `{{OPENING_HOURS}}` - Business operating hours

### Coordinates
- `{{LATITUDE}}` - Business latitude
- `{{LONGITUDE}}` - Business longitude
- `{{SERVICE_RADIUS}}` - Service area radius

## Usage Examples

### In index.html
```html
<!-- Title and meta tags -->
<title>{{META_TITLE}}</title>
<meta name="description" content="{{META_DESCRIPTION}}" />
<meta name="keywords" content="{{META_KEYWORDS}}" />

<!-- Open Graph tags -->
<meta property="og:title" content="{{META_TITLE}}" />
<meta property="og:description" content="{{META_DESCRIPTION}}" />
<meta property="og:image" content="{{OG_IMAGE}}" />

<!-- Structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{BUSINESS_NAME}}",
  "telephone": "{{CONTACT_PHONE}}",
  "email": "{{CONTACT_EMAIL}}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{{CONTACT_LOCATION}}"
  }
}
</script>
```

## Adding New Template Variables

### Step 1: Add to SEO Constants
Add your new constant to `src/lib/seo-constants.ts`:

```typescript
export const SEO_CONSTANTS = {
  // ... existing constants
  NEW_CONSTANT: 'Your new value',
  // ... rest of constants
} as const;
```

### Step 2: Add to Vite Plugin
Add the replacement logic to the Vite plugin in `vite.config.ts`:

```typescript
import { Plugin } from "vite";

const injectConstantsPlugin = (): Plugin => {
  return {
    name: 'inject-constants',
    transformIndexHtml: {
      order: 'pre',
      handler(html: string) {
        return html
          // ... existing replacements
          .replace(/\{\{NEW_CONSTANT\}\}/g, SEO_CONSTANTS.NEW_CONSTANT);
      }
    }
  };
};
```

### Step 3: Use in HTML
Use the template variable in your `index.html`:

```html
<meta name="new-property" content="{{NEW_CONSTANT}}" />
```

## Benefits

### 1. Single Source of Truth
All business information is maintained in one place (`constants.ts`), ensuring consistency across the application.

### 2. SEO Optimization
Easy to update SEO-related information without manually editing HTML files.

### 3. Maintainability
Changes to contact information, business details, or SEO data only require updates to the constants file.

### 4. Type Safety
TypeScript ensures that all constants are properly typed and available.

### 5. Build-time Injection
Constants are injected at build time, so the final HTML contains the actual values (no client-side processing needed).

## File Structure

```
src/
├── lib/
│   ├── constants.ts          # Main application constants
│   └── seo-constants.ts      # SEO-specific constants
├── vite.config.ts            # Vite configuration with plugin
└── index.html               # HTML template with variables
```

## Best Practices

### 1. Keep Constants Organized
- Use descriptive variable names
- Group related constants together
- Add comments for clarity

### 2. Validate Template Variables
- Always test the build after adding new variables
- Check that all variables are replaced in the final HTML
- Use TypeScript to catch typos

### 3. SEO Considerations
- Keep meta descriptions under 160 characters
- Use relevant keywords naturally
- Ensure all structured data is properly formatted

### 4. Performance
- Template variables are replaced at build time
- No runtime overhead
- Final HTML is optimized and minified

## Troubleshooting

### Template Variable Not Replaced
1. Check that the variable is defined in `seo-constants.ts`
2. Verify the replacement is added to the Vite plugin
3. Ensure the variable name matches exactly (case-sensitive)
4. Run `npm run build` to test

### Build Errors
1. Check TypeScript compilation errors
2. Verify all imports are correct
3. Ensure constants are properly exported

### SEO Issues
1. Validate structured data with Google's testing tools
2. Check meta tags with social media debugging tools
3. Verify canonical URLs are correct

## Example: Adding Social Media Links

### 1. Add to constants
```typescript
export const SEO_CONSTANTS = {
  // ... existing constants
  SOCIAL_MEDIA: {
    facebook: 'https://facebook.com/ruslan.zahradnik',
    instagram: 'https://instagram.com/ruslan_zahradnik'
  }
} as const;
```

### 2. Add to Vite plugin
```typescript
.replace(/\{\{FACEBOOK_URL\}\}/g, SEO_CONSTANTS.SOCIAL_MEDIA.facebook)
.replace(/\{\{INSTAGRAM_URL\}\}/g, SEO_CONSTANTS.SOCIAL_MEDIA.instagram)
```

### 3. Use in HTML
```html
<meta property="og:see_also" content="{{FACEBOOK_URL}}" />
<meta property="og:see_also" content="{{INSTAGRAM_URL}}" />
```

This system provides a powerful and maintainable way to keep your HTML synchronized with your application's data while maintaining excellent SEO practices. 