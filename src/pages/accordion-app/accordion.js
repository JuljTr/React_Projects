import Toggle from "./toggle";

export default function Accordion({ section, key }) {
    const { isOpen, toggle } = Toggle(false);
    return (
        <div>
            <ExtendableColumn
                question={section.question}
                isOpen={isOpen}
                toggle={toggle}
            />
            {isOpen && <TextSection text ={section.answer} />}
        </div>
    )
}

export const ExtendableColumn = ({ question, isOpen, toggle}) => {
    return (
        <div onClick={toggle}>
            <div>{question}</div>
            <button>
                <span class="material-symbols-outlined"
                style={{transform: `rotate(${isOpen? 180 : 0}deg)`}}>expand_more</span>
            </button>
        </div>
    )
}
export const TextSection = ({text}) => {
    return (
        <div>
            <div>{text}</div>
        </div>
    )
}