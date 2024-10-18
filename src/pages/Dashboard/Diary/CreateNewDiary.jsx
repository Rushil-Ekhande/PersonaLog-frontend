import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateNewDiary = () => {
  const [pages, setPages] = useState([]);
  const [selectedPages, setSelectedPages] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    console.log("runned");
    const { options } = event.target;
    const selectedValues = [];

    // Loop through the options and push selected ones to the array
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    setSelectedPages(selectedValues);
  };

  useEffect(() => {
    const getAllPage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/page/get-all-pages"
        );
        const data = response.data;
        if (data.success) {
          // console.log(data.payload);
          setPages([data.payload]);
          console.log(pages);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert(error);
      }
    };

    getAllPage();
  }, []);

  return (
    <div className="create-new-diary">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name of Diary....."
          className="bg-neutral outline-none text-black text-4xl mt-4 border-b-2 border-black py-2 w-[98%]"
        />
        <div className="mid-section bg-accent p-4 rounded">
          <h2 className="text-xl tracking-wide font-bold">
            Add Pages To Diary:
          </h2>
          <select
            id="pages"
            name="pages"
            value={selectedPages}
            multiple={true}
            onChange={handleChange}
            className="h-12 w-12"
          >
            {pages.map(page=> (
              <option key={page._id} value={page._id}>
                {page.title}
              </option>
            ))}
          </select>
          <div>
          {pages.map(page=> (
              <div key={page._id}>{page.title}</div>
            ))}
          </div>
        </div>
        <button type="submit" className="">
          Create Diary
        </button>
      </form>
    </div>
  );
};

export default CreateNewDiary;
