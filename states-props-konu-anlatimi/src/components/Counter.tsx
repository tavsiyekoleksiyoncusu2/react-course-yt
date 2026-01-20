//Binding ekle
//import ekle

const Counter=()=>{
    //Fonksiyonları buraya yazacagız....
    //Counter state ini yaz.
    
    
    const increment=()=>{
        console.log("artırma tıklandı")
    }
    const decrement=()=>{
        console.log("eksiltme tıklandı")
    }
    return(
   <div>
    <h1>Counter{/**Buraya sayac baslıgı gelicek.... */}</h1>

    <div>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>  
    </div>

  </div>  
    )
}

export default Counter;