import Image from "next/image"
import { PromotionImages } from "./array";
import KommunicateChat from "./chatbot"

export default function Home() {
  return (
    <main>
      <div className="grid grid-col-12  px-6">
        <div className="grid w-full justify-center items-center pt-6 pb-20">
          <div>
            <Image
              src="https://i.ibb.co/0MVVbJG/front.webp"
              alt="gfs"
              width={1300}
              height={1000}
              className="object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div >
        <div className="grid justify-center items-center mb-10">
          <h2 className="font-bold text-sky-700 text-center mb-4 mt-8">LATEST</h2>
          <h1 className="text-4xl font-bold mb-8 text-center">Our Latest Projects</h1></div>
        <div className="flex justify-center">
          <div className="w-[70%] md:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {
              PromotionImages.map((item) => {
                return (
                  <div key={item.price}>

                    <Image
                      src={item.image}
                      alt="Images"
                      width={300}
                      height={300}
                      className="object-cover cursor-pointer " />
                    <div className="my-5 mx-2 cursor-pointer">

                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
        <KommunicateChat />
      </div>
    </main>
  )
}
