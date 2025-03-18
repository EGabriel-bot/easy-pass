import topography from './assets/topography.svg'
import './App.css'
import { ClipboardIcon, Cog8ToothIcon } from '@heroicons/react/24/solid'



function App() {

  return (
    <>
      <img className="hero-shape absolute" src={topography} alt="" />
      <div className='relative'>
        <h1 className="mb-20 text-center font-bold">Easy-Pass</h1>
        <h3 className="mt-25 mb-5 font-light">Generate passwords with ease, just hit generate and see the magic happen!</h3>
        <div className="glass-card w-full h-2xl rounded-2xl  p-3 " aria-readonly>
          <div className="flex items-center gap-5 border-2 p-2 rounded-xl h-15"> 
            <input className='w-full' type="text" placeholder="gEb'_H=Bm8L1od+=yas7ugTDwC=M8W5s1W?t8#9$ad#g=^?_" readOnly /> 
            <button className=" col-span-2 rounded-xl  w-fit h-fit">Generate</button>
          </div>
          <div className='flex mt-4 gap-1 justify-end'>
            <button><ClipboardIcon className='size-6 '/></button>
            <button><Cog8ToothIcon className='size-6'/></button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
