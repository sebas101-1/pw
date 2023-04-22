import './Men.css'


function Card(number:any, display:any){
    if(display){
        if(number==1){
            return(
                <div className='card 1'>
                    <p>A Major city in America</p>
                </div>
            )
        }
    }
}

export default Card