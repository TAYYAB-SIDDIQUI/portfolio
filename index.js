    let count=0
    function Pycer(){ 
        if (count%2==0){
            document.getElementById('pycerinfo').innerHTML=`<img src="static/Siddiqui tayyab - Python.png" style="height:300px; width:550px;">`
        }
        if (count%2!=0){
            document.getElementById('pycerinfo').innerHTML=``
        }
        count=count+1
    }
    let count2=0
    function MLcer(){ 
        if (count2%2==0){
            document.getElementById('mlcerinfo').innerHTML=`<img src="static/Siddiqui tayyab - Intro to Machine Learning.png" style="height:300px; width:100%;">`
        }
        if (count2%2!=0){
            document.getElementById('mlcerinfo').innerHTML=``
        }
        count2=count2+1
    }
    let count3=0
    function DAcer(){ 
        if (count3%2==0){
            document.getElementById('dacerinfo').innerHTML=`<img src="static/Certificate.jpg" style="height:300px; width:100%;">`
        }
        if (count3%2!=0){
            document.getElementById('dacerinfo').innerHTML=``
        }
        count3=count3+1
    }
    let count4=0
    function AFcer(){ 
        if (count4%2==0){
            document.getElementById('afcerinfo').innerHTML=`<img src="static/tayyab analytics framrwork.png" style="height:300px; width:100%;">`
        }
        if (count4%2!=0){
            document.getElementById('afcerinfo').innerHTML=``
        }
        count4=count4+1
    }
    let count5=0
    function excer(){ 
        if (count5%2==0){
            document.getElementById('excerinfo').innerHTML=`<img src="static/excel_tayyab_certificate.jpg" style=" height:300px; width:100%;">`
        }
        if (count5%2!=0){
            document.getElementById('excerinfo').innerHTML=``
        }
        count5=count5+1
    }
    let count6=0
    function dscer(){ 
        if (count6%2==0){
            document.getElementById('dscerinfo').innerHTML=`<img src="static/e52c187a-c70f-4169-b48b-1ab87bd4a451.jpg" style="height:300px; width:100%;">`
        }
        if (count6%2!=0){
            document.getElementById('dscerinfo').innerHTML=``
        }
        count6=count6+1
    }
    let count7=0
    function datcer(){ 
        if (count7%2==0){
            document.getElementById('datcerinfo').innerHTML=`<img src="static/8a27482e-38e5-4436-b146-4b64a29baa71.jpg" style="height:300px; width:100%;">`
        }
        if (count7%2!=0){
            document.getElementById('datcerinfo').innerHTML=``
        }
        count7=count7+1
    }
    function viewcv(){
        const pdfurl='static/Tayyab siddiqui CV.pdf'
        window.open(pdfurl,'_blank')
    }
    function viewresume(){
        const pdfurl='static/Tayyab Siddiqui DS$DA.pdf'
        window.open(pdfurl,'_blank')
    }