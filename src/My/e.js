function longest(s1, s2) {
  let result = [];
    for (let i=0; i<s1.length; i++){
        if(result.indexOf(s1[i])===-1){
            result.push(s1[i]);
        }
    }

    for (let j=0; j<s2.length; j++){
        if(result.indexOf(s2[j])===-1){
            result.push(s2[j]);
        }
}

result = result.map(function(elem){
    return elem = elem.toLowerCase();
});

result = result.sort();
result = result.join('');
}
