import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  console.log(router);
  const { profile } = router.query;
  return (
    <>
      <div className="text-app-blue">
        <h1>este es el {profile}</h1>
        <h4>este es el {profile}</h4>

        <h2>este es el {profile}</h2>
        <h5>este es el {profile}</h5>

        <h3>este es el {profile}</h3>
        <p className="text_1">este es el {profile}</p>
        <p className="text_2">este es el {profile}</p>
      </div>
    </>
  );
}
