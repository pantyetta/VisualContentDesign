import Image from 'next/image'
import shop from "../public/shop.png"
import WineImg from "../public/point/4-1.jpg"

export default function Home() {
  return (
    <div className='tracking-wide'>
      <Image src={shop} alt='shop' className='w-full object-cover h-[80vh]' />
      <div className='max-w-[90%] mx-auto my-12 lg:max-w-4xl'>
        <h2 className="text-2xl font-bold mb-1">旬の食材を使ったコスパ最高美味しい料理</h2>
        <p className='mb-2'>
          自分達が美味しいと思ったワインだけをご用意女子会、記念日、友人とお気軽にどうぞ！！<br />
          『普段使いの気取らない贅沢しませんか？」ワインの専門家はいません。<br />
          自分達が美味しいと思ったワインだけをご用意しております。
        </p>
        <Image src={WineImg} alt="こだわりワイン" />
      </div>
    </div>
  )
}
