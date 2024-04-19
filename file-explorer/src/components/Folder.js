import { useState } from "react";

const Folder = ({ explorer, handleInsertNode }) => {
  console.log(explorer);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();

    setShowInput({
      visible: true,
      isFolder
    })
    setExpand(true);
  }


  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false })
      console.log(e.target.value);
    }
  }


  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" style={{ display: 'flex', gap: '10px' }} onClick={() => setExpand(!expand)}>
          <span>📂{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}> Folder+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>file+</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: '25px' }}>
          {
            showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder ? "📂" : "📄"}</span>
                <input type='text'
                  onKeyDown={onAddFolder}
                  onBlur={(e) => setShowInput({ visible: false, isFolder: null })}
                  autoFocus className="inputContainer__input" />
              </div>
            )
          }
          {explorer.items.map((item, index) => (
            <Folder handleInsertNode={handleInsertNode} key={item.id} explorer={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "5px", paddingLeft: '25px' }}>
        <span>📄{explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
