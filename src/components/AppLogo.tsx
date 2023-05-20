import Logo from '../assets/app-logo.webp'

interface AppLogoProps {
  className: string
}
function AppLogo({ className = '' }: AppLogoProps) {
  return <img src={Logo} alt="logo" className={className} />
}

export default AppLogo
