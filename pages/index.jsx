import Link from 'next/link';

const Index = () => (
  <div>
    <span>Sou o Index</span><br />
    <Link href='/about'>
      <button>Go to ABout</button>
    </Link>
  </div>
)

export default Index;