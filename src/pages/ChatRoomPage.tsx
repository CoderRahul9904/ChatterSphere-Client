import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ToggleSwitch from '../components/ToggleButton';
import { ToggleDarkMode } from '../redux/toggleSclice';
import { useDispatch, useSelector } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import NoFriends from '../components/NoFriends';
import { useState } from 'react';


const ChatRoomPage = () => {
  const dispatch = useDispatch()
  const friends = true
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const test = true
  const pendingRequest = false
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isFriendRequestOpen, setIsFriendRequestOpen] = useState(false);
  const toggleFriendRequest = () => {
    setIsFriendRequestOpen(!isFriendRequestOpen);
  };
  const { mode } = useSelector((state: any) => state.toggle);
  const toggleDarkMode = () => {
    dispatch(ToggleDarkMode());
    document.documentElement.classList.toggle('dark', !mode);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-chatterl-end via-chatterl-mid to-chatterl-start dark:from-chatter-start dark:via-chatter-mid dark:to-chatter-end dark:text-white">
      {/* Sidebar */}
      <div className='w-1/4 hidden sm:flex flex-col justify-between bg-chatterl-mid dark:bg-chatter-mid'>
        <div className="w-full p-4 flex flex-col">
          <input
            type="text"
            placeholder="Search"
            className="mb-4 p-2 rounded bg-chatterl-start dark:bg-chatter-start dark:text-white outline-none"
          />
          {friends ? <div className="flex flex-col gap-4">
            {[
              'Rahula',
              'Ayush',
              'Om',
              'Yash',
              'Arya'
            ].map((name, index) => (
              <div
                key={index}
                className="p-2 flex items-center gap-2 hover:bg-chatterl-end dark:hover:bg-chatter-end rounded cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-500 rounded-full" />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm dark:text-gray-300">Last message...</p>
                </div>
              </div>
            ))}
          </div> :
            <NoFriends />
          }
        </div>

        <div className=' flex justify-around items-center mb-2'>
          <Link to="/profile" ><SettingsRoundedIcon className=' hover:cursor-pointer' /></Link>
          <ToggleSwitch onClick={toggleDarkMode} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="sm:w-3/4 w-screen flex flex-col">
        {/* Header */}
        <div className="p-4 bg-chatterl-end dark:bg-chatter-start flex justify-between items-center">
          <div className='flex flex-row gap-2 justify-center items-center'>
            <button
              onClick={toggleMenu}
              className="sm:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <img src='https://via.placeholder.com/300' alt='Profile Image' className="w-12 h-12 bg-gray-500 rounded-full" />
            <h2 className="sm:text-xl text-lg font-bold">Rahula</h2>
          </div>
          <div className=' flex gap-4 justify-center items-center'>
            <button className='Request' onClick={toggleFriendRequest}>
              <PersonAddIcon />
              <div className='dark:bg-chatter-bg bg-white hidden HoverProp absolute top-16 right-6 p-2 rounded-md'>
                Friend Requests
              </div>
            </button>
            <div
              className={`${isFriendRequestOpen ? 'block' : 'hidden'
                } absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 w-56`}
            >
              {pendingRequest ?
                <div>

                </div>
                :
                <div>
                  <div></div>
                  <p>No pending friend requests.</p>
                </div>}
            </div>
            <span>
              <ArrowBackIcon />
              <Link to="/" className=" dark:text-white">Back</Link >
            </span>
          </div>
        </div>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } absolute top-0 left-0 dark:bg-gray-800 shadow-lg h-screen rounded-md z-30 p-0 w-[90%] rounded-r-xl md:hidden`}
        >
          <div className='w-full flex flex-col justify-between h-full bg-chatterl-mid dark:bg-chatter-mid rounded-r-xl'>
            <div className="w-full p-4 flex flex-col">
              <div className=' flex flex-row items-center'>
                <button
                  onClick={toggleMenu}
                  className="sm:hidden p-2 text-gray-700 dark:text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className=" p-2 w-full rounded bg-chatterl-start dark:bg-chatter-start dark:text-white outline-none"
                />
              </div>
              {test ? <div className="flex flex-col gap-4">
                {[
                  'Rahula',
                  'Ayush',
                  'Om',
                  'Yash',
                  'Arya'
                ].map((name, index) => (
                  <div
                    key={index}
                    className="p-2 flex items-center gap-2 hover:bg-chatterl-end dark:hover:bg-chatter-end rounded cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gray-500 rounded-full" />
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm dark:text-gray-300">Last message...</p>
                    </div>
                  </div>
                ))}
              </div> :
                <NoFriends />
              }
            </div>

            <div className=' flex justify-around items-center mb-2'>
              <Link to="/profile" ><SettingsRoundedIcon className=' hover:cursor-pointer' /></Link>
              <ToggleSwitch onClick={toggleDarkMode} />
            </div>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="flex justify-start">
            <div className="dark:bg-gray-700 bg-white p-4 rounded-lg max-w-xs">
              <span className="text-sm text-gray-400">Ayush:</span>
              <p>Hey, how’s it going?</p>
              <p className='text-sm text-gray-400'>April 13</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="dark:bg-chatter-end bg-chatterl-end p-4 rounded-lg max-w-xs">
              <span className="text-sm dark:text-gray-300">Rahul:</span>
              <p>Good! Just working on our project.</p>
              <p className='text-sm dark:text-gray-400'>April 14</p>

            </div>
          </div>
          {/* Add more messages as needed */}
        </div>

        {/* Message Input */}
        <div className="p-4 dark:bg-chatter-start bg-chatterl-end flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 rounded bg-chatterl-mid dark:bg-chatter-mid dark:text-white outline-none"
          />
          <button className="p-2 bg-blue-500 rounded dark:text-white">Send</button>
          <button className='p-2 '></button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomPage;
