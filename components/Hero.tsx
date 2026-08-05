import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,127,0.18),_transparent_35%),linear-gradient(180deg,_rgb(0,0,0),_rgb(15,9,3))] px-6 py-24 text-center text-amber-100">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <Image
          src="/profile.jpg"
          alt="Nkosinathi Nicholas Masango"
          width={200}
          height={200}
          className="rounded-full shadow-xl border-4 border-brown-700"
        />
        <h1 className="mt-6 text-5xl font-bold">Nkosinathi Nicholas Masango</h1>
        <p className="mt-2 text-xl text-brown-300">Full Stack Developer</p>
        <p className="mt-4 text-lg leading-relaxed text-amber-200 max-w-xl mx-auto">
          I am a Full Stack Developer passionate about technology, software engineering, and building scalable applications.
          My journey includes completing all coursework for my Diploma in Informatics at Tshwane University of Technology,
          and currently completing Work-Integrated Learning while working at the 4IR Research Lab.
          I thrive in collaborative environments, solving real-world problems, and continuously learning modern technologies.
        </p>
      </div>
    </section>
  )
}
