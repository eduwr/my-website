import Head from "next/head";

export default function Custom404() {
  return (
    <div
      className="flex flex-col items-center justify-center text-tertiary"
    >
      <Head>
        <title>Eduardo Wronscki | 404</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <h1 className="text-6xl mb-5 font-bold">404</h1>
      <h1 className="text-4xl font-bold">Oops! Page Not Found.</h1>
      <p className="mt-8">The page you&apos;re looking for is out of range.</p>
    </div>
  )
}
