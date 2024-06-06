ServerEvents.tags('item', event => {
  event.add('refinedstorage:silicon', '#forge:silicon')
})

ServerEvents.recipes(event => {
  // silicon unifying
  /* hold for tag fix
  event.replaceInput({}, '#refinedstorage:silicon', '#forge:silicon')
  */

  // Infinite Booster
  // event.remove({ id: 'rsinfinitybooster:infinity_card' })
  // event.shaped('rsinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
  //   U: '#forge:obsidian',
  //   B: 'refinedstorage:range_upgrade',
  //   E: '#forge:plates/enderium',
  //   N: 'minecraft:netherite_ingot'
  // }).id('kubejs:rsinfinitybooster/infinity_card')


  // Crafters
  event.remove({ id: 'extrastorage:iron_crafter' })
  event.shaped('extrastorage:iron_crafter', ['B B', 'PCP', 'B B'], {
    B: '#forge:storage_blocks/iron',
    P: 'refinedstorage:improved_processor',
    C: '#refinedstorage:crafter'
  }).id('kubejs:extrastorage/iron_crafter')
  event.remove({ id: 'extrastorage:gold_crafter' })
  event.shaped('extrastorage:gold_crafter', ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/gold',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:iron_crafter'
  }).id('kubejs:extrastorage/gold_crafter')
  event.remove({ id: 'extrastorage:diamond_crafter' })
  event.shaped('extrastorage:diamond_crafter', ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:gold_crafter'
  }).id('kubejs:extrastorage/diamond_crafter')
  event.remove({ id: 'extrastorage:netherite_crafter' })
  event.shaped('extrastorage:netherite_crafter', ['BSB', 'PCP', 'B B'], {
    S: '#forge:chests',
    B: '#forge:storage_blocks/netherite',
    P: 'extrastorage:neural_processor',
    C: 'extrastorage:diamond_crafter'
  }).id('kubejs:extrastorage/netherite_crafter')

  /* Possible Future Addition
  event.remove({ id: 'creativecrafter:creative_crafter' })
  event.shaped('creativecrafter:creative_crafter', ['BUB', 'PCP', 'BUB'], {
    B: '#forge:storage_blocks/netherite',
    P: 'extradisks:withering_processor',
    C: 'extrastorage:netherite_crafter',
    U: '#forge:ingots/unobtainium'
  }).id('kubejs:creativecrafter/creative_crafter')
  */

  // Cable Tiers
  // Modify recipes to take half as many of previous tier
  event.forEachRecipe({ mod: 'cabletiers' }, recipe => {
    let pattern = recipe.json.get('pattern')
    let center = pattern.get(1).getAsString()
    pattern.set(1, center.replace(center.substring(0, 1), ' '))
    recipe.json.add('pattern', pattern)
    if (recipe.getId().contains('creative')) {
      let key = recipe.json.get('key')
      key.add(center.substring(1, 2), Ingredient.of('extradisks:withering_processor').toJson())
      recipe.json.add('key', key)
    }
  })
})

