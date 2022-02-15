import React, { useState } from 'react'
import "./search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from '../stateprovider';
import { actiontypes } from '../reducer';
const Search = ({hidebuttons}) => {

const [{},dispatch]=useStateValue()
  const [input,setInput] = useState("");
  const history = useHistory();
  const search=(e)=>{
    e.preventDefault();
    dispatch({
      type:actiontypes.SET_SEARCH_TERM,
      term:input
    })
    history.push("/search")
  }



  return (
    <form className="search">
        <div className="search__input">
            <SearchIcon/>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <MicIcon/>
        </div>
        {
            !hidebuttons ? (<div className="search__buttons">
            <Button type="submit" onClick={search} varient="outlined">google search</Button>
            <Button varient="outlined">I am feeling lucky</Button>
          </div>) : (
          <div className="search__buttons" style={{display:'none'}}>
            <Button type="submit" onClick={search} varient="outlined">google search</Button>
            </div>
            )

          
        }

    </form>
  )
}

export default Search