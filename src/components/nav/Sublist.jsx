import PropTypes from 'prop-types';


export default function Sublist({ item }) {
    return (
        <li onClick={item.func} className='m-4'>
            {item.name}
        </li>
    )
}


Sublist.propTypes = {
    item: PropTypes.object.isRequired
}