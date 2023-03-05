import FlatList from 'flatlist-react';
import card_img from "../card.jpg";
import req from '../api/user_req'
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useState } from 'react';


const ContentList = (props) => {

    const navigate = useNavigate();
    const alert = useAlert();

    const [libraryList, setLibraryList] = useState(props.libList)
    const [libListChanged, setLibListChanged] = useState(false)

    const downloadEachContent = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        const library_id = localStorage.getItem("library_id");


        try {
          const res = await req.get(`/${user_id}/library/${library_id}/file/${index}/`, {headers: {"Authorization": `Token ${token}`}})
          console.log(res)
          alert.show('در حال بارگیری محتوا')
        } catch (e) {
          console.log(e)
        }
    }

    const fetchEachContent = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        localStorage.setItem("content_id", index)


        try {
            const res = await req.get(`/${user_id}/file/${index}/attachment/`, {headers: {"Authorization": `Token ${token}`}})
            localStorage.setItem("each_content", JSON.stringify(res.data))
            navigate('/eachcontent')
        } catch (e) {
          console.log(e)
        }

        ////TODO
    }


    const deleteEachContent = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        const library_id = localStorage.getItem("library_id");


        try {
          await req.delete(`/${user_id}/library/${library_id}/file/${index}/`, {headers: {"Authorization": `Token ${token}`}})
          
          
          const res = await req.get(`/${user_id}/library/${library_id}/file/`, {headers: {"Authorization": `Token ${token}`}})
          setLibListChanged(true)
          localStorage.setItem("each_lib", JSON.stringify(res.data))
          setLibraryList(JSON.parse(localStorage.getItem("each_lib")))
          setLibListChanged(false)
          
          alert.show('محتوا با موفقیت حذف شد')
          navigate('/eachlibrary')
        } catch (e) {
          console.log(e)
        }
    }


    const renderContents = (library, idx) => {
    return (

    <li style={{width: '80%', marginBottom: '15%'}} key={idx}  >
        <div class=" w-fit rounded overflow-hidden shadow-lg"  >
            <div onClick={() => {fetchEachContent(idx)}}>
                <img
                    class="w-full"
                    src={card_img}
                    alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                    <div class="text-xl mb-2">{library.name}</div>
                </div>
            </div>

            <div class="px-6 bg-zinc-300 flex">
                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {library.content_type}
                </span>

                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => {deleteEachContent(idx)}}>
                حذف
                </span>
            </div>

            <div class=" bg-zinc-300 flex" >
                <span class="inline-block bg-slate-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2" style={{marginLeft: '30%'}} onClick={() => {downloadEachContent(idx)}}>
                بارگیری
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
            renderItem={renderContents}
            renderWhenEmpty={() => <div style={{color: 'red', textAlign: 'center'}}>محتوایی برای نمایش وجود ندارد</div>}
            display={{
                grid: true,
              }}
            gridGap="0.005%"
            />
        </ul>
    )
}

export default ContentList;
