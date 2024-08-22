let done=document.querySelector(".done")

let test =document.querySelectorAll(".cord.me-3");

let showImg =document.querySelector("#showImg");

let delet=document.querySelector(".delete");

let add=document.querySelector(".add");

let content=document.querySelector(".content");

let shodo=document.querySelector(".shodo");

let marka1 =document.querySelector(".marka1")
let name1 =document.querySelector(".name1")
let price1 =document.querySelector(".price1")

let number =document.querySelector(".number")


let cont;

if (delet){
    delet.onclick=()=>{
        content.style.display="none";
        shodo.style.display="none";
    };
    add.onclick=()=>{;
        content.style.display="none";
        shodo.style.display="none";;
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        number.innerHTML=arr.length
        addInCart()
    };
}

let arr;
if (localStorage.products){
    arr=JSON.parse(localStorage.products);
    number.innerHTML=arr.length

}else {
    arr=[]
}
test.forEach(el=>{
    el.onclick=()=>{
        let parent=document.getElementById(`${el.id}`)
        let text=parent.children[1]
        let marka=text.children[0]
        let name=text.children[1].innerHTML
        let pPrice=text.children[3]
        let price=pPrice.children[0].innerHTML
        marka1.innerHTML = marka.innerHTML
        name1.innerHTML  = name
        price1.innerHTML = price
        showImg.src=`image/chart (${el.id}).jpg`
        content.style.display="block";
        shodo.style.display="block";

        let data={
            img:`image/chart (${el.id}).jpg`,
            marka:marka1.innerHTML,
            name:name,
            price:price1.innerHTML,
        }
        arr.push(data)
        localStorage.setItem("products",JSON.stringify(arr))
    }
})
function addInCart(){
    for(let i=0;i<arr.length;i++){
        let table =`
        <div class="cord ">
            <div class="imgCart mt-5">
                <img src="${arr[i].img}" alt="" class="imgInCart">
            </div>
            <div class="textCart">
                <h1 class="mb-5">Price : <span class="Price">${arr[i].price}</span></h1>
                <h1 class="mb-5">Name : <span class="Name">${arr[i].name}</span></h1>
                <h1 class="mb-5">Marka : <span class="Marka">${arr[i].marka}</span></h1>
            </div>
        </div>`
    }
}