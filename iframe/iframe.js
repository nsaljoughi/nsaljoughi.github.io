// Initialize src of images
window.onload = function () { 
    console.log("Hi there");
    for (let id = 1; id < 10; id++) {
        let image = document.querySelector(`#quest_${id}`);
        console.log(image.src);
        image.src = "Archivio/box-checked.svg";
        console.log(image.src);
    }
};

window.addEventListener('message', function (ev) {
    const datum = (ev.data)
    if (ev.data.msg && ev.data.msg === 'Message') {
        console.log("Message from outside the iframe!!");
        console.log(datum)
    }
    for (let i = 1; i < 10; i++) {
        const id = i;
        const animatedMarker = document.querySelector(`#marker_${id}`);
        const aEntity = document.querySelector(`#quest_${id}`);
        const stats = datum[id]

        // Now, handle source according to stat
        if (stats['stat'] == '1') {
            document.querySelector(`#quest_${id}`).setAttribute('src', 'Archivio/box-checked.svg');
            document.querySelector(`#quest_${id}`).src = 'Archivio/box-checked.svg';
        }
        else if (stats['stat'] == '0') {
            document.querySelector(`#quest_${id}`).setAttribute('src', 'Archivio/box-unchecked.svg');
            document.querySelector(`#quest_${id}`).src = 'Archivio/box-unchecked.svg';
        }

        // Hide/show according to visib
        if (stats['visib'] == '1') {
            document.querySelector(`#quest_${id}`).setAttribute('visible', true);
            document.querySelector(`#quest_${id}`).visible = true;
        }
        else if (stats['visib'] == '0') {
            document.querySelector(`#quest_${id}`).setAttribute('visible', false);
            document.querySelector(`#quest_${id}`).visible = false;
        }
    }
}, false);


AFRAME.registerComponent('click-handler', {
    init: function () {
        const id =  this.el.id.match(/\d+$/)[0];
        const animatedMarker = document.querySelector(`#marker_${id}`);
        const aEntity = document.querySelector(`#quest_${id}`);
        
        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity && animatedMarker.object3D.visible == true) {
                console.log(id);
                window.top.postMessage({
                    'id' : id
                }, "*");
                console.log(aEntity.src);
                if (document.querySelector(`#quest_${id}`).src === 'Archivio/box-checked.svg') {
                    document.querySelector(`#quest_${id}`).setAttribute('src', 'Archivio/box-unchecked.svg');
                    document.querySelector(`#quest_${id}`).src = 'Archivio/box-unchecked.svg';
                    console.log(document.querySelector(`#quest_${id}`).src);
                }
                else {
                    document.querySelector(`#quest_${id}`).setAttribute('src', 'Archivio/box-checked.svg');
                    document.querySelector(`#quest_${id}`).src = 'Archivio/box-checked.svg';
                    console.log(document.querySelector(`#quest_${id}`).src)
                }
            }
            else {
            }
        });
    }
});
