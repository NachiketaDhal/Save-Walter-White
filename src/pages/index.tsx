import Image from 'next/image';
// import '@styles/globals.css';

export default function home() {
  return (
    <div className="grid p-5 md:grid-cols-2 lg:px-24">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold text-green">Help</span> Mr. White
        </h1>
        <p className="textBlock-subtitle">
          My dad is amazing. It’s funny, but I didn’t know that untilI found out
          he is going to die.
        </p>
        <button className="w-32 p-2 text-2xl font-medium tracking-wider text-black uppercase bg-green lg:w-48 focus:outline-none">
          Donate
        </button>
      </div>
      <div>
        <Image
          src="/assets/hero.png"
          height={640}
          width={670}
          alt="hero"
          quality={100}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
