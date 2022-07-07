function roman(num){
    if (num == 'I') return 1;
    if (num == 'V') return 5;
    if (num == 'X') return 10;
    if (num == 'L') return 50;
    if (num == 'C') return 100;
    if (num == 'D') return 500;
    if (num == 'M') return 1000;
    else return -1;
}

function romanToInt(str){
    let r = 0;

    for (let i = 0; i < str.length; i++) {
        let n1 = roman(str.charAt(i));

        if (i + 1 < str.length) {
            let n2 = roman(str.charAt(i + 1));

            if (n1 >= n2) {
                r = r + n1;
            }
            else {
                r = r + n2 - n1;
                i++;
            }
        }
        else {
            r = r + n1;
        }
    }
    return r;
}