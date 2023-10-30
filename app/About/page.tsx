import Image from "next/image";
import ShopInner from "@/public/shop-inner.jpg"
import Point1_1 from "@/public/point/1-1.jpg"
import Point1_2 from "@/public/point/1-2.jpg"
import Point1_3 from "@/public/point/1-3.jpg"
import Point2_1 from "@/public/point/2-1.jpg"
import Point2_2 from "@/public/point/2-2.jpg"
import Point3_1 from "@/public/point/3-1.jpg"
import Point4_1 from "@/public/point/4-1.jpg"
import Point5_1 from "@/public/point/5-1.jpg"
import Point5_2 from "@/public/point/5-2.jpg"
import Point5_3 from "@/public/point/5-3.jpg"

const About = () => {
    return (
        <div className='max-w-[90%] mx-auto my-12 tracking-wide lg:max-w-4xl'>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-2xl font-bold mb-1">居心地の良い店内</h2>
                <p className="mb-2">
                    いつも笑顔が溢れる明るい店内です。初めての方もお気軽にお越しください。
                </p>
                <Image className="w-full" src={ShopInner} alt="店内の様子" />
            </div>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-2xl font-bold mb-1">こだわり１</h2>
                <p className="mb-2">
                    日替わりメニュー豊富な日替わりメニュー！！<br />
                    旬の美味しいお野菜、魚、お肉で美味しい料理を提供しております。<br />
                    毎日変わるおすすめメニューも大人気です。ワインと一緒にお楽しみ下さい。
                </p>
                <div className="flex w-full justify-between">
                    <Image src={Point1_1} className="w-[32%] h-auto object-cover" alt="ポイント1-1" />
                    <Image src={Point1_2} className="w-[32%] h-auto object-cover" alt="ポイント1-2" />
                    <Image src={Point1_3} className="w-[32%] h-auto object-cover" alt="ポイント1-3" />
                </div>
            </div>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-2xl font-bold mb-1">こだわり２</h2>
                <p className="mb-2">
                    気軽に立ち寄れるワイン酒場<br />
                    ワインに合わせたリーズナブルで美味しいアラカルトメニューも豊富です！！オーナーが美味しいと思うワインを取り揃えてます。お気軽にふらっとお立ち寄り下さいね<br />
                </p>
                <div className="flex w-full justify-between">
                    <Image src={Point2_1} className="w-[48%] h-auto object-cover" alt="ポイント2-1" />
                    <Image src={Point2_2} className="w-[48%] h-auto object-cover" alt="ポイント2-2" />
                </div>
            </div>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-2xl font-bold mb-1">こだわり３</h2>
                <p className="mb-2">
                    美味しいパーティーコース<br />
                    お得なコースメニューは2980円から3種類ございます。飲み放題付きコースも人気です。女子会、お仲間とのご宴会におすすめです。
                </p>
                <div className="flex w-full justify-between">
                    <Image src={Point3_1} className="w-full h-auto object-cover" alt="ポイント3-1" />
                </div>
            </div>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-2xl font-bold mb-1">こだわり４</h2>
                <p className="mb-2">
                    リーズナブルな日替わりグラスワイン<br />
                    コスパ最高の美味しいワインを取り揃えております。日替わりグラスワインは580円〜美味しいワインを気軽にお楽しみください。ボトルワインも各種ご用意しております。
                </p>
                <div className="flex w-full justify-between">
                    <Image src={Point4_1} className="w-full h-auto object-cover" alt="ポイント4-1" />
                </div>
            </div>
            <div className="mb-8 lg:mb-16">
                <h2 className="text-2xl font-bold mb-1">こだわり５</h2>
                <p className="mb-2">
                    絶品！！CHEESE
                    ワインとチーズをお楽しみください。オーナーシェフが厳選した絶品チーズを使ったメニューも人気です。
                </p>
                <div className="flex w-full justify-between">
                    <Image src={Point5_1} className="w-[32%] h-auto object-cover" alt="ポイント4-1" />
                    <Image src={Point5_2} className="w-[32%] h-auto object-cover" alt="ポイント4-2" />
                    <Image src={Point5_3} className="w-[32%] h-auto object-cover" alt="ポイント4-3" />
                </div>
            </div>
        </div>
    )
}

export default About;