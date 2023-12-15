import { AnimatedText } from '@/components/AnimatedText'
export const Main = () => {
  return (
    <main className="text-4xl my-2">
      <h1 className="font-bold text-white mb-6 animate-fade-in-bottom text-center">
        <AnimatedText text="Welcome to AdvertEX" />
      </h1>
      <video className="mx-auto w-1/3 -z-10" autoPlay loop muted>
        <source src={'/video/Battle.mp4'} type="video/mp4" />
      </video>
    </main>
  )
}
