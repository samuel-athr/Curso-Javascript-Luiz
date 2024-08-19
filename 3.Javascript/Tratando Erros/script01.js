const somar = (n1 , n2) => {
    if (typeof n1 != 'number' || typeof n2 != 'number'){
        throw new Error ('Utilize números')
    }

    return n1 + n2
}

try{
    console.log(somar('1','2'));
    console.log(somar(1,2));
} catch (error) {
    // console.log(error);
    console.log("ERRO");
}

