import Image from 'next/image'
import logo from '../logo.png'

const Logo = () => {
  return (
    <div>
        <Image alt='Logo' src={logo} />
    </div>
  )
}

export default Logo