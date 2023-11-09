ServerEvents.recipes(event => {
  event.remove({ id: 'rftoolsbuilder:builder' })
  event.shaped('rftoolsbuilder:builder', ['aea', 'rmr', 'ara'], {
    a: 'minecraft:diamond_pickaxe',
    e: '#forge:ender_pearls',
    r: '#forge:storage_blocks/redstone',
    m: 'rftoolsbase:machine_frame'
  })
})
