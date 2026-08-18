import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url = '' }) {
  const siteTitle = `${title} | East West Group`
  const defaultDesc = 'East West Group — One Group, Two Specialized Companies, One Commitment to Agriculture. Providing quality seeds and crop protection solutions across Nepal.'
  const fullUrl = `https://eastwestgroup.com.np${url}`

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
    </Helmet>
  )
}
