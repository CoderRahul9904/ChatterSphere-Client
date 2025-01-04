import { useSelector } from "react-redux"
import Peace from "../assets/PeaceDark.png"
import PeaceLight from "../assets/PeaceLight (2).png"
function NoFriends() {
    const { mode } = useSelector((state: any) => state.toggle)
    return (
        <div className="mt-20 flex items-center justify-center">
            <div className="text-center">
                {mode ? <img
                    src={Peace}
                    alt="Peace Character"
                    className="w-80 h-44 mx-auto mb-4"
                /> : <img
                    src={PeaceLight}
                    alt="Peace Character"
                    className="w-80 h-44 mx-auto mb-4"
                />}
                <p className="dark:text-gray-400 text-lg font-medium">
                    No friends, no drama. Enjoy the peace! ...or add some friends.
                </p>
            </div>
        </div>
    )
}

export default NoFriends