import FlatList from 'flatlist-react';
import card_img from "../card.jpg";


const LibraryList = (props) => {

    const renderLibrary = (library, idx) => {
    return (
    // <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>

    <li style={{width: '80%', marginBottom: '15%'}} key={idx} >
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
            renderWhenEmpty={() => <div>List is empty!</div>}
            display={{
                grid: true,
              }}
            gridGap="0.005%"
            // sortBy={["firstName", {key: "lastName", descending: true}]}
            // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
            />
        </ul>
    )
}

export default LibraryList;
