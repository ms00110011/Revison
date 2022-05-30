
let c = 0


const debounce = (fn,delay) => {
    let timer
    return function() {
        // let context = this
        // args = arguments
        clearTimeout(timer)
        timer = setTimeout(()=>{``
            // fn.apply(context,args)
            fn()
        },delay)
    }
}







const getData = () => {
    console.log("Data", c++ )
}

const debounceData = debounce(getData,1000)

