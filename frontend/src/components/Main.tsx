import { AnimatedText } from '@/components/AnimatedText'
export const Main = () => {
  return (
    <main className="my-2">
      <hr className="text-white mb-10" />
      <h1 className="font-bold text-white text-xl md:text-5xl mt-4 mb-6 animate-fade-in-bottom text-center">
        <AnimatedText text="Welcome to AdvertEX" />
      </h1>
      <div className="animate-bounce w-12 h-12 text-purple-500 mx-auto border-2 border-white rounded-full flex items-center justify-center">
        <span className="text-white">↓</span>
      </div>
      <a
        href="/download/HackU_v21.apk" // Replace with the actual path to your .apk file
        download="AdvertEX.apk"
        className="text-white hover:underline flex items-center justify-center my-2"
      >
        <span className="border-2 border-blue rounded-md px-4 py-2">DownLoad</span>
      </a>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="text-left text-white text-xs md:text-3xl font-serif">
          <ul className="mt-5 ml-14 whitespace-nowrap">
            <li className="pb-2 md:pb-6">
              <AnimatedText text="・「つくる」をタップします。" />
            </li>
            <li className="pb-2 md:pb-6">
              <AnimatedText text="・ボタンをタップして、広告を選びます。" />
            </li>
            <li className="pb-2 md:pb-6">
              <AnimatedText text="・画像の向きが正しくない場合は回転させることも可能です。" />
            </li>
            <li className="pb-2 md:pb-6">
              <AnimatedText text="・「カードを作る」をタップしてステータスを取得します。" />
            </li>
            <li className="pb-2 md:pb-6">
              <AnimatedText text="・カードを選び、「MATCHING」をタップします。" />
            </li>
          </ul>
        </div>
        <div className="mt-5 ">
          <video className="h-full md:h-auto -z-10" autoPlay loop muted>
            <source src={'/video/image.mp4'} type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  )
}
