ServerEvents.tags('item', event => {
    event.add('minecraft:boats', /byg:\w+?_boat/)
    event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
    event.add('forge:cheese', '#forge:cheeses')
    // event.add('forge:plastic', 'pneumaticcraft:plastic')

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

    // #c:hidden_from_recipe_viewers
    // event.add('c:hidden_from_recipe_viewers', 'enderio:filled_soul_vial')
    global.hiddenItems.forEach(record => {
        let name = (record.name || record.hidden) + ''
        const i = name.indexOf(':')
        let mod = ''
        if(i > 0) {
            mod = name.substring(0, i).replace(/\W/g, '') + '/'
            name = name.substring(i + 1)
        }
        name = name.replace(/\W/g, '')
        event.add(`kubejs:${mod}${name}`, record.tagged)
        event.add(`kubejs:${mod}${name}`, record.hidden)
    })
})


ServerEvents.tags('block', event => {
    event.add('forge:relocation_not_supported',
        [
            /productivebees:.+/,
            'minecraft:beehive',
            'minecraft:bee_nest',
            /cataclysm:.+/,
            /integrateddynamics:.+/,
            '@waystones'
        ])
    event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
    event.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
    event.add('forge:storage_blocks/uraninite', 'powah:uraninite_block');


    const stones = event.get('minecraft:base_stone_overworld').getObjectIds()
    stones.forEach(stone => {
        event.remove('endermanoverhaul:cave_enderman_holdable', stone);
    })

    event.add('entangled:invalid_targets', ['@megacells','@expatternprovider','@cabletiers','@ae2','@refinedstorage'])
    event.add('create:non_movable',['@sophisticatedstorage', '#forge:relocation_not_supported'])
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
