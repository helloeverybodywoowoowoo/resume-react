
import { ProductGrid } from "../../Components/ProductCard/ProductGrid";

function Ecom(){
    return(
    <div>
    <h1 style={{ textAlign: "center", marginTop: "24px" }}> The Sims Reading List </h1>
    <li style={{ textAlign: "center", marginTop: "12px" }}>Here are some titles that might enhance your understanding of some of the background and social issues entertained in The Sims. Warning: all are filled with provocative ideas; Maxis disavows any responsibility for encouraging deep thought.</li>    
    <li style={{ textAlign: "center", marginTop: "12px" }}>In one of my favorite game series, The Sims, The Sims 1 originally came with a list of recommend reading, so don't even THINK about loading into Create-a-Sim until you've read Notes on the Synthesis of Form by Christopher W. Alexander</li>    
   
    <ProductGrid />
    </div>
    );
}
export default Ecom;