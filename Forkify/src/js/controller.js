import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // is for polyfilling everything else
import 'regenerator-runtime/runtime'; // is for polyfilling async/await

const controllRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controllRecipe)
);

// window.addEventListener('hashchange', controllRecipe);
// window.addEventListener('load', controllRecipe);
