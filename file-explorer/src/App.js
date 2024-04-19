import { useState } from "react";
import { explorer } from "./data/folderData";
import Folder from "./components/Folder.js";
import useTraverseTree from "./hooks/use-traverse-tree.js";

function App() {
  const [data, setData] = useState(explorer);
  const {insertNode} = useTraverseTree()
  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalTree = insertNode(data,folderId,item,isFolder)
    setData(finalTree)
  }
  return (
    <div className='App'>
      <Folder handleInsertNode={handleInsertNode} explorer={data} />
    </div>
  );
}

export default App;
