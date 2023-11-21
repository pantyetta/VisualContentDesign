import Link from "next/link";

const Point = () => {
  return (
    <div className='container mx-auto my-12 tracking-wide lg:max-w-4xl'>
      <h1 className="text-2xl font-bold mb-4">
        今回のポイント
      </h1>
      <p>
        <Link href="https://nextjs.org/" className="font-bold underline">Next</Link>と<span className="font-bold">TypeScript</span>，<Link href="https://tailwindcss.com/" className="font-bold underline">Tailwind CSS</Link>を利用して作成を行なった．
      </p>
      <p>
        コンポーネントライブラリとして<Link href="https://github.com/shadcn-ui/ui" className="font-bold underline">shadcn-ui</Link>を使用し一貫性を揃えた．
      </p>
      <p>
        
      </p>
    </div>
  );
};

export default Point;
