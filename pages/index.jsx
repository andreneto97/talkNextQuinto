import Link from 'next/link';

const Index = () => (
  <div>
    <span>Hello world</span>
    <Link href='/about'>
      <button>Go to ABout</button>
    </Link>
  </div>
)

export default Index;