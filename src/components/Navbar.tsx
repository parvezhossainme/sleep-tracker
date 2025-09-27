import { checkUser } from "@/lib/checkUser";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Navbar() {
    const user = await checkUser(); // Creating a user in db if not exists
    console.log("Current User:", user);

    return (
        <nav>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-green-600">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 via-amber-500 to-cyan-500 bg-clip-text text-transparent">
                                ঘুম-ট্রাকার <span className="hidden lg:inline"> via @parvezhossainme</span>

                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-purple-600 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium hidden sm:block"
                        >
                            হোম
                        </Link>

                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-purple-600 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium "
                        >
                            আমাদের সম্পর্কে
                        </Link>

                        <SignedOut>
                            <SignInButton>
                                <button className="w-full sm:w-auto bg-gradient-to-r from-green-300 via-amber-300 to-cyan-300 hover:from-purple-600 hover:via-pink-600 hover:to-red-400 sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-md font-medium cursor-pointer">
                                    লগইন/রেজিস্টার
                                </button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}
