var n=[];
let k;
let positionLeft;
var htmlSave;
let position1 
let position2
let position3
let left // declaring variables to use further
$(document).ready(function () {
    // breakpoints.... with certain class data attributes are assigned, 
    $(`.bigcrunch`).attr("data-crunch", "big");
    $(`.mediumcrunch`).attr("data-crunch", "medium");
    $(`.smallcrunch`).attr("data-crunch", "small");
    // the html element of all superparents class inside z saved as an object inside z
    let z = $(`body`).find(`.superParent`);
    console.log(z)
    // for loop the create same number of [true,true] array elemnt as object length of z
    for(let m = 0;m< z.length;m++){
         n.push([true,true])

    }
    console.log(n)
    // initiating for loop to publish html componenets in order
    for(let m = 0;m< z.length;m++)
 {   
     // breakpoint attribute value is stored inside crunch
    var crunch = $(`#${z[m].id}`).attr("data-crunch");
        console.log(crunch);
        // widthNeed takes values according to varrying data-crunch's values.
        let widthNeed = (crunch=="big")? 1000:((crunch=="medium")?800:((crunch=="small")?650:560));
        
        // storing html inside .dandelion1
        htmlSave= $(`#${z[m].id}`).find(`.dandelion1`).html();
    
    // storing width of the window
    k = $(window).width(); 

    //declaring a function bullock()
        function bullock(){
            // initiating for loop because we want to publish same seachbar in both part1 and part2 container 
            for(let i=1;i<=2;i++)
            // if the part(i) container has searchbar value in datat-element attr
            {if($(`#${z[m].id}`).find(`.part${i}`).attr("data-element")=="searchbar")
            
            // if width is lower than 855px
            {if(k < 855){
            
           // append certain icon in part(i) 
            $(`#${z[m].id}`).find(`.part${i}`).append(`<div  class="fa-1x pi2 search">
            <i class="fas fa-search"></i></div></div>`);
            
            // remove form class container
            $(`#${z[m].id}`).find(`.form`).remove();

            // searchbar can be seen in sliding container 
            $(`#${z[m].id}`).find('.searchdropdown').html(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Search" class="font-sz searchin">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);

        }
        else{

            // else put normal seachbar
            $(`#${z[m].id}`).find(`.part${i}`).prepend(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Search" class="font-sz searchin">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);
        // remove search class container
        $(`#${z[m].id}`).find(`.search`).remove();
        }}
        // loop ends
        
        // if dtat-element has emailpass value in part(i)
        // for email-password input 
        if($(`#${z[m].id}`).find(`.part${i}`).data("element")== "emailpass"){
            // if condition k is less than widthNeed
            if(k < widthNeed){
                // certain icon append
                $(`#${z[m].id}`).find(`.part${i}`).append(`<div  class="fa-1x pi2 search">
                <i class="fas fa-eye"></i></div></div>`);

                // form class container remove
                $(`#${z[m].id}`).find(`.form`).remove();
                // putting email and password input in sliding container
                $(`#${z[m].id}`).find('.searchdropdown').html(`<div class ="betawe"><form class="form " style="padding: 2px;">
                <input style="height:30px;font-family: 'IBM Plex Mono', monospace;" type="text" name="firstname" value="Email" class="font-szemail2 emailin">
                    
            </form>
            <form class="form" style="padding: 2px;">
            <input type="text" name="firstname" value="Password" class="font-szemail2 emailin" style="height:30px;font-family: 'IBM Plex Mono', monospace;">
        </form>
        <button class="fa-1x buttonheightsubmit1" style="height:30px;font-family: 'IBM Plex Mono', monospace;">Submit</button>
        </div>
        `);
            }
            else{
                
                // more than widthNeed => putting email password input in p(i)
                $(`#${z[m].id}`).find(`.part${i}`).prepend(`<form class="form formempass" style="padding: 10px;">
                <input type="text" name="firstname" value="Email" class="font-szemail emailin" style="font-family: 'IBM Plex Mono', monospace;">
                    
                 </form><form class="form formempass" style="padding: 10px;">
                <input type="text" name="firstname" value="Password" class="font-szemail searchin" style="font-family: 'IBM Plex Mono', monospace;">
                <button class="fa-1x buttonheightsubmit">Submit</button></form>
            `);
            // removing search container
            $(`#${z[m].id}`).find(`.search`).remove();
            }
        }
       }
    } 
    // initaiting bullock function
    bullock()
    
    
        // decaring function deadlockMin()
       function deadlockMin(){
            
        
           
    // if condition k is less than widthNeed
            if(k< widthNeed){
                // for loop to work on both part1 and part 2 container
               for(let i=1;i<=2;i++)
                {
                    // if part(i) contains icon value of doomsday data
                    if($(`#${z[m].id}`).find(`.part${i}`).attr("data-doomsday")=="icon")
                    
                    // putting an icon inside part(i) container
                    {$(`#${z[m].id}`).find(`.part${i}`).prepend(`<div  class="fa-1x menudrop" style="padding: 0px 20px;" >
               <i class="fas fa-caret-square-down" data-fa-transform="grow-3"></i>
           </div>`);
        }
        

        } 
             // dandelion1 loses its innter html
               $(`#${z[m].id}`).find(`.dandelion1`).html(``);
               
             // menudropdown gets the html saved in htmlSave  
               $(`#${z[m].id}`).find(`.menudropdown`).html(`${htmlSave}`); 

              // in that same menudropdown's pad class removes ti class and add bi class 
                $(`#${z[m].id}`).find(`.menudropdown`).children(`.pad`).addClass("bi").removeClass("ti")

            }
            else{

                // menudrop class container gets removed
                $(`#${z[m].id}`).find(`.menudrop`).remove();
                
                // dandelion1 get htmlSave's html
                $(`#${z[m].id}`).find(`.dandelion1`).html(`${htmlSave}`); 

                // dandelion1's pad class removes ti class and add bi class 
                $(`#${z[m].id}`).find(`.dandelion1`).children(`.pad`).addClass("ti").removeClass("bi")


            }
            
        }

        // calling deadlockMin()
        deadlockMin()

        // sliding down and up part with clicking of the dropdown main-menu of the 
    $(`#${z[m].id}`).find(`.menudrop`).click(function () { 
        if(n[m][0]==true)
        {$(`#${z[m].id}`).find(`.menudropdown`).animate({height:"180px"});
        n[m][0] = false  
        console.log(n[m][0])}
        else { 
        $(`#${z[m].id}`).find(`.menudropdown`).animate({height:"0px"});
        $(`#${z[m].id}`).find(`.dropdowndrop`).slideUp();
        n[m][0]= true;
     }
    });
 
   // sliding up and down of the search container
    $(`#${z[m].id}`).find(`.search`).click(function () { 
        if(n[m][1]==true)
        {
            if($(`#${z[m].id}`).find(`.part2`).data("element")== "emailpass" || $(`#${z[m].id}`).find(`.part1`).data("element")== "emailpass" )
            { $(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"150px"});
        n[m][1] = false  
        console.log(n)}
        else{
            $(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"47px"});
        n[m][1] = false  
        console.log(n)
        }
    }
        else { 
        $(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"0px"});
        n[m][1]= true;
     }
    });

    //if window resizes every slide down becomes slide up..returns to default position 
     $(window).resize(function () { 
        $(`#${z[m].id}`).find(`.dropdowndrop`).slideUp();
            $(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"0px"});
            $(`#${z[m].id}`).find(`.menudropdown`).animate({height:"0px"});
            for(let i=0;i<=1;i++){
                if(n[i]==false)
            {
            n[i] = true  
            }
            }
           k = $(window).width();
           // with resize reloading 
           if(k<1400){
            location.reload();
           }
           
           

            console.log(n)
        });
         
        // position of the dropdown menu 
        // if dropdown isnt present inside part(i)
        if($(`#${z[m].id}`).find(`.dropdown-guy`).length !=0)
         {position1 = $(`#${z[m].id}`).find(`.part1`).position();
         position2 = $(`#${z[m].id}`).find(`.dandelion1`).position();
        position3 = $(`#${z[m].id}`).find(`.dropdown-guy`).position();
    
      left= 15+ position1.left + position2.left + position3.left;
    }
      else{
          left= 0;      
        }
      
        
        
        $(`#${z[m].id}`).find(`.dropdowndrop`).css({"position": "relative",
                                "left": `${left}px`});
    
        // deopdown menu slide up and down 
        $(`#${z[m].id}`).find(`.dropdown-guy`).click(function () { 
        $(`#${z[m].id}`).find(`.dropdowndrop`).slideToggle();
        $(this)
              .find('[data-fa-i2svg]')
              .toggleClass('fa-angle-down')
              .toggleClass('fa-angle-right');
        
    });

    // form buttons dont show input in url
    $(`#${z[m].id}`).find(`.buttonheight`).click(function (e) { 
        e.preventDefault();
        
    });
    // if the navbar's superparent container has data=rev's value yes 
    if($(`#${z[m].id}`).data("rev")=="yes"){
        
        // part 1 and part 2 becomes reverse 
        $(`#${z[m].id}`).find(`.parent`).css({"flex-direction": "row-reverse",
        "-webkit-flex-direction": "row-reverse",
        "-moz-flex-direction": "row-reverse",
        "-o-flex-direction": "row-reverse"});
        // setting up dropdown menu's position 
         position1 = $(`#${z[m].id}`).find(`.part1`).position();
      
      position3 = $(`#${z[m].id}`).find(`.dropdown-guy`).position();
         left =(k<widthNeed)?110+position3.left:position1.left + position3.left-80;
        console.log(left);
        $(`#${z[m].id}`).find(`.dropdowndrop`).css({"position": "relative",
                                "left": `${left}px`});
    }
   } 
   
    
    
}); // program ends 
