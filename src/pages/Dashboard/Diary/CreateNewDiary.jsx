import React from 'react'

function CreateNewDiary() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='create-new-diary'>
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-4'>
            <input type="text" placeholder='Name of Diary.....' className='bg-neutral outline-none text-black text-4xl mt-4 border-b-2 border-black py-2 w-[98%]'/>
            <div className='mid-section bg-accent p-4 rounded'>
                <h2 className='text-xl tracking-wide font-bold'>Add Pages To Diary:</h2>
                {/* <select id="pages" value={selectedPages} multiple={true} onChange={handleSelectOnChange}>
                    {
                        // options
                    }
                </select> */}
            </div>
            <button type='submit' className=''>Create Diary</button>
        </form>
    </div>
  )
}

export default CreateNewDiary