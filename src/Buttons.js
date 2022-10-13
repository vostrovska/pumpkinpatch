function Buttons({filteredPrice}){
    return(
        <div className="cont">
            <button className="change" onClick = {() => filteredPrice("$5")}>$5-$9</button>
            <button className="change" onClick = {() => filteredPrice("$10")}>$10-$14</button>
            <button className="change" onClick = {() => filteredPrice("$15")}>$15-$20</button>
        </div>
    )
}
export default Buttons;