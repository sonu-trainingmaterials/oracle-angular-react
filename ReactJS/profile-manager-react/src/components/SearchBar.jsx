import HomeContext from "../contexts/HomeContextProvider";
import { useRef } from "react";


// function SearchBar({ handleSearch }) {

//     //const [text, setText] = useState();
//     const searchInput = useRef('');

//     // useEffect(()=>{
//     //     console.log(`Updated component with search text ${text}`)
//     // });

//     // const handleKeyup = (e) => {
//     //     e.preventDefault();   
//     //     setText(e.target.value);                  
//     //     handleSearch(e.target.value);  
//     // }
//     const handleClick = (e)=>{
//         e.preventDefault();
//         console.log("done")
//         handleSearch(searchInput.current.value);  
//     }

//     return (
//         <div className='row bg-success'>
//             <div className="col-md-12">
//                 <form className="form-inline">
//                     <div className="form-group">
//                     <label className="sr-only" htmlFor="search">Name</label>
//                         {/* <input type="text" className="form-control mb-2 mr-sm-2" id="searchText" 
//                         onKeyUp={handleKeyup} placeholder="Search by name" /> */}
//                         <input type="text" className="form-control mb-2 mr-sm-2" id="searchText" 
//                         placeholder="Search by name" ref={searchInput} />
//                         <button className="btn btn-primary btn-sm" onClick={handleClick}>Search</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// };

function SearchBar() {

    //const [text, setText] = useState();
    const searchInput = useRef('');

    // useEffect(()=>{
    //     console.log(`Updated component with search text ${text}`)
    // });

    // const handleKeyup = (e) => {
    //     e.preventDefault();   
    //     setText(e.target.value);                  
    //     handleSearch(e.target.value);  
    // }
    const handleClick = (e, search) => {
        e.preventDefault();
        search(searchInput.current.value);
    }

    return (
        <HomeContext.Consumer>
            {({ handleSearch }) => (
                <div className='row bg-success'>
                    <div className="col-md-12">
                        <form className="form-inline">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="search">Name</label>
                                {/* <input type="text" className="form-control mb-2 mr-sm-2" id="searchText" 
                        onKeyUp={handleKeyup} placeholder="Search by name" /> */}
                                <input type="text" className="form-control form-control-sm mb-2 mr-sm-2" id="searchText"
                                    placeholder="Search by name" ref={searchInput} />
                                <button className="btn btn-primary btn-sm" onClick={(e) => handleClick(e, handleSearch)}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </HomeContext.Consumer>
    )
};
export default SearchBar;

