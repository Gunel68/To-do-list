const input = document.querySelector("input")
const taskList = document.querySelector(".taskList")
const btn = document.querySelector("button")
const img2 = document.querySelector(".delete1")
let li = document.querySelector("li")
let alpha1 = document.querySelector(".alpha1")
let liDiv = document.querySelector("liDiv")
let masssive = [];

function createItem() {
    if (input.value == "") {
        alert("Write todos,please")
    }
    else {
        taskList.style.display = "block";
        const li = document.createElement("li");



        const img = document.createElement("img")
        img.src = "./boz x.svg"
        img.classList.add("img1");
        img.style.marginTop = "0px"
        img.style.position="absolute"
        img.style.right="-23px"
        img.style.paddingBottom="5px"
        img.style.height="18px"
        li.innerText = input.value;
        li.classList.add('scroll');
        li.append(img)
        taskList.append(li)
        li.style.position="relative"
        function canselHover1() {
            event.target.src = "./rengli x.svg"
        }

        function hoverCancel2() {
            event.target.src = "./boz x.svg"
        }


        img.addEventListener("mouseover", canselHover1)

        img.addEventListener("mouseleave", hoverCancel2)
        function removeItem() {
            li.remove();
        }
        let img1 = li.children[0];
        img1.addEventListener("click", removeItem)
        input.value = "";
    }
}
btn.addEventListener("click", createItem)


function deleteInP(event) {
    let div = event.target.parentElement;
    let input = div.children[0];
    input.value = "";
}
img2.addEventListener("click", deleteInP)


function addByEnter() {
    if (event.key == "Enter") {
        createItem()
        event.target.value = "";
    }
}
input.addEventListener("keyup", addByEnter);


function canselHover() {
    event.target.src = "./rengli x.svg"
}

function hoverCancel() {
    event.target.src = "./boz x.svg"
}

let delete1 = document.querySelector(".delete1");

delete1.addEventListener("mouseover", canselHover)

delete1.addEventListener("mouseleave", hoverCancel)



function canselHover1() {
    event.target.src = "./rengli x.svg"
}

function hoverCancel2() {
    event.target.src = "./boz x.svg"
}


img2.addEventListener("mouseover", canselHover1)

img2.addEventListener("mouseleave", hoverCancel2)
let isSorted = false;
let flagReverse = false;
const alpha1Button = document.querySelector('.alpha1');
alpha1Button.addEventListener('mouseover', function() {
    if (flagReverse) {
       alpha1Button.src = "/qara yuxari ox.svg";

    }
    else {
        alpha1Button.src = "/qara asagi ox.svg";

    }
});

alpha1Button.addEventListener('mouseleave', function() {
    if (flagReverse) {
       alpha1Button.src = "/boz yuxari oxu.svg";

    }
    else {
        alpha1Button.src = "/boz asagi ox.svg";

    }
});

alpha1Button.addEventListener('click', function() {
    const listItems = document.querySelectorAll('.taskList li');
    const taskList = document.querySelector('.taskList');

    const itemsArray = Array.from(listItems);
    const sortedItems = itemsArray.sort((a, b) => {
        return a.textContent.localeCompare(b.textContent);
    });

    if (isSorted) {
        sortedItems.reverse();
        isSorted = false;
        alpha1Button.src = "/qara asagi ox.svg"; 
    } else {
        isSorted = true;
        sortedItems.forEach(item => taskList.appendChild(item));
        alpha1Button.src = "/qara yuxari ox.svg"; 
    }

    taskList.innerHTML = '';
    sortedItems.forEach(item => taskList.appendChild(item));
    flagReverse = !flagReverse;

});





