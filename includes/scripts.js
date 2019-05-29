

window.onload = function(){
    var random;
    var size = 50;
    const container = document.getElementById('flex-container');
    var foo = ["Sushi", "Thi", "Italian", "Pizza", "Cheap", "Cocktails", "Beer", "Coffe","Techno", "Live Shows", "Culture", "Party", "Wine", "Movies", "Pool"];
    var words=[];
    const element = document.querySelector('.nextbutt');

    bar = document.querySelector('.progress-bar'),
    counter = document.querySelector('.count'),
    i = 0,
    throttle = 0.4; 
    

    function createCircle(size){
        let newCircle = document.createElement('div');
        newCircle.className = "gCircle";
        newCircle.style.height = `${size}px`;
        newCircle.style.width = `${size}px`;
        let h6 = document.createElement('h6');
        h6.innerHTML = category();
        newCircle.appendChild(h6);
        newCircle.addEventListener('click', () => {
            chosenFunc(newCircle);
            addCircle();
            draw();
        } );
        newCircle.addEventListener('dblclick',function(){this.style.color="red"});
        container.appendChild(newCircle);
    }

    
    function chosenFunc(x){
        console.log(x);
        x.style.color= "white";
        x.style.backgroundColor= "black"
        
    }
    function category() {
        var random = Math.floor(Math.random()*foo.length);
        for(let i=0; i<words.length; i++){
            if(words[i]==foo[random]){
                random = Math.floor(Math.random()*foo.length);
                i=0;
            }
        }
        if(words.length< foo.length){
            words.push(foo[random]);
            return foo[random] ;
        }
    }

    /*function music_category() {
        let foo = ["Techno", "Live Shows", "Colture", "Party", "Under Ground"];
        return sample(foo);
    }
    function food_category() {
        let foo = ["Sushi", "Thi", "Italian", "Pizza"];
        return sample(foo);
    }*/


    function addCircle(){
        if(words.length== foo.length){ 
            element.classList.add('animated', 'bounceIn');
            return; 
        }
        else{
            for( let i=0; i<3; i++){ 
                let circle = createCircle(size);
                size= Math.floor(Math.random() * 80) + 40 ;
            }
        }
    }


    function draw() {
        if(i <= 100) {
            var r = Math.random();
            
            requestAnimationFrame(draw);  
            bar.style.width = i + '%';
            counter.innerHTML = Math.round(i) + '%';
            
            if(r < throttle) { 
                i = i + r;
            }
        } 
        else {
            bar.className += " done";
            document.getElementsByClassName("nextbutt")[0].style.display = "block";
            element.classList.add('animated', 'bounceIn');
    
        }
    }
    
    document.getElementById("startCircle").onClick = addCircle();
    
    
    
//cocktail light box function////////////////////////
    // Get the modal
    var modal = document.getElementById('id01');
            
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    };
//cocktail light box function//////////////////////
   
}