const DownInfo=(props)=>
{

    return(
        <div>
        {
           props.down.map((val,idx)=>
           {
             return(                                           
                <div className="row mt-2" key={idx} style={{color: "red"}}>
                <div className="col-3">
                    <h4>{props.ind+idx+1}</h4>
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
export default DownInfo;