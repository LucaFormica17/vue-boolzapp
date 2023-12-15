const dt = luxon.DateTime;

const {createApp} = Vue;

createApp({
    data(){
        return{
            view_utent: 0,
            add_message: '',
            search: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received',
                            show: false
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            show: false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            show: false
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            show: false
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received',
                            show: false
                        }
                    ],
                }
            ]
            
        }
    },
    
    methods:{
        clickChat(index){
            this.view_utent = index;
        },
        sendMessage(){
            let obj = {
                date: this.loc_Date(),
                message: this.add_message,
                status: 'send',
                show: false
            }
            this.contacts[this.view_utent].messages.push(obj);
                
            let obj_receiv = setTimeout(() => {
                let obj = {
                    date: this.loc_Date(),
                    message: 'ok',
                    status: 'received',
                    show: false
                }
                
                this.contacts[this.view_utent].messages.push(obj);
            }, 1000);
        },
        searchChat(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.search.toLowerCase())){
                    element.visible = true;
                }
                else{
                    element.visible = false;
                }
            });
        },
        loc_Date(){
            let today = dt.now();

            let now = `${today.hour}:${today.minute}`;
            return now;
        },
        deleteMessage(index){
            this.contacts[this.view_utent].messages.splice(index,1);
        },
        visibleDropdown(index){
            this.contacts[this.view_utent].messages[index].show = true;
        },
        hiddenDropdown(index){
            this.contacts[this.view_utent].messages[index].show = false;
        }
    }
}).mount('#app');