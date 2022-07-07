import Head from "next/head";

export default function Custom500() {
  return (
    <div
      className="flex flex-col items-center justify-center text-tertiary"
    >
      <Head>
        <title>Eduardo Wronscki | 500</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <h1 className="text-6xl mb-5 font-bold">500</h1>
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="mt-8">Sorry about that. You can try again later.</p>
    </div>
  );
}
