import Bike from '../../images/Frame.png'
import Bus from '../../images/Frame-1.png'
import Car from '../../images/Frame-2.png'
import Train from '../../images/Group.png'
const FakeData = [
    {
        id: '1',
        imgUrl: <img className="transportImg" src={Bike} alt="" />,
        transportType: 'Bike',

    },
    {

        id: '2',
        imgUrl: < img className="transportImg" src={Car} alt="" />,
        transportType: 'Car',

    },
    {
        id: '3',
        imgUrl: <img className="transportImg" src={Bus} alt="" />,
        transportType: 'Bus',

    },
    {

        id: '4',
        imgUrl: <img className="transportImg" src={Train} alt="" />,
        transportType: 'Train',

    }
]
export default FakeData;