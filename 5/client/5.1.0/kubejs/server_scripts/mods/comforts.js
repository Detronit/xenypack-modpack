ServerEvents.recipes(event => {
    // Sleeping Bags / Wool Slabs
    // sleeping bags
    event.forEachRecipe({type: 'minecraft:crafting_shaped', id: /comforts:sleeping_bag_.+/}, recipe => {
        let out = recipe.json.get('result')
        let input = recipe.json.get('key').get('a')
        event.shaped(Item.of(out), [' a ', ' a ', ' a '], {a: Ingredient.of(input)}).noMirror().noShrink().id(`kubejs:${recipe.getId().replace(':', '/')}`)
        event.remove({id: recipe.getId()})
    })
})
