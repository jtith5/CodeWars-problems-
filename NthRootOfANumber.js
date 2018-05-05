function root(x, n) {
   let r = 0;
   n = 1/n;
   console.log('n = ' + n);

   r = Math.pow(x,n);

   console.log('r = ' + r);

   return r;
}

root(4,2);
root(8, 3);
root(256, 4);
root(9, 2);