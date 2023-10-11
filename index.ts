import inquirer from "inquirer";

const start = await inquirer.prompt({
    name: "option",
    type: 'list',
    choices: ['Play', 'Exit'],
    message: 'Select Do you Want'
});
let score: number = 0
if (start.option == 'Play') {
    while (true) {
        const answer = await inquirer.prompt({
            name: 'reply',
            type: 'number',
            message: 'Please Enter Number Between 0 to 9.'
        });
        console.log(answer.reply);
        let number: number = Math.floor(Math.random() * 10);
        if (answer.reply === number) {
            console.log("Your answer is correct");
            score++
            console.log(`Your score is ${score} `);
        } else if (answer.reply > 10) {
            console.log(`'Please Enter a Valid Number`);
        } else {
            console.log("Your answer is incorrect");

        }

    }


} else if (start.option == 'Exit') {
    console.log('Exit The Game ');

}

