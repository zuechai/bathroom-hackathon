import { useRef } from "react";

export default function Form() {
    const formRef = useRef();

    const handleClickEvent = (i) => {
        i.preventDefault();
        const userInput = formRef.current.address.value;
    };

    return (
        <form ref={formRef}>
            <label>Find a bathroom...</label>
            <input label={"address"} name={"address"}/>
            <button onClick={handleClickEvent}>Help me!</button>
        </form>
    );
}
