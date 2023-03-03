import FlatList from 'flatlist-react';
import card_img from "../card.jpg";
import req from '../api/user_req'
import { useNavigate } from 'react-router-dom';


const LibraryList = (props) => {

    const navigate = useNavigate();

    const fetchEachLibrary = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        localStorage.setItem("library_id", index)

    
        try {
          const res = await req.get(`/${user_id}/library/${index}/`, {headers: {"Authorization": `Token ${token}`}})
          console.log(res.data);
          navigate('/upload', {state: res.data})
        } catch (e) {
          console.log(e)
        }
    }

    const renderLibrary = (library, idx) => {
    return (

    <li style={{width: '80%', marginBottom: '15%'}} key={idx} onClick={() => {fetchEachLibrary(idx)}} >
        <div class="max-w-sm rounded overflow-hidden shadow-lg"  >
            <img
                class="w-full"
                src={card_img}
                alt="Sunset in the mountains"
            ></img>
            <div class="px-6 py-3 bg-zinc-300">
                <div class="font-bold text-xl mb-2">{library.name}</div>
            </div>
            <div class="px-6 bg-zinc-300">
                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {library.content_type}
                </span>
            </div>
        </div>
    </li>

    );
    }

    return (
        <ul>
            <FlatList
            list={props.libList}
            renderItem={renderLibrary}
            renderWhenEmpty={() => <div style={{color: 'red', textAlign: 'center'}}>کتابخانه‌ای برای نمایش وجود ندارد</div>}
            display={{
                grid: true,
              }}
            gridGap="0.005%"
            />
        </ul>
    )
}

export default LibraryList;
