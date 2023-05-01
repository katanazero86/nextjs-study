import Image from "next/image";
import githubIcon from '../../../public/imgs/icons/github.png';
import linkedinIcon from '../../../public/imgs/icons/linkedin.png';
import Link from "next/link";

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
                <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Your Email
                        </label>
                        <input
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Subject
                        </label>
                        <input
                            name="subject"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."></textarea>

                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Send email
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}