import { PatternFormat } from 'react-number-format'
export default function InputNumberDetector() {
  
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-[30px] relative bottom-[80px] text text-teal-700'><span className='text text-teal-600 text-[40px]'>Kelishamiz.uz</span> saytiga hush kelibsiz </h1>
      </div>
      <div className="input-container">
      </div>
      <form onSubmit={onSubmit} className='w-[550px] h-[600px] rounded-md  flex justify-center items-center p-1'>
      <div className='w-auto p-1 h-[65px] flex justify-center items-center border-2 rounded-md border-teal-600'>
      <PatternFormat  type='tel' placeholder="00-000-00-00" className='w-[400px]  h-full outline-none rounded-none border-none  p-3 text-[18px]'  valueIsNumericString format="+998 ## ### ## ##" mask="-"/>
      <button className='h-full p-3 outline-none  bg-[#fff] text-teal-700 relative'> <hr className='absolute ' />yuborish</button>
    </div>
    </form>
    </div>
  )
}
