function solution(files) {
  const REGEX = /^([^0-9]+)(\d{1,5})(.*)$/i;
  return files.sort((a,b)=>{
    const [,stringH_A, numH_A] = a.match(REGEX);
    const [,stringH_B, numH_B] = b.match(REGEX);

    const stringRslt = stringH_A.localeCompare(stringH_B, "en", {sensitivity : "base"});
    
    if(stringRslt === 0 ){
      return Number(numH_A) - Number(numH_B);
    }

    return stringRslt
  })
  
}