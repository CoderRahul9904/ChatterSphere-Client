import Footer from "../components/Footer";
import Header from "../components/Header";

const FeaturesPage = () => {
    const features = [
        {
            title: 'Connect with Friends',
            description:
                'Stay connected with your close friends. Share moments, chat, and make memories together.',
            icon: '👫',
        },
        {
            title: 'Private Room',
            description:
                'Create private rooms for secure conversations. Share files and talk freely with your group.',
            icon: '🔒',
        },
        {
            title: 'Global Group',
            description:
                'Connect with people worldwide through our general group. Share ideas, learn, and grow together.',
            icon: '🌍',
        },
        {
            title: 'Customizable Themes',
            description:
                'Personalize your experience with customizable themes. Choose colors and layouts that suit you.',
            icon: '🎨',
        },
    ];

    return (
        <div className=" flex flex-col">
            <Header />
            <div className="min-h-screen bg-gradient-to-br dark:from-chatter-start dark:via-chatter-mid dark:to-chatter-end dark:text-white  p-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Explore Our Features</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            ChatterSphere brings you features that make connecting with others fun and secure.
                        </p>
                    </header>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center gap-4 hover:scale-105 transition-transform"
                            >
                                {/* Icon */}
                                <div className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full">
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 className="text-2xl font-bold">{feature.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
