import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:my-[8rem] place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
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
            <div className="flex flex-col w-full my-8">
              <h1 className="text-3xl font-bold">Events</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              Coming soon
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-auto flex">
        <div className="py-10 md:px-6 place-content-center mx-auto text-black">
          {/* <h1 className=" text-3xl mx-auto text-center font-gilroy-bold">
            Experience
          </h1>
          <div className="h-[2px] bg-black w-[10rem] mx-auto my-6" /> */}
          {/* <div className="mx-auto flex text-white place-content-center">
            <div className="flex md:flex-row flex-col place-content-between md:space-x-5 md:space-y-0 space-y-10 font-gilroy-bold md:text-lg text-md">
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>5+ Events</h1>
              </div>
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>328 Projects Partnered</h1>
              </div>
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>16+ Team Members</h1>
              </div>
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>19,000+ Discord Members</h1>
              </div>
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>110,000+ Twitter Followers</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default index;