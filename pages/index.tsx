import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="container m-auto">
          <h1 className="text-2xl font-medium">Populares en Querétaro</h1>
          <p className="mb-3 text-gray-500">lo que las personas pinden más</p>
          <div className="cardContainer grid grid-cols-3 place-content-center">
            <div className="cards border max-w-xs mb-10">
              <Image src="/IMG/CardOne.png" alt="" width={320} height={239} />
              <div className="content p-5">
                <h2 className="font-semibold">concierto de lady Gaga</h2>
                <p className="text-sm mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus quo totam assumenda. Ea accusamus deserunt pariatur
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus quo totam assumenda. Ea accusamus deserunt pariatur
                </p>
                <div className="footer-card">
                  <p className="text-blue-700">ladygaga.com</p>
                  <p>90.098.839 votos</p>
                </div>
              </div>
            </div>
            <div className="cards border max-w-xs mb-10">
              <Image src="/IMG/CardOne.png" alt="" width={320} height={239} />
              <div className="content p-5">
                <h2 className="font-semibold">concierto de lady Gaga</h2>
                <p className="text-sm mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus quo totam assumenda. Ea accusamus deserunt pariatur
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus quo totam assumenda. Ea accusamus deserunt pariatur
                </p>
                <div className="footer-card">
                  <p className="text-blue-700">ladygaga.com</p>
                  <p>90.098.839 votos</p>
                </div>
              </div>
            </div>
            <div className="cards border max-w-xs mb-10">
              <Image src="/IMG/CardOne.png" alt="" width={320} height={239} />
              <div className="content p-5">
                <h2 className="font-semibold">concierto de lady Gaga</h2>
                <p className="text-sm mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus quo totam assumenda. Ea accusamus deserunt pariatur
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus quo totam assumenda. Ea accusamus deserunt pariatur
                </p>
                <div className="footer-card">
                  <p className="text-blue-700">ladygaga.com</p>
                  <p>90.098.839 votos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="eventPopular "></div>
        </div>
      </Layout>
    </>
  );
}
{
  /* <ul>
<li>
  <Link href="/home">hola</Link>
</li>
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
</ul> */
}
