import rerender from './render';

let State = {
    DialogState: {
        Dialogs: [
            { id: 1, dialogName: "Sergey" },
            { id: 2, dialogName: "Alesya" },
            { id: 3, dialogName: "Shusha" },
            { id: 4, dialogName: "Valentina" },
            { id: 5, dialogName: "Vladimir" }
        ],

        Messages: [
            { id: 1, message: "Hi" },
            { id: 1, message: "How are you" },
            { id: 1, message: "Buy" },
            { id: 1, message: "No" }
        ],
    },

    ProfileState: {
        Posts: [
            { id: 1, message: "HI, I'm cool hacker=)", countLikes: 100 },
            { id: 2, message: "HI, I'm cool hacker=)", countLikes: 1000 },
            { id: 3, message: "HI, I'm cool hacker=)", countLikes: 10000 },
            { id: 4, message: "HI, I'm cool hacker=)", countLikes: 100000 }
        ]
    }

}

export let addPost = (postMessage) => {
    State.ProfileState.Posts.push({
        id: 5,
        message: postMessage,
        countLikes: 0
    })
    rerender(State);
}


export default State;