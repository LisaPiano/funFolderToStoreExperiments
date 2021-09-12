function pyramid (num) {
    let symb = "#";
    console.log(symb);
    for(x = 0; x < num; x++)
    console.log(symb += "#");
}

pyramid(10);