const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchItem(data.meals));

}

const displaySearchItem = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick ="loadMealDetail('${meal.idMeal}')" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));

}

const displayMealDetails = mealDetails => {
    const mealDetail = document.getElementById('meal-details');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${mealDetails.strMealThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${mealDetails.strMeal}</h5>
                    <p class="card-text">${mealDetails.strInstructions}</p>
                    <a href="${mealDetails.strYoutube}" class="btn btn-primary">Button</a> 
                </div>
            </div>
        </div>
    </div>
    
    `;
    mealDetail.appendChild(div);
}