
export default function followersTransform (count) {
    if (count >= 1100){
        return (count/1000).toFixed(2)
    }
    else if(count >= 10000){
        return (count/1000).toFixed(1)
    }
    else {
        return count
    }
}