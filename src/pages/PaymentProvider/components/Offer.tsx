const Offer = () => {
  return (
    <div className=" mx-auto max-w-[1280px] m-6 lg:my-[56px] lg:pt-[48px]">
      <Card />
    </div>
  )
}

export default Offer

export const Card = () => {
  return (
    <>
      <div className=" m-0 lg:m-4 p-4">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-x-[24px] gap-y-4">
          <div className="texture-bg flex justify-between col-span-7 relative">
            <TextCard
              index={1}
              title={'Expand Your Reach'}
              subtitle={
                'Connect with a vibrant spectrum of businesses actively seeking your payment prowess. From bustling startups to established enterprises,PayCentral opens doors to new markets, unlimited opportunities, and endless growth possibilities.'
              }
            />
            <div className="hidden lg:block relative">
              <div className="locationPin absolute top-[50%] translate-y-[-50%] right-0 w-[240px] h-[240px]"></div>
            </div>
          </div>

          <div className="texture-bg lg:row-span-2  lg:col-span-5">
            <TextCard
              index={2}
              title={'Effortless Integration'}
              subtitle={
                'Why settle for compatibility when you can have seamlessness? Enjoy effortless integration with diverse systems and APIs. Streamline your operations and effortlessly reach businesses with unique integration needs. Your success journey just got smoother!'
              }
            />
            <div className="hidden lg:block relative">
              <div className="puzzle absolute w-[350px] h-[300px] right-0"></div>
            </div>
          </div>

          <div className="texture-bg flex justify-between col-span-7 gap-[24px]">
            <TextCard
              index={3}
              title={'Boost Your Visibility'}
              subtitle={
                'Create a profile that shines brighter than the rest! Showcase your payment services, flaunt competitive fees, and let positive customer reviews tell your success story. At PayCentral, we turn your profile into a spotlight for your expertise.'
              }
            />
            <div className="hidden lg:block relative">
              <div className="megaphone absolute bottom-0 right-0 w-[240px] h-[240px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:grid grid-cols-2 gap-[21px] mt-6">
          <div className="texture-bg flex justify-between">
            <div className="max-w-[430px]">
              <TextCard
                index={4}
                title={'Tailored Matching Algorithm'}
                subtitle={
                  "Experience the magic of precision with our advanced matching algorithm. It considers your industry focus, transaction volume, and geographic location to bring you matches that feel like they were made just for you. It's not just a match; it's a perfect partnership!"
                }
              />
            </div>
            <div className="hidden lg:block relative">
              <div className="tailored-matching absolute top-[50%] translate-y-[-50%] right-0 w-[200px] h-[200px]"></div>
            </div>
          </div>
          <div className="texture-bg flex justify-between">
            <div className="max-w-[395px]">
              <TextCard
                index={5}
                title={'Exclusive Early Access'}
                subtitle={
                  "We believe in trust, and that's why we introduce confidence scores. Understand the reliability of your matches at a glance. Build relationships that stand on a foundation of confidence, ensuring success at every step."
                }
              />
            </div>
            <div className="hidden lg:block relative">
              <div className="exclusiveEarly absolute top-[50%] translate-y-[-50%] right-0 w-[200px] h-[200px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type TextCardProps = {
  index: number
  title: string
  subtitle: string
}
export const TextCard = ({ index, title, subtitle }: TextCardProps) => {
  return (
    <div>
      <div className="lg:max-w-[470px] p-6">
        <h6 className="text-xl lg:text-[24px] font-Spline font-semibold text-[#403A3A]">
          {index}
        </h6>
        <div className=" mt-8 lg:mt-12">
          <h2 className="text-xl lg:text-[24px] font-Spline font-semibold text-[#403A3A] mb-2">
            {title}
          </h2>
          <p className="text-base font-Spline font-normal leading-6 text-[#746D6D]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
