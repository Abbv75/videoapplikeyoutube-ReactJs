import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    return (

        <Paper
            component="form"
            onSubmit={
                () => { }
            }
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: "none",
                mr: {
                    sm: 5
                }
            }}
            action={`/search/${searchValue}`}
        >
            <input
                // name="searchTerm"
                className="search-bar"
                placeholder="Recherchez une video ..."
                value={searchValue}
                onChange={
                    (e) => {
                        setSearchValue(e.target.value)
                    }
                }
            />
            <IconButton
                type="submit"
                sx={{
                    p: "10px", color: "red"
                }}
            >
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar