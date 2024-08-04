require('dotenv').config()

const Groq = require('groq-sdk');
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const groq = new Groq({apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true});

export async function suggestRecipe(ingredients: string[]) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": "You are an expert dietitian who follows the best cooking techniques. I'll give you a list of all the components and how much of each I have on hand. I want you to make a meal that is full of flavor and nutrients, with an emphasis on protein content and minimal amounts of fat and carbohydrates. The main objective of the food should be to be nutritious and high in protein to aid in muscle growth, with a cooking time of less than thirty minutes. You do not need to use all the ingredients that are available in my pantry. Provide the approximate protein and carbohydrate content of the dish in grams. Do not hallucinate."
      },
      {
        "role": "user",
        "content": `Create a recipe with the ingredients I have in my pantry: ${ingredients.join(', ')}. 
        
        Please format your response in HTML with the following structure:
        
        <div class="recipe">
          <h1 class="recipe-title">[Recipe Name]</h1>
          
          <div class="recipe-metadata">
            <p class="recipe-difficulty">[Difficulty Level]</p>
            <p class="recipe-time">Preparation Time: [Prep Time]</p>
            <p class="recipe-time">Cooking Time: [Cook Time]</p>
            <p class="recipe-servings">Servings: [Number of Servings]</p>
          </div>
          
          <div class="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              [List the required ingredients with required quantity]
            </ul>
          </div>
          
          <div class="recipe-instructions">
            <h2>Instructions</h2>
            <ol>
              [List every step of the cooking process]
            </ol>
          </div>
          
          <div class="recipe-notes">
            <h2>Chef's Notes</h2>
            <p>[Any additional tips, variations, or serving suggestions]</p> 
          </div>
        </div>

        Make sure the dish is creative, use the ingredients efficiently and provide clear instructions. Also, provide the approximate content of protein and carbohydrates in grams of the dish.`
      }
    ],
    "model": "llama-3.1-8b-instant",
    "temperature": 0.3,
    "max_tokens": 1024,
    "top_p": 0.95,
    "stream": false,
    "stop": null
  });

  return chatCompletion.choices[0]?.message?.content || '';
}
