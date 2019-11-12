const Discord = require('discord.js');
const ms = require('ms');
const bot = new Discord.Client()
const prefix = '$';


bot.on('message', message => 
{

    if (message.content === prefix + 'random')
    {

        if (msg != 10000)
        {
            message.channel.send('Commande déjà en cours...')
        }

        let nb = Math.floor(Math.random() * Math.floor(9));
        let nb2 = Math.floor(Math.random() * Math.floor(9));
        let nb3 = Math.floor(Math.random() * Math.floor(9));
        let nb4 = Math.floor(Math.random() * Math.floor(9));
        let nb5 = Math.floor(Math.random() * Math.floor(9));
        let nb6 = Math.floor(Math.random() * Math.floor(9));
        let nb7 = Math.floor(Math.random() * Math.floor(9));
        let nb8 = Math.floor(Math.random() * Math.floor(9));
        let nb9 = Math.floor(Math.random() * Math.floor(9));
        let nb10 = Math.floor(Math.random() * Math.floor(9));
        let nb11 = Math.floor(Math.random() * Math.floor(9));


            let lt = Math.floor(Math.random() * Math.floor(26));

            switch (lt)
            {
                case 0:
                    lt = 'A';
                break;
                case 1:
                    lt = 'A';
                break;
                case 2:
                    lt = 'B';
                break;
                case 3:
                    lt = 'C';
                break;
                case 4:
                    lt = 'D';
                break;
                case 5:
                    lt = 'E';
                break;
                case 6:
                    lt = 'F';
                break;
                case 7:
                    lt = 'G';
                break;
                case 8:
                    lt = 'H';
                break;
                case 9:
                    lt = 'I';
                break;
                case 10:
                    lt = 'J';
                break;
                case 11:
                    lt = 'K';
                break;
                case 12:
                    lt = 'L';
                break;
                case 13:
                    lt = 'M';
                break;
                case 14:
                    lt = 'N';
                break;
                case 15:
                    lt = 'O';
                break;
                case 16:
                    lt = 'P';
                break;
                case 17:
                    lt = 'Q';
                break;
                case 18:
                    lt = 'R';
                break;
                case 19:
                    lt = 'S';
                break;
                case 20:
                    lt = 'T';
                break;
                case 21:
                    lt = 'U';
                break;
                case 22:
                    lt = 'V';
                break;
                case 23:
                    lt = 'W';
                break;
                case 24:
                    lt = 'X';
                break;
                case 25:
                    lt = 'Y';
                break;
                case 26:
                    lt = 'Z';
                break;
            }



            let lt2 = Math.floor(Math.random() * Math.floor(26));

            switch (lt2)
            {
                case 0:
                    lt2 = 'A';
                break;
                case 1:
                    lt2 = 'A';
                break;
                case 2:
                    lt2 = 'B';
                break;
                case 3:
                    lt2 = 'C';
                break;
                case 4:
                    lt2 = 'D';
                break;
                case 5:
                    lt2 = 'E';
                break;
                case 6:
                    lt2 = 'F';
                break;
                case 7:
                    lt2 = 'G';
                break;
                case 8:
                    lt2 = 'H';
                break;
                case 9:
                    lt2 = 'I';
                break;
                case 10:
                    lt2 = 'J';
                break;
                case 11:
                    lt2 = 'K';
                break;
                case 12:
                    lt2 = 'L';
                break;
                case 13:
                    lt2 = 'M';
                break;
                case 14:
                    lt2 = 'N';
                break;
                case 15:
                    lt2 = 'O';
                break;
                case 16:
                    lt2 = 'P';
                break;
                case 17:
                    lt2 = 'Q';
                break;
                case 18:
                    lt2 = 'R';
                break;
                case 19:
                    lt2 = 'S';
                break;
                case 20:
                    lt2 = 'T';
                break;
                case 21:
                    lt2 = 'U';
                break;
                case 22:
                    lt2 = 'V';
                break;
                case 23:
                    lt2 = 'W';
                break;
                case 24:
                    lt2 = 'X';
                break;
                case 25:
                    lt2 = 'Y';
                break;
                case 26:
                    lt2 = 'Z';
                break;
            }


            let lt3 = Math.floor(Math.random() * Math.floor(26));

            switch (lt3)
            {
                case 0:
                    lt3 = 'A';
                break;
                case 1:
                    lt3 = 'A';
                break;
                case 2:
                    lt3 = 'B';
                break;
                case 3:
                    lt3 = 'C';
                break;
                case 4:
                    lt3 = 'D';
                break;
                case 5:
                    lt3 = 'E';
                break;
                case 6:
                    lt3 = 'F';
                break;
                case 7:
                    lt3 = 'G';
                break;
                case 8:
                    lt3 = 'H';
                break;
                case 9:
                    lt3 = 'I';
                break;
                case 10:
                    lt3 = 'J';
                break;
                case 11:
                    lt3 = 'K';
                break;
                case 12:
                    lt3 = 'L';
                break;
                case 13:
                    lt3 = 'M';
                break;
                case 14:
                    lt3 = 'N';
                break;
                case 15:
                    lt3 = 'O';
                break;
                case 16:
                    lt3 = 'P';
                break;
                case 17:
                    lt3 = 'Q';
                break;
                case 18:
                    lt3 = 'R';
                break;
                case 19:
                    lt3 = 'S';
                break;
                case 20:
                    lt3 = 'T';
                break;
                case 21:
                    lt3 = 'U';
                break;
                case 22:
                    lt3 = 'V';
                break;
                case 23:
                    lt3 = 'W';
                break;
                case 24:
                    lt3 = 'X';
                break;
                case 25:
                    lt3 = 'Y';
                break;
                case 26:
                    lt3 = 'Z';
                break;
            }



            let lt4 = Math.floor(Math.random() * Math.floor(26));

            switch (lt4)
            {
                case 0:
                    lt4 = 'A';
                break;
                case 1:
                    lt4 = 'A';
                break;
                case 2:
                    lt4 = 'B';
                break;
                case 3:
                    lt4 = 'C';
                break;
                case 4:
                    lt4 = 'D';
                break;
                case 5:
                    lt4 = 'E';
                break;
                case 6:
                    lt4 = 'F';
                break;
                case 7:
                    lt4 = 'G';
                break;
                case 8:
                    lt4 = 'H';
                break;
                case 9:
                    lt4 = 'I';
                break;
                case 10:
                    lt4 = 'J';
                break;
                case 11:
                    lt4 = 'K';
                break;
                case 12:
                    lt4 = 'L';
                break;
                case 13:
                    lt4 = 'M';
                break;
                case 14:
                    lt4 = 'N';
                break;
                case 15:
                    lt4 = 'O';
                break;
                case 16:
                    lt4 = 'P';
                break;
                case 17:
                    lt4 = 'Q';
                break;
                case 18:
                    lt4 = 'R';
                break;
                case 19:
                    lt4 = 'S';
                break;
                case 20:
                    lt4 = 'T';
                break;
                case 21:
                    lt4 = 'U';
                break;
                case 22:
                    lt4 = 'V';
                break;
                case 23:
                    lt4 = 'W';
                break;
                case 24:
                    lt4 = 'X';
                break;
                case 25:
                    lt4 = 'Y';
                break;
                case 26:
                    lt4 = 'Z';
                break;
            }


            let lt5 = Math.floor(Math.random() * Math.floor(26));

            switch (lt5)
            {
                case 0:
                    lt5 = 'A';
                break;
                case 1:
                    lt5 = 'A';
                break;
                case 2:
                    lt5 = 'B';
                break;
                case 3:
                    lt5 = 'C';
                break;
                case 4:
                    lt5 = 'D';
                break;
                case 5:
                    lt5 = 'E';
                break;
                case 6:
                    lt5 = 'F';
                break;
                case 7:
                    lt5 = 'G';
                break;
                case 8:
                    lt5 = 'H';
                break;
                case 9:
                    lt5 = 'I';
                break;
                case 10:
                    lt5 = 'J';
                break;
                case 11:
                    lt5 = 'K';
                break;
                case 12:
                    lt5 = 'L';
                break;
                case 13:
                    lt5 = 'M';
                break;
                case 14:
                    lt5 = 'N';
                break;
                case 15:
                    lt5 = 'O';
                break;
                case 16:
                    lt5 = 'P';
                break;
                case 17:
                    lt5 = 'Q';
                break;
                case 18:
                    lt5 = 'R';
                break;
                case 19:
                    lt5 = 'S';
                break;
                case 20:
                    lt5 = 'T';
                break;
                case 21:
                    lt5 = 'U';
                break;
                case 22:
                    lt5 = 'V';
                break;
                case 23:
                    lt5 = 'W';
                break;
                case 24:
                    lt5 = 'X';
                break;
                case 25:
                    lt5 = 'Y';
                break;
                case 26:
                    lt5 = 'Z';
                break;
            }



            let lt6 = Math.floor(Math.random() * Math.floor(26));

            switch (lt6)
            {
                case 0:
                    lt6 = 'A';
                break;
                case 1:
                    lt6 = 'A';
                break;
                case 2:
                    lt6 = 'B';
                break;
                case 3:
                    lt6 = 'C';
                break;
                case 4:
                    lt6 = 'D';
                break;
                case 5:
                    lt6 = 'E';
                break;
                case 6:
                    lt6 = 'F';
                break;
                case 7:
                    lt6 = 'G';
                break;
                case 8:
                    lt6 = 'H';
                break;
                case 9:
                    lt6 = 'I';
                break;
                case 10:
                    lt6 = 'J';
                break;
                case 11:
                    lt6 = 'K';
                break;
                case 12:
                    lt6 = 'L';
                break;
                case 13:
                    lt6 = 'M';
                break;
                case 14:
                    lt6 = 'N';
                break;
                case 15:
                    lt6 = 'O';
                break;
                case 16:
                    lt6 = 'P';
                break;
                case 17:
                    lt6 = 'Q';
                break;
                case 18:
                    lt6 = 'R';
                break;
                case 19:
                    lt6 = 'S';
                break;
                case 20:
                    lt6 = 'T';
                break;
                case 21:
                    lt6 = 'U';
                break;
                case 22:
                    lt6 = 'V';
                break;
                case 23:
                    lt6 = 'W';
                break;
                case 24:
                    lt6 = 'X';
                break;
                case 25:
                    lt6 = 'Y';
                break;
                case 26:
                    lt6 = 'Z';
                break;
            }



            let lt7 = Math.floor(Math.random() * Math.floor(26));

            switch (lt7)
            {
                case 0:
                    lt7 = 'A';
                break;
                case 1:
                    lt7 = 'A';
                break;
                case 2:
                    lt7 = 'B';
                break;
                case 3:
                    lt7 = 'C';
                break;
                case 4:
                    lt7 = 'D';
                break;
                case 5:
                    lt7 = 'E';
                break;
                case 6:
                    lt7 = 'F';
                break;
                case 7:
                    lt7 = 'G';
                break;
                case 8:
                    lt7 = 'H';
                break;
                case 9:
                    lt7 = 'I';
                break;
                case 10:
                    lt7 = 'J';
                break;
                case 11:
                    lt7 = 'K';
                break;
                case 12:
                    lt7 = 'L';
                break;
                case 13:
                    lt7 = 'M';
                break;
                case 14:
                    lt7 = 'N';
                break;
                case 15:
                    lt7 = 'O';
                break;
                case 16:
                    lt7 = 'P';
                break;
                case 17:
                    lt7 = 'Q';
                break;
                case 18:
                    lt7 = 'R';
                break;
                case 19:
                    lt7 = 'S';
                break;
                case 20:
                    lt7 = 'T';
                break;
                case 21:
                    lt7 = 'U';
                break;
                case 22:
                    lt7 = 'V';
                break;
                case 23:
                    lt7 = 'W';
                break;
                case 24:
                    lt7 = 'X';
                break;
                case 25:
                    lt7 = 'Y';
                break;
                case 26:
                    lt7 = 'Z';
                break;
            }


            let lt8 = Math.floor(Math.random() * Math.floor(26));

            switch (lt8)
            {
                case 0:
                    lt8 = 'A';
                break;
                case 1:
                    lt8 = 'A';
                break;
                case 2:
                    lt8 = 'B';
                break;
                case 3:
                    lt8 = 'C';
                break;
                case 4:
                    lt8 = 'D';
                break;
                case 5:
                    lt8 = 'E';
                break;
                case 6:
                    lt8 = 'F';
                break;
                case 7:
                    lt8 = 'G';
                break;
                case 8:
                    lt8 = 'H';
                break;
                case 9:
                    lt8 = 'I';
                break;
                case 10:
                    lt8 = 'J';
                break;
                case 11:
                    lt8 = 'K';
                break;
                case 12:
                    lt8 = 'L';
                break;
                case 13:
                    lt8 = 'M';
                break;
                case 14:
                    lt8 = 'N';
                break;
                case 15:
                    lt8 = 'O';
                break;
                case 16:
                    lt8 = 'P';
                break;
                case 17:
                    lt8 = 'Q';
                break;
                case 18:
                    lt8 = 'R';
                break;
                case 19:
                    lt8 = 'S';
                break;
                case 20:
                    lt8 = 'T';
                break;
                case 21:
                    lt8 = 'U';
                break;
                case 22:
                    lt8 = 'V';
                break;
                case 23:
                    lt8 = 'W';
                break;
                case 24:
                    lt8 = 'X';
                break;
                case 25:
                    lt8 = 'Y';
                break;
                case 26:
                    lt8 = 'Z';
                break;
            }


            let lt9 = Math.floor(Math.random() * Math.floor(27));

            switch (lt9)
            {
                case 0:
                    lt9 = 'A';
                break;
                case 1:
                    lt9 = 'A';
                break;
                case 2:
                    lt9 = 'B';
                break;
                case 3:
                    lt9 = 'C';
                break;
                case 4:
                    lt9 = 'D';
                break;
                case 5:
                    lt9 = 'E';
                break;
                case 6:
                    lt9 = 'F';
                break;
                case 7:
                    lt9 = 'G';
                break;
                case 8:
                    lt9 = 'H';
                break;
                case 9:
                    lt9 = 'I';
                break;
                case 10:
                    lt9 = 'J';
                break;
                case 11:
                    lt9 = 'K';
                break;
                case 12:
                    lt9 = 'L';
                break;
                case 13:
                    lt9 = 'M';
                break;
                case 14:
                    lt9 = 'N';
                break;
                case 15:
                    lt9 = 'O';
                break;
                case 16:
                    lt9 = 'P';
                break;
                case 17:
                    lt9 = 'Q';
                break;
                case 18:
                    lt9 = 'R';
                break;
                case 19:
                    lt9 = 'S';
                break;
                case 20:
                    lt9 = 'T';
                break;
                case 21:
                    lt9 = 'U';
                break;
                case 22:
                    lt9 = 'V';
                break;
                case 23:
                    lt9 = 'W';
                break;
                case 24:
                    lt9 = 'X';
                break;
                case 25:
                    lt9 = 'Y';
                break;
                case 26:
                    lt9 = 'Z';
                break;
            }
        
        let msg = 0;
        while (msg === 10000)
        {
            message.channel.send(nb + nb2 + lt + nb3 + nb4 + lt2 + lt3 + lt4 + nb5 + lt5 + nb6 + nb7 + lt6 + nb8 + nb9 + lt7 + lt8 + nb10 + nb11 + lt9);
            msg++
        }


    }



})

bot.login('Token');
