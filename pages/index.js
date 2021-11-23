import Head from "next/head";
import signingTools from "@zondax/filecoin-signing-tools/js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Debug</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Load this up</h1>
      </main>
    </div>
  );
}
