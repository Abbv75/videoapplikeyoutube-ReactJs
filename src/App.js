import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components";
import { useState } from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{
                backgroundColor: '#000',
                height: '100vh',
                display: "flex",
                flexDirection: 'column',
            }}>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                    <Route path="/channel/:id" element={<ChannelDetail />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}
