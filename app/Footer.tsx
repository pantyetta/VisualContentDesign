import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] border-t-[1px]">
      <div className="container mx-auto py-8">
        <div className="flex items-end flex-col tracking-wide">
          <p>イタリアン CIT （シーアイティ</p>
          <Link href="https://www.google.com/maps/search/?api=1&query=奈良氏之市都田沼123" className="underline" target="_blank">〒999-999 奈良氏之市都田沼１２３</Link>
          <Link href="tel:000-1234-5678" className="underline">
            000-1234-5678
          </Link>
        </div>
        <div className="text-center pt-4">
          <small>&copy; {new Date().getFullYear()} イタリアン CIT</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
