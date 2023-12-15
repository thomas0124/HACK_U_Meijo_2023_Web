import { AnimatedText } from '@/components/AnimatedText'
export const Main = () => {
  return (
    <main className="my-2">
      <hr className="text-white mb-10" />
      <h1 className="font-bold text-white mb-6 animate-fade-in-bottom text-center">
        <AnimatedText text="Welcome to AdvertEX" />
      </h1>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="text-left text-white text-xs md:text-3xl font-serif">
          <ul className="mt-5 ml-14 whitespace-nowrap">
            <li className="pb-2 md:pb-6">・「つくる」をタップします。</li>
            <li className="pb-2 md:pb-6">・ボタンをタップして、広告を選びます。</li>
            <li className="pb-2 md:pb-6">・画像の向きが正しくない場合は回転させることも可能です。</li>
            <li className="pb-2 md:pb-6">・「カードを作る」をタップしてステータスを取得します。</li>
            <li className="pb-2 md:pb-6">・カードを選び、「MATCHING」をタップします。</li>
          </ul>
        </div>
        <div className="mt-5 ">
          <video className="h-full -z-10" autoPlay loop muted>
            <source src={'/video/image.mp4'} type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  )
}
