import { ethers, getDefaultProvider, Signer } from "ethers";
import Image from "next/image";
import React, { useState } from "react";
import { DiscordAlt } from "styled-icons/boxicons-logos";
import { Twitter } from "styled-icons/remix-fill";
import ClipLoader from "react-spinners/ClipLoader";
import detectEthereumProvider from "@metamask/detect-provider";

// @ts-ignore
function index() {
  const [loading, setLoading] = useState(false);
  // NOT REAL ADDRESS!
  const contractAddress = "0x1775b7ae0180d917FDC57d64810E2Fe4887B22c5";
  const abi = ["function mint()"];

  // Function that handles minting
  async function mintHandler() {
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      setLoading(true);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.mint();
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  }

  return (
    <div className="md:my-[14rem] place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex">
          <div className="max-w-[1400px] p-6 text-black flex flex-col md:flex-row mx-auto md:space-x-5 place-content-between">
            {/* <div className="flex flex-col w-full md:w-1/2 my-8">
              <h1 className="text-3xl font-bold">Our Team</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <p>
                Web3SG believes 99% of nfts go to zero. <br />
                <br />
                NFTs have yet to reach the inevitability of adoption similar to
                crypto and blockchain technology. <br />
                <br />
                We believe NFTs become inevitable when it moves past the current
                meta of hype and speculation to real life utility.
                <br />
                <br />
                Markets need to mature to deliver truly bespoke, individually
                personalized projects with a visionary result, everytime. <br />
                <br />
                Our focus is on your well being, high quality results, and
                attention to details. Interiors should be more than just a
                space, it is a reflection of the occupants and we strive to make
                every space catered to improve your quality of living. We design
                projects personalized and exceed expectations by working closely
                with our clients, understanding them and providing them a
                dedicated team of highly skilled consultants. <br />
                <br />A good design isn&#39;t just a visual element, it is a
                flow of space and an atmosphere. When incorporated well, design
                affects us physically, mentally, and spiritually. We combine
                both art and technology to create the best possible enviornment
                for every event.
              </p>
            </div> */}
            <div className="flex flex-col w-full md:w-1/2 my-8">
              <h1 className="text-3xl font-bold">Web3SG Citadel Pass</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <p>
                The Web3SG Citadel Collection is a collection of 333 NFT passes
                that give its holders exclusive rights and access to a plethora
                of networking opportunities, funding, and decision-making within
                the WEB3SG community.
                <br />
                <br />
                The pass will be <u>free</u> to mint, and will be first
                available to outstanding members of the community - then if
                supply allows, it will be available to the public.
                <br />
                <br />
                Mint date is still{" "}
                <span className="font-gilroy-black font-bold">TBA</span>, so be
                sure to follow Web3SG on{" "}
                <a
                  className="font-gilroy-black font-bold cursor-pointer text-blue-500"
                  href="https://twitter.com/web3sg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="w-4" /> Twitter
                </a>{" "}
                and join the{" "}
                <a
                  className="font-gilroy-black font-bold cursor-pointer text-[#5865F2]"
                  href="https://discord.gg/web3sg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DiscordAlt className="w-4 mr-[5px]" />
                  Discord
                </a>
                .
              </p>
              <div className="mt-10 space-y-5">
                <h1>Current Supply: 0/333</h1>

                <div>
                  <button
                    onClick={mintHandler}
                    className="px-4 md:px-8 py-2 md:py-4 place-content-center md:text-2xl text-xl font-gilroy-bold text-black hover:bg-red-400 bg-red-300 mr-auto rounded-full tracking-wider flex flex-row space-x-4"
                  >
                    <ClipLoader
                      loading={loading}
                      size={30}
                      className="my-auto"
                    />
                    <h1>Mint Pass</h1>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black m-auto mb-5 p-1 rounded-sm">
              <div className="relative place-content-center flex md:w-[400px] w-[200px] h-[200px] md:h-[400px] mx-auto my-auto md:my-auto">
                <Image
                  src={"/images/pass_v2_square.gif"}
                  alt={"placeholder"}
                  layout="fill"
                  className="flex mx-auto"
                />
                <h1 className="absolute bottom-5 right-5 font-bold text-md md:text-2xl bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-md font-righteous">
                  Citadel Pass
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
