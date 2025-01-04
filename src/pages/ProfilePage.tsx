import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        bio: 'Passionate developer and tech enthusiast.',
        profilePicture: 'https://via.placeholder.com/150',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const fileURL = URL.createObjectURL(file);
            setProfile({ ...profile, profilePicture: fileURL });
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you can handle profile update logic (e.g., API call)
        alert('Profile updated successfully!');
    };

    return (
        <div className=' flex flex-col'>
            <Header />
            <div className="flex flex-col items-center p-6 bg-gradient-to-br bg-stone-100  dark:from-chatter-start dark:via-chatter-mid dark:to-chatter-end min-h-screen">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg">
                    {/* Profile Picture */}
                    <div className="flex justify-center mb-6">
                        <label className="relative cursor-pointer">
                            <img
                                src={profile.profilePicture}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
                            />
                            {isEditing && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePictureChange}
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            )}
                        </label>
                    </div>

                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Username</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="username"
                                value={profile.username}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
                            />
                        ) : (
                            <p className="text-gray-800 dark:text-gray-200">{profile.username}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
                            />
                        ) : (
                            <p className="text-gray-800 dark:text-gray-200">{profile.email}</p>
                        )}
                    </div>

                    {/* Bio */}
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Bio</label>
                        {isEditing ? (
                            <textarea
                                name="bio"
                                value={profile.bio}
                                onChange={handleInputChange}
                                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white outline-none"
                                rows={4}
                            />
                        ) : (
                            <p className="text-gray-800 dark:text-gray-200">{profile.bio}</p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleEditToggle}
                                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEditToggle}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
