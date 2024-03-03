let groceries = [];

// checking if groceries object already exist exist in browser and if it does then replace its values with groceries above variable....
if (localStorage.getItem('groceries') != null){
    let storedGroceries  = localStorage.getItem('groceries');
    groceries = JSON.parse(storedGroceries);
}
let field_visible = false;

function add_groceries(){
    let grocery_name = document.querySelector('#name-grocery').value;
    let grocery_date = document.querySelector('#date-grocery').value;
    let grocery_data = {
        name: grocery_name,
        date: grocery_date
    };
    groceries.push(grocery_data)
    localStorage.setItem('groceries', JSON.stringify(groceries));
    load_groceries();


}



function load_groceries(){
    if (localStorage.getItem('groceries') != null){
        console.log("It is running...")
        let storedGroceries  = localStorage.getItem('groceries');
        groceries = JSON.parse(storedGroceries);
        console.log("Groceries retrieved...",groceries)
    }
    let groceries_div2 = document.querySelector('.groceries-div');
    let full_html = '';
    let total_data = [];
    for (let i = 0; i<groceries.length; i++){
        const html =`
    <div class="grocery-item">
            <div class="grocery-date">${groceries[i]["date"]}</div>
        <div class="grocery-name">
            <span id="name-span${i}">${groceries[i]['name']}</span>
            <div class="grocery_name_div${i}" style="display: none;">
                <input type="text" style="width: 90%;" class="grocery_name_input${i}"><br>
                <button onclick="
                const new_value = document.querySelector('.grocery_name_input${i}').value;
                groceries[${i}]['name'] = new_value;
                localStorage.setItem('groceries', JSON.stringify(groceries));
                load_groceries();
                ">Replace</button>
            </div>
        </div>
    </div>
        
        <div class="modify-grocery">
            <div class="edit-grocery">
                <button onclick="document.querySelector('#name-span${i}').style.display='none'; 
                document.querySelector('.grocery_name_div${i}').style.display = 'inline-block'; 
                " class="edit-button">
                    <img class="edit-icon" src="images/edit-icon.png" alt="">
                </button>
            </div>
            
            <div class="delete-grocery">
                <button onclick="groceries.splice(${i},1);
                localStorage.setItem('groceries', JSON.stringify(groceries));
                load_groceries(); " class="delete-button">
                    <img class="delete-icon" src="images/delete-icon2.png" alt="">
                </button>
            </div>
        </div>
        `
        full_html+=html;

    }
    document.querySelector('.groceries-div').innerHTML = full_html;

}

function toggle_field(){
    tooltip_field = document.querySelector('.tooltip-field')
    if (field_visible){
        tooltip_field.style.height = '0px';
        field_visible = false;
    }
    else{
        tooltip_field.style.height = '50%';
        field_visible = true;
    }
}
function edit_grocery(grocery3){
    console.log(groceries.indexOf(grocery3))
}

function delete_grocery(grocery3){
    console.log("U tried to delete a grocery ...")
}











