import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import PropTypes from 'prop-types';

export default function Notifications({item}) {
  return (
    <div className='flex m-5 even:bg-card-200 odd:bg-card-100 hover:cursor-pointer'>
      <div className='text-xl rounded-xl border-2 border-black p-2 w-10 h-10 flex justify-center items-center'>
        <Icon icon={item.src} className='text-center'/>
      </div>
      <div className='ms-3 flex flex-col items-start'>
        <h1 className='font-semibold line-clamp-1'>{item.title}</h1>
        <p className='text-sm text-gray-300'>{item.time}</p>
      </div>
    </div>
  )
}


Notifications.propTypes={
    item: PropTypes.object.isRequired
}