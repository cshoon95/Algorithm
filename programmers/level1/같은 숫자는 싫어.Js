function solution(arr)
{
    var answer = [];
    
    return arr.filter((item,index) => {
        return item !== arr[index+1]
    })
}