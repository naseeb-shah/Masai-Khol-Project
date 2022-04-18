//womenAddToCart.js -
function changeTothisImage(img){
    var single_img=document.querySelector('#single-img');
    single_img.src=img.src;
    // single_img.style.width="100%";
    single_imgdiv=document.querySelector('#single-imgdiv');
    single_imgdiv.style.width="80%";
    }
    
    
    var imgArr=[{url:"../image/5485729_Black_Sun_Trees.webp",name:"BLACK SUN TREES",},      //0
    {url:"../Image/5485729_Purple_Dot_Stripe (1).webp",name:"PURPLE DOT STRIPE"},           //1
    {url:"../Image/5485729_Red_White_Blue_Tie_Dye.webp",name:"RED WHITE BLUE TIE DYE"},      //2                               
    {url:"../Image/5485729_Pink_Geo_Flower.webp",name:"PINK GEO FLOWER"},                //3                                    
    {url:"../Image/5485729_Coral_Medium_Floral.jpg",name:"CORAL MEDIUM FLORAL"},         //4
    {url:"../Image/5485729_Tan_Geo_Ikat.jpg",name:"TAN GEO IKAT"},                   //5
    {url:"../Image/5485729_Coral_Heart.webp",name:"CORAL HEART"},                     //6
    {url:"../Image/5485729_Retro_Floral (3).webp",name:"RETRO FLORAL"},                //7
    {url:"../Image/5485729_Olive_Floral.webp",name:"OLIVE FLORAL"},                     //8
    {url:"../Image/5485729_Light_Purple_Stripe.webp",name:"LIGHT PURPLE STRIPE"},        //9
    {url:"../Image/5485729_White_Stripe.webp",name:"WHITE STRIPE"},                      //10
    {url:"../Image/5485729_Purple_Spaced_Floral.webp",name:"PURPLE SPACED FLORAL"},       //11
    {url:"../Image/5485729_Blue_Tie_Dye.webp",name:"BLUE TIE DYE"},                       //12
    {url:"../Image/5485729_Burgandy_Rust_Floral.webp",name:"BURGANDY RUST FLORAL"},       //13
    {url:"../Image/5485729_Dark_Gray_Mini_Floral.jpg",name:"DARK GRAY MINI FLORAL"},       //14
    {url:"../Image/5485729_Lime_Rugby_Stripe.webp",name:"LIME RUGBY STRIPE"},         //15
    {url:"../Image/5485729_Yellow_Green_Sun.webp",name:"YELLOW GREEN SUN"},         //16
    {url:"../Image/5485729_Khaki_Cactus.webp",name:"KHAKI CACTUS"},            //17
    {url:"../Image/5485729_Orange_Brown_Floral.jpg",name:"ORANGE BROWN FLORAL"}, //18
    {url:"../Image/5485729_Purple_Peach_Tie_Dye.webp",name:"PURPLE PEACH TIE DYE"}, //19
    {url:"../Image/5485729_Bleach_Blue_Tie_Dye.webp",name:"BLEACH BLUE TIE DYE"},   //20
    {url:"../Image/5485729_Indigo.webp",name:"INDIGO"},                                //21
    {url:"../Image/5485729_Burgandy_Rust.webp",name:"BURGANDY RUST"},                 //22
    {url:"../Image/5485729_Dark_Raspberry.webp",name:"DARK RASPBERRY"},              //23
    {url:"../Image/5485729_Light_Pink_Purple.webp",name:"LIGHT PINK PURPLE"},       //24
    {url:"../Image/5485729_Gray_Blue.webp",name:" GRAY BLUE"},                      //25
    {url:"../Image/5485729_Light_Blue.webp",name:"LIGHT BLUE"},                      //26                               
    {url:"../Image/5485729_Red.webp",name:"RED"},                                     //27                              
    {url:"../Image/5485729_Green_Gold.webp",name:"GREEN GOLD"},                      //28
    {url:"../Image/5485729_Light_Gray.webp",name:"LIGHT GRAY"},                     //29
    {url:"../Image/5485729_Black.webp",name:"BLACK"},                              //30
    {url:"../Image/5485729_White.webp",name:"WHITE"},                             //31
    {url:"../Image/5485729_Olive.webp",name:"OLIVE"},                            //32
    {url:"../Image/5485729_Light_Pink_Texture.jpg",name:"LIGHT PINK TEXTURE"},  //33
    {url:"../Image/5485729_Peach.webp",name:"PEACH"},                          //34
    {url:"../image/3090387_Black.jpg",name:"BLACK"},                           //35
    {url:"../Image/5484998_Coral_Heart.webp",name:"CORAL HEART"},              //36
    {url:"../Image/3482291_Teal_Dye_Stripe.webp",name:"TEAL DYE STRIPE"},        //37
    {url:"../Image/5211690_Navy_Spacedye.webp",name:"NAVY SPACEDYE"},             //38
    {url:"../Image/5211690_White_Folk_Floral.webp",name:"WHITE FOLK FLORAL"},     //39
    {url:"../Image/5211690_Navy_White_Stars.webp",name:"NAVY WHITE STARS"},         //40
    {url:"../Image/5211690_Dark_Pink_Dye_Stripe.webp",name:"DARK PINK DYE STRIPE"}, //41
    {url:"../Image/3482291_Red_Cherry.webp",name:"RED CHERRY"},                    //42
    {url:"../Image/4961153_Green.webp",name:"GREEN"},                             //43
    {url:"../Image/5485729_Black.webp",name:"BLACK"},                              //44
    {url:"../Image/5485729_White.webp",name:"WHITE"},                             //45
    {url:"../Image/5485729_Olive.webp",name:"OLIVE"},                            //46
    {url:"../Image/5485729_Light_Pink_Texture.jpg",name:"LIGHT PINK TEXTURE"}, //47
    ]
    localStorage.setItem('imgArr',JSON.stringify(imgArr));
    var productColor=document.querySelector('#colorDECIDER');
    function diffColorImg(index){
        var single_img=document.querySelector('#single-img');
       var firstIn4=document.querySelector('#firstIn4');
      var img = JSON.parse(localStorage.getItem('imgArr'));
      
      img.forEach((pic,idx)=>{
        if(idx===index){
            // console.log("yes");
            single_img.src=pic.url;  
            firstIn4.src=pic.url;
            firstIn4.style.opacity="1";
            productColor.innerText="color:"+" "+pic.name;
        }
      })
    }
    
    
    
    // <!-- INCREMENT DECREMENT QUANTITY -->
    document.querySelector('#increment').addEventListener('click',increment);
    document.querySelector('#decrement').addEventListener('click',decrement);
    var quantityCount=0;
    // if(localStorage.getItem('quantityCount')===null){
    //     quantityCount=0;
    // }
    // else{
    //     quantityCount=localStorage.getItem('quantityCount');
    // }
    document.querySelector("#quantityDisplay").innerText=quantityCount;
    function decrement(){
        if(quantityCount<=0){
            quantityCount=0;
        }
        else{
            quantityCount--;
        }
        // localStorage.setItem('quantityCount',quantityCount);
        document.querySelector("#quantityDisplay").innerText=quantityCount;
    }
    function increment(){
       
            quantityCount++;
    
        // localStorage.setItem('quantityCount',quantityCount);
        document.querySelector("#quantityDisplay").innerText=quantityCount;
        
    }

    

    var cartArr;
    if(localStorage.getItem('cartArr')===null){
        cartArr=[];
    }
    else{
        cartArr=JSON.parse(localStorage.getItem('cartArr'));
    }
  //cart number of product
    if(localStorage.getItem('totalCartProducts')===null){
        totalCartProducts=0;
    }
    else{
        totalCartProducts=localStorage.getItem('totalCartProducts');
    }
    // localStorage.clear("totalCartProducts");
    //totalcart price
    if(localStorage.getItem('totalCartPrice')===null){
        totalCartPrice=0;
    }
    else{
        totalCartPrice=localStorage.getItem('totalCartPrice')
    }
    // localStorage.clear("totalCartPrice");
    function addedInCART(){
        var tlcart= document.querySelector('#totalCartProducts');
        var tlcartPrice=document.querySelector("#totalCartPrice")

    var obj={
        url:document.querySelector('#single-img').src,
        size:document.querySelector('#select').value,
        color:document.querySelector('#colorDECIDER').innerText,
        quantity:document.querySelector("#quantityDisplay").innerText,
        prize:"6.99",
        quantity: quantityCount
        
    }
    cartArr.push(obj);
    var sum=0;
    for(var i=0;i<cartArr.length;i++){
       sum+=(cartArr[i].quantity)*6.99;//price
    }
    


    
    // console.log(obj);
    
    tlcart.innerText=cartArr.length;
    tlcartPrice.innerText="$"+Math.round(sum);    //Math.round(6.99*cartArr.length)
    localStorage.setItem('cartArr',JSON.stringify(cartArr));
    localStorage.setItem('totalCartProducts',cartArr.length);
    localStorage.setItem('totalCartPrice', Math.round(sum));
    
    alert("congratulation!! Product added to cart");
    }
    //  console.log(localStorage.getItem('cartArr'));

    // footer wala js
    document.querySelector('#top').addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })




    function checkoutPAGE(){
        window.location.href="./login.html";
    }



//onload event

    window.addEventListener('load', (event) => {
        console.log('page is fully loaded');
        if(localStorage.getItem('totalCartProducts')===null){
            totalCartProducts=0;
        }
        else{
            totalCartProducts=localStorage.getItem('totalCartProducts');
        }
        //totalcart price
        if(localStorage.getItem('totalCartPrice')===null){
            totalCartPrice=0;
        }
        else{
            totalCartPrice=localStorage.getItem('totalCartPrice')
        }
        console.log(totalCartPrice)
        
        var tlcart= document.querySelector('#totalCartProducts');
        var tlcartPrice=document.querySelector("#totalCartPrice");
        tlcart.innerText=totalCartProducts;
        tlcartPrice.innerText="$"+totalCartPrice;
    
    
      });