ServerEvents.tags('item', event => {
    event.add('minecraft:boats', /byg:\w+?_boat/)
    event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
    event.add('forge:cheese', '#forge:cheeses')
    // event.add('forge:plastic', 'pneumaticcraft:plastic')

    //temp byg fix until above 2.0.0.13
    event.add('c:black_sand', '#forge:black_sand')
    event.add('c:white_sand', '#forge:white_sand')
    event.add('c:blue_sand', '#forge:blue_sand')
    event.add('c:purple_sand', '#forge:purple_sand')
    event.add('c:pink_sand', '#forge:pink_sand')

    event.add('curios:back', ['mekanism:jetpack'])
    // event.add('curios:body', ['mekanism:free_runners'])

    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    event.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard');
    // e.add('forge:seeds', ['immersiveengineering:seed']); //'bluepower:flax_seeds'
})

ServerEvents.tags('block', event => {
    event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
    // event.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
    event.add('forge:relocation_not_supported',
        [
            /productivebees:.+/,
            'minecraft:beehive',
            'minecraft:bee_nest',
            /cataclysm:.+/,
            /integrateddynamics:.+/,
            '@waystones'
        ])
    event.add('forge:storage_blocks/uraninite', 'powah:uraninite_block');

})

ServerEvents.tags('entity_type', event => {
    event.add('forge:bosses', [/cataclysm:.+/])
    event.add('kubejs:mob_blacklist', [/productivebees:.+/, '#forge:bosses'])
    event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
    event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')

    event.add('industrialforegoing:mob_duplicator_blacklist',
        ['#kubejs:mob_blacklist', 'minecraft:iron_golem', 'minecraft:villager', 'minecraft:wandering_trader', 'minecraft:evoker', 'minecraft:vindicator']
    )
    event.add('industrialforegoing:mob_crusher_blacklist', '#kubejs:mob_blacklist')
    event.add('industrialforegoing:mob_imprisonment_tool_blacklist', '#kubejs:mob_blacklist')
})



ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water', [
        'createaddition:flowing_seed_oil', 'createaddition:seed_oil',
        'createaddition:flowing_bioethanol', 'createaddition:bioethanol'
    ])
})