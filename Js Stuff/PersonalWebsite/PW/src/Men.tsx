import { FunctionComponent, JSXElementConstructor, ReactElement, useState } from 'react'
let github = "https://imgs.search.brave.com/ikcrhKQN5Ni60H22fPzkPeFZsD0oUqDTRZdQputksE8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL2dp/dGh1Yl9QTkc0MC5w/bmc"
let ham = "https://imgs.search.brave.com/1GG5wF6GQ_XYcHbpRj99p6o1UbDoIve7dUVJkRzaRn4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbmF2aWdhdGlv/bi00MC8yNC9oYW1i/dXJnZXItbWVudS01/MTIucG5n"
let ld = "https://imgs.search.brave.com/1Wwy4839SEgaUvfI45rne2UFvHjPF8Z8OF7TdT1t6qA/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvd2ViLWludGVy/ZmFjZS02NS8zMi8z/NF8tX0xpZ2h0X0Rh/cmtfTW9kZS0xMDI0/LnBuZw"
let x = "https://imgs.search.brave.com/r4zgPSpyAKVap9nfsTqYX2QealQG0Mkq6ofmTrBnNLY/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy94LWlj/b24tcG5nL3gtaWNv/bi1wbmctMTIuanBn"
import './Men.css'
let git = "https://github.com/sebas101-1"
let dark = false
// s
function Card(num:any, display:any){
    if(display){
        if(num==1){
            return(
                <div className='card 1'>
                    <p>A Major city in America</p>
                </div>
            )
        }
    }
    return(<div></div>)
}
function Men(darkmode:any, DarkClick:any):ReactElement{
    let [opened, setOpened] = useState(false);
    function openFunc(){
        setOpened(!opened)
        console.log("hji")
    }
    if(!darkmode){
        if(opened){
            return(
                <div className='menuO'>
                    <button><img onClick={openFunc} src={x} className='lnk '/></button>
                    <button><a href={git}><img src={github} className='lnk '/></a></button>
                    <button><img onClick={DarkClick} src={ld} className='lnk '/></button>
                </div>
            )
        }
        else{
            return(
                <div className='menuC'>
                    <button><img onClick={openFunc} src={ham} className='lnk '/></button>
                    <button><img src={github} className='lnk '/></button>
                    <button><img src={ld} className='lnk '/></button>
                    <Card num={1} display={true}/>
                </div>
            )
        }
    }
    else if(opened){
        return(
            <div className='menuO darkmen'>
                <button><img onClick={openFunc} src={x} className='lnk '/></button>
                <button><a href={git}><img src={github} className='lnk '/></a></button>
                <button><img onClick={DarkClick} src={ld} className='lnk '/></button>
            </div>
        )
    }
    else{
        return(
            <div className='menuC darkmen'>
                <button><img onClick={openFunc} src={ham} className='lnk '/></button>
                <button><img src={github} className='lnk '/></button>
                <button><img src={ld} className='lnk '/></button>
                <Card num={1} display={true}/>
            </div>
        )
    }
}
export default Men


