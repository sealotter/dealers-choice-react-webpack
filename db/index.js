const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:banana794@localhost/brewery_webpack')
const {STRING, UUIDV4, UUID} = Sequelize
const faker = require('faker')


const Brewery = conn.define('brewery', {
    id: {
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

Brewery.generateRandom = function() {
    return this.create({name: faker.company.companyName()})
}

const syncAndSeed = async() => {
    try{
        await conn.sync({force: true})
        const brewing = await Brewery.create({name: 'Brewing Company'})
        const barrel = await Brewery.create({name: 'Barrel Brewing Co.'})
        const bros = await Brewery.create({name: 'Bros and Barrels'})
        const bruster = await Brewery.create({name: 'Bruster Brewing Co.'})
        const acres = await Brewery.create({name: '12 Acres Brewing Company'})
        
    }catch(ex) {
        console.log(ex)
    }
}


module.exports = {
    conn,
    syncAndSeed,
    models : {
        Brewery
       
    }


}

