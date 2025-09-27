import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="font-sans bg-gray-100 text-gray-800">
            <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    আমাদের সম্পর্কে - ঘুম ট্রাকার
                </h1>
                <p className="text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"></p>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">
                    আমাদের মিশন
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-center">
                    ঘুম ট্রাকার, আমরা ব্যক্তিদের ঘুমের ধরণ সম্পর্কে অন্তর্দৃষ্টি
                    প্রদানের মাধ্যমে তাদের আরও ভালো ঘুম এবং সামগ্রিক সুস্থতা
                    অর্জনে সহায়তা করার লক্ষ্য রাখি। ভালো ঘুম একটি স্বাস্থ্যকর,
                    সুখী জীবনের দিকে পরিচালিত করে এবং আমরা আপনাকে প্রতিটি ধাপে
                    নির্দেশনা দেওয়ার জন্য এখানে আছি।
                </p>
            </section>

            {/* Features Section */}
            <section className="py-16 px-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">
                    কেন ঘুম ট্রাকার বেছে নেবেন?
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-md shadow">
                        <h3 className="text-xl font-bold mb-2">
                            Comprehensive Tracking
                        </h3>
                        <p className="text-gray-600">
                            আপনার ঘুমের নিদর্শনগুলি পর্যবেক্ষণ করুন এবং এর জন্য অঞ্চলগুলি সনাক্ত করুন
                            উন্নতি
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow">
                        <h3 className="text-xl font-bold mb-2">
                            Personalized Insights
                        </h3>
                        <p className="text-gray-600">
                            আপনার বাড়ানোর জন্য উপযুক্ত প্রস্তাবনাগুলি পান
                            ঘুমের গুণমান।
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow">
                        <h3 className="text-xl font-bold mb-2">
                            ব্যবহারকারী-বান্ধব নকশা
                        </h3>
                        <p className="text-gray-600">
                            জুড়ে একটি স্বজ্ঞাত এবং বিরামবিহীন অভিজ্ঞতা উপভোগ করুন
                            সমস্ত ডিভাইস।
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">
                    আমাদের গল্প
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-center">
                    ঘুম-ট্রাকার কে ক্রমবর্ধমান প্রয়োজনের সমাধান করার জন্য তৈরি করা হয়েছিল
                    ভাল ঘুম পরিচালনার সরঞ্জাম। আমাদের ঘুম বিশেষজ্ঞদের দল এবং
                    প্রযুক্তিবিদরা একটি প্ল্যাটফর্ম তৈরি করেছেন যা একত্রিত হয়
                    কার্যক্ষম অন্তর্দৃষ্টি সহ কাটিয়া প্রান্ত প্রযুক্তি। যেহেতু আমাদের
                    লঞ্চ, আমরা অগণিত ব্যবহারকারীদের আরও ভাল ঘুম অর্জনে সহায়তা করেছি
                    এবং তাদের সামগ্রিক স্বাস্থ্যের উন্নতি করুন।
                </p>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-8 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    আরও ভাল ঘুমাতে প্রস্তুত?
                </h2>
                <p className="text-lg mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    আজ ঘুম-ট্রাকার প্রযুক্তি যোগদান করুন এবং প্রথম পদক্ষেপ নিন
                    ভাল ঘুম এবং একটি স্বাস্থ্যকর জীবন।
                </p>
                <Link
                    href="/sign-up"
                    className="inline-block bg-white text-purple-600 hover:text-purple-700 px-6 py-3 rounded-md font-medium shadow-md transition"
                >
                    শুরু করুন
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;
