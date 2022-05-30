

const hello = () => {
    console.log("hello")
}


const throttler =  (fn,delay) =>  {
    let flag = true
    return function() {
        let context = this
        let args = arguments

        if(flag) {
            fn.apply(context,args)
            flag = false
            setTimeout(()=>{
                flag  = true
            },delay)
        }
    }
}

const throttle = throttler(hello,1000)