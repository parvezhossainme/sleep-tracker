import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Guest = () => {
    return (
        <div className="font-sans bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-gray-100 pt-20">
                <div className="flex-1 mb-8 xl:pl-10">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        ঘুম-ট্রাকারে স্বাগতম
                    </h1>
                    <p className="md:text-xl mb-6">
                        আপনার ঘুম ট্র্যাক করুন, স্বাস্থ্য উন্নত করুন, এবং ঘুম-ট্রাকারের সাথে সতেজ অনুভব করে ঘুম থেকে উঠুন।
                    </p>
                    <SignInButton>
                        <button className="w-full md:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
                            শুরু করুন
                        </button>
                    </SignInButton>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src="/sleep-tracker.png"
                        alt="SleepTracker Illustration"
                        className="w-full md:max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            {/* Divider */}
            <div className="h-1 bg-gray-300"></div>

            {/* Frequently Asked Questions Section */}
            <div className="py-16 px-8 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
                </h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    <div>
                        <h3 className="text-xl font-bold">
                            ঘুম-ট্রাকার কী?
                        </h3>
                        <p className="text-gray-600">
                            ঘুম-ট্রাকার একটি শক্তিশালী টুল যা আপনার ঘুমের প্যাটার্ন পর্যবেক্ষণ করতে এবং আপনার সামগ্রিক স্বাস্থ্য উন্নত করতে সাহায্য করার জন্য ডিজাইন করা হয়েছে।
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">এটি কীভাবে কাজ করে?</h3>
                        <p className="text-gray-600">
                            ঘুম-ট্রাকার আপনার ঘুমের ডেটা বিশ্লেষণ করে এবং আপনাকে আরও ভাল ঘুম অর্জনে সাহায্য করার জন্য ব্যক্তিগতকৃত অন্তর্দৃষ্টি প্রদান করে।
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">
                            ঘুম-ট্রাকার কি বিনামূল্যে?
                        </h3>
                        <p className="text-gray-600">
                            হ্যাঁ, ঘুম-ট্রাকার মৌলিক বৈশিষ্ট্যের সাথে একটি বিনামূল্যে পরিকল্পনা অফার করে। উন্নত অন্তর্দৃষ্টি এবং বিশ্লেষণের জন্য প্রিমিয়াম পরিকল্পনা উপলব্ধ।
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-1 bg-gray-300"></div>

            {/* Testimonials Section */}
            <div className="py-16 px-8 bg-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    আমাদের ব্যবহারকারীরা কী বলেন
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-md shadow">
                        <p className="text-gray-700 mb-4">
                            &quot;ঘুম-ট্রাকার আমার ঘুমের সময়সূচী সম্পূর্ণভাবে পরিবর্তন করেছে। আমি প্রতিদিন আরও শক্তিশালী অনুভব করি!&quot;
                        </p>
                        <p className="text-purple-500 font-bold">- সারা এল.</p>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow">
                        <p className="text-gray-700 mb-4">
                            &quot;ঘুম-ট্রাকার থেকে প্রাপ্ত অন্তর্দৃষ্টি আমাকে আমার ঘুমের সমস্যা চিহ্নিত করতে এবং সমাধান করতে সাহায্য করেছে। অত্যন্ত সুপারিশ করি!&quot;
                        </p>
                        <p className="text-purple-500 font-bold">- জন ডি.</p>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow">
                        <p className="text-gray-700 mb-4">
                            &quot;ঘুম-ট্রাকার ব্যবহার করা খুবই সহজ এবং নির্ভুল ডেটা প্রদান করে। যারা তাদের ঘুম উন্নত করতে চান তাদের জন্য এটি অবশ্যই থাকা উচিত!&quot;
                        </p>
                        <p className="text-purple-500 font-bold">- এমিলি আর.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guest;
