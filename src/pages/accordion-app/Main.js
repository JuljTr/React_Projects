import  data  from './data';
import Accordion from './accordion';

export default function Main(){
    return(
        <div>
        <h3>Most asked questions</h3>
        {data.map((section, index) => (
            <Accordion key={index} section={section} />
        ) )}
        </div>
    )
}