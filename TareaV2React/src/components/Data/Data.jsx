export let roles = [
    { role: 'User', id:1, update: 'X', modify: '', insert: 'X', delete:"X" },
    { role: 'Admin', id:2, update: 'X', modify: 'X', insert: '', delete:"" },
    { role: 'Gestor_DB', id:3, update: '', modify: '', insert: 'X', delete:"X" },
    { role: 'Super Admin', id:4, update: '', modify: 'X', insert: 'X', delete:"X" },
  ]
  export const permissions = [
    { 
        entity: 'Project',
        entityDB: "Data Base",
        entityG: "Gaming",
        id:1, 
        perm_in:"Insert",
        perm_de:"Delete",
        perm_up:"Read_Access",
        perm_mo:"BD_Read",
    },
  ]