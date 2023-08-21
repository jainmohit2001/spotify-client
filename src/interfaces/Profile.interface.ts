interface IImage {
  url: string
  height: number
  width: number
}

interface IExplicitContent {
  filter_enabled: boolean
  filter_locked: boolean
}

interface IProfile {
  id: string
  href: string
  country: string
  display_name: string
  email: string
  product: string
  type: string
  uri: string
  images: IImage[]
  explicit_content: IExplicitContent
}

export default IProfile
