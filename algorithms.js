//  algorytm poslidovnogo rozfarbovuvanna - consistent painting algorithm (cp_a)

function bubbleSortConcept1(otvet) {
    for (let j = otvet.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (otvet[i] > otvet[i + 1]) {
          let temp = otvet[i]
          otvet[i] = otvet[i + 1]
          otvet[i + 1] = temp
        }
      }
    }
    return otvet
  }

function cp_a(connections_ar, size){
    //i dvuhmernij so svyazyami mezhdu vershinami(connections_ar) - array of connections
    
    let len = connections_ar.length
    let Original_indexes = new Array()
    //massiv s nomerami(indexami) vershin - ya hudozhnik, ya tak vizhu
    let colorsVershin = new Array()
    //massiv dlya processa pokrakski
    let StepeniVershin = new Array()
    //massiv so stepenyami vershin
    for (i=0;i<len;i++){
        Original_indexes[i]=i
        colorsVershin[i]=0
        StepeniVershin[i]=0
    }
    for (i=0;i<len;i++){
        for (j=0;j<len;j++){
            if (connections_ar[i][j]===1){
                StepeniVershin[i]++
            }
        }
    }
    // console.log("do sortirovki")
     //console.log(StepeniVershin)
     //console.log(connections_ar)
    // console.log("do sortirovki")
    // console.log(Original_indexes)
    
    for (i=0;i<len;i++){
        for (j=i+1;j<len;j++){
            if (StepeniVershin[i]<StepeniVershin[j]){
                var arbufp=StepeniVershin[i]
                var arbufc=connections_ar[i]
                var arbufi=Original_indexes[i]

                StepeniVershin[i]=StepeniVershin[j]
                connections_ar[i]=connections_ar[j]
                Original_indexes[i]=Original_indexes[j]

                StepeniVershin[j]=arbufp
                connections_ar[j]=arbufc
                Original_indexes[j]=arbufi
            }
        }
    }
     //console.log("posle sortirovki")
     //console.log(StepeniVershin)
     //console.log(connections_ar)
     //console.log("posle sortirovki")
     //console.log(Original_indexes)

     
    let vseok

// тут стартонуть таймер
let startt = performance.now()

    for(i=1;i<(len+1);i++){
        //i - nomer cveta
        for (j=0;j<len;j++){
            //j-nomer vershini, kotoruju mi proveryaem
            if (colorsVershin[j]===0){
                vseok=1
                for (t=0;t<len;t++){
                    
                    if (connections_ar[j][Original_indexes[t]]===1) {
                        if (colorsVershin[t]===i){
                            vseok=0
                        }
                    }//proveryaem est li svjaz s vershinoj, razukrashenoy v cvet i
                }
                if (vseok===1) {
                    colorsVershin[j]=i
                }    
            }
        }
    }
    let endt=performance.now()
    //тут остановить таймер

    let otvet  = new Array()
    for (i=0;i<len;i++){
        for (j=0;j<len;j++){
            if (i===Original_indexes[j]){
                otvet[i]=colorsVershin[j]
            }
        }
    }
    let tofwork=endt-startt

    const sorted = bubbleSortConcept1(otvet)

    const colorCount = sorted[sorted.length - 1]

    if(size){
        document.getElementById("Original_indexes").style.visibility='hidden'
        document.getElementById("otvet").innerHTML="Amount of Colors="+colorCount
        document.getElementById("timer").innerHTML="timer=\n" +Math.round(tofwork*1000) +'MS'
    }else{
        document.getElementById("Original_indexes").style.visibility='visible'
        document.getElementById("Original_indexes").innerHTML="vershiny="+Original_indexes
        document.getElementById("otvet").innerHTML="otvet="+otvet
        document.getElementById("timer").innerHTML="timer=\n" +Math.round(tofwork*1000) +'MS'
    }
    
}

function up_a(connections_ar,size){
    //i dvuhmernij so svyazyami mezhdu vershinami(connections_ar) - array of connections
    
    let len = connections_ar.length
    let Original_indexes = new Array()
    //massiv s nomerami(indexami) vershin - ya hudozhnik, ya tak vizhu
    let colorsVershin = new Array()
    //massiv dlya processa pokrakski
    let StepeniVershin = new Array()
    //massiv so stepenyami vershin
    let UnPaintableTops = new Array()

    for (i=0;i<len;i++){
        Original_indexes[i]=i
        colorsVershin[i]=0
        StepeniVershin[i]=0
    }
    for (i=0;i<len;i++){
        for (j=0;j<len;j++){
            if (connections_ar[i][j]===1){
                StepeniVershin[i]++
            }
        }
    }
    // console.log("do sortirovki")
    // console.log(StepeniVershin)
    // console.log(connections_ar)
    // console.log("do sortirovki")
    // console.log(Original_indexes)
    
    for (i=0;i<len;i++){
        for (j=i+1;j<len;j++){
            if (StepeniVershin[i]<StepeniVershin[j]){
                var arbufp=StepeniVershin[i]
                var arbufc=connections_ar[i]
                var arbufi=Original_indexes[i]

                StepeniVershin[i]=StepeniVershin[j]
                connections_ar[i]=connections_ar[j]
                Original_indexes[i]=Original_indexes[j]

                StepeniVershin[j]=arbufp
                connections_ar[j]=arbufc
                Original_indexes[j]=arbufi
            }
        }
    }
    //  console.log("posle sortirovki")
    //  console.log(StepeniVershin)
    //  console.log(connections_ar)
    // console.log("posle sortirovki")
    //console.log(Original_indexes)
      

    // тут стартонуть таймер
    let startt=performance.now()
    for(i=1;i<(len+1);i++){
        //i - nomer cveta
        for (kuke=0;kuke<len;kuke++){
            UnPaintableTops[kuke]=0
        }
        for (j=0;j<len;j++){
            //j-nomer vershini, kotoruju mi proveryaem
            if (colorsVershin[j]===0){
                colorsVershin[j]=i
                
                for(n=j+1;n<len;n++){
                    if(connections_ar[j][Original_indexes[n]]===1) {
                        UnPaintableTops[n]=1
                    }
                    
                    
                    if(UnPaintableTops[n]===0 && colorsVershin[n]===0){
                        
                        colorsVershin[n]=i;
                        
                        for(nd=n+1;nd<len;nd++){
                            if(connections_ar[n][Original_indexes[nd]]===1) UnPaintableTops[nd]=1
                        }
                    }
                
                }
                
                break;
            }
            
        }
    }
    let endt=performance.now()
    // тут таймер остановить
    //console.log(colorsVershin)
    let otvet  = new Array()
    for (i=0;i<len;i++){
        for (j=0;j<len;j++){
            if (i===Original_indexes[j]){
                otvet[i]=colorsVershin[j]
            }
        }
    }
    let tofwork=endt-startt
    console.log('2', tofwork%1000, 'MS')
    console.log(otvet)

    
    const sorted = bubbleSortConcept1(otvet)

    const colorCount = sorted[sorted.length - 1]

    

    //maxcvet
    if(size){
        document.getElementById("Original_indexes2").style.visibility='hidden'
        document.getElementById("otvet2").innerHTML="Amount of Colors="+colorCount
        document.getElementById("timer2").innerHTML="timer=\n" +Math.round(tofwork*1000) +'MS'
    }else{
        document.getElementById("Original_indexes2").style.visibility='visible'
        document.getElementById("Original_indexes2").innerHTML="vershiny="+Original_indexes
        document.getElementById("otvet2").innerHTML="otvet="+otvet
        document.getElementById("timer2").innerHTML="timer=\n" +Math.round(tofwork*1000) +'MS'
    }
}
//var tconnections_ar =[[0,1,1,0],[1,0,1,0],[1,1,0,1],[0,0,1,0]]
//up_a(tconnections_ar)