import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="h-screen bg-custom-section-one bg-cover bg-center flex justify-evenly items-center"
      >
        <div className="h-[40%] w-[40%] flex items-center justify-center flex-col">
          <div className=" text-slate-200 text-9xl font-bold font-['Poppins'] leading-[128px]">
            Green Horizon
          </div>
          <div className=" text-neutral-50 text-[28px] font-normal font-['Poppins'] leading-7">
            A youth-led non-profit organization located in Brampton focused on
            the creating sustainable solutions
          </div>
        </div>
        <Image
          src="/section-one-tree.svg"
          width={570}
          height={570}
          alt="tree svg h-[40%] w-[40%]"
        />
      </section>
      <section
        id="mission"
        className="flex justify-evenly items-center bg-emerald-950 h-[770px] w-full"
      >
        <div className="flex flex-col justify-evenly items-start w-[40%] h-[350px]">
          <div className="w-[502px] text-slate-200 text-[64px] font-bold font-['Poppins'] leading-[64px]">
            Our Mission
          </div>
          <div className="w-[616px] text-neutral-50 text-[22px] font-normal font-['Poppins'] leading-7 tracking-wide">
            Green Horizon aims to combat climate change through youth-led
            initiatives, focusing on deforestation, air pollution, and water
            pollution. We plant trees, clean parks, recycle e-waste, and educate
            young minds. Join us in building a greener future.
          </div>
          <div className="w-[173px] h-[58px] px-[9px] py-[11px] bg-emerald-600 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-2xl font-bold font-['Poppins']">
              Get Involved{" "}
            </div>
          </div>
        </div>
        <Image
          src="/section-two-tree.svg"
          width={570}
          height={570}
          alt="tree svg h-[40%] w-[40%]"
        />
      </section>

      <section
        id="solutions"
        className="flex flex-col items-center justify-evenly w-full h-[1200px] bg-[#FAFAFA]"
      >
        <div className="w-full flex items-center justify-center">
          <Image src="/solutions.svg" width={308} height={64} alt="tree svg" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-evenly items-center w-[80%]">
            <div>
              <Image
                src="/section-three-image-one.svg"
                width={260}
                height={260}
                alt="tree svg"
              />
              <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
                Tree Planting
              </div>
            </div>

            <div>
              <Image
                src="/section-three-image-two.svg"
                width={260}
                height={260}
                alt="tree svg"
              />
              <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
                Park Cleanup
              </div>
            </div>

            <div>
              <Image
                src="/section-three-image-three.svg"
                width={260}
                height={260}
                alt="tree svg"
              />
              <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
                E-Waste Recycling
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center w-[70%]">
          <div>
            <Image
              src="/section-three-image-four.svg"
              width={260}
              height={260}
              alt="tree svg"
            />
            <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
              Youth Workshops
            </div>
          </div>

          <div>
            <Image
              src="/section-three-image-five.svg"
              width={260}
              height={260}
              alt="tree svg"
            />
            <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
              School Speaking
            </div>
          </div>
        </div>
      </section>

      <section
        id="involved"
        className="flex justify-evenly items-center bg-emerald-950 h-[770px] w-full"
      >
        <div className="flex flex-col justify-evenly items-start w-[40%] h-[350px]">
          <div className="w-[502px] text-slate-200 text-[64px] font-bold font-['Poppins'] leading-[64px]">
            Get Involved
          </div>
          <div className="w-[616px] text-neutral-50 text-[22px] font-normal font-['Poppins'] leading-7 tracking-wide">
            Ready to make a difference? At Green Horizon, we're helping young
            leaders tackle environmental issues. Eager to clean up local parks,
            or committed to reducing e-waste, there's a place for you in our
            community. Contact us if you would like to part of the solution for
            a greener tomorrow.
          </div>
          <div className="w-[173px] h-[58px] px-[9px] py-[11px] bg-emerald-600 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-2xl font-bold font-['Poppins']">
              Contact Us
            </div>
          </div>
        </div>
        <Image
          src="/section-four-image.png"
          width={322}
          height={482}
          alt="tree svg h-[40%] w-[40%]"
        />
      </section>
    </main>
  );
}
