import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const AdminLeftBar = () => {
  const Navigate = useNavigate()
  const Linksdata = [
    {
      title: '𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝',
      path: '/admin/dashboard'
    },
    {
      title: '𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬',
      path: '/admin/products'
    },
    {
      title: '𝐎𝐫𝐝𝐞𝐫𝐬',
      path: '/admin/orders'
    },
    {
      title: '𝐔𝐬𝐞𝐫𝐬',
      path: '/admin/users'
    }
    
  ]
  const handleLogout = () => {
    localStorage.removeItem('token')
    Navigate('/')
  }
  return (
    <div className='w-full h-screen shadow-pink-500 shadow-2xl flex justify-center text-xl items-center'>
      <div className='h-full w-full flex flex-col'>
        <div className='h-[10%] w-full text-pink-500 flex justify-center font-bold text-3xl items-center'>
        𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬
        </div>
        <div className='h-[80%] w-full flex flex-col items-center '>
          {Linksdata.map((link, index) => (
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-pink-500/90 hover:text-white flex justify-center items-center  rounded-sm shadow-md font-bold'>
              {link.title}
            </NavLink>
          ))
          }
        </div>
        <div className='h-[10%] w-full flex items-end'>
          <div className=' px-8  bg-pink-300 w-full h-2/3 text-black flex justify-center font-bold items-center text-xl cursor-pointer' onClick={handleLogout}>
          𝐋𝐨𝐠𝐨𝐮𝐭
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLeftBar