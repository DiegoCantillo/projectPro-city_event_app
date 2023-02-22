import { useRouter } from 'next/router';

export default function Events() {
  const router = useRouter();
  console.log(router);
  const { list_events } = router.query;
  return (
    <>
      <div className="text-app-blue">estos son tus {list_events}</div>
    </>
  );
}
