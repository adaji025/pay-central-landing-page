function Works() {
  return (
    <>
      <div className="work-bg lg:max-w-[1288px] mx-2 lg:mx-[75px] px-6 py-9 lg:p-[75px] bg-[#DA3B48] rounded-3xl">
        <WorkButton />
      </div>
    </>
  )
}
export default Works

type WorkGridProps = {
  number: React.ReactElement
  title: string
  subtitle: React.ReactElement
}

export const WorkButton = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="flex">
            <h4 className="text-[#E35467] bg-white p-2 rounded-lg border-solid border-[#E9E7EE] border-[2px]">
              How it works
            </h4>
          </div>
          <h2 className="mt-[24px] text-white text-[26px] lg:text-[40px] font-[600] ">
            Embark on Your Journey
          </h2>
          <div className="mt-6 lg:mt-12 w-full lg:max-w-[851px] grid lg:grid-cols-2 gap-y-14 gap-x-4">
            <WorkGrid
              number={
                <h2 className="px-4 py-1 lg:px-[19px] text-2xl rounded-lg border-white border-[2px] border-solid text-[#E35467] bg-white lg:text-[32px] font-[600]">
                  1
                </h2>
              }
              title={'Sign up in Snap'}
              subtitle={
                <p className="text-[16px] font-[400] mt-2 max-w-[302px]">
                  Join PayCentral as a payment provider. It's quick, easy, and
                  free.
                </p>
              }
            />
            <WorkGrid
              number={
                <h2 className="px-4 py-1 lg:px-[19px] text-2xl rounded-lg border-white border-[2px] border-solid text-white :bg-white lg:text-[32px] font-[600]">
                  2
                </h2>
              }
              title={'Create Your Profile '}
              subtitle={
                <p className="text-[16px] font-[400] mt-2">
                  Showcase your payment services, fee structures, and successful
                  projects. Encourage trust with positive customer reviews.
                </p>
              }
            />
            <WorkGrid
              number={
                <h2 className="px-4 py-1 lg:px-[19px] text-2xl rounded-lg border-white border-[2px] border-solid text-white :bg-white lg:text-[32px] font-[600]">
                  3
                </h2>
              }
              title={'Specify Your Expertise'}
              subtitle={
                <p className="text-[16px] font-[400] mt-2">
                  Highlight your industry focus, supported payment methods, and
                  integration capabilities. Tailor your profile to attract
                  businesses seeking your specific services.
                </p>
              }
            />
            <WorkGrid
              number={
                <h2 className="px-4 py-1 lg:px-[19px] rounded-lg border-white border-[2px] border-solid text-white :bg-white text-2xl lg:text-[32px] font-[600]">
                  4
                </h2>
              }
              title={'Get Matched'}
              subtitle={
                <p className="text-[16px] font-[400] mt-2">
                  Benefit from our matching algorithm that connects you with
                  businesses looking for your expertise. Review matches with
                  confidence scores for reliability.
                </p>
              }
            />
          </div>
        </div>
        <div className="hidden lg:block lg:w-[268px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/8e93/ce75/6978c7e62a48a8405496786971c5ac4b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Io2-PlII34dzNLj2FiTZk8LnI~GNIFVLC3li0XFLhk0VL2rpFayVLlrAiAqskBwRQqIHgcAhNFPxeiOc7kbpBKijM4Reozf0CnNRSjgdkLd9SdO4LQAg9NcAOKt7XAmdhuDgCl5ynZ3I8mO30rGS2I2FXLoQxrzXNcECULyLR1Bg6vIo6flIMhXaT4VWeuelrEF8LUp1iPkdzFDbyTACw3R6gVHJuYo0zpHuMhVqqqvf30khB0l1Jz4fuKUZA5axA0rFvbWeVouLvmpM0V2xz4X~OVq9XnHgf4SYeP1ZGY2orTwnmz5wTAEFeIn-ZJt11PlbIEurZNUbCBLMCUQ9Lg__"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export const WorkGrid = ({ number, title, subtitle }: WorkGridProps) => {
  return (
    <div className="">
      <div className="workGrid flex">{number}</div>
      <div className="text-[#f6f4f4] mt-4">
        <h3 className=" text-[20px] font-[700]">{title}</h3>
        {subtitle}
      </div>
    </div>
  )
}
