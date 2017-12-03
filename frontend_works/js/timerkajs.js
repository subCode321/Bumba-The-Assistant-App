

$(()=>{

    $.get('/profile',(data)=>{
        let dashboard=$('#dashboard');
        let name=data.username;
        let dashHTML;
        let text;
        if(!name){
            text="Please sign in";
            $('#accessGmail').hide();
            $('#logout').hide();
            $('#signIn').show();
            $('#signUp').show();
            dashHTML=`<span class="btn-light btn bg-white align-self-center">
                            ${text} 
                      </span>`
        }else{
            let text=`Hey, ${name}`;
            $('#accessGmail').show();
            $('#logout').show();
            $('#signIn').hide();
            $('#signUp').hide();
            dashHTML=`<span class="btn-light btn bg-white align-self-center">
                            ${text} 
                      </span>
                      <img src="${data.thumbnail}">`;
        }
        dashboard.append(dashHTML);
    });

    let distance = 2700000;
    let x = setInterval(function() {

        distance = distance -1000;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let popcontent = "Time left : " + minutes + " m " + seconds + "s ";
        let clkBTTN=$('#clk-btn');
        clkBTTN.attr('data-content',popcontent);
        if (distance < 0) {
            clkBTTN.attr('data-content',popcontent);
            setTimeout(function(){
                document.getElementById("clk-btn").innerHTML = "go take a walk";},0);
            setTimeout(function(){
                document.getElementById("clk-btn").innerHTML = "starting again in a while";
            },5000);
            setTimeout(function(){
                document.getElementById("clk-btn").innerHTML =  "<i class=\"fa fa-clock-o\">";
                distance = 2700000},6000);
        }
    }, 1000);
    let read_more = document.getElementById("read_more");
    read_more.onclick = function () {
        read_more.style.display = 'none';
        let more_text = document.getElementById("more_text");
        let read_less = document.createElement('a');
        read_less.setAttribute("href", "#less_text");
        read_less.setAttribute('id', 'read_less');
        read_less.innerHTML = "Read Less";
        document.getElementById("readmore").appendChild(read_less);
        more_text.style.display = 'block';
        read_less.onclick = function () {
            more_text.style.display = 'none';
            document.getElementById("readmore").removeChild(read_less);
            read_more.style.display = 'block';
        }
    };

});

