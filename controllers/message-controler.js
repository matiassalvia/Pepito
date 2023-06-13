const sendMessage=(req,res)=> {
    const mesage=req.params.message;
    res.send(`tu mensage es ${mesage}`)

}
export default sendMessage;