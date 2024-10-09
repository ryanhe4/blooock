import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Logo from '@/public/Logo.jpg'
import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButtons";

export function AuthModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader className="flex flex-row items-center justify-center">
                    <Image src={Logo} alt="Logo" className="size-10" />
                    <h4 className="text-3xl font-semibold">
                        Bloo<span className="text-primary">ock</span>
                    </h4>
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                    <form action={async () => {
                        "use server"
                        await signIn("google")
                    }} className="w-full">
                        <GoogleAuthButton />
                    </form>
                    <form action={async () => {
                        "use server"
                        await signIn("github")
                    }}>
                        <GithubAuthButton />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}