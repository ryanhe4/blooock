import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/Logo.jpg'
import { AuthModal } from "./AuthModal";

export function Navbar() {
    return <div className="flex py-5 items-center justify-between">
        <Link href={"/"} className="flex items-center gap-1">
            <Image src={Logo} alt="Logo" className="size-10" />
            <h4 className="text-3xl font-semibold">Bl<span className="text-green-700">oo</span><span className="text-red-600">o</span>ck </h4>
        </Link>

        <AuthModal />
    </div>
}