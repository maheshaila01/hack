const UpInfo=({up})=>
{
    return(
        <div>
        {
           up.map((val,idx)=>
           {
             return(                                           
                <div className="row mt-2" key={idx} style={{color: "green",font: "-moz-initial"}}>
                <div className="col-3">
                    <h4>{idx+1}</h4>
                </div>
                <div className="col-3">
                    <h4>{val.Name}</h4>
                </div>
                <div className="col-3">
                    <h4>{val.status}</h4>
                </div>
                <div className="col-3">
                    <h4>{val.protocol}</h4>
                </div>
             </div>
             )
           })
        }
        </div>
    )
}
export default UpInfo;