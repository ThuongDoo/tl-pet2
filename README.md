# Site template (multi-project, multi-client)

React + Vite site that renders a single page from data stored in Firestore.
This codebase is **read-only** — it fetches `websites/{websiteId}` and
renders it; content is edited elsewhere (a separate back-office app), not
here.

One Firebase project is shared across every project and every client. What
separates them is a per-deployment **website ID**
(see [`src/lib/site.js`](src/lib/site.js)): each client gets its own build
(its own `.env`), pointed at its own `websites/{websiteId}` doc, but all
builds read from the same Firebase backend.

## Data model

```
users/{uid}                doc: { role }
templates/{templateId}     doc: (owned by the back office, not read by this app)
websites/{websiteId}       doc: { ownerId, templateId, config }
```

`websiteId` comes from `VITE_WEBSITE_ID`. `config` is a native Firestore map
(the back office writes it that way so it's browsable/editable directly in
the Firestore console, not an opaque blob). Older docs may still have it as
a JSON string from before that change — `useWebsiteConfig` in
[`src/lib/content.js`](src/lib/content.js) tolerates both, so nothing here
needs to change again once every site has been re-saved at least once in
the editor.

This deployment is a pet clinic landing page (ported from the `pet-2`
template). [`src/data/normalizeConfig.js`](src/data/normalizeConfig.js) fills
in any field missing from `config` with a safe empty default before handing
it to the components, so a partially-filled Firestore doc never crashes the
page. See [`src/data/sample-config.json`](src/data/sample-config.json) for a
full example of every field the components read — copy its shape into a
`websites/{id}` doc's `config` map to populate a new site. Top-level shape,
rendered by [`src/pages/SitePage.jsx`](src/pages/SitePage.jsx):

```json
{
  "themePrimary": "#0284c7",
  "themeAccent": "#0891b2",
  "brand": "PetCare Clinic",
  "phoneHanoi": "1900 0000",
  "hero": { "eyebrow": "...", "title": "...", "desc": "...", "image": "", "cta": "..." },
  "services": { "eyebrow": "...", "title": "...", "items": [{ "title": "...", "desc": "...", "image": "" }] },
  "branches": { "eyebrow": "...", "title": "...", "items": [{ "name": "...", "city": "...", "address": "...", "phone": "...", "hours": "..." }] },
  "visible": { "hero": true, "services": true, "branches": true }
}
```

`themePrimary`/`themeAccent` are expanded into a full shade scale
(`--c-50`..`--c-700`) via [`src/hooks/useThemeVars.js`](src/hooks/useThemeVars.js)
and applied as CSS custom properties on the page root — components reference
them as `var(--c-600)` etc. `visible.<section>` toggles a section off when
explicitly `false`; every section defaults to shown.

## Running a client site

1. Copy `.env.example` to `.env` and set `VITE_WEBSITE_ID` to that client's
   `websites/{id}` doc ID (provisioned by the back office).
2. `npm run dev`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — eslint
"# template" 
