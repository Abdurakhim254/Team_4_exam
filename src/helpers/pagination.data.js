export async function paginate_function(data,size,limit){
    if(size<=0 || limit<=0){
        return "Page raqami yoki o'lchami 0 dan kichik"
    }
    const start=(size-1)*size
    const end=start+size
    return data.slice(start,end)
}