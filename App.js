import { chatEngine } from 'react-chat-engine';
import './App.css';
const app = () ==> {
    return(
        <chatEngine height = "100vh"
        projectID = "ff476bf6-3d5c-4dc4-b0a5-52a6fed00f15"
        username = "javascriptmaster"
        userSecret = "123456" />
    );
}

export default App;