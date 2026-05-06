'use strict';
const {Item} = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //ambil data item semua, untuk akses id nya buat FK item_id
    const items = await Item.findAll();
    //loop sebanyak 20 data
    let dummyData = [];
    for (let index = 1; index <= 20; index++) {
      //mengambil secara acak id dari data item
      const itemId = items[Math.floor(Math.random()*items.length)];
      //match random : menghasilkan angka 0-1 (termasuk desimal), items.length : itung jumlah item
      //contoh : hasil random 0.5, length itemsnya 3
      //0.5 * 3 = 1.5 : kemudian di match.floor diambil anghka sebelum koma =  1 jadi item_id atau 0.9 * 3 = 2.7 jadi item_id nya 2
      let data = {
        item_id: itemId.id, //itemId isinya full data item yang indenya antara 0-2 hasil dari random, itemId berisi mulai dari name, image,stock,id yang dipake bagian idnya jadi (.id)
        name: `peminjam ke-${index}`,
        total_item: 1,
        date: new Date(), 
        createdAt: new Date(),
        updatedAt: new Date()
      }
      dummyData.push(data); //simpan data ke arraay
    }
    //array diinsert
    await queryInterface.bulkInsert('Loans', dummyData)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Loans', null, {})
    
  }
};
