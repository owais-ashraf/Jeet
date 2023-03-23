let readline = require('readline');
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


    reader.question("Please Enter an Amount for Breakdown : ", amount => {
    console.log(`You have entered ${new Intl.NumberFormat('en-US').format(amount)}`);
        let total = (parseInt(amount/5000))
        console.log("Note(s) of 5000 : ", total);
        amount = amount-(total*5000)
       total = (parseInt(amount/1000))
       console.log("Note(s) of 1000 : ", total);
       amount = amount-(total*1000)
       total = (parseInt(amount/500))
       console.log("Note(s) of 500 : ", total);
       amount = amount-(total*500)
       total = (parseInt(amount/100))
       console.log("Note(s) of 100 : ", total);
       amount = amount-(total*100)
       total = (parseInt(amount/50))
       console.log("Note(s) of 50 : ", total);
       amount = amount-(total*50)
       total = (parseInt(amount/20))
       console.log("Note(s) of 20 : ", total);
       amount = amount-(total*20)
       total = (parseInt(amount/10))
       console.log("Note(s) of 10 : ", total);
       amount = amount-(total*10)
       total = (parseInt(amount/5))
       console.log("Coin(s) of 5 : ", total);
       amount = amount-(total*5)
       total = (parseInt(amount/2))
       console.log("Coin(s) of 2 : ", total);
       amount = amount-(total*2)
       total = (parseInt(amount/1))
       console.log("Coin(s) of 1 : ", total);
    reader.close();
});