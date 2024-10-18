import React, { useState } from "react";
import axios from "axios";

function CreateNewPage() {
  const [title, setTitle] = useState("");
  const [description, setDescritpion] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
        title,
        description
    }
    const response = await axios.post("http://localhost:8000/page/create-new-page", dataToSend);
    const data = response.data;
    if(data.success){
        alert(data.message);
        setTitle("");
        setDescritpion("");
    }else{
        alert(data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title....."
          className="bg-neutral outline-none text-black text-4xl border-b-2 border-black py-3 w-[98%]"
        />
        <textarea
          value={description}
          onChange={(e) => setDescritpion(e.target.value)}
          rows={15}
          className="bg-neutral resize-none text-xl outline-none"
          placeholder="Description....."
        ></textarea>
        <button type="submit" className="border-2 hover:bg-primary py-2 px-4 rounded-md font-bold border-primary hover:text-neutral">Create Page</button>
      </form>
    </div>
  );
}

export default CreateNewPage;
