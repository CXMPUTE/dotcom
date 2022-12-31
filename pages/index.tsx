import Head from "next/head";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const Home = () => {
  const init = useCallback(
    async (engine: Engine) => await loadFull(engine),
    []
  );

  return (
    <div className={'min-h-screen bg-black'}>
      <Head>
        <title>Watch this space.</title>
        <meta name="description" content="The next step in cloud computing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Particles
          init={init}
          options={{
            fpsLimit: 120,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.25,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="grid h-screen place-items-center">
          <div className={'text-center'}>
            <p className={'font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-orange-500 text-9xl'}>CXMPUTE</p>
            <p className={'font-bold underline text-lg text-gray-500'}>High performance <span className={'text-orange-400'}>cxmpute</span> at a low price.</p>
            <button className={'px-4 py-2 mt-8 bg-gray-700 rounded text-xl opacity-100 font-bold text-gray-300'}>Join Waitlist</button>
          </div>
        </div>
    </div>
  );
};

export default Home;
