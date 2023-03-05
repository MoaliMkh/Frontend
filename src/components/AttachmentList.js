import FlatList from 'flatlist-react';
import card_img from "../card.jpg";
import req from '../api/user_req'
import { useAlert } from 'react-alert';
import { useState } from 'react';
import no_content from '../no-content.png';
import download_req from '../api/download_req';



const AttachmentList = (props) => {

    const alert = useAlert();
    var fileDownload = require('js-file-download')

    const [libraryList, setLibraryList] = useState(props.libList)
    const [libListChanged, setLibListChanged] = useState(false)

    const downloadEachAttachment = async (index, name) => {

        name = name.split(' ').join('_')
        download_req.get(`/${name}`, { 
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, `${name}`);
            alert.show('بارگیری پیوست موفقیت‌آمیز بود', {type: "success"})
            console.log(res);
        }).catch(err => {
            alert.show('خطا هنگام بارگیری پیوست', {type: "error"})
            console.log(err);
        })
    }

    const deleteEachAttachment = async (index) => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        const content_id = localStorage.getItem("content_id")
        localStorage.setItem("library_id", index)

        try {
          await req.delete(`/${user_id}/file/${content_id}/attachment/${index}/`, {headers: {"Authorization": `Token ${token}`}})
          const res = await req.get(`/${user_id}/file/${content_id}/attachment/`, {headers: {"Authorization": `Token ${token}`}})

          setLibListChanged(true)
          localStorage.setItem("all_attachs", JSON.stringify(res.data))
          setLibraryList(JSON.parse(localStorage.getItem("all_attachs")))
          setLibListChanged(false)
          alert.show('پیوست با موفقیت حذف شد', {type: 'success'})
        } catch (e) {
          console.log(e)
        }
    }


    const renderAttachments = (library, idx) => {
    return (

    <li style={{width: '80%', marginBottom: '15%'}} key={idx}  >
        <div class="max-w-sm rounded overflow-hidden shadow-lg"  >
            <div onClick={() => {downloadEachAttachment(idx)}}>
                <img
                    class="w-full"
                    src={card_img}
                    alt="Sunset in the mountains"
                ></img>
                <div class="px-6 py-3 bg-zinc-300">
                    <div class="font-bold text-xl mb-2">{library.name}</div>
                </div>
                {libListChanged ? null : null}

            </div>

            <div class="px-6 bg-zinc-300 flex">

                <span class="inline-block bg-zinc-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2" style={{marginLeft: '25%'}} onClick={() => {deleteEachAttachment(idx)}}>
                حذف
                </span>
            </div>
            <div class=" bg-zinc-300 flex" >
                <span class="inline-block bg-slate-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2" style={{marginLeft: '30%'}} onClick={() => {downloadEachAttachment(idx, library.name)}}>
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
            renderItem={renderAttachments}
            renderWhenEmpty={() => 
            <div style={{color: 'red', textAlign: 'center'}}>
                <span>
                پیوستی برای نمایش وجود ندارد
                </span>    
                <img src={no_content} alt="salam" style={{marginLeft: '40%'}}/>
            </div>}
            display={{
                grid: true,
              }}
            gridGap="0.005%"
            />
        </ul>
    )
}

export default AttachmentList;
