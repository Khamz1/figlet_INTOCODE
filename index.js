import figlet from "figlet";

figlet("INTOCODE" , function(err, data){
    if(err){
        console.log("SOmething went wrong...")
        console.dir(err);
        return;

    }
    console.log(data)
})