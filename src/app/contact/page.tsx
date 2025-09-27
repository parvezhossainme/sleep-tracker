"use client";

const ContactPage = () => {
    return (
        <div className="font-sans bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    ঘুম-ট্রাকার যোগাযোগ করুন
                </h1>
                <p className="text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    প্রশ্ন আছে বা সাহায্য প্রয়োজন? আমাদের সাথে যোগাযোগ করুন!
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">
                   যোগাযোগ পেতে
                </h2>
                <form
                    className="max-w-3xl mx-auto space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const name = (
                            document.getElementById("name") as HTMLInputElement
                        )?.value;
                        const email = (
                            document.getElementById("email") as HTMLInputElement
                        )?.value;
                        const message = (
                            document.getElementById(
                                "message"
                            ) as HTMLTextAreaElement
                        )?.value;
                        const mailtoLink = `mailto:support@sleeptracker.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
                        window.location.href = mailtoLink;
                    }}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            নাম
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            placeholder="আপনার নাম"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ইমেল
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            placeholder="আপনার ইমেল"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            বার্তা
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                            placeholder="আপনার বার্তা"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium shadow-md cursor-pointer"
                    >
                        বার্তা পাঠান
                    </button>
                </form>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 px-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">
                    যোগাযোগের তথ্য
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-xl font-bold mb-2">ইমেল</h3>
                        <p className="text-gray-600">
                            parvezhossain@myself.com
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">ফোন</h3>
                        <p className="text-gray-600">+880 1234 5678</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">ঠিকানা</h3>
                        <p className="text-gray-600">
                            SayeedNagar, Dhaka-1000
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
