import React, { useState, useRef } from "react";
import { useStateValue } from "./store/StateProvider";
import Button from "./components/Button/Button";
import Text from "./components/SharedText/Text";
import Modal from "./components/Modal/Modal";
import { ACTIONS } from "./store/action";

export default function App() {
  const [header, setHeader] = useState("");
  const [listItem, setListChange] = useState("");
  const [currentInputIndex, setCurrentInputIndex] = useState("");
  const [dragging, setDragging] = useState("");
  const [modal, setModal] = useState("");
  const [modalData, setModalData] = useState("");
  const [{ taskList }, dispatch] = useStateValue();
  const dragItem = useRef();
  const dragNode = useRef();
  const onChangeHeader = (e) => {
    setHeader(e.target.value);
  };

  const onAddToList = () => {
    !!header &&
      dispatch({
        type: ACTIONS.ADD_KEY,
        payload: header,
      });
    setHeader("");
  };

  const onListItemChange = (e, index) => {
    setCurrentInputIndex(index);
    setListChange(e.target.value);
  };

  const onAddListToType = (index) => {
    setListChange("");
    setCurrentInputIndex(999999);
    !!listItem &&
      dispatch({
        type: ACTIONS.ADD_LIST_ITEM,
        payload: {
          headerIndex: index,
          listItem: listItem,
        },
      });
  };

  const startDragging = (event, params) => {
    // const initialPosition = Number(event.currentTarget);
    console.log(params);
    setDragging(params);
    dragItem.current = params;
    dragNode.current = event.target;
    console.log("STARTED", event.target);
  };

  const onDragOver = (event) => {
    console.log("OVER");
    event.preventDefault();
  };

  const onDrop = (event, params) => {
    console.log("DROPPED", event.target);
    console.log("DROPPED", params);
    dispatch({
      type: ACTIONS.DRAGGED,
      payload: {
        initialItemPosition: dragging,
        finalItemPosition: params,
      },
    });
  };

  const onItemClicked = (desc) => {
    console.log(desc);
    setModal(true);
    setModalData(desc);
  };
  const onClose = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={header}
          onChange={onChangeHeader}
          style={{ margin: 5 }}
        />
        <Button title="Add Type" onButtonClicked={onAddToList} />
      </div>
      <div style={{ minHeight: 40, display: "flex", flexDirection: "row" }}>
        {taskList.map(({ title }, groupIndex) => {
          const value = groupIndex === currentInputIndex ? listItem : "";
          const initialPosition = 0;
          return (
            <div key={`${groupIndex}`} style={{ margin: 5 }}>
              <Text
                text={title}
                customStyle={{ marginTop: 8, marginBottom: 4 }}
              />
              <div style={{ backgroundColor: "yellow", marginTop: 10 }}>
                {taskList &&
                  taskList[groupIndex] &&
                  (taskList[groupIndex].list || []).map(
                    (listItems, itemIndex) => {
                      return (
                        <div
                          key={listItems.key}
                          draggable={true}
                          onDragStart={(event) =>
                            startDragging(event, { itemIndex, groupIndex })
                          }
                          onDragOver={onDragOver}
                          onDrop={(event) =>
                            onDrop(event, { itemIndex, groupIndex })
                          }
                          style={{ padding: 10, margin: 5 }}
                          onClick={() => onItemClicked(listItems.item)}
                        >
                          <Text
                            text={listItems.item}
                            customStyle={{ marginTop: 8, marginBottom: 4 }}
                          />
                        </div>
                      );
                    }
                  )}
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => onListItemChange(e, groupIndex)}
                  value={value}
                />
                <Button
                  title="Add to list"
                  onButtonClicked={onAddListToType}
                  index={groupIndex}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={modal}>
        <div>
          <div onClick={onClose}>
            <Text text="X" />
          </div>
          <Text text={modalData} />
        </div>
      </Modal>
    </div>
  );
}
