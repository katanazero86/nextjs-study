import Image from "next/image";
import Link from "next/link";
import MailForm from "@/components/MailForm/MailForm";
import githubIcon from '../../../public/imgs/icons/github.png';
import linkedinIcon from '../../../public/imgs/icons/linkedin.png';


export default function Contact() {

    return (
        <main className="px-3 text-center">
            <h2 className="text-2xl font-semibold">Contact me</h2>
            <p className="text-base">katanazero86@gmail.com</p>
            <div className="py-2 flex flex-row items-center justify-center gap-x-2">
                <Link href="https://github.com/katanazero86">
                    <Image className="cursor-pointer" src={githubIcon} alt="github" width={32} height={32}/>
                </Link>
                <Link href="https://www.linkedin.com/in/front-bch/">
                    <Image className="cursor-pointer" src={linkedinIcon} alt="github" width={32} height={32}/>
                </Link>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Or Send me an email</h2>
            <div className="w-full max-w-md m-auto mt-2">
                <MailForm />
            </div>
        </main>
    )
}