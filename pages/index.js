import Head from 'next/head';
import Image from 'next/image';
import RefForm from 'components/RefForm';
import Router from 'next/router';
import Axios from "axios";

export default function Home() {
  const CheckCode = (code) => {
    console.log(code);
    if (code === 'getin123') {
      Router.push({
        pathname: '/referral',
        query: { refCode: code },
      });
    }
  };
  return (
    <div className="bg-primary w-full h-screen bg-dunes bg-cover bg-center">
      <div className="container mx-auto pt-24">
        <div className="welcome-header">
          <h1 className="text-center text-9xl font-black text-white">WELCOME</h1>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <div className="md:flex text-center">
            <div className="w-full">
              <h3 className="text-5xl text-white py-3 font-semibold">Your Waiting Number is:</h3>
              <div className="flex justify-center mx-auto mt-15 mb-10 border-4 border-secondary	 w-1/2 pt-6">
                <h2 className="linePosition text-9xl font-bold font-mono mr-1 text-secondary">5</h2>
                <div className="flex pt-14">
                  <h3 className="text-base text-white font-medium mt-1 mr-1">Of </h3>
                  <h3 className="text-4xl text-white font-bold">8</h3>
                </div>
              </div>

              <h2 className="text-white font-semibold"> ENTER REFERRAL CODE</h2>
              <RefForm CheckCode={CheckCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
