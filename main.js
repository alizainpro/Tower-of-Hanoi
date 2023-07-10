
        var itemsinline1 = ['1','2','3']
        var itemsinline2 = ['','','']
        var itemsinline3 = ['','','']
    
        const numberofmovesdisplay = document.getElementById("numberofmovesentry")
        var placebtn1 = document.getElementById("line1btn")
        var placebtn2 = document.getElementById("line1btn")
        var placebtn3 = document.getElementById("line1btn")
        const disc1 = document.getElementById("1")
        const disc2 = document.getElementById("2")
        const disc3 = document.getElementById("3")
        var selectState = false
        var totalDiscs = [disc1,disc2,disc3]
        var placeBTNs = [placebtn1,placebtn2,placebtn3]
        const line1 = document.getElementById("line1container")
        const line2 = document.getElementById("line2container")
        const line3 = document.getElementById("line3container")
        var selecteddisc = null
        var number_of_moves = totalDiscs.length*placeBTNs.length
        const winSTATE = ["1","2","3"]
        const wonTEXT = document.getElementById("wontext")
        
        function HoldDisc(discid){
            selecteddisc = document.getElementById(discid)
            selecteddisc.setAttribute("isSelected","true")
            selecteddisc.style.background = "green"
            selectState = true
            console.log("DISC "+discid+" Selected!")
            totalDiscs.forEach(discin => {
                if(discin.id == discid){
                    discin.setAttribute("isSelected","true")
                    selectState = true

                }
                else{
                    discin.style.background = "blue"
                    discin.setAttribute("isSelected","false")
                }    
            });
        }
        
        function winCheck(){
            if(itemsinline3[0] == winSTATE[0]){
                if(itemsinline3[1] == winSTATE[1]){
                    if(itemsinline3[2] == winSTATE[2]){
                        alert("U WON!")
                        wonTEXT.style.display = "block"
                    }
                }
            }
        }
        function placeDisc(line){
            console.log(selecteddisc) // Displays the selected disc
            if(selecteddisc == null){ // If any disc is not selected then alert it
                alert("NO DISC SELECTED!")
            }
            else{
                if(number_of_moves == 0){ // If there are no moves left then alert
                    alert("NO MOVES LEFT!")
                }
                else{               
                    if(line == 'line1'){ // If Line is 1 then
                        var selected_disc_container = selecteddisc.getAttribute("disccontainerlinename")
                        if(selected_disc_container == line){
                            alert("YOU CAN'T PLACE THE SAME DISC ON THE SAME LINE!")
                        }
                        else{
                            if(selected_disc_container == "line1"){
                                if((itemsinline1[itemsinline1.indexOf(selecteddisc.id)-1] =="") || (itemsinline1[itemsinline1.indexOf(selecteddisc.id)-1] == undefined)){
                                    line1.appendChild(selecteddisc) // Insert the selected disc!
                                    number_of_moves = number_of_moves - 1
                                    numberofmovesdisplay.innerText = number_of_moves
                                    console.log(number_of_moves)        
                                    selecteddisc.setAttribute("disccontainerlinename","line1")
                                    var currentIndex = itemsinline1.indexOf(selecteddisc.id)
                                    var item_at_fst = itemsinline1[0]
                                    var item_at_snd = itemsinline1[1]
                                    var item_at_thr = itemsinline1[2]
                                    itemsinline1[currentIndex] = ""
                                    

                                    // NEW ENDINGS
                                    if(itemsinline1[2] == ''){
                                        itemsinline1[2] = selecteddisc.id
                                        console.warn("AT LINE 116")
                                    }
                                    else if(itemsinline1[1] == ''){
                                        itemsinline1[1] = selecteddisc.id
                                        console.warn("AT LINE 120")
                                    }
                                    else if(itemsinline1[0] == ''){
                                        itemsinline1[0] = selecteddisc.id
                                        console.warn("AT LINE 124")
                                    }
                                    
                                }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                            else if(selected_disc_container == "line2"){
                                if((itemsinline2[itemsinline2.indexOf(selecteddisc.id)-1] == "") || (itemsinline2[itemsinline2.indexOf(selecteddisc.id)-1] == undefined)){
                                    line1.appendChild(selecteddisc) // Insert the selected disc!
                                    number_of_moves = number_of_moves - 1
                                    numberofmovesdisplay.innerText = number_of_moves
                                    console.log(number_of_moves)        
                                    selecteddisc.setAttribute("disccontainerlinename","line1")
                                    var currentIndex = itemsinline2.indexOf(selecteddisc.id)
                                    var item_at_fst = itemsinline2[0]
                                    var item_at_snd = itemsinline2[1]
                                    var item_at_thr = itemsinline2[2]
                                    itemsinline2[currentIndex] = ""
                                    // NEW ENDINGS
                                    if(itemsinline1[2] == ''){
                                        itemsinline1[2] = selecteddisc.id
                                        console.warn("AT LINE 116")
                                    }
                                    else if(itemsinline1[1] == ''){
                                        itemsinline1[1] = selecteddisc.id
                                        console.warn("AT LINE 120")
                                    }
                                    else if(itemsinline1[0] == ''){
                                        itemsinline1[0] = selecteddisc.id
                                        console.warn("AT LINE 124")
                                    }
                                
                                }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                            else if(selected_disc_container == "line3"){
                                if((itemsinline3[itemsinline3.indexOf(selecteddisc.id)-1] == "") || (itemsinline3[itemsinline3.indexOf(selecteddisc.id)-1] == undefined)){
                                    line1.appendChild(selecteddisc) // Insert the selected disc!
                                    number_of_moves = number_of_moves - 1
                                    numberofmovesdisplay.innerText = number_of_moves
                                    console.log(number_of_moves)        
                                    selecteddisc.setAttribute("disccontainerlinename","line1")
                                    var currentIndex = itemsinline3.indexOf(selecteddisc.id)
                                    var item_at_fst = itemsinline3[0]
                                    var item_at_snd = itemsinline3[1]
                                    var item_at_thr = itemsinline3[2]
                                    itemsinline3[currentIndex] = ""
                                    // NEW ENDINGS
                                    if(itemsinline1[2] == ''){
                                        itemsinline1[2] = selecteddisc.id
                                        console.warn("AT LINE 116")
                                    }
                                    else if(itemsinline1[1] == ''){
                                        itemsinline1[1] = selecteddisc.id
                                        console.warn("AT LINE 120")
                                    }
                                    else if(itemsinline1[0] == ''){
                                        itemsinline1[0] = selecteddisc.id
                                        console.warn("AT LINE 124")
                                    }
                                }
                            }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                        
                    }
                    if(line == 'line2'){ 
                        var selected_disc_container = selecteddisc.getAttribute("disccontainerlinename")
                        if(selected_disc_container == line){
                            alert("YOU CAN'T PLACE THE SAME DISC ON THE SAME LINE!")
                        }
                        else{
                            if(selected_disc_container == "line1"){
                                if((itemsinline1[itemsinline1.indexOf(selecteddisc.id)-1] == "") || (itemsinline1[itemsinline1.indexOf(selecteddisc.id)-1] == undefined)){
                                    line2.appendChild(selecteddisc) // Insert the selected disc!
                                    number_of_moves = number_of_moves - 1
                                    numberofmovesdisplay.innerText = number_of_moves
                                    console.log(number_of_moves)        
                                    selecteddisc.setAttribute("disccontainerlinename","line2")
                                    var currentIndex = itemsinline1.indexOf(selecteddisc.id)
                                    var item_at_fst = itemsinline1[0]
                                    var item_at_snd = itemsinline1[1]
                                    var item_at_thr = itemsinline1[2]
                                    itemsinline1[currentIndex] = ""
                                    // NEW ENDINGS
                                    if(itemsinline2[2] == ''){
                                        itemsinline2[2] = selecteddisc.id
                                        console.warn("AT LINE 116")
                                    }
                                    else if(itemsinline2[1] == ''){
                                        itemsinline2[1] = selecteddisc.id
                                        console.warn("AT LINE 120")
                                    }
                                    else if(itemsinline2[0] == ''){
                                        itemsinline2[0] = selecteddisc.id
                                        console.warn("AT LINE 124")
                                    }

                                }
                                else{
                                    alert("There is a disc above!")
                                }
                            }
                            else if(selected_disc_container == "line2"){
                            if((itemsinline2[itemsinline2.indexOf(selecteddisc.id)-1] == "") || (itemsinline2[itemsinline2.indexOf(selecteddisc.id)-1] == undefined)){
                                line2.appendChild(selecteddisc) // Insert the selected disc!
                                number_of_moves = number_of_moves - 1
                                numberofmovesdisplay.innerText = number_of_moves
                                console.log(number_of_moves)        
                                selecteddisc.setAttribute("disccontainerlinename","line2")
                                var currentIndex = itemsinline2.indexOf(selecteddisc.id)
                                var item_at_fst = itemsinline2[0]
                                var item_at_snd = itemsinline2[1]
                                var item_at_thr = itemsinline2[2]
                                itemsinline2[currentIndex] = ""
                                if(itemsinline2[2] == ''){
                                    itemsinline2[2] = selecteddisc.id
                                    console.warn("AT LINE 116")
                                }
                                else if(itemsinline2[1] == ''){
                                    itemsinline2[1] = selecteddisc.id
                                    console.warn("AT LINE 120")
                                }
                                else if(itemsinline2[0] == ''){
                                    itemsinline2[0] = selecteddisc.id
                                    console.warn("AT LINE 124")
                                }

                            }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                            else if(selected_disc_container == "line3"){
                            if((itemsinline3[itemsinline3.indexOf(selecteddisc.id)-1] == "") || (itemsinline3[itemsinline3.indexOf(selecteddisc.id)-1] == undefined)){
                                line2.appendChild(selecteddisc) // Insert the selected disc!
                                number_of_moves = number_of_moves - 1
                                numberofmovesdisplay.innerText = number_of_moves
                                console.log(number_of_moves)        
                                selecteddisc.setAttribute("disccontainerlinename","line2")
                                var currentIndex = itemsinline3.indexOf(selecteddisc.id)
                                var item_at_fst = itemsinline3[0]
                                var item_at_snd = itemsinline3[1]
                                var item_at_thr = itemsinline3[2]
                                itemsinline3[currentIndex] = ""
                                if(itemsinline2[2] == ''){
                                    itemsinline2[2] = selecteddisc.id
                                    console.warn("AT LINE 116")
                                }
                                else if(itemsinline2[1] == ''){
                                    itemsinline2[1] = selecteddisc.id
                                    console.warn("AT LINE 120")
                                }
                                else if(itemsinline2[0] == ''){
                                    itemsinline2[0] = selecteddisc.id
                                    console.warn("AT LINE 124")
                                }

                            }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                    }
                    }
                    if(line == 'line3'){
                        
                        var selected_disc_container = selecteddisc.getAttribute("disccontainerlinename")
                        if(selected_disc_container == line){
                            alert("YOU CAN'T PLACE THE SAME DISC ON THE SAME LINE!")
                        }
                        else{
                        if(selected_disc_container == "line1"){
                            if((itemsinline1[itemsinline1.indexOf(selecteddisc.id)-1] == "") || (itemsinline1[itemsinline1.indexOf(selecteddisc.id)-1] == undefined)){
                                line3.appendChild(selecteddisc) // Insert the selected disc!
                                number_of_moves = number_of_moves - 1
                                numberofmovesdisplay.innerText = number_of_moves
                                console.log(number_of_moves)        
                                selecteddisc.setAttribute("disccontainerlinename","line3")
                                var currentIndex = itemsinline1.indexOf(selecteddisc.id)
                                var item_at_fst = itemsinline1[0]
                                var item_at_snd = itemsinline1[1]
                                var item_at_thr = itemsinline1[2]
                                itemsinline1[currentIndex] = ""
                                if(itemsinline3[2] == ''){
                                    itemsinline3[2] = selecteddisc.id
                                    console.warn("AT LINE 116")
                                }
                                else if(itemsinline3[1] == ''){
                                    itemsinline3[1] = selecteddisc.id
                                    console.warn("AT LINE 120")
                                }
                                else if(itemsinline3[0] == ''){
                                    itemsinline3[0] = selecteddisc.id
                                    console.warn("AT LINE 124")
                                }

                            }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                        else if(selected_disc_container == "line2"){
                            if((itemsinline2[itemsinline2.indexOf(selecteddisc.id)-1] == "") || (itemsinline2[itemsinline2.indexOf(selecteddisc.id)-1] == undefined)){
                                line3.appendChild(selecteddisc) // Insert the selected disc!
                                number_of_moves = number_of_moves - 1
                                numberofmovesdisplay.innerText = number_of_moves
                                console.log(number_of_moves)        
                                selecteddisc.setAttribute("disccontainerlinename","line3")
                                var currentIndex = itemsinline2.indexOf(selecteddisc.id)
                                var item_at_fst = itemsinline2[0]
                                var item_at_snd = itemsinline2[1]
                                var item_at_thr = itemsinline2[2]
                                itemsinline2[currentIndex] = ""
                                if(itemsinline3[2] == ''){
                                    itemsinline3[2] = selecteddisc.id
                                    console.warn("AT LINE 116")
                                }
                                else if(itemsinline3[1] == ''){
                                    itemsinline3[1] = selecteddisc.id
                                    console.warn("AT LINE 120")
                                }
                                else if(itemsinline3[0] == ''){
                                    itemsinline3[0] = selecteddisc.id
                                    console.warn("AT LINE 124")
                                }

                            }
                            else{
                                alert("There is a disc above!")
                            }
                        }
                        else if(selected_disc_container == "line3"){
                            if((itemsinline3[itemsinline3.indexOf(selecteddisc.id)-1] == "") || (itemsinline3[itemsinline3.indexOf(selecteddisc.id)-1] == undefined)){
                                line3.appendChild(selecteddisc) // Insert the selected disc!
                                number_of_moves = number_of_moves - 1
                                numberofmovesdisplay.innerText = number_of_moves
                                console.log(number_of_moves)        
                                selecteddisc.setAttribute("disccontainerlinename","line3")
                                var currentIndex = itemsinline3.indexOf(selecteddisc.id)
                                var item_at_fst = itemsinline3[0]
                                var item_at_snd = itemsinline3[1]
                                var item_at_thr = itemsinline3[2]
                                itemsinline3[currentIndex] = ""
                                if(itemsinline3[2] == ''){
                                    itemsinline3[2] = selecteddisc.id
                                    console.warn("AT LINE 116")
                                }
                                else if(itemsinline3[1] == ''){
                                    itemsinline3[1] = selecteddisc.id
                                    console.warn("AT LINE 120")
                                }
                                else if(itemsinline3[0] == ''){
                                    itemsinline3[0] = selecteddisc.id
                                    console.warn("AT LINE 124")
                                }

                            }
                            else{
                                alert("There is a disc above!")
                            }
                        }}
                    }
            }
            }
            winCheck()
            
        }
