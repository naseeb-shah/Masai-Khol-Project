var shop_by_category = document.querySelector('#shop_by_category')
var category = document.querySelector('#category')
var sub_category = document.querySelector('#sub_category')

var user_drop_down = document.querySelector('#user_drop_down')
var user_drop_down2 = document.querySelector('#user_drop_down2')
var user = document.querySelector('#user')

var user_flag = false

user.addEventListener('click',() => {
    if(user_flag == false){
        user_drop_down.style.display = 'flex'
    }else{
        user_drop_down2.style.display = 'block'
    }
})

function list_category() {
    var arr = ["Mother's Day", "For the Home", "<a href='/Masai-Khol-Project/womenProduct.html' style='text-decoration:none;color:black;'>Women</a>", "Women's Plus Size", "Juniors", "<a href='/Masai-Khol-Project/mens_section.html' style='text-decoration:none;color:black;'>Men</a>", "Men's Big & Tall",
        "Shoes", "Kids &Toys", "Baby", "Outdoor Living", "Bed &Bath", "Furniture & Decor", "Jewelry & Accessories",
        "Active & Wellness", "Beauty I SEPHORA", "Sports Fan", "New & Trending", "Diversity, Inclusion&Belonging",
        "Sale & Clearance"]

    arr.forEach((element, i) => {
        var div = document.createElement('div')
        div.setAttribute('id','hov'+i)
        var content =
            `
            <h4>${element}</h4>
         `
        div.innerHTML = content
        category.append(div)
        var hov = document.querySelector('#hov' + i)
        hov.addEventListener('mouseover', () => {
            sub_category.style.display = 'flex'
        })
        hov.addEventListener('mouseleave',() => {
            sub_category.style.display = 'none'
        })
    });
}

list_category()

shop_by_category.addEventListener('click',() =>{
    category.style.display = 'block'
})

window.addEventListener('mouseup', function (e) {
    if (e.target != category && e.target.parentNode != category) {
        category.style.display = 'none';
    }
    if (e.target != user_drop_down && e.target.parentNode != user_drop_down) {
        user_drop_down.style.display = 'none';
    }

    if (e.target != user_drop_down2 && e.target.parentNode != user_drop_down2) {
        user_drop_down2.style.display = 'none';
    }
});
