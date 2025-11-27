ServerEvents.recipes(event => {
  event.remove({ id: 'rftoolsbuilder:builder' })
  event.shaped('rftoolsbuilder:builder', ['aea', 'rmr', 'ana'], {
    a: 'minecraft:diamond_pickaxe',
    e: 'minecraft:ender_eye',
    r: '#forge:storage_blocks/redstone',
    m: 'rftoolsbase:machine_frame',
    n: '#forge:ingots/netherite'
  })
})
