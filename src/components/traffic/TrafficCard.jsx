import PropTypes from 'prop-types';

export default function TrafficCard({ item }) {
    return (
        <div className="p-5 rounded-2xl bg-gray-200">
            <h1 className='font-bold my-2'>Traffic by {item.name}</h1>
            <div className=' h-64'>{item.data}</div>
        </div>
    )
}

TrafficCard.propTypes = {
    item: PropTypes.object.isRequired
}