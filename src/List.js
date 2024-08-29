


export default function List(props) {
    function onHover(e){
        console.log("e",e.target)
    }
    const {data} = props
    console.log("pr",data)
    return (
      <div className="List">
        <ul>
            {
                data.map((elm)=>(
                    (Array.isArray(elm))?(<li value={elm[0]['displayName']} onHover={onHover}>{elm[0]['displayName']}</li>) :
                    (<li value={elm['displayName']} onHover={onHover}>{elm['displayName']}</li>)
                ))
            }
        </ul>
      </div>
    );
  }
  