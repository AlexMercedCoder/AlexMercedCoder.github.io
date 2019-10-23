//added the defer keyword to my script tag, to avoid script pre-loading problems


///////////////////////////////////////
//PROGRAM NAME:
//PROGRAM BY
///////////////////////////////////////


//GLOBAL DATA SETS


const gVals = {



}



// CLASSES





//FUNCTIONS DEFINITIONS

const myFuncs = {

    //////////////////////
    //random number function
    //by Alex Merced
    ////////////////////////
    randNum: (num) => {

        return Math.floor(Math.random()*(num+1));

    },

    ///////////////////
    //random number in a range function
    //by Alex Merced
    ///////////////////

    randRange: (floor,ceiling) => {
        let num = 0;
        while(num < floor || num > ceiling){
            num = randNum(ceiling);

        }
        return num;
    },

    unlockSecret: () => {

        $('header').append(domVals.$secretDiv);

    }
}


//DOM VARIABLES

const domVals = {


    $secretDiv: $('<div>').addClass('secret').html(`
    
    <br><iframe width="40%" height="315" src="https://www.youtube.com/embed/nawRt_xO9U4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p> My name is Alex Merced and I'm a Full Stack Developer who brings a creative and curious outlook to the table along with experience in education, finance, broadcast, retail and politics to contribute unique ideas and perspectives.</p>
    <p>In broadcasting, finance and politics I've been known as an effective educator and communicator whether speaking/training in front of voters, candidates, new hires and managing directors. As a full stack developer I hope to also be a top-tier educator, communicator and a top-tier creator using my ability to learn, adapt and deliver effectively.</p>
    <a href="https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ"><button>Alex Explains CS Concepts</button></a>
    <a href="https://open.spotify.com/show/1kMcquypdIElTu4Nu98XPM"><button>Alex's Web Dev 101 Podcast</button></a>
    <a href="https://git.generalassemb.ly/AlexMerced"><button>Alex's Other Skills</button></a>
    <a href="https://git.generalassemb.ly/AlexMerced"><button>Alex's General Assembly Git</button></a>
    <a href="https://www.linkedin.com/in/alexmerced"><button>LinkedIn</button></a>
    
    `),



}



//EVENT LISTENERS


$('.unlock').on("click", myFuncs.unlockSecret);



//THE PROGRAM
