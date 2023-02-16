import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout>
        Home
        <ul>
          <li>
            <Link href="/profiles/profile">ve a tu perfil</Link>
          </li>
          <li>
            <Link href="/profiles/votes/votes">ve a votos</Link>
          </li>
          <li>
            <Link href="/createPost">ve a tus posts</Link>
          </li>
          <li>
            <Link href="/signUp">registrate</Link>
          </li>

          <li>
            <Link href="/startSesion">haz login</Link>
          </li>
        </ul>
      </Layout>
    </>
  );
}
