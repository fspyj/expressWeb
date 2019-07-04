module.exports={
    get(name){
        let value=localStorage.getItem(name)
        return value
    }
    ,
    set(name,value)
    {
        localStorage.setItem(name,value)
    },
    remove(name)
    {
        localStorage.removeItem(name)
    }
}