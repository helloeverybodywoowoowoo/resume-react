
import { ProductGrid } from "../../Components/ProductCard/ProductGrid";

function Ecom(){
    return(
    <div>
    <h1 style={{ textAlign: "center", marginTop: "24px" }}> The Sims Reading List </h1>
    <li style={{ textAlign: "center", marginTop: "12px" }}>Here are some titles that might enhance your understanding of some of the background and social issues entertained in The Sims. Warning: all are filled with provocative ideas; Maxis disavows any responsibility for encouraging deep thought.</li>    
    <ProductGrid />
    </div>
    );
}
export default Ecom;