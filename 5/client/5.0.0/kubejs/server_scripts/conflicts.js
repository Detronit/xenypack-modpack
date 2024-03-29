ServerEvents.tags('item', event => {
  // event.add('blue_skies:planks', /blue_skies:.+?_planks/)
  event.add('byg:planks', /byg:.+?_planks/)
})

ServerEvents.recipes(event => {
  // wool slabs
  // event.forEachRecipe({ type: 'minecraft:crafting_shaped', id: /absentbydesign:slab_wool_.+/ }, recipe => {
  //   let out = recipe.json.get('result')
  //   let input = recipe.json.get('key').get('#')
  //   event.shaped(Item.of(out), ['   ', '###', '   '], { '#': Ingredient.of(input) }).noMirror().noShrink().id(`kubejs:${recipe.getId().replace(':', '/')}`)
  //   event.remove({ id: recipe.getId() })
  // })

  // Structurize / Construction Wand
  // event.remove({ id: 'structurize:sceptergold' })
  // event.shaped('structurize:sceptergold', ['C  ', ' S ', '  S'], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:structurize/sceptergold`)
  // event.remove({ id: 'constructionwand:stone_wand' })
  // event.shaped('constructionwand:stone_wand', ['  C', ' S ', 'S  '], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:constructionwand/stone_wand`)
  // event.remove({ id: 'structurize:sceptersteel' })
  // event.shaped('structurize:sceptersteel', ['C  ', ' S ', '  S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:structurize/sceptersteel`)
  // event.remove({ id: 'constructionwand:iron_wand' })
  // event.shaped('constructionwand:iron_wand', ['  C', ' S ', 'S  '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:constructionwand/iron_wand`)

  // Blue Skies tools
  // let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))
  // event.forEachRecipe({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
  //   let json = recipe.json
  //   let key = json.get('key')
  //   key.add('X', planks.toJson())
  //   json.add('key', key)
  //   recipe.json = json
  // })
  // event.forEachRecipe({ id: 'minecraft:stick' }, recipe => {
  //   let json = recipe.json
  //   let key = json.get('key')
  //   key.add('#', planks.toJson())
  //   json.add('key', key)
  //   recipe.json = json
  // })

  // let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  // event.forEachRecipe({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
  //   let json = recipe.json
  //   let key = json.get('key')
  //   key.add('X', cobble.toJson())
  //   json.add('key', key)
  //   recipe.json = json
  // })

  // So many crafting tables
  // let tablePlanks = planks.subtract(Ingredient.of('#byg:planks'))
  // event.forEachRecipe({ id: 'minecraft:crafting_table' }, recipe => {
  //   let json = recipe.json
  //   let key = json.get('key')
  //   key.add('#', tablePlanks.toJson())
  //   json.add('key', key)
  //   recipe.json = json
  // })

  // Rechiseled Chisel / Croptopia Knife
  event.remove({ id: 'rechiseled:chisel' })
  event.shaped('rechiseled:chisel', ['C ', ' S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:rechiseled/chisel`)
  // event.remove({ id: 'croptopia:knife' })
  // event.shaped('croptopia:knife', [' C', 'S '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:croptopia/knife`)

  // Mangrove ABD plank wall (match other plank wall recipes)
  // event.remove({ id: 'absentbydesign:wall_mangrove_planks' })
  // event.shaped('absentbydesign:wall_mangrove_planks', ['   ', '###', '# #'], { '#': 'minecraft:mangrove_planks' })

  // Remove minecraft recipes, mods add better versions

  // Tiny Coal
  // event.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  // event.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })
})
