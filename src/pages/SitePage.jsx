import { useEffect } from 'react'
import { useWebsiteConfig } from '../lib/content'
import { normalizeConfig } from '../data/normalizeConfig'
import { useThemeVars } from '../hooks/useThemeVars'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Mission from '../components/Mission'
import Specialties from '../components/Specialties'
import Services from '../components/Services'
import Team from '../components/Team'
import Community from '../components/Community'
import CaseStudies from '../components/CaseStudies'
import Branches from '../components/Branches'
import Partners from '../components/Partners'
import News from '../components/News'
import VideoSection from '../components/VideoSection'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

export default function SitePage() {
  const { config, loading, error } = useWebsiteConfig()
  const data = normalizeConfig(config)
  const themeVars = useThemeVars(data.brand.themePrimary, data.brand.themeAccent)

  useEffect(() => {
    if (data.brand.pageTitle) document.title = data.brand.pageTitle
  }, [data.brand.pageTitle])

  if (loading) return null
  if (error) return <p className="p-16 text-center">Không tải được nội dung.</p>
  if (!config) return null

  return (
    <div className="min-h-screen bg-white" style={themeVars}>
      <Header data={data} />
      {data.visible.hero && <Hero data={data} />}
      {data.visible.features && <Features data={data} />}
      {data.visible.mission && <Mission data={data} />}
      {data.visible.specialties && <Specialties data={data} />}
      {data.visible.services && <Services data={data} />}
      {data.visible.team && <Team data={data} />}
      {data.visible.community && <Community data={data} />}
      {data.visible.caseStudies && <CaseStudies data={data} />}
      {data.visible.branches && <Branches data={data} />}
      {data.visible.partners && <Partners data={data} />}
      {data.visible.news && <News data={data} />}
      {data.visible.video && <VideoSection data={data} />}
      {data.visible.footer && <Footer data={data} />}
      <FloatingButtons data={data} />
    </div>
  )
}
