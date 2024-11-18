import React from 'react'
import { Mail, Phone, Pin } from 'lucide-react'
const Contact = () => {
  return (
    <>
      <div className='w-screen h-full flex flex-col justify-center items-center bg-[url("https://img.freepik.com/free-photo/vintage-pink-telephone-assortment_23-2148913963.jpg?t=st=1731920602~exp=1731924202~hmac=b114677e717724f154ef436962b20d9b4412dcedbd6c1d78cb7f2b8d0e9a7fee&w=1380")] bg-no-repeat bg-cover bg-center  h-full w-full'>  

        <div className='w-full h-40 flex justify-center items-center text-3xl text-black-500 font-semibold'>
        𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐔𝐬
        </div>
        <div className='w-[75%] h-[45rem] shadow-lg flex flex-row justify-center  items-center '>
          <div className='h-[90%] w-1/2 flex flex-col justify-center items-center gap-4 '>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md  hover:bg-pink-200 hover:text-black '>
              <Mail className='h-8 w-8 text-pink-600' />
              <h1>gifthaven@gamil.com</h1>
            </div>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md  hover:bg-pink-200 hover:text-black'>
              <Phone className='h-8 w-8 text-pink-600' />
              <h1>9876547621</h1>
            </div>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md  hover:bg-pink-200 hover:text-black'>
              <Pin className='h-8 w-8 text-pink-600' />
              <h1 className='text-center'>jntuh,kondagattu <br />jagtial</h1>
            </div>
          </div>
          <div className='h-[95%] w-1/2 flex flex-col justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <h1 className='w-[80%] text-left my-6 font-bold text-black-500'>𝐆𝐞𝐭 𝐈𝐧 𝐓𝐨𝐮𝐜𝐡</h1>
              <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8'>
                <input type="text" name="" id="" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm hover:bg-pink-200' />
                <input type="email" name="" id="" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm hover:bg-pink-200' />
                <input type="tel" name="" id="" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm hover:bg-pink-200' />
                <textarea name="" id="address" className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm hover:bg-pink-200' cols='8' rows='10' placeholder='Message'/>
                <button type="submit" className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Send Message</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact