import { IDonation } from '@libs/types';
import { GetServerSidePropsContext, NextPage } from 'next';

const stats: NextPage<{ donations: IDonation[] }> = ({ donations }) => {
  const getTotalDonations = (): string => {
    const totalAmount = donations.reduce((acc, cur) => acc + cur.amount, 0);
    return `${totalAmount}$`;
  };

  return (
    <div className="grid h-full p-5 md:grid-cols-2 lg:px-24">
      <div className="flex flex-col justify-center space-y-3">
        <div className="items-center w-10/12 mx-auto textBlock-wrapper bg-gray-dark md:py-14">
          <h1 className="mb-4 text-2xl text-green textBlock-title md:text-5xl">
            Total Donations
          </h1>
          <span className="px-6 py-4 text-2xl bg-gray-light md:text-3xl">
            {getTotalDonations()}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-3 text-center">
        <h1 className="mb-4 text-2xl text-green textBlock-title md:text-5xl">
          Last 5 donations
        </h1>
        {donations.map((donation, i) => (
          <div
            key={i}
            className="flex justify-between px-6 py-4 my-3 text-xl border-2 rounded-lg bg-gray-dark border-green"
          >
            <span>{donation.name}</span>
            <span>{donation.amount}$</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default stats;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let data;
  try {
    const res = await fetch(`${process.env.API_BASE_ENDPOINT}api/donation`);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  console.log('I am called2');
  return {
    props: {
      donations: data,
    },
  };
}
