ServerEvents.recipes(e=> {
    e.remove({id: 'industrialforegoing:ore_laser_base'})
    e.shaped('industrialforegoing:ore_laser_base', ['PTP','TFT','GRG'],{
        P: 'industrialforegoing:plastic',
        T: 'minecraft:netherite_pickaxe',
        F: 'industrialforegoing:machine_frame_advanced',
        G: '#forge:gears/diamond',
        R: 'minecraft:redstone'
    }).id('kubejs:industrialforegoings/ore_laser_drill')
})
