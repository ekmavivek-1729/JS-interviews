

function x(sum){
       console.log(sum);
}
function y(n1,n2,p){
       let m=n1+n2;
       p(m);
}
y(5,5,x);