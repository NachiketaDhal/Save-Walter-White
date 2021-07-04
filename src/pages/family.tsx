import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';

import { IQuote } from '@libs/types';
// import { quotes } from '@libs/data';

const family: NextPage<{ quotes: IQuote[] }> = ({ quotes }) => {
  return (
    <div className="grid h-full gap-5 p-6 lg:px-24 md:grid-cols-2">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold text-green">Family & </span>Friends
        </h1>
        <p className="extBlock-subtitle">Notes from family & friends</p>
      </div>
      <div className="flex flex-col justify-center space-y-3 ">
        {quotes.map(({ pictureURL, text, name }) => (
          <div
            className="flex p-3 px-6 space-x-3 text-sm rounded-lg bg-gray-dark md:text-base"
            key={name}
          >
            <div className="flex-shrink-0 text-center">
              <div className="image-wrapper">
                <Image
                  src={pictureURL}
                  alt={name}
                  height={60}
                  width={60}
                  objectFit="cover"
                  quality={100}
                  className="rounded-full"
                />
              </div>

              <span className="mt-1 text-green">{name}</span>
            </div>
            <p className="text-gray-300 ">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default family;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  let data;
  try {
    const res = await fetch(`${process.env.API_BASE_ENDPOINT}api/quotes`);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  console.log('I am called');

  return {
    props: {
      quotes: data ?? [],
    },
    revalidate: 10,
  };
};
