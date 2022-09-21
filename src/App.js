import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';



export const App = () => (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
          <Routes>
            <Route path="/youtube-clone/" exact element={<Feed />} />
            <Route path="/youtube-clone/video/:id" element={<VideoDetail />} />
            <Route path="/youtube-clone/channel/:id" element={<ChannelDetail />} />
            <Route path="/youtube-clone/search/:searchTerm" element={<SearchFeed />} />

          </Routes>
      </Box>
    </BrowserRouter>
  );

