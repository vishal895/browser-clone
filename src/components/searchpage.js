import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Search from './search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./searchpage.css"
import { useStateValue } from '../stateprovider';
import useGoogleSearch from '../useGoogleSearch';

const Searchpage = () => {
    const [{term}] = useStateValue();
    const { data } = useGoogleSearch(term);
    
  return (
    <div className="searchpage">
        <div className="searchpage__header">
            <Link to="/">
                <img src="https://pngimg.com/uploads/google/google_PNG19636.png"/>
            </Link>
            <div className="searchpage__headerbody">
                <Search hidebuttons/>

                <div className="searchpage__options">
                    <div className="searchpage__optionsleft">
                        <div className="searchpage__option">
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchpage__option">
                            <DescriptionIcon/>
                            <Link to="/all">News</Link>
                        </div>
                        <div className="searchpage__option">
                            <ImageIcon/>
                            <Link to="/all">Images</Link>
                        </div>
                        <div className="searchpage__option">
                            <LocalOfferIcon/>
                            <Link to="/all">Shoping</Link>
                        </div>
                        <div className="searchpage__option">
                            <RoomIcon/>
                            <Link to="/all">Maps</Link>
                        </div>
                        <div className="searchpage__option">
                            <MoreVertIcon/>
                            <Link to="/all">More</Link>
                        </div>
                    </div>
                    <div className="searchpage__optionsright">
                        <div className="searchpage__option">
                        <Link to="/settings">Settings</Link>
                        </div>
                        <div className="searchpage__option">
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{

    term &&(

        <div className="searchpage__results">
            <p className="searchpage__resultcount">
                About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime}) for {term} 
            </p>
{
    data?.items?.length > 0 &&data?.items.map((item)=>(
        <div className="searchpage__result">
        <a href={item.link} className="searchpage__resultlink">
            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
            <img src={item.pagemap?.cse_image[0]?.src} className="searchpage__resultimage" alt=""/>
            )}
            {item.displayLink}
        </a>
        <a href={item.link} className="searchpage__resulttitle">
            <h2>{item.title}</h2>
        </a>
        <p className="searchpage__resultdescription">{item.snippet}</p>
    </div>
    ))}
               



            
        </div>)
}        
    </div>
  );
}

export default Searchpage