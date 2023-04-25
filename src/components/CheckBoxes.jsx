const Checkboxes = ({handleChange, spendTime}) => {
    return (
        <ul>
            <li>
                <label> 
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={spendTime.includes("swimming")}
                    />Swimming</label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="bathing" 
                    onChange={handleChange}
                    checked={spendTime.includes("bathing")}/>Bathing</label>
            </li>
            <li>
                <label>
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={spendTime.includes("chatting")}
                    />Chatting</label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="noTime" 
                    onChange={handleChange}
                    checked={spendTime.includes("noTime")}/>I don't like to spend time with it</label>
            </li>
        </ul>
    )
}

export default Checkboxes