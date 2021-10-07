// On load, send a message 
window.onload = function () { 
    const arIframe = document.querySelector("iframe");
    const message = {
        msg: 'Message',
        1: {
            visib: 1,
            stat: 0
        },
        2: {
            visib: 1,
            stat: 0
        },
        3: {
            visib: 1,
            stat: 0
        },
        4: {
            visib: 1,
            stat: 0
        },
        5: {
            visib: 1,
            stat: 0
        },
        6: {
            visib: 1,
            stat: 0
        },
        7: {
            visib: 1,
            stat: 0
        },
        8: {
            visib: 1,
            stat: 0
        },
        9: {
            visib: 1,
            stat: 0
        },
        10: {
            visib: 1,
            stat: 0
        }
    }
    arIframe.contentWindow.postMessage(
        message
        , "*");
};

// Send a message to the iframe
document.addEventListener("DOMContentLoaded", () => {
    const arIframe = document.querySelector("iframe");
    const buttons = document.querySelectorAll("button");
    const message = {
        msg: 'Message',
        1: {
            visib: 1,
            stat: 1
        },
        2: {
            visib: 1,
            stat: 1
        },
        3: {
            visib: 1,
            stat: 1
        },
        4: {
            visib: 1,
            stat: 1
        },
        5: {
            visib: 1,
            stat: 1
        },
        6: {
            visib: 1,
            stat: 1
        },
        7: {
            visib: 1,
            stat: 1
        },
        8: {
            visib: 1,
            stat: 1
        },
        9: {
            visib: 1,
            stat: 1
        },
        10: {
            visib: 1,
            stat: 1
        }
    }
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            arIframe.contentWindow.postMessage(
                message
            , "*");
            console.log("Pressed button");
        });
    });
});


// Receive a message from the iframe
window.addEventListener('message', function (ev) {
    const textarea = document.querySelector("textarea");
    const datum = (ev.data)
    textarea.value = " - Clicked on marker " + ev.data.id + " !" + "\n" + textarea.value; 

}, false);

