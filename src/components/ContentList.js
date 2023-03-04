import FlatList from 'flatlist-react';
import card_img from "../card.jpg";
import req from '../api/user_req'
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';


const ContentList = (props) => {

    const navigate = useNavigate();
    const alert = useAlert();

    const fetchEachContent = async (index) => {
        // const token = localStorage.getItem("token");
        // const user_id = localStorage.getItem("user_id");
        // const library_id = localStorage.getItem("library_id");


        // try {
        //   const res = await req.delete(`/${user_id}/library/${library_id}/file/${index}/`, {headers: {"Authorization": `Token ${token}`}})
        //   alert.show('محتوا با موفقیت حذف شد')
        //   navigate('/eachlibrary')
        // } catch (e) {
        //   console.log(e)
        // }
    }


    const deleteEachContent = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        const library_id = localStorage.getItem("library_id");


        try {
          const res = await req.delete(`/${user_id}/library/${library_id}/file/${index}/`, {headers: {"Authorization": `Token ${token}`}})
          alert.show('محتوا با موفقیت حذف شد')
          navigate('/eachlibrary')
        } catch (e) {
          console.log(e)
        }

        /////// TODO
    }


    const renderContents = (library, idx) => {
    return (

    <li style={{width: '80%', marginBottom: '15%'}} key={idx} onClick={() => {fetchEachContent(idx)}} >
        <div class="max-w-sm rounded overflow-hidden shadow-lg"  >
            <img
                class="w-full"
                src={card_img}
                alt="Sunset in the mountains"
            ></img>
            <div class="px-6 py-3 bg-zinc-300">
                <div class="font-bold text-xl mb-2">{library.name}</div>
            </div>
            <div class="px-6 bg-zinc-300 flex">
                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {library.content_type}
                </span>

                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={() => {deleteEachContent(idx)}}>
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
            list={props.libList}
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
