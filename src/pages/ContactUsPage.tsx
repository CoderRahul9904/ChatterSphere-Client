import Header from "../components/Header";

const ContactUsPage = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="min-h-screen bg-gradient-to-br dark:from-chatter-start dark:via-chatter-mid dark:to-chatter-end  dark:text-gray-200 p-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Have questions or need help? We'd love to hear from you! Reach out to us anytime.
                        </p>
                    </header>

                    {/* Contact Form */}
                    <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded dark:bg-gray-700 dark:text-white outline-none border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded  dark:bg-gray-700 dark:text-white outline-none border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message here..."
                                rows={5}
                                className="w-full p-3 rounded  dark:bg-gray-700 dark:text-white outline-none border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Additional Contact Information */}
                    <div className="mt-12 text-center">
                        <h2 className="text-xl font-bold mb-2">Other Ways to Reach Us</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            You can also email us directly at{' '}
                            <a
                                href="mailto:support@chattersphere.com"
                                className="text-blue-500 hover:underline"
                            >
                                mouryarahul543@gmail.com
                            </a>{' '}
                            or call us at{' '}
                            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                                +91 72620 22151
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
