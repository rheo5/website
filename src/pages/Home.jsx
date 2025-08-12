export default function Home(){
  return (
    <>
      <main className="prose prose-lg flex flex-col items-center max-w-2xl mx-auto px-12 py-4">
        <div className="w-full text-left flex flex-col gap-6">
          <h1 className="font-bold text-xl">Rachel</h1>
          <p className="text-base font-normal">Software Engineering student @ University of Waterloo</p>
          <p className="text-base font-normal">
            <span className="font-semibold italic">incoming:</span> <br /> - swe intern @ Rippling
          </p>
          <p className="text-base font-normal">
            <span className="font-semibold italic">prev:</span> <br /> - swe intern @ Uber <br /> - swe intern @ Sony Playstation <br /> - swe intern @ Augmenta AI <br /> - firmware intern @ onsemi
          </p>
          <p className="text-base font-normal">
          </p>

          <div className="flex gap-4 text-sm mt-10 justify-end">
            <a href="https://twitter.com" className="underline">Linkedin</a>
            <a href="https://www.are.na" className="underline">Github</a>
            <a href="https://www.are.na" className="underline">Email</a>
          </div>
        </div>
      </main>
    </>
  )
}
