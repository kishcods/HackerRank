function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    
    for(let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            alice ++;
        }
        
        else{
            bob++
        }
        
    }
    result = console.log(alice , bob);

    return result;
}

compareTriplets([1,2,3],[4,5,6])