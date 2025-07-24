import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from '../header-layout/HeaderLayout';
import Industries from '../industries/Industries';
import Channel from '../channel/channel';
import Companies from '../companies/Companies';
import '../../styles/global.css';

function App() {
  return (
    <Router>
      <HeaderLayout>
        <Routes>
          <Route path="/industries" element={<Industries />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<Industries />}/>
        </Routes>
      </HeaderLayout>
    </Router>
  );
}

export default App;
