ServerEvents.recipes(e => {
    e.replaceInput(
        {output: 'industrialforegoing:ore_laser_base'},
        'industrialforegoing:machine_frame_advanced',
        'industrialforegoing:machine_frame_supreme'
    )

    e.replaceInput(
        {output: 'industrialforegoing:biofuel_generator'}, // Arg 1: the filter
        'industrialforegoing:machine_frame_pity',            // Arg 2: the item to replace
        'industrialforegoing:machine_frame_simple'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    e.replaceInput(
        {output: 'industrialforegoing:fermentation_station'}, 
        'industrialforegoing:machine_frame_simple',    
        'industrialforegoing:machine_frame_advanced',            
    )

    e.remove({id: 'industrialforegoing:dissolution_chamber/mycelial_reactor'})
    e.custom({
        "input": [
            {
                "tag": "forge:plastic"
            },
            {
                "tag": "industrialforegoing:machine_frame/supreme"
            },
            {
                "tag": "forge:plastic"
            },
            {
                "item": "minecraft:netherite_ingot"
            },
            {
                "item": "minecraft:netherite_ingot"
            },
            {
                "item": "mekanism:pellet_plutonium"
            },
            {
                "item": "minecraft:nether_star"
            },
            {
                "tag": "mekanism:pellet_plutonium"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:500}",
        "processingTime": 600,
        "output": {
            "item": "industrialforegoing:mycelial_reactor",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })


    e.remove({id: 'industrialforegoing:dissolution_chamber/infinity_drill'})
    e.custom({
        "input": [
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:diamond_shovel"
            },
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "industrialforegoing:range_addon11"
            },
            {
                "tag": "forge:gears/gold"
            },
            {
                "item": "mekanism:atomic_disassembler"
            },
            {
                "tag": "forge:gears/gold"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:2000}",
        "processingTime": 400,
        "output": {
            "item": "industrialforegoing:infinity_drill",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })


    e.remove({id: 'industrialforegoing:dissolution_chamber/infinity_hammer'})
    e.custom({
        "input": [
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:diamond_sword"
            },
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:diamond_axe"
            },
            {
                "item": "industrialforegoing:range_addon11"
            },
            {
                "tag": "forge:gears/gold"
            },
            {
                "item": "mekanism:atomic_disassembler"
            },
            {
                "tag": "forge:gears/gold"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:2000}",
        "processingTime": 400,
        "output": {
            "item": "industrialforegoing:infinity_hammer",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })

    e.remove({id: 'industrialforegoing:dissolution_chamber/infinity_launcher'})
    e.custom({
        "input": [
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "mekanism:electric_bow"
            },
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "industrialforegoing:mob_imprisonment_tool"
            },
            {
                "item": "industrialforegoing:range_addon11"
            },
            {
                "tag": "forge:gears/gold"
            },
            {
                "item": "minecraft:end_rod"
            },
            {
                "tag": "forge:gears/gold"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:2000}",
        "processingTime": 400,
        "output": {
            "item": "industrialforegoing:infinity_launcher",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })

    e.remove({id: 'industrialforegoing:dissolution_chamber/infinity_saw'})
    e.custom({
        "input": [
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:diamond_pickaxe"
            },
            {
                "item": "minecraft:diamond_axe"
            },
            {
                "item": "minecraft:diamond_axe"
            },
            {
                "item": "industrialforegoing:range_addon11"
            },
            {
                "tag": "forge:gears/gold"
            },
            {
                "item": "mekanism:atomic_disassembler"
            },
            {
                "tag": "forge:gears/gold"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:2000}",
        "processingTime": 400,
        "output": {
            "item": "industrialforegoing:infinity_saw",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })

    e.remove({id: 'industrialforegoing:dissolution_chamber/infinity_trident'})
    e.custom({
        "input": [
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:trident"
            },
            {
                "item": "minecraft:diamond_block"
            },
            {
                "item": "minecraft:diamond_hoe"
            },
            {
                "item": "industrialforegoing:range_addon11"
            },
            {
                "tag": "forge:gears/gold"
            },
            {
                "item": "minecraft:sea_lantern"
            },
            {
                "tag": "forge:gears/gold"
            },
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 400,
        "output": {
            "item": "industrialforegoing:infinity_trident",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })

    e.remove({id: 'industrialforegoing:dissolution_chamber/infinity_backpack'})
    e.custom({
        "input": [
            {
                "item": "industrialforegoing:common_black_hole_unit"
            },
            {
                "tag": "forge:gears/diamond"
            },
            {
                "item": "industrialforegoing:common_black_hole_unit"
            },
            {
                "item": "industrialforegoing:common_black_hole_tank"
            },
            {
                "item": "industrialforegoing:common_black_hole_tank"
            },
            {
                "tag": "forge:gears/gold"
            },
            {
                "item": "sophisticatedbackpacks:netherite_backpack"
            },
            {
                "tag": "forge:gears/gold"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:2000}",
        "processingTime": 400,
        "output": {
            "item": "industrialforegoing:infinity_backpack",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    })
})
