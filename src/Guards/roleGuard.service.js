export const roleGuard=(roles)=>{
    return (req,res,next)=>{
        const {role}=req.user
        if(roles.includes(role)){
            next()
        }else{
            res.status(400).send("Permission Denied")
        }
    }
}