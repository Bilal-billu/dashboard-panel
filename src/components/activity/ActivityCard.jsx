import PropTypes from 'prop-types';
import { Icon } from '@iconify-icon/react';

export default function ActivityCard({item}) {
    var up="streamline:graph-arrow-increase-solid";
    var down="streamline:graph-arrow-decrease-solid";
    var check=item.percentage>=0;

  return (
    <div className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-2xl grid grid-cols-2 
    even:bg-card-200 odd:bg-card-100 text-black p-4 capitalize`}>
      <div className='col-span-2 m-4 text-md font-bold'>
        {item.name}
      </div>
      <div className='col-span-2 grid grid-cols-2 place-content-center m-4'>
        <div className='col-span-1 text-xl font-bold'>
            {item.numbers}
        </div>
        <div className='col-span-1 grid grid-cols-2 gap-6 text-xs place-content-end'>
            <span>{check&&"+"}{item.percentage}%</span>
            <span className='m-1'><Icon icon={check?up:down}/></span>
        </div>
      </div>
    </div>
  )
}

ActivityCard.propTypes={
    item: PropTypes.object.isRequired
}