module.exports = function count(s, pairs) {
  let N=1;
  let count=0;
  for(let i=0, len=pairs.length; i<len;i++){
    N*=Math.pow(pairs[i][0],pairs[i][1]);
  }
  if(!isFinite(N) || N>10000000) return 'Number is too large, sorry';
  let gcd = (a, b) => {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
  for(let k=0; k<N;k++){
    for(let j=0,len=s.length;j<len;j++){
      if(s.charAt(j)=='1'){
        if(gcd(k+j,N)!=1){
          break;
        }
      }else{
        if(gcd(k+j,N)==1){
          break;
        }
      }if(j==len-1){
        count++;
      }
    }
  }
  return count%1000000007;
};