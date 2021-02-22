const qBankSFW = [
    {
        question:
            "If you could choose any food to eat for free whenever you want, what would you choose?",
        Id: "1"
    },
    {
        question: 
            "How do you think your best friend would describe you in one word?",
        Id: "2"
    },
    {
        question:
            "If you could travel to any country today, which would you choose?",
        Id: "3"
    },
    {
        question: 
            "What is the wildest thing you've ever done?",
        Id: "4"
    },
    {
        question:
            "What is the biggest thing you'd really hate to be known for?",
        Id: "5"
    }

];
const qBankNSFW = [

];
export default (n = 3) =>
    Promise.resolve(qBankSFW.sort(() => 0.5 - Math.random()).slice(0,n));