/*global $*/

$(document).ready(function() {
    var period = false;
    
    function periodInsert(data){
        if (!period){
            $("#display").append(data);
            period = true;
        }
    }
    
    function periodCheck(data){
        if (period == true){
            var isTrue = data.indexOf(".");
            if (isTrue == -1){
                period = false;
            }
        }
    }
    
    function setZero(){
        $("#display").html(0);
        period = false;
    }
    /*
    function clear(){
        $("#display").empty();
    }
    */
    
    function displayData(data){
        var currentStr = $("#display").html();
        if (currentStr == "0"){
            if (data != "0" ){
                $("#display").html(data);
            }

        }
        else{
            $("#display").append(data);    
        }
    }
    
    function removeOne(data){
        if (data == ""){
            setZero();
        }
        else{
            $("#display").html(data);
            periodCheck(data);
        }
    }
    
    
    $("#clear").click(function(){
       setZero();
    });
    
    $(".number").click(function(){
        //alert($(this).html());
        var str = $(this).html();
        displayData(str);  
    });
    
    $("#period").click(function(){
        var str = $(this).html();
        periodInsert(str);
    });
    
    $("#back").click(function(){
       var str = $("#display").html();
       console.log(str);
       str = str.slice(0, -1);
       console.log(str);
       removeOne(str);
       
    });
    
    
    
    
    
    
});


