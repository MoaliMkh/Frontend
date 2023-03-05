import FlatList from 'flatlist-react';
import card_img from "../card.jpg";
import req from '../api/user_req'
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useState } from 'react';
import no_content from '../no-content.png'



const LibraryList = (props) => {

    const navigate = useNavigate();
    const alert = useAlert();

    const [libraryList, setLibraryList] = useState(props.libList)
    const [libListChanged, setLibListChanged] = useState(false)

    const fetchEachLibrary = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        localStorage.setItem("library_id", index)

        try {
          const res = await req.get(`/${user_id}/library/${index}/file/`, {headers: {"Authorization": `Token ${token}`}})
          localStorage.setItem("each_lib", JSON.stringify(res.data))
          navigate('/eachlibrary')
        } catch (e) {
          console.log(e)
        }
    }


    const deleteEachLibrary = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        localStorage.setItem("library_id", index)

        try {
          await req.delete(`/${user_id}/library/${index}/`, {headers: {"Authorization": `Token ${token}`}})
          const res = await req.get(`/${user_id}/library/`, {headers: {"Authorization": `Token ${token}`}})

          setLibListChanged(true)
          localStorage.setItem("all_libs", JSON.stringify(res.data))
          setLibraryList(JSON.parse(localStorage.getItem("all_libs")))
          setLibListChanged(false)
          alert.show('کتابخانه با موفقیت حذف شد')
        } catch (e) {
          console.log(e)
        }
    }


    const renderLibrary = (library, idx) => {
    return (

    <li style={{width: '80%', marginBottom: '15%'}} key={idx}  >
        <div class="max-w-sm rounded overflow-hidden shadow-lg"  >
            <div onClick={() => {fetchEachLibrary(idx)}}>
                <img
                    class="w-full"
                    src={card_img}
                    alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                    <div class="font-bold text-xl mb-2">{library.name}</div>
                </div>
            </div>

            <div class="px-6 bg-zinc-300 flex">
                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {library.content_type}
                </span>

                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => {deleteEachLibrary(idx)}}>
                حذف
                </span>
            </div>
        </div>
    </li>

    );
    }

    return (
        <ul>
            <FlatList
            list={libraryList}
            renderItem={renderLibrary}
            renderWhenEmpty={() => 
                <div style={{color: 'red', textAlign: 'center'}}>
                    <span>
                    کتابخانه‌ای برای نمایش وجود ندارد
                    </span>    
                    <img src={no_content} alt="salam" style={{marginLeft: '40%'}}/>
                </div>}            display={{
                grid: true,
              }}
            gridGap="0.005%"
            />
        </ul>
    )
}

export default LibraryList;
