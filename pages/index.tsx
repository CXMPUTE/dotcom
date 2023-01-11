import Head from "next/head";
import Card from "./elements/Card";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const products = [
  {
    name: "par16",
    cost: 16,
    specs: {
      location: { continent: "Europe", city: "Paris, France" },
      cpu: { model: "Intel® Atom C2750", speed: "8x2.4GHz" },
      memory: { type: "8GB DDR3 RAM", speed: "2133MHz Non-ECC" },
      storage: { type: "128GB SATA SSD", total: "128GB total" },
    },
    features: [
      "DDoS Protection",
      "99.9% Uptime SLA",
      "100mbit unmetered, parallel network",
    ],
  },
  {
    name: "par32",
    cost: 32,
    specs: {
      location: { continent: "Europe", city: "Paris, France" },
      cpu: { model: "Intel® Xeon D-1531", speed: "4x3.4GHz" },
      memory: { type: "32GB DDR4 RAM", speed: "2666MHz ECC" },
      storage: { type: "2x 256GB SATA SSD", total: "512GB total" },
    },
    features: [
      "DDoS Protection",
      "99.9% Uptime SLA",
      "100mbit unmetered, parallel network",
    ],
  },
  {
    name: "lil64",
    cost: 48,
    specs: {
      location: { continent: "Europe", city: "Lille, France" },
      cpu: { model: "Intel® Xeon E5-1630 v3", speed: "4x3.7GHz" },
      memory: { type: "64GB DDR4 RAM", speed: "2666MHz ECC" },
      storage: { type: "2x 240GB SATA SSD", total: "480GB total" },
    },
    features: [
      "DDoS Protection",
      "99.9% Uptime SLA",
      "100mbit unmetered, parallel network",
    ],
  },
  {
    name: "dus64",
    cost: 48,
    specs: {
      location: { continent: "Europe", city: "Dusseldorf, Germany" },
      cpu: { model: "Intel® Xeon D-1540", speed: "8x2.0GHz" },
      memory: { type: "64GB DDR4 RAM", speed: "2666MHz ECC" },
      storage: { type: "2x 240GB SATA SSD", total: "480GB total" },
    },
    features: [
      "DDoS Protection",
      "99.9% Uptime SLA",
      "1gbit unmetered, parallel network",
    ],
  },
  {
    name: "sea128",
    cost: 128,
    specs: {
      location: { continent: "North America", city: "Seattle, USA" },
      cpu: { model: "2x Intel® Xeon E5-2660", speed: "16x2.2GHz" },
      memory: { type: "128GB DDR3 RAM", speed: "2133MHz ECC" },
      storage: { type: "1TB SATA SSD", total: "480GB total" },
    },
    features: [
      "DDoS Protection",
      "99.9% Uptime SLA",
      "1gbit unmetered, parallel network",
    ],
  },
];

const Home = () => {
  const init = useCallback(
    async (engine: Engine) => await loadFull(engine),
    []
  );

  return (
    <div className={"min-h-screen bg-black"}>
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
              value: "",
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
              speed: 0.75,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
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
      <div className={"grid lg:mx-20"}>
        <div className={"text-center my-20"}>
          <p
            className={
              "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-orange-500 text-6xl lg:text-9xl"
            }
          >
            CXMPUTE
          </p>
          <p className={"font-bold underline text-lg text-gray-500"}>
            High performance <span className={"text-orange-400"}>cxmpute</span>{" "}
            at a low price.
          </p>
          <a
            href={
              "mailto:preorder@cxmpute.com?subject=Waitlist Request&body=Please add this email to the waitlist.\n\n"
            }
          >
            <button
              className={
                "px-4 py-2 mx-2 mt-8 bg-gray-700 rounded text-xl opacity-100 font-bold text-gray-300"
              }
            >
              Join Waitlist
            </button>
          </a>
          <a href={"https://discord.gg/xQDJFR99nb"}>
            <button
              className={
                "px-4 py-2 mx-2 mt-8 bg-gray-700 rounded text-xl opacity-100 font-bold text-gray-300"
              }
            >
              Stay in touch
            </button>
          </a>
        </div>
        <div className={"grid lg:grid-cols-4 gap-4"}>
          {products.map((p, key) => (
            <Card
              key={key}
              name={p.name}
              cost={p.cost}
              specs={p.specs}
              features={p.features}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
