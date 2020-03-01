/**
 * Battleships is a game where you guess opponents battleship postion and attack the square
 */

tsize = 5;
turn = 'Player1';
p=0;
randids=[];
randInpId=[];
/**Making a table and assigning cell classes */
function ctabular()
    {
            
            table = document.createElement('table')
            table.setAttribute('border',1)
            table.setAttribute('align','center')
            for(i=1; i<= 5;i++)
                {
                    row = document.createElement('tr')
                    table.appendChild(row)
                    for (j=1; j<=5; j++)
                        {                                       
                            col = document.createElement('td')
                            col.setAttribute('height',35)
                            col.setAttribute('width',35)
                            col.id = `row${i}col${j}` //id eg. row1col1
                            col.addEventListener('click',check)
                            console.log(col.id)
                            row.appendChild(col)
                        }
                }
            document.getElementById('tab').appendChild(table)
    
    }

    function tabular()
    {
            document.getElementById('starting').innerHTML = "Start to place your spaceships (only 5)by tapping any one of the boxes of the lower table"
            table = document.createElement('table')
            table.setAttribute('border',1)
            table.setAttribute('align','center')
            for(i=1; i<= 5;i++)
                {
                    row = document.createElement('tr')
                    table.appendChild(row)
                    for (j=1; j<=5; j++)
                        {                                       
                            col = document.createElement('td')
                            col.setAttribute('height',35)
                            col.setAttribute('width',35)
                            col.id = `row${i}col${j}`
                            col.addEventListener('click',set)
                            row.appendChild(col)
                        }
                }
            document.getElementById('tab1').appendChild(table)
        
    }

ctabular()

function set()
    {

       
        console.log("randinpid is"+randInpId)
        if(this.innerHTML == "<img src='../images/battleship.jpg'>" || p==5)
            {
                return;
            }
        this.innerHTML= "<img src='../images/battleship.jpg'>"
        p=p+1
        console.log(`p is ${p}`)
        if (p==5)
            {pcst();}
        
    }

function pcst()//adding ships to computer's table
    {
        for (i=0;i<5;i++)
            {   
                rand1 = Math.floor(Math.random()*5)+1
                rand2 = Math.floor(Math.random()*5)+1
                randid = `row${rand1}col${rand2}`
                randids.push(randid)
                
            }
        console.log("randids is"+randids)
        document.getElementById('ready').innerHTML = "You're ready to blast the battleships now!Start clicking on any boxes in the upper table"
    }

    function check()
        {
            console.log("User input id is"+this.id) 
            
            for (j=0;j<5;j++)
            
                    {if (this.id == randids[j])
                        {   console.log("matched")
                            this.innerHTML="<img src='../images/destroyed.jpg'>"
                        }
                    }
                
            return;
        }
    