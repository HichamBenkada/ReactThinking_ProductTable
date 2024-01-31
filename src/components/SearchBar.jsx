export default function SearchBar({products}){
    return (
        <form action="">
            <input type="text"  placeholder="Search"/>
            <br />
            <label id="check">
                <input type="checkbox" id="check"/> Only show products in stock 
            </label>
        </form>
    )
}