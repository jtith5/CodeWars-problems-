function automorphic(n) {
    let a = Math.pow(n, 2);
    let stringn = n.toString();
    let stringa = a.toString();
    console.log(a + '  ' + stringn + '   ' + stringa);
    console.log(stringa.substring((stringa.length - stringn.length), stringa.length));
    console.log(stringn);

    if (stringn === stringa.substring((stringa.length - stringn.length), stringa.length))
    {
        return 'Automorphic';
    }
else
    return 'Not!!';


}

automorphic(25);