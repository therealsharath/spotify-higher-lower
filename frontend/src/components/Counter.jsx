import { useCountUp } from 'react-countup';

function Counter(props) {
    const { countUp } = useCountUp({ end: props.followers });
    
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        numberWithCommas(countUp)
    )
}

export default Counter;