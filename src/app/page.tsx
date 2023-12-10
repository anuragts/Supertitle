import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-6xl font-bold mt-8 p-12 text-blue-300 text-center">Supertitle</h1>
        <p className="text-xl mt-4 font-semibold text-center">Add subtitle and audio using AI to any video.</p>
      </div>
      <div className='mt-5'>
        <Image src="/hero.png" alt="hero image" width={900} height={600} />
        <div className='flex justify-center mt-5'>
          <a href="https://forms.gle/bUnDvRj8wasfigMH6" className=" mt-5 mr-5 bg-slate-200 hover:bg-black text-black hover:text-slate-200 border-2 border-slate-200 font-bold py-4 px-8 rounded-full">Join Waitlist</a>
        <a href="/upload" className="mt-5 bg-black hover:bg-black text-slate-200 hover:text-slate-200 border-2 border-slate-200 font-bold py-4 px-8 rounded-full">
          Try uploading
        </a>
        </div>
      </div>
    </main>
  )
}
