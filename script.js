// notif-card unread 
// 
//  id=""

//All Const

const mark_all = document.getElementById("mark_all");
const unReadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notification")
unread.innerText = unReadMessages.length;


unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newMessage = document.querySelectorAll(".unread");
        unread.innerText = newMessage.length;
    })
})

// notif_cards.forEach((card) => {
//     notif_cards.addEventListener("click", () => {
//         card.classList.remove("unread")
//     })
//     // const newMessage = document.querySelectorAll(".unread");
//     notification.innerText = notif_cards_unread.length;
// })
// // remove unread class from all notification

mark_all.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("unread");
    })
    const newMessage = document.querySelectorAll(".unread");
        unread.innerText = newMessage.length;
})