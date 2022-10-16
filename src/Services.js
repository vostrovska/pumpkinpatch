function Services({itemForSale}){
    return(
        <div className="products">
            {itemForSale.map((element =>{
               const {id, serviceName, price, image} = element;
               return(
                <div key={id} className="product-card">
                    <img src={image} alt="service" width="650px" height="500px"/>
                <div className="product-info">
                    <h3>{serviceName}</h3>
                    <h4>$ {price}</h4>
                </div>
                </div>
               )
            }
              ))}   
        </div>
    )
}
export default Services;