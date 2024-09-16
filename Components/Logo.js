import Image from 'next/image'
import logo from '../logo.png'

const Logo = () => {
  return (
    <div>
        <Image alt='Logo' height={100}  src={logo} />
    </div>
  )
}

export default Logo