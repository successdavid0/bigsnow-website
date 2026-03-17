# Custom Images

Replace these placeholder files with your own images:

| File | Location | Usage |
|------|----------|-------|
| `bigsnow.png` | `public/bigsnow.png` | Favicon (browser tab icon) |
| `logo.svg` | `public/logo.svg` | Navbar logo (or use `logo.png`) |
| `hero-image.svg` | `public/hero-image.svg` | Hero section photo beside content (or use `hero-image.png`) |
| Project logos | `public/projects/*.png` | Projects section — chainvault, metadao, nexusswap, cryptocanvas (or your filenames) |

**Project logos:** Add images to `public/projects/` and set the `image` path in `components/sections/Projects.tsx` for each project. Use PNG/SVG with transparent background. Omit `image` to show initials.

**To use your images:**
1. Add your logo to `public/logo.png` (or replace `public/logo.svg`)
2. Add your photo to `public/hero-image.png` (or replace `public/hero-image.svg`)
3. If using `.png` instead of `.svg`, update the `src` in:
   - `components/Navbar.tsx` → `src="/logo.png"`
   - `components/sections/Hero.tsx` → `src="/hero-image.png"`

Recommended: Logo ~40×40px or square, Hero image ~400×400px or larger (portrait works well).
