// The UI components assume every field exists (e.g. `data.branches.items.map`,
// `data.hero.eyebrow`). Firestore `config` is hand-edited in the back office
// and can be partially filled, so this fills in the gaps with safe empty
// defaults before the config reaches the components.
const EMPTY = {
  brand: {
    themePrimary: '',
    themeAccent: '',
    logo: '',
    brand: '',
    pageTitle: '',
    phoneHanoi: '',
    phoneHcm: '',
    emergencyLabel: '',
    bookingCta: '',
    hours: '',
    email: '',
    zalo: '',
    mapUrl: '',
    facebook: '',
    youtube: '',
  },
  hero: { eyebrow: '', title: '', desc: '', image: '', cta: '' },
  mission: { eyebrow: '', title: '', desc: '', image: '', button: '' },
  features: { eyebrow: '', items: [] },
  specialties: { eyebrow: '', title: '', items: [] },
  services: { eyebrow: '', title: '', items: [] },
  team: { eyebrow: '', title: '', items: [] },
  community: { eyebrow: '', title: '', items: [] },
  caseStudies: { eyebrow: '', title: '', items: [] },
  branches: { eyebrow: '', title: '', items: [] },
  partners: { eyebrow: '', items: [] },
  news: { eyebrow: '', title: '', items: [] },
  video: { eyebrow: '', title: '', desc: '' },
  footer: { desc: '', copyright: '' },
  visible: {},
}

// Sections a viewer can hide from the back office; default to shown when absent.
const SECTION_KEYS = [
  'hero',
  'features',
  'mission',
  'specialties',
  'services',
  'team',
  'community',
  'caseStudies',
  'branches',
  'partners',
  'news',
  'video',
  'footer',
]

export function normalizeConfig(config) {
  const c = config ?? {}
  const visible = {}
  for (const key of SECTION_KEYS) visible[key] = c.visible?.[key] !== false

  return {
    ...EMPTY,
    ...c,
    brand: { ...EMPTY.brand, ...c.brand },
    hero: { ...EMPTY.hero, ...c.hero },
    mission: { ...EMPTY.mission, ...c.mission },
    features: { ...EMPTY.features, ...c.features, items: c.features?.items ?? [] },
    specialties: { ...EMPTY.specialties, ...c.specialties, items: c.specialties?.items ?? [] },
    services: { ...EMPTY.services, ...c.services, items: c.services?.items ?? [] },
    team: { ...EMPTY.team, ...c.team, items: c.team?.items ?? [] },
    community: { ...EMPTY.community, ...c.community, items: c.community?.items ?? [] },
    caseStudies: { ...EMPTY.caseStudies, ...c.caseStudies, items: c.caseStudies?.items ?? [] },
    branches: { ...EMPTY.branches, ...c.branches, items: c.branches?.items ?? [] },
    partners: { ...EMPTY.partners, ...c.partners, items: c.partners?.items ?? [] },
    news: { ...EMPTY.news, ...c.news, items: c.news?.items ?? [] },
    video: { ...EMPTY.video, ...c.video },
    footer: { ...EMPTY.footer, ...c.footer },
    visible,
  }
}
