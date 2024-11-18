
import { PartyPopper , House, Baby, Cake } from 'lucide-react'
const HomeCards = () => {
    return (
        <>
            <div className='w-full h-full flex flex-row justify-center items-center gap-8'>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-pink-300 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <Cake  className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                        𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲𝐬
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-blue-300 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        < PartyPopper className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                        𝐖𝐞𝐝𝐝𝐢𝐧𝐠𝐬
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-orange-400 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <Baby  className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                        𝐁𝐚𝐛𝐲 𝐒𝐡𝐨𝐰𝐞𝐫
                        </h1>
                    </div>
                </div>
                <div className=" h-[8rem] w-[23%] bg-white  rounded-sm overflow-hidden relative group p-2 z-0 shadow-lg">
                    <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-red-400 group-hover:scale-[800%] duration-500 z-[-1] op" />
                    <div className='flex h-full w-full justify-center items-center flex-row'>
                        <House className='h-8 w-8 mr-2 text-black group-hover:text-white  duration-300 ' />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-300 text-lg">
                        𝐍𝐞𝐰 𝐇𝐨𝐦𝐞
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCards