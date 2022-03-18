function TextBox(props: {label: string; change: (str: string) => void}) {    
    return (
    <div>
        Enter {props.label}: {" "}
        <input 
            type={'text'} 
            onChange={(event) => props.change(event.target.value)}
        />
    </div>
    );
}

export default TextBox;
