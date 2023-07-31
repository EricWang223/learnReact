import { useState } from "react";

export function NewTodoForm ({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit (e) {
    e.preventDefault()

    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (<form className="new-item-form"
    onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>

      {/* input box will always be whatever is stored in newItem; defaulted to empty string shown above*/}
      <input value={newItem} 
        // onChange sets whatever we type into the box and sets it as the value stored in newItem using e.target.value
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id="item" 
      />
    </div>
    <button className="add-btn">Add</button>
  </form>)
}