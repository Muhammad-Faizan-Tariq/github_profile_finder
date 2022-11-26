import { useState, useContext } from "react";
import GithubContext from "../../contextAPI/github/githubContext";
import AlertContext from "../../contextAPI/alert/alertContext";

function Search () {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState("");

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault()
        if(text === ""){
            alertContext.setAlert("Enter a username")
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
    };

  return (
    <div>
        <form onSubmit={onSubmit} className="form">
            <input
                type="text"
                name="text"
                placeholder="Search Users..."
                value={text}
                onChange={onChange}
            />
            <input
                type="submit"
                value="search"
                className="btn btn-dark btn-block"
            />
        </form>

        {githubContext.users.length > 0 && (
            <button onClick={githubContext.clearUsers} className="btn btn-light btn-block">Clear</button>
        )}

    </div>
  )
}

export default Search;