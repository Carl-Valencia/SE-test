function addFields(){
    var field = document.getElementById("field");

        var div = document.createElement("div");
        div.setAttribute("class", "row justify-content-start ml-4 pr-6 mt-2");
        div.setAttribute("id", "newRow");
        field.appendChild(div);

        var divcol = document.createElement("div");
        divcol.setAttribute("class", "col-2");
        div.appendChild(divcol);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "smallrem");
        input.setAttribute("name", "code");
        divcol.appendChild(input);

        var divcol2 = document.createElement("div");
        divcol2.setAttribute("class", "col-4");
        div.appendChild(divcol2);
        var input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("class", "bigrem");
        input2.setAttribute("name", "product");
        divcol2.appendChild(input2);

        var divcol3 = document.createElement("div");
        divcol3.setAttribute("class", "col-2");
        div.appendChild(divcol3);
        var input3 = document.createElement("input");
        input3.setAttribute("type", "text");
        input3.setAttribute("class", "smallrem");
        input3.setAttribute("name", "unit");
        divcol3.appendChild(input3);

        var divcol4 = document.createElement("div");
        divcol4.setAttribute("class", "col-2");
        div.appendChild(divcol4);
        var input4 = document.createElement("input");
        input4.setAttribute("type", "number");
        input4.setAttribute("class", "smallrem");
        input4.setAttribute("name", "quantity");
        divcol4.appendChild(input4);

        var divcol5 = document.createElement("div");
        divcol5.setAttribute("class", "col-2");
        div.appendChild(divcol5);
        var input5 = document.createElement("input");
        input5.setAttribute("type", "text");
        input5.setAttribute("class", "smallrem");
        input5.setAttribute("name", "quantity");
        divcol5.appendChild(input5);
    
}