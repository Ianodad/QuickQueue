import { CopyIcon } from 'components/icons/CopyIcon';
import { useRouter } from 'next/router';
import Clipboard from 'react-clipboard.js';
import Axios from "axios";

export default function referral() {
  const { query } = useRouter();

  console.log(query.refCode);

  return (
    <div className="bg-secondary w-full h-screen bg-dunes bg-cover bg-center">
      <div className="container mx-auto pt-24">
        <div className="p-10 overflow-hidden  items-center justify-center text-center">
          <div className="flex flex-col space-y-3 mx-auto">
            <div className="">
              <h1 className="font-bold  text-6xl text-white">REFERRAL CODE</h1>
            </div>
            <div className="mx-auto flex flex-row  pl-12">
              <div className="code border-4 pt-8 px-5 border-white rounded-lg mr-4">
                <h2 className="font-black text-8xl text-primary">{query.refCode}</h2>
              </div>
              <div className="copy">
                <Clipboard data-clipboard-text={query.refCode} button-title="Copy reference code">
                  <CopyIcon className="w-8 fill-current text-white hover:fill-current hover:text-gray-400" />
                </Clipboard>
              </div>
            </div>
            <div>
              <h1 className="font-black text-3xl text-white">Has been used 6 of 10</h1>
            </div>
            <div className="flex items-center justify-center mx-auto">
              <div className="flex items-center justify-center pt-2">
                <p className="text-white font-bold mr-1">Referral link</p>
                <p className="text-primary font-bold mr-1 underline underline-offset-1">
                  https://fingo.africa
                </p>
              </div>
              <div className="copy ml-2">
                <Clipboard data-clipboard-text={'https://fingo.africa'} button-title="Copy link">
                  <CopyIcon className="w-4 fill-current text-white hover:fill-current hover:text-gray-400" />
                </Clipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
