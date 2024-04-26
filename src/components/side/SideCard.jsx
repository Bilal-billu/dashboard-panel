import PropTypes from 'prop-types';

export default function SideCard({item}) {
    
    return (
      <div className='grid grid-cols-4 grid-rows-1 gap-0 place-content-center m-5 even:bg-card-200 odd:bg-card-100 hover:cursor-pointer'>
        <div className='text-xl rounded-full border-2 border-black w-10 h-10 row-span-1 flex justify-center items-center'>
        <img src={item.src} alt="image of a user" className='w-11/12 rounded-full object-contain'/>
        </div>
        <div className='ms-2 flex flex-col justify-center items-start col-span-3 row-span-1 text-center'>
          <h1 className='font-semibold line-clamp-1'>{item.title}</h1>
          {
            item.time&&<p className='text-sm text-gray-300'>{item.time}</p>
          }
          
        </div>
      </div>
    )
}

SideCard.propTypes={
    item: PropTypes.object.isRequired
}