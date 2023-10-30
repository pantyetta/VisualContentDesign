import Link from "next/link";

const Footer = () => {
    return(
        <footer className="sticky top-[100vh] border-t-[1px]">
            <div className="max-w-[90%] mx-auto py-8">
                <div className="flex items-end flex-col tracking-wide">
                    <p>イタリアン CIT （シーアイティ</p>
                    <p>〒999-999 奈良氏之市都田沼１２３</p>
                    <Link href="tel:000-1234-5678" className="underline">000-1234-5678</Link>
                </div>
                <div className="text-center pt-4">
                    <small>&copy; {new Date().getFullYear()} イタリアン CIT</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;