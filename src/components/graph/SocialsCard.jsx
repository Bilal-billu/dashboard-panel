import PropTypes from 'prop-types';
export default function SocialsCard({item, change}) {
    return (
        <label className="grid  grid-cols-2 gap-1 lg:gap-5 place-content-center text-left my-5 hover:cursor-pointer">
            <span className=''>{item.name}</span>
            <div className={`border-b-8 col-span-1 ${'w-full'} rounded-full place-self-center transition ease-in-out duration-300 
            ${item.state?'border-black':'border-gray-300'}`}></div>
            <input type="radio" className='form-radio hidden' selected={item.state} name='social_media'
            onChange={()=>{
                change(item.name);
            }}
            />
            {/*
                    the bars need to be dynamic and controlled.     
                    */}
        </label>
    )
}


SocialsCard.propTypes={
    item: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired
}