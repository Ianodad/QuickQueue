import Head from 'next/head';
import Image from 'next/image';
import RefForm from 'components/RefForm';

export default function Home() {
  return (
    <div className="bg-primary w-full h-screen bg-dunes bg-cover bg-center">
      <div className="container mx-auto pt-24">
        <div className="welcome-header">
          <h1 className="text-center text-7xl font-black text-white">WELCOME</h1>
        </div>
        <div className="max-w-md mx-auto overflow-hidden md:max-w-md flex items-center justify-center">
          <div className="md:flex text-center">
            <div className="w-full p-2 py-10">
              <h3 className="text-2xl text-white py-5 font-semibold">Your Waiting Number is:</h3>
              <div className="flex justify-center mx-auto mt-15 mb-10 border-4 border-secondary	 w-1/2 pt-4">
                <h2 className="linePosition text-6xl font-bold font-mono mr-1 text-secondary">5</h2>
                <div className="flex mt-5">
                  <h3 className="text-base text-white font-normal mt-1 mr-1">Of </h3>
                  <h3 className="text-2xl text-white font-bold">8</h3>
                </div>
              </div>

              <h2 className="text-white font-semibold"> ENTER REF CODE</h2>
              <RefForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
